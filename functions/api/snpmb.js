// Cloudflare Pages Function: /api/snpmb
// Menyediakan Edge Proxy & Cache resmi untuk data SNPMB (SNBP & SNBT) dari https://snpmb.id/

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "public, max-age=3600, s-maxage=86400"
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
    const pathway = url.searchParams.get("pathway") || "sb"; // "sn" (SNBP) atau "sb" (SNBT)
    const type = url.searchParams.get("type") || "ptn"; // "ptn" atau "prodi"
    const ptnId = url.searchParams.get("ptn") || "";

    const cleanPathway = pathway === "snbp" || pathway === "sn" ? "sn" : "sb";

    let targetUrl = "";
    if (type === "prodi") {
      if (!ptnId) {
        return new Response(JSON.stringify({ error: "Parameter ptn (id_ptn) wajib diisi." }), {
          status: 400,
          headers: CORS_HEADERS
        });
      }
      targetUrl = `https://snpmb.id/proxy-prodi-${cleanPathway}.php?ptn=${encodeURIComponent(ptnId)}`;
    } else {
      targetUrl = `https://snpmb.id/proxy-ptn-${cleanPathway}.php`;
    }

    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "application/json, text/plain, */*",
        "Referer": "https://snpmb.id/"
      }
    });

    if (!response.ok) {
      return new Response(JSON.stringify({ error: `SNPMB returned status ${response.status}` }), {
        status: response.status,
        headers: CORS_HEADERS
      });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: CORS_HEADERS
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message || "Failed to fetch from snpmb.id" }), {
      status: 500,
      headers: CORS_HEADERS
    });
  }
}
