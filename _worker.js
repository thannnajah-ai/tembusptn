// Cloudflare Worker / Pages Advanced Mode: _worker.js
// Melayani API Leaderboard Real-Time terpusat & menyajikan aset statis

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Content-Type": "application/json; charset=utf-8"
};

let memoryRegistry = {};

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
            const checkName = (url.searchParams.get("name") || "").trim().toLowerCase();
            const checkUsername = (url.searchParams.get("username") || "").trim().toLowerCase();
            const checkEmail = (url.searchParams.get("email") || "").trim().toLowerCase();
            const excludeId = url.searchParams.get("exclude") || "";

            let nameAvailable = true;
            let usernameAvailable = true;
            let emailAvailable = true;

            for (const u of Object.values(users)) {
              if (excludeId && u.id === excludeId) continue;
              if (checkName && u.name && u.name.trim().toLowerCase() === checkName) {
                nameAvailable = false;
              }
              if (checkEmail && u.email && u.email.toLowerCase() === checkEmail) {
                emailAvailable = false;
              }
              if (checkUsername && u.username && u.username.toLowerCase() === checkUsername) {
                usernameAvailable = false;
              }
            }

            let message = "Kredensial tersedia";
            let conflictField = null;
            if (!nameAvailable) {
              conflictField = "name";
              message = `Nama lengkap "${url.searchParams.get("name")}" sudah terdaftar! Silakan gunakan nama lain.`;
            } else if (!emailAvailable) {
              conflictField = "email";
              message = `Email "${checkEmail}" sudah terdaftar! Silakan gunakan email lain atau langsung Masuk.`;
            } else if (!usernameAvailable) {
              conflictField = "username";
              message = `Username "@${checkUsername}" sudah digunakan! Silakan pilih username yang lain.`;
            }

            const isAvailable = nameAvailable && usernameAvailable && emailAvailable;
            return new Response(JSON.stringify({
              status: isAvailable ? "success" : "conflict",
              available: isAvailable,
              nameAvailable,
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
              periodXp = Math.min(u.xp || 0, sum);
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

          userList.sort((a, b) => b.xp - a.xp);
          userList.forEach((item, idx) => {
            item.rank = idx + 1;
          });

          return new Response(JSON.stringify({
            status: "success",
            period,
            totalUsers: userList.length,
            data: userList,
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

          // Validasi Anti-Duplikasi Nama Lengkap, Email & Username
          for (const [existingId, existingUser] of Object.entries(currentUsers)) {
            if (existingId !== userId) {
              if (cleanName && existingUser.name && existingUser.name.trim().toLowerCase() === cleanName.toLowerCase()) {
                return new Response(JSON.stringify({
                  status: "error",
                  code: "DUPLICATE_NAME",
                  field: "name",
                  message: `Nama lengkap "${cleanName}" sudah terdaftar! Silakan gunakan nama lengkap lain.`
                }), {
                  status: 409,
                  headers: CORS_HEADERS
                });
              }
              if (cleanEmail && existingUser.email && existingUser.email.toLowerCase() === cleanEmail) {
                return new Response(JSON.stringify({
                  status: "error",
                  code: "DUPLICATE_EMAIL",
                  field: "email",
                  message: `Email "${cleanEmail}" sudah terdaftar! Silakan gunakan email lain atau langsung Masuk.`
                }), {
                  status: 409,
                  headers: CORS_HEADERS
                });
              }
              if (cleanUsername && existingUser.username && existingUser.username.toLowerCase() === cleanUsername) {
                return new Response(JSON.stringify({
                  status: "error",
                  code: "DUPLICATE_USERNAME",
                  field: "username",
                  message: `Username "@${cleanUsername}" sudah digunakan! Silakan pilih username yang lain.`
                }), {
                  status: 409,
                  headers: CORS_HEADERS
                });
              }
            }
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

    // 2. FALLBACK ASET STATIS (HTML, CSS, JS, Gambar)
    if (env && env.ASSETS && typeof env.ASSETS.fetch === "function") {
      return env.ASSETS.fetch(request);
    }

    return new Response("Not Found", { status: 404 });
  }
};
