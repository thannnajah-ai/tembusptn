// ============================================================
// TEMBUSPTN: MODUL RASIONALISASI NILAI RAPOR SNBP 2026
// Berbasis Nilai Semester 1 - 5 Kurikulum Merdeka SMA/MA
// Sesuai Regulasi Resmi SNPMB & Kepmendikbudristek No. 345/M/2022
// ============================================================

// 1. DAFTAR MATA PELAJARAN TUNGGAL SMA/MA KURIKULUM MERDEKA
// Satu daftar lengkap untuk seluruh SMA (tidak dipisah-pisah kelompok)
const UNIFIED_SMA_SUBJECTS = [
  "Pendidikan Pancasila",
  "Bahasa Indonesia",
  "Bahasa Inggris",
  "Matematika",
  "Biologi",
  "Kimia",
  "Fisika",
  "Sosiologi",
  "Ekonomi",
  "Geografi",
  "Antropologi",
  "PJOK (Pendidikan Jasmani, Olahraga, dan Kesehatan)",
  "Informatika",
  "Sejarah",
  "Prakarya dan Kewirausahaan",
  "B. Inggris Tk. Lanjut",
  "MTK Tk. Lanjut",
  "B. Indonesia Tk. Lanjut",
  "Seni Budaya",
  "PA. Islam (Pendidikan Agama Islam)",
  "PA. Kristen (Pendidikan Agama Kristen)",
  "PA. Katolik (Pendidikan Agama Katolik)",
  "Pendidikan Agama & Budi Pekerti",
  "Muatan Lokal / Bahasa Daerah"
];

// Mapel default saat inisialisasi awal atau klik "Muat Mapel Standar"
const DEFAULT_STANDARD_SMA_SUBJECTS = [
  "Pendidikan Agama dan Budi Pekerti",
  "Pendidikan Pancasila",
  "Bahasa Indonesia",
  "Matematika",
  "Bahasa Inggris",
  "Sejarah",
  "Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK)",
  "Seni Budaya",
  "Informatika",
  "Prakarya dan Kewirausahaan (PKWU)"
];

// State Lokal Modul SNBP
let currentSnbpGrades = [];

function getSnbpStorageKey() {
  let userId = "guest";
  try {
    if (typeof getCurrentUser === "function") {
      const u = getCurrentUser();
      if (u && u.id) userId = u.id;
    }
  } catch (e) {}
  return `tembusptn_snbp_grades_${userId}`;
}

function loadSnbpGradesFromStorage() {
  try {
    const raw = localStorage.getItem(getSnbpStorageKey());
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error("Gagal membaca nilai rapor SNBP:", e);
  }

  // Template awal jika belum ada data
  return DEFAULT_STANDARD_SMA_SUBJECTS.map(subj => ({
    subject: subj,
    sem1: "",
    sem2: "",
    sem3: "",
    sem4: "",
    sem5: ""
  }));
}

function saveSnbpGradesToStorage(grades, showToast = true) {
  try {
    localStorage.setItem(getSnbpStorageKey(), JSON.stringify(grades));
    if (showToast && typeof showXpNotification === "function") {
      showXpNotification(0, "Nilai rapor SNBP berhasil disimpan! 💾");
    }
  } catch (e) {
    console.error("Gagal menyimpan nilai rapor SNBP:", e);
  }
}

// 2. LOGIKA PERHITUNGAN NILAI & STATISTIK SNBP
function calculateSubjectRowAvg(row) {
  if (!row) return 0;
  const sems = [row.sem1, row.sem2, row.sem3, row.sem4, row.sem5];
  let sum = 0;
  let count = 0;
  sems.forEach(v => {
    const num = parseFloat(v);
    if (!isNaN(num) && num > 0) {
      sum += num;
      count++;
    }
  });
  return count > 0 ? (sum / count) : 0;
}

function calculateSnbpOverallStats(grades) {
  const semSums = [0, 0, 0, 0, 0];
  const semCounts = [0, 0, 0, 0, 0];
  let totalSum = 0;
  let totalCount = 0;

  grades.forEach(row => {
    const sVals = [row.sem1, row.sem2, row.sem3, row.sem4, row.sem5];
    sVals.forEach((val, idx) => {
      const num = parseFloat(val);
      if (!isNaN(num) && num > 0) {
        semSums[idx] += num;
        semCounts[idx]++;
        totalSum += num;
        totalCount++;
      }
    });
  });

  const semAverages = semSums.map((sum, i) => semCounts[i] > 0 ? (sum / semCounts[i]) : 0);
  const overallAvg = totalCount > 0 ? (totalSum / totalCount) : 0;

  // Analisis Tren (Kenaikan Semester 1 ke 5)
  const validSemAvgs = semAverages.filter(v => v > 0);
  let trendType = "Belum Cukup Data";
  let trendIcon = "⏳";
  let trendBadge = "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700";
  let trendDesc = "Isi nilai minimal 2 semester untuk menganalisis tren perkembangan nilaimu.";

  if (validSemAvgs.length >= 2) {
    let isAscending = true;
    for (let i = 1; i < validSemAvgs.length; i++) {
      if (validSemAvgs[i] < validSemAvgs[i - 1] - 0.4) isAscending = false;
    }

    const first = validSemAvgs[0];
    const last = validSemAvgs[validSemAvgs.length - 1];
    const diff = last - first;

    if (diff >= 1.0 && isAscending) {
      trendType = "Konsisten Meningkat";
      trendIcon = "📈";
      trendBadge = "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800";
      trendDesc = `Sangat ideal untuk SNBP! Nilai rata-rata naik +${diff.toFixed(1)} poin dari semester awal ke akhir.`;
    } else if (Math.abs(diff) <= 1.2) {
      trendType = "Stabil & Konsisten";
      trendIcon = "📊";
      trendBadge = "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800";
      trendDesc = `Stabilitas nilai terjaga di kisaran rata-rata ${last.toFixed(1)}. Menunjukkan ketekunan belajar konsisten.`;
    } else if (diff < -1.2) {
      trendType = "Tren Menurun";
      trendIcon = "📉";
      trendBadge = "bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800";
      trendDesc = `Rata-rata menurun ${Math.abs(diff).toFixed(1)} poin di semester akhir. Disarankan mendongkrak sertifikat pendukung!`;
    } else {
      trendType = "Fluktuatif";
      trendIcon = "🌊";
      trendBadge = "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800";
      trendDesc = "Nilai antarsemeternya naik turun. Pastikan mapel pendukung prodi impian tetap memiliki nilai unggul.";
    }
  }

  // Cari mapel tertinggi & terendah
  let highestSubject = null;
  let lowestSubject = null;
  grades.forEach(row => {
    const avg = calculateSubjectRowAvg(row);
    if (avg > 0) {
      if (!highestSubject || avg > highestSubject.avg) highestSubject = { name: row.subject, avg };
      if (!lowestSubject || avg < lowestSubject.avg) lowestSubject = { name: row.subject, avg };
    }
  });

  return {
    semAverages,
    overallAvg,
    totalSubjects: grades.length,
    filledCount: totalCount,
    trendType,
    trendIcon,
    trendBadge,
    trendDesc,
    highestSubject,
    lowestSubject
  };
}

// 3. IDENTIFIKASI MATA PELAJARAN PENDUKUNG PRODI (KEPMENDIKBUDRISTEK NO. 345/M/2022)
function getSupportingSubjectsForMajor(majorName, category) {
  const m = (majorName || "").toLowerCase();
  const c = (category || "").toLowerCase();

  if (m.includes("kedokteran") || m.includes("dokter") || m.includes("farmasi") || m.includes("kebidanan") || m.includes("keperawatan")) {
    return ["Biologi", "Kimia"];
  }
  if (m.includes("komputer") || m.includes("informatika") || m.includes("sistem informasi") || m.includes("teknik") || m.includes("mesin") || m.includes("elektro") || m.includes("sipil") || m.includes("arsitektur") || m.includes("fisika")) {
    return ["Matematika", "Fisika"];
  }
  if (m.includes("biologi") || m.includes("bioteknologi") || m.includes("lingkungan") || m.includes("pertanian") || m.includes("peternakan") || m.includes("kehutanan") || m.includes("perikanan")) {
    return ["Biologi", "Kimia"];
  }
  if (m.includes("kimia")) {
    return ["Kimia", "Matematika"];
  }
  if (m.includes("matematika") || m.includes("statistika") || m.includes("akturia")) {
    return ["Matematika", "Matematika Tingkat Lanjut"];
  }
  if (m.includes("manajemen") || m.includes("akuntansi") || m.includes("ekonomi") || m.includes("bisnis") || m.includes("keuangan")) {
    return ["Ekonomi", "Matematika"];
  }
  if (m.includes("hukum") || m.includes("hubungan internasional") || m.includes("ilmu politik") || m.includes("pemerintahan") || m.includes("administrasi")) {
    return ["Sosiologi", "Pendidikan Pancasila"];
  }
  if (m.includes("psikologi") || m.includes("sosiologi") || m.includes("antropologi") || m.includes("kesejahteraan")) {
    return ["Sosiologi", "Biologi"];
  }
  if (m.includes("komunikasi") || m.includes("jurnalistik") || m.includes("humas")) {
    return ["Bahasa Indonesia", "Sosiologi"];
  }
  if (m.includes("bahasa") || m.includes("sastra") || m.includes("linguistik") || m.includes("inggris")) {
    return ["Bahasa Indonesia", "Bahasa Inggris"];
  }
  if (m.includes("seni") || m.includes("desain") || m.includes("dkv") || m.includes("musik") || m.includes("tari")) {
    return ["Seni Budaya", "Prakarya dan Kewirausahaan (PKWU)"];
  }
  if (m.includes("olahraga") || m.includes("jasmani") || m.includes("kepelatihan")) {
    return ["Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK)", "Biologi"];
  }
  if (c.includes("saintek")) {
    return ["Matematika", "Fisika"];
  }
  return ["Bahasa Indonesia", "Matematika"];
}

function calculateSupportingSubjectsAvg(grades, supportingSubjs) {
  let sum = 0;
  let count = 0;
  supportingSubjs.forEach(sName => {
    const sLower = sName.toLowerCase();
    const row = grades.find(g => {
      const gLower = (g.subject || "").toLowerCase();
      if (gLower.includes(sLower) || sLower.includes(gLower)) return true;
      if (sLower.includes("matematika") && (gLower.includes("mtk") || gLower.includes("matematika"))) return true;
      if (sLower.includes("inggris") && (gLower.includes("inggris") || gLower.includes("b. ing"))) return true;
      if (sLower.includes("indonesia") && (gLower.includes("indonesia") || gLower.includes("b. indo"))) return true;
      if ((sLower.includes("pkwu") || sLower.includes("prakarya")) && (gLower.includes("pkwu") || gLower.includes("prakarya"))) return true;
      if (sLower.includes("pjok") && (gLower.includes("jasmani") || gLower.includes("pjok") || gLower.includes("olahraga"))) return true;
      if (sLower.includes("agama") && (gLower.includes("agama") || gLower.includes("pa."))) return true;
      return false;
    });
    if (row) {
      const avg = calculateSubjectRowAvg(row);
      if (avg > 0) {
        sum += avg;
        count++;
      }
    }
  });
  return count > 0 ? (sum / count) : 0;
}

// 4. EVALUASI RASIONALISASI KELULUSAN SNBP
function evalSnbpMajorChance(major, overallAvg, grades) {
  if (!major) {
    return {
      status: "Belum Ditentukan",
      badgeClass: "bg-slate-100 dark:bg-slate-800 text-slate-400 border-slate-200 dark:border-slate-700",
      chancePercent: 0,
      targetRapor: 85,
      supportingSubjs: ["Matematika", "Bahasa Indonesia"],
      suppAvg: 0,
      advice: "Silakan pilih target program studi di menu profil atau modal pengaturan target PTN."
    };
  }

  // Estimasi Benchmark Nilai Rapor Aman SNBP berdasarkan keketatan prodi
  const utbkScore = major.targetScore || 650;
  let targetRapor = 82 + ((utbkScore - 580) / (740 - 580)) * (92.5 - 82);
  targetRapor = Math.max(81, Math.min(93.5, Math.round(targetRapor * 10) / 10));

  const suppSubjs = getSupportingSubjectsForMajor(major.name, major.category);
  const suppAvg = calculateSupportingSubjectsAvg(grades, suppSubjs);

  // Bobot Resmi SNBP: 60% rata-rata seluruh mapel + 40% mapel pendukung prodi
  const combinedScore = suppAvg > 0 ? (overallAvg * 0.6 + suppAvg * 0.4) : overallAvg;
  const diff = combinedScore - targetRapor;

  let status = "";
  let badgeClass = "";
  let chancePercent = 0;
  let advice = "";

  if (overallAvg === 0) {
    status = "Belum Ada Nilai";
    badgeClass = "bg-slate-100 dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700";
    chancePercent = 0;
    advice = "Lengkapi input nilai rapor semester 1–5 untuk mengkalkulasi peluang kelulusan.";
  } else if (diff >= 1.5) {
    status = "Sangat Berpeluang (Aman) 🎉";
    badgeClass = "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30";
    chancePercent = Math.min(95, Math.round(75 + diff * 6));
    advice = `Nilai gabunganmu (${combinedScore.toFixed(1)}) melampaui rata-rata aman rekomendasi (${targetRapor}). Pertahankan konsistensi ranking sekolah!`;
  } else if (diff >= -1.5) {
    status = "Kompetitif / Ketat ⚖️";
    badgeClass = "bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30";
    chancePercent = Math.round(55 + diff * 7);
    advice = `Peluang terbuka bersaing ketat. Sertifikat prestasi lomba (minimal tingkat provinsi/kabupaten) sangat disarankan untuk memperkuat posisi.`;
  } else {
    status = "Berisiko Tinggi ⚠️";
    badgeClass = "bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/30";
    chancePercent = Math.max(20, Math.round(45 + diff * 5));
    advice = `Nilai gabunganmu (${combinedScore.toFixed(1)}) masih di bawah passing grade rekomendasi (${targetRapor}). Disarankan memilih prodi alternatif atau siapkan amunisi untuk jalur SNBT.`;
  }

  return {
    status,
    badgeClass,
    chancePercent,
    targetRapor,
    supportingSubjs: suppSubjs,
    suppAvg,
    combinedScore,
    advice
  };
}

// 5. RENDER UTAMA TAMPILAN RAPOR SNBP
function renderSnbpRaporView() {
  const container = document.getElementById("rapor-snbp-view");
  if (!container) return;

  if (!currentSnbpGrades || currentSnbpGrades.length === 0) {
    currentSnbpGrades = loadSnbpGradesFromStorage();
  }

  const profile = typeof getUserProfile === "function" ? getUserProfile() : {};
  const m1 = typeof findMajorById === "function" ? findMajorById(profile.targetMajorId) : null;
  const m2 = typeof findMajorById === "function" ? findMajorById(profile.targetMajorId2) : null;

  const stats = calculateSnbpOverallStats(currentSnbpGrades);
  const eval1 = evalSnbpMajorChance(m1, stats.overallAvg, currentSnbpGrades);
  const eval2 = evalSnbpMajorChance(m2, stats.overallAvg, currentSnbpGrades);

  // HTML Baris Tabel Mapel
  const rowsHtml = currentSnbpGrades.map((row, idx) => {
    const rowAvg = calculateSubjectRowAvg(row);
    const isCustom = !UNIFIED_SMA_SUBJECTS.includes(row.subject);

    return `
      <tr class="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition">
        <td class="py-2.5 px-3 text-center text-xs font-bold text-slate-400">
          ${idx + 1}
        </td>
        <td class="py-2.5 px-3 min-w-[200px]">
          ${isCustom ? `
            <div class="flex items-center gap-1.5">
              <input type="text" value="${escapeHtml(row.subject)}" oninput="onSnbpSubjectCustomInput(${idx}, this.value)" placeholder="Ketik nama mata pelajaran..."
                class="w-full text-xs p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white outline-none focus:border-indigo-500 font-semibold" />
              <button type="button" onclick="onSnbpSubjectRevertPreset(${idx})" title="Pilih dari daftar SMA" class="p-2 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-xs">↩️</button>
            </div>
          ` : `
            <select onchange="onSnbpSubjectSelectChange(${idx}, this.value)" class="w-full text-xs p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white outline-none focus:border-indigo-500 font-semibold truncate">
              ${UNIFIED_SMA_SUBJECTS.map(subj => `
                <option value="${subj}" ${subj === row.subject ? 'selected' : ''}>${subj}</option>
              `).join("")}
              <option value="__CUSTOM__">➕ Ketik Mapel Lain (Custom)...</option>
            </select>
          `}
        </td>
        ${[1, 2, 3, 4, 5].map(sem => `
          <td class="py-2.5 px-1.5 text-center min-w-[60px]">
            <input type="number" min="0" max="100" step="0.1" value="${row['sem' + sem] || ''}" placeholder="-"
              oninput="onSnbpGradeInput(${idx}, ${sem}, this.value)"
              class="w-14 sm:w-16 p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-center text-xs font-bold text-slate-800 dark:text-white outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition" />
          </td>
        `).join("")}
        <td class="py-2.5 px-3 text-center text-xs font-extrabold ${rowAvg > 0 ? (rowAvg >= 88 ? 'text-emerald-600 dark:text-emerald-400' : (rowAvg >= 82 ? 'text-indigo-600 dark:text-indigo-400' : 'text-amber-600 dark:text-amber-400')) : 'text-slate-300 dark:text-slate-600'}">
          ${rowAvg > 0 ? rowAvg.toFixed(1) : '-'}
        </td>
        <td class="py-2.5 px-2 text-center">
          <button type="button" onclick="removeSnbpSubjectRow(${idx})" title="Hapus Mapel Ini" class="w-8 h-8 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/40 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition flex items-center justify-center text-sm">
            🗑️
          </button>
        </td>
      </tr>
    `;
  }).join("");

  container.innerHTML = `
    <!-- Top Hero Banner SNBP -->
    <div class="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
      <div class="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div class="text-center lg:text-left space-y-2">
          <span class="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5 w-fit mx-auto lg:mx-0">
            <span>📑</span> <span>Rasionalisasi Nilai Rapor SNBP 2026</span>
          </span>
          <h2 class="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
            Rata-rata Rapor: <span class="text-amber-400 font-mono text-3xl sm:text-4xl">${stats.overallAvg > 0 ? stats.overallAvg.toFixed(1) : '0.0'}</span> <span class="text-lg font-normal text-indigo-200">/ 100</span>
          </h2>
          <p class="text-xs sm:text-sm text-indigo-100 max-w-xl leading-relaxed">
            Dihitung dari seluruh mata pelajaran Semester 1 hingga 5. Dilengkapi pembobotan mata pelajaran pendukung program studi berdasarkan regulasi resmi SNPMB.
          </p>

          <div class="flex items-center gap-2 flex-wrap pt-1 justify-center lg:justify-start">
            <span class="px-3 py-1 rounded-full text-xs font-bold ${stats.trendBadge} flex items-center gap-1.5">
              <span>${stats.trendIcon}</span> <span>Tren: ${stats.trendType}</span>
            </span>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-indigo-200 border border-white/20">
              📚 ${stats.totalSubjects} Mapel Terdata
            </span>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-emerald-300 border border-white/20">
              🏫 Kuota Eligible: Top 40% (Akreditasi A)
            </span>
          </div>

          <p class="text-[11px] text-indigo-200 italic pt-0.5">
            ${stats.trendDesc}
          </p>
        </div>

        <!-- Rasionalisasi Card Pilihan 1 & 2 SNBP -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full lg:max-w-xl">
          <!-- Pilihan 1 -->
          <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-black text-amber-300 uppercase tracking-wider">PILIHAN 1 🎯</span>
              <span class="px-2 py-0.5 rounded text-[11px] font-bold ${eval1.badgeClass}">
                ${eval1.status}
              </span>
            </div>
            <div class="text-sm font-bold text-white truncate" title="${m1 ? m1.name : 'Belum Dipilih'}">
              ${m1 ? m1.name : (profile.targetMajorName || 'Belum Memilih Target')}
            </div>
            <div class="text-xs text-indigo-200">${m1 ? m1.ptnShort : '-'} • ${m1?.degree || 'S1'}</div>
            <div class="pt-2 border-t border-white/15 text-xs flex items-center justify-between text-indigo-100">
              <span>Target Rapor: <strong>${eval1.targetRapor}</strong></span>
              <span>Peluang: <strong class="text-amber-300 text-sm">${eval1.chancePercent}%</strong></span>
            </div>
            <div class="text-[10px] text-indigo-200 leading-tight">
              <span>Mapel Pendukung: </span>
              <span class="text-white font-semibold">${eval1.supportingSubjs.join(", ")}</span>
              ${eval1.suppAvg > 0 ? ` (<span class="text-amber-300 font-bold">${eval1.suppAvg.toFixed(1)}</span>)` : ''}
            </div>
          </div>

          <!-- Pilihan 2 -->
          <div class="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-black text-indigo-200 uppercase tracking-wider">PILIHAN 2 🛡️</span>
              <span class="px-2 py-0.5 rounded text-[11px] font-bold ${eval2.badgeClass}">
                ${eval2.status}
              </span>
            </div>
            <div class="text-sm font-bold text-white truncate" title="${m2 ? m2.name : 'Belum Dipilih'}">
              ${m2 ? m2.name : 'Belum Memilih Target'}
            </div>
            <div class="text-xs text-indigo-200">${m2 ? m2.ptnShort : '-'} • ${m2?.degree || 'S1'}</div>
            <div class="pt-2 border-t border-white/15 text-xs flex items-center justify-between text-indigo-100">
              <span>Target Rapor: <strong>${eval2.targetRapor}</strong></span>
              <span>Peluang: <strong class="text-indigo-200 text-sm">${eval2.chancePercent}%</strong></span>
            </div>
            <div class="text-[10px] text-indigo-200 leading-tight">
              <span>Mapel Pendukung: </span>
              <span class="text-white font-semibold">${eval2.supportingSubjs.join(", ")}</span>
              ${eval2.suppAvg > 0 ? ` (<span class="text-indigo-200 font-bold">${eval2.suppAvg.toFixed(1)}</span>)` : ''}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Ringkasan Nilai per Semester (Semester 1 - 5 Cards) -->
    <div class="grid grid-cols-2 sm:grid-cols-5 gap-3">
      ${[1, 2, 3, 4, 5].map(sem => {
        const avg = stats.semAverages[sem - 1];
        return `
          <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3.5 shadow-sm space-y-1 text-center">
            <span class="text-[11px] font-bold text-slate-400 uppercase">Semester ${sem}</span>
            <div class="text-xl font-black ${avg > 0 ? (avg >= 88 ? 'text-emerald-600 dark:text-emerald-400' : 'text-indigo-600 dark:text-indigo-400') : 'text-slate-300 dark:text-slate-600'}">
              ${avg > 0 ? avg.toFixed(1) : '-'}
            </div>
            <div class="text-[10px] text-slate-400">
              ${sem <= 2 ? 'Kelas 10' : (sem <= 4 ? 'Kelas 11' : 'Kelas 12 (Ganjil)')}
            </div>
          </div>
        `;
      }).join("")}
    </div>

    <!-- Tabel Input Mandiri Nilai Rapor -->
    <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-5 sm:p-7 shadow-sm space-y-5">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-700 pb-4">
        <div>
          <h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
            <span>📝</span> <span>Input Mandiri Nilai Rapor (Semester 1 s.d. 5)</span>
          </h3>
          <p class="text-xs text-slate-500 dark:text-slate-400">
            Pilih atau ketik mapel yang ada di sekolahmu, isi angka nilai (skala 0–100), dan simpan.
          </p>
        </div>

        <div class="flex items-center gap-2 flex-wrap">
          <button type="button" onclick="handleLoadDefaultSmaSubjects()" class="px-3 py-2 rounded-xl text-xs font-bold border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition flex items-center gap-1.5">
            <span>💡</span> <span>Muat Mapel Standar SMA</span>
          </button>
          <button type="button" onclick="openAddSubjectModal()" class="px-3 py-2 rounded-xl text-xs font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 transition flex items-center gap-1.5">
            <span>➕</span> <span>Pilih & Tambah Mapel</span>
          </button>
        </div>
      </div>

      <!-- Wrapper Tabel Responsif -->
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs border-collapse">
          <thead>
            <tr class="bg-slate-50 dark:bg-slate-900/60 text-slate-500 dark:text-slate-400 font-bold border-y border-slate-200 dark:border-slate-700">
              <th class="py-3 px-3 text-center w-10">No</th>
              <th class="py-3 px-3 min-w-[200px]">Mata Pelajaran SMA/MA</th>
              <th class="py-3 px-1.5 text-center min-w-[60px]">Smt 1</th>
              <th class="py-3 px-1.5 text-center min-w-[60px]">Smt 2</th>
              <th class="py-3 px-1.5 text-center min-w-[60px]">Smt 3</th>
              <th class="py-3 px-1.5 text-center min-w-[60px]">Smt 4</th>
              <th class="py-3 px-1.5 text-center min-w-[60px]">Smt 5</th>
              <th class="py-3 px-3 text-center w-20">Rata-rata</th>
              <th class="py-3 px-2 text-center w-12">Aksi</th>
            </tr>
          </thead>
          <tbody id="snbp-table-body">
            ${rowsHtml}
          </tbody>
        </table>
      </div>

      <!-- Action Footer Buttons -->
      <div class="pt-4 border-t border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3">
        <button type="button" onclick="handleResetSnbpGrades()" class="px-4 py-2.5 rounded-xl border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-xs font-bold transition flex items-center gap-1.5 self-start sm:self-auto">
          <span>🗑️</span> <span>Kosongkan Seluruh Nilai</span>
        </button>

        <div class="flex items-center gap-2.5 w-full sm:w-auto justify-end">
          <button type="button" onclick="openAddSubjectModal()" class="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition flex items-center justify-center gap-1.5">
            <span>➕</span> <span>Pilih & Tambah Mapel</span>
          </button>
          <button type="button" onclick="handleSaveSnbpForm()" class="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white text-xs font-extrabold shadow-md shadow-indigo-600/20 transition flex items-center justify-center gap-2">
            <span>💾</span> <span>Simpan Nilai Rapor</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Panduan & Strategi Lolos SNBP 2026 -->
    <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-5 sm:p-7 shadow-sm space-y-4">
      <div class="flex items-center gap-2.5">
        <span class="text-2xl">💡</span>
        <div>
          <h4 class="font-black text-slate-900 dark:text-white text-sm sm:text-base">Kunci & Rahasia Penilaian SNBP 2026</h4>
          <p class="text-xs text-slate-500 dark:text-slate-400">Aturan resmi BPPP Kemdiktisaintek untuk Seleksi Nasional Berdasarkan Prestasi.</p>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs text-slate-600 dark:text-slate-300">
        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/60 space-y-1.5">
          <div class="font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
            <span>1.</span>
            <span>Komponen Utama (Min 50%)</span>
          </div>
          <p class="leading-relaxed text-slate-500 dark:text-slate-400">
            Dihitung dari rata-rata seluruh mata pelajaran tanpa terkecuali. Tren nilai yang konsisten naik dari semester 1 ke 5 memiliki poin plus tinggi.
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/60 space-y-1.5">
          <div class="font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
            <span>2.</span>
            <span>Mapel Pendukung Prodi (Maks 50%)</span>
          </div>
          <p class="leading-relaxed text-slate-500 dark:text-slate-400">
            Sesuai Kepmendikbudristek No. 345/M/2022, PTN menilai nilai mapel yang linier dengan prodi pilihan (misal: Biologi untuk Kedokteran, MTK untuk Teknik).
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/60 space-y-1.5">
          <div class="font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
            <span>3.</span>
            <span>Sertifikat & Indeks Alumni</span>
          </div>
          <p class="leading-relaxed text-slate-500 dark:text-slate-400">
            Prestasi OSN, O2SN, FLS2N, LKTI, serta rekam jejak kakak kelas/alumni sekolah yang sedang kuliah di PTN tujuan sangat memengaruhi kelulusan.
          </p>
        </div>
      </div>
    </div>
  `;
}

// 6. EVENT HANDLERS INTERAKTIF
function onSnbpGradeInput(rowIndex, semIndex, value) {
  if (!currentSnbpGrades[rowIndex]) return;
  const cleanVal = value.trim();
  const num = parseFloat(cleanVal);

  if (cleanVal === "") {
    currentSnbpGrades[rowIndex]["sem" + semIndex] = "";
  } else if (!isNaN(num)) {
    const clamped = Math.max(0, Math.min(100, num));
    currentSnbpGrades[rowIndex]["sem" + semIndex] = clamped;
  }

  // Auto-save senyap
  saveSnbpGradesToStorage(currentSnbpGrades, false);

  // Update real-time baris tabel & rata-rata atas tanpa refresh penuh agar kursor tidak lompat
  updateSnbpLiveStats();
}

function onSnbpSubjectSelectChange(rowIndex, value) {
  if (!currentSnbpGrades[rowIndex]) return;
  if (value === "__CUSTOM__") {
    currentSnbpGrades[rowIndex].subject = "Mapel Pilihan Sekolah";
  } else {
    currentSnbpGrades[rowIndex].subject = value;
  }
  saveSnbpGradesToStorage(currentSnbpGrades, false);
  renderSnbpRaporView();
}

function onSnbpSubjectCustomInput(rowIndex, value) {
  if (!currentSnbpGrades[rowIndex]) return;
  currentSnbpGrades[rowIndex].subject = value.trim() || "Mapel Khusus";
  saveSnbpGradesToStorage(currentSnbpGrades, false);
}

function onSnbpSubjectRevertPreset(rowIndex) {
  if (!currentSnbpGrades[rowIndex]) return;
  currentSnbpGrades[rowIndex].subject = UNIFIED_SMA_SUBJECTS[0];
  saveSnbpGradesToStorage(currentSnbpGrades, false);
  renderSnbpRaporView();
}

// MODAL PILIH MATA PELAJARAN (SNBP)
function openAddSubjectModal() {
  const modal = document.getElementById("add-subject-modal");
  if (!modal) return;

  const selectEl = document.getElementById("modal-subject-select");
  const chipsContainer = document.getElementById("modal-subject-chips");
  const customWrapper = document.getElementById("modal-custom-subject-wrapper");
  const customInput = document.getElementById("modal-custom-subject-input");

  if (customWrapper) customWrapper.classList.add("hidden");
  if (customInput) customInput.value = "";

  const existingSubjects = currentSnbpGrades.map(g => (g.subject || "").trim().toLowerCase());

  // 1. Populate Dropdown Options
  if (selectEl) {
    let optionsHtml = '<option value="" disabled selected>-- Silakan Pilih Mata Pelajaran --</option>';
    
    optionsHtml += '<optgroup label="── 24 Mapel Kurikulum Merdeka SMA/MA ──">';
    UNIFIED_SMA_SUBJECTS.forEach(subj => {
      const isAlreadyAdded = existingSubjects.includes(subj.toLowerCase());
      optionsHtml += `
        <option value="${escapeHtml(subj)}">
          ${subj} ${isAlreadyAdded ? '✓ (Sudah ada di rapor)' : ''}
        </option>
      `;
    });
    optionsHtml += '</optgroup>';

    optionsHtml += '<option value="__CUSTOM__">➕ Ketik Nama Mapel Sendiri (Custom)...</option>';

    selectEl.innerHTML = optionsHtml;
  }

  // 2. Populate Quick Chips (Mapel yang belum ada di tabel)
  if (chipsContainer) {
    const unadded = UNIFIED_SMA_SUBJECTS.filter(s => !existingSubjects.includes(s.toLowerCase()));
    if (unadded.length > 0) {
      chipsContainer.innerHTML = unadded.map(subj => `
        <button type="button" onclick="selectSubjectFromChip('${escapeHtml(subj)}')"
          class="px-2.5 py-1 rounded-xl text-[11px] font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-600 hover:text-white transition flex items-center gap-1">
          <span>+</span> <span>${subj}</span>
        </button>
      `).join("");
    } else {
      chipsContainer.innerHTML = '<span class="text-[11px] text-slate-400 italic">Seluruh mapel standar telah ada di tabel rapor. Kamu juga bisa menambah mapel kustom di atas.</span>';
    }
  }

  modal.classList.remove("hidden");
}

function closeAddSubjectModal() {
  const modal = document.getElementById("add-subject-modal");
  if (modal) modal.classList.add("hidden");
}

function onModalSubjectSelectChange(val) {
  const customWrapper = document.getElementById("modal-custom-subject-wrapper");
  const customInput = document.getElementById("modal-custom-subject-input");
  if (val === "__CUSTOM__") {
    if (customWrapper) customWrapper.classList.remove("hidden");
    if (customInput) customInput.focus();
  } else {
    if (customWrapper) customWrapper.classList.add("hidden");
  }
}

function selectSubjectFromChip(subjName) {
  const selectEl = document.getElementById("modal-subject-select");
  const customWrapper = document.getElementById("modal-custom-subject-wrapper");
  if (selectEl) {
    selectEl.value = subjName;
  }
  if (customWrapper) customWrapper.classList.add("hidden");
}

function confirmAddSelectedSubject() {
  const selectEl = document.getElementById("modal-subject-select");
  const customInput = document.getElementById("modal-custom-subject-input");

  let subjectToAdd = selectEl ? selectEl.value : "";
  if (!subjectToAdd) {
    alert("Silakan pilih mata pelajaran terlebih dahulu dari daftar!");
    return;
  }

  if (subjectToAdd === "__CUSTOM__") {
    subjectToAdd = customInput ? customInput.value.trim() : "";
    if (!subjectToAdd) {
      alert("Silakan ketik nama mata pelajaran kustom!");
      if (customInput) customInput.focus();
      return;
    }
  }

  // Tambahkan baris baru dengan nama mapel yang DIPILIH oleh user
  currentSnbpGrades.push({
    subject: subjectToAdd,
    sem1: "",
    sem2: "",
    sem3: "",
    sem4: "",
    sem5: ""
  });

  saveSnbpGradesToStorage(currentSnbpGrades, false);
  closeAddSubjectModal();
  renderSnbpRaporView();

  if (typeof showXpNotification === "function") {
    showXpNotification(0, `Mata pelajaran "${subjectToAdd}" berhasil ditambahkan ke rapor! 📚`);
  }
}

function addSnbpSubjectRow(subjectName = "") {
  if (!subjectName) {
    openAddSubjectModal();
    return;
  }

  currentSnbpGrades.push({
    subject: subjectName,
    sem1: "",
    sem2: "",
    sem3: "",
    sem4: "",
    sem5: ""
  });

  saveSnbpGradesToStorage(currentSnbpGrades, false);
  renderSnbpRaporView();
}

function removeSnbpSubjectRow(rowIndex) {
  if (currentSnbpGrades.length <= 1) {
    alert("Minimal harus ada 1 mata pelajaran!");
    return;
  }
  currentSnbpGrades.splice(rowIndex, 1);
  saveSnbpGradesToStorage(currentSnbpGrades, false);
  renderSnbpRaporView();
}

function handleLoadDefaultSmaSubjects() {
  if (currentSnbpGrades.length > 0) {
    if (!confirm("Muat 10 mata pelajaran standar SMA Kurikulum Merdeka? Mata pelajaran saat ini akan digantikan.")) {
      return;
    }
  }

  currentSnbpGrades = DEFAULT_STANDARD_SMA_SUBJECTS.map(subj => ({
    subject: subj,
    sem1: "",
    sem2: "",
    sem3: "",
    sem4: "",
    sem5: ""
  }));

  saveSnbpGradesToStorage(currentSnbpGrades, true);
  renderSnbpRaporView();
}

function handleSaveSnbpForm() {
  saveSnbpGradesToStorage(currentSnbpGrades, true);
  if (typeof triggerConfetti === "function") {
    triggerConfetti();
  }
  renderSnbpRaporView();
}

function handleResetSnbpGrades() {
  if (confirm("Apakah kamu yakin ingin mengosongkan seluruh nilai rapor yang telah diinput?")) {
    currentSnbpGrades.forEach(row => {
      row.sem1 = "";
      row.sem2 = "";
      row.sem3 = "";
      row.sem4 = "";
      row.sem5 = "";
    });
    saveSnbpGradesToStorage(currentSnbpGrades, true);
    renderSnbpRaporView();
  }
}

function updateSnbpLiveStats() {
  // Update baris rata-rata live jika memungkinkan
  const tableBody = document.getElementById("snbp-table-body");
  if (!tableBody) return;

  const rows = tableBody.querySelectorAll("tr");
  rows.forEach((tr, idx) => {
    if (currentSnbpGrades[idx]) {
      const avg = calculateSubjectRowAvg(currentSnbpGrades[idx]);
      const avgCell = tr.children[7];
      if (avgCell) {
        avgCell.textContent = avg > 0 ? avg.toFixed(1) : "-";
      }
    }
  });
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// 7. WINDOW BINDINGS
window.UNIFIED_SMA_SUBJECTS = UNIFIED_SMA_SUBJECTS;
window.renderSnbpRaporView = renderSnbpRaporView;
window.onSnbpGradeInput = onSnbpGradeInput;
window.onSnbpSubjectSelectChange = onSnbpSubjectSelectChange;
window.onSnbpSubjectCustomInput = onSnbpSubjectCustomInput;
window.onSnbpSubjectRevertPreset = onSnbpSubjectRevertPreset;
window.addSnbpSubjectRow = addSnbpSubjectRow;
window.removeSnbpSubjectRow = removeSnbpSubjectRow;
window.handleLoadDefaultSmaSubjects = handleLoadDefaultSmaSubjects;
window.handleSaveSnbpForm = handleSaveSnbpForm;
window.handleResetSnbpGrades = handleResetSnbpGrades;
window.openAddSubjectModal = openAddSubjectModal;
window.closeAddSubjectModal = closeAddSubjectModal;
window.onModalSubjectSelectChange = onModalSubjectSelectChange;
window.selectSubjectFromChip = selectSubjectFromChip;
window.confirmAddSelectedSubject = confirmAddSelectedSubject;
