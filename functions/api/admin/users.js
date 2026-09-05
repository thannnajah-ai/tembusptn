const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, x-admin-key",
  "Content-Type": "application/json; charset=utf-8"
};

const ADMIN_SECRET_KEY = "tembusptn2026";

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  const key = context.request.headers.get("x-admin-key") || url.searchParams.get("key") || url.searchParams.get("token");
  if (key !== ADMIN_SECRET_KEY) {
    return new Response(JSON.stringify({ status: "error", code: "UNAUTHORIZED", message: "Akses ditolak: Kunci admin tidak valid." }), {
      status: 401,
      headers: CORS_HEADERS
    });
  }

  const kv = context.env && (context.env.LEADERBOARD_KV || context.env.KV_LEADERBOARD || context.env.TEMBUSPTN_KV);
  let users = {};
  if (kv) {
    try {
      users = (await kv.get("global_users_registry", { type: "json" })) || {};
    } catch(e) {}
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

export async function onRequestPost(context) {
  const url = new URL(context.request.url);
  const key = context.request.headers.get("x-admin-key") || url.searchParams.get("key") || url.searchParams.get("token");
  if (key !== ADMIN_SECRET_KEY) {
    return new Response(JSON.stringify({ status: "error", code: "UNAUTHORIZED", message: "Akses ditolak: Kunci admin tidak valid." }), {
      status: 401,
      headers: CORS_HEADERS
    });
  }

  const kv = context.env && (context.env.LEADERBOARD_KV || context.env.KV_LEADERBOARD || context.env.TEMBUSPTN_KV);
  const action = url.searchParams.get("action");

  let users = {};
  if (kv) {
    try {
      users = (await kv.get("global_users_registry", { type: "json" })) || {};
    } catch(e) {}
  }

  if (action === "delete") {
    const targetId = url.searchParams.get("id");
    if (!targetId) {
      return new Response(JSON.stringify({ status: "error", message: "ID pengguna diperlukan" }), {
        status: 400,
        headers: CORS_HEADERS
      });
    }
    const deletedUser = users[targetId] ? { ...users[targetId] } : null;
    if (users[targetId]) {
      delete users[targetId];
      if (kv) await kv.put("global_users_registry", JSON.stringify(users));
    }
    // Catat ke deleted registry agar browser client yang refresh tidak meregenerasi akun
    if (kv) {
      try {
        let deletedRegistry = (await kv.get("global_deleted_users_registry", { type: "json" })) || {};
        deletedRegistry[targetId] = { deletedAt: Date.now(), reason: "admin_delete" };
        await kv.put("global_deleted_users_registry", JSON.stringify(deletedRegistry));
      } catch(e) {}
    }
    return new Response(JSON.stringify({
      status: "success",
      message: deletedUser ? `Pengguna "${deletedUser.name}" (${targetId}) berhasil dihapus.` : `Pengguna ID ${targetId} telah dihapus.`,
      deletedId: targetId,
      remainingUsers: Object.keys(users).length
    }), {
      status: 200,
      headers: CORS_HEADERS
    });
  }

  if (action === "reset_all") {
    if (kv) {
      try {
        await kv.put("global_users_registry", JSON.stringify({}));
        await kv.put("global_deleted_users_registry", JSON.stringify({}));
        await kv.put("global_reset_meta", JSON.stringify({ resetAt: Date.now() }));
      } catch(e) {}
    }
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

  if (action === "edit_xp") {
    const targetId = url.searchParams.get("id");
    const newXp = Math.max(0, parseInt(url.searchParams.get("xp"), 10) || 0);
    if (users[targetId]) {
      users[targetId].xp = newXp;
      users[targetId].adminModified = true;
      users[targetId].adminModifiedAt = Date.now();
      users[targetId].adminXp = newXp;
      if (newXp === 0) {
        users[targetId].xpHistory = [];
      }
      users[targetId].lastUpdated = Date.now();
      if (kv) await kv.put("global_users_registry", JSON.stringify(users));
      return new Response(JSON.stringify({
        status: "success",
        message: `XP pengguna "${users[targetId].name}" diperbarui menjadi ${newXp} XP.`,
        user: users[targetId]
      }), {
        status: 200,
        headers: CORS_HEADERS
      });
    }
    return new Response(JSON.stringify({ status: "error", message: "Pengguna tidak ditemukan" }), {
      status: 404,
      headers: CORS_HEADERS
    });
  }

  return new Response(JSON.stringify({ status: "error", message: "Aksi tidak valid" }), {
    status: 400,
    headers: CORS_HEADERS
  });
}
