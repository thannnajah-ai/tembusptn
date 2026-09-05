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

  // Helper: Multi-line text wrapping with line limit
  function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 2) {
    const words = (text || '').split(' ');
    let line = '';
    let lines = [];
    for (let n = 0; n < words.length; n++) {
      const testLine = line + (line ? ' ' : '') + words[n];
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && n > 0) {
        lines.push(line);
        line = words[n];
        if (lines.length === maxLines - 1) {
          const remaining = words.slice(n).join(' ');
          let lastLine = remaining;
          while (ctx.measureText(lastLine + '...').width > maxWidth && lastLine.length > 0) {
            const spaceIdx = lastLine.lastIndexOf(' ');
            if (spaceIdx === -1) {
              lastLine = lastLine.substring(0, lastLine.length - 1);
            } else {
              lastLine = lastLine.substring(0, spaceIdx);
            }
          }
          lines.push(lastLine ? lastLine + '...' : remaining.substring(0, 15) + '...');
          line = '';
          break;
        }
      } else {
        line = testLine;
      }
    }
    if (line && lines.length < maxLines) {
      lines.push(line);
    }
    for (let i = 0; i < lines.length; i++) {
      ctx.fillText(lines[i], x, y + (i * lineHeight));
    }
    return lines.length;
  }

  // Helper: Stylized High-Tech QR Code Vector Graphic
  function drawStylizedQr(ctx, x, y, size) {
    const modules = 25;
    const cellSize = size / modules;
    ctx.fillStyle = '#ffffff';
    drawRoundRect(ctx, x - 10, y - 10, size + 20, size + 20, 16, true, false);

    function drawFinder(fx, fy) {
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(x + fx * cellSize, y + fy * cellSize, 7 * cellSize, 7 * cellSize);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(x + (fx + 1) * cellSize, y + (fy + 1) * cellSize, 5 * cellSize, 5 * cellSize);
      ctx.fillStyle = '#4338ca';
      ctx.fillRect(x + (fx + 2) * cellSize, y + (fy + 2) * cellSize, 3 * cellSize, 3 * cellSize);
    }
    drawFinder(0, 0);
    drawFinder(modules - 7, 0);
    drawFinder(0, modules - 7);

    let seed = 42;
    function random() {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    }

    ctx.fillStyle = '#0f172a';
    for (let r = 0; r < modules; r++) {
      for (let c = 0; c < modules; c++) {
        if ((r < 8 && c < 8) || (r < 8 && c > modules - 9) || (r > modules - 9 && c < 8)) continue;
        if (r === 6 || c === 6) {
          if ((r + c) % 2 === 0) ctx.fillRect(x + c * cellSize, y + r * cellSize, cellSize, cellSize);
          continue;
        }
        if (random() > 0.58) {
          ctx.fillRect(x + c * cellSize, y + r * cellSize, cellSize, cellSize);
        }
      }
    }
  }

  /**
   * Generates a 1080x1920 (9:16 Portrait) Ultra-Modern Aesthetic Score Story Card Canvas
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
    const strongestSub = data.strongestSubtest || 'Penalaran Umum (PU)';
    const strongestScore = data.strongestScore || '-';
    const dateStr = formatIndoDate(data.date ? new Date(data.date) : new Date());

    // 1. Deep Space Cybernetic Mesh Gradient Background
    const bgGrad = ctx.createLinearGradient(0, 0, 1080, 1920);
    bgGrad.addColorStop(0, '#030712');
    bgGrad.addColorStop(0.3, '#090d1e');
    bgGrad.addColorStop(0.7, '#070b18');
    bgGrad.addColorStop(1, '#02040a');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1080, 1920);

    // Ambient Mesh Glows
    const glowTopRight = ctx.createRadialGradient(920, 160, 40, 920, 160, 650);
    glowTopRight.addColorStop(0, 'rgba(99, 102, 241, 0.35)');
    glowTopRight.addColorStop(0.5, 'rgba(124, 58, 237, 0.12)');
    glowTopRight.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = glowTopRight;
    ctx.fillRect(400, 0, 680, 800);

    const glowMidLeft = ctx.createRadialGradient(100, 850, 40, 100, 850, 600);
    glowMidLeft.addColorStop(0, 'rgba(245, 158, 11, 0.2)');
    glowMidLeft.addColorStop(0.6, 'rgba(234, 88, 12, 0.08)');
    glowMidLeft.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = glowMidLeft;
    ctx.fillRect(0, 450, 700, 850);

    const glowBottomCyan = ctx.createRadialGradient(540, 1850, 50, 540, 1850, 650);
    glowBottomCyan.addColorStop(0, 'rgba(6, 182, 212, 0.22)');
    glowBottomCyan.addColorStop(0.6, 'rgba(59, 130, 246, 0.08)');
    glowBottomCyan.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = glowBottomCyan;
    ctx.fillRect(100, 1400, 880, 520);

    // Subtle tech grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
    ctx.lineWidth = 1;
    for (let x = 60; x < 1080; x += 80) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 1920); ctx.stroke();
    }
    for (let y = 60; y < 1920; y += 80) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(1080, y); ctx.stroke();
    }

    // Outer Card Container Frame (Modern Floating Glass Card)
    const frameX = 45;
    const frameY = 45;
    const frameW = 990;
    const frameH = 1830;
    const frameRadius = 40;

    ctx.fillStyle = 'rgba(15, 23, 42, 0.4)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1.5;
    drawRoundRect(ctx, frameX, frameY, frameW, frameH, frameRadius, true, true);

    // 2. Header: Logo, Brand & Verification
    const logoImg = await loadImage('assets/logo.png');
    if (logoImg) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(125, 125, 42, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(logoImg, 83, 83, 84, 84);
      ctx.restore();

      ctx.strokeStyle = 'rgba(245, 158, 11, 0.7)';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(125, 125, 43, 0, Math.PI * 2);
      ctx.stroke();
    } else {
      ctx.fillStyle = '#4f46e5';
      drawRoundRect(ctx, 85, 85, 80, 80, 24, true, false);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 36px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('TP', 125, 138);
    }

    ctx.textAlign = 'left';
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 38px sans-serif';
    ctx.fillText('TEMBUS', 188, 122);

    const tembusMetrics = ctx.measureText('TEMBUS');
    ctx.fillStyle = '#f59e0b';
    ctx.fillText('PTN', 188 + tembusMetrics.width, 122);

    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 18px sans-serif';
    ctx.fillText('OFFICIAL CBT UTBK SNBT REPORT', 188, 152);

    // Verified Pill Top Right
    ctx.fillStyle = 'rgba(6, 182, 212, 0.12)';
    ctx.strokeStyle = 'rgba(6, 182, 212, 0.5)';
    ctx.lineWidth = 1.5;
    drawRoundRect(ctx, 755, 96, 240, 56, 28, true, true);

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 18px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('✓ HASIL RESMI CBT', 875, 131);

    // Top Divider
    const divGrad = ctx.createLinearGradient(frameX + 40, 185, frameX + frameW - 40, 185);
    divGrad.addColorStop(0, 'rgba(255, 255, 255, 0.02)');
    divGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.18)');
    divGrad.addColorStop(1, 'rgba(255, 255, 255, 0.02)');
    ctx.strokeStyle = divGrad;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(frameX + 30, 185);
    ctx.lineTo(frameX + frameW - 30, 185);
    ctx.stroke();

    // 3. Student Profile Glass Card
    const profY = 215;
    const profH = 145;
    ctx.fillStyle = 'rgba(15, 23, 42, 0.7)';
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.28)';
    ctx.lineWidth = 1.5;
    drawRoundRect(ctx, 80, profY, 920, profH, 28, true, true);

    // Avatar
    const avGrad = ctx.createLinearGradient(110, profY + 25, 205, profY + 120);
    avGrad.addColorStop(0, '#4338ca');
    avGrad.addColorStop(1, '#6366f1');
    ctx.fillStyle = avGrad;
    drawRoundRect(ctx, 110, profY + 25, 95, 95, 48, true, false);

    ctx.fillStyle = '#ffffff';
    ctx.font = '46px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(data.avatar || '🎓', 157, profY + 88);

    // Student Info
    ctx.textAlign = 'left';
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 17px sans-serif';
    ctx.fillText('PESERTA TRY OUT NASIONAL', 230, profY + 55);

    // Name with Smart Auto-fit (preventing ugly truncation!)
    ctx.fillStyle = '#ffffff';
    let nameFont = 34;
    ctx.font = '900 ' + nameFont + 'px sans-serif';
    while (ctx.measureText(studentName).width > 480 && nameFont > 24) {
      nameFont -= 2;
      ctx.font = '900 ' + nameFont + 'px sans-serif';
    }
    ctx.fillText(studentName, 230, profY + 98);

    // Right side date pill
    ctx.textAlign = 'right';
    ctx.fillStyle = '#64748b';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText('Tanggal Ujian', 960, profY + 55);
    ctx.fillStyle = '#cbd5e1';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText(dateStr, 960, profY + 95);

    // 4. Hero IRT Score Card Showcase
    const scoreY = 385;
    const scoreH = 475;

    // Gradient & Glass
    const scoreGrad = ctx.createLinearGradient(80, scoreY, 1000, scoreY + scoreH);
    scoreGrad.addColorStop(0, 'rgba(30, 27, 75, 0.7)');
    scoreGrad.addColorStop(0.5, 'rgba(15, 23, 42, 0.9)');
    scoreGrad.addColorStop(1, 'rgba(19, 24, 45, 0.7)');
    ctx.fillStyle = scoreGrad;
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.45)';
    ctx.lineWidth = 2.5;
    drawRoundRect(ctx, 80, scoreY, 920, scoreH, 36, true, true);

    // Section Top Pill
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.5)';
    ctx.lineWidth = 1.5;
    drawRoundRect(ctx, 240, scoreY + 28, 600, 48, 24, true, true);

    ctx.textAlign = 'center';
    ctx.fillStyle = '#fbbf24';
    ctx.font = '900 19px sans-serif';
    ctx.fillText('⚡ SKOR EVALUASI IRT (ITEM RESPONSE THEORY)', 540, scoreY + 59);

    // Score Big Number
    const scoreNumGrad = ctx.createLinearGradient(350, scoreY + 80, 700, scoreY + 220);
    scoreNumGrad.addColorStop(0, '#ffffff');
    scoreNumGrad.addColorStop(0.4, '#fef08a');
    scoreNumGrad.addColorStop(1, '#f59e0b');
    ctx.fillStyle = scoreNumGrad;
    ctx.font = '900 142px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${score}`, 480, scoreY + 205);

    ctx.fillStyle = '#64748b';
    ctx.font = 'bold 44px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('/ 850', 620, scoreY + 205);

    // IRT National Gauge Track (Visual Score Scale!)
    const gaugeX = 140;
    const gaugeY = scoreY + 235;
    const gaugeW = 800;
    const gaugeH = 12;

    // Background track
    const trackGrad = ctx.createLinearGradient(gaugeX, gaugeY, gaugeX + gaugeW, gaugeY);
    trackGrad.addColorStop(0, '#f43f5e');
    trackGrad.addColorStop(0.35, '#f59e0b');
    trackGrad.addColorStop(0.7, '#3b82f6');
    trackGrad.addColorStop(1, '#10b981');
    ctx.fillStyle = trackGrad;
    drawRoundRect(ctx, gaugeX, gaugeY, gaugeW, gaugeH, 6, true, false);

    // Pin location along 200..850
    const ratio = Math.max(0, Math.min(1, (score - 200) / 650));
    const pinX = gaugeX + ratio * gaugeW;

    // Pin Glow & Circle
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(pinX, gaugeY + 6, 12, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(pinX, gaugeY + 6, 12, 0, Math.PI * 2);
    ctx.stroke();

    // Scale Labels under gauge
    ctx.font = 'bold 15px sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.textAlign = 'left';
    ctx.fillText('200 (Min)', gaugeX, gaugeY + 34);
    ctx.textAlign = 'center';
    ctx.fillText('525 (Rata-rata Nasional)', gaugeX + gaugeW / 2, gaugeY + 34);
    ctx.textAlign = 'right';
    ctx.fillText('850 (Maks)', gaugeX + gaugeW, gaugeY + 34);

    // Status Badge Pill
    const statusY = scoreY + 295;
    let statusLabel = 'POTENSIAL LOLOS PTN FAVORIT';
    let statusBg = 'rgba(16, 185, 129, 0.15)';
    let statusBorder = 'rgba(52, 211, 153, 0.6)';
    let statusColor = '#34d399';

    if (score >= 700) {
      statusLabel = '🌟 TINGKAT KOMPETITIF TINGGI (TOP 5% NASIONAL)';
      statusBg = 'rgba(245, 158, 11, 0.2)';
      statusBorder = 'rgba(251, 191, 36, 0.8)';
      statusColor = '#fbbf24';
    } else if (score >= 600) {
      statusLabel = '🔥 AMAN UNTUK JURUSAN & PTN KELAS 1';
      statusBg = 'rgba(14, 165, 233, 0.2)';
      statusBorder = 'rgba(56, 189, 248, 0.7)';
      statusColor = '#38bdf8';
    } else if (score >= 500) {
      statusLabel = '📈 POTENSIAL & SIAP BERSAING NASIONAL';
      statusBg = 'rgba(99, 102, 241, 0.2)';
      statusBorder = 'rgba(129, 140, 248, 0.6)';
      statusColor = '#a5b4fc';
    } else {
      statusLabel = '💪 LANGKAH AWAL BAGUS — TERUS TINGKATKAN!';
      statusBg = 'rgba(244, 63, 94, 0.15)';
      statusBorder = 'rgba(251, 113, 133, 0.6)';
      statusColor = '#fb7185';
    }

    ctx.fillStyle = statusBg;
    ctx.strokeStyle = statusBorder;
    ctx.lineWidth = 1.5;
    drawRoundRect(ctx, 160, statusY, 760, 60, 30, true, true);

    ctx.fillStyle = statusColor;
    ctx.font = '900 21px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(statusLabel, 540, statusY + 38);

    // Sub-box inside Score Card (Subtes Terkuat & Standar Penilaian)
    const subBoxY = scoreY + 375;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    drawRoundRect(ctx, 110, subBoxY, 860, 76, 20, true, true);

    ctx.textAlign = 'left';
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText('SUBTES TERKUAT', 140, subBoxY + 32);
    ctx.fillStyle = '#34d399';
    ctx.font = '900 21px sans-serif';
    let strongDisplay = strongestScore !== '-' ? `${strongestSub} (${strongestScore})` : strongestSub;
    ctx.fillText('⚡ ' + strongDisplay, 140, subBoxY + 60);

    ctx.textAlign = 'right';
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText('STANDAR EVALUASI', 940, subBoxY + 32);
    ctx.fillStyle = '#f8fafc';
    ctx.font = '900 21px sans-serif';
    ctx.fillText('Standar BPPP SNPMB 2026', 940, subBoxY + 60);

    // 5. Dual PTN Choices Cards (Evenly Spaced, No Ugly Text Clippings!)
    const ptnSecY = 890;
    ctx.textAlign = 'left';
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 26px sans-serif';
    ctx.fillText('🎯 Rasionalisasi Peluang Kelulusan PTN', 80, ptnSecY);

    // Card 1: Pilihan 1 Utama
    const c1Y = ptnSecY + 22;
    const cH = 175;
    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
    ctx.lineWidth = 2;
    drawRoundRect(ctx, 80, c1Y, 920, cH, 26, true, true);

    // Tag Pilihan 1
    ctx.fillStyle = '#f59e0b';
    drawRoundRect(ctx, 110, c1Y + 20, 155, 34, 10, true, false);
    ctx.fillStyle = '#0f172a';
    ctx.font = '900 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('PILIHAN 1 🎯', 187, c1Y + 43);

    // Major with Auto Wrap!
    ctx.textAlign = 'left';
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 26px sans-serif';
    drawWrappedText(ctx, target1Name, 110, c1Y + 86, 620, 32, 2);

    // Univ
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText('🏛️ ' + target1Ptn, 110, c1Y + 152);

    // Chance Badge Right Side
    ctx.fillStyle = 'rgba(245, 158, 11, 0.12)';
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2;
    drawRoundRect(ctx, 770, c1Y + 22, 200, 130, 22, true, true);

    ctx.textAlign = 'center';
    ctx.fillStyle = '#fef08a';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText('PELUANG LOLOS', 870, c1Y + 58);
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 48px sans-serif';
    ctx.fillText(target1Chance !== '-' ? `${target1Chance}%` : 'Tinggi', 870, c1Y + 118);

    // Card 2: Pilihan 2 Cadangan
    const c2Y = c1Y + 195;
    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.4)';
    ctx.lineWidth = 2;
    drawRoundRect(ctx, 80, c2Y, 920, cH, 26, true, true);

    // Tag Pilihan 2
    ctx.fillStyle = '#6366f1';
    drawRoundRect(ctx, 110, c2Y + 20, 155, 34, 10, true, false);
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('PILIHAN 2 🛡️', 187, c2Y + 43);

    // Major with Auto Wrap!
    ctx.textAlign = 'left';
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 26px sans-serif';
    drawWrappedText(ctx, target2Name, 110, c2Y + 86, 620, 32, 2);

    // Univ
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText('🏛️ ' + target2Ptn, 110, c2Y + 152);

    // Chance Badge Right Side
    ctx.fillStyle = 'rgba(99, 102, 241, 0.12)';
    ctx.strokeStyle = '#818cf8';
    ctx.lineWidth = 2;
    drawRoundRect(ctx, 770, c2Y + 22, 200, 130, 22, true, true);

    ctx.textAlign = 'center';
    ctx.fillStyle = '#c7d2fe';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText('PELUANG LOLOS', 870, c2Y + 58);
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 48px sans-serif';
    ctx.fillText(target2Chance !== '-' ? `${target2Chance}%` : 'Aman', 870, c2Y + 118);

    // 6. Value Feature Chips (Harmoniously spaced)
    const chipY = c2Y + 215;
    const chipW = 295;
    const chipH = 65;
    const perks = [
      { icon: '📚', text: '1.800+ Bank Soal' },
      { icon: '⏱️', text: 'Timer Mirip Asli' },
      { icon: '📊', text: 'Analisis 7 Subtes' }
    ];

    perks.forEach((p, idx) => {
      const cx = 80 + idx * 312;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      drawRoundRect(ctx, cx, chipY, chipW, chipH, 18, true, true);

      ctx.textAlign = 'center';
      ctx.fillStyle = '#e2e8f0';
      ctx.font = 'bold 19px sans-serif';
      ctx.fillText(p.icon + ' ' + p.text, cx + chipW / 2, chipY + 41);
    });

    // 7. Ultra-Sleek Modern Footer (Filling the bottom space cleanly with QR code + URL!)
    const footY = chipY + 95;
    const footH = 220;

    const footGrad = ctx.createLinearGradient(80, footY, 1000, footY + footH);
    footGrad.addColorStop(0, '#111827');
    footGrad.addColorStop(1, '#0f172a');
    ctx.fillStyle = footGrad;
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.4)';
    ctx.lineWidth = 2;
    drawRoundRect(ctx, 80, footY, 920, footH, 32, true, true);

    // Draw Stylized QR Code Left Side
    drawStylizedQr(ctx, 120, footY + 30, 155);

    // Right side footer text
    ctx.textAlign = 'left';
    ctx.fillStyle = '#fbbf24';
    ctx.font = '900 17px sans-serif';
    ctx.fillText('🔥 COBA SIMULASI CBT UTBK SEKARANG', 320, footY + 68);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 38px sans-serif';
    ctx.fillText('tembusptn.my.id', 320, footY + 115);

    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 19px sans-serif';
    ctx.fillText('Bank Soal INTEN & Rasionalisasi IRT 100% Gratis!', 320, footY + 152);

    // Small tag
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    drawRoundRect(ctx, 320, footY + 168, 280, 32, 16, true, false);
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('⚡ Scan QR / Buka di Browser HP', 335, footY + 190);

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
    bgGrad.addColorStop(0, '#030712');
    bgGrad.addColorStop(0.35, '#090d1e');
    bgGrad.addColorStop(0.7, '#070b18');
    bgGrad.addColorStop(1, '#02040a');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1080, 1920);

    // Gold / Purple Ambient Glow
    const glow1 = ctx.createRadialGradient(540, 420, 50, 540, 420, 650);
    glow1.addColorStop(0, 'rgba(245, 158, 11, 0.28)');
    glow1.addColorStop(0.6, 'rgba(168, 85, 247, 0.14)');
    glow1.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = glow1;
    ctx.fillRect(0, 0, 1080, 900);

    // Subtle tech grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
    ctx.lineWidth = 1;
    for (let x = 60; x < 1080; x += 80) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 1920); ctx.stroke();
    }
    for (let y = 60; y < 1920; y += 80) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(1080, y); ctx.stroke();
    }

    // Outer Border
    const frameX = 45;
    const frameY = 45;
    const frameW = 990;
    const frameH = 1830;
    const frameRadius = 40;

    ctx.fillStyle = 'rgba(15, 23, 42, 0.4)';
    ctx.strokeStyle = 'rgba(251, 191, 36, 0.35)';
    ctx.lineWidth = 1.5;
    drawRoundRect(ctx, frameX, frameY, frameW, frameH, frameRadius, true, true);

    // Header Branding
    const logoImg = await loadImage('assets/logo.png');
    if (logoImg) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(125, 125, 42, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(logoImg, 83, 83, 84, 84);
      ctx.restore();

      ctx.strokeStyle = 'rgba(245, 158, 11, 0.7)';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(125, 125, 43, 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.textAlign = 'left';
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 38px sans-serif';
    ctx.fillText('TEMBUS', 188, 122);
    const tembusMetrics = ctx.measureText('TEMBUS');
    ctx.fillStyle = '#f59e0b';
    ctx.fillText('PTN', 188 + tembusMetrics.width, 122);

    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 18px sans-serif';
    ctx.fillText('LEADERBOARD UTBK NASIONAL', 188, 152);

    // Verified Pill Top Right
    ctx.fillStyle = 'rgba(245, 158, 11, 0.12)';
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.5)';
    ctx.lineWidth = 1.5;
    drawRoundRect(ctx, 745, 96, 250, 56, 28, true, true);

    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 18px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🏆 PERINGKAT RESMI', 870, 131);

    // Divider
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.beginPath();
    ctx.moveTo(80, 185);
    ctx.lineTo(1000, 185);
    ctx.stroke();

    // Huge Crown / Trophy Graphic
    ctx.textAlign = 'center';
    ctx.font = '130px sans-serif';
    ctx.fillText(rank === 1 ? '👑' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : '🏆', 540, 340);

    // Rank Badge Pill
    ctx.fillStyle = rank === 1 ? '#f59e0b' : '#4f46e5';
    drawRoundRect(ctx, 280, 370, 520, 75, 38, true, false);
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 34px sans-serif';
    ctx.fillText(`PERINGKAT #${rank} NASIONAL`, 540, 420);

    // Student Card Box
    const profY = 480;
    const profH = 260;
    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 2;
    drawRoundRect(ctx, 80, profY, 920, profH, 32, true, true);

    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText('PEJUANG PTN TERBAIK', 540, profY + 50);

    // Name Auto Fit
    ctx.fillStyle = '#ffffff';
    let nameFont = 44;
    ctx.font = '900 ' + nameFont + 'px sans-serif';
    while (ctx.measureText(studentName).width > 840 && nameFont > 28) {
      nameFont -= 2;
      ctx.font = '900 ' + nameFont + 'px sans-serif';
    }
    ctx.fillText(studentName, 540, profY + 115);

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 24px sans-serif';
    ctx.fillText(`🎯 Target: ${ptn}`, 540, profY + 165);

    ctx.fillStyle = '#64748b';
    ctx.font = 'bold 18px sans-serif';
    ctx.fillText(`Tercatat pada: ${dateStr}`, 540, profY + 215);

    // Big XP Showcase Box
    const xpY = 770;
    const xpH = 380;
    ctx.fillStyle = 'rgba(30, 27, 75, 0.85)';
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 3;
    drawRoundRect(ctx, 80, xpY, 920, xpH, 36, true, true);

    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 24px sans-serif';
    ctx.fillText('TOTAL PEROLEHAN PENGALAMAN (XP)', 540, xpY + 60);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 140px sans-serif';
    ctx.fillText(`${xp}`, 540, xpY + 215);

    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'bold 22px sans-serif';
    ctx.fillText('⚡ XP dikumpulkan dari Try Out Resmi & Drill Bank Soal INTEN', 540, xpY + 295);

    // Challenge Callout Box
    const chalY = 1180;
    const chalH = 260;
    ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2;
    drawRoundRect(ctx, 80, chalY, 920, chalH, 32, true, true);

    ctx.fillStyle = '#fbbf24';
    ctx.font = '900 30px sans-serif';
    ctx.fillText('⚔️ TANTANGAN ADU SKOR TEMAN SEKELAS', 540, chalY + 65);

    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 24px sans-serif';
    ctx.fillText('Apakah kamu berani tandingi peringkat & skor ini?', 540, chalY + 120);
    ctx.fillText('Buktikan kemampuanmu di simulasi UTBK SNBT nasional!', 540, chalY + 165);

    // Footer with QR Code
    const footY = 1475;
    const footH = 290;
    const footGrad = ctx.createLinearGradient(80, footY, 1000, footY + footH);
    footGrad.addColorStop(0, '#111827');
    footGrad.addColorStop(1, '#0f172a');
    ctx.fillStyle = footGrad;
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
    ctx.lineWidth = 2;
    drawRoundRect(ctx, 80, footY, 920, footH, 32, true, true);

    // Stylized QR
    drawStylizedQr(ctx, 130, footY + 45, 190);

    ctx.textAlign = 'left';
    ctx.fillStyle = '#fbbf24';
    ctx.font = '900 20px sans-serif';
    ctx.fillText('🏆 GABUNG LEADERBOARD NASIONAL', 370, footY + 85);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 42px sans-serif';
    ctx.fillText('tembusptn.my.id', 370, footY + 140);

    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText('Simulasi CBT & Bank Soal 100% Gratis!', 370, footY + 185);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    drawRoundRect(ctx, 370, footY + 205, 300, 36, 18, true, false);
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText('⚡ Scan QR / Buka di Browser HP', 388, footY + 230);

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
