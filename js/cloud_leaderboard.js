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
  /**
   * Menerapkan data profil otoritatif dari server ke local storage & UI browser
   */
  function applyServerUserData(userId, serverUser) {
    if (!serverUser) return;

    // 1. Update ke multi-user registry (utbk_users_registry)
    if (typeof window.getAllUsers === "function" && typeof window.saveAllUsers === "function") {
      const users = window.getAllUsers();
      if (users && users[userId]) {
        if (!users[userId].profile) users[userId].profile = {};
        if (typeof serverUser.xp === "number") {
          users[userId].profile.xp = serverUser.xp;
          if (serverUser.xp === 0) {
            users[userId].profile.xpHistory = [];
          } else if (Array.isArray(serverUser.xpHistory)) {
            users[userId].profile.xpHistory = serverUser.xpHistory;
          }
        }
        if (serverUser.streak !== undefined) users[userId].profile.streak = serverUser.streak;
        if (serverUser.highestScore !== undefined) users[userId].profile.highestScore = serverUser.highestScore;
        window.saveAllUsers(users);
      }
    }

    // 2. Update ke single-user legacy storage (utbk_user_profile) jika akun ini sedang aktif
    const activeId = typeof window.getActiveUserId === "function" ? window.getActiveUserId() : null;
    if (!activeId || activeId === userId) {
      try {
        const raw = localStorage.getItem("utbk_user_profile");
        if (raw) {
          const p = JSON.parse(raw);
          if (typeof serverUser.xp === "number") {
            p.xp = serverUser.xp;
            if (serverUser.xp === 0) {
              p.xpHistory = [];
            } else if (Array.isArray(serverUser.xpHistory)) {
              p.xpHistory = serverUser.xpHistory;
            }
          }
          if (serverUser.streak !== undefined) p.streak = serverUser.streak;
          if (serverUser.highestScore !== undefined) p.highestScore = serverUser.highestScore;
          localStorage.setItem("utbk_user_profile", JSON.stringify(p));
        }
      } catch (e) {}

      // 3. Render ulang komponen antarmuka yang relevan seketika
      if (typeof window.renderHeaderStats === "function") {
        try { window.renderHeaderStats(); } catch(e) {}
      }
      if (typeof window.renderProfileView === "function") {
        try { window.renderProfileView(); } catch(e) {}
      }
      if (typeof window.renderUserProfile === "function") {
        try { window.renderUserProfile(); } catch(e) {}
      }
      if (typeof window.renderDashboard === "function") {
        try { window.renderDashboard(); } catch(e) {}
      }
    }
  }

  /**
   * Menangani pembersihan sesi lokal jika akun telah dihapus permanen oleh Admin
   */
  function handleUserDeletedByAdmin(userId) {
    if (typeof window.getAllUsers === "function" && typeof window.saveAllUsers === "function") {
      const users = window.getAllUsers();
      if (users && users[userId]) {
        delete users[userId];
        window.saveAllUsers(users);
      }
    }
    const activeId = typeof window.getActiveUserId === "function" ? window.getActiveUserId() : null;
    if (!activeId || activeId === userId) {
      localStorage.removeItem("utbk_active_user_id");
      localStorage.removeItem("utbk_user_profile");
      if (typeof window.onUserSessionChanged === "function") {
        window.onUserSessionChanged();
      } else {
        location.reload();
      }
    }
  }

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
        const lastEarnedAt = profile.lastEarnedAt || (
          Array.isArray(profile.xpHistory) && profile.xpHistory.length > 0
            ? (profile.xpHistory[profile.xpHistory.length - 1].timestamp || 0)
            : 0
        );

        const payload = {
          id: user.id,
          name: user.name || profile.name || "Pejuang PTN",
          username: (user.username || profile.username || "pejuang").toLowerCase().trim(),
          email: (user.email || (profile && profile.email) || "").toLowerCase().trim(),
          avatar: profile.avatar || "👨‍🎓",
          targetMajorName: profile.targetMajorName || "Target PTN Belum Dipilih",
          xp: profile.xp || 0,
          streak: profile.streak || 0,
          highestScore: profile.highestScore || 0,
          xpHistory: Array.isArray(profile.xpHistory) ? profile.xpHistory.slice(-50) : [],
          lastEarnedAt: lastEarnedAt,
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
          const json = await response.json();
          const serverUser = json && (json.user || json.authoritativeUser);

          // Rekonsiliasi dua arah: Jika cloud memiliki nilai XP otoritatif (misal diubah oleh admin atau reset)
          if (serverUser && typeof serverUser.xp === "number" && serverUser.xp !== profile.xp) {
            console.log(`[CloudLeaderboard] Rekonsiliasi XP dari Cloud: lokal=${profile.xp}, cloud=${serverUser.xp}`);
            applyServerUserData(user.id, serverUser);
          }

          localStorage.setItem(LAST_SYNC_KEY, Date.now().toString());
          // Update cache lokal pengguna juga
          const cachedUsers = getLocalCachedUsers();
          cachedUsers[user.id] = serverUser || payload;
          setLocalCachedUsers(cachedUsers);
          return { success: true, user: serverUser || payload };
        } else if (response.status === 403 || response.status === 404) {
          try {
            const errJson = await response.json();
            if (errJson && (errJson.deleted || errJson.code === "USER_DELETED_BY_ADMIN")) {
              console.warn("[CloudLeaderboard] Pengguna telah dihapus oleh Admin. Menghapus sesi lokal...");
              handleUserDeletedByAdmin(user.id);
              return { success: false, deleted: true };
            }
          } catch(e) {}
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
    const activeId = activeUser ? activeUser.id : "";

    try {
      const url = `${API_ENDPOINT}?period=${encodeURIComponent(period)}&userId=${encodeURIComponent(activeId)}&_t=${Date.now()}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      });

      if (response.ok) {
        const json = await response.json();

        // Rekonsiliasi instan akun aktif dari currentUserState yang dikembalikan server
        if (json && json.currentUserState && activeUser) {
          const cloudMe = json.currentUserState;
          const currentLocalProf = typeof window.getUserProfile === "function" ? window.getUserProfile() : (activeUser.profile || {});
          if (typeof cloudMe.xp === "number" && cloudMe.xp !== currentLocalProf.xp) {
            console.log(`[CloudLeaderboard] Rekonsiliasi status pengguna aktif via currentUserState: lokal=${currentLocalProf.xp}, cloud=${cloudMe.xp}`);
            applyServerUserData(activeUser.id, cloudMe);
          }
        }

        if (json && Array.isArray(json.data)) {
          // Syarat leaderboard: Hanya masukkan pengguna dengan XP > 0
          let list = json.data.filter(item => (item.xp || 0) > 0);
          list.sort((a, b) => b.xp - a.xp);
          list.forEach((item, idx) => { item.rank = idx + 1; });

          // Cek jika akun aktif ada di daftar leaderboard dan XP berbeda
          if (activeUser) {
            const foundMe = list.find(item => item.id === activeUser.id);
            if (foundMe) {
              const currentLocalProf = typeof window.getUserProfile === "function" ? window.getUserProfile() : (activeUser.profile || {});
              if (typeof foundMe.xp === "number" && foundMe.xp !== currentLocalProf.xp) {
                applyServerUserData(activeUser.id, foundMe);
              }
            }
          }

          // Simpan ke cache browser untuk offline-first resilience
          try {
            localStorage.setItem(CACHE_KEY_PREFIX + period, JSON.stringify({
              data: list,
              totalUsers: list.length,
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
            totalUsers: formatted.length,
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
        if (parsed && Array.isArray(parsed.data)) {
          const validList = parsed.data.filter(item => (item.xp || 0) > 0);
          if (validList.length > 0) {
            validList.sort((a, b) => b.xp - a.xp);
            validList.forEach((item, idx) => { item.rank = idx + 1; });
            const formatted = validList.map(item => ({
              ...item,
              isUser: activeUser && item.id === activeUser.id,
              name: (activeUser && item.id === activeUser.id) ? (item.rawName || item.name) + " (Kamu)" : (item.rawName || item.name)
            }));
            return {
              source: "cache",
              status: "cached",
              totalUsers: formatted.length,
              data: formatted
            };
          }
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

  /**
   * Memeriksa ketersediaan Nama Lengkap, Email dan Username ke Cloud Database secara realtime
   * @param {string|null} username
   * @param {string|null} email
   * @param {string|null} name
   * @param {string|null} excludeUserId
   * @returns {Promise<{available: boolean, nameAvailable: boolean, usernameAvailable: boolean, emailAvailable: boolean, field: string|null, message: string}>}
   */
  async function checkAvailability(username, email, name = null, excludeUserId = null) {
    if (typeof name === "string" && name.startsWith("usr_") && !excludeUserId) {
      excludeUserId = name;
      name = null;
    }
    try {
      const u = encodeURIComponent((username || "").trim().toLowerCase());
      const e = encodeURIComponent((email || "").trim().toLowerCase());
      const n = encodeURIComponent((name || "").trim());
      const ex = excludeUserId ? `&exclude=${encodeURIComponent(excludeUserId)}` : '';
      const url = `${API_ENDPOINT}?check=availability&username=${u}&email=${e}&name=${n}${ex}&_t=${Date.now()}`;
      
      const res = await fetch(url, { method: "GET" });
      if (res.status === 200 || res.status === 409) {
        const data = await res.json();
        return {
          available: Boolean(data.available),
          nameAvailable: Boolean(data.nameAvailable !== false),
          usernameAvailable: Boolean(data.usernameAvailable),
          emailAvailable: Boolean(data.emailAvailable),
          field: data.field || null,
          message: data.message || (data.available ? "Kredensial tersedia" : "Kredensial sudah terdaftar")
        };
      }
    } catch(err) {
      console.warn("Cloud checkAvailability error (offline mode fallback):", err.message);
    }
    // Jika offline / error jaringan, fallback return available = true agar tidak memblokir pengguna
    return { available: true, nameAvailable: true, usernameAvailable: true, emailAvailable: true, field: null, message: "OK" };
  }

  /**
   * Reset seluruh pengguna dan leaderboard di Cloud database
   */
  async function resetCloudLeaderboard() {
    try {
      const res = await fetch(`${API_ENDPOINT}?action=reset`, { method: "POST" });
      if (res.ok) {
        const data = await res.json();
        // Bersihkan cache lokal cloud
        setLocalCachedUsers({});
        return data;
      }
    } catch (err) {
      console.warn("Reset cloud leaderboard error:", err);
    }
    setLocalCachedUsers({});
    return { status: "success" };
  }

  // Export ke Window Global
  window.CloudLeaderboard = {
    syncUserToCloud,
    applyServerUserData,
    handleUserDeletedByAdmin,
    fetchGlobalLeaderboard,
    checkAvailability,
    resetCloudLeaderboard,
    startPolling,
    stopPolling,
    API_ENDPOINT
  };

})(typeof window !== 'undefined' ? window : this);

