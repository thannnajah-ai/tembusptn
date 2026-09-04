// Visual Analytics & Rapor Belajar (Pahamify & Sainsin Style)
// Menggunakan Chart.js untuk radar kekuatan subtes dan tren histori skor

let radarChartInstance = null;
let trendChartInstance = null;

// Render Grafik Radar 7 Subtes
function renderSubtestRadar(canvasId, subtestScores) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  if (radarChartInstance) {
    radarChartInstance.destroy();
  }

  // Label 7 Subtes Resmi
  const labels = [
    "Penalaran Umum",
    "Pengetahuan & Pem. Umum",
    "Pemahaman Bacaan & Menulis",
    "Pengetahuan Kuantitatif",
    "Literasi Bahasa Indo",
    "Literasi Bahasa Inggris",
    "Penalaran Matematika"
  ];

  const subtestKeyMap = ["pu", "ppu", "pbm", "pk", "lit_indo", "lit_ing", "pm"];

  const userScores = subtestKeyMap.map(key => {
    return subtestScores && subtestScores[key] ? subtestScores[key].irtScore : 550;
  });

  // Benchmark target skor aman (misal 680)
  const targetBenchmarks = [680, 680, 680, 680, 680, 680, 680];

  radarChartInstance = new Chart(canvas, {
    type: "radar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Skor IRT Kamu",
          data: userScores,
          backgroundColor: "rgba(99, 102, 241, 0.25)",
          borderColor: "rgba(99, 102, 241, 1)",
          borderWidth: 2.5,
          pointBackgroundColor: "rgba(99, 102, 241, 1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(99, 102, 241, 1)",
          pointRadius: 4
        },
        {
          label: "Benchmark Target PTN (680)",
          data: targetBenchmarks,
          backgroundColor: "rgba(245, 158, 11, 0.08)",
          borderColor: "rgba(245, 158, 11, 0.7)",
          borderWidth: 1.5,
          borderDash: [5, 5],
          pointRadius: 2,
          pointBackgroundColor: "rgba(245, 158, 11, 0.7)"
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          angleLines: { color: (typeof document !== 'undefined' && document.documentElement.classList.contains('dark')) ? "rgba(71, 85, 105, 0.6)" : "rgba(203, 213, 225, 0.6)" },
          grid: { color: (typeof document !== 'undefined' && document.documentElement.classList.contains('dark')) ? "rgba(51, 65, 85, 0.8)" : "rgba(226, 232, 240, 0.8)" },
          pointLabels: {
            font: { size: 11, weight: "600", family: "'Segoe UI', sans-serif" },
            color: (typeof document !== 'undefined' && document.documentElement.classList.contains('dark')) ? "#e2e8f0" : "#334155"
          },
          suggestedMin: 300,
          suggestedMax: 800,
          ticks: { stepSize: 100, backdropColor: "transparent", color: "#94a3b8", font: { size: 9 } }
        }
      },
      plugins: {
        legend: {
          position: "bottom",
          labels: { 
            font: { size: 11, weight: "500" }, 
            padding: 14,
            color: (typeof document !== 'undefined' && document.documentElement.classList.contains('dark')) ? "#e2e8f0" : "#334155"
          }
        }
      }
    }
  });
}

// Analisis Diagnostik Kekuatan & Kelemahan
function analyzeStrengthsAndWeaknesses(subtestScores) {
  if (!subtestScores) return { strongest: null, weakest: null, list: [] };

  const list = Object.entries(subtestScores).map(([key, val]) => ({
    key,
    name: val.subtestName || key,
    score: val.irtScore || 500,
    accuracy: val.accuracy || 0,
    correct: val.correct || 0,
    wrong: val.wrong || 0,
    empty: val.empty || 0
  })).sort((a, b) => b.score - a.score);

  return {
    strongest: list[0] || null,
    weakest: list[list.length - 1] || null,
    list
  };
}

// Format Detik ke Menit:Detik
function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}m ${s < 10 ? '0' : ''}${s}s`;
}

// Evaluasi Rasionalisasi Strategi Pilihan 1 & 2 PTN SNBT
function analyzeDualStrategy(userScore, major1, major2) {
  function evalMajor(major) {
    if (!major) return null;
    const target = major.targetScore || 650;
    const score = Number(userScore) || 0;
    if (score <= 0) {
      return {
        status: "Belum Ada Skor",
        chancePercent: 0,
        badgeClass: "bg-slate-700/80 text-slate-300 border border-slate-600",
        targetScore: target,
        delta: 0
      };
    }
    const delta = score - target;
    let chancePercent = 50;
    let status = "Kompetitif";
    let badgeClass = "bg-blue-500/25 text-blue-300 border border-blue-500/30";

    if (delta >= 40) {
      chancePercent = Math.min(99, 90 + Math.round((delta - 40) * 0.15));
      status = "Sangat Aman";
      badgeClass = "bg-emerald-500/25 text-emerald-300 border border-emerald-500/30";
    } else if (delta >= 15) {
      chancePercent = 75 + Math.round((delta - 15) * 0.5);
      status = "Peluang Baik";
      badgeClass = "bg-emerald-500/25 text-emerald-300 border border-emerald-500/30";
    } else if (delta >= -15) {
      chancePercent = 50 + Math.round((delta + 15) * 0.8);
      status = "Kompetitif";
      badgeClass = "bg-blue-500/25 text-blue-300 border border-blue-500/30";
    } else if (delta >= -45) {
      chancePercent = 25 + Math.round((delta + 45) * 0.8);
      status = "Perlu Berjuang";
      badgeClass = "bg-amber-500/25 text-amber-300 border border-amber-500/30";
    } else {
      chancePercent = Math.max(5, 20 + Math.round((delta + 45) * 0.2));
      status = "Tinggi Risiko";
      badgeClass = "bg-rose-500/25 text-rose-300 border border-rose-500/30";
    }

    return {
      status,
      chancePercent,
      badgeClass,
      targetScore: target,
      delta
    };
  }

  const r1 = evalMajor(major1);
  const r2 = evalMajor(major2);

  let advice = "Tentukan jurusan target untuk melihat rekomendasi strategi SNBT.";
  if (major1 && major2) {
    const t1 = major1.targetScore || 650;
    const t2 = major2.targetScore || 650;
    if (t1 > t2) {
      advice = `Kombinasi pilihan sangat ideal! Pilihan 1 (${major1.name}) sebagai target impian dan Pilihan 2 (${major2.name}) dengan passing grade lebih bersahabat sebagai jaring pengaman utama.`;
    } else if (t1 < t2) {
      advice = `⚠️ Catatan Strategi: Passing grade Pilihan 2 (${major2.name}: ${t2}) lebih tinggi dari Pilihan 1 (${major1.name}: ${t1}). Disarankan menukar posisi agar peluang kelulusan maksimal!`;
    } else {
      advice = `Kedua pilihan memiliki tingkat passing grade yang setara (${t1}). Pastikan latihan konsisten untuk mengamankan skor di atas ambang batas.`;
    }
  } else if (major1) {
    advice = `Pilihan 1 (${major1.name}) telah dipilih. Tetapkan juga Pilihan 2 sebagai rencana cadangan (back-up strategy) yang aman.`;
  } else if (major2) {
    advice = `Pilihan 2 (${major2.name}) telah dipilih. Lengkapi juga Pilihan 1 sebagai target impian utama kamu.`;
  }

  return { r1, r2, advice };
}

if (typeof window !== 'undefined') {
  window.renderSubtestRadar = renderSubtestRadar;
  window.analyzeStrengthsAndWeaknesses = analyzeStrengthsAndWeaknesses;
  window.formatTime = formatTime;
  window.analyzeDualStrategy = analyzeDualStrategy;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    renderSubtestRadar,
    analyzeStrengthsAndWeaknesses,
    formatTime,
    analyzeDualStrategy
  };
}
