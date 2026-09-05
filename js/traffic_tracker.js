/**
 * TembusPTN Real-Time Traffic & Visitor Tracker
 * Menghubungkan aktivitas pengunjung (online status, halaman aktif, perangkat, geolokasi)
 * secara aman dan non-blocking ke /api/traffic.
 */

(function (window) {
  'use strict';

  const STORAGE_KEY_VID = "tembusptn_traffic_vid";
  const STORAGE_KEY_SID = "tembusptn_traffic_sid";
  const LOCAL_CACHE_LOG = "tembusptn_local_traffic_cache";
  const HEARTBEAT_INTERVAL = 30000; // 30 detik
  const API_ENDPOINT = "/api/traffic";

  let heartbeatTimer = null;
  let currentTab = "beranda";
  let sessionStartTime = Date.now();
  let lastActiveTime = Date.now();
  let isPageVisible = true;

  // 1. Generate / Retrieve Persistent Visitor ID (First-Party UUID)
  function getVisitorId() {
    try {
      let vid = localStorage.getItem(STORAGE_KEY_VID);
      if (!vid) {
        vid = "vid_" + Date.now().toString(36) + "_" + Math.random().toString(36).substring(2, 9);
        localStorage.setItem(STORAGE_KEY_VID, vid);
      }
      return vid;
    } catch (e) {
      return "vid_fallback_" + Math.random().toString(36).substring(2, 9);
    }
  }

  // 2. Generate / Retrieve Current Session ID
  function getSessionId() {
    try {
      let sid = sessionStorage.getItem(STORAGE_KEY_SID);
      if (!sid) {
        sid = "sid_" + Date.now().toString(36) + "_" + Math.random().toString(36).substring(2, 7);
        sessionStorage.setItem(STORAGE_KEY_SID, sid);
      }
      return sid;
    } catch (e) {
      return "sid_fallback";
    }
  }

  // 3. Detect Device & Browser Information
  function detectClientEnv() {
    const ua = navigator.userAgent || "";
    let deviceType = "desktop";
    let os = "Unknown OS";
    let browser = "Unknown Browser";

    // Detect Device
    if (/tablet|ipad|playbook|silk/i.test(ua) || (navigator.maxTouchPoints > 1 && /macintosh/i.test(ua))) {
      deviceType = "tablet";
    } else if (/mobile|iphone|ipod|android|blackberry|opera mini|windows phone/i.test(ua)) {
      deviceType = "mobile";
    }

    // Detect OS
    if (/windows nt 10.0/i.test(ua)) os = "Windows 10/11";
    else if (/windows nt 6.3/i.test(ua)) os = "Windows 8.1";
    else if (/windows nt 6.1/i.test(ua)) os = "Windows 7";
    else if (/windows/i.test(ua)) os = "Windows";
    else if (/android/i.test(ua)) os = "Android";
    else if (/iphone|ipad|ipod/i.test(ua)) os = "iOS";
    else if (/mac os x/i.test(ua)) os = "macOS";
    else if (/linux/i.test(ua)) os = "Linux";

    // Detect Browser
    if (/edg\//i.test(ua)) browser = "Edge";
    else if (/opr\/|opera/i.test(ua)) browser = "Opera";
    else if (/chrome|crios/i.test(ua) && !/edg\//i.test(ua)) browser = "Chrome";
    else if (/safari/i.test(ua) && !/chrome/i.test(ua)) browser = "Safari";
    else if (/firefox|fxios/i.test(ua)) browser = "Firefox";

    // Detect Referrer / Sumber Datang
    let referrer = document.referrer || "";
    let trafficSource = "Direct";
    if (referrer) {
      if (/google\./i.test(referrer)) trafficSource = "Google Search";
      else if (/instagram\.com/i.test(referrer)) trafficSource = "Instagram";
      else if (/tiktok\.com/i.test(referrer)) trafficSource = "TikTok";
      else if (/whatsapp|\.wa\.me/i.test(referrer)) trafficSource = "WhatsApp";
      else if (/twitter\.com|x\.com/i.test(referrer)) trafficSource = "X / Twitter";
      else if (/youtube\.com/i.test(referrer)) trafficSource = "YouTube";
      else {
        try {
          trafficSource = new URL(referrer).hostname;
        } catch (e) {
          trafficSource = "External Web";
        }
      }
    }

    // Check UTM params
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get("utm_source");
      if (utmSource) trafficSource = "Campaign: " + utmSource;
    } catch (e) {}

    return {
      deviceType,
      os,
      browser,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      trafficSource,
      language: navigator.language || "id-ID"
    };
  }

  // 4. Get Current Active User (if logged in)
  function getActiveUserInfo() {
    let user = null;
    try {
      if (typeof window.getCurrentUser === "function") {
        user = window.getCurrentUser();
      }
      if (!user) {
        const activeId = localStorage.getItem("utbk_active_user_id");
        const usersStr = localStorage.getItem("utbk_users_registry");
        if (activeId && usersStr) {
          const users = JSON.parse(usersStr);
          if (users && users[activeId]) user = users[activeId];
        }
      }
      if (!user) {
        const uStr = localStorage.getItem("utbk_user") || localStorage.getItem("tembusptn_user");
        if (uStr) user = JSON.parse(uStr);
      }
      if (!user) {
        const pStr = localStorage.getItem("utbk_user_profile");
        if (pStr) {
          const p = JSON.parse(pStr);
          if (p && (p.name || p.username)) {
            user = { id: p.id || "usr_local", name: p.name, username: p.username, profile: p };
          }
        }
      }

      if (user && (user.id || user.name)) {
        const p = user.profile || user;
        return {
          isLoggedIn: true,
          id: user.id || "usr_active",
          name: user.name || p.name || "Pejuang PTN",
          username: user.username || p.username || "pejuang",
          email: user.email || p.email || "",
          avatar: p.avatar || user.avatar || "👨‍🎓",
          targetMajorName: p.targetMajorName || user.targetMajorName || "Target PTN Belum Dipilih"
        };
      }
    } catch (e) {}

    return {
      isLoggedIn: false,
      id: null,
      name: "Tamu #" + getVisitorId().slice(-4),
      username: "tamu",
      avatar: "👤",
      targetMajorName: "Belum Login"
    };
  }

  // 5. Send Ping to API
  async function sendTrafficPing(eventType = "heartbeat", extraData = {}) {
    const now = Date.now();
    lastActiveTime = now;
    const clientEnv = detectClientEnv();
    const userInfo = getActiveUserInfo();

    const payload = {
      visitorId: getVisitorId(),
      sessionId: getSessionId(),
      eventType: eventType, // 'enter', 'heartbeat', 'tab_switch', 'leave'
      timestamp: now,
      sessionStart: sessionStartTime,
      durationSeconds: Math.floor((now - sessionStartTime) / 1000),
      currentTab: currentTab,
      user: userInfo,
      clientEnv: clientEnv,
      url: window.location.href,
      path: window.location.pathname,
      ...extraData
    };

    // 1. Simpan ke local cache agar dashboard offline/preview tetap bisa melihat
    try {
      const existing = localStorage.getItem(LOCAL_CACHE_LOG);
      let list = existing ? JSON.parse(existing) : [];
      if (!Array.isArray(list)) list = [];
      // Update or append
      const idx = list.findIndex(v => v.visitorId === payload.visitorId);
      if (idx >= 0) {
        list[idx] = { ...list[idx], ...payload, lastActive: now };
      } else {
        list.unshift({ ...payload, lastActive: now });
      }
      list = list.slice(0, 100);
      localStorage.setItem(LOCAL_CACHE_LOG, JSON.stringify(list));
    } catch (e) {}

    // 2. Kirim ke Server via fetch / sendBeacon
    try {
      if (eventType === "leave" && typeof navigator.sendBeacon === "function") {
        const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
        navigator.sendBeacon(API_ENDPOINT, blob);
        return;
      }

      fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true
      }).catch(() => {
        // Silently catch network failures (offline resilience)
      });
    } catch (err) {}
  }

  // 6. Setup Event Listeners
  function initTracker() {
    // Detect initial tab
    const urlHash = window.location.hash.replace("#", "");
    if (urlHash) currentTab = urlHash;

    // Send enter ping
    sendTrafficPing("enter");

    // Setup periodic heartbeat
    if (heartbeatTimer) clearInterval(heartbeatTimer);
    heartbeatTimer = setInterval(() => {
      if (isPageVisible) {
        sendTrafficPing("heartbeat");
      }
    }, HEARTBEAT_INTERVAL);

    // Visibility change (tab minimize / background)
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        isPageVisible = false;
        sendTrafficPing("idle");
      } else {
        isPageVisible = true;
        sendTrafficPing("heartbeat");
      }
    });

    // Page unload / leave
    window.addEventListener("pagehide", () => {
      sendTrafficPing("leave");
    });
    window.addEventListener("beforeunload", () => {
      sendTrafficPing("leave");
    });

    // Intercept switchTab if global function exists
    const originalSwitchTab = window.switchTab;
    if (typeof originalSwitchTab === "function") {
      window.switchTab = function (tabName) {
        currentTab = tabName;
        sendTrafficPing("tab_switch", { currentTab: tabName });
        return originalSwitchTab.apply(this, arguments);
      };
    }

    // Listen to hashchange
    window.addEventListener("hashchange", () => {
      const newTab = window.location.hash.replace("#", "");
      if (newTab && newTab !== currentTab) {
        currentTab = newTab;
        sendTrafficPing("tab_switch", { currentTab: newTab });
      }
    });

    // Listen to login/logout state change
    window.addEventListener("tembusptn:auth_changed", () => {
      sendTrafficPing("auth_update");
    });
  }

  // Export to Global Window
  window.TrafficTracker = {
    sendPing: sendTrafficPing,
    getVisitorId,
    getSessionId,
    getActiveUserInfo,
    detectClientEnv,
    setCurrentTab: (tab) => {
      currentTab = tab;
      sendTrafficPing("tab_switch", { currentTab: tab });
    }
  };

  // Start tracker when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTracker);
  } else {
    initTracker();
  }

})(typeof window !== 'undefined' ? window : this);
