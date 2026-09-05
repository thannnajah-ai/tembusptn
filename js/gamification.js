// Gamification Engine (Skuling & Pahamify inspired)
// Mengelola Streak, XP, Level, Tier, Badges, dan Leaderboard

// Multi-User & Gamification Storage Keys
var STORAGE_KEY_USERS = "utbk_users_registry";
var STORAGE_KEY_ACTIVE_USER = "utbk_active_user_id";
var STORAGE_KEY_USER = "utbk_user_profile"; // legacy sync
var STORAGE_KEY_STATS = "utbk_user_stats";
var STORAGE_KEY_BOOKMARKS = "utbk_bookmarks";
var STORAGE_KEY_TO_HISTORY = typeof STORAGE_KEY_TO_HISTORY !== "undefined" ? STORAGE_KEY_TO_HISTORY : "utbk_tryout_history";

const TIERS = [
  { name: "Pemula (Bronze)", minXp: 0, maxXp: 300, color: "text-amber-700", bg: "bg-amber-100", border: "border-amber-300" },
  { name: "Pejuang (Silver)", minXp: 301, maxXp: 800, color: "text-slate-600", bg: "bg-slate-100", border: "border-slate-300" },
  { name: "Pemberani (Gold)", minXp: 801, maxXp: 1800, color: "text-yellow-600", bg: "bg-yellow-50", border: "border-yellow-400" },
  { name: "Master (Platinum)", minXp: 1801, maxXp: 3500, color: "text-cyan-600", bg: "bg-cyan-50", border: "border-cyan-400" },
  { name: "Legenda (Diamond)", minXp: 3501, maxXp: 999999, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-400" }
];

const BADGES_LIST = [
  { id: "first_blood", title: "Langkah Pertama", icon: "🌱", desc: "Menjawab 1 soal latihan dengan benar", condition: stats => (stats.correctQuestions || 0) >= 1 },
  { id: "streak_3", title: "Api Membara", icon: "🔥", desc: "Mencapai Streak belajar 3 hari berturut-turut", condition: stats => (stats.streak || 0) >= 3 },
  { id: "to_finisher", title: "Ksatria CBT", icon: "⚔️", desc: "Menuntaskan simulasi Try Out CBT resmi", condition: stats => (stats.tryoutsCompleted || 0) >= 1 },
  { id: "score_700", title: "Club 700+", icon: "👑", desc: "Mencapai skor IRT di atas 700 dalam Try Out", condition: stats => (stats.highestScore || 0) >= 700 },
  { id: "math_whiz", title: "Pawang Angka", icon: "📐", desc: "Menjawab 5 soal Pengetahuan Kuantitatif / PM dengan benar", condition: stats => (stats.mathCorrect || 0) >= 5 },
  { id: "speed_demon", title: "Kilat Cerdas", icon: "⚡", desc: "Mengumpulkan lebih dari 500 XP", condition: stats => (stats.xp || 0) >= 500 }
];

// ============================================================
// 1. MULTI-USER REGISTRY & AUTHENTICATION ENGINE
// ============================================================

// Mengambil seluruh registry akun terdaftar (Hanya user yang mendaftar murni)
function getAllUsers() {
  const saved = localStorage.getItem(STORAGE_KEY_USERS);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed && typeof parsed === 'object') {
        return parsed;
      }
    } catch (e) {
      console.error("Error reading users registry:", e);
    }
  }
  return {};
}

// Reset dan bersihkan seluruh data user & histori lokal
function resetAllUsersData() {
  if (typeof localStorage === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY_USERS);
  localStorage.removeItem(STORAGE_KEY_ACTIVE_USER);
  localStorage.removeItem(STORAGE_KEY_USER);
  localStorage.removeItem(STORAGE_KEY_STATS);
  localStorage.removeItem(STORAGE_KEY_TO_HISTORY);
  localStorage.removeItem(STORAGE_KEY_BOOKMARKS);
  localStorage.removeItem("utbk_cloud_users_sync_cache");
  localStorage.removeItem("utbk_cloud_last_sync");
  localStorage.removeItem("utbk_cloud_lb_cache_hari");
  localStorage.removeItem("utbk_cloud_lb_cache_minggu");
  localStorage.removeItem("utbk_cloud_lb_cache_bulan");
}

// Reset seluruh data pengguna (Lokal + Cloud Database Terpusat)
async function resetAllUsers() {
  resetAllUsersData();
  if (typeof window !== "undefined" && window.CloudLeaderboard && typeof window.CloudLeaderboard.resetCloudLeaderboard === "function") {
    await window.CloudLeaderboard.resetCloudLeaderboard();
  }
  if (typeof window !== "undefined") {
    if (typeof onUserSessionChanged === "function") {
      onUserSessionChanged();
    }
    if (typeof renderLeaderboard === "function") {
      renderLeaderboard();
    }
  }
  return { success: true, message: "Seluruh data user dan leaderboard berhasil di-reset menjadi kosong (0 user)!" };
}


// Bersihkan demo bot lama satu kali saja jika masih ada, TANPA menghapus akun user riil
(function purgeLegacyDemoUsers() {
  try {
    if (typeof localStorage === 'undefined') return;
    const migrationFlag = "utbk_legacy_bot_purged_v4";
    if (localStorage.getItem(migrationFlag)) return;

    const rawUsers = localStorage.getItem(STORAGE_KEY_USERS);
    if (rawUsers) {
      try {
        const users = JSON.parse(rawUsers);
        if (users && typeof users === 'object') {
          // Hanya hapus bot spesifik bawaan template lama jika ada
          const dummyKeys = ["usr_budi", "usr_siti", "usr_demo", "usr_ahmad", "usr_jessica"];
          let modified = false;
          dummyKeys.forEach(k => {
            if (users[k]) {
              delete users[k];
              modified = true;
            }
          });
          if (modified) {
            saveAllUsers(users);
          }
        }
      } catch(e) {}
    }
    localStorage.setItem(migrationFlag, "true");
  } catch(e) {}
})();

function saveAllUsers(users) {
  localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));
}

// Mendapatkan ID user yang saat ini sedang aktif / login di perangkat ini
function getActiveUserId() {
  let activeId = localStorage.getItem(STORAGE_KEY_ACTIVE_USER);
  const users = getAllUsers();
  if (activeId && users && users[activeId]) {
    return activeId;
  }

  // Resilient fallback: jika activeId tidak sengaja hilang, pulihkan otomatis
  const userKeys = Object.keys(users);
  if (userKeys.length === 1) {
    const fallbackId = userKeys[0];
    localStorage.setItem(STORAGE_KEY_ACTIVE_USER, fallbackId);
    return fallbackId;
  }

  try {
    const rawProfile = localStorage.getItem(STORAGE_KEY_USER);
    if (rawProfile) {
      const p = JSON.parse(rawProfile);
      if (p && (p.name || p.username)) {
        const matching = Object.values(users).find(u =>
          (p.username && u.username && u.username.toLowerCase() === p.username.toLowerCase()) ||
          (p.name && u.name && u.name.toLowerCase() === p.name.toLowerCase())
        );
        if (matching) {
          localStorage.setItem(STORAGE_KEY_ACTIVE_USER, matching.id);
          return matching.id;
        }
      }
    }
  } catch(e) {}

  return null;
}

// Cek apakah ada pengguna yang sedang login di perangkat ini
function isUserLoggedIn() {
  return Boolean(getActiveUserId());
}

// Mengganti sesi user aktif
function setActiveUserId(userId) {
  localStorage.setItem(STORAGE_KEY_ACTIVE_USER, userId);
  const users = getAllUsers();
  const current = users[userId];
  if (current) {
    // Sinkronisasi legacy storage
    localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(current.profile));
    localStorage.setItem(STORAGE_KEY_TO_HISTORY, JSON.stringify(current.tryoutHistory || []));
    localStorage.setItem(STORAGE_KEY_BOOKMARKS, JSON.stringify(current.bookmarks || []));
    if (current.theme) {
      localStorage.setItem("utbk_theme", current.theme);
    }
  }
}

// Mengambil objek user aktif saat ini
function getCurrentUser() {
  const users = getAllUsers();
  const activeId = getActiveUserId();
  if (activeId && users[activeId]) {
    return users[activeId];
  }
  return null;
}

// Validasi ketersediaan Nama Lengkap, Username & Email (Pencegahan Duplikasi Akun)
function checkCredentialsAvailableLocal(username, email, name = null, excludeUserId = null) {
  // Kompatibilitas jika argumen ke-3 adalah ID user: checkCredentialsAvailableLocal(username, email, excludeUserId)
  if (typeof name === "string" && name.startsWith("usr_") && !excludeUserId) {
    excludeUserId = name;
    name = null;
  }

  const cleanName = (name || "").trim().toLowerCase();
  const cleanUsername = (username || "").trim().toLowerCase();
  const cleanEmail = (email || "").trim().toLowerCase();

  const users = getAllUsers();
  const userList = Object.values(users);


  // 2. Cek duplikasi email di registry lokal
  if (cleanEmail) {
    const existingEmail = userList.find(u => 
      u.id !== excludeUserId && (
        (u.email && u.email.toLowerCase() === cleanEmail) ||
        (u.profile && u.profile.email && u.profile.email.toLowerCase() === cleanEmail)
      )
    );
    if (existingEmail) {
      return {
        success: false,
        field: "email",
        message: `Email "${cleanEmail}" sudah terdaftar! Silakan gunakan email lain atau silakan Masuk.`
      };
    }
  }

  // 3. Cek duplikasi username di registry lokal
  if (cleanUsername) {
    const existingUsername = userList.find(u => 
      u.id !== excludeUserId && (
        (u.username && u.username.toLowerCase() === cleanUsername) ||
        (u.profile && u.profile.username && u.profile.username.toLowerCase() === cleanUsername)
      )
    );
    if (existingUsername) {
      return {
        success: false,
        field: "username",
        message: `Username "@${cleanUsername}" sudah digunakan! Silakan pilih username yang lain.`
      };
    }
  }

  // 4. Cek juga di cache pengguna cloud yang tersimpan lokal (utbk_cloud_users_sync_cache)
  try {
    const cloudRaw = localStorage.getItem("utbk_cloud_users_sync_cache");
    if (cloudRaw) {
      const cloudUsers = Object.values(JSON.parse(cloudRaw));
      if (cleanName) {
        const foundCloudName = cloudUsers.find(u => u.id !== excludeUserId && u.name && u.name.trim().toLowerCase() === cleanName);
        if (foundCloudName) {
          return {
            success: false,
            field: "name",
            message: `Nama lengkap "${(name || '').trim()}" sudah terdaftar! Silakan gunakan nama lengkap lain.`
          };
        }
      }
      if (cleanEmail) {
        const foundCloudEmail = cloudUsers.find(u => u.id !== excludeUserId && u.email && u.email.toLowerCase() === cleanEmail);
        if (foundCloudEmail) {
          return {
            success: false,
            field: "email",
            message: `Email "${cleanEmail}" sudah terdaftar! Silakan gunakan email lain atau silakan Masuk.`
          };
        }
      }
      if (cleanUsername) {
        const foundCloudUser = cloudUsers.find(u => u.id !== excludeUserId && u.username && u.username.toLowerCase() === cleanUsername);
        if (foundCloudUser) {
          return {
            success: false,
            field: "username",
            message: `Username "@${cleanUsername}" sudah digunakan! Silakan pilih username yang lain.`
          };
        }
      }
    }
  } catch(e) {}

  return { success: true, field: null, message: "Kredensial tersedia" };
}

// Register Akun Baru
function registerUser({ name, username, email, password, avatar, targetPtn, targetMajorId, targetMajorName, targetScore }) {
  const trimmedName = (name || "").trim();
  const trimmedUsername = (username || "").trim().toLowerCase();
  const trimmedEmail = (email || "").trim().toLowerCase();
  const cleanPassword = (password || "").trim();

  if (!trimmedName) {
    return { success: false, field: "name", message: "Nama lengkap wajib diisi!" };
  }
  if (!trimmedUsername || trimmedUsername.length < 3) {
    return { success: false, field: "username", message: "Username minimal 3 karakter!" };
  }
  if (!trimmedEmail || !trimmedEmail.includes("@")) {
    return { success: false, field: "email", message: "Format email tidak valid!" };
  }
  if (!cleanPassword || cleanPassword.length < 3) {
    return { success: false, field: "password", message: "Password minimal 3 karakter!" };
  }

  // Validasi Kredensial Anti-Duplikasi (Nama Lengkap, Username, Email)
  const credCheck = checkCredentialsAvailableLocal(trimmedUsername, trimmedEmail, trimmedName);
  if (!credCheck.success) {
    return credCheck;
  }

  const users = getAllUsers();
  const newId = "usr_" + Date.now().toString(36) + Math.random().toString(36).substr(2, 4);
  const today = new Date().toISOString().split("T")[0];

  const newUser = {
    id: newId,
    name: trimmedName,
    username: trimmedUsername,
    email: trimmedEmail,
    password: cleanPassword,
    avatar: avatar || "👨‍🎓",
    theme: localStorage.getItem("utbk_theme") || "light",
    createdAt: today,
    profile: {
      name: trimmedName,
      username: trimmedUsername,
      email: trimmedEmail,
      avatar: avatar || "👨‍🎓",
      targetPtn: targetPtn || "ui",
      targetMajorId: targetMajorId || "ui-ilmu-komputer",
      targetMajorName: targetMajorName || "Ilmu Komputer (UI)",
      targetScore: targetScore || 718,
      targetPtn2: "itb",
      targetMajorId2: "itb-stei-komputasi-informati",
      targetMajorName2: "STEI - Komputasi (ITB)",
      xp: 0, // Akun baru mulai dari 0 XP (mencegah manipulasi bot pada leaderboard)
      xpHistory: [],
      masteredFlashcards: [],
      streak: 0,
      lastActiveDate: today,
      level: 1,
      totalQuestions: 0,
      correctQuestions: 0,
      tryoutsCompleted: 0,
      highestScore: 0,
      mathCorrect: 0,
      unlockedBadges: []
    },
    tryoutHistory: [],
    bookmarks: []
  };

  users[newId] = newUser;
  saveAllUsers(users);
  setActiveUserId(newId);

  // Sync akun baru ke Cloud Leaderboard seketika
  if (typeof window !== "undefined" && window.CloudLeaderboard && typeof window.CloudLeaderboard.syncUserToCloud === "function") {
    window.CloudLeaderboard.syncUserToCloud(newUser, newUser.profile, true);
  }

  return { success: true, user: newUser };
}

// Login atau Registrasi Instan via Google / Gmail
function loginOrRegisterWithGoogle({ name, email, avatar = "👨‍🎓", googleId = null }) {
  const cleanEmail = (email || "").trim().toLowerCase();
  if (!cleanEmail || !cleanEmail.includes("@")) {
    return { success: false, message: "Alamat email Gmail tidak valid!" };
  }

  const users = getAllUsers();
  const userList = Object.values(users);

  // 1. Cek apakah akun dengan email ini sudah pernah terdaftar sebelumnya
  let existing = userList.find(u => 
    (u.email && u.email.toLowerCase() === cleanEmail) ||
    (u.profile && u.profile.email && u.profile.email.toLowerCase() === cleanEmail)
  );

  if (existing) {
    // Akun sudah terdaftar -> Langsung Login seketika!
    setActiveUserId(existing.id);
    if (typeof window !== "undefined" && window.CloudLeaderboard && typeof window.CloudLeaderboard.syncUserToCloud === "function") {
      window.CloudLeaderboard.syncUserToCloud(existing, existing.profile || {}, true);
    }
    return { 
      success: true, 
      isNew: false, 
      user: existing,
      message: `Selamat datang kembali, ${existing.name}! Masuk via Google berhasil. 🎉`
    };
  }

  // 2. Akun belum ada -> Daftarkan secara otomatis dan langsung login!
  const emailPrefix = cleanEmail.split("@")[0].replace(/[^a-zA-Z0-9_]/g, "").toLowerCase() || "pejuang";
  let finalUsername = emailPrefix;
  let counter = 1;
  while (userList.some(u => (u.username && u.username.toLowerCase() === finalUsername.toLowerCase()) || (u.profile && u.profile.username && u.profile.username.toLowerCase() === finalUsername.toLowerCase()))) {
    finalUsername = `${emailPrefix}${counter}`;
    counter++;
  }

  const cleanName = (name || "").trim() || (emailPrefix.charAt(0).toUpperCase() + emailPrefix.slice(1));
  let finalName = cleanName;
  let nameCounter = 1;
  while (userList.some(u => (u.name && u.name.trim().toLowerCase() === finalName.toLowerCase()) || (u.profile && u.profile.name && u.profile.name.trim().toLowerCase() === finalName.toLowerCase()))) {
    finalName = `${cleanName} ${nameCounter}`;
    nameCounter++;
  }
  const autoPassword = "gauth_" + Math.random().toString(36).slice(2, 10);

  const res = registerUser({
    name: finalName,
    username: finalUsername,
    email: cleanEmail,
    password: autoPassword,
    avatar: avatar || "👨‍🎓"
  });

  if (res.success) {
    res.isNew = true;
    res.message = `Pendaftaran via Google berhasil! Selamat bergabung, ${finalName}! 🎉`;
  }

  return res;
}

// Login Akun (Mendukung Username, Email, atau Nama Lengkap)
function loginUser(identifier, password) {
  const cleanId = (identifier || "").trim().toLowerCase();
  const cleanPass = (password || "").trim();

  if (!cleanId || !cleanPass) {
    return { success: false, message: "Username/Email dan Password wajib diisi!" };
  }

  const users = getAllUsers();
  const foundUser = Object.values(users).find(u => 
    (u.username && u.username.toLowerCase() === cleanId) ||
    (u.email && u.email.toLowerCase() === cleanId) ||
    (u.name && u.name.toLowerCase() === cleanId)
  );

  if (!foundUser) {
    return { success: false, message: "Akun dengan Username atau Email tersebut tidak ditemukan." };
  }

  if (foundUser.password !== cleanPass) {
    return { success: false, message: "Kata sandi yang kamu masukkan keliru. Silakan coba lagi." };
  }

  setActiveUserId(foundUser.id);

  // Sync profil saat login ke Cloud Leaderboard
  if (typeof window !== "undefined" && window.CloudLeaderboard && typeof window.CloudLeaderboard.syncUserToCloud === "function") {
    window.CloudLeaderboard.syncUserToCloud(foundUser, foundUser.profile || {}, true);
  }

  return { success: true, user: foundUser };
}

// Logout Akun (Menghapus sesi aktif dari perangkat ini)
function logoutUser() {
  localStorage.removeItem(STORAGE_KEY_ACTIVE_USER);
  return { success: true };
}

// Inisialisasi Profil Pengguna Aktif
function getUserProfile() {
  const user = getCurrentUser();
  if (user && user.profile) {
    // Sinkronkan nama dan avatar
    user.profile.name = user.name || user.profile.name;
    user.profile.avatar = user.avatar || user.profile.avatar;
    user.profile.masteredFlashcards = Array.isArray(user.profile.masteredFlashcards) ? user.profile.masteredFlashcards : [];
    user.profile.xpHistory = Array.isArray(user.profile.xpHistory) ? user.profile.xpHistory : [];
    return user.profile;
  }

  // Fallback jika belum login: muat dari STORAGE_KEY_USER jika ada
  try {
    const raw = localStorage.getItem(STORAGE_KEY_USER);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") {
        parsed.masteredFlashcards = Array.isArray(parsed.masteredFlashcards) ? parsed.masteredFlashcards : [];
        parsed.xpHistory = Array.isArray(parsed.xpHistory) ? parsed.xpHistory : [];
        return parsed;
      }
    }
  } catch (e) {}

  // Fallback default jika belum ada data sama sekali
  return {
    name: "Pejuang PTN",
    avatar: "👨‍🎓",
    isGuest: true,
    targetPtn: "",
    targetMajorId: "",
    targetMajorName: "Belum Memilih Target",
    targetScore: 0,
    targetPtn2: "",
    targetMajorId2: "",
    targetMajorName2: "Belum Memilih Target",
    targetScore2: 0,
    xp: 0,
    streak: 0,
    lastActiveDate: new Date().toISOString().split("T")[0],
    level: 1,
    totalQuestions: 0,
    correctQuestions: 0,
    tryoutsCompleted: 0,
    highestScore: 0,
    mathCorrect: 0,
    unlockedBadges: [],
    xpHistory: [],
    masteredFlashcards: []
  };
}

function saveUserProfile(profile) {
  const users = getAllUsers();
  const activeId = getActiveUserId();
  if (users[activeId]) {
    users[activeId].profile = profile;
    if (profile.name) users[activeId].name = profile.name;
    if (profile.avatar) users[activeId].avatar = profile.avatar;
    saveAllUsers(users);

    // Sync perubahan profil ke Cloud Leaderboard
    if (typeof window !== "undefined" && window.CloudLeaderboard && typeof window.CloudLeaderboard.syncUserToCloud === "function") {
      window.CloudLeaderboard.syncUserToCloud(users[activeId], profile);
    }
  }
  localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(profile));
}

// Update Streak Harian Berdasarkan Tanggal
function updateStreak(profile) {
  const today = new Date().toISOString().split("T")[0];
  const lastActive = profile.lastActiveDate;

  if (lastActive === today) {
    return profile; // Sudah aktif hari ini
  }

  const todayDate = new Date(today);
  const lastDate = new Date(lastActive || today);
  const diffTime = Math.abs(todayDate - lastDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 1) {
    // Berkelanjutan kemarin
    profile.streak = (profile.streak || 0) + 1;
  } else if (diffDays > 1) {
    // Streak terputus, reset ke 1
    profile.streak = 1;
  }
  profile.lastActiveDate = today;
  saveUserProfile(profile);
  return profile;
}

// Menghitung Tier dan Level berdasarkan XP
function getTierAndLevel(xp) {
  let tier = TIERS[0];
  for (let t of TIERS) {
    if (xp >= t.minXp && xp <= t.maxXp) {
      tier = t;
      break;
    }
  }
  const level = Math.floor(xp / 150) + 1;
  const currentTierProgress = Math.min(100, Math.round(((xp - tier.minXp) / (tier.maxXp - tier.minXp)) * 100));
  const nextLevelXp = level * 150;
  const prevLevelXp = (level - 1) * 150;
  const levelProgress = Math.min(100, Math.round(((xp - prevLevelXp) / (nextLevelXp - prevLevelXp)) * 100));

  return { tier, level, currentTierProgress, levelProgress, nextLevelXp };
}

// Tambah XP dan beri feedback visual (Tercatat ke riwayat waktu untuk kategori Hari/Minggu/Bulan)
function addXp(amount, reason = "Latihan Soal") {
  const profile = getUserProfile();
  const oldLevel = Math.floor((profile.xp || 0) / 150) + 1;
  profile.xp = (profile.xp || 0) + amount;
  profile.lastEarnedAt = Date.now();
  const newLevel = Math.floor(profile.xp / 150) + 1;

  // Catat riwayat perolehan XP berdasarkan timestamp
  profile.xpHistory = profile.xpHistory || [];
  profile.xpHistory.push({
    amount,
    reason,
    timestamp: Date.now(),
    date: new Date().toISOString().split("T")[0]
  });
  if (profile.xpHistory.length > 200) {
    profile.xpHistory = profile.xpHistory.slice(-200);
  }

  // Cek Badge baru yang terbuka
  checkBadges(profile);

  saveUserProfile(profile);

  // Trigger notifikasi pop-up XP
  showXpNotification(amount, reason);

  // Jika naik level, beri selebrasi confetti!
  if (newLevel > oldLevel) {
    triggerConfetti();
    showLevelUpModal(newLevel);
  }

  if (typeof window !== "undefined" && window.renderHeaderStats) {
    window.renderHeaderStats();
  }

  // Real-time live update ke Leaderboard jika sedang aktif
  if (typeof window !== "undefined" && typeof window.renderLeaderboard === "function" && typeof activeTab !== "undefined" && activeTab === "leaderboard") {
    window.renderLeaderboard();
  }
}

// Menampilkan Toast Notifikasi (XP melayang atau pesan status)
function showXpNotification(amount, reason) {
  if (typeof document === "undefined") return;
  const isXp = typeof amount === "number" && amount > 0;
  const toast = document.createElement("div");
  toast.className = isXp
    ? "fixed top-20 right-6 z-50 flex items-center gap-2.5 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold px-4 py-2.5 rounded-xl shadow-xl transform transition-all duration-500 translate-y-[-20px] opacity-0 pointer-events-none"
    : "fixed top-20 right-6 z-50 flex items-center gap-2.5 bg-slate-900/95 dark:bg-slate-800 text-white px-4 py-2 rounded-xl shadow-xl border border-slate-700/60 transform transition-all duration-500 translate-y-[-20px] opacity-0 pointer-events-none backdrop-blur-md";
  toast.innerHTML = isXp ? `
    <span class="text-xl">⚡</span>
    <div>
      <div class="text-sm tracking-wide">+${amount} XP</div>
      <div class="text-[11px] font-normal opacity-90">${reason}</div>
    </div>
  ` : `
    <span class="text-base">✨</span>
    <div class="text-xs font-semibold text-slate-100">${reason}</div>
  `;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove("translate-y-[-20px]", "opacity-0");
    toast.classList.add("translate-y-0", "opacity-100");
  });

  setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("translate-y-[-20px]", "opacity-0");
    setTimeout(() => toast.remove(), 500);
  }, 2200);
}

// Selebrasi Confetti menggunakan canvas-confetti
function triggerConfetti() {
  if (typeof confetti === "function") {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

// Pop up Modal Naik Level
function showLevelUpModal(newLevel) {
  if (typeof document === "undefined") return;
  const modal = document.createElement("div");
  modal.className = "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in";
  modal.innerHTML = `
    <div class="bg-white rounded-2xl max-w-sm w-full p-6 text-center shadow-2xl border border-yellow-200 transform animate-bounce-short">
      <div class="w-20 h-20 mx-auto mb-4 bg-gradient-to-tr from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-4xl shadow-lg ring-4 ring-yellow-100">
        🏆
      </div>
      <span class="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wider">Level Up!</span>
      <h3 class="text-2xl font-black text-slate-800 mt-2 mb-1">Selamat! Kamu Naik ke Level ${newLevel}!</h3>
      <p class="text-sm text-slate-500 mb-6">Konsistensi belajarmu luar biasa. Selangkah lebih dekat dengan PTN impianmu!</p>
      <button id="btn-close-lvl" class="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-md hover:shadow-indigo-500/25 transition">
        Lanjutkan Berjuang 🚀
      </button>
    </div>
  `;
  document.body.appendChild(modal);
  const btn = document.getElementById("btn-close-lvl");
  if (btn) btn.onclick = () => modal.remove();
}

// Pengecekan Badges
function checkBadges(profile) {
  profile.unlockedBadges = profile.unlockedBadges || [];
  BADGES_LIST.forEach(b => {
    if (!profile.unlockedBadges.includes(b.id) && b.condition(profile)) {
      profile.unlockedBadges.push(b.id);
      showBadgeToast(b);
    }
  });
}

function showBadgeToast(badge) {
  const toast = document.createElement("div");
  toast.className = "fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-amber-400/40 animate-slide-up";
  toast.innerHTML = `
    <div class="text-3xl">${badge.icon}</div>
    <div>
      <div class="text-xs font-semibold text-amber-400 uppercase tracking-wider">Badge Terbuka!</div>
      <div class="text-sm font-bold">${badge.title}</div>
      <div class="text-xs text-slate-400">${badge.desc}</div>
    </div>
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

// Menghitung perolehan XP untuk kategori periode (Hari, Minggu, Bulan)
function getUserXpForPeriod(profile, period = 'hari') {
  if (!profile) return 0;
  const totalXp = profile.xp || 0;
  if (!Array.isArray(profile.xpHistory) || profile.xpHistory.length === 0) {
    return totalXp;
  }

  const now = Date.now();
  const oneDay = 24 * 60 * 60 * 1000;
  let cutoff = 0;

  if (period === 'hari') {
    cutoff = now - oneDay;
  } else if (period === 'minggu') {
    cutoff = now - (7 * oneDay);
  } else if (period === 'bulan') {
    cutoff = now - (30 * oneDay);
  } else {
    return totalXp;
  }

  const periodSum = profile.xpHistory
    .filter(item => {
      const t = item.timestamp || (item.date ? new Date(item.date).getTime() : 0);
      return t >= cutoff;
    })
    .reduce((sum, item) => sum + (item.amount || 0), 0);

  return Math.min(totalXp, periodSum);
}

// Leaderboard Lokal (Fallback jika offline atau tanpa koneksi cloud)
function getLeaderboardDataLocal(period = 'hari') {
  const activeUser = getCurrentUser();
  const allUsers = getAllUsers();

  // HANYA ambil pengguna yang memiliki XP > 0 (XP 0 tidak dimasukkan ke leaderboard)
  const registeredEntries = Object.values(allUsers)
    .map(u => {
      const isCurrent = activeUser && u.id === activeUser.id;
      const prof = u.profile || {};
      const periodXp = getUserXpForPeriod(prof, period);

      return {
        id: u.id,
        rank: 0,
        name: isCurrent ? (prof.name || u.name) + " (Kamu)" : (prof.name || u.name),
        rawName: prof.name || u.name,
        avatar: prof.avatar || u.avatar || "👨‍🎓",
        ptn: prof.targetMajorName || "Target PTN Belum Dipilih",
        xp: periodXp,
        totalXp: prof.xp || 0,
        streak: prof.streak || 0,
        isUser: !!isCurrent
      };
    })
    .filter(item => (item.xp || 0) > 0);

  // Urutkan berdasarkan XP pada kategori periode yang dipilih (tertinggi ke terendah)
  registeredEntries.sort((a, b) => b.xp - a.xp);
  registeredEntries.forEach((item, idx) => {
    item.rank = idx + 1;
  });

  return registeredEntries;
}

// Leaderboard Nasional Terpadu (Prioritaskan Cloud Cache, fallback ke lokal)
function getLeaderboardData(period = 'hari') {
  try {
    const cached = localStorage.getItem("utbk_cloud_lb_cache_" + period);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (parsed && Array.isArray(parsed.data)) {
        const validData = parsed.data.filter(item => (item.xp || 0) > 0);
        if (validData.length > 0) {
          const activeUser = getCurrentUser();
          validData.sort((a, b) => b.xp - a.xp);
          validData.forEach((item, idx) => { item.rank = idx + 1; });
          return validData.map(item => ({
            ...item,
            isUser: Boolean(activeUser && item.id === activeUser.id),
            name: (activeUser && item.id === activeUser.id) ? (item.rawName || item.name) + " (Kamu)" : (item.rawName || item.name)
          }));
        }
      }
    }
  } catch(e) {}

  return getLeaderboardDataLocal(period);
}

// Window Global Hooks for Browser
if (typeof window !== 'undefined') {
  window.getAllUsers = getAllUsers;
  window.saveAllUsers = saveAllUsers;
  window.resetAllUsersData = resetAllUsersData;
  window.resetAllUsers = resetAllUsers;
  window.getActiveUserId = getActiveUserId;
  window.setActiveUserId = setActiveUserId;
  window.getCurrentUser = getCurrentUser;
  window.checkCredentialsAvailableLocal = checkCredentialsAvailableLocal;
  window.registerUser = registerUser;
  window.loginOrRegisterWithGoogle = loginOrRegisterWithGoogle;
  window.loginUser = loginUser;
  window.logoutUser = logoutUser;
  window.isUserLoggedIn = isUserLoggedIn;
  window.getUserProfile = getUserProfile;
  window.saveUserProfile = saveUserProfile;
  window.updateStreak = updateStreak;
  window.addXp = addXp;
  window.getUserXpForPeriod = getUserXpForPeriod;
  window.getLeaderboardDataLocal = getLeaderboardDataLocal;
  window.getLeaderboardData = getLeaderboardData;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getAllUsers,
    saveAllUsers,
    resetAllUsersData,
    resetAllUsers,
    getActiveUserId,
    setActiveUserId,
    isUserLoggedIn,
    getCurrentUser,
    checkCredentialsAvailableLocal,
    registerUser,
    loginOrRegisterWithGoogle,
    loginUser,
    logoutUser,
    getUserProfile,
    saveUserProfile,
    updateStreak,
    getTierAndLevel,
    addXp,
    checkBadges,
    getUserXpForPeriod,
    getLeaderboardData,
    BADGES_LIST,
    TIERS
  };
}
