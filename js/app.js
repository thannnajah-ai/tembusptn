// Application Controller (UTBK SNBT EdTech Hub)
// Menyatukan fitur Skuling, Sainsin, Pahamify, dan Bisa dan Edu

let activeTab = "dashboard";
window.activeTab = activeTab;
window.getActiveTab = () => activeTab;
let currentDrillIndex = 0;
let filteredDrillQuestions = [];
let currentDrillSubtest = "all";
let currentDrillQuestion = null;
let drillAnsweredHistory = new Set();
let drillSessionCount = 0;
let currentCbtSession = null;
let currentReviewResult = null;
let flashcardIndex = 0;
let pendingTargetTab = null;

// Inisialisasi Aplikasi saat Dokumen Siap
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initUserProfile();
  initFontScale();
  initNavigation();
  initCountdown();
  initLiveOnlineCounter();
  renderHeaderStats();
  renderDashboard();
  initSettingsModal();
  renderLatex();

  // Sinkronisasi data user aktif ke Cloud Leaderboard saat inisialisasi
  if (typeof isUserLoggedIn === "function" && isUserLoggedIn() && typeof getCurrentUser === "function" && typeof getUserProfile === "function") {
    const activeUser = getCurrentUser();
    const prof = getUserProfile();
    if (activeUser && typeof window.CloudLeaderboard !== "undefined" && typeof window.CloudLeaderboard.syncUserToCloud === "function") {
      window.CloudLeaderboard.syncUserToCloud(activeUser, prof, false);
    }
  }

  // Navigasi Tab Tersimpan / URL Hash saat Refresh (Anti-Reset ke Beranda)
  const hashTab = window.location.hash ? window.location.hash.replace("#", "") : null;
  const savedTab = localStorage.getItem("tembusptn_active_tab");
  const validTabs = ["dashboard", "drill", "cbt", "rapor", "bank-soal", "flashcards", "ptn-explorer", "leaderboard", "profile"];
  const initialTargetTab = validTabs.includes(hashTab) ? hashTab : (validTabs.includes(savedTab) ? savedTab : "dashboard");
  if (initialTargetTab && initialTargetTab !== "dashboard") {
    // Jika tab tujuan adalah fitur terlindungi dan belum login, arahkan ke Beranda
    const protectedTabs = ["drill", "cbt", "rapor", "flashcards", "bank-soal", "profile"];
    if (protectedTabs.includes(initialTargetTab) && (typeof isUserLoggedIn === "function" && !isUserLoggedIn())) {
      switchTab("dashboard");
    } else {
      switchTab(initialTargetTab);
    }
  }

  // Dismiss dropdown saat klik di luar area
  document.addEventListener("click", (e) => {
    const dropdown = document.getElementById("user-dropdown-menu");
    const avatarBtn = document.getElementById("header-avatar-btn");
    if (dropdown && !dropdown.classList.contains("hidden")) {
      if (!dropdown.contains(e.target) && !avatarBtn.contains(e.target)) {
        dropdown.classList.add("hidden");
      }
    }
  });
});

// ============================================================
// FORMULA RENDERING ENGINE (KaTeX + Robust Fallback Formatter)
// ============================================================
function renderLatex(targetElement) {
  const root = targetElement || document.body;
  if (!root) return;

  // 1. Jika KaTeX auto-render CDN tersedia di window
  if (typeof window.renderMathInElement === "function") {
    try {
      window.renderMathInElement(root, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "\\[", right: "\\]", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false }
        ],
        ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code", "option"],
        ignoredClasses: ["no-math"],
        throwOnError: false
      });
      return;
    } catch (e) {
      console.warn("KaTeX render error, menggunakan fallback formatter:", e);
    }
  }

  // 2. Fallback Formatter: Mengubah sintaks LaTeX inline/block ($...$) menjadi tipografi HTML rapi
  fallbackFormatMath(root);
}

// Global expose agar dapat dipanggil dari script onload KaTeX
window.renderLatex = renderLatex;

function fallbackFormatMath(root) {
  if (!root) return;
  if (typeof document === "undefined" || typeof NodeFilter === "undefined" || !document.createTreeWalker) return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: function(node) {
      if (!node.nodeValue || !node.nodeValue.includes("$")) {
        return NodeFilter.FILTER_REJECT;
      }
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      const tag = parent.tagName.toLowerCase();
      if (tag === 'script' || tag === 'style' || tag === 'textarea' || tag === 'input' || parent.closest('.katex') || parent.closest('.math-tex')) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodesToReplace = [];
  while (walker.nextNode()) {
    nodesToReplace.push(walker.currentNode);
  }

  for (const node of nodesToReplace) {
    const text = node.nodeValue;
    if (!text.includes("$")) continue;
    if (!/\$\$[\s\S]+?\$\$|\$[^\$]+?\$/.test(text)) continue;

    const span = document.createElement("span");
    span.className = "math-wrapper";
    span.innerHTML = formatMathString(text);
    if (node.parentNode) {
      node.parentNode.replaceChild(span, node);
    }
  }
}

function formatMathString(text) {
  if (!text) return "";
  let formatted = text.replace(/\$\$([\s\S]+?)\$\$/g, (match, formula) => {
    return `<span class="math-tex display-math">${transformLatexToHtml(formula)}</span>`;
  });

  formatted = formatted.replace(/\$([^\$]+?)\$/g, (match, formula) => {
    return `<span class="math-tex inline-math">${transformLatexToHtml(formula)}</span>`;
  });

  return formatted;
}

function transformLatexToHtml(latex) {
  let s = latex.trim();

  // Pecahan \frac{pembilang}{penyebut} atau frac{pembilang}{penyebut} atau dfrac (multi-pass matching braces)
  let fracChanged = true;
  let fracIterations = 0;
  while (fracChanged && fracIterations < 5) {
    fracChanged = false;
    fracIterations++;
    const pattern = /(?:\\+|(?<=^|[\s(]))d?frac\s*\{/gi;
    let match;
    while ((match = pattern.exec(s)) !== null) {
      const fullMatchStart = match.index;
      const firstBraceIdx = s.indexOf('{', fullMatchStart);
      let depth = 0, numEnd = -1;
      for (let i = firstBraceIdx; i < s.length; i++) {
        if (s[i] === '{') depth++;
        else if (s[i] === '}') {
          depth--;
          if (depth === 0) { numEnd = i; break; }
        }
      }
      if (numEnd === -1) break;
      const num = s.slice(firstBraceIdx + 1, numEnd);

      let secondBraceIdx = numEnd + 1;
      while (secondBraceIdx < s.length && /\s/.test(s[secondBraceIdx])) secondBraceIdx++;
      if (s[secondBraceIdx] !== '{') break;

      depth = 0;
      let denEnd = -1;
      for (let i = secondBraceIdx; i < s.length; i++) {
        if (s[i] === '{') depth++;
        else if (s[i] === '}') {
          depth--;
          if (depth === 0) { denEnd = i; break; }
        }
      }
      if (denEnd === -1) break;
      const den = s.slice(secondBraceIdx + 1, denEnd);

      const replacement = `<span class="inline-fraction"><span class="fraction-num">${num}</span><span class="fraction-bar"></span><span class="fraction-den">${den}</span></span>`;
      s = s.slice(0, fullMatchStart) + replacement + s.slice(denEnd + 1);
      fracChanged = true;
      break;
    }
  }
  // Pecahan satu karakter tanpa kurung: \frac12
  s = s.replace(/\\+d?frac\s*([0-9a-zA-Z])\s*([0-9a-zA-Z])/gi, '<span class="inline-fraction"><span class="fraction-num">$1</span><span class="fraction-bar"></span><span class="fraction-den">$2</span></span>');

  // Simbol Matematika, Aljabar & Logika
  s = s.replace(/\\times/g, '&times;');
  s = s.replace(/\\cdot/g, '&sdot;');
  s = s.replace(/\\pm/g, '&plusmn;');
  s = s.replace(/\\le/g, '&le;');
  s = s.replace(/\\ge/g, '&ge;');
  s = s.replace(/\\ne(?:q)?/g, '&ne;');
  s = s.replace(/\\sim/g, '~');
  s = s.replace(/\\approx/g, '&approx;');
  s = s.replace(/\\Rightarrow/g, '&rArr;');
  s = s.replace(/\\rightarrow/g, '&rarr;');
  s = s.replace(/\\Leftrightarrow/g, '&hArr;');
  s = s.replace(/\\cup/g, '&cup;');
  s = s.replace(/\\cap/g, '&cap;');
  s = s.replace(/\\subset/g, '&sub;');
  s = s.replace(/\\in/g, '&isin;');
  s = s.replace(/\\notin/g, '&notin;');
  s = s.replace(/\\pi/g, '&pi;');
  s = s.replace(/\\theta/g, '&theta;');
  s = s.replace(/\\alpha/g, '&alpha;');
  s = s.replace(/\\beta/g, '&beta;');
  s = s.replace(/\\Delta/g, '&Delta;');
  s = s.replace(/\\lambda/g, '&lambda;');
  s = s.replace(/\\infty/g, '&infin;');
  s = s.replace(/\\dots|\\ldots/g, '&hellip;');
  s = s.replace(/\\sqrt\{([^{}]+)\}/g, '&radic;<span style="text-decoration:overline; padding-left:1px;">$1</span>');
  s = s.replace(/\\textbf\{([^{}]+)\}/g, '<strong>$1</strong>');
  s = s.replace(/\\mathbf\{([^{}]+)\}/g, '<strong>$1</strong>');
  s = s.replace(/\\text\{([^{}]+)\}/g, '$1');
  s = s.replace(/\\left|\\right/g, '');
  s = s.replace(/\\%/g, '%');
  s = s.replace(/\{,\}/g, ',');

  // Subskrip & Superskrip
  s = s.replace(/_\{([^{}]+)\}/g, '<sub>$1</sub>');
  s = s.replace(/_([a-zA-Z0-9])/g, '<sub>$1</sub>');
  s = s.replace(/\^\{([^{}]+)\}/g, '<sup>$1</sup>');
  s = s.replace(/\^([a-zA-Z0-9])/g, '<sup>$1</sup>');

  return s;
}

// Inisialisasi User Profile & Streak
function initUserProfile() {
  const profile = getUserProfile();
  updateStreak(profile);
}

// ============================================================
// FONT SIZE ACCESSIBILITY SCALER (A-, A, A+)
// ============================================================
function initFontScale() {
  const savedScale = localStorage.getItem("utbk_font_scale") || "md";
  setFontScale(savedScale);
}

function setFontScale(scale) {
  if (!["sm", "md", "lg"].includes(scale)) scale = "md";
  document.body.classList.remove("font-scale-sm", "font-scale-md", "font-scale-lg");
  document.body.classList.add(`font-scale-${scale}`);
  localStorage.setItem("utbk_font_scale", scale);

  // Update Drill & CBT Font Button Styles
  ["sm", "md", "lg"].forEach(s => {
    const drillBtn = document.getElementById(`font-btn-${s}`);
    const cbtBtn = document.getElementById(`cbt-font-btn-${s}`);
    [drillBtn, cbtBtn].forEach(btn => {
      if (btn) {
        if (s === scale) {
          btn.className = "px-2.5 py-1 rounded-xl bg-indigo-600 text-white font-bold transition shadow-sm";
        } else {
          btn.className = "px-2.5 py-1 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 font-bold text-slate-700 dark:text-slate-300 transition";
        }
      }
    });
  });
}
window.setFontScale = setFontScale;

// ============================================================
// FLOATING XP TOAST NOTIFIER (Pro Max Feedback)
// ============================================================
function showXpToast(amount, message = "Latihan Soal") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  const isGain = amount > 0;
  toast.className = `flex items-center gap-3 px-4 py-3 rounded-2xl shadow-2xl backdrop-blur-md border font-bold text-xs sm:text-sm toast-enter pointer-events-auto transition-all duration-300 ${
    isGain
      ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 border-amber-300/80 shadow-amber-500/25"
      : "bg-slate-900/95 text-white border-slate-700 shadow-slate-950/40"
  }`;
  toast.innerHTML = `
    <span class="text-xl">${isGain ? "⚡" : "💡"}</span>
    <div class="leading-tight">
      <div class="font-black ${isGain ? "text-slate-950" : "text-amber-400"}">${isGain ? `+${amount} XP` : "Info Latihan"}</div>
      <div class="text-xs font-medium opacity-90">${message}</div>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove("toast-enter");
    toast.classList.add("toast-leave");
    setTimeout(() => toast.remove(), 350);
  }, 2800);
}
window.showXpToast = showXpToast;

// Header Stats Bar (Streak, XP, Level, Target PTN, User Info)
function renderHeaderStats() {
  const loggedIn = typeof isUserLoggedIn === "function" ? isUserLoggedIn() : false;
  const profile = getUserProfile();
  const user = typeof getCurrentUser === "function" ? getCurrentUser() : null;
  const { tier, level } = getTierAndLevel(profile.xp);

  const streakEl = document.getElementById("header-streak");
  const xpEl = document.getElementById("header-xp");
  const tierEl = document.getElementById("header-tier");
  const targetPtnEl = document.getElementById("header-target-ptn");
  const loginBtn = document.getElementById("header-login-btn");
  const userMenuWrap = document.getElementById("header-user-menu-wrap");
  const profileTabNav = document.querySelector('[data-nav-tab="profile"]');
  const mobileProfileBtn = document.querySelector('[data-mobile-nav="profile"]');

  if (!loggedIn) {
    // Sembunyikan streak, xp, level/tier, dan target ptn jika belum login
    if (streakEl) streakEl.classList.add("hidden");
    if (xpEl) xpEl.classList.add("hidden");
    if (tierEl) tierEl.classList.add("hidden");
    if (targetPtnEl) {
      targetPtnEl.classList.add("hidden");
      targetPtnEl.classList.remove("xl:flex");
    }

    if (loginBtn) {
      loginBtn.classList.remove("hidden");
      loginBtn.classList.add("flex");
    }
    if (userMenuWrap) userMenuWrap.classList.add("hidden");

    if (profileTabNav) profileTabNav.classList.add("hidden");
    if (mobileProfileBtn) {
      mobileProfileBtn.innerHTML = `
        <span class="mobile-nav-icon-wrap text-lg">🔑</span>
        <span>Masuk</span>
      `;
    }
  } else {
    // Tampilkan streak, xp, level/tier, dan target ptn jika sudah login
    if (streakEl) streakEl.classList.remove("hidden");
    if (xpEl) xpEl.classList.remove("hidden");
    if (tierEl) tierEl.classList.remove("hidden");
    if (targetPtnEl) {
      targetPtnEl.classList.remove("hidden");
      targetPtnEl.classList.add("xl:flex");
    }

    if (loginBtn) {
      loginBtn.classList.add("hidden");
      loginBtn.classList.remove("flex");
    }
    if (userMenuWrap) userMenuWrap.classList.remove("hidden");

    if (profileTabNav) profileTabNav.classList.remove("hidden");
    if (mobileProfileBtn) {
      mobileProfileBtn.innerHTML = `
        <span class="mobile-nav-icon-wrap text-lg">👤</span>
        <span>Profil</span>
      `;
    }

    // Pro Max Header Stats
    const streakCount = document.getElementById("streak-count");
    if (streakCount) {
      streakCount.textContent = profile.streak || 1;
    } else if (streakEl) {
      streakEl.innerHTML = `🔥 <span class="font-bold">${profile.streak || 1}</span> <span class="hidden sm:inline text-xs text-orange-200">Hari</span>`;
    }

    const xpCount = document.getElementById("xp-count");
    if (xpCount) {
      xpCount.textContent = profile.xp || 0;
    } else if (xpEl) {
      xpEl.innerHTML = `⚡ <span class="font-bold">${profile.xp || 0}</span> <span class="hidden sm:inline text-xs text-yellow-200">XP</span>`;
    }

    const tierBadge = document.getElementById("tier-badge");
    if (tierBadge) {
      tierBadge.className = `px-2.5 py-1 rounded-xl text-xs font-bold ${tier.bg} ${tier.color} border ${tier.border}`;
      tierBadge.textContent = `Lvl ${level} • ${tier.name.split(" ")[0]}`;
    } else if (tierEl) {
      tierEl.innerHTML = `<span class="px-2 py-0.5 rounded-full text-xs font-bold ${tier.bg} ${tier.color} border ${tier.border}">Lvl ${level} • ${tier.name.split(" ")[0]}</span>`;
    }

    const targetName = document.getElementById("header-target-name");
    if (targetName) {
      const m1 = typeof findMajorById === "function" ? findMajorById(profile.targetMajorId) : null;
      targetName.textContent = m1 ? `${m1.ptnShort} • ${m1.name.slice(0, 15)} (${m1.targetScore})` : (profile.targetMajorName || "Pilih PTN");
    }

    const avatarIcon = document.getElementById("header-avatar-icon");
    if (avatarIcon) avatarIcon.textContent = profile.avatar || "👨‍🎓";

    const avatarName = document.getElementById("header-avatar-name");
    if (avatarName) avatarName.textContent = (profile.name || "Pejuang PTN").split(" ")[0];

    // Update Dropdown Info
    const dropName = document.getElementById("dropdown-user-name");
    const dropEmail = document.getElementById("dropdown-user-email");
    if (dropName) dropName.textContent = profile.name || (user ? user.name : "Pejuang PTN");
    if (dropEmail) dropEmail.textContent = user && user.username ? `@${user.username}` : "@pejuangptn";
  }

  // Update Theme Icon
  updateThemeButtonUI(localStorage.getItem("utbk_theme") || "light");
}

// Navigasi Tab SPA
function initNavigation() {
  const navButtons = document.querySelectorAll("[data-nav-tab]");
  navButtons.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const tabName = btn.getAttribute("data-nav-tab");
      switchTab(tabName);
    });
  });
}

function switchTab(tabName) {
  // Jika sedang ujian CBT dan mau keluar, beri konfirmasi
  if (activeTab === "cbt" && currentCbtSession && !currentCbtSession.isFinished) {
    if (!confirm("Ujian Try Out sedang berlangsung. Apakah kamu yakin ingin meninggalkan halaman ujian? Jawabanmu saat ini belum terkumpul.")) {
      return;
    }
  }

  // Cek proteksi autentikasi: Latihan Soal, TO CBT, Rapor, Flashcard, Bank Soal, dan Profil wajib Login/Register
  const protectedTabs = ["drill", "cbt", "rapor", "flashcards", "bank-soal", "profile"];
  if (protectedTabs.includes(tabName)) {
    if (typeof isUserLoggedIn === "function" && !isUserLoggedIn()) {
      pendingTargetTab = tabName;
      let label = "fitur ini";
      if (tabName === "drill") label = "Latihan Kilat";
      else if (tabName === "cbt") label = "Simulasi Try Out CBT";
      else if (tabName === "rapor") label = "Rasionalisasi Rapor & Peluang PTN";
      else if (tabName === "flashcards") label = "Flashcard Rumus";
      else if (tabName === "bank-soal") label = "Bank Soal & Pembahasan";
      else if (tabName === "profile") label = "Profil Siswa";

      openAuthModal("login", false, `Silakan Masuk atau Buat Akun terlebih dahulu untuk mengakses ${label}.`);
      showAuthAlert(`🔒 Fitur ${label} memerlukan akun pengguna. Silakan Masuk (Login) atau Daftar (Register) gratis untuk melanjutkan!`, false);
      return;
    }
  }

  activeTab = tabName;
  window.activeTab = tabName;
  try {
    localStorage.setItem("tembusptn_active_tab", tabName);
    if (window.location.hash !== `#${tabName}`) {
      history.replaceState(null, '', `#${tabName}`);
    }
  } catch (e) {}

  // Update tab buttons active state
  document.querySelectorAll("[data-nav-tab]").forEach(btn => {
    const isTarget = btn.getAttribute("data-nav-tab") === tabName;
    if (isTarget) {
      btn.classList.add("nav-active");
      btn.classList.remove("text-slate-600");
    } else {
      btn.classList.remove("nav-active");
      btn.classList.add("text-slate-600");
    }
  });

  // Update mobile bottom nav active state
  document.querySelectorAll("[data-mobile-nav]").forEach(btn => {
    const isTarget = btn.getAttribute("data-mobile-nav") === tabName;
    if (isTarget) {
      btn.classList.add("mobile-nav-active");
    } else {
      btn.classList.remove("mobile-nav-active");
    }
  });

  // Hide mobile bottom nav during active CBT exam for focus
  const mobileNav = document.getElementById("mobile-bottom-nav");
  if (mobileNav) {
    if (tabName === "cbt" && currentCbtSession && !currentCbtSession.isFinished) {
      mobileNav.classList.add("hidden");
    } else {
      mobileNav.classList.remove("hidden");
    }
  }

  // Tampilkan container yang tepat
  const views = ["dashboard", "drill", "cbt", "rapor", "bank-soal", "flashcards", "ptn-explorer", "leaderboard", "profile"];
  views.forEach(v => {
    const el = document.getElementById(`view-${v}`);
    if (el) {
      if (v === tabName) {
        el.classList.remove("hidden");
      } else {
        el.classList.add("hidden");
      }
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });

  // Trigger tab specifics
  if (tabName === "dashboard") renderDashboard();
  if (tabName === "drill") renderDrillMode();
  if (tabName === "cbt") renderCbtMode();
  if (tabName === "rapor") renderRaporView();
  if (tabName === "bank-soal") renderBankSoal();
  if (tabName === "flashcards") renderFlashcards();
  if (tabName === "ptn-explorer") renderPtnExplorer();
  if (tabName === "profile") renderProfileView();
  
  if (tabName === "leaderboard") {
    renderLeaderboard(true);
    if (typeof window.CloudLeaderboard !== "undefined" && typeof window.CloudLeaderboard.startPolling === "function") {
      window.CloudLeaderboard.startPolling(() => renderLeaderboard(false), 15000);
    }
  } else {
    if (typeof window.CloudLeaderboard !== "undefined" && typeof window.CloudLeaderboard.stopPolling === "function") {
      window.CloudLeaderboard.stopPolling();
    }
  }

  setTimeout(renderLatex, 50);
  if (window.lucide) lucide.createIcons();
}

// ============================================================
// DIGITAL COUNTDOWN TICKER & LIVE ONLINE COUNTER (Real-Time Live)
// ============================================================
let countdownInterval = null;
let liveOnlineUsers = 1482;
let liveOnlineInterval = null;

// Target UTBK SNBT Resmi: 21 – 30 April 2027
function getUpcomingUtbkTarget() {
  // Sesi 1 Gelombang 1 dimulai pada 21 April 2027 pk 06:45 WIB
  const targetDate = new Date("2027-04-21T06:45:00+07:00");
  const targetYear = 2027;
  const scheduleText = "21 – 30 April 2027";

  return { targetDate, targetYear, scheduleText };
}

function updateCountdownValues() {
  const { targetDate, targetYear, scheduleText } = getUpcomingUtbkTarget();
  const now = new Date().getTime();
  const diff = Math.max(0, targetDate.getTime() - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const dEl = document.getElementById("countdown-days");
  const hEl = document.getElementById("countdown-hours");
  const mEl = document.getElementById("countdown-minutes");
  const sEl = document.getElementById("countdown-seconds");

  if (dEl) dEl.textContent = String(days).padStart(2, "0");
  if (hEl) hEl.textContent = String(hours).padStart(2, "0");
  if (mEl) mEl.textContent = String(minutes).padStart(2, "0");
  if (sEl) sEl.textContent = String(seconds).padStart(2, "0");

  const heroYear = document.getElementById("hero-target-year");
  if (heroYear) heroYear.textContent = targetYear;

  const countYear = document.getElementById("countdown-target-year");
  if (countYear) countYear.textContent = targetYear;

  const schedEl = document.getElementById("countdown-schedule-text");
  if (schedEl) schedEl.textContent = scheduleText;

  const legacyCountdown = document.getElementById("utbk-countdown");
  if (legacyCountdown) {
    legacyCountdown.innerHTML = `<strong>${days}</strong> Hari Lagi Menuju UTBK SNBT ${targetYear} (${scheduleText})! 🎯`;
  }
}

function initCountdown() {
  updateCountdownValues();
  if (countdownInterval) clearInterval(countdownInterval);
  countdownInterval = setInterval(updateCountdownValues, 1000);
}
window.initCountdown = initCountdown;
window.getUpcomingUtbkTarget = getUpcomingUtbkTarget;

function initLiveOnlineCounter() {
  const el = document.getElementById("live-online-count");
  if (!el) return;

  el.textContent = liveOnlineUsers.toLocaleString("id-ID");

  if (liveOnlineInterval) clearInterval(liveOnlineInterval);
  liveOnlineInterval = setInterval(() => {
    // Fluktuasi acak yang realistis (-3 sampai +4)
    const change = Math.floor(Math.random() * 8) - 3;
    liveOnlineUsers = Math.max(1380, Math.min(1680, liveOnlineUsers + change));
    el.textContent = liveOnlineUsers.toLocaleString("id-ID");
  }, 3000);
}
window.initLiveOnlineCounter = initLiveOnlineCounter;

// ============================================================
// DAILY QUESTS SYSTEM (Misi Harian & XP Claim)
// ============================================================
function getDailyQuests() {
  const profile = getUserProfile();
  const today = new Date().toISOString().split("T")[0];

  if (!profile.dailyQuests || profile.dailyQuests.date !== today) {
    profile.dailyQuests = {
      date: today,
      quests: {
        quest_drill: {
          id: "quest_drill",
          title: "Latihan Kilat 5 Soal",
          desc: "Jawab 5 butir soal di Latihan Kilat",
          icon: "⚡",
          target: 5,
          current: 0,
          xpReward: 30,
          claimed: false
        },
        quest_flash: {
          id: "quest_flash",
          title: "Pahami 3 Flashcards",
          desc: "Review 3 kartu konsep & rumus kilat",
          icon: "🃏",
          target: 3,
          current: 0,
          xpReward: 20,
          claimed: false
        },
        quest_cbt: {
          id: "quest_cbt",
          title: "Simulasi 1 Try Out",
          desc: "Tuntaskan 1 sesi CBT Try Out resmi",
          icon: "⚔️",
          target: 1,
          current: 0,
          xpReward: 100,
          claimed: false
        }
      }
    };
    saveUserProfile(profile);
  }

  return profile.dailyQuests.quests;
}

function updateDailyQuestProgress(questId, amount = 1) {
  const profile = getUserProfile();
  const quests = getDailyQuests();
  if (!quests[questId]) return;

  const q = quests[questId];
  if (q.current < q.target) {
    q.current = Math.min(q.target, q.current + amount);
    profile.dailyQuests.quests = quests;
    saveUserProfile(profile);

    if (q.current >= q.target && !q.claimed) {
      showXpToast(0, `Misi Selesai: "${q.title}" siap diklaim! 🎁`);
    }

    if (activeTab === "dashboard") {
      renderDailyQuests();
    }
  }
}

function claimDailyQuest(questId) {
  const profile = getUserProfile();
  const quests = getDailyQuests();
  const q = quests[questId];
  if (!q || q.claimed || q.current < q.target) return;

  q.claimed = true;
  profile.dailyQuests.quests = quests;
  saveUserProfile(profile);

  addXp(q.xpReward, `Misi Harian: ${q.title}`);
  triggerConfetti();

  renderDailyQuests();
  renderHeaderStats();
}

function renderDailyQuests() {
  const container = document.getElementById("dash-daily-quests");
  if (!container) return;

  const quests = getDailyQuests();
  const questList = Object.values(quests);
  const completedCount = questList.filter(q => q.current >= q.target).length;

  container.innerHTML = `
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-2.5">
        <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-400/20 to-orange-500/20 text-amber-500 flex items-center justify-center text-xl shadow-inner">
          🎯
        </div>
        <div>
          <div class="flex items-center gap-2">
            <h2 class="font-bold text-base text-slate-900 dark:text-white font-heading">Misi Harian (Daily Quests)</h2>
            <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold ${completedCount === questList.length ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300' : 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300'}">
              ${completedCount}/${questList.length} Selesai
            </span>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400">Kerjakan misi untuk meraih bonus XP harian & percepat kenaikan level</p>
        </div>
      </div>
      <div class="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 font-medium">
        <i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i>
        <span>Reset Tiap 24 Jam</span>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
      ${questList.map(q => {
        const isDone = q.current >= q.target;
        const percent = Math.min(100, Math.round((q.current / q.target) * 100));

        let actionBtn = "";
        if (q.claimed) {
          actionBtn = `
            <button disabled class="w-full py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 text-xs font-bold cursor-not-allowed">
              Terklaim ✅
            </button>
          `;
        } else if (isDone) {
          actionBtn = `
            <button onclick="claimDailyQuest('${q.id}')" class="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 text-xs font-black shadow-md shadow-amber-400/30 transition animate-bounce-short">
              Klaim +${q.xpReward} XP 🎁
            </button>
          `;
        } else {
          actionBtn = `
            <button onclick="${q.id === 'quest_drill' ? "switchTab('drill')" : q.id === 'quest_flash' ? "switchTab('flashcards')" : "switchTab('cbt')"}" class="w-full py-2 px-3 rounded-xl bg-indigo-50 dark:bg-slate-800/80 hover:bg-indigo-100 dark:hover:bg-slate-700 text-indigo-700 dark:text-indigo-300 text-xs font-bold transition flex items-center justify-center gap-1">
              <span>Kerjakan</span>
              <span>→</span>
            </button>
          `;
        }

        return `
          <div class="p-4 rounded-2xl border transition-all ${
            isDone && !q.claimed
              ? 'bg-amber-50/40 dark:bg-amber-950/20 border-amber-300 dark:border-amber-700/60 shadow-md shadow-amber-500/5 ring-1 ring-amber-300 dark:ring-amber-800'
              : 'bg-white/60 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/80'
          } flex flex-col justify-between space-y-3">
            <div>
              <div class="flex items-start justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="text-2xl">${q.icon}</span>
                  <div>
                    <div class="font-bold text-sm text-slate-800 dark:text-slate-100 leading-tight">${q.title}</div>
                    <div class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">${q.desc}</div>
                  </div>
                </div>
                <span class="text-xs font-black text-amber-500 whitespace-nowrap">+${q.xpReward} XP</span>
              </div>

              <!-- Progress Bar -->
              <div class="mt-3 space-y-1">
                <div class="flex justify-between text-xs font-bold">
                  <span class="text-slate-500 dark:text-slate-400">Progres</span>
                  <span class="${isDone ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-300'}">${q.current} / ${q.target}</span>
                </div>
                <div class="w-full bg-slate-100 dark:bg-slate-700/80 rounded-full h-2 overflow-hidden">
                  <div class="h-2 rounded-full transition-all duration-500 ${isDone ? 'bg-emerald-600' : 'bg-blue-600'}" style="width: ${percent}%;"></div>
                </div>
              </div>
            </div>

            <div>
              ${actionBtn}
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;

  if (window.lucide) lucide.createIcons();
}
window.getDailyQuests = getDailyQuests;
window.updateDailyQuestProgress = updateDailyQuestProgress;
window.claimDailyQuest = claimDailyQuest;
window.renderDailyQuests = renderDailyQuests;

// ============================================================
// 1. DASHBOARD CONTROLLER (Skuling & Pahamify hybrid)
// ============================================================
function renderDashboard() {
  const loggedIn = typeof isUserLoggedIn === "function" ? isUserLoggedIn() : false;
  const profile = getUserProfile();
  const { tier, level, levelProgress, nextLevelXp } = getTierAndLevel(profile.xp);

  // Update Hero Greeting (Dinamis, Ramah Tamu, Tanpa Pemotongan Teks)
  const heroGreeting = document.getElementById("hero-greeting");
  const major1 = loggedIn ? findMajorById(profile.targetMajorId) : null;
  const major2 = loggedIn ? findMajorById(profile.targetMajorId2) : null;
  const highestScore = profile.highestScore || 0;
  const dualStrategy = analyzeDualStrategy(highestScore, major1, major2);

  if (heroGreeting) {
    if (!loggedIn) {
      heroGreeting.textContent = "Semangat Belajar, Pejuang PTN 2027! 🚀";
    } else {
      const firstName = profile.name ? profile.name.split(" ")[0] : "Pejuang";
      const targetLabel = major1 
        ? `${major1.name} (${major1.ptnShort})` 
        : (profile.targetMajorName && profile.targetMajorName !== "Belum Memilih Target" ? profile.targetMajorName : "Pilih Kampus Impianmu 🎯");
      heroGreeting.textContent = major1
        ? `Semangat Belajar, ${firstName}! Target: ${targetLabel} 🚀`
        : `Semangat Belajar, ${firstName}! Target: ${targetLabel}`;
    }
  }

  // Elemen Target PTN Impian (Modern, Informatif, Rasionalisasi Jelas)
  const targetEl = document.getElementById("dash-target-ptn");
  const heroContentCol = document.getElementById("hero-content-col");

  if (!loggedIn) {
    // Sembunyikan target PTN di Dashboard jika belum login & lebarkan hero content
    if (targetEl) targetEl.classList.add("hidden");
    if (heroContentCol) {
      heroContentCol.classList.remove("lg:col-span-2");
      heroContentCol.classList.add("lg:col-span-3");
    }
  } else {
    // Tampilkan target PTN jika sudah login
    if (targetEl) targetEl.classList.remove("hidden");
    if (heroContentCol) {
      heroContentCol.classList.remove("lg:col-span-3");
      heroContentCol.classList.add("lg:col-span-2");
    }

    if (targetEl) {
      if (!major1 && !major2) {
        targetEl.innerHTML = `
          <div class="space-y-3">
            <div class="flex items-center justify-between pb-2 border-b border-slate-700/80">
              <span class="text-xs font-bold uppercase tracking-wider text-slate-300 font-heading">Target PTN Impian</span>
              <span class="text-xs font-semibold text-slate-400">Skor Max: <strong class="text-slate-300">-</strong></span>
            </div>
            <div class="text-center py-5 px-3 bg-slate-800/60 rounded-2xl border border-dashed border-slate-700 space-y-2">
              <div class="text-2xl">🏛️</div>
              <div class="text-xs font-bold text-white">Belum Memilih Kampus Impian</div>
              <p class="text-[11px] text-slate-400 leading-relaxed max-w-xs mx-auto">
                Tentukan Pilihan 1 & 2 untuk mengaktifkan kalkulator rasionalisasi dan memantau passing grade.
              </p>
              <div class="pt-1 flex items-center justify-center gap-2">
                <button onclick="openSettingsModal()" class="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-sm transition">
                  Pilih Target Sekarang 🎯
                </button>
                <button onclick="switchTab('ptn-explorer')" class="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold text-xs rounded-xl transition">
                  Katalog PTN 📖
                </button>
              </div>
            </div>
          </div>
        `;
      } else {
        const hasScore = highestScore > 0;
        const r1BadgeText = hasScore && dualStrategy && dualStrategy.r1
          ? `${dualStrategy.r1.status} (${dualStrategy.r1.chancePercent}%)`
          : "Belum Ada Skor CBT";
        const r1BadgeClass = hasScore && dualStrategy && dualStrategy.r1
          ? dualStrategy.r1.badgeClass
          : "bg-slate-700/80 text-slate-300 border border-slate-600";
        const r1Percent = hasScore && dualStrategy && dualStrategy.r1 ? dualStrategy.r1.chancePercent : 0;

        const r2BadgeText = hasScore && dualStrategy && dualStrategy.r2
          ? `${dualStrategy.r2.status} (${dualStrategy.r2.chancePercent}%)`
          : "Belum Ada Skor CBT";
        const r2BadgeClass = hasScore && dualStrategy && dualStrategy.r2
          ? dualStrategy.r2.badgeClass
          : "bg-slate-700/80 text-slate-300 border border-slate-600";
        const r2Percent = hasScore && dualStrategy && dualStrategy.r2 ? dualStrategy.r2.chancePercent : 0;

        targetEl.innerHTML = `
          <div class="space-y-3">
            <div class="flex items-center justify-between pb-2 border-b border-slate-700/80">
              <span class="text-xs font-bold uppercase tracking-wider text-slate-300 font-heading">Target PTN Impian</span>
              <span class="text-xs font-semibold text-slate-400">Skor Tertinggi: <strong class="text-amber-400 font-bold">${hasScore ? highestScore : '-'}</strong></span>
            </div>

            <div class="space-y-3">
              <!-- Pilihan 1 -->
              <div>
                <div class="flex items-center justify-between text-xs mb-1">
                  <span class="font-bold text-amber-400 flex items-center gap-1">
                    <span>🎯</span> Pilihan 1 (Utama)
                  </span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-bold ${r1BadgeClass}">
                    ${r1BadgeText}
                  </span>
                </div>
                <div class="text-sm font-bold text-white font-heading truncate" title="${major1 ? major1.name : 'Belum Dipilih'}">
                  ${major1 ? major1.name : 'Belum Dipilih'}
                </div>
                <div class="text-xs text-slate-300 flex items-center justify-between mt-0.5">
                  <span class="font-medium text-slate-400">${major1 ? major1.ptnShort + ' • ' + (major1.degree || 'S1') : '-'}</span>
                  <span>Passing Grade: <strong class="text-white font-bold">${major1 ? major1.targetScore : '-'}</strong></span>
                </div>
                ${hasScore ? `
                  <div class="w-full bg-slate-700/80 h-1.5 rounded-full overflow-hidden mt-1.5">
                    <div class="h-full rounded-full ${r1Percent >= 70 ? 'bg-emerald-400' : r1Percent >= 40 ? 'bg-amber-400' : 'bg-rose-400'} transition-all duration-500" style="width: ${r1Percent}%"></div>
                  </div>
                ` : ''}
              </div>

              <!-- Pilihan 2 -->
              <div class="pt-2.5 border-t border-slate-700/60">
                <div class="flex items-center justify-between text-xs mb-1">
                  <span class="font-bold text-blue-400 flex items-center gap-1">
                    <span>🛡️</span> Pilihan 2 (Cadangan)
                  </span>
                  <span class="px-2 py-0.5 rounded text-[11px] font-bold ${r2BadgeClass}">
                    ${r2BadgeText}
                  </span>
                </div>
                <div class="text-sm font-bold text-white font-heading truncate" title="${major2 ? major2.name : 'Belum Dipilih'}">
                  ${major2 ? major2.name : 'Belum Dipilih'}
                </div>
                <div class="text-xs text-slate-300 flex items-center justify-between mt-0.5">
                  <span class="font-medium text-slate-400">${major2 ? major2.ptnShort + ' • ' + (major2.degree || 'S1') : '-'}</span>
                  <span>Passing Grade: <strong class="text-white font-bold">${major2 ? major2.targetScore : '-'}</strong></span>
                </div>
                ${hasScore ? `
                  <div class="w-full bg-slate-700/80 h-1.5 rounded-full overflow-hidden mt-1.5">
                    <div class="h-full rounded-full ${r2Percent >= 70 ? 'bg-emerald-400' : r2Percent >= 40 ? 'bg-amber-400' : 'bg-rose-400'} transition-all duration-500" style="width: ${r2Percent}%"></div>
                  </div>
                ` : ''}
              </div>
            </div>

            <!-- Action Links -->
            <div class="pt-2.5 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-300">
              <button onclick="switchTab('ptn-explorer')" class="text-amber-400 font-semibold hover:underline flex items-center gap-1">
                <span>Eksplorasi PTN</span> <span>→</span>
              </button>
              <button onclick="openSettingsModal()" class="text-slate-300 font-medium hover:text-white hover:underline">
                Ubah Target
              </button>
            </div>
          </div>
        `;
      }
    }
  }

  // Render Daily Quests (Hanya jika sudah login)
  const questsEl = document.getElementById("dash-daily-quests");
  if (questsEl) {
    if (!loggedIn) {
      questsEl.classList.add("hidden");
    } else {
      questsEl.classList.remove("hidden");
      renderDailyQuests();
    }
  }

  // Level & XP Progress (Hanya jika sudah login)
  const lvlEl = document.getElementById("dash-level-card");
  if (lvlEl) {
    if (!loggedIn) {
      lvlEl.classList.add("hidden");
    } else {
      lvlEl.classList.remove("hidden");
      lvlEl.innerHTML = `
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center gap-2.5">
            <span class="text-2xl">🎖️</span>
            <div>
              <div class="font-bold text-slate-900 dark:text-slate-100 font-heading">Level ${level} • ${tier.name}</div>
              <div class="text-xs text-slate-600 dark:text-slate-400">${profile.xp} / ${nextLevelXp} XP</div>
            </div>
          </div>
          <span class="text-xs font-bold text-blue-600 dark:text-blue-400">${levelProgress}%</span>
        </div>
        <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
          <div class="bg-blue-600 h-2 rounded-full transition-all duration-300" style="width: ${levelProgress}%"></div>
        </div>
      `;
    }
  }

  // Subtest Quick Grid (Bisa dilihat siapa pun)
  const subtestGrid = document.getElementById("dash-subtest-grid");
  if (subtestGrid) {
    subtestGrid.innerHTML = UTBK_SUBTESTS.map(st => `
      <div onclick="startDrillSubtest('${st.id}')" class="glass-card card-hover-lift rounded-2xl p-4 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition cursor-pointer flex items-center gap-3.5 group">
        <div class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-xl group-hover:border-blue-400 transition">
          ${st.icon}
        </div>
        <div class="flex-1 min-w-0">
          <div class="font-bold text-sm text-slate-900 dark:text-slate-100 font-heading truncate">${st.name}</div>
          <div class="text-xs text-slate-600 dark:text-slate-400 truncate">${st.desc}</div>
        </div>
        <i data-lucide="chevron-right" class="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition"></i>
      </div>
    `).join("");
  }

  // Badges Overview (Hanya jika sudah login)
  const badgesSec = document.getElementById("dash-badges-section");
  const badgesEl = document.getElementById("dash-badges");
  if (badgesSec) {
    if (!loggedIn) {
      badgesSec.classList.add("hidden");
    } else {
      badgesSec.classList.remove("hidden");
    }
  }
  if (badgesEl && loggedIn) {
    const unlocked = profile.unlockedBadges || [];
    badgesEl.innerHTML = BADGES_LIST.map(b => {
      const isUnlocked = unlocked.includes(b.id);
      return `
        <div class="flex items-center gap-3 p-3.5 rounded-2xl border transition ${isUnlocked ? 'bg-amber-50/70 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800/80' : 'bg-slate-50/50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-50'}">
          <div class="text-2xl">${b.icon}</div>
          <div class="min-w-0">
            <div class="text-xs font-bold ${isUnlocked ? 'text-slate-800 dark:text-slate-100' : 'text-slate-500 dark:text-slate-400'}">${b.title}</div>
            <div class="text-xs text-slate-500 dark:text-slate-400 truncate">${b.desc}</div>
          </div>
        </div>
      `;
    }).join("");
  }

  if (window.lucide) lucide.createIcons();
}

// ============================================================
// 2. DRILL MODE (Latihan Kilat Interaktif - Acak Murni Tiap Soal)
// ============================================================

// Mengambil seluruh bank soal untuk subtes aktif
function getDrillPool(subtestFilter = currentDrillSubtest) {
  let pool = [];
  if (subtestFilter === "all" || !subtestFilter) {
    pool = (typeof QUESTIONS_DATA !== "undefined" && Array.isArray(QUESTIONS_DATA)) ? [...QUESTIONS_DATA] : [];
  } else {
    pool = (typeof QUESTIONS_DATA !== "undefined" && Array.isArray(QUESTIONS_DATA))
      ? QUESTIONS_DATA.filter(q => q.subtest === subtestFilter)
      : [];
  }
  if (pool.length === 0 && typeof QUESTIONS_DATA !== "undefined" && Array.isArray(QUESTIONS_DATA)) {
    pool = [...QUESTIONS_DATA];
  }
  return pool;
}

// Memilih soal acak murni dari subtes yang sedang dikerjakan tanpa pola berulang
function pickNextRandomDrillQuestion(subtestFilter = currentDrillSubtest) {
  currentDrillSubtest = subtestFilter || "all";
  const pool = getDrillPool(currentDrillSubtest);
  if (!pool || pool.length === 0) return null;

  // Saring soal yang belum pernah dijawab pada sesi latihan saat ini
  let available = pool.filter(q => !drillAnsweredHistory.has(q.id));

  // Jika seluruh soal di subtes ini telah selesai dikerjakan, reset riwayat sesi agar latihan tidak pernah berhenti
  if (available.length === 0) {
    drillAnsweredHistory.clear();
    // Hindari mendapatkan soal yang persis sama dengan soal yang baru saja selesai dijawab
    if (currentDrillQuestion) {
      available = pool.filter(q => q.id !== currentDrillQuestion.id);
    }
    if (available.length === 0) available = pool;
  }

  // Pengacakan sejati (True Random Selection)
  const randomIndex = Math.floor(Math.random() * available.length);
  currentDrillQuestion = available[randomIndex];
  drillAnsweredHistory.add(currentDrillQuestion.id);
  drillSessionCount++;

  // Kompatibilitas referensi lama
  filteredDrillQuestions = [currentDrillQuestion];
  currentDrillIndex = 0;

  return currentDrillQuestion;
}

function renderDrillMode(subtestFilter = "all", reShuffle = true) {
  const isSubtestChanged = currentDrillSubtest !== subtestFilter;
  currentDrillSubtest = subtestFilter || "all";

  if (isSubtestChanged) {
    drillAnsweredHistory.clear();
    drillSessionCount = 0;
    currentDrillQuestion = null;
  }

  if (reShuffle || !currentDrillQuestion) {
    pickNextRandomDrillQuestion(currentDrillSubtest);
  }

  renderDrillSubtestPills(currentDrillSubtest);
  renderCurrentDrillQuestion();
}

window.shuffleDrillQuestions = function() {
  pickNextRandomDrillQuestion(currentDrillSubtest);
  renderCurrentDrillQuestion();
  showXpToast(0, "Soal berhasil diacak ulang! 🔀");
};

function startDrillSubtest(subtestId) {
  if (typeof isUserLoggedIn === "function" && !isUserLoggedIn()) {
    pendingTargetTab = "drill";
    openAuthModal("login", false, "Silakan Masuk atau Buat Akun terlebih dahulu untuk mengakses Latihan Kilat.");
    showAuthAlert("🔒 Fitur Latihan Kilat memerlukan akun pengguna. Silakan Masuk (Login) atau Daftar (Register) gratis untuk melanjutkan!", false);
    return;
  }
  switchTab("drill");
  renderDrillMode(subtestId, true);
}

function renderDrillSubtestPills(activeFilter) {
  const container = document.getElementById("drill-filter-pills");
  if (!container) return;

  const filters = [{ id: "all", name: "Semua Subtes", icon: "✨" }, ...UTBK_SUBTESTS];
  const pillsHtml = filters.map(f => {
    let shortTitle = f.name;
    if (f.id === "all") shortTitle = "Semua Subtes";
    else if (f.id === "pu") shortTitle = "PU";
    else if (f.id === "ppu") shortTitle = "PPU";
    else if (f.id === "pbm") shortTitle = "PBM";
    else if (f.id === "pk") shortTitle = "PK";
    else if (f.id === "lit_indo") shortTitle = "Lit. Indo";
    else if (f.id === "lit_ing") shortTitle = "Lit. Inggris";
    else if (f.id === "pm") shortTitle = "Pen. Mat";
    else if (f.id === "tka_mat") shortTitle = "TKA Mat";
    else if (f.id === "tka_fis") shortTitle = "TKA Fisika";
    else if (f.id === "tka_kim") shortTitle = "TKA Kimia";
    else if (f.id === "tka_bio") shortTitle = "TKA Biologi";
    else if (f.id === "tka_eko") shortTitle = "TKA Eko";
    else if (f.id === "tka_geo") shortTitle = "TKA Geo";
    else if (f.id === "tka_sej") shortTitle = "TKA Sejarah";
    else if (f.id === "tka_sos") shortTitle = "TKA Sosiologi";
    else shortTitle = f.name;

    return `
      <button onclick="renderDrillMode('${f.id}', true)" data-drill-subtest="${f.id}" class="px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition flex items-center gap-1.5 ${activeFilter === f.id ? 'bg-indigo-600 text-white shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'}">
        <span>${f.icon}</span>
        <span>${shortTitle}</span>
      </button>
    `;
  }).join("");

  const shuffleBtn = `
    <button onclick="shuffleDrillQuestions()" title="Acak kembali urutan soal agar variatif" class="px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition flex items-center gap-1.5 bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-700 hover:bg-amber-100 shadow-sm">
      <span>🔀</span>
      <span>Acak Soal</span>
    </button>
  `;

  container.innerHTML = pillsHtml + shuffleBtn;
}

function switchDrillExpTab(tab) {
  const btnK = document.getElementById("tab-exp-konsep");
  const btnT = document.getElementById("tab-exp-trik");
  const contentK = document.getElementById("drill-content-konsep");
  const contentT = document.getElementById("drill-content-trik");

  if (tab === "konsep") {
    if (btnK) btnK.className = "px-3 py-1.5 rounded-xl bg-indigo-600 text-white font-bold transition shadow-sm flex items-center gap-1.5 text-xs";
    if (btnT) btnT.className = "px-3 py-1.5 rounded-xl bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600 font-bold border border-slate-200 dark:border-slate-600 transition flex items-center gap-1.5 text-xs";
    if (contentK) contentK.classList.remove("hidden");
    if (contentT) contentT.classList.add("hidden");
  } else {
    if (btnT) btnT.className = "px-3 py-1.5 rounded-xl bg-amber-500 text-slate-950 font-bold transition shadow-sm flex items-center gap-1.5 text-xs";
    if (btnK) btnK.className = "px-3 py-1.5 rounded-xl bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600 font-bold border border-slate-200 dark:border-slate-600 transition flex items-center gap-1.5 text-xs";
    if (contentT) contentT.classList.remove("hidden");
    if (contentK) contentK.classList.add("hidden");
  }
}
window.switchDrillExpTab = switchDrillExpTab;

function renderCurrentDrillQuestion() {
  const card = document.getElementById("drill-card-container");
  if (!card) return;

  const pool = getDrillPool(currentDrillSubtest);
  const q = currentDrillQuestion || pickNextRandomDrillQuestion(currentDrillSubtest);

  if (!q) {
    card.innerHTML = `<div class="p-8 text-center text-slate-500">Belum ada soal tersedia pada kategori ini. Silakan pilih subtes lain! 🚀</div>`;
    return;
  }

  // Update Drill Progress Bar
  const pBar = document.getElementById("drill-progress-bar");
  if (pBar) {
    const totalCount = pool.length || 1;
    const pct = Math.min(100, Math.max(8, Math.round((drillAnsweredHistory.size / totalCount) * 100)));
    pBar.style.width = `${pct}%`;
  }

  const isBookmarked = checkIsBookmarked(q.id);

  card.innerHTML = `
    <div class="glass-card card-hover-lift rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden">
      <!-- Header Soal -->
      <div class="p-3.5 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between gap-2 bg-slate-50/70 dark:bg-slate-900/50">
        <div class="flex items-center flex-wrap gap-1.5 sm:gap-2 flex-1 min-w-0">
          <span class="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-xl text-[11px] sm:text-xs font-bold bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">${q.subtestName || 'Subtes UTBK'}</span>
          <span class="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-xl text-[11px] sm:text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 inline-flex items-center gap-1 sm:gap-1.5 shadow-sm max-w-full">
            <span>📍 Sumber:</span>
            <strong class="text-blue-600 dark:text-blue-400 font-bold break-words">${q.source || 'SNBT Resmi'}</strong>
          </span>
          <span class="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-xl text-[11px] sm:text-xs font-semibold ${q.difficulty === 'HOTS' ? 'bg-rose-100 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800' : 'bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800'}">${q.difficulty || 'Standar'}</span>
          <span class="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">Latihan ke-${drillSessionCount} • Pool: ${pool.length} Soal (Diacak Otomatis 🔀)</span>
        </div>
        <button onclick="toggleBookmark('${q.id}')" class="p-1.5 sm:p-2 rounded-xl hover:bg-slate-200/60 dark:hover:bg-slate-700 transition shrink-0 ${isBookmarked ? 'text-amber-500' : 'text-slate-400'}">
          <i data-lucide="bookmark" class="w-4 h-4 sm:w-5 sm:h-5 ${isBookmarked ? 'fill-amber-500' : ''}"></i>
        </button>
      </div>

      <!-- Isi Wacana & Soal -->
      <div class="p-4 sm:p-6 space-y-3 sm:space-y-4">
        ${q.stimulus ? `
          <div class="exam-text p-3.5 sm:p-4 bg-slate-50/80 dark:bg-slate-900/60 border-l-4 border-indigo-500 rounded-r-2xl leading-relaxed text-slate-700 dark:text-slate-300 shadow-inner max-h-60 overflow-y-auto">
            ${q.stimulus}
          </div>
        ` : ""}

        <div class="exam-text font-semibold text-slate-900 dark:text-white leading-snug">
          ${q.question}
        </div>

        <!-- Opsi Pilihan Ganda -->
        <div class="space-y-2 sm:space-y-2.5 pt-1 sm:pt-2" id="drill-options-list">
          ${(q.options || []).map(opt => `
            <button onclick="handleDrillAnswer('${opt.key}')" id="drill-opt-${opt.key}" class="w-full text-left p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-indigo-50/40 dark:hover:bg-indigo-950/30 transition flex items-start gap-2.5 sm:gap-3 group min-h-[46px] sm:min-h-[48px]">
              <span class="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center font-bold text-xs text-slate-700 dark:text-slate-300 shrink-0 transition shadow-sm mt-0.5">
                ${opt.key}
              </span>
              <span class="exam-text text-slate-800 dark:text-slate-200 leading-snug pt-0.5 break-words flex-1">${opt.text}</span>
            </button>
          `).join("")}
        </div>

        <!-- Pembahasan Instan (Hidden until answered) -->
        <div id="drill-explanation" class="hidden pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3 animate-fade-in">
          <div id="drill-result-banner" class="p-3.5 rounded-2xl text-sm font-bold flex items-center gap-2"></div>
          
          <!-- Tabbed Explanations: Konsep vs Trik 10 Detik -->
          <div class="bg-indigo-50/70 dark:bg-slate-800/80 border border-indigo-200/80 dark:border-slate-700 rounded-2xl p-4 text-sm text-slate-800 dark:text-slate-200 space-y-3">
            <div class="flex items-center justify-between border-b border-indigo-100 dark:border-slate-700 pb-2.5 flex-wrap gap-2">
              <div class="flex items-center gap-2 font-bold">
                <button type="button" id="tab-exp-konsep" onclick="switchDrillExpTab('konsep')" class="px-3 py-1.5 rounded-xl bg-indigo-600 text-white font-bold transition shadow-sm flex items-center gap-1.5 text-xs">
                  <span>💡</span> Konsep & Teori
                </button>
                ${q.quickTrick ? `
                <button type="button" id="tab-exp-trik" onclick="switchDrillExpTab('trik')" class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600 font-bold border border-slate-200 dark:border-slate-600 transition flex items-center gap-1.5 text-xs">
                  <span>⚡</span> Trik 10 Detik
                </button>
                ` : ""}
              </div>
              <span class="text-xs font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-100/80 dark:bg-indigo-950/80 px-2.5 py-0.5 rounded-full">
                Kunci: ${q.correctAnswer}
              </span>
            </div>

            <div id="drill-content-konsep" class="exam-text leading-relaxed text-slate-700 dark:text-slate-300">
              ${q.explanation}
            </div>

            ${q.quickTrick ? `
            <div id="drill-content-trik" class="hidden exam-text p-3 bg-amber-500/10 border border-amber-400/30 rounded-xl leading-relaxed text-amber-900 dark:text-amber-200">
              <div class="font-extrabold flex items-center gap-1.5 text-amber-700 dark:text-amber-400 mb-1">
                <span>⚡ Trik Cepat & Eliminasi:</span>
              </div>
              <div>${q.quickTrick}</div>
            </div>
            ` : ""}
          </div>

          <div class="flex justify-end pt-2">
            <button onclick="nextDrillQuestion()" class="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-sm flex items-center gap-2 transition card-hover-lift">
              <span>Soal Berikutnya</span>
              <span class="text-xs opacity-90">🔀</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  setTimeout(renderLatex, 30);
  if (window.lucide) lucide.createIcons();
}

function handleDrillAnswer(selectedKey) {
  const q = currentDrillQuestion;
  if (!q) return;

  // Disable all options
  const optionButtons = document.querySelectorAll("#drill-options-list button");
  optionButtons.forEach(btn => btn.disabled = true);

  const isCorrect = selectedKey === q.correctAnswer;
  const selectedBtn = document.getElementById(`drill-opt-${selectedKey}`);
  const correctBtn = document.getElementById(`drill-opt-${q.correctAnswer}`);

  // Highlight
  if (isCorrect) {
    if (selectedBtn) selectedBtn.classList.add("bg-emerald-50", "dark:bg-emerald-950/50", "border-emerald-500", "ring-2", "ring-emerald-300");
    addXp(15, "Jawaban Benar Latihan Kilat!");
    showXpToast(15, "Jawaban Benar! 🎉");
    updateDailyQuestProgress("quest_drill", 1);
  } else {
    if (selectedBtn) selectedBtn.classList.add("bg-rose-50", "dark:bg-rose-950/50", "border-rose-500", "ring-2", "ring-rose-300");
    if (correctBtn) {
      correctBtn.classList.add("bg-emerald-50", "dark:bg-emerald-950/50", "border-emerald-500");
    }
    showXpToast(0, "Belum Tepat, Pelajari Pembahasan & Trik 💡");
  }

  // Show explanation
  const expContainer = document.getElementById("drill-explanation");
  const banner = document.getElementById("drill-result-banner");
  if (expContainer && banner) {
    banner.className = isCorrect
      ? "p-3.5 rounded-2xl text-sm font-bold flex items-center gap-2 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800"
      : "p-3.5 rounded-2xl text-sm font-bold flex items-center gap-2 bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-200 border border-rose-300 dark:border-rose-800";
    banner.innerHTML = isCorrect
      ? `<span>🎉 Luar Biasa! Jawabanmu Tepat (+15 XP)</span>`
      : `<span>❌ Jawabanmu Belum Tepat. Kunci Jawaban: ${q.correctAnswer}</span>`;

    expContainer.classList.remove("hidden");
  }

  setTimeout(renderLatex, 30);
  if (window.lucide) lucide.createIcons();
}

function nextDrillQuestion() {
  // Setiap habis mengerjakan sebuah soal, langsung acak murni dari subtes yang sedang dikerjakan
  pickNextRandomDrillQuestion(currentDrillSubtest);
  renderCurrentDrillQuestion();

  // Scroll kembali ke atas kontainer latihan agar nyaman
  const drillView = document.getElementById("view-drill");
  if (drillView) {
    drillView.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Bookmarks Handler
// Bookmarks Handler (Tersimpan per pengguna aktif)
function checkIsBookmarked(qId) {
  if (typeof getCurrentUser === "function") {
    const user = getCurrentUser();
    if (user && Array.isArray(user.bookmarks)) {
      return user.bookmarks.includes(qId);
    }
  }
  const saved = localStorage.getItem(STORAGE_KEY_BOOKMARKS);
  if (!saved) return false;
  try {
    const list = JSON.parse(saved);
    return list.includes(qId);
  } catch (e) {
    return false;
  }
}

function toggleBookmark(qId) {
  if (typeof getAllUsers === "function" && typeof saveAllUsers === "function" && typeof getActiveUserId === "function") {
    const users = getAllUsers();
    const activeId = getActiveUserId();
    if (users && users[activeId]) {
      users[activeId].bookmarks = users[activeId].bookmarks || [];
      if (users[activeId].bookmarks.includes(qId)) {
        users[activeId].bookmarks = users[activeId].bookmarks.filter(id => id !== qId);
      } else {
        users[activeId].bookmarks.push(qId);
      }
      saveAllUsers(users);
      localStorage.setItem(STORAGE_KEY_BOOKMARKS, JSON.stringify(users[activeId].bookmarks));
      renderCurrentDrillQuestion();
      return;
    }
  }

  let list = [];
  const saved = localStorage.getItem(STORAGE_KEY_BOOKMARKS);
  if (saved) {
    try { list = JSON.parse(saved); } catch (e) { list = []; }
  }

  if (list.includes(qId)) {
    list = list.filter(id => id !== qId);
  } else {
    list.push(qId);
  }
  localStorage.setItem(STORAGE_KEY_BOOKMARKS, JSON.stringify(list));
  renderCurrentDrillQuestion();
}

// ============================================================
// 3. SIMULASI TRY OUT CBT RESMI (Sainsin & BisaEdu style)
// ============================================================
// State pilihan track CBT: 'saintek' atau 'soshum'
var currentCbtTrack = localStorage.getItem("utbk_cbt_track") || "saintek";

window.setCbtTrack = function(track) {
  currentCbtTrack = track;
  localStorage.setItem("utbk_cbt_track", track);
  renderCbtMode();
};

window.toggleCbtPaletteDrawer = function(show) {
  const drawer = document.getElementById("cbt-palette-drawer");
  if (!drawer) return;
  if (show) {
    drawer.classList.remove("hidden");
  } else {
    drawer.classList.add("hidden");
  }
};

function renderCbtMode() {
  const container = document.getElementById("cbt-main-area");
  if (!container) return;

  // Jika belum mulai ujian, tampilkan Briefing & Hub Seleksi TO
  if (!currentCbtSession || currentCbtSession.isFinished) {
    const stages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const tkaSubjectNames = currentCbtTrack === 'soshum'
      ? 'Ekonomi, Geografi, Sejarah, Sosiologi'
      : 'Matematika, Fisika, Kimia, Biologi';

    const stageCardsHtml = stages.map(num => {
      const historyInfo = typeof getCompletedStageInfo === "function" ? getCompletedStageInfo(currentCbtTrack, num) : null;
      const isCompleted = !!historyInfo;
      const bestScore = isCompleted ? historyInfo.overallScore : null;

      return `
        <div class="bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl border ${isCompleted ? 'border-emerald-300 dark:border-emerald-800/80 shadow-md' : 'border-slate-200 dark:border-slate-700/80'} p-5 sm:p-6 flex flex-col justify-between space-y-4 transition hover:shadow-lg">
          <div class="space-y-3">
            <div class="flex items-start justify-between gap-2">
              <div>
                <span class="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Tahap ${num}</span>
                <h3 class="text-lg font-black text-slate-900 dark:text-white">Try Out ${num} (TO-${num})</h3>
              </div>
              ${isCompleted ? `
                <span class="px-2.5 py-1 rounded-full text-[11px] font-black bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                  Skor: ${bestScore}
                </span>
              ` : `
                <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                  Belum
                </span>
              `}
            </div>

            <div class="grid grid-cols-2 gap-2 text-xs">
              <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                <span class="text-slate-400 text-[10px] block">Jumlah Soal</span>
                <span class="font-extrabold text-slate-800 dark:text-slate-100">25 Soal</span>
              </div>
              <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                <span class="text-slate-400 text-[10px] block">Waktu Ujian</span>
                <span class="font-extrabold text-slate-800 dark:text-slate-100">25 Menit</span>
              </div>
            </div>

            <div class="text-[11px] text-slate-500 dark:text-slate-400 space-y-1 bg-slate-50/60 dark:bg-slate-900/40 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800/60">
              <div class="flex items-center gap-1.5 font-bold text-slate-700 dark:text-slate-300">
                <span>⚖️ Komposisi Seimbang:</span>
              </div>
              <div>• <strong>13 UTBK:</strong> PU(2), PPU(2), PBM(2), PK(2), Lit Indo(2), Lit Ing(2), PM(1)</div>
              <div>• <strong>12 TKA:</strong> ${tkaSubjectNames} (@ 3 butir)</div>
            </div>
          </div>

          <button onclick="startCbtExam('stage', '${currentCbtTrack}', ${num})" class="w-full py-3 px-4 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition ${isCompleted ? 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-600' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg'}">
            <span>${isCompleted ? 'Kerjakan Ulang 🔄' : 'Mulai TO-' + num + ' 🚀'}</span>
          </button>
        </div>
      `;
    }).join("");

    container.innerHTML = `
      <div class="max-w-5xl mx-auto space-y-6 animate-fade-in pb-12">
        <!-- Top Track Switcher Header -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 shadow-md">
          <div>
            <div class="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400">
              <span>🎯 Rumpun Ujian Peminatan</span>
            </div>
            <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Pilih Rumpun Try Out: ${currentCbtTrack === 'saintek' ? 'Saintek' : 'Soshum'}
            </h2>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Menentukan paket 12 soal TKA yang akan kamu kerjakan (${tkaSubjectNames}).
            </p>
          </div>

          <div class="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-inner w-full sm:w-auto shrink-0">
            <button onclick="setCbtTrack('saintek')" class="flex-1 sm:flex-none px-6 py-2.5 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition ${currentCbtTrack === 'saintek' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'}">
              <span>🔬</span>
              <span>Saintek</span>
            </button>
            <button onclick="setCbtTrack('soshum')" class="flex-1 sm:flex-none px-6 py-2.5 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition ${currentCbtTrack === 'soshum' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'}">
              <span>📚</span>
              <span>Soshum</span>
            </button>
          </div>
        </div>

        <!-- Full UTBK General Simulation Banner -->
        <div class="bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-indigo-900/40 relative overflow-hidden">
          <div class="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div class="space-y-2.5 max-w-xl">
              <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-yellow-300">
                <span>🏛️ SIMULASI UTBK PENUH</span>
                <span>•</span>
                <span>FORMAT RESMI BPPP</span>
              </div>
              <h2 class="text-2xl sm:text-3xl font-black tracking-tight">
                Simulasi Ujian UTBK Penuh (${currentCbtTrack === 'saintek' ? 'Saintek' : 'Soshum'})
              </h2>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Teknis ujian seperti UTBK SNBT umum di pusat UTBK: 70 Soal TPS & Literasi (+ 20 Soal TKA peminatan), durasi 90 menit dengan kalkulasi skor IRT resmi (skala 200–850) dan integrasi rasionalisasi kelulusan PTN impian.
              </p>
              <div class="flex flex-wrap items-center gap-2 pt-1 text-xs">
                <span class="px-3 py-1 rounded-lg bg-white/10 font-bold">⏱️ 90 Menit</span>
                <span class="px-3 py-1 rounded-lg bg-white/10 font-bold">📝 90 Butir Soal</span>
                <span class="px-3 py-1 rounded-lg bg-white/10 font-bold">📊 Penilaian IRT Murni</span>
                <span class="px-3 py-1 rounded-lg bg-amber-400/20 text-amber-300 font-bold">+300 XP</span>
              </div>
            </div>

            <div class="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-2.5">
              <button onclick="startCbtExam('full_utbk', '${currentCbtTrack}')" class="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-xl transition text-xs sm:text-sm flex items-center justify-center gap-2">
                <span>Mulai Simulasi UTBK Lengkap</span>
                <span>🚀</span>
              </button>
              <button onclick="startCbtExam('full_utbk', 'all')" class="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl border border-white/20 transition text-xs flex items-center justify-center gap-2">
                <span>Simulasi TPS Standar (70 Soal / 70 Mnt)</span>
              </button>
            </div>
          </div>
          <!-- Decorative ambient glow -->
          <div class="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl pointer-events-none"></div>
        </div>

        <!-- Stage Mode: TO-1, TO-2, dst. -->
        <div class="space-y-4">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                <span>🎯</span>
                <span>Paket Try Out Bertahap (TO-1 s.d. TO-10)</span>
              </h2>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Setiap TO berisi tepat <strong>25 Soal</strong> dalam <strong>25 Menit</strong> dengan pembagian seimbang: 13 Soal UTBK & 12 Soal TKA.
              </p>
            </div>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/60">
              ${currentCbtTrack.toUpperCase()} • 10 Paket
            </span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            ${stageCardsHtml}
          </div>
        </div>
      </div>
    `;
    return;
  }

  // Tampilan Antarmuka Ujian CBT Aktif
  renderActiveCbtScreen();
}

function startCbtExam(mode = "stage", track = null, stage = 1) {
  if (typeof isUserLoggedIn === "function" && !isUserLoggedIn()) {
    pendingTargetTab = "cbt";
    openAuthModal("login", false, "Silakan Masuk atau Buat Akun terlebih dahulu untuk mengikuti Simulasi Try Out CBT.");
    showAuthAlert("🔒 Kamu perlu masuk atau daftar akun terlebih dahulu untuk mengikuti Simulasi Try Out CBT!", false);
    return;
  }

  const selectedTrack = track || currentCbtTrack || "saintek";
  let questions = [];
  let duration = 25;
  let sessionTitle = `Try Out ${stage} (${selectedTrack === 'saintek' ? 'Saintek' : 'Soshum'})`;

  if (mode === "stage") {
    if (typeof generateStageToQuestions === "function") {
      questions = generateStageToQuestions(selectedTrack, stage);
    } else {
      questions = QUESTIONS_DATA.slice(0, 25);
    }
    duration = 25;
    sessionTitle = `TO-${stage} ${selectedTrack === 'saintek' ? 'Saintek' : 'Soshum'}`;
  } else if (mode === "full_utbk") {
    if (typeof generateFullUtbkQuestions === "function") {
      questions = generateFullUtbkQuestions(selectedTrack);
    } else {
      questions = QUESTIONS_DATA.slice(0, 70);
    }
    duration = selectedTrack === 'all' ? 70 : 90;
    sessionTitle = `Simulasi UTBK Resmi (${selectedTrack === 'all' ? 'TPS' : selectedTrack.toUpperCase()})`;
  } else {
    questions = QUESTIONS_DATA.slice(0, 25);
    duration = 25;
    sessionTitle = `TO-1 ${selectedTrack === 'saintek' ? 'Saintek' : 'Soshum'}`;
  }

  const meta = {
    mode,
    track: selectedTrack,
    stage: mode === "stage" ? stage : null,
    title: sessionTitle,
    durationMinutes: duration,
    totalQuestions: questions.length
  };

  currentCbtSession = new CBTEngine(questions, (result, answers) => {
    const mobileNav = document.getElementById("mobile-bottom-nav");
    if (mobileNav) mobileNav.classList.remove("hidden");
    currentReviewResult = { result, answers };
    updateDailyQuestProgress("quest_cbt", 1);
    switchTab("rapor");
  }, meta);

  // Sembunyikan mobile bottom nav selama sesi ujian CBT berlangsung
  const mobileNav = document.getElementById("mobile-bottom-nav");
  if (mobileNav) mobileNav.classList.add("hidden");

  currentCbtSession.start(duration);
  renderActiveCbtScreen();
}

function renderActiveCbtScreen() {
  const container = document.getElementById("cbt-main-area");
  if (!container || !currentCbtSession) return;

  const q = currentCbtSession.getCurrentQuestion();
  const userAns = currentCbtSession.answers[q.id] || {};

  // Pre-generate number palette buttons
  const numberButtonsHtml = currentCbtSession.questions.map((item, idx) => {
    const status = currentCbtSession.getQuestionStatus(idx);
    const isCurrent = currentCbtSession.currentIndex === idx;
    let statusClass = "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700";
    if (status === "doubtful") {
      statusClass = "bg-yellow-400 text-yellow-950 border-yellow-500 font-bold";
    } else if (status === "answered") {
      statusClass = "bg-emerald-500 text-white border-emerald-600 font-bold";
    }
    if (isCurrent) {
      statusClass += " ring-2 ring-indigo-600 ring-offset-1 dark:ring-offset-slate-900 font-extrabold";
    }
    return `
      <button onclick="cbtJumpTo(${idx})" data-cbt-idx="${idx}" class="cbt-palette-btn-${idx} h-8 sm:h-9 rounded-xl font-bold text-xs border flex items-center justify-center transition ${statusClass}">
        ${idx + 1}
      </button>
    `;
  }).join("");

  container.innerHTML = `
    <!-- Top Bar CBT -->
    <div class="glass-card rounded-2xl p-3 sm:p-4 mb-4 shadow-md border border-slate-200 dark:border-slate-800 space-y-2.5 sm:space-y-0 sm:flex sm:items-center sm:justify-between sm:gap-4">
      <div class="flex items-center justify-between gap-2 w-full sm:w-auto">
        <div class="flex items-center gap-2 sm:gap-2.5 min-w-0">
          <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center text-xs shadow-md shrink-0">
            CBT
          </div>
          <div class="min-w-0">
            <div class="font-extrabold text-xs sm:text-sm text-slate-800 dark:text-slate-100 truncate">${q.subtestName}</div>
            <div class="text-[11px] sm:text-xs text-slate-400 dark:text-slate-500">Nomor ${currentCbtSession.currentIndex + 1} dari ${currentCbtSession.questions.length}</div>
          </div>
        </div>

        <!-- Center: Text Size Adjuster for CBT -->
        <div class="flex items-center gap-0.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-0.5 sm:p-1 text-xs shrink-0">
          <span class="text-[11px] font-bold text-slate-400 px-1.5 hidden md:inline">Teks:</span>
          <button onclick="setFontScale('sm')" id="cbt-font-btn-sm" class="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 font-bold transition text-xs">A-</button>
          <button onclick="setFontScale('md')" id="cbt-font-btn-md" class="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-indigo-600 text-white font-bold transition shadow-sm text-xs">A</button>
          <button onclick="setFontScale('lg')" id="cbt-font-btn-lg" class="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 font-bold transition text-xs">A+</button>
        </div>
      </div>

      <!-- Controls: Timer & Submit (Mobile Row 2) -->
      <div class="flex items-center justify-between sm:justify-end gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800">
        <!-- Button to open Mobile Drawer for questions list -->
        <button onclick="toggleCbtPaletteDrawer(true)" class="lg:hidden px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-1.5 transition">
          <span>📋</span>
          <span>Daftar Soal</span>
        </button>

        <div id="cbt-timer-display" class="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-900 dark:bg-slate-950 text-amber-400 font-mono font-black text-sm sm:text-base rounded-xl shadow-inner border border-slate-800 flex items-center gap-1.5 sm:gap-2 shrink-0">
          <i data-lucide="clock" class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400"></i>
          <span id="cbt-timer-text">--:--</span>
        </div>

        <button onclick="confirmFinishCbt()" class="px-3 sm:px-4 py-1.5 sm:py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-black rounded-xl shadow-md hover:shadow-rose-600/25 transition shrink-0">
          Selesai 🏁
        </button>
      </div>
    </div>

    <!-- Main CBT Grid: Soal + Navigasi -->
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start">
      <!-- Lembar Soal (3 Kolom di Desktop, Full di HP) -->
      <div class="lg:col-span-3 glass-card rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-md space-y-3.5 sm:space-y-4">
        <div class="flex items-start justify-between flex-wrap gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
          <div class="flex items-center flex-wrap gap-1.5 sm:gap-2 flex-1 min-w-0">
            <span class="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-bold bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">${q.subtestName}</span>
            <span class="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 inline-flex items-center gap-1 sm:gap-1.5 shadow-sm max-w-full">
              <span>📍 Sumber:</span>
              <strong class="text-blue-600 dark:text-blue-400 font-bold break-words">${q.source || 'SNBT Resmi'}</strong>
            </span>
          </div>
          <div class="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-400 dark:text-slate-500 shrink-0">
            <span>Tahun ${q.year || '2024'}</span>
            <span>•</span>
            <span class="font-semibold ${q.difficulty === 'HOTS' ? 'text-rose-500' : 'text-amber-500'}">${q.difficulty}</span>
          </div>
        </div>

        ${q.stimulus ? `
          <div class="exam-text p-3.5 sm:p-4 bg-slate-50/80 dark:bg-slate-900/60 border-l-4 border-indigo-500 rounded-r-2xl leading-relaxed text-slate-700 dark:text-slate-300 max-h-64 sm:max-h-72 overflow-y-auto shadow-inner">
            ${q.stimulus}
          </div>
        ` : ""}

        <div class="exam-text font-semibold text-slate-900 dark:text-white leading-snug">
          ${q.question}
        </div>

        <!-- Opsi Pilihan Jawaban CBT -->
        <div id="cbt-options-list" class="space-y-2 sm:space-y-2.5 pt-1 sm:pt-2">
          ${q.options.map(opt => {
            const isSelected = userAns.selected === opt.key;
            return `
              <div id="cbt-opt-${opt.key}" data-cbt-key="${opt.key}" onclick="selectCbtOption('${opt.key}')" class="cbt-option-item p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border cursor-pointer transition flex items-start gap-2.5 sm:gap-3 min-h-[46px] sm:min-h-[48px] ${isSelected ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-600 ring-2 ring-indigo-300 dark:ring-indigo-700 shadow-sm' : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/80'}">
                <span id="cbt-badge-${opt.key}" class="cbt-option-badge w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition mt-0.5 ${isSelected ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}">
                  ${opt.key}
                </span>
                <span class="exam-text text-slate-800 dark:text-slate-200 leading-snug pt-0.5 break-words flex-1">${opt.text}</span>
              </div>
            `;
          }).join("")}
        </div>

        <!-- CBT Bottom Navigation Bar -->
        <div class="pt-4 sm:pt-6 border-t border-slate-100 dark:border-slate-800 grid grid-cols-3 gap-2">
          <button onclick="cbtPrev()" ${currentCbtSession.currentIndex === 0 ? 'disabled' : ''} class="py-2.5 px-2 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-xl disabled:opacity-30 disabled:cursor-not-allowed transition flex items-center justify-center gap-1">
            <span>←</span>
            <span class="hidden sm:inline">Sebelumnya</span>
            <span class="sm:hidden">Prev</span>
          </button>

          <button id="cbt-btn-doubtful" onclick="cbtToggleDoubtful()" class="py-2.5 px-2 rounded-xl text-xs font-bold border transition flex items-center justify-center gap-1 ${userAns.isDoubtful ? 'bg-yellow-400 text-yellow-950 border-yellow-500 shadow-sm' : 'bg-yellow-50 dark:bg-yellow-950/40 text-yellow-800 dark:text-yellow-300 border-yellow-300 dark:border-yellow-700 hover:bg-yellow-100'}">
            <span>🤔</span>
            <span>Ragu</span>
          </button>

          <button onclick="cbtNext()" ${currentCbtSession.currentIndex === currentCbtSession.questions.length - 1 ? 'disabled' : ''} class="py-2.5 px-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl disabled:opacity-30 disabled:cursor-not-allowed transition flex items-center justify-center gap-1">
            <span class="hidden sm:inline">Berikutnya</span>
            <span class="sm:hidden">Next</span>
            <span>→</span>
          </button>
        </div>
      </div>

      <!-- Navigation Grid Nomor Soal (Desktop Sidebar) -->
      <div class="hidden lg:block lg:col-span-1 glass-card rounded-3xl border border-slate-200 dark:border-slate-800 p-4 shadow-md space-y-3 sticky top-20 max-h-[calc(100vh-120px)] flex flex-col">
        <div class="font-extrabold text-sm text-slate-800 dark:text-slate-100 flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800 shrink-0">
          <span>Daftar Nomor Soal</span>
          <span class="text-xs text-slate-400 dark:text-slate-500">${currentCbtSession.questions.length} Butir</span>
        </div>

        <div class="grid grid-cols-5 gap-1.5 overflow-y-auto pr-1 flex-1 scrollbar-none" id="cbt-number-grid">
          ${numberButtonsHtml}
        </div>

        <!-- Legend Status -->
        <div class="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 space-y-1.5 shrink-0">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded bg-emerald-500 shrink-0"></span>
            <span>Sudah Dijawab</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded bg-yellow-400 shrink-0"></span>
            <span>Ragu-ragu</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded bg-slate-200 dark:bg-slate-700 shrink-0"></span>
            <span>Belum Dijawab</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer for Nomor Soal -->
    <div id="cbt-palette-drawer" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm p-3 flex flex-col justify-end hidden lg:hidden">
      <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-h-[82vh] flex flex-col p-4 shadow-2xl space-y-3 animate-drawer-slide-up">
        <div class="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800 shrink-0">
          <div class="flex items-center gap-2">
            <span class="font-black text-sm text-slate-900 dark:text-white">📋 Daftar Nomor Soal</span>
            <span class="px-2 py-0.5 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300">
              ${currentCbtSession.currentIndex + 1} / ${currentCbtSession.questions.length}
            </span>
          </div>
          <button onclick="toggleCbtPaletteDrawer(false)" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center font-bold">
            ✕
          </button>
        </div>

        <div class="flex items-center justify-around py-1 text-[11px] text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 shrink-0">
          <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded bg-emerald-500"></span> Dijawab</span>
          <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded bg-yellow-400"></span> Ragu</span>
          <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded bg-slate-200 dark:bg-slate-700"></span> Belum</span>
        </div>

        <div class="grid grid-cols-5 sm:grid-cols-8 gap-2 overflow-y-auto p-1 flex-1 max-h-[55vh]">
          ${numberButtonsHtml}
        </div>
      </div>
    </div>
  `;

  renderCbtTimer(currentCbtSession.remainingSeconds);
  const curScale = localStorage.getItem("utbk_font_scale") || "md";
  setFontScale(curScale);
  renderLatex(container);
  setTimeout(() => renderLatex(container), 30);
  if (window.lucide) lucide.createIcons();
}

window.renderCbtTimer = function(seconds) {
  const el = document.getElementById("cbt-timer-text");
  if (!el) return;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  el.innerText = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;

  const container = document.getElementById("cbt-timer-display");
  if (container) {
    if (seconds < 180) {
      container.classList.remove("text-amber-400");
      container.classList.add("text-rose-400", "animate-pulse");
    } else {
      container.classList.remove("text-rose-400", "animate-pulse");
      container.classList.add("text-amber-400");
    }
  }
};

function updateCbtPaletteButton(idx) {
  if (!currentCbtSession) return;
  const status = currentCbtSession.getQuestionStatus(idx);
  const isCurrent = currentCbtSession.currentIndex === idx;
  let statusClass = "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700";
  if (status === "doubtful") {
    statusClass = "bg-yellow-400 text-yellow-950 border-yellow-500 font-bold";
  } else if (status === "answered") {
    statusClass = "bg-emerald-500 text-white border-emerald-600 font-bold";
  }
  if (isCurrent) {
    statusClass += " ring-2 ring-indigo-600 ring-offset-1 dark:ring-offset-slate-900 font-extrabold";
  }
  const buttons = document.querySelectorAll(`[data-cbt-idx="${idx}"]`);
  buttons.forEach(btn => {
    btn.className = `cbt-palette-btn-${idx} h-8 sm:h-9 rounded-xl font-bold text-xs border flex items-center justify-center transition ${statusClass}`;
  });
}

function selectCbtOption(key) {
  if (!currentCbtSession) return;
  currentCbtSession.selectOption(key);

  const optionsList = document.getElementById("cbt-options-list");
  if (optionsList) {
    const items = optionsList.querySelectorAll(".cbt-option-item");
    items.forEach(item => {
      const itemKey = item.getAttribute("data-cbt-key");
      const isSelected = (itemKey === key);
      const badge = document.getElementById(`cbt-badge-${itemKey}`);
      if (isSelected) {
        item.className = "cbt-option-item p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border cursor-pointer transition flex items-start gap-2.5 sm:gap-3 min-h-[46px] sm:min-h-[48px] bg-indigo-50 dark:bg-indigo-950/60 border-indigo-600 ring-2 ring-indigo-300 dark:ring-indigo-700 shadow-sm";
        if (badge) {
          badge.className = "cbt-option-badge w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition mt-0.5 bg-indigo-600 text-white shadow-sm";
        }
      } else {
        item.className = "cbt-option-item p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border cursor-pointer transition flex items-start gap-2.5 sm:gap-3 min-h-[46px] sm:min-h-[48px] border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/80";
        if (badge) {
          badge.className = "cbt-option-badge w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition mt-0.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300";
        }
      }
    });
    updateCbtPaletteButton(currentCbtSession.currentIndex);
  } else {
    renderActiveCbtScreen();
  }
}

function cbtToggleDoubtful() {
  if (!currentCbtSession) return;
  currentCbtSession.toggleDoubtful();
  const q = currentCbtSession.getCurrentQuestion();
  const userAns = currentCbtSession.answers[q.id] || {};
  const btn = document.getElementById("cbt-btn-doubtful");
  if (btn) {
    if (userAns.isDoubtful) {
      btn.className = "py-2.5 px-2 rounded-xl text-xs font-bold border transition flex items-center justify-center gap-1 bg-yellow-400 text-yellow-950 border-yellow-500 shadow-sm";
    } else {
      btn.className = "py-2.5 px-2 rounded-xl text-xs font-bold border transition flex items-center justify-center gap-1 bg-yellow-50 dark:bg-yellow-950/40 text-yellow-800 dark:text-yellow-300 border-yellow-300 dark:border-yellow-700 hover:bg-yellow-100";
    }
  }
  updateCbtPaletteButton(currentCbtSession.currentIndex);
}

function cbtPrev() {
  if (!currentCbtSession) return;
  currentCbtSession.prev();
  renderActiveCbtScreen();
}

function cbtNext() {
  if (!currentCbtSession) return;
  currentCbtSession.next();
  renderActiveCbtScreen();
}

function cbtJumpTo(idx) {
  if (!currentCbtSession) return;
  currentCbtSession.goTo(idx);
  if (typeof toggleCbtPaletteDrawer === "function") {
    toggleCbtPaletteDrawer(false);
  }
  renderActiveCbtScreen();
}

function confirmFinishCbt() {
  if (!currentCbtSession) return;
  const stats = currentCbtSession.getSummaryStats();

  const modal = document.createElement("div");
  modal.className = "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in";
  modal.innerHTML = `
    <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100">
      <div class="text-xl font-bold text-slate-800 mb-2">Konfirmasi Pengumpulan Ujian</div>
      <p class="text-sm text-slate-500 mb-4">Pastikan kamu sudah memeriksa semua jawaban sebelum mengakhiri sesi.</p>

      <div class="grid grid-cols-3 gap-2.5 mb-4 text-center text-xs">
        <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl">
          <div class="text-base font-bold text-emerald-700 dark:text-emerald-300">${stats.answered}</div>
          <div class="text-emerald-900 dark:text-emerald-400 mt-0.5 font-medium">Dijawab</div>
        </div>
        <div class="p-3 bg-yellow-50 dark:bg-yellow-950/40 border border-yellow-200 dark:border-yellow-800 rounded-xl">
          <div class="text-base font-bold text-yellow-700 dark:text-yellow-300">${stats.doubtful}</div>
          <div class="text-yellow-900 dark:text-yellow-400 mt-0.5 font-medium">Ragu-ragu</div>
        </div>
        <div class="p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
          <div class="text-base font-bold text-slate-600 dark:text-slate-300">${stats.empty}</div>
          <div class="text-slate-800 dark:text-slate-400 mt-0.5 font-medium">Kosong</div>
        </div>
      </div>

      <!-- XP Rule Notice -->
      ${stats.empty > 0 ? `
        <div class="mb-5 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/80 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2.5 text-left leading-relaxed">
          <span class="text-base flex-shrink-0">⚠️</span>
          <div>
            <strong>Perhatian Reward XP:</strong> Masih ada <strong>${stats.empty} butir soal belum dijawab</strong>. Kamu <strong>tidak akan mendapatkan reward XP (+200 XP)</strong> jika mengumpulkan dengan soal kosong.
          </div>
        </div>
      ` : `
        <div class="mb-5 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/80 text-xs text-emerald-800 dark:text-emerald-300 flex items-start gap-2.5 text-left leading-relaxed">
          <span class="text-base flex-shrink-0">🎉</span>
          <div>
            <strong>Semua Soal Terjawab!</strong> Luar biasa, seluruh butir soal telah kamu isi. Kamu berhak memperoleh <strong>+200 XP</strong> setelah mengumpulkan ujian ini.
          </div>
        </div>
      `}

      <div class="flex gap-3">
        <button id="btn-cancel-submit" class="flex-1 py-2.5 border border-slate-200 text-slate-700 text-sm font-bold rounded-xl hover:bg-slate-50">
          Kembali ke Ujian
        </button>
        <button id="btn-submit-cbt" class="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-md hover:shadow-sm">
          Ya, Kumpulkan 🏁
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById("btn-cancel-submit").onclick = () => modal.remove();
  document.getElementById("btn-submit-cbt").onclick = () => {
    modal.remove();
    currentCbtSession.submitExam(false);
  };
}

// ============================================================
// 4. RAPOR BELAJAR & RASIONALISASI (Pahamify & Sainsin style)
// ============================================================
function renderRaporView() {
  const container = document.getElementById("rapor-main-area");
  if (!container) return;

  const history = getTryOutHistory();
  const latestResult = (currentReviewResult && currentReviewResult.result) || history[0];

  if (!latestResult) {
    const profile = getUserProfile();
    const major1 = findMajorById(profile.targetMajorId);
    const major2 = findMajorById(profile.targetMajorId2);

    container.innerHTML = `
      <div class="space-y-6">
        <!-- Hero Empty State Card -->
        <div class="bg-slate-900 dark:bg-slate-950 border border-slate-800 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div class="relative z-10 max-w-2xl space-y-3">
            <span class="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-yellow-300">
              📊 Rapor Evaluasi & Rasionalisasi IRT
            </span>
            <h2 class="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
              Belum Ada Riwayat Try Out CBT
            </h2>
            <p class="text-xs sm:text-sm text-indigo-100 leading-relaxed">
              Selesaikan minimal 1 sesi simulasi Try Out CBT resmi SNPMB untuk membuka evaluasi skor IRT (skala 200–850), radar analisis diagnostik 7 subtes, dan rasionalisasi peluang lolos ke PTN impianmu.
            </p>
            <div class="pt-2 flex flex-wrap gap-3">
              <button onclick="switchTab('cbt')" class="px-5 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-extrabold text-xs sm:text-sm rounded-xl shadow-lg transition flex items-center gap-2">
                <span>Mulai Try Out CBT Sekarang</span>
                <span>🚀</span>
              </button>
              <button onclick="switchTab('drill')" class="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm rounded-xl backdrop-blur-md transition border border-white/20 flex items-center gap-1.5">
                <span>Latihan Kilat Dulu</span>
                <span>⚡</span>
              </button>
            </div>
          </div>
          <!-- Decorative ambient blob -->
          <div class="absolute -bottom-12 -right-12 w-56 h-56 rounded-full bg-purple-500/20 blur-2xl pointer-events-none"></div>
        </div>

        <!-- Target PTN & Skor Impian Pengguna -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Pilihan 1 -->
          <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 shadow-sm space-y-2">
            <div class="flex items-center justify-between text-xs">
              <span class="font-bold text-amber-500 dark:text-amber-400 uppercase tracking-wider">🎯 Target Pilihan 1 (Utama)</span>
              <span class="px-2 py-0.5 rounded text-xs font-bold bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60">Menunggu Try Out</span>
            </div>
            <div class="font-bold text-base text-slate-900 dark:text-white">${major1 ? major1.name : 'Belum Dipilih'}</div>
            <div class="text-xs text-slate-500 dark:text-slate-400">${major1 ? major1.ptnName + ' (' + major1.ptnShort + ')' : '-'}</div>
            <div class="pt-2 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs">
              <span class="text-slate-500 dark:text-slate-400">Target Skor Aman:</span>
              <span class="font-extrabold text-indigo-600 dark:text-indigo-400 text-sm">${major1 ? major1.targetScore : '-'}</span>
            </div>
          </div>

          <!-- Pilihan 2 -->
          <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 shadow-sm space-y-2">
            <div class="flex items-center justify-between text-xs">
              <span class="font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider">🛡️ Target Pilihan 2 (Cadangan)</span>
              <span class="px-2 py-0.5 rounded text-xs font-bold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/60">Menunggu Try Out</span>
            </div>
            <div class="font-bold text-base text-slate-900 dark:text-white">${major2 ? major2.name : 'Belum Dipilih'}</div>
            <div class="text-xs text-slate-500 dark:text-slate-400">${major2 ? major2.ptnName + ' (' + major2.ptnShort + ')' : '-'}</div>
            <div class="pt-2 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs">
              <span class="text-slate-500 dark:text-slate-400">Target Skor Aman:</span>
              <span class="font-extrabold text-indigo-600 dark:text-indigo-400 text-sm">${major2 ? major2.targetScore : '-'}</span>
            </div>
          </div>
        </div>

        <!-- Edukasi Sistem Penilaian IRT SNBT 2026 -->
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
          <div class="flex items-center gap-2">
            <span class="text-xl">💡</span>
            <div>
              <h2 class="font-bold text-slate-900 dark:text-white text-sm sm:text-base font-heading">Bagaimana Sistem Penilaian IRT (Item Response Theory) Bekerja?</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">Standar resmi yang digunakan oleh Balai Pengelolaan Pengujian Pendidikan (BPPP) Kemendikbudristek.</p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/60 space-y-1">
              <div class="font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                <span>1.</span>
                <span>Tidak Ada Nilai Minus</span>
              </div>
              <p class="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                Jawaban benar bernilai positif, sedangkan jawaban salah atau kosong bernilai 0. Selalu isi seluruh butir soal sebelum waktu habis!
              </p>
            </div>

            <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/60 space-y-1">
              <div class="font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                <span>2.</span>
                <span>Bobot Soal Berbeda</span>
              </div>
              <p class="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                Soal HOTS yang sulit dan jarang dijawab benar oleh peserta lain memiliki bobot nilai IRT jauh lebih tinggi dibanding soal mudah.
              </p>
            </div>

            <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/60 space-y-1">
              <div class="font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                <span>3.</span>
                <span>Skala Skor 200 – 850</span>
              </div>
              <p class="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                Hasil evaluasi setiap subtes dikonversi ke skala IRT nasional, dilengkapi diagnosis subtes terkuat dan subtes yang perlu digenjot.
              </p>
            </div>
          </div>

          <div class="pt-2 flex justify-center">
            <button onclick="switchTab('cbt')" class="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition flex items-center gap-2">
              <span>Mulai Simulasi Try Out Pertama Kamu</span>
              <span>👉</span>
            </button>
          </div>
        </div>
      </div>
    `;
    return;
  }

  const profile = getUserProfile();
  const major1 = findMajorById(profile.targetMajorId);
  const major2 = findMajorById(profile.targetMajorId2);
  const dualStrategy = analyzeDualStrategy(latestResult.overallScore, major1, major2);
  const analysis = analyzeStrengthsAndWeaknesses(latestResult.subtestScores);

  container.innerHTML = `
    <!-- Top Banner Skor IRT -->
    <div class="bg-slate-900 dark:bg-slate-950 border border-slate-800 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden mb-6">
      <div class="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div class="text-center lg:text-left">
          <span class="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-indigo-200">
            Hasil Evaluasi UTBK SNBT
          </span>
          <h2 class="text-3xl sm:text-4xl font-black mt-2 tracking-tight">
            Skor IRT: <span class="text-yellow-400">${latestResult.overallScore}</span> <span class="text-xl font-normal text-indigo-200">/ 850</span>
          </h2>
          <p class="text-xs sm:text-sm text-indigo-200 mt-1 max-w-md">
            Dihitung menggunakan pembobotan tingkat kesulitan soal resmi SNPMB (Mudah, Sedang, HOTS).
          </p>
          <div class="mt-2.5 flex items-center gap-2 flex-wrap">
            ${latestResult.emptyCount === 0 ? `
              <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                <span>🎉 Semua Soal Dijawab (+200 XP Diterima)</span>
              </span>
            ` : `
              <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/25 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                <span>⚠️ ${latestResult.emptyCount} Soal Tidak Dijawab (0 XP)</span>
              </span>
            `}
          </div>
          ${dualStrategy && dualStrategy.advice ? `
            <div class="mt-3 p-2.5 bg-white/10 backdrop-blur-md rounded-xl text-xs text-amber-200 border border-amber-300/30 max-w-md">
              ${dualStrategy.advice}
            </div>
          ` : ""}
        </div>

        <!-- Rasionalisasi Dual Card -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full lg:max-w-xl">
          <!-- Pilihan 1 -->
          <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-yellow-300 uppercase tracking-wider">Pilihan 1 🎯</span>
              <span class="px-2 py-0.5 rounded text-xs font-bold ${dualStrategy && dualStrategy.r1 ? dualStrategy.r1.badgeClass : 'bg-white/20 text-white'}">
                ${dualStrategy && dualStrategy.r1 ? dualStrategy.r1.status : '-'}
              </span>
            </div>
            <div class="text-sm font-bold text-white mt-1 truncate">${major1 ? major1.name : 'Belum Dipilih'}</div>
            <div class="text-xs text-indigo-200">${major1 ? major1.ptnShort : '-'}</div>
            <div class="mt-2 text-xs flex justify-between text-indigo-100">
              <span>Target: <strong>${major1 ? major1.targetScore : '-'}</strong></span>
              <span>Peluang: <strong class="text-white">${dualStrategy && dualStrategy.r1 ? dualStrategy.r1.chancePercent + '%' : '-'}</strong></span>
            </div>
          </div>

          <!-- Pilihan 2 -->
          <div class="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-indigo-200 uppercase tracking-wider">Pilihan 2 🛡️</span>
              <span class="px-2 py-0.5 rounded text-xs font-bold ${dualStrategy && dualStrategy.r2 ? dualStrategy.r2.badgeClass : 'bg-white/20 text-white'}">
                ${dualStrategy && dualStrategy.r2 ? dualStrategy.r2.status : '-'}
              </span>
            </div>
            <div class="text-sm font-bold text-white mt-1 truncate">${major2 ? major2.name : 'Belum Dipilih'}</div>
            <div class="text-xs text-indigo-200">${major2 ? major2.ptnShort : '-'}</div>
            <div class="mt-2 text-xs flex justify-between text-indigo-100">
              <span>Target: <strong>${major2 ? major2.targetScore : '-'}</strong></span>
              <span>Peluang: <strong class="text-white">${dualStrategy && dualStrategy.r2 ? dualStrategy.r2.chancePercent + '%' : '-'}</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Grid Visual Analytics -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <!-- Radar Chart (Chart.js) -->
      <div class="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col">
        <div class="font-bold text-base text-slate-800 mb-1">Radar Kekuatan 7 Subtes</div>
        <div class="text-xs text-slate-500 mb-4">Memetakan skor IRT kamu terhadap benchmark aman kelulusan PTN.</div>
        <div class="relative h-72 w-full flex-1">
          <canvas id="subtestRadarChart"></canvas>
        </div>
      </div>

      <!-- Analisis Diagnostik Pahamify -->
      <div class="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
        <div class="font-bold text-base text-slate-800">Diagnosis Kemampuan Belajar</div>
        
        <div class="grid grid-cols-2 gap-3">
          <div class="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-xl">
            <div class="text-xs font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1">
              <span>🌟 Subtes Terkuat</span>
            </div>
            <div class="text-sm font-bold text-slate-800 dark:text-emerald-100 mt-1 truncate">${analysis.strongest ? analysis.strongest.name : '-'}</div>
            <div class="text-xs text-emerald-700 dark:text-emerald-400 font-semibold">Skor: ${analysis.strongest ? analysis.strongest.score : '-'}</div>
          </div>

          <div class="p-3.5 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 rounded-xl">
            <div class="text-xs font-bold text-rose-800 dark:text-rose-300 flex items-center gap-1">
              <span>🚨 Perlu Digenjot</span>
            </div>
            <div class="text-sm font-bold text-slate-800 dark:text-rose-100 mt-1 truncate">${analysis.weakest ? analysis.weakest.name : '-'}</div>
            <div class="text-xs text-rose-700 dark:text-rose-400 font-semibold">Skor: ${analysis.weakest ? analysis.weakest.score : '-'}</div>
          </div>
        </div>

        <!-- Rincian per Subtes -->
        <div class="space-y-2 pt-2">
          <div class="text-xs font-bold uppercase text-slate-400 tracking-wider">Rincian Nilai per Subtes</div>
          <div class="max-h-56 overflow-y-auto space-y-2 pr-1">
            ${analysis.list.map(item => `
              <div class="flex items-center justify-between p-2.5 bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/60 rounded-xl text-xs">
                <div class="min-w-0 pr-2">
                  <div class="font-bold text-slate-800 dark:text-slate-100 truncate">${item.name}</div>
                  <div class="text-xs text-slate-500 dark:text-slate-400">Benar: ${item.correct} • Salah: ${item.wrong} • Kosong: ${item.empty}</div>
                </div>
                <div class="text-right shrink-0">
                  <div class="font-black text-indigo-600 dark:text-indigo-400 text-sm">${item.score}</div>
                  <div class="text-xs text-slate-400 dark:text-slate-500">Akurasi ${item.accuracy}%</div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </div>

    <!-- Review Kunci Jawaban & Pembahasan -->
    <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 sm:p-6 shadow-sm">
      <div class="flex items-center justify-between mb-4">
        <div>
          <div class="font-bold text-base text-slate-800 dark:text-white">Pembahasan & Kunci Jawaban Soal</div>
          <div class="text-xs text-slate-500 dark:text-slate-400">Pelajari kesalahanmu untuk meningkatkan akurasi di Try Out selanjutnya.</div>
        </div>
      </div>

      <div class="space-y-4">
        ${((latestResult && Array.isArray(latestResult.questions) && latestResult.questions.length > 0) ? latestResult.questions : QUESTIONS_DATA.slice(0, 25)).map((q, idx) => {
          const userAnsObj = (currentReviewResult && currentReviewResult.answers) ? currentReviewResult.answers[q.id] : (latestResult && latestResult.answers ? latestResult.answers[q.id] : null);
          const userSelected = userAnsObj ? userAnsObj.selected : null;
          const isCorrect = userSelected === q.correctAnswer;
          return `
            <div class="border border-slate-200 dark:border-slate-700 rounded-xl p-4 space-y-2 text-xs sm:text-sm bg-white dark:bg-slate-800/80">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <div class="flex items-center flex-wrap gap-2">
                  <span class="font-bold text-slate-800 dark:text-slate-100">No. ${idx + 1} (${q.subtestName})</span>
                  <span class="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5 shadow-sm">
                    <span>📍 Sumber:</span>
                    <strong class="text-blue-600 dark:text-blue-400 font-bold">${q.source || 'SNBT Resmi'}</strong>
                  </span>
                  <span class="px-2 py-0.5 rounded text-xs font-bold ${isCorrect ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300' : 'bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300'}">
                    ${isCorrect ? 'BENAR ✅' : (userSelected ? 'SALAH ❌' : 'KOSONG ⚪')}
                  </span>
                </div>
                <div class="text-slate-500 dark:text-slate-400 text-xs">Jawabanmu: <strong>${userSelected || '-'}</strong> | Kunci: <strong class="text-emerald-600 dark:text-emerald-400">${q.correctAnswer}</strong></div>
              </div>
              <div class="text-slate-700 dark:text-slate-200 font-medium">${q.question}</div>
              <div class="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-lg text-xs leading-relaxed text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700/50">
                <strong class="text-slate-800 dark:text-slate-100">Pembahasan:</strong> ${q.explanation}
              </div>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;

  setTimeout(() => {
    renderSubtestRadar("subtestRadarChart", latestResult.subtestScores);
    renderLatex();
  }, 60);

  if (window.lucide) lucide.createIcons();
}

// ============================================================
// 5. BANK SOAL LENGKAP (Filterable Repository)
// ============================================================
let bankSoalDisplayLimit = 30;

window.loadMoreBankSoal = function() {
  bankSoalDisplayLimit += 30;
  renderBankSoal(false);
};

function renderBankSoal(resetLimit = true) {
  const container = document.getElementById("bank-soal-list");
  if (!container) return;

  if (resetLimit) {
    bankSoalDisplayLimit = 30;
  }

  const subtestSelect = document.getElementById("bank-filter-subtest");
  const sourceSelect = document.getElementById("bank-filter-source");
  const yearSelect = document.getElementById("bank-filter-year");
  const diffSelect = document.getElementById("bank-filter-diff");
  const searchInput = document.getElementById("bank-filter-search");

  const subVal = (subtestSelect && subtestSelect.value) ? subtestSelect.value : "all";
  const sourceVal = (sourceSelect && sourceSelect.value) ? sourceSelect.value : "all";
  const yearVal = (yearSelect && yearSelect.value) ? yearSelect.value : "all";
  const diffVal = (diffSelect && diffSelect.value) ? diffSelect.value : "all";
  const searchVal = (searchInput && searchInput.value) ? searchInput.value.toLowerCase().trim() : "";

  const filtered = QUESTIONS_DATA.filter(q => {
    const matchSub = subVal === "all" || q.subtest === subVal;
    const matchYear = yearVal === "all" || String(q.year) === yearVal;
    const matchDiff = diffVal === "all" || q.difficulty === diffVal;

    // Filter Asal Sumber / Bimbel
    let matchSource = true;
    const sLower = (q.source || "").toLowerCase();
    const isBimbelId = q.id && q.id.startsWith("bimbel_");
    if (sourceVal === "bimbel_all") {
      matchSource = isBimbelId || sLower.includes("inten") || sLower.includes("ganesha") || sLower.includes("neutron") || sLower.includes("ruangguru") || sLower.includes("nurul fikri") || sLower.includes("zenius");
    } else if (sourceVal === "inten") {
      matchSource = sLower.includes("inten");
    } else if (sourceVal === "go") {
      matchSource = sLower.includes("ganesha") || sLower.includes("the king");
    } else if (sourceVal === "neutron") {
      matchSource = sLower.includes("neutron");
    } else if (sourceVal === "ruangguru") {
      matchSource = sLower.includes("ruangguru") || sLower.includes("brain academy");
    } else if (sourceVal === "nf") {
      matchSource = sLower.includes("nurul fikri") || sLower.includes("(nf)");
    } else if (sourceVal === "zenius") {
      matchSource = sLower.includes("zenius");
    } else if (sourceVal === "resmi") {
      matchSource = !isBimbelId && (sLower.includes("snbt") || sLower.includes("bppp") || sLower.includes("sbmptn") || !q.source);
    }

    const matchSearch = !searchVal || 
      (q.question && q.question.toLowerCase().includes(searchVal)) || 
      (q.category && q.category.toLowerCase().includes(searchVal)) ||
      (q.stimulus && q.stimulus.toLowerCase().includes(searchVal)) ||
      (q.source && q.source.toLowerCase().includes(searchVal)) ||
      (q.explanation && q.explanation.toLowerCase().includes(searchVal));

    return matchSub && matchSource && matchYear && matchDiff && matchSearch;
  });

  const countBadge = document.getElementById("bank-soal-count");
  if (countBadge) {
    countBadge.innerText = `${filtered.length.toLocaleString('id-ID')} Soal Ditemukan`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `<div class="p-8 text-center text-slate-400 dark:text-slate-500 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">Tidak ada soal yang cocok dengan filter pencarian. Cobalah ubah subtes, sumber bimbel, atau kata kunci.</div>`;
    return;
  }

  const displayed = filtered.slice(0, bankSoalDisplayLimit);

  // Helper badge warna bimbel
  const getSourceBadgeClass = (sourceStr) => {
    const s = (sourceStr || "").toLowerCase();
    if (s.includes("inten")) return "bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800";
    if (s.includes("ganesha")) return "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800";
    if (s.includes("neutron")) return "bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800";
    if (s.includes("ruangguru") || s.includes("brain academy")) return "bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800";
    if (s.includes("nurul fikri")) return "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800";
    if (s.includes("zenius")) return "bg-orange-50 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800";
    return "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700";
  };

  const cardsHtml = displayed.map((q, idx) => `
    <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 shadow-sm space-y-3">
      <div class="flex items-center justify-between flex-wrap gap-2">
        <div class="flex items-center flex-wrap gap-2">
          <span class="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">${q.subtestName}</span>
          <span class="px-2.5 py-1 rounded-md text-xs font-semibold ${getSourceBadgeClass(q.source)} border flex items-center gap-1.5 shadow-sm">
            <span>📍 Sumber:</span>
            <strong class="font-bold">${q.source || 'SNBT Resmi'}</strong>
          </span>
          <span class="px-2 py-0.5 rounded text-xs font-semibold bg-purple-100 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
            📅 ${q.year || '2024'}
          </span>
          <span class="px-2 py-0.5 rounded text-xs font-semibold ${q.difficulty === 'HOTS' ? 'bg-rose-100 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800' : 'bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800'}">${q.difficulty}</span>
          <span class="text-xs text-slate-400 dark:text-slate-400 font-medium">${q.category}</span>
        </div>
        <span class="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">#${q.id}</span>
      </div>

      ${q.stimulus ? `
        <div class="p-3.5 bg-slate-50 dark:bg-slate-900/60 border-l-4 border-indigo-400 rounded-r-lg text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          ${q.stimulus}
        </div>
      ` : ""}

      <div class="font-semibold text-slate-900 dark:text-white text-sm sm:text-base leading-snug">${q.question}</div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
        ${q.options.map(opt => `
          <div class="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/40 flex items-start gap-2">
            <span class="font-bold text-slate-700 dark:text-slate-300">${opt.key}.</span>
            <span class="text-slate-800 dark:text-slate-200">${opt.text}</span>
          </div>
        `).join("")}
      </div>

      <!-- Detail Pembahasan Toggle -->
      <details class="pt-2 group">
        <summary class="cursor-pointer text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 flex items-center gap-1 select-none">
          <span>Kunci Jawaban & Trik Pembahasan</span>
        </summary>
        <div class="mt-3 p-4 bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 rounded-xl text-xs space-y-2 text-slate-800 dark:text-slate-200">
          <div>Kunci Jawaban: <strong class="text-emerald-700 dark:text-emerald-400 text-sm font-black">${q.correctAnswer}</strong></div>
          <div class="leading-relaxed whitespace-pre-line">${q.explanation}</div>
          ${q.quickTrick ? `
            <div class="pt-2 border-t border-indigo-200/60 dark:border-indigo-800 font-medium text-indigo-950 dark:text-indigo-200">
              <strong class="text-indigo-700 dark:text-indigo-400">⚡ Trik Bimbel:</strong> ${q.quickTrick}
            </div>
          ` : ""}
        </div>
      </details>
    </div>
  `).join("");

  const paginationHtml = filtered.length > bankSoalDisplayLimit ? `
    <div class="pt-4 pb-2 flex flex-col items-center gap-2">
      <button onclick="loadMoreBankSoal()" class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center gap-2">
        <span>📖 Tampilkan 30 Soal Berikutnya</span>
        <span class="px-2 py-0.5 rounded-full bg-indigo-500/50 text-[11px] font-semibold">(${Math.min(bankSoalDisplayLimit, filtered.length)} dari ${filtered.length.toLocaleString('id-ID')} Soal)</span>
      </button>
      <span class="text-xs text-slate-400">Pemuatan bertahap menjaga performa browser tetap responsif & super cepat.</span>
    </div>
  ` : "";

  container.innerHTML = cardsHtml + paginationHtml;

  setTimeout(renderLatex, 30);
  if (window.lucide) lucide.createIcons();
}

// ============================================================
// ============================================================
// 6. FLASHCARDS PINTAR (Pahamify Style - 67+ Rumus & Anti-Spam)
// ============================================================
let currentFcCategory = "all";
let fcSearchQuery = "";
let fcFilteredCards = Array.isArray(FLASHCARDS_DATA) ? [...FLASHCARDS_DATA] : [];

function getFilteredFlashcards() {
  let list = Array.isArray(FLASHCARDS_DATA) ? FLASHCARDS_DATA : [];

  // Filter Kategori
  if (currentFcCategory !== "all") {
    if (currentFcCategory === "TPS") {
      list = list.filter(c => 
        c.category.includes("Penalaran Umum") || 
        c.category.includes("Pemahaman Bacaan") || 
        c.category.includes("Literasi")
      );
    } else {
      list = list.filter(c => c.category === currentFcCategory);
    }
  }

  // Filter Pencarian
  if (fcSearchQuery.trim()) {
    const q = fcSearchQuery.toLowerCase().trim();
    list = list.filter(c => 
      (c.title && c.title.toLowerCase().includes(q)) ||
      (c.front && c.front.toLowerCase().includes(q)) ||
      (c.back && c.back.toLowerCase().includes(q)) ||
      (c.tag && c.tag.toLowerCase().includes(q))
    );
  }

  return list;
}

function updateFlashcardCategoryUI() {
  const categories = [
    { id: "fc-cat-all", cat: "all" },
    { id: "fc-cat-math", cat: "Penalaran Matematika & PK" },
    { id: "fc-cat-fisika", cat: "Fisika" },
    { id: "fc-cat-kimia", cat: "Kimia" },
    { id: "fc-cat-soshum", cat: "Ekonomi & Sosiologi" },
    { id: "fc-cat-tps", cat: "TPS" }
  ];

  categories.forEach(item => {
    const btn = document.getElementById(item.id);
    if (btn) {
      if (currentFcCategory === item.cat) {
        btn.className = "px-3 py-1.5 rounded-xl font-bold transition whitespace-nowrap bg-indigo-600 text-white shadow-sm";
      } else {
        btn.className = "px-3 py-1.5 rounded-xl font-bold transition whitespace-nowrap bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600";
      }
    }
  });

  // Update total badge
  const countBadge = document.getElementById("fc-count-badge");
  if (countBadge && Array.isArray(FLASHCARDS_DATA)) {
    countBadge.textContent = `${FLASHCARDS_DATA.length} Rumus UTBK`;
  }
  const countAll = document.getElementById("count-cat-all");
  if (countAll && Array.isArray(FLASHCARDS_DATA)) {
    countAll.textContent = FLASHCARDS_DATA.length;
  }
}

function updateFlashcardMasteryUI() {
  const profile = getUserProfile();
  const masteredList = Array.isArray(profile.masteredFlashcards) ? profile.masteredFlashcards : [];
  const total = Array.isArray(FLASHCARDS_DATA) ? FLASHCARDS_DATA.length : 0;
  const masteredCount = masteredList.length;
  const percent = total > 0 ? Math.min(100, Math.round((masteredCount / total) * 100)) : 0;

  const textEl = document.getElementById("fc-mastery-text");
  const barEl = document.getElementById("fc-mastery-bar");
  if (textEl) textEl.textContent = `${masteredCount} / ${total} Dikuasai (${percent}%)`;
  if (barEl) barEl.style.width = `${percent}%`;
}

function setFlashcardCategory(category) {
  currentFcCategory = category;
  fcFilteredCards = getFilteredFlashcards();
  flashcardIndex = 0;
  updateFlashcardCategoryUI();
  renderFlashcards();
}

function onFlashcardSearch(val) {
  fcSearchQuery = val || "";
  fcFilteredCards = getFilteredFlashcards();
  flashcardIndex = 0;
  renderFlashcards();
}

function shuffleFlashcards() {
  fcFilteredCards = getFilteredFlashcards();
  for (let i = fcFilteredCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [fcFilteredCards[i], fcFilteredCards[j]] = [fcFilteredCards[j], fcFilteredCards[i]];
  }
  flashcardIndex = 0;
  renderFlashcards();
  showXpNotification(0, "Urutan flashcard diacak! 🔀");
}

function resetFlashcardProgress() {
  const profile = getUserProfile();
  profile.masteredFlashcards = [];
  saveUserProfile(profile);
  updateFlashcardMasteryUI();
  renderFlashcards();
  showXpNotification(0, "Penguasaan kartu direset! 🔄");
}

function restartFlashcards() {
  flashcardIndex = 0;
  renderFlashcards();
}

function renderFlashcards() {
  const container = document.getElementById("flashcard-viewer");
  if (!container) return;

  updateFlashcardCategoryUI();
  updateFlashcardMasteryUI();

  fcFilteredCards = getFilteredFlashcards();
  const total = fcFilteredCards.length;

  // Kasus 1: Tidak ada kartu yang cocok dengan pencarian / filter
  if (total === 0) {
    container.innerHTML = `
      <div class="max-w-md mx-auto text-center py-12 px-6 bg-white dark:bg-slate-800 rounded-3xl border border-dashed border-slate-200 dark:border-slate-700 space-y-3">
        <div class="text-4xl">🔍</div>
        <h3 class="text-sm font-bold text-slate-800 dark:text-slate-200">Tidak ada rumus yang cocok</h3>
        <p class="text-xs text-slate-500 dark:text-slate-400">Coba kata kunci lain atau pilih kategori Semua Rumpun.</p>
        <button onclick="setFlashcardCategory('all'); document.getElementById('fc-search-input').value='';" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl transition">
          Reset Filter 🌟
        </button>
      </div>
    `;
    return;
  }

  // Kasus 2: Selesai seluruh kartu dalam deck (Deck Completed Summary) -> Anti-Spam Guard
  if (flashcardIndex >= total) {
    const profile = getUserProfile();
    const masteredList = Array.isArray(profile.masteredFlashcards) ? profile.masteredFlashcards : [];
    const deckIds = new Set(fcFilteredCards.map(c => c.id));
    const masteredInDeck = masteredList.filter(id => deckIds.has(id)).length;
    const masteryPct = Math.round((masteredInDeck / total) * 100);

    container.innerHTML = `
      <div class="max-w-md mx-auto bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-indigo-500/30 text-center space-y-5 animate-fade-in">
        <div class="w-16 h-16 mx-auto rounded-2xl bg-indigo-500/20 flex items-center justify-center text-3xl border border-indigo-400/30 shadow-inner">
          🎉
        </div>
        <div class="space-y-1.5">
          <span class="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            Deck Selesai Ditinjau
          </span>
          <h3 class="text-xl font-black font-heading text-white">Luar Biasa, Pejuang PTN!</h3>
          <p class="text-xs text-indigo-200 leading-relaxed">
            Kamu telah meninjau seluruh <strong>${total} kartu</strong> pada kategori ini.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-3 p-3.5 bg-white/5 rounded-2xl border border-white/10 text-left">
          <div>
            <div class="text-[10px] text-indigo-300 font-semibold uppercase">Total Kartu</div>
            <div class="text-xl font-black text-white">${total} <span class="text-xs font-normal text-indigo-300">Rumus</span></div>
          </div>
          <div>
            <div class="text-[10px] text-emerald-300 font-semibold uppercase">Telah Dikuasai</div>
            <div class="text-xl font-black text-emerald-400">${masteredInDeck} <span class="text-xs font-normal text-emerald-300">(${masteryPct}%)</span></div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-2.5 pt-1">
          <button onclick="restartFlashcards()" class="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-1.5">
            <span>🔄</span> Ulangi dari Awal
          </button>
          <button onclick="setFlashcardCategory('all')" class="flex-1 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-1.5">
            <span>🌟</span> Semua Kategori
          </button>
        </div>
      </div>
    `;
    return;
  }

  const card = fcFilteredCards[flashcardIndex];
  if (!card) return;

  const profile = getUserProfile();
  const masteredList = Array.isArray(profile.masteredFlashcards) ? profile.masteredFlashcards : [];
  const isMastered = masteredList.includes(card.id);

  container.innerHTML = `
    <div class="max-w-md mx-auto space-y-4">
      <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span class="font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
          <span>🏷️</span> ${card.category}
        </span>
        <span class="font-semibold">Kartu ${flashcardIndex + 1} dari ${total}</span>
      </div>

      <!-- 3D Flip Card -->
      <div id="active-flashcard" onclick="flipFlashcard()" class="flashcard-container cursor-pointer select-none">
        <div class="flashcard-inner" id="card-inner-rotator">
          <!-- Sisi Depan -->
          <div class="flashcard-face flashcard-front bg-gradient-to-tr from-white to-indigo-50/50 dark:from-slate-800 dark:to-slate-800/80 border-2 border-indigo-200 dark:border-indigo-800/80 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-lg">
            <div class="flex items-center justify-between">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">${card.tag}</span>
              <span class="text-xs text-slate-400 dark:text-slate-400 flex items-center gap-1">
                <span>🔄</span> Ketuk untuk balik
              </span>
            </div>
            <div class="my-auto text-center space-y-3 py-4">
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-snug">${card.title}</h3>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">${card.front}</p>
            </div>
            <div class="flex items-center justify-between text-xs pt-2 border-t border-indigo-100/70 dark:border-slate-700/60">
              <span class="text-indigo-500 dark:text-indigo-400 font-semibold text-[11px]">
                💡 Tips: Pikirkan jawaban sebelum membalik!
              </span>
              ${isMastered ? '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">Dikuasai ✅</span>' : ''}
            </div>
          </div>

          <!-- Sisi Belakang -->
          <div class="flashcard-face flashcard-back bg-slate-900 text-white border-2 border-indigo-600 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl">
            <div class="flex items-center justify-between text-xs text-indigo-200">
              <span class="font-bold flex items-center gap-1.5 text-amber-300">
                <span>⚡</span> Formula & Kaidah Kilat
              </span>
              <span class="flex items-center gap-1 text-slate-400 hover:text-white">
                <span>🔄</span> Balik
              </span>
            </div>
            <div class="my-auto text-xs sm:text-sm leading-relaxed text-indigo-50 overflow-y-auto max-h-56 py-3 scrollbar-thin">
              ${card.back}
            </div>
            <div class="text-center text-[11px] text-indigo-300 pt-2 border-t border-slate-800">
              Kuasai konsep ini untuk menghemat waktu saat ujian sesungguhnya!
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation & Action Buttons -->
      <div class="flex items-center justify-between gap-2 pt-1">
        <button onclick="prevFlashcard()" ${flashcardIndex === 0 ? "disabled" : ""} class="px-3 sm:px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-30 transition">
          ← Mundur
        </button>

        ${isMastered ? `
          <button onclick="markFlashcardLearned()" class="flex-1 py-2 px-3 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-600 transition flex items-center justify-center gap-1">
            <span>Sudah Dikuasai ✅</span>
          </button>
        ` : `
          <button onclick="markFlashcardLearned()" class="flex-1 py-2 px-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl text-xs font-bold shadow-sm transition flex items-center justify-center gap-1">
            <span>Paham Rumus ✅</span>
          </button>
        `}

        <button onclick="nextFlashcard()" class="px-3 sm:px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-sm transition">
          Lanjut →
        </button>
      </div>
    </div>
  `;

  setTimeout(renderLatex, 30);
}

function flipFlashcard() {
  const rotator = document.getElementById("card-inner-rotator");
  if (rotator) {
    rotator.classList.toggle("flipped");
  }
}

function nextFlashcard() {
  if (flashcardIndex < fcFilteredCards.length) {
    flashcardIndex++;
    renderFlashcards();
  }
}

function prevFlashcard() {
  if (flashcardIndex > 0) {
    flashcardIndex--;
    renderFlashcards();
  }
}

// Penguasaan per Flashcard (Tanpa Tambahan XP)
function markFlashcardLearned() {
  const card = fcFilteredCards[flashcardIndex];
  if (!card) return;

  const profile = getUserProfile();
  profile.masteredFlashcards = Array.isArray(profile.masteredFlashcards) ? profile.masteredFlashcards : [];

  if (profile.masteredFlashcards.includes(card.id)) {
    showXpNotification(0, "Rumus ini sudah kamu tandai dikuasai sebelumnya! ✅");
  } else {
    profile.masteredFlashcards.push(card.id);
    saveUserProfile(profile);
    showXpNotification(0, "Rumus berhasil ditandai telah dikuasai! ✅");
    updateDailyQuestProgress("quest_flash", 1);
  }

  // Pindah ke kartu berikutnya (atau layar selesai jika di akhir)
  nextFlashcard();
}

// ============================================================
// 7. LEADERBOARD NASIONAL (Murni Akun Terdaftar & Real-Time)
// ============================================================
let currentLeaderboardPeriod = "hari";

function setLeaderboardPeriod(period) {
  currentLeaderboardPeriod = period || "hari";
  renderLeaderboard(true);
}

async function renderLeaderboard(forceRefresh = false) {
  const container = document.getElementById("leaderboard-list");
  if (!container) return;

  // Update styling tabs periode
  const periods = ["hari", "minggu", "bulan"];
  periods.forEach(p => {
    const btn = document.getElementById(`lb-tab-${p}`);
    if (btn) {
      if (p === currentLeaderboardPeriod) {
        btn.className = "flex-1 py-2 px-3 rounded-xl text-xs font-bold transition text-center bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm";
      } else {
        btn.className = "flex-1 py-2 px-3 rounded-xl text-xs font-bold transition text-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white";
      }
    }
  });

  const periodLabelMap = {
    hari: "Hari Ini (24 Jam)",
    minggu: "Minggu Ini (7 Hari)",
    bulan: "Bulan Ini (30 Hari)"
  };
  const periodLabel = periodLabelMap[currentLeaderboardPeriod] || "Periode Ini";

  // Tampilkan skeleton ringan jika pertama kali render atau refresh paksa
  if (forceRefresh && (!container.children.length || container.innerHTML.includes("Belum Ada"))) {
    container.innerHTML = `
      <div class="space-y-3 animate-pulse py-2">
        <div class="h-28 bg-slate-100 dark:bg-slate-800 rounded-3xl"></div>
        <div class="h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl"></div>
        <div class="h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl"></div>
      </div>
    `;
  }

  // Ambil data dari CloudLeaderboard
  let cloudResult = null;
  if (typeof window.CloudLeaderboard !== "undefined" && typeof window.CloudLeaderboard.fetchGlobalLeaderboard === "function") {
    cloudResult = await window.CloudLeaderboard.fetchGlobalLeaderboard(currentLeaderboardPeriod, forceRefresh);
  }

  const data = (cloudResult && Array.isArray(cloudResult.data) && cloudResult.data.length > 0)
    ? cloudResult.data
    : (typeof getLeaderboardData === "function" ? getLeaderboardData(currentLeaderboardPeriod) : []);

  // Perbarui status badge cloud
  const statusBadge = document.getElementById("lb-status-badge");
  if (statusBadge) {
    const isOnline = cloudResult && cloudResult.status === "online";
    const total = (cloudResult && cloudResult.totalUsers) ? cloudResult.totalUsers : data.length;
    if (isOnline) {
      statusBadge.innerHTML = `
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>Cloud Real-Time Live (${total} Pejuang)</span>
      `;
      statusBadge.className = "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold shadow-sm";
    } else {
      statusBadge.innerHTML = `
        <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
        <span>Peringkat Terhubung (${total} Pejuang)</span>
      `;
      statusBadge.className = "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold shadow-sm";
    }
  }

  // Jika belum ada pejuang terdaftar atau belum ada yang mendapat XP
  if (!data || data.length === 0) {
    const isLoggedIn = typeof isUserLoggedIn === "function" && isUserLoggedIn();
    container.innerHTML = `
      <div class="text-center py-12 px-6 bg-white dark:bg-slate-800 rounded-3xl border border-dashed border-slate-200 dark:border-slate-700 space-y-4 shadow-sm">
        <div class="w-16 h-16 mx-auto rounded-2xl bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-3xl border border-amber-200 dark:border-amber-800">
          🏆
        </div>
        <div class="space-y-1">
          <h3 class="text-base font-bold text-slate-800 dark:text-slate-100">Belum Ada Pejuang di Leaderboard ${periodLabel}</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
            Leaderboard ini terhubung langsung antar seluruh siswa se-Indonesia. Kumpulkan XP dari Drill Kilat & Try Out untuk merebut tahta peringkat #1!
          </p>
        </div>
        <div class="flex items-center justify-center gap-3 pt-1">
          ${!isLoggedIn ? `
            <button onclick="openAuthModal('register')" class="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold text-xs rounded-xl shadow-md transition">
              Daftar Akun Baru 🚀
            </button>
          ` : `
            <button onclick="switchTab('drill')" class="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold text-xs rounded-xl shadow-md transition">
              Mulai Latihan Drill (+XP) ⚡
            </button>
          `}
        </div>
      </div>
    `;
    return;
  }

  // Jika ada 3 atau lebih peserta: Render Podium Top 3 (🥇 Juara 1 di tengah, 🥈 Juara 2 di kiri, 🥉 Juara 3 di kanan)
  let podiumHtml = "";
  let listData = data;

  if (data.length >= 3) {
    const first = data[0];
    const second = data[1];
    const third = data[2];
    listData = data.slice(3);

    podiumHtml = `
      <div class="grid grid-cols-3 gap-2.5 sm:gap-4 items-end pt-4 pb-2 max-w-lg mx-auto">
        <!-- Juara 2 (Perak) -->
        <div class="flex flex-col items-center text-center">
          <div class="text-xl mb-1">🥈</div>
          <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-slate-100 dark:bg-slate-700 border-2 border-slate-300 dark:border-slate-500 flex items-center justify-center text-2xl shadow-md relative">
            ${second.avatar}
          </div>
          <div class="mt-2 text-xs font-bold text-slate-800 dark:text-slate-100 truncate max-w-[90px] sm:max-w-[110px]">
            ${second.rawName || second.name}
          </div>
          <div class="text-[10px] text-slate-500 dark:text-slate-400 truncate max-w-[90px] sm:max-w-[110px]">${second.ptn}</div>
          <div class="mt-1 px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-[11px] font-black text-slate-700 dark:text-slate-300">
            ⚡ ${second.xp}
          </div>
          <div class="w-full bg-slate-200 dark:bg-slate-700/80 rounded-t-2xl h-16 mt-2.5 flex items-center justify-center font-black text-slate-500 dark:text-slate-400 text-sm">
            #2
          </div>
        </div>

        <!-- Juara 1 (Emas - Tertinggi di Tengah) -->
        <div class="flex flex-col items-center text-center">
          <div class="text-2xl mb-1 animate-bounce">👑</div>
          <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-300 border-2 border-amber-300 flex items-center justify-center text-3xl shadow-xl ring-4 ring-amber-400/30 relative">
            ${first.avatar}
          </div>
          <div class="mt-2 text-xs font-black text-slate-900 dark:text-white truncate max-w-[100px] sm:max-w-[130px]">
            ${first.rawName || first.name}
          </div>
          <div class="text-[10px] text-amber-600 dark:text-amber-400 font-semibold truncate max-w-[100px] sm:max-w-[130px]">${first.ptn}</div>
          <div class="mt-1 px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/70 text-[11px] font-black text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
            ⚡ ${first.xp} XP
          </div>
          <div class="w-full bg-gradient-to-t from-amber-500 to-amber-400 text-white rounded-t-2xl h-24 mt-2.5 flex items-center justify-center font-black text-lg shadow-lg">
            🥇 #1
          </div>
        </div>

        <!-- Juara 3 (Perunggu) -->
        <div class="flex flex-col items-center text-center">
          <div class="text-xl mb-1">🥉</div>
          <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-900/10 dark:bg-amber-950/40 border-2 border-amber-700/50 flex items-center justify-center text-2xl shadow-md relative">
            ${third.avatar}
          </div>
          <div class="mt-2 text-xs font-bold text-slate-800 dark:text-slate-100 truncate max-w-[90px] sm:max-w-[110px]">
            ${third.rawName || third.name}
          </div>
          <div class="text-[10px] text-slate-500 dark:text-slate-400 truncate max-w-[90px] sm:max-w-[110px]">${third.ptn}</div>
          <div class="mt-1 px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/50 text-[11px] font-black text-amber-800 dark:text-amber-300">
            ⚡ ${third.xp}
          </div>
          <div class="w-full bg-amber-700/20 dark:bg-amber-900/40 rounded-t-2xl h-12 mt-2.5 flex items-center justify-center font-black text-amber-800 dark:text-amber-300 text-sm">
            #3
          </div>
        </div>
      </div>
    `;
  }

  // Render list peserta
  const listItemsHtml = listData.map(item => `
    <div class="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border transition ${item.isUser ? 'bg-indigo-50/90 dark:bg-indigo-950/50 border-indigo-400 dark:border-indigo-600 ring-2 ring-indigo-200 dark:ring-indigo-800 shadow-md' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'}">
      <div class="flex items-center gap-3.5 min-w-0">
        <div class="w-8 text-center font-black text-sm ${item.rank === 1 ? 'text-amber-500 text-lg' : item.rank === 2 ? 'text-slate-400 text-base' : item.rank === 3 ? 'text-amber-700 text-base' : 'text-slate-400 dark:text-slate-500'}">
          ${item.rank === 1 ? '🥇' : item.rank === 2 ? '🥈' : item.rank === 3 ? '🥉' : '#' + item.rank}
        </div>
        <div class="text-2xl shrink-0">${item.avatar}</div>
        <div class="min-w-0">
          <div class="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-100 truncate flex items-center gap-1.5">
            <span>${item.name}</span>
            ${item.isUser ? '<span class="px-2 py-0.5 rounded-md bg-indigo-600 text-white text-[10px] font-bold">Kamu</span>' : ''}
          </div>
          <div class="text-[11px] text-slate-500 dark:text-slate-400 truncate">${item.ptn}</div>
        </div>
      </div>

      <div class="text-right shrink-0">
        <div class="font-black text-xs sm:text-sm text-slate-800 dark:text-slate-100">
          ⚡ ${item.xp} <span class="text-[10px] font-normal text-slate-400">XP</span>
        </div>
        <div class="text-[11px] text-orange-500 font-semibold flex items-center justify-end gap-1">
          <span>🔥</span> ${item.streak} Hari
        </div>
      </div>
    </div>
  `).join("");

  container.innerHTML = `
    ${podiumHtml}
    <div class="space-y-2.5">
      ${listItemsHtml}
    </div>
  `;
}

// ============================================================
// 7B. TAB PROFIL DIRI PEJUANG PTN & STATISTIK LENGKAP
// ============================================================
let selectedProfileAvatar = null;

function renderProfileView() {
  const container = document.getElementById("profile-container");
  if (!container) return;

  const profile = getUserProfile();
  const user = typeof getCurrentUser === "function" ? getCurrentUser() : null;
  const { tier, level, levelProgress, nextLevelXp } = getTierAndLevel(profile.xp || 0);

  selectedProfileAvatar = profile.avatar || "👨‍🎓";

  // Data Target PTN
  const m1 = typeof findMajorById === "function" ? findMajorById(profile.targetMajorId) : null;
  const m2 = typeof findMajorById === "function" ? findMajorById(profile.targetMajorId2) : null;

  // Statistik Belajar
  const totalQ = profile.totalQuestions || 0;
  const correctQ = profile.correctQuestions || 0;
  const accuracy = totalQ > 0 ? Math.round((correctQ / totalQ) * 100) : 0;
  const masteredCards = Array.isArray(profile.masteredFlashcards) ? profile.masteredFlashcards : [];
  const highestScore = profile.highestScore || 0;
  const tryoutsDone = profile.tryoutsCompleted || 0;

  // Evaluasi Status Skor vs Passing Grade
  const targetScore1 = m1 ? m1.targetScore : (profile.targetScore || 718);

  // Lencana (Badges)
  const unlockedBadges = Array.isArray(profile.unlockedBadges) ? profile.unlockedBadges : [];
  const badgesHtml = BADGES_LIST.map(b => {
    const isUnlocked = unlockedBadges.includes(b.id);
    return `
      <div class="p-3.5 rounded-2xl border transition-all ${isUnlocked 
        ? 'bg-gradient-to-br from-indigo-50/70 to-purple-50/70 dark:from-indigo-950/40 dark:to-purple-950/40 border-indigo-200 dark:border-indigo-800 shadow-sm' 
        : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 opacity-60 grayscale hover:grayscale-0'}">
        <div class="flex items-center gap-3">
          <div class="text-3xl shrink-0 ${isUnlocked ? 'animate-bounce-subtle' : ''}">
            ${isUnlocked ? b.icon : '🔒'}
          </div>
          <div class="min-w-0 flex-1">
            <div class="flex items-center justify-between gap-1">
              <span class="font-bold text-xs text-slate-900 dark:text-white truncate">${b.title}</span>
              ${isUnlocked ? '<span class="text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded-full shrink-0">Buka ✅</span>' : '<span class="text-[10px] text-slate-400 font-semibold shrink-0">Terkunci</span>'}
            </div>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">${b.desc}</p>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Riwayat XP
  const historyList = (profile.xpHistory && profile.xpHistory.length) ? [...profile.xpHistory].reverse().slice(0, 8) : [];
  const historyHtml = historyList.length ? historyList.map(h => `
    <div class="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-xs">
      <div class="flex items-center gap-2.5 min-w-0">
        <span class="text-base shrink-0">⚡</span>
        <div class="min-w-0">
          <div class="font-semibold text-slate-800 dark:text-slate-200 truncate">${h.reason || 'Aktivitas Belajar'}</div>
          <div class="text-[10px] text-slate-400">${h.date || 'Hari ini'} • ${h.timestamp ? new Date(h.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}</div>
        </div>
      </div>
      <span class="font-black text-xs text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/80 px-2 py-0.5 rounded-lg shrink-0">
        +${h.amount} XP
      </span>
    </div>
  `).join("") : `
    <div class="p-6 text-center text-xs text-slate-400 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
      Belum ada riwayat XP. Selesaikan latihan kilat, flashcard, atau Try Out CBT untuk mendapatkan XP pertama!
    </div>
  `;

  // Avatar selector options
  const avatarOptions = ["👨‍🎓", "👩‍🎓", "🚀", "💡", "🦁", "🎯", "🧠", "⚡", "🦉", "🎓"];
  const avatarSelectorHtml = avatarOptions.map(av => `
    <button type="button" onclick="handleSelectProfileAvatar('${av}')" 
      class="profile-av-btn w-11 h-11 rounded-2xl border-2 text-xl flex items-center justify-center transition-all ${av === selectedProfileAvatar ? 'border-orange-500 bg-orange-500/10 scale-110 shadow-md ring-2 ring-orange-400' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-400'}">
      ${av}
    </button>
  `).join("");

  container.innerHTML = `
    <!-- Top: Digital Student ID / Kartu Tanda Pejuang PTN -->
    <div class="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-800 relative overflow-hidden">
      <!-- Background Ambient Glow & Watermark -->
      <div class="absolute -right-12 -top-12 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute right-6 bottom-4 opacity-5 pointer-events-none">
        <img src="assets/logo.png" alt="Emblem" class="w-48 h-48 object-contain" />
      </div>

      <div class="relative z-10 space-y-6">
        <!-- Card Header Badge & Member ID -->
        <div class="flex items-center justify-between border-b border-slate-800 pb-3 flex-wrap gap-2">
          <div class="flex items-center gap-2">
            <div class="w-6 h-6 rounded-lg overflow-hidden border border-slate-700 bg-slate-900">
              <img src="assets/logo.png" alt="Logo" class="w-full h-full object-cover" />
            </div>
            <span class="font-mono text-[11px] font-bold tracking-widest text-amber-400 uppercase">KARTU RESMI PEJUANG TEMBUSPTN</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              STATUS: AKTIF 🟢
            </span>
            <span class="font-mono text-xs text-slate-400">ID: ${user ? user.id.toUpperCase() : 'GUEST-USER'}</span>
          </div>
        </div>

        <!-- Identity Block -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div class="md:col-span-2 flex items-center gap-4 sm:gap-5">
            <div class="relative shrink-0">
              <div id="profile-avatar-display" class="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-amber-500 via-orange-500 to-indigo-600 p-1 shadow-lg flex items-center justify-center">
                <div class="w-full h-full bg-slate-900 rounded-[22px] flex items-center justify-center text-4xl sm:text-5xl">
                  ${selectedProfileAvatar}
                </div>
              </div>
              <span class="absolute -bottom-2 -right-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase shadow-md ${tier.bg} ${tier.color} border ${tier.border}">
                Lvl ${level}
              </span>
            </div>

            <div class="min-w-0 space-y-1">
              <div class="flex items-center gap-2 flex-wrap">
                <h1 class="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">${profile.name || "Pejuang PTN"}</h1>
                <span class="text-blue-400 text-sm" title="Terverifikasi">✓</span>
                ${user ? '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">Terdaftar</span>' : '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">Guest</span>'}
              </div>
              <div class="text-xs text-slate-400 flex items-center gap-2 flex-wrap font-medium">
                <span>@${user && user.username ? user.username : 'pejuangptn'}</span>
                <span>•</span>
                <span>${user && user.email ? user.email : 'Tersimpan di Browser'}</span>
              </div>
              <div class="text-xs text-slate-300 flex items-center gap-2 flex-wrap pt-0.5">
                <span>🏫 ${profile.school || 'Belum Mengisi Asal Sekolah'}</span>
                <span>•</span>
                <span>🎯 Target UTBK ${profile.targetYear || '2027'}</span>
              </div>
              <p class="text-xs text-slate-300 italic pt-1 line-clamp-2">
                "${profile.bio || 'Fokus belajar, konsisten latihan, bismillah tembus PTN impian!'}"
              </p>
            </div>
          </div>

          <!-- Level Progress & Streak Badges on Card -->
          <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-3">
            <div class="flex items-center justify-between text-xs">
              <span class="font-bold text-slate-300">Tier Peringkat</span>
              <span class="font-black ${tier.color}">${tier.name}</span>
            </div>
            <div>
              <div class="flex justify-between text-[11px] mb-1">
                <span class="text-slate-400">XP Menuju Lvl ${level + 1}</span>
                <span class="font-bold text-amber-400">${profile.xp || 0} / ${nextLevelXp} XP</span>
              </div>
              <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div class="bg-gradient-to-r from-amber-400 to-orange-500 h-full rounded-full transition-all duration-500" style="width: ${levelProgress}%"></div>
              </div>
            </div>
            <div class="flex items-center justify-between pt-1 border-t border-slate-800 text-xs">
              <div class="flex items-center gap-1.5 text-orange-400 font-bold">
                <span>🔥</span> <span>${profile.streak || 1} Hari Beruntun</span>
              </div>
              <div class="text-indigo-400 font-bold">
                <span>⚡</span> <span>${profile.xp || 0} Total XP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Stats Grid (4 Metric Cards) -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-1">
        <div class="text-[11px] font-bold text-slate-400 dark:text-slate-400 flex items-center gap-1.5">
          <span>🎯</span> <span>Target PTN Utama</span>
        </div>
        <div class="font-black text-sm text-slate-900 dark:text-white truncate">
          ${m1 ? m1.name : (profile.targetMajorName || 'Belum Diatur')}
        </div>
        <div class="text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold truncate">
          ${m1 ? m1.ptnName : 'Pilihan 1'} (Passing: ${targetScore1})
        </div>
      </div>

      <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-1">
        <div class="text-[11px] font-bold text-slate-400 dark:text-slate-400 flex items-center gap-1.5">
          <span>⚔️</span> <span>Skor CBT Tertinggi</span>
        </div>
        <div class="font-black text-lg text-slate-900 dark:text-white">
          ${highestScore > 0 ? highestScore : '<span class="text-xs text-slate-400 font-normal">Belum Ikut CBT</span>'}
        </div>
        <div class="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
          ${tryoutsDone} Try Out diselesaikan
        </div>
      </div>

      <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-1">
        <div class="text-[11px] font-bold text-slate-400 dark:text-slate-400 flex items-center gap-1.5">
          <span>⚡</span> <span>Latihan & Akurasi</span>
        </div>
        <div class="font-black text-lg text-slate-900 dark:text-white">
          ${totalQ} <span class="text-xs font-normal text-slate-400">Soal</span>
        </div>
        <div class="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
          Akurasi: ${accuracy}% (${correctQ} benar)
        </div>
      </div>

      <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-1">
        <div class="text-[11px] font-bold text-slate-400 dark:text-slate-400 flex items-center gap-1.5">
          <span>🃏</span> <span>Formula Dikuasai</span>
        </div>
        <div class="font-black text-lg text-slate-900 dark:text-white">
          ${masteredCards.length} <span class="text-xs font-normal text-slate-400">/ 67 Rumus</span>
        </div>
        <div class="text-[11px] text-purple-600 dark:text-purple-400 font-semibold">
          ${Math.round((masteredCards.length / 67) * 100)}% Pemahaman Cepat
        </div>
      </div>
    </div>

    <!-- Main Content 2-Column Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Left 2 Cols: Form Edit Profil & Target PTN Detail -->
      <div class="lg:col-span-2 space-y-6">
        <!-- Section: Edit Data Profil Diri -->
        <div class="bg-white dark:bg-slate-800 rounded-3xl p-5 sm:p-7 border border-slate-200 dark:border-slate-700 shadow-sm space-y-5">
          <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-3">
            <div>
              <h2 class="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <span>✏️</span> <span>Perbarui Profil & Data Diri</span>
              </h2>
              <p class="text-xs text-slate-400">Sesuaikan nama, avatar, asal sekolah, dan motto belajar untuk profilmu.</p>
            </div>
          </div>

          <form id="profile-edit-form" onsubmit="handleSaveProfileForm(event)" class="space-y-4">
            <!-- Avatar Picker -->
            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">Pilih Karakter Avatar</label>
              <div class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                ${avatarSelectorHtml}
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Nama Lengkap</label>
                <input type="text" id="prof-input-name" value="${profile.name || ''}" required placeholder="Nama lengkapmu"
                  class="w-full text-xs p-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white outline-none focus:border-indigo-500 font-medium transition" />
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Asal Sekolah / Madrasah</label>
                <input type="text" id="prof-input-school" value="${profile.school || ''}" placeholder="cth: SMAN 1 Jakarta / Gap Year"
                  class="w-full text-xs p-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white outline-none focus:border-indigo-500 font-medium transition" />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Rumpun Jurusan Minat</label>
                <select id="prof-input-stream" class="w-full text-xs p-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white outline-none focus:border-indigo-500 font-medium transition">
                  <option value="Saintek" ${(profile.stream || 'Saintek') === 'Saintek' ? 'selected' : ''}>Saintek (IPA & Teknik)</option>
                  <option value="Soshum" ${(profile.stream || '') === 'Soshum' ? 'selected' : ''}>Soshum (IPS, Hukum & Bisnis)</option>
                  <option value="Campuran" ${(profile.stream || '') === 'Campuran' ? 'selected' : ''}>Campuran (Saintek & Soshum)</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Tahun Target UTBK</label>
                <select id="prof-input-year" class="w-full text-xs p-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white outline-none focus:border-indigo-500 font-medium transition">
                  <option value="2025" ${(profile.targetYear || '') === '2025' ? 'selected' : ''}>2025</option>
                  <option value="2026" ${(profile.targetYear || '') === '2026' ? 'selected' : ''}>2026</option>
                  <option value="2027" ${(profile.targetYear || '2027') === '2027' ? 'selected' : ''}>2027</option>
                  <option value="2028" ${(profile.targetYear || '') === '2028' ? 'selected' : ''}>2028</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Motto / Pesan Motivasi Diri</label>
              <textarea id="prof-input-bio" rows="2" placeholder="Tuliskan kata-kata penyemangat belajarmu..."
                class="w-full text-xs p-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white outline-none focus:border-indigo-500 font-medium transition resize-none">${profile.bio || ''}</textarea>
            </div>

            <div class="flex items-center justify-end gap-2 pt-2">
              <button type="submit" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-indigo-600 hover:from-orange-600 hover:to-indigo-700 text-white font-bold text-xs shadow-md shadow-orange-500/20 transition flex items-center gap-1.5">
                <span>💾</span> <span>Simpan Perubahan</span>
              </button>
            </div>
          </form>
        </div>

        <!-- Section: Rencana Jurusan & Rasionalisasi PTN -->
        <div class="bg-white dark:bg-slate-800 rounded-3xl p-5 sm:p-7 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
          <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-3">
            <div>
              <h2 class="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <span>🏛️</span> <span>Strategi Pilihan 1 & 2 SNPMB</span>
              </h2>
              <p class="text-xs text-slate-400">Kombinasi prodi utama dan cadangan sesuai aturan resmi SNBT.</p>
            </div>
            <button onclick="openSettingsModal()" class="px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 transition">
              Ubah Target ⚙️
            </button>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- Card Pilihan 1 -->
            <div class="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/60 space-y-2">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded-full text-[10px] font-black bg-indigo-600 text-white">PILIHAN 1 (UTAMA)</span>
                <span class="text-xs font-bold text-slate-500 dark:text-slate-400">${m1?.degree || 'S1'}</span>
              </div>
              <div class="font-extrabold text-sm text-slate-900 dark:text-white">
                ${m1?.name || profile.targetMajorName || 'Ilmu Komputer'}
              </div>
              <div class="text-xs text-slate-600 dark:text-slate-300 font-medium">
                ${m1?.ptnName || 'Universitas Indonesia'} (${m1?.ptnShort || 'UI'})
              </div>
              <div class="pt-2 border-t border-indigo-100 dark:border-indigo-800/40 flex items-center justify-between text-xs">
                <span class="text-slate-500 dark:text-slate-400">Passing Grade:</span>
                <span class="font-black text-indigo-600 dark:text-indigo-400">${targetScore1}</span>
              </div>
              <div class="flex items-center justify-between text-xs">
                <span class="text-slate-500 dark:text-slate-400">Status Peluang:</span>
                <span class="font-bold ${highestScore >= targetScore1 ? 'text-emerald-600' : 'text-amber-500'}">
                  ${highestScore > 0 ? (highestScore >= targetScore1 ? 'Aman / Kompetitif 🎉' : `Kurang ${targetScore1 - highestScore} poin`) : 'Belum Ada Skor'}
                </span>
              </div>
            </div>

            <!-- Card Pilihan 2 -->
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded-full text-[10px] font-black bg-slate-700 text-white">PILIHAN 2 (CADANGAN)</span>
                <span class="text-xs font-bold text-slate-500 dark:text-slate-400">${m2?.degree || 'S1'}</span>
              </div>
              <div class="font-extrabold text-sm text-slate-900 dark:text-white">
                ${m2?.name || profile.targetMajorName2 || 'STEI - Komputasi'}
              </div>
              <div class="text-xs text-slate-600 dark:text-slate-300 font-medium">
                ${m2?.ptnName || 'Institut Teknologi Bandung'} (${m2?.ptnShort || 'ITB'})
              </div>
              <div class="pt-2 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs">
                <span class="text-slate-500 dark:text-slate-400">Passing Grade:</span>
                <span class="font-black text-slate-700 dark:text-slate-300">${m2?.targetScore || profile.targetScore2 || 728}</span>
              </div>
              <div class="flex items-center justify-between text-xs">
                <span class="text-slate-500 dark:text-slate-400">Daya Tampung:</span>
                <span class="font-bold text-slate-700 dark:text-slate-300">${m2?.quota || '110'} Kursi</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right 1 Col: Badges Showcase & XP Activity Log -->
      <div class="space-y-6">
        <!-- Section: Koleksi Medali & Badges -->
        <div class="bg-white dark:bg-slate-800 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-700 shadow-sm space-y-3.5">
          <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-3">
            <div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                <span>🏅</span> <span>Koleksi Lencana (${unlockedBadges.length}/${BADGES_LIST.length})</span>
              </h3>
              <p class="text-[11px] text-slate-400">Buka lencana dengan konsisten belajar dan uji kemampuan.</p>
            </div>
          </div>

          <div class="space-y-2.5">
            ${badgesHtml}
          </div>
        </div>

        <!-- Section: Riwayat Perolehan XP -->
        <div class="bg-white dark:bg-slate-800 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-700 shadow-sm space-y-3.5">
          <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-3">
            <div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                <span>⚡</span> <span>Riwayat XP Terbaru</span>
              </h3>
              <p class="text-[11px] text-slate-400">Catatan aktivitas dan reward yang telah kamu raih.</p>
            </div>
          </div>

          <div class="space-y-2">
            ${historyHtml}
          </div>
        </div>

        <!-- Section: Keamanan & Sesi Akun -->
        <div class="bg-white dark:bg-slate-800 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-700 shadow-sm space-y-3 text-xs">
          <div class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
            <span>🛡️</span> <span>Manajemen Akun & Sesi</span>
          </div>
          <div class="space-y-2">
            <button onclick="toggleTheme()" class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 font-semibold flex items-center justify-between transition">
              <span>🌓 Ganti Tema (Dark / Light)</span>
              <span class="text-slate-400">Ubah</span>
            </button>
            <button onclick="openAuthModal('login')" class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 font-semibold flex items-center justify-between transition">
              <span>👥 Ganti Akun / Masuk Akun Lain</span>
              <span class="text-slate-400">Masuk</span>
            </button>
            <button onclick="handleLogout()" class="w-full p-2.5 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 hover:bg-rose-100 font-bold flex items-center justify-between transition">
              <span>🚪 Keluar dari Perangkat Ini</span>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function handleSelectProfileAvatar(avatarChar) {
  selectedProfileAvatar = avatarChar;
  document.querySelectorAll(".profile-av-btn").forEach(btn => {
    if (btn.textContent.trim() === avatarChar) {
      btn.className = "profile-av-btn w-11 h-11 rounded-2xl border-2 text-xl flex items-center justify-center transition-all border-orange-500 bg-orange-500/10 scale-110 shadow-md ring-2 ring-orange-400";
    } else {
      btn.className = "profile-av-btn w-11 h-11 rounded-2xl border-2 text-xl flex items-center justify-center transition-all border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-400";
    }
  });

  const display = document.getElementById("profile-avatar-display");
  if (display) {
    display.innerHTML = `
      <div class="w-full h-full bg-slate-900 rounded-[22px] flex items-center justify-center text-4xl sm:text-5xl">
        ${avatarChar}
      </div>
    `;
  }
}

function handleSaveProfileForm(event) {
  event.preventDefault();
  const profile = getUserProfile();

  const nameInput = document.getElementById("prof-input-name");
  const schoolInput = document.getElementById("prof-input-school");
  const streamInput = document.getElementById("prof-input-stream");
  const yearInput = document.getElementById("prof-input-year");
  const bioInput = document.getElementById("prof-input-bio");

  if (nameInput && nameInput.value.trim()) {
    profile.name = nameInput.value.trim();
  }
  if (selectedProfileAvatar) {
    profile.avatar = selectedProfileAvatar;
  }
  if (schoolInput) {
    profile.school = schoolInput.value.trim();
  }
  if (streamInput) {
    profile.stream = streamInput.value;
  }
  if (yearInput) {
    profile.targetYear = yearInput.value;
  }
  if (bioInput) {
    profile.bio = bioInput.value.trim();
  }

  saveUserProfile(profile);

  renderHeaderStats();
  initSettingsModal();
  renderProfileView();

  showXpNotification(0, "Profilmu berhasil diperbarui! 🎉");
  triggerConfetti();
}

// ============================================================
// 8. SETTINGS & DUAL PROFIL MODAL (Pilihan 1 & Pilihan 2)
// ============================================================
function initSettingsModal() {
  const profile = getUserProfile();

  // Nama & Avatar
  const nameInput = document.getElementById("set-name-input");
  if (nameInput) nameInput.value = profile.name || "Pejuang PTN";

  const avatarSelect = document.getElementById("set-avatar-select");
  if (avatarSelect) avatarSelect.value = profile.avatar || "👨‍🎓";

  // Dropdowns PTN 1 & PTN 2 dengan Optgroup Kategori & Wilayah
  const selectPtn1 = document.getElementById("set-ptn-select");
  const selectPtn2 = document.getElementById("set-ptn2-select");
  if (!selectPtn1 || !selectPtn2) return;

  const buildGroupedPtnOptions = () => {
    const topIds = ["ui", "itb", "ugm", "unair", "its", "undip", "unpad", "ub", "uns", "ipb"];
    const groups = [
      { label: "⭐ Top Kampus Terfavorit", list: PTN_LIST.filter(p => topIds.includes(p.id)) },
      { label: "🏛️ Universitas Pulau Jawa", list: PTN_LIST.filter(p => p.region === "Jawa" && (p.type === "Universitas" || !p.type) && !topIds.includes(p.id)) },
      { label: "🌴 Universitas Pulau Sumatera", list: PTN_LIST.filter(p => p.region === "Sumatera" && (p.type === "Universitas" || !p.type)) },
      { label: "🌺 Bali & Nusa Tenggara", list: PTN_LIST.filter(p => p.region === "Bali & Nusa Tenggara" && (p.type === "Universitas" || !p.type)) },
      { label: "🌲 Pulau Kalimantan", list: PTN_LIST.filter(p => p.region === "Kalimantan" && (p.type === "Universitas" || !p.type)) },
      { label: "🌊 Pulau Sulawesi", list: PTN_LIST.filter(p => p.region === "Sulawesi" && (p.type === "Universitas" || !p.type)) },
      { label: "⛰️ Maluku & Papua", list: PTN_LIST.filter(p => p.region === "Maluku & Papua" && (p.type === "Universitas" || !p.type)) },
      { label: "⚙️ Politeknik Negeri (Vokasi D4)", list: PTN_LIST.filter(p => p.type === "Politeknik") },
      { label: "🕌 UIN / IAIN (PTKIN)", list: PTN_LIST.filter(p => p.type === "UIN") },
      { label: "🎨 Institut Seni & Teknologi", list: PTN_LIST.filter(p => p.type === "Institut" && !topIds.includes(p.id)) }
    ];

    return groups.map(g => {
      if (!g.list || g.list.length === 0) return "";
      return `
        <optgroup label="${g.label}">
          ${g.list.map(p => `<option value="${p.id}">${p.name} (${p.shortName})</option>`).join("")}
        </optgroup>
      `;
    }).join("");
  };

  const ptnOptions = buildGroupedPtnOptions();

  selectPtn1.innerHTML = ptnOptions;
  selectPtn2.innerHTML = ptnOptions;

  selectPtn1.value = profile.targetPtn || "itb";
  selectPtn2.value = profile.targetPtn2 || "ui";

  updateMajorSelectOptions(1, selectPtn1.value, profile.targetMajorId);
  updateMajorSelectOptions(2, selectPtn2.value, profile.targetMajorId2);

  selectPtn1.onchange = () => updateMajorSelectOptions(1, selectPtn1.value);
  selectPtn2.onchange = () => updateMajorSelectOptions(2, selectPtn2.value);

  const majorSelect1 = document.getElementById("set-major-select");
  const majorSelect2 = document.getElementById("set-major2-select");
  if (majorSelect1) majorSelect1.onchange = () => updatePtnModalInfo();
  if (majorSelect2) majorSelect2.onchange = () => updatePtnModalInfo();

  updatePtnModalInfo();
}

function onModalDegreeFilterChange(choiceNum) {
  const ptnSelect = document.getElementById(choiceNum === 1 ? "set-ptn-select" : "set-ptn2-select");
  if (!ptnSelect) return;
  updateMajorSelectOptions(choiceNum, ptnSelect.value);
}

function updateMajorSelectOptions(choiceNum, ptnId, selectedMajorId = null) {
  const ptn = PTN_LIST.find(p => p.id === ptnId);
  const selectEl = document.getElementById(choiceNum === 1 ? "set-major-select" : "set-major2-select");
  const degreeFilterEl = document.getElementById(choiceNum === 1 ? "set-degree1-filter" : "set-degree2-filter");
  if (!ptn || !selectEl) return;

  const degreeFilter = degreeFilterEl ? degreeFilterEl.value : "all";
  const filteredMajors = ptn.majors.filter(m => degreeFilter === "all" || (m.degree || "S1") === degreeFilter);

  if (filteredMajors.length === 0) {
    selectEl.innerHTML = `<option value="">(Tidak ada prodi ${degreeFilter} di ${ptn.shortName})</option>`;
  } else {
    selectEl.innerHTML = filteredMajors.map(m => `
      <option value="${m.id}" ${selectedMajorId === m.id ? 'selected' : ''}>
        [${m.degree || 'S1'}] [${m.category}] ${m.name} (Passing: ${m.targetScore})
      </option>
    `).join("");
  }

  updatePtnModalInfo();
}

function updatePtnModalInfo() {
  const m1Id = document.getElementById("set-major-select") ? document.getElementById("set-major-select").value : null;
  const m2Id = document.getElementById("set-major2-select") ? document.getElementById("set-major2-select").value : null;

  const m1 = findMajorById(m1Id);
  const m2 = findMajorById(m2Id);

  // Update badge P1
  const b1 = document.getElementById("p1-score-badge");
  const info1 = document.getElementById("p1-detail-info");
  if (b1 && m1) b1.innerText = `Passing Grade: ${m1.targetScore}`;
  if (info1 && m1) {
    const degLabel = m1.degree === "D4" ? "D4 (Sarjana Terapan)" : m1.degree === "D3" ? "D3 (Diploma Tiga)" : "S1 (Sarjana)";
    info1.innerHTML = `
      <span>Jenjang: <strong class="text-indigo-600">${degLabel}</strong></span>
      <span>Rumpun: <strong>${m1.category}</strong></span>
      <span>Daya Tampung: <strong>${m1.quota} kursi</strong></span>
      <span>Peminat: <strong>${m1.applicants.toLocaleString()}</strong></span>
      <span>Keketatan: <strong>1 : ${Math.round(m1.applicants / m1.quota)}</strong></span>
    `;
  }

  // Update badge P2
  const b2 = document.getElementById("p2-score-badge");
  const info2 = document.getElementById("p2-detail-info");
  if (b2 && m2) b2.innerText = `Passing Grade: ${m2.targetScore}`;
  if (info2 && m2) {
    const degLabel2 = m2.degree === "D4" ? "D4 (Sarjana Terapan)" : m2.degree === "D3" ? "D3 (Diploma Tiga)" : "S1 (Sarjana)";
    info2.innerHTML = `
      <span>Jenjang: <strong class="text-slate-800">${degLabel2}</strong></span>
      <span>Rumpun: <strong>${m2.category}</strong></span>
      <span>Daya Tampung: <strong>${m2.quota} kursi</strong></span>
      <span>Peminat: <strong>${m2.applicants.toLocaleString()}</strong></span>
      <span>Keketatan: <strong>1 : ${Math.round(m2.applicants / m2.quota)}</strong></span>
    `;
  }

  // Evaluasi Strategi Pilihan
  const stratBox = document.getElementById("strategy-eval-box");
  if (stratBox && m1 && m2) {
    const profile = getUserProfile();
    const dual = analyzeDualStrategy(profile.highestScore || 650, m1, m2);
    stratBox.innerHTML = `
      <div class="font-bold text-slate-800 mb-1 flex items-center gap-1.5">
        <span>💡 Analisis Strategi Kombinasi Jurusan:</span>
      </div>
      <div>${dual.advice}</div>
    `;
  }
}

function openSettingsModal() {
  if (typeof isUserLoggedIn === "function" && !isUserLoggedIn()) {
    openAuthModal("login", false, "Silakan Masuk atau Buat Akun terlebih dahulu untuk mengatur profil dan target jurusan impian.");
    showAuthAlert("🔒 Kamu perlu masuk atau daftar akun terlebih dahulu untuk mengatur target jurusan impian!", false);
    return;
  }
  initSettingsModal();
  const modal = document.getElementById("settings-modal");
  if (modal) modal.classList.remove("hidden");
}

function closeSettingsModal() {
  const modal = document.getElementById("settings-modal");
  if (modal) modal.classList.add("hidden");
}

function saveSettingsForm() {
  const nameInput = document.getElementById("set-name-input");
  const avatarSelect = document.getElementById("set-avatar-select");
  const ptn1Select = document.getElementById("set-ptn-select");
  const major1Select = document.getElementById("set-major-select");
  const ptn2Select = document.getElementById("set-ptn2-select");
  const major2Select = document.getElementById("set-major2-select");

  const profile = getUserProfile();
  if (nameInput && nameInput.value.trim()) profile.name = nameInput.value.trim();
  if (avatarSelect) profile.avatar = avatarSelect.value;

  if (ptn1Select && major1Select) {
    profile.targetPtn = ptn1Select.value;
    profile.targetMajorId = major1Select.value;
    const m1 = findMajorById(major1Select.value);
    if (m1) {
      profile.targetMajorName = `${m1.name} (${m1.ptnShort})`;
      profile.targetScore = m1.targetScore;
    }
  }

  if (ptn2Select && major2Select) {
    profile.targetPtn2 = ptn2Select.value;
    profile.targetMajorId2 = major2Select.value;
    const m2 = findMajorById(major2Select.value);
    if (m2) {
      profile.targetMajorName2 = `${m2.name} (${m2.ptnShort})`;
      profile.targetScore2 = m2.targetScore;
    }
  }

  saveUserProfile(profile);
  closeSettingsModal();
  renderHeaderStats();
  renderDashboard();
  if (activeTab === "rapor") renderRaporView();
  if (activeTab === "ptn-explorer") renderPtnExplorerList();
}

// ============================================================
// 9. EKSPLORASI PTN & JURUSAN (SIMPLE & CLEAN UI)
// ============================================================
let currentPtnFilterCategory = "all"; // "all" | "akademik" | "vokasi" | "ptkin"
let currentPtnSearchQuery = "";
let currentDetailPtnId = null;
let currentDetailProdiSearch = "";
let currentDetailCategory = "all"; // "all" | "Saintek" | "Soshum"
let currentDetailDegree = "all"; // "all" | "S1" | "D4" | "D3"

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getPtnCategory(ptn) {
  if (!ptn) return "akademik";
  const isVokasi = ptn.type === "Politeknik" || (ptn.name && ptn.name.includes("Politeknik"));
  const isPtkin = ptn.type === "UIN" || ptn.type === "PTKIN" || (ptn.name && (ptn.name.includes("UIN") || ptn.name.includes("IAIN")));
  if (isVokasi) return "vokasi";
  if (isPtkin) return "ptkin";
  return "akademik";
}

function getPtnCategoryCounts() {
  let all = PTN_LIST.length;
  let akademik = 0;
  let vokasi = 0;
  let ptkin = 0;

  PTN_LIST.forEach(ptn => {
    const cat = getPtnCategory(ptn);
    if (cat === "akademik") akademik++;
    else if (cat === "vokasi") vokasi++;
    else if (cat === "ptkin") ptkin++;
  });

  return { all, akademik, vokasi, ptkin };
}

function renderPtnExplorer() {
  if (currentDetailPtnId) {
    renderPtnDetail(currentDetailPtnId);
  } else {
    renderPtnSimpleList();
  }
}

function renderPtnExplorerList() {
  renderPtnExplorer();
}

function setPtnCategoryFilter(category) {
  currentPtnFilterCategory = category;
  renderPtnSimpleList();
}

function onPtnSearchInput(query) {
  currentPtnSearchQuery = query;
  renderPtnItemsOnly();
}

function renderPtnSimpleList() {
  const container = document.getElementById("ptn-screen-list");
  const detailContainer = document.getElementById("ptn-screen-detail");
  if (!container) return;

  if (detailContainer) detailContainer.classList.add("hidden");
  container.classList.remove("hidden");

  const counts = getPtnCategoryCounts();

  container.innerHTML = `
    <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl shadow-sm overflow-hidden">
      <!-- Header & Search Input -->
      <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800">
        <div class="flex items-center gap-2 mb-3">
          <svg class="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2L2 7h20L12 2z"/>
          </svg>
          <h2 class="text-base sm:text-lg font-bold text-indigo-600 dark:text-indigo-400 tracking-tight">
            Daftar PTN
          </h2>
        </div>
        <div class="relative">
          <input
            type="text"
            id="ptn-search-input"
            value="${escapeHtml(currentPtnSearchQuery)}"
            oninput="onPtnSearchInput(this.value)"
            placeholder="Cari nama PTN..."
            class="w-full text-xs sm:text-sm py-2.5 sm:py-3 pl-4 pr-10 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 font-medium transition"
          />
          <span class="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
        </div>
      </div>

      <!-- 2x2 Filter Buttons -->
      <div class="p-3 sm:p-4 bg-slate-50/50 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-800">
        <div class="grid grid-cols-2 gap-2 sm:gap-2.5">
          <!-- Semua -->
          <button
            type="button"
            onclick="setPtnCategoryFilter('all')"
            class="w-full py-2 sm:py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition ${currentPtnFilterCategory === 'all' ? 'bg-[#3b66d1] dark:bg-indigo-600 text-white shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50'}"
          >
            <span>Semua</span>
            <span class="${currentPtnFilterCategory === 'all' ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'} text-[11px] font-bold px-2 py-0.5 rounded-full">
              ${counts.all}
            </span>
          </button>

          <!-- PTN Akademik -->
          <button
            type="button"
            onclick="setPtnCategoryFilter('akademik')"
            class="w-full py-2 sm:py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition ${currentPtnFilterCategory === 'akademik' ? 'bg-[#3b66d1] dark:bg-indigo-600 text-white shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50'}"
          >
            <span>PTN Akademik</span>
            <span class="${currentPtnFilterCategory === 'akademik' ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'} text-[11px] font-bold px-2 py-0.5 rounded-full">
              ${counts.akademik}
            </span>
          </button>

          <!-- PTN Vokasi -->
          <button
            type="button"
            onclick="setPtnCategoryFilter('vokasi')"
            class="w-full py-2 sm:py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition ${currentPtnFilterCategory === 'vokasi' ? 'bg-[#3b66d1] dark:bg-indigo-600 text-white shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50'}"
          >
            <span>PTN Vokasi</span>
            <span class="${currentPtnFilterCategory === 'vokasi' ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'} text-[11px] font-bold px-2 py-0.5 rounded-full">
              ${counts.vokasi}
            </span>
          </button>

          <!-- PTKIN -->
          <button
            type="button"
            onclick="setPtnCategoryFilter('ptkin')"
            class="w-full py-2 sm:py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition ${currentPtnFilterCategory === 'ptkin' ? 'bg-[#3b66d1] dark:bg-indigo-600 text-white shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50'}"
          >
            <span>PTKIN</span>
            <span class="${currentPtnFilterCategory === 'ptkin' ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'} text-[11px] font-bold px-2 py-0.5 rounded-full">
              ${counts.ptkin}
            </span>
          </button>
        </div>
      </div>

      <!-- PTN List Items Container -->
      <div id="ptn-items-container" class="divide-y divide-slate-100 dark:divide-slate-800 max-h-[70vh] overflow-y-auto">
        <!-- Rendered by renderPtnItemsOnly() -->
      </div>
    </div>
  `;

  renderPtnItemsOnly();
}

function renderPtnItemsOnly() {
  const container = document.getElementById("ptn-items-container");
  if (!container) return;

  const query = currentPtnSearchQuery.toLowerCase().trim();

  const filtered = PTN_LIST.filter(ptn => {
    // Category match
    if (currentPtnFilterCategory !== "all") {
      const cat = getPtnCategory(ptn);
      if (cat !== currentPtnFilterCategory) return false;
    }

    // Search query match (name, code, shortName, location, or majors)
    if (query) {
      const nameMatch = (ptn.name || "").toLowerCase().includes(query);
      const codeMatch = (ptn.code || "").toLowerCase().includes(query);
      const shortMatch = (ptn.shortName || "").toLowerCase().includes(query);
      const locMatch = (ptn.location || "").toLowerCase().includes(query);
      const majorMatch = Array.isArray(ptn.majors) && ptn.majors.some(m => (m.name || "").toLowerCase().includes(query));
      return nameMatch || codeMatch || shortMatch || locMatch || majorMatch;
    }

    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center text-slate-400 dark:text-slate-500 text-xs sm:text-sm">
        Tidak ditemukan PTN dengan kata kunci "${escapeHtml(currentPtnSearchQuery)}".
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(ptn => {
    return `
      <div
        onclick="openPtnDetail('${ptn.id}')"
        class="px-4 sm:px-5 py-3.5 sm:py-4 flex items-center justify-between hover:bg-slate-50/90 dark:hover:bg-slate-800/60 cursor-pointer transition-colors group"
      >
        <div class="pr-3">
          <div class="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-100 uppercase tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            ${escapeHtml(ptn.name)}
          </div>
          <div class="text-[11px] sm:text-xs text-slate-400 dark:text-slate-500 font-mono font-medium mt-0.5">
            ${escapeHtml(ptn.code || "-")}
          </div>
        </div>
        <div class="text-indigo-400 dark:text-indigo-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-transform group-hover:translate-x-1 flex-shrink-0">
          <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    `;
  }).join("");
}

function openPtnDetail(ptnId) {
  currentDetailPtnId = ptnId;
  currentDetailProdiSearch = "";
  currentDetailCategory = "all";
  currentDetailDegree = "all";
  renderPtnDetail(ptnId);
}

function backToPtnList() {
  currentDetailPtnId = null;
  const listEl = document.getElementById("ptn-screen-list");
  const detailEl = document.getElementById("ptn-screen-detail");
  if (listEl) listEl.classList.remove("hidden");
  if (detailEl) detailEl.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderPtnDetail(ptnId) {
  const listContainer = document.getElementById("ptn-screen-list");
  const detailContainer = document.getElementById("ptn-screen-detail");
  if (!detailContainer) return;

  const ptn = PTN_LIST.find(p => p.id === ptnId);
  if (!ptn) {
    backToPtnList();
    return;
  }

  if (listContainer) listContainer.classList.add("hidden");
  detailContainer.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });

  const totalMajors = Array.isArray(ptn.majors) ? ptn.majors.length : 0;
  const saintekCount = Array.isArray(ptn.majors) ? ptn.majors.filter(m => m.category === "Saintek").length : 0;
  const soshumCount = Array.isArray(ptn.majors) ? ptn.majors.filter(m => m.category === "Soshum").length : 0;

  detailContainer.innerHTML = `
    <!-- Back Button -->
    <div class="flex items-center justify-between gap-3">
      <button
        type="button"
        onclick="backToPtnList()"
        class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-bold text-xs sm:text-sm shadow-sm transition"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
        </svg>
        <span>Kembali ke Daftar PTN</span>
      </button>

      <span class="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
        SNPMB: ${escapeHtml(ptn.code || "-")}
      </span>
    </div>

    <!-- PTN Banner Card -->
    <div class="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-md relative overflow-hidden">
      <div class="relative z-10 space-y-2.5">
        <div class="flex items-center gap-2 flex-wrap text-xs">
          <span class="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md font-bold text-white">
            ${escapeHtml(ptn.type || 'PTN')}
          </span>
          <span class="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-indigo-100">
            📍 ${escapeHtml(ptn.location || 'Indonesia')}
          </span>
          <span class="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-indigo-100">
            Wilayah: ${escapeHtml(ptn.region || 'Nasional')}
          </span>
        </div>
        <h2 class="text-xl sm:text-2xl font-black uppercase tracking-tight">
          ${escapeHtml(ptn.name)}
        </h2>
        <p class="text-xs sm:text-sm text-indigo-100 leading-relaxed">
          Tersedia <strong>${totalMajors} Program Studi</strong> (${saintekCount} Saintek, ${soshumCount} Soshum). Tentukan target Pilihan 1 & Pilihan 2 untuk simulasi rasionalisasi peluang lolos SNBT.
        </p>
      </div>
    </div>

    <!-- Search & Filter Bar inside PTN -->
    <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3.5">
      <div class="relative">
        <input
          type="text"
          id="ptn-detail-prodi-search"
          value="${escapeHtml(currentDetailProdiSearch)}"
          oninput="onDetailProdiSearch(this.value)"
          placeholder="Cari jurusan di ${escapeHtml(ptn.shortName || ptn.name)} (cth: Kedokteran, Informatika, Akuntansi)..."
          class="w-full text-xs sm:text-sm py-2.5 sm:py-3 pl-9 pr-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:border-indigo-500 font-medium transition"
        />
        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">🔍</span>
      </div>

      <div class="flex items-center justify-between flex-wrap gap-2 pt-1">
        <!-- Rumpun Filter Pills -->
        <div class="flex items-center gap-1.5 flex-wrap">
          <span class="font-bold text-slate-400 text-[11px]">RUMPUN:</span>
          <button
            type="button"
            onclick="setDetailCategoryFilter('all')"
            class="px-2.5 py-1 rounded-full text-xs font-bold transition ${currentDetailCategory === 'all' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'}"
          >
            Semua
          </button>
          <button
            type="button"
            onclick="setDetailCategoryFilter('Saintek')"
            class="px-2.5 py-1 rounded-full text-xs font-bold transition ${currentDetailCategory === 'Saintek' ? 'bg-cyan-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'}"
          >
            🔬 Saintek
          </button>
          <button
            type="button"
            onclick="setDetailCategoryFilter('Soshum')"
            class="px-2.5 py-1 rounded-full text-xs font-bold transition ${currentDetailCategory === 'Soshum' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'}"
          >
            ⚖️ Soshum
          </button>
        </div>

        <!-- Jenjang Filter Pills -->
        <div class="flex items-center gap-1.5 flex-wrap">
          <span class="font-bold text-slate-400 text-[11px]">JENJANG:</span>
          <button
            type="button"
            onclick="setDetailDegreeFilter('all')"
            class="px-2.5 py-1 rounded-full text-xs font-bold transition ${currentDetailDegree === 'all' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'}"
          >
            Semua
          </button>
          <button
            type="button"
            onclick="setDetailDegreeFilter('S1')"
            class="px-2.5 py-1 rounded-full text-xs font-bold transition ${currentDetailDegree === 'S1' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'}"
          >
            🎓 S1
          </button>
          <button
            type="button"
            onclick="setDetailDegreeFilter('D4')"
            class="px-2.5 py-1 rounded-full text-xs font-bold transition ${currentDetailDegree === 'D4' ? 'bg-amber-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'}"
          >
            💼 D4
          </button>
          <button
            type="button"
            onclick="setDetailDegreeFilter('D3')"
            class="px-2.5 py-1 rounded-full text-xs font-bold transition ${currentDetailDegree === 'D3' ? 'bg-teal-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'}"
          >
            🛠️ D3
          </button>
        </div>
      </div>
    </div>

    <!-- Prodi Cards Container -->
    <div id="ptn-detail-prodi-container" class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
      <!-- Injected by renderDetailProdiList() -->
    </div>
  `;

  renderDetailProdiList();
}

function onDetailProdiSearch(query) {
  currentDetailProdiSearch = query;
  renderDetailProdiList();
}

function setDetailCategoryFilter(category) {
  currentDetailCategory = category;
  renderPtnDetail(currentDetailPtnId);
}

function setDetailDegreeFilter(degree) {
  currentDetailDegree = degree;
  renderPtnDetail(currentDetailPtnId);
}

function renderDetailProdiList() {
  const container = document.getElementById("ptn-detail-prodi-container");
  if (!container) return;

  const ptn = PTN_LIST.find(p => p.id === currentDetailPtnId);
  if (!ptn || !Array.isArray(ptn.majors)) return;

  const query = currentDetailProdiSearch.toLowerCase().trim();

  const filtered = ptn.majors.filter(m => {
    const matchCategory = currentDetailCategory === "all" || m.category === currentDetailCategory;
    const matchDegree = currentDetailDegree === "all" || (m.degree || "S1") === currentDetailDegree;
    const matchSearch = !query || (m.name || "").toLowerCase().includes(query);
    return matchCategory && matchDegree && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full p-8 text-center text-slate-400 dark:text-slate-500 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs sm:text-sm">
        Tidak ada program studi yang cocok dengan filter atau kata kunci pencarianmu.
      </div>
    `;
    return;
  }

  const profile = getUserProfile();
  const loggedIn = typeof isUserLoggedIn === "function" ? isUserLoggedIn() : false;

  container.innerHTML = filtered.map(m => {
    const isP1 = loggedIn && profile.targetMajorId === m.id;
    const isP2 = loggedIn && profile.targetMajorId2 === m.id;
    const degree = m.degree || "S1";
    const ratio = (m.quota && m.applicants) ? Math.round(m.applicants / m.quota) : "-";

    let degreeBadgeClass = "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800";
    let degreeIcon = "🎓";
    if (degree === "D4") {
      degreeBadgeClass = "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800";
      degreeIcon = "💼";
    } else if (degree === "D3") {
      degreeBadgeClass = "bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800";
      degreeIcon = "🛠️";
    }

    return `
      <div class="bg-white dark:bg-slate-900 border rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between ${isP1 ? 'border-indigo-500 ring-2 ring-indigo-200 dark:ring-indigo-900' : isP2 ? 'border-amber-400 ring-2 ring-amber-100 dark:ring-amber-900' : 'border-slate-200 dark:border-slate-800'}">
        <div class="space-y-3">
          <!-- Top Tags -->
          <div class="flex items-center gap-1.5 flex-wrap">
            <span class="px-2 py-0.5 rounded-md text-[11px] font-bold border ${degreeBadgeClass}">
              ${degreeIcon} ${degree}
            </span>
            <span class="px-2 py-0.5 rounded-md text-[11px] font-semibold ${m.category === 'Saintek' ? 'bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800' : 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'}">
              ${m.category}
            </span>
            ${m.competitiveness ? `<span class="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Peminat: ${m.competitiveness}</span>` : ''}
          </div>

          <!-- Prodi Title -->
          <div>
            <h3 class="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white leading-snug">
              ${escapeHtml(m.name)}
            </h3>
          </div>

          <!-- Stats Grid -->
          <div class="grid grid-cols-3 gap-2 p-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl text-center">
            <div>
              <div class="text-[10px] text-slate-400 font-medium">Passing Grade</div>
              <div class="font-black text-indigo-600 dark:text-indigo-400 text-sm sm:text-base mt-0.5">${m.targetScore || "-"}</div>
            </div>
            <div>
              <div class="text-[10px] text-slate-400 font-medium">Daya Tampung</div>
              <div class="font-bold text-slate-800 dark:text-slate-200 text-xs sm:text-sm mt-0.5">${m.quota || "-"} kursi</div>
            </div>
            <div>
              <div class="text-[10px] text-slate-400 font-medium">Keketatan</div>
              <div class="font-bold text-slate-800 dark:text-slate-200 text-xs sm:text-sm mt-0.5">${ratio !== "-" ? `1 : ${ratio}` : "-"}</div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="pt-3.5 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
          <button
            type="button"
            onclick="setTargetChoice('${m.id}', 1)"
            class="flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 ${isP1 ? 'bg-indigo-600 text-white shadow-sm' : 'bg-indigo-50 dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-slate-700'}"
          >
            <span>${isP1 ? 'Pilihan 1 ✓' : 'Pilihan 1 🎯'}</span>
          </button>
          <button
            type="button"
            onclick="setTargetChoice('${m.id}', 2)"
            class="flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 ${isP2 ? 'bg-amber-500 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}"
          >
            <span>${isP2 ? 'Pilihan 2 ✓' : 'Pilihan 2 🛡️'}</span>
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// Set target choice langsung dari katalog / detail
function setTargetChoice(majorId, choiceNumber) {
  if (typeof isUserLoggedIn === "function" && !isUserLoggedIn()) {
    openAuthModal("login", false, "Silakan Masuk atau Buat Akun terlebih dahulu untuk menyimpan target jurusan impianmu.");
    showAuthAlert("🔒 Kamu perlu masuk atau daftar akun terlebih dahulu untuk menetapkan target jurusan impian!", false);
    return;
  }

  const m = findMajorById(majorId);
  if (!m) return;

  const profile = getUserProfile();
  if (choiceNumber === 1) {
    profile.targetPtn = m.ptnId;
    profile.targetMajorId = m.id;
    profile.targetMajorName = `${m.name} (${m.ptnShort || m.ptnName})`;
    profile.targetScore = m.targetScore;
    showXpNotification(0, `🎯 ${m.name} (${m.ptnShort || m.ptnName}) dijadikan Pilihan 1!`);
  } else {
    profile.targetPtn2 = m.ptnId;
    profile.targetMajorId2 = m.id;
    profile.targetMajorName2 = `${m.name} (${m.ptnShort || m.ptnName})`;
    profile.targetScore2 = m.targetScore;
    showXpNotification(0, `🛡️ ${m.name} (${m.ptnShort || m.ptnName}) dijadikan Pilihan 2!`);
  }

  saveUserProfile(profile);
  renderHeaderStats();
  renderDashboard();
  renderPtnExplorer();
  if (activeTab === "rapor") renderRaporView();
}

// ============================================================
// THEME ENGINE (Dark Mode / Light Mode Switcher)
// ============================================================
function initTheme() {
  const savedTheme = localStorage.getItem("utbk_theme") || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  applyTheme(savedTheme, false);
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains("dark");
  const nextTheme = isDark ? "light" : "dark";
  applyTheme(nextTheme, true);
}

function applyTheme(theme, showToast = false) {
  const isDark = theme === "dark";
  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  localStorage.setItem("utbk_theme", theme);

  // Sinkronkan ke preferensi user aktif di registry
  if (typeof getAllUsers === "function" && typeof saveAllUsers === "function" && typeof getActiveUserId === "function") {
    const users = getAllUsers();
    const activeId = getActiveUserId();
    if (users && users[activeId]) {
      users[activeId].theme = theme;
      saveAllUsers(users);
    }
  }

  // Update Icon & Title Tombol
  updateThemeButtonUI(theme);

  // Refresh radar chart jika sedang terlihat agar label terbaca
  if (typeof renderSubtestRadar === "function" && document.getElementById("subtestRadarChart")) {
    const history = typeof getTryOutHistory === "function" ? getTryOutHistory() : [];
    const latestResult = (currentReviewResult && currentReviewResult.result) || history[0];
    if (latestResult && latestResult.subtestScores) {
      renderSubtestRadar("subtestRadarChart", latestResult.subtestScores);
    }
  }

  if (showToast && typeof showXpNotification === "function") {
    showXpNotification(0, isDark ? "Mode Gelap Diaktifkan 🌙" : "Mode Terang Diaktifkan ☀️");
  }
}

function updateThemeButtonUI(theme) {
  const isDark = theme === "dark" || (typeof document !== 'undefined' && document.documentElement.classList.contains("dark"));
  const themeIcon = document.getElementById("theme-icon");
  const themeBtn = document.getElementById("theme-toggle-btn");
  if (themeIcon) {
    themeIcon.textContent = isDark ? "☀️" : "🌙";
  }
  if (themeBtn) {
    themeBtn.title = isDark ? "Ganti ke Tampilan Terang" : "Ganti ke Tampilan Gelap";
  }
}

// ============================================================
// MULTI-USER AUTHENTICATION & SESSION CONTROLLER
// ============================================================
function toggleUserDropdown() {
  const menu = document.getElementById("user-dropdown-menu");
  if (menu) {
    menu.classList.toggle("hidden");
  }
}

function closeUserDropdown() {
  const menu = document.getElementById("user-dropdown-menu");
  if (menu) {
    menu.classList.add("hidden");
  }
}

let authModalIsMandatory = false;

function openAuthModal(defaultTab = "login", isMandatory = false, customSubtitle = null) {
  closeUserDropdown();
  authModalIsMandatory = isMandatory;

  const modal = document.getElementById("auth-modal");
  if (!modal) return;

  const closeBtn = document.getElementById("auth-modal-close-btn");
  if (closeBtn) {
    if (isMandatory) {
      closeBtn.classList.add("hidden");
    } else {
      closeBtn.classList.remove("hidden");
    }
  }

  const subtitle = document.getElementById("auth-modal-subtitle");
  if (subtitle) {
    if (customSubtitle) {
      subtitle.textContent = customSubtitle;
    } else {
      subtitle.textContent = isMandatory 
        ? "Daftar sekali di perangkat ini, progres belajarmu tersimpan otomatis!"
        : "Progress belajar dan simulasi Try Out tersimpan per akun";
    }
  }

  modal.classList.remove("hidden");
  switchAuthTab(defaultTab);
  hideAuthAlert();
  if (typeof initAuthModalListeners === "function") {
    initAuthModalListeners();
  }
}

function closeAuthModal() {
  if (authModalIsMandatory && (typeof isUserLoggedIn === "function" && !isUserLoggedIn())) {
    showAuthAlert("⚠️ Silakan masuk (Login) atau daftar (Register) terlebih dahulu untuk melanjutkan!", false);
    return;
  }

  const modal = document.getElementById("auth-modal");
  if (modal) {
    modal.classList.add("hidden");
  }
}

function switchAuthTab(tab) {
  const btnLogin = document.getElementById("tab-btn-login");
  const btnRegister = document.getElementById("tab-btn-register");
  const formLogin = document.getElementById("auth-login-form");
  const formRegister = document.getElementById("auth-register-form");
  const title = document.getElementById("auth-modal-title");

  hideAuthAlert();

  if (tab === "login") {
    if (formLogin) formLogin.classList.remove("hidden");
    if (formRegister) formRegister.classList.add("hidden");
    if (btnLogin) btnLogin.className = "flex-1 py-2 rounded-lg transition bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm";
    if (btnRegister) btnRegister.className = "flex-1 py-2 rounded-lg transition text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white";
    if (title) title.textContent = "Masuk ke Akun";
  } else {
    if (formLogin) formLogin.classList.add("hidden");
    if (formRegister) formRegister.classList.remove("hidden");
    if (btnRegister) btnRegister.className = "flex-1 py-2 rounded-lg transition bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm";
    if (btnLogin) btnLogin.className = "flex-1 py-2 rounded-lg transition text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white";
    if (title) title.textContent = "Daftar Akun Baru";
  }
}

function showAuthAlert(message, isSuccess = false) {
  const box = document.getElementById("auth-alert-box");
  if (!box) return;
  box.className = isSuccess
    ? "p-3 rounded-xl text-xs font-semibold leading-snug bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 block"
    : "p-3 rounded-xl text-xs font-semibold leading-snug bg-rose-50 dark:bg-rose-950/50 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800 block";
  box.textContent = message;
}

function hideAuthAlert() {
  const box = document.getElementById("auth-alert-box");
  if (box) box.classList.add("hidden");
}

function handleLoginSubmit(event) {
  event.preventDefault();
  const identifier = document.getElementById("login-identifier").value;
  const pass = document.getElementById("login-password").value;

  const res = loginUser(identifier, pass);
  if (res.success) {
    showAuthAlert(`Selamat datang kembali, ${res.user.name}! Mengalihkan...`, true);
    setTimeout(() => {
      closeAuthModal();
      onUserSessionChanged();
      if (pendingTargetTab) {
        const target = pendingTargetTab;
        pendingTargetTab = null;
        switchTab(target);
      }
    }, 600);
  } else {
    showAuthAlert(res.message, false);
  }
}

function handleQuickLogin(userId) {
  setActiveUserId(userId);
  closeAuthModal();
  onUserSessionChanged();
  if (pendingTargetTab) {
    const target = pendingTargetTab;
    pendingTargetTab = null;
    switchTab(target);
  }
}

// Validasi live ketersediaan username dan email saat pengguna mengetik / pindah input
async function validateRegisterFieldLive(fieldName) {
  const usernameInput = document.getElementById("reg-username");
  const emailInput = document.getElementById("reg-email");
  const usernameFeedback = document.getElementById("reg-username-feedback");
  const emailFeedback = document.getElementById("reg-email-feedback");

  if (fieldName === "email" && emailInput && emailFeedback) {
    const emailVal = emailInput.value.trim().toLowerCase();
    if (!emailVal) {
      emailFeedback.className = "text-[11px] font-semibold mt-1 hidden";
      emailInput.classList.remove("border-rose-500", "border-emerald-500");
      return;
    }
    if (!emailVal.includes("@") || !emailVal.includes(".")) {
      emailFeedback.className = "text-[11px] font-semibold mt-1 text-rose-500 block";
      emailFeedback.textContent = "Format email belum valid (contoh: nama@email.com)";
      emailInput.classList.add("border-rose-500");
      emailInput.classList.remove("border-emerald-500");
      return;
    }

    // 1. Cek lokal
    if (typeof checkCredentialsAvailableLocal === "function") {
      const localRes = checkCredentialsAvailableLocal(null, emailVal);
      if (!localRes.success && localRes.field === "email") {
        emailFeedback.className = "text-[11px] font-semibold mt-1 text-rose-500 block";
        emailFeedback.textContent = "⚠️ " + localRes.message;
        emailInput.classList.add("border-rose-500");
        emailInput.classList.remove("border-emerald-500");
        return;
      }
    }

    // 2. Cek Cloud
    if (window.CloudLeaderboard && typeof window.CloudLeaderboard.checkAvailability === "function") {
      try {
        const cloudRes = await window.CloudLeaderboard.checkAvailability(null, emailVal);
        if (!cloudRes.emailAvailable) {
          emailFeedback.className = "text-[11px] font-semibold mt-1 text-rose-500 block";
          emailFeedback.textContent = "⚠️ " + cloudRes.message;
          emailInput.classList.add("border-rose-500");
          emailInput.classList.remove("border-emerald-500");
          return;
        }
      } catch(e) {}
    }

    // Jika lolos
    emailFeedback.className = "text-[11px] font-semibold mt-1 text-emerald-600 dark:text-emerald-400 block";
    emailFeedback.textContent = "✅ Email tersedia";
    emailInput.classList.remove("border-rose-500");
    emailInput.classList.add("border-emerald-500");
  }

  if (fieldName === "username" && usernameInput && usernameFeedback) {
    const userVal = usernameInput.value.trim().toLowerCase();
    if (!userVal) {
      usernameFeedback.className = "text-[11px] font-semibold mt-1 hidden";
      usernameInput.classList.remove("border-rose-500", "border-emerald-500");
      return;
    }
    if (userVal.length < 3) {
      usernameFeedback.className = "text-[11px] font-semibold mt-1 text-rose-500 block";
      usernameFeedback.textContent = "Username minimal 3 karakter";
      usernameInput.classList.add("border-rose-500");
      usernameInput.classList.remove("border-emerald-500");
      return;
    }

    // 1. Cek lokal
    if (typeof checkCredentialsAvailableLocal === "function") {
      const localRes = checkCredentialsAvailableLocal(userVal, null);
      if (!localRes.success && localRes.field === "username") {
        usernameFeedback.className = "text-[11px] font-semibold mt-1 text-rose-500 block";
        usernameFeedback.textContent = "⚠️ " + localRes.message;
        usernameInput.classList.add("border-rose-500");
        usernameInput.classList.remove("border-emerald-500");
        return;
      }
    }

    // 2. Cek Cloud
    if (window.CloudLeaderboard && typeof window.CloudLeaderboard.checkAvailability === "function") {
      try {
        const cloudRes = await window.CloudLeaderboard.checkAvailability(userVal, null);
        if (!cloudRes.usernameAvailable) {
          usernameFeedback.className = "text-[11px] font-semibold mt-1 text-rose-500 block";
          usernameFeedback.textContent = "⚠️ " + cloudRes.message;
          usernameInput.classList.add("border-rose-500");
          usernameInput.classList.remove("border-emerald-500");
          return;
        }
      } catch(e) {}
    }

    // Jika lolos
    usernameFeedback.className = "text-[11px] font-semibold mt-1 text-emerald-600 dark:text-emerald-400 block";
    usernameFeedback.textContent = "✅ Username tersedia";
    usernameInput.classList.remove("border-rose-500");
    usernameInput.classList.add("border-emerald-500");
  }
}

function initAuthModalListeners() {
  const userInp = document.getElementById("reg-username");
  const emailInp = document.getElementById("reg-email");
  if (userInp && !userInp.dataset.hasLiveValidation) {
    userInp.dataset.hasLiveValidation = "true";
    userInp.addEventListener("blur", () => validateRegisterFieldLive("username"));
    userInp.addEventListener("input", () => {
      const fb = document.getElementById("reg-username-feedback");
      if (fb && fb.textContent.includes("⚠️")) {
        fb.classList.add("hidden");
        userInp.classList.remove("border-rose-500");
      }
    });
  }
  if (emailInp && !emailInp.dataset.hasLiveValidation) {
    emailInp.dataset.hasLiveValidation = "true";
    emailInp.addEventListener("blur", () => validateRegisterFieldLive("email"));
    emailInp.addEventListener("input", () => {
      const fb = document.getElementById("reg-email-feedback");
      if (fb && fb.textContent.includes("⚠️")) {
        fb.classList.add("hidden");
        emailInp.classList.remove("border-rose-500");
      }
    });
  }
}

async function handleRegisterSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("reg-name").value.trim();
  const username = document.getElementById("reg-username").value.trim();
  const email = document.getElementById("reg-email").value.trim();
  const password = document.getElementById("reg-password").value.trim();

  const submitBtn = event.target ? event.target.querySelector('button[type="submit"]') : null;
  const originalBtnHtml = submitBtn ? submitBtn.innerHTML : "Daftar Sekarang 🚀";
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Memeriksa Akun... ⏳</span>`;
  }

  // 1. Validasi lokal terlebih dahulu (cepat)
  if (typeof checkCredentialsAvailableLocal === "function") {
    const localCheck = checkCredentialsAvailableLocal(username, email);
    if (!localCheck.success) {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
      }
      showAuthAlert(localCheck.message, false);
      if (localCheck.field === "email") {
        const el = document.getElementById("reg-email");
        if (el) { el.focus(); el.classList.add("border-rose-500"); }
      } else if (localCheck.field === "username") {
        const el = document.getElementById("reg-username");
        if (el) { el.focus(); el.classList.add("border-rose-500"); }
      }
      return;
    }
  }

  // 2. Validasi Cloud Leaderboard (Multi-Device & Multi-Tab Serverless KV)
  if (window.CloudLeaderboard && typeof window.CloudLeaderboard.checkAvailability === "function") {
    try {
      const cloudCheck = await window.CloudLeaderboard.checkAvailability(username, email);
      if (!cloudCheck.available) {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
        }
        showAuthAlert(cloudCheck.message, false);
        if (!cloudCheck.emailAvailable) {
          const el = document.getElementById("reg-email");
          if (el) { el.focus(); el.classList.add("border-rose-500"); }
        } else if (!cloudCheck.usernameAvailable) {
          const el = document.getElementById("reg-username");
          if (el) { el.focus(); el.classList.add("border-rose-500"); }
        }
        return;
      }
    } catch(err) {
      console.warn("Cloud check bypassed:", err);
    }
  }

  const avatarInput = document.querySelector('input[name="reg-avatar"]:checked');
  const avatar = avatarInput ? avatarInput.value : "👨‍🎓";

  const res = registerUser({ name, username, email, password, avatar });
  if (res.success) {
    showAuthAlert(`Pendaftaran berhasil! Selamat bergabung, ${res.user.name} (+50 XP).`, true);
    triggerConfetti();
    setTimeout(() => {
      closeAuthModal();
      onUserSessionChanged();
      if (pendingTargetTab) {
        const target = pendingTargetTab;
        pendingTargetTab = null;
        switchTab(target);
      }
    }, 800);
  } else {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHtml;
    }
    showAuthAlert(res.message, false);
    if (res.field === "email") {
      const el = document.getElementById("reg-email");
      if (el) { el.focus(); el.classList.add("border-rose-500"); }
    } else if (res.field === "username") {
      const el = document.getElementById("reg-username");
      if (el) { el.focus(); el.classList.add("border-rose-500"); }
    }
  }
}

// ============================================================
// FITUR REGISTER / LOGIN VIA GMAIL / GOOGLE
// ============================================================

window.GOOGLE_CLIENT_ID = window.GOOGLE_CLIENT_ID || ""; // Dapat diisi Client ID dari Google Cloud Console jika tersedia

function openGoogleAuthModal() {
  const modal = document.getElementById("google-auth-modal");
  const alertBox = document.getElementById("google-auth-alert");
  if (alertBox) alertBox.classList.add("hidden");
  if (modal) modal.classList.remove("hidden");
  const nameInput = document.getElementById("g-name");
  if (nameInput) nameInput.focus();
}

function closeGoogleAuthModal() {
  const modal = document.getElementById("google-auth-modal");
  if (modal) modal.classList.add("hidden");
}

function showGoogleAuthAlert(message, isSuccess = false) {
  const box = document.getElementById("google-auth-alert");
  if (!box) return;
  box.className = isSuccess
    ? "p-2.5 rounded-xl text-xs font-semibold leading-snug bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 block"
    : "p-2.5 rounded-xl text-xs font-semibold leading-snug bg-rose-50 dark:bg-rose-950/50 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800 block";
  box.textContent = message;
}

// Decode Google JWT Credential dari Google Identity Services
function parseGoogleJwt(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  } catch(e) {
    return null;
  }
}

// Handler callback saat Google GSI mengembalikan credential resmi
function handleGoogleCredentialResponse(response) {
  if (!response || !response.credential) return;
  const payload = parseGoogleJwt(response.credential);
  if (!payload || !payload.email) {
    showAuthAlert("Gagal memverifikasi akun Google. Silakan coba lagi.", false);
    return;
  }

  const name = payload.name || payload.given_name || "Pejuang PTN";
  const email = payload.email;
  const avatar = "👨‍🎓";

  if (typeof loginOrRegisterWithGoogle === "function") {
    const res = loginOrRegisterWithGoogle({ name, email, avatar, googleId: payload.sub });
    if (res.success) {
      closeAuthModal();
      closeGoogleAuthModal();
      showAuthAlert(res.message, true);
      triggerConfetti();
      onUserSessionChanged();
      if (pendingTargetTab) {
        const target = pendingTargetTab;
        pendingTargetTab = null;
        switchTab(target);
      }
    } else {
      showAuthAlert(res.message, false);
    }
  }
}

// Trigger saat tombol "Lanjutkan dengan Google / Gmail" diklik
function handleGoogleSignInClick() {
  // Jika Google GIS SDK tersedia dan Google Client ID terkonfigurasi, trigger prompt resmi
  if (window.google && window.google.accounts && window.google.accounts.id && window.GOOGLE_CLIENT_ID) {
    try {
      window.google.accounts.id.initialize({
        client_id: window.GOOGLE_CLIENT_ID,
        callback: handleGoogleCredentialResponse
      });
      window.google.accounts.id.prompt();
      return;
    } catch(err) {
      console.warn("Google GIS prompt fallback:", err);
    }
  }

  // Fast-track Google Modal: Cukup masukkan Gmail untuk langsung masuk/daftar seketika
  openGoogleAuthModal();
}

async function handleGoogleFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("g-name").value.trim();
  const email = document.getElementById("g-email").value.trim();

  const submitBtn = document.getElementById("btn-submit-google-form");
  const originalHtml = submitBtn ? submitBtn.innerHTML : "Masuk";
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Menghubungkan Akun Google... ⏳</span>`;
  }

  if (typeof loginOrRegisterWithGoogle === "function") {
    const res = loginOrRegisterWithGoogle({ name, email, avatar: "👨‍🎓" });
    if (res.success) {
      showGoogleAuthAlert(res.message, true);
      triggerConfetti();
      setTimeout(() => {
        closeGoogleAuthModal();
        closeAuthModal();
        onUserSessionChanged();
        if (pendingTargetTab) {
          const target = pendingTargetTab;
          pendingTargetTab = null;
          switchTab(target);
        }
      }, 700);
    } else {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalHtml;
      }
      showGoogleAuthAlert(res.message, false);
    }
  }
}

window.handleGoogleSignInClick = handleGoogleSignInClick;
window.handleGoogleFormSubmit = handleGoogleFormSubmit;
window.openGoogleAuthModal = openGoogleAuthModal;
window.closeGoogleAuthModal = closeGoogleAuthModal;
window.handleGoogleCredentialResponse = handleGoogleCredentialResponse;

function handleLogout() {
  const user = typeof getCurrentUser === "function" ? getCurrentUser() : null;
  const name = user ? user.name : "Teman";
  if (confirm(`Apakah kamu yakin ingin keluar dari akun "${name}" di perangkat ini?`)) {
    if (typeof logoutUser === "function") {
      logoutUser();
    }
    renderHeaderStats();
    openAuthModal("login", true);
    showAuthAlert("Kamu telah keluar. Silakan masuk kembali dengan akunmu atau buat akun baru di bawah.", false);
  }
}

// Callback saat sesi pengguna berganti (Login / Register / Switch Account)
function onUserSessionChanged() {
  const profile = getUserProfile();
  const user = typeof getCurrentUser === "function" ? getCurrentUser() : null;

  // Terapkan preferensi tema user
  if (user && user.theme) {
    applyTheme(user.theme, false);
  }

  // Refresh UI Header Stats
  renderHeaderStats();

  // Reset CBT berjalan
  currentCbtSession = null;
  currentReviewResult = null;

  // Refresh tab aktif dengan data user baru
  if (activeTab === "dashboard") renderDashboard();
  if (activeTab === "drill") renderDrillMode();
  if (activeTab === "cbt") renderCbtMode();
  if (activeTab === "rapor") renderRaporView();
  if (activeTab === "bank-soal") renderBankSoal();
  if (activeTab === "flashcards") renderFlashcards();
  if (activeTab === "ptn-explorer") renderPtnExplorer();
  if (activeTab === "leaderboard") renderLeaderboard();
  if (activeTab === "profile") renderProfileView();

  // Re-init modal setting
  initSettingsModal();

  showXpNotification(0, `Akun aktif: ${profile.name.split(" ")[0]} 👋`);
}

// Window Global Hooks
window.switchTab = switchTab;
window.renderDashboard = renderDashboard;
window.renderDrillMode = renderDrillMode;
window.renderCbtMode = renderCbtMode;
window.renderRaporView = renderRaporView;
window.renderBankSoal = renderBankSoal;
window.renderFlashcards = renderFlashcards;
window.renderPtnExplorer = renderPtnExplorer;
window.renderLeaderboard = renderLeaderboard;
window.renderProfileView = renderProfileView;
window.handleSelectProfileAvatar = handleSelectProfileAvatar;
window.handleSaveProfileForm = handleSaveProfileForm;
window.renderLatex = renderLatex;
window.initTheme = initTheme;
window.toggleTheme = toggleTheme;
window.applyTheme = applyTheme;
window.updateThemeButtonUI = updateThemeButtonUI;
window.toggleUserDropdown = toggleUserDropdown;
window.closeUserDropdown = closeUserDropdown;
window.openAuthModal = openAuthModal;
window.closeAuthModal = closeAuthModal;
window.switchAuthTab = switchAuthTab;
window.handleLoginSubmit = handleLoginSubmit;
window.handleRegisterSubmit = handleRegisterSubmit;
window.handleLogout = handleLogout;
window.onUserSessionChanged = onUserSessionChanged;
window.setFontScale = setFontScale;
window.showXpToast = showXpToast;
window.claimDailyQuest = claimDailyQuest;
window.renderDailyQuests = renderDailyQuests;
window.switchDrillExpTab = switchDrillExpTab;
window.updateCountdownValues = updateCountdownValues;
window.initLiveOnlineCounter = initLiveOnlineCounter;
window.setLeaderboardPeriod = setLeaderboardPeriod;
window.setFlashcardCategory = setFlashcardCategory;
window.onFlashcardSearch = onFlashcardSearch;
window.shuffleFlashcards = shuffleFlashcards;
window.resetFlashcardProgress = resetFlashcardProgress;
window.restartFlashcards = restartFlashcards;
window.flipFlashcard = flipFlashcard;
window.nextFlashcard = nextFlashcard;
window.prevFlashcard = prevFlashcard;
window.markFlashcardLearned = markFlashcardLearned;
window.selectCbtOption = selectCbtOption;
window.cbtToggleDoubtful = cbtToggleDoubtful;
window.cbtPrev = cbtPrev;
window.cbtNext = cbtNext;
window.cbtJumpTo = cbtJumpTo;
window.confirmFinishCbt = confirmFinishCbt;
window.updateCbtPaletteButton = updateCbtPaletteButton;
window.renderPtnSimpleList = renderPtnSimpleList;
window.renderPtnItemsOnly = renderPtnItemsOnly;
window.setPtnCategoryFilter = setPtnCategoryFilter;
window.onPtnSearchInput = onPtnSearchInput;
window.openPtnDetail = openPtnDetail;
window.backToPtnList = backToPtnList;
window.renderPtnDetail = renderPtnDetail;
window.onDetailProdiSearch = onDetailProdiSearch;
window.setDetailCategoryFilter = setDetailCategoryFilter;
window.setDetailDegreeFilter = setDetailDegreeFilter;
window.setTargetChoice = setTargetChoice;


