// Dataset Flashcards Pintar UTBK SNBT (Pahamify Style)
// Berisi 67 kartu ringkasan rumus esensial, kaidah EYD V, dan trik logika kilat

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
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FLASHCARDS_DATA };
}
