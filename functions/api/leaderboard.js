// Cloudflare Pages Function: /api/leaderboard
// Menyediakan API terpusat untuk sinkronisasi leaderboard antar seluruh pengguna dan perangkat se-Indonesia

// In-memory memory fallback untuk instance lokal / preview jika KV belum dibinding
let memoryRegistry = {};

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Content-Type": "application/json; charset=utf-8"
};

// Handle CORS preflight
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS
  });
}

// GET /api/leaderboard?period=hari|minggu|bulan
export async function onRequestGet(context) {
  try {
    const url = new URL(context.request.url);
    const kv = context.env && (context.env.LEADERBOARD_KV || context.env.KV_LEADERBOARD || context.env.TEMBUSPTN_KV);

    // 0. RESET SELURUH DATA USER & LEADERBOARD (Cloud Purge)
    if (url.searchParams.get("action") === "reset") {
      if (kv) {
        try { await kv.put("global_users_registry", JSON.stringify({})); } catch(e) {}
      }
      if (context.env && context.env.DB) {
        try { await context.env.DB.prepare("DELETE FROM leaderboard_users").run(); } catch(e) {}
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

    const period = url.searchParams.get("period") || "hari";

    let users = {};

    // 1. Cek apakah Cloudflare KV di-binding (LEADERBOARD_KV atau KV_LEADERBOARD)
    if (kv) {
      try {
        const stored = await kv.get("global_users_registry", { type: "json" });
        if (stored && typeof stored === "object") {
          users = stored;
        }
      } catch (e) {
        console.error("KV read error:", e);
      }
    } else if (context.env && context.env.DB) {
      // 2. Cek apakah Cloudflare D1 di-binding
      try {
        await context.env.DB.exec(`
          CREATE TABLE IF NOT EXISTS leaderboard_users (
            id TEXT PRIMARY KEY,
            data TEXT,
            updated_at INTEGER
          )
        `);
        const { results } = await context.env.DB.prepare("SELECT data FROM leaderboard_users").all();
        if (results && results.length) {
          results.forEach(r => {
            try {
              const u = JSON.parse(r.data);
              if (u && u.id) users[u.id] = u;
            } catch(e) {}
          });
        }
      } catch(e) {
        console.error("D1 read error:", e);
      }
    } else {
      // 3. Fallback memory / global
      users = memoryRegistry;
    }

    // 0. Fitur Validasi Kredensial (Cek ketersediaan email & username secara realtime)
    const checkMode = url.searchParams.get("check");
    if (checkMode === "availability" || checkMode === "1") {
      const checkUsername = (url.searchParams.get("username") || "").trim().toLowerCase();
      const checkEmail = (url.searchParams.get("email") || "").trim().toLowerCase();
      const excludeId = url.searchParams.get("exclude") || "";

      let usernameAvailable = true;
      let emailAvailable = true;

      const userEntries = Object.values(users);
      for (const u of userEntries) {
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

    // Kalkulasi XP berdasarkan periode waktu
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

    // Parameter opsional userId untuk mengembalikan status terkini pengguna aktif
    const requestUserId = url.searchParams.get("userId");
    const currentUserState = requestUserId && users[requestUserId] ? users[requestUserId] : null;

    return new Response(JSON.stringify({
      status: "success",
      period,
      totalUsers: eligibleList.length,
      data: eligibleList,
      currentUserState,
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
export async function onRequestPost(context) {
  try {
    const url = new URL(context.request.url);
    const kv = context.env && (context.env.LEADERBOARD_KV || context.env.KV_LEADERBOARD || context.env.TEMBUSPTN_KV);

    // 0. RESET SELURUH DATA USER & LEADERBOARD (Cloud Purge)
    if (url.searchParams.get("action") === "reset") {
      if (kv) {
        try { await kv.put("global_users_registry", JSON.stringify({})); } catch(e) {}
      }
      if (context.env && context.env.DB) {
        try { await context.env.DB.prepare("DELETE FROM leaderboard_users").run(); } catch(e) {}
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

    const body = await context.request.json();
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
    const cleanUsername = String(body.username || "pejuang").toLowerCase().trim().slice(0, 30);
    const cleanEmail = String(body.email || "").toLowerCase().trim().slice(0, 80);

    // Ambil registry user saat ini untuk cek validasi duplikasi
    let currentUsers = {};
    if (kv) {
      currentUsers = (await kv.get("global_users_registry", { type: "json" })) || {};
    } else if (context.env && context.env.DB) {
      try {
        const { results } = await context.env.DB.prepare("SELECT data FROM leaderboard_users").all();
        if (results && results.length) {
          results.forEach(r => {
            try {
              const u = JSON.parse(r.data);
              if (u && u.id) currentUsers[u.id] = u;
            } catch(e) {}
          });
        }
      } catch(e) {}
    } else {
      currentUsers = memoryRegistry;
    }

    // Cek apakah akun ada di daftar terhapus oleh Admin
    let deletedUsers = {};
    if (kv) {
      try {
        deletedUsers = (await kv.get("global_deleted_users_registry", { type: "json" })) || {};
      } catch(e) {}
    }
    if (deletedUsers[userId]) {
      return new Response(JSON.stringify({
        status: "error",
        code: "USER_DELETED_BY_ADMIN",
        message: "Akun ini telah dihapus oleh Admin.",
        deleted: true
      }), {
        status: 403,
        headers: CORS_HEADERS
      });
    }

    // Cek apakah ada reset global dari admin
    let resetMeta = null;
    if (kv) {
      try {
        resetMeta = await kv.get("global_reset_meta", { type: "json" });
      } catch(e) {}
    }

    const existingUser = currentUsers[userId];
    let finalXp = Math.max(0, parseInt(body.xp, 10) || 0);
    let finalXpHistory = Array.isArray(body.xpHistory) ? body.xpHistory.slice(-50) : [];
    let adminOverridden = false;

    const clientEarnedAt = parseInt(body.lastEarnedAt, 10) || 0;

    if (resetMeta && resetMeta.resetAt && clientEarnedAt <= resetMeta.resetAt) {
      // Pengguna terkena dampak Reset All oleh Admin
      finalXp = 0;
      finalXpHistory = [];
      adminOverridden = true;
    } else if (existingUser) {
      if (existingUser.adminModified && existingUser.adminModifiedAt) {
        // Jika client belum menghasilkan XP baru secara riil setelah Admin mengubah XP:
        if (clientEarnedAt <= existingUser.adminModifiedAt) {
          finalXp = Math.max(0, parseInt(existingUser.xp, 10) || 0);
          if (finalXp === 0) {
            finalXpHistory = [];
          } else {
            finalXpHistory = existingUser.xpHistory || [];
          }
          adminOverridden = true;
        } else {
          // Client sah memperoleh XP baru setelah diubah oleh Admin
          delete existingUser.adminModified;
        }
      } else if ((existingUser.xp || 0) > finalXp && !body.forceReset) {
        // Cloud memiliki XP lebih tinggi (perlindungan progres antar-perangkat)
        finalXp = existingUser.xp;
        finalXpHistory = existingUser.xpHistory || finalXpHistory;
        adminOverridden = true;
      }
    }

    const cleanName = String(body.name || "Pejuang PTN").trim().slice(0, 50);

    const userData = {
      id: userId,
      name: cleanName,
      username: cleanUsername,
      email: cleanEmail,
      avatar: body.avatar || (existingUser && existingUser.avatar) || "👨‍🎓",
      targetMajorName: String(body.targetMajorName || (existingUser && existingUser.targetMajorName) || "Target PTN Belum Dipilih").slice(0, 80),
      xp: finalXp,
      streak: Math.max(0, parseInt(body.streak, 10) || (existingUser && existingUser.streak) || 0),
      highestScore: Math.max(0, parseInt(body.highestScore, 10) || (existingUser && existingUser.highestScore) || 0),
      xpHistory: finalXpHistory,
      lastUpdated: now,
      adminModified: existingUser && existingUser.adminModified ? true : false,
      adminModifiedAt: existingUser ? existingUser.adminModifiedAt : undefined
    };

    // 1. Simpan ke Cloudflare KV jika tersedia
    if (kv) {
      currentUsers[userId] = userData;
      await kv.put("global_users_registry", JSON.stringify(currentUsers));
    } else if (context.env && context.env.DB) {
      // 2. Simpan ke Cloudflare D1 jika tersedia
      await context.env.DB.exec(`
        CREATE TABLE IF NOT EXISTS leaderboard_users (
          id TEXT PRIMARY KEY,
          data TEXT,
          updated_at INTEGER
        )
      `);
      await context.env.DB.prepare(`
        INSERT INTO leaderboard_users (id, data, updated_at) 
        VALUES (?1, ?2, ?3)
        ON CONFLICT(id) DO UPDATE SET data = ?2, updated_at = ?3
      `).bind(userId, JSON.stringify(userData), now).run();
    } else {
      // 3. Fallback memory
      memoryRegistry[userId] = userData;
    }

    return new Response(JSON.stringify({
      status: "success",
      message: adminOverridden ? "Data pengguna disinkronkan dengan otoritas cloud" : "Data pengguna berhasil disinkronisasi ke cloud",
      user: userData,
      authoritativeUser: userData,
      adminOverridden
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

// DELETE /api/leaderboard (Reset)
export async function onRequestDelete(context) {
  return onRequestGet(context);
}
