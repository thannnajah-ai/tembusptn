// Cloudflare Pages Function: /api/traffic
// Melayani pelacakan dan analitik lalu lintas pengunjung TembusPTN secara real-time

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Content-Type": "application/json; charset=utf-8"
};

let memoryVisitors = {};
let memoryStats = {
  totalVisits: 0,
  totalPageviews: 0,
  deviceBreakdown: { desktop: 0, mobile: 0, tablet: 0 },
  browserBreakdown: {},
  tabBreakdown: {},
  locationBreakdown: {},
  hourlyTrend: {}
};

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS
  });
}

export async function onRequestGet(context) {
  try {
    const url = new URL(context.request.url);
    const kv = context.env && (context.env.TEMBUSPTN_KV || context.env.LEADERBOARD_KV || context.env.KV_LEADERBOARD);

    // Reset action
    if (url.searchParams.get("action") === "reset") {
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
      memoryVisitors = {};
      memoryStats = {
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

    let visitors = {};
    let stats = memoryStats;

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
      visitors = memoryVisitors;
      stats = memoryStats;
    }

    const now = Date.now();
    const ONLINE_THRESHOLD_MS = 5 * 60 * 1000; // 5 menit

    const visitorList = Object.values(visitors).map(v => {
      const isOnline = (now - (v.lastActive || 0)) <= ONLINE_THRESHOLD_MS && v.eventType !== "leave";
      return {
        ...v,
        isOnline,
        idleMinutes: Math.floor((now - (v.lastActive || 0)) / 60000)
      };
    });

    // Urutkan dari yang paling baru aktif
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
      visitors: visitorList.slice(0, 150) // Ambil 150 log terbaru
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

export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    if (!body || !body.visitorId) {
      return new Response(JSON.stringify({ status: "error", message: "visitorId is required" }), {
        status: 400,
        headers: CORS_HEADERS
      });
    }

    const kv = context.env && (context.env.TEMBUSPTN_KV || context.env.LEADERBOARD_KV || context.env.KV_LEADERBOARD);
    const now = Date.now();

    // Cloudflare Edge Geo & Network Headers
    const cf = context.request.cf || {};
    const rawIp = context.request.headers.get("cf-connecting-ip") || 
                  context.request.headers.get("x-forwarded-for") || 
                  "127.0.0.1";
    
    // Mask IP for user privacy (e.g., 180.252.***.***)
    const ipParts = rawIp.split(".");
    const maskedIp = ipParts.length === 4 ? `${ipParts[0]}.${ipParts[1]}.***.***` : rawIp.slice(0, 10) + "...";

    const city = cf.city || "Indonesia";
    const country = cf.country || "ID";
    const region = cf.region || "";
    const isp = cf.asOrganization || "";

    let currentVisitors = {};
    let currentStats = memoryStats;

    if (kv) {
      try {
        currentVisitors = (await kv.get("global_traffic_visitors", { type: "json" })) || {};
        currentStats = (await kv.get("global_traffic_stats", { type: "json" })) || currentStats;
      } catch(e) {}
    } else {
      currentVisitors = memoryVisitors;
      currentStats = memoryStats;
    }

    const vid = body.visitorId;
    const isNewVisitor = !currentVisitors[vid];
    const existing = currentVisitors[vid] || {};

    const clientEnv = body.clientEnv || {};
    const devType = (clientEnv.deviceType || "desktop").toLowerCase();
    const browser = clientEnv.browser || "Other";
    const activeTab = body.currentTab || "beranda";
    const locationKey = city ? `${city}, ${country}` : country;

    // Record visitor entry
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

    // Update aggregated stats
    if (isNewVisitor) {
      currentStats.totalVisits = (currentStats.totalVisits || 0) + 1;
    }
    if (body.eventType === "enter" || body.eventType === "tab_switch") {
      currentStats.totalPageviews = (currentStats.totalPageviews || 0) + 1;
    }

    // Devices
    if (!currentStats.deviceBreakdown) currentStats.deviceBreakdown = { desktop: 0, mobile: 0, tablet: 0 };
    if (isNewVisitor) {
      currentStats.deviceBreakdown[devType] = (currentStats.deviceBreakdown[devType] || 0) + 1;
    }

    // Browsers
    if (!currentStats.browserBreakdown) currentStats.browserBreakdown = {};
    if (isNewVisitor) {
      currentStats.browserBreakdown[browser] = (currentStats.browserBreakdown[browser] || 0) + 1;
    }

    // Tabs
    if (!currentStats.tabBreakdown) currentStats.tabBreakdown = {};
    currentStats.tabBreakdown[activeTab] = (currentStats.tabBreakdown[activeTab] || 0) + 1;

    // Locations
    if (!currentStats.locationBreakdown) currentStats.locationBreakdown = {};
    if (locationKey) {
      currentStats.locationBreakdown[locationKey] = (currentStats.locationBreakdown[locationKey] || 0) + 1;
    }

    // Hourly trend (key format: "YYYY-MM-DD-HH")
    const dateObj = new Date(now);
    const hourKey = `${dateObj.getUTCFullYear()}-${String(dateObj.getUTCMonth()+1).padStart(2,'0')}-${String(dateObj.getUTCDate()).padStart(2,'0')} ${String(dateObj.getUTCHours()).padStart(2,'0')}:00`;
    if (!currentStats.hourlyTrend) currentStats.hourlyTrend = {};
    currentStats.hourlyTrend[hourKey] = (currentStats.hourlyTrend[hourKey] || 0) + 1;

    // Prune old visitors if excessive (keep up to 200)
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
      memoryVisitors = currentVisitors;
      memoryStats = currentStats;
    }

    return new Response(JSON.stringify({
      status: "success",
      registered: true,
      visitorId: vid
    }), {
      status: 200,
      headers: CORS_HEADERS
    });

  } catch(err) {
    return new Response(JSON.stringify({ status: "error", message: err.message }), {
      status: 500,
      headers: CORS_HEADERS
    });
  }
}

export async function onRequestDelete(context) {
  return onRequestGet(context);
}
