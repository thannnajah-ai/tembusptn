// ============================================================================
// TEMBUSPTN — MODUL LAYANAN DATA RESMI SNPMB (SNBP & SNBT)
// Sumber Data Resmi: Portal SNPMB BPPP Kemdiktisaintek (https://snpmb.id/)
// Endpoint Resmi:
//   - SNBP PTN:   https://snpmb.id/proxy-ptn-sn.php
//   - SNBP Prodi: https://snpmb.id/proxy-prodi-sn.php?ptn={id_ptn}
//   - SNBT PTN:   https://snpmb.id/proxy-ptn-sb.php
//   - SNBT Prodi: https://snpmb.id/proxy-prodi-sb.php?ptn={id_ptn}
// ============================================================================

(function(window) {
  "use strict";

  // In-memory & Local Cache
  const memoryCache = {
    snbp: { ptn: null, prodi: {} },
    snbt: { ptn: null, prodi: {} }
  };

  // State Jalur Aktif: "snbt" | "snbp"
  let currentPathway = "snbt";

  const SNPMB_SERVICE = {
    // Getter & Setter Jalur
    getPathway() {
      return currentPathway;
    },

    setPathway(pathway) {
      if (pathway === "snbp" || pathway === "snbt") {
        currentPathway = pathway;
        try {
          localStorage.setItem("tembusptn_ptn_pathway", pathway);
        } catch(e) {}
      }
      return currentPathway;
    },

    initPathwayFromStorage() {
      try {
        const saved = localStorage.getItem("tembusptn_ptn_pathway");
        if (saved === "snbp" || saved === "snbt") {
          currentPathway = saved;
        }
      } catch(e) {}
      return currentPathway;
    },

    // Deteksi Jenis PTN: 'akademik' | 'vokasi' | 'ptkin'
    detectPtnType(ptn) {
      if (!ptn) return "akademik";
      if (ptn.is_ptkin === 1 || ptn.is_ptkin === "1") return "ptkin";
      if (ptn.is_vokasi === 1 || ptn.is_vokasi === "1") return "vokasi";
      if (ptn.is_akademik === 1 || ptn.is_akademik === "1") return "akademik";

      const name = (ptn.nama || ptn.name || "").toLowerCase();
      if (/politeknik|akademi/.test(name)) return "vokasi";
      if (/\buin\b|iain|stain|islam negeri/.test(name)) return "ptkin";
      return "akademik";
    },

    // Ambil daftar PTN untuk jalur yang dipilih (SNBP atau SNBT)
    async getPtnList(pathway = currentPathway, forceRefresh = false) {
      const pKey = pathway === "snbp" ? "snbp" : "snbt";

      // 1. Cek memory cache
      if (!forceRefresh && memoryCache[pKey].ptn && memoryCache[pKey].ptn.length > 0) {
        return memoryCache[pKey].ptn;
      }

      // 2. Cek sessionStorage
      if (!forceRefresh) {
        try {
          const raw = sessionStorage.getItem(`tembusptn_snpmb_ptn_${pKey}`);
          if (raw) {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed) && parsed.length > 0) {
              memoryCache[pKey].ptn = parsed;
              return parsed;
            }
          }
        } catch(e) {}
      }

      // 3. Cek window.SNPMB_PTN_DATA (pre-bundled dari https://snpmb.id/)
      if (window.SNPMB_PTN_DATA && Array.isArray(window.SNPMB_PTN_DATA[pKey]) && window.SNPMB_PTN_DATA[pKey].length > 0) {
        memoryCache[pKey].ptn = window.SNPMB_PTN_DATA[pKey];
        // Jangan return langsung jika forceRefresh, tetap lakukan fetch live di background
        if (!forceRefresh) {
          // Lakukan background sync untuk pembaruan terkini
          this.fetchLivePtnList(pKey).catch(() => {});
          return window.SNPMB_PTN_DATA[pKey];
        }
      }

      // 4. Fetch Live dari SNPMB Portal
      return await this.fetchLivePtnList(pKey);
    },

    // Fetch live dari https://snpmb.id/ dengan fallback ke /api/snpmb
    async fetchLivePtnList(pKey) {
      const endpointPathway = pKey === "snbp" ? "sn" : "sb";
      const directUrl = `https://snpmb.id/proxy-ptn-${endpointPathway}.php`;
      const proxyUrl = `/api/snpmb?type=ptn&pathway=${endpointPathway}`;

      let data = null;
      try {
        // Coba direct fetch (sudah CORS *)
        const res = await fetch(directUrl, { mode: "cors" });
        if (res.ok) {
          data = await res.json();
        }
      } catch(errDirect) {
        console.warn("[SNPMB] Direct fetch failed, trying proxy...", errDirect.message);
      }

      if (!data) {
        try {
          const resProxy = await fetch(proxyUrl);
          if (resProxy.ok) {
            data = await resProxy.json();
          }
        } catch(errProxy) {
          console.warn("[SNPMB] Proxy fetch failed:", errProxy.message);
        }
      }

      if (Array.isArray(data) && data.length > 0) {
        // Sort by kode_ptn
        data.sort((a, b) => {
          const ka = parseInt(a.kode_ptn || a.kode_pt || a.id_ptn || 0, 10);
          const kb = parseInt(b.kode_ptn || b.kode_pt || b.id_ptn || 0, 10);
          return ka - kb;
        });

        memoryCache[pKey].ptn = data;
        try {
          sessionStorage.setItem(`tembusptn_snpmb_ptn_${pKey}`, JSON.stringify(data));
        } catch(e) {}
        return data;
      }

      // Fallback terakhir: pre-bundled
      if (window.SNPMB_PTN_DATA && Array.isArray(window.SNPMB_PTN_DATA[pKey])) {
        return window.SNPMB_PTN_DATA[pKey];
      }

      return [];
    },

    // Ambil detail program studi suatu PTN
    async getProdiList(pathway = currentPathway, ptnId) {
      if (!ptnId) return [];
      const pKey = pathway === "snbp" ? "snbp" : "snbt";
      const cacheKey = String(ptnId);

      // 1. Cek memory cache
      if (memoryCache[pKey].prodi[cacheKey] && memoryCache[pKey].prodi[cacheKey].length > 0) {
        return memoryCache[pKey].prodi[cacheKey];
      }

      // 2. Cek sessionStorage
      try {
        const raw = sessionStorage.getItem(`tembusptn_snpmb_prodi_${pKey}_${cacheKey}`);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length > 0) {
            memoryCache[pKey].prodi[cacheKey] = parsed;
            this.registerProdisToGlobalCache(parsed, ptnId, pathway);
            return parsed;
          }
        }
      } catch(e) {}

      // 3. Fetch Live dari SNPMB
      const endpointPathway = pKey === "snbp" ? "sn" : "sb";
      const directUrl = `https://snpmb.id/proxy-prodi-${endpointPathway}.php?ptn=${encodeURIComponent(ptnId)}`;
      const proxyUrl = `/api/snpmb?type=prodi&pathway=${endpointPathway}&ptn=${encodeURIComponent(ptnId)}`;

      let data = null;
      try {
        const res = await fetch(directUrl, { mode: "cors" });
        if (res.ok) {
          data = await res.json();
        }
      } catch(eDirect) {
        console.warn("[SNPMB] Direct prodi fetch failed, trying proxy...", eDirect.message);
      }

      if (!data) {
        try {
          const resProxy = await fetch(proxyUrl);
          if (resProxy.ok) {
            data = await resProxy.json();
          }
        } catch(eProxy) {
          console.warn("[SNPMB] Proxy prodi fetch failed:", eProxy.message);
        }
      }

      if (Array.isArray(data) && data.length > 0) {
        memoryCache[pKey].prodi[cacheKey] = data;
        try {
          sessionStorage.setItem(`tembusptn_snpmb_prodi_${pKey}_${cacheKey}`, JSON.stringify(data));
        } catch(e) {}
        this.registerProdisToGlobalCache(data, ptnId, pathway);
        return data;
      }

      // 4. Fallback ke PTN_LIST lokal jika ada
      if (Array.isArray(window.PTN_LIST)) {
        const localPtn = window.PTN_LIST.find(p => String(p.code) === String(ptnId) || String(p.id) === String(ptnId));
        if (localPtn && Array.isArray(localPtn.majors)) {
          const adapted = localPtn.majors.map(m => ({
            id_prodi: m.id,
            kode_prodi: m.code || m.id,
            nama: m.name,
            jenjang: m.degree || "S1",
            nama_portofolio: "Tidak Ada",
            daya_tampung_snbp: Math.round((m.quota || 50) * 0.4),
            daya_tampung_snbt: m.quota || 50,
            history_daya_tampung: [
              { tahun: 2025, daya_tampung: m.quota || 50, peminat: m.applicants || 800, terima: m.quota || 50 }
            ],
            targetScore: m.targetScore || 640
          }));
          return adapted;
        }
      }

      return [];
    },

    // Registrasi prodi ke cache global untuk target selection (findMajorById kompatibel)
    registerProdisToGlobalCache(prodiList, ptnId, pathway) {
      if (!window.__SNPMB_PRODI_CACHE__) {
        window.__SNPMB_PRODI_CACHE__ = {};
      }
      const ptn = (memoryCache[pathway].ptn || []).find(p => String(p.id_ptn || p.kode_ptn) === String(ptnId));
      prodiList.forEach(p => {
        const metrics = this.computeMetrics(p, pathway);
        const entry = {
          id: String(p.kode_prodi || p.id_prodi),
          kode_prodi: p.kode_prodi,
          name: p.nama,
          degree: p.jenjang || "S1",
          category: (p.nama && /(teknik|sains|medis|kedokteran|komputer|biologi|kimia|fisika|matematika|farmasi|gigi|kebidanan|keperawatan)/i.test(p.nama)) ? "Saintek" : "Soshum",
          quota: metrics.dayaTampung,
          applicants: metrics.peminat,
          targetScore: metrics.targetScore,
          competitiveness: metrics.competitivenessLabel,
          portofolio: p.nama_portofolio || "Tidak Ada",
          pathway: pathway,
          ptnId: ptnId,
          ptnCode: ptn ? (ptn.kode_ptn || ptn.id_ptn) : ptnId,
          ptnName: ptn ? ptn.nama : "PTN",
          ptnShort: ptn ? (ptn.nama || "").split(" ")[0] : "PTN",
          history: p.history_daya_tampung || [],
          sebaran: p.sebaran_peminat || []
        };
        window.__SNPMB_PRODI_CACHE__[String(p.kode_prodi || p.id_prodi)] = entry;
      });
    },

    // Hitung metrik prodi (daya tampung, peminat, keketatan rasio & persen)
    computeMetrics(p, pathway = currentPathway) {
      const isSnbp = pathway === "snbp";
      const dayaTampungRaw = isSnbp
        ? (p.daya_tampung_snbp ?? p.daya_tampung ?? 0)
        : (p.daya_tampung_snbt ?? p.daya_tampung ?? 0);
      const dayaTampung = parseInt(dayaTampungRaw, 10) || 0;

      const history = Array.isArray(p.history_daya_tampung)
        ? [...p.history_daya_tampung].sort((a, b) => b.tahun - a.tahun)
        : [];
      const latestHist = history[0] || {};
      const peminat = parseInt(latestHist.peminat || 0, 10);
      const terima = parseInt(latestHist.terima || dayaTampung, 10);

      const ratio = (dayaTampung > 0 && peminat > 0) ? Math.round(peminat / dayaTampung) : null;
      const percent = (dayaTampung > 0 && peminat > 0) ? ((dayaTampung / peminat) * 100).toFixed(1) : null;

      let competitivenessLabel = "Sedang";
      let compColor = "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 dark:text-emerald-400";
      if (ratio && ratio >= 25) {
        competitivenessLabel = "Sangat Ketat";
        compColor = "text-rose-600 bg-rose-50 dark:bg-rose-950/60 dark:text-rose-400";
      } else if (ratio && ratio >= 12) {
        competitivenessLabel = "Ketat";
        compColor = "text-amber-600 bg-amber-50 dark:bg-amber-950/60 dark:text-amber-400";
      } else {
        competitivenessLabel = "Moderat";
        compColor = "text-teal-600 bg-teal-50 dark:bg-teal-950/60 dark:text-teal-400";
      }

      // Estimasi target nilai (UTBK IRT score untuk SNBT, Nilai Rapor untuk SNBP)
      let targetScore = 635;
      let estimatedRapor = "85.0+";
      if (ratio && ratio >= 30) {
        targetScore = 710;
        estimatedRapor = "91.5+";
      } else if (ratio && ratio >= 20) {
        targetScore = 675;
        estimatedRapor = "88.0+";
      } else if (ratio && ratio >= 10) {
        targetScore = 645;
        estimatedRapor = "85.5+";
      } else {
        targetScore = 615;
        estimatedRapor = "82.0+";
      }

      return {
        dayaTampung,
        peminat,
        terima,
        ratio,
        percent,
        competitivenessLabel,
        compColor,
        targetScore,
        estimatedRapor,
        history
      };
    }
  };

  window.SNPMB_SERVICE = SNPMB_SERVICE;

})(typeof window !== "undefined" ? window : globalThis);
