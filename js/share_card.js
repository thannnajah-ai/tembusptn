/**
 * TembusPTN - Viral Loop & Aesthetic Share Card Generator
 * Generates 9:16 Portrait (1080x1920) Score Certificates for IG Stories & WA Status
 * Supports Native Web Share API, WhatsApp 1-Click Viral Links, and PNG Downloads.
 */

(function () {
  'use strict';

  // Helper: Round Rectangle Drawing on Canvas
  function drawRoundRect(ctx, x, y, width, height, radius, fill, stroke) {
    if (typeof radius === 'number') {
      radius = { tl: radius, tr: radius, br: radius, bl: radius };
    } else {
      radius = Object.assign({ tl: 0, tr: 0, br: 0, bl: 0 }, radius);
    }
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
    if (fill) ctx.fill();
    if (stroke) ctx.stroke();
  }

  // Helper: Load Image safely into Image object
  function loadImage(src) {
    return new Promise((resolve) => {
      if (!src) return resolve(null);
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = () => resolve(null);
      img.src = src;
    });
  }

  // Helper: Format Date in Indonesian
  function formatIndoDate(dateObj) {
    const d = dateObj || new Date();
    const months = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  }

  /**
   * Generates a 1080x1920 (9:16 Portrait) Aesthetic Score Story Card Canvas
   */
  async function generateScoreCardCanvas(data) {
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1920;
    const ctx = canvas.getContext('2d');

    const score = Number(data.overallScore || 0);
    const studentName = data.studentName || 'Pejuang PTN 2026';
    const target1Name = data.target1Name || 'Pilihan 1 Belum Dipilih';
    const target1Ptn = data.target1Ptn || '-';
    const target1Chance = data.target1Chance || '-';
    const target2Name = data.target2Name || 'Pilihan 2 Belum Dipilih';
    const target2Ptn = data.target2Ptn || '-';
    const target2Chance = data.target2Chance || '-';
    const strongestSub = data.strongestSubtest || 'Penalaran Umum';
    const strongestScore = data.strongestScore || '-';
    const dateStr = formatIndoDate(data.date ? new Date(data.date) : new Date());

    // 1. Background Deep Space Gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 1080, 1920);
    bgGrad.addColorStop(0, '#040714');
    bgGrad.addColorStop(0.35, '#0b1329');
    bgGrad.addColorStop(0.7, '#080d1e');
    bgGrad.addColorStop(1, '#020617');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1080, 1920);

    // 2. Glow Orbs
    // Top-Right Indigo Glow
    const glow1 = ctx.createRadialGradient(900, 200, 50, 900, 200, 600);
    glow1.addColorStop(0, 'rgba(99, 102, 241, 0.35)');
    glow1.addColorStop(0.5, 'rgba(79, 70, 229, 0.12)');
    glow1.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = glow1;
    ctx.fillRect(400, 0, 680, 800);

    // Center-Left Amber/Violet Glow
    const glow2 = ctx.createRadialGradient(150, 950, 50, 150, 950, 550);
    glow2.addColorStop(0, 'rgba(245, 158, 11, 0.18)');
    glow2.addColorStop(0.6, 'rgba(168, 85, 247, 0.08)');
    glow2.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = glow2;
    ctx.fillRect(0, 500, 600, 900);

    // Bottom Glow
    const glow3 = ctx.createRadialGradient(540, 1850, 50, 540, 1850, 500);
    glow3.addColorStop(0, 'rgba(59, 130, 246, 0.22)');
    glow3.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = glow3;
    ctx.fillRect(100, 1400, 880, 520);

    // 3. Subtle Futuristic Grid Lines (Low opacity)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.lineWidth = 1.5;
    for (let x = 80; x < 1080; x += 100) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 1920);
      ctx.stroke();
    }
    for (let y = 80; y < 1920; y += 100) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(1080, y);
      ctx.stroke();
    }

    // Outer Card Border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 2;
    drawRoundRect(ctx, 40, 40, 1000, 1840, 40, false, true);

    // 4. Header: Logo & Branding
    const logoImg = await loadImage('assets/logo.png');
    if (logoImg) {
      // Draw circular clip logo
      ctx.save();
      ctx.beginPath();
      ctx.arc(115, 135, 42, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(logoImg, 73, 93, 84, 84);
      ctx.restore();

      ctx.strokeStyle = 'rgba(251, 191, 36, 0.8)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(115, 135, 43, 0, Math.PI * 2);
      ctx.stroke();
    } else {
      // Fallback Logo Badge
      ctx.fillStyle = '#4f46e5';
      drawRoundRect(ctx, 75, 95, 80, 80, 24, true, false);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 36px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('TP', 115, 148);
    }

    // Header Text
    ctx.textAlign = 'left';
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 38px sans-serif';
    ctx.fillText('TEMBUSPTN', 180, 130);

    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText('SIMULASI CBT UTBK SNBT 2026', 180, 160);

    // Official Badge Pill (Top Right)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1.5;
    drawRoundRect(ctx, 770, 100, 230, 60, 30, true, true);

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 20px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('✓ OFFICIAL REPORT', 885, 138);

    // Divider
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.beginPath();
    ctx.moveTo(80, 215);
    ctx.lineTo(1000, 215);
    ctx.stroke();

    // 5. Student Profile Header
    // Profile Box
    ctx.fillStyle = 'rgba(15, 23, 42, 0.7)';
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.35)';
    ctx.lineWidth = 2;
    drawRoundRect(ctx, 80, 245, 920, 130, 28, true, true);

    // Avatar Circle
    ctx.fillStyle = '#312e81';
    drawRoundRect(ctx, 110, 265, 90, 90, 45, true, false);
    ctx.fillStyle = '#ffffff';
    ctx.font = '42px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(data.avatar || '🎓', 155, 325);

    // Student Info Text
    ctx.textAlign = 'left';
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText('PESERTA TRY OUT NASIONAL', 225, 295);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 36px sans-serif';
    let displayName = studentName;
    if (displayName.length > 24) displayName = displayName.substring(0, 22) + '...';
    ctx.fillText(displayName, 225, 340);

    // Date (Right aligned in Profile Box)
    ctx.textAlign = 'right';
    ctx.fillStyle = '#64748b';
    ctx.font = 'bold 18px sans-serif';
    ctx.fillText('Tanggal Ujian', 960, 295);
    ctx.fillStyle = '#cbd5e1';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText(dateStr, 960, 335);

    // 6. Huge IRT Score Showcase Card
    const scoreBoxY = 405;
    const scoreBoxH = 430;

    // Outer glow for score box
    const scoreBoxGrad = ctx.createLinearGradient(80, scoreBoxY, 1000, scoreBoxY + scoreBoxH);
    scoreBoxGrad.addColorStop(0, 'rgba(30, 27, 75, 0.85)');
    scoreBoxGrad.addColorStop(0.5, 'rgba(15, 23, 42, 0.95)');
    scoreBoxGrad.addColorStop(1, 'rgba(24, 24, 48, 0.85)');
    ctx.fillStyle = scoreBoxGrad;
    ctx.strokeStyle = 'rgba(251, 191, 36, 0.5)';
    ctx.lineWidth = 3;
    drawRoundRect(ctx, 80, scoreBoxY, 920, scoreBoxH, 36, true, true);

    // Section Tag
    ctx.textAlign = 'center';
    ctx.fillStyle = '#fbbf24';
    ctx.font = '900 22px sans-serif';
    ctx.fillText('SKOR EVALUASI IRT (ITEM RESPONSE THEORY)', 540, scoreBoxY + 55);

    // Big Score Number
    const scoreTextGrad = ctx.createLinearGradient(350, scoreBoxY + 70, 730, scoreBoxY + 230);
    scoreTextGrad.addColorStop(0, '#ffffff');
    scoreTextGrad.addColorStop(0.5, '#fef08a');
    scoreTextGrad.addColorStop(1, '#f59e0b');
    ctx.fillStyle = scoreTextGrad;
    ctx.font = '900 135px sans-serif';
    ctx.fillText(`${score}`, 500, scoreBoxY + 195);

    ctx.fillStyle = '#64748b';
    ctx.font = 'bold 46px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('/ 850', 655, scoreBoxY + 195);

    // Score Status Pill
    let statusLabel = 'POTENSIAL LOLOS PTN FAVORIT';
    let statusBg = 'rgba(16, 185, 129, 0.2)';
    let statusBorder = 'rgba(52, 211, 153, 0.6)';
    let statusColor = '#34d399';

    if (score >= 700) {
      statusLabel = '🌟 TINGKAT KOMPETITIF SANGAT TINGGI (TOP 5% NASIONAL)';
      statusBg = 'rgba(245, 158, 11, 0.25)';
      statusBorder = 'rgba(251, 191, 36, 0.8)';
      statusColor = '#fbbf24';
    } else if (score >= 600) {
      statusLabel = '🔥 AMAN UNTUK JURUSAN & PTN KELAS 1';
      statusBg = 'rgba(14, 165, 233, 0.25)';
      statusBorder = 'rgba(56, 189, 248, 0.7)';
      statusColor = '#38bdf8';
    } else if (score >= 500) {
      statusLabel = '📈 BERPELUANG TINGGI — SIAP DIGENJOT LAGI!';
      statusBg = 'rgba(129, 140, 248, 0.2)';
      statusBorder = 'rgba(165, 180, 252, 0.6)';
      statusColor = '#a5b4fc';
    } else {
      statusLabel = '💪 LANGKAH AWAL BAGUS — TERUS BERLATIH!';
      statusBg = 'rgba(244, 63, 94, 0.2)';
      statusBorder = 'rgba(251, 113, 133, 0.6)';
      statusColor = '#fb7185';
    }

    ctx.fillStyle = statusBg;
    ctx.strokeStyle = statusBorder;
    ctx.lineWidth = 2;
    drawRoundRect(ctx, 160, scoreBoxY + 235, 760, 60, 30, true, true);

    ctx.fillStyle = statusColor;
    ctx.font = '900 21px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(statusLabel, 540, scoreBoxY + 273);

    // Mini Stats Row inside Score Box (Subtes Terkuat & Bobot HOTS)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    drawRoundRect(ctx, 110, scoreBoxY + 315, 860, 85, 20, true, true);

    // Col 1: Subtes Terkuat
    ctx.textAlign = 'left';
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 17px sans-serif';
    ctx.fillText('SUBTES TERKUAT', 140, scoreBoxY + 348);
    ctx.fillStyle = '#34d399';
    ctx.font = '900 22px sans-serif';
    let strongDisplay = `${strongestSub} (${strongestScore})`;
    if (strongDisplay.length > 30) strongDisplay = strongDisplay.substring(0, 28) + '...';
    ctx.fillText(`⚡ ${strongDisplay}`, 140, scoreBoxY + 382);

    // Col 2: Sistem Penilaian
    ctx.textAlign = 'right';
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 17px sans-serif';
    ctx.fillText('STANDAR PENILAIAN', 940, scoreBoxY + 348);
    ctx.fillStyle = '#f8fafc';
    ctx.font = '900 22px sans-serif';
    ctx.fillText('Standar BPPP SNPMB 2026', 940, scoreBoxY + 382);

    // 7. Target PTN Rationalization Cards (Dual Cards)
    const ptnSectionY = 865;

    ctx.textAlign = 'left';
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 28px sans-serif';
    ctx.fillText('🎯 Rasionalisasi Peluang Kelulusan PTN', 80, ptnSectionY);

    // Card 1: Pilihan 1 Utama
    const card1Y = ptnSectionY + 25;
    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
    ctx.lineWidth = 2;
    drawRoundRect(ctx, 80, card1Y, 920, 195, 28, true, true);

    // Choice Tag
    ctx.fillStyle = '#f59e0b';
    drawRoundRect(ctx, 110, card1Y + 25, 165, 40, 12, true, false);
    ctx.fillStyle = '#0f172a';
    ctx.font = '900 18px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('PILIHAN 1 🎯', 192, card1Y + 52);

    // Major & Univ
    ctx.textAlign = 'left';
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 32px sans-serif';
    let maj1Str = target1Name;
    if (maj1Str.length > 28) maj1Str = maj1Str.substring(0, 26) + '...';
    ctx.fillText(maj1Str, 110, card1Y + 115);

    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 22px sans-serif';
    ctx.fillText(target1Ptn, 110, card1Y + 155);

    // Chance Badge Right Side
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2;
    drawRoundRect(ctx, 770, card1Y + 35, 200, 125, 24, true, true);

    ctx.textAlign = 'center';
    ctx.fillStyle = '#fef08a';
    ctx.font = 'bold 17px sans-serif';
    ctx.fillText('PELUANG LOLOS', 870, card1Y + 72);
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 46px sans-serif';
    ctx.fillText(target1Chance !== '-' ? `${target1Chance}%` : 'Tinggi', 870, card1Y + 130);

    // Card 2: Pilihan 2 Cadangan
    const card2Y = card1Y + 220;
    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.4)';
    ctx.lineWidth = 2;
    drawRoundRect(ctx, 80, card2Y, 920, 195, 28, true, true);

    // Choice Tag
    ctx.fillStyle = '#6366f1';
    drawRoundRect(ctx, 110, card2Y + 25, 165, 40, 12, true, false);
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 18px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('PILIHAN 2 🛡️', 192, card2Y + 52);

    // Major & Univ
    ctx.textAlign = 'left';
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 32px sans-serif';
    let maj2Str = target2Name;
    if (maj2Str.length > 28) maj2Str = maj2Str.substring(0, 26) + '...';
    ctx.fillText(maj2Str, 110, card2Y + 115);

    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 22px sans-serif';
    ctx.fillText(target2Ptn, 110, card2Y + 155);

    // Chance Badge Right Side
    ctx.fillStyle = 'rgba(99, 102, 241, 0.15)';
    ctx.strokeStyle = '#818cf8';
    ctx.lineWidth = 2;
    drawRoundRect(ctx, 770, card2Y + 35, 200, 125, 24, true, true);

    ctx.textAlign = 'center';
    ctx.fillStyle = '#c7d2fe';
    ctx.font = 'bold 17px sans-serif';
    ctx.fillText('PELUANG LOLOS', 870, card2Y + 72);
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 46px sans-serif';
    ctx.fillText(target2Chance !== '-' ? `${target2Chance}%` : 'Aman', 870, card2Y + 130);

    // 8. Why TembusPTN Feature Pill Highlights
    const featY = card2Y + 225;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1.5;
    drawRoundRect(ctx, 80, featY, 920, 115, 24, true, true);

    const perks = [
      '📚 1.800+ Bank Soal Bimbel',
      '⚡ Timer Mirip Asli',
      '📊 Analisis 7 Subtes UTBK'
    ];
    perks.forEach((p, idx) => {
      ctx.textAlign = 'center';
      ctx.fillStyle = '#e2e8f0';
      ctx.font = 'bold 20px sans-serif';
      ctx.fillText(p, 230 + idx * 310, featY + 68);
    });

    // 9. Viral CTA Footer
    const footerY = 1660;
    const footerGrad = ctx.createLinearGradient(80, footerY, 1000, footerY + 190);
    footerGrad.addColorStop(0, '#1e1b4b');
    footerGrad.addColorStop(1, '#0f172a');
    ctx.fillStyle = footerGrad;
    ctx.strokeStyle = 'rgba(129, 140, 248, 0.5)';
    ctx.lineWidth = 2;
    drawRoundRect(ctx, 80, footerY, 920, 190, 32, true, true);

    ctx.textAlign = 'center';
    ctx.fillStyle = '#f8fafc';
    ctx.font = '900 24px sans-serif';
    ctx.fillText('Cek Kemampuan & Simulasi UTBK Kamu Sekarang!', 540, footerY + 58);

    // Domain highlight button box
    ctx.fillStyle = '#4f46e5';
    drawRoundRect(ctx, 220, footerY + 85, 640, 70, 35, true, false);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 32px sans-serif';
    ctx.fillText('🚀 https://tembusptn.my.id', 540, footerY + 132);

    return canvas;
  }

  /**
   * Generates Aesthetic Leaderboard Trophy Card Canvas
   */
  async function generateLeaderboardCardCanvas(data) {
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1920;
    const ctx = canvas.getContext('2d');

    const rank = Number(data.rank || 1);
    const xp = Number(data.xp || 0);
    const studentName = data.studentName || 'Pejuang PTN';
    const ptn = data.ptn || 'Universitas Indonesia';
    const dateStr = formatIndoDate(new Date());

    // Background
    const bgGrad = ctx.createLinearGradient(0, 0, 1080, 1920);
    bgGrad.addColorStop(0, '#020617');
    bgGrad.addColorStop(0.5, '#0f172a');
    bgGrad.addColorStop(1, '#090d16');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1080, 1920);

    // Gold / Purple Ambient Glow
    const glow1 = ctx.createRadialGradient(540, 450, 50, 540, 450, 600);
    glow1.addColorStop(0, 'rgba(245, 158, 11, 0.25)');
    glow1.addColorStop(0.6, 'rgba(168, 85, 247, 0.12)');
    glow1.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = glow1;
    ctx.fillRect(0, 0, 1080, 900);

    // Grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.lineWidth = 1.5;
    for (let x = 80; x < 1080; x += 100) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 1920);
      ctx.stroke();
    }

    // Outer Border
    ctx.strokeStyle = 'rgba(251, 191, 36, 0.3)';
    ctx.lineWidth = 2;
    drawRoundRect(ctx, 40, 40, 1000, 1840, 40, false, true);

    // Header Branding
    const logoImg = await loadImage('assets/logo.png');
    if (logoImg) {
      ctx.drawImage(logoImg, 80, 100, 75, 75);
    }
    ctx.textAlign = 'left';
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 36px sans-serif';
    ctx.fillText('TEMBUSPTN', 175, 138);
    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText('LEADERBOARD UTBK NASIONAL', 175, 168);

    // Huge Crown / Trophy Graphic
    ctx.textAlign = 'center';
    ctx.font = '140px sans-serif';
    ctx.fillText(rank === 1 ? '👑' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : '🏆', 540, 430);

    // Rank Badge Pill
    ctx.fillStyle = rank === 1 ? '#f59e0b' : '#4f46e5';
    drawRoundRect(ctx, 300, 480, 480, 80, 40, true, false);
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 36px sans-serif';
    ctx.fillText(`PERINGKAT #${rank} NASIONAL`, 540, 535);

    // Student Card Box
    ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 2;
    drawRoundRect(ctx, 80, 610, 920, 320, 36, true, true);

    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 22px sans-serif';
    ctx.fillText('PEJUANG PTN TERBAIK', 540, 675);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 52px sans-serif';
    ctx.fillText(studentName, 540, 750);

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 28px sans-serif';
    ctx.fillText(`🎯 Target: ${ptn}`, 540, 810);

    ctx.fillStyle = '#64748b';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText(`Tercatat pada: ${dateStr}`, 540, 875);

    // Big XP Showcase Box
    ctx.fillStyle = 'rgba(30, 27, 75, 0.8)';
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 3;
    drawRoundRect(ctx, 80, 970, 920, 360, 36, true, true);

    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 26px sans-serif';
    ctx.fillText('TOTAL PEROLEHAN PENGALAMAN (XP)', 540, 1050);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 130px sans-serif';
    ctx.fillText(`${xp}`, 540, 1200);

    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'bold 24px sans-serif';
    ctx.fillText('⚡ XP dikumpulkan dari Try Out Resmi & Drill Bank Soal INTEN', 540, 1275);

    // Challenge Callout Box
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2;
    drawRoundRect(ctx, 80, 1370, 920, 240, 32, true, true);

    ctx.fillStyle = '#fbbf24';
    ctx.font = '900 32px sans-serif';
    ctx.fillText('⚔️ TANTANGAN UNTUK TEMAN SEKELAS:', 540, 1440);

    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 26px sans-serif';
    ctx.fillText('Apakah kamu berani tandingi peringkat & skor ini?', 540, 1500);
    ctx.fillText('Uji kemampuanmu di simulasi UTBK SNBT terlengkap!', 540, 1545);

    // Footer
    const footerY = 1660;
    ctx.fillStyle = '#4f46e5';
    drawRoundRect(ctx, 80, footerY, 920, 180, 36, true, false);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 24px sans-serif';
    ctx.fillText('GABUNG KOMPETISI PERINGKAT NASIONAL GRATIS DI:', 540, footerY + 65);
    ctx.font = '900 36px sans-serif';
    ctx.fillText('👉 https://tembusptn.my.id', 540, footerY + 125);

    return canvas;
  }

  /**
   * Viral WhatsApp text generator for Try Out Score
   */
  function buildScoreShareText(data) {
    const score = data.overallScore || 0;
    const name = data.studentName || 'Saya';
    const maj1 = data.target1Name || 'Pilihan 1';
    const ptn1 = data.target1Ptn || '';
    const ch1 = data.target1Chance ? ` (Peluang: ${data.target1Chance}%)` : '';
    const maj2 = data.target2Name || '';
    const ptn2 = data.target2Ptn || '';
    const ch2 = data.target2Chance ? ` (Peluang: ${data.target2Chance}%)` : '';

    let text = `Alhamdulillah! Skor Try Out CBT UTBK SNBT saya tembus *${score} / 850* di TembusPTN! 🎓🔥\n\n`;
    text += `🎯 *Pilihan 1:* ${maj1} - ${ptn1}${ch1}\n`;
    if (maj2 && maj2 !== '-') {
      text += `🛡️ *Pilihan 2:* ${maj2} - ${ptn2}${ch2}\n`;
    }
    text += `\nYuk cek peluang lolos PTN impianmu dan latihan 1.800+ bank soal INTEN resmi secara gratis di:\n👉 https://tembusptn.my.id`;
    return text;
  }

  /**
   * Viral WhatsApp text generator for Leaderboard
   */
  function buildLeaderboardShareText(data) {
    const rank = data.rank || 1;
    const xp = data.xp || 0;
    const name = data.studentName || 'Saya';
    const ptn = data.ptn || 'PTN Impian';

    let text = `🔥 *Tantangan Adu Skor UTBK SNBT 2026!* 🔥\n\n`;
    text += `Saya baru saja meraih *Peringkat #${rank}* dengan *${xp} XP* di Leaderboard Nasional TembusPTN (Target: ${ptn})! 🏆⚡\n\n`;
    text += `Berani tandingi peringkat dan skor saya? Buktikan kemampuanmu di simulasi CBT UTBK gratis:\n👉 https://tembusptn.my.id`;
    return text;
  }

  /**
   * Opens WhatsApp with prefilled text
   */
  function shareToWhatsApp(text) {
    const encoded = encodeURIComponent(text);
    const url = `https://api.whatsapp.com/send?text=${encoded}`;
    window.open(url, '_blank');
  }

  /**
   * Copies text to clipboard with notification
   */
  async function copyToClipboard(text, successMessage = 'Teks berhasil disalin ke clipboard! 📋') {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
      }
      if (typeof showXpToast === 'function') {
        showXpToast(0, successMessage);
      } else {
        alert(successMessage);
      }
    } catch (e) {
      console.warn('Clipboard copy error:', e);
    }
  }

  /**
   * Downloads a Canvas as PNG file
   */
  function downloadCanvasAsPng(canvas, filename) {
    try {
      const dataUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = filename || 'TembusPTN-Hasil-UTBK.png';
      document.body.appendChild(a);
      a.click();
      a.remove();
      if (typeof showXpToast === 'function') {
        showXpToast(10, 'Kartu Berhasil Diunduh! Simpan & Unggah ke Story/Status 📸');
      }
    } catch (e) {
      console.error('Download canvas error:', e);
    }
  }

  /**
   * Native Share API (shares file blob directly to IG/WA/Telegram if supported)
   */
  async function nativeShareCanvas(canvas, filename, text) {
    if (!navigator.canShare || !navigator.share) {
      // Fallback to WA
      shareToWhatsApp(text);
      return;
    }

    try {
      canvas.toBlob(async (blob) => {
        if (!blob) {
          shareToWhatsApp(text);
          return;
        }
        const file = new File([blob], filename || 'TembusPTN-Skor.png', { type: 'image/png' });
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: 'Hasil Evaluasi UTBK TembusPTN',
            text: text,
            files: [file]
          });
        } else {
          await navigator.share({
            title: 'Hasil Evaluasi UTBK TembusPTN',
            text: text,
            url: 'https://tembusptn.my.id'
          });
        }
      }, 'image/png');
    } catch (err) {
      if (err.name !== 'AbortError') {
        console.warn('Native share failed, fallback to WA:', err);
        shareToWhatsApp(text);
      }
    }
  }

  /**
   * Modal: Preview & Share Aesthetic Score Card (IG Story / WA Status)
   */
  async function openScoreShareModal(data) {
    const existing = document.getElementById('share-score-modal');
    if (existing) existing.remove();

    // Show loading indicator
    const loadingToast = document.createElement('div');
    loadingToast.id = 'share-card-loading';
    loadingToast.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm';
    loadingToast.innerHTML = `
      <div class="bg-slate-900 border border-slate-700 text-white rounded-2xl p-6 flex flex-col items-center gap-3 shadow-2xl">
        <div class="w-10 h-10 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
        <div class="text-sm font-bold">Mendesain Kartu Skor Estetik...</div>
        <div class="text-xs text-slate-400">Ukuran pas untuk Instagram Story & WA Status</div>
      </div>
    `;
    document.body.appendChild(loadingToast);

    try {
      const canvas = await generateScoreCardCanvas(data);
      const dataUrl = canvas.toDataURL('image/png');
      const shareText = buildScoreShareText(data);
      const cleanName = (data.studentName || 'Siswa').replace(/[^a-zA-Z0-9]/g, '_');
      const fileName = `TembusPTN-Skor-${cleanName}-${Date.now()}.png`;

      loadingToast.remove();

      const modal = document.createElement('div');
      modal.id = 'share-score-modal';
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-4 overflow-y-auto animate-fade-in';
      modal.innerHTML = `
        <div class="bg-slate-900 border border-slate-700/80 text-white rounded-3xl max-w-lg w-full p-4 sm:p-6 shadow-2xl relative my-auto flex flex-col max-h-[92vh]">
          <!-- Close button -->
          <button id="btn-close-share-modal" class="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition border border-slate-700 text-lg">
            ✕
          </button>

          <!-- Modal Header -->
          <div class="mb-3 pr-8">
            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-amber-400/20 text-amber-300 border border-amber-400/40 uppercase tracking-wider">
              📸 Format IG Story & WA Status (9:16)
            </span>
            <h3 class="text-lg sm:text-xl font-black text-white mt-1">Kartu Skor Hasil Try Out Kamu</h3>
            <p class="text-xs text-slate-400">Siap diunduh untuk pamer di Story, atau langsung dibagikan ke WhatsApp teman.</p>
          </div>

          <!-- Card Image Preview with Scroll -->
          <div class="flex-1 overflow-y-auto rounded-2xl border border-slate-700/80 bg-slate-950/60 p-2 flex items-center justify-center min-h-[300px] sm:min-h-[380px] shadow-inner">
            <img src="${dataUrl}" alt="Preview Kartu Skor TembusPTN" class="max-h-[50vh] w-auto rounded-xl shadow-2xl object-contain border border-slate-800" />
          </div>

          <!-- Viral Share Actions -->
          <div class="mt-4 space-y-2.5">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <!-- Download Button -->
              <button id="btn-download-card" class="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-950 font-black text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 transition active:scale-95">
                <span>📸</span>
                <span>Unduh Gambar (.PNG)</span>
              </button>

              <!-- WhatsApp Share Button -->
              <button id="btn-wa-share" class="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 transition active:scale-95">
                <span>💬</span>
                <span>Kirim ke WhatsApp</span>
              </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <!-- Web Share API (Story / Other apps) -->
              <button id="btn-native-share" class="w-full py-2.5 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition">
                <span>🚀</span>
                <span>Bagikan Langsung (Story/App)</span>
              </button>

              <!-- Copy Text Link -->
              <button id="btn-copy-text" class="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 flex items-center justify-center gap-1.5 transition">
                <span>📋</span>
                <span>Salin Pesan & Link</span>
              </button>
            </div>
          </div>
        </div>
      `;

      document.body.appendChild(modal);

      // Event Handlers
      document.getElementById('btn-close-share-modal').onclick = () => modal.remove();
      modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
      };

      document.getElementById('btn-download-card').onclick = () => {
        downloadCanvasAsPng(canvas, fileName);
      };

      document.getElementById('btn-wa-share').onclick = () => {
        shareToWhatsApp(shareText);
      };

      document.getElementById('btn-native-share').onclick = () => {
        nativeShareCanvas(canvas, fileName, shareText);
      };

      document.getElementById('btn-copy-text').onclick = () => {
        copyToClipboard(shareText, 'Pesan viral & link TembusPTN berhasil disalin! Tinggal tempel di chat teman 💬');
      };
    } catch (err) {
      loadingToast.remove();
      console.error('Error creating score share modal:', err);
      alert('Gagal mendesain kartu skor: ' + err.message);
    }
  }

  /**
   * Modal: Preview & Share Leaderboard Trophy Card
   */
  async function openLeaderboardShareModal(data) {
    const existing = document.getElementById('share-lb-modal');
    if (existing) existing.remove();

    const loadingToast = document.createElement('div');
    loadingToast.id = 'share-card-loading';
    loadingToast.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm';
    loadingToast.innerHTML = `
      <div class="bg-slate-900 border border-slate-700 text-white rounded-2xl p-6 flex flex-col items-center gap-3 shadow-2xl">
        <div class="w-10 h-10 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
        <div class="text-sm font-bold">Mendesain Kartu Juara Leaderboard...</div>
      </div>
    `;
    document.body.appendChild(loadingToast);

    try {
      const canvas = await generateLeaderboardCardCanvas(data);
      const dataUrl = canvas.toDataURL('image/png');
      const shareText = buildLeaderboardShareText(data);
      const fileName = `TembusPTN-Rank-${data.rank || 1}-${Date.now()}.png`;

      loadingToast.remove();

      const modal = document.createElement('div');
      modal.id = 'share-lb-modal';
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-4 overflow-y-auto animate-fade-in';
      modal.innerHTML = `
        <div class="bg-slate-900 border border-slate-700/80 text-white rounded-3xl max-w-lg w-full p-4 sm:p-6 shadow-2xl relative my-auto flex flex-col max-h-[92vh]">
          <button id="btn-close-lb-modal" class="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition border border-slate-700 text-lg">
            ✕
          </button>

          <div class="mb-3 pr-8">
            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-amber-400/20 text-amber-300 border border-amber-400/40 uppercase tracking-wider">
              🏆 Kartu Peringkat Nasional
            </span>
            <h3 class="text-lg sm:text-xl font-black text-white mt-1">Tantang Teman Sekelas!</h3>
            <p class="text-xs text-slate-400">Bagikan pencapaian peringkatmu ke grup bimbel atau WhatsApp kelas.</p>
          </div>

          <div class="flex-1 overflow-y-auto rounded-2xl border border-slate-700/80 bg-slate-950/60 p-2 flex items-center justify-center min-h-[300px] sm:min-h-[380px] shadow-inner">
            <img src="${dataUrl}" alt="Preview Kartu Peringkat TembusPTN" class="max-h-[50vh] w-auto rounded-xl shadow-2xl object-contain border border-slate-800" />
          </div>

          <div class="mt-4 space-y-2.5">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button id="btn-lb-download" class="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-950 font-black text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 transition active:scale-95">
                <span>📸</span>
                <span>Unduh Gambar (.PNG)</span>
              </button>

              <button id="btn-lb-wa" class="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 transition active:scale-95">
                <span>💬</span>
                <span>Tantang di WhatsApp</span>
              </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button id="btn-lb-native" class="w-full py-2.5 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition">
                <span>🚀</span>
                <span>Bagikan Langsung (Story/App)</span>
              </button>

              <button id="btn-lb-copy" class="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 flex items-center justify-center gap-1.5 transition">
                <span>📋</span>
                <span>Salin Teks Tantangan</span>
              </button>
            </div>
          </div>
        </div>
      `;

      document.body.appendChild(modal);

      document.getElementById('btn-close-lb-modal').onclick = () => modal.remove();
      modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
      };

      document.getElementById('btn-lb-download').onclick = () => {
        downloadCanvasAsPng(canvas, fileName);
      };

      document.getElementById('btn-lb-wa').onclick = () => {
        shareToWhatsApp(shareText);
      };

      document.getElementById('btn-lb-native').onclick = () => {
        nativeShareCanvas(canvas, fileName, shareText);
      };

      document.getElementById('btn-lb-copy').onclick = () => {
        copyToClipboard(shareText, 'Tantangan adu skor berhasil disalin! Silakan kirim ke grup kelas/bimbel ⚔️');
      };
    } catch (err) {
      loadingToast.remove();
      console.error('Error creating leaderboard modal:', err);
      alert('Gagal mendesain kartu leaderboard: ' + err.message);
    }
  }

  // Export to Global Scope
  window.ShareCard = {
    generateScoreCardCanvas,
    generateLeaderboardCardCanvas,
    openScoreShareModal,
    openLeaderboardShareModal,
    buildScoreShareText,
    buildLeaderboardShareText,
    shareToWhatsApp,
    copyToClipboard,
    downloadCanvasAsPng,
    nativeShareCanvas
  };
})();
