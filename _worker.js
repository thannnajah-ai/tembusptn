// Cloudflare Worker / Pages Advanced Mode: _worker.js
// Melayani API Leaderboard Real-Time terpusat & menyajikan aset statis

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Content-Type": "application/json; charset=utf-8"
};

let memoryRegistry = {};
let memoryTrafficVisitors = {};
let memoryTrafficStats = {
  totalVisits: 0,
  totalPageviews: 0,
  deviceBreakdown: { desktop: 0, mobile: 0, tablet: 0 },
  browserBreakdown: {},
  tabBreakdown: {},
  locationBreakdown: {},
  hourlyTrend: {}
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 1. RUTE API LEADERBOARD
    if (url.pathname === "/api/leaderboard" || url.pathname.startsWith("/api/leaderboard")) {
      // Handle CORS Preflight
      if (request.method === "OPTIONS") {
        return new Response(null, {
          status: 204,
          headers: CORS_HEADERS
        });
      }

      const kv = env && (env.LEADERBOARD_KV || env.KV_LEADERBOARD || env.TEMBUSPTN_KV);

      // 0. RESET SELURUH DATA USER & LEADERBOARD (Cloud Purge)
      if (url.searchParams.get("action") === "reset" || request.method === "DELETE") {
        if (kv) {
          try {
            await kv.put("global_users_registry", JSON.stringify({}));
          } catch(e) {
            console.error("KV reset error:", e);
          }
        }
        memoryRegistry = {};
        return new Response(JSON.stringify({
          status: "success",
          message: "Seluruh data pengguna dan leaderboard cloud berhasil di-reset menjadi kosong (0 user).",
          totalUsers: 0,
          data: []
        }), {
          status: 200,
          headers: CORS_HEADERS
        });
      }

      // GET /api/leaderboard
      if (request.method === "GET") {
        try {
          let users = {};
          if (kv) {
            try {
              const stored = await kv.get("global_users_registry", { type: "json" });
              if (stored && typeof stored === "object") {
                users = stored;
              }
            } catch (e) {
              console.error("KV read error:", e);
            }
          } else {
            users = memoryRegistry;
          }

          // Cek ketersediaan kredensial (Realtime duplicate check: Nama, Username, Email)
          const checkMode = url.searchParams.get("check");
          if (checkMode === "availability" || checkMode === "1") {
            const checkUsername = (url.searchParams.get("username") || "").trim().toLowerCase();
            const checkEmail = (url.searchParams.get("email") || "").trim().toLowerCase();
            const excludeId = url.searchParams.get("exclude") || "";

            let usernameAvailable = true;
            let emailAvailable = true;

            for (const u of Object.values(users)) {
              if (excludeId && u.id === excludeId) continue;
              if (checkEmail && u.email && u.email.toLowerCase() === checkEmail) {
                emailAvailable = false;
              }
              if (checkUsername && u.username && u.username.toLowerCase() === checkUsername) {
                usernameAvailable = false;
              }
            }

            let message = "Kredensial tersedia";
            let conflictField = null;
            if (!emailAvailable) {
              conflictField = "email";
              message = `Email "${checkEmail}" sudah terdaftar! Silakan gunakan email lain atau langsung Masuk.`;
            } else if (!usernameAvailable) {
              conflictField = "username";
              message = `Username "@${checkUsername}" sudah digunakan! Silakan pilih username yang lain.`;
            }

            const isAvailable = usernameAvailable && emailAvailable;
            return new Response(JSON.stringify({
              status: isAvailable ? "success" : "conflict",
              available: isAvailable,
              nameAvailable: true,
              usernameAvailable,
              emailAvailable,
              field: conflictField,
              message
            }), {
              status: isAvailable ? 200 : 409,
              headers: CORS_HEADERS
            });
          }

          // Format daftar leaderboard
          const period = url.searchParams.get("period") || "hari";
          const now = Date.now();
          const oneDay = 24 * 60 * 60 * 1000;
          let cutoff = 0;
          if (period === "hari") cutoff = now - oneDay;
          else if (period === "minggu") cutoff = now - (7 * oneDay);
          else if (period === "bulan") cutoff = now - (30 * oneDay);

          const userList = Object.values(users).map(u => {
            const xpHist = Array.isArray(u.xpHistory) ? u.xpHistory : [];
            let periodXp = u.xp || 0;

            if (cutoff > 0 && xpHist.length > 0) {
              const sum = xpHist
                .filter(item => {
                  const t = item.timestamp || (item.date ? new Date(item.date).getTime() : 0);
                  return t >= cutoff;
                })
                .reduce((acc, cur) => acc + (cur.amount || 0), 0);
              if (sum > 0) {
                periodXp = Math.min(u.xp || 0, sum);
              }
            }

            return {
              id: u.id,
              name: u.name || "Pejuang PTN",
              rawName: u.name || "Pejuang PTN",
              username: u.username || "pejuang",
              avatar: u.avatar || "👨‍🎓",
              ptn: u.targetMajorName || "Target PTN Belum Dipilih",
              xp: periodXp,
              totalXp: u.xp || 0,
              streak: u.streak || 0,
              highestScore: u.highestScore || 0,
              lastUpdated: u.lastUpdated || now
            };
          });

          // Syarat leaderboard: Minimal memiliki XP > 0 (XP 0 tidak dimasukkan ke leaderboard)
          const eligibleList = userList.filter(item => (item.xp || 0) > 0);

          eligibleList.sort((a, b) => b.xp - a.xp);
          eligibleList.forEach((item, idx) => {
            item.rank = idx + 1;
          });

          return new Response(JSON.stringify({
            status: "success",
            period,
            totalUsers: eligibleList.length,
            data: eligibleList,
            timestamp: now
          }), {
            status: 200,
            headers: CORS_HEADERS
          });

        } catch (err) {
          return new Response(JSON.stringify({
            status: "error",
            message: err.message || "Internal Server Error"
          }), {
            status: 500,
            headers: CORS_HEADERS
          });
        }
      }

      // POST /api/leaderboard
      if (request.method === "POST") {
        try {
          const body = await request.json();
          if (!body || !body.id) {
            return new Response(JSON.stringify({
              status: "error",
              message: "ID pengguna diperlukan"
            }), {
              status: 400,
              headers: CORS_HEADERS
            });
          }

          const userId = body.id;
          const now = Date.now();
          const cleanName = String(body.name || "Pejuang PTN").trim().slice(0, 50);
          const cleanUsername = String(body.username || "pejuang").toLowerCase().trim().slice(0, 30);
          const cleanEmail = String(body.email || "").toLowerCase().trim().slice(0, 80);

          let currentUsers = {};
          if (kv) {
            try {
              currentUsers = (await kv.get("global_users_registry", { type: "json" })) || {};
            } catch(e) {}
          } else {
            currentUsers = memoryRegistry;
          }

          const userData = {
            id: userId,
            name: cleanName,
            username: cleanUsername,
            email: cleanEmail,
            avatar: body.avatar || "👨‍🎓",
            targetMajorName: String(body.targetMajorName || "Target PTN Belum Dipilih").slice(0, 80),
            xp: Math.max(0, parseInt(body.xp, 10) || 0),
            streak: Math.max(0, parseInt(body.streak, 10) || 0),
            highestScore: Math.max(0, parseInt(body.highestScore, 10) || 0),
            xpHistory: Array.isArray(body.xpHistory) ? body.xpHistory.slice(-50) : [],
            lastUpdated: now
          };

          currentUsers[userId] = userData;

          if (kv) {
            await kv.put("global_users_registry", JSON.stringify(currentUsers));
          } else {
            memoryRegistry[userId] = userData;
          }

          return new Response(JSON.stringify({
            status: "success",
            message: "Data pengguna berhasil disinkronisasi ke cloud",
            user: userData
          }), {
            status: 200,
            headers: CORS_HEADERS
          });

        } catch (err) {
          return new Response(JSON.stringify({
            status: "error",
            message: err.message || "Internal Server Error"
          }), {
            status: 500,
            headers: CORS_HEADERS
          });
        }
      }
    }

    // 2. RUTE API TRAFFIC ANALYTICS
    if (url.pathname === "/api/traffic" || url.pathname.startsWith("/api/traffic")) {
      if (request.method === "OPTIONS") {
        return new Response(null, {
          status: 204,
          headers: CORS_HEADERS
        });
      }

      const kv = env && (env.TEMBUSPTN_KV || env.LEADERBOARD_KV || env.KV_LEADERBOARD);

      // Reset action
      if (url.searchParams.get("action") === "reset" || request.method === "DELETE") {
        if (kv) {
          try {
            await kv.put("global_traffic_visitors", JSON.stringify({}));
            await kv.put("global_traffic_stats", JSON.stringify({
              totalVisits: 0,
              totalPageviews: 0,
              deviceBreakdown: { desktop: 0, mobile: 0, tablet: 0 },
              browserBreakdown: {},
              tabBreakdown: {},
              locationBreakdown: {},
              hourlyTrend: {}
            }));
          } catch(e) {}
        }
        memoryTrafficVisitors = {};
        memoryTrafficStats = {
          totalVisits: 0,
          totalPageviews: 0,
          deviceBreakdown: { desktop: 0, mobile: 0, tablet: 0 },
          browserBreakdown: {},
          tabBreakdown: {},
          locationBreakdown: {},
          hourlyTrend: {}
        };
        return new Response(JSON.stringify({ status: "success", message: "Traffic data reset successfully" }), {
          status: 200,
          headers: CORS_HEADERS
        });
      }

      // GET /api/traffic
      if (request.method === "GET") {
        try {
          let visitors = {};
          let stats = memoryTrafficStats;

          if (kv) {
            try {
              const storedVisitors = await kv.get("global_traffic_visitors", { type: "json" });
              if (storedVisitors && typeof storedVisitors === "object") {
                visitors = storedVisitors;
              }
              const storedStats = await kv.get("global_traffic_stats", { type: "json" });
              if (storedStats && typeof storedStats === "object") {
                stats = storedStats;
              }
            } catch (e) {
              console.error("KV read error:", e);
            }
          } else {
            visitors = memoryTrafficVisitors;
            stats = memoryTrafficStats;
          }

          const now = Date.now();
          const ONLINE_THRESHOLD_MS = 5 * 60 * 1000;

          const visitorList = Object.values(visitors).map(v => {
            const isOnline = (now - (v.lastActive || 0)) <= ONLINE_THRESHOLD_MS && v.eventType !== "leave";
            return {
              ...v,
              isOnline,
              idleMinutes: Math.floor((now - (v.lastActive || 0)) / 60000)
            };
          });

          visitorList.sort((a, b) => (b.lastActive || 0) - (a.lastActive || 0));

          const onlineNowCount = visitorList.filter(v => v.isOnline).length;
          const uniqueCount = Object.keys(visitors).length;
          const loggedInUsersCount = visitorList.filter(v => v.user && v.user.isLoggedIn).length;

          return new Response(JSON.stringify({
            status: "success",
            timestamp: now,
            summary: {
              onlineNow: onlineNowCount,
              uniqueVisitors: uniqueCount,
              totalVisits: Math.max(stats.totalVisits || 0, uniqueCount),
              totalPageviews: stats.totalPageviews || 0,
              loggedInUsers: loggedInUsersCount,
              guestVisitors: uniqueCount - loggedInUsersCount,
              deviceBreakdown: stats.deviceBreakdown || { desktop: 0, mobile: 0, tablet: 0 },
              browserBreakdown: stats.browserBreakdown || {},
              tabBreakdown: stats.tabBreakdown || {},
              locationBreakdown: stats.locationBreakdown || {},
              hourlyTrend: stats.hourlyTrend || {}
            },
            visitors: visitorList.slice(0, 150)
          }), {
            status: 200,
            headers: CORS_HEADERS
          });

        } catch (err) {
          return new Response(JSON.stringify({ status: "error", message: err.message }), {
            status: 500,
            headers: CORS_HEADERS
          });
        }
      }

      // POST /api/traffic
      if (request.method === "POST") {
        try {
          const body = await request.json();
          if (!body || !body.visitorId) {
            return new Response(JSON.stringify({ status: "error", message: "visitorId is required" }), {
              status: 400,
              headers: CORS_HEADERS
            });
          }

          const now = Date.now();
          const cf = request.cf || {};
          const rawIp = request.headers.get("cf-connecting-ip") || 
                        request.headers.get("x-forwarded-for") || 
                        "127.0.0.1";
          
          const ipParts = rawIp.split(".");
          const maskedIp = ipParts.length === 4 ? `${ipParts[0]}.${ipParts[1]}.***.***` : rawIp.slice(0, 10) + "...";

          const city = cf.city || "Indonesia";
          const country = cf.country || "ID";
          const region = cf.region || "";
          const isp = cf.asOrganization || "";

          let currentVisitors = {};
          let currentStats = memoryTrafficStats;

          if (kv) {
            try {
              currentVisitors = (await kv.get("global_traffic_visitors", { type: "json" })) || {};
              currentStats = (await kv.get("global_traffic_stats", { type: "json" })) || currentStats;
            } catch(e) {}
          } else {
            currentVisitors = memoryTrafficVisitors;
            currentStats = memoryTrafficStats;
          }

          const vid = body.visitorId;
          const isNewVisitor = !currentVisitors[vid];
          const existing = currentVisitors[vid] || {};

          const clientEnv = body.clientEnv || {};
          const devType = (clientEnv.deviceType || "desktop").toLowerCase();
          const browser = clientEnv.browser || "Other";
          const activeTab = body.currentTab || "beranda";
          const locationKey = city ? `${city}, ${country}` : country;

          currentVisitors[vid] = {
            visitorId: vid,
            sessionId: body.sessionId || existing.sessionId,
            eventType: body.eventType || "heartbeat",
            firstSeen: existing.firstSeen || now,
            lastActive: now,
            durationSeconds: (body.durationSeconds || 0) + (existing.durationSeconds || 0),
            currentTab: activeTab,
            user: body.user || existing.user || { isLoggedIn: false, name: "Tamu" },
            clientEnv: clientEnv,
            ip: maskedIp,
            location: {
              city: city,
              country: country,
              region: region,
              isp: isp
            },
            pageviews: (existing.pageviews || 0) + (body.eventType === "enter" || body.eventType === "tab_switch" ? 1 : 0)
          };

          if (isNewVisitor) {
            currentStats.totalVisits = (currentStats.totalVisits || 0) + 1;
          }
          if (body.eventType === "enter" || body.eventType === "tab_switch") {
            currentStats.totalPageviews = (currentStats.totalPageviews || 0) + 1;
          }

          if (!currentStats.deviceBreakdown) currentStats.deviceBreakdown = { desktop: 0, mobile: 0, tablet: 0 };
          if (isNewVisitor) {
            currentStats.deviceBreakdown[devType] = (currentStats.deviceBreakdown[devType] || 0) + 1;
          }

          if (!currentStats.browserBreakdown) currentStats.browserBreakdown = {};
          if (isNewVisitor) {
            currentStats.browserBreakdown[browser] = (currentStats.browserBreakdown[browser] || 0) + 1;
          }

          if (!currentStats.tabBreakdown) currentStats.tabBreakdown = {};
          currentStats.tabBreakdown[activeTab] = (currentStats.tabBreakdown[activeTab] || 0) + 1;

          if (!currentStats.locationBreakdown) currentStats.locationBreakdown = {};
          if (locationKey) {
            currentStats.locationBreakdown[locationKey] = (currentStats.locationBreakdown[locationKey] || 0) + 1;
          }

          const dateObj = new Date(now);
          const hourKey = `${dateObj.getUTCFullYear()}-${String(dateObj.getUTCMonth()+1).padStart(2,'0')}-${String(dateObj.getUTCDate()).padStart(2,'0')} ${String(dateObj.getUTCHours()).padStart(2,'0')}:00`;
          if (!currentStats.hourlyTrend) currentStats.hourlyTrend = {};
          currentStats.hourlyTrend[hourKey] = (currentStats.hourlyTrend[hourKey] || 0) + 1;

          const allKeys = Object.keys(currentVisitors);
          if (allKeys.length > 200) {
            const sortedKeys = allKeys.sort((a, b) => (currentVisitors[b].lastActive || 0) - (currentVisitors[a].lastActive || 0));
            const prunedVisitors = {};
            sortedKeys.slice(0, 200).forEach(k => {
              prunedVisitors[k] = currentVisitors[k];
            });
            currentVisitors = prunedVisitors;
          }

          if (kv) {
            try {
              await kv.put("global_traffic_visitors", JSON.stringify(currentVisitors));
              await kv.put("global_traffic_stats", JSON.stringify(currentStats));
            } catch(e) {}
          } else {
            memoryTrafficVisitors = currentVisitors;
            memoryTrafficStats = currentStats;
          }

          return new Response(JSON.stringify({
            status: "success",
            registered: true,
            visitorId: vid
          }), {
            status: 200,
            headers: CORS_HEADERS
          });

        } catch (err) {
          return new Response(JSON.stringify({ status: "error", message: err.message }), {
            status: 500,
            headers: CORS_HEADERS
          });
        }
      }
    }

    // 3. RUTE API KHUSUS ADMIN (Dilindungi Kunci Rahasia ADMIN_SECRET_KEY)
    if (url.pathname.startsWith("/api/admin")) {
      if (request.method === "OPTIONS") {
        return new Response(null, {
          status: 204,
          headers: CORS_HEADERS
        });
      }

      const ADMIN_SECRET_KEY = "tembusptn2026";
      const providedKey = request.headers.get("x-admin-key") || url.searchParams.get("key") || url.searchParams.get("token");

      if (providedKey !== ADMIN_SECRET_KEY) {
        return new Response(JSON.stringify({
          status: "error",
          code: "UNAUTHORIZED",
          message: "Akses ditolak: Kunci rahasia admin tidak valid atau belum dimasukkan."
        }), {
          status: 401,
          headers: CORS_HEADERS
        });
      }

      const kv = env && (env.LEADERBOARD_KV || env.KV_LEADERBOARD || env.TEMBUSPTN_KV);

      // A. GET /api/admin/users -> Transparansi penuh seluruh akun pengguna di database
      if (url.pathname === "/api/admin/users" && request.method === "GET") {
        let users = {};
        if (kv) {
          try {
            users = (await kv.get("global_users_registry", { type: "json" })) || {};
          } catch(e) {}
        } else {
          users = memoryRegistry;
        }

        const userList = Object.values(users).map(u => ({
          id: u.id,
          name: u.name || "Pejuang PTN",
          username: u.username || "pejuang",
          email: u.email || "-",
          avatar: u.avatar || "👨‍🎓",
          targetMajorName: u.targetMajorName || "Belum Memilih Target",
          xp: u.xp || 0,
          streak: u.streak || 0,
          highestScore: u.highestScore || 0,
          xpHistory: Array.isArray(u.xpHistory) ? u.xpHistory : [],
          lastUpdated: u.lastUpdated || 0,
          inLeaderboard: (u.xp || 0) > 0
        }));

        userList.sort((a, b) => b.xp - a.xp);

        return new Response(JSON.stringify({
          status: "success",
          totalUsers: userList.length,
          activeUsersWithXp: userList.filter(u => u.xp > 0).length,
          zeroXpUsers: userList.filter(u => u.xp === 0).length,
          data: userList,
          timestamp: Date.now()
        }), {
          status: 200,
          headers: CORS_HEADERS
        });
      }

      // B. POST /api/admin/users?action=delete&id=... -> Hapus satu akun pengguna dari cloud
      if (url.pathname === "/api/admin/users" && request.method === "POST" && url.searchParams.get("action") === "delete") {
        const targetId = url.searchParams.get("id");
        if (!targetId) {
          return new Response(JSON.stringify({ status: "error", message: "ID pengguna diperlukan" }), {
            status: 400,
            headers: CORS_HEADERS
          });
        }

        let users = {};
        if (kv) {
          try {
            users = (await kv.get("global_users_registry", { type: "json" })) || {};
          } catch(e) {}
        } else {
          users = memoryRegistry;
        }

        const deletedUser = users[targetId] ? { ...users[targetId] } : null;
        if (users[targetId]) {
          delete users[targetId];
          if (kv) {
            await kv.put("global_users_registry", JSON.stringify(users));
          } else {
            memoryRegistry = users;
          }
        }

        return new Response(JSON.stringify({
          status: "success",
          message: deletedUser ? `Pengguna "${deletedUser.name}" (${targetId}) berhasil dihapus permanen dari cloud.` : `Pengguna dengan ID ${targetId} telah dihapus.`,
          deletedId: targetId,
          remainingUsers: Object.keys(users).length
        }), {
          status: 200,
          headers: CORS_HEADERS
        });
      }

      // C. POST /api/admin/users?action=reset_all -> Reset SELURUH pengguna di cloud
      if (url.pathname === "/api/admin/users" && request.method === "POST" && url.searchParams.get("action") === "reset_all") {
        if (kv) {
          try {
            await kv.put("global_users_registry", JSON.stringify({}));
          } catch(e) {}
        }
        memoryRegistry = {};

        return new Response(JSON.stringify({
          status: "success",
          message: "Seluruh data pengguna dan leaderboard cloud berhasil di-reset menjadi kosong (0 user).",
          totalUsers: 0,
          data: []
        }), {
          status: 200,
          headers: CORS_HEADERS
        });
      }

      // D. POST /api/admin/users?action=edit_xp&id=...&xp=... -> Edit nilai XP pengguna
      if (url.pathname === "/api/admin/users" && request.method === "POST" && url.searchParams.get("action") === "edit_xp") {
        const targetId = url.searchParams.get("id");
        const newXp = Math.max(0, parseInt(url.searchParams.get("xp"), 10) || 0);

        let users = {};
        if (kv) {
          try {
            users = (await kv.get("global_users_registry", { type: "json" })) || {};
          } catch(e) {}
        } else {
          users = memoryRegistry;
        }

        if (users[targetId]) {
          users[targetId].xp = newXp;
          users[targetId].lastUpdated = Date.now();
          if (kv) {
            await kv.put("global_users_registry", JSON.stringify(users));
          } else {
            memoryRegistry = users;
          }
          return new Response(JSON.stringify({
            status: "success",
            message: `XP pengguna "${users[targetId].name}" berhasil diperbarui menjadi ${newXp} XP.`,
            user: users[targetId]
          }), {
            status: 200,
            headers: CORS_HEADERS
          });
        } else {
          return new Response(JSON.stringify({ status: "error", message: "Pengguna tidak ditemukan" }), {
            status: 404,
            headers: CORS_HEADERS
          });
        }
      }

      // E. POST /api/admin/traffic?action=reset -> Bersihkan log traffic
      if (url.pathname === "/api/admin/traffic" && request.method === "POST" && url.searchParams.get("action") === "reset") {
        if (kv) {
          try {
            await kv.put("global_traffic_visitors", JSON.stringify({}));
            await kv.put("global_traffic_stats", JSON.stringify({
              totalVisits: 0,
              totalPageviews: 0,
              deviceBreakdown: { desktop: 0, mobile: 0, tablet: 0 },
              browserBreakdown: {},
              tabBreakdown: {},
              locationBreakdown: {},
              hourlyTrend: {}
            }));
          } catch(e) {}
        }
        memoryTrafficVisitors = {};
        memoryTrafficStats = {
          totalVisits: 0,
          totalPageviews: 0,
          deviceBreakdown: { desktop: 0, mobile: 0, tablet: 0 },
          browserBreakdown: {},
          tabBreakdown: {},
          locationBreakdown: {},
          hourlyTrend: {}
        };

        return new Response(JSON.stringify({
          status: "success",
          message: "Data log traffic berhasil dibersihkan secara total."
        }), {
          status: 200,
          headers: CORS_HEADERS
        });
      }
    }

    // 4. FALLBACK ASET STATIS (HTML, CSS, JS, Gambar)
    if (env && env.ASSETS && typeof env.ASSETS.fetch === "function") {
      return env.ASSETS.fetch(request);
    }

    return new Response("Not Found", { status: 404 });
  }
};
