// Dataset Flashcards Pintar UTBK SNBT & Ujian Mandiri (Pahamify Style)
// Berisi 200 kartu ringkasan rumus esensial lengkap Matematika, Fisika, Kimia, Biologi, Soshum, TPS, dan Literasi
// Dilengkapi LaTeX KaTeX, trik logika kilat, dan kaidah resmi

const FLASHCARDS_DATA = [
  {
    "id": "fc-1",
    "category": "Penalaran Matematika & PK",
    "title": "Titik Puncak & Nilai Ekstrim Fungsi Kuadrat",
    "front": "Bagaimana cara cepat menentukan koordinat titik puncak $(x_p, y_p)$ dan nilai minimum/maksimum fungsi $f(x) = ax^2 + bx + c$?",
    "back": "• Absis puncak: $x_p = -\\frac{b}{2a}$ (atau turunan $f'(x) = 0$)<br>• Ordinat puncak: $y_p = -\\frac{D}{4a} = -\\frac{b^2 - 4ac}{4a}$<br>• <strong>Trik Cepat:</strong> Hitung $x_p$ dulu, lalu langsung substitusikan ke fungsi: $y_p = f(x_p)$. Jauh lebih hemat waktu dibanding rumus $D$!",
    "tag": "Fungsi Kuadrat"
  },
  {
    "id": "fc-2",
    "category": "Penalaran Matematika & PK",
    "title": "Rumus Suku & Deret Aritmetika",
    "front": "Bagaimana rumus suku ke-n ($U_n$), beda ($b$), dan jumlah deret ($S_n$)?",
    "back": "• Suku ke-n: $U_n = a + (n-1)b$<br>• Beda cepat dua suku berjarak: $b = \\frac{U_p - U_q}{p - q}$<br>• Jumlah deret: $S_n = \\frac{n}{2}(a + U_n) = \\frac{n}{2}[2a + (n-1)b]$<br>• <strong>Suku Tengah:</strong> $U_t = \\frac{a + U_n}{2} \\implies S_n = n \\cdot U_t$",
    "tag": "Aritmetika"
  },
  {
    "id": "fc-3",
    "category": "Penalaran Matematika & PK",
    "title": "Barisan & Deret Geometri",
    "front": "Bagaimana rumus suku ke-n ($U_n$) dan jumlah $n$ suku pertama ($S_n$) deret geometri?",
    "back": "• Suku ke-n: $U_n = a \\cdot r^{n-1}$<br>• Rasio dua suku: $r^{p-q} = \\frac{U_p}{U_q}$<br>• Jumlah deret ($r \\neq 1$): $S_n = \\frac{a(r^n - 1)}{r - 1}$ atau $\\frac{a(1 - r^n)}{1 - r}$<br>• <strong>Suku Tengah Geometri:</strong> $U_t = \\sqrt{a \\cdot U_n}$",
    "tag": "Geometri"
  },
  {
    "id": "fc-4",
    "category": "Penalaran Matematika & PK",
    "title": "Deret Geometri Tak Hingga (Konvergen)",
    "front": "Kapan suatu deret geometri konvergen dan berapakah jumlah tak hingganya ($S_\\infty$)?",
    "back": "• Syarat konvergen: $|r| < 1$ (yaitu $-1 < r < 1$)<br>• Rumus jumlah: $S_\\infty = \\frac{a}{1 - r}$<br>• <strong>Trik Bola Memantul:</strong> Jika bola jatuh dari tinggi $h$ dan memantul setinggi $\\frac{a}{b}$, total jarak lintasan = $h \\left(\\frac{b + a}{b - a}\\right)$.",
    "tag": "Geometri Tak Hingga"
  },
  {
    "id": "fc-5",
    "category": "Penalaran Matematika & PK",
    "title": "Permutasi vs Kombinasi",
    "front": "Kapan menggunakan Permutasi dan kapan Kombinasi? Tuliskan rumusnya!",
    "back": "• <strong>Permutasi (Urutan penting: Ketua-Wakil, Juara 1-2, password):</strong><br>$P(n, k) = \\frac{n!}{(n-k)!}$<br>• <strong>Kombinasi (Urutan bebas: pilih delegasi, jabat tangan, ambil kelereng):</strong><br>$C(n, k) = \\frac{n!}{k!(n-k)!}$<br>• <strong>Permutasi Siklis:</strong> $P_{\\text{siklis}} = (n - 1)!$",
    "tag": "Pencacahan"
  },
  {
    "id": "fc-6",
    "category": "Penalaran Matematika & PK",
    "title": "Peluang Komplemen & Gabungan",
    "front": "Bagaimana kaidah peluang komplemen dan peluang gabungan dua kejadian ($A$ dan $B$)?",
    "back": "• Peluang Komplemen: $P(A^c) = 1 - P(A)$ (Sangat berguna untuk soal kata 'minimal 1')<br>• Gabungan Sembarang: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$<br>• Kejadian Saling Lepas: $P(A \\cup B) = P(A) + P(B)$<br>• Kejadian Saling Bebas: $P(A \\cap B) = P(A) \\cdot P(B)$",
    "tag": "Peluang"
  },
  {
    "id": "fc-7",
    "category": "Penalaran Matematika & PK",
    "title": "Determinan & Invers Matriks 2x2",
    "front": "Jika $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, tentukan $\\det(A)$ dan $A^{-1}$!",
    "back": "• Determinan: $\\det(A) = ad - bc$<br>• Invers: $A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$, syarat $\\det(A) \\neq 0$<br>• Sifat penting: $\\det(A \\cdot B) = \\det(A) \\cdot \\det(B)$, $\\det(A^{-1}) = \\frac{1}{\\det(A)}$, $\\det(kA_{2\\times 2}) = k^2 \\det(A)$.",
    "tag": "Matriks"
  },
  {
    "id": "fc-8",
    "category": "Penalaran Matematika & PK",
    "title": "Sifat-Sifat Kunci Logaritma",
    "front": "Sebutkan sifat-sifat utama logaritma yang paling sering muncul di UTBK!",
    "back": "• ${}^a\\log(b \\cdot c) = {}^a\\log b + {}^a\\log c$<br>• ${}^a\\log(b/c) = {}^a\\log b - {}^a\\log c$<br>• ${}^{a^m}\\log b^n = \\frac{n}{m} \\cdot {}^a\\log b$<br>• ${}^a\\log b = \\frac{\\log b}{\\log a} = \\frac{1}{{}^b\\log a}$<br>• Rantai perkalian: ${}^a\\log b \\cdot {}^b\\log c = {}^a\\log c$",
    "tag": "Logaritma"
  },
  {
    "id": "fc-9",
    "category": "Penalaran Matematika & PK",
    "title": "Rata-Rata Gabungan (Statistika)",
    "front": "Bagaimana cara cepat mencari rata-rata gabungan atau perbandingan jumlah siswa?",
    "back": "• Rumus Umum: $\\bar{x}_{\\text{gab}} = \\frac{n_1 \\bar{x}_1 + n_2 \\bar{x}_2}{n_1 + n_2}$<br>• <strong>Trik Selisih Silang:</strong><br>$\\frac{n_1}{n_2} = \\frac{|\\bar{x}_2 - \\bar{x}_{\\text{gab}}|}{|\\bar{x}_1 - \\bar{x}_{\\text{gab}}|}$<br>Contoh: Rata-rata putra 70, putri 80, gabungan 76. Rasio putra : putri = $(80-76) : (76-70) = 4 : 6 = 2 : 3$. Selesai kilat!",
    "tag": "Statistika"
  },
  {
    "id": "fc-10",
    "category": "Penalaran Matematika & PK",
    "title": "Aturan Sinus & Kosinus",
    "front": "Kapan menggunakan Aturan Sinus dan Kosinus pada segitiga sembarang?",
    "back": "• <strong>Aturan Sinus (Ada pasangan sisi & sudut hadapannya):</strong><br>$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$<br>• <strong>Aturan Kosinus (Diketahui 2 sisi dan 1 sudut apit):</strong><br>$c^2 = a^2 + b^2 - 2ab \\cos C$<br>$\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$",
    "tag": "Trigonometri"
  },
  {
    "id": "fc-11",
    "category": "Penalaran Matematika & PK",
    "title": "Luas Segitiga Trigonometri",
    "front": "Bagaimana rumus luas segitiga sembarang jika tidak diketahui tingginya?",
    "back": "• Jika diketahui 2 sisi dan 1 sudut apit: $L = \\frac{1}{2} ab \\sin C$<br>• Jika diketahui panjang ketiga sisinya (Rumus Heron):<br>$s = \\frac{a + b + c}{2}$<br>$L = \\sqrt{s(s-a)(s-b)(s-c)}$",
    "tag": "Trigonometri"
  },
  {
    "id": "fc-12",
    "category": "Penalaran Matematika & PK",
    "title": "Teorema Sisa & Faktor Polinomial",
    "front": "Bagaimana bunyi Teorema Sisa untuk pembagian suku banyak $P(x)$?",
    "back": "• Jika $P(x)$ dibagi $(x - k)$, sisanya adalah $S = P(k)$<br>• Jika $P(x)$ dibagi $(ax - b)$, sisanya adalah $S = P\\left(\\frac{b}{a}\\right)$<br>• $(x - k)$ merupakan <strong>faktor</strong> dari $P(x)$ jika dan hanya jika $P(k) = 0$ (sisa pembagian = 0).",
    "tag": "Polinomial"
  },
  {
    "id": "fc-13",
    "category": "Penalaran Matematika & PK",
    "title": "Dalil L'Hopital untuk Limit Taktentu",
    "front": "Kapan Dalil L'Hopital boleh digunakan dan bagaimana penerapannya?",
    "back": "• Syarat: Bentuk limit setelah substitusi langsung menghasilkan $\\frac{0}{0}$ atau $\\frac{\\infty}{\\infty}$<br>• Rumus: $\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\lim_{x \\to c} \\frac{f'(x)}{g'(x)}$<br>• <strong>Peringatan:</strong> Turunkan pembilang sendiri dan penyebut sendiri secara terpisah, BUKAN memakai rumus turunan pembagian $\\left(\\frac{u}{v}\\right)$!",
    "tag": "Kalkulus"
  },
  {
    "id": "fc-14",
    "category": "Penalaran Matematika & PK",
    "title": "Gradien Garis Singgung Kurva",
    "front": "Bagaimana mencari persamaan garis singgung kurva $y = f(x)$ pada titik $(x_1, y_1)$?",
    "back": "1. Gradien garis singgung: $m = f'(x_1)$<br>2. Persamaan garis: $y - y_1 = m(x - x_1)$<br>• Dua garis sejajar: $m_1 = m_2$<br>• Dua garis saling tegak lurus: $m_1 \\cdot m_2 = -1 \\iff m_2 = -\\frac{1}{m_1}$",
    "tag": "Turunan"
  },
  {
    "id": "fc-15",
    "category": "Penalaran Matematika & PK",
    "title": "Jarak Titik ke Garis",
    "front": "Berapa jarak dari titik $(x_0, y_0)$ ke garis lurus $Ax + By + C = 0$?",
    "back": "• Rumus: $d = \\frac{|A x_0 + B y_0 + C|}{\\sqrt{A^2 + B^2}}$<br>• Jarak antara dua garis sejajar $Ax + By + C_1 = 0$ dan $Ax + By + C_2 = 0$:<br>$d = \\frac{|C_1 - C_2|}{\\sqrt{A^2 + B^2}}$",
    "tag": "Geometri Analitik"
  },
  {
    "id": "fc-16",
    "category": "Penalaran Matematika & PK",
    "title": "Persamaan Lingkaran & Garis Singgung",
    "front": "Tuliskan bentuk baku persamaan lingkaran berpusat di $(a,b)$ dan persamaan garis singgungnya!",
    "back": "• Persamaan Lingkaran: $(x - a)^2 + (y - b)^2 = r^2$<br>• Persamaan umum $x^2 + y^2 + Ax + By + C = 0$ memiliki pusat $\\left(-\\frac{A}{2}, -\\frac{B}{2}\\right)$ dan $r = \\sqrt{\\frac{A^2}{4} + \\frac{B^2}{4} - C}$<br>• Garis singgung di titik $(x_1, y_1)$: $(x_1 - a)(x - a) + (y_1 - b)(y - b) = r^2$",
    "tag": "Lingkaran"
  },
  {
    "id": "fc-17",
    "category": "Fisika",
    "title": "3 Persamaan Sakti GLBB",
    "front": "Sebutkan 3 persamaan dasar GLBB dan cara memilih rumus tanpa variabel tertentu!",
    "back": "1. $v_t = v_0 + at$ (Gunakan jika tidak ada jarak $s$)<br>2. $s = v_0 t + \\frac{1}{2}at^2$ (Gunakan jika tidak ada kecepatan akhir $v_t$)<br>3. $v_t^2 = v_0^2 + 2as$ (Gunakan jika tidak ada waktu $t$)<br>• Gerak jatuh bebas ($v_0 = 0, a = g$): $v_t = \\sqrt{2gh}$ dan $t = \\sqrt{\\frac{2h}{g}}$.",
    "tag": "Kinematika"
  },
  {
    "id": "fc-18",
    "category": "Fisika",
    "title": "Gerak Parabola (Jarak & Tinggi Maksimum)",
    "front": "Bagaimana rumus tinggi maksimum ($H_{\\text{max}}$) dan jarak mendatar terjauh ($X_{\\text{max}}$) pada peluru?",
    "back": "• Tinggi Maksimum: $H_{\\text{max}} = \\frac{v_0^2 \\sin^2 \\theta}{2g}$<br>• Waktu ke puncak: $t_p = \\frac{v_0 \\sin \\theta}{g}$<br>• Jarak Maksimum: $X_{\\text{max}} = \\frac{v_0^2 \\sin(2\\theta)}{g}$<br>• Jangkauan terjauh terjadi saat sudut elevasi $\\theta = 45^\\circ$.",
    "tag": "Kinematika"
  },
  {
    "id": "fc-19",
    "category": "Fisika",
    "title": "Hukum II Newton & Gaya Gesek",
    "front": "Bagaimana persamaan gerak balok pada bidang miring kasar bersudut $\\theta$?",
    "back": "• Komponen gaya berat: sejajar bidang $= mg \\sin \\theta$, tegak lurus bidang $= mg \\cos \\theta$<br>• Gaya normal: $N = mg \\cos \\theta$<br>• Gaya gesek kinetis: $f_k = \\mu_k N = \\mu_k mg \\cos \\theta$<br>• Percepatan meluncur turun: $a = g(\\sin \\theta - \\mu_k \\cos \\theta)$",
    "tag": "Dinamika"
  },
  {
    "id": "fc-20",
    "category": "Fisika",
    "title": "Teorema Usaha - Energi Kinetik",
    "front": "Bagaimana hubungan usaha total ($W_{\\text{total}}$) dengan perubahan energi kinetik?",
    "back": "• Rumus: $W_{\\text{total}} = \\Delta EK = \\frac{1}{2}m v_t^2 - \\frac{1}{2}m v_0^2$<br>• Usaha oleh gaya: $W = F \\cdot s \\cdot \\cos \\alpha$<br>• Hukum Kekekalan Energi Mekanik (gaya non-konservatif nihil):<br>$EP_1 + EK_1 = EP_2 + EK_2$",
    "tag": "Energi"
  },
  {
    "id": "fc-21",
    "category": "Fisika",
    "title": "Impuls, Momentum, & Koefisien Restitusi",
    "front": "Bagaimana hubungan impuls, perubahan momentum, dan koefisien kelentingan tumbukan ($e$)?",
    "back": "• Hubungan: $I = F \\cdot \\Delta t = \\Delta p = m(v_t - v_0)$<br>• Kekekalan Momentum: $m_1 v_1 + m_2 v_2 = m_1 v'_1 + m_2 v'_2$<br>• Koefisien Restitusi: $e = -\\frac{v'_2 - v'_1}{v_2 - v_1}$<br>• Nilai $e$: Lenting sempurna ($e = 1$), lenting sebagian ($0 < e < 1$), tidak lenting sama sekali ($e = 0, v'_1 = v'_2$).",
    "tag": "Momentum"
  },
  {
    "id": "fc-22",
    "category": "Fisika",
    "title": "Tekanan Hidrostatis & Hukum Archimedes",
    "front": "Tuliskan persamaan Tekanan Hidrostatis dan Gaya Apung Archimedes!",
    "back": "• Tekanan Hidrostatis: $P_h = \\rho_f \\cdot g \\cdot h$<br>• Tekanan Mutlak: $P = P_0 + \\rho_f g h$ (dengan $P_0 = 1\\text{ atm} = 10^5\\text{ Pa}$)<br>• Gaya Apung: $F_A = \\rho_f \\cdot V_{\\text{celup}} \\cdot g$<br>• Benda terapung: $\\frac{\\rho_{\\text{benda}}}{\\rho_f} = \\frac{V_{\\text{celup}}}{V_{\\text{total}}}$",
    "tag": "Fluida Statis"
  },
  {
    "id": "fc-23",
    "category": "Fisika",
    "title": "Kontinuitas & Persamaan Bernoulli",
    "front": "Tuliskan persamaan kontinuitas debit dan persamaan kekekalan Bernoulli!",
    "back": "• Debit konstan (Kontinuitas): $Q = A_1 v_1 = A_2 v_2$<br>• Jika pipa silinder: $\\frac{v_2}{v_1} = \\left(\\frac{d_1}{d_2}\\right)^2$<br>• Persamaan Bernoulli: $P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{konstan}$<br>• Trik Tangki Bocor (Torricelli): $v = \\sqrt{2gh}$, jarak mendatar $x = 2\\sqrt{h(H-h)}$.",
    "tag": "Fluida Dinamis"
  },
  {
    "id": "fc-24",
    "category": "Fisika",
    "title": "Gas Ideal & Energi Kinetik Partikel",
    "front": "Bagaimana persamaan keadaan gas ideal dan energi kinetik rata-rata gas monoatomik?",
    "back": "• Persamaan Gas Ideal: $PV = nRT = NkT$<br>• $R = 8{,}314\\text{ J/mol K}$, $k = 1{,}38 \\times 10^{-23}\\text{ J/K}$<br>• Energi Kinetik Rerata (Monoatomik): $EK = \\frac{3}{2}kT$<br>• Kecepatan Efektif ($v_{\\text{rms}}$): $v_{\\text{rms}} = \\sqrt{\\frac{3RT}{Mr}} = \\sqrt{\\frac{3kT}{m}} = \\sqrt{\\frac{3P}{\\rho}}$",
    "tag": "Termodinamika"
  },
  {
    "id": "fc-25",
    "category": "Fisika",
    "title": "Efisiensi Mesin Carnot",
    "front": "Bagaimana rumus efisiensi mesin kalor ideal (Mesin Carnot)?",
    "back": "• Efisiensi: $\\eta = \\left(1 - \\frac{T_C}{T_H}\\right) \\times 100\\% = \\frac{W}{Q_H} \\times 100\\% = \\frac{Q_H - Q_C}{Q_H} \\times 100\\%$<br>• <strong>PENTING:</strong> Suhu reservoir $T_H$ dan $T_C$ WAJIB dikonversi ke satuan Kelvin ($K = ^\\circ\\text{C} + 273$)!",
    "tag": "Termodinamika"
  },
  {
    "id": "fc-26",
    "category": "Fisika",
    "title": "Hukum Coulomb & Medan Listrik",
    "front": "Tuliskan rumus gaya elektrostatis Coulomb dan kuat medan listrik dari muatan titik!",
    "back": "• Gaya Coulomb: $F = k \\frac{|q_1 q_2|}{r^2}$ ($k = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$)<br>• Medan Listrik: $E = \\frac{F}{q} = k \\frac{q}{r^2}$<br>• Potensial Listrik (Skalar): $V = k \\frac{q}{r}$<br>• Energi Potensial Listrik: $EP = qV = k \\frac{q_1 q_2}{r}$",
    "tag": "Elektrostatis"
  },
  {
    "id": "fc-27",
    "category": "Fisika",
    "title": "Rangkaian Resistor & Hukum Ohm",
    "front": "Bagaimana menghitung hambatan ekuivalen rangkaian seri dan paralel?",
    "back": "• Hukum Ohm: $V = I \\cdot R$<br>• Rangkaian Seri (Arus $I$ sama): $R_{\\text{tot}} = R_1 + R_2 + R_3$<br>• Rangkaian Paralel (Tegangan $V$ sama): $\\frac{1}{R_{\\text{tot}}} = \\frac{1}{R_1} + \\frac{1}{R_2}$<br>• Trik 2 Resistor Paralel: $R_p = \\frac{R_1 \\cdot R_2}{R_1 + R_2}$",
    "tag": "Listrik Dinamis"
  },
  {
    "id": "fc-28",
    "category": "Fisika",
    "title": "Daya & Energi Listrik",
    "front": "Tuliskan variasi rumus daya listrik ($P$) dan energi listrik ($W$)!",
    "back": "• Daya: $P = V \\cdot I = I^2 R = \\frac{V^2}{R}$<br>• Energi: $W = P \\cdot t = V I t = I^2 R t = \\frac{V^2}{R} t$<br>• <strong>Trik Lampu Terpasang Tegangan Berbeda:</strong><br>Jika lampu $(V_1, P_1)$ dipasang pada $V_2$, maka daya barunya: $P_2 = \\left(\\frac{V_2}{V_1}\\right)^2 P_1$",
    "tag": "Listrik Dinamis"
  },
  {
    "id": "fc-29",
    "category": "Fisika",
    "title": "Gaya Lorentz pada Kawat & Muatan Bergerak",
    "front": "Bagaimana arah dan besar gaya magnetik Lorentz?",
    "back": "• Pada kawat berarus: $F = B \\cdot I \\cdot L \\cdot \\sin \\theta$<br>• Pada muatan bergerak: $F = q \\cdot v \\cdot B \\cdot \\sin \\theta$<br>• Jika muatan tegak lurus medan magnet ($B$), lintasannya berupa lingkaran dengan jari-jari: $R = \\frac{mv}{qB}$<br>• Kaidah Tangan Kanan: Jempol = arus/gerak ($I/v$), telunjuk = medan ($B$), telapak = gaya ($F$).",
    "tag": "Magnetisme"
  },
  {
    "id": "fc-30",
    "category": "Fisika",
    "title": "Efek Doppler Gelombang Bunyi",
    "front": "Bagaimana formula efek Doppler beserta aturan tanda plus-minusnya?",
    "back": "• Rumus: $f_p = \\left(\\frac{v \\pm v_p}{v \\mp v_s}\\right) f_s$<br>• <strong>Kaidah Tanda:</strong><br>- Pendengar ($v_p$ di atas): Mendekati $\\to (+)$, Menjauhi $\\to (-)$<br>- Sumber ($v_s$ di bawah): Mendekati $\\to (-)$, Menjauhi $\\to (+)$<br>• Jika ada angin searah rambat bunyi: $v \\to (v + v_a)$.",
    "tag": "Gelombang Bunyi"
  },
  {
    "id": "fc-31",
    "category": "Fisika",
    "title": "Pembentukan Bayangan Cermin & Lensa",
    "front": "Tuliskan persamaan umum cermin dan lensa tipis beserta perbesarannya!",
    "back": "• Persamaan: $\\frac{1}{f} = \\frac{1}{s} + \\frac{1}{s'}$<br>• Perbesaran: $M = \\left|\\frac{s'}{s}\\right| = \\left|\\frac{h'}{h}\\right|$<br>• Cermin Cekung / Lensa Cembung (Konvergen): $f > 0$<br>• Cermin Cembung / Lensa Cekung (Divergen): $f < 0$<br>• Bayangan nyata ($s' > 0$), bayangan maya ($s' < 0$).",
    "tag": "Optika"
  },
  {
    "id": "fc-32",
    "category": "Kimia",
    "title": "Jembatan Mol & Konversi Satuan",
    "front": "Bagaimana mengonversi mol ke massa, jumlah partikel, dan volume gas STP?",
    "back": "• Mol dari Massa: $n = \\frac{\\text{massa}}{Mr}$<br>• Mol dari Partikel: $n = \\frac{N}{6{,}02 \\times 10^{23}}$ (Bilangan Avogadro)<br>• Mol dari Volume STP ($0^\\circ\\text{C}, 1\\text{ atm}$): $n = \\frac{V}{22{,}4\\text{ L}}$<br>• Mol dari Molaritas: $n = M \\times V(\\text{Liter})$",
    "tag": "Stoikiometri"
  },
  {
    "id": "fc-33",
    "category": "Kimia",
    "title": "Molaritas, Pengenceran, & Pencampuran",
    "front": "Bagaimana rumus pengenceran larutan dan konsentrasi hasil pencampuran?",
    "back": "• Pengenceran: $M_1 V_1 = M_2 V_2$<br>• Pencampuran dua larutan sejenis: $M_{\\text{camp}} = \\frac{M_1 V_1 + M_2 V_2}{V_1 + V_2}$<br>• Molaritas dari kadar $(\\%)$ dan massa jenis $(\\rho)$: $M = \\frac{\\% \\times \\rho \\times 10}{Mr}$",
    "tag": "Larutan"
  },
  {
    "id": "fc-34",
    "category": "Kimia",
    "title": "Penentuan Entalpi Reaksi ($\\Delta H$)",
    "front": "Bagaimana menghitung $\\Delta H$ dari entalpi pembentukan $(\\Delta H_f^\\circ)$ dan energi ikatan?",
    "back": "1. Dari $\\Delta H_f^\\circ$: $\\Delta H = \\sum \\Delta H_f^\\circ(\\text{Kanan}) - \\sum \\Delta H_f^\\circ(\\text{Kiri})$<br>2. Dari Energi Ikatan: $\\Delta H = \\sum \\text{Ikatan Putus (Kiri)} - \\sum \\text{Ikatan Terbentuk (Kanan)}$<br>• Kalorimetri: $q = m \\cdot c \\cdot \\Delta T$, $\\Delta H = -\\frac{q}{n}$.",
    "tag": "Termokimia"
  },
  {
    "id": "fc-35",
    "category": "Kimia",
    "title": "Hukum Hess Penjumlahan Reaksi",
    "front": "Bagaimana aturan manipulasi persamaan reaksi dalam Hukum Hess?",
    "back": "• Reaksi Dibalik $\\to$ Tanda $\\Delta H$ berubah ($+ \\leftrightarrow -$)<br>• Reaksi Dikalikan $n \\to$ Nilai $\\Delta H$ dikalikan $n$<br>• Reaksi Dibagi $n \\to$ Nilai $\\Delta H$ dibagi $n$<br>• Reaksi Dijumlahkan $\\to$ Nilai $\\Delta H$ dijumlahkan.",
    "tag": "Termokimia"
  },
  {
    "id": "fc-36",
    "category": "Kimia",
    "title": "Persamaan Laju Reaksi & Orde Reaksi",
    "front": "Bagaimana bentuk umum persamaan laju reaksi $aA + bB \\to cC$ dan menentukan ordenya?",
    "back": "• Bentuk umum: $v = k [A]^m [B]^n$<br>• $m$ = orde thd $A$, $n$ = orde thd $B$, orde total = $m + n$<br>• Orde ditentukan dari <strong>data eksperimen</strong>, BUKAN dari koefisien reaksi!<br>• Jika konsentrasi naik $x$ kali dan laju naik $y$ kali, maka $x^m = y$.",
    "tag": "Kinetika Kimia"
  },
  {
    "id": "fc-37",
    "category": "Kimia",
    "title": "Pengaruh Suhu terhadap Laju Reaksi",
    "front": "Jika setiap kenaikan $T_0^\\circ\\text{C}$ laju naik $n$ kali, bagaimana rumus laju dan waktu barunya?",
    "back": "• Laju reaksi akhir: $v_2 = v_1 \\cdot n^{\\frac{T_2 - T_1}{\\Delta T}}$<br>• Waktu reaksi akhir: $t_2 = t_1 \\cdot \\left(\\frac{1}{n}\\right)^{\\frac{T_2 - T_1}{\\Delta T}}$",
    "tag": "Kinetika Kimia"
  },
  {
    "id": "fc-38",
    "category": "Kimia",
    "title": "Tetapan Kesetimbangan $K_c$ vs $K_p$",
    "front": "Bagaimana hubungan matematis antara tetapan kesetimbangan $K_p$ dan $K_c$?",
    "back": "• Rumus: $K_p = K_c (R T)^{\\Delta n}$<br>• $\\Delta n$ = (Jumlah koefisien gas produk) - (Jumlah koefisien gas reaktan)<br>• Fase padat (solid) dan murni cair (liquid) <strong>TIDAK dimasukkan</strong> ke rumus $K_c$ atau $K_p$!",
    "tag": "Kesetimbangan"
  },
  {
    "id": "fc-39",
    "category": "Kimia",
    "title": "pH Asam Basa Kuat & Lemah",
    "front": "Bagaimana cara cepat menghitung $[H^+]$ dan pH untuk asam kuat vs asam lemah?",
    "back": "• <strong>Asam Kuat:</strong> $[H^+] = a \\cdot M_a$<br>• <strong>Asam Lemah:</strong> $[H^+] = \\sqrt{K_a \\cdot M_a} = \\alpha \\cdot M_a$<br>• Rumus pH: $\\text{pH} = -\\log[H^+]$<br>• Trik: Jika $[H^+] = a \\times 10^{-b}$, maka $\\text{pH} = b - \\log a$.",
    "tag": "Asam Basa"
  },
  {
    "id": "fc-40",
    "category": "Kimia",
    "title": "Larutan Penyangga (Buffer Solution)",
    "front": "Komponen apa pembentuk larutan penyangga asam & basa dan bagaimana rumus $[H^+]$?",
    "back": "• <strong>Buffer Asam (Asam Lemah + Basa Konjugasi):</strong><br>$[H^+] = K_a \\times \\frac{\\text{mol asam lemah}}{\\text{mol basa konjugasi}}$<br>• <strong>Buffer Basa (Basa Lemah + Asam Konjugasi):</strong><br>$[OH^-] = K_b \\times \\frac{\\text{mol basa lemah}}{\\text{mol asam konjugasi}}$",
    "tag": "Buffer"
  },
  {
    "id": "fc-41",
    "category": "Kimia",
    "title": "Hidrolisis Garam (pH Garam)",
    "front": "Bagaimana rumus menghitung $[H^+]$ atau $[OH^-]$ pada garam yang terhidrolisis sebagian?",
    "back": "• Garam Asam Lemah + Basa Kuat (Basa): $[OH^-] = \\sqrt{\\frac{K_w}{K_a} \\times [G] \\times \\text{valensi}}$<br>• Garam Asam Kuat + Basa Lemah (Asam): $[H^+] = \\sqrt{\\frac{K_w}{K_b} \\times [G] \\times \\text{valensi}}$<br>• $K_w = 10^{-14}$ pada $25^\\circ\\text{C}$.",
    "tag": "Hidrolisis"
  },
  {
    "id": "fc-42",
    "category": "Kimia",
    "title": "Sifat Koligatif: Titik Didih & Titik Beku",
    "front": "Tuliskan rumus kenaikan titik didih ($\\Delta T_b$) dan penurunan titik beku ($\\Delta T_f$)!",
    "back": "• Kenaikan Titik Didih: $\\Delta T_b = m \\cdot K_b \\cdot i \\implies T_b = 100^\\circ\\text{C} + \\Delta T_b$<br>• Penurunan Titik Beku: $\\Delta T_f = m \\cdot K_f \\cdot i \\implies T_f = 0^\\circ\\text{C} - \\Delta T_f$<br>• Faktor van 't Hoff: $i = 1 + (n - 1)\\alpha$<br>- Non-elektrolit: $i = 1$; Elektrolit kuat: $i = n$ (jumlah ion).",
    "tag": "Sifat Koligatif"
  },
  {
    "id": "fc-43",
    "category": "Kimia",
    "title": "Tekanan Osmotik ($\\pi$)",
    "front": "Bagaimana rumus menghitung tekanan osmotik larutan menurut van 't Hoff?",
    "back": "• Rumus: $\\pi = M \\cdot R \\cdot T \\cdot i$<br>• $M$ = Molaritas (mol/L), $R = 0{,}082\\text{ L}\\cdot\\text{atm}/\\text{mol}\\cdot\\text{K}$, $T$ = Suhu Kelvin<br>• Isotonik: $\\pi_1 = \\pi_2$; Hipertonik: $\\pi_1 > \\pi_2$; Hipotonik: $\\pi_1 < \\pi_2$",
    "tag": "Sifat Koligatif"
  },
  {
    "id": "fc-44",
    "category": "Kimia",
    "title": "Sel Volta & Potensial Sel Standar ($E^\\circ_{\\text{sel}}$)",
    "front": "Bagaimana rumus $E^\\circ_{\\text{sel}}$ dan syarat reaksi redoks berlangsung spontan?",
    "back": "• Rumus: $E^\\circ_{\\text{sel}} = E^\\circ_{\\text{katoda}} - E^\\circ_{\\text{anoda}} = E^\\circ_{\\text{reduksi}} - E^\\circ_{\\text{oksidasi}}$<br>• Jembatan Keledai: <strong>KRAO</strong> (Katoda Reduksi, Anoda Oksidasi)<br>• Syarat spontan: $E^\\circ_{\\text{sel}} > 0$ (Positif)<br>• Deret Volta: Unsur sebelah kiri mendesak unsur sebelah kanan.",
    "tag": "Elektrokimia"
  },
  {
    "id": "fc-45",
    "category": "Kimia",
    "title": "Hukum Faraday I & II Elektrokimia",
    "front": "Bagaimana rumus menghitung massa endapan logam pada elektroda sel elektrolisis?",
    "back": "• Hukum Faraday I: $w = e \\cdot F = \\frac{e \\cdot I \\cdot t}{96.500}$<br>• Massa ekuivalen: $e = \\frac{Ar}{\\text{valensi}}$<br>• Hukum Faraday II: $\\frac{w_1}{w_2} = \\frac{e_1}{e_2}$ (pada arus dan waktu yang sama).",
    "tag": "Elektrokimia"
  },
  {
    "id": "fc-46",
    "category": "Ekonomi & Sosiologi",
    "title": "Koefisien Elastisitas Permintaan & Penawaran",
    "front": "Bagaimana rumus elastisitas harga ($E_d$ atau $E_s$) dan kriteria nilainya?",
    "back": "• Rumus: $E = \\left|\\frac{\\Delta Q}{\\Delta P} \\times \\frac{P_1}{Q_1}\\right| = \\left|Q' \\times \\frac{P}{Q}\\right|$<br>• Kriteria: $E > 1$ (Elastis), $E < 1$ (Inelastis), $E = 1$ (Unitary), $E = 0$ (Inelastis Sempurna), $E = \\infty$ (Elastis Sempurna).",
    "tag": "Elastisitas"
  },
  {
    "id": "fc-47",
    "category": "Ekonomi & Sosiologi",
    "title": "Keseimbangan Pasar & Pengaruh Pajak",
    "front": "Bagaimana syarat keseimbangan pasar sebelum dan sesudah dikenakan pajak spesifik ($t$)?",
    "back": "• Keseimbangan Mula-mula: $Q_d = Q_s$ atau $P_d = P_s$<br>• Pajak ($t$ per unit) ke penjual: Fungsi baru $P'_s = P_s + t$<br>• Beban pajak konsumen: $t_k = P'_e - P_e$<br>• Beban pajak produsen: $t_p = t - t_k$",
    "tag": "Pasar"
  },
  {
    "id": "fc-48",
    "category": "Ekonomi & Sosiologi",
    "title": "Biaya Produksi (TC, AC, MC)",
    "front": "Bagaimana hubungan antara Total Cost ($TC$), Average Cost ($AC$), dan Marginal Cost ($MC$)?",
    "back": "• Biaya Total: $TC = TFC + TVC$<br>• Rata-rata: $AC = \\frac{TC}{Q} = AFC + AVC$<br>• Marjinal: $MC = \\frac{\\Delta TC}{\\Delta Q} = TC'$<br>• Efisiensi biaya: $AC$ minimum terjadi saat kurva $MC$ memotong kurva $AC$ dari bawah ($MC = AC$).",
    "tag": "Biaya Produksi"
  },
  {
    "id": "fc-49",
    "category": "Ekonomi & Sosiologi",
    "title": "Laba Maksimum Produsen",
    "front": "Apa syarat utama produsen mencapai keuntungan maksimal (laba optimum)?",
    "back": "• Syarat Mutlak: $MR = MC$<br>• Penerimaan Total: $TR = P \\times Q$<br>• Penerimaan Marjinal: $MR = \\frac{\\Delta TR}{\\Delta Q} = TR'$<br>• Pasar Persaingan Sempurna: $P = AR = MR$, sehingga syarat laba maksimal $P = MC$.",
    "tag": "Teori Produksi"
  },
  {
    "id": "fc-50",
    "category": "Ekonomi & Sosiologi",
    "title": "Pendapatan Nasional (Pengeluaran & Pendapatan)",
    "front": "Tuliskan persamaan pendapatan nasional ($Y$) menurut metode pengeluaran dan pendapatan!",
    "back": "• <strong>Metode Pengeluaran:</strong> $Y = C + I + G + (X - M)$<br>(Konsumsi + Investasi + Pengeluaran Pemerintah + Ekspor Neto)<br>• <strong>Metode Pendapatan:</strong> $Y = r + w + i + p$<br>(Rent/Sewa + Wage/Upah + Interest/Bunga + Profit/Laba)",
    "tag": "Makroekonomi"
  },
  {
    "id": "fc-51",
    "category": "Ekonomi & Sosiologi",
    "title": "Fungsi Konsumsi, Tabungan, & Multiplier",
    "front": "Bagaimana hubungan $MPC + MPS$ serta rumus angka pengganda investasi ($k_I$)?",
    "back": "• Konsumsi: $C = a + b Y$ (di mana $b = MPC = \\frac{\\Delta C}{\\Delta Y}$)<br>• Tabungan: $S = -a + (1-b) Y$ (di mana $MPS = 1 - MPC$)<br>• Sifat Mutlak: $MPC + MPS = 1$<br>• Angka Pengganda: $k = \\frac{1}{1 - MPC} = \\frac{1}{MPS}$",
    "tag": "Makroekonomi"
  },
  {
    "id": "fc-52",
    "category": "Ekonomi & Sosiologi",
    "title": "Teori Kuantitas Uang Irving Fisher",
    "front": "Tuliskan persamaan transaksi kuantitas uang Irving Fisher beserta artinya!",
    "back": "• Rumus: $M \\cdot V = P \\cdot T$<br>• $M$ = Uang beredar, $V$ = Kecepatan peredaran, $P$ = Tingkat harga umum, $T$ = Volume transaksi.<br>• Asumsi klasik: Jika $V$ dan $T$ konstan, penambahan $M$ sebanding dengan inflasi $P$.",
    "tag": "Moneter"
  },
  {
    "id": "fc-53",
    "category": "Ekonomi & Sosiologi",
    "title": "Indeks Harga Laspeyres & Paasche",
    "front": "Apa perbedaan penimbang kuantitas antara Indeks Harga Laspeyres ($I_L$) dan Paasche ($I_P$)?",
    "back": "• <strong>Indeks Laspeyres (Penimbang kuantitas tahun dasar $Q_0$):</strong><br>$I_L = \\frac{\\sum (P_n \\cdot Q_0)}{\\sum (P_0 \\cdot Q_0)} \\times 100\\%$<br>• <strong>Indeks Paasche (Penimbang kuantitas tahun berjalan $Q_n$):</strong><br>$I_P = \\frac{\\sum (P_n \\cdot Q_n)}{\\sum (P_0 \\cdot Q_n)} \\times 100\\%$",
    "tag": "Statistik Ekonomi"
  },
  {
    "id": "fc-54",
    "category": "Ekonomi & Sosiologi",
    "title": "Diferensiasi vs Stratifikasi Sosial",
    "front": "Apa perbedaan konseptual mendasar antara Diferensiasi Sosial dan Stratifikasi Sosial?",
    "back": "• <strong>Diferensiasi Sosial (Horizontal):</strong> Pembagian masyarakat secara setara tanpa tingkatan hierarki (contoh: ras, suku bangsa, agama, jenis kelamin).<br>• <strong>Stratifikasi Sosial (Vertikal):</strong> Pelapisan masyarakat hierarkis berjenjang (contoh: status sosial, kekayaan ekonomi, kekuasaan jabatan).",
    "tag": "Struktur Sosial"
  },
  {
    "id": "fc-55",
    "category": "Ekonomi & Sosiologi",
    "title": "Teori Perubahan Sosial: Siklus vs Linear",
    "front": "Bagaimana pandangan Teori Siklus vs Teori Linier dalam perubahan sosial?",
    "back": "• <strong>Teori Siklus (Spengler, Toynbee, Sorokin):</strong> Perubahan berulang bagai roda (Lahir $\\to$ Tumbuh $\\to$ Berjaya $\\to$ Runtuh $\\to$ Lahir kembali), tanpa arah akhir tetap.<br>• <strong>Teori Linear (Comte, Marx, Spencer):</strong> Perubahan bertahap maju berevolusi menuju peradaban lebih maju.",
    "tag": "Perubahan Sosial"
  },
  {
    "id": "fc-56",
    "category": "Ekonomi & Sosiologi",
    "title": "Bentuk Interaksi Asosiatif vs Disosiatif",
    "front": "Kelompokkan bentuk-bentuk interaksi sosial ke dalam asosiatif dan disosiatif!",
    "back": "• <strong>Asosiatif (Mengarah persatuan):</strong> Kerjasama (Kooptasi, Koalisi, Joint Venture), Akomodasi (Mediasi, Arbitrase, Kompromi), Asimilasi, Akulturasi.<br>• <strong>Disosiatif (Mengarah perpecahan):</strong> Kompetisi, Kontravensi (fitnah/ketidaksukaan rahasia), Konflik/Pertikaian.",
    "tag": "Interaksi Sosial"
  },
  {
    "id": "fc-57",
    "category": "Ekonomi & Sosiologi",
    "title": "4 Tipe Tindakan Sosial Max Weber",
    "front": "Sebutkan 4 tipe tindakan sosial menurut sosiolog Max Weber!",
    "back": "1. <strong>Rasional Instrumental:</strong> Berorientasi tujuan dan alat terbaik.<br>2. <strong>Rasional Nilai:</strong> Didasari keyakinan etis/religius tanpa hitung untung-rugi.<br>3. <strong>Afektif:</strong> Didasari luapan emosi perasaan spontan.<br>4. <strong>Tradisional:</strong> Didasari kebiasaan leluhur turun-temurun.",
    "tag": "Teori Sosiologi"
  },
  {
    "id": "fc-58",
    "category": "Penalaran Umum (PU)",
    "title": "Aturan Penarikan Simpulan: Ponens, Tollens, Silogisme",
    "front": "Tuliskan ketiga kaidah sah penarikan kesimpulan logika proposisional!",
    "back": "1. <strong>Modus Ponens:</strong> Premis: $p \\Rightarrow q$ dan $p$ $\\therefore q$<br>2. <strong>Modus Tollens:</strong> Premis: $p \\Rightarrow q$ dan $\\sim q$ $\\therefore \\sim p$<br>3. <strong>Silogisme Hipotesis:</strong> Premis: $p \\Rightarrow q$ dan $q \\Rightarrow r$ $\\therefore p \\Rightarrow r$<br>• <em>Waspada Fallacy:</em> Dari $(p \\Rightarrow q)$ dan $\\sim p$, TIDAK DAPAT disimpulkan $\\sim q$!",
    "tag": "Logika Deduktif"
  },
  {
    "id": "fc-59",
    "category": "Penalaran Umum (PU)",
    "title": "Ekuivalensi Implikasi & Hukum De Morgan",
    "front": "Bentuk pernyataan apa saja yang bernilai ekuivalen $(\\equiv)$ dengan implikasi $p \\Rightarrow q$?",
    "back": "• <strong>Ekuivalensi Utama:</strong><br>$p \\Rightarrow q \\equiv \\sim q \\Rightarrow \\sim p$ (Kontraposisi)<br>$p \\Rightarrow q \\equiv \\sim p \\lor q$<br>• <strong>Hukum De Morgan (Negasi):</strong><br>$\\sim (p \\land q) \\equiv \\sim p \\lor \\sim q$<br>$\\sim (p \\lor q) \\equiv \\sim p \\land \\sim q$<br>• <strong>Negasi Implikasi:</strong> $\\sim (p \\Rightarrow q) \\equiv p \\land \\sim q$",
    "tag": "Ekuivalensi"
  },
  {
    "id": "fc-60",
    "category": "Penalaran Umum (PU)",
    "title": "Negasi Pernyataan Berkuantor",
    "front": "Bagaimana cara menentukan negasi dari kuantor universal (Semua) dan eksistensial (Ada/Beberapa)?",
    "back": "• Negasi 'Semua $A$ adalah $B$' $\\to$ <strong>'Ada/Beberapa $A$ yang BUKAN $B$'</strong>.<br>• Negasi 'Ada $A$ yang $B$' $\\to$ <strong>'Semua $A$ BUKAN $B$'</strong>.<br>• Contoh: 'Semua siswa lulus UTBK' $\\to$ Negasinya: 'Ada siswa yang tidak lulus UTBK'.",
    "tag": "Kuantor"
  },
  {
    "id": "fc-61",
    "category": "Penalaran Umum (PU)",
    "title": "Analisis Barisan Angka Bertingkat",
    "front": "Bagaimana trik mengenali pola barisan angka kompleks di subtes Penalaran Umum?",
    "back": "1. Cek beda tingkat 1 (selisih antar angka berdekatan).<br>2. Cek beda tingkat 2 jika tingkat 1 tidak konstan.<br>3. Cek pola selang-seling (ganjil/genap lompat 1 atau 2).<br>4. Cek operasi ganda (misal: $+3, \\times 2, +3, \\times 2$).<br>5. Cek barisan Fibonacci ($U_n = U_{n-1} + U_{n-2}$).",
    "tag": "Deret Angka"
  },
  {
    "id": "fc-62",
    "category": "Pemahaman Bacaan & Menulis (PBM)",
    "title": "Ciri Kalimat Efektif Standar UTBK (EYD V)",
    "front": "Apa saja 4 syarat mutlak sebuah kalimat dikatakan 'Efektif' dalam soal PBM SNBT?",
    "back": "1. <strong>Kesepadanan:</strong> Memiliki minimal Subjek (S) dan Predikat (P) eksplisit tanpa preposisi perusak seperti 'Dalam', 'Bagi', 'Untuk'.<br>2. <strong>Keparalelan:</strong> Konsisten bentuk imbuhan (contoh: 'mencuci, merapikan, dan menyetrika').<br>3. <strong>Kehematan:</strong> Tidak pleonastis ('adalah merupakan', 'agar supaya').<br>4. <strong>Kecermatan Penalaran:</strong> Logis dan tidak ambigu.",
    "tag": "EYD V"
  },
  {
    "id": "fc-63",
    "category": "Pemahaman Bacaan & Menulis (PBM)",
    "title": "Kaidah Penulisan Kata Majemuk / Gabungan Kata",
    "front": "Kapan gabungan kata ditulis terpisah dan kapan ditulis serangkai menurut EYD V?",
    "back": "• <strong>Terpisah:</strong> Jika mandiri atau hanya berawalan/berakhiran tunggal:<br><em>tanggung jawab, tanda tangan, berterima kasih, tanda tangani</em>.<br>• <strong>Serangkai:</strong> Jika diapit awalan dan akhiran sekaligus:<br><em>pertanggungjawaban, menandatangani, menggarisbawahi</em>.<br>• Bentuk terikat serangkai: <em>antarkota, pascasarjana, multikultural</em>.",
    "tag": "EYD V"
  },
  {
    "id": "fc-64",
    "category": "Pemahaman Bacaan & Menulis (PBM)",
    "title": "Huruf Kapital: Geografi & Gelar Jabatan",
    "front": "Kapan nama unsur geografi dan gelar jabatan ditulis huruf kapital atau huruf kecil?",
    "back": "• <strong>Kapital:</strong> Diikuti nama diri geografi atau nama orang:<br><em>Selat Sunda, Sungai Mahakam, Presiden Prabowo, Sultan Hasanuddin</em>.<br>• <strong>Kecil:</strong> Nama jenis umum tanpa diikuti nama diri:<br><em>berlayar ke selat, mandi di sungai, menjadi seorang presiden</em>.",
    "tag": "Ejaan"
  },
  {
    "id": "fc-65",
    "category": "Literasi Bahasa Indonesia",
    "title": "Trik Menemukan Ide Pokok Paragraf Cepat",
    "front": "Bagaimana langkah kilat 10 detik menemukan ide pokok dalam teks panjang?",
    "back": "1. <strong>Deduktif:</strong> Baca kalimat 1. Jika kalimat 2 berisi rincian penjelas ('Hal ini...', 'Contohnya...'), ide pokok ada di kalimat 1.<br>2. <strong>Induktif:</strong> Cek kalimat akhir. Ada konjungsi simpulan ('Oleh karena itu', 'Dengan demikian')? Berarti di akhir.<br>3. <strong>Kunci Jawaban:</strong> Pilihan jawaban yang tepat adalah abstraksi/generalisasi, bukan rincian minor!",
    "tag": "Ide Pokok"
  },
  {
    "id": "fc-66",
    "category": "Literasi Bahasa Inggris",
    "title": "Transition Words & Author's Attitude Clues",
    "front": "Kata transisi apa saja yang menunjukkan kontras dan kesimpulan dalam teks akademik Inggris?",
    "back": "• <strong>Contrast:</strong> <em>However, Nevertheless, On the contrary, Despite, In spite of, Conversely, Yet.</em> (Pesan kunci penulis biasa muncul SETELAH kata ini!).<br>• <strong>Conclusion / Result:</strong> <em>Thus, Therefore, Consequently, Hence, Accordingly.</em><br>• <strong>Attitude Clues:</strong> Amati kata sifat/adverb evaluatif (<em>alarmingly, unfortunately, commendable, questionable</em>).",
    "tag": "Reading Tips"
  },
  {
    "id": "fc-67",
    "category": "Literasi Bahasa Inggris",
    "title": "Tone and Purpose of the Passage",
    "front": "Bagaimana membedakan Author's Tone antara Objective, Critical, Optimistic, dan Concerned?",
    "back": "• <strong>Objective / Neutral:</strong> Memaparkan data fakta tanpa muatan emosional.<br>• <strong>Critical:</strong> Menyoroti cacat sistem, kelemahan metodologi, atau dampak negatif.<br>• <strong>Optimistic / Encouraging:</strong> Menunjukkan harapan cerah dan solusi menjanjikan.<br>• <strong>Concerned / Alarmed:</strong> Khawatir atau cemas akan ancaman krisis/bahaya lingkungan.",
    "tag": "English Tone"
  },
  {
    "id": "fc-68",
    "category": "Penalaran Matematika & PK",
    "title": "Teorema Vieta (Jumlah, Kali, & Selisih Akar Persamaan Kuadrat)",
    "front": "Jika $x_1$ dan $x_2$ adalah akar-akar dari $ax^2 + bx + c = 0$, bagaimana rumus jumlah, kali, selisih kuadrat, dan jumlah kuadrat akarnya?",
    "back": "• Jumlah: $x_1 + x_2 = -\\frac{b}{a}$<br>• Hasil kali: $x_1 \\cdot x_2 = \\frac{c}{a}$<br>• Selisih mutlak: $|x_1 - x_2| = \\frac{\\sqrt{D}}{|a|}$ (di mana $D = b^2 - 4ac$)<br>• Jumlah kuadrat: $x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1 x_2$<br>• Jumlah kebalikan: $\\frac{1}{x_1} + \\frac{1}{x_2} = \\frac{x_1 + x_2}{x_1 x_2} = -\\frac{b}{c}$",
    "tag": "Persamaan Kuadrat"
  },
  {
    "id": "fc-69",
    "category": "Penalaran Matematika & PK",
    "title": "Diskriminan & Syarat Definit Fungsi Kuadrat",
    "front": "Bagaimana kriteria diskriminan ($D$) dan syarat definit positif serta definit negatif?",
    "back": "• $D > 0$: Memotong sumbu-$X$ di dua titik berbeda (memiliki 2 akar real berbeda)<br>• $D = 0$: Menyinggung sumbu-$X$ (memiliki 1 akar kembar)<br>• $D < 0$: Tidak memotong ataupun menyinggung sumbu-$X$<br>• <strong>Definit Positif (selalu bernilai positif untuk semua $x$):</strong> Syarat $a > 0$ dan $D < 0$<br>• <strong>Definit Negatif (selalu bernilai negatif untuk semua $x$):</strong> Syarat $a < 0$ dan $D < 0$",
    "tag": "Fungsi Kuadrat"
  },
  {
    "id": "fc-70",
    "category": "Penalaran Matematika & PK",
    "title": "Sifat Eksponen & Persamaan Eksponensial",
    "front": "Sebutkan sifat-sifat eksponen esensial dan bentuk penyelesaian persamaan eksponensial!",
    "back": "• Sifat: $a^m \\cdot a^n = a^{m+n}$, $\\frac{a^m}{a^n} = a^{m-n}$, $(a^m)^n = a^{m \\cdot n}$, $a^{-n} = \\frac{1}{a^n}$, $a^{\\frac{m}{n}} = \\sqrt[n]{a^m}$<br>• $a^{f(x)} = a^{g(x)} \\implies f(x) = g(x)$ (untuk $a > 0, a \\neq 1$)<br>• Bentuk $f(x)^{g(x)} = 1$, uji 3 kemungkinan:<br>1. $g(x) = 0$ dengan syarat $f(x) \\neq 0$<br>2. $f(x) = 1$<br>3. $f(x) = -1$ dengan syarat $g(x)$ harus bilangan genap.",
    "tag": "Eksponen"
  },
  {
    "id": "fc-71",
    "category": "Penalaran Matematika & PK",
    "title": "Identitas Trigonometri & Sudut Rangkap",
    "front": "Tuliskan identitas trigonometri Pythagoras dan rumus sudut rangkap untuk sinus, kosinus, serta tangen!",
    "back": "• Identitas Pokok: $\\sin^2 x + \\cos^2 x = 1$, $1 + \\tan^2 x = \\sec^2 x$, $1 + \\cot^2 x = \\csc^2 x$<br>• Sinus Rangkap: $\\sin 2x = 2\\sin x \\cos x$<br>• Kosinus Rangkap (3 bentuk):<br>$\\cos 2x = \\cos^2 x - \\sin^2 x = 2\\cos^2 x - 1 = 1 - 2\\sin^2 x$<br>• Tangen Rangkap: $\\tan 2x = \\frac{2\\tan x}{1 - \\tan^2 x}$",
    "tag": "Trigonometri"
  },
  {
    "id": "fc-72",
    "category": "Penalaran Matematika & PK",
    "title": "Jumlah & Selisih Sudut Trigonometri",
    "front": "Bagaimana rumus penjabaran $\\sin(A \\pm B)$, $\\cos(A \\pm B)$, dan $\\tan(A \\pm B)$?",
    "back": "• $\\sin(A \\pm B) = \\sin A \\cos B \\pm \\cos A \\sin B$<br>• $\\cos(A \\pm B) = \\cos A \\cos B \\mp \\sin A \\sin B$ (Awas tanda terbalik!)<br>• $\\tan(A \\pm B) = \\frac{\\tan A \\pm \\tan B}{1 \\mp \\tan A \\tan B}$<br>• <strong>Trik Sudut Istimewa:</strong> Contoh $\\sin 75^\\circ = \\sin(45^\\circ + 30^\\circ) = \\frac{1}{4}\\sqrt{2}(\\sqrt{3} + 1)$.",
    "tag": "Trigonometri"
  },
  {
    "id": "fc-73",
    "category": "Penalaran Matematika & PK",
    "title": "Perkalian ke Penjumlahan Trigonometri",
    "front": "Bagaimana rumus mengubah perkalian sinus-kosinus menjadi bentuk penjumlahan/pengurangan?",
    "back": "• $2\\sin A \\cos B = \\sin(A + B) + \\sin(A - B)$<br>• $2\\cos A \\sin B = \\sin(A + B) - \\sin(A - B)$<br>• $2\\cos A \\cos B = \\cos(A + B) + \\cos(A - B)$<br>• $-2\\sin A \\sin B = \\cos(A + B) - \\cos(A - B)$<br>• Jembatan Hafalan: 2SC = S+S, 2CS = S-S, 2CC = C+C, -2SS = C-C.",
    "tag": "Trigonometri"
  },
  {
    "id": "fc-74",
    "category": "Penalaran Matematika & PK",
    "title": "Aturan Perkalian, Pembagian, & Rantai Turunan",
    "front": "Bagaimana rumus turunan untuk perkalian dua fungsi, pembagian dua fungsi, dan aturan rantai?",
    "back": "• Perkalian: $[u \\cdot v]' = u' v + u v'$<br>• Pembagian: $\\left[\\frac{u}{v}\\right]' = \\frac{u' v - u v'}{v^2}$<br>• Aturan Rantai (Fungsi Komposisi): $\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$<br>• Contoh: Jika $y = (3x^2 - 5)^4$, maka $y' = 4(3x^2 - 5)^3 \\cdot (6x) = 24x(3x^2 - 5)^3$.",
    "tag": "Turunan"
  },
  {
    "id": "fc-75",
    "category": "Penalaran Matematika & PK",
    "title": "Uji Turunan Kedua: Titik Belok & Kecekungan Kurva",
    "front": "Bagaimana cara menentukan kecekungan kurva dan jenis titik stasioner menggunakan turunan kedua ($f''(x)$)?",
    "back": "• Titik Stasioner dicapai saat $f'(x) = 0$<br>• Jika $f''(x) < 0 \\implies$ Titik <strong>Maksimum Lokal</strong> (Kurva cekung ke bawah $\\cap$)<br>• Jika $f''(x) > 0 \\implies$ Titik <strong>Minimum Lokal</strong> (Kurva cekung ke atas $\\cup$)<br>• Jika $f''(x) = 0$ dan terjadi perubahan tanda kecekungan $\\implies$ <strong>Titik Belok</strong>.",
    "tag": "Kalkulus"
  },
  {
    "id": "fc-76",
    "category": "Penalaran Matematika & PK",
    "title": "Integral Tak Tentu Dasar & Aturan Substitusi",
    "front": "Tuliskan rumus integral fungsi aljabar pangkat $n$ dan teknik integral substitusi aljabar!",
    "back": "• Integral Aljabar: $\\int x^n \\, dx = \\frac{1}{n+1} x^{n+1} + C$ (untuk $n \\neq -1$)<br>• Jika $n = -1$: $\\int \\frac{1}{x} \\, dx = \\ln|x| + C$<br>• Bentuk Linier: $\\int (ax + b)^n \\, dx = \\frac{1}{a(n+1)}(ax + b)^{n+1} + C$<br>• Integral Substitusi: $\\int f(g(x)) \\cdot g'(x) \\, dx = \\int f(u) \\, du = F(u) + C$.",
    "tag": "Integral"
  },
  {
    "id": "fc-77",
    "category": "Penalaran Matematika & PK",
    "title": "Integral Tentu & Luas Antara Dua Kurva",
    "front": "Bagaimana cara menghitung luas daerah di antara kurva $y_1 = f(x)$ dan $y_2 = g(x)$ pada interval $[a, b]$?",
    "back": "• Rumus Umum: $L = \\int_{a}^{b} (y_{\\text{atas}} - y_{\\text{bawah}}) \\, dx$<br>• <strong>Rumus Super Kilat Parabola:</strong> Luas daerah yang dibatasi oleh sebuah parabola dan sebuah garis (atau antara dua parabola) yang berpotongan di 2 titik:<br>$L = \\frac{D\\sqrt{D}}{6a^2}$<br>dengan $D$ adalah diskriminan dari persamaan selisih $(y_1 - y_2 = 0)$. Tanpa perlu integrasi panjang!",
    "tag": "Integral"
  },
  {
    "id": "fc-78",
    "category": "Penalaran Matematika & PK",
    "title": "Perkalian Titik (Dot Product) & Sudut Vektor",
    "front": "Bagaimana rumus perkalian skalar dua vektor dan mencari nilai cosinus sudut antara keduanya?",
    "back": "• Perkalian Titik: $\\vec{u} \\cdot \\vec{v} = u_x v_x + u_y v_y + u_z v_z = |\\vec{u}| |\\vec{v}| \\cos \\theta$<br>• Cosinus Sudut: $\\cos \\theta = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| |\\vec{v}|}$<br>• Sifat Sakti: Dua vektor saling tegak lurus (ortogonal) $\\iff \\vec{u} \\cdot \\vec{v} = 0$.",
    "tag": "Vektor"
  },
  {
    "id": "fc-79",
    "category": "Penalaran Matematika & PK",
    "title": "Proyeksi Skalar & Proyeksi Vektor Ortogonal",
    "front": "Bagaimana rumus panjang proyeksi skalar dan proyeksi vektor $\\vec{a}$ pada $\\vec{b}$?",
    "back": "• Panjang Proyeksi Skalar $\\vec{a}$ pada $\\vec{b}$ (berupa skalar):<br>$|\\vec{c}| = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|}$<br>• Proyeksi Vektor Ortogonal $\\vec{a}$ pada $\\vec{b}$ (berupa vektor):<br>$\\vec{c} = \\left( \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|^2} \\right) \\vec{b}$",
    "tag": "Vektor"
  },
  {
    "id": "fc-80",
    "category": "Penalaran Matematika & PK",
    "title": "Geometri Kubus: Diagonal Sisi, Ruang, & Jarak",
    "front": "Untuk kubus dengan panjang rusuk $s$, berapa panjang diagonal sisi, diagonal ruang, dan jarak titik ke bidang?",
    "back": "• Diagonal Sisi/Bidang: $d_s = s\\sqrt{2}$<br>• Diagonal Ruang: $d_r = s\\sqrt{3}$<br>• Luas Bidang Diagonal: $L = s^2\\sqrt{2}$<br>• <strong>Trik Jarak Kubus:</strong><br>- Jarak titik sudut ke bidang diagonal terjauh $= \\frac{1}{3}s\\sqrt{3}$ atau $\\frac{2}{3}s\\sqrt{3}$<br>- Jarak titik tengah rusuk ke diagonal ruang $= \\frac{1}{2}s\\sqrt{2}$.",
    "tag": "Dimensi Tiga"
  },
  {
    "id": "fc-81",
    "category": "Penalaran Matematika & PK",
    "title": "Transformasi Geometri (Refleksi, Rotasi, Dilatasi)",
    "front": "Sebutkan rumus koordinat bayangan $(x', y')$ untuk pencerminan terhadap garis $y = x$, $y = -x$, rotasi $90^\\circ$, dan dilatasi $[O, k]$!",
    "back": "• Refleksi thd garis $y = x \\implies (y, x)$<br>• Refleksi thd garis $y = -x \\implies (-y, -x)$<br>• Refleksi thd garis $x = h \\implies (2h - x, y)$<br>• Refleksi thd garis $y = k \\implies (x, 2k - y)$<br>• Rotasi $+90^\\circ$ berpusat di $(0,0) \\implies (-y, x)$<br>• Rotasi $180^\\circ$ berpusat di $(0,0) \\implies (-x, -y)$<br>• Dilatasi $[(0,0), k] \\implies (kx, ky)$",
    "tag": "Transformasi"
  },
  {
    "id": "fc-82",
    "category": "Penalaran Matematika & PK",
    "title": "Pertidaksamaan Nilai Mutlak",
    "front": "Bagaimana sifat penyelesaian $|f(x)| < a$ dan $|f(x)| > a$ untuk $a > 0$?",
    "back": "• Bentuk $|f(x)| < a \\iff -a < f(x) < a$ (interval diapit)<br>• Bentuk $|f(x)| > a \\iff f(x) < -a \\text{ atau } f(x) > a$ (interval terpisah)<br>• Bentuk $|f(x)| < |g(x)|$: Kuadratkan kedua ruas:<br>$(f(x))^2 - (g(x))^2 < 0 \\iff [f(x) + g(x)][f(x) - g(x)] < 0$.",
    "tag": "Pertidaksamaan"
  },
  {
    "id": "fc-83",
    "category": "Penalaran Matematika & PK",
    "title": "Statistika: Ukuran Pemusatan & Letak Data",
    "front": "Bagaimana rumus Median ($Me$) dan Modus ($Mo$) untuk data kelompok bertabel distribusi frekuensi?",
    "back": "• <strong>Median (Kuartil Tengah $Q_2$):</strong><br>$Me = T_b + \\left( \\frac{\\frac{1}{2}n - f_k}{f_{me}} \\right) p$<br>• <strong>Modus:</strong><br>$Mo = T_b + \\left( \\frac{d_1}{d_1 + d_2} \\right) p$<br>($T_b$ = tepi bawah kelas, $p$ = panjang kelas, $d_1$ = selisih frekuensi kelas modus dengan sebelumnya, $d_2$ = dengan sesudahnya).",
    "tag": "Statistika"
  },
  {
    "id": "fc-84",
    "category": "Penalaran Matematika & PK",
    "title": "Statistika: Ragam (Varians) & Simpangan Baku",
    "front": "Tuliskan rumus simpangan rata-rata ($SR$), ragam ($S^2$), dan simpangan baku ($S$) data tunggal!",
    "back": "• Simpangan Rata-Rata: $SR = \\frac{1}{n} \\sum |x_i - \\bar{x}|$<br>• Ragam / Varians: $S^2 = \\frac{1}{n} \\sum (x_i - \\bar{x})^2$<br>• Simpangan Baku: $S = \\sqrt{S^2} = \\sqrt{\\frac{1}{n} \\sum (x_i - \\bar{x})^2}$<br>• Jangkauan Antarkuartil: $H = Q_3 - Q_1$, Simpangan Kuartil: $Q_d = \\frac{1}{2}(Q_3 - Q_1)$.",
    "tag": "Statistika"
  },
  {
    "id": "fc-85",
    "category": "Penalaran Matematika & PK",
    "title": "Pengaruh Perubahan Nilai Data pada Statistika",
    "front": "Apa yang terjadi pada nilai Mean, Median, Modus, dan Simpangan Baku jika setiap data ditambah $k$ atau dikali $m$?",
    "back": "• <strong>Jika setiap data DITAMBAH / DIKURANG $k$:</strong><br>- Ukuran Pemusatan (Mean, Median, Modus): Berubah ikut $+/- k$.<br>- Ukuran Penyebaran (Jangkauan, Simpangan Baku, Varians): <strong>TETAP TIDAK BERUBAH</strong>.<br>• <strong>Jika setiap data DIKALI / DIBAGI $m$:</strong><br>- Semua ukuran pemusatan ikut dikali/dibagi $m$.<br>- Semua ukuran penyebaran ikut dikali/dibagi $|m|$ (khusus Varians dikali $m^2$).",
    "tag": "Statistika"
  },
  {
    "id": "fc-86",
    "category": "Penalaran Matematika & PK",
    "title": "Fungsi Komposisi & Trik Invers Pecahan Aljabar",
    "front": "Bagaimana sifat invers fungsi komposisi dan rumus cepat mencari invers dari $f(x) = \\frac{ax + b}{cx + d}$?",
    "back": "• Sifat Invers Komposisi: $(f \\circ g)^{-1}(x) = (g^{-1} \\circ f^{-1})(x)$<br>• Sifat Operasi: $(f \\circ f^{-1})(x) = x$<br>• <strong>Trik Cepat Invers Pecahan:</strong><br>Jika $f(x) = \\frac{ax + b}{cx + d} \\implies f^{-1}(x) = \\frac{-dx + b}{cx - a}$<br>(Tukar posisi $a$ dan $d$, lalu ubah tanda $+/-$). Sangat cepat!",
    "tag": "Fungsi"
  },
  {
    "id": "fc-87",
    "category": "Penalaran Matematika & PK",
    "title": "Barisan Aritmetika Bertingkat Dua",
    "front": "Bagaimana rumus suku ke-n ($U_n$) untuk barisan bilangan dengan beda konstan pada tingkat kedua?",
    "back": "• Bentuk Umum: $U_n = an^2 + bn + c$<br>• Trik Sistem Persamaan Pola Awal Barisan:<br>1. Suku pertama: $a + b + c = U_1$<br>2. Beda tingkat 1 pertama: $3a + b = U_2 - U_1$<br>3. Beda tingkat 2 konstan: $2a = b_2$<br>• Hitung $a$ dari $2a = b_2$, lalu cari $b$, lalu cari $c$. Selesai!",
    "tag": "Pola Bilangan"
  },
  {
    "id": "fc-88",
    "category": "Penalaran Matematika & PK",
    "title": "Aritmetika Sosial: Diskon Bertingkat & Untung-Rugi",
    "front": "Bagaimana rumus persentase untung/rugi terhadap harga beli dan rumus diskon bertingkat ($d_1\\% + d_2\\%$)?",
    "back": "• Untung: $U = HJ - HB$, Rugi: $R = HB - HJ$<br>• Persentase Untung: $\\%U = \\frac{U}{HB} \\times 100\\%$<br>• <strong>Trik Diskon Bertingkat:</strong> Jika toko memberi diskon berturut-turut $d_1$ dan $d_2$:<br>Harga Akhir $= (1 - d_1)(1 - d_2) \\times \\text{Harga Awal}$<br>Diskon Total $= 1 - (1 - d_1)(1 - d_2)$<br>Contoh: Diskon $50\\% + 20\\% \\implies$ Diskon Total $= 1 - (0{,}5 \\times 0{,}8) = 1 - 0{,}4 = 60\\%$ (Bukan 70%!).",
    "tag": "Aritmetika Sosial"
  },
  {
    "id": "fc-89",
    "category": "Penalaran Matematika & PK",
    "title": "Bunga Tunggal vs Bunga Majemuk",
    "front": "Tuliskan perbedaan formula modal akhir antara Bunga Tunggal dan Bunga Majemuk setelah $n$ periode!",
    "back": "• <strong>Bunga Tunggal (Bunga hanya dihitung dari modal awal):</strong><br>$M_n = M_0 (1 + i \\cdot n)$<br>• <strong>Bunga Majemuk (Bunga berbunga secara eksponensial):</strong><br>$M_n = M_0 (1 + i)^n$<br>• Di mana $M_0$ = modal awal, $i$ = suku bunga per periode, $n$ = jumlah periode.",
    "tag": "Aritmetika Sosial"
  },
  {
    "id": "fc-90",
    "category": "Penalaran Matematika & PK",
    "title": "Persamaan Garis: Gradien & Hubungan Dua Garis",
    "front": "Bagaimana rumus mencari gradien garis lurus dari persamaan $Ax + By + C = 0$ dan syarat dua garis sejajar/tegak lurus?",
    "back": "• Gradien bentuk implisit: $m = -\\frac{A}{B}$<br>• Gradien melalui dua titik: $m = \\frac{y_2 - y_1}{x_2 - x_1}$<br>• Persamaan garis bergradien $m$ melalui $(x_1, y_1)$: $y - y_1 = m(x - x_1)$<br>• <strong>Dua Garis Sejajar:</strong> $m_1 = m_2$<br>• <strong>Dua Garis Tegak Lurus:</strong> $m_1 \\cdot m_2 = -1 \\iff m_2 = -\\frac{1}{m_1}$",
    "tag": "Geometri Analitik"
  },
  {
    "id": "fc-91",
    "category": "Penalaran Matematika & PK",
    "title": "Kesebangunan Segitiga Siku-Siku (Rumus Air Mancur)",
    "front": "Jika segitiga siku-siku $ABC$ di $A$ ditarik garis tinggi $AD \\perp BC$, sebutkan rumus panjang $AB^2$, $AC^2$, dan $AD^2$!",
    "back": "• Sisi miring terbagi menjadi $BD$ dan $DC$.<br>• $AB^2 = BD \\cdot BC$<br>• $AC^2 = CD \\cdot CB$<br>• $AD^2 = BD \\cdot DC$<br>• Hubungan Luas: $AB \\cdot AC = AD \\cdot BC \\implies AD = \\frac{AB \\cdot AC}{BC}$",
    "tag": "Geometri"
  },
  {
    "id": "fc-92",
    "category": "Penalaran Matematika & PK",
    "title": "Sudut, Busur, & Juring Lingkaran",
    "front": "Bagaimana hubungan sudut pusat dan keliling, serta rumus panjang busur dan luas juring lingkaran?",
    "back": "• Sudut Pusat $= 2 \\times$ Sudut Keliling (jika menghadap busur yang sama)<br>• Sudut keliling yang menghadap diameter $= 90^\\circ$ (siku-siku)<br>• Panjang Busur: $P = \\frac{\\theta}{360^\\circ} \\times 2\\pi r$<br>• Luas Juring: $L = \\frac{\\theta}{360^\\circ} \\times \\pi r^2$<br>• Hubungan Cepat: Luas Juring $= \\frac{1}{2} \\times \\text{Panjang Busur} \\times r$.",
    "tag": "Lingkaran"
  },
  {
    "id": "fc-93",
    "category": "Penalaran Matematika & PK",
    "title": "Triple Pythagoras & Luas Segitiga Sembarang",
    "front": "Sebutkan deret triple Pythagoras yang wajib dihafal dan rumus jari-jari lingkaran dalam/luar segitiga!",
    "back": "• <strong>Triple Pythagoras Populer:</strong><br>- 3, 4, 5 (dan kelipatannya: 6-8-10, 9-12-15)<br>- 5, 12, 13<br>- 7, 24, 25<br>- 8, 15, 17<br>- 9, 40, 41<br>• Jari-jari lingkaran dalam: $r_{\\text{dalam}} = \\frac{L_{\\Delta}}{s}$ (dengan $s = \\frac{a+b+c}{2}$)<br>• Jari-jari lingkaran luar: $R_{\\text{luar}} = \\frac{abc}{4 L_{\\Delta}}$",
    "tag": "Geometri"
  },
  {
    "id": "fc-94",
    "category": "Penalaran Matematika & PK",
    "title": "Prinsip Inklusi-Eksklusi Kardinalitas Himpunan",
    "front": "Bagaimana rumus menghitung jumlah anggota gabungan 2 dan 3 himpunan ($n(A \\cup B)$ dan $n(A \\cup B \\cup C)$)?",
    "back": "• 2 Himpunan: $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$<br>• 3 Himpunan:<br>$n(A \\cup B \\cup C) = n(A) + n(B) + n(C) - [n(A \\cap B) + n(B \\cap C) + n(A \\cap C)] + n(A \\cap B \\cap C)$<br>• Sangat krusial untuk menyelesaikan soal cerita survei di Penalaran Matematika!",
    "tag": "Himpunan"
  },
  {
    "id": "fc-95",
    "category": "Fisika",
    "title": "Gerak Melingkar Beraturan (GMB) & Percepatan Sentripetal",
    "front": "Bagaimana hubungan kecepatan sudut ($\\omega$), linier ($v$), percepatan sentripetal ($a_s$), dan gaya sentripetal ($F_s$)?",
    "back": "• Hubungan Linier & Sudut: $v = \\omega \\cdot R$<br>• Frekuensi & Periode: $\\omega = 2\\pi f = \\frac{2\\pi}{T}$<br>• Percepatan Sentripetal (menuju pusat): $a_s = \\frac{v^2}{R} = \\omega^2 R$<br>• Gaya Sentripetal: $F_s = m \\cdot a_s = m \\frac{v^2}{R} = m \\omega^2 R$<br>• Pada tikungan miring licin: $\\tan \\theta = \\frac{v^2}{gR}$.",
    "tag": "Kinematika Melingkar"
  },
  {
    "id": "fc-96",
    "category": "Fisika",
    "title": "Hukum Gravitasi Newton & Percepatan Gravitasi Planet",
    "front": "Bagaimana rumus gaya gravitasi antar massa dan perbandingan kuat medan gravitasi pada ketinggian $h$ di atas permukaan bumi?",
    "back": "• Gaya Gravitasi: $F = G \\frac{M m}{r^2}$ ($G = 6{,}67 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$)<br>• Kuat Medan Gravitasi di Permukaan: $g_0 = G \\frac{M}{R^2}$<br>• Gravitasi di Ketinggian $h$: $g_h = g_0 \\left( \\frac{R}{R + h} \\right)^2$<br>• Hukum III Kepler: $\\frac{T_1^2}{T_2^2} = \\frac{R_1^3}{R_2^3}$",
    "tag": "Gravitasi"
  },
  {
    "id": "fc-97",
    "category": "Fisika",
    "title": "Kecepatan Lepas & Kecepatan Satelit Mengorbit",
    "front": "Berapa kecepatan minimal benda agar lepas dari gravitasi bumi ($v_{\\text{lepas}}$) dan kecepatan satelit mengorbit rendah?",
    "back": "• Kecepatan Lepas Bumi: $v_{\\text{lepas}} = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR}$<br>• Kecepatan Orbit Rendah: $v_{\\text{orbit}} = \\sqrt{\\frac{GM}{R}} = \\sqrt{gR}$<br>• Hubungan: $v_{\\text{lepas}} = \\sqrt{2} \\times v_{\\text{orbit}} \\approx 1{,}414 \\times v_{\\text{orbit}}$.",
    "tag": "Gravitasi"
  },
  {
    "id": "fc-98",
    "category": "Fisika",
    "title": "Modulus Elastisitas (Young) & Tegangan-Regangan",
    "front": "Bagaimana rumus tegangan ($\\sigma$), regangan ($e$), dan Modulus Young ($E$) kawat yang ditarik gaya $F$?",
    "back": "• Tegangan (Stress): $\\sigma = \\frac{F}{A}$ ($A$ = luas penampang)<br>• Regangan (Strain): $e = \\frac{\\Delta L}{L_0}$ (tanpa satuan)<br>• Modulus Young: $E = \\frac{\\sigma}{e} = \\frac{F \\cdot L_0}{A \\cdot \\Delta L}$<br>• Konstanta Pegas Kawat: $k = \\frac{E \\cdot A}{L_0}$.",
    "tag": "Elastisitas"
  },
  {
    "id": "fc-99",
    "category": "Fisika",
    "title": "Hukum Hooke & Susunan Pegas Seri-Paralel",
    "front": "Bagaimana rumus gaya pemulih pegas serta konstanta pegas pengganti susunan seri dan paralel?",
    "back": "• Hukum Hooke: $F = k \\cdot \\Delta x$<br>• Energi Potensial Pegas: $EP = \\frac{1}{2} k (\\Delta x)^2 = \\frac{1}{2} F \\cdot \\Delta x$<br>• <strong>Susunan Seri (gaya sama, pertambahan panjang dijumlah):</strong><br>$\\frac{1}{k_s} = \\frac{1}{k_1} + \\frac{1}{k_2}$<br>• <strong>Susunan Paralel (pertambahan panjang sama, gaya dijumlah):</strong><br>$k_p = k_1 + k_2$",
    "tag": "Elastisitas"
  },
  {
    "id": "fc-100",
    "category": "Fisika",
    "title": "Getaran Harmonik Sederhana: Pegas & Bandul",
    "front": "Bagaimana rumus periode getaran ($T$) untuk beban pada pegas dan bandul sederhana?",
    "back": "• <strong>Periode Pegas:</strong> $T = 2\\pi \\sqrt{\\frac{m}{k}}$ (hanya bergantung massa $m$ dan konstanta $k$)<br>• <strong>Periode Bandul Matematis:</strong> $T = 2\\pi \\sqrt{\\frac{L}{g}}$ (hanya bergantung panjang tali $L$ dan gravitasi $g$)<br>• Frekuensi adalah kebalikan periode: $f = \\frac{1}{T}$. Perhatikan bahwa amplitudo TIDAK memengaruhi periode!",
    "tag": "Getaran Harmonik"
  },
  {
    "id": "fc-101",
    "category": "Fisika",
    "title": "Kinematika & Energi Getaran Harmonik",
    "front": "Tuliskan persamaan simpangan ($y$), kecepatan ($v$), dan energi total getaran harmonik!",
    "back": "• Simpangan: $y = A \\sin(\\omega t)$<br>• Kecepatan: $v = \\omega A \\cos(\\omega t) = \\omega \\sqrt{A^2 - y^2} \\implies v_{\\text{max}} = \\omega A$<br>• Percepatan: $a = -\\omega^2 y \\implies a_{\\text{max}} = \\omega^2 A$<br>• Energi Kinetik: $EK = \\frac{1}{2} m v^2 = \\frac{1}{2} k (A^2 - y^2)$<br>• Energi Mekanik Total: $EM = \\frac{1}{2} k A^2$ (selalu konstan di setiap titik).",
    "tag": "Getaran Harmonik"
  },
  {
    "id": "fc-102",
    "category": "Fisika",
    "title": "Torsi & Momen Inersia Benda Tegar",
    "front": "Bagaimana rumus torsi (momen gaya) dan sebutkan nilai momen inersia ($I$) untuk silinder pejal, bola pejal, dan batang poros tengah!",
    "back": "• Momen Gaya: $\\tau = F \\cdot r \\cdot \\sin \\theta = I \\cdot \\alpha$<br>• <strong>Nilai Momen Inersia ($I = k \\cdot m R^2$):</strong><br>- Cincin tipis / Silinder berongga: $I = mR^2$ ($k = 1$)<br>- Silinder pejal: $I = \\frac{1}{2}mR^2$ ($k = 1/2$)<br>- Bola pejal: $I = \\frac{2}{5}mR^2$ ($k = 2/5$)<br>- Kulit bola berongga: $I = \\frac{2}{3}mR^2$ ($k = 2/3$)<br>- Batang poros pusat massa: $I = \\frac{1}{12}mL^2$; poros ujung: $I = \\frac{1}{3}mL^2$.",
    "tag": "Dinamika Rotasi"
  },
  {
    "id": "fc-103",
    "category": "Fisika",
    "title": "Energi Kinetik Menggelinding & Percepatan Bidang Miring",
    "front": "Bagaimana rumus energi kinetik total benda menggelinding murni dan percepatannya saat meluncur menuruni bidang miring?",
    "back": "• Energi Kinetik Total: $EK_{\\text{tot}} = EK_{\\text{translasi}} + EK_{\\text{rotasi}} = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2 = \\frac{1}{2}mv^2(1 + k)$<br>• <strong>Trik Kilat Bidang Miring Bersudut $\\theta$:</strong><br>Percepatan menggelinding: $a = \\frac{g \\sin \\theta}{1 + k}$<br>Kecepatan di dasar: $v = \\sqrt{\\frac{2gh}{1 + k}}$<br>(Benda dengan $k$ paling kecil meluncur paling cepat!).",
    "tag": "Dinamika Rotasi"
  },
  {
    "id": "fc-104",
    "category": "Fisika",
    "title": "Momentum Sudut & Hukum Kekekalan",
    "front": "Bagaimana rumus momentum sudut ($L$) dan aplikasi hukum kekekalannya?",
    "back": "• Rumus: $L = I \\cdot \\omega = m \\cdot v \\cdot r$<br>• Satuan: $\\text{kg}\\cdot\\text{m}^2/\\text{s}$<br>• <strong>Hukum Kekekalan Momentum Sudut (saat $\\Sigma \\tau_{\\text{eksternal}} = 0$):</strong><br>$I_1 \\omega_1 = I_2 \\omega_2$<br>• Contoh Klasik: Penari balet yang merapatkan tangannya memperkecil $I$, sehingga kecepatan putar $\\omega$ melonjak tajam!",
    "tag": "Dinamika Rotasi"
  },
  {
    "id": "fc-105",
    "category": "Fisika",
    "title": "Titik Berat Benda 2 Dimensi (Bidang Datar)",
    "front": "Bagaimana rumus koordinat titik berat gabungan bidang dan letak titik berat segitiga serta setengah lingkaran?",
    "back": "• Koordinat Titik Berat Gabungan:<br>$x_0 = \\frac{\\sum x_i A_i}{\\sum A_i}, \\quad y_0 = \\frac{\\sum y_i A_i}{\\sum A_i}$<br>• Jika ada bagian yang berlubang/dipotong, luasnya menjadi pengurang ($-A$).<br>• <strong>Titik Berat Khusus dari Alas:</strong><br>- Segitiga setinggi $t$: $y_0 = \\frac{1}{3}t$<br>- Setengah Lingkaran berjari-jari $R$: $y_0 = \\frac{4R}{3\\pi}$",
    "tag": "Keseimbangan"
  },
  {
    "id": "fc-106",
    "category": "Fisika",
    "title": "Kalor, Perubahan Wujud, & Asas Black",
    "front": "Tuliskan rumus kalor untuk menaikkan suhu, melebur zat, dan persamaan Asas Black!",
    "back": "• Menaikkan Suhu: $Q = m \\cdot c \\cdot \\Delta T$ atau $Q = C \\cdot \\Delta T$ ($C$ = kapasitas kalor)<br>• Perubahan Wujud (Suhu Konstan): $Q = m \\cdot L$ (Lebur) atau $Q = m \\cdot U$ (Uap)<br>• <strong>Asas Black:</strong> $Q_{\\text{lepas}} = Q_{\\text{terima}}$<br>$m_1 c_1 (T_1 - T_c) = m_2 c_2 (T_c - T_2)$ dengan $T_1 > T_c > T_2$.",
    "tag": "Suhu & Kalor"
  },
  {
    "id": "fc-107",
    "category": "Fisika",
    "title": "Perpindahan Kalor (Konduksi, Konveksi, Radiasi)",
    "front": "Bagaimana rumus laju aliran kalor secara konduksi batang logam dan radiasi benda hitam?",
    "back": "• <strong>Konduksi (Hantaran):</strong> $H = \\frac{Q}{t} = \\frac{k \\cdot A \\cdot \\Delta T}{L}$<br>Trik Sambungan Dua Logam: $\\frac{k_1 A_1 \\Delta T_1}{L_1} = \\frac{k_2 A_2 \\Delta T_2}{L_2}$<br>• <strong>Konveksi (Aliran Fluida):</strong> $H = h \\cdot A \\cdot \\Delta T$<br>• <strong>Radiasi (Pancaran Gelombang):</strong> $P = \\frac{Q}{t} = e \\cdot \\sigma \\cdot A \\cdot T^4$<br>($\\sigma = 5{,}67 \\times 10^{-8}\\text{ W/m}^2\\text{K}^4$, $T$ wajib dalam Kelvin!).",
    "tag": "Perpindahan Kalor"
  },
  {
    "id": "fc-108",
    "category": "Fisika",
    "title": "Pemuaian Panjang, Luas, & Volume Zat",
    "front": "Bagaimana rumus pertambahan panjang, luas, dan volume zat padat akibat perubahan suhu $\\Delta T$?",
    "back": "• Muai Panjang: $\\Delta L = L_0 \\cdot \\alpha \\cdot \\Delta T \\implies L_t = L_0(1 + \\alpha \\Delta T)$<br>• Muai Luas: $\\Delta A = A_0 \\cdot \\beta \\cdot \\Delta T \\implies \\beta = 2\\alpha$<br>• Muai Volume: $\\Delta V = V_0 \\cdot \\gamma \\cdot \\Delta T \\implies \\gamma = 3\\alpha$<br>• Di mana $\\alpha$ = koefisien muai panjang, $\\beta$ = luas, $\\gamma$ = volume.",
    "tag": "Suhu & Kalor"
  },
  {
    "id": "fc-109",
    "category": "Fisika",
    "title": "Hukum I Termodinamika & Usaha Gas",
    "front": "Tuliskan bunyi Hukum I Termodinamika dan rumus usaha ($W$) pada proses isobarik, isokhorik, serta isotermal!",
    "back": "• Hukum I Termodinamika: $\\Delta U = Q - W$<br>• <strong>Isobarik ($P$ konstan):</strong> $W = P \\Delta V = P(V_2 - V_1)$<br>• <strong>Isokhorik ($V$ konstan):</strong> $\\Delta V = 0 \\implies W = 0 \\implies Q = \\Delta U$<br>• <strong>Isotermal ($T$ konstan):</strong> $\\Delta T = 0 \\implies \\Delta U = 0 \\implies Q = W = nRT \\ln\\left(\\frac{V_2}{V_1}\\right)$<br>• <strong>Adiabatik ($Q = 0$):</strong> $W = -\\Delta U = -\\frac{3}{2}nR\\Delta T$.",
    "tag": "Termodinamika"
  },
  {
    "id": "fc-110",
    "category": "Fisika",
    "title": "Kapasitor Keping Sejajar & Energi Tersimpan",
    "front": "Bagaimana rumus kapasitas kapasitor keping sejajar dan energi yang tersimpan di dalam medan listriknya?",
    "back": "• Kapasitas dalam Udara: $C = \\frac{\\varepsilon_0 A}{d}$<br>• Dengan Dielektrik ($K$): $C' = K \\cdot C = \\frac{K \\varepsilon_0 A}{d}$<br>• Muatan Kapasitor: $Q = C \\cdot V$<br>• <strong>Energi Tersimpan:</strong> $W = \\frac{1}{2} C V^2 = \\frac{1}{2} Q V = \\frac{Q^2}{2C}$<br>• Susunan Seri: $\\frac{1}{C_s} = \\frac{1}{C_1} + \\frac{1}{C_2}$; Susunan Paralel: $C_p = C_1 + C_2$.",
    "tag": "Elektrostatis"
  },
  {
    "id": "fc-111",
    "category": "Fisika",
    "title": "Hukum Kirchhoff I & II Rangkaian Loop",
    "front": "Bagaimana bunyi Hukum Kirchhoff I (arus) dan II (tegangan loop) untuk menyelesaikan rangkaian majemuk?",
    "back": "• <strong>Hukum I Kirchhoff (Titik Percabangan):</strong> $\\Sigma I_{\\text{masuk}} = \\Sigma I_{\\text{keluar}}$<br>• <strong>Hukum II Kirchhoff (Loop Tertutup):</strong> $\\Sigma \\varepsilon + \\Sigma (I \\cdot R) = 0$<br>• <strong>Kaidah Tanda:</strong><br>- Kutub baterai: Temu kutub pendek dulu $\\to (-)$, temu kutub panjang $\\to (+)$<br>- Arus: Searah lintasan loop $\\to (+IR)$, berlawanan arah $\\to (-IR)$.",
    "tag": "Listrik Dinamis"
  },
  {
    "id": "fc-112",
    "category": "Fisika",
    "title": "Medan Magnet di Sekitar Kawat Berarus",
    "front": "Tuliskan rumus kuat medan magnet ($B$) pada kawat lurus panjang, solenoida (pusat & ujung), dan toroida!",
    "back": "• <strong>Kawat Lurus Panjang berjarak $a$:</strong> $B = \\frac{\\mu_0 I}{2\\pi a}$<br>• <strong>Pusat Kawat Melingkar berjari-jari $a$:</strong> $B = \\frac{\\mu_0 I}{2a} \\cdot N$<br>• <strong>Solenoida:</strong><br>- Di pusat sumbu: $B = \\frac{\\mu_0 N I}{L} = \\mu_0 n I$<br>- Di ujung solenoida: $B = \\frac{\\mu_0 N I}{2L}$<br>• <strong>Toroida:</strong> $B = \\frac{\\mu_0 N I}{2\\pi r}$<br>($\\mu_0 = 4\\pi \\times 10^{-7}\\text{ Wb/A}\\cdot\\text{m}$).",
    "tag": "Kemagnetan"
  },
  {
    "id": "fc-113",
    "category": "Fisika",
    "title": "Gaya Magnetik Dua Kawat Sejajar",
    "front": "Berapa besar gaya persatuan panjang antara dua kawat lurus sejajar berarus dan bagaimana interaksi arahnya?",
    "back": "• Rumus: $\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$<br>• <strong>Arah Interaksi:</strong><br>- Arus <strong>searah</strong> $\\implies$ Tarik-menarik.<br>- Arus <strong>berlawanan arah</strong> $\\implies$ Tolak-menolak.<br>(Ingat kebalikannya dengan muatan listrik statis!).",
    "tag": "Kemagnetan"
  },
  {
    "id": "fc-114",
    "category": "Fisika",
    "title": "Hukum Faraday & GGL Induksi Elektromagnetik",
    "front": "Bagaimana rumus GGL induksi menurut Hukum Faraday-Lenz dan pada kawat yang bergerak memotong medan magnet?",
    "back": "• Hukum Faraday: $\\varepsilon = -N \\frac{\\Delta \\Phi}{\\Delta t} = -N \\frac{d\\Phi}{dt}$ (Fluks $\\Phi = B \\cdot A \\cos \\theta$)<br>• <strong>Kawat Bergerak Memotong $B$:</strong> $\\varepsilon = B \\cdot L \\cdot v \\cdot \\sin \\theta$<br>• Generator Berputar: $\\varepsilon = N \\cdot B \\cdot A \\cdot \\omega \\cdot \\sin(\\omega t) \\implies \\varepsilon_{\\text{max}} = N B A \\omega$<br>• Induktor Diri: $\\varepsilon = -L \\frac{dI}{dt}$, Energi Induktor: $W = \\frac{1}{2} L I^2$.",
    "tag": "Induksi EM"
  },
  {
    "id": "fc-115",
    "category": "Fisika",
    "title": "Transformator (Trafo) & Efisiensi Daya",
    "front": "Bagaimana hubungan perbandingan lilitan, tegangan, dan arus pada trafo ideal serta efisiensi trafo nyata?",
    "back": "• <strong>Trafo Ideal (Efisiensi 100%):</strong> $\\frac{V_p}{V_s} = \\frac{N_p}{N_s} = \\frac{I_s}{I_p}$<br>(Step-up: $N_s > N_p, V_s > V_p$; Step-down: $N_s < N_p, V_s < V_p$)<br>• <strong>Efisiensi Trafo Nyata:</strong><br>$\\eta = \\frac{P_{\\text{out}}}{P_{\\text{in}}} \\times 100\\% = \\frac{V_s \\cdot I_s}{V_p \\cdot I_p} \\times 100\\%$",
    "tag": "Induksi EM"
  },
  {
    "id": "fc-116",
    "category": "Fisika",
    "title": "Rangkaian Arus Bolak-Balik R-L-C & Resonansi",
    "front": "Bagaimana rumus impedansi ($Z$), frekuensi resonansi ($f_r$), dan faktor daya pada rangkaian AC seri?",
    "back": "• Reaktansi Induktif: $X_L = \\omega L$; Reaktansi Kapasitif: $X_C = \\frac{1}{\\omega C}$<br>• Impedansi: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$<br>• <strong>Syarat Resonansi ($X_L = X_C \\implies Z = R$ minimum, arus $I$ maksimum):</strong><br>$f_r = \\frac{1}{2\\pi \\sqrt{LC}}$<br>• Faktor Daya: $\\cos \\phi = \\frac{R}{Z}$; Daya Nyata: $P = V_{\\text{eff}} \\cdot I_{\\text{eff}} \\cdot \\cos \\phi$.",
    "tag": "Arus Bolak-Balik"
  },
  {
    "id": "fc-117",
    "category": "Fisika",
    "title": "Persamaan Gelombang Berjalan",
    "front": "Tuliskan bentuk baku persamaan gelombang berjalan $y = A \\sin(\\omega t \\pm kx)$ dan cara mencari cepat rambatnya!",
    "back": "• Persamaan: $y = \\pm A \\sin(\\omega t \\mp kx)$<br>- Tanda depan $A$: $(+)$ getaran awal ke atas, $(-)$ ke bawah.<br>- Tanda dalam kurung: $(-)$ merambat ke kanan, $(+)$ ke kiri.<br>• Bilangan Gelombang: $k = \\frac{2\\pi}{\\lambda}$; Frekuensi Sudut: $\\omega = 2\\pi f$<br>• <strong>Trik Cepat Cepat Rambat ($v$):</strong> $v = \\lambda \\cdot f = \\frac{\\omega}{k}$ (Bagi koefisien $t$ dengan koefisien $x$!).",
    "tag": "Gelombang"
  },
  {
    "id": "fc-118",
    "category": "Fisika",
    "title": "Gelombang Stasioner: Ujung Terikat vs Ujung Bebas",
    "front": "Bagaimana persamaan simpangan dan letak simpul/perut gelombang stasioner ujung terikat vs bebas?",
    "back": "• <strong>Ujung Bebas:</strong> $y = 2A \\cos(kx) \\sin(\\omega t)$ (di titik pantul terbentuk perut)<br>- Letak Perut dari pantul: $x_p = n \\left(\\frac{1}{2}\\lambda\\right)$, $n = 0, 1, 2, \\dots$<br>• <strong>Ujung Terikat:</strong> $y = 2A \\sin(kx) \\cos(\\omega t)$ (di titik pantul terbentuk simpul)<br>- Letak Simpul dari pantul: $x_s = n \\left(\\frac{1}{2}\\lambda\\right)$, $n = 0, 1, 2, \\dots$",
    "tag": "Gelombang"
  },
  {
    "id": "fc-119",
    "category": "Fisika",
    "title": "Cepat Rambat Dawai Melde & Resonansi Pipa Organa",
    "front": "Bagaimana rumus cepat rambat gelombang transversal pada dawai Melde dan perbandingan frekuensi nada pipa organa terbuka vs tertutup?",
    "back": "• Hukum Melde: $v = \\sqrt{\\frac{F}{\\mu}} = \\sqrt{\\frac{F \\cdot L}{m}} = \\sqrt{\\frac{F}{\\rho \\cdot A}}$<br>• <strong>Pipa Organa Terbuka (POB):</strong> Nada dasar $f_0 = \\frac{v}{2L}$. Perbandingan nada: $f_0 : f_1 : f_2 = 1 : 2 : 3 : \\dots$<br>• <strong>Pipa Organa Tertutup (POT):</strong> Nada dasar $f_0 = \\frac{v}{4L}$. Perbandingan nada: $f_0 : f_1 : f_2 = 1 : 3 : 5 : \\dots$ (Hanya kelipatan ganjil!).",
    "tag": "Gelombang Bunyi"
  },
  {
    "id": "fc-120",
    "category": "Fisika",
    "title": "Taraf Intensitas Bunyi ($TI$): Banyak Sumber & Jarak",
    "front": "Bagaimana rumus perubahan Taraf Intensitas ($TI$) akibat penambahan jumlah sumber identik dan perubahan jarak pengamat?",
    "back": "• Definisi: $TI = 10 \\log \\left(\\frac{I}{I_0}\\right)$ dengan $I_0 = 10^{-12}\\text{ W/m}^2$<br>• <strong>Perubahan Jumlah $n$ Sumber Identik:</strong><br>$TI_n = TI_1 + 10 \\log n$<br>• <strong>Perubahan Jarak Pengamat dari $r_1$ ke $r_2$:</strong><br>$TI_2 = TI_1 - 20 \\log \\left(\\frac{r_2}{r_1}\\right)$<br>Contoh: Jarak menjauh 10 kali $\\implies TI$ berkurang $20\\text{ dB}$.",
    "tag": "Gelombang Bunyi"
  },
  {
    "id": "fc-121",
    "category": "Fisika",
    "title": "Interferensi Celah Ganda Young & Kisi Difraksi",
    "front": "Bagaimana rumus pola garis terang dan gelap pada eksperimen celah ganda Young dan kisi difraksi?",
    "back": "• <strong>Interferensi Celah Ganda (Jarak celah $d$, jarak ke layar $L$):</strong><br>- Garis Terang (Maksimum): $\\frac{d \\cdot p}{L} = d \\sin \\theta = m \\cdot \\lambda$ ($m = 0, 1, 2, \\dots$)<br>- Garis Gelap (Minimum): $\\frac{d \\cdot p}{L} = d \\sin \\theta = \\left(m - \\frac{1}{2}\\right) \\lambda$<br>• <strong>Kisi Difraksi:</strong> $d = \\frac{1}{N}$ ($N$ = tetapan kisi / garis per cm). Pola terang utama: $d \\sin \\theta = m \\lambda$.",
    "tag": "Optika Fisis"
  },
  {
    "id": "fc-122",
    "category": "Fisika",
    "title": "Pembiasan Cahaya & Hukum Snellius",
    "front": "Tuliskan persamaan Hukum Snellius pembiasan dan syarat sudut kritis pemantulan total sempurna!",
    "back": "• Hukum Snellius: $n_1 \\sin \\theta_1 = n_2 \\sin \\theta_2 \\iff \\frac{\\sin \\theta_1}{\\sin \\theta_2} = \\frac{n_2}{n_1} = \\frac{v_1}{v_2} = \\frac{\\lambda_1}{\\lambda_2}$<br>• Frekuensi cahaya ($f$) <strong>TIDAK PERNAH BERUBAH</strong> saat berpindah medium!<br>• <strong>Pemantulan Total Sempurna:</strong> Terjadi jika cahaya dari medium lebih rapat ke kurang rapat ($n_1 > n_2$) dengan sudut datang melebihi sudut kritis:<br>$\\sin \\theta_k = \\frac{n_2}{n_1}$.",
    "tag": "Optika Geometris"
  },
  {
    "id": "fc-123",
    "category": "Fisika",
    "title": "Alat Optik: Lup (Kaca Pembesar)",
    "front": "Bagaimana rumus perbesaran anguler lup untuk mata berakomodasi maksimum vs tanpa akomodasi?",
    "back": "• Jarak titik dekat normal: $s_n = 25\\text{ cm}$<br>• <strong>Mata Berakomodasi Maksimum:</strong> $M = \\frac{s_n}{f} + 1$<br>(Benda diletakkan di antara $O$ dan $F$, bayangan maya di titik dekat $s' = -s_n$)<br>• <strong>Mata Tanpa Akomodasi (Paling rileks):</strong> $M = \\frac{s_n}{f}$<br>(Benda tepat di titik fokus $s = f$, bayangan terbentuk di tak hingga $\\infty$).",
    "tag": "Alat Optik"
  },
  {
    "id": "fc-124",
    "category": "Fisika",
    "title": "Alat Optik: Mikroskop & Teropong Bintang",
    "front": "Bagaimana rumus perbesaran total dan panjang tabung mikroskop serta teropong bintang?",
    "back": "• <strong>Mikroskop:</strong> Terdiri dari lensa objektif ($f_{\\text{ob}}$ kecil) dan okuler ($f_{\\text{ok}}$).<br>- Perbesaran Total: $M_{\\text{tot}} = M_{\\text{ob}} \\times M_{\\text{ok}} = \\left|\\frac{s'_{\\text{ob}}}{s_{\\text{ob}}}\\right| \\times M_{\\text{ok}}$<br>- Panjang Tabung Mikroskop: $d = s'_{\\text{ob}} + s_{\\text{ok}}$<br>• <strong>Teropong Bintang (Mata Tak Berakomodasi):</strong><br>- Perbesaran: $M = \\frac{f_{\\text{ob}}}{f_{\\text{ok}}}$; Panjang Tabung: $d = f_{\\text{ob}} + f_{\\text{ok}}$.",
    "tag": "Alat Optik"
  },
  {
    "id": "fc-125",
    "category": "Fisika",
    "title": "Relativitas Khusus: Dilatasi Waktu & Kontraksi Panjang",
    "front": "Bagaimana pengaruh kelajuan relativistik terhadap waktu, panjang, dan energi total benda?",
    "back": "• Faktor Lorentz: $\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}} \\ge 1$<br>• <strong>Dilatasi Waktu (Waktu diamati pengamat bergerak melambat):</strong> $\\Delta t = \\gamma \\cdot \\Delta t_0$<br>• <strong>Kontraksi Panjang (Panjang searah gerak memendek):</strong> $L = \\frac{L_0}{\\gamma}$<br>• <strong>Massa Relativistik:</strong> $m = \\gamma \\cdot m_0$<br>• <strong>Energi Total:</strong> $E = m c^2 = E_0 + EK = \\gamma m_0 c^2$.",
    "tag": "Fisika Modern"
  },
  {
    "id": "fc-126",
    "category": "Fisika",
    "title": "Efek Fotolistrik & Panjang Gelombang de Broglie",
    "front": "Bagaimana persamaan efek fotolistrik Einstein dan hubungan panjang gelombang partikel materi de Broglie?",
    "back": "• Energi Foton: $E = h \\cdot f = \\frac{h \\cdot c}{\\lambda}$<br>• Persamaan Einstein: $EK_{\\text{max}} = hf - W_0 = h(f - f_0) = e \\cdot V_s$<br>($W_0$ = fungsi kerja logam, $f_0$ = frekuensi ambang, $V_s$ = potensial henti)<br>• Syarat Elektron Lepas: $f \\ge f_0$ atau $\\lambda \\le \\lambda_0$. Intensitas cahaya hanya menambah jumlah elektron, bukan energinya!<br>• <strong>Panjang Gelombang de Broglie:</strong> $\\lambda = \\frac{h}{p} = \\frac{h}{m \\cdot v}$.",
    "tag": "Fisika Kuantum"
  },
  {
    "id": "fc-127",
    "category": "Fisika",
    "title": "Hukum Pergeseran Wien & Model Atom Bohr",
    "front": "Bagaimana rumus Hukum Pergeseran Wien dan tingkatan energi elektron pada orbit atom hidrogen Bohr?",
    "back": "• <strong>Hukum Pergeseran Wien:</strong> $\\lambda_{\\text{max}} \\cdot T = C = 2{,}898 \\times 10^{-3}\\text{ m}\\cdot\\text{K}$<br>(Makin tinggi suhu benda, puncak emisi bergeser ke panjang gelombang lebih pendek).<br>• <strong>Tingkat Energi Atom Bohr:</strong> $E_n = -\\frac{13{,}6}{n^2}\\text{ eV}$<br>• Foton yang Dipancarkan saat Transisi ($n_A \\to n_B$):<br>$\\Delta E = E_A - E_B = \\frac{h \\cdot c}{\\lambda} = R_H \\cdot h c \\left( \\frac{1}{n_B^2} - \\frac{1}{n_A^2} \\right)$.",
    "tag": "Fisika Kuantum"
  },
  {
    "id": "fc-128",
    "category": "Fisika",
    "title": "Radioaktivitas: Waktu Paruh & Defek Massa Inti",
    "front": "Bagaimana rumus peluruhan zat radioaktif setelah waktu $t$ dan menghitung energi ikat inti atom?",
    "back": "• <strong>Waktu Paruh ($T_{1/2}$):</strong> $N_t = N_0 \\left(\\frac{1}{2}\\right)^{\\frac{t}{T_{1/2}}} = N_0 \\cdot e^{-\\lambda t}$ (dengan $\\lambda = \\frac{0{,}693}{T_{1/2}}$)<br>• <strong>Defek Massa Inti (${}_Z^A X$):</strong> $\\Delta m = [Z \\cdot m_p + (A - Z) \\cdot m_n] - m_{\\text{inti}}$<br>• <strong>Energi Ikat Inti:</strong> $E_{\\text{ikat}} = \\Delta m \\times 931{,}5\\text{ MeV}$. Makin besar energi ikat per nukleon ($E/A$), makin stabil inti atom tersebut.",
    "tag": "Fisika Inti"
  },
  {
    "id": "fc-129",
    "category": "Kimia",
    "title": "Molalitas ($m$) & Fraksi Mol ($X$)",
    "front": "Bagaimana rumus konsentrasi molalitas dan fraksi mol zat terlarut/pelarut?",
    "back": "• Molalitas (jumlah mol zat terlarut per 1 kg pelarut murni):<br>$m = \\frac{\\text{gram terlarut}}{Mr} \\times \\frac{1000}{P(\\text{gram pelarut})}$<br>• Fraksi Mol Zat Terlarut: $X_t = \\frac{n_t}{n_t + n_p}$<br>• Fraksi Mol Pelarut: $X_p = \\frac{n_p}{n_t + n_p}$<br>• Sifat Mutlak: $X_t + X_p = 1$. Konsentrasi ini tidak terpengaruh oleh suhu karena berbasis massa!",
    "tag": "Konsentrasi Larutan"
  },
  {
    "id": "fc-130",
    "category": "Kimia",
    "title": "Penurunan Tekanan Uap Sifat Koligatif (Hukum Raoult)",
    "front": "Bagaimana rumus penurunan tekanan uap jenuh ($\\Delta P$) dan tekanan uap larutan ($P$)?",
    "back": "• Hukum Raoult: $P = P^\\circ \\times X_p$ (di mana $P^\\circ$ = tekanan uap pelarut murni)<br>• Penurunan Tekanan Uap Non-Elektrolit: $\\Delta P = P^\\circ \\times X_t$<br>• Untuk Larutan Elektrolit: $\\Delta P = P^\\circ \\times \\left(\\frac{n_t \\cdot i}{n_t \\cdot i + n_p}\\right)$<br>• Hubungan: $\\Delta P = P^\\circ - P$. Karena ada zat terlarut, penguapan pelarut menjadi terhalang!",
    "tag": "Sifat Koligatif"
  },
  {
    "id": "fc-131",
    "category": "Kimia",
    "title": "Hukum Dasar Kimia (Lavoisier, Proust, Dalton, Gay-Lussac, Avogadro)",
    "front": "Sebutkan poin kunci 5 hukum dasar kimia yang menjadi pondasi stoikiometri!",
    "back": "1. <strong>Lavoisier (Kekekalan Massa):</strong> Massa zat sebelum reaksi = massa sesudah reaksi.<br>2. <strong>Proust (Perbandingan Tetap):</strong> Perbandingan massa unsur penyusun senyawa selalu tetap.<br>3. <strong>Dalton (Kelipatan Berganda):</strong> Bila 2 unsur membentuk >1 senyawa, perbandingan massa unsur ke-2 berbanding sebagai bilangan bulat sederhana.<br>4. <strong>Gay-Lussac:</strong> Perbandingan volume gas bereaksi = perbandingan koefisien bulat pada $T, P$ sama.<br>5. <strong>Avogadro:</strong> $\\frac{V_1}{V_2} = \\frac{n_1}{n_2}$ pada suhu dan tekanan sama.",
    "tag": "Hukum Dasar Kimia"
  },
  {
    "id": "fc-132",
    "category": "Kimia",
    "title": "Rumus Empiris (RE) vs Rumus Molekul (RM)",
    "front": "Bagaimana langkah menentukan Rumus Empiris dan Rumus Molekul dari data persentase massa unsur?",
    "back": "1. Ubah persen massa menjadi gram (anggap total massa = 100 g).<br>2. Cari mol tiap unsur: $n = \\frac{\\text{massa}}{Ar}$.<br>3. Tentukan perbandingan mol paling sederhana (bulat) $\\to$ didapat <strong>Rumus Empiris</strong>.<br>4. Hubungan dengan Rumus Molekul:<br>$(\\text{Mr RE})_n = \\text{Mr Senyawa} \\implies n = \\frac{Mr}{Mr(\\text{RE})}$<br>$\\text{Rumus Molekul} = (\\text{RE})_n$.",
    "tag": "Stoikiometri"
  },
  {
    "id": "fc-133",
    "category": "Kimia",
    "title": "Konfigurasi Elektron & 4 Bilangan Kuantum",
    "front": "Sebutkan 3 aturan konfigurasi elektron dan 4 bilangan kuantum elektron terakhir!",
    "back": "• <strong>3 Aturan:</strong><br>1. Aufbau: Dari subkulit energi terendah ($1s \\to 2s \\to 2p \\to 3s \\dots$)<br>2. Hund: Isi satu-satu dengan spin paralel sebelum berpasangan.<br>3. Larangan Pauli: Tidak boleh ada 2 elektron dengan 4 bil. kuantum sama persis.<br>• <strong>4 Bilangan Kuantum:</strong><br>- Utama ($n = 1, 2, 3, \\dots$): Menunjukkan nomor kulit.<br>- Azimut ($l$): Bentuk orbital ($s=0, p=1, d=2, f=3$).<br>- Magnetik ($m = -l \\dots 0 \\dots +l$): Orientasi orbital.<br>- Spin ($s = +1/2$ panah atas, $-1/2$ panah bawah).",
    "tag": "Struktur Atom"
  },
  {
    "id": "fc-134",
    "category": "Kimia",
    "title": "Menentukan Golongan & Periode dari Konfigurasi",
    "front": "Bagaimana cara cepat menentukan periode dan golongan suatu unsur dari konfigurasi elektron terakhirnya?",
    "back": "• <strong>Periode:</strong> Nilai $n$ terbesar (kulit terluar).<br>• <strong>Golongan Utama (A):</strong><br>- Blok $s$: Berakhir di $ns^x \\implies$ Golongan $x\\text{ A}$<br>- Blok $p$: Berakhir di $ns^2 np^y \\implies$ Golongan $(2 + y)\\text{ A}$<br>• <strong>Golongan Transisi (B) - Blok $d$:</strong> Berakhir di $ns^2 (n-1)d^z$:<br>- $2+z = 3 \\dots 7 \\implies$ Golongan IIIB $\\dots$ VIIB<br>- $2+z = 8, 9, 10 \\implies$ Golongan VIIIB<br>- $2+z = 11 \\implies$ Golongan IB; $2+z = 12 \\implies$ Golongan IIB.",
    "tag": "Sistem Periodik"
  },
  {
    "id": "fc-135",
    "category": "Kimia",
    "title": "Sifat Keperiodikan Unsur",
    "front": "Bagaimana tren Jari-Jari Atom, Energi Ionisasi, Afinitas Elektron, dan Elektronegativitas dalam satu periode dan golongan?",
    "back": "• <strong>Dalam 1 Periode (Kiri ke Kanan):</strong><br>- Jari-jari atom <strong>Mengecil</strong> (muatan inti makin kuat menarik elektron).<br>- Energi Ionisasi, Afinitas, dan Keelektronegatifan <strong>Meningkat</strong>.<br>• <strong>Dalam 1 Golongan (Atas ke Bawah):</strong><br>- Jari-jari atom <strong>Membesar</strong> (jumlah kulit bertambah).<br>- Energi Ionisasi, Afinitas, dan Keelektronegatifan <strong>Menurun</strong>.<br>• <em>Anomali:</em> EI Golongan IIA > IIIA dan VA > VIA karena kestabilan subkulit penuh/setengah penuh.",
    "tag": "Sistem Periodik"
  },
  {
    "id": "fc-136",
    "category": "Kimia",
    "title": "Teori Domain Elektron (VSEPR) & Bentuk Geometri Molekul",
    "front": "Bagaimana rumus menentukan Pasangan Elektron Bebas ($E$) dan memprediksi bentuk molekul $AX_m E_n$?",
    "back": "• Rumus PEB: $E = \\frac{EV - X \\cdot b}{2}$ ($EV$ = elektron valensi atom pusat, $X$ = jumlah PEI, $b$ = valensi ligan: 1 untuk halogen/H, 2 untuk oksigen).<br>• <strong>Bentuk Molekul Populer:</strong><br>- $AX_2$: Linear ($180^\\circ$)<br>- $AX_3$: Segitiga planar; $AX_2 E$: Huruf V<br>- $AX_4$: Tetrahedral; $AX_3 E$: Piramida trigonal; $AX_2 E_2$: Bengkok/V ($H_2O$)<br>- $AX_5$: Bipiramida trigonal; $AX_4 E$: Jungkat-jungkit<br>- $AX_6$: Oktahedral; $AX_4 E_2$: Persegi planar.",
    "tag": "Ikatan Kimia"
  },
  {
    "id": "fc-137",
    "category": "Kimia",
    "title": "Gaya Antarmolekul & Titik Didih Senyawa",
    "front": "Urutkan kekuatan gaya antarmolekul dan jelaskan syarat terjadinya Ikatan Hidrogen!",
    "back": "• Urutan Kekuatan: <strong>Ikatan Hidrogen > Gaya Dipol-Dipol > Gaya Dispersi London</strong>.<br>• <strong>Ikatan Hidrogen:</strong> Terjadi jika atom $H$ terikat langsung pada atom sangat elektronegatif yang memiliki PEB, yaitu <strong>F, O, N</strong> (Contoh: $HF, H_2O, NH_3$).<br>• Titik didih molekul berikatan hidrogen jauh melonjak tinggi dibanding homolognya.<br>• Untuk molekul non-polar, makin besar massa molekul ($Mr$) dan panjang rantai, gaya London makin kuat sehingga titik didih makin tinggi.",
    "tag": "Ikatan Kimia"
  },
  {
    "id": "fc-138",
    "category": "Kimia",
    "title": "Derajat Disosiasi ($\\alpha$) & Tetapan Kesetimbangan",
    "front": "Bagaimana definisi derajat disosiasi ($\\alpha$) dan hubungannya dengan mol mula-mula vs terurai?",
    "back": "• Rumus: $\\alpha = \\frac{\\text{mol zat terurai / bereaksi}}{\\text{mol zat mula-mula}}$<br>• Rentang nilai: $0 < \\alpha \\le 1$ (atau $0\\% < \\alpha \\le 100\\%$)<br>• Mol Terurai $= \\alpha \\times \\text{mol mula-mula}$<br>• Mol Sisa Setimbang $= (1 - \\alpha) \\times \\text{mol mula-mula}$<br>• Gunakan tabel <strong>M - R - S</strong> (Mula - Reaksi - Setimbang) untuk menentukan konsentrasi setimbang lalu masukkan ke rumus $K_c$.",
    "tag": "Kesetimbangan"
  },
  {
    "id": "fc-139",
    "category": "Kimia",
    "title": "Asas Le Chatelier Pergeseran Kesetimbangan",
    "front": "Ke arah mana kesetimbangan bergeser jika terjadi perubahan konsentrasi, suhu, volume, dan tekanan?",
    "back": "• <strong>Konsentrasi:</strong> Zat ditambah $\\to$ geser ke arah <em>lawan</em>; Zat dikurangi $\\to$ geser ke arah <em>zat tersebut</em>.<br>• <strong>Suhu:</strong> Suhu dinaikkan $\\to$ geser ke arah reaksi <strong>Endoterm</strong> ($+\\Delta H$); Suhu diturunkan $\\to$ geser ke reaksi <strong>Eksoterm</strong> ($-\\Delta H$).<br>• <strong>Volume & Tekanan (Khusus fasa gas):</strong><br>- Volume diperbesar (Tekanan kecil) $\\to$ geser ke arah <strong>jumlah koefisien gas terbesar</strong>.<br>- Tekanan diperbesar (Volume kecil) $\\to$ geser ke arah <strong>jumlah koefisien gas terkecil</strong>.<br>• <strong>Katalis:</strong> Hanya mempercepat waktu kesetimbangan tercapai, <em>tidak menggeser arah kesetimbangan</em>!",
    "tag": "Kesetimbangan"
  },
  {
    "id": "fc-140",
    "category": "Kimia",
    "title": "Titrasi Asam-Basa: Titik Ekivalen & Indikator",
    "front": "Bagaimana rumus perhitungan saat tercapai titik ekivalen titrasi asam basa?",
    "back": "• Titik Ekivalen dicapai saat: $\\text{mol ekuivalen asam} = \\text{mol ekuivalen basa}$<br>• Rumus: $V_a \\cdot M_a \\cdot a = V_b \\cdot M_b \\cdot b$<br>($a$ = valensi asam, $b$ = valensi basa)<br>• <strong>Pemilihan Indikator:</strong><br>- Asam Kuat + Basa Kuat: Titik ekivalen $\\text{pH} = 7$ (Bromtimol Biru/PP)<br>- Asam Lemah + Basa Kuat: Titik ekivalen $\\text{pH} > 7$ (Fenolftalein / PP)<br>- Asam Kuat + Basa Lemah: Titik ekivalen $\\text{pH} < 7$ (Metil Merah).",
    "tag": "Asam Basa"
  },
  {
    "id": "fc-141",
    "category": "Kimia",
    "title": "Kelarutan ($s$) & Hubungan Hasil Kali Kelarutan ($K_{sp}$)",
    "front": "Bagaimana rumus hubungan kelarutan molar ($s$) dengan nilai $K_{sp}$ untuk berbagai tipe garam?",
    "back": "• Garam $AB$ (2 ion: $AgCl$): $K_{sp} = s^2 \\implies s = \\sqrt{K_{sp}}$<br>• Garam $AB_2$ atau $A_2 B$ (3 ion: $Ca(OH)_2, Ag_2CrO_4$):<br>$K_{sp} = 4s^3 \\implies s = \\sqrt[3]{\\frac{K_{sp}}{4}}$<br>• Garam $AB_3$ atau $A_3 B$ (4 ion: $Al(OH)_3$):<br>$K_{sp} = 27s^4 \\implies s = \\sqrt[4]{\\frac{K_{sp}}{27}}$<br>• Garam $A_2 B_3$ (5 ion: $Bi_2S_3$):<br>$K_{sp} = 108s^5 \\implies s = \\sqrt[5]{\\frac{K_{sp}}{108}}$",
    "tag": "Kelarutan Ksp"
  },
  {
    "id": "fc-142",
    "category": "Kimia",
    "title": "Prediksi Terjadinya Endapan ($Q_{sp}$ vs $K_{sp}$)",
    "front": "Kapan suatu campuran larutan belum jenuh, tepat jenuh, atau mengendap?",
    "back": "• Hitung kuosien reaksi ion $Q_{sp} = [A^{m+}]^n [B^{n-}]^m$ setelah volume total dicampur.<br>• $Q_{sp} < K_{sp} \\implies$ Larutan <strong>belum jenuh</strong> (tidak terjadi endapan).<br>• $Q_{sp} = K_{sp} \\implies$ Larutan <strong>tepat jenuh</strong> (belum ada endapan).<br>• $Q_{sp} > K_{sp} \\implies$ Larutan <strong>lewat jenuh / terjadi ENDAPAN</strong>.",
    "tag": "Kelarutan Ksp"
  },
  {
    "id": "fc-143",
    "category": "Kimia",
    "title": "Pengaruh Ion Senama terhadap Kelarutan",
    "front": "Apa dampak penambahan larutan yang mengandung ion senama terhadap kelarutan garam sukar larut?",
    "back": "• Penambahan ion senama akan <strong>MEMPERKECIL KELARUTAN ($s$)</strong> zat tersebut dan memicu terjadinya pengendapan lebih cepat!<br>• Nilai tetapan $K_{sp}$ <strong>TETAP KONSTAN</strong> (karena $K_{sp}$ hanya berubah jika suhu berubah).<br>• Contoh: Kelarutan $AgCl$ dalam larutan $NaCl$ jauh lebih kecil dibanding dalam air murni karena sudah ada pasokan ion $Cl^-$.",
    "tag": "Kelarutan Ksp"
  },
  {
    "id": "fc-144",
    "category": "Kimia",
    "title": "Aturan Baku Bilangan Oksidasi (Biloks)",
    "front": "Sebutkan aturan-aturan prioritas dalam menentukan bilangan oksidasi unsur!",
    "back": "1. Unsur bebas (contoh: $O_2, Fe, H_2, P_4$): Biloks $= 0$<br>2. Logam Golongan IA $= +1$; Golongan IIA $= +2$; $Al = +3$<br>3. Fluorin ($F$) selalu $-1$ dalam semua senyawanya.<br>4. Hidrogen ($H$) $= +1$ (kecuali hidrida logam seperti $NaH \\implies H = -1$)<br>5. Oksigen ($O$) $= -2$ (kecuali peroksida $H_2O_2 \\implies -1$, superoksida $-1/2$, dan dalam $OF_2 \\implies +2$)<br>6. Total biloks senyawa netral $= 0$; total biloks ion poliatom = muatannya.",
    "tag": "Redoks"
  },
  {
    "id": "fc-145",
    "category": "Kimia",
    "title": "Penyetaraan Reaksi Redoks: Metode Setengah Reaksi",
    "front": "Bagaimana urutan langkah menyetarakan reaksi redoks suasana asam dan basa dengan metode ion-elektron?",
    "back": "1. Pisahkan menjadi setengah reaksi reduksi dan oksidasi.<br>2. Setarakan atom selain $O$ dan $H$.<br>3. <strong>Setarakan atom O:</strong> Tambahkan $H_2O$ pada ruas yang kekurangan $O$.<br>4. <strong>Setarakan atom H:</strong> Tambahkan ion $H^+$ pada ruas yang kekurangan $H$.<br>5. Setarakan muatan dengan menambahkan elektron ($e^-$).<br>6. Samakan jumlah elektron kedua setengah reaksi, lalu jumlahkan.<br>• <em>Khusus Suasana Basa:</em> Tambahkan ion $OH^-$ pada kedua ruas sebanyak jumlah $H^+$ yang ada, lalu gabung $H^+ + OH^- \\to H_2O$.",
    "tag": "Redoks"
  },
  {
    "id": "fc-146",
    "category": "Kimia",
    "title": "Gugus Fungsi Senyawa Karbon / Turunan Alkana",
    "front": "Sebutkan 6 gugus fungsi senyawa karbon utama beserta rumus umumnya dan pasangannya yang berisomer fungsional!",
    "back": "• Rumus umum $C_n H_{2n+2} O$ (Isomer Fungsional):<br>1. <strong>Alkohol (Alkanol):</strong> Gugus $-OH$<br>2. <strong>Eter (Alkoksi Alkana):</strong> Gugus $-O-$<br>• Rumus umum $C_n H_{2n} O$ (Isomer Fungsional):<br>3. <strong>Aldehid (Alkanal):</strong> Gugus $-CHO$<br>4. <strong>Keton (Alkanon):</strong> Gugus $-CO-$<br>• Rumus umum $C_n H_{2n} O_2$ (Isomer Fungsional):<br>5. <strong>Asam Karboksilat (Alkanoat):</strong> Gugus $-COOH$<br>6. <strong>Ester (Alkil Alkanoat):</strong> Gugus $-COO-$",
    "tag": "Kimia Organik"
  },
  {
    "id": "fc-147",
    "category": "Kimia",
    "title": "Reaksi Kimia Organik: Markovnikov & Zaitsev",
    "front": "Bagaimana bunyi Aturan Markovnikov pada reaksi adisi dan Aturan Zaitsev pada eliminasi?",
    "back": "• <strong>Aturan Adisi Markovnikov (Si Kaya Makin Kaya):</strong><br>Pada adisi alkena oleh asam halida ($HX$), atom hidrogen ($H$) akan terikat pada atom karbon ikatan rangkap yang mengikat atom hidrogen lebih banyak.<br>• <strong>Aturan Eliminasi Zaitsev:</strong><br>Pada reaksi dehidrohalogenasi/dehidrasi alkohol, alkena utama yang terbentuk adalah alkena yang paling stabil (memiliki ikatan rangkap dengan substituen alkil terbanyak / hidrogen dilepas dari C tetangga yang mengikat H paling sedikit).",
    "tag": "Kimia Organik"
  },
  {
    "id": "fc-148",
    "category": "Kimia",
    "title": "Reaksi Identifikasi Aldehid vs Keton & Alkohol",
    "front": "Bagaimana cara membedakan aldehid dengan keton di laboratorium dan membedakan jenis alkohol?",
    "back": "• <strong>Aldehid vs Keton:</strong><br>- Uji Tollens (Pereaksi perak beramoniak): Aldehid menghasilkan <strong>cermin perak ($Ag$)</strong>, Keton negatif.<br>- Uji Fehling: Aldehid menghasilkan <strong>endapan merah bata ($Cu_2O$)</strong>, Keton negatif.<br>• <strong>Oksidasi Alkohol:</strong><br>- Alkohol Primer dioksidasi $\\to$ Aldehid $\\to$ Asam Karboksilat.<br>- Alkohol Sekunder dioksidasi $\\to$ Keton.<br>- Alkohol Tersier <strong>TIDAK DAPAT DIOKSIDASI</strong>.",
    "tag": "Kimia Organik"
  },
  {
    "id": "fc-149",
    "category": "Kimia",
    "title": "Uji Biokimia: Karbohidrat & Protein",
    "front": "Sebutkan hasil positif uji Molisch, Benedict, Iodin, Biuret, dan Xantoproteat!",
    "back": "• <strong>Karbohidrat:</strong><br>- Uji Molisch: Cincin ungu di batas larutan (menunjukkan adanya karbohidrat).<br>- Uji Benedict/Fehling: Endapan merah bata (gula pereduksi: glukosa, fruktosa, maltosa). Sukrosa negatif.<br>- Uji Iodin: Warna biru kehitaman (positif amilum/pati).<br>• <strong>Protein:</strong><br>- Uji Biuret: Warna ungu (positif ikatan peptida).<br>- Uji Xantoproteat: Warna kuning/jingga (positif cincin benzena / tirosin, fenilalanin).<br>- Uji Timbal(II) Asetat: Endapan hitam $PbS$ (positif belerang / sistein, metionin).",
    "tag": "Biokimia"
  },
  {
    "id": "fc-150",
    "category": "Kimia",
    "title": "Sistem Koloid & Sifat Khasnya",
    "front": "Sebutkan 5 sifat khas koloid dan jelaskan perbedaan sol, emulsi, dan aerosol!",
    "back": "• <strong>Sifat Khas Koloid:</strong><br>1. Efek Tyndall: Penghamburan berkas cahaya oleh partikel koloid.<br>2. Gerak Brown: Gerak zig-zag acak penstabil partikel koloid.<br>3. Elektroforesis: Pergerakan partikel koloid bermuatan dalam medan listrik.<br>4. Adsorpsi: Penyerapan ion pada permukaan koloid.<br>5. Koagulasi: Penggumpalan partikel koloid (akibat pemanasan/penambahan elektrolit).<br>• <strong>Jenis Koloid:</strong><br>- Sol: Padat dalam cair (tinta, cat)<br>- Emulsi: Cair dalam cair (susu, santan, mayones)<br>- Aerosol: Cair/padat dalam gas (kabut, awan, asap).",
    "tag": "Koloid"
  },
  {
    "id": "fc-151",
    "category": "Biologi",
    "title": "Hukum Genetika Populasi Hardy-Weinberg",
    "front": "Tuliskan rumus kesetimbangan frekuensi alel dan frekuensi genotip Hardy-Weinberg beserta 5 syaratnya!",
    "back": "• Frekuensi Alel: $p + q = 1$ ($p$ = alel dominan $A$, $q$ = alel resesif $a$)<br>• Frekuensi Genotip: $p^2 + 2pq + q^2 = 1$<br>- $p^2$ = individu homozigot dominan ($AA$)<br>- $2pq$ = individu heterozigot carrier ($Aa$)<br>- $q^2$ = individu homozigot resesif ($aa$)<br>• <strong>5 Syarat Berlaku:</strong> Ukuran populasi besar, perkawinan acak, tidak ada mutasi, tidak ada migrasi (isolasi), dan tidak ada seleksi alam.",
    "tag": "Genetika Populasi"
  },
  {
    "id": "fc-152",
    "category": "Biologi",
    "title": "Frekuensi Gen Terpaut Kromosom X (Buta Warna / Hemofilia)",
    "front": "Bagaimana cara menghitung persentase pria penderita vs wanita pembawa sifat resesif terpaut kelamin X?",
    "back": "• Alel normal ($X^H = p$), alel resesif sakit ($X^h = q$).<br>• <strong>Pada Laki-laki (Hanya punya 1 kromosom X):</strong><br>- Laki-laki sakit ($X^h Y$): Frekuensi $= q$<br>- Laki-laki normal ($X^H Y$): Frekuensi $= p$<br>• <strong>Pada Perempuan (Punya 2 kromosom X):</strong><br>- Wanita penderita ($X^h X^h$): Frekuensi $= q^2$<br>- Wanita carrier pembawa sifat ($X^H X^h$): Frekuensi $= 2pq$<br>- Wanita normal homozigot ($X^H X^H$): Frekuensi $= p^2$<br>• Trik: Frekuensi laki-laki penderita langsung sama dengan nilai $q$!",
    "tag": "Genetika Populasi"
  },
  {
    "id": "fc-153",
    "category": "Biologi",
    "title": "Rasio Persilangan Hukum Mendel I & II",
    "front": "Berapa rasio fenotip dan genotip keturunan F2 pada persilangan monohibrid dominan penuh dan dihibrid?",
    "back": "• <strong>Monohibrid Dominan Penuh ($Aa \\times Aa$):</strong><br>- Rasio Genotip $= 1 AA : 2 Aa : 1 aa$<br>- Rasio Fenotip $= 3 \\text{ Dominan} : 1 \\text{ Resesif}$<br>• <strong>Monohibrid Intermediet (Kodominan):</strong> Rasio Fenotip $= 1 : 2 : 1$<br>• <strong>Dihibrid Bebas ($AaBb \\times AaBb$):</strong><br>Rasio Fenotip F2 $= 9 (A\\_B\\_) : 3 (A\\_bb) : 3 (aaB\\_) : 1 (aabb)$<br>Jumlah variasi gamet $= 2^n$ ($n$ = jumlah pasangan heterozigot).",
    "tag": "Pola Hereditas"
  },
  {
    "id": "fc-154",
    "category": "Biologi",
    "title": "Rasio Penyimpangan Semu Hukum Mendel",
    "front": "Sebutkan perbandingan fenotip F2 dari 4 macam penyimpangan semu hukum Mendel!",
    "back": "1. <strong>Kriptomeri</strong> (contoh: bunga <em>Linaria maroccana</em>): $9 : 3 : 4$<br>2. <strong>Epistasis - Hipostasis</strong>:<br>- Epistasis Dominan: $12 : 3 : 1$<br>- Epistasis Resesif: $9 : 3 : 4$<br>- Epistasis Gen Rangkap: $15 : 1$<br>3. <strong>Polimeri</strong> (banyak gen memengaruhi 1 sifat): $15 : 1$<br>4. <strong>Komplementer</strong> (saling melengkapi agar sifat muncul): $9 : 7$<br>• Total semua perbandingan selalu berjumlah 16 (modifikasi $9:3:3:1$).",
    "tag": "Pola Hereditas"
  },
  {
    "id": "fc-155",
    "category": "Biologi",
    "title": "Nilai Pindah Silang (NPS) Rekombinasi Gen",
    "front": "Bagaimana rumus menghitung persentase Nilai Pindah Silang / Cross Over (NPS)?",
    "back": "• Rumus: $\\text{NPS} = \\frac{\\text{Jumlah Keturunan Tipe Rekombinan (RK)}}{\\text{Total Seluruh Keturunan (KP + RK)}} \\times 100\\%$<br>• $\\text{KP}$ = Kombinasi Parental (tipe mirip induk)<br>• $\\text{RK}$ = Rekombinan (tipe kombinasi baru)<br>• Syarat Terpaut dengan Pindah Silang: Nilai $\\text{NPS} < 50\\%$. Nilai $1\\% \\text{ NPS} = 1\\text{ peta satuan gen (centiMorgan)}$.",
    "tag": "Genetika"
  },
  {
    "id": "fc-156",
    "category": "Biologi",
    "title": "Aturan Pasangan Basa Nitrogen Chargaff DNA",
    "front": "Bagaimana aturan perbandingan basa nitrogen Chargaff pada molekul DNA untai ganda?",
    "back": "• Adenin ($A$) selalu berpasangan dengan Timin ($T$) dengan <strong>2 ikatan hidrogen</strong> ($A = T$).<br>• Guanin ($G$) selalu berpasangan dengan Sitosin ($C$) dengan <strong>3 ikatan hidrogen</strong> ($G \\equiv C$).<br>• <strong>Hukum Chargaff:</strong> $%A = \\%T$ dan $%G = \\%C$<br>• Jumlah Basa Purin = Jumlah Basa Pirimidin:<br>$\\%A + \\%G = \\%T + \\%C = 50\\%$<br>Contoh: Jika suatu DNA memiliki 30% Adenin, maka $T = 30\\%$, dan $G = C = \\frac{100 - 60}{2} = 20\\%$.",
    "tag": "Substansi Genetik"
  },
  {
    "id": "fc-157",
    "category": "Biologi",
    "title": "Sintesis Protein: Transkripsi & Translasi",
    "front": "Bagaimana alur sintesis protein dari DNA sense hingga terbentuk rantai polipeptida?",
    "back": "1. <strong>Transkripsi (di Inti Sel):</strong><br>- DNA Sense / Templat ($3' \\to 5'$) dicetak menjadi mRNA / kodon ($5' \\to 3'$).<br>- Aturan Pasangan: $A \\to U, T \\to A, G \\to C, C \\to G$.<br>2. <strong>Translasi (di Ribosom Sitoplasma):</strong><br>- tRNA membaca kodon mRNA melalui antikodonnya dan membawa asam amino yang sesuai.<br>- <strong>Kodon Start:</strong> AUG (Metionin).<br>- <strong>Kodon Stop:</strong> UAA, UAG, UGA (tidak mengode asam amino, terminasi sintesis).",
    "tag": "Substansi Genetik"
  },
  {
    "id": "fc-158",
    "category": "Biologi",
    "title": "Neraca Energi Respirasi Seluler Aerobik",
    "front": "Berapa total produksi ATP bersih dari 1 molekul glukosa dan rincian tiap tahapannya?",
    "back": "1. <strong>Glikolisis (Sitoplasma):</strong> 2 ATP + 2 NADH + 2 Asam Piruvat<br>2. <strong>Dekarboksilasi Oksidatif (Matriks Mitokondria):</strong> 2 NADH + 2 Asetil Ko-A + $2 CO_2$<br>3. <strong>Siklus Krebs (Matriks Mitokondria):</strong> 2 ATP + 6 NADH + $2 FADH_2$ + $4 CO_2$<br>4. <strong>Transpor Elektron (Krista Mitokondria):</strong><br>- $1 \\text{ NADH} = 3 \\text{ ATP}$ (atau 2,5 ATP)<br>- $1 \\text{ FADH}_2 = 2 \\text{ ATP}$ (atau 1,5 ATP)<br>• <strong>Total Bersih:</strong> 36 - 38 ATP (sistem shuttle lama) atau 30 - 32 ATP (biokimia modern).",
    "tag": "Metabolisme"
  },
  {
    "id": "fc-159",
    "category": "Biologi",
    "title": "Fotosintesis: Reaksi Terang vs Siklus Calvin",
    "front": "Bandingkan tempat, input, dan hasil antara Reaksi Terang dan Reaksi Gelap fotosintesis!",
    "back": "• <strong>Reaksi Terang (di Grana / Membran Tilakoid):</strong><br>- Butuh: Cahaya matahari, $H_2O$, klorofil.<br>- Proses: Fotolisis air ($H_2O \\to 2H^+ + 2e^- + \\frac{1}{2}O_2$) & fotofosforilasi.<br>- Hasil: <strong>ATP, NADPH, dan gas $O_2$</strong>.<br>• <strong>Reaksi Gelap / Siklus Calvin (di Stroma):</strong><br>- Butuh: $CO_2$, ATP, dan NADPH dari reaksi terang.<br>- Tahapan: 1. Fiksasi $CO_2$ oleh RuBP (enzim Rubisco), 2. Reduksi PGA $\\to$ PGAL, 3. Regenerasi RuBP.<br>- Hasil Utama: <strong>Glukosa ($C_6H_{12}O_6$)</strong>.",
    "tag": "Metabolisme"
  },
  {
    "id": "fc-160",
    "category": "Biologi",
    "title": "Volume & Kapasitas Udara Pernapasan Paru-Paru",
    "front": "Tuliskan komponen volume pernapasan manusia dan rumus Kapasitas Vital serta Kapasitas Total Paru-Paru!",
    "back": "• Udara Tidal ($UP$): Volume bernapas normal ($\\approx 500\\text{ mL}$)<br>• Udara Komplementer ($UK$): Udara inspirasi maksimal ($\\approx 1500\\text{ mL}$)<br>• Udara Suplementer ($US$): Udara ekspirasi maksimal ($\\approx 1500\\text{ mL}$)<br>• Udara Residu ($UR$): Udara sisa di paru-paru ($\\approx 1000\\text{ mL}$)<br>• <strong>Kapasitas Vital ($KV$):</strong> $KV = UP + UK + US \\approx 3500\\text{ mL}$<br>• <strong>Kapasitas Total ($KT$):</strong> $KT = KV + UR \\approx 4500 - 5000\\text{ mL}$.",
    "tag": "Sistem Organ"
  },
  {
    "id": "fc-161",
    "category": "Biologi",
    "title": "Kaidah Transfer Energi 10% Ekologi Lindeman",
    "front": "Bagaimana efisiensi perpindahan energi antar tingkat trofik dalam rantai makanan?",
    "back": "• Menurut Hukum Efisiensi Ekologi Raymond Lindeman, hanya sekitar <strong>10% energi</strong> yang berhasil ditransfer dari satu tingkat trofik ke tingkat trofik berikutnya di atasnya.<br>• Sekitar 90% energi sisanya hilang sebagai <strong>kalor / panas tubuh</strong>, feses/ekskresi, dan proses respirasi sel.<br>• Contoh: Jika Produsen menghasilkan $10.000\\text{ kkal}$, Konsumen I (Herbivora) menerima $1.000\\text{ kkal}$, Konsumen II (Karnivora) $100\\text{ kkal}$, dan Karnivora Puncak hanya $10\\text{ kkal}$. Ini alasan rantai makanan jarang melebihi 4-5 tingkatan!",
    "tag": "Ekologi"
  },
  {
    "id": "fc-162",
    "category": "Biologi",
    "title": "Tahapan Pembentukan Urine di Nefron Ginjal",
    "front": "Sebutkan 3 tahapan pembentukan urine beserta lokasi dan komposisi hasilnya!",
    "back": "1. <strong>Filtrasi (di Glomerulus):</strong> Penyaringan darah $\\to$ menghasilkan <strong>Urine Primer</strong> (mengandung air, glukosa, asam amino, garam; tanpa sel darah & protein besar).<br>2. <strong>Reabsorpsi (di Tubulus Kontortus Proksimal - TKP):</strong> Penyerapan kembali zat berguna (glukosa, asam amino, air) $\\to$ menghasilkan <strong>Urine Sekunder</strong> (tinggi urea & zat sisa).<br>3. <strong>Augmentasi (di Tubulus Kontortus Distal - TKD):</strong> Penambahan zat sisa racun & obat $\\to$ menghasilkan <strong>Urine Sebenarnya</strong> yang dialirkan ke tubulus kolektivus.",
    "tag": "Sistem Ekskresi"
  },
  {
    "id": "fc-163",
    "category": "Ekonomi & Sosiologi",
    "title": "Elastisitas Silang ($E_c$) & Hubungan Antar Barang",
    "front": "Bagaimana rumus elastisitas silang dan menentukan hubungan barang komplementer vs substitusi?",
    "back": "• Rumus: $E_c = \\frac{\\% \\Delta Q_A}{\\% \\Delta P_B} = \\frac{\\Delta Q_A}{\\Delta P_B} \\times \\frac{P_B}{Q_A}$<br>• <strong>Kriteria Nilai $E_c$:</strong><br>- $E_c > 0$ (Positif): Barang <strong>Substitusi / Saling Menggantikan</strong> (Harga kopi naik, permintaan teh melonjak).<br>- $E_c < 0$ (Negatif): Barang <strong>Komplementer / Saling Melengkapi</strong> (Harga bensin naik, permintaan mobil turun).<br>- $E_c = 0$: Barang Netral / Tidak Berhubungan.",
    "tag": "Elastisitas"
  },
  {
    "id": "fc-164",
    "category": "Ekonomi & Sosiologi",
    "title": "Elastisitas Pendapatan ($E_y$) & Jenis Barang",
    "front": "Bagaimana rumus elastisitas pendapatan dan membedakan barang normal, mewah, serta inferior?",
    "back": "• Rumus: $E_y = \\frac{\\% \\Delta Q}{\\% \\Delta Y} = \\frac{\\Delta Q}{\\Delta Y} \\times \\frac{Y}{Q}$ ($Y$ = pendapatan konsumen)<br>• <strong>Kriteria Nilai $E_y$:</strong><br>- $E_y < 0$ (Negatif): <strong>Barang Inferior</strong> (Pendapatan naik, konsumsinya justru berkurang, misal beras raskin/singkong).<br>- $0 < E_y \\le 1$: <strong>Barang Normal / Pokok</strong> (Kebutuhan sehari-hari).<br>- $E_y > 1$: <strong>Barang Mewah / Superior</strong> (Barang mewah dan tersier).",
    "tag": "Elastisitas"
  },
  {
    "id": "fc-165",
    "category": "Ekonomi & Sosiologi",
    "title": "Keseimbangan Pasar Pengaruh Subsidi ($s$)",
    "front": "Bagaimana pengaruh pemberian subsidi $s$ per unit terhadap fungsi penawaran dan pembagian subsidi bagi konsumen & produsen?",
    "back": "• Fungsi penawaran baru sesudah subsidi: $P'_s = P_s - s$ atau $Q'_s = f(P + s)$<br>• Titik keseimbangan baru dicari dari: $Q_d = Q'_s$<br>• <strong>Pembagian Manfaat Subsidi:</strong><br>- Subsidi dinikmati konsumen: $s_k = P_e - P'_e$<br>- Subsidi dinikmati produsen: $s_p = s - s_k$<br>- Total subsidi yang dibayar pemerintah: $S_{\\text{gov}} = s \\times Q'_e$.",
    "tag": "Keseimbangan Pasar"
  },
  {
    "id": "fc-166",
    "category": "Ekonomi & Sosiologi",
    "title": "Titik Impas (Break-Even Point / BEP)",
    "front": "Bagaimana rumus mencari titik impas dalam unit produk ($BEP_{\\text{unit}}$) dan dalam nilai rupiah ($BEP_{\\text{Rp}}$)?",
    "back": "• $BEP_{\\text{unit}} = \\frac{FC}{P - VC}$<br>($FC$ = Biaya Tetap Total, $P$ = Harga jual per unit, $VC$ = Biaya Variabel per unit, $(P - VC)$ disebut Margin Kontribusi).<br>• $BEP_{\\text{Rp}} = \\frac{FC}{1 - \\frac{VC}{P}}$<br>• Jika ingin target laba $\\pi$: $Q = \\frac{FC + \\pi}{P - VC}$.",
    "tag": "Biaya Produksi"
  },
  {
    "id": "fc-167",
    "category": "Ekonomi & Sosiologi",
    "title": "Rangkaian Konsep Pendapatan Nasional (GDP s/d DI)",
    "front": "Tuliskan urutan rumus dari GDP ke GNP, NNP, NNI, Personal Income (PI), hingga Disposable Income (DI)!",
    "back": "1. $GNP = GDP + \\text{Pendapatan Neto Luar Negeri (FPNL)}$<br>2. $NNP = GNP - \\text{Penyusutan (Depresiasi)}$<br>3. $NNI = NNP - \\text{Pajak Tidak Langsung} + \\text{Subsidi}$<br>4. $PI = NNI + \\text{Transfer Payment} - [\\text{Laba Ditahan} + \\text{Iuran Asuransi/Sosial} + \\text{Pajak Perseroan}]$<br>5. <strong>Disposable Income ($DI$):</strong> $DI = PI - \\text{Pajak Langsung (Pajak Penghasilan)}$<br>• Nilai $DI$ dialokasikan untuk Konsumsi dan Tabungan ($DI = C + S$).",
    "tag": "Makroekonomi"
  },
  {
    "id": "fc-168",
    "category": "Ekonomi & Sosiologi",
    "title": "Laju Pertumbuhan Ekonomi & Pendapatan Per Kapita",
    "front": "Bagaimana rumus pertumbuhan ekonomi tahunan dan pendapatan per kapita suatu negara?",
    "back": "• <strong>Laju Pertumbuhan Ekonomi ($g$):</strong><br>$g = \\frac{PDB_{\\text{riil}, t} - PDB_{\\text{riil}, t-1}}{PDB_{\\text{riil}, t-1}} \\times 100\\%$<br>(Catatan: WAJIB memakai PDB Riil berbasis harga konstan, bukan harga berlaku!).<br>• <strong>Pendapatan Per Kapita:</strong><br>$Y_{\\text{kapita}} = \\frac{GNP \\text{ atau } GDP}{\\text{Jumlah Penduduk}}$",
    "tag": "Makroekonomi"
  },
  {
    "id": "fc-169",
    "category": "Ekonomi & Sosiologi",
    "title": "Laju Inflasi Berdasarkan IHK & Tingkat Keparahan",
    "front": "Bagaimana rumus laju inflasi dari Indeks Harga Konsumen (IHK) dan pembagian keparahan inflasi?",
    "back": "• Rumus Inflasi: $\\text{Laju Inflasi} = \\frac{IHK_t - IHK_{t-1}}{IHK_{t-1}} \\times 100\\%$<br>• <strong>Kategori Keparahan Inflasi:</strong><br>- Ringan: $< 10\\%$ per tahun (belum mengganggu)<br>- Sedang: $10\\% - 30\\%$ per tahun<br>- Berat: $30\\% - 100\\%$ per tahun (mengacaukan daya beli)<br>- Hiperinflasi: $> 100\\%$ per tahun.",
    "tag": "Inflasi"
  },
  {
    "id": "fc-170",
    "category": "Ekonomi & Sosiologi",
    "title": "Angka Pengganda Uang (Money Multiplier) & GWM",
    "front": "Bagaimana rumus angka pengganda uang giral dan total penciptaan uang oleh bank umum?",
    "back": "• Angka Pengganda Uang ($m$): $m = \\frac{1}{R}$ ($R$ = rasio cadangan wajib / Giro Wajib Minimum / GWM).<br>• <strong>Total Penciptaan Uang Giral:</strong> $D = S \\times \\frac{1}{R}$ ($S$ = simpanan tabungan awal).<br>• Contoh: Jika setoran awal Rp100 juta dan GWM $5\\% = 0{,}05$, maka potensi uang giral beredar $= 100 \\times \\frac{1}{0{,}05} = \\text{Rp2 Miliar}$!",
    "tag": "Kebijakan Moneter"
  },
  {
    "id": "fc-171",
    "category": "Ekonomi & Sosiologi",
    "title": "Perdagangan Internasional: Mutlak vs Komparatif",
    "front": "Apa perbedaan pokok Teori Keunggulan Mutlak Adam Smith dan Keunggulan Komparatif David Ricardo?",
    "back": "• <strong>Keunggulan Mutlak (Adam Smith):</strong> Negara memproduksi barang jika biaya absolut produksinya lebih murah atau lebih produktif dibanding negara lain.<br>• <strong>Keunggulan Komparatif (David Ricardo):</strong> Walaupun suatu negara kalah efisien dalam semua barang, perdagangan tetap saling menguntungkan jika masing-masing berspesialisasi pada barang dengan <strong>biaya peluang (opportunity cost) terkecil</strong> (Dasar Tukar Domestik / DTD termurah).",
    "tag": "Perdagangan Internasional"
  },
  {
    "id": "fc-172",
    "category": "Ekonomi & Sosiologi",
    "title": "Bentuk-Bentuk Struktur Pasar Barang",
    "front": "Bandingkan ciri penentu harga antara Pasar Persaingan Sempurna, Monopoli, Oligopoli, dan Monopolistik!",
    "back": "• <strong>Persaingan Sempurna:</strong> Banyak penjual/pembeli, barang homogen murni, produsen adalah <em>Price Taker</em> ($P = MR = AR$).<br>• <strong>Monopoli:</strong> Satu penjual tunggal, tanpa barang substitusi dekat, produsen adalah <em>Price Maker</em>, hambatan masuk mutlak.<br>• <strong>Oligopoli:</strong> Dikuasai beberapa perusahaan besar (misal semen, operator seluler), terdapat perang tarif/iklan, kurva permintaan patah (<em>Kinked Demand Curve</em>).<br>• <strong>Monopolistik:</strong> Banyak penjual, produk <strong>terdiferensiasi</strong> (beda merk/kemasan), kurva permintaan elastis.",
    "tag": "Struktur Pasar"
  },
  {
    "id": "fc-173",
    "category": "Ekonomi & Sosiologi",
    "title": "Persamaan Dasar Akuntansi & Saldo Normal Akun",
    "front": "Tuliskan persamaan dasar akuntansi dan aturan saldo normal bertambah/berkurang debit-kredit!",
    "back": "• <strong>Persamaan Dasar Akuntansi:</strong><br>$\\text{Aset (Harta)} = \\text{Liabilitas (Utang)} + \\text{Ekuitas (Modal)}$<br>Dengan perluasan: $\\text{Aset} + \\text{Beban} + \\text{Prive} = \\text{Liabilitas} + \\text{Modal} + \\text{Pendapatan}$<br>• <strong>Saldo Normal Bertambah:</strong><br>- Bertambah di <strong>DEBIT</strong>: Harta (Aset), Beban, dan Prive.<br>- Bertambah di <strong>KREDIT</strong>: Utang (Liabilitas), Modal (Ekuitas), dan Pendapatan.",
    "tag": "Akuntansi"
  },
  {
    "id": "fc-174",
    "category": "Ekonomi & Sosiologi",
    "title": "Ayat Jurnal Penyesuaian: Beban Dibayar Dimuka",
    "front": "Bagaimana cara mencatat jurnal penyesuaian untuk beban dibayar dimuka dengan pendekatan Harta vs Beban?",
    "back": "• <strong>Pendekatan Harta (Dicatat sbg Aset saat bayar):</strong><br>Yang disesuaikan adalah bagian yang <strong>SUDAH KADALUARSA / TERPAKAI</strong>.<br>Jurnal: <code>(D) Beban Asuransi</code>, <code>(K) Asuransi Dibayar Dimuka</code>.<br>• <strong>Pendekatan Beban (Dicatat sbg Beban saat bayar):</strong><br>Yang disesuaikan adalah bagian yang <strong>BELUM KADALUARSA / MASIH SISA</strong>.<br>Jurnal: <code>(D) Asuransi Dibayar Dimuka</code>, <code>(K) Beban Asuransi</code>.",
    "tag": "Akuntansi"
  },
  {
    "id": "fc-175",
    "category": "Ekonomi & Sosiologi",
    "title": "Harga Pokok Penjualan (HPP) Usaha Dagang",
    "front": "Bagaimana rumus menghitung Harga Pokok Penjualan ($HPP$) dan Laba Kotor perusahaan dagang?",
    "back": "• Pembelian Bersih $= \\text{Pembelian} + \\text{Beban Angkut Pembelian} - (\\text{Retur Pembelian} + \\text{Potongan Pembelian})$<br>• Barang Tersedia untuk Dijual ($BTUD$) $= \\text{Persediaan Awal} + \\text{Pembelian Bersih}$<br>• <strong>Harga Pokok Penjualan:</strong><br>$HPP = BTUD - \\text{Persediaan Akhir}$<br>• Penjualan Bersih $= \\text{Penjualan} - (\\text{Retur Penjualan} + \\text{Potongan Penjualan})$<br>• Laba Kotor $= \\text{Penjualan Bersih} - HPP$.",
    "tag": "Akuntansi"
  },
  {
    "id": "fc-176",
    "category": "Ekonomi & Sosiologi",
    "title": "Sosiologi: 4 Tingkatan Norma Sosial",
    "front": "Sebutkan 4 tingkatan norma sosial dari yang sanksinya paling ringan hingga paling berat!",
    "back": "1. <strong>Cara (Usage):</strong> Norma penyimpangan ringan individu; sanksi berupa celaan/teguran (contoh: bersendawa saat makan).<br>2. <strong>Kebiasaan (Folkways):</strong> Perbuatan diulang-ulang; sanksi berupa sindiran/gunjingan (contoh: tidak menghormati orang lebih tua).<br>3. <strong>Tata Kelakuan (Mores):</strong> Pengatur kelakuan berlandaskan moral; sanksi tegas dikucilkan masyarakat (contoh: berzina, mencuri).<br>4. <strong>Adat Istiadat (Customs):</strong> Mengikat kuat turun-temurun; sanksi adat berat/pengusiran (contoh: melanggar larangan perkawinan satu marga).",
    "tag": "Norma Sosial"
  },
  {
    "id": "fc-177",
    "category": "Ekonomi & Sosiologi",
    "title": "Sosiologi: Tahapan Sosialisasi G.H. Mead",
    "front": "Sebutkan 4 tahapan sosialisasi pembentukan jati diri anak menurut George Herbert Mead!",
    "back": "1. <strong>Preparatory Stage (Tahap Persiapan):</strong> Meniru tanpa memahami arti (bayi meniru kata/gerakan orang tua).<br>2. <strong>Play Stage (Tahap Meniru Peran):</strong> Mulai meniru peran figur orang lain secara sadar (bermain peran dokter-dokteran, polisi).<br>3. <strong>Game Stage (Tahap Siap Bertindak):</strong> Mengetahui perannya sendiri sekaligus peran orang lain dalam aturan bersama (bermain sepak bola tim).<br>4. <strong>Generalized Other (Tahap Penerimaan Norma Kolektif):</strong> Mampu berinteraksi luas di masyarakat dengan mematuhi nilai-norma umum.",
    "tag": "Sosialisasi"
  },
  {
    "id": "fc-178",
    "category": "Ekonomi & Sosiologi",
    "title": "Sosiologi: Gemeinschaft vs Gesellschaft Tonnies",
    "front": "Apa perbedaan pokok kelompok sosial Gemeinschaft (Paguyuban) dan Gesellschaft (Patembayan)?",
    "back": "• <strong>Gemeinschaft (Paguyuban):</strong> Ikatan batin murni, bersifat alami, intim, dan kekal.<br>- <em>By Blood:</em> Keluarga, trah/marga.<br>- <em>By Place:</em> Rukun tetangga, desa adat.<br>- <em>By Mind:</em> Komunitas pengajian/keagamaan sepaham.<br>• <strong>Gesellschaft (Patembayan):</strong> Ikatan kontraktual jangka pendek berorientasi pamrih rasional/untung-rugi (contoh: serikat buruh, perseroan terbatas/PT, asosiasi pengusaha).",
    "tag": "Kelompok Sosial"
  },
  {
    "id": "fc-179",
    "category": "Ekonomi & Sosiologi",
    "title": "Sosiologi: Bentuk-Bentuk Akomodasi Konflik Sosial",
    "front": "Jelaskan perbedaan Arbitrase, Mediasi, Konsiliasi, Ajudikasi, dan Stalemate dalam penyelesaian konflik!",
    "back": "• <strong>Arbitrase:</strong> Melibatkan pihak ketiga berkedudukan lebih tinggi yang memberikan <strong>keputusan mengikat</strong>.<br>• <strong>Mediasi:</strong> Pihak ketiga netral hanya sebagai <strong>penasihat/fasilitator</strong>, keputusan akhir tetap di tangan pihak yang berselisih.<br>• <strong>Konsiliasi:</strong> Mempertemukan keinginan pihak yang bertikai melalui lembaga resmi tertentu.<br>• <strong>Ajudikasi:</strong> Penyelesaian melalui jalur <strong>pengadilan hukum</strong>.<br>• <strong>Stalemate:</strong> Konflik terhenti sendiri karena kedua pihak memiliki kekuatan seimbang.",
    "tag": "Konflik Sosial"
  },
  {
    "id": "fc-180",
    "category": "Ekonomi & Sosiologi",
    "title": "Sosiologi: Mobilitas Sosial & Salurannya",
    "front": "Sebutkan jenis mobilitas sosial vertikal dan saluran mobilitas sosial (Social Circulation Pitrim Sorokin)!",
    "back": "• <strong>Mobilitas Vertikal:</strong> Naik (<em>Social Climbing</em>, misal: buruh dipromosikan jadi manajer) atau Turun (<em>Social Sinking</em>, misal: pejabat dipecat).<br>• <strong>Mobilitas Horizontal:</strong> Perpindahan status sederajat tanpa ubah derajat hierarki (contoh: guru SMA pindah mengajar ke SMA lain).<br>• <strong>Saluran Mobilitas Sosial Populer:</strong><br>1. Lembaga Pendidikan (<em>Social Elevator</em> paling utama).<br>2. Organisasi Politik.<br>3. Lembaga Ekonomi & Bisnis.<br>4. Angkatan Bersenjata / Militer.",
    "tag": "Mobilitas Sosial"
  },
  {
    "id": "fc-181",
    "category": "Penalaran Umum (PU)",
    "title": "Silogisme Disjungtif & Dilema Konstruktif",
    "front": "Bagaimana kaidah penarikan kesimpulan pada Silogisme Disjungtif dan Dilema Logika?",
    "back": "• <strong>Silogisme Disjungtif:</strong><br>Premis 1: $p \\lor q$ (Pilihan $p$ atau $q$)<br>Premis 2: $\\sim p$ (Bukan $p$)<br>Kesimpulan: $\\therefore q$<br>• <strong>Dilema Konstruktif:</strong><br>Premis 1: $(p \\Rightarrow q) \\land (r \\Rightarrow s)$<br>Premis 2: $p \\lor r$<br>Kesimpulan: $\\therefore q \\lor s$<br>• Kaidah ini sangat sering menguji penalaran analitik skenario bersyarat di UTBK!",
    "tag": "Logika Deduktif"
  },
  {
    "id": "fc-182",
    "category": "Penalaran Umum (PU)",
    "title": "Logika Urutan & Penjadwalan (Penalaran Analitik)",
    "front": "Bagaimana trik taktis menyelesaikan soal cerita posisi berurutan (misal: 6 orang duduk berdampingan)?",
    "back": "1. Gambar garis penomoran posisi slot (1, 2, 3, 4, 5, 6).<br>2. Masukkan terlebih dahulu informasi mutlak/pasti (misal: 'A duduk tepat di kursi no. 1').<br>3. Ikat elemen yang berdampingan sebagai 1 kesatuan (contoh: 'B dan C harus bersebelahan' $\\implies [BC]$ atau $[CB]$).<br>4. Beri tanda blokir silang pada elemen yang tidak boleh berdampingan.<br>5. Lakukan uji opsi jawaban: eliminasi opsi yang melanggar batasan.",
    "tag": "Penalaran Analitik"
  },
  {
    "id": "fc-183",
    "category": "Penalaran Umum (PU)",
    "title": "Pola Deret Huruf & Posisi Abjad",
    "front": "Bagaimana langkah cepat menaklukkan soal pola barisan abjad yang rumit?",
    "back": "• Ubah seketika huruf menjadi nomor urut posisi alfabet:<br>A=1, B=2, C=3, D=4, E=5, F=6, G=7, H=8, I=9, J=10, K=11, L=12, M=13, N=14, O=15, P=16, Q=17, R=18, S=19, T=20, U=21, V=22, W=23, X=24, Y=25, Z=26.<br>• <strong>Jembatan Cepat Kelipatan 5:</strong> E (5), J (10), O (15), T (20), Y (25).<br>• Setelah menjadi angka, terapkan pencarian pola beda, loncat 1, atau operasi selang-seling layaknya deret aritmetika biasa!",
    "tag": "Deret Abjad"
  },
  {
    "id": "fc-184",
    "category": "Penalaran Umum (PU)",
    "title": "Trik Soal Kecukupan Data (Pernyataan 1 dan 2)",
    "front": "Bagaimana sistem eliminasi opsi 12-T-B pada soal 'Apakah pernyataan (1) dan (2) cukup menjawab pertanyaan'?",
    "back": "• <strong>Langkah Eliminasi Sistematis:</strong><br>1. Uji pernyataan (1) SAJA. Jika CUKUP $\\to$ opsi tersisa tinggal <strong>A</strong> atau <strong>D</strong>.<br>2. Uji pernyataan (2) SAJA. Jika CUKUP $\\to$ pilih <strong>D</strong>; jika TIDAK $\\to$ pilih <strong>A</strong>.<br>3. Jika (1) TIDAK CUKUP $\\to$ opsi tersisa <strong>B</strong>, <strong>C</strong>, atau <strong>E</strong>.<br>4. Uji (2) SAJA. Jika CUKUP $\\to$ pilih <strong>B</strong>.<br>5. Jika (2) juga TIDAK CUKUP $\\to$ gabungkan (1) dan (2). Jika cukup pilih <strong>C</strong>; jika tetap tak cukup pilih <strong>E</strong>.",
    "tag": "Kecukupan Data"
  },
  {
    "id": "fc-185",
    "category": "Penalaran Umum (PU)",
    "title": "Trik Uji Nilai Kritis Soal Hubungan Kuantitas $P$ dan $Q$",
    "front": "Nilai-nilai kritis apa saja yang wajib diuji saat menentukan hubungan kuantitas $P > Q, P < Q$, atau $P = Q$?",
    "back": "• <strong>Uji Titik Ekstrim (Jangan hanya menguji bilangan bulat positif!):</strong><br>1. Angka $0$<br>2. Angka $1$ dan $-1$<br>3. Pecahan positif di antara $0$ dan $1$ (misal: $x = 0{,}5$, karena $x^2 = 0{,}25 < x$!)<br>4. Bilangan negatif besar (misal: $x = -5$)<br>• Jika dengan satu nilai menghasilkan $P > Q$ namun dengan nilai lain menghasilkan $P < Q$, maka pilih seketika opsi <strong>D (Informasi tidak cukup untuk menentukan hubungan)</strong>!",
    "tag": "Pengetahuan Kuantitatif"
  },
  {
    "id": "fc-186",
    "category": "Pemahaman Bacaan & Menulis (PBM)",
    "title": "Kaidah Penggunaan Tanda Koma (,) EYD V",
    "front": "Kapan tanda baca koma WAJIB digunakan dan kapan DILARANG digunakan dalam kalimat?",
    "back": "• <strong>WAJIB Koma:</strong><br>1. Di depan konjungsi pertentangan intrakalimat: <em>..., tetapi ...</em>, <em>..., melainkan ...</em>, <em>..., sedangkan ...</em>.<br>2. Setelah anak kalimat yang mendahului induk kalimat (diawali <em>Jika..., Karena..., Walaupun...</em>).<br>3. Setelah konjungsi antarkalimat: <em>Oleh karena itu, ...</em>, <em>Namun, ...</em>, <em>Selain itu, ...</em>.<br>• <strong>DILARANG Koma:</strong><br>- Memisahkan induk kalimat yang mendahului anak kalimat: <em>'Ia tidak masuk sekolah karena sakit'</em> (JANGAN beri koma sebelum 'karena').",
    "tag": "EYD V Tanda Baca"
  },
  {
    "id": "fc-187",
    "category": "Pemahaman Bacaan & Menulis (PBM)",
    "title": "Kaidah Tanda Titik Koma (;) & Titik Dua (:)",
    "front": "Apa fungsi tepat tanda titik koma (;) dan titik dua (:) menurut EYD Edisi Kelima?",
    "back": "• <strong>Titik Koma (;):</strong><br>1. Pengganti konjungsi untuk memisahkan bagian kalimat yang sejenis dan setara (contoh: <em>Ibu menenun kain; ayah membaca koran</em>).<br>2. Memisahkan rincian yang sudah mengandung tanda koma.<br>• <strong>Titik Dua (:):</strong><br>1. Pada akhir pernyataan lengkap yang langsung diikuti perincian/pemerian.<br>2. <em>Peringatan:</em> Titik dua <strong>TIDAK DIGUNAKAN</strong> jika perincian tersebut merupakan pelengkap yang mengakhiri pernyataan (contoh salah: <em>Kami memerlukan: buku, pena...</em> $\\to$ jangan pakai titik dua!).",
    "tag": "EYD V Tanda Baca"
  },
  {
    "id": "fc-188",
    "category": "Pemahaman Bacaan & Menulis (PBM)",
    "title": "Hukum Peluluhan Fonem K-T-S-P pada Imbuhan MeN-",
    "front": "Kapan fonem K, T, S, P luluh menjadi ng/n/ny/m dan apa pengecualiannya?",
    "back": "• <strong>Syarat Luluh:</strong> Diawali awalan <em>me-</em> dan kata dasar berawalan $K, T, S, P$ yang diikuti <strong>HURUF VOKAL</strong>.<br>- $K \\to ng$: <em>me- + konsumsi $\\to$ mengonsumsi</em><br>- $T \\to n$: <em>me- + target $\\to$ menargetkan</em><br>- $S \\to ny$: <em>me- + sukses $\\to$ menyukseskan</em><br>- $P \\to m$: <em>me- + pesona $\\to$ memesona</em>, <em>me- + pengaruh $\\to$ memengaruhi</em><br>• <strong>TIDAK Luluh:</strong> Jika diikuti konsonan ganda/kluster (contoh: <em>memprakarsai, mentransfer, mengkritik, mensosialisasikan</em>).",
    "tag": "Morfologi EYD"
  },
  {
    "id": "fc-189",
    "category": "Pemahaman Bacaan & Menulis (PBM)",
    "title": "Kaidah Penulisan Huruf Miring menurut EYD V",
    "front": "Sebutkan 3 fungsi utama penggunaan huruf miring dalam naskah standar bahasa Indonesia!",
    "back": "1. Menuliskan <strong>judul buku, film, majalah, atau surat kabar</strong> yang dikutip dalam tulisan (contoh: <em>Surat kabar Kompas</em>, <em>novel Laskar Pelangi</em>). Judul artikel/puisi diapit tanda petik.<br>2. Menegaskan atau mengkhususkan huruf, bagian kata, atau kelompok kata.<br>3. Menuliskan <strong>kata atau ungkapan bahasa daerah atau bahasa asing</strong> yang belum diserap (contoh: <em>online $\\to$ daring</em>, <em>take off</em>, ungkapan <em>tut wuri handayani</em>).",
    "tag": "EYD V Ejaan"
  },
  {
    "id": "fc-190",
    "category": "Pemahaman Bacaan & Menulis (PBM)",
    "title": "Konjungsi Intrakalimat vs Antarkalimat",
    "front": "Mengapa kata seperti 'Sehingga', 'Karena', 'Sedangkan' tidak boleh berdiri di awal kalimat tunggal?",
    "back": "• Kata <em>sehingga, sedangkan, karena, dan, atau, bahwa</em> adalah <strong>konjungsi intrakalimat subordinatif/koordinatif</strong>. Fungsinya menghubungkan dua klausa di dalam 1 kalimat, BUKAN antar kalimat!<br>• Menaruhnya di awal kalimat mandiri membuat kalimat tersebut buntung (kehilangan induk kalimat).<br>• <strong>Padanan Antarkalimat yang Benar:</strong><br>- Jangan pakai 'Sehingga...', gunakan <em>'Akibatnya, ...'</em> atau <em>'Oleh karena itu, ...'</em>.<br>- Jangan pakai 'Namun tetapi...', gunakan salah satu saja: <em>'Namun, ...'</em>.",
    "tag": "Kalimat Efektif"
  },
  {
    "id": "fc-191",
    "category": "Pemahaman Bacaan & Menulis (PBM)",
    "title": "Menemukan Inti Kalimat (Subjek & Predikat Inti)",
    "front": "Bagaimana teknik cepat membedah kalimat kompleks yang sangat panjang menjadi Inti Kalimat?",
    "back": "1. <strong>Coret Frasa Keterangan:</strong> Segala frasa yang diawali preposisi (<em>di, ke, dari, pada, dalam, untuk, dengan, melalui</em>).<br>2. <strong>Coret Klausa Penjelas:</strong> Segala bagian yang diawali kata <em>yang</em>.<br>3. Cari kata kerja utama yang tidak didahului 'yang' $\\to$ itulah <strong>Predikat Inti (P)</strong>.<br>4. Ajukan pertanyaan 'Siapa / Apa yang [P]?' $\\to$ itulah <strong>Subjek Inti (S)</strong>.<br>Contoh: <em>Pemerintah (S) mengumumkan (P) kebijakan baru (O)</em>.",
    "tag": "Sintaksis"
  },
  {
    "id": "fc-192",
    "category": "Literasi Bahasa Indonesia",
    "title": "Menentukan Simpulan Paragraf yang Valid",
    "front": "Apa kriteria simpulan yang benar dalam soal literasi membaca dan bagaimana jebakan pilihannya?",
    "back": "• <strong>Ciri Simpulan yang Tepat:</strong> Harus mewakili <strong>keseluruhan isi teks</strong> (bersifat generalisasi komprehensif) dan konsisten dengan seluruh fakta yang disajikan.<br>• <strong>Jebakan Opsi Pengecoh di UTBK:</strong><br>1. <em>Terlalu Sempit:</em> Hanya merangkum 1 kalimat contoh atau paragraf tertentu saja.<br>2. <em>Melompat (Overgeneralization):</em> Menggunakan kata absolut ('pasti', 'semua', 'harus') padahal teks hanya menyatakan kemungkinan.<br>3. <em>Informasi Baru:</em> Membawa opini luar yang logis tetapi tidak ada dasarnya di dalam teks!",
    "tag": "Pemahaman Bacaan"
  },
  {
    "id": "fc-193",
    "category": "Literasi Bahasa Indonesia",
    "title": "Membedakan Fakta Objektif vs Opini Penulis",
    "front": "Bagaimana cara membedakan kalimat fakta dengan kalimat opini dalam teks artikel ilmiah?",
    "back": "• <strong>Fakta (Objektif):</strong> Bersifat pasti, dapat diverifikasi kebenarannya melalui bukti empiris, angka riil, data statistik, atau peristiwa historis (contoh: <em>'BPS mencatat inflasi Januari 2026 sebesar 2,4%'</em>).<br>• <strong>Opini (Subjektif):</strong> Mengandung perkiraan, saran, prediksi masa depan, atau kata sifat evaluatif (contoh: <em>sebaiknya, tampaknya, sangat disayangkan, diprediksi, dinilai berhasil</em>).",
    "tag": "Literasi Membaca"
  },
  {
    "id": "fc-194",
    "category": "Literasi Bahasa Indonesia",
    "title": "Mengidentifikasi Asumsi Tersembunyi & Kelemahan Argumen",
    "front": "Bagaimana cara menemukan asumsi yang mendasari argumen penulis (Assumption) dan kelemahan logikanya (Weaken)?",
    "back": "• <strong>Asumsi (Premis Tersembunyi):</strong> Fakta yang TIDAK tertulis dalam teks, tetapi WAJIB bernilai benar agar simpulan penulis bisa sah. Uji dengan <em>Negasi</em>: Jika asumsi dinegasikan dan argumen penulis langsung runtuh, maka asumsi tersebut tepat!<br>• <strong>Melemahkan Argumen (Weaken):</strong> Cari opsi yang memberikan fakta baru yang merusak hubungan sebab-akibat penulis atau menyajikan penyebab alternatif lain.",
    "tag": "Penalaran Kritis"
  },
  {
    "id": "fc-195",
    "category": "Literasi Bahasa Indonesia",
    "title": "Makna Kata Kontekstual & Asosiasi",
    "front": "Bagaimana menentukan makna kata atau istilah serapan dalam konteks paragraf tertentu?",
    "back": "• Jangan hanya terpaku pada definisi kamus (KBBI) harfiah.<br>• Baca 1 kalimat sebelum dan 1 kalimat sesudahnya untuk melihat hubungan asosiasi makna.<br>• <strong>Uji Substitusi:</strong> Gantikan kata yang ditanyakan dengan masing-masing pilihan jawaban (A, B, C, D, E) ke dalam kalimat teks. Pilih kata pengganti yang menjaga keutuhan makna dan register nada kalimat!",
    "tag": "Semantik"
  },
  {
    "id": "fc-196",
    "category": "Literasi Bahasa Inggris",
    "title": "Main Idea & Best Title Identification Techniques",
    "front": "How do you identify the main idea and the best title for a multi-paragraph academic passage?",
    "back": "• <strong>Topic Noun Identification:</strong> Notice the specific subject noun or phrase repeated or paraphrased throughout EVERY paragraph.<br>• <strong>First & Last Sentences:</strong> Synthesize the thesis statement in Paragraph 1 and the concluding thoughts in the final paragraph.<br>• <strong>Best Title Criteria:</strong> It must be neither too broad (encompassing topics outside the passage) nor too narrow (only covering one supporting detail). It should capture the core argument succinctly.",
    "tag": "Reading Strategy"
  },
  {
    "id": "fc-197",
    "category": "Literasi Bahasa Inggris",
    "title": "Explicit Stated Detail vs Implicit Inference",
    "front": "What is the key difference between 'According to the passage' questions and 'It can be inferred' questions?",
    "back": "• <strong>Stated Detail ('According to the passage / Which is TRUE'):</strong><br>The answer is explicitly written in the text, but disguised using <strong>synonyms and syntactic paraphrasing</strong>. Do NOT deduce beyond what is written.<br>• <strong>Inference ('It can be inferred / implies / suggests'):</strong><br>The answer is <strong>NOT directly stated</strong> word-for-word, but is a 100% logically inevitable conclusion based on text clues. Beware of extreme choices containing words like <em>always, never, fully</em>.",
    "tag": "Inference"
  },
  {
    "id": "fc-198",
    "category": "Literasi Bahasa Inggris",
    "title": "Vocabulary in Context & Contextual Clues",
    "front": "How can you deduce the meaning of unfamiliar academic vocabulary using context clues?",
    "back": "• <strong>Definition / Restatement Clue:</strong> Look for appositives, commas, dashes, or words like <em>that is, in other words, or known as</em>.<br>• <strong>Contrast Clue:</strong> Words like <em>unlike, whereas, but, on the contrary</em> indicate the word is opposite to a known word.<br>• <strong>Example Clue:</strong> Look for <em>such as, for instance, including</em> to deduce the category.<br>• Always replace the target word in the sentence with your chosen option to ensure grammatical and semantic coherence!",
    "tag": "Vocabulary"
  },
  {
    "id": "fc-199",
    "category": "Literasi Bahasa Inggris",
    "title": "Author's Organization of Ideas & Text Structure",
    "front": "What common text structure patterns are tested in UTBK English literacy questions?",
    "back": "1. <strong>Problem - Solution:</strong> Presents an issue and evaluates proposed measures.<br>2. <strong>Cause - Effect:</strong> Analyzes underlying triggers and resultant impacts (marked by <em>consequently, led to, stem from</em>).<br>3. <strong>Compare - Contrast:</strong> Evaluates similarities and divergences between two concepts.<br>4. <strong>Chronological / Process:</strong> Outlines developmental stages over time.<br>• Question prompt: <em>'The passage is primarily organized by...'</em> $\\to$ identify the overarching paragraph relationship.",
    "tag": "Text Structure"
  },
  {
    "id": "fc-200",
    "category": "Literasi Bahasa Inggris",
    "title": "Paragraph Function & Relationship Between Paragraphs",
    "front": "How do you determine the relationship or function of Paragraph 2 in relation to Paragraph 1?",
    "back": "• Common relations tested:<br>- <strong>Elaborating / Exemplifying:</strong> Providing concrete evidence or real-world cases for a theory asserted in Paragraph 1.<br>- <strong>Counter-arguing / Refuting:</strong> Presenting limitations, flaws, or contrary perspectives to earlier claims.<br>- <strong>Explaining Causes:</strong> Detailing the physical or biological mechanisms underlying a phenomenon introduced in Paragraph 1.<br>• Focus on the <strong>first sentence of Paragraph 2</strong> (transition hook!).",
    "tag": "Paragraph Function"
  }
];

if (typeof window !== "undefined") {
  window.FLASHCARDS_DATA = FLASHCARDS_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FLASHCARDS_DATA };
}
