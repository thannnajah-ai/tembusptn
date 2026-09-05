// Cloud Leaderboard Service (TembusPTN Real-Time Cloud Sync)
// Menghubungkan seluruh perangkat pengguna (HP, Laptop, PC) ke papan peringkat nasional terpusat

(function (window) {
  'use strict';

  const CACHE_KEY_PREFIX = "utbk_cloud_lb_cache_";
  const LAST_SYNC_KEY = "utbk_cloud_last_sync";
  let syncTimeout = null;
  let pollingInterval = null;
  let isSyncing = false;
  let lastFetchedData = null;

  // Endpoint API default (Cloudflare Pages Function /api/leaderboard)
  const API_ENDPOINT = "/api/leaderboard";

  /**
   * Mengirim update profil & progres XP pengguna saat ini ke Cloud Database
   * @param {Object} user - Objek akun pengguna (id, name, username)
   * @param {Object} profile - Objek profil pengguna (xp, streak, targetMajorName, avatar, xpHistory, dll.)
   * @param {boolean} immediate - Jika true, kirim seketika tanpa debounce
   */
  async function syncUserToCloud(user, profile, immediate = false) {
    if (!user || !user.id || !profile) return;

    if (syncTimeout) {
      clearTimeout(syncTimeout);
      syncTimeout = null;
    }

    const doSync = async () => {
      try {
        isSyncing = true;
        const payload = {
          id: user.id,
          name: user.name || profile.name || "Pejuang PTN",
          username: user.username || "pejuang",
          avatar: profile.avatar || "👨‍🎓",
          targetMajorName: profile.targetMajorName || "Target PTN Belum Dipilih",
          xp: profile.xp || 0,
          streak: profile.streak || 0,
          highestScore: profile.highestScore || 0,
          xpHistory: Array.isArray(profile.xpHistory) ? profile.xpHistory.slice(-50) : [],
          timestamp: Date.now()
        };

        const response = await fetch(API_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          localStorage.setItem(LAST_SYNC_KEY, Date.now().toString());
          // Update cache lokal pengguna juga
          const cachedUsers = getLocalCachedUsers();
          cachedUsers[user.id] = payload;
          setLocalCachedUsers(cachedUsers);
        }
      } catch (err) {
        // Mode offline atau server belum siap: simpan ke antrian cache lokal
        console.warn("Cloud leaderboard sync pending (offline/local fallback):", err.message);
      } finally {
        isSyncing = false;
      }
    };

    if (immediate) {
      return await doSync();
    } else {
      // Debounce 600ms agar efisien saat menjawab banyak soal
      syncTimeout = setTimeout(doSync, 600);
    }
  }

  /**
   * Mengambil data Leaderboard Nasional dari Cloud untuk periode tertentu
   * @param {string} period - 'hari' | 'minggu' | 'bulan'
   * @param {boolean} forceRefresh - Abaikan cache memori
   * @returns {Promise<Array>} Daftar pengguna terurut
   */
  async function fetchGlobalLeaderboard(period = 'hari', forceRefresh = false) {
    const activeUser = typeof window.getCurrentUser === "function" ? window.getCurrentUser() : null;

    try {
      const url = `${API_ENDPOINT}?period=${encodeURIComponent(period)}&_t=${Date.now()}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      });

      if (response.ok) {
        const json = await response.json();
        if (json && Array.isArray(json.data)) {
          let list = json.data;

          // Simpan ke cache browser untuk offline-first resilience
          try {
            localStorage.setItem(CACHE_KEY_PREFIX + period, JSON.stringify({
              data: list,
              totalUsers: json.totalUsers || list.length,
              timestamp: Date.now()
            }));
          } catch(e) {}

          // Format dan tandai pengguna saat ini
          const formatted = list.map(item => ({
            ...item,
            isUser: activeUser && item.id === activeUser.id,
            name: (activeUser && item.id === activeUser.id) ? (item.rawName || item.name) + " (Kamu)" : (item.rawName || item.name)
          }));

          lastFetchedData = formatted;
          return {
            source: "cloud",
            status: "online",
            totalUsers: json.totalUsers || formatted.length,
            data: formatted
          };
        }
      }
    } catch (err) {
      console.warn("Could not fetch cloud leaderboard, falling back to cache/local:", err.message);
    }

    // Fallback 1: Cek cache cloud yang tersimpan di localStorage
    try {
      const cached = localStorage.getItem(CACHE_KEY_PREFIX + period);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed && Array.isArray(parsed.data) && parsed.data.length > 0) {
          const formatted = parsed.data.map(item => ({
            ...item,
            isUser: activeUser && item.id === activeUser.id,
            name: (activeUser && item.id === activeUser.id) ? (item.rawName || item.name) + " (Kamu)" : (item.rawName || item.name)
          }));
          return {
            source: "cache",
            status: "cached",
            totalUsers: parsed.totalUsers || formatted.length,
            data: formatted
          };
        }
      }
    } catch(e) {}

    // Fallback 2: Jika server offline dan belum ada cache cloud, gunakan local registry
    if (typeof window.getLeaderboardDataLocal === "function") {
      const localData = window.getLeaderboardDataLocal(period);
      return {
        source: "local",
        status: "offline",
        totalUsers: localData.length,
        data: localData
      };
    }

    return {
      source: "local",
      status: "empty",
      totalUsers: 0,
      data: []
    };
  }

  /**
   * Memulai polling berkala saat pengguna membuka tab Leaderboard
   */
  function startPolling(callback, intervalMs = 15000) {
    stopPolling();
    pollingInterval = setInterval(async () => {
      if (typeof callback === "function" && document.visibilityState !== "hidden") {
        callback();
      }
    }, intervalMs);
  }

  function stopPolling() {
    if (pollingInterval) {
      clearInterval(pollingInterval);
      pollingInterval = null;
    }
  }

  function getLocalCachedUsers() {
    try {
      const s = localStorage.getItem("utbk_cloud_users_sync_cache");
      return s ? JSON.parse(s) : {};
    } catch(e) {
      return {};
    }
  }

  function setLocalCachedUsers(users) {
    try {
      localStorage.setItem("utbk_cloud_users_sync_cache", JSON.stringify(users));
    } catch(e) {}
  }

  // Export ke Window Global
  window.CloudLeaderboard = {
    syncUserToCloud,
    fetchGlobalLeaderboard,
    startPolling,
    stopPolling,
    API_ENDPOINT
  };

})(typeof window !== 'undefined' ? window : this);
