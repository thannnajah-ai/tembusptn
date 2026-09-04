// CBT Try Out Engine & IRT Scoring (Sainsin & Bisa dan Edu Style)
// Mensimulasikan antarmuka ujian resmi SNPMB BPPP

var STORAGE_KEY_TO_HISTORY = typeof STORAGE_KEY_TO_HISTORY !== "undefined" ? STORAGE_KEY_TO_HISTORY : "utbk_tryout_history";

class CBTEngine {
  constructor(questions, onFinishCallback, sessionMeta = {}) {
    this.questions = questions || [];
    this.currentIndex = 0;
    this.answers = {}; // { [qId]: { selected: "A", isDoubtful: false, answeredAt: timestamp } }
    this.timerInterval = null;
    this.sessionMeta = sessionMeta || {};
    const defaultDuration = this.sessionMeta.durationMinutes || 25;
    this.totalSeconds = defaultDuration * 60;
    this.remainingSeconds = this.totalSeconds;
    this.isFinished = false;
    this.onFinishCallback = onFinishCallback;
    this.startTime = Date.now();
  }

  start(durationMinutes) {
    const mins = durationMinutes || (this.sessionMeta && this.sessionMeta.durationMinutes) || 25;
    this.totalSeconds = mins * 60;
    this.remainingSeconds = this.totalSeconds;
    this.currentIndex = 0;
    this.answers = {};
    this.isFinished = false;
    this.startTime = Date.now();

    this.startTimer();
  }

  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.remainingSeconds--;
      if (typeof window !== "undefined" && window.renderCbtTimer) {
        window.renderCbtTimer(this.remainingSeconds);
      }

      if (this.remainingSeconds <= 0) {
        clearInterval(this.timerInterval);
        this.submitExam(true); // Auto submit on timeout
      }
    }, 1000);
  }

  getCurrentQuestion() {
    return this.questions[this.currentIndex];
  }

  selectOption(optionKey) {
    const q = this.getCurrentQuestion();
    if (!q || this.isFinished) return;

    if (!this.answers[q.id]) {
      this.answers[q.id] = { selected: optionKey, isDoubtful: false };
    } else {
      this.answers[q.id].selected = optionKey;
    }
  }

  toggleDoubtful() {
    const q = this.getCurrentQuestion();
    if (!q || this.isFinished) return;

    if (!this.answers[q.id]) {
      this.answers[q.id] = { selected: null, isDoubtful: true };
    } else {
      this.answers[q.id].isDoubtful = !this.answers[q.id].isDoubtful;
    }
  }

  goTo(index) {
    if (index >= 0 && index < this.questions.length) {
      this.currentIndex = index;
    }
  }

  next() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  // Ringkasan status jawaban untuk lembar navigasi
  getQuestionStatus(index) {
    const q = this.questions[index];
    if (!q) return "unanswered";
    const ans = this.answers[q.id];
    if (!ans) return "unanswered";

    if (ans.isDoubtful) return "doubtful";
    if (ans.selected) return "answered";
    return "unanswered";
  }

  getSummaryStats() {
    let answered = 0;
    let doubtful = 0;
    let empty = 0;

    this.questions.forEach(q => {
      const ans = this.answers[q.id];
      if (ans && ans.selected) {
        answered++;
        if (ans.isDoubtful) doubtful++;
      } else {
        empty++;
      }
    });

    return { total: this.questions.length, answered, doubtful, empty };
  }

  // Kalkulasi Skor dengan Model Item Response Theory (IRT) Realistis
  calculateIRTScore() {
    // Bobot kesulitan soal: Mudah (1.0), Sedang (1.4), HOTS (1.9)
    const weights = { "Mudah": 1.0, "Sedang": 1.4, "HOTS": 1.9 };
    
    // Kelompokkan per subtes
    const subtestScores = {};
    let totalWeightedScore = 0;
    let maxPossibleWeightedScore = 0;

    this.questions.forEach(q => {
      const subId = q.subtest;
      if (!subtestScores[subId]) {
        subtestScores[subId] = {
          subtestName: q.subtestName,
          total: 0,
          correct: 0,
          wrong: 0,
          empty: 0,
          rawScore: 0,
          maxRawScore: 0
        };
      }

      const weight = weights[q.difficulty] || 1.2;
      subtestScores[subId].total++;
      subtestScores[subId].maxRawScore += weight;
      maxPossibleWeightedScore += weight;

      const userAns = this.answers[q.id];
      if (!userAns || !userAns.selected) {
        subtestScores[subId].empty++;
      } else if (userAns.selected === q.correctAnswer) {
        subtestScores[subId].correct++;
        subtestScores[subId].rawScore += weight;
        totalWeightedScore += weight;
      } else {
        subtestScores[subId].wrong++;
      }
    });

    // Transformasi skala skor SNBT (Skala 200 s.d. 850)
    // Formula regresi skala standar: Skor = 250 + (ProporsiBobot * 600)
    Object.keys(subtestScores).forEach(subId => {
      const item = subtestScores[subId];
      const ratio = item.maxRawScore > 0 ? (item.rawScore / item.maxRawScore) : 0;
      // Kurva respons: sedikit bonus untuk akurasi tinggi
      const irtScaled = Math.round(260 + (Math.pow(ratio, 0.95) * 580));
      item.irtScore = Math.min(845, Math.max(260, irtScaled));
      item.accuracy = Math.round(ratio * 100);
    });

    const overallRatio = maxPossibleWeightedScore > 0 ? (totalWeightedScore / maxPossibleWeightedScore) : 0;
    const overallIRT = Math.round(260 + (Math.pow(overallRatio, 0.95) * 580));

    const totalSecondsSpent = Math.max(1, this.totalSeconds - this.remainingSeconds);

    return {
      overallScore: Math.min(845, Math.max(260, overallIRT)),
      subtestScores,
      totalQuestions: this.questions.length,
      correctCount: Object.values(subtestScores).reduce((acc, s) => acc + s.correct, 0),
      wrongCount: Object.values(subtestScores).reduce((acc, s) => acc + s.wrong, 0),
      emptyCount: Object.values(subtestScores).reduce((acc, s) => acc + s.empty, 0),
      durationSeconds: totalSecondsSpent,
      completedAt: new Date().toISOString(),
      questions: this.questions
    };
  }

  submitExam(isAuto = false) {
    if (this.isFinished) return;
    this.isFinished = true;
    if (this.timerInterval) clearInterval(this.timerInterval);

    const result = this.calculateIRTScore();
    result.isAutoSubmitted = isAuto;
    result.sessionMeta = this.sessionMeta || {};
    result.sessionTitle = (this.sessionMeta && this.sessionMeta.title) || "Try Out CBT";
    result.track = (this.sessionMeta && this.sessionMeta.track) || "saintek";
    result.stage = (this.sessionMeta && this.sessionMeta.stage) || null;
    result.mode = (this.sessionMeta && this.sessionMeta.mode) || "stage";

    // Simpan ke riwayat Try Out
    saveTryOutHistory(result);

    // Update profil pengguna (XP + 200 HANYA JIKA menjawab seluruh butir soal tanpa ada yang kosong)
    const isAllAnswered = result.emptyCount === 0;
    result.isAllAnswered = isAllAnswered;
    result.earnedXp = isAllAnswered ? 200 : 0;

    if (isAllAnswered) {
      if (typeof addXp === "function") {
        addXp(200, `Selesai Menjawab Semua Soal ${result.sessionTitle}`);
      }
    } else {
      if (typeof showXpNotification === "function") {
        showXpNotification(0, `⚠️ Tidak mendapat XP: Masih ada ${result.emptyCount} soal belum dijawab!`);
      }
    }

    const profile = typeof getUserProfile === "function" ? getUserProfile() : null;
    if (profile) {
      profile.tryoutsCompleted = (profile.tryoutsCompleted || 0) + 1;
      profile.totalQuestions = (profile.totalQuestions || 0) + result.totalQuestions;
      profile.correctQuestions = (profile.correctQuestions || 0) + result.correctCount;
      if (result.overallScore > (profile.highestScore || 0)) {
        profile.highestScore = result.overallScore;
      }
      if (typeof saveUserProfile === "function") {
        saveUserProfile(profile);
      }
    }

    if (this.onFinishCallback) {
      this.onFinishCallback(result, this.answers);
    }
  }
}

// Simpan riwayat TO ke LocalStorage & Registry Pengguna Aktif
function saveTryOutHistory(result) {
  // 1. Simpan ke Registry Multi-User jika tersedia
  if (typeof getAllUsers === "function" && typeof saveAllUsers === "function" && typeof getActiveUserId === "function") {
    try {
      const users = getAllUsers();
      const activeId = getActiveUserId();
      if (users && users[activeId]) {
        users[activeId].tryoutHistory = users[activeId].tryoutHistory || [];
        users[activeId].tryoutHistory.unshift(result);
        if (users[activeId].tryoutHistory.length > 15) {
          users[activeId].tryoutHistory = users[activeId].tryoutHistory.slice(0, 15);
        }
        // Update statistik profil user
        if (users[activeId].profile) {
          users[activeId].profile.tryoutsCompleted = (users[activeId].profile.tryoutsCompleted || 0) + 1;
          users[activeId].profile.highestScore = Math.max(users[activeId].profile.highestScore || 0, result.overallScore || 0);
        }
        saveAllUsers(users);
        localStorage.setItem(STORAGE_KEY_TO_HISTORY, JSON.stringify(users[activeId].tryoutHistory));
        return;
      }
    } catch (e) {
      console.error("Error saving tryout to registry:", e);
    }
  }

  // 2. Fallback Standalone Storage
  let history = [];
  const saved = localStorage.getItem(STORAGE_KEY_TO_HISTORY);
  if (saved) {
    try { history = JSON.parse(saved); } catch (e) { history = []; }
  }
  history.unshift(result);
  if (history.length > 15) history = history.slice(0, 15);
  localStorage.setItem(STORAGE_KEY_TO_HISTORY, JSON.stringify(history));
}

function getTryOutHistory() {
  // 1. Ambil dari Registry Pengguna Aktif
  if (typeof getCurrentUser === "function") {
    try {
      const user = getCurrentUser();
      if (user && Array.isArray(user.tryoutHistory)) {
        return user.tryoutHistory;
      }
    } catch (e) {
      console.error("Error reading tryout from currentUser:", e);
    }
  }

  // 2. Fallback Standalone Storage
  const saved = localStorage.getItem(STORAGE_KEY_TO_HISTORY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      return [];
    }
  }
  return [];
}

// ============================================================
// GENERATOR SOAL TRY OUT BERTAHAP & SIMULASI UTBK PENUH
// ============================================================

function getSubtestPool(subtestId) {
  let all = [];
  if (typeof QUESTIONS_DATA !== "undefined") {
    all = QUESTIONS_DATA;
  } else if (typeof window !== "undefined" && window.QUESTIONS_DATA) {
    all = window.QUESTIONS_DATA;
  }
  return all.filter(q => q.subtest === subtestId);
}

function getDiverseSample(pool, count, stageNumber = 1) {
  if (!pool || pool.length === 0) return [];
  if (pool.length <= count) return [...pool];

  const stage = Math.max(1, parseInt(stageNumber, 10) || 1);

  // Kelompokkan per kategori/topik agar soal dalam 1 sesi tidak berulang polanya
  const byCat = {};
  pool.forEach(q => {
    const cat = q.category || "Umum";
    if (!byCat[cat]) byCat[cat] = [];
    byCat[cat].push(q);
  });

  const catNames = Object.keys(byCat);
  // Urutkan kategori secara deterministik berbasis stage agar setiap stage mendapatkan variasi unik
  catNames.sort((a, b) => {
    const hashA = (a.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) * 19 + stage * 37) % 1000;
    const hashB = (b.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) * 19 + stage * 37) % 1000;
    return hashA - hashB;
  });

  const selected = [];
  const selectedIds = new Set();
  let round = 0;

  while (selected.length < count && round < pool.length) {
    for (const cat of catNames) {
      if (selected.length >= count) break;
      const list = byCat[cat];
      const idx = (Math.floor((stage - 1) * 3) + round) % list.length;
      const candidate = list[idx];
      if (candidate && !selectedIds.has(candidate.id)) {
        selected.push(candidate);
        selectedIds.add(candidate.id);
      }
    }
    round++;
  }

  // Lengkapi jika jumlah kategori lebih sedikit dari count yang dibutuhkan
  if (selected.length < count) {
    const stride = Math.max(1, Math.floor(pool.length / count));
    for (let i = 0; i < pool.length && selected.length < count; i++) {
      const candidate = pool[(i * stride + stage * 7) % pool.length];
      if (candidate && !selectedIds.has(candidate.id)) {
        selected.push(candidate);
        selectedIds.add(candidate.id);
      }
    }
  }

  return selected;
}

function sliceQuestions(pool, count, stageNumber) {
  return getDiverseSample(pool, count, stageNumber);
}

/**
 * 1. Generator TO Bertahap (TO-1, TO-2, dst)
 * Spesifikasi:
 * - 25 Soal & 25 Menit
 * - Pilihan Track: Saintek atau Soshum
 * - Pembagian 50:50 yang adil:
 *   * 13 Soal UTBK (TPS & Literasi):
 *     - PU: 2 soal
 *     - PPU: 2 soal
 *     - PBM: 2 soal
 *     - PK: 2 soal
 *     - Literasi Bhs Indonesia: 2 soal
 *     - Literasi Bhs Inggris: 2 soal
 *     - Penalaran Matematika: 1 soal
 *     (Total UTBK = 13 soal)
 *   * 12 Soal TKA:
 *     - Saintek: TKA Mat (3), TKA Fis (3), TKA Kim (3), TKA Bio (3) = 12 soal
 *     - Soshum: TKA Eko (3), TKA Geo (3), TKA Sej (3), TKA Sos (3) = 12 soal
 *   * Total = 13 + 12 = 25 Soal!
 */
function generateStageToQuestions(track, stageNumber) {
  const normTrack = (track || 'saintek').toLowerCase();
  const stage = Math.max(1, parseInt(stageNumber, 10) || 1);

  const utbkPlan = [
    { id: 'pu', count: 2 },
    { id: 'ppu', count: 2 },
    { id: 'pbm', count: 2 },
    { id: 'pk', count: 2 },
    { id: 'lit_indo', count: 2 },
    { id: 'lit_ing', count: 2 },
    { id: 'pm', count: 1 }
  ];

  const tkaPlan = normTrack === 'soshum'
    ? [
        { id: 'tka_eko', count: 3 },
        { id: 'tka_geo', count: 3 },
        { id: 'tka_sej', count: 3 },
        { id: 'tka_sos', count: 3 }
      ]
    : [
        { id: 'tka_mat', count: 3 },
        { id: 'tka_fis', count: 3 },
        { id: 'tka_kim', count: 3 },
        { id: 'tka_bio', count: 3 }
      ];

  const stageQuestions = [];

  utbkPlan.forEach(item => {
    const pool = getSubtestPool(item.id);
    stageQuestions.push(...sliceQuestions(pool, item.count, stage));
  });

  tkaPlan.forEach(item => {
    const pool = getSubtestPool(item.id);
    stageQuestions.push(...sliceQuestions(pool, item.count, stage));
  });

  return stageQuestions;
}

/**
 * 2. Generator Simulasi UTBK Penuh (Full UTBK Official Standard)
 * Teknis sama seperti UTBK SNBT umum BPPP:
 * - 70 Soal TPS & Literasi penuh (10 butir per subtes)
 * - Atau 90 Soal jika digabung dengan TKA peminatan Saintek/Soshum
 */
function generateFullUtbkQuestions(track = 'all', sessionSeed = null) {
  const normTrack = (track || 'all').toLowerCase();
  const seed = sessionSeed !== null ? sessionSeed : (Math.floor(Date.now() / (1000 * 60 * 15)) % 50 + 1);
  const utbkPlan = [
    { id: 'pu', count: 10 },
    { id: 'ppu', count: 10 },
    { id: 'pbm', count: 10 },
    { id: 'pk', count: 10 },
    { id: 'lit_indo', count: 10 },
    { id: 'lit_ing', count: 10 },
    { id: 'pm', count: 10 }
  ];

  const questions = [];
  utbkPlan.forEach(item => {
    const pool = getSubtestPool(item.id);
    questions.push(...sliceQuestions(pool, item.count, seed));
  });

  if (normTrack === 'saintek') {
    const tkaPlan = [
      { id: 'tka_mat', count: 5 },
      { id: 'tka_fis', count: 5 },
      { id: 'tka_kim', count: 5 },
      { id: 'tka_bio', count: 5 }
    ];
    tkaPlan.forEach(item => {
      const pool = getSubtestPool(item.id);
      questions.push(...sliceQuestions(pool, item.count, seed));
    });
  } else if (normTrack === 'soshum') {
    const tkaPlan = [
      { id: 'tka_eko', count: 5 },
      { id: 'tka_geo', count: 5 },
      { id: 'tka_sej', count: 5 },
      { id: 'tka_sos', count: 5 }
    ];
    tkaPlan.forEach(item => {
      const pool = getSubtestPool(item.id);
      questions.push(...sliceQuestions(pool, item.count, seed));
    });
  }

  return questions;
}

// Cek status pengerjaan stage tertentu
function getCompletedStageInfo(track, stageNumber) {
  const history = getTryOutHistory();
  if (!Array.isArray(history)) return null;

  const matches = history.filter(h => {
    if (h.sessionMeta) {
      return (
        h.sessionMeta.mode === 'stage' &&
        h.sessionMeta.track === track &&
        parseInt(h.sessionMeta.stage, 10) === parseInt(stageNumber, 10)
      );
    }
    return h.track === track && parseInt(h.stage, 10) === parseInt(stageNumber, 10);
  });

  if (matches.length === 0) return null;

  // Cari skor tertinggi
  matches.sort((a, b) => (b.overallScore || 0) - (a.overallScore || 0));
  return matches[0];
}

if (typeof window !== "undefined") {
  window.CBTEngine = CBTEngine;
  window.saveTryOutHistory = saveTryOutHistory;
  window.getTryOutHistory = getTryOutHistory;
  window.generateStageToQuestions = generateStageToQuestions;
  window.generateFullUtbkQuestions = generateFullUtbkQuestions;
  window.getCompletedStageInfo = getCompletedStageInfo;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    CBTEngine,
    saveTryOutHistory,
    getTryOutHistory,
    generateStageToQuestions,
    generateFullUtbkQuestions,
    getCompletedStageInfo
  };
}
