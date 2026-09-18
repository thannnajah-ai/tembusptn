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
      ctx.fillStyle = '#1d4ed8';
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
   * Generates a 1080x1920 (9:16 Portrait) EdTech Gamification Score Story Card Canvas
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
    const theme = data.theme || 'indigo';

    // Theme definitions
    const themes = {
      indigo: { bg: '#e0e7ff', dots: '#c7d2fe' },
      mint: { bg: '#d1fae5', dots: '#a7f3d0' },
      pink: { bg: '#fce7f3', dots: '#fbcfe8' },
      amber: { bg: '#fef3c7', dots: '#fde68a' }
    };
    const activeTheme = themes[theme] || themes.indigo;

    // 1. Playful Background
    ctx.fillStyle = activeTheme.bg;
    ctx.fillRect(0, 0, 1080, 1920);

    // Subtle polka dot pattern
    ctx.fillStyle = activeTheme.dots;
    for(let i=0; i<=1080; i+=40) {
      for(let j=0; j<=1920; j+=40) {
        ctx.beginPath();
        ctx.arc(i, j, 4, 0, Math.PI*2);
        ctx.fill();
      }
    }

    // Main Canvas Card Frame
    const frameX = 40;
    const frameY = 40;
    const frameW = 1000;
    const frameH = 1840;
    const frameRadius = 40;

    // Helper: Neo-Brutalist Card
    function drawNeoCard(cx, cy, cw, ch, cradius, bgFill, shadowDepth = 10, outline = '#0f172a', lineWidth = 5) {
      ctx.fillStyle = outline;
      drawRoundRect(ctx, cx, cy + shadowDepth, cw, ch, cradius, true, false);
      ctx.fillStyle = bgFill;
      drawRoundRect(ctx, cx, cy, cw, ch, cradius, true, false);
      ctx.strokeStyle = outline;
      ctx.lineWidth = lineWidth;
      drawRoundRect(ctx, cx, cy, cw, ch, cradius, false, true);
    }

    drawNeoCard(frameX, frameY, frameW, frameH, frameRadius, '#ffffff', 14, '#0f172a', 8);

    // 2. Header
    const logoImg = await loadImage('assets/logo.png');
    if (logoImg) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(130, 130, 42, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(logoImg, 88, 88, 84, 84);
      ctx.restore();
      ctx.strokeStyle = '#0f172a';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.arc(130, 130, 42, 0, Math.PI * 2);
      ctx.stroke();
    } else {
      drawNeoCard(90, 90, 80, 80, 24, '#3b82f6', 6, '#0f172a', 4);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 36px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('TP', 130, 143);
    }

    ctx.textAlign = 'left';
    ctx.fillStyle = '#0f172a';
    ctx.font = '900 42px sans-serif';
    ctx.fillText('TEMBUS', 190, 126);

    const tembusMetrics = ctx.measureText('TEMBUS');
    ctx.fillStyle = '#ea580c';
    ctx.fillText('PTN', 190 + tembusMetrics.width, 126);

    ctx.fillStyle = '#475569';
    ctx.font = '900 18px sans-serif';
    ctx.fillText('OFFICIAL CBT UTBK SNBT REPORT', 190, 156);

    // Verified Pill Top Right
    drawNeoCard(755, 96, 240, 56, 28, '#fde047', 6, '#0f172a', 4);
    ctx.fillStyle = '#0f172a';
    ctx.font = '900 18px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('✓ HASIL RESMI', 875, 132);

    // Divider
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 5;
    ctx.beginPath(); ctx.moveTo(40, 200); ctx.lineTo(1040, 200); ctx.stroke();

    // 3. Student Profile (Gamified Card)
    const profY = 230;
    const profH = 145;
    drawNeoCard(80, profY, 920, profH, 28, '#dbeafe', 8, '#0f172a', 5);

    // Avatar
    drawNeoCard(110, profY + 25, 95, 95, 48, '#60a5fa', 4, '#0f172a', 4);
    ctx.fillStyle = '#0f172a';
    ctx.font = '46px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(data.avatar || '🎓', 157, profY + 88);

    // Student Info
    ctx.textAlign = 'left';
    ctx.fillStyle = '#334155';
    ctx.font = '900 16px sans-serif';
    ctx.fillText('PESERTA TRY OUT', 230, profY + 55);

    ctx.fillStyle = '#0f172a';
    let nameFont = 36;
    ctx.font = '900 ' + nameFont + 'px sans-serif';
    while (ctx.measureText(studentName).width > 480 && nameFont > 24) {
      nameFont -= 2;
      ctx.font = '900 ' + nameFont + 'px sans-serif';
    }
    ctx.fillText(studentName, 230, profY + 98);

    // Date
    drawNeoCard(780, profY + 45, 190, 55, 16, '#ffffff', 4, '#0f172a', 4);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#475569';
    ctx.font = '900 12px sans-serif';
    ctx.fillText('TANGGAL', 875, profY + 65);
    ctx.fillStyle = '#0f172a';
    ctx.font = '900 16px sans-serif';
    ctx.fillText(dateStr, 875, profY + 85);

    // 4. Hero IRT Score Card Showcase (Neu-brutalist)
    const scoreY = 410;
    const scoreH = 430;
    drawNeoCard(80, scoreY, 920, scoreH, 36, '#fde047', 12, '#0f172a', 6);

    // Section Pill
    drawNeoCard(240, scoreY + 30, 600, 48, 24, '#ffffff', 6, '#0f172a', 4);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#0f172a';
    ctx.font = '900 18px sans-serif';
    ctx.fillText('⚡ SKOR EVALUASI IRT (SNPMB)', 540, scoreY + 61);

    // Big Score
    ctx.fillStyle = '#0f172a';
    ctx.font = '900 160px sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(`${score}`, 580, scoreY + 230);
    ctx.fillStyle = '#475569';
    ctx.font = '900 44px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('/ 850', 600, scoreY + 230);

    // Progress gauge (Chunky)
    const gaugeX = 140;
    const gaugeY = scoreY + 265;
    const gaugeW = 800;
    const gaugeH = 26;
    drawNeoCard(gaugeX, gaugeY, gaugeW, gaugeH, 13, '#ffffff', 0, '#0f172a', 4);
    
    // Fill
    const ratio = Math.max(0, Math.min(1, (score - 200) / 650));
    const fillW = ratio * gaugeW;
    ctx.fillStyle = '#22c55e'; // Bright green fill
    if(fillW > 10) {
      ctx.beginPath();
      ctx.roundRect(gaugeX + 4, gaugeY + 4, fillW - 8, gaugeH - 8, 9);
      ctx.fill();
    }

    // Status Badge Pill
    const statusY = scoreY + 325;
    let statusLabel = 'POTENSIAL LOLOS';
    let statusBg = '#a7f3d0';

    if (score >= 700) {
      statusLabel = '🌟 TINGKAT KOMPETITIF (TOP 5%)';
      statusBg = '#ffffff';
    } else if (score >= 600) {
      statusLabel = '🔥 AMAN UNTUK PTN KELAS 1';
      statusBg = '#bae6fd';
    } else if (score >= 500) {
      statusLabel = '📈 SIAP BERSAING NASIONAL';
      statusBg = '#c7d2fe';
    } else {
      statusLabel = '💪 TERUS TINGKATKAN BELAJARMU!';
      statusBg = '#fecdd3';
    }
    drawNeoCard(180, statusY, 720, 60, 30, statusBg, 6, '#0f172a', 5);
    ctx.fillStyle = '#0f172a';
    ctx.font = '900 22px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(statusLabel, 540, statusY + 39);

    // 5. Dual PTN Choices Cards (Gamified)
    const ptnSecY = 880;
    ctx.textAlign = 'left';
    ctx.fillStyle = '#0f172a';
    ctx.font = '900 28px sans-serif';
    ctx.fillText('🎯 Analisis Peluang Kelulusan', 80, ptnSecY);

    // Card 1
    const c1Y = ptnSecY + 30;
    const cH = 185;
    drawNeoCard(80, c1Y, 920, cH, 26, '#dcfce7', 10, '#0f172a', 5);
    
    // Tag P1
    drawNeoCard(110, c1Y + 25, 165, 38, 12, '#22c55e', 4, '#0f172a', 3);
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('PILIHAN 1 🎯', 192, c1Y + 50);

    // Major
    ctx.textAlign = 'left';
    ctx.fillStyle = '#0f172a';
    ctx.font = '900 26px sans-serif';
    drawWrappedText(ctx, target1Name, 110, c1Y + 100, 620, 32, 2);

    // Univ
    ctx.fillStyle = '#334155';
    ctx.font = '900 18px sans-serif';
    ctx.fillText('🏛️ ' + target1Ptn, 110, c1Y + 155);

    // Chance Badge P1
    drawNeoCard(770, c1Y + 22, 200, 135, 22, '#ffffff', 6, '#0f172a', 4);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#475569';
    ctx.font = '900 14px sans-serif';
    ctx.fillText('PELUANG LOLOS', 870, c1Y + 52);

    ctx.fillStyle = '#0f172a';
    ctx.font = '900 52px sans-serif';
    let c1pct = 0;
    let c1numStr = '--';
    if (target1Chance !== '-') {
      c1pct = parseInt(target1Chance, 10) || 0;
      c1numStr = `${c1pct}%`;
    }
    ctx.fillText(c1numStr, 870, c1Y + 108);
    if (target1Chance !== '-') {
      const c1label = c1pct >= 75 ? 'Sangat Tinggi' : c1pct >= 50 ? 'Tinggi' : c1pct >= 30 ? 'Sedang' : 'Rendah';
      drawNeoCard(790, c1Y + 120, 160, 28, 14, '#fde047', 2, '#0f172a', 2);
      ctx.fillStyle = '#0f172a';
      ctx.font = '900 14px sans-serif';
      ctx.fillText(c1label, 870, c1Y + 140);
    }

    // Card 2
    const c2Y = c1Y + 215;
    drawNeoCard(80, c2Y, 920, cH, 26, '#e0e7ff', 10, '#0f172a', 5);
    
    // Tag P2
    drawNeoCard(110, c2Y + 25, 165, 38, 12, '#6366f1', 4, '#0f172a', 3);
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('PILIHAN 2 🛡️', 192, c2Y + 50);

    // Major
    ctx.textAlign = 'left';
    ctx.fillStyle = '#0f172a';
    ctx.font = '900 26px sans-serif';
    drawWrappedText(ctx, target2Name, 110, c2Y + 100, 620, 32, 2);

    // Univ
    ctx.fillStyle = '#334155';
    ctx.font = '900 18px sans-serif';
    ctx.fillText('🏛️ ' + target2Ptn, 110, c2Y + 155);

    // Chance Badge P2
    drawNeoCard(770, c2Y + 22, 200, 135, 22, '#ffffff', 6, '#0f172a', 4);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#475569';
    ctx.font = '900 14px sans-serif';
    ctx.fillText('PELUANG LOLOS', 870, c2Y + 52);

    ctx.fillStyle = '#0f172a';
    ctx.font = '900 52px sans-serif';
    let c2pct = 0;
    let c2numStr = '--';
    if (target2Chance !== '-') {
      c2pct = parseInt(target2Chance, 10) || 0;
      c2numStr = `${c2pct}%`;
    }
    ctx.fillText(c2numStr, 870, c2Y + 108);
    if (target2Chance !== '-') {
      const c2label = c2pct >= 75 ? 'Sangat Tinggi' : c2pct >= 50 ? 'Tinggi' : c2pct >= 30 ? 'Sedang' : 'Rendah';
      drawNeoCard(790, c2Y + 120, 160, 28, 14, '#c7d2fe', 2, '#0f172a', 2);
      ctx.fillStyle = '#0f172a';
      ctx.font = '900 14px sans-serif';
      ctx.fillText(c2label, 870, c2Y + 140);
    }

    // 6. Subtes Terkuat & Perks (Replacing the simple chips with a big block)
    const botY = c2Y + 215;
    
    // Subtes Terkuat
    drawNeoCard(80, botY, 580, 110, 24, '#fef08a', 8, '#0f172a', 5);
    ctx.textAlign = 'left';
    ctx.fillStyle = '#0f172a';
    ctx.font = '900 16px sans-serif';
    ctx.fillText('⚡ SUBTES TERKUAT', 110, botY + 38);
    ctx.fillStyle = '#0f172a';
    ctx.font = '900 24px sans-serif';
    let strongDisplay = strongestScore !== '-' ? `${strongestSub} (${strongestScore})` : strongestSub;
    ctx.fillText(strongDisplay, 110, botY + 75);

    // Small Perks
    drawNeoCard(680, botY, 320, 110, 24, '#ffedd5', 8, '#0f172a', 5);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#0f172a';
    ctx.font = '900 20px sans-serif';
    ctx.fillText('📚 1.800+ Soal', 840, botY + 48);
    ctx.fillText('⏱️ Timer Asli', 840, botY + 85);

    // 7. Playful Footer with QR
    const footY = botY + 140;
    const footH = 190;
    drawNeoCard(80, footY, 920, footH, 32, '#f8fafc', 10, '#0f172a', 6);

    drawStylizedQr(ctx, 110, footY + 18, 155);
    // Thick border for QR
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 5;
    drawRoundRect(ctx, 100, footY + 8, 175, 175, 16, false, true);

    ctx.textAlign = 'left';
    ctx.fillStyle = '#ea580c';
    ctx.font = '900 18px sans-serif';
    ctx.fillText('🔥 COBA SIMULASI GRATIS SEKARANG', 310, footY + 55);

    ctx.fillStyle = '#0f172a';
    ctx.font = '900 46px sans-serif';
    ctx.fillText('tembusptn.my.id', 310, footY + 105);

    ctx.fillStyle = '#475569';
    ctx.font = '900 18px sans-serif';
    ctx.fillText('Rasionalisasi IRT Akurat 100% Gratis!', 310, footY + 145);

    // Small tag
    drawNeoCard(750, footY + 120, 130, 40, 20, '#38bdf8', 4, '#0f172a', 3);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#0f172a';
    ctx.font = '900 14px sans-serif';
    ctx.fillText('Scan QR ➔', 815, footY + 145);

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
    ctx.fillStyle = rank === 1 ? '#f59e0b' : '#2563eb';
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
   * Salin gambar PNG langsung ke clipboard (ClipboardItem) dengan fallback salin teks dan simpan gambar
   */
  async function copyImageToClipboard(canvas, fallbackText = '', filename = 'TembusPTN-Skor.png') {
    if (!canvas) return;

    try {
      if (navigator.clipboard && typeof ClipboardItem !== 'undefined' && navigator.clipboard.write) {
        const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
        if (blob) {
          const item = new ClipboardItem({ 'image/png': blob });
          await navigator.clipboard.write([item]);
          if (typeof showXpToast === 'function') {
            showXpToast(5, 'Gambar kartu skor berhasil disalin! Siap ditempel di sosmed/chat 📋');
          } else {
            alert('Gambar kartu skor berhasil disalin ke clipboard! 📋');
          }
          return true;
        }
      }
    } catch (err) {
      console.warn('Copy image to clipboard failed, falling back:', err);
    }

    // Fallback 1: Salin teks tantangan jika ada
    if (fallbackText) {
      await copyToClipboard(fallbackText, 'Pesan teks berhasil disalin! Mengunduh gambar...');
    }

    // Fallback 2: Simpan/unduh gambar sebagai fallback
    downloadCanvasAsPng(canvas, filename);
    return false;
  }

  /**
   * Render kartu skor menjadi gambar PNG (DataURL & Blob)
   */
  async function renderScoreCardToPng(dataOrCanvas) {
    let canvas = dataOrCanvas;
    if (!(canvas instanceof HTMLCanvasElement)) {
      canvas = await generateScoreCardCanvas(dataOrCanvas);
    }
    const dataUrl = canvas.toDataURL('image/png');
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
    return { canvas, dataUrl, blob };
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
                <span>Bagikan Lewat Menu Perangkat (Story/App)</span>
              </button>

              <!-- Copy Image / Text with Save Fallback -->
              <button id="btn-copy-card" class="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 flex items-center justify-center gap-1.5 transition">
                <span>📋</span>
                <span>Salin Gambar / Teks</span>
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

      document.getElementById('btn-copy-card').onclick = () => {
        copyImageToClipboard(canvas, shareText, fileName);
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
    nativeShareCanvas,
    renderScoreCardToPng,
    copyImageToClipboard
  };
})();
