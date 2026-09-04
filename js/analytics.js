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

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    renderSubtestRadar,
    analyzeStrengthsAndWeaknesses,
    formatTime
  };
}
