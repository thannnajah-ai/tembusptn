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
    const period = url.searchParams.get("period") || "hari";

    let users = {};

    // 1. Cek apakah Cloudflare KV di-binding (LEADERBOARD_KV atau KV_LEADERBOARD)
    const kv = context.env && (context.env.LEADERBOARD_KV || context.env.KV_LEADERBOARD || context.env.TEMBUSPTN_KV);
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

    // Urutkan berdasarkan XP tertinggi
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
export async function onRequestPost(context) {
  try {
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

    const userData = {
      id: userId,
      name: String(body.name || "Pejuang PTN").slice(0, 50),
      username: String(body.username || "pejuang").toLowerCase().slice(0, 30),
      avatar: body.avatar || "👨‍🎓",
      targetMajorName: String(body.targetMajorName || "Target PTN Belum Dipilih").slice(0, 80),
      xp: Math.max(0, parseInt(body.xp, 10) || 0),
      streak: Math.max(0, parseInt(body.streak, 10) || 0),
      highestScore: Math.max(0, parseInt(body.highestScore, 10) || 0),
      xpHistory: Array.isArray(body.xpHistory) ? body.xpHistory.slice(-50) : [],
      lastUpdated: now
    };

    // 1. Simpan ke Cloudflare KV jika tersedia
    const kv = context.env && (context.env.LEADERBOARD_KV || context.env.KV_LEADERBOARD || context.env.TEMBUSPTN_KV);
    if (kv) {
      let stored = await kv.get("global_users_registry", { type: "json" }) || {};
      stored[userId] = userData;
      await kv.put("global_users_registry", JSON.stringify(stored));
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
