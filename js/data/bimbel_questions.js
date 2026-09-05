/* ============================================================ */
/* TembusPTN — DATA BANK SOAL TAMBAHAN BIMBEL TERNAMA           */
/* Total: 600 Butir Soal Bimbel Terakreditasi (TPS & Literasi)   */
/* Sumber: Prosus INTEN, Ganesha Operation (GO), Neutron,       */
/*         Ruangguru Brain Academy, Nurul Fikri (NF), Zenius    */
/* ============================================================ */

const BIMBEL_QUESTIONS_DATA = [
  {
    "id": "bimbel_pu_001",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Barisan Geometri)",
    "difficulty": "HOTS",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: 3, 6, 12, 24, 48, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "84"
      },
      {
        "key": "B",
        "text": "96"
      },
      {
        "key": "C",
        "text": "92"
      },
      {
        "key": "D",
        "text": "102"
      },
      {
        "key": "E",
        "text": "108"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Pola perkalian konstan 2: 3 x 2 = 6, 6 x 2 = 12, 12 x 2 = 24, 24 x 2 = 48, suku selanjutnya 48 x 2 = 96.",
    "quickTrick": "💡 INTEN Quick Concept: Cek rasio suku berturutan: geometri dengan rasio r = 2."
  },
  {
    "id": "bimbel_pu_002",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Deret Aritmetika Bertingkat)",
    "difficulty": "Mudah",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: 4, 7, 13, 22, 34, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "46"
      },
      {
        "key": "B",
        "text": "48"
      },
      {
        "key": "C",
        "text": "51"
      },
      {
        "key": "D",
        "text": "49"
      },
      {
        "key": "E",
        "text": "53"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Pola selisih bertingkat: +3, +6, +9, +12, berikutnya +15. Maka 34 + 15 = 49.",
    "quickTrick": "👑 Metode The King GO: Cari tingkat beda pertama yang membentuk barisan kelipatan 3."
  },
  {
    "id": "bimbel_pu_003",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Pola Fibonacci)",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: 2, 3, 5, 8, 13, 21, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "34"
      },
      {
        "key": "B",
        "text": "31"
      },
      {
        "key": "C",
        "text": "32"
      },
      {
        "key": "D",
        "text": "35"
      },
      {
        "key": "E",
        "text": "37"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Pola barisan Fibonacci di mana setiap suku adalah jumlah dua suku sebelumnya: 13 + 21 = 34.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Kenali pola penjumlahan 2 suku terakhir (Fibonacci series)."
  },
  {
    "id": "bimbel_pu_004",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Pola Operasi Kombinasi)",
    "difficulty": "HOTS",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: 80, 40, 42, 21, 23, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "12"
      },
      {
        "key": "B",
        "text": "13"
      },
      {
        "key": "C",
        "text": "11.5"
      },
      {
        "key": "D",
        "text": "14"
      },
      {
        "key": "E",
        "text": "15"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Pola bergantian: bagi 2 kemudian tambah 2 (:2, +2, :2, +2, :2). Suku berikutnya adalah 23 / 2 = 11,5.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Operasi selang-seling operasi pembagian dan penjumlahan."
  },
  {
    "id": "bimbel_pu_005",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Barisan Aritmetika Dasar)",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: 5, 8, 11, 14, 17, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "18"
      },
      {
        "key": "B",
        "text": "19"
      },
      {
        "key": "C",
        "text": "21"
      },
      {
        "key": "D",
        "text": "22"
      },
      {
        "key": "E",
        "text": "20"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Barisan aritmetika dengan beda tetap b = +3. Suku berikutnya adalah 17 + 3 = 20.",
    "quickTrick": "🌟 NF Smart Solution: Beda konstan b = 3."
  },
  {
    "id": "bimbel_pu_006",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Bilangan Kuadrat)",
    "difficulty": "Mudah",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: 1, 4, 9, 16, 25, 36, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "45"
      },
      {
        "key": "B",
        "text": "49"
      },
      {
        "key": "C",
        "text": "47"
      },
      {
        "key": "D",
        "text": "50"
      },
      {
        "key": "E",
        "text": "54"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Pola bilangan kuadrat: 1^2, 2^2, 3^2, 4^2, 5^2, 6^2, suku berikutnya 7^2 = 49.",
    "quickTrick": "🧠 Zenius Core Logic: Perhatikan bilangan kuadrat sempurna secara urut."
  },
  {
    "id": "bimbel_pu_007",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Pengurangan Bertingkat)",
    "difficulty": "HOTS",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: 100, 95, 85, 70, 50, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "20"
      },
      {
        "key": "B",
        "text": "30"
      },
      {
        "key": "C",
        "text": "35"
      },
      {
        "key": "D",
        "text": "25"
      },
      {
        "key": "E",
        "text": "15"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Pola selisih berkurang bertingkat: -5, -10, -15, -20, selanjutnya -25. Maka 50 - 25 = 25.",
    "quickTrick": "💡 INTEN Quick Concept: Pengurangan dengan selisih bertambah 5 setiap langkah."
  },
  {
    "id": "bimbel_pu_008",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Pola Abjad Bertingkat)",
    "difficulty": "Mudah",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: B, D, G, K, P, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "V"
      },
      {
        "key": "B",
        "text": "T"
      },
      {
        "key": "C",
        "text": "U"
      },
      {
        "key": "D",
        "text": "W"
      },
      {
        "key": "E",
        "text": "X"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Konversi ke angka: 2, 4, 7, 11, 16 (+2, +3, +4, +5). Berikutnya +6 = 22, yang merupakan huruf V.",
    "quickTrick": "👑 Metode The King GO: Ubah huruf menjadi urutan abjad 1-26 untuk menemukan pola selisih."
  },
  {
    "id": "bimbel_pu_009",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Deret Abjad)",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: A, C, F, J, O, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "S"
      },
      {
        "key": "B",
        "text": "T"
      },
      {
        "key": "C",
        "text": "U"
      },
      {
        "key": "D",
        "text": "V"
      },
      {
        "key": "E",
        "text": "W"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Pola urutan abjad bertambah: A(1) +2= C(3) +3= F(6) +4= J(10) +5= O(15) +6= U(21).",
    "quickTrick": "⚡ Langkah Taktis Neutron: Penambahan langkah urutan abjad n+1."
  },
  {
    "id": "bimbel_pu_010",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Selisih Eksponensial)",
    "difficulty": "HOTS",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: 12, 14, 18, 26, 42, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "68"
      },
      {
        "key": "B",
        "text": "72"
      },
      {
        "key": "C",
        "text": "76"
      },
      {
        "key": "D",
        "text": "82"
      },
      {
        "key": "E",
        "text": "74"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Pola selisih adalah perpangkatan dua: +2, +4, +8, +16, berikutnya +32. Maka 42 + 32 = 74.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Selisih antar suku adalah 2^n."
  },
  {
    "id": "bimbel_pu_011",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Barisan Geometri)",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: 3, 6, 12, 24, 48, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "84"
      },
      {
        "key": "B",
        "text": "96"
      },
      {
        "key": "C",
        "text": "92"
      },
      {
        "key": "D",
        "text": "102"
      },
      {
        "key": "E",
        "text": "108"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Pola perkalian konstan 2: 3 x 2 = 6, 6 x 2 = 12, 12 x 2 = 24, 24 x 2 = 48, suku selanjutnya 48 x 2 = 96.",
    "quickTrick": "🌟 NF Smart Solution: Cek rasio suku berturutan: geometri dengan rasio r = 2."
  },
  {
    "id": "bimbel_pu_012",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Deret Aritmetika Bertingkat)",
    "difficulty": "Mudah",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: 4, 7, 13, 22, 34, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "46"
      },
      {
        "key": "B",
        "text": "48"
      },
      {
        "key": "C",
        "text": "51"
      },
      {
        "key": "D",
        "text": "49"
      },
      {
        "key": "E",
        "text": "53"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Pola selisih bertingkat: +3, +6, +9, +12, berikutnya +15. Maka 34 + 15 = 49.",
    "quickTrick": "🧠 Zenius Core Logic: Cari tingkat beda pertama yang membentuk barisan kelipatan 3."
  },
  {
    "id": "bimbel_pu_013",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Pola Fibonacci)",
    "difficulty": "HOTS",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: 2, 3, 5, 8, 13, 21, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "34"
      },
      {
        "key": "B",
        "text": "31"
      },
      {
        "key": "C",
        "text": "32"
      },
      {
        "key": "D",
        "text": "35"
      },
      {
        "key": "E",
        "text": "37"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Pola barisan Fibonacci di mana setiap suku adalah jumlah dua suku sebelumnya: 13 + 21 = 34.",
    "quickTrick": "💡 INTEN Quick Concept: Kenali pola penjumlahan 2 suku terakhir (Fibonacci series)."
  },
  {
    "id": "bimbel_pu_014",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Pola Operasi Kombinasi)",
    "difficulty": "Mudah",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: 80, 40, 42, 21, 23, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "12"
      },
      {
        "key": "B",
        "text": "13"
      },
      {
        "key": "C",
        "text": "11.5"
      },
      {
        "key": "D",
        "text": "14"
      },
      {
        "key": "E",
        "text": "15"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Pola bergantian: bagi 2 kemudian tambah 2 (:2, +2, :2, +2, :2). Suku berikutnya adalah 23 / 2 = 11,5.",
    "quickTrick": "👑 Metode The King GO: Operasi selang-seling operasi pembagian dan penjumlahan."
  },
  {
    "id": "bimbel_pu_015",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Barisan Aritmetika Dasar)",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: 5, 8, 11, 14, 17, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "18"
      },
      {
        "key": "B",
        "text": "19"
      },
      {
        "key": "C",
        "text": "21"
      },
      {
        "key": "D",
        "text": "22"
      },
      {
        "key": "E",
        "text": "20"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Barisan aritmetika dengan beda tetap b = +3. Suku berikutnya adalah 17 + 3 = 20.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Beda konstan b = 3."
  },
  {
    "id": "bimbel_pu_016",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Bilangan Kuadrat)",
    "difficulty": "HOTS",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: 1, 4, 9, 16, 25, 36, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "45"
      },
      {
        "key": "B",
        "text": "49"
      },
      {
        "key": "C",
        "text": "47"
      },
      {
        "key": "D",
        "text": "50"
      },
      {
        "key": "E",
        "text": "54"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Pola bilangan kuadrat: 1^2, 2^2, 3^2, 4^2, 5^2, 6^2, suku berikutnya 7^2 = 49.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Perhatikan bilangan kuadrat sempurna secara urut."
  },
  {
    "id": "bimbel_pu_017",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Pengurangan Bertingkat)",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: 100, 95, 85, 70, 50, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "20"
      },
      {
        "key": "B",
        "text": "30"
      },
      {
        "key": "C",
        "text": "35"
      },
      {
        "key": "D",
        "text": "25"
      },
      {
        "key": "E",
        "text": "15"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Pola selisih berkurang bertingkat: -5, -10, -15, -20, selanjutnya -25. Maka 50 - 25 = 25.",
    "quickTrick": "🌟 NF Smart Solution: Pengurangan dengan selisih bertambah 5 setiap langkah."
  },
  {
    "id": "bimbel_pu_018",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Pola Abjad Bertingkat)",
    "difficulty": "Mudah",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: B, D, G, K, P, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "V"
      },
      {
        "key": "B",
        "text": "T"
      },
      {
        "key": "C",
        "text": "U"
      },
      {
        "key": "D",
        "text": "W"
      },
      {
        "key": "E",
        "text": "X"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Konversi ke angka: 2, 4, 7, 11, 16 (+2, +3, +4, +5). Berikutnya +6 = 22, yang merupakan huruf V.",
    "quickTrick": "🧠 Zenius Core Logic: Ubah huruf menjadi urutan abjad 1-26 untuk menemukan pola selisih."
  },
  {
    "id": "bimbel_pu_019",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Deret Abjad)",
    "difficulty": "HOTS",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: A, C, F, J, O, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "S"
      },
      {
        "key": "B",
        "text": "T"
      },
      {
        "key": "C",
        "text": "U"
      },
      {
        "key": "D",
        "text": "V"
      },
      {
        "key": "E",
        "text": "W"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Pola urutan abjad bertambah: A(1) +2= C(3) +3= F(6) +4= J(10) +5= O(15) +6= U(21).",
    "quickTrick": "💡 INTEN Quick Concept: Penambahan langkah urutan abjad n+1."
  },
  {
    "id": "bimbel_pu_020",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Selisih Eksponensial)",
    "difficulty": "Mudah",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: 12, 14, 18, 26, 42, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "68"
      },
      {
        "key": "B",
        "text": "72"
      },
      {
        "key": "C",
        "text": "76"
      },
      {
        "key": "D",
        "text": "82"
      },
      {
        "key": "E",
        "text": "74"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Pola selisih adalah perpangkatan dua: +2, +4, +8, +16, berikutnya +32. Maka 42 + 32 = 74.",
    "quickTrick": "👑 Metode The King GO: Selisih antar suku adalah 2^n."
  },
  {
    "id": "bimbel_pu_021",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Barisan Geometri)",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: 3, 6, 12, 24, 48, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "84"
      },
      {
        "key": "B",
        "text": "96"
      },
      {
        "key": "C",
        "text": "92"
      },
      {
        "key": "D",
        "text": "102"
      },
      {
        "key": "E",
        "text": "108"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Pola perkalian konstan 2: 3 x 2 = 6, 6 x 2 = 12, 12 x 2 = 24, 24 x 2 = 48, suku selanjutnya 48 x 2 = 96.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Cek rasio suku berturutan: geometri dengan rasio r = 2."
  },
  {
    "id": "bimbel_pu_022",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Deret Aritmetika Bertingkat)",
    "difficulty": "HOTS",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: 4, 7, 13, 22, 34, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "46"
      },
      {
        "key": "B",
        "text": "48"
      },
      {
        "key": "C",
        "text": "51"
      },
      {
        "key": "D",
        "text": "49"
      },
      {
        "key": "E",
        "text": "53"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Pola selisih bertingkat: +3, +6, +9, +12, berikutnya +15. Maka 34 + 15 = 49.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Cari tingkat beda pertama yang membentuk barisan kelipatan 3."
  },
  {
    "id": "bimbel_pu_023",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Pola Fibonacci)",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: 2, 3, 5, 8, 13, 21, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "34"
      },
      {
        "key": "B",
        "text": "31"
      },
      {
        "key": "C",
        "text": "32"
      },
      {
        "key": "D",
        "text": "35"
      },
      {
        "key": "E",
        "text": "37"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Pola barisan Fibonacci di mana setiap suku adalah jumlah dua suku sebelumnya: 13 + 21 = 34.",
    "quickTrick": "🌟 NF Smart Solution: Kenali pola penjumlahan 2 suku terakhir (Fibonacci series)."
  },
  {
    "id": "bimbel_pu_024",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Pola Operasi Kombinasi)",
    "difficulty": "Mudah",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: 80, 40, 42, 21, 23, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "12"
      },
      {
        "key": "B",
        "text": "13"
      },
      {
        "key": "C",
        "text": "11.5"
      },
      {
        "key": "D",
        "text": "14"
      },
      {
        "key": "E",
        "text": "15"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Pola bergantian: bagi 2 kemudian tambah 2 (:2, +2, :2, +2, :2). Suku berikutnya adalah 23 / 2 = 11,5.",
    "quickTrick": "🧠 Zenius Core Logic: Operasi selang-seling operasi pembagian dan penjumlahan."
  },
  {
    "id": "bimbel_pu_025",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Barisan Aritmetika Dasar)",
    "difficulty": "HOTS",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: 5, 8, 11, 14, 17, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "18"
      },
      {
        "key": "B",
        "text": "19"
      },
      {
        "key": "C",
        "text": "21"
      },
      {
        "key": "D",
        "text": "22"
      },
      {
        "key": "E",
        "text": "20"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Barisan aritmetika dengan beda tetap b = +3. Suku berikutnya adalah 17 + 3 = 20.",
    "quickTrick": "💡 INTEN Quick Concept: Beda konstan b = 3."
  },
  {
    "id": "bimbel_pu_026",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Bilangan Kuadrat)",
    "difficulty": "Mudah",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: 1, 4, 9, 16, 25, 36, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "45"
      },
      {
        "key": "B",
        "text": "49"
      },
      {
        "key": "C",
        "text": "47"
      },
      {
        "key": "D",
        "text": "50"
      },
      {
        "key": "E",
        "text": "54"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Pola bilangan kuadrat: 1^2, 2^2, 3^2, 4^2, 5^2, 6^2, suku berikutnya 7^2 = 49.",
    "quickTrick": "👑 Metode The King GO: Perhatikan bilangan kuadrat sempurna secara urut."
  },
  {
    "id": "bimbel_pu_027",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Pengurangan Bertingkat)",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: 100, 95, 85, 70, 50, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "20"
      },
      {
        "key": "B",
        "text": "30"
      },
      {
        "key": "C",
        "text": "35"
      },
      {
        "key": "D",
        "text": "25"
      },
      {
        "key": "E",
        "text": "15"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Pola selisih berkurang bertingkat: -5, -10, -15, -20, selanjutnya -25. Maka 50 - 25 = 25.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Pengurangan dengan selisih bertambah 5 setiap langkah."
  },
  {
    "id": "bimbel_pu_028",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Pola Abjad Bertingkat)",
    "difficulty": "HOTS",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: B, D, G, K, P, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "V"
      },
      {
        "key": "B",
        "text": "T"
      },
      {
        "key": "C",
        "text": "U"
      },
      {
        "key": "D",
        "text": "W"
      },
      {
        "key": "E",
        "text": "X"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Konversi ke angka: 2, 4, 7, 11, 16 (+2, +3, +4, +5). Berikutnya +6 = 22, yang merupakan huruf V.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Ubah huruf menjadi urutan abjad 1-26 untuk menemukan pola selisih."
  },
  {
    "id": "bimbel_pu_029",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Deret Abjad)",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: A, C, F, J, O, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "S"
      },
      {
        "key": "B",
        "text": "T"
      },
      {
        "key": "C",
        "text": "U"
      },
      {
        "key": "D",
        "text": "V"
      },
      {
        "key": "E",
        "text": "W"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Pola urutan abjad bertambah: A(1) +2= C(3) +3= F(6) +4= J(10) +5= O(15) +6= U(21).",
    "quickTrick": "🌟 NF Smart Solution: Penambahan langkah urutan abjad n+1."
  },
  {
    "id": "bimbel_pu_030",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Selisih Eksponensial)",
    "difficulty": "Mudah",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: 12, 14, 18, 26, 42, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "68"
      },
      {
        "key": "B",
        "text": "72"
      },
      {
        "key": "C",
        "text": "76"
      },
      {
        "key": "D",
        "text": "82"
      },
      {
        "key": "E",
        "text": "74"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Pola selisih adalah perpangkatan dua: +2, +4, +8, +16, berikutnya +32. Maka 42 + 32 = 74.",
    "quickTrick": "🧠 Zenius Core Logic: Selisih antar suku adalah 2^n."
  },
  {
    "id": "bimbel_pu_031",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Barisan Geometri)",
    "difficulty": "HOTS",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: 3, 6, 12, 24, 48, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "84"
      },
      {
        "key": "B",
        "text": "96"
      },
      {
        "key": "C",
        "text": "92"
      },
      {
        "key": "D",
        "text": "102"
      },
      {
        "key": "E",
        "text": "108"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Pola perkalian konstan 2: 3 x 2 = 6, 6 x 2 = 12, 12 x 2 = 24, 24 x 2 = 48, suku selanjutnya 48 x 2 = 96.",
    "quickTrick": "💡 INTEN Quick Concept: Cek rasio suku berturutan: geometri dengan rasio r = 2."
  },
  {
    "id": "bimbel_pu_032",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Deret Aritmetika Bertingkat)",
    "difficulty": "Mudah",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: 4, 7, 13, 22, 34, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "46"
      },
      {
        "key": "B",
        "text": "48"
      },
      {
        "key": "C",
        "text": "51"
      },
      {
        "key": "D",
        "text": "49"
      },
      {
        "key": "E",
        "text": "53"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Pola selisih bertingkat: +3, +6, +9, +12, berikutnya +15. Maka 34 + 15 = 49.",
    "quickTrick": "👑 Metode The King GO: Cari tingkat beda pertama yang membentuk barisan kelipatan 3."
  },
  {
    "id": "bimbel_pu_033",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Pola Fibonacci)",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: 2, 3, 5, 8, 13, 21, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "34"
      },
      {
        "key": "B",
        "text": "31"
      },
      {
        "key": "C",
        "text": "32"
      },
      {
        "key": "D",
        "text": "35"
      },
      {
        "key": "E",
        "text": "37"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Pola barisan Fibonacci di mana setiap suku adalah jumlah dua suku sebelumnya: 13 + 21 = 34.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Kenali pola penjumlahan 2 suku terakhir (Fibonacci series)."
  },
  {
    "id": "bimbel_pu_034",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Pola Operasi Kombinasi)",
    "difficulty": "HOTS",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: 80, 40, 42, 21, 23, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "12"
      },
      {
        "key": "B",
        "text": "13"
      },
      {
        "key": "C",
        "text": "11.5"
      },
      {
        "key": "D",
        "text": "14"
      },
      {
        "key": "E",
        "text": "15"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Pola bergantian: bagi 2 kemudian tambah 2 (:2, +2, :2, +2, :2). Suku berikutnya adalah 23 / 2 = 11,5.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Operasi selang-seling operasi pembagian dan penjumlahan."
  },
  {
    "id": "bimbel_pu_035",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Induktif (Barisan Aritmetika Dasar)",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Perhatikan barisan berikut: 5, 8, 11, 14, 17, ... Nilai atau suku yang paling tepat untuk melanjutkan pola tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "18"
      },
      {
        "key": "B",
        "text": "19"
      },
      {
        "key": "C",
        "text": "21"
      },
      {
        "key": "D",
        "text": "22"
      },
      {
        "key": "E",
        "text": "20"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Barisan aritmetika dengan beda tetap b = +3. Suku berikutnya adalah 17 + 3 = 20.",
    "quickTrick": "🌟 NF Smart Solution: Beda konstan b = 3."
  },
  {
    "id": "bimbel_pu_036",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Silogisme Kategori)",
    "difficulty": "HOTS",
    "stimulus": "Semua siswa yang lolos seleksi SNBT memiliki disiplin belajar tinggi. Beberapa atlet basket di SMA Nusantara lolos seleksi SNBT.",
    "question": "Simpulan yang paling sah secara logika deduktif adalah...",
    "options": [
      {
        "key": "A",
        "text": "Semua siswa yang memiliki disiplin belajar tinggi adalah atlet basket di SMA Nusantara."
      },
      {
        "key": "B",
        "text": "Semua atlet basket di SMA Nusantara dipastikan lolos seleksi SNBT."
      },
      {
        "key": "C",
        "text": "Beberapa atlet basket di SMA Nusantara memiliki disiplin belajar tinggi."
      },
      {
        "key": "D",
        "text": "Ada siswa SMA Nusantara yang tidak disiplin tetapi lolos SNBT."
      },
      {
        "key": "E",
        "text": "Disiplin belajar tinggi hanya dimiliki oleh atlet basket SMA Nusantara."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Silogisme kategori: Premis universal (Semua A adalah B) + Premis partikular (Beberapa C adalah A) menghasilkan simpulan partikular: Beberapa C adalah B.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Kombinasi 'Semua' + 'Beberapa' selalu menghasilkan simpulan 'Beberapa'. Eliminasi opsi yang memuat 'Semua'."
  },
  {
    "id": "bimbel_pu_037",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Modus Tollens)",
    "difficulty": "Sedang",
    "stimulus": "Jika pasokan bahan pangan terganggu, maka harga kebutuhan pokok di pasar tradisional akan melonjak. Saat ini harga kebutuhan pokok di pasar tradisional stabil dan tidak mengalami lonjakan.",
    "question": "Simpulan yang paling valid berdasarkan prinsip logika adalah...",
    "options": [
      {
        "key": "A",
        "text": "Pasokan bahan pangan tidak terganggu."
      },
      {
        "key": "B",
        "text": "Pasokan bahan pangan tetap terganggu namun subsidi pemerintah berhasil."
      },
      {
        "key": "C",
        "text": "Masyarakat mengurangi konsumsi bahan pangan pokok."
      },
      {
        "key": "D",
        "text": "Harga kebutuhan pokok akan melonjak pada minggu berikutnya."
      },
      {
        "key": "E",
        "text": "Pemerintah mengimpor bahan pangan dari luar negeri."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Modus Tollens: Premis 1 (P -> Q), Premis 2 (~Q). Kesimpulan yang sah adalah negasi dari anteseden (~P), yaitu pasokan bahan pangan tidak terganggu.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Gunakan Modus Tollens: Jika P maka Q. Bukan Q, maka pasti Bukan P."
  },
  {
    "id": "bimbel_pu_038",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Kontraposisi & Silogisme)",
    "difficulty": "HOTS",
    "stimulus": "Setiap dosen peneliti yang mempublikasikan karya di jurnal internasional bereputasi mendapatkan hibah riset. Prof. Aris tidak mendapatkan hibah riset tahun ini.",
    "question": "Simpulan yang pasti benar adalah...",
    "options": [
      {
        "key": "A",
        "text": "Prof. Aris bukan seorang dosen peneliti di perguruan tinggi."
      },
      {
        "key": "B",
        "text": "Karya riset Prof. Aris ditolak oleh kementerian pendidikan."
      },
      {
        "key": "C",
        "text": "Semua dosen yang mempublikasikan karya tidak memerlukan dana riset."
      },
      {
        "key": "D",
        "text": "Prof. Aris tidak mempublikasikan karya di jurnal internasional bereputasi tahun ini."
      },
      {
        "key": "E",
        "text": "Prof. Aris sedang mengambil cuti akademis jangka panjang."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Penerapan hukum kontraposisi / Modus Tollens: (P -> Q) ekuivalen dengan (~Q -> ~P). Karena Prof. Aris tidak mendapat hibah (~Q), maka beliau tidak mempublikasikan karya di jurnal bereputasi (~P).",
    "quickTrick": "🌟 NF Smart Solution: Kontraposisi logika: Tidak Q berarti Tidak P."
  },
  {
    "id": "bimbel_pu_039",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Silogisme Hipotetis)",
    "difficulty": "Sedang",
    "stimulus": "Jika perusahaan menerapkan automasi kecerdasan buatan, efisiensi operasional meningkat sebesar 30%. Jika efisiensi operasional meningkat sebesar 30%, laba bersih perusahaan bertumbuh signifikan.",
    "question": "Berdasarkan kedua premis tersebut, simpulan yang sah adalah...",
    "options": [
      {
        "key": "A",
        "text": "Jika laba bersih perusahaan bertumbuh, automasi kecerdasan buatan telah diterapkan."
      },
      {
        "key": "B",
        "text": "Jika perusahaan menerapkan automasi kecerdasan buatan, maka laba bersih perusahaan bertumbuh signifikan."
      },
      {
        "key": "C",
        "text": "Semua perusahaan yang bertumbuh labanya pasti menggunakan automasi kecerdasan buatan."
      },
      {
        "key": "D",
        "text": "Perusahaan tidak perlu merekrut tenaga kerja jika menerapkan automasi AI."
      },
      {
        "key": "E",
        "text": "Automasi kecerdasan buatan merupakan satu-satunya penentu pertumbuhan laba."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Silogisme Hipotetis: (P -> Q) dan (Q -> R) menghasilkan simpulan langsung (P -> R).",
    "quickTrick": "🧠 Zenius Core Logic: Silogisme berantai: P -> Q dan Q -> R langsung hubungkan P -> R."
  },
  {
    "id": "bimbel_pu_040",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Silogisme Negatif)",
    "difficulty": "HOTS",
    "stimulus": "Tidak ada kendaraan listrik yang menghasilkan emisi gas buang karbon monoksida. Sebagian armada transportasi umum kota X adalah kendaraan listrik.",
    "question": "Simpulan yang paling tepat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Semua armada transportasi umum kota X tidak menghasilkan emisi karbon monoksida."
      },
      {
        "key": "B",
        "text": "Seluruh kendaraan di kota X telah bertransisi menjadi kendaraan listrik."
      },
      {
        "key": "C",
        "text": "Kendaraan yang menghasilkan emisi gas buang bukan merupakan transportasi umum."
      },
      {
        "key": "D",
        "text": "Hanya kota X yang berhasil mengoperasikan transportasi tanpa emisi."
      },
      {
        "key": "E",
        "text": "Sebagian armada transportasi umum kota X tidak menghasilkan emisi gas buang karbon monoksida."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Premis universal negatif (Tidak ada A yang B) digabung dengan premis partikular afirmatif (Sebagian C adalah A) menghasilkan kesimpulan: Sebagian C bukan B (Sebagian C tidak menghasilkan emisi).",
    "quickTrick": "💡 INTEN Quick Concept: Perhatikan kuantor 'sebagian': simpulan harus tetap menggunakan kuantor 'sebagian' negatif."
  },
  {
    "id": "bimbel_pu_041",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Silogisme Kategori)",
    "difficulty": "Sedang",
    "stimulus": "Semua siswa yang lolos seleksi SNBT memiliki disiplin belajar tinggi. Beberapa atlet basket di SMA Nusantara lolos seleksi SNBT.",
    "question": "Simpulan yang paling sah secara logika deduktif adalah...",
    "options": [
      {
        "key": "A",
        "text": "Semua siswa yang memiliki disiplin belajar tinggi adalah atlet basket di SMA Nusantara."
      },
      {
        "key": "B",
        "text": "Semua atlet basket di SMA Nusantara dipastikan lolos seleksi SNBT."
      },
      {
        "key": "C",
        "text": "Beberapa atlet basket di SMA Nusantara memiliki disiplin belajar tinggi."
      },
      {
        "key": "D",
        "text": "Ada siswa SMA Nusantara yang tidak disiplin tetapi lolos SNBT."
      },
      {
        "key": "E",
        "text": "Disiplin belajar tinggi hanya dimiliki oleh atlet basket SMA Nusantara."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Silogisme kategori: Premis universal (Semua A adalah B) + Premis partikular (Beberapa C adalah A) menghasilkan simpulan partikular: Beberapa C adalah B.",
    "quickTrick": "👑 Metode The King GO: Kombinasi 'Semua' + 'Beberapa' selalu menghasilkan simpulan 'Beberapa'. Eliminasi opsi yang memuat 'Semua'."
  },
  {
    "id": "bimbel_pu_042",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Modus Tollens)",
    "difficulty": "HOTS",
    "stimulus": "Jika pasokan bahan pangan terganggu, maka harga kebutuhan pokok di pasar tradisional akan melonjak. Saat ini harga kebutuhan pokok di pasar tradisional stabil dan tidak mengalami lonjakan.",
    "question": "Simpulan yang paling valid berdasarkan prinsip logika adalah...",
    "options": [
      {
        "key": "A",
        "text": "Pasokan bahan pangan tidak terganggu."
      },
      {
        "key": "B",
        "text": "Pasokan bahan pangan tetap terganggu namun subsidi pemerintah berhasil."
      },
      {
        "key": "C",
        "text": "Masyarakat mengurangi konsumsi bahan pangan pokok."
      },
      {
        "key": "D",
        "text": "Harga kebutuhan pokok akan melonjak pada minggu berikutnya."
      },
      {
        "key": "E",
        "text": "Pemerintah mengimpor bahan pangan dari luar negeri."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Modus Tollens: Premis 1 (P -> Q), Premis 2 (~Q). Kesimpulan yang sah adalah negasi dari anteseden (~P), yaitu pasokan bahan pangan tidak terganggu.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Gunakan Modus Tollens: Jika P maka Q. Bukan Q, maka pasti Bukan P."
  },
  {
    "id": "bimbel_pu_043",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Kontraposisi & Silogisme)",
    "difficulty": "Sedang",
    "stimulus": "Setiap dosen peneliti yang mempublikasikan karya di jurnal internasional bereputasi mendapatkan hibah riset. Prof. Aris tidak mendapatkan hibah riset tahun ini.",
    "question": "Simpulan yang pasti benar adalah...",
    "options": [
      {
        "key": "A",
        "text": "Prof. Aris bukan seorang dosen peneliti di perguruan tinggi."
      },
      {
        "key": "B",
        "text": "Karya riset Prof. Aris ditolak oleh kementerian pendidikan."
      },
      {
        "key": "C",
        "text": "Semua dosen yang mempublikasikan karya tidak memerlukan dana riset."
      },
      {
        "key": "D",
        "text": "Prof. Aris tidak mempublikasikan karya di jurnal internasional bereputasi tahun ini."
      },
      {
        "key": "E",
        "text": "Prof. Aris sedang mengambil cuti akademis jangka panjang."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Penerapan hukum kontraposisi / Modus Tollens: (P -> Q) ekuivalen dengan (~Q -> ~P). Karena Prof. Aris tidak mendapat hibah (~Q), maka beliau tidak mempublikasikan karya di jurnal bereputasi (~P).",
    "quickTrick": "🚀 Brain Academy Fast Trick: Kontraposisi logika: Tidak Q berarti Tidak P."
  },
  {
    "id": "bimbel_pu_044",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Silogisme Hipotetis)",
    "difficulty": "HOTS",
    "stimulus": "Jika perusahaan menerapkan automasi kecerdasan buatan, efisiensi operasional meningkat sebesar 30%. Jika efisiensi operasional meningkat sebesar 30%, laba bersih perusahaan bertumbuh signifikan.",
    "question": "Berdasarkan kedua premis tersebut, simpulan yang sah adalah...",
    "options": [
      {
        "key": "A",
        "text": "Jika laba bersih perusahaan bertumbuh, automasi kecerdasan buatan telah diterapkan."
      },
      {
        "key": "B",
        "text": "Jika perusahaan menerapkan automasi kecerdasan buatan, maka laba bersih perusahaan bertumbuh signifikan."
      },
      {
        "key": "C",
        "text": "Semua perusahaan yang bertumbuh labanya pasti menggunakan automasi kecerdasan buatan."
      },
      {
        "key": "D",
        "text": "Perusahaan tidak perlu merekrut tenaga kerja jika menerapkan automasi AI."
      },
      {
        "key": "E",
        "text": "Automasi kecerdasan buatan merupakan satu-satunya penentu pertumbuhan laba."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Silogisme Hipotetis: (P -> Q) dan (Q -> R) menghasilkan simpulan langsung (P -> R).",
    "quickTrick": "🌟 NF Smart Solution: Silogisme berantai: P -> Q dan Q -> R langsung hubungkan P -> R."
  },
  {
    "id": "bimbel_pu_045",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Silogisme Negatif)",
    "difficulty": "Sedang",
    "stimulus": "Tidak ada kendaraan listrik yang menghasilkan emisi gas buang karbon monoksida. Sebagian armada transportasi umum kota X adalah kendaraan listrik.",
    "question": "Simpulan yang paling tepat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Semua armada transportasi umum kota X tidak menghasilkan emisi karbon monoksida."
      },
      {
        "key": "B",
        "text": "Seluruh kendaraan di kota X telah bertransisi menjadi kendaraan listrik."
      },
      {
        "key": "C",
        "text": "Kendaraan yang menghasilkan emisi gas buang bukan merupakan transportasi umum."
      },
      {
        "key": "D",
        "text": "Hanya kota X yang berhasil mengoperasikan transportasi tanpa emisi."
      },
      {
        "key": "E",
        "text": "Sebagian armada transportasi umum kota X tidak menghasilkan emisi gas buang karbon monoksida."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Premis universal negatif (Tidak ada A yang B) digabung dengan premis partikular afirmatif (Sebagian C adalah A) menghasilkan kesimpulan: Sebagian C bukan B (Sebagian C tidak menghasilkan emisi).",
    "quickTrick": "🧠 Zenius Core Logic: Perhatikan kuantor 'sebagian': simpulan harus tetap menggunakan kuantor 'sebagian' negatif."
  },
  {
    "id": "bimbel_pu_046",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Silogisme Kategori)",
    "difficulty": "HOTS",
    "stimulus": "Semua siswa yang lolos seleksi SNBT memiliki disiplin belajar tinggi. Beberapa atlet basket di SMA Nusantara lolos seleksi SNBT.",
    "question": "Simpulan yang paling sah secara logika deduktif adalah...",
    "options": [
      {
        "key": "A",
        "text": "Semua siswa yang memiliki disiplin belajar tinggi adalah atlet basket di SMA Nusantara."
      },
      {
        "key": "B",
        "text": "Semua atlet basket di SMA Nusantara dipastikan lolos seleksi SNBT."
      },
      {
        "key": "C",
        "text": "Beberapa atlet basket di SMA Nusantara memiliki disiplin belajar tinggi."
      },
      {
        "key": "D",
        "text": "Ada siswa SMA Nusantara yang tidak disiplin tetapi lolos SNBT."
      },
      {
        "key": "E",
        "text": "Disiplin belajar tinggi hanya dimiliki oleh atlet basket SMA Nusantara."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Silogisme kategori: Premis universal (Semua A adalah B) + Premis partikular (Beberapa C adalah A) menghasilkan simpulan partikular: Beberapa C adalah B.",
    "quickTrick": "💡 INTEN Quick Concept: Kombinasi 'Semua' + 'Beberapa' selalu menghasilkan simpulan 'Beberapa'. Eliminasi opsi yang memuat 'Semua'."
  },
  {
    "id": "bimbel_pu_047",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Modus Tollens)",
    "difficulty": "Sedang",
    "stimulus": "Jika pasokan bahan pangan terganggu, maka harga kebutuhan pokok di pasar tradisional akan melonjak. Saat ini harga kebutuhan pokok di pasar tradisional stabil dan tidak mengalami lonjakan.",
    "question": "Simpulan yang paling valid berdasarkan prinsip logika adalah...",
    "options": [
      {
        "key": "A",
        "text": "Pasokan bahan pangan tidak terganggu."
      },
      {
        "key": "B",
        "text": "Pasokan bahan pangan tetap terganggu namun subsidi pemerintah berhasil."
      },
      {
        "key": "C",
        "text": "Masyarakat mengurangi konsumsi bahan pangan pokok."
      },
      {
        "key": "D",
        "text": "Harga kebutuhan pokok akan melonjak pada minggu berikutnya."
      },
      {
        "key": "E",
        "text": "Pemerintah mengimpor bahan pangan dari luar negeri."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Modus Tollens: Premis 1 (P -> Q), Premis 2 (~Q). Kesimpulan yang sah adalah negasi dari anteseden (~P), yaitu pasokan bahan pangan tidak terganggu.",
    "quickTrick": "👑 Metode The King GO: Gunakan Modus Tollens: Jika P maka Q. Bukan Q, maka pasti Bukan P."
  },
  {
    "id": "bimbel_pu_048",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Kontraposisi & Silogisme)",
    "difficulty": "HOTS",
    "stimulus": "Setiap dosen peneliti yang mempublikasikan karya di jurnal internasional bereputasi mendapatkan hibah riset. Prof. Aris tidak mendapatkan hibah riset tahun ini.",
    "question": "Simpulan yang pasti benar adalah...",
    "options": [
      {
        "key": "A",
        "text": "Prof. Aris bukan seorang dosen peneliti di perguruan tinggi."
      },
      {
        "key": "B",
        "text": "Karya riset Prof. Aris ditolak oleh kementerian pendidikan."
      },
      {
        "key": "C",
        "text": "Semua dosen yang mempublikasikan karya tidak memerlukan dana riset."
      },
      {
        "key": "D",
        "text": "Prof. Aris tidak mempublikasikan karya di jurnal internasional bereputasi tahun ini."
      },
      {
        "key": "E",
        "text": "Prof. Aris sedang mengambil cuti akademis jangka panjang."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Penerapan hukum kontraposisi / Modus Tollens: (P -> Q) ekuivalen dengan (~Q -> ~P). Karena Prof. Aris tidak mendapat hibah (~Q), maka beliau tidak mempublikasikan karya di jurnal bereputasi (~P).",
    "quickTrick": "⚡ Langkah Taktis Neutron: Kontraposisi logika: Tidak Q berarti Tidak P."
  },
  {
    "id": "bimbel_pu_049",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Silogisme Hipotetis)",
    "difficulty": "Sedang",
    "stimulus": "Jika perusahaan menerapkan automasi kecerdasan buatan, efisiensi operasional meningkat sebesar 30%. Jika efisiensi operasional meningkat sebesar 30%, laba bersih perusahaan bertumbuh signifikan.",
    "question": "Berdasarkan kedua premis tersebut, simpulan yang sah adalah...",
    "options": [
      {
        "key": "A",
        "text": "Jika laba bersih perusahaan bertumbuh, automasi kecerdasan buatan telah diterapkan."
      },
      {
        "key": "B",
        "text": "Jika perusahaan menerapkan automasi kecerdasan buatan, maka laba bersih perusahaan bertumbuh signifikan."
      },
      {
        "key": "C",
        "text": "Semua perusahaan yang bertumbuh labanya pasti menggunakan automasi kecerdasan buatan."
      },
      {
        "key": "D",
        "text": "Perusahaan tidak perlu merekrut tenaga kerja jika menerapkan automasi AI."
      },
      {
        "key": "E",
        "text": "Automasi kecerdasan buatan merupakan satu-satunya penentu pertumbuhan laba."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Silogisme Hipotetis: (P -> Q) dan (Q -> R) menghasilkan simpulan langsung (P -> R).",
    "quickTrick": "🚀 Brain Academy Fast Trick: Silogisme berantai: P -> Q dan Q -> R langsung hubungkan P -> R."
  },
  {
    "id": "bimbel_pu_050",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Silogisme Negatif)",
    "difficulty": "HOTS",
    "stimulus": "Tidak ada kendaraan listrik yang menghasilkan emisi gas buang karbon monoksida. Sebagian armada transportasi umum kota X adalah kendaraan listrik.",
    "question": "Simpulan yang paling tepat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Semua armada transportasi umum kota X tidak menghasilkan emisi karbon monoksida."
      },
      {
        "key": "B",
        "text": "Seluruh kendaraan di kota X telah bertransisi menjadi kendaraan listrik."
      },
      {
        "key": "C",
        "text": "Kendaraan yang menghasilkan emisi gas buang bukan merupakan transportasi umum."
      },
      {
        "key": "D",
        "text": "Hanya kota X yang berhasil mengoperasikan transportasi tanpa emisi."
      },
      {
        "key": "E",
        "text": "Sebagian armada transportasi umum kota X tidak menghasilkan emisi gas buang karbon monoksida."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Premis universal negatif (Tidak ada A yang B) digabung dengan premis partikular afirmatif (Sebagian C adalah A) menghasilkan kesimpulan: Sebagian C bukan B (Sebagian C tidak menghasilkan emisi).",
    "quickTrick": "🌟 NF Smart Solution: Perhatikan kuantor 'sebagian': simpulan harus tetap menggunakan kuantor 'sebagian' negatif."
  },
  {
    "id": "bimbel_pu_051",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Silogisme Kategori)",
    "difficulty": "Sedang",
    "stimulus": "Semua siswa yang lolos seleksi SNBT memiliki disiplin belajar tinggi. Beberapa atlet basket di SMA Nusantara lolos seleksi SNBT.",
    "question": "Simpulan yang paling sah secara logika deduktif adalah...",
    "options": [
      {
        "key": "A",
        "text": "Semua siswa yang memiliki disiplin belajar tinggi adalah atlet basket di SMA Nusantara."
      },
      {
        "key": "B",
        "text": "Semua atlet basket di SMA Nusantara dipastikan lolos seleksi SNBT."
      },
      {
        "key": "C",
        "text": "Beberapa atlet basket di SMA Nusantara memiliki disiplin belajar tinggi."
      },
      {
        "key": "D",
        "text": "Ada siswa SMA Nusantara yang tidak disiplin tetapi lolos SNBT."
      },
      {
        "key": "E",
        "text": "Disiplin belajar tinggi hanya dimiliki oleh atlet basket SMA Nusantara."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Silogisme kategori: Premis universal (Semua A adalah B) + Premis partikular (Beberapa C adalah A) menghasilkan simpulan partikular: Beberapa C adalah B.",
    "quickTrick": "🧠 Zenius Core Logic: Kombinasi 'Semua' + 'Beberapa' selalu menghasilkan simpulan 'Beberapa'. Eliminasi opsi yang memuat 'Semua'."
  },
  {
    "id": "bimbel_pu_052",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Modus Tollens)",
    "difficulty": "HOTS",
    "stimulus": "Jika pasokan bahan pangan terganggu, maka harga kebutuhan pokok di pasar tradisional akan melonjak. Saat ini harga kebutuhan pokok di pasar tradisional stabil dan tidak mengalami lonjakan.",
    "question": "Simpulan yang paling valid berdasarkan prinsip logika adalah...",
    "options": [
      {
        "key": "A",
        "text": "Pasokan bahan pangan tidak terganggu."
      },
      {
        "key": "B",
        "text": "Pasokan bahan pangan tetap terganggu namun subsidi pemerintah berhasil."
      },
      {
        "key": "C",
        "text": "Masyarakat mengurangi konsumsi bahan pangan pokok."
      },
      {
        "key": "D",
        "text": "Harga kebutuhan pokok akan melonjak pada minggu berikutnya."
      },
      {
        "key": "E",
        "text": "Pemerintah mengimpor bahan pangan dari luar negeri."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Modus Tollens: Premis 1 (P -> Q), Premis 2 (~Q). Kesimpulan yang sah adalah negasi dari anteseden (~P), yaitu pasokan bahan pangan tidak terganggu.",
    "quickTrick": "💡 INTEN Quick Concept: Gunakan Modus Tollens: Jika P maka Q. Bukan Q, maka pasti Bukan P."
  },
  {
    "id": "bimbel_pu_053",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Kontraposisi & Silogisme)",
    "difficulty": "Sedang",
    "stimulus": "Setiap dosen peneliti yang mempublikasikan karya di jurnal internasional bereputasi mendapatkan hibah riset. Prof. Aris tidak mendapatkan hibah riset tahun ini.",
    "question": "Simpulan yang pasti benar adalah...",
    "options": [
      {
        "key": "A",
        "text": "Prof. Aris bukan seorang dosen peneliti di perguruan tinggi."
      },
      {
        "key": "B",
        "text": "Karya riset Prof. Aris ditolak oleh kementerian pendidikan."
      },
      {
        "key": "C",
        "text": "Semua dosen yang mempublikasikan karya tidak memerlukan dana riset."
      },
      {
        "key": "D",
        "text": "Prof. Aris tidak mempublikasikan karya di jurnal internasional bereputasi tahun ini."
      },
      {
        "key": "E",
        "text": "Prof. Aris sedang mengambil cuti akademis jangka panjang."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Penerapan hukum kontraposisi / Modus Tollens: (P -> Q) ekuivalen dengan (~Q -> ~P). Karena Prof. Aris tidak mendapat hibah (~Q), maka beliau tidak mempublikasikan karya di jurnal bereputasi (~P).",
    "quickTrick": "👑 Metode The King GO: Kontraposisi logika: Tidak Q berarti Tidak P."
  },
  {
    "id": "bimbel_pu_054",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Silogisme Hipotetis)",
    "difficulty": "HOTS",
    "stimulus": "Jika perusahaan menerapkan automasi kecerdasan buatan, efisiensi operasional meningkat sebesar 30%. Jika efisiensi operasional meningkat sebesar 30%, laba bersih perusahaan bertumbuh signifikan.",
    "question": "Berdasarkan kedua premis tersebut, simpulan yang sah adalah...",
    "options": [
      {
        "key": "A",
        "text": "Jika laba bersih perusahaan bertumbuh, automasi kecerdasan buatan telah diterapkan."
      },
      {
        "key": "B",
        "text": "Jika perusahaan menerapkan automasi kecerdasan buatan, maka laba bersih perusahaan bertumbuh signifikan."
      },
      {
        "key": "C",
        "text": "Semua perusahaan yang bertumbuh labanya pasti menggunakan automasi kecerdasan buatan."
      },
      {
        "key": "D",
        "text": "Perusahaan tidak perlu merekrut tenaga kerja jika menerapkan automasi AI."
      },
      {
        "key": "E",
        "text": "Automasi kecerdasan buatan merupakan satu-satunya penentu pertumbuhan laba."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Silogisme Hipotetis: (P -> Q) dan (Q -> R) menghasilkan simpulan langsung (P -> R).",
    "quickTrick": "⚡ Langkah Taktis Neutron: Silogisme berantai: P -> Q dan Q -> R langsung hubungkan P -> R."
  },
  {
    "id": "bimbel_pu_055",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Silogisme Negatif)",
    "difficulty": "Sedang",
    "stimulus": "Tidak ada kendaraan listrik yang menghasilkan emisi gas buang karbon monoksida. Sebagian armada transportasi umum kota X adalah kendaraan listrik.",
    "question": "Simpulan yang paling tepat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Semua armada transportasi umum kota X tidak menghasilkan emisi karbon monoksida."
      },
      {
        "key": "B",
        "text": "Seluruh kendaraan di kota X telah bertransisi menjadi kendaraan listrik."
      },
      {
        "key": "C",
        "text": "Kendaraan yang menghasilkan emisi gas buang bukan merupakan transportasi umum."
      },
      {
        "key": "D",
        "text": "Hanya kota X yang berhasil mengoperasikan transportasi tanpa emisi."
      },
      {
        "key": "E",
        "text": "Sebagian armada transportasi umum kota X tidak menghasilkan emisi gas buang karbon monoksida."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Premis universal negatif (Tidak ada A yang B) digabung dengan premis partikular afirmatif (Sebagian C adalah A) menghasilkan kesimpulan: Sebagian C bukan B (Sebagian C tidak menghasilkan emisi).",
    "quickTrick": "🚀 Brain Academy Fast Trick: Perhatikan kuantor 'sebagian': simpulan harus tetap menggunakan kuantor 'sebagian' negatif."
  },
  {
    "id": "bimbel_pu_056",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Silogisme Kategori)",
    "difficulty": "HOTS",
    "stimulus": "Semua siswa yang lolos seleksi SNBT memiliki disiplin belajar tinggi. Beberapa atlet basket di SMA Nusantara lolos seleksi SNBT.",
    "question": "Simpulan yang paling sah secara logika deduktif adalah...",
    "options": [
      {
        "key": "A",
        "text": "Semua siswa yang memiliki disiplin belajar tinggi adalah atlet basket di SMA Nusantara."
      },
      {
        "key": "B",
        "text": "Semua atlet basket di SMA Nusantara dipastikan lolos seleksi SNBT."
      },
      {
        "key": "C",
        "text": "Beberapa atlet basket di SMA Nusantara memiliki disiplin belajar tinggi."
      },
      {
        "key": "D",
        "text": "Ada siswa SMA Nusantara yang tidak disiplin tetapi lolos SNBT."
      },
      {
        "key": "E",
        "text": "Disiplin belajar tinggi hanya dimiliki oleh atlet basket SMA Nusantara."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Silogisme kategori: Premis universal (Semua A adalah B) + Premis partikular (Beberapa C adalah A) menghasilkan simpulan partikular: Beberapa C adalah B.",
    "quickTrick": "🌟 NF Smart Solution: Kombinasi 'Semua' + 'Beberapa' selalu menghasilkan simpulan 'Beberapa'. Eliminasi opsi yang memuat 'Semua'."
  },
  {
    "id": "bimbel_pu_057",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Modus Tollens)",
    "difficulty": "Sedang",
    "stimulus": "Jika pasokan bahan pangan terganggu, maka harga kebutuhan pokok di pasar tradisional akan melonjak. Saat ini harga kebutuhan pokok di pasar tradisional stabil dan tidak mengalami lonjakan.",
    "question": "Simpulan yang paling valid berdasarkan prinsip logika adalah...",
    "options": [
      {
        "key": "A",
        "text": "Pasokan bahan pangan tidak terganggu."
      },
      {
        "key": "B",
        "text": "Pasokan bahan pangan tetap terganggu namun subsidi pemerintah berhasil."
      },
      {
        "key": "C",
        "text": "Masyarakat mengurangi konsumsi bahan pangan pokok."
      },
      {
        "key": "D",
        "text": "Harga kebutuhan pokok akan melonjak pada minggu berikutnya."
      },
      {
        "key": "E",
        "text": "Pemerintah mengimpor bahan pangan dari luar negeri."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Modus Tollens: Premis 1 (P -> Q), Premis 2 (~Q). Kesimpulan yang sah adalah negasi dari anteseden (~P), yaitu pasokan bahan pangan tidak terganggu.",
    "quickTrick": "🧠 Zenius Core Logic: Gunakan Modus Tollens: Jika P maka Q. Bukan Q, maka pasti Bukan P."
  },
  {
    "id": "bimbel_pu_058",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Kontraposisi & Silogisme)",
    "difficulty": "HOTS",
    "stimulus": "Setiap dosen peneliti yang mempublikasikan karya di jurnal internasional bereputasi mendapatkan hibah riset. Prof. Aris tidak mendapatkan hibah riset tahun ini.",
    "question": "Simpulan yang pasti benar adalah...",
    "options": [
      {
        "key": "A",
        "text": "Prof. Aris bukan seorang dosen peneliti di perguruan tinggi."
      },
      {
        "key": "B",
        "text": "Karya riset Prof. Aris ditolak oleh kementerian pendidikan."
      },
      {
        "key": "C",
        "text": "Semua dosen yang mempublikasikan karya tidak memerlukan dana riset."
      },
      {
        "key": "D",
        "text": "Prof. Aris tidak mempublikasikan karya di jurnal internasional bereputasi tahun ini."
      },
      {
        "key": "E",
        "text": "Prof. Aris sedang mengambil cuti akademis jangka panjang."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Penerapan hukum kontraposisi / Modus Tollens: (P -> Q) ekuivalen dengan (~Q -> ~P). Karena Prof. Aris tidak mendapat hibah (~Q), maka beliau tidak mempublikasikan karya di jurnal bereputasi (~P).",
    "quickTrick": "💡 INTEN Quick Concept: Kontraposisi logika: Tidak Q berarti Tidak P."
  },
  {
    "id": "bimbel_pu_059",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Silogisme Hipotetis)",
    "difficulty": "Sedang",
    "stimulus": "Jika perusahaan menerapkan automasi kecerdasan buatan, efisiensi operasional meningkat sebesar 30%. Jika efisiensi operasional meningkat sebesar 30%, laba bersih perusahaan bertumbuh signifikan.",
    "question": "Berdasarkan kedua premis tersebut, simpulan yang sah adalah...",
    "options": [
      {
        "key": "A",
        "text": "Jika laba bersih perusahaan bertumbuh, automasi kecerdasan buatan telah diterapkan."
      },
      {
        "key": "B",
        "text": "Jika perusahaan menerapkan automasi kecerdasan buatan, maka laba bersih perusahaan bertumbuh signifikan."
      },
      {
        "key": "C",
        "text": "Semua perusahaan yang bertumbuh labanya pasti menggunakan automasi kecerdasan buatan."
      },
      {
        "key": "D",
        "text": "Perusahaan tidak perlu merekrut tenaga kerja jika menerapkan automasi AI."
      },
      {
        "key": "E",
        "text": "Automasi kecerdasan buatan merupakan satu-satunya penentu pertumbuhan laba."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Silogisme Hipotetis: (P -> Q) dan (Q -> R) menghasilkan simpulan langsung (P -> R).",
    "quickTrick": "👑 Metode The King GO: Silogisme berantai: P -> Q dan Q -> R langsung hubungkan P -> R."
  },
  {
    "id": "bimbel_pu_060",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Silogisme Negatif)",
    "difficulty": "HOTS",
    "stimulus": "Tidak ada kendaraan listrik yang menghasilkan emisi gas buang karbon monoksida. Sebagian armada transportasi umum kota X adalah kendaraan listrik.",
    "question": "Simpulan yang paling tepat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Semua armada transportasi umum kota X tidak menghasilkan emisi karbon monoksida."
      },
      {
        "key": "B",
        "text": "Seluruh kendaraan di kota X telah bertransisi menjadi kendaraan listrik."
      },
      {
        "key": "C",
        "text": "Kendaraan yang menghasilkan emisi gas buang bukan merupakan transportasi umum."
      },
      {
        "key": "D",
        "text": "Hanya kota X yang berhasil mengoperasikan transportasi tanpa emisi."
      },
      {
        "key": "E",
        "text": "Sebagian armada transportasi umum kota X tidak menghasilkan emisi gas buang karbon monoksida."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Premis universal negatif (Tidak ada A yang B) digabung dengan premis partikular afirmatif (Sebagian C adalah A) menghasilkan kesimpulan: Sebagian C bukan B (Sebagian C tidak menghasilkan emisi).",
    "quickTrick": "⚡ Langkah Taktis Neutron: Perhatikan kuantor 'sebagian': simpulan harus tetap menggunakan kuantor 'sebagian' negatif."
  },
  {
    "id": "bimbel_pu_061",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Silogisme Kategori)",
    "difficulty": "Sedang",
    "stimulus": "Semua siswa yang lolos seleksi SNBT memiliki disiplin belajar tinggi. Beberapa atlet basket di SMA Nusantara lolos seleksi SNBT.",
    "question": "Simpulan yang paling sah secara logika deduktif adalah...",
    "options": [
      {
        "key": "A",
        "text": "Semua siswa yang memiliki disiplin belajar tinggi adalah atlet basket di SMA Nusantara."
      },
      {
        "key": "B",
        "text": "Semua atlet basket di SMA Nusantara dipastikan lolos seleksi SNBT."
      },
      {
        "key": "C",
        "text": "Beberapa atlet basket di SMA Nusantara memiliki disiplin belajar tinggi."
      },
      {
        "key": "D",
        "text": "Ada siswa SMA Nusantara yang tidak disiplin tetapi lolos SNBT."
      },
      {
        "key": "E",
        "text": "Disiplin belajar tinggi hanya dimiliki oleh atlet basket SMA Nusantara."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Silogisme kategori: Premis universal (Semua A adalah B) + Premis partikular (Beberapa C adalah A) menghasilkan simpulan partikular: Beberapa C adalah B.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Kombinasi 'Semua' + 'Beberapa' selalu menghasilkan simpulan 'Beberapa'. Eliminasi opsi yang memuat 'Semua'."
  },
  {
    "id": "bimbel_pu_062",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Modus Tollens)",
    "difficulty": "HOTS",
    "stimulus": "Jika pasokan bahan pangan terganggu, maka harga kebutuhan pokok di pasar tradisional akan melonjak. Saat ini harga kebutuhan pokok di pasar tradisional stabil dan tidak mengalami lonjakan.",
    "question": "Simpulan yang paling valid berdasarkan prinsip logika adalah...",
    "options": [
      {
        "key": "A",
        "text": "Pasokan bahan pangan tidak terganggu."
      },
      {
        "key": "B",
        "text": "Pasokan bahan pangan tetap terganggu namun subsidi pemerintah berhasil."
      },
      {
        "key": "C",
        "text": "Masyarakat mengurangi konsumsi bahan pangan pokok."
      },
      {
        "key": "D",
        "text": "Harga kebutuhan pokok akan melonjak pada minggu berikutnya."
      },
      {
        "key": "E",
        "text": "Pemerintah mengimpor bahan pangan dari luar negeri."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Modus Tollens: Premis 1 (P -> Q), Premis 2 (~Q). Kesimpulan yang sah adalah negasi dari anteseden (~P), yaitu pasokan bahan pangan tidak terganggu.",
    "quickTrick": "🌟 NF Smart Solution: Gunakan Modus Tollens: Jika P maka Q. Bukan Q, maka pasti Bukan P."
  },
  {
    "id": "bimbel_pu_063",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Kontraposisi & Silogisme)",
    "difficulty": "Sedang",
    "stimulus": "Setiap dosen peneliti yang mempublikasikan karya di jurnal internasional bereputasi mendapatkan hibah riset. Prof. Aris tidak mendapatkan hibah riset tahun ini.",
    "question": "Simpulan yang pasti benar adalah...",
    "options": [
      {
        "key": "A",
        "text": "Prof. Aris bukan seorang dosen peneliti di perguruan tinggi."
      },
      {
        "key": "B",
        "text": "Karya riset Prof. Aris ditolak oleh kementerian pendidikan."
      },
      {
        "key": "C",
        "text": "Semua dosen yang mempublikasikan karya tidak memerlukan dana riset."
      },
      {
        "key": "D",
        "text": "Prof. Aris tidak mempublikasikan karya di jurnal internasional bereputasi tahun ini."
      },
      {
        "key": "E",
        "text": "Prof. Aris sedang mengambil cuti akademis jangka panjang."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Penerapan hukum kontraposisi / Modus Tollens: (P -> Q) ekuivalen dengan (~Q -> ~P). Karena Prof. Aris tidak mendapat hibah (~Q), maka beliau tidak mempublikasikan karya di jurnal bereputasi (~P).",
    "quickTrick": "🧠 Zenius Core Logic: Kontraposisi logika: Tidak Q berarti Tidak P."
  },
  {
    "id": "bimbel_pu_064",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Silogisme Hipotetis)",
    "difficulty": "HOTS",
    "stimulus": "Jika perusahaan menerapkan automasi kecerdasan buatan, efisiensi operasional meningkat sebesar 30%. Jika efisiensi operasional meningkat sebesar 30%, laba bersih perusahaan bertumbuh signifikan.",
    "question": "Berdasarkan kedua premis tersebut, simpulan yang sah adalah...",
    "options": [
      {
        "key": "A",
        "text": "Jika laba bersih perusahaan bertumbuh, automasi kecerdasan buatan telah diterapkan."
      },
      {
        "key": "B",
        "text": "Jika perusahaan menerapkan automasi kecerdasan buatan, maka laba bersih perusahaan bertumbuh signifikan."
      },
      {
        "key": "C",
        "text": "Semua perusahaan yang bertumbuh labanya pasti menggunakan automasi kecerdasan buatan."
      },
      {
        "key": "D",
        "text": "Perusahaan tidak perlu merekrut tenaga kerja jika menerapkan automasi AI."
      },
      {
        "key": "E",
        "text": "Automasi kecerdasan buatan merupakan satu-satunya penentu pertumbuhan laba."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Silogisme Hipotetis: (P -> Q) dan (Q -> R) menghasilkan simpulan langsung (P -> R).",
    "quickTrick": "💡 INTEN Quick Concept: Silogisme berantai: P -> Q dan Q -> R langsung hubungkan P -> R."
  },
  {
    "id": "bimbel_pu_065",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Silogisme Negatif)",
    "difficulty": "Sedang",
    "stimulus": "Tidak ada kendaraan listrik yang menghasilkan emisi gas buang karbon monoksida. Sebagian armada transportasi umum kota X adalah kendaraan listrik.",
    "question": "Simpulan yang paling tepat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Semua armada transportasi umum kota X tidak menghasilkan emisi karbon monoksida."
      },
      {
        "key": "B",
        "text": "Seluruh kendaraan di kota X telah bertransisi menjadi kendaraan listrik."
      },
      {
        "key": "C",
        "text": "Kendaraan yang menghasilkan emisi gas buang bukan merupakan transportasi umum."
      },
      {
        "key": "D",
        "text": "Hanya kota X yang berhasil mengoperasikan transportasi tanpa emisi."
      },
      {
        "key": "E",
        "text": "Sebagian armada transportasi umum kota X tidak menghasilkan emisi gas buang karbon monoksida."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Premis universal negatif (Tidak ada A yang B) digabung dengan premis partikular afirmatif (Sebagian C adalah A) menghasilkan kesimpulan: Sebagian C bukan B (Sebagian C tidak menghasilkan emisi).",
    "quickTrick": "👑 Metode The King GO: Perhatikan kuantor 'sebagian': simpulan harus tetap menggunakan kuantor 'sebagian' negatif."
  },
  {
    "id": "bimbel_pu_066",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Silogisme Kategori)",
    "difficulty": "HOTS",
    "stimulus": "Semua siswa yang lolos seleksi SNBT memiliki disiplin belajar tinggi. Beberapa atlet basket di SMA Nusantara lolos seleksi SNBT.",
    "question": "Simpulan yang paling sah secara logika deduktif adalah...",
    "options": [
      {
        "key": "A",
        "text": "Semua siswa yang memiliki disiplin belajar tinggi adalah atlet basket di SMA Nusantara."
      },
      {
        "key": "B",
        "text": "Semua atlet basket di SMA Nusantara dipastikan lolos seleksi SNBT."
      },
      {
        "key": "C",
        "text": "Beberapa atlet basket di SMA Nusantara memiliki disiplin belajar tinggi."
      },
      {
        "key": "D",
        "text": "Ada siswa SMA Nusantara yang tidak disiplin tetapi lolos SNBT."
      },
      {
        "key": "E",
        "text": "Disiplin belajar tinggi hanya dimiliki oleh atlet basket SMA Nusantara."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Silogisme kategori: Premis universal (Semua A adalah B) + Premis partikular (Beberapa C adalah A) menghasilkan simpulan partikular: Beberapa C adalah B.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Kombinasi 'Semua' + 'Beberapa' selalu menghasilkan simpulan 'Beberapa'. Eliminasi opsi yang memuat 'Semua'."
  },
  {
    "id": "bimbel_pu_067",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Modus Tollens)",
    "difficulty": "Sedang",
    "stimulus": "Jika pasokan bahan pangan terganggu, maka harga kebutuhan pokok di pasar tradisional akan melonjak. Saat ini harga kebutuhan pokok di pasar tradisional stabil dan tidak mengalami lonjakan.",
    "question": "Simpulan yang paling valid berdasarkan prinsip logika adalah...",
    "options": [
      {
        "key": "A",
        "text": "Pasokan bahan pangan tidak terganggu."
      },
      {
        "key": "B",
        "text": "Pasokan bahan pangan tetap terganggu namun subsidi pemerintah berhasil."
      },
      {
        "key": "C",
        "text": "Masyarakat mengurangi konsumsi bahan pangan pokok."
      },
      {
        "key": "D",
        "text": "Harga kebutuhan pokok akan melonjak pada minggu berikutnya."
      },
      {
        "key": "E",
        "text": "Pemerintah mengimpor bahan pangan dari luar negeri."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Modus Tollens: Premis 1 (P -> Q), Premis 2 (~Q). Kesimpulan yang sah adalah negasi dari anteseden (~P), yaitu pasokan bahan pangan tidak terganggu.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Gunakan Modus Tollens: Jika P maka Q. Bukan Q, maka pasti Bukan P."
  },
  {
    "id": "bimbel_pu_068",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Kontraposisi & Silogisme)",
    "difficulty": "HOTS",
    "stimulus": "Setiap dosen peneliti yang mempublikasikan karya di jurnal internasional bereputasi mendapatkan hibah riset. Prof. Aris tidak mendapatkan hibah riset tahun ini.",
    "question": "Simpulan yang pasti benar adalah...",
    "options": [
      {
        "key": "A",
        "text": "Prof. Aris bukan seorang dosen peneliti di perguruan tinggi."
      },
      {
        "key": "B",
        "text": "Karya riset Prof. Aris ditolak oleh kementerian pendidikan."
      },
      {
        "key": "C",
        "text": "Semua dosen yang mempublikasikan karya tidak memerlukan dana riset."
      },
      {
        "key": "D",
        "text": "Prof. Aris tidak mempublikasikan karya di jurnal internasional bereputasi tahun ini."
      },
      {
        "key": "E",
        "text": "Prof. Aris sedang mengambil cuti akademis jangka panjang."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Penerapan hukum kontraposisi / Modus Tollens: (P -> Q) ekuivalen dengan (~Q -> ~P). Karena Prof. Aris tidak mendapat hibah (~Q), maka beliau tidak mempublikasikan karya di jurnal bereputasi (~P).",
    "quickTrick": "🌟 NF Smart Solution: Kontraposisi logika: Tidak Q berarti Tidak P."
  },
  {
    "id": "bimbel_pu_069",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Silogisme Hipotetis)",
    "difficulty": "Sedang",
    "stimulus": "Jika perusahaan menerapkan automasi kecerdasan buatan, efisiensi operasional meningkat sebesar 30%. Jika efisiensi operasional meningkat sebesar 30%, laba bersih perusahaan bertumbuh signifikan.",
    "question": "Berdasarkan kedua premis tersebut, simpulan yang sah adalah...",
    "options": [
      {
        "key": "A",
        "text": "Jika laba bersih perusahaan bertumbuh, automasi kecerdasan buatan telah diterapkan."
      },
      {
        "key": "B",
        "text": "Jika perusahaan menerapkan automasi kecerdasan buatan, maka laba bersih perusahaan bertumbuh signifikan."
      },
      {
        "key": "C",
        "text": "Semua perusahaan yang bertumbuh labanya pasti menggunakan automasi kecerdasan buatan."
      },
      {
        "key": "D",
        "text": "Perusahaan tidak perlu merekrut tenaga kerja jika menerapkan automasi AI."
      },
      {
        "key": "E",
        "text": "Automasi kecerdasan buatan merupakan satu-satunya penentu pertumbuhan laba."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Silogisme Hipotetis: (P -> Q) dan (Q -> R) menghasilkan simpulan langsung (P -> R).",
    "quickTrick": "🧠 Zenius Core Logic: Silogisme berantai: P -> Q dan Q -> R langsung hubungkan P -> R."
  },
  {
    "id": "bimbel_pu_070",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Deduktif (Silogisme Negatif)",
    "difficulty": "HOTS",
    "stimulus": "Tidak ada kendaraan listrik yang menghasilkan emisi gas buang karbon monoksida. Sebagian armada transportasi umum kota X adalah kendaraan listrik.",
    "question": "Simpulan yang paling tepat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Semua armada transportasi umum kota X tidak menghasilkan emisi karbon monoksida."
      },
      {
        "key": "B",
        "text": "Seluruh kendaraan di kota X telah bertransisi menjadi kendaraan listrik."
      },
      {
        "key": "C",
        "text": "Kendaraan yang menghasilkan emisi gas buang bukan merupakan transportasi umum."
      },
      {
        "key": "D",
        "text": "Hanya kota X yang berhasil mengoperasikan transportasi tanpa emisi."
      },
      {
        "key": "E",
        "text": "Sebagian armada transportasi umum kota X tidak menghasilkan emisi gas buang karbon monoksida."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Premis universal negatif (Tidak ada A yang B) digabung dengan premis partikular afirmatif (Sebagian C adalah A) menghasilkan kesimpulan: Sebagian C bukan B (Sebagian C tidak menghasilkan emisi).",
    "quickTrick": "💡 INTEN Quick Concept: Perhatikan kuantor 'sebagian': simpulan harus tetap menggunakan kuantor 'sebagian' negatif."
  },
  {
    "id": "bimbel_pu_071",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Analitik (Posisi Melingkar)",
    "difficulty": "HOTS",
    "stimulus": "Enam mahasiswa (Andi, Budi, Citra, Dodi, Eka, dan Fani) sedang duduk mengelilingi meja bundar untuk berdiskusi. Ketentuannya adalah: (1) Andi duduk tepat berhadapan dengan Citra; (2) Budi duduk di sebelah kanan Andi; (3) Dodi tidak duduk bersebelahan dengan Citra maupun Andi; (4) Eka duduk tepat di antara Citra dan Dodi.",
    "question": "Siapakah yang duduk tepat di sebelah kiri Andi?",
    "options": [
      {
        "key": "A",
        "text": "Budi"
      },
      {
        "key": "B",
        "text": "Citra"
      },
      {
        "key": "C",
        "text": "Dodi"
      },
      {
        "key": "D",
        "text": "Fani"
      },
      {
        "key": "E",
        "text": "Eka"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Analisis posisi melingkar 6 kursi: Posisi 1 = Andi. Menghadap Posisi 4 = Citra. Sebelah kanan Andi (Posisi 2) = Budi. Eka di antara Citra dan Dodi -> Eka di Posisi 5, Dodi di Posisi 6. Maka kursi tersisa di sebelah kiri Andi (Posisi 6 berlawanan jarum jam atau Posisi 3) ditempati oleh Fani.",
    "quickTrick": "🌟 NF Smart Solution: Gambarkan diagram lingkaran dengan 6 titik berhadapan, lalu tempatkan orang yang posisinya mutlak terlebih dahulu."
  },
  {
    "id": "bimbel_pu_072",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Analitik (Urutan Peringkat)",
    "difficulty": "HOTS",
    "stimulus": "Lima tim robotika (Alpha, Beta, Gamma, Delta, Omega) mengikuti kompetisi nasional. Skor Alpha lebih tinggi daripada Beta. Skor Gamma lebih rendah daripada Delta, namun lebih tinggi daripada Alpha. Skor Omega adalah yang paling rendah di antara semua tim.",
    "question": "Tim manakah yang menempati peringkat kedua tertinggi dalam kompetisi tersebut?",
    "options": [
      {
        "key": "A",
        "text": "Delta"
      },
      {
        "key": "B",
        "text": "Alpha"
      },
      {
        "key": "C",
        "text": "Gamma"
      },
      {
        "key": "D",
        "text": "Beta"
      },
      {
        "key": "E",
        "text": "Omega"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Urutan skor dari yang tertinggi: Delta > Gamma > Alpha > Beta > Omega. Peringkat 1 = Delta, Peringkat 2 = Gamma, Peringkat 3 = Alpha, Peringkat 4 = Beta, Peringkat 5 = Omega. Maka peringkat kedua adalah Gamma.",
    "quickTrick": "🧠 Zenius Core Logic: Susun rantai ketidaksamaan: Delta > Gamma > Alpha > Beta > Omega. Langsung lihat urutan kedua."
  },
  {
    "id": "bimbel_pu_073",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Kritis (Pelemahan Argumen)",
    "difficulty": "HOTS",
    "stimulus": "Sebuah riset agroindustri menyatakan bahwa pemberian pupuk hayati mikoriza pada bibit kelapa sawit meningkatkan penyerapan fosfor sebesar 45% dan menurunkan tingkat mortalitas bibit akibat stres kekeringan hingga 30%. Namun, perkebunan rakyat di wilayah dataran rendah masih jarang mengadopsinya karena keterbatasan distributor resmi bibit bermikoriza.",
    "question": "Pernyataan yang PALING MELEMAHKAN argumen bahwa bibit bermikoriza efektif meningkatkan ketahanan perkebunan sawit rakyat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Harga bibit bermikoriza sedikit lebih mahal dibandingkan bibit konvensional non-sertifikasi."
      },
      {
        "key": "B",
        "text": "Bibit kelapa sawit bermikoriza membutuhkan suplai air tanah berkadar asam netral yang tidak dijumpai pada lahan gambut perkebunan rakyat."
      },
      {
        "key": "C",
        "text": "Petani sawit rakyat belum mendapatkan penyuluhan mengenai manfaat pupuk hayati."
      },
      {
        "key": "D",
        "text": "Sebagian perkebunan besar telah berhasil memproduksi mikoriza mandiri di laboratorium."
      },
      {
        "key": "E",
        "text": "Fosfor merupakan unsur hara makro sekunder yang sangat esensial bagi pertumbuhan vegetatif tanaman."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Pelemahan argumen (weaken the argument): Opsi yang menunjukkan bahwa efektivitas mikoriza gugur atau tidak berfungsi dalam kondisi riil lahan perkebunan rakyat (kondisi tanah asam lahan gambut membatalkan manfaat mikoriza).",
    "quickTrick": "💡 INTEN Quick Concept: Cari fakta kontradiktif yang meruntuhkan asumsi dasar keberhasilan inovasi tersebut."
  },
  {
    "id": "bimbel_pu_074",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Sebab-Akibat (Analisis Data Makro)",
    "difficulty": "HOTS",
    "stimulus": "Data BPS menunjukkan bahwa konsumsi listrik sektor industri padat karya melonjak 12% pada kuartal II, sementara indeks keyakinan konsumen terhadap kondisi ekonomi mencapai rekor tertinggi dalam 3 tahun terakhir.",
    "question": "Berdasarkan data tersebut, simpulan yang PALING MUNGKIN BENAR mengenai aktivitas ekonomi adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kapasitas produksi pabrik manufaktur mengalami ekspansi seiring meningkatnya optimisme permintaan pasar domestik."
      },
      {
        "key": "B",
        "text": "Tarif dasar listrik industri mengalami penurunan drastis sehingga industri lebih boros energi."
      },
      {
        "key": "C",
        "text": "Masyarakat beralih dari sektor industri ke sektor pertanian tradisional."
      },
      {
        "key": "D",
        "text": "Pemerintah memberlakukan pembatasan ekspor untuk seluruh komoditas primer."
      },
      {
        "key": "E",
        "text": "Seluruh pekerja di sektor padat karya menerima kenaikan upah minimum 12%."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Sebab-akibat ekonomi: Peningkatan konsumsi listrik di industri padat karya menandakan mesin pabrik beroperasi pada kapasitas lebih tinggi (ekspansi produksi), yang didorong oleh tingginya keyakinan konsumen terhadap daya beli.",
    "quickTrick": "👑 Metode The King GO: Korelasikan indikator input produksi (listrik) dengan sentimen pasar (keyakinan konsumen)."
  },
  {
    "id": "bimbel_pu_075",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Analitik (Posisi Melingkar)",
    "difficulty": "HOTS",
    "stimulus": "Enam mahasiswa (Andi, Budi, Citra, Dodi, Eka, dan Fani) sedang duduk mengelilingi meja bundar untuk berdiskusi. Ketentuannya adalah: (1) Andi duduk tepat berhadapan dengan Citra; (2) Budi duduk di sebelah kanan Andi; (3) Dodi tidak duduk bersebelahan dengan Citra maupun Andi; (4) Eka duduk tepat di antara Citra dan Dodi.",
    "question": "Siapakah yang duduk tepat di sebelah kiri Andi?",
    "options": [
      {
        "key": "A",
        "text": "Budi"
      },
      {
        "key": "B",
        "text": "Citra"
      },
      {
        "key": "C",
        "text": "Dodi"
      },
      {
        "key": "D",
        "text": "Eka"
      },
      {
        "key": "E",
        "text": "Fani"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Analisis posisi melingkar 6 kursi: Posisi 1 = Andi. Menghadap Posisi 4 = Citra. Sebelah kanan Andi (Posisi 2) = Budi. Eka di antara Citra dan Dodi -> Eka di Posisi 5, Dodi di Posisi 6. Maka kursi tersisa di sebelah kiri Andi (Posisi 6 berlawanan jarum jam atau Posisi 3) ditempati oleh Fani.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Gambarkan diagram lingkaran dengan 6 titik berhadapan, lalu tempatkan orang yang posisinya mutlak terlebih dahulu."
  },
  {
    "id": "bimbel_pu_076",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Analitik (Urutan Peringkat)",
    "difficulty": "HOTS",
    "stimulus": "Lima tim robotika (Alpha, Beta, Gamma, Delta, Omega) mengikuti kompetisi nasional. Skor Alpha lebih tinggi daripada Beta. Skor Gamma lebih rendah daripada Delta, namun lebih tinggi daripada Alpha. Skor Omega adalah yang paling rendah di antara semua tim.",
    "question": "Tim manakah yang menempati peringkat kedua tertinggi dalam kompetisi tersebut?",
    "options": [
      {
        "key": "A",
        "text": "Delta"
      },
      {
        "key": "B",
        "text": "Alpha"
      },
      {
        "key": "C",
        "text": "Beta"
      },
      {
        "key": "D",
        "text": "Gamma"
      },
      {
        "key": "E",
        "text": "Omega"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Urutan skor dari yang tertinggi: Delta > Gamma > Alpha > Beta > Omega. Peringkat 1 = Delta, Peringkat 2 = Gamma, Peringkat 3 = Alpha, Peringkat 4 = Beta, Peringkat 5 = Omega. Maka peringkat kedua adalah Gamma.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Susun rantai ketidaksamaan: Delta > Gamma > Alpha > Beta > Omega. Langsung lihat urutan kedua."
  },
  {
    "id": "bimbel_pu_077",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Kritis (Pelemahan Argumen)",
    "difficulty": "HOTS",
    "stimulus": "Sebuah riset agroindustri menyatakan bahwa pemberian pupuk hayati mikoriza pada bibit kelapa sawit meningkatkan penyerapan fosfor sebesar 45% dan menurunkan tingkat mortalitas bibit akibat stres kekeringan hingga 30%. Namun, perkebunan rakyat di wilayah dataran rendah masih jarang mengadopsinya karena keterbatasan distributor resmi bibit bermikoriza.",
    "question": "Pernyataan yang PALING MELEMAHKAN argumen bahwa bibit bermikoriza efektif meningkatkan ketahanan perkebunan sawit rakyat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Harga bibit bermikoriza sedikit lebih mahal dibandingkan bibit konvensional non-sertifikasi."
      },
      {
        "key": "B",
        "text": "Petani sawit rakyat belum mendapatkan penyuluhan mengenai manfaat pupuk hayati."
      },
      {
        "key": "C",
        "text": "Bibit kelapa sawit bermikoriza membutuhkan suplai air tanah berkadar asam netral yang tidak dijumpai pada lahan gambut perkebunan rakyat."
      },
      {
        "key": "D",
        "text": "Sebagian perkebunan besar telah berhasil memproduksi mikoriza mandiri di laboratorium."
      },
      {
        "key": "E",
        "text": "Fosfor merupakan unsur hara makro sekunder yang sangat esensial bagi pertumbuhan vegetatif tanaman."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Pelemahan argumen (weaken the argument): Opsi yang menunjukkan bahwa efektivitas mikoriza gugur atau tidak berfungsi dalam kondisi riil lahan perkebunan rakyat (kondisi tanah asam lahan gambut membatalkan manfaat mikoriza).",
    "quickTrick": "🌟 NF Smart Solution: Cari fakta kontradiktif yang meruntuhkan asumsi dasar keberhasilan inovasi tersebut."
  },
  {
    "id": "bimbel_pu_078",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Sebab-Akibat (Analisis Data Makro)",
    "difficulty": "HOTS",
    "stimulus": "Data BPS menunjukkan bahwa konsumsi listrik sektor industri padat karya melonjak 12% pada kuartal II, sementara indeks keyakinan konsumen terhadap kondisi ekonomi mencapai rekor tertinggi dalam 3 tahun terakhir.",
    "question": "Berdasarkan data tersebut, simpulan yang PALING MUNGKIN BENAR mengenai aktivitas ekonomi adalah...",
    "options": [
      {
        "key": "A",
        "text": "Tarif dasar listrik industri mengalami penurunan drastis sehingga industri lebih boros energi."
      },
      {
        "key": "B",
        "text": "Kapasitas produksi pabrik manufaktur mengalami ekspansi seiring meningkatnya optimisme permintaan pasar domestik."
      },
      {
        "key": "C",
        "text": "Masyarakat beralih dari sektor industri ke sektor pertanian tradisional."
      },
      {
        "key": "D",
        "text": "Pemerintah memberlakukan pembatasan ekspor untuk seluruh komoditas primer."
      },
      {
        "key": "E",
        "text": "Seluruh pekerja di sektor padat karya menerima kenaikan upah minimum 12%."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Sebab-akibat ekonomi: Peningkatan konsumsi listrik di industri padat karya menandakan mesin pabrik beroperasi pada kapasitas lebih tinggi (ekspansi produksi), yang didorong oleh tingginya keyakinan konsumen terhadap daya beli.",
    "quickTrick": "🧠 Zenius Core Logic: Korelasikan indikator input produksi (listrik) dengan sentimen pasar (keyakinan konsumen)."
  },
  {
    "id": "bimbel_pu_079",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Analitik (Posisi Melingkar)",
    "difficulty": "HOTS",
    "stimulus": "Enam mahasiswa (Andi, Budi, Citra, Dodi, Eka, dan Fani) sedang duduk mengelilingi meja bundar untuk berdiskusi. Ketentuannya adalah: (1) Andi duduk tepat berhadapan dengan Citra; (2) Budi duduk di sebelah kanan Andi; (3) Dodi tidak duduk bersebelahan dengan Citra maupun Andi; (4) Eka duduk tepat di antara Citra dan Dodi.",
    "question": "Siapakah yang duduk tepat di sebelah kiri Andi?",
    "options": [
      {
        "key": "A",
        "text": "Fani"
      },
      {
        "key": "B",
        "text": "Budi"
      },
      {
        "key": "C",
        "text": "Citra"
      },
      {
        "key": "D",
        "text": "Dodi"
      },
      {
        "key": "E",
        "text": "Eka"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Analisis posisi melingkar 6 kursi: Posisi 1 = Andi. Menghadap Posisi 4 = Citra. Sebelah kanan Andi (Posisi 2) = Budi. Eka di antara Citra dan Dodi -> Eka di Posisi 5, Dodi di Posisi 6. Maka kursi tersisa di sebelah kiri Andi (Posisi 6 berlawanan jarum jam atau Posisi 3) ditempati oleh Fani.",
    "quickTrick": "💡 INTEN Quick Concept: Gambarkan diagram lingkaran dengan 6 titik berhadapan, lalu tempatkan orang yang posisinya mutlak terlebih dahulu."
  },
  {
    "id": "bimbel_pu_080",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Analitik (Urutan Peringkat)",
    "difficulty": "HOTS",
    "stimulus": "Lima tim robotika (Alpha, Beta, Gamma, Delta, Omega) mengikuti kompetisi nasional. Skor Alpha lebih tinggi daripada Beta. Skor Gamma lebih rendah daripada Delta, namun lebih tinggi daripada Alpha. Skor Omega adalah yang paling rendah di antara semua tim.",
    "question": "Tim manakah yang menempati peringkat kedua tertinggi dalam kompetisi tersebut?",
    "options": [
      {
        "key": "A",
        "text": "Delta"
      },
      {
        "key": "B",
        "text": "Alpha"
      },
      {
        "key": "C",
        "text": "Beta"
      },
      {
        "key": "D",
        "text": "Omega"
      },
      {
        "key": "E",
        "text": "Gamma"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Urutan skor dari yang tertinggi: Delta > Gamma > Alpha > Beta > Omega. Peringkat 1 = Delta, Peringkat 2 = Gamma, Peringkat 3 = Alpha, Peringkat 4 = Beta, Peringkat 5 = Omega. Maka peringkat kedua adalah Gamma.",
    "quickTrick": "👑 Metode The King GO: Susun rantai ketidaksamaan: Delta > Gamma > Alpha > Beta > Omega. Langsung lihat urutan kedua."
  },
  {
    "id": "bimbel_pu_081",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Kritis (Pelemahan Argumen)",
    "difficulty": "HOTS",
    "stimulus": "Sebuah riset agroindustri menyatakan bahwa pemberian pupuk hayati mikoriza pada bibit kelapa sawit meningkatkan penyerapan fosfor sebesar 45% dan menurunkan tingkat mortalitas bibit akibat stres kekeringan hingga 30%. Namun, perkebunan rakyat di wilayah dataran rendah masih jarang mengadopsinya karena keterbatasan distributor resmi bibit bermikoriza.",
    "question": "Pernyataan yang PALING MELEMAHKAN argumen bahwa bibit bermikoriza efektif meningkatkan ketahanan perkebunan sawit rakyat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Harga bibit bermikoriza sedikit lebih mahal dibandingkan bibit konvensional non-sertifikasi."
      },
      {
        "key": "B",
        "text": "Petani sawit rakyat belum mendapatkan penyuluhan mengenai manfaat pupuk hayati."
      },
      {
        "key": "C",
        "text": "Sebagian perkebunan besar telah berhasil memproduksi mikoriza mandiri di laboratorium."
      },
      {
        "key": "D",
        "text": "Bibit kelapa sawit bermikoriza membutuhkan suplai air tanah berkadar asam netral yang tidak dijumpai pada lahan gambut perkebunan rakyat."
      },
      {
        "key": "E",
        "text": "Fosfor merupakan unsur hara makro sekunder yang sangat esensial bagi pertumbuhan vegetatif tanaman."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Pelemahan argumen (weaken the argument): Opsi yang menunjukkan bahwa efektivitas mikoriza gugur atau tidak berfungsi dalam kondisi riil lahan perkebunan rakyat (kondisi tanah asam lahan gambut membatalkan manfaat mikoriza).",
    "quickTrick": "⚡ Langkah Taktis Neutron: Cari fakta kontradiktif yang meruntuhkan asumsi dasar keberhasilan inovasi tersebut."
  },
  {
    "id": "bimbel_pu_082",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Sebab-Akibat (Analisis Data Makro)",
    "difficulty": "HOTS",
    "stimulus": "Data BPS menunjukkan bahwa konsumsi listrik sektor industri padat karya melonjak 12% pada kuartal II, sementara indeks keyakinan konsumen terhadap kondisi ekonomi mencapai rekor tertinggi dalam 3 tahun terakhir.",
    "question": "Berdasarkan data tersebut, simpulan yang PALING MUNGKIN BENAR mengenai aktivitas ekonomi adalah...",
    "options": [
      {
        "key": "A",
        "text": "Tarif dasar listrik industri mengalami penurunan drastis sehingga industri lebih boros energi."
      },
      {
        "key": "B",
        "text": "Masyarakat beralih dari sektor industri ke sektor pertanian tradisional."
      },
      {
        "key": "C",
        "text": "Kapasitas produksi pabrik manufaktur mengalami ekspansi seiring meningkatnya optimisme permintaan pasar domestik."
      },
      {
        "key": "D",
        "text": "Pemerintah memberlakukan pembatasan ekspor untuk seluruh komoditas primer."
      },
      {
        "key": "E",
        "text": "Seluruh pekerja di sektor padat karya menerima kenaikan upah minimum 12%."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Sebab-akibat ekonomi: Peningkatan konsumsi listrik di industri padat karya menandakan mesin pabrik beroperasi pada kapasitas lebih tinggi (ekspansi produksi), yang didorong oleh tingginya keyakinan konsumen terhadap daya beli.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Korelasikan indikator input produksi (listrik) dengan sentimen pasar (keyakinan konsumen)."
  },
  {
    "id": "bimbel_pu_083",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Analitik (Posisi Melingkar)",
    "difficulty": "HOTS",
    "stimulus": "Enam mahasiswa (Andi, Budi, Citra, Dodi, Eka, dan Fani) sedang duduk mengelilingi meja bundar untuk berdiskusi. Ketentuannya adalah: (1) Andi duduk tepat berhadapan dengan Citra; (2) Budi duduk di sebelah kanan Andi; (3) Dodi tidak duduk bersebelahan dengan Citra maupun Andi; (4) Eka duduk tepat di antara Citra dan Dodi.",
    "question": "Siapakah yang duduk tepat di sebelah kiri Andi?",
    "options": [
      {
        "key": "A",
        "text": "Budi"
      },
      {
        "key": "B",
        "text": "Fani"
      },
      {
        "key": "C",
        "text": "Citra"
      },
      {
        "key": "D",
        "text": "Dodi"
      },
      {
        "key": "E",
        "text": "Eka"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Analisis posisi melingkar 6 kursi: Posisi 1 = Andi. Menghadap Posisi 4 = Citra. Sebelah kanan Andi (Posisi 2) = Budi. Eka di antara Citra dan Dodi -> Eka di Posisi 5, Dodi di Posisi 6. Maka kursi tersisa di sebelah kiri Andi (Posisi 6 berlawanan jarum jam atau Posisi 3) ditempati oleh Fani.",
    "quickTrick": "🌟 NF Smart Solution: Gambarkan diagram lingkaran dengan 6 titik berhadapan, lalu tempatkan orang yang posisinya mutlak terlebih dahulu."
  },
  {
    "id": "bimbel_pu_084",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Analitik (Urutan Peringkat)",
    "difficulty": "HOTS",
    "stimulus": "Lima tim robotika (Alpha, Beta, Gamma, Delta, Omega) mengikuti kompetisi nasional. Skor Alpha lebih tinggi daripada Beta. Skor Gamma lebih rendah daripada Delta, namun lebih tinggi daripada Alpha. Skor Omega adalah yang paling rendah di antara semua tim.",
    "question": "Tim manakah yang menempati peringkat kedua tertinggi dalam kompetisi tersebut?",
    "options": [
      {
        "key": "A",
        "text": "Gamma"
      },
      {
        "key": "B",
        "text": "Delta"
      },
      {
        "key": "C",
        "text": "Alpha"
      },
      {
        "key": "D",
        "text": "Beta"
      },
      {
        "key": "E",
        "text": "Omega"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Urutan skor dari yang tertinggi: Delta > Gamma > Alpha > Beta > Omega. Peringkat 1 = Delta, Peringkat 2 = Gamma, Peringkat 3 = Alpha, Peringkat 4 = Beta, Peringkat 5 = Omega. Maka peringkat kedua adalah Gamma.",
    "quickTrick": "🧠 Zenius Core Logic: Susun rantai ketidaksamaan: Delta > Gamma > Alpha > Beta > Omega. Langsung lihat urutan kedua."
  },
  {
    "id": "bimbel_pu_085",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Kritis (Pelemahan Argumen)",
    "difficulty": "HOTS",
    "stimulus": "Sebuah riset agroindustri menyatakan bahwa pemberian pupuk hayati mikoriza pada bibit kelapa sawit meningkatkan penyerapan fosfor sebesar 45% dan menurunkan tingkat mortalitas bibit akibat stres kekeringan hingga 30%. Namun, perkebunan rakyat di wilayah dataran rendah masih jarang mengadopsinya karena keterbatasan distributor resmi bibit bermikoriza.",
    "question": "Pernyataan yang PALING MELEMAHKAN argumen bahwa bibit bermikoriza efektif meningkatkan ketahanan perkebunan sawit rakyat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Harga bibit bermikoriza sedikit lebih mahal dibandingkan bibit konvensional non-sertifikasi."
      },
      {
        "key": "B",
        "text": "Petani sawit rakyat belum mendapatkan penyuluhan mengenai manfaat pupuk hayati."
      },
      {
        "key": "C",
        "text": "Sebagian perkebunan besar telah berhasil memproduksi mikoriza mandiri di laboratorium."
      },
      {
        "key": "D",
        "text": "Fosfor merupakan unsur hara makro sekunder yang sangat esensial bagi pertumbuhan vegetatif tanaman."
      },
      {
        "key": "E",
        "text": "Bibit kelapa sawit bermikoriza membutuhkan suplai air tanah berkadar asam netral yang tidak dijumpai pada lahan gambut perkebunan rakyat."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Pelemahan argumen (weaken the argument): Opsi yang menunjukkan bahwa efektivitas mikoriza gugur atau tidak berfungsi dalam kondisi riil lahan perkebunan rakyat (kondisi tanah asam lahan gambut membatalkan manfaat mikoriza).",
    "quickTrick": "💡 INTEN Quick Concept: Cari fakta kontradiktif yang meruntuhkan asumsi dasar keberhasilan inovasi tersebut."
  },
  {
    "id": "bimbel_pu_086",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Sebab-Akibat (Analisis Data Makro)",
    "difficulty": "HOTS",
    "stimulus": "Data BPS menunjukkan bahwa konsumsi listrik sektor industri padat karya melonjak 12% pada kuartal II, sementara indeks keyakinan konsumen terhadap kondisi ekonomi mencapai rekor tertinggi dalam 3 tahun terakhir.",
    "question": "Berdasarkan data tersebut, simpulan yang PALING MUNGKIN BENAR mengenai aktivitas ekonomi adalah...",
    "options": [
      {
        "key": "A",
        "text": "Tarif dasar listrik industri mengalami penurunan drastis sehingga industri lebih boros energi."
      },
      {
        "key": "B",
        "text": "Masyarakat beralih dari sektor industri ke sektor pertanian tradisional."
      },
      {
        "key": "C",
        "text": "Pemerintah memberlakukan pembatasan ekspor untuk seluruh komoditas primer."
      },
      {
        "key": "D",
        "text": "Kapasitas produksi pabrik manufaktur mengalami ekspansi seiring meningkatnya optimisme permintaan pasar domestik."
      },
      {
        "key": "E",
        "text": "Seluruh pekerja di sektor padat karya menerima kenaikan upah minimum 12%."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Sebab-akibat ekonomi: Peningkatan konsumsi listrik di industri padat karya menandakan mesin pabrik beroperasi pada kapasitas lebih tinggi (ekspansi produksi), yang didorong oleh tingginya keyakinan konsumen terhadap daya beli.",
    "quickTrick": "👑 Metode The King GO: Korelasikan indikator input produksi (listrik) dengan sentimen pasar (keyakinan konsumen)."
  },
  {
    "id": "bimbel_pu_087",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Analitik (Posisi Melingkar)",
    "difficulty": "HOTS",
    "stimulus": "Enam mahasiswa (Andi, Budi, Citra, Dodi, Eka, dan Fani) sedang duduk mengelilingi meja bundar untuk berdiskusi. Ketentuannya adalah: (1) Andi duduk tepat berhadapan dengan Citra; (2) Budi duduk di sebelah kanan Andi; (3) Dodi tidak duduk bersebelahan dengan Citra maupun Andi; (4) Eka duduk tepat di antara Citra dan Dodi.",
    "question": "Siapakah yang duduk tepat di sebelah kiri Andi?",
    "options": [
      {
        "key": "A",
        "text": "Budi"
      },
      {
        "key": "B",
        "text": "Citra"
      },
      {
        "key": "C",
        "text": "Fani"
      },
      {
        "key": "D",
        "text": "Dodi"
      },
      {
        "key": "E",
        "text": "Eka"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Analisis posisi melingkar 6 kursi: Posisi 1 = Andi. Menghadap Posisi 4 = Citra. Sebelah kanan Andi (Posisi 2) = Budi. Eka di antara Citra dan Dodi -> Eka di Posisi 5, Dodi di Posisi 6. Maka kursi tersisa di sebelah kiri Andi (Posisi 6 berlawanan jarum jam atau Posisi 3) ditempati oleh Fani.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Gambarkan diagram lingkaran dengan 6 titik berhadapan, lalu tempatkan orang yang posisinya mutlak terlebih dahulu."
  },
  {
    "id": "bimbel_pu_088",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Analitik (Urutan Peringkat)",
    "difficulty": "HOTS",
    "stimulus": "Lima tim robotika (Alpha, Beta, Gamma, Delta, Omega) mengikuti kompetisi nasional. Skor Alpha lebih tinggi daripada Beta. Skor Gamma lebih rendah daripada Delta, namun lebih tinggi daripada Alpha. Skor Omega adalah yang paling rendah di antara semua tim.",
    "question": "Tim manakah yang menempati peringkat kedua tertinggi dalam kompetisi tersebut?",
    "options": [
      {
        "key": "A",
        "text": "Delta"
      },
      {
        "key": "B",
        "text": "Gamma"
      },
      {
        "key": "C",
        "text": "Alpha"
      },
      {
        "key": "D",
        "text": "Beta"
      },
      {
        "key": "E",
        "text": "Omega"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Urutan skor dari yang tertinggi: Delta > Gamma > Alpha > Beta > Omega. Peringkat 1 = Delta, Peringkat 2 = Gamma, Peringkat 3 = Alpha, Peringkat 4 = Beta, Peringkat 5 = Omega. Maka peringkat kedua adalah Gamma.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Susun rantai ketidaksamaan: Delta > Gamma > Alpha > Beta > Omega. Langsung lihat urutan kedua."
  },
  {
    "id": "bimbel_pu_089",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Kritis (Pelemahan Argumen)",
    "difficulty": "HOTS",
    "stimulus": "Sebuah riset agroindustri menyatakan bahwa pemberian pupuk hayati mikoriza pada bibit kelapa sawit meningkatkan penyerapan fosfor sebesar 45% dan menurunkan tingkat mortalitas bibit akibat stres kekeringan hingga 30%. Namun, perkebunan rakyat di wilayah dataran rendah masih jarang mengadopsinya karena keterbatasan distributor resmi bibit bermikoriza.",
    "question": "Pernyataan yang PALING MELEMAHKAN argumen bahwa bibit bermikoriza efektif meningkatkan ketahanan perkebunan sawit rakyat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Bibit kelapa sawit bermikoriza membutuhkan suplai air tanah berkadar asam netral yang tidak dijumpai pada lahan gambut perkebunan rakyat."
      },
      {
        "key": "B",
        "text": "Harga bibit bermikoriza sedikit lebih mahal dibandingkan bibit konvensional non-sertifikasi."
      },
      {
        "key": "C",
        "text": "Petani sawit rakyat belum mendapatkan penyuluhan mengenai manfaat pupuk hayati."
      },
      {
        "key": "D",
        "text": "Sebagian perkebunan besar telah berhasil memproduksi mikoriza mandiri di laboratorium."
      },
      {
        "key": "E",
        "text": "Fosfor merupakan unsur hara makro sekunder yang sangat esensial bagi pertumbuhan vegetatif tanaman."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Pelemahan argumen (weaken the argument): Opsi yang menunjukkan bahwa efektivitas mikoriza gugur atau tidak berfungsi dalam kondisi riil lahan perkebunan rakyat (kondisi tanah asam lahan gambut membatalkan manfaat mikoriza).",
    "quickTrick": "🌟 NF Smart Solution: Cari fakta kontradiktif yang meruntuhkan asumsi dasar keberhasilan inovasi tersebut."
  },
  {
    "id": "bimbel_pu_090",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Sebab-Akibat (Analisis Data Makro)",
    "difficulty": "HOTS",
    "stimulus": "Data BPS menunjukkan bahwa konsumsi listrik sektor industri padat karya melonjak 12% pada kuartal II, sementara indeks keyakinan konsumen terhadap kondisi ekonomi mencapai rekor tertinggi dalam 3 tahun terakhir.",
    "question": "Berdasarkan data tersebut, simpulan yang PALING MUNGKIN BENAR mengenai aktivitas ekonomi adalah...",
    "options": [
      {
        "key": "A",
        "text": "Tarif dasar listrik industri mengalami penurunan drastis sehingga industri lebih boros energi."
      },
      {
        "key": "B",
        "text": "Masyarakat beralih dari sektor industri ke sektor pertanian tradisional."
      },
      {
        "key": "C",
        "text": "Pemerintah memberlakukan pembatasan ekspor untuk seluruh komoditas primer."
      },
      {
        "key": "D",
        "text": "Seluruh pekerja di sektor padat karya menerima kenaikan upah minimum 12%."
      },
      {
        "key": "E",
        "text": "Kapasitas produksi pabrik manufaktur mengalami ekspansi seiring meningkatnya optimisme permintaan pasar domestik."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Sebab-akibat ekonomi: Peningkatan konsumsi listrik di industri padat karya menandakan mesin pabrik beroperasi pada kapasitas lebih tinggi (ekspansi produksi), yang didorong oleh tingginya keyakinan konsumen terhadap daya beli.",
    "quickTrick": "🧠 Zenius Core Logic: Korelasikan indikator input produksi (listrik) dengan sentimen pasar (keyakinan konsumen)."
  },
  {
    "id": "bimbel_pu_091",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Analitik (Posisi Melingkar)",
    "difficulty": "HOTS",
    "stimulus": "Enam mahasiswa (Andi, Budi, Citra, Dodi, Eka, dan Fani) sedang duduk mengelilingi meja bundar untuk berdiskusi. Ketentuannya adalah: (1) Andi duduk tepat berhadapan dengan Citra; (2) Budi duduk di sebelah kanan Andi; (3) Dodi tidak duduk bersebelahan dengan Citra maupun Andi; (4) Eka duduk tepat di antara Citra dan Dodi.",
    "question": "Siapakah yang duduk tepat di sebelah kiri Andi?",
    "options": [
      {
        "key": "A",
        "text": "Budi"
      },
      {
        "key": "B",
        "text": "Citra"
      },
      {
        "key": "C",
        "text": "Dodi"
      },
      {
        "key": "D",
        "text": "Fani"
      },
      {
        "key": "E",
        "text": "Eka"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Analisis posisi melingkar 6 kursi: Posisi 1 = Andi. Menghadap Posisi 4 = Citra. Sebelah kanan Andi (Posisi 2) = Budi. Eka di antara Citra dan Dodi -> Eka di Posisi 5, Dodi di Posisi 6. Maka kursi tersisa di sebelah kiri Andi (Posisi 6 berlawanan jarum jam atau Posisi 3) ditempati oleh Fani.",
    "quickTrick": "💡 INTEN Quick Concept: Gambarkan diagram lingkaran dengan 6 titik berhadapan, lalu tempatkan orang yang posisinya mutlak terlebih dahulu."
  },
  {
    "id": "bimbel_pu_092",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Analitik (Urutan Peringkat)",
    "difficulty": "HOTS",
    "stimulus": "Lima tim robotika (Alpha, Beta, Gamma, Delta, Omega) mengikuti kompetisi nasional. Skor Alpha lebih tinggi daripada Beta. Skor Gamma lebih rendah daripada Delta, namun lebih tinggi daripada Alpha. Skor Omega adalah yang paling rendah di antara semua tim.",
    "question": "Tim manakah yang menempati peringkat kedua tertinggi dalam kompetisi tersebut?",
    "options": [
      {
        "key": "A",
        "text": "Delta"
      },
      {
        "key": "B",
        "text": "Alpha"
      },
      {
        "key": "C",
        "text": "Gamma"
      },
      {
        "key": "D",
        "text": "Beta"
      },
      {
        "key": "E",
        "text": "Omega"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Urutan skor dari yang tertinggi: Delta > Gamma > Alpha > Beta > Omega. Peringkat 1 = Delta, Peringkat 2 = Gamma, Peringkat 3 = Alpha, Peringkat 4 = Beta, Peringkat 5 = Omega. Maka peringkat kedua adalah Gamma.",
    "quickTrick": "👑 Metode The King GO: Susun rantai ketidaksamaan: Delta > Gamma > Alpha > Beta > Omega. Langsung lihat urutan kedua."
  },
  {
    "id": "bimbel_pu_093",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Kritis (Pelemahan Argumen)",
    "difficulty": "HOTS",
    "stimulus": "Sebuah riset agroindustri menyatakan bahwa pemberian pupuk hayati mikoriza pada bibit kelapa sawit meningkatkan penyerapan fosfor sebesar 45% dan menurunkan tingkat mortalitas bibit akibat stres kekeringan hingga 30%. Namun, perkebunan rakyat di wilayah dataran rendah masih jarang mengadopsinya karena keterbatasan distributor resmi bibit bermikoriza.",
    "question": "Pernyataan yang PALING MELEMAHKAN argumen bahwa bibit bermikoriza efektif meningkatkan ketahanan perkebunan sawit rakyat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Harga bibit bermikoriza sedikit lebih mahal dibandingkan bibit konvensional non-sertifikasi."
      },
      {
        "key": "B",
        "text": "Bibit kelapa sawit bermikoriza membutuhkan suplai air tanah berkadar asam netral yang tidak dijumpai pada lahan gambut perkebunan rakyat."
      },
      {
        "key": "C",
        "text": "Petani sawit rakyat belum mendapatkan penyuluhan mengenai manfaat pupuk hayati."
      },
      {
        "key": "D",
        "text": "Sebagian perkebunan besar telah berhasil memproduksi mikoriza mandiri di laboratorium."
      },
      {
        "key": "E",
        "text": "Fosfor merupakan unsur hara makro sekunder yang sangat esensial bagi pertumbuhan vegetatif tanaman."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Pelemahan argumen (weaken the argument): Opsi yang menunjukkan bahwa efektivitas mikoriza gugur atau tidak berfungsi dalam kondisi riil lahan perkebunan rakyat (kondisi tanah asam lahan gambut membatalkan manfaat mikoriza).",
    "quickTrick": "⚡ Langkah Taktis Neutron: Cari fakta kontradiktif yang meruntuhkan asumsi dasar keberhasilan inovasi tersebut."
  },
  {
    "id": "bimbel_pu_094",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Sebab-Akibat (Analisis Data Makro)",
    "difficulty": "HOTS",
    "stimulus": "Data BPS menunjukkan bahwa konsumsi listrik sektor industri padat karya melonjak 12% pada kuartal II, sementara indeks keyakinan konsumen terhadap kondisi ekonomi mencapai rekor tertinggi dalam 3 tahun terakhir.",
    "question": "Berdasarkan data tersebut, simpulan yang PALING MUNGKIN BENAR mengenai aktivitas ekonomi adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kapasitas produksi pabrik manufaktur mengalami ekspansi seiring meningkatnya optimisme permintaan pasar domestik."
      },
      {
        "key": "B",
        "text": "Tarif dasar listrik industri mengalami penurunan drastis sehingga industri lebih boros energi."
      },
      {
        "key": "C",
        "text": "Masyarakat beralih dari sektor industri ke sektor pertanian tradisional."
      },
      {
        "key": "D",
        "text": "Pemerintah memberlakukan pembatasan ekspor untuk seluruh komoditas primer."
      },
      {
        "key": "E",
        "text": "Seluruh pekerja di sektor padat karya menerima kenaikan upah minimum 12%."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Sebab-akibat ekonomi: Peningkatan konsumsi listrik di industri padat karya menandakan mesin pabrik beroperasi pada kapasitas lebih tinggi (ekspansi produksi), yang didorong oleh tingginya keyakinan konsumen terhadap daya beli.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Korelasikan indikator input produksi (listrik) dengan sentimen pasar (keyakinan konsumen)."
  },
  {
    "id": "bimbel_pu_095",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Analitik (Posisi Melingkar)",
    "difficulty": "HOTS",
    "stimulus": "Enam mahasiswa (Andi, Budi, Citra, Dodi, Eka, dan Fani) sedang duduk mengelilingi meja bundar untuk berdiskusi. Ketentuannya adalah: (1) Andi duduk tepat berhadapan dengan Citra; (2) Budi duduk di sebelah kanan Andi; (3) Dodi tidak duduk bersebelahan dengan Citra maupun Andi; (4) Eka duduk tepat di antara Citra dan Dodi.",
    "question": "Siapakah yang duduk tepat di sebelah kiri Andi?",
    "options": [
      {
        "key": "A",
        "text": "Budi"
      },
      {
        "key": "B",
        "text": "Citra"
      },
      {
        "key": "C",
        "text": "Dodi"
      },
      {
        "key": "D",
        "text": "Eka"
      },
      {
        "key": "E",
        "text": "Fani"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Analisis posisi melingkar 6 kursi: Posisi 1 = Andi. Menghadap Posisi 4 = Citra. Sebelah kanan Andi (Posisi 2) = Budi. Eka di antara Citra dan Dodi -> Eka di Posisi 5, Dodi di Posisi 6. Maka kursi tersisa di sebelah kiri Andi (Posisi 6 berlawanan jarum jam atau Posisi 3) ditempati oleh Fani.",
    "quickTrick": "🌟 NF Smart Solution: Gambarkan diagram lingkaran dengan 6 titik berhadapan, lalu tempatkan orang yang posisinya mutlak terlebih dahulu."
  },
  {
    "id": "bimbel_pu_096",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Analitik (Urutan Peringkat)",
    "difficulty": "HOTS",
    "stimulus": "Lima tim robotika (Alpha, Beta, Gamma, Delta, Omega) mengikuti kompetisi nasional. Skor Alpha lebih tinggi daripada Beta. Skor Gamma lebih rendah daripada Delta, namun lebih tinggi daripada Alpha. Skor Omega adalah yang paling rendah di antara semua tim.",
    "question": "Tim manakah yang menempati peringkat kedua tertinggi dalam kompetisi tersebut?",
    "options": [
      {
        "key": "A",
        "text": "Delta"
      },
      {
        "key": "B",
        "text": "Alpha"
      },
      {
        "key": "C",
        "text": "Beta"
      },
      {
        "key": "D",
        "text": "Gamma"
      },
      {
        "key": "E",
        "text": "Omega"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Urutan skor dari yang tertinggi: Delta > Gamma > Alpha > Beta > Omega. Peringkat 1 = Delta, Peringkat 2 = Gamma, Peringkat 3 = Alpha, Peringkat 4 = Beta, Peringkat 5 = Omega. Maka peringkat kedua adalah Gamma.",
    "quickTrick": "🧠 Zenius Core Logic: Susun rantai ketidaksamaan: Delta > Gamma > Alpha > Beta > Omega. Langsung lihat urutan kedua."
  },
  {
    "id": "bimbel_pu_097",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Kritis (Pelemahan Argumen)",
    "difficulty": "HOTS",
    "stimulus": "Sebuah riset agroindustri menyatakan bahwa pemberian pupuk hayati mikoriza pada bibit kelapa sawit meningkatkan penyerapan fosfor sebesar 45% dan menurunkan tingkat mortalitas bibit akibat stres kekeringan hingga 30%. Namun, perkebunan rakyat di wilayah dataran rendah masih jarang mengadopsinya karena keterbatasan distributor resmi bibit bermikoriza.",
    "question": "Pernyataan yang PALING MELEMAHKAN argumen bahwa bibit bermikoriza efektif meningkatkan ketahanan perkebunan sawit rakyat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Harga bibit bermikoriza sedikit lebih mahal dibandingkan bibit konvensional non-sertifikasi."
      },
      {
        "key": "B",
        "text": "Petani sawit rakyat belum mendapatkan penyuluhan mengenai manfaat pupuk hayati."
      },
      {
        "key": "C",
        "text": "Bibit kelapa sawit bermikoriza membutuhkan suplai air tanah berkadar asam netral yang tidak dijumpai pada lahan gambut perkebunan rakyat."
      },
      {
        "key": "D",
        "text": "Sebagian perkebunan besar telah berhasil memproduksi mikoriza mandiri di laboratorium."
      },
      {
        "key": "E",
        "text": "Fosfor merupakan unsur hara makro sekunder yang sangat esensial bagi pertumbuhan vegetatif tanaman."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Pelemahan argumen (weaken the argument): Opsi yang menunjukkan bahwa efektivitas mikoriza gugur atau tidak berfungsi dalam kondisi riil lahan perkebunan rakyat (kondisi tanah asam lahan gambut membatalkan manfaat mikoriza).",
    "quickTrick": "💡 INTEN Quick Concept: Cari fakta kontradiktif yang meruntuhkan asumsi dasar keberhasilan inovasi tersebut."
  },
  {
    "id": "bimbel_pu_098",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Sebab-Akibat (Analisis Data Makro)",
    "difficulty": "HOTS",
    "stimulus": "Data BPS menunjukkan bahwa konsumsi listrik sektor industri padat karya melonjak 12% pada kuartal II, sementara indeks keyakinan konsumen terhadap kondisi ekonomi mencapai rekor tertinggi dalam 3 tahun terakhir.",
    "question": "Berdasarkan data tersebut, simpulan yang PALING MUNGKIN BENAR mengenai aktivitas ekonomi adalah...",
    "options": [
      {
        "key": "A",
        "text": "Tarif dasar listrik industri mengalami penurunan drastis sehingga industri lebih boros energi."
      },
      {
        "key": "B",
        "text": "Kapasitas produksi pabrik manufaktur mengalami ekspansi seiring meningkatnya optimisme permintaan pasar domestik."
      },
      {
        "key": "C",
        "text": "Masyarakat beralih dari sektor industri ke sektor pertanian tradisional."
      },
      {
        "key": "D",
        "text": "Pemerintah memberlakukan pembatasan ekspor untuk seluruh komoditas primer."
      },
      {
        "key": "E",
        "text": "Seluruh pekerja di sektor padat karya menerima kenaikan upah minimum 12%."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Sebab-akibat ekonomi: Peningkatan konsumsi listrik di industri padat karya menandakan mesin pabrik beroperasi pada kapasitas lebih tinggi (ekspansi produksi), yang didorong oleh tingginya keyakinan konsumen terhadap daya beli.",
    "quickTrick": "👑 Metode The King GO: Korelasikan indikator input produksi (listrik) dengan sentimen pasar (keyakinan konsumen)."
  },
  {
    "id": "bimbel_pu_099",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Analitik (Posisi Melingkar)",
    "difficulty": "HOTS",
    "stimulus": "Enam mahasiswa (Andi, Budi, Citra, Dodi, Eka, dan Fani) sedang duduk mengelilingi meja bundar untuk berdiskusi. Ketentuannya adalah: (1) Andi duduk tepat berhadapan dengan Citra; (2) Budi duduk di sebelah kanan Andi; (3) Dodi tidak duduk bersebelahan dengan Citra maupun Andi; (4) Eka duduk tepat di antara Citra dan Dodi.",
    "question": "Siapakah yang duduk tepat di sebelah kiri Andi?",
    "options": [
      {
        "key": "A",
        "text": "Fani"
      },
      {
        "key": "B",
        "text": "Budi"
      },
      {
        "key": "C",
        "text": "Citra"
      },
      {
        "key": "D",
        "text": "Dodi"
      },
      {
        "key": "E",
        "text": "Eka"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Analisis posisi melingkar 6 kursi: Posisi 1 = Andi. Menghadap Posisi 4 = Citra. Sebelah kanan Andi (Posisi 2) = Budi. Eka di antara Citra dan Dodi -> Eka di Posisi 5, Dodi di Posisi 6. Maka kursi tersisa di sebelah kiri Andi (Posisi 6 berlawanan jarum jam atau Posisi 3) ditempati oleh Fani.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Gambarkan diagram lingkaran dengan 6 titik berhadapan, lalu tempatkan orang yang posisinya mutlak terlebih dahulu."
  },
  {
    "id": "bimbel_pu_100",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pu",
    "subtestName": "Penalaran Umum (PU)",
    "category": "Penalaran Analitik (Urutan Peringkat)",
    "difficulty": "HOTS",
    "stimulus": "Lima tim robotika (Alpha, Beta, Gamma, Delta, Omega) mengikuti kompetisi nasional. Skor Alpha lebih tinggi daripada Beta. Skor Gamma lebih rendah daripada Delta, namun lebih tinggi daripada Alpha. Skor Omega adalah yang paling rendah di antara semua tim.",
    "question": "Tim manakah yang menempati peringkat kedua tertinggi dalam kompetisi tersebut?",
    "options": [
      {
        "key": "A",
        "text": "Delta"
      },
      {
        "key": "B",
        "text": "Alpha"
      },
      {
        "key": "C",
        "text": "Beta"
      },
      {
        "key": "D",
        "text": "Omega"
      },
      {
        "key": "E",
        "text": "Gamma"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Urutan skor dari yang tertinggi: Delta > Gamma > Alpha > Beta > Omega. Peringkat 1 = Delta, Peringkat 2 = Gamma, Peringkat 3 = Alpha, Peringkat 4 = Beta, Peringkat 5 = Omega. Maka peringkat kedua adalah Gamma.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Susun rantai ketidaksamaan: Delta > Gamma > Alpha > Beta > Omega. Langsung lihat urutan kedua."
  },
  {
    "id": "bimbel_ppu_001",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Diksi & Kosakata Ilmiah",
    "difficulty": "HOTS",
    "stimulus": "Perkembangan bioteknologi modern telah memungkinkan rekayasa genetika secara presisi melalui teknologi CRISPR-Cas9. Terobosan ini mengeliminasi mutasi genetik patogen pada tingkat seluler dengan akurasi tinggi.",
    "question": "Makna kata 'presisi' dalam konteks kutipan teks tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kecepatan proses penyembuhan jaringan biologis."
      },
      {
        "key": "B",
        "text": "Ketepatan atau keakuratan tingkat tinggi dalam pelaksanaan tindakan teknis."
      },
      {
        "key": "C",
        "text": "Kekuatan enzim pembelah rantai asam nukleat."
      },
      {
        "key": "D",
        "text": "Keseragaman ukuran molekul protein hasil sintesis."
      },
      {
        "key": "E",
        "text": "Keterjangkauan biaya riset laboratorium farmasi."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Berdasarkan KBBI dan konteks teks sains kedokteran, kata 'presisi' berarti ketepatan, kejituan, atau keakuratan yang eksak dalam memodifikasi rantai DNA tanpa menimbulkan efek samping off-target.",
    "quickTrick": "👑 Metode The King GO: Kaitkan kata 'presisi' dengan instrumen dan akurasi tinggi pemotongan gen."
  },
  {
    "id": "bimbel_ppu_002",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Relasi Semantik (Antonim Kontekstual)",
    "difficulty": "Sedang",
    "stimulus": "Ekspansi sektor agrikultur di kawasan tropis sering kali berimplikasi pada fragmentasi habitat satwa endemik. Akibatnya, koridor ekologis alami terputus sehingga memicu penurunan keanekaragaman hayati secara drastis.",
    "question": "Antonim kontekstual yang paling tepat untuk kata 'fragmentasi' adalah...",
    "options": [
      {
        "key": "A",
        "text": "Degradasi lingkungan."
      },
      {
        "key": "B",
        "text": "Konservasi sumber daya."
      },
      {
        "key": "C",
        "text": "Eksploitasi terstruktur."
      },
      {
        "key": "D",
        "text": "Diversifikasi hayati."
      },
      {
        "key": "E",
        "text": "Integrasi atau penyatuan kawasan."
      }
    ],
    "correctAnswer": "E",
    "explanation": "'Fragmentasi' berarti pembelahan, pemisahan, atau perpecahan menjadi fragmen-fragmen kecil yang terisolasi. Lawan katanya (antonim) adalah penggabungan, penyatuan, atau integrasi.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Fragment = pecahan -> lawan kata pecahan adalah integrasi/penyatuan menyeluruh."
  },
  {
    "id": "bimbel_ppu_003",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Analisis Ide Pokok & Struktur Teks",
    "difficulty": "Sedang",
    "stimulus": "Fenomena urban sprawl di kota-kota megapolitan menyebabkan ketergantungan berlebih terhadap moda transportasi pribadi. Hal ini tidak hanya memicu kongesti lalu lintas yang parah setiap jam sibuk, tetapi juga mempercepat akumulasi jejak karbon perkotaan.",
    "question": "Gagasan pokok wacana di atas adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penyebab tingginya angka kepemilikan mobil pribadi di kota metropolitan."
      },
      {
        "key": "B",
        "text": "Strategi pemerintah dalam membangun jalan tol lingkar kota modern."
      },
      {
        "key": "C",
        "text": "Dampak negatif dari fenomena perambatan perkotaan (urban sprawl) terhadap transportasi dan lingkungan."
      },
      {
        "key": "D",
        "text": "Perhitungan kuantitatif kenaikan emisi karbon pada sektor transportasi darat."
      },
      {
        "key": "E",
        "text": "Solusi terpadu pengalihan rute kendaraan komersial di kawasan penyangga."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Gagasan pokok mencakup hubungan sebab (urban sprawl) dan akibat ganda yang ditimbulkan (ketergantungan kendaraan pribadi -> kongesti dan emisi karbon).",
    "quickTrick": "🚀 Brain Academy Fast Trick: Cari kalimat utama di awal paragraf (deduktif) yang mengikat seluruh kalimat penjelas berikutnya."
  },
  {
    "id": "bimbel_ppu_004",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Asosiatif & Rasa Bahasa",
    "difficulty": "HOTS",
    "stimulus": "Sikap arogan sang manajer proyek selama rapat koordinasi menimbulkan antipati dari seluruh anggota tim lintas divisi. Alih-alih merangkul gagasan baru, ia justru memotong penjelasan rekan kerjanya dengan nada sinis.",
    "question": "Makna asosiatif kata 'antipati' dalam paragraf tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penolakan emosional berupa rasa enggan, tidak suka, atau prasangka negatif."
      },
      {
        "key": "B",
        "text": "Ketiadaan pemahaman mengenai tugas teknis yang diberikan."
      },
      {
        "key": "C",
        "text": "Kesepakatan diam-diam untuk menunda tenggat waktu proyek."
      },
      {
        "key": "D",
        "text": "Rasa takut akan kehilangan posisi jabatan dalam organisasi."
      },
      {
        "key": "E",
        "text": "Kekaguman yang berlebihan terhadap otoritas kepemimpinan."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kata 'antipati' berakar dari rasa penolakan emosional, kebencian bawah sadar, atau rasa tidak menyukai seseorang karena perlakuan yang tidak menyenangkan.",
    "quickTrick": "🌟 NF Smart Solution: Anti- (melawan/tidak suka) + pathos (perasaan) = rasa tidak suka/penolakan perasaan."
  },
  {
    "id": "bimbel_ppu_005",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Pemahaman Istilah & Konsep Sosio-Ekonomi",
    "difficulty": "Sedang",
    "stimulus": "Dalam upaya menekan defisit anggaran, kementerian keuangan mengadopsi instrumen fiskal counter-cyclical guna menstabilkan laju pertumbuhan ekonomi riil.",
    "question": "Istilah 'counter-cyclical' merujuk pada kebijakan fiskal yang...",
    "options": [
      {
        "key": "A",
        "text": "Dijalankan secara berkala setiap lima tahun anggaran berjalan."
      },
      {
        "key": "B",
        "text": "Mendukung siklus ekspansi tanpa memperhatikan cadangan devisa negara."
      },
      {
        "key": "C",
        "text": "Hanya berfokus pada penyaluran bantuan langsung tunai kepada masyarakat miskin."
      },
      {
        "key": "D",
        "text": "Bergerak berlawanan dengan arah tren fluktuasi siklus bisnis guna meredam dampak krisis atau overheating ekonomi."
      },
      {
        "key": "E",
        "text": "Menyerahkan seluruh mekanisme penentuan suku bunga acuan ke pasar bebas."
      }
    ],
    "correctAnswer": "D",
    "explanation": "'Counter-cyclical policy' adalah kebijakan yang dirancang untuk melawan fase siklus ekonomi: bersikap ekspansif saat resesi dan bersikap kontraktif saat ekonomi terlalu panas (overheating).",
    "quickTrick": "🧠 Zenius Core Logic: Pahami prefiks 'counter' = berlawanan arah siklus."
  },
  {
    "id": "bimbel_ppu_006",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Diksi & Kosakata Ilmiah",
    "difficulty": "Sedang",
    "stimulus": "Perkembangan bioteknologi modern telah memungkinkan rekayasa genetika secara presisi melalui teknologi CRISPR-Cas9. Terobosan ini mengeliminasi mutasi genetik patogen pada tingkat seluler dengan akurasi tinggi.",
    "question": "Makna kata 'presisi' dalam konteks kutipan teks tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kecepatan proses penyembuhan jaringan biologis."
      },
      {
        "key": "B",
        "text": "Ketepatan atau keakuratan tingkat tinggi dalam pelaksanaan tindakan teknis."
      },
      {
        "key": "C",
        "text": "Kekuatan enzim pembelah rantai asam nukleat."
      },
      {
        "key": "D",
        "text": "Keseragaman ukuran molekul protein hasil sintesis."
      },
      {
        "key": "E",
        "text": "Keterjangkauan biaya riset laboratorium farmasi."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Berdasarkan KBBI dan konteks teks sains kedokteran, kata 'presisi' berarti ketepatan, kejituan, atau keakuratan yang eksak dalam memodifikasi rantai DNA tanpa menimbulkan efek samping off-target.",
    "quickTrick": "💡 INTEN Quick Concept: Kaitkan kata 'presisi' dengan instrumen dan akurasi tinggi pemotongan gen."
  },
  {
    "id": "bimbel_ppu_007",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Relasi Semantik (Antonim Kontekstual)",
    "difficulty": "HOTS",
    "stimulus": "Ekspansi sektor agrikultur di kawasan tropis sering kali berimplikasi pada fragmentasi habitat satwa endemik. Akibatnya, koridor ekologis alami terputus sehingga memicu penurunan keanekaragaman hayati secara drastis.",
    "question": "Antonim kontekstual yang paling tepat untuk kata 'fragmentasi' adalah...",
    "options": [
      {
        "key": "A",
        "text": "Degradasi lingkungan."
      },
      {
        "key": "B",
        "text": "Konservasi sumber daya."
      },
      {
        "key": "C",
        "text": "Eksploitasi terstruktur."
      },
      {
        "key": "D",
        "text": "Diversifikasi hayati."
      },
      {
        "key": "E",
        "text": "Integrasi atau penyatuan kawasan."
      }
    ],
    "correctAnswer": "E",
    "explanation": "'Fragmentasi' berarti pembelahan, pemisahan, atau perpecahan menjadi fragmen-fragmen kecil yang terisolasi. Lawan katanya (antonim) adalah penggabungan, penyatuan, atau integrasi.",
    "quickTrick": "👑 Metode The King GO: Fragment = pecahan -> lawan kata pecahan adalah integrasi/penyatuan menyeluruh."
  },
  {
    "id": "bimbel_ppu_008",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Analisis Ide Pokok & Struktur Teks",
    "difficulty": "Sedang",
    "stimulus": "Fenomena urban sprawl di kota-kota megapolitan menyebabkan ketergantungan berlebih terhadap moda transportasi pribadi. Hal ini tidak hanya memicu kongesti lalu lintas yang parah setiap jam sibuk, tetapi juga mempercepat akumulasi jejak karbon perkotaan.",
    "question": "Gagasan pokok wacana di atas adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penyebab tingginya angka kepemilikan mobil pribadi di kota metropolitan."
      },
      {
        "key": "B",
        "text": "Strategi pemerintah dalam membangun jalan tol lingkar kota modern."
      },
      {
        "key": "C",
        "text": "Dampak negatif dari fenomena perambatan perkotaan (urban sprawl) terhadap transportasi dan lingkungan."
      },
      {
        "key": "D",
        "text": "Perhitungan kuantitatif kenaikan emisi karbon pada sektor transportasi darat."
      },
      {
        "key": "E",
        "text": "Solusi terpadu pengalihan rute kendaraan komersial di kawasan penyangga."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Gagasan pokok mencakup hubungan sebab (urban sprawl) dan akibat ganda yang ditimbulkan (ketergantungan kendaraan pribadi -> kongesti dan emisi karbon).",
    "quickTrick": "⚡ Langkah Taktis Neutron: Cari kalimat utama di awal paragraf (deduktif) yang mengikat seluruh kalimat penjelas berikutnya."
  },
  {
    "id": "bimbel_ppu_009",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Asosiatif & Rasa Bahasa",
    "difficulty": "Sedang",
    "stimulus": "Sikap arogan sang manajer proyek selama rapat koordinasi menimbulkan antipati dari seluruh anggota tim lintas divisi. Alih-alih merangkul gagasan baru, ia justru memotong penjelasan rekan kerjanya dengan nada sinis.",
    "question": "Makna asosiatif kata 'antipati' dalam paragraf tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penolakan emosional berupa rasa enggan, tidak suka, atau prasangka negatif."
      },
      {
        "key": "B",
        "text": "Ketiadaan pemahaman mengenai tugas teknis yang diberikan."
      },
      {
        "key": "C",
        "text": "Kesepakatan diam-diam untuk menunda tenggat waktu proyek."
      },
      {
        "key": "D",
        "text": "Rasa takut akan kehilangan posisi jabatan dalam organisasi."
      },
      {
        "key": "E",
        "text": "Kekaguman yang berlebihan terhadap otoritas kepemimpinan."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kata 'antipati' berakar dari rasa penolakan emosional, kebencian bawah sadar, atau rasa tidak menyukai seseorang karena perlakuan yang tidak menyenangkan.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Anti- (melawan/tidak suka) + pathos (perasaan) = rasa tidak suka/penolakan perasaan."
  },
  {
    "id": "bimbel_ppu_010",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Pemahaman Istilah & Konsep Sosio-Ekonomi",
    "difficulty": "HOTS",
    "stimulus": "Dalam upaya menekan defisit anggaran, kementerian keuangan mengadopsi instrumen fiskal counter-cyclical guna menstabilkan laju pertumbuhan ekonomi riil.",
    "question": "Istilah 'counter-cyclical' merujuk pada kebijakan fiskal yang...",
    "options": [
      {
        "key": "A",
        "text": "Dijalankan secara berkala setiap lima tahun anggaran berjalan."
      },
      {
        "key": "B",
        "text": "Mendukung siklus ekspansi tanpa memperhatikan cadangan devisa negara."
      },
      {
        "key": "C",
        "text": "Hanya berfokus pada penyaluran bantuan langsung tunai kepada masyarakat miskin."
      },
      {
        "key": "D",
        "text": "Bergerak berlawanan dengan arah tren fluktuasi siklus bisnis guna meredam dampak krisis atau overheating ekonomi."
      },
      {
        "key": "E",
        "text": "Menyerahkan seluruh mekanisme penentuan suku bunga acuan ke pasar bebas."
      }
    ],
    "correctAnswer": "D",
    "explanation": "'Counter-cyclical policy' adalah kebijakan yang dirancang untuk melawan fase siklus ekonomi: bersikap ekspansif saat resesi dan bersikap kontraktif saat ekonomi terlalu panas (overheating).",
    "quickTrick": "🌟 NF Smart Solution: Pahami prefiks 'counter' = berlawanan arah siklus."
  },
  {
    "id": "bimbel_ppu_011",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Diksi & Kosakata Ilmiah",
    "difficulty": "Sedang",
    "stimulus": "Perkembangan bioteknologi modern telah memungkinkan rekayasa genetika secara presisi melalui teknologi CRISPR-Cas9. Terobosan ini mengeliminasi mutasi genetik patogen pada tingkat seluler dengan akurasi tinggi.",
    "question": "Makna kata 'presisi' dalam konteks kutipan teks tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kecepatan proses penyembuhan jaringan biologis."
      },
      {
        "key": "B",
        "text": "Ketepatan atau keakuratan tingkat tinggi dalam pelaksanaan tindakan teknis."
      },
      {
        "key": "C",
        "text": "Kekuatan enzim pembelah rantai asam nukleat."
      },
      {
        "key": "D",
        "text": "Keseragaman ukuran molekul protein hasil sintesis."
      },
      {
        "key": "E",
        "text": "Keterjangkauan biaya riset laboratorium farmasi."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Berdasarkan KBBI dan konteks teks sains kedokteran, kata 'presisi' berarti ketepatan, kejituan, atau keakuratan yang eksak dalam memodifikasi rantai DNA tanpa menimbulkan efek samping off-target.",
    "quickTrick": "🧠 Zenius Core Logic: Kaitkan kata 'presisi' dengan instrumen dan akurasi tinggi pemotongan gen."
  },
  {
    "id": "bimbel_ppu_012",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Relasi Semantik (Antonim Kontekstual)",
    "difficulty": "Sedang",
    "stimulus": "Ekspansi sektor agrikultur di kawasan tropis sering kali berimplikasi pada fragmentasi habitat satwa endemik. Akibatnya, koridor ekologis alami terputus sehingga memicu penurunan keanekaragaman hayati secara drastis.",
    "question": "Antonim kontekstual yang paling tepat untuk kata 'fragmentasi' adalah...",
    "options": [
      {
        "key": "A",
        "text": "Degradasi lingkungan."
      },
      {
        "key": "B",
        "text": "Konservasi sumber daya."
      },
      {
        "key": "C",
        "text": "Eksploitasi terstruktur."
      },
      {
        "key": "D",
        "text": "Diversifikasi hayati."
      },
      {
        "key": "E",
        "text": "Integrasi atau penyatuan kawasan."
      }
    ],
    "correctAnswer": "E",
    "explanation": "'Fragmentasi' berarti pembelahan, pemisahan, atau perpecahan menjadi fragmen-fragmen kecil yang terisolasi. Lawan katanya (antonim) adalah penggabungan, penyatuan, atau integrasi.",
    "quickTrick": "💡 INTEN Quick Concept: Fragment = pecahan -> lawan kata pecahan adalah integrasi/penyatuan menyeluruh."
  },
  {
    "id": "bimbel_ppu_013",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Analisis Ide Pokok & Struktur Teks",
    "difficulty": "HOTS",
    "stimulus": "Fenomena urban sprawl di kota-kota megapolitan menyebabkan ketergantungan berlebih terhadap moda transportasi pribadi. Hal ini tidak hanya memicu kongesti lalu lintas yang parah setiap jam sibuk, tetapi juga mempercepat akumulasi jejak karbon perkotaan.",
    "question": "Gagasan pokok wacana di atas adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penyebab tingginya angka kepemilikan mobil pribadi di kota metropolitan."
      },
      {
        "key": "B",
        "text": "Strategi pemerintah dalam membangun jalan tol lingkar kota modern."
      },
      {
        "key": "C",
        "text": "Dampak negatif dari fenomena perambatan perkotaan (urban sprawl) terhadap transportasi dan lingkungan."
      },
      {
        "key": "D",
        "text": "Perhitungan kuantitatif kenaikan emisi karbon pada sektor transportasi darat."
      },
      {
        "key": "E",
        "text": "Solusi terpadu pengalihan rute kendaraan komersial di kawasan penyangga."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Gagasan pokok mencakup hubungan sebab (urban sprawl) dan akibat ganda yang ditimbulkan (ketergantungan kendaraan pribadi -> kongesti dan emisi karbon).",
    "quickTrick": "👑 Metode The King GO: Cari kalimat utama di awal paragraf (deduktif) yang mengikat seluruh kalimat penjelas berikutnya."
  },
  {
    "id": "bimbel_ppu_014",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Asosiatif & Rasa Bahasa",
    "difficulty": "Sedang",
    "stimulus": "Sikap arogan sang manajer proyek selama rapat koordinasi menimbulkan antipati dari seluruh anggota tim lintas divisi. Alih-alih merangkul gagasan baru, ia justru memotong penjelasan rekan kerjanya dengan nada sinis.",
    "question": "Makna asosiatif kata 'antipati' dalam paragraf tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penolakan emosional berupa rasa enggan, tidak suka, atau prasangka negatif."
      },
      {
        "key": "B",
        "text": "Ketiadaan pemahaman mengenai tugas teknis yang diberikan."
      },
      {
        "key": "C",
        "text": "Kesepakatan diam-diam untuk menunda tenggat waktu proyek."
      },
      {
        "key": "D",
        "text": "Rasa takut akan kehilangan posisi jabatan dalam organisasi."
      },
      {
        "key": "E",
        "text": "Kekaguman yang berlebihan terhadap otoritas kepemimpinan."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kata 'antipati' berakar dari rasa penolakan emosional, kebencian bawah sadar, atau rasa tidak menyukai seseorang karena perlakuan yang tidak menyenangkan.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Anti- (melawan/tidak suka) + pathos (perasaan) = rasa tidak suka/penolakan perasaan."
  },
  {
    "id": "bimbel_ppu_015",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Pemahaman Istilah & Konsep Sosio-Ekonomi",
    "difficulty": "Sedang",
    "stimulus": "Dalam upaya menekan defisit anggaran, kementerian keuangan mengadopsi instrumen fiskal counter-cyclical guna menstabilkan laju pertumbuhan ekonomi riil.",
    "question": "Istilah 'counter-cyclical' merujuk pada kebijakan fiskal yang...",
    "options": [
      {
        "key": "A",
        "text": "Dijalankan secara berkala setiap lima tahun anggaran berjalan."
      },
      {
        "key": "B",
        "text": "Mendukung siklus ekspansi tanpa memperhatikan cadangan devisa negara."
      },
      {
        "key": "C",
        "text": "Hanya berfokus pada penyaluran bantuan langsung tunai kepada masyarakat miskin."
      },
      {
        "key": "D",
        "text": "Bergerak berlawanan dengan arah tren fluktuasi siklus bisnis guna meredam dampak krisis atau overheating ekonomi."
      },
      {
        "key": "E",
        "text": "Menyerahkan seluruh mekanisme penentuan suku bunga acuan ke pasar bebas."
      }
    ],
    "correctAnswer": "D",
    "explanation": "'Counter-cyclical policy' adalah kebijakan yang dirancang untuk melawan fase siklus ekonomi: bersikap ekspansif saat resesi dan bersikap kontraktif saat ekonomi terlalu panas (overheating).",
    "quickTrick": "🚀 Brain Academy Fast Trick: Pahami prefiks 'counter' = berlawanan arah siklus."
  },
  {
    "id": "bimbel_ppu_016",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Diksi & Kosakata Ilmiah",
    "difficulty": "HOTS",
    "stimulus": "Perkembangan bioteknologi modern telah memungkinkan rekayasa genetika secara presisi melalui teknologi CRISPR-Cas9. Terobosan ini mengeliminasi mutasi genetik patogen pada tingkat seluler dengan akurasi tinggi.",
    "question": "Makna kata 'presisi' dalam konteks kutipan teks tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kecepatan proses penyembuhan jaringan biologis."
      },
      {
        "key": "B",
        "text": "Ketepatan atau keakuratan tingkat tinggi dalam pelaksanaan tindakan teknis."
      },
      {
        "key": "C",
        "text": "Kekuatan enzim pembelah rantai asam nukleat."
      },
      {
        "key": "D",
        "text": "Keseragaman ukuran molekul protein hasil sintesis."
      },
      {
        "key": "E",
        "text": "Keterjangkauan biaya riset laboratorium farmasi."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Berdasarkan KBBI dan konteks teks sains kedokteran, kata 'presisi' berarti ketepatan, kejituan, atau keakuratan yang eksak dalam memodifikasi rantai DNA tanpa menimbulkan efek samping off-target.",
    "quickTrick": "🌟 NF Smart Solution: Kaitkan kata 'presisi' dengan instrumen dan akurasi tinggi pemotongan gen."
  },
  {
    "id": "bimbel_ppu_017",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Relasi Semantik (Antonim Kontekstual)",
    "difficulty": "Sedang",
    "stimulus": "Ekspansi sektor agrikultur di kawasan tropis sering kali berimplikasi pada fragmentasi habitat satwa endemik. Akibatnya, koridor ekologis alami terputus sehingga memicu penurunan keanekaragaman hayati secara drastis.",
    "question": "Antonim kontekstual yang paling tepat untuk kata 'fragmentasi' adalah...",
    "options": [
      {
        "key": "A",
        "text": "Degradasi lingkungan."
      },
      {
        "key": "B",
        "text": "Konservasi sumber daya."
      },
      {
        "key": "C",
        "text": "Eksploitasi terstruktur."
      },
      {
        "key": "D",
        "text": "Diversifikasi hayati."
      },
      {
        "key": "E",
        "text": "Integrasi atau penyatuan kawasan."
      }
    ],
    "correctAnswer": "E",
    "explanation": "'Fragmentasi' berarti pembelahan, pemisahan, atau perpecahan menjadi fragmen-fragmen kecil yang terisolasi. Lawan katanya (antonim) adalah penggabungan, penyatuan, atau integrasi.",
    "quickTrick": "🧠 Zenius Core Logic: Fragment = pecahan -> lawan kata pecahan adalah integrasi/penyatuan menyeluruh."
  },
  {
    "id": "bimbel_ppu_018",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Analisis Ide Pokok & Struktur Teks",
    "difficulty": "Sedang",
    "stimulus": "Fenomena urban sprawl di kota-kota megapolitan menyebabkan ketergantungan berlebih terhadap moda transportasi pribadi. Hal ini tidak hanya memicu kongesti lalu lintas yang parah setiap jam sibuk, tetapi juga mempercepat akumulasi jejak karbon perkotaan.",
    "question": "Gagasan pokok wacana di atas adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penyebab tingginya angka kepemilikan mobil pribadi di kota metropolitan."
      },
      {
        "key": "B",
        "text": "Strategi pemerintah dalam membangun jalan tol lingkar kota modern."
      },
      {
        "key": "C",
        "text": "Dampak negatif dari fenomena perambatan perkotaan (urban sprawl) terhadap transportasi dan lingkungan."
      },
      {
        "key": "D",
        "text": "Perhitungan kuantitatif kenaikan emisi karbon pada sektor transportasi darat."
      },
      {
        "key": "E",
        "text": "Solusi terpadu pengalihan rute kendaraan komersial di kawasan penyangga."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Gagasan pokok mencakup hubungan sebab (urban sprawl) dan akibat ganda yang ditimbulkan (ketergantungan kendaraan pribadi -> kongesti dan emisi karbon).",
    "quickTrick": "💡 INTEN Quick Concept: Cari kalimat utama di awal paragraf (deduktif) yang mengikat seluruh kalimat penjelas berikutnya."
  },
  {
    "id": "bimbel_ppu_019",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Asosiatif & Rasa Bahasa",
    "difficulty": "HOTS",
    "stimulus": "Sikap arogan sang manajer proyek selama rapat koordinasi menimbulkan antipati dari seluruh anggota tim lintas divisi. Alih-alih merangkul gagasan baru, ia justru memotong penjelasan rekan kerjanya dengan nada sinis.",
    "question": "Makna asosiatif kata 'antipati' dalam paragraf tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penolakan emosional berupa rasa enggan, tidak suka, atau prasangka negatif."
      },
      {
        "key": "B",
        "text": "Ketiadaan pemahaman mengenai tugas teknis yang diberikan."
      },
      {
        "key": "C",
        "text": "Kesepakatan diam-diam untuk menunda tenggat waktu proyek."
      },
      {
        "key": "D",
        "text": "Rasa takut akan kehilangan posisi jabatan dalam organisasi."
      },
      {
        "key": "E",
        "text": "Kekaguman yang berlebihan terhadap otoritas kepemimpinan."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kata 'antipati' berakar dari rasa penolakan emosional, kebencian bawah sadar, atau rasa tidak menyukai seseorang karena perlakuan yang tidak menyenangkan.",
    "quickTrick": "👑 Metode The King GO: Anti- (melawan/tidak suka) + pathos (perasaan) = rasa tidak suka/penolakan perasaan."
  },
  {
    "id": "bimbel_ppu_020",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Pemahaman Istilah & Konsep Sosio-Ekonomi",
    "difficulty": "Sedang",
    "stimulus": "Dalam upaya menekan defisit anggaran, kementerian keuangan mengadopsi instrumen fiskal counter-cyclical guna menstabilkan laju pertumbuhan ekonomi riil.",
    "question": "Istilah 'counter-cyclical' merujuk pada kebijakan fiskal yang...",
    "options": [
      {
        "key": "A",
        "text": "Dijalankan secara berkala setiap lima tahun anggaran berjalan."
      },
      {
        "key": "B",
        "text": "Mendukung siklus ekspansi tanpa memperhatikan cadangan devisa negara."
      },
      {
        "key": "C",
        "text": "Hanya berfokus pada penyaluran bantuan langsung tunai kepada masyarakat miskin."
      },
      {
        "key": "D",
        "text": "Bergerak berlawanan dengan arah tren fluktuasi siklus bisnis guna meredam dampak krisis atau overheating ekonomi."
      },
      {
        "key": "E",
        "text": "Menyerahkan seluruh mekanisme penentuan suku bunga acuan ke pasar bebas."
      }
    ],
    "correctAnswer": "D",
    "explanation": "'Counter-cyclical policy' adalah kebijakan yang dirancang untuk melawan fase siklus ekonomi: bersikap ekspansif saat resesi dan bersikap kontraktif saat ekonomi terlalu panas (overheating).",
    "quickTrick": "⚡ Langkah Taktis Neutron: Pahami prefiks 'counter' = berlawanan arah siklus."
  },
  {
    "id": "bimbel_ppu_021",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Diksi & Kosakata Ilmiah",
    "difficulty": "Sedang",
    "stimulus": "Perkembangan bioteknologi modern telah memungkinkan rekayasa genetika secara presisi melalui teknologi CRISPR-Cas9. Terobosan ini mengeliminasi mutasi genetik patogen pada tingkat seluler dengan akurasi tinggi.",
    "question": "Makna kata 'presisi' dalam konteks kutipan teks tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kecepatan proses penyembuhan jaringan biologis."
      },
      {
        "key": "B",
        "text": "Ketepatan atau keakuratan tingkat tinggi dalam pelaksanaan tindakan teknis."
      },
      {
        "key": "C",
        "text": "Kekuatan enzim pembelah rantai asam nukleat."
      },
      {
        "key": "D",
        "text": "Keseragaman ukuran molekul protein hasil sintesis."
      },
      {
        "key": "E",
        "text": "Keterjangkauan biaya riset laboratorium farmasi."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Berdasarkan KBBI dan konteks teks sains kedokteran, kata 'presisi' berarti ketepatan, kejituan, atau keakuratan yang eksak dalam memodifikasi rantai DNA tanpa menimbulkan efek samping off-target.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Kaitkan kata 'presisi' dengan instrumen dan akurasi tinggi pemotongan gen."
  },
  {
    "id": "bimbel_ppu_022",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Relasi Semantik (Antonim Kontekstual)",
    "difficulty": "HOTS",
    "stimulus": "Ekspansi sektor agrikultur di kawasan tropis sering kali berimplikasi pada fragmentasi habitat satwa endemik. Akibatnya, koridor ekologis alami terputus sehingga memicu penurunan keanekaragaman hayati secara drastis.",
    "question": "Antonim kontekstual yang paling tepat untuk kata 'fragmentasi' adalah...",
    "options": [
      {
        "key": "A",
        "text": "Degradasi lingkungan."
      },
      {
        "key": "B",
        "text": "Konservasi sumber daya."
      },
      {
        "key": "C",
        "text": "Eksploitasi terstruktur."
      },
      {
        "key": "D",
        "text": "Diversifikasi hayati."
      },
      {
        "key": "E",
        "text": "Integrasi atau penyatuan kawasan."
      }
    ],
    "correctAnswer": "E",
    "explanation": "'Fragmentasi' berarti pembelahan, pemisahan, atau perpecahan menjadi fragmen-fragmen kecil yang terisolasi. Lawan katanya (antonim) adalah penggabungan, penyatuan, atau integrasi.",
    "quickTrick": "🌟 NF Smart Solution: Fragment = pecahan -> lawan kata pecahan adalah integrasi/penyatuan menyeluruh."
  },
  {
    "id": "bimbel_ppu_023",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Analisis Ide Pokok & Struktur Teks",
    "difficulty": "Sedang",
    "stimulus": "Fenomena urban sprawl di kota-kota megapolitan menyebabkan ketergantungan berlebih terhadap moda transportasi pribadi. Hal ini tidak hanya memicu kongesti lalu lintas yang parah setiap jam sibuk, tetapi juga mempercepat akumulasi jejak karbon perkotaan.",
    "question": "Gagasan pokok wacana di atas adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penyebab tingginya angka kepemilikan mobil pribadi di kota metropolitan."
      },
      {
        "key": "B",
        "text": "Strategi pemerintah dalam membangun jalan tol lingkar kota modern."
      },
      {
        "key": "C",
        "text": "Dampak negatif dari fenomena perambatan perkotaan (urban sprawl) terhadap transportasi dan lingkungan."
      },
      {
        "key": "D",
        "text": "Perhitungan kuantitatif kenaikan emisi karbon pada sektor transportasi darat."
      },
      {
        "key": "E",
        "text": "Solusi terpadu pengalihan rute kendaraan komersial di kawasan penyangga."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Gagasan pokok mencakup hubungan sebab (urban sprawl) dan akibat ganda yang ditimbulkan (ketergantungan kendaraan pribadi -> kongesti dan emisi karbon).",
    "quickTrick": "🧠 Zenius Core Logic: Cari kalimat utama di awal paragraf (deduktif) yang mengikat seluruh kalimat penjelas berikutnya."
  },
  {
    "id": "bimbel_ppu_024",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Asosiatif & Rasa Bahasa",
    "difficulty": "Sedang",
    "stimulus": "Sikap arogan sang manajer proyek selama rapat koordinasi menimbulkan antipati dari seluruh anggota tim lintas divisi. Alih-alih merangkul gagasan baru, ia justru memotong penjelasan rekan kerjanya dengan nada sinis.",
    "question": "Makna asosiatif kata 'antipati' dalam paragraf tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penolakan emosional berupa rasa enggan, tidak suka, atau prasangka negatif."
      },
      {
        "key": "B",
        "text": "Ketiadaan pemahaman mengenai tugas teknis yang diberikan."
      },
      {
        "key": "C",
        "text": "Kesepakatan diam-diam untuk menunda tenggat waktu proyek."
      },
      {
        "key": "D",
        "text": "Rasa takut akan kehilangan posisi jabatan dalam organisasi."
      },
      {
        "key": "E",
        "text": "Kekaguman yang berlebihan terhadap otoritas kepemimpinan."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kata 'antipati' berakar dari rasa penolakan emosional, kebencian bawah sadar, atau rasa tidak menyukai seseorang karena perlakuan yang tidak menyenangkan.",
    "quickTrick": "💡 INTEN Quick Concept: Anti- (melawan/tidak suka) + pathos (perasaan) = rasa tidak suka/penolakan perasaan."
  },
  {
    "id": "bimbel_ppu_025",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Pemahaman Istilah & Konsep Sosio-Ekonomi",
    "difficulty": "HOTS",
    "stimulus": "Dalam upaya menekan defisit anggaran, kementerian keuangan mengadopsi instrumen fiskal counter-cyclical guna menstabilkan laju pertumbuhan ekonomi riil.",
    "question": "Istilah 'counter-cyclical' merujuk pada kebijakan fiskal yang...",
    "options": [
      {
        "key": "A",
        "text": "Dijalankan secara berkala setiap lima tahun anggaran berjalan."
      },
      {
        "key": "B",
        "text": "Mendukung siklus ekspansi tanpa memperhatikan cadangan devisa negara."
      },
      {
        "key": "C",
        "text": "Hanya berfokus pada penyaluran bantuan langsung tunai kepada masyarakat miskin."
      },
      {
        "key": "D",
        "text": "Bergerak berlawanan dengan arah tren fluktuasi siklus bisnis guna meredam dampak krisis atau overheating ekonomi."
      },
      {
        "key": "E",
        "text": "Menyerahkan seluruh mekanisme penentuan suku bunga acuan ke pasar bebas."
      }
    ],
    "correctAnswer": "D",
    "explanation": "'Counter-cyclical policy' adalah kebijakan yang dirancang untuk melawan fase siklus ekonomi: bersikap ekspansif saat resesi dan bersikap kontraktif saat ekonomi terlalu panas (overheating).",
    "quickTrick": "👑 Metode The King GO: Pahami prefiks 'counter' = berlawanan arah siklus."
  },
  {
    "id": "bimbel_ppu_026",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Diksi & Kosakata Ilmiah",
    "difficulty": "Sedang",
    "stimulus": "Perkembangan bioteknologi modern telah memungkinkan rekayasa genetika secara presisi melalui teknologi CRISPR-Cas9. Terobosan ini mengeliminasi mutasi genetik patogen pada tingkat seluler dengan akurasi tinggi.",
    "question": "Makna kata 'presisi' dalam konteks kutipan teks tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kecepatan proses penyembuhan jaringan biologis."
      },
      {
        "key": "B",
        "text": "Ketepatan atau keakuratan tingkat tinggi dalam pelaksanaan tindakan teknis."
      },
      {
        "key": "C",
        "text": "Kekuatan enzim pembelah rantai asam nukleat."
      },
      {
        "key": "D",
        "text": "Keseragaman ukuran molekul protein hasil sintesis."
      },
      {
        "key": "E",
        "text": "Keterjangkauan biaya riset laboratorium farmasi."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Berdasarkan KBBI dan konteks teks sains kedokteran, kata 'presisi' berarti ketepatan, kejituan, atau keakuratan yang eksak dalam memodifikasi rantai DNA tanpa menimbulkan efek samping off-target.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Kaitkan kata 'presisi' dengan instrumen dan akurasi tinggi pemotongan gen."
  },
  {
    "id": "bimbel_ppu_027",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Relasi Semantik (Antonim Kontekstual)",
    "difficulty": "Sedang",
    "stimulus": "Ekspansi sektor agrikultur di kawasan tropis sering kali berimplikasi pada fragmentasi habitat satwa endemik. Akibatnya, koridor ekologis alami terputus sehingga memicu penurunan keanekaragaman hayati secara drastis.",
    "question": "Antonim kontekstual yang paling tepat untuk kata 'fragmentasi' adalah...",
    "options": [
      {
        "key": "A",
        "text": "Degradasi lingkungan."
      },
      {
        "key": "B",
        "text": "Konservasi sumber daya."
      },
      {
        "key": "C",
        "text": "Eksploitasi terstruktur."
      },
      {
        "key": "D",
        "text": "Diversifikasi hayati."
      },
      {
        "key": "E",
        "text": "Integrasi atau penyatuan kawasan."
      }
    ],
    "correctAnswer": "E",
    "explanation": "'Fragmentasi' berarti pembelahan, pemisahan, atau perpecahan menjadi fragmen-fragmen kecil yang terisolasi. Lawan katanya (antonim) adalah penggabungan, penyatuan, atau integrasi.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Fragment = pecahan -> lawan kata pecahan adalah integrasi/penyatuan menyeluruh."
  },
  {
    "id": "bimbel_ppu_028",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Analisis Ide Pokok & Struktur Teks",
    "difficulty": "HOTS",
    "stimulus": "Fenomena urban sprawl di kota-kota megapolitan menyebabkan ketergantungan berlebih terhadap moda transportasi pribadi. Hal ini tidak hanya memicu kongesti lalu lintas yang parah setiap jam sibuk, tetapi juga mempercepat akumulasi jejak karbon perkotaan.",
    "question": "Gagasan pokok wacana di atas adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penyebab tingginya angka kepemilikan mobil pribadi di kota metropolitan."
      },
      {
        "key": "B",
        "text": "Strategi pemerintah dalam membangun jalan tol lingkar kota modern."
      },
      {
        "key": "C",
        "text": "Dampak negatif dari fenomena perambatan perkotaan (urban sprawl) terhadap transportasi dan lingkungan."
      },
      {
        "key": "D",
        "text": "Perhitungan kuantitatif kenaikan emisi karbon pada sektor transportasi darat."
      },
      {
        "key": "E",
        "text": "Solusi terpadu pengalihan rute kendaraan komersial di kawasan penyangga."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Gagasan pokok mencakup hubungan sebab (urban sprawl) dan akibat ganda yang ditimbulkan (ketergantungan kendaraan pribadi -> kongesti dan emisi karbon).",
    "quickTrick": "🌟 NF Smart Solution: Cari kalimat utama di awal paragraf (deduktif) yang mengikat seluruh kalimat penjelas berikutnya."
  },
  {
    "id": "bimbel_ppu_029",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Asosiatif & Rasa Bahasa",
    "difficulty": "Sedang",
    "stimulus": "Sikap arogan sang manajer proyek selama rapat koordinasi menimbulkan antipati dari seluruh anggota tim lintas divisi. Alih-alih merangkul gagasan baru, ia justru memotong penjelasan rekan kerjanya dengan nada sinis.",
    "question": "Makna asosiatif kata 'antipati' dalam paragraf tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penolakan emosional berupa rasa enggan, tidak suka, atau prasangka negatif."
      },
      {
        "key": "B",
        "text": "Ketiadaan pemahaman mengenai tugas teknis yang diberikan."
      },
      {
        "key": "C",
        "text": "Kesepakatan diam-diam untuk menunda tenggat waktu proyek."
      },
      {
        "key": "D",
        "text": "Rasa takut akan kehilangan posisi jabatan dalam organisasi."
      },
      {
        "key": "E",
        "text": "Kekaguman yang berlebihan terhadap otoritas kepemimpinan."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kata 'antipati' berakar dari rasa penolakan emosional, kebencian bawah sadar, atau rasa tidak menyukai seseorang karena perlakuan yang tidak menyenangkan.",
    "quickTrick": "🧠 Zenius Core Logic: Anti- (melawan/tidak suka) + pathos (perasaan) = rasa tidak suka/penolakan perasaan."
  },
  {
    "id": "bimbel_ppu_030",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Pemahaman Istilah & Konsep Sosio-Ekonomi",
    "difficulty": "Sedang",
    "stimulus": "Dalam upaya menekan defisit anggaran, kementerian keuangan mengadopsi instrumen fiskal counter-cyclical guna menstabilkan laju pertumbuhan ekonomi riil.",
    "question": "Istilah 'counter-cyclical' merujuk pada kebijakan fiskal yang...",
    "options": [
      {
        "key": "A",
        "text": "Dijalankan secara berkala setiap lima tahun anggaran berjalan."
      },
      {
        "key": "B",
        "text": "Mendukung siklus ekspansi tanpa memperhatikan cadangan devisa negara."
      },
      {
        "key": "C",
        "text": "Hanya berfokus pada penyaluran bantuan langsung tunai kepada masyarakat miskin."
      },
      {
        "key": "D",
        "text": "Bergerak berlawanan dengan arah tren fluktuasi siklus bisnis guna meredam dampak krisis atau overheating ekonomi."
      },
      {
        "key": "E",
        "text": "Menyerahkan seluruh mekanisme penentuan suku bunga acuan ke pasar bebas."
      }
    ],
    "correctAnswer": "D",
    "explanation": "'Counter-cyclical policy' adalah kebijakan yang dirancang untuk melawan fase siklus ekonomi: bersikap ekspansif saat resesi dan bersikap kontraktif saat ekonomi terlalu panas (overheating).",
    "quickTrick": "💡 INTEN Quick Concept: Pahami prefiks 'counter' = berlawanan arah siklus."
  },
  {
    "id": "bimbel_ppu_031",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Diksi & Kosakata Ilmiah",
    "difficulty": "HOTS",
    "stimulus": "Perkembangan bioteknologi modern telah memungkinkan rekayasa genetika secara presisi melalui teknologi CRISPR-Cas9. Terobosan ini mengeliminasi mutasi genetik patogen pada tingkat seluler dengan akurasi tinggi.",
    "question": "Makna kata 'presisi' dalam konteks kutipan teks tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kecepatan proses penyembuhan jaringan biologis."
      },
      {
        "key": "B",
        "text": "Ketepatan atau keakuratan tingkat tinggi dalam pelaksanaan tindakan teknis."
      },
      {
        "key": "C",
        "text": "Kekuatan enzim pembelah rantai asam nukleat."
      },
      {
        "key": "D",
        "text": "Keseragaman ukuran molekul protein hasil sintesis."
      },
      {
        "key": "E",
        "text": "Keterjangkauan biaya riset laboratorium farmasi."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Berdasarkan KBBI dan konteks teks sains kedokteran, kata 'presisi' berarti ketepatan, kejituan, atau keakuratan yang eksak dalam memodifikasi rantai DNA tanpa menimbulkan efek samping off-target.",
    "quickTrick": "👑 Metode The King GO: Kaitkan kata 'presisi' dengan instrumen dan akurasi tinggi pemotongan gen."
  },
  {
    "id": "bimbel_ppu_032",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Relasi Semantik (Antonim Kontekstual)",
    "difficulty": "Sedang",
    "stimulus": "Ekspansi sektor agrikultur di kawasan tropis sering kali berimplikasi pada fragmentasi habitat satwa endemik. Akibatnya, koridor ekologis alami terputus sehingga memicu penurunan keanekaragaman hayati secara drastis.",
    "question": "Antonim kontekstual yang paling tepat untuk kata 'fragmentasi' adalah...",
    "options": [
      {
        "key": "A",
        "text": "Degradasi lingkungan."
      },
      {
        "key": "B",
        "text": "Konservasi sumber daya."
      },
      {
        "key": "C",
        "text": "Eksploitasi terstruktur."
      },
      {
        "key": "D",
        "text": "Diversifikasi hayati."
      },
      {
        "key": "E",
        "text": "Integrasi atau penyatuan kawasan."
      }
    ],
    "correctAnswer": "E",
    "explanation": "'Fragmentasi' berarti pembelahan, pemisahan, atau perpecahan menjadi fragmen-fragmen kecil yang terisolasi. Lawan katanya (antonim) adalah penggabungan, penyatuan, atau integrasi.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Fragment = pecahan -> lawan kata pecahan adalah integrasi/penyatuan menyeluruh."
  },
  {
    "id": "bimbel_ppu_033",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Analisis Ide Pokok & Struktur Teks",
    "difficulty": "Sedang",
    "stimulus": "Fenomena urban sprawl di kota-kota megapolitan menyebabkan ketergantungan berlebih terhadap moda transportasi pribadi. Hal ini tidak hanya memicu kongesti lalu lintas yang parah setiap jam sibuk, tetapi juga mempercepat akumulasi jejak karbon perkotaan.",
    "question": "Gagasan pokok wacana di atas adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penyebab tingginya angka kepemilikan mobil pribadi di kota metropolitan."
      },
      {
        "key": "B",
        "text": "Strategi pemerintah dalam membangun jalan tol lingkar kota modern."
      },
      {
        "key": "C",
        "text": "Dampak negatif dari fenomena perambatan perkotaan (urban sprawl) terhadap transportasi dan lingkungan."
      },
      {
        "key": "D",
        "text": "Perhitungan kuantitatif kenaikan emisi karbon pada sektor transportasi darat."
      },
      {
        "key": "E",
        "text": "Solusi terpadu pengalihan rute kendaraan komersial di kawasan penyangga."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Gagasan pokok mencakup hubungan sebab (urban sprawl) dan akibat ganda yang ditimbulkan (ketergantungan kendaraan pribadi -> kongesti dan emisi karbon).",
    "quickTrick": "🚀 Brain Academy Fast Trick: Cari kalimat utama di awal paragraf (deduktif) yang mengikat seluruh kalimat penjelas berikutnya."
  },
  {
    "id": "bimbel_ppu_034",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Asosiatif & Rasa Bahasa",
    "difficulty": "HOTS",
    "stimulus": "Sikap arogan sang manajer proyek selama rapat koordinasi menimbulkan antipati dari seluruh anggota tim lintas divisi. Alih-alih merangkul gagasan baru, ia justru memotong penjelasan rekan kerjanya dengan nada sinis.",
    "question": "Makna asosiatif kata 'antipati' dalam paragraf tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penolakan emosional berupa rasa enggan, tidak suka, atau prasangka negatif."
      },
      {
        "key": "B",
        "text": "Ketiadaan pemahaman mengenai tugas teknis yang diberikan."
      },
      {
        "key": "C",
        "text": "Kesepakatan diam-diam untuk menunda tenggat waktu proyek."
      },
      {
        "key": "D",
        "text": "Rasa takut akan kehilangan posisi jabatan dalam organisasi."
      },
      {
        "key": "E",
        "text": "Kekaguman yang berlebihan terhadap otoritas kepemimpinan."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kata 'antipati' berakar dari rasa penolakan emosional, kebencian bawah sadar, atau rasa tidak menyukai seseorang karena perlakuan yang tidak menyenangkan.",
    "quickTrick": "🌟 NF Smart Solution: Anti- (melawan/tidak suka) + pathos (perasaan) = rasa tidak suka/penolakan perasaan."
  },
  {
    "id": "bimbel_ppu_035",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Pemahaman Istilah & Konsep Sosio-Ekonomi",
    "difficulty": "Sedang",
    "stimulus": "Dalam upaya menekan defisit anggaran, kementerian keuangan mengadopsi instrumen fiskal counter-cyclical guna menstabilkan laju pertumbuhan ekonomi riil.",
    "question": "Istilah 'counter-cyclical' merujuk pada kebijakan fiskal yang...",
    "options": [
      {
        "key": "A",
        "text": "Dijalankan secara berkala setiap lima tahun anggaran berjalan."
      },
      {
        "key": "B",
        "text": "Mendukung siklus ekspansi tanpa memperhatikan cadangan devisa negara."
      },
      {
        "key": "C",
        "text": "Hanya berfokus pada penyaluran bantuan langsung tunai kepada masyarakat miskin."
      },
      {
        "key": "D",
        "text": "Bergerak berlawanan dengan arah tren fluktuasi siklus bisnis guna meredam dampak krisis atau overheating ekonomi."
      },
      {
        "key": "E",
        "text": "Menyerahkan seluruh mekanisme penentuan suku bunga acuan ke pasar bebas."
      }
    ],
    "correctAnswer": "D",
    "explanation": "'Counter-cyclical policy' adalah kebijakan yang dirancang untuk melawan fase siklus ekonomi: bersikap ekspansif saat resesi dan bersikap kontraktif saat ekonomi terlalu panas (overheating).",
    "quickTrick": "🧠 Zenius Core Logic: Pahami prefiks 'counter' = berlawanan arah siklus."
  },
  {
    "id": "bimbel_ppu_036",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Diksi & Kosakata Ilmiah",
    "difficulty": "Sedang",
    "stimulus": "Perkembangan bioteknologi modern telah memungkinkan rekayasa genetika secara presisi melalui teknologi CRISPR-Cas9. Terobosan ini mengeliminasi mutasi genetik patogen pada tingkat seluler dengan akurasi tinggi.",
    "question": "Makna kata 'presisi' dalam konteks kutipan teks tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kecepatan proses penyembuhan jaringan biologis."
      },
      {
        "key": "B",
        "text": "Ketepatan atau keakuratan tingkat tinggi dalam pelaksanaan tindakan teknis."
      },
      {
        "key": "C",
        "text": "Kekuatan enzim pembelah rantai asam nukleat."
      },
      {
        "key": "D",
        "text": "Keseragaman ukuran molekul protein hasil sintesis."
      },
      {
        "key": "E",
        "text": "Keterjangkauan biaya riset laboratorium farmasi."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Berdasarkan KBBI dan konteks teks sains kedokteran, kata 'presisi' berarti ketepatan, kejituan, atau keakuratan yang eksak dalam memodifikasi rantai DNA tanpa menimbulkan efek samping off-target.",
    "quickTrick": "💡 INTEN Quick Concept: Kaitkan kata 'presisi' dengan instrumen dan akurasi tinggi pemotongan gen."
  },
  {
    "id": "bimbel_ppu_037",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Relasi Semantik (Antonim Kontekstual)",
    "difficulty": "HOTS",
    "stimulus": "Ekspansi sektor agrikultur di kawasan tropis sering kali berimplikasi pada fragmentasi habitat satwa endemik. Akibatnya, koridor ekologis alami terputus sehingga memicu penurunan keanekaragaman hayati secara drastis.",
    "question": "Antonim kontekstual yang paling tepat untuk kata 'fragmentasi' adalah...",
    "options": [
      {
        "key": "A",
        "text": "Degradasi lingkungan."
      },
      {
        "key": "B",
        "text": "Konservasi sumber daya."
      },
      {
        "key": "C",
        "text": "Eksploitasi terstruktur."
      },
      {
        "key": "D",
        "text": "Diversifikasi hayati."
      },
      {
        "key": "E",
        "text": "Integrasi atau penyatuan kawasan."
      }
    ],
    "correctAnswer": "E",
    "explanation": "'Fragmentasi' berarti pembelahan, pemisahan, atau perpecahan menjadi fragmen-fragmen kecil yang terisolasi. Lawan katanya (antonim) adalah penggabungan, penyatuan, atau integrasi.",
    "quickTrick": "👑 Metode The King GO: Fragment = pecahan -> lawan kata pecahan adalah integrasi/penyatuan menyeluruh."
  },
  {
    "id": "bimbel_ppu_038",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Analisis Ide Pokok & Struktur Teks",
    "difficulty": "Sedang",
    "stimulus": "Fenomena urban sprawl di kota-kota megapolitan menyebabkan ketergantungan berlebih terhadap moda transportasi pribadi. Hal ini tidak hanya memicu kongesti lalu lintas yang parah setiap jam sibuk, tetapi juga mempercepat akumulasi jejak karbon perkotaan.",
    "question": "Gagasan pokok wacana di atas adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penyebab tingginya angka kepemilikan mobil pribadi di kota metropolitan."
      },
      {
        "key": "B",
        "text": "Strategi pemerintah dalam membangun jalan tol lingkar kota modern."
      },
      {
        "key": "C",
        "text": "Dampak negatif dari fenomena perambatan perkotaan (urban sprawl) terhadap transportasi dan lingkungan."
      },
      {
        "key": "D",
        "text": "Perhitungan kuantitatif kenaikan emisi karbon pada sektor transportasi darat."
      },
      {
        "key": "E",
        "text": "Solusi terpadu pengalihan rute kendaraan komersial di kawasan penyangga."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Gagasan pokok mencakup hubungan sebab (urban sprawl) dan akibat ganda yang ditimbulkan (ketergantungan kendaraan pribadi -> kongesti dan emisi karbon).",
    "quickTrick": "⚡ Langkah Taktis Neutron: Cari kalimat utama di awal paragraf (deduktif) yang mengikat seluruh kalimat penjelas berikutnya."
  },
  {
    "id": "bimbel_ppu_039",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Asosiatif & Rasa Bahasa",
    "difficulty": "Sedang",
    "stimulus": "Sikap arogan sang manajer proyek selama rapat koordinasi menimbulkan antipati dari seluruh anggota tim lintas divisi. Alih-alih merangkul gagasan baru, ia justru memotong penjelasan rekan kerjanya dengan nada sinis.",
    "question": "Makna asosiatif kata 'antipati' dalam paragraf tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penolakan emosional berupa rasa enggan, tidak suka, atau prasangka negatif."
      },
      {
        "key": "B",
        "text": "Ketiadaan pemahaman mengenai tugas teknis yang diberikan."
      },
      {
        "key": "C",
        "text": "Kesepakatan diam-diam untuk menunda tenggat waktu proyek."
      },
      {
        "key": "D",
        "text": "Rasa takut akan kehilangan posisi jabatan dalam organisasi."
      },
      {
        "key": "E",
        "text": "Kekaguman yang berlebihan terhadap otoritas kepemimpinan."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kata 'antipati' berakar dari rasa penolakan emosional, kebencian bawah sadar, atau rasa tidak menyukai seseorang karena perlakuan yang tidak menyenangkan.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Anti- (melawan/tidak suka) + pathos (perasaan) = rasa tidak suka/penolakan perasaan."
  },
  {
    "id": "bimbel_ppu_040",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Pemahaman Istilah & Konsep Sosio-Ekonomi",
    "difficulty": "HOTS",
    "stimulus": "Dalam upaya menekan defisit anggaran, kementerian keuangan mengadopsi instrumen fiskal counter-cyclical guna menstabilkan laju pertumbuhan ekonomi riil.",
    "question": "Istilah 'counter-cyclical' merujuk pada kebijakan fiskal yang...",
    "options": [
      {
        "key": "A",
        "text": "Dijalankan secara berkala setiap lima tahun anggaran berjalan."
      },
      {
        "key": "B",
        "text": "Mendukung siklus ekspansi tanpa memperhatikan cadangan devisa negara."
      },
      {
        "key": "C",
        "text": "Hanya berfokus pada penyaluran bantuan langsung tunai kepada masyarakat miskin."
      },
      {
        "key": "D",
        "text": "Bergerak berlawanan dengan arah tren fluktuasi siklus bisnis guna meredam dampak krisis atau overheating ekonomi."
      },
      {
        "key": "E",
        "text": "Menyerahkan seluruh mekanisme penentuan suku bunga acuan ke pasar bebas."
      }
    ],
    "correctAnswer": "D",
    "explanation": "'Counter-cyclical policy' adalah kebijakan yang dirancang untuk melawan fase siklus ekonomi: bersikap ekspansif saat resesi dan bersikap kontraktif saat ekonomi terlalu panas (overheating).",
    "quickTrick": "🌟 NF Smart Solution: Pahami prefiks 'counter' = berlawanan arah siklus."
  },
  {
    "id": "bimbel_ppu_041",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Diksi & Kosakata Ilmiah",
    "difficulty": "Sedang",
    "stimulus": "Perkembangan bioteknologi modern telah memungkinkan rekayasa genetika secara presisi melalui teknologi CRISPR-Cas9. Terobosan ini mengeliminasi mutasi genetik patogen pada tingkat seluler dengan akurasi tinggi.",
    "question": "Makna kata 'presisi' dalam konteks kutipan teks tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kecepatan proses penyembuhan jaringan biologis."
      },
      {
        "key": "B",
        "text": "Ketepatan atau keakuratan tingkat tinggi dalam pelaksanaan tindakan teknis."
      },
      {
        "key": "C",
        "text": "Kekuatan enzim pembelah rantai asam nukleat."
      },
      {
        "key": "D",
        "text": "Keseragaman ukuran molekul protein hasil sintesis."
      },
      {
        "key": "E",
        "text": "Keterjangkauan biaya riset laboratorium farmasi."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Berdasarkan KBBI dan konteks teks sains kedokteran, kata 'presisi' berarti ketepatan, kejituan, atau keakuratan yang eksak dalam memodifikasi rantai DNA tanpa menimbulkan efek samping off-target.",
    "quickTrick": "🧠 Zenius Core Logic: Kaitkan kata 'presisi' dengan instrumen dan akurasi tinggi pemotongan gen."
  },
  {
    "id": "bimbel_ppu_042",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Relasi Semantik (Antonim Kontekstual)",
    "difficulty": "Sedang",
    "stimulus": "Ekspansi sektor agrikultur di kawasan tropis sering kali berimplikasi pada fragmentasi habitat satwa endemik. Akibatnya, koridor ekologis alami terputus sehingga memicu penurunan keanekaragaman hayati secara drastis.",
    "question": "Antonim kontekstual yang paling tepat untuk kata 'fragmentasi' adalah...",
    "options": [
      {
        "key": "A",
        "text": "Degradasi lingkungan."
      },
      {
        "key": "B",
        "text": "Konservasi sumber daya."
      },
      {
        "key": "C",
        "text": "Eksploitasi terstruktur."
      },
      {
        "key": "D",
        "text": "Diversifikasi hayati."
      },
      {
        "key": "E",
        "text": "Integrasi atau penyatuan kawasan."
      }
    ],
    "correctAnswer": "E",
    "explanation": "'Fragmentasi' berarti pembelahan, pemisahan, atau perpecahan menjadi fragmen-fragmen kecil yang terisolasi. Lawan katanya (antonim) adalah penggabungan, penyatuan, atau integrasi.",
    "quickTrick": "💡 INTEN Quick Concept: Fragment = pecahan -> lawan kata pecahan adalah integrasi/penyatuan menyeluruh."
  },
  {
    "id": "bimbel_ppu_043",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Analisis Ide Pokok & Struktur Teks",
    "difficulty": "HOTS",
    "stimulus": "Fenomena urban sprawl di kota-kota megapolitan menyebabkan ketergantungan berlebih terhadap moda transportasi pribadi. Hal ini tidak hanya memicu kongesti lalu lintas yang parah setiap jam sibuk, tetapi juga mempercepat akumulasi jejak karbon perkotaan.",
    "question": "Gagasan pokok wacana di atas adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penyebab tingginya angka kepemilikan mobil pribadi di kota metropolitan."
      },
      {
        "key": "B",
        "text": "Strategi pemerintah dalam membangun jalan tol lingkar kota modern."
      },
      {
        "key": "C",
        "text": "Dampak negatif dari fenomena perambatan perkotaan (urban sprawl) terhadap transportasi dan lingkungan."
      },
      {
        "key": "D",
        "text": "Perhitungan kuantitatif kenaikan emisi karbon pada sektor transportasi darat."
      },
      {
        "key": "E",
        "text": "Solusi terpadu pengalihan rute kendaraan komersial di kawasan penyangga."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Gagasan pokok mencakup hubungan sebab (urban sprawl) dan akibat ganda yang ditimbulkan (ketergantungan kendaraan pribadi -> kongesti dan emisi karbon).",
    "quickTrick": "👑 Metode The King GO: Cari kalimat utama di awal paragraf (deduktif) yang mengikat seluruh kalimat penjelas berikutnya."
  },
  {
    "id": "bimbel_ppu_044",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Asosiatif & Rasa Bahasa",
    "difficulty": "Sedang",
    "stimulus": "Sikap arogan sang manajer proyek selama rapat koordinasi menimbulkan antipati dari seluruh anggota tim lintas divisi. Alih-alih merangkul gagasan baru, ia justru memotong penjelasan rekan kerjanya dengan nada sinis.",
    "question": "Makna asosiatif kata 'antipati' dalam paragraf tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penolakan emosional berupa rasa enggan, tidak suka, atau prasangka negatif."
      },
      {
        "key": "B",
        "text": "Ketiadaan pemahaman mengenai tugas teknis yang diberikan."
      },
      {
        "key": "C",
        "text": "Kesepakatan diam-diam untuk menunda tenggat waktu proyek."
      },
      {
        "key": "D",
        "text": "Rasa takut akan kehilangan posisi jabatan dalam organisasi."
      },
      {
        "key": "E",
        "text": "Kekaguman yang berlebihan terhadap otoritas kepemimpinan."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kata 'antipati' berakar dari rasa penolakan emosional, kebencian bawah sadar, atau rasa tidak menyukai seseorang karena perlakuan yang tidak menyenangkan.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Anti- (melawan/tidak suka) + pathos (perasaan) = rasa tidak suka/penolakan perasaan."
  },
  {
    "id": "bimbel_ppu_045",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Pemahaman Istilah & Konsep Sosio-Ekonomi",
    "difficulty": "Sedang",
    "stimulus": "Dalam upaya menekan defisit anggaran, kementerian keuangan mengadopsi instrumen fiskal counter-cyclical guna menstabilkan laju pertumbuhan ekonomi riil.",
    "question": "Istilah 'counter-cyclical' merujuk pada kebijakan fiskal yang...",
    "options": [
      {
        "key": "A",
        "text": "Dijalankan secara berkala setiap lima tahun anggaran berjalan."
      },
      {
        "key": "B",
        "text": "Mendukung siklus ekspansi tanpa memperhatikan cadangan devisa negara."
      },
      {
        "key": "C",
        "text": "Hanya berfokus pada penyaluran bantuan langsung tunai kepada masyarakat miskin."
      },
      {
        "key": "D",
        "text": "Bergerak berlawanan dengan arah tren fluktuasi siklus bisnis guna meredam dampak krisis atau overheating ekonomi."
      },
      {
        "key": "E",
        "text": "Menyerahkan seluruh mekanisme penentuan suku bunga acuan ke pasar bebas."
      }
    ],
    "correctAnswer": "D",
    "explanation": "'Counter-cyclical policy' adalah kebijakan yang dirancang untuk melawan fase siklus ekonomi: bersikap ekspansif saat resesi dan bersikap kontraktif saat ekonomi terlalu panas (overheating).",
    "quickTrick": "🚀 Brain Academy Fast Trick: Pahami prefiks 'counter' = berlawanan arah siklus."
  },
  {
    "id": "bimbel_ppu_046",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Diksi & Kosakata Ilmiah",
    "difficulty": "HOTS",
    "stimulus": "Perkembangan bioteknologi modern telah memungkinkan rekayasa genetika secara presisi melalui teknologi CRISPR-Cas9. Terobosan ini mengeliminasi mutasi genetik patogen pada tingkat seluler dengan akurasi tinggi.",
    "question": "Makna kata 'presisi' dalam konteks kutipan teks tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kecepatan proses penyembuhan jaringan biologis."
      },
      {
        "key": "B",
        "text": "Ketepatan atau keakuratan tingkat tinggi dalam pelaksanaan tindakan teknis."
      },
      {
        "key": "C",
        "text": "Kekuatan enzim pembelah rantai asam nukleat."
      },
      {
        "key": "D",
        "text": "Keseragaman ukuran molekul protein hasil sintesis."
      },
      {
        "key": "E",
        "text": "Keterjangkauan biaya riset laboratorium farmasi."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Berdasarkan KBBI dan konteks teks sains kedokteran, kata 'presisi' berarti ketepatan, kejituan, atau keakuratan yang eksak dalam memodifikasi rantai DNA tanpa menimbulkan efek samping off-target.",
    "quickTrick": "🌟 NF Smart Solution: Kaitkan kata 'presisi' dengan instrumen dan akurasi tinggi pemotongan gen."
  },
  {
    "id": "bimbel_ppu_047",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Relasi Semantik (Antonim Kontekstual)",
    "difficulty": "Sedang",
    "stimulus": "Ekspansi sektor agrikultur di kawasan tropis sering kali berimplikasi pada fragmentasi habitat satwa endemik. Akibatnya, koridor ekologis alami terputus sehingga memicu penurunan keanekaragaman hayati secara drastis.",
    "question": "Antonim kontekstual yang paling tepat untuk kata 'fragmentasi' adalah...",
    "options": [
      {
        "key": "A",
        "text": "Degradasi lingkungan."
      },
      {
        "key": "B",
        "text": "Konservasi sumber daya."
      },
      {
        "key": "C",
        "text": "Eksploitasi terstruktur."
      },
      {
        "key": "D",
        "text": "Diversifikasi hayati."
      },
      {
        "key": "E",
        "text": "Integrasi atau penyatuan kawasan."
      }
    ],
    "correctAnswer": "E",
    "explanation": "'Fragmentasi' berarti pembelahan, pemisahan, atau perpecahan menjadi fragmen-fragmen kecil yang terisolasi. Lawan katanya (antonim) adalah penggabungan, penyatuan, atau integrasi.",
    "quickTrick": "🧠 Zenius Core Logic: Fragment = pecahan -> lawan kata pecahan adalah integrasi/penyatuan menyeluruh."
  },
  {
    "id": "bimbel_ppu_048",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Analisis Ide Pokok & Struktur Teks",
    "difficulty": "Sedang",
    "stimulus": "Fenomena urban sprawl di kota-kota megapolitan menyebabkan ketergantungan berlebih terhadap moda transportasi pribadi. Hal ini tidak hanya memicu kongesti lalu lintas yang parah setiap jam sibuk, tetapi juga mempercepat akumulasi jejak karbon perkotaan.",
    "question": "Gagasan pokok wacana di atas adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penyebab tingginya angka kepemilikan mobil pribadi di kota metropolitan."
      },
      {
        "key": "B",
        "text": "Strategi pemerintah dalam membangun jalan tol lingkar kota modern."
      },
      {
        "key": "C",
        "text": "Dampak negatif dari fenomena perambatan perkotaan (urban sprawl) terhadap transportasi dan lingkungan."
      },
      {
        "key": "D",
        "text": "Perhitungan kuantitatif kenaikan emisi karbon pada sektor transportasi darat."
      },
      {
        "key": "E",
        "text": "Solusi terpadu pengalihan rute kendaraan komersial di kawasan penyangga."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Gagasan pokok mencakup hubungan sebab (urban sprawl) dan akibat ganda yang ditimbulkan (ketergantungan kendaraan pribadi -> kongesti dan emisi karbon).",
    "quickTrick": "💡 INTEN Quick Concept: Cari kalimat utama di awal paragraf (deduktif) yang mengikat seluruh kalimat penjelas berikutnya."
  },
  {
    "id": "bimbel_ppu_049",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Asosiatif & Rasa Bahasa",
    "difficulty": "HOTS",
    "stimulus": "Sikap arogan sang manajer proyek selama rapat koordinasi menimbulkan antipati dari seluruh anggota tim lintas divisi. Alih-alih merangkul gagasan baru, ia justru memotong penjelasan rekan kerjanya dengan nada sinis.",
    "question": "Makna asosiatif kata 'antipati' dalam paragraf tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penolakan emosional berupa rasa enggan, tidak suka, atau prasangka negatif."
      },
      {
        "key": "B",
        "text": "Ketiadaan pemahaman mengenai tugas teknis yang diberikan."
      },
      {
        "key": "C",
        "text": "Kesepakatan diam-diam untuk menunda tenggat waktu proyek."
      },
      {
        "key": "D",
        "text": "Rasa takut akan kehilangan posisi jabatan dalam organisasi."
      },
      {
        "key": "E",
        "text": "Kekaguman yang berlebihan terhadap otoritas kepemimpinan."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kata 'antipati' berakar dari rasa penolakan emosional, kebencian bawah sadar, atau rasa tidak menyukai seseorang karena perlakuan yang tidak menyenangkan.",
    "quickTrick": "👑 Metode The King GO: Anti- (melawan/tidak suka) + pathos (perasaan) = rasa tidak suka/penolakan perasaan."
  },
  {
    "id": "bimbel_ppu_050",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Pemahaman Istilah & Konsep Sosio-Ekonomi",
    "difficulty": "Sedang",
    "stimulus": "Dalam upaya menekan defisit anggaran, kementerian keuangan mengadopsi instrumen fiskal counter-cyclical guna menstabilkan laju pertumbuhan ekonomi riil.",
    "question": "Istilah 'counter-cyclical' merujuk pada kebijakan fiskal yang...",
    "options": [
      {
        "key": "A",
        "text": "Dijalankan secara berkala setiap lima tahun anggaran berjalan."
      },
      {
        "key": "B",
        "text": "Mendukung siklus ekspansi tanpa memperhatikan cadangan devisa negara."
      },
      {
        "key": "C",
        "text": "Hanya berfokus pada penyaluran bantuan langsung tunai kepada masyarakat miskin."
      },
      {
        "key": "D",
        "text": "Bergerak berlawanan dengan arah tren fluktuasi siklus bisnis guna meredam dampak krisis atau overheating ekonomi."
      },
      {
        "key": "E",
        "text": "Menyerahkan seluruh mekanisme penentuan suku bunga acuan ke pasar bebas."
      }
    ],
    "correctAnswer": "D",
    "explanation": "'Counter-cyclical policy' adalah kebijakan yang dirancang untuk melawan fase siklus ekonomi: bersikap ekspansif saat resesi dan bersikap kontraktif saat ekonomi terlalu panas (overheating).",
    "quickTrick": "⚡ Langkah Taktis Neutron: Pahami prefiks 'counter' = berlawanan arah siklus."
  },
  {
    "id": "bimbel_ppu_051",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Diksi & Kosakata Ilmiah",
    "difficulty": "Sedang",
    "stimulus": "Perkembangan bioteknologi modern telah memungkinkan rekayasa genetika secara presisi melalui teknologi CRISPR-Cas9. Terobosan ini mengeliminasi mutasi genetik patogen pada tingkat seluler dengan akurasi tinggi.",
    "question": "Makna kata 'presisi' dalam konteks kutipan teks tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kecepatan proses penyembuhan jaringan biologis."
      },
      {
        "key": "B",
        "text": "Ketepatan atau keakuratan tingkat tinggi dalam pelaksanaan tindakan teknis."
      },
      {
        "key": "C",
        "text": "Kekuatan enzim pembelah rantai asam nukleat."
      },
      {
        "key": "D",
        "text": "Keseragaman ukuran molekul protein hasil sintesis."
      },
      {
        "key": "E",
        "text": "Keterjangkauan biaya riset laboratorium farmasi."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Berdasarkan KBBI dan konteks teks sains kedokteran, kata 'presisi' berarti ketepatan, kejituan, atau keakuratan yang eksak dalam memodifikasi rantai DNA tanpa menimbulkan efek samping off-target.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Kaitkan kata 'presisi' dengan instrumen dan akurasi tinggi pemotongan gen."
  },
  {
    "id": "bimbel_ppu_052",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Relasi Semantik (Antonim Kontekstual)",
    "difficulty": "HOTS",
    "stimulus": "Ekspansi sektor agrikultur di kawasan tropis sering kali berimplikasi pada fragmentasi habitat satwa endemik. Akibatnya, koridor ekologis alami terputus sehingga memicu penurunan keanekaragaman hayati secara drastis.",
    "question": "Antonim kontekstual yang paling tepat untuk kata 'fragmentasi' adalah...",
    "options": [
      {
        "key": "A",
        "text": "Degradasi lingkungan."
      },
      {
        "key": "B",
        "text": "Konservasi sumber daya."
      },
      {
        "key": "C",
        "text": "Eksploitasi terstruktur."
      },
      {
        "key": "D",
        "text": "Diversifikasi hayati."
      },
      {
        "key": "E",
        "text": "Integrasi atau penyatuan kawasan."
      }
    ],
    "correctAnswer": "E",
    "explanation": "'Fragmentasi' berarti pembelahan, pemisahan, atau perpecahan menjadi fragmen-fragmen kecil yang terisolasi. Lawan katanya (antonim) adalah penggabungan, penyatuan, atau integrasi.",
    "quickTrick": "🌟 NF Smart Solution: Fragment = pecahan -> lawan kata pecahan adalah integrasi/penyatuan menyeluruh."
  },
  {
    "id": "bimbel_ppu_053",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Analisis Ide Pokok & Struktur Teks",
    "difficulty": "Sedang",
    "stimulus": "Fenomena urban sprawl di kota-kota megapolitan menyebabkan ketergantungan berlebih terhadap moda transportasi pribadi. Hal ini tidak hanya memicu kongesti lalu lintas yang parah setiap jam sibuk, tetapi juga mempercepat akumulasi jejak karbon perkotaan.",
    "question": "Gagasan pokok wacana di atas adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penyebab tingginya angka kepemilikan mobil pribadi di kota metropolitan."
      },
      {
        "key": "B",
        "text": "Strategi pemerintah dalam membangun jalan tol lingkar kota modern."
      },
      {
        "key": "C",
        "text": "Dampak negatif dari fenomena perambatan perkotaan (urban sprawl) terhadap transportasi dan lingkungan."
      },
      {
        "key": "D",
        "text": "Perhitungan kuantitatif kenaikan emisi karbon pada sektor transportasi darat."
      },
      {
        "key": "E",
        "text": "Solusi terpadu pengalihan rute kendaraan komersial di kawasan penyangga."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Gagasan pokok mencakup hubungan sebab (urban sprawl) dan akibat ganda yang ditimbulkan (ketergantungan kendaraan pribadi -> kongesti dan emisi karbon).",
    "quickTrick": "🧠 Zenius Core Logic: Cari kalimat utama di awal paragraf (deduktif) yang mengikat seluruh kalimat penjelas berikutnya."
  },
  {
    "id": "bimbel_ppu_054",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Asosiatif & Rasa Bahasa",
    "difficulty": "Sedang",
    "stimulus": "Sikap arogan sang manajer proyek selama rapat koordinasi menimbulkan antipati dari seluruh anggota tim lintas divisi. Alih-alih merangkul gagasan baru, ia justru memotong penjelasan rekan kerjanya dengan nada sinis.",
    "question": "Makna asosiatif kata 'antipati' dalam paragraf tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penolakan emosional berupa rasa enggan, tidak suka, atau prasangka negatif."
      },
      {
        "key": "B",
        "text": "Ketiadaan pemahaman mengenai tugas teknis yang diberikan."
      },
      {
        "key": "C",
        "text": "Kesepakatan diam-diam untuk menunda tenggat waktu proyek."
      },
      {
        "key": "D",
        "text": "Rasa takut akan kehilangan posisi jabatan dalam organisasi."
      },
      {
        "key": "E",
        "text": "Kekaguman yang berlebihan terhadap otoritas kepemimpinan."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kata 'antipati' berakar dari rasa penolakan emosional, kebencian bawah sadar, atau rasa tidak menyukai seseorang karena perlakuan yang tidak menyenangkan.",
    "quickTrick": "💡 INTEN Quick Concept: Anti- (melawan/tidak suka) + pathos (perasaan) = rasa tidak suka/penolakan perasaan."
  },
  {
    "id": "bimbel_ppu_055",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Pemahaman Istilah & Konsep Sosio-Ekonomi",
    "difficulty": "HOTS",
    "stimulus": "Dalam upaya menekan defisit anggaran, kementerian keuangan mengadopsi instrumen fiskal counter-cyclical guna menstabilkan laju pertumbuhan ekonomi riil.",
    "question": "Istilah 'counter-cyclical' merujuk pada kebijakan fiskal yang...",
    "options": [
      {
        "key": "A",
        "text": "Dijalankan secara berkala setiap lima tahun anggaran berjalan."
      },
      {
        "key": "B",
        "text": "Mendukung siklus ekspansi tanpa memperhatikan cadangan devisa negara."
      },
      {
        "key": "C",
        "text": "Hanya berfokus pada penyaluran bantuan langsung tunai kepada masyarakat miskin."
      },
      {
        "key": "D",
        "text": "Bergerak berlawanan dengan arah tren fluktuasi siklus bisnis guna meredam dampak krisis atau overheating ekonomi."
      },
      {
        "key": "E",
        "text": "Menyerahkan seluruh mekanisme penentuan suku bunga acuan ke pasar bebas."
      }
    ],
    "correctAnswer": "D",
    "explanation": "'Counter-cyclical policy' adalah kebijakan yang dirancang untuk melawan fase siklus ekonomi: bersikap ekspansif saat resesi dan bersikap kontraktif saat ekonomi terlalu panas (overheating).",
    "quickTrick": "👑 Metode The King GO: Pahami prefiks 'counter' = berlawanan arah siklus."
  },
  {
    "id": "bimbel_ppu_056",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Diksi & Kosakata Ilmiah",
    "difficulty": "Sedang",
    "stimulus": "Perkembangan bioteknologi modern telah memungkinkan rekayasa genetika secara presisi melalui teknologi CRISPR-Cas9. Terobosan ini mengeliminasi mutasi genetik patogen pada tingkat seluler dengan akurasi tinggi.",
    "question": "Makna kata 'presisi' dalam konteks kutipan teks tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kecepatan proses penyembuhan jaringan biologis."
      },
      {
        "key": "B",
        "text": "Ketepatan atau keakuratan tingkat tinggi dalam pelaksanaan tindakan teknis."
      },
      {
        "key": "C",
        "text": "Kekuatan enzim pembelah rantai asam nukleat."
      },
      {
        "key": "D",
        "text": "Keseragaman ukuran molekul protein hasil sintesis."
      },
      {
        "key": "E",
        "text": "Keterjangkauan biaya riset laboratorium farmasi."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Berdasarkan KBBI dan konteks teks sains kedokteran, kata 'presisi' berarti ketepatan, kejituan, atau keakuratan yang eksak dalam memodifikasi rantai DNA tanpa menimbulkan efek samping off-target.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Kaitkan kata 'presisi' dengan instrumen dan akurasi tinggi pemotongan gen."
  },
  {
    "id": "bimbel_ppu_057",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Relasi Semantik (Antonim Kontekstual)",
    "difficulty": "Sedang",
    "stimulus": "Ekspansi sektor agrikultur di kawasan tropis sering kali berimplikasi pada fragmentasi habitat satwa endemik. Akibatnya, koridor ekologis alami terputus sehingga memicu penurunan keanekaragaman hayati secara drastis.",
    "question": "Antonim kontekstual yang paling tepat untuk kata 'fragmentasi' adalah...",
    "options": [
      {
        "key": "A",
        "text": "Degradasi lingkungan."
      },
      {
        "key": "B",
        "text": "Konservasi sumber daya."
      },
      {
        "key": "C",
        "text": "Eksploitasi terstruktur."
      },
      {
        "key": "D",
        "text": "Diversifikasi hayati."
      },
      {
        "key": "E",
        "text": "Integrasi atau penyatuan kawasan."
      }
    ],
    "correctAnswer": "E",
    "explanation": "'Fragmentasi' berarti pembelahan, pemisahan, atau perpecahan menjadi fragmen-fragmen kecil yang terisolasi. Lawan katanya (antonim) adalah penggabungan, penyatuan, atau integrasi.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Fragment = pecahan -> lawan kata pecahan adalah integrasi/penyatuan menyeluruh."
  },
  {
    "id": "bimbel_ppu_058",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Analisis Ide Pokok & Struktur Teks",
    "difficulty": "HOTS",
    "stimulus": "Fenomena urban sprawl di kota-kota megapolitan menyebabkan ketergantungan berlebih terhadap moda transportasi pribadi. Hal ini tidak hanya memicu kongesti lalu lintas yang parah setiap jam sibuk, tetapi juga mempercepat akumulasi jejak karbon perkotaan.",
    "question": "Gagasan pokok wacana di atas adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penyebab tingginya angka kepemilikan mobil pribadi di kota metropolitan."
      },
      {
        "key": "B",
        "text": "Strategi pemerintah dalam membangun jalan tol lingkar kota modern."
      },
      {
        "key": "C",
        "text": "Dampak negatif dari fenomena perambatan perkotaan (urban sprawl) terhadap transportasi dan lingkungan."
      },
      {
        "key": "D",
        "text": "Perhitungan kuantitatif kenaikan emisi karbon pada sektor transportasi darat."
      },
      {
        "key": "E",
        "text": "Solusi terpadu pengalihan rute kendaraan komersial di kawasan penyangga."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Gagasan pokok mencakup hubungan sebab (urban sprawl) dan akibat ganda yang ditimbulkan (ketergantungan kendaraan pribadi -> kongesti dan emisi karbon).",
    "quickTrick": "🌟 NF Smart Solution: Cari kalimat utama di awal paragraf (deduktif) yang mengikat seluruh kalimat penjelas berikutnya."
  },
  {
    "id": "bimbel_ppu_059",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Asosiatif & Rasa Bahasa",
    "difficulty": "Sedang",
    "stimulus": "Sikap arogan sang manajer proyek selama rapat koordinasi menimbulkan antipati dari seluruh anggota tim lintas divisi. Alih-alih merangkul gagasan baru, ia justru memotong penjelasan rekan kerjanya dengan nada sinis.",
    "question": "Makna asosiatif kata 'antipati' dalam paragraf tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penolakan emosional berupa rasa enggan, tidak suka, atau prasangka negatif."
      },
      {
        "key": "B",
        "text": "Ketiadaan pemahaman mengenai tugas teknis yang diberikan."
      },
      {
        "key": "C",
        "text": "Kesepakatan diam-diam untuk menunda tenggat waktu proyek."
      },
      {
        "key": "D",
        "text": "Rasa takut akan kehilangan posisi jabatan dalam organisasi."
      },
      {
        "key": "E",
        "text": "Kekaguman yang berlebihan terhadap otoritas kepemimpinan."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kata 'antipati' berakar dari rasa penolakan emosional, kebencian bawah sadar, atau rasa tidak menyukai seseorang karena perlakuan yang tidak menyenangkan.",
    "quickTrick": "🧠 Zenius Core Logic: Anti- (melawan/tidak suka) + pathos (perasaan) = rasa tidak suka/penolakan perasaan."
  },
  {
    "id": "bimbel_ppu_060",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Pemahaman Istilah & Konsep Sosio-Ekonomi",
    "difficulty": "Sedang",
    "stimulus": "Dalam upaya menekan defisit anggaran, kementerian keuangan mengadopsi instrumen fiskal counter-cyclical guna menstabilkan laju pertumbuhan ekonomi riil.",
    "question": "Istilah 'counter-cyclical' merujuk pada kebijakan fiskal yang...",
    "options": [
      {
        "key": "A",
        "text": "Dijalankan secara berkala setiap lima tahun anggaran berjalan."
      },
      {
        "key": "B",
        "text": "Mendukung siklus ekspansi tanpa memperhatikan cadangan devisa negara."
      },
      {
        "key": "C",
        "text": "Hanya berfokus pada penyaluran bantuan langsung tunai kepada masyarakat miskin."
      },
      {
        "key": "D",
        "text": "Bergerak berlawanan dengan arah tren fluktuasi siklus bisnis guna meredam dampak krisis atau overheating ekonomi."
      },
      {
        "key": "E",
        "text": "Menyerahkan seluruh mekanisme penentuan suku bunga acuan ke pasar bebas."
      }
    ],
    "correctAnswer": "D",
    "explanation": "'Counter-cyclical policy' adalah kebijakan yang dirancang untuk melawan fase siklus ekonomi: bersikap ekspansif saat resesi dan bersikap kontraktif saat ekonomi terlalu panas (overheating).",
    "quickTrick": "💡 INTEN Quick Concept: Pahami prefiks 'counter' = berlawanan arah siklus."
  },
  {
    "id": "bimbel_ppu_061",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Diksi & Kosakata Ilmiah",
    "difficulty": "HOTS",
    "stimulus": "Perkembangan bioteknologi modern telah memungkinkan rekayasa genetika secara presisi melalui teknologi CRISPR-Cas9. Terobosan ini mengeliminasi mutasi genetik patogen pada tingkat seluler dengan akurasi tinggi.",
    "question": "Makna kata 'presisi' dalam konteks kutipan teks tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kecepatan proses penyembuhan jaringan biologis."
      },
      {
        "key": "B",
        "text": "Ketepatan atau keakuratan tingkat tinggi dalam pelaksanaan tindakan teknis."
      },
      {
        "key": "C",
        "text": "Kekuatan enzim pembelah rantai asam nukleat."
      },
      {
        "key": "D",
        "text": "Keseragaman ukuran molekul protein hasil sintesis."
      },
      {
        "key": "E",
        "text": "Keterjangkauan biaya riset laboratorium farmasi."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Berdasarkan KBBI dan konteks teks sains kedokteran, kata 'presisi' berarti ketepatan, kejituan, atau keakuratan yang eksak dalam memodifikasi rantai DNA tanpa menimbulkan efek samping off-target.",
    "quickTrick": "👑 Metode The King GO: Kaitkan kata 'presisi' dengan instrumen dan akurasi tinggi pemotongan gen."
  },
  {
    "id": "bimbel_ppu_062",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Relasi Semantik (Antonim Kontekstual)",
    "difficulty": "Sedang",
    "stimulus": "Ekspansi sektor agrikultur di kawasan tropis sering kali berimplikasi pada fragmentasi habitat satwa endemik. Akibatnya, koridor ekologis alami terputus sehingga memicu penurunan keanekaragaman hayati secara drastis.",
    "question": "Antonim kontekstual yang paling tepat untuk kata 'fragmentasi' adalah...",
    "options": [
      {
        "key": "A",
        "text": "Degradasi lingkungan."
      },
      {
        "key": "B",
        "text": "Konservasi sumber daya."
      },
      {
        "key": "C",
        "text": "Eksploitasi terstruktur."
      },
      {
        "key": "D",
        "text": "Diversifikasi hayati."
      },
      {
        "key": "E",
        "text": "Integrasi atau penyatuan kawasan."
      }
    ],
    "correctAnswer": "E",
    "explanation": "'Fragmentasi' berarti pembelahan, pemisahan, atau perpecahan menjadi fragmen-fragmen kecil yang terisolasi. Lawan katanya (antonim) adalah penggabungan, penyatuan, atau integrasi.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Fragment = pecahan -> lawan kata pecahan adalah integrasi/penyatuan menyeluruh."
  },
  {
    "id": "bimbel_ppu_063",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Analisis Ide Pokok & Struktur Teks",
    "difficulty": "Sedang",
    "stimulus": "Fenomena urban sprawl di kota-kota megapolitan menyebabkan ketergantungan berlebih terhadap moda transportasi pribadi. Hal ini tidak hanya memicu kongesti lalu lintas yang parah setiap jam sibuk, tetapi juga mempercepat akumulasi jejak karbon perkotaan.",
    "question": "Gagasan pokok wacana di atas adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penyebab tingginya angka kepemilikan mobil pribadi di kota metropolitan."
      },
      {
        "key": "B",
        "text": "Strategi pemerintah dalam membangun jalan tol lingkar kota modern."
      },
      {
        "key": "C",
        "text": "Dampak negatif dari fenomena perambatan perkotaan (urban sprawl) terhadap transportasi dan lingkungan."
      },
      {
        "key": "D",
        "text": "Perhitungan kuantitatif kenaikan emisi karbon pada sektor transportasi darat."
      },
      {
        "key": "E",
        "text": "Solusi terpadu pengalihan rute kendaraan komersial di kawasan penyangga."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Gagasan pokok mencakup hubungan sebab (urban sprawl) dan akibat ganda yang ditimbulkan (ketergantungan kendaraan pribadi -> kongesti dan emisi karbon).",
    "quickTrick": "🚀 Brain Academy Fast Trick: Cari kalimat utama di awal paragraf (deduktif) yang mengikat seluruh kalimat penjelas berikutnya."
  },
  {
    "id": "bimbel_ppu_064",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Asosiatif & Rasa Bahasa",
    "difficulty": "HOTS",
    "stimulus": "Sikap arogan sang manajer proyek selama rapat koordinasi menimbulkan antipati dari seluruh anggota tim lintas divisi. Alih-alih merangkul gagasan baru, ia justru memotong penjelasan rekan kerjanya dengan nada sinis.",
    "question": "Makna asosiatif kata 'antipati' dalam paragraf tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penolakan emosional berupa rasa enggan, tidak suka, atau prasangka negatif."
      },
      {
        "key": "B",
        "text": "Ketiadaan pemahaman mengenai tugas teknis yang diberikan."
      },
      {
        "key": "C",
        "text": "Kesepakatan diam-diam untuk menunda tenggat waktu proyek."
      },
      {
        "key": "D",
        "text": "Rasa takut akan kehilangan posisi jabatan dalam organisasi."
      },
      {
        "key": "E",
        "text": "Kekaguman yang berlebihan terhadap otoritas kepemimpinan."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kata 'antipati' berakar dari rasa penolakan emosional, kebencian bawah sadar, atau rasa tidak menyukai seseorang karena perlakuan yang tidak menyenangkan.",
    "quickTrick": "🌟 NF Smart Solution: Anti- (melawan/tidak suka) + pathos (perasaan) = rasa tidak suka/penolakan perasaan."
  },
  {
    "id": "bimbel_ppu_065",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Pemahaman Istilah & Konsep Sosio-Ekonomi",
    "difficulty": "Sedang",
    "stimulus": "Dalam upaya menekan defisit anggaran, kementerian keuangan mengadopsi instrumen fiskal counter-cyclical guna menstabilkan laju pertumbuhan ekonomi riil.",
    "question": "Istilah 'counter-cyclical' merujuk pada kebijakan fiskal yang...",
    "options": [
      {
        "key": "A",
        "text": "Dijalankan secara berkala setiap lima tahun anggaran berjalan."
      },
      {
        "key": "B",
        "text": "Mendukung siklus ekspansi tanpa memperhatikan cadangan devisa negara."
      },
      {
        "key": "C",
        "text": "Hanya berfokus pada penyaluran bantuan langsung tunai kepada masyarakat miskin."
      },
      {
        "key": "D",
        "text": "Bergerak berlawanan dengan arah tren fluktuasi siklus bisnis guna meredam dampak krisis atau overheating ekonomi."
      },
      {
        "key": "E",
        "text": "Menyerahkan seluruh mekanisme penentuan suku bunga acuan ke pasar bebas."
      }
    ],
    "correctAnswer": "D",
    "explanation": "'Counter-cyclical policy' adalah kebijakan yang dirancang untuk melawan fase siklus ekonomi: bersikap ekspansif saat resesi dan bersikap kontraktif saat ekonomi terlalu panas (overheating).",
    "quickTrick": "🧠 Zenius Core Logic: Pahami prefiks 'counter' = berlawanan arah siklus."
  },
  {
    "id": "bimbel_ppu_066",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Diksi & Kosakata Ilmiah",
    "difficulty": "Sedang",
    "stimulus": "Perkembangan bioteknologi modern telah memungkinkan rekayasa genetika secara presisi melalui teknologi CRISPR-Cas9. Terobosan ini mengeliminasi mutasi genetik patogen pada tingkat seluler dengan akurasi tinggi.",
    "question": "Makna kata 'presisi' dalam konteks kutipan teks tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kecepatan proses penyembuhan jaringan biologis."
      },
      {
        "key": "B",
        "text": "Ketepatan atau keakuratan tingkat tinggi dalam pelaksanaan tindakan teknis."
      },
      {
        "key": "C",
        "text": "Kekuatan enzim pembelah rantai asam nukleat."
      },
      {
        "key": "D",
        "text": "Keseragaman ukuran molekul protein hasil sintesis."
      },
      {
        "key": "E",
        "text": "Keterjangkauan biaya riset laboratorium farmasi."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Berdasarkan KBBI dan konteks teks sains kedokteran, kata 'presisi' berarti ketepatan, kejituan, atau keakuratan yang eksak dalam memodifikasi rantai DNA tanpa menimbulkan efek samping off-target.",
    "quickTrick": "💡 INTEN Quick Concept: Kaitkan kata 'presisi' dengan instrumen dan akurasi tinggi pemotongan gen."
  },
  {
    "id": "bimbel_ppu_067",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Relasi Semantik (Antonim Kontekstual)",
    "difficulty": "HOTS",
    "stimulus": "Ekspansi sektor agrikultur di kawasan tropis sering kali berimplikasi pada fragmentasi habitat satwa endemik. Akibatnya, koridor ekologis alami terputus sehingga memicu penurunan keanekaragaman hayati secara drastis.",
    "question": "Antonim kontekstual yang paling tepat untuk kata 'fragmentasi' adalah...",
    "options": [
      {
        "key": "A",
        "text": "Degradasi lingkungan."
      },
      {
        "key": "B",
        "text": "Konservasi sumber daya."
      },
      {
        "key": "C",
        "text": "Eksploitasi terstruktur."
      },
      {
        "key": "D",
        "text": "Diversifikasi hayati."
      },
      {
        "key": "E",
        "text": "Integrasi atau penyatuan kawasan."
      }
    ],
    "correctAnswer": "E",
    "explanation": "'Fragmentasi' berarti pembelahan, pemisahan, atau perpecahan menjadi fragmen-fragmen kecil yang terisolasi. Lawan katanya (antonim) adalah penggabungan, penyatuan, atau integrasi.",
    "quickTrick": "👑 Metode The King GO: Fragment = pecahan -> lawan kata pecahan adalah integrasi/penyatuan menyeluruh."
  },
  {
    "id": "bimbel_ppu_068",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Analisis Ide Pokok & Struktur Teks",
    "difficulty": "Sedang",
    "stimulus": "Fenomena urban sprawl di kota-kota megapolitan menyebabkan ketergantungan berlebih terhadap moda transportasi pribadi. Hal ini tidak hanya memicu kongesti lalu lintas yang parah setiap jam sibuk, tetapi juga mempercepat akumulasi jejak karbon perkotaan.",
    "question": "Gagasan pokok wacana di atas adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penyebab tingginya angka kepemilikan mobil pribadi di kota metropolitan."
      },
      {
        "key": "B",
        "text": "Strategi pemerintah dalam membangun jalan tol lingkar kota modern."
      },
      {
        "key": "C",
        "text": "Dampak negatif dari fenomena perambatan perkotaan (urban sprawl) terhadap transportasi dan lingkungan."
      },
      {
        "key": "D",
        "text": "Perhitungan kuantitatif kenaikan emisi karbon pada sektor transportasi darat."
      },
      {
        "key": "E",
        "text": "Solusi terpadu pengalihan rute kendaraan komersial di kawasan penyangga."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Gagasan pokok mencakup hubungan sebab (urban sprawl) dan akibat ganda yang ditimbulkan (ketergantungan kendaraan pribadi -> kongesti dan emisi karbon).",
    "quickTrick": "⚡ Langkah Taktis Neutron: Cari kalimat utama di awal paragraf (deduktif) yang mengikat seluruh kalimat penjelas berikutnya."
  },
  {
    "id": "bimbel_ppu_069",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Asosiatif & Rasa Bahasa",
    "difficulty": "Sedang",
    "stimulus": "Sikap arogan sang manajer proyek selama rapat koordinasi menimbulkan antipati dari seluruh anggota tim lintas divisi. Alih-alih merangkul gagasan baru, ia justru memotong penjelasan rekan kerjanya dengan nada sinis.",
    "question": "Makna asosiatif kata 'antipati' dalam paragraf tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penolakan emosional berupa rasa enggan, tidak suka, atau prasangka negatif."
      },
      {
        "key": "B",
        "text": "Ketiadaan pemahaman mengenai tugas teknis yang diberikan."
      },
      {
        "key": "C",
        "text": "Kesepakatan diam-diam untuk menunda tenggat waktu proyek."
      },
      {
        "key": "D",
        "text": "Rasa takut akan kehilangan posisi jabatan dalam organisasi."
      },
      {
        "key": "E",
        "text": "Kekaguman yang berlebihan terhadap otoritas kepemimpinan."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kata 'antipati' berakar dari rasa penolakan emosional, kebencian bawah sadar, atau rasa tidak menyukai seseorang karena perlakuan yang tidak menyenangkan.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Anti- (melawan/tidak suka) + pathos (perasaan) = rasa tidak suka/penolakan perasaan."
  },
  {
    "id": "bimbel_ppu_070",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Pemahaman Istilah & Konsep Sosio-Ekonomi",
    "difficulty": "HOTS",
    "stimulus": "Dalam upaya menekan defisit anggaran, kementerian keuangan mengadopsi instrumen fiskal counter-cyclical guna menstabilkan laju pertumbuhan ekonomi riil.",
    "question": "Istilah 'counter-cyclical' merujuk pada kebijakan fiskal yang...",
    "options": [
      {
        "key": "A",
        "text": "Dijalankan secara berkala setiap lima tahun anggaran berjalan."
      },
      {
        "key": "B",
        "text": "Mendukung siklus ekspansi tanpa memperhatikan cadangan devisa negara."
      },
      {
        "key": "C",
        "text": "Hanya berfokus pada penyaluran bantuan langsung tunai kepada masyarakat miskin."
      },
      {
        "key": "D",
        "text": "Bergerak berlawanan dengan arah tren fluktuasi siklus bisnis guna meredam dampak krisis atau overheating ekonomi."
      },
      {
        "key": "E",
        "text": "Menyerahkan seluruh mekanisme penentuan suku bunga acuan ke pasar bebas."
      }
    ],
    "correctAnswer": "D",
    "explanation": "'Counter-cyclical policy' adalah kebijakan yang dirancang untuk melawan fase siklus ekonomi: bersikap ekspansif saat resesi dan bersikap kontraktif saat ekonomi terlalu panas (overheating).",
    "quickTrick": "🌟 NF Smart Solution: Pahami prefiks 'counter' = berlawanan arah siklus."
  },
  {
    "id": "bimbel_ppu_071",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Diksi & Kosakata Ilmiah",
    "difficulty": "Sedang",
    "stimulus": "Perkembangan bioteknologi modern telah memungkinkan rekayasa genetika secara presisi melalui teknologi CRISPR-Cas9. Terobosan ini mengeliminasi mutasi genetik patogen pada tingkat seluler dengan akurasi tinggi.",
    "question": "Makna kata 'presisi' dalam konteks kutipan teks tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kecepatan proses penyembuhan jaringan biologis."
      },
      {
        "key": "B",
        "text": "Ketepatan atau keakuratan tingkat tinggi dalam pelaksanaan tindakan teknis."
      },
      {
        "key": "C",
        "text": "Kekuatan enzim pembelah rantai asam nukleat."
      },
      {
        "key": "D",
        "text": "Keseragaman ukuran molekul protein hasil sintesis."
      },
      {
        "key": "E",
        "text": "Keterjangkauan biaya riset laboratorium farmasi."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Berdasarkan KBBI dan konteks teks sains kedokteran, kata 'presisi' berarti ketepatan, kejituan, atau keakuratan yang eksak dalam memodifikasi rantai DNA tanpa menimbulkan efek samping off-target.",
    "quickTrick": "🧠 Zenius Core Logic: Kaitkan kata 'presisi' dengan instrumen dan akurasi tinggi pemotongan gen."
  },
  {
    "id": "bimbel_ppu_072",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Relasi Semantik (Antonim Kontekstual)",
    "difficulty": "Sedang",
    "stimulus": "Ekspansi sektor agrikultur di kawasan tropis sering kali berimplikasi pada fragmentasi habitat satwa endemik. Akibatnya, koridor ekologis alami terputus sehingga memicu penurunan keanekaragaman hayati secara drastis.",
    "question": "Antonim kontekstual yang paling tepat untuk kata 'fragmentasi' adalah...",
    "options": [
      {
        "key": "A",
        "text": "Degradasi lingkungan."
      },
      {
        "key": "B",
        "text": "Konservasi sumber daya."
      },
      {
        "key": "C",
        "text": "Eksploitasi terstruktur."
      },
      {
        "key": "D",
        "text": "Diversifikasi hayati."
      },
      {
        "key": "E",
        "text": "Integrasi atau penyatuan kawasan."
      }
    ],
    "correctAnswer": "E",
    "explanation": "'Fragmentasi' berarti pembelahan, pemisahan, atau perpecahan menjadi fragmen-fragmen kecil yang terisolasi. Lawan katanya (antonim) adalah penggabungan, penyatuan, atau integrasi.",
    "quickTrick": "💡 INTEN Quick Concept: Fragment = pecahan -> lawan kata pecahan adalah integrasi/penyatuan menyeluruh."
  },
  {
    "id": "bimbel_ppu_073",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Analisis Ide Pokok & Struktur Teks",
    "difficulty": "HOTS",
    "stimulus": "Fenomena urban sprawl di kota-kota megapolitan menyebabkan ketergantungan berlebih terhadap moda transportasi pribadi. Hal ini tidak hanya memicu kongesti lalu lintas yang parah setiap jam sibuk, tetapi juga mempercepat akumulasi jejak karbon perkotaan.",
    "question": "Gagasan pokok wacana di atas adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penyebab tingginya angka kepemilikan mobil pribadi di kota metropolitan."
      },
      {
        "key": "B",
        "text": "Strategi pemerintah dalam membangun jalan tol lingkar kota modern."
      },
      {
        "key": "C",
        "text": "Dampak negatif dari fenomena perambatan perkotaan (urban sprawl) terhadap transportasi dan lingkungan."
      },
      {
        "key": "D",
        "text": "Perhitungan kuantitatif kenaikan emisi karbon pada sektor transportasi darat."
      },
      {
        "key": "E",
        "text": "Solusi terpadu pengalihan rute kendaraan komersial di kawasan penyangga."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Gagasan pokok mencakup hubungan sebab (urban sprawl) dan akibat ganda yang ditimbulkan (ketergantungan kendaraan pribadi -> kongesti dan emisi karbon).",
    "quickTrick": "👑 Metode The King GO: Cari kalimat utama di awal paragraf (deduktif) yang mengikat seluruh kalimat penjelas berikutnya."
  },
  {
    "id": "bimbel_ppu_074",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Asosiatif & Rasa Bahasa",
    "difficulty": "Sedang",
    "stimulus": "Sikap arogan sang manajer proyek selama rapat koordinasi menimbulkan antipati dari seluruh anggota tim lintas divisi. Alih-alih merangkul gagasan baru, ia justru memotong penjelasan rekan kerjanya dengan nada sinis.",
    "question": "Makna asosiatif kata 'antipati' dalam paragraf tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penolakan emosional berupa rasa enggan, tidak suka, atau prasangka negatif."
      },
      {
        "key": "B",
        "text": "Ketiadaan pemahaman mengenai tugas teknis yang diberikan."
      },
      {
        "key": "C",
        "text": "Kesepakatan diam-diam untuk menunda tenggat waktu proyek."
      },
      {
        "key": "D",
        "text": "Rasa takut akan kehilangan posisi jabatan dalam organisasi."
      },
      {
        "key": "E",
        "text": "Kekaguman yang berlebihan terhadap otoritas kepemimpinan."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kata 'antipati' berakar dari rasa penolakan emosional, kebencian bawah sadar, atau rasa tidak menyukai seseorang karena perlakuan yang tidak menyenangkan.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Anti- (melawan/tidak suka) + pathos (perasaan) = rasa tidak suka/penolakan perasaan."
  },
  {
    "id": "bimbel_ppu_075",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Pemahaman Istilah & Konsep Sosio-Ekonomi",
    "difficulty": "Sedang",
    "stimulus": "Dalam upaya menekan defisit anggaran, kementerian keuangan mengadopsi instrumen fiskal counter-cyclical guna menstabilkan laju pertumbuhan ekonomi riil.",
    "question": "Istilah 'counter-cyclical' merujuk pada kebijakan fiskal yang...",
    "options": [
      {
        "key": "A",
        "text": "Dijalankan secara berkala setiap lima tahun anggaran berjalan."
      },
      {
        "key": "B",
        "text": "Mendukung siklus ekspansi tanpa memperhatikan cadangan devisa negara."
      },
      {
        "key": "C",
        "text": "Hanya berfokus pada penyaluran bantuan langsung tunai kepada masyarakat miskin."
      },
      {
        "key": "D",
        "text": "Bergerak berlawanan dengan arah tren fluktuasi siklus bisnis guna meredam dampak krisis atau overheating ekonomi."
      },
      {
        "key": "E",
        "text": "Menyerahkan seluruh mekanisme penentuan suku bunga acuan ke pasar bebas."
      }
    ],
    "correctAnswer": "D",
    "explanation": "'Counter-cyclical policy' adalah kebijakan yang dirancang untuk melawan fase siklus ekonomi: bersikap ekspansif saat resesi dan bersikap kontraktif saat ekonomi terlalu panas (overheating).",
    "quickTrick": "🚀 Brain Academy Fast Trick: Pahami prefiks 'counter' = berlawanan arah siklus."
  },
  {
    "id": "bimbel_ppu_076",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Diksi & Kosakata Ilmiah",
    "difficulty": "HOTS",
    "stimulus": "Perkembangan bioteknologi modern telah memungkinkan rekayasa genetika secara presisi melalui teknologi CRISPR-Cas9. Terobosan ini mengeliminasi mutasi genetik patogen pada tingkat seluler dengan akurasi tinggi.",
    "question": "Makna kata 'presisi' dalam konteks kutipan teks tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kecepatan proses penyembuhan jaringan biologis."
      },
      {
        "key": "B",
        "text": "Ketepatan atau keakuratan tingkat tinggi dalam pelaksanaan tindakan teknis."
      },
      {
        "key": "C",
        "text": "Kekuatan enzim pembelah rantai asam nukleat."
      },
      {
        "key": "D",
        "text": "Keseragaman ukuran molekul protein hasil sintesis."
      },
      {
        "key": "E",
        "text": "Keterjangkauan biaya riset laboratorium farmasi."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Berdasarkan KBBI dan konteks teks sains kedokteran, kata 'presisi' berarti ketepatan, kejituan, atau keakuratan yang eksak dalam memodifikasi rantai DNA tanpa menimbulkan efek samping off-target.",
    "quickTrick": "🌟 NF Smart Solution: Kaitkan kata 'presisi' dengan instrumen dan akurasi tinggi pemotongan gen."
  },
  {
    "id": "bimbel_ppu_077",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Relasi Semantik (Antonim Kontekstual)",
    "difficulty": "Sedang",
    "stimulus": "Ekspansi sektor agrikultur di kawasan tropis sering kali berimplikasi pada fragmentasi habitat satwa endemik. Akibatnya, koridor ekologis alami terputus sehingga memicu penurunan keanekaragaman hayati secara drastis.",
    "question": "Antonim kontekstual yang paling tepat untuk kata 'fragmentasi' adalah...",
    "options": [
      {
        "key": "A",
        "text": "Degradasi lingkungan."
      },
      {
        "key": "B",
        "text": "Konservasi sumber daya."
      },
      {
        "key": "C",
        "text": "Eksploitasi terstruktur."
      },
      {
        "key": "D",
        "text": "Diversifikasi hayati."
      },
      {
        "key": "E",
        "text": "Integrasi atau penyatuan kawasan."
      }
    ],
    "correctAnswer": "E",
    "explanation": "'Fragmentasi' berarti pembelahan, pemisahan, atau perpecahan menjadi fragmen-fragmen kecil yang terisolasi. Lawan katanya (antonim) adalah penggabungan, penyatuan, atau integrasi.",
    "quickTrick": "🧠 Zenius Core Logic: Fragment = pecahan -> lawan kata pecahan adalah integrasi/penyatuan menyeluruh."
  },
  {
    "id": "bimbel_ppu_078",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Analisis Ide Pokok & Struktur Teks",
    "difficulty": "Sedang",
    "stimulus": "Fenomena urban sprawl di kota-kota megapolitan menyebabkan ketergantungan berlebih terhadap moda transportasi pribadi. Hal ini tidak hanya memicu kongesti lalu lintas yang parah setiap jam sibuk, tetapi juga mempercepat akumulasi jejak karbon perkotaan.",
    "question": "Gagasan pokok wacana di atas adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penyebab tingginya angka kepemilikan mobil pribadi di kota metropolitan."
      },
      {
        "key": "B",
        "text": "Strategi pemerintah dalam membangun jalan tol lingkar kota modern."
      },
      {
        "key": "C",
        "text": "Dampak negatif dari fenomena perambatan perkotaan (urban sprawl) terhadap transportasi dan lingkungan."
      },
      {
        "key": "D",
        "text": "Perhitungan kuantitatif kenaikan emisi karbon pada sektor transportasi darat."
      },
      {
        "key": "E",
        "text": "Solusi terpadu pengalihan rute kendaraan komersial di kawasan penyangga."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Gagasan pokok mencakup hubungan sebab (urban sprawl) dan akibat ganda yang ditimbulkan (ketergantungan kendaraan pribadi -> kongesti dan emisi karbon).",
    "quickTrick": "💡 INTEN Quick Concept: Cari kalimat utama di awal paragraf (deduktif) yang mengikat seluruh kalimat penjelas berikutnya."
  },
  {
    "id": "bimbel_ppu_079",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Makna Asosiatif & Rasa Bahasa",
    "difficulty": "HOTS",
    "stimulus": "Sikap arogan sang manajer proyek selama rapat koordinasi menimbulkan antipati dari seluruh anggota tim lintas divisi. Alih-alih merangkul gagasan baru, ia justru memotong penjelasan rekan kerjanya dengan nada sinis.",
    "question": "Makna asosiatif kata 'antipati' dalam paragraf tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penolakan emosional berupa rasa enggan, tidak suka, atau prasangka negatif."
      },
      {
        "key": "B",
        "text": "Ketiadaan pemahaman mengenai tugas teknis yang diberikan."
      },
      {
        "key": "C",
        "text": "Kesepakatan diam-diam untuk menunda tenggat waktu proyek."
      },
      {
        "key": "D",
        "text": "Rasa takut akan kehilangan posisi jabatan dalam organisasi."
      },
      {
        "key": "E",
        "text": "Kekaguman yang berlebihan terhadap otoritas kepemimpinan."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kata 'antipati' berakar dari rasa penolakan emosional, kebencian bawah sadar, atau rasa tidak menyukai seseorang karena perlakuan yang tidak menyenangkan.",
    "quickTrick": "👑 Metode The King GO: Anti- (melawan/tidak suka) + pathos (perasaan) = rasa tidak suka/penolakan perasaan."
  },
  {
    "id": "bimbel_ppu_080",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "ppu",
    "subtestName": "Pengetahuan & Pemahaman Umum (PPU)",
    "category": "Pemahaman Istilah & Konsep Sosio-Ekonomi",
    "difficulty": "Sedang",
    "stimulus": "Dalam upaya menekan defisit anggaran, kementerian keuangan mengadopsi instrumen fiskal counter-cyclical guna menstabilkan laju pertumbuhan ekonomi riil.",
    "question": "Istilah 'counter-cyclical' merujuk pada kebijakan fiskal yang...",
    "options": [
      {
        "key": "A",
        "text": "Dijalankan secara berkala setiap lima tahun anggaran berjalan."
      },
      {
        "key": "B",
        "text": "Mendukung siklus ekspansi tanpa memperhatikan cadangan devisa negara."
      },
      {
        "key": "C",
        "text": "Hanya berfokus pada penyaluran bantuan langsung tunai kepada masyarakat miskin."
      },
      {
        "key": "D",
        "text": "Bergerak berlawanan dengan arah tren fluktuasi siklus bisnis guna meredam dampak krisis atau overheating ekonomi."
      },
      {
        "key": "E",
        "text": "Menyerahkan seluruh mekanisme penentuan suku bunga acuan ke pasar bebas."
      }
    ],
    "correctAnswer": "D",
    "explanation": "'Counter-cyclical policy' adalah kebijakan yang dirancang untuk melawan fase siklus ekonomi: bersikap ekspansif saat resesi dan bersikap kontraktif saat ekonomi terlalu panas (overheating).",
    "quickTrick": "⚡ Langkah Taktis Neutron: Pahami prefiks 'counter' = berlawanan arah siklus."
  },
  {
    "id": "bimbel_pbm_001",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Ketidakefektifan Sintaksis & Struktur Kalimat",
    "difficulty": "HOTS",
    "stimulus": "(1) Indonesia memiliki potensi energi terbarukan yang sangat masif, seperti tenaga surya dan geotermal. (2) Namun, pemanfaatan sumber energi bersih tersebut masih tergolong rendah karena tingginya biaya investasi awal. (3) Pemerintah tengah merumuskan regulasi tarif khusus agar investor tertarik menanamkan modalnya. (4) Di mana regulasi tersebut diharapkan mampu memangkas hambatan birokrasi perizinan. (5) Dengan demikian, target bauran energi nasional dapat terealisasi secara optimal.",
    "question": "Kalimat yang TIDAK EFEKTIF karena kesalahan penggunaan kata penghubung (konjungtor) yang menjadikannya tidak bersubjek terdapat pada nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(2)"
      },
      {
        "key": "C",
        "text": "(3)"
      },
      {
        "key": "D",
        "text": "(4)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Kalimat (4) diawali dengan konjungsi relatif 'Di mana...', yang menyebabkan kalimat tersebut menjadi anak kalimat yang buntung tanpa induk kalimat (tidak memiliki fungsi Subjek dan Predikat yang mandiri). Perbaikan yang tepat: hilangkan 'Di mana' atau ganti menjadi 'Regulasi tersebut diharapkan...'.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Hindari kalimat mandiri yang diawali dengan kata 'Di mana' atau 'Yang'. Itu menjadikannya klausa terikat tak lengkap."
  },
  {
    "id": "bimbel_pbm_002",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penerapan Ejaan EYD V (Tanda Baca & Gelar)",
    "difficulty": "Sedang",
    "stimulus": "Penulisan tanda baca koma (,) dan huruf kapital pada nama jabatan sering kali mengalami kerancuan di dokumen resmi instansi.",
    "question": "Kalimat berikut yang MEMATUHI kaidah Ejaan Bahasa Indonesia yang Disempurnakan (EYD V) secara tepat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Profesor Bambang Sudrajat, M.Sc., dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "B",
        "text": "Profesor Bambang Sudrajat M.Sc dilantik sebagai rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "C",
        "text": "Profesor Bambang Sudrajat, M.Sc, dilantik sebagai Rektor universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "D",
        "text": "Profesor Bambang Sudrajat, M.Sc. dilantik sebagai rektor Universitas gadjah mada kemarin pagi."
      },
      {
        "key": "E",
        "text": "Profesor Bambang Sudrajat M.Sc. dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Berdasarkan EYD V: (1) Gelar akademik yang mengikuti nama orang diapit oleh tanda koma sebelum dan sesudah gelar jika berada di tengah kalimat; (2) Singkatan gelar dipisah titik (M.Sc.); (3) Nama jabatan yang diikuti nama instansi spesifik ditulis kapital (Rektor Universitas Gadjah Mada).",
    "quickTrick": "🌟 NF Smart Solution: Periksa tanda koma ganda sebelum dan sesudah gelar bila di tengah kalimat, serta titik di setiap inisial gelar."
  },
  {
    "id": "bimbel_pbm_003",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penulisan Kata Baku & Bentuk Terikat",
    "difficulty": "HOTS",
    "stimulus": "Para peneliti muda itu berdiskusi secara mendalam mengenai dampak limbah mikroplastik bagi ekosistem terumbu karang.",
    "question": "Penulisan gabungan kata berikut yang SELURUHNYA BAKU menurut KBBI dan EYD V adalah...",
    "options": [
      {
        "key": "A",
        "text": "tanggungjawab, kerjasama, pasca sarjana, tandatangan"
      },
      {
        "key": "B",
        "text": "tanggung jawab, kerja sama, pasca sarjana, tanda tangan"
      },
      {
        "key": "C",
        "text": "tanggung jawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "D",
        "text": "tanggungjawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "E",
        "text": "tanggung jawab, kerjasama, pascasarjana, tandatangan"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Bentuk dasar 'tanggung jawab', 'kerja sama', dan 'tanda tangan' ditulis terpisah karena tidak mendapat imbuhan gabung (konfiks). Unsur terikat 'pasca-' harus ditulis serangkai dengan kata yang mengikutinya ('pascasarjana').",
    "quickTrick": "🧠 Zenius Core Logic: Kata gabung ditulis pisah kecuali jika mendapat imbuhan awal-akhir sekaligus (pertanggungjawaban) atau memakai bentuk terikat (pasca-, antar-, sub-)."
  },
  {
    "id": "bimbel_pbm_004",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Analisis Fungsi Sintaksis & Struktur Kalimat",
    "difficulty": "Sedang",
    "stimulus": "Kegiatan observasi lapangan tersebut bertujuan untuk mengidentifikasi spesies burung langka di hutan lindung.",
    "question": "Pola kalimat di atas (S-P-O-K) memiliki struktur inti yang sama dengan kalimat...",
    "options": [
      {
        "key": "A",
        "text": "Hujan deras mengguyur seluruh kawasan ibu kota semalaman."
      },
      {
        "key": "B",
        "text": "Anak-anak itu berlarian gembira di sepanjang pantai berpasir putih."
      },
      {
        "key": "C",
        "text": "Buku ensiklopedia sains terbaru itu sangat tebal dan informatif."
      },
      {
        "key": "D",
        "text": "Mereka sedang mendiskusikan masalah keuangan keluarga."
      },
      {
        "key": "E",
        "text": "Tim medis darurat memeriksa puluhan korban gempa di posko kesehatan pengungsian."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Pola kalimat asli: [Kegiatan observasi lapangan tersebut] (S) [bertujuan untuk mengidentifikasi] (P) [spesies burung langka] (O) [di hutan lindung] (K). Kalimat pada opsi yang setara: [Tim medis darurat] (S) [memeriksa] (P) [puluhan korban gempa] (O) [di posko kesehatan pengungsian] (K).",
    "quickTrick": "💡 INTEN Quick Concept: Petakan konstituen dasar kalimat: siapa yang bertindak (S), predikat transitif (P), objek langsung (O), dan keterangan tempat (K)."
  },
  {
    "id": "bimbel_pbm_005",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Kepaduan & Koherensi Paragraf",
    "difficulty": "HOTS",
    "stimulus": "(1) Digitalisasi perbankan mempermudah transaksi masyarakat di berbagai pelosok daerah. (2) Aplikasi mobile banking memungkinkan transfer dana dalam hitungan detik. (3) Keamanan data nasabah harus terus ditingkatkan untuk mencegah kebocoran informasi. (4) Tarif tiket pesawat penerbangan domestik mengalami lonjakan signifikan menjelang hari raya. (5) Edukasi literasi keuangan digital juga mendesak untuk digalakkan kepada generasi lanjut usia.",
    "question": "Kalimat yang sumbang (inkohoren) sehingga merusak keutuhan ide dalam paragraf di atas adalah kalimat nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(4)"
      },
      {
        "key": "C",
        "text": "(2)"
      },
      {
        "key": "D",
        "text": "(3)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Paragraf membahas topik digitalisasi perbankan dan literasi keuangan digital nasabah. Kalimat (4) tiba-tiba membahas lonjakan tarif tiket pesawat, yang sama sekali tidak relevan dengan topik utama (kalimat sumbang).",
    "quickTrick": "👑 Metode The King GO: Cari kalimat yang temanya keluar dari benang merah topik paragraf (out-of-topic)."
  },
  {
    "id": "bimbel_pbm_006",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Ketidakefektifan Sintaksis & Struktur Kalimat",
    "difficulty": "Sedang",
    "stimulus": "(1) Indonesia memiliki potensi energi terbarukan yang sangat masif, seperti tenaga surya dan geotermal. (2) Namun, pemanfaatan sumber energi bersih tersebut masih tergolong rendah karena tingginya biaya investasi awal. (3) Pemerintah tengah merumuskan regulasi tarif khusus agar investor tertarik menanamkan modalnya. (4) Di mana regulasi tersebut diharapkan mampu memangkas hambatan birokrasi perizinan. (5) Dengan demikian, target bauran energi nasional dapat terealisasi secara optimal.",
    "question": "Kalimat yang TIDAK EFEKTIF karena kesalahan penggunaan kata penghubung (konjungtor) yang menjadikannya tidak bersubjek terdapat pada nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(2)"
      },
      {
        "key": "C",
        "text": "(3)"
      },
      {
        "key": "D",
        "text": "(4)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Kalimat (4) diawali dengan konjungsi relatif 'Di mana...', yang menyebabkan kalimat tersebut menjadi anak kalimat yang buntung tanpa induk kalimat (tidak memiliki fungsi Subjek dan Predikat yang mandiri). Perbaikan yang tepat: hilangkan 'Di mana' atau ganti menjadi 'Regulasi tersebut diharapkan...'.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Hindari kalimat mandiri yang diawali dengan kata 'Di mana' atau 'Yang'. Itu menjadikannya klausa terikat tak lengkap."
  },
  {
    "id": "bimbel_pbm_007",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penerapan Ejaan EYD V (Tanda Baca & Gelar)",
    "difficulty": "HOTS",
    "stimulus": "Penulisan tanda baca koma (,) dan huruf kapital pada nama jabatan sering kali mengalami kerancuan di dokumen resmi instansi.",
    "question": "Kalimat berikut yang MEMATUHI kaidah Ejaan Bahasa Indonesia yang Disempurnakan (EYD V) secara tepat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Profesor Bambang Sudrajat, M.Sc., dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "B",
        "text": "Profesor Bambang Sudrajat M.Sc dilantik sebagai rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "C",
        "text": "Profesor Bambang Sudrajat, M.Sc, dilantik sebagai Rektor universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "D",
        "text": "Profesor Bambang Sudrajat, M.Sc. dilantik sebagai rektor Universitas gadjah mada kemarin pagi."
      },
      {
        "key": "E",
        "text": "Profesor Bambang Sudrajat M.Sc. dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Berdasarkan EYD V: (1) Gelar akademik yang mengikuti nama orang diapit oleh tanda koma sebelum dan sesudah gelar jika berada di tengah kalimat; (2) Singkatan gelar dipisah titik (M.Sc.); (3) Nama jabatan yang diikuti nama instansi spesifik ditulis kapital (Rektor Universitas Gadjah Mada).",
    "quickTrick": "🚀 Brain Academy Fast Trick: Periksa tanda koma ganda sebelum dan sesudah gelar bila di tengah kalimat, serta titik di setiap inisial gelar."
  },
  {
    "id": "bimbel_pbm_008",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penulisan Kata Baku & Bentuk Terikat",
    "difficulty": "Sedang",
    "stimulus": "Para peneliti muda itu berdiskusi secara mendalam mengenai dampak limbah mikroplastik bagi ekosistem terumbu karang.",
    "question": "Penulisan gabungan kata berikut yang SELURUHNYA BAKU menurut KBBI dan EYD V adalah...",
    "options": [
      {
        "key": "A",
        "text": "tanggungjawab, kerjasama, pasca sarjana, tandatangan"
      },
      {
        "key": "B",
        "text": "tanggung jawab, kerja sama, pasca sarjana, tanda tangan"
      },
      {
        "key": "C",
        "text": "tanggung jawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "D",
        "text": "tanggungjawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "E",
        "text": "tanggung jawab, kerjasama, pascasarjana, tandatangan"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Bentuk dasar 'tanggung jawab', 'kerja sama', dan 'tanda tangan' ditulis terpisah karena tidak mendapat imbuhan gabung (konfiks). Unsur terikat 'pasca-' harus ditulis serangkai dengan kata yang mengikutinya ('pascasarjana').",
    "quickTrick": "🌟 NF Smart Solution: Kata gabung ditulis pisah kecuali jika mendapat imbuhan awal-akhir sekaligus (pertanggungjawaban) atau memakai bentuk terikat (pasca-, antar-, sub-)."
  },
  {
    "id": "bimbel_pbm_009",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Analisis Fungsi Sintaksis & Struktur Kalimat",
    "difficulty": "HOTS",
    "stimulus": "Kegiatan observasi lapangan tersebut bertujuan untuk mengidentifikasi spesies burung langka di hutan lindung.",
    "question": "Pola kalimat di atas (S-P-O-K) memiliki struktur inti yang sama dengan kalimat...",
    "options": [
      {
        "key": "A",
        "text": "Hujan deras mengguyur seluruh kawasan ibu kota semalaman."
      },
      {
        "key": "B",
        "text": "Anak-anak itu berlarian gembira di sepanjang pantai berpasir putih."
      },
      {
        "key": "C",
        "text": "Buku ensiklopedia sains terbaru itu sangat tebal dan informatif."
      },
      {
        "key": "D",
        "text": "Mereka sedang mendiskusikan masalah keuangan keluarga."
      },
      {
        "key": "E",
        "text": "Tim medis darurat memeriksa puluhan korban gempa di posko kesehatan pengungsian."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Pola kalimat asli: [Kegiatan observasi lapangan tersebut] (S) [bertujuan untuk mengidentifikasi] (P) [spesies burung langka] (O) [di hutan lindung] (K). Kalimat pada opsi yang setara: [Tim medis darurat] (S) [memeriksa] (P) [puluhan korban gempa] (O) [di posko kesehatan pengungsian] (K).",
    "quickTrick": "🧠 Zenius Core Logic: Petakan konstituen dasar kalimat: siapa yang bertindak (S), predikat transitif (P), objek langsung (O), dan keterangan tempat (K)."
  },
  {
    "id": "bimbel_pbm_010",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Kepaduan & Koherensi Paragraf",
    "difficulty": "Sedang",
    "stimulus": "(1) Digitalisasi perbankan mempermudah transaksi masyarakat di berbagai pelosok daerah. (2) Aplikasi mobile banking memungkinkan transfer dana dalam hitungan detik. (3) Keamanan data nasabah harus terus ditingkatkan untuk mencegah kebocoran informasi. (4) Tarif tiket pesawat penerbangan domestik mengalami lonjakan signifikan menjelang hari raya. (5) Edukasi literasi keuangan digital juga mendesak untuk digalakkan kepada generasi lanjut usia.",
    "question": "Kalimat yang sumbang (inkohoren) sehingga merusak keutuhan ide dalam paragraf di atas adalah kalimat nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(4)"
      },
      {
        "key": "C",
        "text": "(2)"
      },
      {
        "key": "D",
        "text": "(3)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Paragraf membahas topik digitalisasi perbankan dan literasi keuangan digital nasabah. Kalimat (4) tiba-tiba membahas lonjakan tarif tiket pesawat, yang sama sekali tidak relevan dengan topik utama (kalimat sumbang).",
    "quickTrick": "💡 INTEN Quick Concept: Cari kalimat yang temanya keluar dari benang merah topik paragraf (out-of-topic)."
  },
  {
    "id": "bimbel_pbm_011",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Ketidakefektifan Sintaksis & Struktur Kalimat",
    "difficulty": "HOTS",
    "stimulus": "(1) Indonesia memiliki potensi energi terbarukan yang sangat masif, seperti tenaga surya dan geotermal. (2) Namun, pemanfaatan sumber energi bersih tersebut masih tergolong rendah karena tingginya biaya investasi awal. (3) Pemerintah tengah merumuskan regulasi tarif khusus agar investor tertarik menanamkan modalnya. (4) Di mana regulasi tersebut diharapkan mampu memangkas hambatan birokrasi perizinan. (5) Dengan demikian, target bauran energi nasional dapat terealisasi secara optimal.",
    "question": "Kalimat yang TIDAK EFEKTIF karena kesalahan penggunaan kata penghubung (konjungtor) yang menjadikannya tidak bersubjek terdapat pada nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(2)"
      },
      {
        "key": "C",
        "text": "(3)"
      },
      {
        "key": "D",
        "text": "(4)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Kalimat (4) diawali dengan konjungsi relatif 'Di mana...', yang menyebabkan kalimat tersebut menjadi anak kalimat yang buntung tanpa induk kalimat (tidak memiliki fungsi Subjek dan Predikat yang mandiri). Perbaikan yang tepat: hilangkan 'Di mana' atau ganti menjadi 'Regulasi tersebut diharapkan...'.",
    "quickTrick": "👑 Metode The King GO: Hindari kalimat mandiri yang diawali dengan kata 'Di mana' atau 'Yang'. Itu menjadikannya klausa terikat tak lengkap."
  },
  {
    "id": "bimbel_pbm_012",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penerapan Ejaan EYD V (Tanda Baca & Gelar)",
    "difficulty": "Sedang",
    "stimulus": "Penulisan tanda baca koma (,) dan huruf kapital pada nama jabatan sering kali mengalami kerancuan di dokumen resmi instansi.",
    "question": "Kalimat berikut yang MEMATUHI kaidah Ejaan Bahasa Indonesia yang Disempurnakan (EYD V) secara tepat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Profesor Bambang Sudrajat, M.Sc., dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "B",
        "text": "Profesor Bambang Sudrajat M.Sc dilantik sebagai rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "C",
        "text": "Profesor Bambang Sudrajat, M.Sc, dilantik sebagai Rektor universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "D",
        "text": "Profesor Bambang Sudrajat, M.Sc. dilantik sebagai rektor Universitas gadjah mada kemarin pagi."
      },
      {
        "key": "E",
        "text": "Profesor Bambang Sudrajat M.Sc. dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Berdasarkan EYD V: (1) Gelar akademik yang mengikuti nama orang diapit oleh tanda koma sebelum dan sesudah gelar jika berada di tengah kalimat; (2) Singkatan gelar dipisah titik (M.Sc.); (3) Nama jabatan yang diikuti nama instansi spesifik ditulis kapital (Rektor Universitas Gadjah Mada).",
    "quickTrick": "⚡ Langkah Taktis Neutron: Periksa tanda koma ganda sebelum dan sesudah gelar bila di tengah kalimat, serta titik di setiap inisial gelar."
  },
  {
    "id": "bimbel_pbm_013",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penulisan Kata Baku & Bentuk Terikat",
    "difficulty": "HOTS",
    "stimulus": "Para peneliti muda itu berdiskusi secara mendalam mengenai dampak limbah mikroplastik bagi ekosistem terumbu karang.",
    "question": "Penulisan gabungan kata berikut yang SELURUHNYA BAKU menurut KBBI dan EYD V adalah...",
    "options": [
      {
        "key": "A",
        "text": "tanggungjawab, kerjasama, pasca sarjana, tandatangan"
      },
      {
        "key": "B",
        "text": "tanggung jawab, kerja sama, pasca sarjana, tanda tangan"
      },
      {
        "key": "C",
        "text": "tanggung jawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "D",
        "text": "tanggungjawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "E",
        "text": "tanggung jawab, kerjasama, pascasarjana, tandatangan"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Bentuk dasar 'tanggung jawab', 'kerja sama', dan 'tanda tangan' ditulis terpisah karena tidak mendapat imbuhan gabung (konfiks). Unsur terikat 'pasca-' harus ditulis serangkai dengan kata yang mengikutinya ('pascasarjana').",
    "quickTrick": "🚀 Brain Academy Fast Trick: Kata gabung ditulis pisah kecuali jika mendapat imbuhan awal-akhir sekaligus (pertanggungjawaban) atau memakai bentuk terikat (pasca-, antar-, sub-)."
  },
  {
    "id": "bimbel_pbm_014",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Analisis Fungsi Sintaksis & Struktur Kalimat",
    "difficulty": "Sedang",
    "stimulus": "Kegiatan observasi lapangan tersebut bertujuan untuk mengidentifikasi spesies burung langka di hutan lindung.",
    "question": "Pola kalimat di atas (S-P-O-K) memiliki struktur inti yang sama dengan kalimat...",
    "options": [
      {
        "key": "A",
        "text": "Hujan deras mengguyur seluruh kawasan ibu kota semalaman."
      },
      {
        "key": "B",
        "text": "Anak-anak itu berlarian gembira di sepanjang pantai berpasir putih."
      },
      {
        "key": "C",
        "text": "Buku ensiklopedia sains terbaru itu sangat tebal dan informatif."
      },
      {
        "key": "D",
        "text": "Mereka sedang mendiskusikan masalah keuangan keluarga."
      },
      {
        "key": "E",
        "text": "Tim medis darurat memeriksa puluhan korban gempa di posko kesehatan pengungsian."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Pola kalimat asli: [Kegiatan observasi lapangan tersebut] (S) [bertujuan untuk mengidentifikasi] (P) [spesies burung langka] (O) [di hutan lindung] (K). Kalimat pada opsi yang setara: [Tim medis darurat] (S) [memeriksa] (P) [puluhan korban gempa] (O) [di posko kesehatan pengungsian] (K).",
    "quickTrick": "🌟 NF Smart Solution: Petakan konstituen dasar kalimat: siapa yang bertindak (S), predikat transitif (P), objek langsung (O), dan keterangan tempat (K)."
  },
  {
    "id": "bimbel_pbm_015",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Kepaduan & Koherensi Paragraf",
    "difficulty": "HOTS",
    "stimulus": "(1) Digitalisasi perbankan mempermudah transaksi masyarakat di berbagai pelosok daerah. (2) Aplikasi mobile banking memungkinkan transfer dana dalam hitungan detik. (3) Keamanan data nasabah harus terus ditingkatkan untuk mencegah kebocoran informasi. (4) Tarif tiket pesawat penerbangan domestik mengalami lonjakan signifikan menjelang hari raya. (5) Edukasi literasi keuangan digital juga mendesak untuk digalakkan kepada generasi lanjut usia.",
    "question": "Kalimat yang sumbang (inkohoren) sehingga merusak keutuhan ide dalam paragraf di atas adalah kalimat nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(4)"
      },
      {
        "key": "C",
        "text": "(2)"
      },
      {
        "key": "D",
        "text": "(3)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Paragraf membahas topik digitalisasi perbankan dan literasi keuangan digital nasabah. Kalimat (4) tiba-tiba membahas lonjakan tarif tiket pesawat, yang sama sekali tidak relevan dengan topik utama (kalimat sumbang).",
    "quickTrick": "🧠 Zenius Core Logic: Cari kalimat yang temanya keluar dari benang merah topik paragraf (out-of-topic)."
  },
  {
    "id": "bimbel_pbm_016",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Ketidakefektifan Sintaksis & Struktur Kalimat",
    "difficulty": "Sedang",
    "stimulus": "(1) Indonesia memiliki potensi energi terbarukan yang sangat masif, seperti tenaga surya dan geotermal. (2) Namun, pemanfaatan sumber energi bersih tersebut masih tergolong rendah karena tingginya biaya investasi awal. (3) Pemerintah tengah merumuskan regulasi tarif khusus agar investor tertarik menanamkan modalnya. (4) Di mana regulasi tersebut diharapkan mampu memangkas hambatan birokrasi perizinan. (5) Dengan demikian, target bauran energi nasional dapat terealisasi secara optimal.",
    "question": "Kalimat yang TIDAK EFEKTIF karena kesalahan penggunaan kata penghubung (konjungtor) yang menjadikannya tidak bersubjek terdapat pada nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(2)"
      },
      {
        "key": "C",
        "text": "(3)"
      },
      {
        "key": "D",
        "text": "(4)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Kalimat (4) diawali dengan konjungsi relatif 'Di mana...', yang menyebabkan kalimat tersebut menjadi anak kalimat yang buntung tanpa induk kalimat (tidak memiliki fungsi Subjek dan Predikat yang mandiri). Perbaikan yang tepat: hilangkan 'Di mana' atau ganti menjadi 'Regulasi tersebut diharapkan...'.",
    "quickTrick": "💡 INTEN Quick Concept: Hindari kalimat mandiri yang diawali dengan kata 'Di mana' atau 'Yang'. Itu menjadikannya klausa terikat tak lengkap."
  },
  {
    "id": "bimbel_pbm_017",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penerapan Ejaan EYD V (Tanda Baca & Gelar)",
    "difficulty": "HOTS",
    "stimulus": "Penulisan tanda baca koma (,) dan huruf kapital pada nama jabatan sering kali mengalami kerancuan di dokumen resmi instansi.",
    "question": "Kalimat berikut yang MEMATUHI kaidah Ejaan Bahasa Indonesia yang Disempurnakan (EYD V) secara tepat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Profesor Bambang Sudrajat, M.Sc., dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "B",
        "text": "Profesor Bambang Sudrajat M.Sc dilantik sebagai rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "C",
        "text": "Profesor Bambang Sudrajat, M.Sc, dilantik sebagai Rektor universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "D",
        "text": "Profesor Bambang Sudrajat, M.Sc. dilantik sebagai rektor Universitas gadjah mada kemarin pagi."
      },
      {
        "key": "E",
        "text": "Profesor Bambang Sudrajat M.Sc. dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Berdasarkan EYD V: (1) Gelar akademik yang mengikuti nama orang diapit oleh tanda koma sebelum dan sesudah gelar jika berada di tengah kalimat; (2) Singkatan gelar dipisah titik (M.Sc.); (3) Nama jabatan yang diikuti nama instansi spesifik ditulis kapital (Rektor Universitas Gadjah Mada).",
    "quickTrick": "👑 Metode The King GO: Periksa tanda koma ganda sebelum dan sesudah gelar bila di tengah kalimat, serta titik di setiap inisial gelar."
  },
  {
    "id": "bimbel_pbm_018",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penulisan Kata Baku & Bentuk Terikat",
    "difficulty": "Sedang",
    "stimulus": "Para peneliti muda itu berdiskusi secara mendalam mengenai dampak limbah mikroplastik bagi ekosistem terumbu karang.",
    "question": "Penulisan gabungan kata berikut yang SELURUHNYA BAKU menurut KBBI dan EYD V adalah...",
    "options": [
      {
        "key": "A",
        "text": "tanggungjawab, kerjasama, pasca sarjana, tandatangan"
      },
      {
        "key": "B",
        "text": "tanggung jawab, kerja sama, pasca sarjana, tanda tangan"
      },
      {
        "key": "C",
        "text": "tanggung jawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "D",
        "text": "tanggungjawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "E",
        "text": "tanggung jawab, kerjasama, pascasarjana, tandatangan"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Bentuk dasar 'tanggung jawab', 'kerja sama', dan 'tanda tangan' ditulis terpisah karena tidak mendapat imbuhan gabung (konfiks). Unsur terikat 'pasca-' harus ditulis serangkai dengan kata yang mengikutinya ('pascasarjana').",
    "quickTrick": "⚡ Langkah Taktis Neutron: Kata gabung ditulis pisah kecuali jika mendapat imbuhan awal-akhir sekaligus (pertanggungjawaban) atau memakai bentuk terikat (pasca-, antar-, sub-)."
  },
  {
    "id": "bimbel_pbm_019",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Analisis Fungsi Sintaksis & Struktur Kalimat",
    "difficulty": "HOTS",
    "stimulus": "Kegiatan observasi lapangan tersebut bertujuan untuk mengidentifikasi spesies burung langka di hutan lindung.",
    "question": "Pola kalimat di atas (S-P-O-K) memiliki struktur inti yang sama dengan kalimat...",
    "options": [
      {
        "key": "A",
        "text": "Hujan deras mengguyur seluruh kawasan ibu kota semalaman."
      },
      {
        "key": "B",
        "text": "Anak-anak itu berlarian gembira di sepanjang pantai berpasir putih."
      },
      {
        "key": "C",
        "text": "Buku ensiklopedia sains terbaru itu sangat tebal dan informatif."
      },
      {
        "key": "D",
        "text": "Mereka sedang mendiskusikan masalah keuangan keluarga."
      },
      {
        "key": "E",
        "text": "Tim medis darurat memeriksa puluhan korban gempa di posko kesehatan pengungsian."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Pola kalimat asli: [Kegiatan observasi lapangan tersebut] (S) [bertujuan untuk mengidentifikasi] (P) [spesies burung langka] (O) [di hutan lindung] (K). Kalimat pada opsi yang setara: [Tim medis darurat] (S) [memeriksa] (P) [puluhan korban gempa] (O) [di posko kesehatan pengungsian] (K).",
    "quickTrick": "🚀 Brain Academy Fast Trick: Petakan konstituen dasar kalimat: siapa yang bertindak (S), predikat transitif (P), objek langsung (O), dan keterangan tempat (K)."
  },
  {
    "id": "bimbel_pbm_020",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Kepaduan & Koherensi Paragraf",
    "difficulty": "Sedang",
    "stimulus": "(1) Digitalisasi perbankan mempermudah transaksi masyarakat di berbagai pelosok daerah. (2) Aplikasi mobile banking memungkinkan transfer dana dalam hitungan detik. (3) Keamanan data nasabah harus terus ditingkatkan untuk mencegah kebocoran informasi. (4) Tarif tiket pesawat penerbangan domestik mengalami lonjakan signifikan menjelang hari raya. (5) Edukasi literasi keuangan digital juga mendesak untuk digalakkan kepada generasi lanjut usia.",
    "question": "Kalimat yang sumbang (inkohoren) sehingga merusak keutuhan ide dalam paragraf di atas adalah kalimat nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(4)"
      },
      {
        "key": "C",
        "text": "(2)"
      },
      {
        "key": "D",
        "text": "(3)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Paragraf membahas topik digitalisasi perbankan dan literasi keuangan digital nasabah. Kalimat (4) tiba-tiba membahas lonjakan tarif tiket pesawat, yang sama sekali tidak relevan dengan topik utama (kalimat sumbang).",
    "quickTrick": "🌟 NF Smart Solution: Cari kalimat yang temanya keluar dari benang merah topik paragraf (out-of-topic)."
  },
  {
    "id": "bimbel_pbm_021",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Ketidakefektifan Sintaksis & Struktur Kalimat",
    "difficulty": "HOTS",
    "stimulus": "(1) Indonesia memiliki potensi energi terbarukan yang sangat masif, seperti tenaga surya dan geotermal. (2) Namun, pemanfaatan sumber energi bersih tersebut masih tergolong rendah karena tingginya biaya investasi awal. (3) Pemerintah tengah merumuskan regulasi tarif khusus agar investor tertarik menanamkan modalnya. (4) Di mana regulasi tersebut diharapkan mampu memangkas hambatan birokrasi perizinan. (5) Dengan demikian, target bauran energi nasional dapat terealisasi secara optimal.",
    "question": "Kalimat yang TIDAK EFEKTIF karena kesalahan penggunaan kata penghubung (konjungtor) yang menjadikannya tidak bersubjek terdapat pada nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(2)"
      },
      {
        "key": "C",
        "text": "(3)"
      },
      {
        "key": "D",
        "text": "(4)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Kalimat (4) diawali dengan konjungsi relatif 'Di mana...', yang menyebabkan kalimat tersebut menjadi anak kalimat yang buntung tanpa induk kalimat (tidak memiliki fungsi Subjek dan Predikat yang mandiri). Perbaikan yang tepat: hilangkan 'Di mana' atau ganti menjadi 'Regulasi tersebut diharapkan...'.",
    "quickTrick": "🧠 Zenius Core Logic: Hindari kalimat mandiri yang diawali dengan kata 'Di mana' atau 'Yang'. Itu menjadikannya klausa terikat tak lengkap."
  },
  {
    "id": "bimbel_pbm_022",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penerapan Ejaan EYD V (Tanda Baca & Gelar)",
    "difficulty": "Sedang",
    "stimulus": "Penulisan tanda baca koma (,) dan huruf kapital pada nama jabatan sering kali mengalami kerancuan di dokumen resmi instansi.",
    "question": "Kalimat berikut yang MEMATUHI kaidah Ejaan Bahasa Indonesia yang Disempurnakan (EYD V) secara tepat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Profesor Bambang Sudrajat, M.Sc., dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "B",
        "text": "Profesor Bambang Sudrajat M.Sc dilantik sebagai rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "C",
        "text": "Profesor Bambang Sudrajat, M.Sc, dilantik sebagai Rektor universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "D",
        "text": "Profesor Bambang Sudrajat, M.Sc. dilantik sebagai rektor Universitas gadjah mada kemarin pagi."
      },
      {
        "key": "E",
        "text": "Profesor Bambang Sudrajat M.Sc. dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Berdasarkan EYD V: (1) Gelar akademik yang mengikuti nama orang diapit oleh tanda koma sebelum dan sesudah gelar jika berada di tengah kalimat; (2) Singkatan gelar dipisah titik (M.Sc.); (3) Nama jabatan yang diikuti nama instansi spesifik ditulis kapital (Rektor Universitas Gadjah Mada).",
    "quickTrick": "💡 INTEN Quick Concept: Periksa tanda koma ganda sebelum dan sesudah gelar bila di tengah kalimat, serta titik di setiap inisial gelar."
  },
  {
    "id": "bimbel_pbm_023",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penulisan Kata Baku & Bentuk Terikat",
    "difficulty": "HOTS",
    "stimulus": "Para peneliti muda itu berdiskusi secara mendalam mengenai dampak limbah mikroplastik bagi ekosistem terumbu karang.",
    "question": "Penulisan gabungan kata berikut yang SELURUHNYA BAKU menurut KBBI dan EYD V adalah...",
    "options": [
      {
        "key": "A",
        "text": "tanggungjawab, kerjasama, pasca sarjana, tandatangan"
      },
      {
        "key": "B",
        "text": "tanggung jawab, kerja sama, pasca sarjana, tanda tangan"
      },
      {
        "key": "C",
        "text": "tanggung jawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "D",
        "text": "tanggungjawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "E",
        "text": "tanggung jawab, kerjasama, pascasarjana, tandatangan"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Bentuk dasar 'tanggung jawab', 'kerja sama', dan 'tanda tangan' ditulis terpisah karena tidak mendapat imbuhan gabung (konfiks). Unsur terikat 'pasca-' harus ditulis serangkai dengan kata yang mengikutinya ('pascasarjana').",
    "quickTrick": "👑 Metode The King GO: Kata gabung ditulis pisah kecuali jika mendapat imbuhan awal-akhir sekaligus (pertanggungjawaban) atau memakai bentuk terikat (pasca-, antar-, sub-)."
  },
  {
    "id": "bimbel_pbm_024",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Analisis Fungsi Sintaksis & Struktur Kalimat",
    "difficulty": "Sedang",
    "stimulus": "Kegiatan observasi lapangan tersebut bertujuan untuk mengidentifikasi spesies burung langka di hutan lindung.",
    "question": "Pola kalimat di atas (S-P-O-K) memiliki struktur inti yang sama dengan kalimat...",
    "options": [
      {
        "key": "A",
        "text": "Hujan deras mengguyur seluruh kawasan ibu kota semalaman."
      },
      {
        "key": "B",
        "text": "Anak-anak itu berlarian gembira di sepanjang pantai berpasir putih."
      },
      {
        "key": "C",
        "text": "Buku ensiklopedia sains terbaru itu sangat tebal dan informatif."
      },
      {
        "key": "D",
        "text": "Mereka sedang mendiskusikan masalah keuangan keluarga."
      },
      {
        "key": "E",
        "text": "Tim medis darurat memeriksa puluhan korban gempa di posko kesehatan pengungsian."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Pola kalimat asli: [Kegiatan observasi lapangan tersebut] (S) [bertujuan untuk mengidentifikasi] (P) [spesies burung langka] (O) [di hutan lindung] (K). Kalimat pada opsi yang setara: [Tim medis darurat] (S) [memeriksa] (P) [puluhan korban gempa] (O) [di posko kesehatan pengungsian] (K).",
    "quickTrick": "⚡ Langkah Taktis Neutron: Petakan konstituen dasar kalimat: siapa yang bertindak (S), predikat transitif (P), objek langsung (O), dan keterangan tempat (K)."
  },
  {
    "id": "bimbel_pbm_025",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Kepaduan & Koherensi Paragraf",
    "difficulty": "HOTS",
    "stimulus": "(1) Digitalisasi perbankan mempermudah transaksi masyarakat di berbagai pelosok daerah. (2) Aplikasi mobile banking memungkinkan transfer dana dalam hitungan detik. (3) Keamanan data nasabah harus terus ditingkatkan untuk mencegah kebocoran informasi. (4) Tarif tiket pesawat penerbangan domestik mengalami lonjakan signifikan menjelang hari raya. (5) Edukasi literasi keuangan digital juga mendesak untuk digalakkan kepada generasi lanjut usia.",
    "question": "Kalimat yang sumbang (inkohoren) sehingga merusak keutuhan ide dalam paragraf di atas adalah kalimat nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(4)"
      },
      {
        "key": "C",
        "text": "(2)"
      },
      {
        "key": "D",
        "text": "(3)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Paragraf membahas topik digitalisasi perbankan dan literasi keuangan digital nasabah. Kalimat (4) tiba-tiba membahas lonjakan tarif tiket pesawat, yang sama sekali tidak relevan dengan topik utama (kalimat sumbang).",
    "quickTrick": "🚀 Brain Academy Fast Trick: Cari kalimat yang temanya keluar dari benang merah topik paragraf (out-of-topic)."
  },
  {
    "id": "bimbel_pbm_026",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Ketidakefektifan Sintaksis & Struktur Kalimat",
    "difficulty": "Sedang",
    "stimulus": "(1) Indonesia memiliki potensi energi terbarukan yang sangat masif, seperti tenaga surya dan geotermal. (2) Namun, pemanfaatan sumber energi bersih tersebut masih tergolong rendah karena tingginya biaya investasi awal. (3) Pemerintah tengah merumuskan regulasi tarif khusus agar investor tertarik menanamkan modalnya. (4) Di mana regulasi tersebut diharapkan mampu memangkas hambatan birokrasi perizinan. (5) Dengan demikian, target bauran energi nasional dapat terealisasi secara optimal.",
    "question": "Kalimat yang TIDAK EFEKTIF karena kesalahan penggunaan kata penghubung (konjungtor) yang menjadikannya tidak bersubjek terdapat pada nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(2)"
      },
      {
        "key": "C",
        "text": "(3)"
      },
      {
        "key": "D",
        "text": "(4)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Kalimat (4) diawali dengan konjungsi relatif 'Di mana...', yang menyebabkan kalimat tersebut menjadi anak kalimat yang buntung tanpa induk kalimat (tidak memiliki fungsi Subjek dan Predikat yang mandiri). Perbaikan yang tepat: hilangkan 'Di mana' atau ganti menjadi 'Regulasi tersebut diharapkan...'.",
    "quickTrick": "🌟 NF Smart Solution: Hindari kalimat mandiri yang diawali dengan kata 'Di mana' atau 'Yang'. Itu menjadikannya klausa terikat tak lengkap."
  },
  {
    "id": "bimbel_pbm_027",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penerapan Ejaan EYD V (Tanda Baca & Gelar)",
    "difficulty": "HOTS",
    "stimulus": "Penulisan tanda baca koma (,) dan huruf kapital pada nama jabatan sering kali mengalami kerancuan di dokumen resmi instansi.",
    "question": "Kalimat berikut yang MEMATUHI kaidah Ejaan Bahasa Indonesia yang Disempurnakan (EYD V) secara tepat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Profesor Bambang Sudrajat, M.Sc., dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "B",
        "text": "Profesor Bambang Sudrajat M.Sc dilantik sebagai rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "C",
        "text": "Profesor Bambang Sudrajat, M.Sc, dilantik sebagai Rektor universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "D",
        "text": "Profesor Bambang Sudrajat, M.Sc. dilantik sebagai rektor Universitas gadjah mada kemarin pagi."
      },
      {
        "key": "E",
        "text": "Profesor Bambang Sudrajat M.Sc. dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Berdasarkan EYD V: (1) Gelar akademik yang mengikuti nama orang diapit oleh tanda koma sebelum dan sesudah gelar jika berada di tengah kalimat; (2) Singkatan gelar dipisah titik (M.Sc.); (3) Nama jabatan yang diikuti nama instansi spesifik ditulis kapital (Rektor Universitas Gadjah Mada).",
    "quickTrick": "🧠 Zenius Core Logic: Periksa tanda koma ganda sebelum dan sesudah gelar bila di tengah kalimat, serta titik di setiap inisial gelar."
  },
  {
    "id": "bimbel_pbm_028",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penulisan Kata Baku & Bentuk Terikat",
    "difficulty": "Sedang",
    "stimulus": "Para peneliti muda itu berdiskusi secara mendalam mengenai dampak limbah mikroplastik bagi ekosistem terumbu karang.",
    "question": "Penulisan gabungan kata berikut yang SELURUHNYA BAKU menurut KBBI dan EYD V adalah...",
    "options": [
      {
        "key": "A",
        "text": "tanggungjawab, kerjasama, pasca sarjana, tandatangan"
      },
      {
        "key": "B",
        "text": "tanggung jawab, kerja sama, pasca sarjana, tanda tangan"
      },
      {
        "key": "C",
        "text": "tanggung jawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "D",
        "text": "tanggungjawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "E",
        "text": "tanggung jawab, kerjasama, pascasarjana, tandatangan"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Bentuk dasar 'tanggung jawab', 'kerja sama', dan 'tanda tangan' ditulis terpisah karena tidak mendapat imbuhan gabung (konfiks). Unsur terikat 'pasca-' harus ditulis serangkai dengan kata yang mengikutinya ('pascasarjana').",
    "quickTrick": "💡 INTEN Quick Concept: Kata gabung ditulis pisah kecuali jika mendapat imbuhan awal-akhir sekaligus (pertanggungjawaban) atau memakai bentuk terikat (pasca-, antar-, sub-)."
  },
  {
    "id": "bimbel_pbm_029",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Analisis Fungsi Sintaksis & Struktur Kalimat",
    "difficulty": "HOTS",
    "stimulus": "Kegiatan observasi lapangan tersebut bertujuan untuk mengidentifikasi spesies burung langka di hutan lindung.",
    "question": "Pola kalimat di atas (S-P-O-K) memiliki struktur inti yang sama dengan kalimat...",
    "options": [
      {
        "key": "A",
        "text": "Hujan deras mengguyur seluruh kawasan ibu kota semalaman."
      },
      {
        "key": "B",
        "text": "Anak-anak itu berlarian gembira di sepanjang pantai berpasir putih."
      },
      {
        "key": "C",
        "text": "Buku ensiklopedia sains terbaru itu sangat tebal dan informatif."
      },
      {
        "key": "D",
        "text": "Mereka sedang mendiskusikan masalah keuangan keluarga."
      },
      {
        "key": "E",
        "text": "Tim medis darurat memeriksa puluhan korban gempa di posko kesehatan pengungsian."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Pola kalimat asli: [Kegiatan observasi lapangan tersebut] (S) [bertujuan untuk mengidentifikasi] (P) [spesies burung langka] (O) [di hutan lindung] (K). Kalimat pada opsi yang setara: [Tim medis darurat] (S) [memeriksa] (P) [puluhan korban gempa] (O) [di posko kesehatan pengungsian] (K).",
    "quickTrick": "👑 Metode The King GO: Petakan konstituen dasar kalimat: siapa yang bertindak (S), predikat transitif (P), objek langsung (O), dan keterangan tempat (K)."
  },
  {
    "id": "bimbel_pbm_030",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Kepaduan & Koherensi Paragraf",
    "difficulty": "Sedang",
    "stimulus": "(1) Digitalisasi perbankan mempermudah transaksi masyarakat di berbagai pelosok daerah. (2) Aplikasi mobile banking memungkinkan transfer dana dalam hitungan detik. (3) Keamanan data nasabah harus terus ditingkatkan untuk mencegah kebocoran informasi. (4) Tarif tiket pesawat penerbangan domestik mengalami lonjakan signifikan menjelang hari raya. (5) Edukasi literasi keuangan digital juga mendesak untuk digalakkan kepada generasi lanjut usia.",
    "question": "Kalimat yang sumbang (inkohoren) sehingga merusak keutuhan ide dalam paragraf di atas adalah kalimat nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(4)"
      },
      {
        "key": "C",
        "text": "(2)"
      },
      {
        "key": "D",
        "text": "(3)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Paragraf membahas topik digitalisasi perbankan dan literasi keuangan digital nasabah. Kalimat (4) tiba-tiba membahas lonjakan tarif tiket pesawat, yang sama sekali tidak relevan dengan topik utama (kalimat sumbang).",
    "quickTrick": "⚡ Langkah Taktis Neutron: Cari kalimat yang temanya keluar dari benang merah topik paragraf (out-of-topic)."
  },
  {
    "id": "bimbel_pbm_031",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Ketidakefektifan Sintaksis & Struktur Kalimat",
    "difficulty": "HOTS",
    "stimulus": "(1) Indonesia memiliki potensi energi terbarukan yang sangat masif, seperti tenaga surya dan geotermal. (2) Namun, pemanfaatan sumber energi bersih tersebut masih tergolong rendah karena tingginya biaya investasi awal. (3) Pemerintah tengah merumuskan regulasi tarif khusus agar investor tertarik menanamkan modalnya. (4) Di mana regulasi tersebut diharapkan mampu memangkas hambatan birokrasi perizinan. (5) Dengan demikian, target bauran energi nasional dapat terealisasi secara optimal.",
    "question": "Kalimat yang TIDAK EFEKTIF karena kesalahan penggunaan kata penghubung (konjungtor) yang menjadikannya tidak bersubjek terdapat pada nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(2)"
      },
      {
        "key": "C",
        "text": "(3)"
      },
      {
        "key": "D",
        "text": "(4)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Kalimat (4) diawali dengan konjungsi relatif 'Di mana...', yang menyebabkan kalimat tersebut menjadi anak kalimat yang buntung tanpa induk kalimat (tidak memiliki fungsi Subjek dan Predikat yang mandiri). Perbaikan yang tepat: hilangkan 'Di mana' atau ganti menjadi 'Regulasi tersebut diharapkan...'.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Hindari kalimat mandiri yang diawali dengan kata 'Di mana' atau 'Yang'. Itu menjadikannya klausa terikat tak lengkap."
  },
  {
    "id": "bimbel_pbm_032",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penerapan Ejaan EYD V (Tanda Baca & Gelar)",
    "difficulty": "Sedang",
    "stimulus": "Penulisan tanda baca koma (,) dan huruf kapital pada nama jabatan sering kali mengalami kerancuan di dokumen resmi instansi.",
    "question": "Kalimat berikut yang MEMATUHI kaidah Ejaan Bahasa Indonesia yang Disempurnakan (EYD V) secara tepat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Profesor Bambang Sudrajat, M.Sc., dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "B",
        "text": "Profesor Bambang Sudrajat M.Sc dilantik sebagai rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "C",
        "text": "Profesor Bambang Sudrajat, M.Sc, dilantik sebagai Rektor universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "D",
        "text": "Profesor Bambang Sudrajat, M.Sc. dilantik sebagai rektor Universitas gadjah mada kemarin pagi."
      },
      {
        "key": "E",
        "text": "Profesor Bambang Sudrajat M.Sc. dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Berdasarkan EYD V: (1) Gelar akademik yang mengikuti nama orang diapit oleh tanda koma sebelum dan sesudah gelar jika berada di tengah kalimat; (2) Singkatan gelar dipisah titik (M.Sc.); (3) Nama jabatan yang diikuti nama instansi spesifik ditulis kapital (Rektor Universitas Gadjah Mada).",
    "quickTrick": "🌟 NF Smart Solution: Periksa tanda koma ganda sebelum dan sesudah gelar bila di tengah kalimat, serta titik di setiap inisial gelar."
  },
  {
    "id": "bimbel_pbm_033",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penulisan Kata Baku & Bentuk Terikat",
    "difficulty": "HOTS",
    "stimulus": "Para peneliti muda itu berdiskusi secara mendalam mengenai dampak limbah mikroplastik bagi ekosistem terumbu karang.",
    "question": "Penulisan gabungan kata berikut yang SELURUHNYA BAKU menurut KBBI dan EYD V adalah...",
    "options": [
      {
        "key": "A",
        "text": "tanggungjawab, kerjasama, pasca sarjana, tandatangan"
      },
      {
        "key": "B",
        "text": "tanggung jawab, kerja sama, pasca sarjana, tanda tangan"
      },
      {
        "key": "C",
        "text": "tanggung jawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "D",
        "text": "tanggungjawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "E",
        "text": "tanggung jawab, kerjasama, pascasarjana, tandatangan"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Bentuk dasar 'tanggung jawab', 'kerja sama', dan 'tanda tangan' ditulis terpisah karena tidak mendapat imbuhan gabung (konfiks). Unsur terikat 'pasca-' harus ditulis serangkai dengan kata yang mengikutinya ('pascasarjana').",
    "quickTrick": "🧠 Zenius Core Logic: Kata gabung ditulis pisah kecuali jika mendapat imbuhan awal-akhir sekaligus (pertanggungjawaban) atau memakai bentuk terikat (pasca-, antar-, sub-)."
  },
  {
    "id": "bimbel_pbm_034",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Analisis Fungsi Sintaksis & Struktur Kalimat",
    "difficulty": "Sedang",
    "stimulus": "Kegiatan observasi lapangan tersebut bertujuan untuk mengidentifikasi spesies burung langka di hutan lindung.",
    "question": "Pola kalimat di atas (S-P-O-K) memiliki struktur inti yang sama dengan kalimat...",
    "options": [
      {
        "key": "A",
        "text": "Hujan deras mengguyur seluruh kawasan ibu kota semalaman."
      },
      {
        "key": "B",
        "text": "Anak-anak itu berlarian gembira di sepanjang pantai berpasir putih."
      },
      {
        "key": "C",
        "text": "Buku ensiklopedia sains terbaru itu sangat tebal dan informatif."
      },
      {
        "key": "D",
        "text": "Mereka sedang mendiskusikan masalah keuangan keluarga."
      },
      {
        "key": "E",
        "text": "Tim medis darurat memeriksa puluhan korban gempa di posko kesehatan pengungsian."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Pola kalimat asli: [Kegiatan observasi lapangan tersebut] (S) [bertujuan untuk mengidentifikasi] (P) [spesies burung langka] (O) [di hutan lindung] (K). Kalimat pada opsi yang setara: [Tim medis darurat] (S) [memeriksa] (P) [puluhan korban gempa] (O) [di posko kesehatan pengungsian] (K).",
    "quickTrick": "💡 INTEN Quick Concept: Petakan konstituen dasar kalimat: siapa yang bertindak (S), predikat transitif (P), objek langsung (O), dan keterangan tempat (K)."
  },
  {
    "id": "bimbel_pbm_035",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Kepaduan & Koherensi Paragraf",
    "difficulty": "HOTS",
    "stimulus": "(1) Digitalisasi perbankan mempermudah transaksi masyarakat di berbagai pelosok daerah. (2) Aplikasi mobile banking memungkinkan transfer dana dalam hitungan detik. (3) Keamanan data nasabah harus terus ditingkatkan untuk mencegah kebocoran informasi. (4) Tarif tiket pesawat penerbangan domestik mengalami lonjakan signifikan menjelang hari raya. (5) Edukasi literasi keuangan digital juga mendesak untuk digalakkan kepada generasi lanjut usia.",
    "question": "Kalimat yang sumbang (inkohoren) sehingga merusak keutuhan ide dalam paragraf di atas adalah kalimat nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(4)"
      },
      {
        "key": "C",
        "text": "(2)"
      },
      {
        "key": "D",
        "text": "(3)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Paragraf membahas topik digitalisasi perbankan dan literasi keuangan digital nasabah. Kalimat (4) tiba-tiba membahas lonjakan tarif tiket pesawat, yang sama sekali tidak relevan dengan topik utama (kalimat sumbang).",
    "quickTrick": "👑 Metode The King GO: Cari kalimat yang temanya keluar dari benang merah topik paragraf (out-of-topic)."
  },
  {
    "id": "bimbel_pbm_036",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Ketidakefektifan Sintaksis & Struktur Kalimat",
    "difficulty": "Sedang",
    "stimulus": "(1) Indonesia memiliki potensi energi terbarukan yang sangat masif, seperti tenaga surya dan geotermal. (2) Namun, pemanfaatan sumber energi bersih tersebut masih tergolong rendah karena tingginya biaya investasi awal. (3) Pemerintah tengah merumuskan regulasi tarif khusus agar investor tertarik menanamkan modalnya. (4) Di mana regulasi tersebut diharapkan mampu memangkas hambatan birokrasi perizinan. (5) Dengan demikian, target bauran energi nasional dapat terealisasi secara optimal.",
    "question": "Kalimat yang TIDAK EFEKTIF karena kesalahan penggunaan kata penghubung (konjungtor) yang menjadikannya tidak bersubjek terdapat pada nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(2)"
      },
      {
        "key": "C",
        "text": "(3)"
      },
      {
        "key": "D",
        "text": "(4)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Kalimat (4) diawali dengan konjungsi relatif 'Di mana...', yang menyebabkan kalimat tersebut menjadi anak kalimat yang buntung tanpa induk kalimat (tidak memiliki fungsi Subjek dan Predikat yang mandiri). Perbaikan yang tepat: hilangkan 'Di mana' atau ganti menjadi 'Regulasi tersebut diharapkan...'.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Hindari kalimat mandiri yang diawali dengan kata 'Di mana' atau 'Yang'. Itu menjadikannya klausa terikat tak lengkap."
  },
  {
    "id": "bimbel_pbm_037",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penerapan Ejaan EYD V (Tanda Baca & Gelar)",
    "difficulty": "HOTS",
    "stimulus": "Penulisan tanda baca koma (,) dan huruf kapital pada nama jabatan sering kali mengalami kerancuan di dokumen resmi instansi.",
    "question": "Kalimat berikut yang MEMATUHI kaidah Ejaan Bahasa Indonesia yang Disempurnakan (EYD V) secara tepat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Profesor Bambang Sudrajat, M.Sc., dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "B",
        "text": "Profesor Bambang Sudrajat M.Sc dilantik sebagai rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "C",
        "text": "Profesor Bambang Sudrajat, M.Sc, dilantik sebagai Rektor universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "D",
        "text": "Profesor Bambang Sudrajat, M.Sc. dilantik sebagai rektor Universitas gadjah mada kemarin pagi."
      },
      {
        "key": "E",
        "text": "Profesor Bambang Sudrajat M.Sc. dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Berdasarkan EYD V: (1) Gelar akademik yang mengikuti nama orang diapit oleh tanda koma sebelum dan sesudah gelar jika berada di tengah kalimat; (2) Singkatan gelar dipisah titik (M.Sc.); (3) Nama jabatan yang diikuti nama instansi spesifik ditulis kapital (Rektor Universitas Gadjah Mada).",
    "quickTrick": "🚀 Brain Academy Fast Trick: Periksa tanda koma ganda sebelum dan sesudah gelar bila di tengah kalimat, serta titik di setiap inisial gelar."
  },
  {
    "id": "bimbel_pbm_038",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penulisan Kata Baku & Bentuk Terikat",
    "difficulty": "Sedang",
    "stimulus": "Para peneliti muda itu berdiskusi secara mendalam mengenai dampak limbah mikroplastik bagi ekosistem terumbu karang.",
    "question": "Penulisan gabungan kata berikut yang SELURUHNYA BAKU menurut KBBI dan EYD V adalah...",
    "options": [
      {
        "key": "A",
        "text": "tanggungjawab, kerjasama, pasca sarjana, tandatangan"
      },
      {
        "key": "B",
        "text": "tanggung jawab, kerja sama, pasca sarjana, tanda tangan"
      },
      {
        "key": "C",
        "text": "tanggung jawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "D",
        "text": "tanggungjawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "E",
        "text": "tanggung jawab, kerjasama, pascasarjana, tandatangan"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Bentuk dasar 'tanggung jawab', 'kerja sama', dan 'tanda tangan' ditulis terpisah karena tidak mendapat imbuhan gabung (konfiks). Unsur terikat 'pasca-' harus ditulis serangkai dengan kata yang mengikutinya ('pascasarjana').",
    "quickTrick": "🌟 NF Smart Solution: Kata gabung ditulis pisah kecuali jika mendapat imbuhan awal-akhir sekaligus (pertanggungjawaban) atau memakai bentuk terikat (pasca-, antar-, sub-)."
  },
  {
    "id": "bimbel_pbm_039",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Analisis Fungsi Sintaksis & Struktur Kalimat",
    "difficulty": "HOTS",
    "stimulus": "Kegiatan observasi lapangan tersebut bertujuan untuk mengidentifikasi spesies burung langka di hutan lindung.",
    "question": "Pola kalimat di atas (S-P-O-K) memiliki struktur inti yang sama dengan kalimat...",
    "options": [
      {
        "key": "A",
        "text": "Hujan deras mengguyur seluruh kawasan ibu kota semalaman."
      },
      {
        "key": "B",
        "text": "Anak-anak itu berlarian gembira di sepanjang pantai berpasir putih."
      },
      {
        "key": "C",
        "text": "Buku ensiklopedia sains terbaru itu sangat tebal dan informatif."
      },
      {
        "key": "D",
        "text": "Mereka sedang mendiskusikan masalah keuangan keluarga."
      },
      {
        "key": "E",
        "text": "Tim medis darurat memeriksa puluhan korban gempa di posko kesehatan pengungsian."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Pola kalimat asli: [Kegiatan observasi lapangan tersebut] (S) [bertujuan untuk mengidentifikasi] (P) [spesies burung langka] (O) [di hutan lindung] (K). Kalimat pada opsi yang setara: [Tim medis darurat] (S) [memeriksa] (P) [puluhan korban gempa] (O) [di posko kesehatan pengungsian] (K).",
    "quickTrick": "🧠 Zenius Core Logic: Petakan konstituen dasar kalimat: siapa yang bertindak (S), predikat transitif (P), objek langsung (O), dan keterangan tempat (K)."
  },
  {
    "id": "bimbel_pbm_040",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Kepaduan & Koherensi Paragraf",
    "difficulty": "Sedang",
    "stimulus": "(1) Digitalisasi perbankan mempermudah transaksi masyarakat di berbagai pelosok daerah. (2) Aplikasi mobile banking memungkinkan transfer dana dalam hitungan detik. (3) Keamanan data nasabah harus terus ditingkatkan untuk mencegah kebocoran informasi. (4) Tarif tiket pesawat penerbangan domestik mengalami lonjakan signifikan menjelang hari raya. (5) Edukasi literasi keuangan digital juga mendesak untuk digalakkan kepada generasi lanjut usia.",
    "question": "Kalimat yang sumbang (inkohoren) sehingga merusak keutuhan ide dalam paragraf di atas adalah kalimat nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(4)"
      },
      {
        "key": "C",
        "text": "(2)"
      },
      {
        "key": "D",
        "text": "(3)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Paragraf membahas topik digitalisasi perbankan dan literasi keuangan digital nasabah. Kalimat (4) tiba-tiba membahas lonjakan tarif tiket pesawat, yang sama sekali tidak relevan dengan topik utama (kalimat sumbang).",
    "quickTrick": "💡 INTEN Quick Concept: Cari kalimat yang temanya keluar dari benang merah topik paragraf (out-of-topic)."
  },
  {
    "id": "bimbel_pbm_041",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Ketidakefektifan Sintaksis & Struktur Kalimat",
    "difficulty": "HOTS",
    "stimulus": "(1) Indonesia memiliki potensi energi terbarukan yang sangat masif, seperti tenaga surya dan geotermal. (2) Namun, pemanfaatan sumber energi bersih tersebut masih tergolong rendah karena tingginya biaya investasi awal. (3) Pemerintah tengah merumuskan regulasi tarif khusus agar investor tertarik menanamkan modalnya. (4) Di mana regulasi tersebut diharapkan mampu memangkas hambatan birokrasi perizinan. (5) Dengan demikian, target bauran energi nasional dapat terealisasi secara optimal.",
    "question": "Kalimat yang TIDAK EFEKTIF karena kesalahan penggunaan kata penghubung (konjungtor) yang menjadikannya tidak bersubjek terdapat pada nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(2)"
      },
      {
        "key": "C",
        "text": "(3)"
      },
      {
        "key": "D",
        "text": "(4)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Kalimat (4) diawali dengan konjungsi relatif 'Di mana...', yang menyebabkan kalimat tersebut menjadi anak kalimat yang buntung tanpa induk kalimat (tidak memiliki fungsi Subjek dan Predikat yang mandiri). Perbaikan yang tepat: hilangkan 'Di mana' atau ganti menjadi 'Regulasi tersebut diharapkan...'.",
    "quickTrick": "👑 Metode The King GO: Hindari kalimat mandiri yang diawali dengan kata 'Di mana' atau 'Yang'. Itu menjadikannya klausa terikat tak lengkap."
  },
  {
    "id": "bimbel_pbm_042",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penerapan Ejaan EYD V (Tanda Baca & Gelar)",
    "difficulty": "Sedang",
    "stimulus": "Penulisan tanda baca koma (,) dan huruf kapital pada nama jabatan sering kali mengalami kerancuan di dokumen resmi instansi.",
    "question": "Kalimat berikut yang MEMATUHI kaidah Ejaan Bahasa Indonesia yang Disempurnakan (EYD V) secara tepat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Profesor Bambang Sudrajat, M.Sc., dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "B",
        "text": "Profesor Bambang Sudrajat M.Sc dilantik sebagai rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "C",
        "text": "Profesor Bambang Sudrajat, M.Sc, dilantik sebagai Rektor universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "D",
        "text": "Profesor Bambang Sudrajat, M.Sc. dilantik sebagai rektor Universitas gadjah mada kemarin pagi."
      },
      {
        "key": "E",
        "text": "Profesor Bambang Sudrajat M.Sc. dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Berdasarkan EYD V: (1) Gelar akademik yang mengikuti nama orang diapit oleh tanda koma sebelum dan sesudah gelar jika berada di tengah kalimat; (2) Singkatan gelar dipisah titik (M.Sc.); (3) Nama jabatan yang diikuti nama instansi spesifik ditulis kapital (Rektor Universitas Gadjah Mada).",
    "quickTrick": "⚡ Langkah Taktis Neutron: Periksa tanda koma ganda sebelum dan sesudah gelar bila di tengah kalimat, serta titik di setiap inisial gelar."
  },
  {
    "id": "bimbel_pbm_043",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penulisan Kata Baku & Bentuk Terikat",
    "difficulty": "HOTS",
    "stimulus": "Para peneliti muda itu berdiskusi secara mendalam mengenai dampak limbah mikroplastik bagi ekosistem terumbu karang.",
    "question": "Penulisan gabungan kata berikut yang SELURUHNYA BAKU menurut KBBI dan EYD V adalah...",
    "options": [
      {
        "key": "A",
        "text": "tanggungjawab, kerjasama, pasca sarjana, tandatangan"
      },
      {
        "key": "B",
        "text": "tanggung jawab, kerja sama, pasca sarjana, tanda tangan"
      },
      {
        "key": "C",
        "text": "tanggung jawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "D",
        "text": "tanggungjawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "E",
        "text": "tanggung jawab, kerjasama, pascasarjana, tandatangan"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Bentuk dasar 'tanggung jawab', 'kerja sama', dan 'tanda tangan' ditulis terpisah karena tidak mendapat imbuhan gabung (konfiks). Unsur terikat 'pasca-' harus ditulis serangkai dengan kata yang mengikutinya ('pascasarjana').",
    "quickTrick": "🚀 Brain Academy Fast Trick: Kata gabung ditulis pisah kecuali jika mendapat imbuhan awal-akhir sekaligus (pertanggungjawaban) atau memakai bentuk terikat (pasca-, antar-, sub-)."
  },
  {
    "id": "bimbel_pbm_044",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Analisis Fungsi Sintaksis & Struktur Kalimat",
    "difficulty": "Sedang",
    "stimulus": "Kegiatan observasi lapangan tersebut bertujuan untuk mengidentifikasi spesies burung langka di hutan lindung.",
    "question": "Pola kalimat di atas (S-P-O-K) memiliki struktur inti yang sama dengan kalimat...",
    "options": [
      {
        "key": "A",
        "text": "Hujan deras mengguyur seluruh kawasan ibu kota semalaman."
      },
      {
        "key": "B",
        "text": "Anak-anak itu berlarian gembira di sepanjang pantai berpasir putih."
      },
      {
        "key": "C",
        "text": "Buku ensiklopedia sains terbaru itu sangat tebal dan informatif."
      },
      {
        "key": "D",
        "text": "Mereka sedang mendiskusikan masalah keuangan keluarga."
      },
      {
        "key": "E",
        "text": "Tim medis darurat memeriksa puluhan korban gempa di posko kesehatan pengungsian."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Pola kalimat asli: [Kegiatan observasi lapangan tersebut] (S) [bertujuan untuk mengidentifikasi] (P) [spesies burung langka] (O) [di hutan lindung] (K). Kalimat pada opsi yang setara: [Tim medis darurat] (S) [memeriksa] (P) [puluhan korban gempa] (O) [di posko kesehatan pengungsian] (K).",
    "quickTrick": "🌟 NF Smart Solution: Petakan konstituen dasar kalimat: siapa yang bertindak (S), predikat transitif (P), objek langsung (O), dan keterangan tempat (K)."
  },
  {
    "id": "bimbel_pbm_045",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Kepaduan & Koherensi Paragraf",
    "difficulty": "HOTS",
    "stimulus": "(1) Digitalisasi perbankan mempermudah transaksi masyarakat di berbagai pelosok daerah. (2) Aplikasi mobile banking memungkinkan transfer dana dalam hitungan detik. (3) Keamanan data nasabah harus terus ditingkatkan untuk mencegah kebocoran informasi. (4) Tarif tiket pesawat penerbangan domestik mengalami lonjakan signifikan menjelang hari raya. (5) Edukasi literasi keuangan digital juga mendesak untuk digalakkan kepada generasi lanjut usia.",
    "question": "Kalimat yang sumbang (inkohoren) sehingga merusak keutuhan ide dalam paragraf di atas adalah kalimat nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(4)"
      },
      {
        "key": "C",
        "text": "(2)"
      },
      {
        "key": "D",
        "text": "(3)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Paragraf membahas topik digitalisasi perbankan dan literasi keuangan digital nasabah. Kalimat (4) tiba-tiba membahas lonjakan tarif tiket pesawat, yang sama sekali tidak relevan dengan topik utama (kalimat sumbang).",
    "quickTrick": "🧠 Zenius Core Logic: Cari kalimat yang temanya keluar dari benang merah topik paragraf (out-of-topic)."
  },
  {
    "id": "bimbel_pbm_046",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Ketidakefektifan Sintaksis & Struktur Kalimat",
    "difficulty": "Sedang",
    "stimulus": "(1) Indonesia memiliki potensi energi terbarukan yang sangat masif, seperti tenaga surya dan geotermal. (2) Namun, pemanfaatan sumber energi bersih tersebut masih tergolong rendah karena tingginya biaya investasi awal. (3) Pemerintah tengah merumuskan regulasi tarif khusus agar investor tertarik menanamkan modalnya. (4) Di mana regulasi tersebut diharapkan mampu memangkas hambatan birokrasi perizinan. (5) Dengan demikian, target bauran energi nasional dapat terealisasi secara optimal.",
    "question": "Kalimat yang TIDAK EFEKTIF karena kesalahan penggunaan kata penghubung (konjungtor) yang menjadikannya tidak bersubjek terdapat pada nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(2)"
      },
      {
        "key": "C",
        "text": "(3)"
      },
      {
        "key": "D",
        "text": "(4)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Kalimat (4) diawali dengan konjungsi relatif 'Di mana...', yang menyebabkan kalimat tersebut menjadi anak kalimat yang buntung tanpa induk kalimat (tidak memiliki fungsi Subjek dan Predikat yang mandiri). Perbaikan yang tepat: hilangkan 'Di mana' atau ganti menjadi 'Regulasi tersebut diharapkan...'.",
    "quickTrick": "💡 INTEN Quick Concept: Hindari kalimat mandiri yang diawali dengan kata 'Di mana' atau 'Yang'. Itu menjadikannya klausa terikat tak lengkap."
  },
  {
    "id": "bimbel_pbm_047",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penerapan Ejaan EYD V (Tanda Baca & Gelar)",
    "difficulty": "HOTS",
    "stimulus": "Penulisan tanda baca koma (,) dan huruf kapital pada nama jabatan sering kali mengalami kerancuan di dokumen resmi instansi.",
    "question": "Kalimat berikut yang MEMATUHI kaidah Ejaan Bahasa Indonesia yang Disempurnakan (EYD V) secara tepat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Profesor Bambang Sudrajat, M.Sc., dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "B",
        "text": "Profesor Bambang Sudrajat M.Sc dilantik sebagai rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "C",
        "text": "Profesor Bambang Sudrajat, M.Sc, dilantik sebagai Rektor universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "D",
        "text": "Profesor Bambang Sudrajat, M.Sc. dilantik sebagai rektor Universitas gadjah mada kemarin pagi."
      },
      {
        "key": "E",
        "text": "Profesor Bambang Sudrajat M.Sc. dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Berdasarkan EYD V: (1) Gelar akademik yang mengikuti nama orang diapit oleh tanda koma sebelum dan sesudah gelar jika berada di tengah kalimat; (2) Singkatan gelar dipisah titik (M.Sc.); (3) Nama jabatan yang diikuti nama instansi spesifik ditulis kapital (Rektor Universitas Gadjah Mada).",
    "quickTrick": "👑 Metode The King GO: Periksa tanda koma ganda sebelum dan sesudah gelar bila di tengah kalimat, serta titik di setiap inisial gelar."
  },
  {
    "id": "bimbel_pbm_048",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penulisan Kata Baku & Bentuk Terikat",
    "difficulty": "Sedang",
    "stimulus": "Para peneliti muda itu berdiskusi secara mendalam mengenai dampak limbah mikroplastik bagi ekosistem terumbu karang.",
    "question": "Penulisan gabungan kata berikut yang SELURUHNYA BAKU menurut KBBI dan EYD V adalah...",
    "options": [
      {
        "key": "A",
        "text": "tanggungjawab, kerjasama, pasca sarjana, tandatangan"
      },
      {
        "key": "B",
        "text": "tanggung jawab, kerja sama, pasca sarjana, tanda tangan"
      },
      {
        "key": "C",
        "text": "tanggung jawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "D",
        "text": "tanggungjawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "E",
        "text": "tanggung jawab, kerjasama, pascasarjana, tandatangan"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Bentuk dasar 'tanggung jawab', 'kerja sama', dan 'tanda tangan' ditulis terpisah karena tidak mendapat imbuhan gabung (konfiks). Unsur terikat 'pasca-' harus ditulis serangkai dengan kata yang mengikutinya ('pascasarjana').",
    "quickTrick": "⚡ Langkah Taktis Neutron: Kata gabung ditulis pisah kecuali jika mendapat imbuhan awal-akhir sekaligus (pertanggungjawaban) atau memakai bentuk terikat (pasca-, antar-, sub-)."
  },
  {
    "id": "bimbel_pbm_049",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Analisis Fungsi Sintaksis & Struktur Kalimat",
    "difficulty": "HOTS",
    "stimulus": "Kegiatan observasi lapangan tersebut bertujuan untuk mengidentifikasi spesies burung langka di hutan lindung.",
    "question": "Pola kalimat di atas (S-P-O-K) memiliki struktur inti yang sama dengan kalimat...",
    "options": [
      {
        "key": "A",
        "text": "Hujan deras mengguyur seluruh kawasan ibu kota semalaman."
      },
      {
        "key": "B",
        "text": "Anak-anak itu berlarian gembira di sepanjang pantai berpasir putih."
      },
      {
        "key": "C",
        "text": "Buku ensiklopedia sains terbaru itu sangat tebal dan informatif."
      },
      {
        "key": "D",
        "text": "Mereka sedang mendiskusikan masalah keuangan keluarga."
      },
      {
        "key": "E",
        "text": "Tim medis darurat memeriksa puluhan korban gempa di posko kesehatan pengungsian."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Pola kalimat asli: [Kegiatan observasi lapangan tersebut] (S) [bertujuan untuk mengidentifikasi] (P) [spesies burung langka] (O) [di hutan lindung] (K). Kalimat pada opsi yang setara: [Tim medis darurat] (S) [memeriksa] (P) [puluhan korban gempa] (O) [di posko kesehatan pengungsian] (K).",
    "quickTrick": "🚀 Brain Academy Fast Trick: Petakan konstituen dasar kalimat: siapa yang bertindak (S), predikat transitif (P), objek langsung (O), dan keterangan tempat (K)."
  },
  {
    "id": "bimbel_pbm_050",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Kepaduan & Koherensi Paragraf",
    "difficulty": "Sedang",
    "stimulus": "(1) Digitalisasi perbankan mempermudah transaksi masyarakat di berbagai pelosok daerah. (2) Aplikasi mobile banking memungkinkan transfer dana dalam hitungan detik. (3) Keamanan data nasabah harus terus ditingkatkan untuk mencegah kebocoran informasi. (4) Tarif tiket pesawat penerbangan domestik mengalami lonjakan signifikan menjelang hari raya. (5) Edukasi literasi keuangan digital juga mendesak untuk digalakkan kepada generasi lanjut usia.",
    "question": "Kalimat yang sumbang (inkohoren) sehingga merusak keutuhan ide dalam paragraf di atas adalah kalimat nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(4)"
      },
      {
        "key": "C",
        "text": "(2)"
      },
      {
        "key": "D",
        "text": "(3)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Paragraf membahas topik digitalisasi perbankan dan literasi keuangan digital nasabah. Kalimat (4) tiba-tiba membahas lonjakan tarif tiket pesawat, yang sama sekali tidak relevan dengan topik utama (kalimat sumbang).",
    "quickTrick": "🌟 NF Smart Solution: Cari kalimat yang temanya keluar dari benang merah topik paragraf (out-of-topic)."
  },
  {
    "id": "bimbel_pbm_051",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Ketidakefektifan Sintaksis & Struktur Kalimat",
    "difficulty": "HOTS",
    "stimulus": "(1) Indonesia memiliki potensi energi terbarukan yang sangat masif, seperti tenaga surya dan geotermal. (2) Namun, pemanfaatan sumber energi bersih tersebut masih tergolong rendah karena tingginya biaya investasi awal. (3) Pemerintah tengah merumuskan regulasi tarif khusus agar investor tertarik menanamkan modalnya. (4) Di mana regulasi tersebut diharapkan mampu memangkas hambatan birokrasi perizinan. (5) Dengan demikian, target bauran energi nasional dapat terealisasi secara optimal.",
    "question": "Kalimat yang TIDAK EFEKTIF karena kesalahan penggunaan kata penghubung (konjungtor) yang menjadikannya tidak bersubjek terdapat pada nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(2)"
      },
      {
        "key": "C",
        "text": "(3)"
      },
      {
        "key": "D",
        "text": "(4)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Kalimat (4) diawali dengan konjungsi relatif 'Di mana...', yang menyebabkan kalimat tersebut menjadi anak kalimat yang buntung tanpa induk kalimat (tidak memiliki fungsi Subjek dan Predikat yang mandiri). Perbaikan yang tepat: hilangkan 'Di mana' atau ganti menjadi 'Regulasi tersebut diharapkan...'.",
    "quickTrick": "🧠 Zenius Core Logic: Hindari kalimat mandiri yang diawali dengan kata 'Di mana' atau 'Yang'. Itu menjadikannya klausa terikat tak lengkap."
  },
  {
    "id": "bimbel_pbm_052",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penerapan Ejaan EYD V (Tanda Baca & Gelar)",
    "difficulty": "Sedang",
    "stimulus": "Penulisan tanda baca koma (,) dan huruf kapital pada nama jabatan sering kali mengalami kerancuan di dokumen resmi instansi.",
    "question": "Kalimat berikut yang MEMATUHI kaidah Ejaan Bahasa Indonesia yang Disempurnakan (EYD V) secara tepat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Profesor Bambang Sudrajat, M.Sc., dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "B",
        "text": "Profesor Bambang Sudrajat M.Sc dilantik sebagai rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "C",
        "text": "Profesor Bambang Sudrajat, M.Sc, dilantik sebagai Rektor universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "D",
        "text": "Profesor Bambang Sudrajat, M.Sc. dilantik sebagai rektor Universitas gadjah mada kemarin pagi."
      },
      {
        "key": "E",
        "text": "Profesor Bambang Sudrajat M.Sc. dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Berdasarkan EYD V: (1) Gelar akademik yang mengikuti nama orang diapit oleh tanda koma sebelum dan sesudah gelar jika berada di tengah kalimat; (2) Singkatan gelar dipisah titik (M.Sc.); (3) Nama jabatan yang diikuti nama instansi spesifik ditulis kapital (Rektor Universitas Gadjah Mada).",
    "quickTrick": "💡 INTEN Quick Concept: Periksa tanda koma ganda sebelum dan sesudah gelar bila di tengah kalimat, serta titik di setiap inisial gelar."
  },
  {
    "id": "bimbel_pbm_053",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penulisan Kata Baku & Bentuk Terikat",
    "difficulty": "HOTS",
    "stimulus": "Para peneliti muda itu berdiskusi secara mendalam mengenai dampak limbah mikroplastik bagi ekosistem terumbu karang.",
    "question": "Penulisan gabungan kata berikut yang SELURUHNYA BAKU menurut KBBI dan EYD V adalah...",
    "options": [
      {
        "key": "A",
        "text": "tanggungjawab, kerjasama, pasca sarjana, tandatangan"
      },
      {
        "key": "B",
        "text": "tanggung jawab, kerja sama, pasca sarjana, tanda tangan"
      },
      {
        "key": "C",
        "text": "tanggung jawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "D",
        "text": "tanggungjawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "E",
        "text": "tanggung jawab, kerjasama, pascasarjana, tandatangan"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Bentuk dasar 'tanggung jawab', 'kerja sama', dan 'tanda tangan' ditulis terpisah karena tidak mendapat imbuhan gabung (konfiks). Unsur terikat 'pasca-' harus ditulis serangkai dengan kata yang mengikutinya ('pascasarjana').",
    "quickTrick": "👑 Metode The King GO: Kata gabung ditulis pisah kecuali jika mendapat imbuhan awal-akhir sekaligus (pertanggungjawaban) atau memakai bentuk terikat (pasca-, antar-, sub-)."
  },
  {
    "id": "bimbel_pbm_054",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Analisis Fungsi Sintaksis & Struktur Kalimat",
    "difficulty": "Sedang",
    "stimulus": "Kegiatan observasi lapangan tersebut bertujuan untuk mengidentifikasi spesies burung langka di hutan lindung.",
    "question": "Pola kalimat di atas (S-P-O-K) memiliki struktur inti yang sama dengan kalimat...",
    "options": [
      {
        "key": "A",
        "text": "Hujan deras mengguyur seluruh kawasan ibu kota semalaman."
      },
      {
        "key": "B",
        "text": "Anak-anak itu berlarian gembira di sepanjang pantai berpasir putih."
      },
      {
        "key": "C",
        "text": "Buku ensiklopedia sains terbaru itu sangat tebal dan informatif."
      },
      {
        "key": "D",
        "text": "Mereka sedang mendiskusikan masalah keuangan keluarga."
      },
      {
        "key": "E",
        "text": "Tim medis darurat memeriksa puluhan korban gempa di posko kesehatan pengungsian."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Pola kalimat asli: [Kegiatan observasi lapangan tersebut] (S) [bertujuan untuk mengidentifikasi] (P) [spesies burung langka] (O) [di hutan lindung] (K). Kalimat pada opsi yang setara: [Tim medis darurat] (S) [memeriksa] (P) [puluhan korban gempa] (O) [di posko kesehatan pengungsian] (K).",
    "quickTrick": "⚡ Langkah Taktis Neutron: Petakan konstituen dasar kalimat: siapa yang bertindak (S), predikat transitif (P), objek langsung (O), dan keterangan tempat (K)."
  },
  {
    "id": "bimbel_pbm_055",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Kepaduan & Koherensi Paragraf",
    "difficulty": "HOTS",
    "stimulus": "(1) Digitalisasi perbankan mempermudah transaksi masyarakat di berbagai pelosok daerah. (2) Aplikasi mobile banking memungkinkan transfer dana dalam hitungan detik. (3) Keamanan data nasabah harus terus ditingkatkan untuk mencegah kebocoran informasi. (4) Tarif tiket pesawat penerbangan domestik mengalami lonjakan signifikan menjelang hari raya. (5) Edukasi literasi keuangan digital juga mendesak untuk digalakkan kepada generasi lanjut usia.",
    "question": "Kalimat yang sumbang (inkohoren) sehingga merusak keutuhan ide dalam paragraf di atas adalah kalimat nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(4)"
      },
      {
        "key": "C",
        "text": "(2)"
      },
      {
        "key": "D",
        "text": "(3)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Paragraf membahas topik digitalisasi perbankan dan literasi keuangan digital nasabah. Kalimat (4) tiba-tiba membahas lonjakan tarif tiket pesawat, yang sama sekali tidak relevan dengan topik utama (kalimat sumbang).",
    "quickTrick": "🚀 Brain Academy Fast Trick: Cari kalimat yang temanya keluar dari benang merah topik paragraf (out-of-topic)."
  },
  {
    "id": "bimbel_pbm_056",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Ketidakefektifan Sintaksis & Struktur Kalimat",
    "difficulty": "Sedang",
    "stimulus": "(1) Indonesia memiliki potensi energi terbarukan yang sangat masif, seperti tenaga surya dan geotermal. (2) Namun, pemanfaatan sumber energi bersih tersebut masih tergolong rendah karena tingginya biaya investasi awal. (3) Pemerintah tengah merumuskan regulasi tarif khusus agar investor tertarik menanamkan modalnya. (4) Di mana regulasi tersebut diharapkan mampu memangkas hambatan birokrasi perizinan. (5) Dengan demikian, target bauran energi nasional dapat terealisasi secara optimal.",
    "question": "Kalimat yang TIDAK EFEKTIF karena kesalahan penggunaan kata penghubung (konjungtor) yang menjadikannya tidak bersubjek terdapat pada nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(2)"
      },
      {
        "key": "C",
        "text": "(3)"
      },
      {
        "key": "D",
        "text": "(4)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Kalimat (4) diawali dengan konjungsi relatif 'Di mana...', yang menyebabkan kalimat tersebut menjadi anak kalimat yang buntung tanpa induk kalimat (tidak memiliki fungsi Subjek dan Predikat yang mandiri). Perbaikan yang tepat: hilangkan 'Di mana' atau ganti menjadi 'Regulasi tersebut diharapkan...'.",
    "quickTrick": "🌟 NF Smart Solution: Hindari kalimat mandiri yang diawali dengan kata 'Di mana' atau 'Yang'. Itu menjadikannya klausa terikat tak lengkap."
  },
  {
    "id": "bimbel_pbm_057",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penerapan Ejaan EYD V (Tanda Baca & Gelar)",
    "difficulty": "HOTS",
    "stimulus": "Penulisan tanda baca koma (,) dan huruf kapital pada nama jabatan sering kali mengalami kerancuan di dokumen resmi instansi.",
    "question": "Kalimat berikut yang MEMATUHI kaidah Ejaan Bahasa Indonesia yang Disempurnakan (EYD V) secara tepat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Profesor Bambang Sudrajat, M.Sc., dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "B",
        "text": "Profesor Bambang Sudrajat M.Sc dilantik sebagai rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "C",
        "text": "Profesor Bambang Sudrajat, M.Sc, dilantik sebagai Rektor universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "D",
        "text": "Profesor Bambang Sudrajat, M.Sc. dilantik sebagai rektor Universitas gadjah mada kemarin pagi."
      },
      {
        "key": "E",
        "text": "Profesor Bambang Sudrajat M.Sc. dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Berdasarkan EYD V: (1) Gelar akademik yang mengikuti nama orang diapit oleh tanda koma sebelum dan sesudah gelar jika berada di tengah kalimat; (2) Singkatan gelar dipisah titik (M.Sc.); (3) Nama jabatan yang diikuti nama instansi spesifik ditulis kapital (Rektor Universitas Gadjah Mada).",
    "quickTrick": "🧠 Zenius Core Logic: Periksa tanda koma ganda sebelum dan sesudah gelar bila di tengah kalimat, serta titik di setiap inisial gelar."
  },
  {
    "id": "bimbel_pbm_058",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penulisan Kata Baku & Bentuk Terikat",
    "difficulty": "Sedang",
    "stimulus": "Para peneliti muda itu berdiskusi secara mendalam mengenai dampak limbah mikroplastik bagi ekosistem terumbu karang.",
    "question": "Penulisan gabungan kata berikut yang SELURUHNYA BAKU menurut KBBI dan EYD V adalah...",
    "options": [
      {
        "key": "A",
        "text": "tanggungjawab, kerjasama, pasca sarjana, tandatangan"
      },
      {
        "key": "B",
        "text": "tanggung jawab, kerja sama, pasca sarjana, tanda tangan"
      },
      {
        "key": "C",
        "text": "tanggung jawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "D",
        "text": "tanggungjawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "E",
        "text": "tanggung jawab, kerjasama, pascasarjana, tandatangan"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Bentuk dasar 'tanggung jawab', 'kerja sama', dan 'tanda tangan' ditulis terpisah karena tidak mendapat imbuhan gabung (konfiks). Unsur terikat 'pasca-' harus ditulis serangkai dengan kata yang mengikutinya ('pascasarjana').",
    "quickTrick": "💡 INTEN Quick Concept: Kata gabung ditulis pisah kecuali jika mendapat imbuhan awal-akhir sekaligus (pertanggungjawaban) atau memakai bentuk terikat (pasca-, antar-, sub-)."
  },
  {
    "id": "bimbel_pbm_059",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Analisis Fungsi Sintaksis & Struktur Kalimat",
    "difficulty": "HOTS",
    "stimulus": "Kegiatan observasi lapangan tersebut bertujuan untuk mengidentifikasi spesies burung langka di hutan lindung.",
    "question": "Pola kalimat di atas (S-P-O-K) memiliki struktur inti yang sama dengan kalimat...",
    "options": [
      {
        "key": "A",
        "text": "Hujan deras mengguyur seluruh kawasan ibu kota semalaman."
      },
      {
        "key": "B",
        "text": "Anak-anak itu berlarian gembira di sepanjang pantai berpasir putih."
      },
      {
        "key": "C",
        "text": "Buku ensiklopedia sains terbaru itu sangat tebal dan informatif."
      },
      {
        "key": "D",
        "text": "Mereka sedang mendiskusikan masalah keuangan keluarga."
      },
      {
        "key": "E",
        "text": "Tim medis darurat memeriksa puluhan korban gempa di posko kesehatan pengungsian."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Pola kalimat asli: [Kegiatan observasi lapangan tersebut] (S) [bertujuan untuk mengidentifikasi] (P) [spesies burung langka] (O) [di hutan lindung] (K). Kalimat pada opsi yang setara: [Tim medis darurat] (S) [memeriksa] (P) [puluhan korban gempa] (O) [di posko kesehatan pengungsian] (K).",
    "quickTrick": "👑 Metode The King GO: Petakan konstituen dasar kalimat: siapa yang bertindak (S), predikat transitif (P), objek langsung (O), dan keterangan tempat (K)."
  },
  {
    "id": "bimbel_pbm_060",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Kepaduan & Koherensi Paragraf",
    "difficulty": "Sedang",
    "stimulus": "(1) Digitalisasi perbankan mempermudah transaksi masyarakat di berbagai pelosok daerah. (2) Aplikasi mobile banking memungkinkan transfer dana dalam hitungan detik. (3) Keamanan data nasabah harus terus ditingkatkan untuk mencegah kebocoran informasi. (4) Tarif tiket pesawat penerbangan domestik mengalami lonjakan signifikan menjelang hari raya. (5) Edukasi literasi keuangan digital juga mendesak untuk digalakkan kepada generasi lanjut usia.",
    "question": "Kalimat yang sumbang (inkohoren) sehingga merusak keutuhan ide dalam paragraf di atas adalah kalimat nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(4)"
      },
      {
        "key": "C",
        "text": "(2)"
      },
      {
        "key": "D",
        "text": "(3)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Paragraf membahas topik digitalisasi perbankan dan literasi keuangan digital nasabah. Kalimat (4) tiba-tiba membahas lonjakan tarif tiket pesawat, yang sama sekali tidak relevan dengan topik utama (kalimat sumbang).",
    "quickTrick": "⚡ Langkah Taktis Neutron: Cari kalimat yang temanya keluar dari benang merah topik paragraf (out-of-topic)."
  },
  {
    "id": "bimbel_pbm_061",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Ketidakefektifan Sintaksis & Struktur Kalimat",
    "difficulty": "HOTS",
    "stimulus": "(1) Indonesia memiliki potensi energi terbarukan yang sangat masif, seperti tenaga surya dan geotermal. (2) Namun, pemanfaatan sumber energi bersih tersebut masih tergolong rendah karena tingginya biaya investasi awal. (3) Pemerintah tengah merumuskan regulasi tarif khusus agar investor tertarik menanamkan modalnya. (4) Di mana regulasi tersebut diharapkan mampu memangkas hambatan birokrasi perizinan. (5) Dengan demikian, target bauran energi nasional dapat terealisasi secara optimal.",
    "question": "Kalimat yang TIDAK EFEKTIF karena kesalahan penggunaan kata penghubung (konjungtor) yang menjadikannya tidak bersubjek terdapat pada nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(2)"
      },
      {
        "key": "C",
        "text": "(3)"
      },
      {
        "key": "D",
        "text": "(4)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Kalimat (4) diawali dengan konjungsi relatif 'Di mana...', yang menyebabkan kalimat tersebut menjadi anak kalimat yang buntung tanpa induk kalimat (tidak memiliki fungsi Subjek dan Predikat yang mandiri). Perbaikan yang tepat: hilangkan 'Di mana' atau ganti menjadi 'Regulasi tersebut diharapkan...'.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Hindari kalimat mandiri yang diawali dengan kata 'Di mana' atau 'Yang'. Itu menjadikannya klausa terikat tak lengkap."
  },
  {
    "id": "bimbel_pbm_062",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penerapan Ejaan EYD V (Tanda Baca & Gelar)",
    "difficulty": "Sedang",
    "stimulus": "Penulisan tanda baca koma (,) dan huruf kapital pada nama jabatan sering kali mengalami kerancuan di dokumen resmi instansi.",
    "question": "Kalimat berikut yang MEMATUHI kaidah Ejaan Bahasa Indonesia yang Disempurnakan (EYD V) secara tepat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Profesor Bambang Sudrajat, M.Sc., dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "B",
        "text": "Profesor Bambang Sudrajat M.Sc dilantik sebagai rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "C",
        "text": "Profesor Bambang Sudrajat, M.Sc, dilantik sebagai Rektor universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "D",
        "text": "Profesor Bambang Sudrajat, M.Sc. dilantik sebagai rektor Universitas gadjah mada kemarin pagi."
      },
      {
        "key": "E",
        "text": "Profesor Bambang Sudrajat M.Sc. dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Berdasarkan EYD V: (1) Gelar akademik yang mengikuti nama orang diapit oleh tanda koma sebelum dan sesudah gelar jika berada di tengah kalimat; (2) Singkatan gelar dipisah titik (M.Sc.); (3) Nama jabatan yang diikuti nama instansi spesifik ditulis kapital (Rektor Universitas Gadjah Mada).",
    "quickTrick": "🌟 NF Smart Solution: Periksa tanda koma ganda sebelum dan sesudah gelar bila di tengah kalimat, serta titik di setiap inisial gelar."
  },
  {
    "id": "bimbel_pbm_063",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penulisan Kata Baku & Bentuk Terikat",
    "difficulty": "HOTS",
    "stimulus": "Para peneliti muda itu berdiskusi secara mendalam mengenai dampak limbah mikroplastik bagi ekosistem terumbu karang.",
    "question": "Penulisan gabungan kata berikut yang SELURUHNYA BAKU menurut KBBI dan EYD V adalah...",
    "options": [
      {
        "key": "A",
        "text": "tanggungjawab, kerjasama, pasca sarjana, tandatangan"
      },
      {
        "key": "B",
        "text": "tanggung jawab, kerja sama, pasca sarjana, tanda tangan"
      },
      {
        "key": "C",
        "text": "tanggung jawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "D",
        "text": "tanggungjawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "E",
        "text": "tanggung jawab, kerjasama, pascasarjana, tandatangan"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Bentuk dasar 'tanggung jawab', 'kerja sama', dan 'tanda tangan' ditulis terpisah karena tidak mendapat imbuhan gabung (konfiks). Unsur terikat 'pasca-' harus ditulis serangkai dengan kata yang mengikutinya ('pascasarjana').",
    "quickTrick": "🧠 Zenius Core Logic: Kata gabung ditulis pisah kecuali jika mendapat imbuhan awal-akhir sekaligus (pertanggungjawaban) atau memakai bentuk terikat (pasca-, antar-, sub-)."
  },
  {
    "id": "bimbel_pbm_064",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Analisis Fungsi Sintaksis & Struktur Kalimat",
    "difficulty": "Sedang",
    "stimulus": "Kegiatan observasi lapangan tersebut bertujuan untuk mengidentifikasi spesies burung langka di hutan lindung.",
    "question": "Pola kalimat di atas (S-P-O-K) memiliki struktur inti yang sama dengan kalimat...",
    "options": [
      {
        "key": "A",
        "text": "Hujan deras mengguyur seluruh kawasan ibu kota semalaman."
      },
      {
        "key": "B",
        "text": "Anak-anak itu berlarian gembira di sepanjang pantai berpasir putih."
      },
      {
        "key": "C",
        "text": "Buku ensiklopedia sains terbaru itu sangat tebal dan informatif."
      },
      {
        "key": "D",
        "text": "Mereka sedang mendiskusikan masalah keuangan keluarga."
      },
      {
        "key": "E",
        "text": "Tim medis darurat memeriksa puluhan korban gempa di posko kesehatan pengungsian."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Pola kalimat asli: [Kegiatan observasi lapangan tersebut] (S) [bertujuan untuk mengidentifikasi] (P) [spesies burung langka] (O) [di hutan lindung] (K). Kalimat pada opsi yang setara: [Tim medis darurat] (S) [memeriksa] (P) [puluhan korban gempa] (O) [di posko kesehatan pengungsian] (K).",
    "quickTrick": "💡 INTEN Quick Concept: Petakan konstituen dasar kalimat: siapa yang bertindak (S), predikat transitif (P), objek langsung (O), dan keterangan tempat (K)."
  },
  {
    "id": "bimbel_pbm_065",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Kepaduan & Koherensi Paragraf",
    "difficulty": "HOTS",
    "stimulus": "(1) Digitalisasi perbankan mempermudah transaksi masyarakat di berbagai pelosok daerah. (2) Aplikasi mobile banking memungkinkan transfer dana dalam hitungan detik. (3) Keamanan data nasabah harus terus ditingkatkan untuk mencegah kebocoran informasi. (4) Tarif tiket pesawat penerbangan domestik mengalami lonjakan signifikan menjelang hari raya. (5) Edukasi literasi keuangan digital juga mendesak untuk digalakkan kepada generasi lanjut usia.",
    "question": "Kalimat yang sumbang (inkohoren) sehingga merusak keutuhan ide dalam paragraf di atas adalah kalimat nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(4)"
      },
      {
        "key": "C",
        "text": "(2)"
      },
      {
        "key": "D",
        "text": "(3)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Paragraf membahas topik digitalisasi perbankan dan literasi keuangan digital nasabah. Kalimat (4) tiba-tiba membahas lonjakan tarif tiket pesawat, yang sama sekali tidak relevan dengan topik utama (kalimat sumbang).",
    "quickTrick": "👑 Metode The King GO: Cari kalimat yang temanya keluar dari benang merah topik paragraf (out-of-topic)."
  },
  {
    "id": "bimbel_pbm_066",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Ketidakefektifan Sintaksis & Struktur Kalimat",
    "difficulty": "Sedang",
    "stimulus": "(1) Indonesia memiliki potensi energi terbarukan yang sangat masif, seperti tenaga surya dan geotermal. (2) Namun, pemanfaatan sumber energi bersih tersebut masih tergolong rendah karena tingginya biaya investasi awal. (3) Pemerintah tengah merumuskan regulasi tarif khusus agar investor tertarik menanamkan modalnya. (4) Di mana regulasi tersebut diharapkan mampu memangkas hambatan birokrasi perizinan. (5) Dengan demikian, target bauran energi nasional dapat terealisasi secara optimal.",
    "question": "Kalimat yang TIDAK EFEKTIF karena kesalahan penggunaan kata penghubung (konjungtor) yang menjadikannya tidak bersubjek terdapat pada nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(2)"
      },
      {
        "key": "C",
        "text": "(3)"
      },
      {
        "key": "D",
        "text": "(4)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Kalimat (4) diawali dengan konjungsi relatif 'Di mana...', yang menyebabkan kalimat tersebut menjadi anak kalimat yang buntung tanpa induk kalimat (tidak memiliki fungsi Subjek dan Predikat yang mandiri). Perbaikan yang tepat: hilangkan 'Di mana' atau ganti menjadi 'Regulasi tersebut diharapkan...'.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Hindari kalimat mandiri yang diawali dengan kata 'Di mana' atau 'Yang'. Itu menjadikannya klausa terikat tak lengkap."
  },
  {
    "id": "bimbel_pbm_067",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penerapan Ejaan EYD V (Tanda Baca & Gelar)",
    "difficulty": "HOTS",
    "stimulus": "Penulisan tanda baca koma (,) dan huruf kapital pada nama jabatan sering kali mengalami kerancuan di dokumen resmi instansi.",
    "question": "Kalimat berikut yang MEMATUHI kaidah Ejaan Bahasa Indonesia yang Disempurnakan (EYD V) secara tepat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Profesor Bambang Sudrajat, M.Sc., dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "B",
        "text": "Profesor Bambang Sudrajat M.Sc dilantik sebagai rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "C",
        "text": "Profesor Bambang Sudrajat, M.Sc, dilantik sebagai Rektor universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "D",
        "text": "Profesor Bambang Sudrajat, M.Sc. dilantik sebagai rektor Universitas gadjah mada kemarin pagi."
      },
      {
        "key": "E",
        "text": "Profesor Bambang Sudrajat M.Sc. dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Berdasarkan EYD V: (1) Gelar akademik yang mengikuti nama orang diapit oleh tanda koma sebelum dan sesudah gelar jika berada di tengah kalimat; (2) Singkatan gelar dipisah titik (M.Sc.); (3) Nama jabatan yang diikuti nama instansi spesifik ditulis kapital (Rektor Universitas Gadjah Mada).",
    "quickTrick": "🚀 Brain Academy Fast Trick: Periksa tanda koma ganda sebelum dan sesudah gelar bila di tengah kalimat, serta titik di setiap inisial gelar."
  },
  {
    "id": "bimbel_pbm_068",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penulisan Kata Baku & Bentuk Terikat",
    "difficulty": "Sedang",
    "stimulus": "Para peneliti muda itu berdiskusi secara mendalam mengenai dampak limbah mikroplastik bagi ekosistem terumbu karang.",
    "question": "Penulisan gabungan kata berikut yang SELURUHNYA BAKU menurut KBBI dan EYD V adalah...",
    "options": [
      {
        "key": "A",
        "text": "tanggungjawab, kerjasama, pasca sarjana, tandatangan"
      },
      {
        "key": "B",
        "text": "tanggung jawab, kerja sama, pasca sarjana, tanda tangan"
      },
      {
        "key": "C",
        "text": "tanggung jawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "D",
        "text": "tanggungjawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "E",
        "text": "tanggung jawab, kerjasama, pascasarjana, tandatangan"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Bentuk dasar 'tanggung jawab', 'kerja sama', dan 'tanda tangan' ditulis terpisah karena tidak mendapat imbuhan gabung (konfiks). Unsur terikat 'pasca-' harus ditulis serangkai dengan kata yang mengikutinya ('pascasarjana').",
    "quickTrick": "🌟 NF Smart Solution: Kata gabung ditulis pisah kecuali jika mendapat imbuhan awal-akhir sekaligus (pertanggungjawaban) atau memakai bentuk terikat (pasca-, antar-, sub-)."
  },
  {
    "id": "bimbel_pbm_069",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Analisis Fungsi Sintaksis & Struktur Kalimat",
    "difficulty": "HOTS",
    "stimulus": "Kegiatan observasi lapangan tersebut bertujuan untuk mengidentifikasi spesies burung langka di hutan lindung.",
    "question": "Pola kalimat di atas (S-P-O-K) memiliki struktur inti yang sama dengan kalimat...",
    "options": [
      {
        "key": "A",
        "text": "Hujan deras mengguyur seluruh kawasan ibu kota semalaman."
      },
      {
        "key": "B",
        "text": "Anak-anak itu berlarian gembira di sepanjang pantai berpasir putih."
      },
      {
        "key": "C",
        "text": "Buku ensiklopedia sains terbaru itu sangat tebal dan informatif."
      },
      {
        "key": "D",
        "text": "Mereka sedang mendiskusikan masalah keuangan keluarga."
      },
      {
        "key": "E",
        "text": "Tim medis darurat memeriksa puluhan korban gempa di posko kesehatan pengungsian."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Pola kalimat asli: [Kegiatan observasi lapangan tersebut] (S) [bertujuan untuk mengidentifikasi] (P) [spesies burung langka] (O) [di hutan lindung] (K). Kalimat pada opsi yang setara: [Tim medis darurat] (S) [memeriksa] (P) [puluhan korban gempa] (O) [di posko kesehatan pengungsian] (K).",
    "quickTrick": "🧠 Zenius Core Logic: Petakan konstituen dasar kalimat: siapa yang bertindak (S), predikat transitif (P), objek langsung (O), dan keterangan tempat (K)."
  },
  {
    "id": "bimbel_pbm_070",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Kepaduan & Koherensi Paragraf",
    "difficulty": "Sedang",
    "stimulus": "(1) Digitalisasi perbankan mempermudah transaksi masyarakat di berbagai pelosok daerah. (2) Aplikasi mobile banking memungkinkan transfer dana dalam hitungan detik. (3) Keamanan data nasabah harus terus ditingkatkan untuk mencegah kebocoran informasi. (4) Tarif tiket pesawat penerbangan domestik mengalami lonjakan signifikan menjelang hari raya. (5) Edukasi literasi keuangan digital juga mendesak untuk digalakkan kepada generasi lanjut usia.",
    "question": "Kalimat yang sumbang (inkohoren) sehingga merusak keutuhan ide dalam paragraf di atas adalah kalimat nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(4)"
      },
      {
        "key": "C",
        "text": "(2)"
      },
      {
        "key": "D",
        "text": "(3)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Paragraf membahas topik digitalisasi perbankan dan literasi keuangan digital nasabah. Kalimat (4) tiba-tiba membahas lonjakan tarif tiket pesawat, yang sama sekali tidak relevan dengan topik utama (kalimat sumbang).",
    "quickTrick": "💡 INTEN Quick Concept: Cari kalimat yang temanya keluar dari benang merah topik paragraf (out-of-topic)."
  },
  {
    "id": "bimbel_pbm_071",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Ketidakefektifan Sintaksis & Struktur Kalimat",
    "difficulty": "HOTS",
    "stimulus": "(1) Indonesia memiliki potensi energi terbarukan yang sangat masif, seperti tenaga surya dan geotermal. (2) Namun, pemanfaatan sumber energi bersih tersebut masih tergolong rendah karena tingginya biaya investasi awal. (3) Pemerintah tengah merumuskan regulasi tarif khusus agar investor tertarik menanamkan modalnya. (4) Di mana regulasi tersebut diharapkan mampu memangkas hambatan birokrasi perizinan. (5) Dengan demikian, target bauran energi nasional dapat terealisasi secara optimal.",
    "question": "Kalimat yang TIDAK EFEKTIF karena kesalahan penggunaan kata penghubung (konjungtor) yang menjadikannya tidak bersubjek terdapat pada nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(2)"
      },
      {
        "key": "C",
        "text": "(3)"
      },
      {
        "key": "D",
        "text": "(4)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Kalimat (4) diawali dengan konjungsi relatif 'Di mana...', yang menyebabkan kalimat tersebut menjadi anak kalimat yang buntung tanpa induk kalimat (tidak memiliki fungsi Subjek dan Predikat yang mandiri). Perbaikan yang tepat: hilangkan 'Di mana' atau ganti menjadi 'Regulasi tersebut diharapkan...'.",
    "quickTrick": "👑 Metode The King GO: Hindari kalimat mandiri yang diawali dengan kata 'Di mana' atau 'Yang'. Itu menjadikannya klausa terikat tak lengkap."
  },
  {
    "id": "bimbel_pbm_072",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penerapan Ejaan EYD V (Tanda Baca & Gelar)",
    "difficulty": "Sedang",
    "stimulus": "Penulisan tanda baca koma (,) dan huruf kapital pada nama jabatan sering kali mengalami kerancuan di dokumen resmi instansi.",
    "question": "Kalimat berikut yang MEMATUHI kaidah Ejaan Bahasa Indonesia yang Disempurnakan (EYD V) secara tepat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Profesor Bambang Sudrajat, M.Sc., dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "B",
        "text": "Profesor Bambang Sudrajat M.Sc dilantik sebagai rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "C",
        "text": "Profesor Bambang Sudrajat, M.Sc, dilantik sebagai Rektor universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "D",
        "text": "Profesor Bambang Sudrajat, M.Sc. dilantik sebagai rektor Universitas gadjah mada kemarin pagi."
      },
      {
        "key": "E",
        "text": "Profesor Bambang Sudrajat M.Sc. dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Berdasarkan EYD V: (1) Gelar akademik yang mengikuti nama orang diapit oleh tanda koma sebelum dan sesudah gelar jika berada di tengah kalimat; (2) Singkatan gelar dipisah titik (M.Sc.); (3) Nama jabatan yang diikuti nama instansi spesifik ditulis kapital (Rektor Universitas Gadjah Mada).",
    "quickTrick": "⚡ Langkah Taktis Neutron: Periksa tanda koma ganda sebelum dan sesudah gelar bila di tengah kalimat, serta titik di setiap inisial gelar."
  },
  {
    "id": "bimbel_pbm_073",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penulisan Kata Baku & Bentuk Terikat",
    "difficulty": "HOTS",
    "stimulus": "Para peneliti muda itu berdiskusi secara mendalam mengenai dampak limbah mikroplastik bagi ekosistem terumbu karang.",
    "question": "Penulisan gabungan kata berikut yang SELURUHNYA BAKU menurut KBBI dan EYD V adalah...",
    "options": [
      {
        "key": "A",
        "text": "tanggungjawab, kerjasama, pasca sarjana, tandatangan"
      },
      {
        "key": "B",
        "text": "tanggung jawab, kerja sama, pasca sarjana, tanda tangan"
      },
      {
        "key": "C",
        "text": "tanggung jawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "D",
        "text": "tanggungjawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "E",
        "text": "tanggung jawab, kerjasama, pascasarjana, tandatangan"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Bentuk dasar 'tanggung jawab', 'kerja sama', dan 'tanda tangan' ditulis terpisah karena tidak mendapat imbuhan gabung (konfiks). Unsur terikat 'pasca-' harus ditulis serangkai dengan kata yang mengikutinya ('pascasarjana').",
    "quickTrick": "🚀 Brain Academy Fast Trick: Kata gabung ditulis pisah kecuali jika mendapat imbuhan awal-akhir sekaligus (pertanggungjawaban) atau memakai bentuk terikat (pasca-, antar-, sub-)."
  },
  {
    "id": "bimbel_pbm_074",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Analisis Fungsi Sintaksis & Struktur Kalimat",
    "difficulty": "Sedang",
    "stimulus": "Kegiatan observasi lapangan tersebut bertujuan untuk mengidentifikasi spesies burung langka di hutan lindung.",
    "question": "Pola kalimat di atas (S-P-O-K) memiliki struktur inti yang sama dengan kalimat...",
    "options": [
      {
        "key": "A",
        "text": "Hujan deras mengguyur seluruh kawasan ibu kota semalaman."
      },
      {
        "key": "B",
        "text": "Anak-anak itu berlarian gembira di sepanjang pantai berpasir putih."
      },
      {
        "key": "C",
        "text": "Buku ensiklopedia sains terbaru itu sangat tebal dan informatif."
      },
      {
        "key": "D",
        "text": "Mereka sedang mendiskusikan masalah keuangan keluarga."
      },
      {
        "key": "E",
        "text": "Tim medis darurat memeriksa puluhan korban gempa di posko kesehatan pengungsian."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Pola kalimat asli: [Kegiatan observasi lapangan tersebut] (S) [bertujuan untuk mengidentifikasi] (P) [spesies burung langka] (O) [di hutan lindung] (K). Kalimat pada opsi yang setara: [Tim medis darurat] (S) [memeriksa] (P) [puluhan korban gempa] (O) [di posko kesehatan pengungsian] (K).",
    "quickTrick": "🌟 NF Smart Solution: Petakan konstituen dasar kalimat: siapa yang bertindak (S), predikat transitif (P), objek langsung (O), dan keterangan tempat (K)."
  },
  {
    "id": "bimbel_pbm_075",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Kepaduan & Koherensi Paragraf",
    "difficulty": "HOTS",
    "stimulus": "(1) Digitalisasi perbankan mempermudah transaksi masyarakat di berbagai pelosok daerah. (2) Aplikasi mobile banking memungkinkan transfer dana dalam hitungan detik. (3) Keamanan data nasabah harus terus ditingkatkan untuk mencegah kebocoran informasi. (4) Tarif tiket pesawat penerbangan domestik mengalami lonjakan signifikan menjelang hari raya. (5) Edukasi literasi keuangan digital juga mendesak untuk digalakkan kepada generasi lanjut usia.",
    "question": "Kalimat yang sumbang (inkohoren) sehingga merusak keutuhan ide dalam paragraf di atas adalah kalimat nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(4)"
      },
      {
        "key": "C",
        "text": "(2)"
      },
      {
        "key": "D",
        "text": "(3)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Paragraf membahas topik digitalisasi perbankan dan literasi keuangan digital nasabah. Kalimat (4) tiba-tiba membahas lonjakan tarif tiket pesawat, yang sama sekali tidak relevan dengan topik utama (kalimat sumbang).",
    "quickTrick": "🧠 Zenius Core Logic: Cari kalimat yang temanya keluar dari benang merah topik paragraf (out-of-topic)."
  },
  {
    "id": "bimbel_pbm_076",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Ketidakefektifan Sintaksis & Struktur Kalimat",
    "difficulty": "Sedang",
    "stimulus": "(1) Indonesia memiliki potensi energi terbarukan yang sangat masif, seperti tenaga surya dan geotermal. (2) Namun, pemanfaatan sumber energi bersih tersebut masih tergolong rendah karena tingginya biaya investasi awal. (3) Pemerintah tengah merumuskan regulasi tarif khusus agar investor tertarik menanamkan modalnya. (4) Di mana regulasi tersebut diharapkan mampu memangkas hambatan birokrasi perizinan. (5) Dengan demikian, target bauran energi nasional dapat terealisasi secara optimal.",
    "question": "Kalimat yang TIDAK EFEKTIF karena kesalahan penggunaan kata penghubung (konjungtor) yang menjadikannya tidak bersubjek terdapat pada nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(2)"
      },
      {
        "key": "C",
        "text": "(3)"
      },
      {
        "key": "D",
        "text": "(4)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Kalimat (4) diawali dengan konjungsi relatif 'Di mana...', yang menyebabkan kalimat tersebut menjadi anak kalimat yang buntung tanpa induk kalimat (tidak memiliki fungsi Subjek dan Predikat yang mandiri). Perbaikan yang tepat: hilangkan 'Di mana' atau ganti menjadi 'Regulasi tersebut diharapkan...'.",
    "quickTrick": "💡 INTEN Quick Concept: Hindari kalimat mandiri yang diawali dengan kata 'Di mana' atau 'Yang'. Itu menjadikannya klausa terikat tak lengkap."
  },
  {
    "id": "bimbel_pbm_077",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penerapan Ejaan EYD V (Tanda Baca & Gelar)",
    "difficulty": "HOTS",
    "stimulus": "Penulisan tanda baca koma (,) dan huruf kapital pada nama jabatan sering kali mengalami kerancuan di dokumen resmi instansi.",
    "question": "Kalimat berikut yang MEMATUHI kaidah Ejaan Bahasa Indonesia yang Disempurnakan (EYD V) secara tepat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Profesor Bambang Sudrajat, M.Sc., dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "B",
        "text": "Profesor Bambang Sudrajat M.Sc dilantik sebagai rektor Universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "C",
        "text": "Profesor Bambang Sudrajat, M.Sc, dilantik sebagai Rektor universitas Gadjah Mada kemarin pagi."
      },
      {
        "key": "D",
        "text": "Profesor Bambang Sudrajat, M.Sc. dilantik sebagai rektor Universitas gadjah mada kemarin pagi."
      },
      {
        "key": "E",
        "text": "Profesor Bambang Sudrajat M.Sc. dilantik sebagai Rektor Universitas Gadjah Mada kemarin pagi."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Berdasarkan EYD V: (1) Gelar akademik yang mengikuti nama orang diapit oleh tanda koma sebelum dan sesudah gelar jika berada di tengah kalimat; (2) Singkatan gelar dipisah titik (M.Sc.); (3) Nama jabatan yang diikuti nama instansi spesifik ditulis kapital (Rektor Universitas Gadjah Mada).",
    "quickTrick": "👑 Metode The King GO: Periksa tanda koma ganda sebelum dan sesudah gelar bila di tengah kalimat, serta titik di setiap inisial gelar."
  },
  {
    "id": "bimbel_pbm_078",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Penulisan Kata Baku & Bentuk Terikat",
    "difficulty": "Sedang",
    "stimulus": "Para peneliti muda itu berdiskusi secara mendalam mengenai dampak limbah mikroplastik bagi ekosistem terumbu karang.",
    "question": "Penulisan gabungan kata berikut yang SELURUHNYA BAKU menurut KBBI dan EYD V adalah...",
    "options": [
      {
        "key": "A",
        "text": "tanggungjawab, kerjasama, pasca sarjana, tandatangan"
      },
      {
        "key": "B",
        "text": "tanggung jawab, kerja sama, pasca sarjana, tanda tangan"
      },
      {
        "key": "C",
        "text": "tanggung jawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "D",
        "text": "tanggungjawab, kerja sama, pascasarjana, tanda tangan"
      },
      {
        "key": "E",
        "text": "tanggung jawab, kerjasama, pascasarjana, tandatangan"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Bentuk dasar 'tanggung jawab', 'kerja sama', dan 'tanda tangan' ditulis terpisah karena tidak mendapat imbuhan gabung (konfiks). Unsur terikat 'pasca-' harus ditulis serangkai dengan kata yang mengikutinya ('pascasarjana').",
    "quickTrick": "⚡ Langkah Taktis Neutron: Kata gabung ditulis pisah kecuali jika mendapat imbuhan awal-akhir sekaligus (pertanggungjawaban) atau memakai bentuk terikat (pasca-, antar-, sub-)."
  },
  {
    "id": "bimbel_pbm_079",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Analisis Fungsi Sintaksis & Struktur Kalimat",
    "difficulty": "HOTS",
    "stimulus": "Kegiatan observasi lapangan tersebut bertujuan untuk mengidentifikasi spesies burung langka di hutan lindung.",
    "question": "Pola kalimat di atas (S-P-O-K) memiliki struktur inti yang sama dengan kalimat...",
    "options": [
      {
        "key": "A",
        "text": "Hujan deras mengguyur seluruh kawasan ibu kota semalaman."
      },
      {
        "key": "B",
        "text": "Anak-anak itu berlarian gembira di sepanjang pantai berpasir putih."
      },
      {
        "key": "C",
        "text": "Buku ensiklopedia sains terbaru itu sangat tebal dan informatif."
      },
      {
        "key": "D",
        "text": "Mereka sedang mendiskusikan masalah keuangan keluarga."
      },
      {
        "key": "E",
        "text": "Tim medis darurat memeriksa puluhan korban gempa di posko kesehatan pengungsian."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Pola kalimat asli: [Kegiatan observasi lapangan tersebut] (S) [bertujuan untuk mengidentifikasi] (P) [spesies burung langka] (O) [di hutan lindung] (K). Kalimat pada opsi yang setara: [Tim medis darurat] (S) [memeriksa] (P) [puluhan korban gempa] (O) [di posko kesehatan pengungsian] (K).",
    "quickTrick": "🚀 Brain Academy Fast Trick: Petakan konstituen dasar kalimat: siapa yang bertindak (S), predikat transitif (P), objek langsung (O), dan keterangan tempat (K)."
  },
  {
    "id": "bimbel_pbm_080",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pbm",
    "subtestName": "Pemahaman Bacaan & Menulis (PBM)",
    "category": "Kepaduan & Koherensi Paragraf",
    "difficulty": "Sedang",
    "stimulus": "(1) Digitalisasi perbankan mempermudah transaksi masyarakat di berbagai pelosok daerah. (2) Aplikasi mobile banking memungkinkan transfer dana dalam hitungan detik. (3) Keamanan data nasabah harus terus ditingkatkan untuk mencegah kebocoran informasi. (4) Tarif tiket pesawat penerbangan domestik mengalami lonjakan signifikan menjelang hari raya. (5) Edukasi literasi keuangan digital juga mendesak untuk digalakkan kepada generasi lanjut usia.",
    "question": "Kalimat yang sumbang (inkohoren) sehingga merusak keutuhan ide dalam paragraf di atas adalah kalimat nomor...",
    "options": [
      {
        "key": "A",
        "text": "(1)"
      },
      {
        "key": "B",
        "text": "(4)"
      },
      {
        "key": "C",
        "text": "(2)"
      },
      {
        "key": "D",
        "text": "(3)"
      },
      {
        "key": "E",
        "text": "(5)"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Paragraf membahas topik digitalisasi perbankan dan literasi keuangan digital nasabah. Kalimat (4) tiba-tiba membahas lonjakan tarif tiket pesawat, yang sama sekali tidak relevan dengan topik utama (kalimat sumbang).",
    "quickTrick": "🌟 NF Smart Solution: Cari kalimat yang temanya keluar dari benang merah topik paragraf (out-of-topic)."
  },
  {
    "id": "bimbel_pk_001",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Aljabar (Perbandingan P vs Q)",
    "difficulty": "HOTS",
    "stimulus": "Diketahui persamaan kuadrat $x^2 - 7x + 12 = 0$ memiliki akar-akar $x_1$ dan $x_2$ dengan $x_1 > x_2$. Didefinisikan kuantitas $P = 2x_1 + x_2$ dan kuantitas $Q = 10$.",
    "question": "Manakah hubungan yang benar antara kuantitas $P$ dan $Q$ berikut?",
    "options": [
      {
        "key": "A",
        "text": "Kuantitas P lebih besar daripada Q."
      },
      {
        "key": "B",
        "text": "Kuantitas Q lebih besar daripada P."
      },
      {
        "key": "C",
        "text": "Kuantitas P sama dengan kuantitas Q."
      },
      {
        "key": "D",
        "text": "Hubungan antara P dan Q tidak dapat ditentukan dari informasi yang diberikan."
      },
      {
        "key": "E",
        "text": "Informasi yang diberikan tidak cukup untuk menghitung nilai Q."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Faktorisasi $x^2 - 7x + 12 = 0 \\implies (x - 4)(x - 3) = 0$. Karena $x_1 > x_2$, maka $x_1 = 4$ dan $x_2 = 3$. Hitung $P = 2(4) + 3 = 8 + 3 = 11$. Karena $Q = 10$, maka $P = 11 > 10 = Q$.",
    "quickTrick": "💡 INTEN Quick Concept: Akar-akar kuadrat langsung faktorkan (x-4)(x-3), substitusi ke P = 2(4)+3 = 11 > 10."
  },
  {
    "id": "bimbel_pk_002",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Geometri Bidang Datar (Tripel Pythagoras P vs Q)",
    "difficulty": "HOTS",
    "stimulus": "Sebuah segitiga siku-siku memiliki panjang sisi alas $a = 6\\text{ cm}$ dan sisi tegak $b = 8\\text{ cm}$. Kuantitas $P$ adalah keliling segitiga tersebut, sedangkan kuantitas $Q = 24\\text{ cm}$.",
    "question": "Hubungan yang tepat antara kuantitas $P$ dan $Q$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kuantitas P lebih besar daripada Q."
      },
      {
        "key": "B",
        "text": "Kuantitas Q lebih besar daripada P."
      },
      {
        "key": "C",
        "text": "Kuantitas P sama dengan kuantitas Q."
      },
      {
        "key": "D",
        "text": "Hubungan antara P dan Q tidak dapat ditentukan dari informasi yang diberikan."
      },
      {
        "key": "E",
        "text": "Informasi yang diberikan tidak cukup untuk menghitung nilai Q."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Berdasarkan tripel Pythagoras $6, 8, 10$, sisi miring segitiga $c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = 10\\text{ cm}$. Keliling segitiga $P = 6 + 8 + 10 = 24\\text{ cm}$. Karena $Q = 24\\text{ cm}$, maka $P = Q$.",
    "quickTrick": "👑 Metode The King GO: Tripel Pythagoras 6-8-10 -> Keliling = 6+8+10 = 24. P sama persis dengan Q."
  },
  {
    "id": "bimbel_pk_003",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Teori Bilangan (Analisis Kasus P vs Q)",
    "difficulty": "HOTS",
    "stimulus": "Diketahui bahwa $a$ dan $b$ adalah bilangan bulat positif sehingga $a \\cdot b = 36$. Kuantitas $P = a + b$ dan kuantitas $Q = 13$.",
    "question": "Hubungan yang tepat antara $P$ dan $Q$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kuantitas P lebih besar daripada Q."
      },
      {
        "key": "B",
        "text": "Kuantitas Q lebih besar daripada P."
      },
      {
        "key": "C",
        "text": "Kuantitas P sama dengan kuantitas Q."
      },
      {
        "key": "D",
        "text": "Hubungan antara P dan Q tidak dapat ditentukan dari informasi yang diberikan."
      },
      {
        "key": "E",
        "text": "Informasi yang diberikan tidak cukup untuk menghitung nilai Q."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Pasangan faktor positif dari 36: $(1,36) \\implies a+b=37$ ($P > Q$), $(4,9) \\implies a+b=13$ ($P = Q$), $(6,6) \\implies a+b=12$ ($P < Q$). Nilai $P$ bergantung pada pilihan $a$ dan $b$, sehingga tidak dapat ditentukan pasti.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Jika nilai variabel menghasilkan lebih dari satu kemungkinan perbandingan (bisa lebih besar, sama, atau lebih kecil), pilih Tidak Dapat Ditentukan."
  },
  {
    "id": "bimbel_pk_004",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Eksponen & Pangkat (P vs Q)",
    "difficulty": "HOTS",
    "stimulus": "Jika $2^{x+2} = 64$, kuantitas $P = x^2 - 1$ dan kuantitas $Q = 16$.",
    "question": "Manakah pernyataan yang benar?",
    "options": [
      {
        "key": "A",
        "text": "Kuantitas P lebih besar daripada Q."
      },
      {
        "key": "B",
        "text": "Kuantitas Q lebih besar daripada P."
      },
      {
        "key": "C",
        "text": "Kuantitas P sama dengan kuantitas Q."
      },
      {
        "key": "D",
        "text": "Hubungan antara P dan Q tidak dapat ditentukan dari informasi yang diberikan."
      },
      {
        "key": "E",
        "text": "Informasi yang diberikan tidak cukup untuk menghitung nilai Q."
      }
    ],
    "correctAnswer": "B",
    "explanation": "$2^{x+2} = 64 = 2^6 \\implies x + 2 = 6 \\implies x = 4$. Maka $P = 4^2 - 1 = 16 - 1 = 15$. Karena $Q = 16$, maka $P < Q$ atau $Q > P$.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Samakan basis eksponen: 2^(x+2) = 2^6 -> x=4 -> P=15 < 16."
  },
  {
    "id": "bimbel_pk_005",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Aljabar (Perbandingan P vs Q)",
    "difficulty": "HOTS",
    "stimulus": "Diketahui persamaan kuadrat $x^2 - 7x + 12 = 0$ memiliki akar-akar $x_1$ dan $x_2$ dengan $x_1 > x_2$. Didefinisikan kuantitas $P = 2x_1 + x_2$ dan kuantitas $Q = 10$.",
    "question": "Manakah hubungan yang benar antara kuantitas $P$ dan $Q$ berikut?",
    "options": [
      {
        "key": "A",
        "text": "Kuantitas P lebih besar daripada Q."
      },
      {
        "key": "B",
        "text": "Kuantitas Q lebih besar daripada P."
      },
      {
        "key": "C",
        "text": "Kuantitas P sama dengan kuantitas Q."
      },
      {
        "key": "D",
        "text": "Hubungan antara P dan Q tidak dapat ditentukan dari informasi yang diberikan."
      },
      {
        "key": "E",
        "text": "Informasi yang diberikan tidak cukup untuk menghitung nilai Q."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Faktorisasi $x^2 - 7x + 12 = 0 \\implies (x - 4)(x - 3) = 0$. Karena $x_1 > x_2$, maka $x_1 = 4$ dan $x_2 = 3$. Hitung $P = 2(4) + 3 = 8 + 3 = 11$. Karena $Q = 10$, maka $P = 11 > 10 = Q$.",
    "quickTrick": "🌟 NF Smart Solution: Akar-akar kuadrat langsung faktorkan (x-4)(x-3), substitusi ke P = 2(4)+3 = 11 > 10."
  },
  {
    "id": "bimbel_pk_006",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Geometri Bidang Datar (Tripel Pythagoras P vs Q)",
    "difficulty": "HOTS",
    "stimulus": "Sebuah segitiga siku-siku memiliki panjang sisi alas $a = 6\\text{ cm}$ dan sisi tegak $b = 8\\text{ cm}$. Kuantitas $P$ adalah keliling segitiga tersebut, sedangkan kuantitas $Q = 24\\text{ cm}$.",
    "question": "Hubungan yang tepat antara kuantitas $P$ dan $Q$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kuantitas P lebih besar daripada Q."
      },
      {
        "key": "B",
        "text": "Kuantitas Q lebih besar daripada P."
      },
      {
        "key": "C",
        "text": "Kuantitas P sama dengan kuantitas Q."
      },
      {
        "key": "D",
        "text": "Hubungan antara P dan Q tidak dapat ditentukan dari informasi yang diberikan."
      },
      {
        "key": "E",
        "text": "Informasi yang diberikan tidak cukup untuk menghitung nilai Q."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Berdasarkan tripel Pythagoras $6, 8, 10$, sisi miring segitiga $c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = 10\\text{ cm}$. Keliling segitiga $P = 6 + 8 + 10 = 24\\text{ cm}$. Karena $Q = 24\\text{ cm}$, maka $P = Q$.",
    "quickTrick": "🧠 Zenius Core Logic: Tripel Pythagoras 6-8-10 -> Keliling = 6+8+10 = 24. P sama persis dengan Q."
  },
  {
    "id": "bimbel_pk_007",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Teori Bilangan (Analisis Kasus P vs Q)",
    "difficulty": "HOTS",
    "stimulus": "Diketahui bahwa $a$ dan $b$ adalah bilangan bulat positif sehingga $a \\cdot b = 36$. Kuantitas $P = a + b$ dan kuantitas $Q = 13$.",
    "question": "Hubungan yang tepat antara $P$ dan $Q$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kuantitas P lebih besar daripada Q."
      },
      {
        "key": "B",
        "text": "Kuantitas Q lebih besar daripada P."
      },
      {
        "key": "C",
        "text": "Kuantitas P sama dengan kuantitas Q."
      },
      {
        "key": "D",
        "text": "Hubungan antara P dan Q tidak dapat ditentukan dari informasi yang diberikan."
      },
      {
        "key": "E",
        "text": "Informasi yang diberikan tidak cukup untuk menghitung nilai Q."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Pasangan faktor positif dari 36: $(1,36) \\implies a+b=37$ ($P > Q$), $(4,9) \\implies a+b=13$ ($P = Q$), $(6,6) \\implies a+b=12$ ($P < Q$). Nilai $P$ bergantung pada pilihan $a$ dan $b$, sehingga tidak dapat ditentukan pasti.",
    "quickTrick": "💡 INTEN Quick Concept: Jika nilai variabel menghasilkan lebih dari satu kemungkinan perbandingan (bisa lebih besar, sama, atau lebih kecil), pilih Tidak Dapat Ditentukan."
  },
  {
    "id": "bimbel_pk_008",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Eksponen & Pangkat (P vs Q)",
    "difficulty": "HOTS",
    "stimulus": "Jika $2^{x+2} = 64$, kuantitas $P = x^2 - 1$ dan kuantitas $Q = 16$.",
    "question": "Manakah pernyataan yang benar?",
    "options": [
      {
        "key": "A",
        "text": "Kuantitas P lebih besar daripada Q."
      },
      {
        "key": "B",
        "text": "Kuantitas Q lebih besar daripada P."
      },
      {
        "key": "C",
        "text": "Kuantitas P sama dengan kuantitas Q."
      },
      {
        "key": "D",
        "text": "Hubungan antara P dan Q tidak dapat ditentukan dari informasi yang diberikan."
      },
      {
        "key": "E",
        "text": "Informasi yang diberikan tidak cukup untuk menghitung nilai Q."
      }
    ],
    "correctAnswer": "B",
    "explanation": "$2^{x+2} = 64 = 2^6 \\implies x + 2 = 6 \\implies x = 4$. Maka $P = 4^2 - 1 = 16 - 1 = 15$. Karena $Q = 16$, maka $P < Q$ atau $Q > P$.",
    "quickTrick": "👑 Metode The King GO: Samakan basis eksponen: 2^(x+2) = 2^6 -> x=4 -> P=15 < 16."
  },
  {
    "id": "bimbel_pk_009",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Aljabar (Perbandingan P vs Q)",
    "difficulty": "HOTS",
    "stimulus": "Diketahui persamaan kuadrat $x^2 - 7x + 12 = 0$ memiliki akar-akar $x_1$ dan $x_2$ dengan $x_1 > x_2$. Didefinisikan kuantitas $P = 2x_1 + x_2$ dan kuantitas $Q = 10$.",
    "question": "Manakah hubungan yang benar antara kuantitas $P$ dan $Q$ berikut?",
    "options": [
      {
        "key": "A",
        "text": "Kuantitas P lebih besar daripada Q."
      },
      {
        "key": "B",
        "text": "Kuantitas Q lebih besar daripada P."
      },
      {
        "key": "C",
        "text": "Kuantitas P sama dengan kuantitas Q."
      },
      {
        "key": "D",
        "text": "Hubungan antara P dan Q tidak dapat ditentukan dari informasi yang diberikan."
      },
      {
        "key": "E",
        "text": "Informasi yang diberikan tidak cukup untuk menghitung nilai Q."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Faktorisasi $x^2 - 7x + 12 = 0 \\implies (x - 4)(x - 3) = 0$. Karena $x_1 > x_2$, maka $x_1 = 4$ dan $x_2 = 3$. Hitung $P = 2(4) + 3 = 8 + 3 = 11$. Karena $Q = 10$, maka $P = 11 > 10 = Q$.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Akar-akar kuadrat langsung faktorkan (x-4)(x-3), substitusi ke P = 2(4)+3 = 11 > 10."
  },
  {
    "id": "bimbel_pk_010",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Geometri Bidang Datar (Tripel Pythagoras P vs Q)",
    "difficulty": "HOTS",
    "stimulus": "Sebuah segitiga siku-siku memiliki panjang sisi alas $a = 6\\text{ cm}$ dan sisi tegak $b = 8\\text{ cm}$. Kuantitas $P$ adalah keliling segitiga tersebut, sedangkan kuantitas $Q = 24\\text{ cm}$.",
    "question": "Hubungan yang tepat antara kuantitas $P$ dan $Q$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kuantitas P lebih besar daripada Q."
      },
      {
        "key": "B",
        "text": "Kuantitas Q lebih besar daripada P."
      },
      {
        "key": "C",
        "text": "Kuantitas P sama dengan kuantitas Q."
      },
      {
        "key": "D",
        "text": "Hubungan antara P dan Q tidak dapat ditentukan dari informasi yang diberikan."
      },
      {
        "key": "E",
        "text": "Informasi yang diberikan tidak cukup untuk menghitung nilai Q."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Berdasarkan tripel Pythagoras $6, 8, 10$, sisi miring segitiga $c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = 10\\text{ cm}$. Keliling segitiga $P = 6 + 8 + 10 = 24\\text{ cm}$. Karena $Q = 24\\text{ cm}$, maka $P = Q$.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Tripel Pythagoras 6-8-10 -> Keliling = 6+8+10 = 24. P sama persis dengan Q."
  },
  {
    "id": "bimbel_pk_011",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Teori Bilangan (Analisis Kasus P vs Q)",
    "difficulty": "HOTS",
    "stimulus": "Diketahui bahwa $a$ dan $b$ adalah bilangan bulat positif sehingga $a \\cdot b = 36$. Kuantitas $P = a + b$ dan kuantitas $Q = 13$.",
    "question": "Hubungan yang tepat antara $P$ dan $Q$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kuantitas P lebih besar daripada Q."
      },
      {
        "key": "B",
        "text": "Kuantitas Q lebih besar daripada P."
      },
      {
        "key": "C",
        "text": "Kuantitas P sama dengan kuantitas Q."
      },
      {
        "key": "D",
        "text": "Hubungan antara P dan Q tidak dapat ditentukan dari informasi yang diberikan."
      },
      {
        "key": "E",
        "text": "Informasi yang diberikan tidak cukup untuk menghitung nilai Q."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Pasangan faktor positif dari 36: $(1,36) \\implies a+b=37$ ($P > Q$), $(4,9) \\implies a+b=13$ ($P = Q$), $(6,6) \\implies a+b=12$ ($P < Q$). Nilai $P$ bergantung pada pilihan $a$ dan $b$, sehingga tidak dapat ditentukan pasti.",
    "quickTrick": "🌟 NF Smart Solution: Jika nilai variabel menghasilkan lebih dari satu kemungkinan perbandingan (bisa lebih besar, sama, atau lebih kecil), pilih Tidak Dapat Ditentukan."
  },
  {
    "id": "bimbel_pk_012",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Eksponen & Pangkat (P vs Q)",
    "difficulty": "HOTS",
    "stimulus": "Jika $2^{x+2} = 64$, kuantitas $P = x^2 - 1$ dan kuantitas $Q = 16$.",
    "question": "Manakah pernyataan yang benar?",
    "options": [
      {
        "key": "A",
        "text": "Kuantitas P lebih besar daripada Q."
      },
      {
        "key": "B",
        "text": "Kuantitas Q lebih besar daripada P."
      },
      {
        "key": "C",
        "text": "Kuantitas P sama dengan kuantitas Q."
      },
      {
        "key": "D",
        "text": "Hubungan antara P dan Q tidak dapat ditentukan dari informasi yang diberikan."
      },
      {
        "key": "E",
        "text": "Informasi yang diberikan tidak cukup untuk menghitung nilai Q."
      }
    ],
    "correctAnswer": "B",
    "explanation": "$2^{x+2} = 64 = 2^6 \\implies x + 2 = 6 \\implies x = 4$. Maka $P = 4^2 - 1 = 16 - 1 = 15$. Karena $Q = 16$, maka $P < Q$ atau $Q > P$.",
    "quickTrick": "🧠 Zenius Core Logic: Samakan basis eksponen: 2^(x+2) = 2^6 -> x=4 -> P=15 < 16."
  },
  {
    "id": "bimbel_pk_013",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Aljabar (Perbandingan P vs Q)",
    "difficulty": "HOTS",
    "stimulus": "Diketahui persamaan kuadrat $x^2 - 7x + 12 = 0$ memiliki akar-akar $x_1$ dan $x_2$ dengan $x_1 > x_2$. Didefinisikan kuantitas $P = 2x_1 + x_2$ dan kuantitas $Q = 10$.",
    "question": "Manakah hubungan yang benar antara kuantitas $P$ dan $Q$ berikut?",
    "options": [
      {
        "key": "A",
        "text": "Kuantitas P lebih besar daripada Q."
      },
      {
        "key": "B",
        "text": "Kuantitas Q lebih besar daripada P."
      },
      {
        "key": "C",
        "text": "Kuantitas P sama dengan kuantitas Q."
      },
      {
        "key": "D",
        "text": "Hubungan antara P dan Q tidak dapat ditentukan dari informasi yang diberikan."
      },
      {
        "key": "E",
        "text": "Informasi yang diberikan tidak cukup untuk menghitung nilai Q."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Faktorisasi $x^2 - 7x + 12 = 0 \\implies (x - 4)(x - 3) = 0$. Karena $x_1 > x_2$, maka $x_1 = 4$ dan $x_2 = 3$. Hitung $P = 2(4) + 3 = 8 + 3 = 11$. Karena $Q = 10$, maka $P = 11 > 10 = Q$.",
    "quickTrick": "💡 INTEN Quick Concept: Akar-akar kuadrat langsung faktorkan (x-4)(x-3), substitusi ke P = 2(4)+3 = 11 > 10."
  },
  {
    "id": "bimbel_pk_014",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Geometri Bidang Datar (Tripel Pythagoras P vs Q)",
    "difficulty": "HOTS",
    "stimulus": "Sebuah segitiga siku-siku memiliki panjang sisi alas $a = 6\\text{ cm}$ dan sisi tegak $b = 8\\text{ cm}$. Kuantitas $P$ adalah keliling segitiga tersebut, sedangkan kuantitas $Q = 24\\text{ cm}$.",
    "question": "Hubungan yang tepat antara kuantitas $P$ dan $Q$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kuantitas P lebih besar daripada Q."
      },
      {
        "key": "B",
        "text": "Kuantitas Q lebih besar daripada P."
      },
      {
        "key": "C",
        "text": "Kuantitas P sama dengan kuantitas Q."
      },
      {
        "key": "D",
        "text": "Hubungan antara P dan Q tidak dapat ditentukan dari informasi yang diberikan."
      },
      {
        "key": "E",
        "text": "Informasi yang diberikan tidak cukup untuk menghitung nilai Q."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Berdasarkan tripel Pythagoras $6, 8, 10$, sisi miring segitiga $c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = 10\\text{ cm}$. Keliling segitiga $P = 6 + 8 + 10 = 24\\text{ cm}$. Karena $Q = 24\\text{ cm}$, maka $P = Q$.",
    "quickTrick": "👑 Metode The King GO: Tripel Pythagoras 6-8-10 -> Keliling = 6+8+10 = 24. P sama persis dengan Q."
  },
  {
    "id": "bimbel_pk_015",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Teori Bilangan (Analisis Kasus P vs Q)",
    "difficulty": "HOTS",
    "stimulus": "Diketahui bahwa $a$ dan $b$ adalah bilangan bulat positif sehingga $a \\cdot b = 36$. Kuantitas $P = a + b$ dan kuantitas $Q = 13$.",
    "question": "Hubungan yang tepat antara $P$ dan $Q$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kuantitas P lebih besar daripada Q."
      },
      {
        "key": "B",
        "text": "Kuantitas Q lebih besar daripada P."
      },
      {
        "key": "C",
        "text": "Kuantitas P sama dengan kuantitas Q."
      },
      {
        "key": "D",
        "text": "Hubungan antara P dan Q tidak dapat ditentukan dari informasi yang diberikan."
      },
      {
        "key": "E",
        "text": "Informasi yang diberikan tidak cukup untuk menghitung nilai Q."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Pasangan faktor positif dari 36: $(1,36) \\implies a+b=37$ ($P > Q$), $(4,9) \\implies a+b=13$ ($P = Q$), $(6,6) \\implies a+b=12$ ($P < Q$). Nilai $P$ bergantung pada pilihan $a$ dan $b$, sehingga tidak dapat ditentukan pasti.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Jika nilai variabel menghasilkan lebih dari satu kemungkinan perbandingan (bisa lebih besar, sama, atau lebih kecil), pilih Tidak Dapat Ditentukan."
  },
  {
    "id": "bimbel_pk_016",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Eksponen & Pangkat (P vs Q)",
    "difficulty": "HOTS",
    "stimulus": "Jika $2^{x+2} = 64$, kuantitas $P = x^2 - 1$ dan kuantitas $Q = 16$.",
    "question": "Manakah pernyataan yang benar?",
    "options": [
      {
        "key": "A",
        "text": "Kuantitas P lebih besar daripada Q."
      },
      {
        "key": "B",
        "text": "Kuantitas Q lebih besar daripada P."
      },
      {
        "key": "C",
        "text": "Kuantitas P sama dengan kuantitas Q."
      },
      {
        "key": "D",
        "text": "Hubungan antara P dan Q tidak dapat ditentukan dari informasi yang diberikan."
      },
      {
        "key": "E",
        "text": "Informasi yang diberikan tidak cukup untuk menghitung nilai Q."
      }
    ],
    "correctAnswer": "B",
    "explanation": "$2^{x+2} = 64 = 2^6 \\implies x + 2 = 6 \\implies x = 4$. Maka $P = 4^2 - 1 = 16 - 1 = 15$. Karena $Q = 16$, maka $P < Q$ atau $Q > P$.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Samakan basis eksponen: 2^(x+2) = 2^6 -> x=4 -> P=15 < 16."
  },
  {
    "id": "bimbel_pk_017",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Aljabar (Perbandingan P vs Q)",
    "difficulty": "HOTS",
    "stimulus": "Diketahui persamaan kuadrat $x^2 - 7x + 12 = 0$ memiliki akar-akar $x_1$ dan $x_2$ dengan $x_1 > x_2$. Didefinisikan kuantitas $P = 2x_1 + x_2$ dan kuantitas $Q = 10$.",
    "question": "Manakah hubungan yang benar antara kuantitas $P$ dan $Q$ berikut?",
    "options": [
      {
        "key": "A",
        "text": "Kuantitas P lebih besar daripada Q."
      },
      {
        "key": "B",
        "text": "Kuantitas Q lebih besar daripada P."
      },
      {
        "key": "C",
        "text": "Kuantitas P sama dengan kuantitas Q."
      },
      {
        "key": "D",
        "text": "Hubungan antara P dan Q tidak dapat ditentukan dari informasi yang diberikan."
      },
      {
        "key": "E",
        "text": "Informasi yang diberikan tidak cukup untuk menghitung nilai Q."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Faktorisasi $x^2 - 7x + 12 = 0 \\implies (x - 4)(x - 3) = 0$. Karena $x_1 > x_2$, maka $x_1 = 4$ dan $x_2 = 3$. Hitung $P = 2(4) + 3 = 8 + 3 = 11$. Karena $Q = 10$, maka $P = 11 > 10 = Q$.",
    "quickTrick": "🌟 NF Smart Solution: Akar-akar kuadrat langsung faktorkan (x-4)(x-3), substitusi ke P = 2(4)+3 = 11 > 10."
  },
  {
    "id": "bimbel_pk_018",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Geometri Bidang Datar (Tripel Pythagoras P vs Q)",
    "difficulty": "HOTS",
    "stimulus": "Sebuah segitiga siku-siku memiliki panjang sisi alas $a = 6\\text{ cm}$ dan sisi tegak $b = 8\\text{ cm}$. Kuantitas $P$ adalah keliling segitiga tersebut, sedangkan kuantitas $Q = 24\\text{ cm}$.",
    "question": "Hubungan yang tepat antara kuantitas $P$ dan $Q$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kuantitas P lebih besar daripada Q."
      },
      {
        "key": "B",
        "text": "Kuantitas Q lebih besar daripada P."
      },
      {
        "key": "C",
        "text": "Kuantitas P sama dengan kuantitas Q."
      },
      {
        "key": "D",
        "text": "Hubungan antara P dan Q tidak dapat ditentukan dari informasi yang diberikan."
      },
      {
        "key": "E",
        "text": "Informasi yang diberikan tidak cukup untuk menghitung nilai Q."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Berdasarkan tripel Pythagoras $6, 8, 10$, sisi miring segitiga $c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = 10\\text{ cm}$. Keliling segitiga $P = 6 + 8 + 10 = 24\\text{ cm}$. Karena $Q = 24\\text{ cm}$, maka $P = Q$.",
    "quickTrick": "🧠 Zenius Core Logic: Tripel Pythagoras 6-8-10 -> Keliling = 6+8+10 = 24. P sama persis dengan Q."
  },
  {
    "id": "bimbel_pk_019",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Teori Bilangan (Analisis Kasus P vs Q)",
    "difficulty": "HOTS",
    "stimulus": "Diketahui bahwa $a$ dan $b$ adalah bilangan bulat positif sehingga $a \\cdot b = 36$. Kuantitas $P = a + b$ dan kuantitas $Q = 13$.",
    "question": "Hubungan yang tepat antara $P$ dan $Q$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kuantitas P lebih besar daripada Q."
      },
      {
        "key": "B",
        "text": "Kuantitas Q lebih besar daripada P."
      },
      {
        "key": "C",
        "text": "Kuantitas P sama dengan kuantitas Q."
      },
      {
        "key": "D",
        "text": "Hubungan antara P dan Q tidak dapat ditentukan dari informasi yang diberikan."
      },
      {
        "key": "E",
        "text": "Informasi yang diberikan tidak cukup untuk menghitung nilai Q."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Pasangan faktor positif dari 36: $(1,36) \\implies a+b=37$ ($P > Q$), $(4,9) \\implies a+b=13$ ($P = Q$), $(6,6) \\implies a+b=12$ ($P < Q$). Nilai $P$ bergantung pada pilihan $a$ dan $b$, sehingga tidak dapat ditentukan pasti.",
    "quickTrick": "💡 INTEN Quick Concept: Jika nilai variabel menghasilkan lebih dari satu kemungkinan perbandingan (bisa lebih besar, sama, atau lebih kecil), pilih Tidak Dapat Ditentukan."
  },
  {
    "id": "bimbel_pk_020",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Eksponen & Pangkat (P vs Q)",
    "difficulty": "HOTS",
    "stimulus": "Jika $2^{x+2} = 64$, kuantitas $P = x^2 - 1$ dan kuantitas $Q = 16$.",
    "question": "Manakah pernyataan yang benar?",
    "options": [
      {
        "key": "A",
        "text": "Kuantitas P lebih besar daripada Q."
      },
      {
        "key": "B",
        "text": "Kuantitas Q lebih besar daripada P."
      },
      {
        "key": "C",
        "text": "Kuantitas P sama dengan kuantitas Q."
      },
      {
        "key": "D",
        "text": "Hubungan antara P dan Q tidak dapat ditentukan dari informasi yang diberikan."
      },
      {
        "key": "E",
        "text": "Informasi yang diberikan tidak cukup untuk menghitung nilai Q."
      }
    ],
    "correctAnswer": "B",
    "explanation": "$2^{x+2} = 64 = 2^6 \\implies x + 2 = 6 \\implies x = 4$. Maka $P = 4^2 - 1 = 16 - 1 = 15$. Karena $Q = 16$, maka $P < Q$ atau $Q > P$.",
    "quickTrick": "👑 Metode The King GO: Samakan basis eksponen: 2^(x+2) = 2^6 -> x=4 -> P=15 < 16."
  },
  {
    "id": "bimbel_pk_021",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Aljabar (Perbandingan P vs Q)",
    "difficulty": "HOTS",
    "stimulus": "Diketahui persamaan kuadrat $x^2 - 7x + 12 = 0$ memiliki akar-akar $x_1$ dan $x_2$ dengan $x_1 > x_2$. Didefinisikan kuantitas $P = 2x_1 + x_2$ dan kuantitas $Q = 10$.",
    "question": "Manakah hubungan yang benar antara kuantitas $P$ dan $Q$ berikut?",
    "options": [
      {
        "key": "A",
        "text": "Kuantitas P lebih besar daripada Q."
      },
      {
        "key": "B",
        "text": "Kuantitas Q lebih besar daripada P."
      },
      {
        "key": "C",
        "text": "Kuantitas P sama dengan kuantitas Q."
      },
      {
        "key": "D",
        "text": "Hubungan antara P dan Q tidak dapat ditentukan dari informasi yang diberikan."
      },
      {
        "key": "E",
        "text": "Informasi yang diberikan tidak cukup untuk menghitung nilai Q."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Faktorisasi $x^2 - 7x + 12 = 0 \\implies (x - 4)(x - 3) = 0$. Karena $x_1 > x_2$, maka $x_1 = 4$ dan $x_2 = 3$. Hitung $P = 2(4) + 3 = 8 + 3 = 11$. Karena $Q = 10$, maka $P = 11 > 10 = Q$.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Akar-akar kuadrat langsung faktorkan (x-4)(x-3), substitusi ke P = 2(4)+3 = 11 > 10."
  },
  {
    "id": "bimbel_pk_022",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Geometri Bidang Datar (Tripel Pythagoras P vs Q)",
    "difficulty": "HOTS",
    "stimulus": "Sebuah segitiga siku-siku memiliki panjang sisi alas $a = 6\\text{ cm}$ dan sisi tegak $b = 8\\text{ cm}$. Kuantitas $P$ adalah keliling segitiga tersebut, sedangkan kuantitas $Q = 24\\text{ cm}$.",
    "question": "Hubungan yang tepat antara kuantitas $P$ dan $Q$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kuantitas P lebih besar daripada Q."
      },
      {
        "key": "B",
        "text": "Kuantitas Q lebih besar daripada P."
      },
      {
        "key": "C",
        "text": "Kuantitas P sama dengan kuantitas Q."
      },
      {
        "key": "D",
        "text": "Hubungan antara P dan Q tidak dapat ditentukan dari informasi yang diberikan."
      },
      {
        "key": "E",
        "text": "Informasi yang diberikan tidak cukup untuk menghitung nilai Q."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Berdasarkan tripel Pythagoras $6, 8, 10$, sisi miring segitiga $c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = 10\\text{ cm}$. Keliling segitiga $P = 6 + 8 + 10 = 24\\text{ cm}$. Karena $Q = 24\\text{ cm}$, maka $P = Q$.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Tripel Pythagoras 6-8-10 -> Keliling = 6+8+10 = 24. P sama persis dengan Q."
  },
  {
    "id": "bimbel_pk_023",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Teori Bilangan (Analisis Kasus P vs Q)",
    "difficulty": "HOTS",
    "stimulus": "Diketahui bahwa $a$ dan $b$ adalah bilangan bulat positif sehingga $a \\cdot b = 36$. Kuantitas $P = a + b$ dan kuantitas $Q = 13$.",
    "question": "Hubungan yang tepat antara $P$ dan $Q$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kuantitas P lebih besar daripada Q."
      },
      {
        "key": "B",
        "text": "Kuantitas Q lebih besar daripada P."
      },
      {
        "key": "C",
        "text": "Kuantitas P sama dengan kuantitas Q."
      },
      {
        "key": "D",
        "text": "Hubungan antara P dan Q tidak dapat ditentukan dari informasi yang diberikan."
      },
      {
        "key": "E",
        "text": "Informasi yang diberikan tidak cukup untuk menghitung nilai Q."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Pasangan faktor positif dari 36: $(1,36) \\implies a+b=37$ ($P > Q$), $(4,9) \\implies a+b=13$ ($P = Q$), $(6,6) \\implies a+b=12$ ($P < Q$). Nilai $P$ bergantung pada pilihan $a$ dan $b$, sehingga tidak dapat ditentukan pasti.",
    "quickTrick": "🌟 NF Smart Solution: Jika nilai variabel menghasilkan lebih dari satu kemungkinan perbandingan (bisa lebih besar, sama, atau lebih kecil), pilih Tidak Dapat Ditentukan."
  },
  {
    "id": "bimbel_pk_024",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Eksponen & Pangkat (P vs Q)",
    "difficulty": "HOTS",
    "stimulus": "Jika $2^{x+2} = 64$, kuantitas $P = x^2 - 1$ dan kuantitas $Q = 16$.",
    "question": "Manakah pernyataan yang benar?",
    "options": [
      {
        "key": "A",
        "text": "Kuantitas P lebih besar daripada Q."
      },
      {
        "key": "B",
        "text": "Kuantitas Q lebih besar daripada P."
      },
      {
        "key": "C",
        "text": "Kuantitas P sama dengan kuantitas Q."
      },
      {
        "key": "D",
        "text": "Hubungan antara P dan Q tidak dapat ditentukan dari informasi yang diberikan."
      },
      {
        "key": "E",
        "text": "Informasi yang diberikan tidak cukup untuk menghitung nilai Q."
      }
    ],
    "correctAnswer": "B",
    "explanation": "$2^{x+2} = 64 = 2^6 \\implies x + 2 = 6 \\implies x = 4$. Maka $P = 4^2 - 1 = 16 - 1 = 15$. Karena $Q = 16$, maka $P < Q$ atau $Q > P$.",
    "quickTrick": "🧠 Zenius Core Logic: Samakan basis eksponen: 2^(x+2) = 2^6 -> x=4 -> P=15 < 16."
  },
  {
    "id": "bimbel_pk_025",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Aljabar (Perbandingan P vs Q)",
    "difficulty": "HOTS",
    "stimulus": "Diketahui persamaan kuadrat $x^2 - 7x + 12 = 0$ memiliki akar-akar $x_1$ dan $x_2$ dengan $x_1 > x_2$. Didefinisikan kuantitas $P = 2x_1 + x_2$ dan kuantitas $Q = 10$.",
    "question": "Manakah hubungan yang benar antara kuantitas $P$ dan $Q$ berikut?",
    "options": [
      {
        "key": "A",
        "text": "Kuantitas P lebih besar daripada Q."
      },
      {
        "key": "B",
        "text": "Kuantitas Q lebih besar daripada P."
      },
      {
        "key": "C",
        "text": "Kuantitas P sama dengan kuantitas Q."
      },
      {
        "key": "D",
        "text": "Hubungan antara P dan Q tidak dapat ditentukan dari informasi yang diberikan."
      },
      {
        "key": "E",
        "text": "Informasi yang diberikan tidak cukup untuk menghitung nilai Q."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Faktorisasi $x^2 - 7x + 12 = 0 \\implies (x - 4)(x - 3) = 0$. Karena $x_1 > x_2$, maka $x_1 = 4$ dan $x_2 = 3$. Hitung $P = 2(4) + 3 = 8 + 3 = 11$. Karena $Q = 10$, maka $P = 11 > 10 = Q$.",
    "quickTrick": "💡 INTEN Quick Concept: Akar-akar kuadrat langsung faktorkan (x-4)(x-3), substitusi ke P = 2(4)+3 = 11 > 10."
  },
  {
    "id": "bimbel_pk_026",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kecukupan Data (Pertidaksamaan Aljabar)",
    "difficulty": "HOTS",
    "stimulus": "Apakah nilai dari $x + y$ lebih besar daripada 15?\n(1) $x > 10$\n(2) $y > 6$",
    "question": "Putuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      {
        "key": "A",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup."
      },
      {
        "key": "B",
        "text": "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup."
      },
      {
        "key": "C",
        "text": "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup."
      },
      {
        "key": "D",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup."
      },
      {
        "key": "E",
        "text": "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Dari (1) saja: jika $x = 11$ dan $y = 0$, $x+y = 11 < 15$. Jika $y = 10$, $x+y = 21 > 15$. Tidak cukup.\nDari (2) saja: jika $y = 7$ dan $x = 2$, $x+y = 9 < 15$. Tidak cukup.\nDari (1) dan (2) bersama-sama: $x > 10$ dan $y > 6 \\implies x + y > 16 > 15$. Selalu bernilai benar (YA). Maka kedua pernyataan bersama-sama cukup.",
    "quickTrick": "👑 Metode The King GO: Jumlahkan pertidaksamaan sejalan: x > 10 dan y > 6 menghasilkan x + y > 16. Pasti > 15."
  },
  {
    "id": "bimbel_pk_027",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kecukupan Data (Geometri & Identitas Aljabar)",
    "difficulty": "HOTS",
    "stimulus": "Berapakah luas persegi panjang $ABCD$?\n(1) Keliling persegi panjang $ABCD$ adalah $28\\text{ cm}$.\n(2) Panjang diagonal persegi panjang $ABCD$ adalah $10\\text{ cm}$.",
    "question": "Putuskan apakah pernyataan (1) dan (2) cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      {
        "key": "A",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup."
      },
      {
        "key": "B",
        "text": "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup."
      },
      {
        "key": "C",
        "text": "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup."
      },
      {
        "key": "D",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup."
      },
      {
        "key": "E",
        "text": "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Luas $= p \\times l$.\n(1) $2(p + l) = 28 \\implies p + l = 14$. Belum cukup karena $p$ dan $l$ belum unik.\n(2) $p^2 + l^2 = 10^2 = 100$. Belum cukup.\nGabungkan: $(p+l)^2 = p^2 + 2pl + l^2 \\implies 14^2 = 100 + 2pl \\implies 196 = 100 + 2pl \\implies 2pl = 96 \\implies pl = 48$. Luas dapat ditentukan!",
    "quickTrick": "⚡ Langkah Taktis Neutron: Identitas aljabar: 2(Luas) = (p+l)^2 - (p^2+l^2) = 14^2 - 100 = 96 -> Luas = 48."
  },
  {
    "id": "bimbel_pk_028",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kecukupan Data (Statistika Rata-rata)",
    "difficulty": "HOTS",
    "stimulus": "Berapakah nilai rata-rata dari bilangan $a, b, c$?\n(1) $a + b = 24$\n(2) $c = 12$",
    "question": "Putuskan apakah pernyataan (1) dan (2) cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      {
        "key": "A",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup."
      },
      {
        "key": "B",
        "text": "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup."
      },
      {
        "key": "C",
        "text": "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup."
      },
      {
        "key": "D",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup."
      },
      {
        "key": "E",
        "text": "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Rata-rata $= \\frac{a+b+c}{3}$.\n(1) saja tidak memberikan nilai $c$.\n(2) saja tidak memberikan nilai $a+b$.\nGabungkan keduanya: $a+b+c = 24 + 12 = 36$. Rata-rata $= 36/3 = 12$. Keduanya bersama-sama cukup.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Jumlah total langsung diperoleh dari (1) + (2): 24 + 12 = 36 / 3 = 12."
  },
  {
    "id": "bimbel_pk_029",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kecukupan Data (Teori Keterbagian)",
    "difficulty": "HOTS",
    "stimulus": "Apakah bilangan bulat $n$ habis dibagi 6?\n(1) $n$ habis dibagi 2\n(2) $n$ habis dibagi 3",
    "question": "Putuskan apakah pernyataan (1) dan (2) cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      {
        "key": "A",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup."
      },
      {
        "key": "B",
        "text": "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup."
      },
      {
        "key": "C",
        "text": "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup."
      },
      {
        "key": "D",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup."
      },
      {
        "key": "E",
        "text": "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Bilangan habis dibagi 6 jika dan hanya jika habis dibagi faktor primanya yang saling prima (2 dan 3). (1) saja belum cukup (contoh: 4 habis dibagi 2 tapi tidak 6). (2) saja belum cukup (contoh: 9 habis dibagi 3 tapi tidak 6). Bersama-sama: $n$ kelipatan 2 dan 3, maka kelipatan KPK(2,3) = 6. Cukup!",
    "quickTrick": "🌟 NF Smart Solution: KPK(2, 3) = 6 karena 2 dan 3 saling prima. Kombinasi keduanya langsung membuktikan."
  },
  {
    "id": "bimbel_pk_030",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kecukupan Data (Pertidaksamaan Aljabar)",
    "difficulty": "HOTS",
    "stimulus": "Apakah nilai dari $x + y$ lebih besar daripada 15?\n(1) $x > 10$\n(2) $y > 6$",
    "question": "Putuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      {
        "key": "A",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup."
      },
      {
        "key": "B",
        "text": "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup."
      },
      {
        "key": "C",
        "text": "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup."
      },
      {
        "key": "D",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup."
      },
      {
        "key": "E",
        "text": "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Dari (1) saja: jika $x = 11$ dan $y = 0$, $x+y = 11 < 15$. Jika $y = 10$, $x+y = 21 > 15$. Tidak cukup.\nDari (2) saja: jika $y = 7$ dan $x = 2$, $x+y = 9 < 15$. Tidak cukup.\nDari (1) dan (2) bersama-sama: $x > 10$ dan $y > 6 \\implies x + y > 16 > 15$. Selalu bernilai benar (YA). Maka kedua pernyataan bersama-sama cukup.",
    "quickTrick": "🧠 Zenius Core Logic: Jumlahkan pertidaksamaan sejalan: x > 10 dan y > 6 menghasilkan x + y > 16. Pasti > 15."
  },
  {
    "id": "bimbel_pk_031",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kecukupan Data (Geometri & Identitas Aljabar)",
    "difficulty": "HOTS",
    "stimulus": "Berapakah luas persegi panjang $ABCD$?\n(1) Keliling persegi panjang $ABCD$ adalah $28\\text{ cm}$.\n(2) Panjang diagonal persegi panjang $ABCD$ adalah $10\\text{ cm}$.",
    "question": "Putuskan apakah pernyataan (1) dan (2) cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      {
        "key": "A",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup."
      },
      {
        "key": "B",
        "text": "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup."
      },
      {
        "key": "C",
        "text": "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup."
      },
      {
        "key": "D",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup."
      },
      {
        "key": "E",
        "text": "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Luas $= p \\times l$.\n(1) $2(p + l) = 28 \\implies p + l = 14$. Belum cukup karena $p$ dan $l$ belum unik.\n(2) $p^2 + l^2 = 10^2 = 100$. Belum cukup.\nGabungkan: $(p+l)^2 = p^2 + 2pl + l^2 \\implies 14^2 = 100 + 2pl \\implies 196 = 100 + 2pl \\implies 2pl = 96 \\implies pl = 48$. Luas dapat ditentukan!",
    "quickTrick": "💡 INTEN Quick Concept: Identitas aljabar: 2(Luas) = (p+l)^2 - (p^2+l^2) = 14^2 - 100 = 96 -> Luas = 48."
  },
  {
    "id": "bimbel_pk_032",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kecukupan Data (Statistika Rata-rata)",
    "difficulty": "HOTS",
    "stimulus": "Berapakah nilai rata-rata dari bilangan $a, b, c$?\n(1) $a + b = 24$\n(2) $c = 12$",
    "question": "Putuskan apakah pernyataan (1) dan (2) cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      {
        "key": "A",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup."
      },
      {
        "key": "B",
        "text": "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup."
      },
      {
        "key": "C",
        "text": "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup."
      },
      {
        "key": "D",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup."
      },
      {
        "key": "E",
        "text": "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Rata-rata $= \\frac{a+b+c}{3}$.\n(1) saja tidak memberikan nilai $c$.\n(2) saja tidak memberikan nilai $a+b$.\nGabungkan keduanya: $a+b+c = 24 + 12 = 36$. Rata-rata $= 36/3 = 12$. Keduanya bersama-sama cukup.",
    "quickTrick": "👑 Metode The King GO: Jumlah total langsung diperoleh dari (1) + (2): 24 + 12 = 36 / 3 = 12."
  },
  {
    "id": "bimbel_pk_033",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kecukupan Data (Teori Keterbagian)",
    "difficulty": "HOTS",
    "stimulus": "Apakah bilangan bulat $n$ habis dibagi 6?\n(1) $n$ habis dibagi 2\n(2) $n$ habis dibagi 3",
    "question": "Putuskan apakah pernyataan (1) dan (2) cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      {
        "key": "A",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup."
      },
      {
        "key": "B",
        "text": "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup."
      },
      {
        "key": "C",
        "text": "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup."
      },
      {
        "key": "D",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup."
      },
      {
        "key": "E",
        "text": "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Bilangan habis dibagi 6 jika dan hanya jika habis dibagi faktor primanya yang saling prima (2 dan 3). (1) saja belum cukup (contoh: 4 habis dibagi 2 tapi tidak 6). (2) saja belum cukup (contoh: 9 habis dibagi 3 tapi tidak 6). Bersama-sama: $n$ kelipatan 2 dan 3, maka kelipatan KPK(2,3) = 6. Cukup!",
    "quickTrick": "⚡ Langkah Taktis Neutron: KPK(2, 3) = 6 karena 2 dan 3 saling prima. Kombinasi keduanya langsung membuktikan."
  },
  {
    "id": "bimbel_pk_034",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kecukupan Data (Pertidaksamaan Aljabar)",
    "difficulty": "HOTS",
    "stimulus": "Apakah nilai dari $x + y$ lebih besar daripada 15?\n(1) $x > 10$\n(2) $y > 6$",
    "question": "Putuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      {
        "key": "A",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup."
      },
      {
        "key": "B",
        "text": "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup."
      },
      {
        "key": "C",
        "text": "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup."
      },
      {
        "key": "D",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup."
      },
      {
        "key": "E",
        "text": "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Dari (1) saja: jika $x = 11$ dan $y = 0$, $x+y = 11 < 15$. Jika $y = 10$, $x+y = 21 > 15$. Tidak cukup.\nDari (2) saja: jika $y = 7$ dan $x = 2$, $x+y = 9 < 15$. Tidak cukup.\nDari (1) dan (2) bersama-sama: $x > 10$ dan $y > 6 \\implies x + y > 16 > 15$. Selalu bernilai benar (YA). Maka kedua pernyataan bersama-sama cukup.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Jumlahkan pertidaksamaan sejalan: x > 10 dan y > 6 menghasilkan x + y > 16. Pasti > 15."
  },
  {
    "id": "bimbel_pk_035",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kecukupan Data (Geometri & Identitas Aljabar)",
    "difficulty": "HOTS",
    "stimulus": "Berapakah luas persegi panjang $ABCD$?\n(1) Keliling persegi panjang $ABCD$ adalah $28\\text{ cm}$.\n(2) Panjang diagonal persegi panjang $ABCD$ adalah $10\\text{ cm}$.",
    "question": "Putuskan apakah pernyataan (1) dan (2) cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      {
        "key": "A",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup."
      },
      {
        "key": "B",
        "text": "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup."
      },
      {
        "key": "C",
        "text": "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup."
      },
      {
        "key": "D",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup."
      },
      {
        "key": "E",
        "text": "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Luas $= p \\times l$.\n(1) $2(p + l) = 28 \\implies p + l = 14$. Belum cukup karena $p$ dan $l$ belum unik.\n(2) $p^2 + l^2 = 10^2 = 100$. Belum cukup.\nGabungkan: $(p+l)^2 = p^2 + 2pl + l^2 \\implies 14^2 = 100 + 2pl \\implies 196 = 100 + 2pl \\implies 2pl = 96 \\implies pl = 48$. Luas dapat ditentukan!",
    "quickTrick": "🌟 NF Smart Solution: Identitas aljabar: 2(Luas) = (p+l)^2 - (p^2+l^2) = 14^2 - 100 = 96 -> Luas = 48."
  },
  {
    "id": "bimbel_pk_036",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kecukupan Data (Statistika Rata-rata)",
    "difficulty": "HOTS",
    "stimulus": "Berapakah nilai rata-rata dari bilangan $a, b, c$?\n(1) $a + b = 24$\n(2) $c = 12$",
    "question": "Putuskan apakah pernyataan (1) dan (2) cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      {
        "key": "A",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup."
      },
      {
        "key": "B",
        "text": "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup."
      },
      {
        "key": "C",
        "text": "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup."
      },
      {
        "key": "D",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup."
      },
      {
        "key": "E",
        "text": "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Rata-rata $= \\frac{a+b+c}{3}$.\n(1) saja tidak memberikan nilai $c$.\n(2) saja tidak memberikan nilai $a+b$.\nGabungkan keduanya: $a+b+c = 24 + 12 = 36$. Rata-rata $= 36/3 = 12$. Keduanya bersama-sama cukup.",
    "quickTrick": "🧠 Zenius Core Logic: Jumlah total langsung diperoleh dari (1) + (2): 24 + 12 = 36 / 3 = 12."
  },
  {
    "id": "bimbel_pk_037",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kecukupan Data (Teori Keterbagian)",
    "difficulty": "HOTS",
    "stimulus": "Apakah bilangan bulat $n$ habis dibagi 6?\n(1) $n$ habis dibagi 2\n(2) $n$ habis dibagi 3",
    "question": "Putuskan apakah pernyataan (1) dan (2) cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      {
        "key": "A",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup."
      },
      {
        "key": "B",
        "text": "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup."
      },
      {
        "key": "C",
        "text": "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup."
      },
      {
        "key": "D",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup."
      },
      {
        "key": "E",
        "text": "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Bilangan habis dibagi 6 jika dan hanya jika habis dibagi faktor primanya yang saling prima (2 dan 3). (1) saja belum cukup (contoh: 4 habis dibagi 2 tapi tidak 6). (2) saja belum cukup (contoh: 9 habis dibagi 3 tapi tidak 6). Bersama-sama: $n$ kelipatan 2 dan 3, maka kelipatan KPK(2,3) = 6. Cukup!",
    "quickTrick": "💡 INTEN Quick Concept: KPK(2, 3) = 6 karena 2 dan 3 saling prima. Kombinasi keduanya langsung membuktikan."
  },
  {
    "id": "bimbel_pk_038",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kecukupan Data (Pertidaksamaan Aljabar)",
    "difficulty": "HOTS",
    "stimulus": "Apakah nilai dari $x + y$ lebih besar daripada 15?\n(1) $x > 10$\n(2) $y > 6$",
    "question": "Putuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      {
        "key": "A",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup."
      },
      {
        "key": "B",
        "text": "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup."
      },
      {
        "key": "C",
        "text": "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup."
      },
      {
        "key": "D",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup."
      },
      {
        "key": "E",
        "text": "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Dari (1) saja: jika $x = 11$ dan $y = 0$, $x+y = 11 < 15$. Jika $y = 10$, $x+y = 21 > 15$. Tidak cukup.\nDari (2) saja: jika $y = 7$ dan $x = 2$, $x+y = 9 < 15$. Tidak cukup.\nDari (1) dan (2) bersama-sama: $x > 10$ dan $y > 6 \\implies x + y > 16 > 15$. Selalu bernilai benar (YA). Maka kedua pernyataan bersama-sama cukup.",
    "quickTrick": "👑 Metode The King GO: Jumlahkan pertidaksamaan sejalan: x > 10 dan y > 6 menghasilkan x + y > 16. Pasti > 15."
  },
  {
    "id": "bimbel_pk_039",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kecukupan Data (Geometri & Identitas Aljabar)",
    "difficulty": "HOTS",
    "stimulus": "Berapakah luas persegi panjang $ABCD$?\n(1) Keliling persegi panjang $ABCD$ adalah $28\\text{ cm}$.\n(2) Panjang diagonal persegi panjang $ABCD$ adalah $10\\text{ cm}$.",
    "question": "Putuskan apakah pernyataan (1) dan (2) cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      {
        "key": "A",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup."
      },
      {
        "key": "B",
        "text": "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup."
      },
      {
        "key": "C",
        "text": "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup."
      },
      {
        "key": "D",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup."
      },
      {
        "key": "E",
        "text": "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Luas $= p \\times l$.\n(1) $2(p + l) = 28 \\implies p + l = 14$. Belum cukup karena $p$ dan $l$ belum unik.\n(2) $p^2 + l^2 = 10^2 = 100$. Belum cukup.\nGabungkan: $(p+l)^2 = p^2 + 2pl + l^2 \\implies 14^2 = 100 + 2pl \\implies 196 = 100 + 2pl \\implies 2pl = 96 \\implies pl = 48$. Luas dapat ditentukan!",
    "quickTrick": "⚡ Langkah Taktis Neutron: Identitas aljabar: 2(Luas) = (p+l)^2 - (p^2+l^2) = 14^2 - 100 = 96 -> Luas = 48."
  },
  {
    "id": "bimbel_pk_040",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kecukupan Data (Statistika Rata-rata)",
    "difficulty": "HOTS",
    "stimulus": "Berapakah nilai rata-rata dari bilangan $a, b, c$?\n(1) $a + b = 24$\n(2) $c = 12$",
    "question": "Putuskan apakah pernyataan (1) dan (2) cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      {
        "key": "A",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup."
      },
      {
        "key": "B",
        "text": "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup."
      },
      {
        "key": "C",
        "text": "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup."
      },
      {
        "key": "D",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup."
      },
      {
        "key": "E",
        "text": "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Rata-rata $= \\frac{a+b+c}{3}$.\n(1) saja tidak memberikan nilai $c$.\n(2) saja tidak memberikan nilai $a+b$.\nGabungkan keduanya: $a+b+c = 24 + 12 = 36$. Rata-rata $= 36/3 = 12$. Keduanya bersama-sama cukup.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Jumlah total langsung diperoleh dari (1) + (2): 24 + 12 = 36 / 3 = 12."
  },
  {
    "id": "bimbel_pk_041",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kecukupan Data (Teori Keterbagian)",
    "difficulty": "HOTS",
    "stimulus": "Apakah bilangan bulat $n$ habis dibagi 6?\n(1) $n$ habis dibagi 2\n(2) $n$ habis dibagi 3",
    "question": "Putuskan apakah pernyataan (1) dan (2) cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      {
        "key": "A",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup."
      },
      {
        "key": "B",
        "text": "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup."
      },
      {
        "key": "C",
        "text": "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup."
      },
      {
        "key": "D",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup."
      },
      {
        "key": "E",
        "text": "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Bilangan habis dibagi 6 jika dan hanya jika habis dibagi faktor primanya yang saling prima (2 dan 3). (1) saja belum cukup (contoh: 4 habis dibagi 2 tapi tidak 6). (2) saja belum cukup (contoh: 9 habis dibagi 3 tapi tidak 6). Bersama-sama: $n$ kelipatan 2 dan 3, maka kelipatan KPK(2,3) = 6. Cukup!",
    "quickTrick": "🌟 NF Smart Solution: KPK(2, 3) = 6 karena 2 dan 3 saling prima. Kombinasi keduanya langsung membuktikan."
  },
  {
    "id": "bimbel_pk_042",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kecukupan Data (Pertidaksamaan Aljabar)",
    "difficulty": "HOTS",
    "stimulus": "Apakah nilai dari $x + y$ lebih besar daripada 15?\n(1) $x > 10$\n(2) $y > 6$",
    "question": "Putuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      {
        "key": "A",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup."
      },
      {
        "key": "B",
        "text": "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup."
      },
      {
        "key": "C",
        "text": "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup."
      },
      {
        "key": "D",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup."
      },
      {
        "key": "E",
        "text": "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Dari (1) saja: jika $x = 11$ dan $y = 0$, $x+y = 11 < 15$. Jika $y = 10$, $x+y = 21 > 15$. Tidak cukup.\nDari (2) saja: jika $y = 7$ dan $x = 2$, $x+y = 9 < 15$. Tidak cukup.\nDari (1) dan (2) bersama-sama: $x > 10$ dan $y > 6 \\implies x + y > 16 > 15$. Selalu bernilai benar (YA). Maka kedua pernyataan bersama-sama cukup.",
    "quickTrick": "🧠 Zenius Core Logic: Jumlahkan pertidaksamaan sejalan: x > 10 dan y > 6 menghasilkan x + y > 16. Pasti > 15."
  },
  {
    "id": "bimbel_pk_043",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kecukupan Data (Geometri & Identitas Aljabar)",
    "difficulty": "HOTS",
    "stimulus": "Berapakah luas persegi panjang $ABCD$?\n(1) Keliling persegi panjang $ABCD$ adalah $28\\text{ cm}$.\n(2) Panjang diagonal persegi panjang $ABCD$ adalah $10\\text{ cm}$.",
    "question": "Putuskan apakah pernyataan (1) dan (2) cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      {
        "key": "A",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup."
      },
      {
        "key": "B",
        "text": "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup."
      },
      {
        "key": "C",
        "text": "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup."
      },
      {
        "key": "D",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup."
      },
      {
        "key": "E",
        "text": "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Luas $= p \\times l$.\n(1) $2(p + l) = 28 \\implies p + l = 14$. Belum cukup karena $p$ dan $l$ belum unik.\n(2) $p^2 + l^2 = 10^2 = 100$. Belum cukup.\nGabungkan: $(p+l)^2 = p^2 + 2pl + l^2 \\implies 14^2 = 100 + 2pl \\implies 196 = 100 + 2pl \\implies 2pl = 96 \\implies pl = 48$. Luas dapat ditentukan!",
    "quickTrick": "💡 INTEN Quick Concept: Identitas aljabar: 2(Luas) = (p+l)^2 - (p^2+l^2) = 14^2 - 100 = 96 -> Luas = 48."
  },
  {
    "id": "bimbel_pk_044",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kecukupan Data (Statistika Rata-rata)",
    "difficulty": "HOTS",
    "stimulus": "Berapakah nilai rata-rata dari bilangan $a, b, c$?\n(1) $a + b = 24$\n(2) $c = 12$",
    "question": "Putuskan apakah pernyataan (1) dan (2) cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      {
        "key": "A",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup."
      },
      {
        "key": "B",
        "text": "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup."
      },
      {
        "key": "C",
        "text": "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup."
      },
      {
        "key": "D",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup."
      },
      {
        "key": "E",
        "text": "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Rata-rata $= \\frac{a+b+c}{3}$.\n(1) saja tidak memberikan nilai $c$.\n(2) saja tidak memberikan nilai $a+b$.\nGabungkan keduanya: $a+b+c = 24 + 12 = 36$. Rata-rata $= 36/3 = 12$. Keduanya bersama-sama cukup.",
    "quickTrick": "👑 Metode The King GO: Jumlah total langsung diperoleh dari (1) + (2): 24 + 12 = 36 / 3 = 12."
  },
  {
    "id": "bimbel_pk_045",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kecukupan Data (Teori Keterbagian)",
    "difficulty": "HOTS",
    "stimulus": "Apakah bilangan bulat $n$ habis dibagi 6?\n(1) $n$ habis dibagi 2\n(2) $n$ habis dibagi 3",
    "question": "Putuskan apakah pernyataan (1) dan (2) cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      {
        "key": "A",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup."
      },
      {
        "key": "B",
        "text": "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup."
      },
      {
        "key": "C",
        "text": "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup."
      },
      {
        "key": "D",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup."
      },
      {
        "key": "E",
        "text": "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Bilangan habis dibagi 6 jika dan hanya jika habis dibagi faktor primanya yang saling prima (2 dan 3). (1) saja belum cukup (contoh: 4 habis dibagi 2 tapi tidak 6). (2) saja belum cukup (contoh: 9 habis dibagi 3 tapi tidak 6). Bersama-sama: $n$ kelipatan 2 dan 3, maka kelipatan KPK(2,3) = 6. Cukup!",
    "quickTrick": "⚡ Langkah Taktis Neutron: KPK(2, 3) = 6 karena 2 dan 3 saling prima. Kombinasi keduanya langsung membuktikan."
  },
  {
    "id": "bimbel_pk_046",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kecukupan Data (Pertidaksamaan Aljabar)",
    "difficulty": "HOTS",
    "stimulus": "Apakah nilai dari $x + y$ lebih besar daripada 15?\n(1) $x > 10$\n(2) $y > 6$",
    "question": "Putuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      {
        "key": "A",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup."
      },
      {
        "key": "B",
        "text": "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup."
      },
      {
        "key": "C",
        "text": "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup."
      },
      {
        "key": "D",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup."
      },
      {
        "key": "E",
        "text": "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Dari (1) saja: jika $x = 11$ dan $y = 0$, $x+y = 11 < 15$. Jika $y = 10$, $x+y = 21 > 15$. Tidak cukup.\nDari (2) saja: jika $y = 7$ dan $x = 2$, $x+y = 9 < 15$. Tidak cukup.\nDari (1) dan (2) bersama-sama: $x > 10$ dan $y > 6 \\implies x + y > 16 > 15$. Selalu bernilai benar (YA). Maka kedua pernyataan bersama-sama cukup.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Jumlahkan pertidaksamaan sejalan: x > 10 dan y > 6 menghasilkan x + y > 16. Pasti > 15."
  },
  {
    "id": "bimbel_pk_047",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kecukupan Data (Geometri & Identitas Aljabar)",
    "difficulty": "HOTS",
    "stimulus": "Berapakah luas persegi panjang $ABCD$?\n(1) Keliling persegi panjang $ABCD$ adalah $28\\text{ cm}$.\n(2) Panjang diagonal persegi panjang $ABCD$ adalah $10\\text{ cm}$.",
    "question": "Putuskan apakah pernyataan (1) dan (2) cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      {
        "key": "A",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup."
      },
      {
        "key": "B",
        "text": "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup."
      },
      {
        "key": "C",
        "text": "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup."
      },
      {
        "key": "D",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup."
      },
      {
        "key": "E",
        "text": "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Luas $= p \\times l$.\n(1) $2(p + l) = 28 \\implies p + l = 14$. Belum cukup karena $p$ dan $l$ belum unik.\n(2) $p^2 + l^2 = 10^2 = 100$. Belum cukup.\nGabungkan: $(p+l)^2 = p^2 + 2pl + l^2 \\implies 14^2 = 100 + 2pl \\implies 196 = 100 + 2pl \\implies 2pl = 96 \\implies pl = 48$. Luas dapat ditentukan!",
    "quickTrick": "🌟 NF Smart Solution: Identitas aljabar: 2(Luas) = (p+l)^2 - (p^2+l^2) = 14^2 - 100 = 96 -> Luas = 48."
  },
  {
    "id": "bimbel_pk_048",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kecukupan Data (Statistika Rata-rata)",
    "difficulty": "HOTS",
    "stimulus": "Berapakah nilai rata-rata dari bilangan $a, b, c$?\n(1) $a + b = 24$\n(2) $c = 12$",
    "question": "Putuskan apakah pernyataan (1) dan (2) cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      {
        "key": "A",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup."
      },
      {
        "key": "B",
        "text": "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup."
      },
      {
        "key": "C",
        "text": "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup."
      },
      {
        "key": "D",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup."
      },
      {
        "key": "E",
        "text": "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Rata-rata $= \\frac{a+b+c}{3}$.\n(1) saja tidak memberikan nilai $c$.\n(2) saja tidak memberikan nilai $a+b$.\nGabungkan keduanya: $a+b+c = 24 + 12 = 36$. Rata-rata $= 36/3 = 12$. Keduanya bersama-sama cukup.",
    "quickTrick": "🧠 Zenius Core Logic: Jumlah total langsung diperoleh dari (1) + (2): 24 + 12 = 36 / 3 = 12."
  },
  {
    "id": "bimbel_pk_049",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kecukupan Data (Teori Keterbagian)",
    "difficulty": "HOTS",
    "stimulus": "Apakah bilangan bulat $n$ habis dibagi 6?\n(1) $n$ habis dibagi 2\n(2) $n$ habis dibagi 3",
    "question": "Putuskan apakah pernyataan (1) dan (2) cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      {
        "key": "A",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup."
      },
      {
        "key": "B",
        "text": "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup."
      },
      {
        "key": "C",
        "text": "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup."
      },
      {
        "key": "D",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup."
      },
      {
        "key": "E",
        "text": "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Bilangan habis dibagi 6 jika dan hanya jika habis dibagi faktor primanya yang saling prima (2 dan 3). (1) saja belum cukup (contoh: 4 habis dibagi 2 tapi tidak 6). (2) saja belum cukup (contoh: 9 habis dibagi 3 tapi tidak 6). Bersama-sama: $n$ kelipatan 2 dan 3, maka kelipatan KPK(2,3) = 6. Cukup!",
    "quickTrick": "💡 INTEN Quick Concept: KPK(2, 3) = 6 karena 2 dan 3 saling prima. Kombinasi keduanya langsung membuktikan."
  },
  {
    "id": "bimbel_pk_050",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kecukupan Data (Pertidaksamaan Aljabar)",
    "difficulty": "HOTS",
    "stimulus": "Apakah nilai dari $x + y$ lebih besar daripada 15?\n(1) $x > 10$\n(2) $y > 6$",
    "question": "Putuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      {
        "key": "A",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup."
      },
      {
        "key": "B",
        "text": "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup."
      },
      {
        "key": "C",
        "text": "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup."
      },
      {
        "key": "D",
        "text": "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup."
      },
      {
        "key": "E",
        "text": "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Dari (1) saja: jika $x = 11$ dan $y = 0$, $x+y = 11 < 15$. Jika $y = 10$, $x+y = 21 > 15$. Tidak cukup.\nDari (2) saja: jika $y = 7$ dan $x = 2$, $x+y = 9 < 15$. Tidak cukup.\nDari (1) dan (2) bersama-sama: $x > 10$ dan $y > 6 \\implies x + y > 16 > 15$. Selalu bernilai benar (YA). Maka kedua pernyataan bersama-sama cukup.",
    "quickTrick": "👑 Metode The King GO: Jumlahkan pertidaksamaan sejalan: x > 10 dan y > 6 menghasilkan x + y > 16. Pasti > 15."
  },
  {
    "id": "bimbel_pk_051",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Aljabar & Fungsi Komposisi",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Jika fungsi $f(x) = 3x - 5$ dan $g(x) = x^2 + 2$, maka nilai dari $(f \\circ g)(2)$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "11"
      },
      {
        "key": "B",
        "text": "13"
      },
      {
        "key": "C",
        "text": "12"
      },
      {
        "key": "D",
        "text": "14"
      },
      {
        "key": "E",
        "text": "15"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Hitung terlebih dahulu $g(2) = 2^2 + 2 = 4 + 2 = 6$. Kemudian substitusikan ke dalam $f$: $f(g(2)) = f(6) = 3(6) - 5 = 18 - 5 = 13$.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Komposisi fungsi: hitung dari dalam: g(2)=6 -> f(6)=3(6)-5=13."
  },
  {
    "id": "bimbel_pk_052",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Aljabar (Pertidaksamaan Rasional)",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Himpunan penyelesaian dari pertidaksamaan $\\frac{2x - 3}{x + 4} \\le 1$ untuk $x \\neq -4$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "$x < -4$ atau $x \\ge 7$"
      },
      {
        "key": "B",
        "text": "$-7 \\le x < 4$"
      },
      {
        "key": "C",
        "text": "$x \\le -4$ atau $x > 7$"
      },
      {
        "key": "D",
        "text": "$-4 < x \\le 7$"
      },
      {
        "key": "E",
        "text": "$-4 \\le x \\le 7$"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Pindahkan 1 ke ruas kiri: $\\frac{2x - 3}{x + 4} - 1 \\le 0 \\implies \\frac{2x - 3 - (x + 4)}{x + 4} \\le 0 \\implies \\frac{x - 7}{x + 4} \\le 0$. Pembuat nol: $x = 7$ (pembilang, $\\le$) dan $x = -4$ (penyebut, terbuka $<$). Uji tanda menghasilkan interval $-4 < x \\le 7$.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Jadikan ruas kanan nol, samakan penyebut, uji garis bilangan dengan syarat penyebut x ≠ -4."
  },
  {
    "id": "bimbel_pk_053",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Eksponen & Logaritma",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Nilai dari $\\log_2 24 + \\log_2 16 - \\log_2 3$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "7"
      },
      {
        "key": "B",
        "text": "5"
      },
      {
        "key": "C",
        "text": "6"
      },
      {
        "key": "D",
        "text": "8"
      },
      {
        "key": "E",
        "text": "9"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Sifat logaritma: $\\log_2(24 \\times 16 / 3) = \\log_2(8 \\times 16) = \\log_2(128) = \\log_2(2^7) = 7$.",
    "quickTrick": "🌟 NF Smart Solution: Gabungkan logaritma: 24/3 = 8 -> 8 x 16 = 128 = 2^7 -> hasil = 7."
  },
  {
    "id": "bimbel_pk_054",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Matriks & Aljabar Linear",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$. Determinan dari matriks $A^2$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "10"
      },
      {
        "key": "B",
        "text": "15"
      },
      {
        "key": "C",
        "text": "25"
      },
      {
        "key": "D",
        "text": "20"
      },
      {
        "key": "E",
        "text": "30"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Determinan $A$: $\\det(A) = (2)(4) - (1)(3) = 8 - 3 = 5$. Berdasarkan sifat determinan: $\\det(A^2) = (\\det(A))^2 = 5^2 = 25$.",
    "quickTrick": "🧠 Zenius Core Logic: Sifat determinan: det(A^k) = (det(A))^k. Jangan kalikan matriksnya terlebih dahulu!"
  },
  {
    "id": "bimbel_pk_055",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Aljabar & Fungsi Komposisi",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Jika fungsi $f(x) = 3x - 5$ dan $g(x) = x^2 + 2$, maka nilai dari $(f \\circ g)(2)$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "11"
      },
      {
        "key": "B",
        "text": "12"
      },
      {
        "key": "C",
        "text": "14"
      },
      {
        "key": "D",
        "text": "15"
      },
      {
        "key": "E",
        "text": "13"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Hitung terlebih dahulu $g(2) = 2^2 + 2 = 4 + 2 = 6$. Kemudian substitusikan ke dalam $f$: $f(g(2)) = f(6) = 3(6) - 5 = 18 - 5 = 13$.",
    "quickTrick": "💡 INTEN Quick Concept: Komposisi fungsi: hitung dari dalam: g(2)=6 -> f(6)=3(6)-5=13."
  },
  {
    "id": "bimbel_pk_056",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Aljabar (Pertidaksamaan Rasional)",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Himpunan penyelesaian dari pertidaksamaan $\\frac{2x - 3}{x + 4} \\le 1$ untuk $x \\neq -4$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "$x < -4$ atau $x \\ge 7$"
      },
      {
        "key": "B",
        "text": "$-4 < x \\le 7$"
      },
      {
        "key": "C",
        "text": "$-7 \\le x < 4$"
      },
      {
        "key": "D",
        "text": "$x \\le -4$ atau $x > 7$"
      },
      {
        "key": "E",
        "text": "$-4 \\le x \\le 7$"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Pindahkan 1 ke ruas kiri: $\\frac{2x - 3}{x + 4} - 1 \\le 0 \\implies \\frac{2x - 3 - (x + 4)}{x + 4} \\le 0 \\implies \\frac{x - 7}{x + 4} \\le 0$. Pembuat nol: $x = 7$ (pembilang, $\\le$) dan $x = -4$ (penyebut, terbuka $<$). Uji tanda menghasilkan interval $-4 < x \\le 7$.",
    "quickTrick": "👑 Metode The King GO: Jadikan ruas kanan nol, samakan penyebut, uji garis bilangan dengan syarat penyebut x ≠ -4."
  },
  {
    "id": "bimbel_pk_057",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Eksponen & Logaritma",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Nilai dari $\\log_2 24 + \\log_2 16 - \\log_2 3$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "5"
      },
      {
        "key": "B",
        "text": "6"
      },
      {
        "key": "C",
        "text": "8"
      },
      {
        "key": "D",
        "text": "7"
      },
      {
        "key": "E",
        "text": "9"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Sifat logaritma: $\\log_2(24 \\times 16 / 3) = \\log_2(8 \\times 16) = \\log_2(128) = \\log_2(2^7) = 7$.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Gabungkan logaritma: 24/3 = 8 -> 8 x 16 = 128 = 2^7 -> hasil = 7."
  },
  {
    "id": "bimbel_pk_058",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Matriks & Aljabar Linear",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$. Determinan dari matriks $A^2$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "25"
      },
      {
        "key": "B",
        "text": "10"
      },
      {
        "key": "C",
        "text": "15"
      },
      {
        "key": "D",
        "text": "20"
      },
      {
        "key": "E",
        "text": "30"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Determinan $A$: $\\det(A) = (2)(4) - (1)(3) = 8 - 3 = 5$. Berdasarkan sifat determinan: $\\det(A^2) = (\\det(A))^2 = 5^2 = 25$.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Sifat determinan: det(A^k) = (det(A))^k. Jangan kalikan matriksnya terlebih dahulu!"
  },
  {
    "id": "bimbel_pk_059",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Aljabar & Fungsi Komposisi",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Jika fungsi $f(x) = 3x - 5$ dan $g(x) = x^2 + 2$, maka nilai dari $(f \\circ g)(2)$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "11"
      },
      {
        "key": "B",
        "text": "12"
      },
      {
        "key": "C",
        "text": "13"
      },
      {
        "key": "D",
        "text": "14"
      },
      {
        "key": "E",
        "text": "15"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Hitung terlebih dahulu $g(2) = 2^2 + 2 = 4 + 2 = 6$. Kemudian substitusikan ke dalam $f$: $f(g(2)) = f(6) = 3(6) - 5 = 18 - 5 = 13$.",
    "quickTrick": "🌟 NF Smart Solution: Komposisi fungsi: hitung dari dalam: g(2)=6 -> f(6)=3(6)-5=13."
  },
  {
    "id": "bimbel_pk_060",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Aljabar (Pertidaksamaan Rasional)",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Himpunan penyelesaian dari pertidaksamaan $\\frac{2x - 3}{x + 4} \\le 1$ untuk $x \\neq -4$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "$x < -4$ atau $x \\ge 7$"
      },
      {
        "key": "B",
        "text": "$-7 \\le x < 4$"
      },
      {
        "key": "C",
        "text": "$x \\le -4$ atau $x > 7$"
      },
      {
        "key": "D",
        "text": "$-4 \\le x \\le 7$"
      },
      {
        "key": "E",
        "text": "$-4 < x \\le 7$"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Pindahkan 1 ke ruas kiri: $\\frac{2x - 3}{x + 4} - 1 \\le 0 \\implies \\frac{2x - 3 - (x + 4)}{x + 4} \\le 0 \\implies \\frac{x - 7}{x + 4} \\le 0$. Pembuat nol: $x = 7$ (pembilang, $\\le$) dan $x = -4$ (penyebut, terbuka $<$). Uji tanda menghasilkan interval $-4 < x \\le 7$.",
    "quickTrick": "🧠 Zenius Core Logic: Jadikan ruas kanan nol, samakan penyebut, uji garis bilangan dengan syarat penyebut x ≠ -4."
  },
  {
    "id": "bimbel_pk_061",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Eksponen & Logaritma",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Nilai dari $\\log_2 24 + \\log_2 16 - \\log_2 3$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "5"
      },
      {
        "key": "B",
        "text": "7"
      },
      {
        "key": "C",
        "text": "6"
      },
      {
        "key": "D",
        "text": "8"
      },
      {
        "key": "E",
        "text": "9"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Sifat logaritma: $\\log_2(24 \\times 16 / 3) = \\log_2(8 \\times 16) = \\log_2(128) = \\log_2(2^7) = 7$.",
    "quickTrick": "💡 INTEN Quick Concept: Gabungkan logaritma: 24/3 = 8 -> 8 x 16 = 128 = 2^7 -> hasil = 7."
  },
  {
    "id": "bimbel_pk_062",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Matriks & Aljabar Linear",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$. Determinan dari matriks $A^2$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "10"
      },
      {
        "key": "B",
        "text": "15"
      },
      {
        "key": "C",
        "text": "20"
      },
      {
        "key": "D",
        "text": "25"
      },
      {
        "key": "E",
        "text": "30"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Determinan $A$: $\\det(A) = (2)(4) - (1)(3) = 8 - 3 = 5$. Berdasarkan sifat determinan: $\\det(A^2) = (\\det(A))^2 = 5^2 = 25$.",
    "quickTrick": "👑 Metode The King GO: Sifat determinan: det(A^k) = (det(A))^k. Jangan kalikan matriksnya terlebih dahulu!"
  },
  {
    "id": "bimbel_pk_063",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Aljabar & Fungsi Komposisi",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Jika fungsi $f(x) = 3x - 5$ dan $g(x) = x^2 + 2$, maka nilai dari $(f \\circ g)(2)$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "13"
      },
      {
        "key": "B",
        "text": "11"
      },
      {
        "key": "C",
        "text": "12"
      },
      {
        "key": "D",
        "text": "14"
      },
      {
        "key": "E",
        "text": "15"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Hitung terlebih dahulu $g(2) = 2^2 + 2 = 4 + 2 = 6$. Kemudian substitusikan ke dalam $f$: $f(g(2)) = f(6) = 3(6) - 5 = 18 - 5 = 13$.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Komposisi fungsi: hitung dari dalam: g(2)=6 -> f(6)=3(6)-5=13."
  },
  {
    "id": "bimbel_pk_064",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Aljabar (Pertidaksamaan Rasional)",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Himpunan penyelesaian dari pertidaksamaan $\\frac{2x - 3}{x + 4} \\le 1$ untuk $x \\neq -4$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "$x < -4$ atau $x \\ge 7$"
      },
      {
        "key": "B",
        "text": "$-7 \\le x < 4$"
      },
      {
        "key": "C",
        "text": "$-4 < x \\le 7$"
      },
      {
        "key": "D",
        "text": "$x \\le -4$ atau $x > 7$"
      },
      {
        "key": "E",
        "text": "$-4 \\le x \\le 7$"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Pindahkan 1 ke ruas kiri: $\\frac{2x - 3}{x + 4} - 1 \\le 0 \\implies \\frac{2x - 3 - (x + 4)}{x + 4} \\le 0 \\implies \\frac{x - 7}{x + 4} \\le 0$. Pembuat nol: $x = 7$ (pembilang, $\\le$) dan $x = -4$ (penyebut, terbuka $<$). Uji tanda menghasilkan interval $-4 < x \\le 7$.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Jadikan ruas kanan nol, samakan penyebut, uji garis bilangan dengan syarat penyebut x ≠ -4."
  },
  {
    "id": "bimbel_pk_065",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Eksponen & Logaritma",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Nilai dari $\\log_2 24 + \\log_2 16 - \\log_2 3$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "5"
      },
      {
        "key": "B",
        "text": "6"
      },
      {
        "key": "C",
        "text": "8"
      },
      {
        "key": "D",
        "text": "9"
      },
      {
        "key": "E",
        "text": "7"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Sifat logaritma: $\\log_2(24 \\times 16 / 3) = \\log_2(8 \\times 16) = \\log_2(128) = \\log_2(2^7) = 7$.",
    "quickTrick": "🌟 NF Smart Solution: Gabungkan logaritma: 24/3 = 8 -> 8 x 16 = 128 = 2^7 -> hasil = 7."
  },
  {
    "id": "bimbel_pk_066",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Matriks & Aljabar Linear",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$. Determinan dari matriks $A^2$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "10"
      },
      {
        "key": "B",
        "text": "25"
      },
      {
        "key": "C",
        "text": "15"
      },
      {
        "key": "D",
        "text": "20"
      },
      {
        "key": "E",
        "text": "30"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Determinan $A$: $\\det(A) = (2)(4) - (1)(3) = 8 - 3 = 5$. Berdasarkan sifat determinan: $\\det(A^2) = (\\det(A))^2 = 5^2 = 25$.",
    "quickTrick": "🧠 Zenius Core Logic: Sifat determinan: det(A^k) = (det(A))^k. Jangan kalikan matriksnya terlebih dahulu!"
  },
  {
    "id": "bimbel_pk_067",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Aljabar & Fungsi Komposisi",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Jika fungsi $f(x) = 3x - 5$ dan $g(x) = x^2 + 2$, maka nilai dari $(f \\circ g)(2)$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "11"
      },
      {
        "key": "B",
        "text": "12"
      },
      {
        "key": "C",
        "text": "14"
      },
      {
        "key": "D",
        "text": "13"
      },
      {
        "key": "E",
        "text": "15"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Hitung terlebih dahulu $g(2) = 2^2 + 2 = 4 + 2 = 6$. Kemudian substitusikan ke dalam $f$: $f(g(2)) = f(6) = 3(6) - 5 = 18 - 5 = 13$.",
    "quickTrick": "💡 INTEN Quick Concept: Komposisi fungsi: hitung dari dalam: g(2)=6 -> f(6)=3(6)-5=13."
  },
  {
    "id": "bimbel_pk_068",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Aljabar (Pertidaksamaan Rasional)",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Himpunan penyelesaian dari pertidaksamaan $\\frac{2x - 3}{x + 4} \\le 1$ untuk $x \\neq -4$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "$-4 < x \\le 7$"
      },
      {
        "key": "B",
        "text": "$x < -4$ atau $x \\ge 7$"
      },
      {
        "key": "C",
        "text": "$-7 \\le x < 4$"
      },
      {
        "key": "D",
        "text": "$x \\le -4$ atau $x > 7$"
      },
      {
        "key": "E",
        "text": "$-4 \\le x \\le 7$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Pindahkan 1 ke ruas kiri: $\\frac{2x - 3}{x + 4} - 1 \\le 0 \\implies \\frac{2x - 3 - (x + 4)}{x + 4} \\le 0 \\implies \\frac{x - 7}{x + 4} \\le 0$. Pembuat nol: $x = 7$ (pembilang, $\\le$) dan $x = -4$ (penyebut, terbuka $<$). Uji tanda menghasilkan interval $-4 < x \\le 7$.",
    "quickTrick": "👑 Metode The King GO: Jadikan ruas kanan nol, samakan penyebut, uji garis bilangan dengan syarat penyebut x ≠ -4."
  },
  {
    "id": "bimbel_pk_069",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Eksponen & Logaritma",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Nilai dari $\\log_2 24 + \\log_2 16 - \\log_2 3$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "5"
      },
      {
        "key": "B",
        "text": "6"
      },
      {
        "key": "C",
        "text": "7"
      },
      {
        "key": "D",
        "text": "8"
      },
      {
        "key": "E",
        "text": "9"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Sifat logaritma: $\\log_2(24 \\times 16 / 3) = \\log_2(8 \\times 16) = \\log_2(128) = \\log_2(2^7) = 7$.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Gabungkan logaritma: 24/3 = 8 -> 8 x 16 = 128 = 2^7 -> hasil = 7."
  },
  {
    "id": "bimbel_pk_070",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Matriks & Aljabar Linear",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$. Determinan dari matriks $A^2$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "10"
      },
      {
        "key": "B",
        "text": "15"
      },
      {
        "key": "C",
        "text": "20"
      },
      {
        "key": "D",
        "text": "30"
      },
      {
        "key": "E",
        "text": "25"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Determinan $A$: $\\det(A) = (2)(4) - (1)(3) = 8 - 3 = 5$. Berdasarkan sifat determinan: $\\det(A^2) = (\\det(A))^2 = 5^2 = 25$.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Sifat determinan: det(A^k) = (det(A))^k. Jangan kalikan matriksnya terlebih dahulu!"
  },
  {
    "id": "bimbel_pk_071",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Aljabar & Fungsi Komposisi",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Jika fungsi $f(x) = 3x - 5$ dan $g(x) = x^2 + 2$, maka nilai dari $(f \\circ g)(2)$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "11"
      },
      {
        "key": "B",
        "text": "13"
      },
      {
        "key": "C",
        "text": "12"
      },
      {
        "key": "D",
        "text": "14"
      },
      {
        "key": "E",
        "text": "15"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Hitung terlebih dahulu $g(2) = 2^2 + 2 = 4 + 2 = 6$. Kemudian substitusikan ke dalam $f$: $f(g(2)) = f(6) = 3(6) - 5 = 18 - 5 = 13$.",
    "quickTrick": "🌟 NF Smart Solution: Komposisi fungsi: hitung dari dalam: g(2)=6 -> f(6)=3(6)-5=13."
  },
  {
    "id": "bimbel_pk_072",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Aljabar (Pertidaksamaan Rasional)",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Himpunan penyelesaian dari pertidaksamaan $\\frac{2x - 3}{x + 4} \\le 1$ untuk $x \\neq -4$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "$x < -4$ atau $x \\ge 7$"
      },
      {
        "key": "B",
        "text": "$-7 \\le x < 4$"
      },
      {
        "key": "C",
        "text": "$x \\le -4$ atau $x > 7$"
      },
      {
        "key": "D",
        "text": "$-4 < x \\le 7$"
      },
      {
        "key": "E",
        "text": "$-4 \\le x \\le 7$"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Pindahkan 1 ke ruas kiri: $\\frac{2x - 3}{x + 4} - 1 \\le 0 \\implies \\frac{2x - 3 - (x + 4)}{x + 4} \\le 0 \\implies \\frac{x - 7}{x + 4} \\le 0$. Pembuat nol: $x = 7$ (pembilang, $\\le$) dan $x = -4$ (penyebut, terbuka $<$). Uji tanda menghasilkan interval $-4 < x \\le 7$.",
    "quickTrick": "🧠 Zenius Core Logic: Jadikan ruas kanan nol, samakan penyebut, uji garis bilangan dengan syarat penyebut x ≠ -4."
  },
  {
    "id": "bimbel_pk_073",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Eksponen & Logaritma",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Nilai dari $\\log_2 24 + \\log_2 16 - \\log_2 3$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "7"
      },
      {
        "key": "B",
        "text": "5"
      },
      {
        "key": "C",
        "text": "6"
      },
      {
        "key": "D",
        "text": "8"
      },
      {
        "key": "E",
        "text": "9"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Sifat logaritma: $\\log_2(24 \\times 16 / 3) = \\log_2(8 \\times 16) = \\log_2(128) = \\log_2(2^7) = 7$.",
    "quickTrick": "💡 INTEN Quick Concept: Gabungkan logaritma: 24/3 = 8 -> 8 x 16 = 128 = 2^7 -> hasil = 7."
  },
  {
    "id": "bimbel_pk_074",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Matriks & Aljabar Linear",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$. Determinan dari matriks $A^2$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "10"
      },
      {
        "key": "B",
        "text": "15"
      },
      {
        "key": "C",
        "text": "25"
      },
      {
        "key": "D",
        "text": "20"
      },
      {
        "key": "E",
        "text": "30"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Determinan $A$: $\\det(A) = (2)(4) - (1)(3) = 8 - 3 = 5$. Berdasarkan sifat determinan: $\\det(A^2) = (\\det(A))^2 = 5^2 = 25$.",
    "quickTrick": "👑 Metode The King GO: Sifat determinan: det(A^k) = (det(A))^k. Jangan kalikan matriksnya terlebih dahulu!"
  },
  {
    "id": "bimbel_pk_075",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Aljabar & Fungsi Komposisi",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Jika fungsi $f(x) = 3x - 5$ dan $g(x) = x^2 + 2$, maka nilai dari $(f \\circ g)(2)$ adalah...",
    "options": [
      {
        "key": "A",
        "text": "11"
      },
      {
        "key": "B",
        "text": "12"
      },
      {
        "key": "C",
        "text": "14"
      },
      {
        "key": "D",
        "text": "15"
      },
      {
        "key": "E",
        "text": "13"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Hitung terlebih dahulu $g(2) = 2^2 + 2 = 4 + 2 = 6$. Kemudian substitusikan ke dalam $f$: $f(g(2)) = f(6) = 3(6) - 5 = 18 - 5 = 13$.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Komposisi fungsi: hitung dari dalam: g(2)=6 -> f(6)=3(6)-5=13."
  },
  {
    "id": "bimbel_pk_076",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kombinatorika & Peluang",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Dari 8 orang calon pengurus OSIS yang terdiri atas 5 putra dan 3 putri, akan dipilih sebuah tim beranggotakan 3 orang. Banyaknya susunan tim yang dapat dibentuk jika tim harus memuat tepat 2 orang putra adalah...",
    "options": [
      {
        "key": "A",
        "text": "24"
      },
      {
        "key": "B",
        "text": "28"
      },
      {
        "key": "C",
        "text": "30"
      },
      {
        "key": "D",
        "text": "36"
      },
      {
        "key": "E",
        "text": "40"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Kombinasi pemilihan 2 putra dari 5 putra: $C(5, 2) = \\frac{5 \\times 4}{2 \\times 1} = 10$. Pemilihan 1 putri dari 3 putri: $C(3, 1) = 3$. Total kombinasi tim: $C(5, 2) \\times C(3, 1) = 10 \\times 3 = 30$.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Kaidah perkalian kombinasi: C(5,2) x C(3,1) = 10 x 3 = 30."
  },
  {
    "id": "bimbel_pk_077",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Statistika Dasar (Rata-rata Gabungan)",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Rata-rata nilai ujian matematika dari suatu kelas yang terdiri atas 20 siswa putra dan 15 siswa putri adalah 78. Jika rata-rata nilai siswa putri adalah 82, maka rata-rata nilai siswa putra adalah...",
    "options": [
      {
        "key": "A",
        "text": "75"
      },
      {
        "key": "B",
        "text": "72"
      },
      {
        "key": "C",
        "text": "74"
      },
      {
        "key": "D",
        "text": "76"
      },
      {
        "key": "E",
        "text": "77"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Rata-rata gabungan: $\\bar{x}_{gab} = \\frac{n_1 \\bar{x}_1 + n_2 \\bar{x}_2}{n_1 + n_2} \\implies 78 = \\frac{20 \\bar{x}_1 + 15(82)}{35}$.\n$78 \\times 35 = 20 \\bar{x}_1 + 1230 \\implies 2730 = 20 \\bar{x}_1 + 1230 \\implies 20 \\bar{x}_1 = 1500 \\implies \\bar{x}_1 = 75$.",
    "quickTrick": "🌟 NF Smart Solution: Gunakan selisih rasio: (x_putra - 78) / (82 - 78) = 15 / 20 = 3/4 -> x_putra = 78 - 3 = 75."
  },
  {
    "id": "bimbel_pk_078",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Geometri Bangun Ruang (Volume Tabung)",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Sebuah tabung memiliki jari-jari alas $r = 7\\text{ cm}$ dan tinggi $t = 10\\text{ cm}$. Volume tabung tersebut (dengan $\\pi = \\frac{22}{7}$) adalah...",
    "options": [
      {
        "key": "A",
        "text": "$1.420\\text{ cm}^3$"
      },
      {
        "key": "B",
        "text": "$1.600\\text{ cm}^3$"
      },
      {
        "key": "C",
        "text": "$1.680\\text{ cm}^3$"
      },
      {
        "key": "D",
        "text": "$1.540\\text{ cm}^3$"
      },
      {
        "key": "E",
        "text": "$1.720\\text{ cm}^3$"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Volume tabung $V = \\pi r^2 t = \\frac{22}{7} \\times 7^2 \\times 10 = 22 \\times 7 \\times 10 = 154 \\times 10 = 1.540\\text{ cm}^3$.",
    "quickTrick": "🧠 Zenius Core Logic: V = Luas Alas x Tinggi = 154 x 10 = 1.540."
  },
  {
    "id": "bimbel_pk_079",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Peluang Kejadian Majemuk",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Dua buah dadu bermata enam dilempar bersamaan satu kali. Peluang munculnya mata dadu berjumlah 8 adalah...",
    "options": [
      {
        "key": "A",
        "text": "$\\frac{1}{6}$"
      },
      {
        "key": "B",
        "text": "$\\frac{5}{36}$"
      },
      {
        "key": "C",
        "text": "$\\frac{4}{36}$"
      },
      {
        "key": "D",
        "text": "$\\frac{6}{36}$"
      },
      {
        "key": "E",
        "text": "$\\frac{7}{36}$"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Total titik sampel dua dadu: $6 \\times 6 = 36$. Pasangan jumlah 8: $(2,6), (3,5), (4,4), (5,3), (6,2)$ (ada 5 kemungkinan). Maka peluangnya adalah $\\frac{5}{36}$.",
    "quickTrick": "💡 INTEN Quick Concept: Jumlah 8 pada 2 dadu ada 5 kemungkinan: (2,6), (3,5), (4,4), (5,3), (6,2) -> 5/36."
  },
  {
    "id": "bimbel_pk_080",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kombinatorika & Peluang",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Dari 8 orang calon pengurus OSIS yang terdiri atas 5 putra dan 3 putri, akan dipilih sebuah tim beranggotakan 3 orang. Banyaknya susunan tim yang dapat dibentuk jika tim harus memuat tepat 2 orang putra adalah...",
    "options": [
      {
        "key": "A",
        "text": "24"
      },
      {
        "key": "B",
        "text": "28"
      },
      {
        "key": "C",
        "text": "36"
      },
      {
        "key": "D",
        "text": "40"
      },
      {
        "key": "E",
        "text": "30"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Kombinasi pemilihan 2 putra dari 5 putra: $C(5, 2) = \\frac{5 \\times 4}{2 \\times 1} = 10$. Pemilihan 1 putri dari 3 putri: $C(3, 1) = 3$. Total kombinasi tim: $C(5, 2) \\times C(3, 1) = 10 \\times 3 = 30$.",
    "quickTrick": "👑 Metode The King GO: Kaidah perkalian kombinasi: C(5,2) x C(3,1) = 10 x 3 = 30."
  },
  {
    "id": "bimbel_pk_081",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Statistika Dasar (Rata-rata Gabungan)",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Rata-rata nilai ujian matematika dari suatu kelas yang terdiri atas 20 siswa putra dan 15 siswa putri adalah 78. Jika rata-rata nilai siswa putri adalah 82, maka rata-rata nilai siswa putra adalah...",
    "options": [
      {
        "key": "A",
        "text": "72"
      },
      {
        "key": "B",
        "text": "74"
      },
      {
        "key": "C",
        "text": "75"
      },
      {
        "key": "D",
        "text": "76"
      },
      {
        "key": "E",
        "text": "77"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Rata-rata gabungan: $\\bar{x}_{gab} = \\frac{n_1 \\bar{x}_1 + n_2 \\bar{x}_2}{n_1 + n_2} \\implies 78 = \\frac{20 \\bar{x}_1 + 15(82)}{35}$.\n$78 \\times 35 = 20 \\bar{x}_1 + 1230 \\implies 2730 = 20 \\bar{x}_1 + 1230 \\implies 20 \\bar{x}_1 = 1500 \\implies \\bar{x}_1 = 75$.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Gunakan selisih rasio: (x_putra - 78) / (82 - 78) = 15 / 20 = 3/4 -> x_putra = 78 - 3 = 75."
  },
  {
    "id": "bimbel_pk_082",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Geometri Bangun Ruang (Volume Tabung)",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Sebuah tabung memiliki jari-jari alas $r = 7\\text{ cm}$ dan tinggi $t = 10\\text{ cm}$. Volume tabung tersebut (dengan $\\pi = \\frac{22}{7}$) adalah...",
    "options": [
      {
        "key": "A",
        "text": "$1.540\\text{ cm}^3$"
      },
      {
        "key": "B",
        "text": "$1.420\\text{ cm}^3$"
      },
      {
        "key": "C",
        "text": "$1.600\\text{ cm}^3$"
      },
      {
        "key": "D",
        "text": "$1.680\\text{ cm}^3$"
      },
      {
        "key": "E",
        "text": "$1.720\\text{ cm}^3$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Volume tabung $V = \\pi r^2 t = \\frac{22}{7} \\times 7^2 \\times 10 = 22 \\times 7 \\times 10 = 154 \\times 10 = 1.540\\text{ cm}^3$.",
    "quickTrick": "🚀 Brain Academy Fast Trick: V = Luas Alas x Tinggi = 154 x 10 = 1.540."
  },
  {
    "id": "bimbel_pk_083",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Peluang Kejadian Majemuk",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Dua buah dadu bermata enam dilempar bersamaan satu kali. Peluang munculnya mata dadu berjumlah 8 adalah...",
    "options": [
      {
        "key": "A",
        "text": "$\\frac{1}{6}$"
      },
      {
        "key": "B",
        "text": "$\\frac{4}{36}$"
      },
      {
        "key": "C",
        "text": "$\\frac{6}{36}$"
      },
      {
        "key": "D",
        "text": "$\\frac{5}{36}$"
      },
      {
        "key": "E",
        "text": "$\\frac{7}{36}$"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Total titik sampel dua dadu: $6 \\times 6 = 36$. Pasangan jumlah 8: $(2,6), (3,5), (4,4), (5,3), (6,2)$ (ada 5 kemungkinan). Maka peluangnya adalah $\\frac{5}{36}$.",
    "quickTrick": "🌟 NF Smart Solution: Jumlah 8 pada 2 dadu ada 5 kemungkinan: (2,6), (3,5), (4,4), (5,3), (6,2) -> 5/36."
  },
  {
    "id": "bimbel_pk_084",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kombinatorika & Peluang",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Dari 8 orang calon pengurus OSIS yang terdiri atas 5 putra dan 3 putri, akan dipilih sebuah tim beranggotakan 3 orang. Banyaknya susunan tim yang dapat dibentuk jika tim harus memuat tepat 2 orang putra adalah...",
    "options": [
      {
        "key": "A",
        "text": "24"
      },
      {
        "key": "B",
        "text": "30"
      },
      {
        "key": "C",
        "text": "28"
      },
      {
        "key": "D",
        "text": "36"
      },
      {
        "key": "E",
        "text": "40"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Kombinasi pemilihan 2 putra dari 5 putra: $C(5, 2) = \\frac{5 \\times 4}{2 \\times 1} = 10$. Pemilihan 1 putri dari 3 putri: $C(3, 1) = 3$. Total kombinasi tim: $C(5, 2) \\times C(3, 1) = 10 \\times 3 = 30$.",
    "quickTrick": "🧠 Zenius Core Logic: Kaidah perkalian kombinasi: C(5,2) x C(3,1) = 10 x 3 = 30."
  },
  {
    "id": "bimbel_pk_085",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Statistika Dasar (Rata-rata Gabungan)",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Rata-rata nilai ujian matematika dari suatu kelas yang terdiri atas 20 siswa putra dan 15 siswa putri adalah 78. Jika rata-rata nilai siswa putri adalah 82, maka rata-rata nilai siswa putra adalah...",
    "options": [
      {
        "key": "A",
        "text": "72"
      },
      {
        "key": "B",
        "text": "74"
      },
      {
        "key": "C",
        "text": "76"
      },
      {
        "key": "D",
        "text": "77"
      },
      {
        "key": "E",
        "text": "75"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Rata-rata gabungan: $\\bar{x}_{gab} = \\frac{n_1 \\bar{x}_1 + n_2 \\bar{x}_2}{n_1 + n_2} \\implies 78 = \\frac{20 \\bar{x}_1 + 15(82)}{35}$.\n$78 \\times 35 = 20 \\bar{x}_1 + 1230 \\implies 2730 = 20 \\bar{x}_1 + 1230 \\implies 20 \\bar{x}_1 = 1500 \\implies \\bar{x}_1 = 75$.",
    "quickTrick": "💡 INTEN Quick Concept: Gunakan selisih rasio: (x_putra - 78) / (82 - 78) = 15 / 20 = 3/4 -> x_putra = 78 - 3 = 75."
  },
  {
    "id": "bimbel_pk_086",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Geometri Bangun Ruang (Volume Tabung)",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Sebuah tabung memiliki jari-jari alas $r = 7\\text{ cm}$ dan tinggi $t = 10\\text{ cm}$. Volume tabung tersebut (dengan $\\pi = \\frac{22}{7}$) adalah...",
    "options": [
      {
        "key": "A",
        "text": "$1.420\\text{ cm}^3$"
      },
      {
        "key": "B",
        "text": "$1.600\\text{ cm}^3$"
      },
      {
        "key": "C",
        "text": "$1.540\\text{ cm}^3$"
      },
      {
        "key": "D",
        "text": "$1.680\\text{ cm}^3$"
      },
      {
        "key": "E",
        "text": "$1.720\\text{ cm}^3$"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Volume tabung $V = \\pi r^2 t = \\frac{22}{7} \\times 7^2 \\times 10 = 22 \\times 7 \\times 10 = 154 \\times 10 = 1.540\\text{ cm}^3$.",
    "quickTrick": "👑 Metode The King GO: V = Luas Alas x Tinggi = 154 x 10 = 1.540."
  },
  {
    "id": "bimbel_pk_087",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Peluang Kejadian Majemuk",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Dua buah dadu bermata enam dilempar bersamaan satu kali. Peluang munculnya mata dadu berjumlah 8 adalah...",
    "options": [
      {
        "key": "A",
        "text": "$\\frac{5}{36}$"
      },
      {
        "key": "B",
        "text": "$\\frac{1}{6}$"
      },
      {
        "key": "C",
        "text": "$\\frac{4}{36}$"
      },
      {
        "key": "D",
        "text": "$\\frac{6}{36}$"
      },
      {
        "key": "E",
        "text": "$\\frac{7}{36}$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Total titik sampel dua dadu: $6 \\times 6 = 36$. Pasangan jumlah 8: $(2,6), (3,5), (4,4), (5,3), (6,2)$ (ada 5 kemungkinan). Maka peluangnya adalah $\\frac{5}{36}$.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Jumlah 8 pada 2 dadu ada 5 kemungkinan: (2,6), (3,5), (4,4), (5,3), (6,2) -> 5/36."
  },
  {
    "id": "bimbel_pk_088",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kombinatorika & Peluang",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Dari 8 orang calon pengurus OSIS yang terdiri atas 5 putra dan 3 putri, akan dipilih sebuah tim beranggotakan 3 orang. Banyaknya susunan tim yang dapat dibentuk jika tim harus memuat tepat 2 orang putra adalah...",
    "options": [
      {
        "key": "A",
        "text": "24"
      },
      {
        "key": "B",
        "text": "28"
      },
      {
        "key": "C",
        "text": "36"
      },
      {
        "key": "D",
        "text": "30"
      },
      {
        "key": "E",
        "text": "40"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Kombinasi pemilihan 2 putra dari 5 putra: $C(5, 2) = \\frac{5 \\times 4}{2 \\times 1} = 10$. Pemilihan 1 putri dari 3 putri: $C(3, 1) = 3$. Total kombinasi tim: $C(5, 2) \\times C(3, 1) = 10 \\times 3 = 30$.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Kaidah perkalian kombinasi: C(5,2) x C(3,1) = 10 x 3 = 30."
  },
  {
    "id": "bimbel_pk_089",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Statistika Dasar (Rata-rata Gabungan)",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Rata-rata nilai ujian matematika dari suatu kelas yang terdiri atas 20 siswa putra dan 15 siswa putri adalah 78. Jika rata-rata nilai siswa putri adalah 82, maka rata-rata nilai siswa putra adalah...",
    "options": [
      {
        "key": "A",
        "text": "72"
      },
      {
        "key": "B",
        "text": "75"
      },
      {
        "key": "C",
        "text": "74"
      },
      {
        "key": "D",
        "text": "76"
      },
      {
        "key": "E",
        "text": "77"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Rata-rata gabungan: $\\bar{x}_{gab} = \\frac{n_1 \\bar{x}_1 + n_2 \\bar{x}_2}{n_1 + n_2} \\implies 78 = \\frac{20 \\bar{x}_1 + 15(82)}{35}$.\n$78 \\times 35 = 20 \\bar{x}_1 + 1230 \\implies 2730 = 20 \\bar{x}_1 + 1230 \\implies 20 \\bar{x}_1 = 1500 \\implies \\bar{x}_1 = 75$.",
    "quickTrick": "🌟 NF Smart Solution: Gunakan selisih rasio: (x_putra - 78) / (82 - 78) = 15 / 20 = 3/4 -> x_putra = 78 - 3 = 75."
  },
  {
    "id": "bimbel_pk_090",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Geometri Bangun Ruang (Volume Tabung)",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Sebuah tabung memiliki jari-jari alas $r = 7\\text{ cm}$ dan tinggi $t = 10\\text{ cm}$. Volume tabung tersebut (dengan $\\pi = \\frac{22}{7}$) adalah...",
    "options": [
      {
        "key": "A",
        "text": "$1.420\\text{ cm}^3$"
      },
      {
        "key": "B",
        "text": "$1.600\\text{ cm}^3$"
      },
      {
        "key": "C",
        "text": "$1.680\\text{ cm}^3$"
      },
      {
        "key": "D",
        "text": "$1.720\\text{ cm}^3$"
      },
      {
        "key": "E",
        "text": "$1.540\\text{ cm}^3$"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Volume tabung $V = \\pi r^2 t = \\frac{22}{7} \\times 7^2 \\times 10 = 22 \\times 7 \\times 10 = 154 \\times 10 = 1.540\\text{ cm}^3$.",
    "quickTrick": "🧠 Zenius Core Logic: V = Luas Alas x Tinggi = 154 x 10 = 1.540."
  },
  {
    "id": "bimbel_pk_091",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Peluang Kejadian Majemuk",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Dua buah dadu bermata enam dilempar bersamaan satu kali. Peluang munculnya mata dadu berjumlah 8 adalah...",
    "options": [
      {
        "key": "A",
        "text": "$\\frac{1}{6}$"
      },
      {
        "key": "B",
        "text": "$\\frac{4}{36}$"
      },
      {
        "key": "C",
        "text": "$\\frac{5}{36}$"
      },
      {
        "key": "D",
        "text": "$\\frac{6}{36}$"
      },
      {
        "key": "E",
        "text": "$\\frac{7}{36}$"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Total titik sampel dua dadu: $6 \\times 6 = 36$. Pasangan jumlah 8: $(2,6), (3,5), (4,4), (5,3), (6,2)$ (ada 5 kemungkinan). Maka peluangnya adalah $\\frac{5}{36}$.",
    "quickTrick": "💡 INTEN Quick Concept: Jumlah 8 pada 2 dadu ada 5 kemungkinan: (2,6), (3,5), (4,4), (5,3), (6,2) -> 5/36."
  },
  {
    "id": "bimbel_pk_092",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kombinatorika & Peluang",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Dari 8 orang calon pengurus OSIS yang terdiri atas 5 putra dan 3 putri, akan dipilih sebuah tim beranggotakan 3 orang. Banyaknya susunan tim yang dapat dibentuk jika tim harus memuat tepat 2 orang putra adalah...",
    "options": [
      {
        "key": "A",
        "text": "30"
      },
      {
        "key": "B",
        "text": "24"
      },
      {
        "key": "C",
        "text": "28"
      },
      {
        "key": "D",
        "text": "36"
      },
      {
        "key": "E",
        "text": "40"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Kombinasi pemilihan 2 putra dari 5 putra: $C(5, 2) = \\frac{5 \\times 4}{2 \\times 1} = 10$. Pemilihan 1 putri dari 3 putri: $C(3, 1) = 3$. Total kombinasi tim: $C(5, 2) \\times C(3, 1) = 10 \\times 3 = 30$.",
    "quickTrick": "👑 Metode The King GO: Kaidah perkalian kombinasi: C(5,2) x C(3,1) = 10 x 3 = 30."
  },
  {
    "id": "bimbel_pk_093",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Statistika Dasar (Rata-rata Gabungan)",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Rata-rata nilai ujian matematika dari suatu kelas yang terdiri atas 20 siswa putra dan 15 siswa putri adalah 78. Jika rata-rata nilai siswa putri adalah 82, maka rata-rata nilai siswa putra adalah...",
    "options": [
      {
        "key": "A",
        "text": "72"
      },
      {
        "key": "B",
        "text": "74"
      },
      {
        "key": "C",
        "text": "76"
      },
      {
        "key": "D",
        "text": "75"
      },
      {
        "key": "E",
        "text": "77"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Rata-rata gabungan: $\\bar{x}_{gab} = \\frac{n_1 \\bar{x}_1 + n_2 \\bar{x}_2}{n_1 + n_2} \\implies 78 = \\frac{20 \\bar{x}_1 + 15(82)}{35}$.\n$78 \\times 35 = 20 \\bar{x}_1 + 1230 \\implies 2730 = 20 \\bar{x}_1 + 1230 \\implies 20 \\bar{x}_1 = 1500 \\implies \\bar{x}_1 = 75$.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Gunakan selisih rasio: (x_putra - 78) / (82 - 78) = 15 / 20 = 3/4 -> x_putra = 78 - 3 = 75."
  },
  {
    "id": "bimbel_pk_094",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Geometri Bangun Ruang (Volume Tabung)",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Sebuah tabung memiliki jari-jari alas $r = 7\\text{ cm}$ dan tinggi $t = 10\\text{ cm}$. Volume tabung tersebut (dengan $\\pi = \\frac{22}{7}$) adalah...",
    "options": [
      {
        "key": "A",
        "text": "$1.420\\text{ cm}^3$"
      },
      {
        "key": "B",
        "text": "$1.540\\text{ cm}^3$"
      },
      {
        "key": "C",
        "text": "$1.600\\text{ cm}^3$"
      },
      {
        "key": "D",
        "text": "$1.680\\text{ cm}^3$"
      },
      {
        "key": "E",
        "text": "$1.720\\text{ cm}^3$"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Volume tabung $V = \\pi r^2 t = \\frac{22}{7} \\times 7^2 \\times 10 = 22 \\times 7 \\times 10 = 154 \\times 10 = 1.540\\text{ cm}^3$.",
    "quickTrick": "🚀 Brain Academy Fast Trick: V = Luas Alas x Tinggi = 154 x 10 = 1.540."
  },
  {
    "id": "bimbel_pk_095",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Peluang Kejadian Majemuk",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Dua buah dadu bermata enam dilempar bersamaan satu kali. Peluang munculnya mata dadu berjumlah 8 adalah...",
    "options": [
      {
        "key": "A",
        "text": "$\\frac{1}{6}$"
      },
      {
        "key": "B",
        "text": "$\\frac{4}{36}$"
      },
      {
        "key": "C",
        "text": "$\\frac{6}{36}$"
      },
      {
        "key": "D",
        "text": "$\\frac{7}{36}$"
      },
      {
        "key": "E",
        "text": "$\\frac{5}{36}$"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Total titik sampel dua dadu: $6 \\times 6 = 36$. Pasangan jumlah 8: $(2,6), (3,5), (4,4), (5,3), (6,2)$ (ada 5 kemungkinan). Maka peluangnya adalah $\\frac{5}{36}$.",
    "quickTrick": "🌟 NF Smart Solution: Jumlah 8 pada 2 dadu ada 5 kemungkinan: (2,6), (3,5), (4,4), (5,3), (6,2) -> 5/36."
  },
  {
    "id": "bimbel_pk_096",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kombinatorika & Peluang",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Dari 8 orang calon pengurus OSIS yang terdiri atas 5 putra dan 3 putri, akan dipilih sebuah tim beranggotakan 3 orang. Banyaknya susunan tim yang dapat dibentuk jika tim harus memuat tepat 2 orang putra adalah...",
    "options": [
      {
        "key": "A",
        "text": "24"
      },
      {
        "key": "B",
        "text": "28"
      },
      {
        "key": "C",
        "text": "30"
      },
      {
        "key": "D",
        "text": "36"
      },
      {
        "key": "E",
        "text": "40"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Kombinasi pemilihan 2 putra dari 5 putra: $C(5, 2) = \\frac{5 \\times 4}{2 \\times 1} = 10$. Pemilihan 1 putri dari 3 putri: $C(3, 1) = 3$. Total kombinasi tim: $C(5, 2) \\times C(3, 1) = 10 \\times 3 = 30$.",
    "quickTrick": "🧠 Zenius Core Logic: Kaidah perkalian kombinasi: C(5,2) x C(3,1) = 10 x 3 = 30."
  },
  {
    "id": "bimbel_pk_097",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Statistika Dasar (Rata-rata Gabungan)",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Rata-rata nilai ujian matematika dari suatu kelas yang terdiri atas 20 siswa putra dan 15 siswa putri adalah 78. Jika rata-rata nilai siswa putri adalah 82, maka rata-rata nilai siswa putra adalah...",
    "options": [
      {
        "key": "A",
        "text": "75"
      },
      {
        "key": "B",
        "text": "72"
      },
      {
        "key": "C",
        "text": "74"
      },
      {
        "key": "D",
        "text": "76"
      },
      {
        "key": "E",
        "text": "77"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Rata-rata gabungan: $\\bar{x}_{gab} = \\frac{n_1 \\bar{x}_1 + n_2 \\bar{x}_2}{n_1 + n_2} \\implies 78 = \\frac{20 \\bar{x}_1 + 15(82)}{35}$.\n$78 \\times 35 = 20 \\bar{x}_1 + 1230 \\implies 2730 = 20 \\bar{x}_1 + 1230 \\implies 20 \\bar{x}_1 = 1500 \\implies \\bar{x}_1 = 75$.",
    "quickTrick": "💡 INTEN Quick Concept: Gunakan selisih rasio: (x_putra - 78) / (82 - 78) = 15 / 20 = 3/4 -> x_putra = 78 - 3 = 75."
  },
  {
    "id": "bimbel_pk_098",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Geometri Bangun Ruang (Volume Tabung)",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Sebuah tabung memiliki jari-jari alas $r = 7\\text{ cm}$ dan tinggi $t = 10\\text{ cm}$. Volume tabung tersebut (dengan $\\pi = \\frac{22}{7}$) adalah...",
    "options": [
      {
        "key": "A",
        "text": "$1.420\\text{ cm}^3$"
      },
      {
        "key": "B",
        "text": "$1.600\\text{ cm}^3$"
      },
      {
        "key": "C",
        "text": "$1.680\\text{ cm}^3$"
      },
      {
        "key": "D",
        "text": "$1.540\\text{ cm}^3$"
      },
      {
        "key": "E",
        "text": "$1.720\\text{ cm}^3$"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Volume tabung $V = \\pi r^2 t = \\frac{22}{7} \\times 7^2 \\times 10 = 22 \\times 7 \\times 10 = 154 \\times 10 = 1.540\\text{ cm}^3$.",
    "quickTrick": "👑 Metode The King GO: V = Luas Alas x Tinggi = 154 x 10 = 1.540."
  },
  {
    "id": "bimbel_pk_099",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Peluang Kejadian Majemuk",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Dua buah dadu bermata enam dilempar bersamaan satu kali. Peluang munculnya mata dadu berjumlah 8 adalah...",
    "options": [
      {
        "key": "A",
        "text": "$\\frac{1}{6}$"
      },
      {
        "key": "B",
        "text": "$\\frac{5}{36}$"
      },
      {
        "key": "C",
        "text": "$\\frac{4}{36}$"
      },
      {
        "key": "D",
        "text": "$\\frac{6}{36}$"
      },
      {
        "key": "E",
        "text": "$\\frac{7}{36}$"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Total titik sampel dua dadu: $6 \\times 6 = 36$. Pasangan jumlah 8: $(2,6), (3,5), (4,4), (5,3), (6,2)$ (ada 5 kemungkinan). Maka peluangnya adalah $\\frac{5}{36}$.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Jumlah 8 pada 2 dadu ada 5 kemungkinan: (2,6), (3,5), (4,4), (5,3), (6,2) -> 5/36."
  },
  {
    "id": "bimbel_pk_100",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pk",
    "subtestName": "Pengetahuan Kuantitatif (PK)",
    "category": "Kombinatorika & Peluang",
    "difficulty": "Sedang",
    "stimulus": "",
    "question": "Dari 8 orang calon pengurus OSIS yang terdiri atas 5 putra dan 3 putri, akan dipilih sebuah tim beranggotakan 3 orang. Banyaknya susunan tim yang dapat dibentuk jika tim harus memuat tepat 2 orang putra adalah...",
    "options": [
      {
        "key": "A",
        "text": "24"
      },
      {
        "key": "B",
        "text": "28"
      },
      {
        "key": "C",
        "text": "36"
      },
      {
        "key": "D",
        "text": "40"
      },
      {
        "key": "E",
        "text": "30"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Kombinasi pemilihan 2 putra dari 5 putra: $C(5, 2) = \\frac{5 \\times 4}{2 \\times 1} = 10$. Pemilihan 1 putri dari 3 putri: $C(3, 1) = 3$. Total kombinasi tim: $C(5, 2) \\times C(3, 1) = 10 \\times 3 = 30$.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Kaidah perkalian kombinasi: C(5,2) x C(3,1) = 10 x 3 = 30."
  },
  {
    "id": "bimbel_pm_001",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Optimasi Biaya & Aplikasi Fungsi Kuadrat",
    "difficulty": "HOTS",
    "stimulus": "Sebuah pabrik konveksi di Bandung memproduksi pakaian jadi. Fungsi total biaya produksi harian (dalam ribuan rupiah) dinyatakan dengan persamaan $C(x) = 2x^2 - 40x + 500$, di mana $x$ menyatakan jumlah lusin pakaian yang diproduksi per hari.",
    "question": "Biaya produksi harian minimum yang dikeluarkan pabrik tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp250.000"
      },
      {
        "key": "B",
        "text": "Rp300.000"
      },
      {
        "key": "C",
        "text": "Rp350.000"
      },
      {
        "key": "D",
        "text": "Rp400.000"
      },
      {
        "key": "E",
        "text": "Rp500.000"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fungsi kuadrat $C(x) = ax^2 + bx + c$ dengan $a = 2 > 0$ membuka ke atas. Nilai minimum tercapai di sumbu simetri $x = -\\frac{b}{2a} = -\\frac{-40}{2(2)} = 10$ lusin. Biaya minimum: $C(10) = 2(10)^2 - 40(10) + 500 = 200 - 400 + 500 = 300$ ribu rupiah, atau Rp300.000.",
    "quickTrick": "🌟 NF Smart Solution: Titik puncak fungsi kuadrat: x = -b/(2a) = 40/4 = 10 -> C(10) = 2(100) - 400 + 500 = 300 ribu."
  },
  {
    "id": "bimbel_pm_002",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Aritmetika Finansial & Bunga Tunggal",
    "difficulty": "Sedang",
    "stimulus": "Pak Rahman menabung uang sebesar Rp20.000.000 di bank syariah dengan sistem bagi hasil setara bunga tunggal 6% per tahun. Ia berencana mengambil seluruh uang simpanan beserta keuntungannya setelah 2,5 tahun.",
    "question": "Total uang yang akan diterima Pak Rahman pada akhir periode tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp21.200.000"
      },
      {
        "key": "B",
        "text": "Rp22.500.000"
      },
      {
        "key": "C",
        "text": "Rp23.500.000"
      },
      {
        "key": "D",
        "text": "Rp23.000.000"
      },
      {
        "key": "E",
        "text": "Rp24.000.000"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Bunga tunggal: $B = M \\times i \\times t = 20.000.000 \\times 6\\% \\times 2,5 = 20.000.000 \\times 0,06 \\times 2,5 = 3.000.000$. Total uang tabungan: $M + B = 20.000.000 + 3.000.000 = \\text{Rp}23.000.000$.",
    "quickTrick": "🧠 Zenius Core Logic: Bunga per tahun = 6% x 20 jt = 1,2 jt. Dalam 2,5 tahun = 2,5 x 1,2 jt = 3 jt -> Total = 23 jt."
  },
  {
    "id": "bimbel_pm_003",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Pertumbuhan Eksponensial & Sains",
    "difficulty": "HOTS",
    "stimulus": "Kultur bakteri di laboratorium biologi berkembang biak secara eksponensial. Jumlah bakteri mula-mula adalah 500 sel, dan jumlahnya berlipat ganda setiap 30 menit sesuai model $N(t) = 500 \\times 2^{2t}$, dengan $t$ menyatakan waktu dalam jam.",
    "question": "Berapa banyak populasi bakteri tersebut setelah 3 jam pengamatan?",
    "options": [
      {
        "key": "A",
        "text": "32.000 bakteri"
      },
      {
        "key": "B",
        "text": "16.000 bakteri"
      },
      {
        "key": "C",
        "text": "24.000 bakteri"
      },
      {
        "key": "D",
        "text": "48.000 bakteri"
      },
      {
        "key": "E",
        "text": "64.000 bakteri"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Substitusikan $t = 3$ jam ke dalam rumus: $N(3) = 500 \\times 2^{2(3)} = 500 \\times 2^6 = 500 \\times 64 = 32.000$ sel bakteri.",
    "quickTrick": "💡 INTEN Quick Concept: Setiap 30 menit berlipat ganda, dalam 3 jam ada 6 periode pembelahan: 500 x 2^6 = 500 x 64 = 32.000."
  },
  {
    "id": "bimbel_pm_004",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Kecepatan Relatif & Gerak Lurus",
    "difficulty": "Sedang",
    "stimulus": "Dua mobil melaju dari dua kota A dan B yang berjarak $240\\text{ km}$ dan bergerak saling mendekati pada lintasan lurus yang sama. Mobil pertama melaju dari kota A dengan kecepatan tetap $70\\text{ km/jam}$, dan mobil kedua melaju dari kota B dengan kecepatan tetap $50\\text{ km/jam}$. Kedua mobil berangkat serentak pada pukul 08.00 WIB.",
    "question": "Pada pukul berapakah kedua mobil tersebut akan berpapasan?",
    "options": [
      {
        "key": "A",
        "text": "09.30 WIB"
      },
      {
        "key": "B",
        "text": "10.15 WIB"
      },
      {
        "key": "C",
        "text": "10.000 WIB"
      },
      {
        "key": "D",
        "text": "10.30 WIB"
      },
      {
        "key": "E",
        "text": "11.00 WIB"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Kecepatan relatif saling mendekat: $v_{rel} = v_1 + v_2 = 70 + 50 = 120\\text{ km/jam}$. Waktu tempuh hingga berpapasan: $t = \\frac{s}{v_{rel}} = \\frac{240}{120} = 2\\text{ jam}$. Waktu berpapasan: $08.00 + 02.00 = 10.00\\text{ WIB}$.",
    "quickTrick": "👑 Metode The King GO: Waktu berpapasan = Jarak Total / (v1 + v2) = 240 / 120 = 2 jam. 08.00 + 2 jam = 10.00 WIB."
  },
  {
    "id": "bimbel_pm_005",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Laju Debit Bersama & Kapasitas",
    "difficulty": "HOTS",
    "stimulus": "Sebuah kolam renang memiliki volume $180\\text{ m}^3$. Kolam tersebut diisi air menggunakan dua pipa pengisian. Pipa A mampu mengisi penuh kolam sendirian dalam waktu 6 jam, sedangkan pipa B mampu mengisinya dalam waktu 3 jam. Jika kedua pipa dibuka bersamaan, kolam tersebut akan terisi penuh dalam waktu...",
    "question": "Waktu yang dibutuhkan untuk mengisi penuh kolam jika kedua pipa dioperasikan serentak adalah...",
    "options": [
      {
        "key": "A",
        "text": "1,5 jam"
      },
      {
        "key": "B",
        "text": "2,5 jam"
      },
      {
        "key": "C",
        "text": "3,5 jam"
      },
      {
        "key": "D",
        "text": "4,5 jam"
      },
      {
        "key": "E",
        "text": "2 jam"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Laju pipa A: $\\frac{1}{6}$ kolam/jam. Laju pipa B: $\\frac{1}{3}$ kolam/jam. Laju gabungan: $\\frac{1}{t_{gab}} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1 + 2}{6} = \\frac{3}{6} = \\frac{1}{2}$. Maka $t_{gab} = 2\\text{ jam}$.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Rumus cepat pengisian bersama: t = (t1 x t2) / (t1 + t2) = (6 x 3) / (6 + 3) = 18 / 9 = 2 jam."
  },
  {
    "id": "bimbel_pm_006",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Optimasi Biaya & Aplikasi Fungsi Kuadrat",
    "difficulty": "Sedang",
    "stimulus": "Sebuah pabrik konveksi di Bandung memproduksi pakaian jadi. Fungsi total biaya produksi harian (dalam ribuan rupiah) dinyatakan dengan persamaan $C(x) = 2x^2 - 40x + 500$, di mana $x$ menyatakan jumlah lusin pakaian yang diproduksi per hari.",
    "question": "Biaya produksi harian minimum yang dikeluarkan pabrik tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp250.000"
      },
      {
        "key": "B",
        "text": "Rp300.000"
      },
      {
        "key": "C",
        "text": "Rp350.000"
      },
      {
        "key": "D",
        "text": "Rp400.000"
      },
      {
        "key": "E",
        "text": "Rp500.000"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fungsi kuadrat $C(x) = ax^2 + bx + c$ dengan $a = 2 > 0$ membuka ke atas. Nilai minimum tercapai di sumbu simetri $x = -\\frac{b}{2a} = -\\frac{-40}{2(2)} = 10$ lusin. Biaya minimum: $C(10) = 2(10)^2 - 40(10) + 500 = 200 - 400 + 500 = 300$ ribu rupiah, atau Rp300.000.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Titik puncak fungsi kuadrat: x = -b/(2a) = 40/4 = 10 -> C(10) = 2(100) - 400 + 500 = 300 ribu."
  },
  {
    "id": "bimbel_pm_007",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Aritmetika Finansial & Bunga Tunggal",
    "difficulty": "HOTS",
    "stimulus": "Pak Rahman menabung uang sebesar Rp20.000.000 di bank syariah dengan sistem bagi hasil setara bunga tunggal 6% per tahun. Ia berencana mengambil seluruh uang simpanan beserta keuntungannya setelah 2,5 tahun.",
    "question": "Total uang yang akan diterima Pak Rahman pada akhir periode tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp21.200.000"
      },
      {
        "key": "B",
        "text": "Rp22.500.000"
      },
      {
        "key": "C",
        "text": "Rp23.500.000"
      },
      {
        "key": "D",
        "text": "Rp23.000.000"
      },
      {
        "key": "E",
        "text": "Rp24.000.000"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Bunga tunggal: $B = M \\times i \\times t = 20.000.000 \\times 6\\% \\times 2,5 = 20.000.000 \\times 0,06 \\times 2,5 = 3.000.000$. Total uang tabungan: $M + B = 20.000.000 + 3.000.000 = \\text{Rp}23.000.000$.",
    "quickTrick": "🌟 NF Smart Solution: Bunga per tahun = 6% x 20 jt = 1,2 jt. Dalam 2,5 tahun = 2,5 x 1,2 jt = 3 jt -> Total = 23 jt."
  },
  {
    "id": "bimbel_pm_008",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Pertumbuhan Eksponensial & Sains",
    "difficulty": "Sedang",
    "stimulus": "Kultur bakteri di laboratorium biologi berkembang biak secara eksponensial. Jumlah bakteri mula-mula adalah 500 sel, dan jumlahnya berlipat ganda setiap 30 menit sesuai model $N(t) = 500 \\times 2^{2t}$, dengan $t$ menyatakan waktu dalam jam.",
    "question": "Berapa banyak populasi bakteri tersebut setelah 3 jam pengamatan?",
    "options": [
      {
        "key": "A",
        "text": "32.000 bakteri"
      },
      {
        "key": "B",
        "text": "16.000 bakteri"
      },
      {
        "key": "C",
        "text": "24.000 bakteri"
      },
      {
        "key": "D",
        "text": "48.000 bakteri"
      },
      {
        "key": "E",
        "text": "64.000 bakteri"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Substitusikan $t = 3$ jam ke dalam rumus: $N(3) = 500 \\times 2^{2(3)} = 500 \\times 2^6 = 500 \\times 64 = 32.000$ sel bakteri.",
    "quickTrick": "🧠 Zenius Core Logic: Setiap 30 menit berlipat ganda, dalam 3 jam ada 6 periode pembelahan: 500 x 2^6 = 500 x 64 = 32.000."
  },
  {
    "id": "bimbel_pm_009",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Kecepatan Relatif & Gerak Lurus",
    "difficulty": "HOTS",
    "stimulus": "Dua mobil melaju dari dua kota A dan B yang berjarak $240\\text{ km}$ dan bergerak saling mendekati pada lintasan lurus yang sama. Mobil pertama melaju dari kota A dengan kecepatan tetap $70\\text{ km/jam}$, dan mobil kedua melaju dari kota B dengan kecepatan tetap $50\\text{ km/jam}$. Kedua mobil berangkat serentak pada pukul 08.00 WIB.",
    "question": "Pada pukul berapakah kedua mobil tersebut akan berpapasan?",
    "options": [
      {
        "key": "A",
        "text": "09.30 WIB"
      },
      {
        "key": "B",
        "text": "10.15 WIB"
      },
      {
        "key": "C",
        "text": "10.000 WIB"
      },
      {
        "key": "D",
        "text": "10.30 WIB"
      },
      {
        "key": "E",
        "text": "11.00 WIB"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Kecepatan relatif saling mendekat: $v_{rel} = v_1 + v_2 = 70 + 50 = 120\\text{ km/jam}$. Waktu tempuh hingga berpapasan: $t = \\frac{s}{v_{rel}} = \\frac{240}{120} = 2\\text{ jam}$. Waktu berpapasan: $08.00 + 02.00 = 10.00\\text{ WIB}$.",
    "quickTrick": "💡 INTEN Quick Concept: Waktu berpapasan = Jarak Total / (v1 + v2) = 240 / 120 = 2 jam. 08.00 + 2 jam = 10.00 WIB."
  },
  {
    "id": "bimbel_pm_010",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Laju Debit Bersama & Kapasitas",
    "difficulty": "Sedang",
    "stimulus": "Sebuah kolam renang memiliki volume $180\\text{ m}^3$. Kolam tersebut diisi air menggunakan dua pipa pengisian. Pipa A mampu mengisi penuh kolam sendirian dalam waktu 6 jam, sedangkan pipa B mampu mengisinya dalam waktu 3 jam. Jika kedua pipa dibuka bersamaan, kolam tersebut akan terisi penuh dalam waktu...",
    "question": "Waktu yang dibutuhkan untuk mengisi penuh kolam jika kedua pipa dioperasikan serentak adalah...",
    "options": [
      {
        "key": "A",
        "text": "1,5 jam"
      },
      {
        "key": "B",
        "text": "2,5 jam"
      },
      {
        "key": "C",
        "text": "3,5 jam"
      },
      {
        "key": "D",
        "text": "4,5 jam"
      },
      {
        "key": "E",
        "text": "2 jam"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Laju pipa A: $\\frac{1}{6}$ kolam/jam. Laju pipa B: $\\frac{1}{3}$ kolam/jam. Laju gabungan: $\\frac{1}{t_{gab}} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1 + 2}{6} = \\frac{3}{6} = \\frac{1}{2}$. Maka $t_{gab} = 2\\text{ jam}$.",
    "quickTrick": "👑 Metode The King GO: Rumus cepat pengisian bersama: t = (t1 x t2) / (t1 + t2) = (6 x 3) / (6 + 3) = 18 / 9 = 2 jam."
  },
  {
    "id": "bimbel_pm_011",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Optimasi Biaya & Aplikasi Fungsi Kuadrat",
    "difficulty": "HOTS",
    "stimulus": "Sebuah pabrik konveksi di Bandung memproduksi pakaian jadi. Fungsi total biaya produksi harian (dalam ribuan rupiah) dinyatakan dengan persamaan $C(x) = 2x^2 - 40x + 500$, di mana $x$ menyatakan jumlah lusin pakaian yang diproduksi per hari.",
    "question": "Biaya produksi harian minimum yang dikeluarkan pabrik tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp250.000"
      },
      {
        "key": "B",
        "text": "Rp300.000"
      },
      {
        "key": "C",
        "text": "Rp350.000"
      },
      {
        "key": "D",
        "text": "Rp400.000"
      },
      {
        "key": "E",
        "text": "Rp500.000"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fungsi kuadrat $C(x) = ax^2 + bx + c$ dengan $a = 2 > 0$ membuka ke atas. Nilai minimum tercapai di sumbu simetri $x = -\\frac{b}{2a} = -\\frac{-40}{2(2)} = 10$ lusin. Biaya minimum: $C(10) = 2(10)^2 - 40(10) + 500 = 200 - 400 + 500 = 300$ ribu rupiah, atau Rp300.000.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Titik puncak fungsi kuadrat: x = -b/(2a) = 40/4 = 10 -> C(10) = 2(100) - 400 + 500 = 300 ribu."
  },
  {
    "id": "bimbel_pm_012",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Aritmetika Finansial & Bunga Tunggal",
    "difficulty": "Sedang",
    "stimulus": "Pak Rahman menabung uang sebesar Rp20.000.000 di bank syariah dengan sistem bagi hasil setara bunga tunggal 6% per tahun. Ia berencana mengambil seluruh uang simpanan beserta keuntungannya setelah 2,5 tahun.",
    "question": "Total uang yang akan diterima Pak Rahman pada akhir periode tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp21.200.000"
      },
      {
        "key": "B",
        "text": "Rp22.500.000"
      },
      {
        "key": "C",
        "text": "Rp23.500.000"
      },
      {
        "key": "D",
        "text": "Rp23.000.000"
      },
      {
        "key": "E",
        "text": "Rp24.000.000"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Bunga tunggal: $B = M \\times i \\times t = 20.000.000 \\times 6\\% \\times 2,5 = 20.000.000 \\times 0,06 \\times 2,5 = 3.000.000$. Total uang tabungan: $M + B = 20.000.000 + 3.000.000 = \\text{Rp}23.000.000$.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Bunga per tahun = 6% x 20 jt = 1,2 jt. Dalam 2,5 tahun = 2,5 x 1,2 jt = 3 jt -> Total = 23 jt."
  },
  {
    "id": "bimbel_pm_013",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Pertumbuhan Eksponensial & Sains",
    "difficulty": "HOTS",
    "stimulus": "Kultur bakteri di laboratorium biologi berkembang biak secara eksponensial. Jumlah bakteri mula-mula adalah 500 sel, dan jumlahnya berlipat ganda setiap 30 menit sesuai model $N(t) = 500 \\times 2^{2t}$, dengan $t$ menyatakan waktu dalam jam.",
    "question": "Berapa banyak populasi bakteri tersebut setelah 3 jam pengamatan?",
    "options": [
      {
        "key": "A",
        "text": "32.000 bakteri"
      },
      {
        "key": "B",
        "text": "16.000 bakteri"
      },
      {
        "key": "C",
        "text": "24.000 bakteri"
      },
      {
        "key": "D",
        "text": "48.000 bakteri"
      },
      {
        "key": "E",
        "text": "64.000 bakteri"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Substitusikan $t = 3$ jam ke dalam rumus: $N(3) = 500 \\times 2^{2(3)} = 500 \\times 2^6 = 500 \\times 64 = 32.000$ sel bakteri.",
    "quickTrick": "🌟 NF Smart Solution: Setiap 30 menit berlipat ganda, dalam 3 jam ada 6 periode pembelahan: 500 x 2^6 = 500 x 64 = 32.000."
  },
  {
    "id": "bimbel_pm_014",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Kecepatan Relatif & Gerak Lurus",
    "difficulty": "Sedang",
    "stimulus": "Dua mobil melaju dari dua kota A dan B yang berjarak $240\\text{ km}$ dan bergerak saling mendekati pada lintasan lurus yang sama. Mobil pertama melaju dari kota A dengan kecepatan tetap $70\\text{ km/jam}$, dan mobil kedua melaju dari kota B dengan kecepatan tetap $50\\text{ km/jam}$. Kedua mobil berangkat serentak pada pukul 08.00 WIB.",
    "question": "Pada pukul berapakah kedua mobil tersebut akan berpapasan?",
    "options": [
      {
        "key": "A",
        "text": "09.30 WIB"
      },
      {
        "key": "B",
        "text": "10.15 WIB"
      },
      {
        "key": "C",
        "text": "10.000 WIB"
      },
      {
        "key": "D",
        "text": "10.30 WIB"
      },
      {
        "key": "E",
        "text": "11.00 WIB"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Kecepatan relatif saling mendekat: $v_{rel} = v_1 + v_2 = 70 + 50 = 120\\text{ km/jam}$. Waktu tempuh hingga berpapasan: $t = \\frac{s}{v_{rel}} = \\frac{240}{120} = 2\\text{ jam}$. Waktu berpapasan: $08.00 + 02.00 = 10.00\\text{ WIB}$.",
    "quickTrick": "🧠 Zenius Core Logic: Waktu berpapasan = Jarak Total / (v1 + v2) = 240 / 120 = 2 jam. 08.00 + 2 jam = 10.00 WIB."
  },
  {
    "id": "bimbel_pm_015",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Laju Debit Bersama & Kapasitas",
    "difficulty": "HOTS",
    "stimulus": "Sebuah kolam renang memiliki volume $180\\text{ m}^3$. Kolam tersebut diisi air menggunakan dua pipa pengisian. Pipa A mampu mengisi penuh kolam sendirian dalam waktu 6 jam, sedangkan pipa B mampu mengisinya dalam waktu 3 jam. Jika kedua pipa dibuka bersamaan, kolam tersebut akan terisi penuh dalam waktu...",
    "question": "Waktu yang dibutuhkan untuk mengisi penuh kolam jika kedua pipa dioperasikan serentak adalah...",
    "options": [
      {
        "key": "A",
        "text": "1,5 jam"
      },
      {
        "key": "B",
        "text": "2,5 jam"
      },
      {
        "key": "C",
        "text": "3,5 jam"
      },
      {
        "key": "D",
        "text": "4,5 jam"
      },
      {
        "key": "E",
        "text": "2 jam"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Laju pipa A: $\\frac{1}{6}$ kolam/jam. Laju pipa B: $\\frac{1}{3}$ kolam/jam. Laju gabungan: $\\frac{1}{t_{gab}} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1 + 2}{6} = \\frac{3}{6} = \\frac{1}{2}$. Maka $t_{gab} = 2\\text{ jam}$.",
    "quickTrick": "💡 INTEN Quick Concept: Rumus cepat pengisian bersama: t = (t1 x t2) / (t1 + t2) = (6 x 3) / (6 + 3) = 18 / 9 = 2 jam."
  },
  {
    "id": "bimbel_pm_016",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Optimasi Biaya & Aplikasi Fungsi Kuadrat",
    "difficulty": "Sedang",
    "stimulus": "Sebuah pabrik konveksi di Bandung memproduksi pakaian jadi. Fungsi total biaya produksi harian (dalam ribuan rupiah) dinyatakan dengan persamaan $C(x) = 2x^2 - 40x + 500$, di mana $x$ menyatakan jumlah lusin pakaian yang diproduksi per hari.",
    "question": "Biaya produksi harian minimum yang dikeluarkan pabrik tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp250.000"
      },
      {
        "key": "B",
        "text": "Rp300.000"
      },
      {
        "key": "C",
        "text": "Rp350.000"
      },
      {
        "key": "D",
        "text": "Rp400.000"
      },
      {
        "key": "E",
        "text": "Rp500.000"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fungsi kuadrat $C(x) = ax^2 + bx + c$ dengan $a = 2 > 0$ membuka ke atas. Nilai minimum tercapai di sumbu simetri $x = -\\frac{b}{2a} = -\\frac{-40}{2(2)} = 10$ lusin. Biaya minimum: $C(10) = 2(10)^2 - 40(10) + 500 = 200 - 400 + 500 = 300$ ribu rupiah, atau Rp300.000.",
    "quickTrick": "👑 Metode The King GO: Titik puncak fungsi kuadrat: x = -b/(2a) = 40/4 = 10 -> C(10) = 2(100) - 400 + 500 = 300 ribu."
  },
  {
    "id": "bimbel_pm_017",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Aritmetika Finansial & Bunga Tunggal",
    "difficulty": "HOTS",
    "stimulus": "Pak Rahman menabung uang sebesar Rp20.000.000 di bank syariah dengan sistem bagi hasil setara bunga tunggal 6% per tahun. Ia berencana mengambil seluruh uang simpanan beserta keuntungannya setelah 2,5 tahun.",
    "question": "Total uang yang akan diterima Pak Rahman pada akhir periode tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp21.200.000"
      },
      {
        "key": "B",
        "text": "Rp22.500.000"
      },
      {
        "key": "C",
        "text": "Rp23.500.000"
      },
      {
        "key": "D",
        "text": "Rp23.000.000"
      },
      {
        "key": "E",
        "text": "Rp24.000.000"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Bunga tunggal: $B = M \\times i \\times t = 20.000.000 \\times 6\\% \\times 2,5 = 20.000.000 \\times 0,06 \\times 2,5 = 3.000.000$. Total uang tabungan: $M + B = 20.000.000 + 3.000.000 = \\text{Rp}23.000.000$.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Bunga per tahun = 6% x 20 jt = 1,2 jt. Dalam 2,5 tahun = 2,5 x 1,2 jt = 3 jt -> Total = 23 jt."
  },
  {
    "id": "bimbel_pm_018",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Pertumbuhan Eksponensial & Sains",
    "difficulty": "Sedang",
    "stimulus": "Kultur bakteri di laboratorium biologi berkembang biak secara eksponensial. Jumlah bakteri mula-mula adalah 500 sel, dan jumlahnya berlipat ganda setiap 30 menit sesuai model $N(t) = 500 \\times 2^{2t}$, dengan $t$ menyatakan waktu dalam jam.",
    "question": "Berapa banyak populasi bakteri tersebut setelah 3 jam pengamatan?",
    "options": [
      {
        "key": "A",
        "text": "32.000 bakteri"
      },
      {
        "key": "B",
        "text": "16.000 bakteri"
      },
      {
        "key": "C",
        "text": "24.000 bakteri"
      },
      {
        "key": "D",
        "text": "48.000 bakteri"
      },
      {
        "key": "E",
        "text": "64.000 bakteri"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Substitusikan $t = 3$ jam ke dalam rumus: $N(3) = 500 \\times 2^{2(3)} = 500 \\times 2^6 = 500 \\times 64 = 32.000$ sel bakteri.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Setiap 30 menit berlipat ganda, dalam 3 jam ada 6 periode pembelahan: 500 x 2^6 = 500 x 64 = 32.000."
  },
  {
    "id": "bimbel_pm_019",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Kecepatan Relatif & Gerak Lurus",
    "difficulty": "HOTS",
    "stimulus": "Dua mobil melaju dari dua kota A dan B yang berjarak $240\\text{ km}$ dan bergerak saling mendekati pada lintasan lurus yang sama. Mobil pertama melaju dari kota A dengan kecepatan tetap $70\\text{ km/jam}$, dan mobil kedua melaju dari kota B dengan kecepatan tetap $50\\text{ km/jam}$. Kedua mobil berangkat serentak pada pukul 08.00 WIB.",
    "question": "Pada pukul berapakah kedua mobil tersebut akan berpapasan?",
    "options": [
      {
        "key": "A",
        "text": "09.30 WIB"
      },
      {
        "key": "B",
        "text": "10.15 WIB"
      },
      {
        "key": "C",
        "text": "10.000 WIB"
      },
      {
        "key": "D",
        "text": "10.30 WIB"
      },
      {
        "key": "E",
        "text": "11.00 WIB"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Kecepatan relatif saling mendekat: $v_{rel} = v_1 + v_2 = 70 + 50 = 120\\text{ km/jam}$. Waktu tempuh hingga berpapasan: $t = \\frac{s}{v_{rel}} = \\frac{240}{120} = 2\\text{ jam}$. Waktu berpapasan: $08.00 + 02.00 = 10.00\\text{ WIB}$.",
    "quickTrick": "🌟 NF Smart Solution: Waktu berpapasan = Jarak Total / (v1 + v2) = 240 / 120 = 2 jam. 08.00 + 2 jam = 10.00 WIB."
  },
  {
    "id": "bimbel_pm_020",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Laju Debit Bersama & Kapasitas",
    "difficulty": "Sedang",
    "stimulus": "Sebuah kolam renang memiliki volume $180\\text{ m}^3$. Kolam tersebut diisi air menggunakan dua pipa pengisian. Pipa A mampu mengisi penuh kolam sendirian dalam waktu 6 jam, sedangkan pipa B mampu mengisinya dalam waktu 3 jam. Jika kedua pipa dibuka bersamaan, kolam tersebut akan terisi penuh dalam waktu...",
    "question": "Waktu yang dibutuhkan untuk mengisi penuh kolam jika kedua pipa dioperasikan serentak adalah...",
    "options": [
      {
        "key": "A",
        "text": "1,5 jam"
      },
      {
        "key": "B",
        "text": "2,5 jam"
      },
      {
        "key": "C",
        "text": "3,5 jam"
      },
      {
        "key": "D",
        "text": "4,5 jam"
      },
      {
        "key": "E",
        "text": "2 jam"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Laju pipa A: $\\frac{1}{6}$ kolam/jam. Laju pipa B: $\\frac{1}{3}$ kolam/jam. Laju gabungan: $\\frac{1}{t_{gab}} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1 + 2}{6} = \\frac{3}{6} = \\frac{1}{2}$. Maka $t_{gab} = 2\\text{ jam}$.",
    "quickTrick": "🧠 Zenius Core Logic: Rumus cepat pengisian bersama: t = (t1 x t2) / (t1 + t2) = (6 x 3) / (6 + 3) = 18 / 9 = 2 jam."
  },
  {
    "id": "bimbel_pm_021",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Optimasi Biaya & Aplikasi Fungsi Kuadrat",
    "difficulty": "HOTS",
    "stimulus": "Sebuah pabrik konveksi di Bandung memproduksi pakaian jadi. Fungsi total biaya produksi harian (dalam ribuan rupiah) dinyatakan dengan persamaan $C(x) = 2x^2 - 40x + 500$, di mana $x$ menyatakan jumlah lusin pakaian yang diproduksi per hari.",
    "question": "Biaya produksi harian minimum yang dikeluarkan pabrik tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp250.000"
      },
      {
        "key": "B",
        "text": "Rp300.000"
      },
      {
        "key": "C",
        "text": "Rp350.000"
      },
      {
        "key": "D",
        "text": "Rp400.000"
      },
      {
        "key": "E",
        "text": "Rp500.000"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fungsi kuadrat $C(x) = ax^2 + bx + c$ dengan $a = 2 > 0$ membuka ke atas. Nilai minimum tercapai di sumbu simetri $x = -\\frac{b}{2a} = -\\frac{-40}{2(2)} = 10$ lusin. Biaya minimum: $C(10) = 2(10)^2 - 40(10) + 500 = 200 - 400 + 500 = 300$ ribu rupiah, atau Rp300.000.",
    "quickTrick": "💡 INTEN Quick Concept: Titik puncak fungsi kuadrat: x = -b/(2a) = 40/4 = 10 -> C(10) = 2(100) - 400 + 500 = 300 ribu."
  },
  {
    "id": "bimbel_pm_022",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Aritmetika Finansial & Bunga Tunggal",
    "difficulty": "Sedang",
    "stimulus": "Pak Rahman menabung uang sebesar Rp20.000.000 di bank syariah dengan sistem bagi hasil setara bunga tunggal 6% per tahun. Ia berencana mengambil seluruh uang simpanan beserta keuntungannya setelah 2,5 tahun.",
    "question": "Total uang yang akan diterima Pak Rahman pada akhir periode tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp21.200.000"
      },
      {
        "key": "B",
        "text": "Rp22.500.000"
      },
      {
        "key": "C",
        "text": "Rp23.500.000"
      },
      {
        "key": "D",
        "text": "Rp23.000.000"
      },
      {
        "key": "E",
        "text": "Rp24.000.000"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Bunga tunggal: $B = M \\times i \\times t = 20.000.000 \\times 6\\% \\times 2,5 = 20.000.000 \\times 0,06 \\times 2,5 = 3.000.000$. Total uang tabungan: $M + B = 20.000.000 + 3.000.000 = \\text{Rp}23.000.000$.",
    "quickTrick": "👑 Metode The King GO: Bunga per tahun = 6% x 20 jt = 1,2 jt. Dalam 2,5 tahun = 2,5 x 1,2 jt = 3 jt -> Total = 23 jt."
  },
  {
    "id": "bimbel_pm_023",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Pertumbuhan Eksponensial & Sains",
    "difficulty": "HOTS",
    "stimulus": "Kultur bakteri di laboratorium biologi berkembang biak secara eksponensial. Jumlah bakteri mula-mula adalah 500 sel, dan jumlahnya berlipat ganda setiap 30 menit sesuai model $N(t) = 500 \\times 2^{2t}$, dengan $t$ menyatakan waktu dalam jam.",
    "question": "Berapa banyak populasi bakteri tersebut setelah 3 jam pengamatan?",
    "options": [
      {
        "key": "A",
        "text": "32.000 bakteri"
      },
      {
        "key": "B",
        "text": "16.000 bakteri"
      },
      {
        "key": "C",
        "text": "24.000 bakteri"
      },
      {
        "key": "D",
        "text": "48.000 bakteri"
      },
      {
        "key": "E",
        "text": "64.000 bakteri"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Substitusikan $t = 3$ jam ke dalam rumus: $N(3) = 500 \\times 2^{2(3)} = 500 \\times 2^6 = 500 \\times 64 = 32.000$ sel bakteri.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Setiap 30 menit berlipat ganda, dalam 3 jam ada 6 periode pembelahan: 500 x 2^6 = 500 x 64 = 32.000."
  },
  {
    "id": "bimbel_pm_024",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Kecepatan Relatif & Gerak Lurus",
    "difficulty": "Sedang",
    "stimulus": "Dua mobil melaju dari dua kota A dan B yang berjarak $240\\text{ km}$ dan bergerak saling mendekati pada lintasan lurus yang sama. Mobil pertama melaju dari kota A dengan kecepatan tetap $70\\text{ km/jam}$, dan mobil kedua melaju dari kota B dengan kecepatan tetap $50\\text{ km/jam}$. Kedua mobil berangkat serentak pada pukul 08.00 WIB.",
    "question": "Pada pukul berapakah kedua mobil tersebut akan berpapasan?",
    "options": [
      {
        "key": "A",
        "text": "09.30 WIB"
      },
      {
        "key": "B",
        "text": "10.15 WIB"
      },
      {
        "key": "C",
        "text": "10.000 WIB"
      },
      {
        "key": "D",
        "text": "10.30 WIB"
      },
      {
        "key": "E",
        "text": "11.00 WIB"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Kecepatan relatif saling mendekat: $v_{rel} = v_1 + v_2 = 70 + 50 = 120\\text{ km/jam}$. Waktu tempuh hingga berpapasan: $t = \\frac{s}{v_{rel}} = \\frac{240}{120} = 2\\text{ jam}$. Waktu berpapasan: $08.00 + 02.00 = 10.00\\text{ WIB}$.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Waktu berpapasan = Jarak Total / (v1 + v2) = 240 / 120 = 2 jam. 08.00 + 2 jam = 10.00 WIB."
  },
  {
    "id": "bimbel_pm_025",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Laju Debit Bersama & Kapasitas",
    "difficulty": "HOTS",
    "stimulus": "Sebuah kolam renang memiliki volume $180\\text{ m}^3$. Kolam tersebut diisi air menggunakan dua pipa pengisian. Pipa A mampu mengisi penuh kolam sendirian dalam waktu 6 jam, sedangkan pipa B mampu mengisinya dalam waktu 3 jam. Jika kedua pipa dibuka bersamaan, kolam tersebut akan terisi penuh dalam waktu...",
    "question": "Waktu yang dibutuhkan untuk mengisi penuh kolam jika kedua pipa dioperasikan serentak adalah...",
    "options": [
      {
        "key": "A",
        "text": "1,5 jam"
      },
      {
        "key": "B",
        "text": "2,5 jam"
      },
      {
        "key": "C",
        "text": "3,5 jam"
      },
      {
        "key": "D",
        "text": "4,5 jam"
      },
      {
        "key": "E",
        "text": "2 jam"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Laju pipa A: $\\frac{1}{6}$ kolam/jam. Laju pipa B: $\\frac{1}{3}$ kolam/jam. Laju gabungan: $\\frac{1}{t_{gab}} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1 + 2}{6} = \\frac{3}{6} = \\frac{1}{2}$. Maka $t_{gab} = 2\\text{ jam}$.",
    "quickTrick": "🌟 NF Smart Solution: Rumus cepat pengisian bersama: t = (t1 x t2) / (t1 + t2) = (6 x 3) / (6 + 3) = 18 / 9 = 2 jam."
  },
  {
    "id": "bimbel_pm_026",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Optimasi Biaya & Aplikasi Fungsi Kuadrat",
    "difficulty": "Sedang",
    "stimulus": "Sebuah pabrik konveksi di Bandung memproduksi pakaian jadi. Fungsi total biaya produksi harian (dalam ribuan rupiah) dinyatakan dengan persamaan $C(x) = 2x^2 - 40x + 500$, di mana $x$ menyatakan jumlah lusin pakaian yang diproduksi per hari.",
    "question": "Biaya produksi harian minimum yang dikeluarkan pabrik tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp250.000"
      },
      {
        "key": "B",
        "text": "Rp300.000"
      },
      {
        "key": "C",
        "text": "Rp350.000"
      },
      {
        "key": "D",
        "text": "Rp400.000"
      },
      {
        "key": "E",
        "text": "Rp500.000"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fungsi kuadrat $C(x) = ax^2 + bx + c$ dengan $a = 2 > 0$ membuka ke atas. Nilai minimum tercapai di sumbu simetri $x = -\\frac{b}{2a} = -\\frac{-40}{2(2)} = 10$ lusin. Biaya minimum: $C(10) = 2(10)^2 - 40(10) + 500 = 200 - 400 + 500 = 300$ ribu rupiah, atau Rp300.000.",
    "quickTrick": "🧠 Zenius Core Logic: Titik puncak fungsi kuadrat: x = -b/(2a) = 40/4 = 10 -> C(10) = 2(100) - 400 + 500 = 300 ribu."
  },
  {
    "id": "bimbel_pm_027",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Aritmetika Finansial & Bunga Tunggal",
    "difficulty": "HOTS",
    "stimulus": "Pak Rahman menabung uang sebesar Rp20.000.000 di bank syariah dengan sistem bagi hasil setara bunga tunggal 6% per tahun. Ia berencana mengambil seluruh uang simpanan beserta keuntungannya setelah 2,5 tahun.",
    "question": "Total uang yang akan diterima Pak Rahman pada akhir periode tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp21.200.000"
      },
      {
        "key": "B",
        "text": "Rp22.500.000"
      },
      {
        "key": "C",
        "text": "Rp23.500.000"
      },
      {
        "key": "D",
        "text": "Rp23.000.000"
      },
      {
        "key": "E",
        "text": "Rp24.000.000"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Bunga tunggal: $B = M \\times i \\times t = 20.000.000 \\times 6\\% \\times 2,5 = 20.000.000 \\times 0,06 \\times 2,5 = 3.000.000$. Total uang tabungan: $M + B = 20.000.000 + 3.000.000 = \\text{Rp}23.000.000$.",
    "quickTrick": "💡 INTEN Quick Concept: Bunga per tahun = 6% x 20 jt = 1,2 jt. Dalam 2,5 tahun = 2,5 x 1,2 jt = 3 jt -> Total = 23 jt."
  },
  {
    "id": "bimbel_pm_028",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Pertumbuhan Eksponensial & Sains",
    "difficulty": "Sedang",
    "stimulus": "Kultur bakteri di laboratorium biologi berkembang biak secara eksponensial. Jumlah bakteri mula-mula adalah 500 sel, dan jumlahnya berlipat ganda setiap 30 menit sesuai model $N(t) = 500 \\times 2^{2t}$, dengan $t$ menyatakan waktu dalam jam.",
    "question": "Berapa banyak populasi bakteri tersebut setelah 3 jam pengamatan?",
    "options": [
      {
        "key": "A",
        "text": "32.000 bakteri"
      },
      {
        "key": "B",
        "text": "16.000 bakteri"
      },
      {
        "key": "C",
        "text": "24.000 bakteri"
      },
      {
        "key": "D",
        "text": "48.000 bakteri"
      },
      {
        "key": "E",
        "text": "64.000 bakteri"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Substitusikan $t = 3$ jam ke dalam rumus: $N(3) = 500 \\times 2^{2(3)} = 500 \\times 2^6 = 500 \\times 64 = 32.000$ sel bakteri.",
    "quickTrick": "👑 Metode The King GO: Setiap 30 menit berlipat ganda, dalam 3 jam ada 6 periode pembelahan: 500 x 2^6 = 500 x 64 = 32.000."
  },
  {
    "id": "bimbel_pm_029",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Kecepatan Relatif & Gerak Lurus",
    "difficulty": "HOTS",
    "stimulus": "Dua mobil melaju dari dua kota A dan B yang berjarak $240\\text{ km}$ dan bergerak saling mendekati pada lintasan lurus yang sama. Mobil pertama melaju dari kota A dengan kecepatan tetap $70\\text{ km/jam}$, dan mobil kedua melaju dari kota B dengan kecepatan tetap $50\\text{ km/jam}$. Kedua mobil berangkat serentak pada pukul 08.00 WIB.",
    "question": "Pada pukul berapakah kedua mobil tersebut akan berpapasan?",
    "options": [
      {
        "key": "A",
        "text": "09.30 WIB"
      },
      {
        "key": "B",
        "text": "10.15 WIB"
      },
      {
        "key": "C",
        "text": "10.000 WIB"
      },
      {
        "key": "D",
        "text": "10.30 WIB"
      },
      {
        "key": "E",
        "text": "11.00 WIB"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Kecepatan relatif saling mendekat: $v_{rel} = v_1 + v_2 = 70 + 50 = 120\\text{ km/jam}$. Waktu tempuh hingga berpapasan: $t = \\frac{s}{v_{rel}} = \\frac{240}{120} = 2\\text{ jam}$. Waktu berpapasan: $08.00 + 02.00 = 10.00\\text{ WIB}$.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Waktu berpapasan = Jarak Total / (v1 + v2) = 240 / 120 = 2 jam. 08.00 + 2 jam = 10.00 WIB."
  },
  {
    "id": "bimbel_pm_030",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Laju Debit Bersama & Kapasitas",
    "difficulty": "Sedang",
    "stimulus": "Sebuah kolam renang memiliki volume $180\\text{ m}^3$. Kolam tersebut diisi air menggunakan dua pipa pengisian. Pipa A mampu mengisi penuh kolam sendirian dalam waktu 6 jam, sedangkan pipa B mampu mengisinya dalam waktu 3 jam. Jika kedua pipa dibuka bersamaan, kolam tersebut akan terisi penuh dalam waktu...",
    "question": "Waktu yang dibutuhkan untuk mengisi penuh kolam jika kedua pipa dioperasikan serentak adalah...",
    "options": [
      {
        "key": "A",
        "text": "1,5 jam"
      },
      {
        "key": "B",
        "text": "2,5 jam"
      },
      {
        "key": "C",
        "text": "3,5 jam"
      },
      {
        "key": "D",
        "text": "4,5 jam"
      },
      {
        "key": "E",
        "text": "2 jam"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Laju pipa A: $\\frac{1}{6}$ kolam/jam. Laju pipa B: $\\frac{1}{3}$ kolam/jam. Laju gabungan: $\\frac{1}{t_{gab}} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1 + 2}{6} = \\frac{3}{6} = \\frac{1}{2}$. Maka $t_{gab} = 2\\text{ jam}$.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Rumus cepat pengisian bersama: t = (t1 x t2) / (t1 + t2) = (6 x 3) / (6 + 3) = 18 / 9 = 2 jam."
  },
  {
    "id": "bimbel_pm_031",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Optimasi Biaya & Aplikasi Fungsi Kuadrat",
    "difficulty": "HOTS",
    "stimulus": "Sebuah pabrik konveksi di Bandung memproduksi pakaian jadi. Fungsi total biaya produksi harian (dalam ribuan rupiah) dinyatakan dengan persamaan $C(x) = 2x^2 - 40x + 500$, di mana $x$ menyatakan jumlah lusin pakaian yang diproduksi per hari.",
    "question": "Biaya produksi harian minimum yang dikeluarkan pabrik tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp250.000"
      },
      {
        "key": "B",
        "text": "Rp300.000"
      },
      {
        "key": "C",
        "text": "Rp350.000"
      },
      {
        "key": "D",
        "text": "Rp400.000"
      },
      {
        "key": "E",
        "text": "Rp500.000"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fungsi kuadrat $C(x) = ax^2 + bx + c$ dengan $a = 2 > 0$ membuka ke atas. Nilai minimum tercapai di sumbu simetri $x = -\\frac{b}{2a} = -\\frac{-40}{2(2)} = 10$ lusin. Biaya minimum: $C(10) = 2(10)^2 - 40(10) + 500 = 200 - 400 + 500 = 300$ ribu rupiah, atau Rp300.000.",
    "quickTrick": "🌟 NF Smart Solution: Titik puncak fungsi kuadrat: x = -b/(2a) = 40/4 = 10 -> C(10) = 2(100) - 400 + 500 = 300 ribu."
  },
  {
    "id": "bimbel_pm_032",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Aritmetika Finansial & Bunga Tunggal",
    "difficulty": "Sedang",
    "stimulus": "Pak Rahman menabung uang sebesar Rp20.000.000 di bank syariah dengan sistem bagi hasil setara bunga tunggal 6% per tahun. Ia berencana mengambil seluruh uang simpanan beserta keuntungannya setelah 2,5 tahun.",
    "question": "Total uang yang akan diterima Pak Rahman pada akhir periode tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp21.200.000"
      },
      {
        "key": "B",
        "text": "Rp22.500.000"
      },
      {
        "key": "C",
        "text": "Rp23.500.000"
      },
      {
        "key": "D",
        "text": "Rp23.000.000"
      },
      {
        "key": "E",
        "text": "Rp24.000.000"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Bunga tunggal: $B = M \\times i \\times t = 20.000.000 \\times 6\\% \\times 2,5 = 20.000.000 \\times 0,06 \\times 2,5 = 3.000.000$. Total uang tabungan: $M + B = 20.000.000 + 3.000.000 = \\text{Rp}23.000.000$.",
    "quickTrick": "🧠 Zenius Core Logic: Bunga per tahun = 6% x 20 jt = 1,2 jt. Dalam 2,5 tahun = 2,5 x 1,2 jt = 3 jt -> Total = 23 jt."
  },
  {
    "id": "bimbel_pm_033",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Pertumbuhan Eksponensial & Sains",
    "difficulty": "HOTS",
    "stimulus": "Kultur bakteri di laboratorium biologi berkembang biak secara eksponensial. Jumlah bakteri mula-mula adalah 500 sel, dan jumlahnya berlipat ganda setiap 30 menit sesuai model $N(t) = 500 \\times 2^{2t}$, dengan $t$ menyatakan waktu dalam jam.",
    "question": "Berapa banyak populasi bakteri tersebut setelah 3 jam pengamatan?",
    "options": [
      {
        "key": "A",
        "text": "32.000 bakteri"
      },
      {
        "key": "B",
        "text": "16.000 bakteri"
      },
      {
        "key": "C",
        "text": "24.000 bakteri"
      },
      {
        "key": "D",
        "text": "48.000 bakteri"
      },
      {
        "key": "E",
        "text": "64.000 bakteri"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Substitusikan $t = 3$ jam ke dalam rumus: $N(3) = 500 \\times 2^{2(3)} = 500 \\times 2^6 = 500 \\times 64 = 32.000$ sel bakteri.",
    "quickTrick": "💡 INTEN Quick Concept: Setiap 30 menit berlipat ganda, dalam 3 jam ada 6 periode pembelahan: 500 x 2^6 = 500 x 64 = 32.000."
  },
  {
    "id": "bimbel_pm_034",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Kecepatan Relatif & Gerak Lurus",
    "difficulty": "Sedang",
    "stimulus": "Dua mobil melaju dari dua kota A dan B yang berjarak $240\\text{ km}$ dan bergerak saling mendekati pada lintasan lurus yang sama. Mobil pertama melaju dari kota A dengan kecepatan tetap $70\\text{ km/jam}$, dan mobil kedua melaju dari kota B dengan kecepatan tetap $50\\text{ km/jam}$. Kedua mobil berangkat serentak pada pukul 08.00 WIB.",
    "question": "Pada pukul berapakah kedua mobil tersebut akan berpapasan?",
    "options": [
      {
        "key": "A",
        "text": "09.30 WIB"
      },
      {
        "key": "B",
        "text": "10.15 WIB"
      },
      {
        "key": "C",
        "text": "10.000 WIB"
      },
      {
        "key": "D",
        "text": "10.30 WIB"
      },
      {
        "key": "E",
        "text": "11.00 WIB"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Kecepatan relatif saling mendekat: $v_{rel} = v_1 + v_2 = 70 + 50 = 120\\text{ km/jam}$. Waktu tempuh hingga berpapasan: $t = \\frac{s}{v_{rel}} = \\frac{240}{120} = 2\\text{ jam}$. Waktu berpapasan: $08.00 + 02.00 = 10.00\\text{ WIB}$.",
    "quickTrick": "👑 Metode The King GO: Waktu berpapasan = Jarak Total / (v1 + v2) = 240 / 120 = 2 jam. 08.00 + 2 jam = 10.00 WIB."
  },
  {
    "id": "bimbel_pm_035",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Laju Debit Bersama & Kapasitas",
    "difficulty": "HOTS",
    "stimulus": "Sebuah kolam renang memiliki volume $180\\text{ m}^3$. Kolam tersebut diisi air menggunakan dua pipa pengisian. Pipa A mampu mengisi penuh kolam sendirian dalam waktu 6 jam, sedangkan pipa B mampu mengisinya dalam waktu 3 jam. Jika kedua pipa dibuka bersamaan, kolam tersebut akan terisi penuh dalam waktu...",
    "question": "Waktu yang dibutuhkan untuk mengisi penuh kolam jika kedua pipa dioperasikan serentak adalah...",
    "options": [
      {
        "key": "A",
        "text": "1,5 jam"
      },
      {
        "key": "B",
        "text": "2,5 jam"
      },
      {
        "key": "C",
        "text": "3,5 jam"
      },
      {
        "key": "D",
        "text": "4,5 jam"
      },
      {
        "key": "E",
        "text": "2 jam"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Laju pipa A: $\\frac{1}{6}$ kolam/jam. Laju pipa B: $\\frac{1}{3}$ kolam/jam. Laju gabungan: $\\frac{1}{t_{gab}} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1 + 2}{6} = \\frac{3}{6} = \\frac{1}{2}$. Maka $t_{gab} = 2\\text{ jam}$.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Rumus cepat pengisian bersama: t = (t1 x t2) / (t1 + t2) = (6 x 3) / (6 + 3) = 18 / 9 = 2 jam."
  },
  {
    "id": "bimbel_pm_036",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Optimasi Biaya & Aplikasi Fungsi Kuadrat",
    "difficulty": "Sedang",
    "stimulus": "Sebuah pabrik konveksi di Bandung memproduksi pakaian jadi. Fungsi total biaya produksi harian (dalam ribuan rupiah) dinyatakan dengan persamaan $C(x) = 2x^2 - 40x + 500$, di mana $x$ menyatakan jumlah lusin pakaian yang diproduksi per hari.",
    "question": "Biaya produksi harian minimum yang dikeluarkan pabrik tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp250.000"
      },
      {
        "key": "B",
        "text": "Rp300.000"
      },
      {
        "key": "C",
        "text": "Rp350.000"
      },
      {
        "key": "D",
        "text": "Rp400.000"
      },
      {
        "key": "E",
        "text": "Rp500.000"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fungsi kuadrat $C(x) = ax^2 + bx + c$ dengan $a = 2 > 0$ membuka ke atas. Nilai minimum tercapai di sumbu simetri $x = -\\frac{b}{2a} = -\\frac{-40}{2(2)} = 10$ lusin. Biaya minimum: $C(10) = 2(10)^2 - 40(10) + 500 = 200 - 400 + 500 = 300$ ribu rupiah, atau Rp300.000.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Titik puncak fungsi kuadrat: x = -b/(2a) = 40/4 = 10 -> C(10) = 2(100) - 400 + 500 = 300 ribu."
  },
  {
    "id": "bimbel_pm_037",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Aritmetika Finansial & Bunga Tunggal",
    "difficulty": "HOTS",
    "stimulus": "Pak Rahman menabung uang sebesar Rp20.000.000 di bank syariah dengan sistem bagi hasil setara bunga tunggal 6% per tahun. Ia berencana mengambil seluruh uang simpanan beserta keuntungannya setelah 2,5 tahun.",
    "question": "Total uang yang akan diterima Pak Rahman pada akhir periode tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp21.200.000"
      },
      {
        "key": "B",
        "text": "Rp22.500.000"
      },
      {
        "key": "C",
        "text": "Rp23.500.000"
      },
      {
        "key": "D",
        "text": "Rp23.000.000"
      },
      {
        "key": "E",
        "text": "Rp24.000.000"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Bunga tunggal: $B = M \\times i \\times t = 20.000.000 \\times 6\\% \\times 2,5 = 20.000.000 \\times 0,06 \\times 2,5 = 3.000.000$. Total uang tabungan: $M + B = 20.000.000 + 3.000.000 = \\text{Rp}23.000.000$.",
    "quickTrick": "🌟 NF Smart Solution: Bunga per tahun = 6% x 20 jt = 1,2 jt. Dalam 2,5 tahun = 2,5 x 1,2 jt = 3 jt -> Total = 23 jt."
  },
  {
    "id": "bimbel_pm_038",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Pertumbuhan Eksponensial & Sains",
    "difficulty": "Sedang",
    "stimulus": "Kultur bakteri di laboratorium biologi berkembang biak secara eksponensial. Jumlah bakteri mula-mula adalah 500 sel, dan jumlahnya berlipat ganda setiap 30 menit sesuai model $N(t) = 500 \\times 2^{2t}$, dengan $t$ menyatakan waktu dalam jam.",
    "question": "Berapa banyak populasi bakteri tersebut setelah 3 jam pengamatan?",
    "options": [
      {
        "key": "A",
        "text": "32.000 bakteri"
      },
      {
        "key": "B",
        "text": "16.000 bakteri"
      },
      {
        "key": "C",
        "text": "24.000 bakteri"
      },
      {
        "key": "D",
        "text": "48.000 bakteri"
      },
      {
        "key": "E",
        "text": "64.000 bakteri"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Substitusikan $t = 3$ jam ke dalam rumus: $N(3) = 500 \\times 2^{2(3)} = 500 \\times 2^6 = 500 \\times 64 = 32.000$ sel bakteri.",
    "quickTrick": "🧠 Zenius Core Logic: Setiap 30 menit berlipat ganda, dalam 3 jam ada 6 periode pembelahan: 500 x 2^6 = 500 x 64 = 32.000."
  },
  {
    "id": "bimbel_pm_039",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Kecepatan Relatif & Gerak Lurus",
    "difficulty": "HOTS",
    "stimulus": "Dua mobil melaju dari dua kota A dan B yang berjarak $240\\text{ km}$ dan bergerak saling mendekati pada lintasan lurus yang sama. Mobil pertama melaju dari kota A dengan kecepatan tetap $70\\text{ km/jam}$, dan mobil kedua melaju dari kota B dengan kecepatan tetap $50\\text{ km/jam}$. Kedua mobil berangkat serentak pada pukul 08.00 WIB.",
    "question": "Pada pukul berapakah kedua mobil tersebut akan berpapasan?",
    "options": [
      {
        "key": "A",
        "text": "09.30 WIB"
      },
      {
        "key": "B",
        "text": "10.15 WIB"
      },
      {
        "key": "C",
        "text": "10.000 WIB"
      },
      {
        "key": "D",
        "text": "10.30 WIB"
      },
      {
        "key": "E",
        "text": "11.00 WIB"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Kecepatan relatif saling mendekat: $v_{rel} = v_1 + v_2 = 70 + 50 = 120\\text{ km/jam}$. Waktu tempuh hingga berpapasan: $t = \\frac{s}{v_{rel}} = \\frac{240}{120} = 2\\text{ jam}$. Waktu berpapasan: $08.00 + 02.00 = 10.00\\text{ WIB}$.",
    "quickTrick": "💡 INTEN Quick Concept: Waktu berpapasan = Jarak Total / (v1 + v2) = 240 / 120 = 2 jam. 08.00 + 2 jam = 10.00 WIB."
  },
  {
    "id": "bimbel_pm_040",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Laju Debit Bersama & Kapasitas",
    "difficulty": "Sedang",
    "stimulus": "Sebuah kolam renang memiliki volume $180\\text{ m}^3$. Kolam tersebut diisi air menggunakan dua pipa pengisian. Pipa A mampu mengisi penuh kolam sendirian dalam waktu 6 jam, sedangkan pipa B mampu mengisinya dalam waktu 3 jam. Jika kedua pipa dibuka bersamaan, kolam tersebut akan terisi penuh dalam waktu...",
    "question": "Waktu yang dibutuhkan untuk mengisi penuh kolam jika kedua pipa dioperasikan serentak adalah...",
    "options": [
      {
        "key": "A",
        "text": "1,5 jam"
      },
      {
        "key": "B",
        "text": "2,5 jam"
      },
      {
        "key": "C",
        "text": "3,5 jam"
      },
      {
        "key": "D",
        "text": "4,5 jam"
      },
      {
        "key": "E",
        "text": "2 jam"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Laju pipa A: $\\frac{1}{6}$ kolam/jam. Laju pipa B: $\\frac{1}{3}$ kolam/jam. Laju gabungan: $\\frac{1}{t_{gab}} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1 + 2}{6} = \\frac{3}{6} = \\frac{1}{2}$. Maka $t_{gab} = 2\\text{ jam}$.",
    "quickTrick": "👑 Metode The King GO: Rumus cepat pengisian bersama: t = (t1 x t2) / (t1 + t2) = (6 x 3) / (6 + 3) = 18 / 9 = 2 jam."
  },
  {
    "id": "bimbel_pm_041",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Optimasi Biaya & Aplikasi Fungsi Kuadrat",
    "difficulty": "HOTS",
    "stimulus": "Sebuah pabrik konveksi di Bandung memproduksi pakaian jadi. Fungsi total biaya produksi harian (dalam ribuan rupiah) dinyatakan dengan persamaan $C(x) = 2x^2 - 40x + 500$, di mana $x$ menyatakan jumlah lusin pakaian yang diproduksi per hari.",
    "question": "Biaya produksi harian minimum yang dikeluarkan pabrik tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp250.000"
      },
      {
        "key": "B",
        "text": "Rp300.000"
      },
      {
        "key": "C",
        "text": "Rp350.000"
      },
      {
        "key": "D",
        "text": "Rp400.000"
      },
      {
        "key": "E",
        "text": "Rp500.000"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fungsi kuadrat $C(x) = ax^2 + bx + c$ dengan $a = 2 > 0$ membuka ke atas. Nilai minimum tercapai di sumbu simetri $x = -\\frac{b}{2a} = -\\frac{-40}{2(2)} = 10$ lusin. Biaya minimum: $C(10) = 2(10)^2 - 40(10) + 500 = 200 - 400 + 500 = 300$ ribu rupiah, atau Rp300.000.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Titik puncak fungsi kuadrat: x = -b/(2a) = 40/4 = 10 -> C(10) = 2(100) - 400 + 500 = 300 ribu."
  },
  {
    "id": "bimbel_pm_042",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Aritmetika Finansial & Bunga Tunggal",
    "difficulty": "Sedang",
    "stimulus": "Pak Rahman menabung uang sebesar Rp20.000.000 di bank syariah dengan sistem bagi hasil setara bunga tunggal 6% per tahun. Ia berencana mengambil seluruh uang simpanan beserta keuntungannya setelah 2,5 tahun.",
    "question": "Total uang yang akan diterima Pak Rahman pada akhir periode tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp21.200.000"
      },
      {
        "key": "B",
        "text": "Rp22.500.000"
      },
      {
        "key": "C",
        "text": "Rp23.500.000"
      },
      {
        "key": "D",
        "text": "Rp23.000.000"
      },
      {
        "key": "E",
        "text": "Rp24.000.000"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Bunga tunggal: $B = M \\times i \\times t = 20.000.000 \\times 6\\% \\times 2,5 = 20.000.000 \\times 0,06 \\times 2,5 = 3.000.000$. Total uang tabungan: $M + B = 20.000.000 + 3.000.000 = \\text{Rp}23.000.000$.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Bunga per tahun = 6% x 20 jt = 1,2 jt. Dalam 2,5 tahun = 2,5 x 1,2 jt = 3 jt -> Total = 23 jt."
  },
  {
    "id": "bimbel_pm_043",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Pertumbuhan Eksponensial & Sains",
    "difficulty": "HOTS",
    "stimulus": "Kultur bakteri di laboratorium biologi berkembang biak secara eksponensial. Jumlah bakteri mula-mula adalah 500 sel, dan jumlahnya berlipat ganda setiap 30 menit sesuai model $N(t) = 500 \\times 2^{2t}$, dengan $t$ menyatakan waktu dalam jam.",
    "question": "Berapa banyak populasi bakteri tersebut setelah 3 jam pengamatan?",
    "options": [
      {
        "key": "A",
        "text": "32.000 bakteri"
      },
      {
        "key": "B",
        "text": "16.000 bakteri"
      },
      {
        "key": "C",
        "text": "24.000 bakteri"
      },
      {
        "key": "D",
        "text": "48.000 bakteri"
      },
      {
        "key": "E",
        "text": "64.000 bakteri"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Substitusikan $t = 3$ jam ke dalam rumus: $N(3) = 500 \\times 2^{2(3)} = 500 \\times 2^6 = 500 \\times 64 = 32.000$ sel bakteri.",
    "quickTrick": "🌟 NF Smart Solution: Setiap 30 menit berlipat ganda, dalam 3 jam ada 6 periode pembelahan: 500 x 2^6 = 500 x 64 = 32.000."
  },
  {
    "id": "bimbel_pm_044",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Kecepatan Relatif & Gerak Lurus",
    "difficulty": "Sedang",
    "stimulus": "Dua mobil melaju dari dua kota A dan B yang berjarak $240\\text{ km}$ dan bergerak saling mendekati pada lintasan lurus yang sama. Mobil pertama melaju dari kota A dengan kecepatan tetap $70\\text{ km/jam}$, dan mobil kedua melaju dari kota B dengan kecepatan tetap $50\\text{ km/jam}$. Kedua mobil berangkat serentak pada pukul 08.00 WIB.",
    "question": "Pada pukul berapakah kedua mobil tersebut akan berpapasan?",
    "options": [
      {
        "key": "A",
        "text": "09.30 WIB"
      },
      {
        "key": "B",
        "text": "10.15 WIB"
      },
      {
        "key": "C",
        "text": "10.000 WIB"
      },
      {
        "key": "D",
        "text": "10.30 WIB"
      },
      {
        "key": "E",
        "text": "11.00 WIB"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Kecepatan relatif saling mendekat: $v_{rel} = v_1 + v_2 = 70 + 50 = 120\\text{ km/jam}$. Waktu tempuh hingga berpapasan: $t = \\frac{s}{v_{rel}} = \\frac{240}{120} = 2\\text{ jam}$. Waktu berpapasan: $08.00 + 02.00 = 10.00\\text{ WIB}$.",
    "quickTrick": "🧠 Zenius Core Logic: Waktu berpapasan = Jarak Total / (v1 + v2) = 240 / 120 = 2 jam. 08.00 + 2 jam = 10.00 WIB."
  },
  {
    "id": "bimbel_pm_045",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Laju Debit Bersama & Kapasitas",
    "difficulty": "HOTS",
    "stimulus": "Sebuah kolam renang memiliki volume $180\\text{ m}^3$. Kolam tersebut diisi air menggunakan dua pipa pengisian. Pipa A mampu mengisi penuh kolam sendirian dalam waktu 6 jam, sedangkan pipa B mampu mengisinya dalam waktu 3 jam. Jika kedua pipa dibuka bersamaan, kolam tersebut akan terisi penuh dalam waktu...",
    "question": "Waktu yang dibutuhkan untuk mengisi penuh kolam jika kedua pipa dioperasikan serentak adalah...",
    "options": [
      {
        "key": "A",
        "text": "1,5 jam"
      },
      {
        "key": "B",
        "text": "2,5 jam"
      },
      {
        "key": "C",
        "text": "3,5 jam"
      },
      {
        "key": "D",
        "text": "4,5 jam"
      },
      {
        "key": "E",
        "text": "2 jam"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Laju pipa A: $\\frac{1}{6}$ kolam/jam. Laju pipa B: $\\frac{1}{3}$ kolam/jam. Laju gabungan: $\\frac{1}{t_{gab}} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1 + 2}{6} = \\frac{3}{6} = \\frac{1}{2}$. Maka $t_{gab} = 2\\text{ jam}$.",
    "quickTrick": "💡 INTEN Quick Concept: Rumus cepat pengisian bersama: t = (t1 x t2) / (t1 + t2) = (6 x 3) / (6 + 3) = 18 / 9 = 2 jam."
  },
  {
    "id": "bimbel_pm_046",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Optimasi Biaya & Aplikasi Fungsi Kuadrat",
    "difficulty": "Sedang",
    "stimulus": "Sebuah pabrik konveksi di Bandung memproduksi pakaian jadi. Fungsi total biaya produksi harian (dalam ribuan rupiah) dinyatakan dengan persamaan $C(x) = 2x^2 - 40x + 500$, di mana $x$ menyatakan jumlah lusin pakaian yang diproduksi per hari.",
    "question": "Biaya produksi harian minimum yang dikeluarkan pabrik tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp250.000"
      },
      {
        "key": "B",
        "text": "Rp300.000"
      },
      {
        "key": "C",
        "text": "Rp350.000"
      },
      {
        "key": "D",
        "text": "Rp400.000"
      },
      {
        "key": "E",
        "text": "Rp500.000"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fungsi kuadrat $C(x) = ax^2 + bx + c$ dengan $a = 2 > 0$ membuka ke atas. Nilai minimum tercapai di sumbu simetri $x = -\\frac{b}{2a} = -\\frac{-40}{2(2)} = 10$ lusin. Biaya minimum: $C(10) = 2(10)^2 - 40(10) + 500 = 200 - 400 + 500 = 300$ ribu rupiah, atau Rp300.000.",
    "quickTrick": "👑 Metode The King GO: Titik puncak fungsi kuadrat: x = -b/(2a) = 40/4 = 10 -> C(10) = 2(100) - 400 + 500 = 300 ribu."
  },
  {
    "id": "bimbel_pm_047",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Aritmetika Finansial & Bunga Tunggal",
    "difficulty": "HOTS",
    "stimulus": "Pak Rahman menabung uang sebesar Rp20.000.000 di bank syariah dengan sistem bagi hasil setara bunga tunggal 6% per tahun. Ia berencana mengambil seluruh uang simpanan beserta keuntungannya setelah 2,5 tahun.",
    "question": "Total uang yang akan diterima Pak Rahman pada akhir periode tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp21.200.000"
      },
      {
        "key": "B",
        "text": "Rp22.500.000"
      },
      {
        "key": "C",
        "text": "Rp23.500.000"
      },
      {
        "key": "D",
        "text": "Rp23.000.000"
      },
      {
        "key": "E",
        "text": "Rp24.000.000"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Bunga tunggal: $B = M \\times i \\times t = 20.000.000 \\times 6\\% \\times 2,5 = 20.000.000 \\times 0,06 \\times 2,5 = 3.000.000$. Total uang tabungan: $M + B = 20.000.000 + 3.000.000 = \\text{Rp}23.000.000$.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Bunga per tahun = 6% x 20 jt = 1,2 jt. Dalam 2,5 tahun = 2,5 x 1,2 jt = 3 jt -> Total = 23 jt."
  },
  {
    "id": "bimbel_pm_048",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Pertumbuhan Eksponensial & Sains",
    "difficulty": "Sedang",
    "stimulus": "Kultur bakteri di laboratorium biologi berkembang biak secara eksponensial. Jumlah bakteri mula-mula adalah 500 sel, dan jumlahnya berlipat ganda setiap 30 menit sesuai model $N(t) = 500 \\times 2^{2t}$, dengan $t$ menyatakan waktu dalam jam.",
    "question": "Berapa banyak populasi bakteri tersebut setelah 3 jam pengamatan?",
    "options": [
      {
        "key": "A",
        "text": "32.000 bakteri"
      },
      {
        "key": "B",
        "text": "16.000 bakteri"
      },
      {
        "key": "C",
        "text": "24.000 bakteri"
      },
      {
        "key": "D",
        "text": "48.000 bakteri"
      },
      {
        "key": "E",
        "text": "64.000 bakteri"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Substitusikan $t = 3$ jam ke dalam rumus: $N(3) = 500 \\times 2^{2(3)} = 500 \\times 2^6 = 500 \\times 64 = 32.000$ sel bakteri.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Setiap 30 menit berlipat ganda, dalam 3 jam ada 6 periode pembelahan: 500 x 2^6 = 500 x 64 = 32.000."
  },
  {
    "id": "bimbel_pm_049",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Kecepatan Relatif & Gerak Lurus",
    "difficulty": "HOTS",
    "stimulus": "Dua mobil melaju dari dua kota A dan B yang berjarak $240\\text{ km}$ dan bergerak saling mendekati pada lintasan lurus yang sama. Mobil pertama melaju dari kota A dengan kecepatan tetap $70\\text{ km/jam}$, dan mobil kedua melaju dari kota B dengan kecepatan tetap $50\\text{ km/jam}$. Kedua mobil berangkat serentak pada pukul 08.00 WIB.",
    "question": "Pada pukul berapakah kedua mobil tersebut akan berpapasan?",
    "options": [
      {
        "key": "A",
        "text": "09.30 WIB"
      },
      {
        "key": "B",
        "text": "10.15 WIB"
      },
      {
        "key": "C",
        "text": "10.000 WIB"
      },
      {
        "key": "D",
        "text": "10.30 WIB"
      },
      {
        "key": "E",
        "text": "11.00 WIB"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Kecepatan relatif saling mendekat: $v_{rel} = v_1 + v_2 = 70 + 50 = 120\\text{ km/jam}$. Waktu tempuh hingga berpapasan: $t = \\frac{s}{v_{rel}} = \\frac{240}{120} = 2\\text{ jam}$. Waktu berpapasan: $08.00 + 02.00 = 10.00\\text{ WIB}$.",
    "quickTrick": "🌟 NF Smart Solution: Waktu berpapasan = Jarak Total / (v1 + v2) = 240 / 120 = 2 jam. 08.00 + 2 jam = 10.00 WIB."
  },
  {
    "id": "bimbel_pm_050",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Laju Debit Bersama & Kapasitas",
    "difficulty": "Sedang",
    "stimulus": "Sebuah kolam renang memiliki volume $180\\text{ m}^3$. Kolam tersebut diisi air menggunakan dua pipa pengisian. Pipa A mampu mengisi penuh kolam sendirian dalam waktu 6 jam, sedangkan pipa B mampu mengisinya dalam waktu 3 jam. Jika kedua pipa dibuka bersamaan, kolam tersebut akan terisi penuh dalam waktu...",
    "question": "Waktu yang dibutuhkan untuk mengisi penuh kolam jika kedua pipa dioperasikan serentak adalah...",
    "options": [
      {
        "key": "A",
        "text": "1,5 jam"
      },
      {
        "key": "B",
        "text": "2,5 jam"
      },
      {
        "key": "C",
        "text": "3,5 jam"
      },
      {
        "key": "D",
        "text": "4,5 jam"
      },
      {
        "key": "E",
        "text": "2 jam"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Laju pipa A: $\\frac{1}{6}$ kolam/jam. Laju pipa B: $\\frac{1}{3}$ kolam/jam. Laju gabungan: $\\frac{1}{t_{gab}} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1 + 2}{6} = \\frac{3}{6} = \\frac{1}{2}$. Maka $t_{gab} = 2\\text{ jam}$.",
    "quickTrick": "🧠 Zenius Core Logic: Rumus cepat pengisian bersama: t = (t1 x t2) / (t1 + t2) = (6 x 3) / (6 + 3) = 18 / 9 = 2 jam."
  },
  {
    "id": "bimbel_pm_051",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Optimasi Biaya & Aplikasi Fungsi Kuadrat",
    "difficulty": "HOTS",
    "stimulus": "Sebuah pabrik konveksi di Bandung memproduksi pakaian jadi. Fungsi total biaya produksi harian (dalam ribuan rupiah) dinyatakan dengan persamaan $C(x) = 2x^2 - 40x + 500$, di mana $x$ menyatakan jumlah lusin pakaian yang diproduksi per hari.",
    "question": "Biaya produksi harian minimum yang dikeluarkan pabrik tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp250.000"
      },
      {
        "key": "B",
        "text": "Rp300.000"
      },
      {
        "key": "C",
        "text": "Rp350.000"
      },
      {
        "key": "D",
        "text": "Rp400.000"
      },
      {
        "key": "E",
        "text": "Rp500.000"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fungsi kuadrat $C(x) = ax^2 + bx + c$ dengan $a = 2 > 0$ membuka ke atas. Nilai minimum tercapai di sumbu simetri $x = -\\frac{b}{2a} = -\\frac{-40}{2(2)} = 10$ lusin. Biaya minimum: $C(10) = 2(10)^2 - 40(10) + 500 = 200 - 400 + 500 = 300$ ribu rupiah, atau Rp300.000.",
    "quickTrick": "💡 INTEN Quick Concept: Titik puncak fungsi kuadrat: x = -b/(2a) = 40/4 = 10 -> C(10) = 2(100) - 400 + 500 = 300 ribu."
  },
  {
    "id": "bimbel_pm_052",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Aritmetika Finansial & Bunga Tunggal",
    "difficulty": "Sedang",
    "stimulus": "Pak Rahman menabung uang sebesar Rp20.000.000 di bank syariah dengan sistem bagi hasil setara bunga tunggal 6% per tahun. Ia berencana mengambil seluruh uang simpanan beserta keuntungannya setelah 2,5 tahun.",
    "question": "Total uang yang akan diterima Pak Rahman pada akhir periode tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp21.200.000"
      },
      {
        "key": "B",
        "text": "Rp22.500.000"
      },
      {
        "key": "C",
        "text": "Rp23.500.000"
      },
      {
        "key": "D",
        "text": "Rp23.000.000"
      },
      {
        "key": "E",
        "text": "Rp24.000.000"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Bunga tunggal: $B = M \\times i \\times t = 20.000.000 \\times 6\\% \\times 2,5 = 20.000.000 \\times 0,06 \\times 2,5 = 3.000.000$. Total uang tabungan: $M + B = 20.000.000 + 3.000.000 = \\text{Rp}23.000.000$.",
    "quickTrick": "👑 Metode The King GO: Bunga per tahun = 6% x 20 jt = 1,2 jt. Dalam 2,5 tahun = 2,5 x 1,2 jt = 3 jt -> Total = 23 jt."
  },
  {
    "id": "bimbel_pm_053",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Pertumbuhan Eksponensial & Sains",
    "difficulty": "HOTS",
    "stimulus": "Kultur bakteri di laboratorium biologi berkembang biak secara eksponensial. Jumlah bakteri mula-mula adalah 500 sel, dan jumlahnya berlipat ganda setiap 30 menit sesuai model $N(t) = 500 \\times 2^{2t}$, dengan $t$ menyatakan waktu dalam jam.",
    "question": "Berapa banyak populasi bakteri tersebut setelah 3 jam pengamatan?",
    "options": [
      {
        "key": "A",
        "text": "32.000 bakteri"
      },
      {
        "key": "B",
        "text": "16.000 bakteri"
      },
      {
        "key": "C",
        "text": "24.000 bakteri"
      },
      {
        "key": "D",
        "text": "48.000 bakteri"
      },
      {
        "key": "E",
        "text": "64.000 bakteri"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Substitusikan $t = 3$ jam ke dalam rumus: $N(3) = 500 \\times 2^{2(3)} = 500 \\times 2^6 = 500 \\times 64 = 32.000$ sel bakteri.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Setiap 30 menit berlipat ganda, dalam 3 jam ada 6 periode pembelahan: 500 x 2^6 = 500 x 64 = 32.000."
  },
  {
    "id": "bimbel_pm_054",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Kecepatan Relatif & Gerak Lurus",
    "difficulty": "Sedang",
    "stimulus": "Dua mobil melaju dari dua kota A dan B yang berjarak $240\\text{ km}$ dan bergerak saling mendekati pada lintasan lurus yang sama. Mobil pertama melaju dari kota A dengan kecepatan tetap $70\\text{ km/jam}$, dan mobil kedua melaju dari kota B dengan kecepatan tetap $50\\text{ km/jam}$. Kedua mobil berangkat serentak pada pukul 08.00 WIB.",
    "question": "Pada pukul berapakah kedua mobil tersebut akan berpapasan?",
    "options": [
      {
        "key": "A",
        "text": "09.30 WIB"
      },
      {
        "key": "B",
        "text": "10.15 WIB"
      },
      {
        "key": "C",
        "text": "10.000 WIB"
      },
      {
        "key": "D",
        "text": "10.30 WIB"
      },
      {
        "key": "E",
        "text": "11.00 WIB"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Kecepatan relatif saling mendekat: $v_{rel} = v_1 + v_2 = 70 + 50 = 120\\text{ km/jam}$. Waktu tempuh hingga berpapasan: $t = \\frac{s}{v_{rel}} = \\frac{240}{120} = 2\\text{ jam}$. Waktu berpapasan: $08.00 + 02.00 = 10.00\\text{ WIB}$.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Waktu berpapasan = Jarak Total / (v1 + v2) = 240 / 120 = 2 jam. 08.00 + 2 jam = 10.00 WIB."
  },
  {
    "id": "bimbel_pm_055",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Laju Debit Bersama & Kapasitas",
    "difficulty": "HOTS",
    "stimulus": "Sebuah kolam renang memiliki volume $180\\text{ m}^3$. Kolam tersebut diisi air menggunakan dua pipa pengisian. Pipa A mampu mengisi penuh kolam sendirian dalam waktu 6 jam, sedangkan pipa B mampu mengisinya dalam waktu 3 jam. Jika kedua pipa dibuka bersamaan, kolam tersebut akan terisi penuh dalam waktu...",
    "question": "Waktu yang dibutuhkan untuk mengisi penuh kolam jika kedua pipa dioperasikan serentak adalah...",
    "options": [
      {
        "key": "A",
        "text": "1,5 jam"
      },
      {
        "key": "B",
        "text": "2,5 jam"
      },
      {
        "key": "C",
        "text": "3,5 jam"
      },
      {
        "key": "D",
        "text": "4,5 jam"
      },
      {
        "key": "E",
        "text": "2 jam"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Laju pipa A: $\\frac{1}{6}$ kolam/jam. Laju pipa B: $\\frac{1}{3}$ kolam/jam. Laju gabungan: $\\frac{1}{t_{gab}} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1 + 2}{6} = \\frac{3}{6} = \\frac{1}{2}$. Maka $t_{gab} = 2\\text{ jam}$.",
    "quickTrick": "🌟 NF Smart Solution: Rumus cepat pengisian bersama: t = (t1 x t2) / (t1 + t2) = (6 x 3) / (6 + 3) = 18 / 9 = 2 jam."
  },
  {
    "id": "bimbel_pm_056",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Optimasi Biaya & Aplikasi Fungsi Kuadrat",
    "difficulty": "Sedang",
    "stimulus": "Sebuah pabrik konveksi di Bandung memproduksi pakaian jadi. Fungsi total biaya produksi harian (dalam ribuan rupiah) dinyatakan dengan persamaan $C(x) = 2x^2 - 40x + 500$, di mana $x$ menyatakan jumlah lusin pakaian yang diproduksi per hari.",
    "question": "Biaya produksi harian minimum yang dikeluarkan pabrik tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp250.000"
      },
      {
        "key": "B",
        "text": "Rp300.000"
      },
      {
        "key": "C",
        "text": "Rp350.000"
      },
      {
        "key": "D",
        "text": "Rp400.000"
      },
      {
        "key": "E",
        "text": "Rp500.000"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fungsi kuadrat $C(x) = ax^2 + bx + c$ dengan $a = 2 > 0$ membuka ke atas. Nilai minimum tercapai di sumbu simetri $x = -\\frac{b}{2a} = -\\frac{-40}{2(2)} = 10$ lusin. Biaya minimum: $C(10) = 2(10)^2 - 40(10) + 500 = 200 - 400 + 500 = 300$ ribu rupiah, atau Rp300.000.",
    "quickTrick": "🧠 Zenius Core Logic: Titik puncak fungsi kuadrat: x = -b/(2a) = 40/4 = 10 -> C(10) = 2(100) - 400 + 500 = 300 ribu."
  },
  {
    "id": "bimbel_pm_057",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Aritmetika Finansial & Bunga Tunggal",
    "difficulty": "HOTS",
    "stimulus": "Pak Rahman menabung uang sebesar Rp20.000.000 di bank syariah dengan sistem bagi hasil setara bunga tunggal 6% per tahun. Ia berencana mengambil seluruh uang simpanan beserta keuntungannya setelah 2,5 tahun.",
    "question": "Total uang yang akan diterima Pak Rahman pada akhir periode tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp21.200.000"
      },
      {
        "key": "B",
        "text": "Rp22.500.000"
      },
      {
        "key": "C",
        "text": "Rp23.500.000"
      },
      {
        "key": "D",
        "text": "Rp23.000.000"
      },
      {
        "key": "E",
        "text": "Rp24.000.000"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Bunga tunggal: $B = M \\times i \\times t = 20.000.000 \\times 6\\% \\times 2,5 = 20.000.000 \\times 0,06 \\times 2,5 = 3.000.000$. Total uang tabungan: $M + B = 20.000.000 + 3.000.000 = \\text{Rp}23.000.000$.",
    "quickTrick": "💡 INTEN Quick Concept: Bunga per tahun = 6% x 20 jt = 1,2 jt. Dalam 2,5 tahun = 2,5 x 1,2 jt = 3 jt -> Total = 23 jt."
  },
  {
    "id": "bimbel_pm_058",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Pertumbuhan Eksponensial & Sains",
    "difficulty": "Sedang",
    "stimulus": "Kultur bakteri di laboratorium biologi berkembang biak secara eksponensial. Jumlah bakteri mula-mula adalah 500 sel, dan jumlahnya berlipat ganda setiap 30 menit sesuai model $N(t) = 500 \\times 2^{2t}$, dengan $t$ menyatakan waktu dalam jam.",
    "question": "Berapa banyak populasi bakteri tersebut setelah 3 jam pengamatan?",
    "options": [
      {
        "key": "A",
        "text": "32.000 bakteri"
      },
      {
        "key": "B",
        "text": "16.000 bakteri"
      },
      {
        "key": "C",
        "text": "24.000 bakteri"
      },
      {
        "key": "D",
        "text": "48.000 bakteri"
      },
      {
        "key": "E",
        "text": "64.000 bakteri"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Substitusikan $t = 3$ jam ke dalam rumus: $N(3) = 500 \\times 2^{2(3)} = 500 \\times 2^6 = 500 \\times 64 = 32.000$ sel bakteri.",
    "quickTrick": "👑 Metode The King GO: Setiap 30 menit berlipat ganda, dalam 3 jam ada 6 periode pembelahan: 500 x 2^6 = 500 x 64 = 32.000."
  },
  {
    "id": "bimbel_pm_059",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Kecepatan Relatif & Gerak Lurus",
    "difficulty": "HOTS",
    "stimulus": "Dua mobil melaju dari dua kota A dan B yang berjarak $240\\text{ km}$ dan bergerak saling mendekati pada lintasan lurus yang sama. Mobil pertama melaju dari kota A dengan kecepatan tetap $70\\text{ km/jam}$, dan mobil kedua melaju dari kota B dengan kecepatan tetap $50\\text{ km/jam}$. Kedua mobil berangkat serentak pada pukul 08.00 WIB.",
    "question": "Pada pukul berapakah kedua mobil tersebut akan berpapasan?",
    "options": [
      {
        "key": "A",
        "text": "09.30 WIB"
      },
      {
        "key": "B",
        "text": "10.15 WIB"
      },
      {
        "key": "C",
        "text": "10.000 WIB"
      },
      {
        "key": "D",
        "text": "10.30 WIB"
      },
      {
        "key": "E",
        "text": "11.00 WIB"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Kecepatan relatif saling mendekat: $v_{rel} = v_1 + v_2 = 70 + 50 = 120\\text{ km/jam}$. Waktu tempuh hingga berpapasan: $t = \\frac{s}{v_{rel}} = \\frac{240}{120} = 2\\text{ jam}$. Waktu berpapasan: $08.00 + 02.00 = 10.00\\text{ WIB}$.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Waktu berpapasan = Jarak Total / (v1 + v2) = 240 / 120 = 2 jam. 08.00 + 2 jam = 10.00 WIB."
  },
  {
    "id": "bimbel_pm_060",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Laju Debit Bersama & Kapasitas",
    "difficulty": "Sedang",
    "stimulus": "Sebuah kolam renang memiliki volume $180\\text{ m}^3$. Kolam tersebut diisi air menggunakan dua pipa pengisian. Pipa A mampu mengisi penuh kolam sendirian dalam waktu 6 jam, sedangkan pipa B mampu mengisinya dalam waktu 3 jam. Jika kedua pipa dibuka bersamaan, kolam tersebut akan terisi penuh dalam waktu...",
    "question": "Waktu yang dibutuhkan untuk mengisi penuh kolam jika kedua pipa dioperasikan serentak adalah...",
    "options": [
      {
        "key": "A",
        "text": "1,5 jam"
      },
      {
        "key": "B",
        "text": "2,5 jam"
      },
      {
        "key": "C",
        "text": "3,5 jam"
      },
      {
        "key": "D",
        "text": "4,5 jam"
      },
      {
        "key": "E",
        "text": "2 jam"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Laju pipa A: $\\frac{1}{6}$ kolam/jam. Laju pipa B: $\\frac{1}{3}$ kolam/jam. Laju gabungan: $\\frac{1}{t_{gab}} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1 + 2}{6} = \\frac{3}{6} = \\frac{1}{2}$. Maka $t_{gab} = 2\\text{ jam}$.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Rumus cepat pengisian bersama: t = (t1 x t2) / (t1 + t2) = (6 x 3) / (6 + 3) = 18 / 9 = 2 jam."
  },
  {
    "id": "bimbel_pm_061",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Optimasi Biaya & Aplikasi Fungsi Kuadrat",
    "difficulty": "HOTS",
    "stimulus": "Sebuah pabrik konveksi di Bandung memproduksi pakaian jadi. Fungsi total biaya produksi harian (dalam ribuan rupiah) dinyatakan dengan persamaan $C(x) = 2x^2 - 40x + 500$, di mana $x$ menyatakan jumlah lusin pakaian yang diproduksi per hari.",
    "question": "Biaya produksi harian minimum yang dikeluarkan pabrik tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp250.000"
      },
      {
        "key": "B",
        "text": "Rp300.000"
      },
      {
        "key": "C",
        "text": "Rp350.000"
      },
      {
        "key": "D",
        "text": "Rp400.000"
      },
      {
        "key": "E",
        "text": "Rp500.000"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fungsi kuadrat $C(x) = ax^2 + bx + c$ dengan $a = 2 > 0$ membuka ke atas. Nilai minimum tercapai di sumbu simetri $x = -\\frac{b}{2a} = -\\frac{-40}{2(2)} = 10$ lusin. Biaya minimum: $C(10) = 2(10)^2 - 40(10) + 500 = 200 - 400 + 500 = 300$ ribu rupiah, atau Rp300.000.",
    "quickTrick": "🌟 NF Smart Solution: Titik puncak fungsi kuadrat: x = -b/(2a) = 40/4 = 10 -> C(10) = 2(100) - 400 + 500 = 300 ribu."
  },
  {
    "id": "bimbel_pm_062",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Aritmetika Finansial & Bunga Tunggal",
    "difficulty": "Sedang",
    "stimulus": "Pak Rahman menabung uang sebesar Rp20.000.000 di bank syariah dengan sistem bagi hasil setara bunga tunggal 6% per tahun. Ia berencana mengambil seluruh uang simpanan beserta keuntungannya setelah 2,5 tahun.",
    "question": "Total uang yang akan diterima Pak Rahman pada akhir periode tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp21.200.000"
      },
      {
        "key": "B",
        "text": "Rp22.500.000"
      },
      {
        "key": "C",
        "text": "Rp23.500.000"
      },
      {
        "key": "D",
        "text": "Rp23.000.000"
      },
      {
        "key": "E",
        "text": "Rp24.000.000"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Bunga tunggal: $B = M \\times i \\times t = 20.000.000 \\times 6\\% \\times 2,5 = 20.000.000 \\times 0,06 \\times 2,5 = 3.000.000$. Total uang tabungan: $M + B = 20.000.000 + 3.000.000 = \\text{Rp}23.000.000$.",
    "quickTrick": "🧠 Zenius Core Logic: Bunga per tahun = 6% x 20 jt = 1,2 jt. Dalam 2,5 tahun = 2,5 x 1,2 jt = 3 jt -> Total = 23 jt."
  },
  {
    "id": "bimbel_pm_063",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Pertumbuhan Eksponensial & Sains",
    "difficulty": "HOTS",
    "stimulus": "Kultur bakteri di laboratorium biologi berkembang biak secara eksponensial. Jumlah bakteri mula-mula adalah 500 sel, dan jumlahnya berlipat ganda setiap 30 menit sesuai model $N(t) = 500 \\times 2^{2t}$, dengan $t$ menyatakan waktu dalam jam.",
    "question": "Berapa banyak populasi bakteri tersebut setelah 3 jam pengamatan?",
    "options": [
      {
        "key": "A",
        "text": "32.000 bakteri"
      },
      {
        "key": "B",
        "text": "16.000 bakteri"
      },
      {
        "key": "C",
        "text": "24.000 bakteri"
      },
      {
        "key": "D",
        "text": "48.000 bakteri"
      },
      {
        "key": "E",
        "text": "64.000 bakteri"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Substitusikan $t = 3$ jam ke dalam rumus: $N(3) = 500 \\times 2^{2(3)} = 500 \\times 2^6 = 500 \\times 64 = 32.000$ sel bakteri.",
    "quickTrick": "💡 INTEN Quick Concept: Setiap 30 menit berlipat ganda, dalam 3 jam ada 6 periode pembelahan: 500 x 2^6 = 500 x 64 = 32.000."
  },
  {
    "id": "bimbel_pm_064",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Kecepatan Relatif & Gerak Lurus",
    "difficulty": "Sedang",
    "stimulus": "Dua mobil melaju dari dua kota A dan B yang berjarak $240\\text{ km}$ dan bergerak saling mendekati pada lintasan lurus yang sama. Mobil pertama melaju dari kota A dengan kecepatan tetap $70\\text{ km/jam}$, dan mobil kedua melaju dari kota B dengan kecepatan tetap $50\\text{ km/jam}$. Kedua mobil berangkat serentak pada pukul 08.00 WIB.",
    "question": "Pada pukul berapakah kedua mobil tersebut akan berpapasan?",
    "options": [
      {
        "key": "A",
        "text": "09.30 WIB"
      },
      {
        "key": "B",
        "text": "10.15 WIB"
      },
      {
        "key": "C",
        "text": "10.000 WIB"
      },
      {
        "key": "D",
        "text": "10.30 WIB"
      },
      {
        "key": "E",
        "text": "11.00 WIB"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Kecepatan relatif saling mendekat: $v_{rel} = v_1 + v_2 = 70 + 50 = 120\\text{ km/jam}$. Waktu tempuh hingga berpapasan: $t = \\frac{s}{v_{rel}} = \\frac{240}{120} = 2\\text{ jam}$. Waktu berpapasan: $08.00 + 02.00 = 10.00\\text{ WIB}$.",
    "quickTrick": "👑 Metode The King GO: Waktu berpapasan = Jarak Total / (v1 + v2) = 240 / 120 = 2 jam. 08.00 + 2 jam = 10.00 WIB."
  },
  {
    "id": "bimbel_pm_065",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Laju Debit Bersama & Kapasitas",
    "difficulty": "HOTS",
    "stimulus": "Sebuah kolam renang memiliki volume $180\\text{ m}^3$. Kolam tersebut diisi air menggunakan dua pipa pengisian. Pipa A mampu mengisi penuh kolam sendirian dalam waktu 6 jam, sedangkan pipa B mampu mengisinya dalam waktu 3 jam. Jika kedua pipa dibuka bersamaan, kolam tersebut akan terisi penuh dalam waktu...",
    "question": "Waktu yang dibutuhkan untuk mengisi penuh kolam jika kedua pipa dioperasikan serentak adalah...",
    "options": [
      {
        "key": "A",
        "text": "1,5 jam"
      },
      {
        "key": "B",
        "text": "2,5 jam"
      },
      {
        "key": "C",
        "text": "3,5 jam"
      },
      {
        "key": "D",
        "text": "4,5 jam"
      },
      {
        "key": "E",
        "text": "2 jam"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Laju pipa A: $\\frac{1}{6}$ kolam/jam. Laju pipa B: $\\frac{1}{3}$ kolam/jam. Laju gabungan: $\\frac{1}{t_{gab}} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1 + 2}{6} = \\frac{3}{6} = \\frac{1}{2}$. Maka $t_{gab} = 2\\text{ jam}$.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Rumus cepat pengisian bersama: t = (t1 x t2) / (t1 + t2) = (6 x 3) / (6 + 3) = 18 / 9 = 2 jam."
  },
  {
    "id": "bimbel_pm_066",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Optimasi Biaya & Aplikasi Fungsi Kuadrat",
    "difficulty": "Sedang",
    "stimulus": "Sebuah pabrik konveksi di Bandung memproduksi pakaian jadi. Fungsi total biaya produksi harian (dalam ribuan rupiah) dinyatakan dengan persamaan $C(x) = 2x^2 - 40x + 500$, di mana $x$ menyatakan jumlah lusin pakaian yang diproduksi per hari.",
    "question": "Biaya produksi harian minimum yang dikeluarkan pabrik tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp250.000"
      },
      {
        "key": "B",
        "text": "Rp300.000"
      },
      {
        "key": "C",
        "text": "Rp350.000"
      },
      {
        "key": "D",
        "text": "Rp400.000"
      },
      {
        "key": "E",
        "text": "Rp500.000"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fungsi kuadrat $C(x) = ax^2 + bx + c$ dengan $a = 2 > 0$ membuka ke atas. Nilai minimum tercapai di sumbu simetri $x = -\\frac{b}{2a} = -\\frac{-40}{2(2)} = 10$ lusin. Biaya minimum: $C(10) = 2(10)^2 - 40(10) + 500 = 200 - 400 + 500 = 300$ ribu rupiah, atau Rp300.000.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Titik puncak fungsi kuadrat: x = -b/(2a) = 40/4 = 10 -> C(10) = 2(100) - 400 + 500 = 300 ribu."
  },
  {
    "id": "bimbel_pm_067",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Aritmetika Finansial & Bunga Tunggal",
    "difficulty": "HOTS",
    "stimulus": "Pak Rahman menabung uang sebesar Rp20.000.000 di bank syariah dengan sistem bagi hasil setara bunga tunggal 6% per tahun. Ia berencana mengambil seluruh uang simpanan beserta keuntungannya setelah 2,5 tahun.",
    "question": "Total uang yang akan diterima Pak Rahman pada akhir periode tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp21.200.000"
      },
      {
        "key": "B",
        "text": "Rp22.500.000"
      },
      {
        "key": "C",
        "text": "Rp23.500.000"
      },
      {
        "key": "D",
        "text": "Rp23.000.000"
      },
      {
        "key": "E",
        "text": "Rp24.000.000"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Bunga tunggal: $B = M \\times i \\times t = 20.000.000 \\times 6\\% \\times 2,5 = 20.000.000 \\times 0,06 \\times 2,5 = 3.000.000$. Total uang tabungan: $M + B = 20.000.000 + 3.000.000 = \\text{Rp}23.000.000$.",
    "quickTrick": "🌟 NF Smart Solution: Bunga per tahun = 6% x 20 jt = 1,2 jt. Dalam 2,5 tahun = 2,5 x 1,2 jt = 3 jt -> Total = 23 jt."
  },
  {
    "id": "bimbel_pm_068",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Pertumbuhan Eksponensial & Sains",
    "difficulty": "Sedang",
    "stimulus": "Kultur bakteri di laboratorium biologi berkembang biak secara eksponensial. Jumlah bakteri mula-mula adalah 500 sel, dan jumlahnya berlipat ganda setiap 30 menit sesuai model $N(t) = 500 \\times 2^{2t}$, dengan $t$ menyatakan waktu dalam jam.",
    "question": "Berapa banyak populasi bakteri tersebut setelah 3 jam pengamatan?",
    "options": [
      {
        "key": "A",
        "text": "32.000 bakteri"
      },
      {
        "key": "B",
        "text": "16.000 bakteri"
      },
      {
        "key": "C",
        "text": "24.000 bakteri"
      },
      {
        "key": "D",
        "text": "48.000 bakteri"
      },
      {
        "key": "E",
        "text": "64.000 bakteri"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Substitusikan $t = 3$ jam ke dalam rumus: $N(3) = 500 \\times 2^{2(3)} = 500 \\times 2^6 = 500 \\times 64 = 32.000$ sel bakteri.",
    "quickTrick": "🧠 Zenius Core Logic: Setiap 30 menit berlipat ganda, dalam 3 jam ada 6 periode pembelahan: 500 x 2^6 = 500 x 64 = 32.000."
  },
  {
    "id": "bimbel_pm_069",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Kecepatan Relatif & Gerak Lurus",
    "difficulty": "HOTS",
    "stimulus": "Dua mobil melaju dari dua kota A dan B yang berjarak $240\\text{ km}$ dan bergerak saling mendekati pada lintasan lurus yang sama. Mobil pertama melaju dari kota A dengan kecepatan tetap $70\\text{ km/jam}$, dan mobil kedua melaju dari kota B dengan kecepatan tetap $50\\text{ km/jam}$. Kedua mobil berangkat serentak pada pukul 08.00 WIB.",
    "question": "Pada pukul berapakah kedua mobil tersebut akan berpapasan?",
    "options": [
      {
        "key": "A",
        "text": "09.30 WIB"
      },
      {
        "key": "B",
        "text": "10.15 WIB"
      },
      {
        "key": "C",
        "text": "10.000 WIB"
      },
      {
        "key": "D",
        "text": "10.30 WIB"
      },
      {
        "key": "E",
        "text": "11.00 WIB"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Kecepatan relatif saling mendekat: $v_{rel} = v_1 + v_2 = 70 + 50 = 120\\text{ km/jam}$. Waktu tempuh hingga berpapasan: $t = \\frac{s}{v_{rel}} = \\frac{240}{120} = 2\\text{ jam}$. Waktu berpapasan: $08.00 + 02.00 = 10.00\\text{ WIB}$.",
    "quickTrick": "💡 INTEN Quick Concept: Waktu berpapasan = Jarak Total / (v1 + v2) = 240 / 120 = 2 jam. 08.00 + 2 jam = 10.00 WIB."
  },
  {
    "id": "bimbel_pm_070",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Laju Debit Bersama & Kapasitas",
    "difficulty": "Sedang",
    "stimulus": "Sebuah kolam renang memiliki volume $180\\text{ m}^3$. Kolam tersebut diisi air menggunakan dua pipa pengisian. Pipa A mampu mengisi penuh kolam sendirian dalam waktu 6 jam, sedangkan pipa B mampu mengisinya dalam waktu 3 jam. Jika kedua pipa dibuka bersamaan, kolam tersebut akan terisi penuh dalam waktu...",
    "question": "Waktu yang dibutuhkan untuk mengisi penuh kolam jika kedua pipa dioperasikan serentak adalah...",
    "options": [
      {
        "key": "A",
        "text": "1,5 jam"
      },
      {
        "key": "B",
        "text": "2,5 jam"
      },
      {
        "key": "C",
        "text": "3,5 jam"
      },
      {
        "key": "D",
        "text": "4,5 jam"
      },
      {
        "key": "E",
        "text": "2 jam"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Laju pipa A: $\\frac{1}{6}$ kolam/jam. Laju pipa B: $\\frac{1}{3}$ kolam/jam. Laju gabungan: $\\frac{1}{t_{gab}} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1 + 2}{6} = \\frac{3}{6} = \\frac{1}{2}$. Maka $t_{gab} = 2\\text{ jam}$.",
    "quickTrick": "👑 Metode The King GO: Rumus cepat pengisian bersama: t = (t1 x t2) / (t1 + t2) = (6 x 3) / (6 + 3) = 18 / 9 = 2 jam."
  },
  {
    "id": "bimbel_pm_071",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Optimasi Biaya & Aplikasi Fungsi Kuadrat",
    "difficulty": "HOTS",
    "stimulus": "Sebuah pabrik konveksi di Bandung memproduksi pakaian jadi. Fungsi total biaya produksi harian (dalam ribuan rupiah) dinyatakan dengan persamaan $C(x) = 2x^2 - 40x + 500$, di mana $x$ menyatakan jumlah lusin pakaian yang diproduksi per hari.",
    "question": "Biaya produksi harian minimum yang dikeluarkan pabrik tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp250.000"
      },
      {
        "key": "B",
        "text": "Rp300.000"
      },
      {
        "key": "C",
        "text": "Rp350.000"
      },
      {
        "key": "D",
        "text": "Rp400.000"
      },
      {
        "key": "E",
        "text": "Rp500.000"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fungsi kuadrat $C(x) = ax^2 + bx + c$ dengan $a = 2 > 0$ membuka ke atas. Nilai minimum tercapai di sumbu simetri $x = -\\frac{b}{2a} = -\\frac{-40}{2(2)} = 10$ lusin. Biaya minimum: $C(10) = 2(10)^2 - 40(10) + 500 = 200 - 400 + 500 = 300$ ribu rupiah, atau Rp300.000.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Titik puncak fungsi kuadrat: x = -b/(2a) = 40/4 = 10 -> C(10) = 2(100) - 400 + 500 = 300 ribu."
  },
  {
    "id": "bimbel_pm_072",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Aritmetika Finansial & Bunga Tunggal",
    "difficulty": "Sedang",
    "stimulus": "Pak Rahman menabung uang sebesar Rp20.000.000 di bank syariah dengan sistem bagi hasil setara bunga tunggal 6% per tahun. Ia berencana mengambil seluruh uang simpanan beserta keuntungannya setelah 2,5 tahun.",
    "question": "Total uang yang akan diterima Pak Rahman pada akhir periode tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp21.200.000"
      },
      {
        "key": "B",
        "text": "Rp22.500.000"
      },
      {
        "key": "C",
        "text": "Rp23.500.000"
      },
      {
        "key": "D",
        "text": "Rp23.000.000"
      },
      {
        "key": "E",
        "text": "Rp24.000.000"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Bunga tunggal: $B = M \\times i \\times t = 20.000.000 \\times 6\\% \\times 2,5 = 20.000.000 \\times 0,06 \\times 2,5 = 3.000.000$. Total uang tabungan: $M + B = 20.000.000 + 3.000.000 = \\text{Rp}23.000.000$.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Bunga per tahun = 6% x 20 jt = 1,2 jt. Dalam 2,5 tahun = 2,5 x 1,2 jt = 3 jt -> Total = 23 jt."
  },
  {
    "id": "bimbel_pm_073",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Pertumbuhan Eksponensial & Sains",
    "difficulty": "HOTS",
    "stimulus": "Kultur bakteri di laboratorium biologi berkembang biak secara eksponensial. Jumlah bakteri mula-mula adalah 500 sel, dan jumlahnya berlipat ganda setiap 30 menit sesuai model $N(t) = 500 \\times 2^{2t}$, dengan $t$ menyatakan waktu dalam jam.",
    "question": "Berapa banyak populasi bakteri tersebut setelah 3 jam pengamatan?",
    "options": [
      {
        "key": "A",
        "text": "32.000 bakteri"
      },
      {
        "key": "B",
        "text": "16.000 bakteri"
      },
      {
        "key": "C",
        "text": "24.000 bakteri"
      },
      {
        "key": "D",
        "text": "48.000 bakteri"
      },
      {
        "key": "E",
        "text": "64.000 bakteri"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Substitusikan $t = 3$ jam ke dalam rumus: $N(3) = 500 \\times 2^{2(3)} = 500 \\times 2^6 = 500 \\times 64 = 32.000$ sel bakteri.",
    "quickTrick": "🌟 NF Smart Solution: Setiap 30 menit berlipat ganda, dalam 3 jam ada 6 periode pembelahan: 500 x 2^6 = 500 x 64 = 32.000."
  },
  {
    "id": "bimbel_pm_074",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Kecepatan Relatif & Gerak Lurus",
    "difficulty": "Sedang",
    "stimulus": "Dua mobil melaju dari dua kota A dan B yang berjarak $240\\text{ km}$ dan bergerak saling mendekati pada lintasan lurus yang sama. Mobil pertama melaju dari kota A dengan kecepatan tetap $70\\text{ km/jam}$, dan mobil kedua melaju dari kota B dengan kecepatan tetap $50\\text{ km/jam}$. Kedua mobil berangkat serentak pada pukul 08.00 WIB.",
    "question": "Pada pukul berapakah kedua mobil tersebut akan berpapasan?",
    "options": [
      {
        "key": "A",
        "text": "09.30 WIB"
      },
      {
        "key": "B",
        "text": "10.15 WIB"
      },
      {
        "key": "C",
        "text": "10.000 WIB"
      },
      {
        "key": "D",
        "text": "10.30 WIB"
      },
      {
        "key": "E",
        "text": "11.00 WIB"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Kecepatan relatif saling mendekat: $v_{rel} = v_1 + v_2 = 70 + 50 = 120\\text{ km/jam}$. Waktu tempuh hingga berpapasan: $t = \\frac{s}{v_{rel}} = \\frac{240}{120} = 2\\text{ jam}$. Waktu berpapasan: $08.00 + 02.00 = 10.00\\text{ WIB}$.",
    "quickTrick": "🧠 Zenius Core Logic: Waktu berpapasan = Jarak Total / (v1 + v2) = 240 / 120 = 2 jam. 08.00 + 2 jam = 10.00 WIB."
  },
  {
    "id": "bimbel_pm_075",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Laju Debit Bersama & Kapasitas",
    "difficulty": "HOTS",
    "stimulus": "Sebuah kolam renang memiliki volume $180\\text{ m}^3$. Kolam tersebut diisi air menggunakan dua pipa pengisian. Pipa A mampu mengisi penuh kolam sendirian dalam waktu 6 jam, sedangkan pipa B mampu mengisinya dalam waktu 3 jam. Jika kedua pipa dibuka bersamaan, kolam tersebut akan terisi penuh dalam waktu...",
    "question": "Waktu yang dibutuhkan untuk mengisi penuh kolam jika kedua pipa dioperasikan serentak adalah...",
    "options": [
      {
        "key": "A",
        "text": "1,5 jam"
      },
      {
        "key": "B",
        "text": "2,5 jam"
      },
      {
        "key": "C",
        "text": "3,5 jam"
      },
      {
        "key": "D",
        "text": "4,5 jam"
      },
      {
        "key": "E",
        "text": "2 jam"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Laju pipa A: $\\frac{1}{6}$ kolam/jam. Laju pipa B: $\\frac{1}{3}$ kolam/jam. Laju gabungan: $\\frac{1}{t_{gab}} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1 + 2}{6} = \\frac{3}{6} = \\frac{1}{2}$. Maka $t_{gab} = 2\\text{ jam}$.",
    "quickTrick": "💡 INTEN Quick Concept: Rumus cepat pengisian bersama: t = (t1 x t2) / (t1 + t2) = (6 x 3) / (6 + 3) = 18 / 9 = 2 jam."
  },
  {
    "id": "bimbel_pm_076",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Optimasi Biaya & Aplikasi Fungsi Kuadrat",
    "difficulty": "Sedang",
    "stimulus": "Sebuah pabrik konveksi di Bandung memproduksi pakaian jadi. Fungsi total biaya produksi harian (dalam ribuan rupiah) dinyatakan dengan persamaan $C(x) = 2x^2 - 40x + 500$, di mana $x$ menyatakan jumlah lusin pakaian yang diproduksi per hari.",
    "question": "Biaya produksi harian minimum yang dikeluarkan pabrik tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp250.000"
      },
      {
        "key": "B",
        "text": "Rp300.000"
      },
      {
        "key": "C",
        "text": "Rp350.000"
      },
      {
        "key": "D",
        "text": "Rp400.000"
      },
      {
        "key": "E",
        "text": "Rp500.000"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Fungsi kuadrat $C(x) = ax^2 + bx + c$ dengan $a = 2 > 0$ membuka ke atas. Nilai minimum tercapai di sumbu simetri $x = -\\frac{b}{2a} = -\\frac{-40}{2(2)} = 10$ lusin. Biaya minimum: $C(10) = 2(10)^2 - 40(10) + 500 = 200 - 400 + 500 = 300$ ribu rupiah, atau Rp300.000.",
    "quickTrick": "👑 Metode The King GO: Titik puncak fungsi kuadrat: x = -b/(2a) = 40/4 = 10 -> C(10) = 2(100) - 400 + 500 = 300 ribu."
  },
  {
    "id": "bimbel_pm_077",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Aritmetika Finansial & Bunga Tunggal",
    "difficulty": "HOTS",
    "stimulus": "Pak Rahman menabung uang sebesar Rp20.000.000 di bank syariah dengan sistem bagi hasil setara bunga tunggal 6% per tahun. Ia berencana mengambil seluruh uang simpanan beserta keuntungannya setelah 2,5 tahun.",
    "question": "Total uang yang akan diterima Pak Rahman pada akhir periode tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "Rp21.200.000"
      },
      {
        "key": "B",
        "text": "Rp22.500.000"
      },
      {
        "key": "C",
        "text": "Rp23.500.000"
      },
      {
        "key": "D",
        "text": "Rp23.000.000"
      },
      {
        "key": "E",
        "text": "Rp24.000.000"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Bunga tunggal: $B = M \\times i \\times t = 20.000.000 \\times 6\\% \\times 2,5 = 20.000.000 \\times 0,06 \\times 2,5 = 3.000.000$. Total uang tabungan: $M + B = 20.000.000 + 3.000.000 = \\text{Rp}23.000.000$.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Bunga per tahun = 6% x 20 jt = 1,2 jt. Dalam 2,5 tahun = 2,5 x 1,2 jt = 3 jt -> Total = 23 jt."
  },
  {
    "id": "bimbel_pm_078",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Pertumbuhan Eksponensial & Sains",
    "difficulty": "Sedang",
    "stimulus": "Kultur bakteri di laboratorium biologi berkembang biak secara eksponensial. Jumlah bakteri mula-mula adalah 500 sel, dan jumlahnya berlipat ganda setiap 30 menit sesuai model $N(t) = 500 \\times 2^{2t}$, dengan $t$ menyatakan waktu dalam jam.",
    "question": "Berapa banyak populasi bakteri tersebut setelah 3 jam pengamatan?",
    "options": [
      {
        "key": "A",
        "text": "32.000 bakteri"
      },
      {
        "key": "B",
        "text": "16.000 bakteri"
      },
      {
        "key": "C",
        "text": "24.000 bakteri"
      },
      {
        "key": "D",
        "text": "48.000 bakteri"
      },
      {
        "key": "E",
        "text": "64.000 bakteri"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Substitusikan $t = 3$ jam ke dalam rumus: $N(3) = 500 \\times 2^{2(3)} = 500 \\times 2^6 = 500 \\times 64 = 32.000$ sel bakteri.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Setiap 30 menit berlipat ganda, dalam 3 jam ada 6 periode pembelahan: 500 x 2^6 = 500 x 64 = 32.000."
  },
  {
    "id": "bimbel_pm_079",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Kecepatan Relatif & Gerak Lurus",
    "difficulty": "HOTS",
    "stimulus": "Dua mobil melaju dari dua kota A dan B yang berjarak $240\\text{ km}$ dan bergerak saling mendekati pada lintasan lurus yang sama. Mobil pertama melaju dari kota A dengan kecepatan tetap $70\\text{ km/jam}$, dan mobil kedua melaju dari kota B dengan kecepatan tetap $50\\text{ km/jam}$. Kedua mobil berangkat serentak pada pukul 08.00 WIB.",
    "question": "Pada pukul berapakah kedua mobil tersebut akan berpapasan?",
    "options": [
      {
        "key": "A",
        "text": "09.30 WIB"
      },
      {
        "key": "B",
        "text": "10.15 WIB"
      },
      {
        "key": "C",
        "text": "10.000 WIB"
      },
      {
        "key": "D",
        "text": "10.30 WIB"
      },
      {
        "key": "E",
        "text": "11.00 WIB"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Kecepatan relatif saling mendekat: $v_{rel} = v_1 + v_2 = 70 + 50 = 120\\text{ km/jam}$. Waktu tempuh hingga berpapasan: $t = \\frac{s}{v_{rel}} = \\frac{240}{120} = 2\\text{ jam}$. Waktu berpapasan: $08.00 + 02.00 = 10.00\\text{ WIB}$.",
    "quickTrick": "🌟 NF Smart Solution: Waktu berpapasan = Jarak Total / (v1 + v2) = 240 / 120 = 2 jam. 08.00 + 2 jam = 10.00 WIB."
  },
  {
    "id": "bimbel_pm_080",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "pm",
    "subtestName": "Penalaran Matematika",
    "category": "Laju Debit Bersama & Kapasitas",
    "difficulty": "Sedang",
    "stimulus": "Sebuah kolam renang memiliki volume $180\\text{ m}^3$. Kolam tersebut diisi air menggunakan dua pipa pengisian. Pipa A mampu mengisi penuh kolam sendirian dalam waktu 6 jam, sedangkan pipa B mampu mengisinya dalam waktu 3 jam. Jika kedua pipa dibuka bersamaan, kolam tersebut akan terisi penuh dalam waktu...",
    "question": "Waktu yang dibutuhkan untuk mengisi penuh kolam jika kedua pipa dioperasikan serentak adalah...",
    "options": [
      {
        "key": "A",
        "text": "1,5 jam"
      },
      {
        "key": "B",
        "text": "2,5 jam"
      },
      {
        "key": "C",
        "text": "3,5 jam"
      },
      {
        "key": "D",
        "text": "4,5 jam"
      },
      {
        "key": "E",
        "text": "2 jam"
      }
    ],
    "correctAnswer": "E",
    "explanation": "Laju pipa A: $\\frac{1}{6}$ kolam/jam. Laju pipa B: $\\frac{1}{3}$ kolam/jam. Laju gabungan: $\\frac{1}{t_{gab}} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1 + 2}{6} = \\frac{3}{6} = \\frac{1}{2}$. Maka $t_{gab} = 2\\text{ jam}$.",
    "quickTrick": "🧠 Zenius Core Logic: Rumus cepat pengisian bersama: t = (t1 x t2) / (t1 + t2) = (6 x 3) / (6 + 3) = 18 / 9 = 2 jam."
  },
  {
    "id": "bimbel_lit_indo_001",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Literasi Teks Ilmiah & Kebijakan",
    "difficulty": "HOTS",
    "stimulus": "Transisi energi di sektor penerbangan komersial global menuntut adopsi bahan bakar ramah lingkungan (Sustainable Aviation Fuel / SAF). Indonesia, sebagai produsen minyak kelapa sawit terbesar di dunia, memiliki posisi strategis dalam rantai pasok bioavtur. Namun, tantangan sertifikasi keberlanjutan Roundtable on Sustainable Biomass (RSB) dan persaingan pemanfaatan minyak nabati untuk kebutuhan pangan domestik menjadi hambatan struktural yang harus diselesaikan melalui harmonisasi regulasi lintas kementerian.",
    "question": "Tujuan utama penulis menyampaikan wacana tersebut adalah untuk...",
    "options": [
      {
        "key": "A",
        "text": "Mendesak maskapai penerbangan nasional menurunkan harga tiket penerbangan domestik."
      },
      {
        "key": "B",
        "text": "Mengkritik keras penggunaan kelapa sawit dalam produksi bahan bakar nabati."
      },
      {
        "key": "C",
        "text": "Menyoroti potensi besar Indonesia dalam bioavtur sekaligus menggarisbawahi urgensi penyelesaian regulasi dan sertifikasi keberlanjutan."
      },
      {
        "key": "D",
        "text": "Memaparkan keunggulan teknologi mesin jet yang mengonsumsi bahan bakar konvensional."
      },
      {
        "key": "E",
        "text": "Menyatakan bahwa sertifikasi RSB tidak memiliki signifikansi dalam perdagangan global."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Tujuan penulisan teks analitis: Penulis mengidentifikasi peluang strategis Indonesia (potensi bioavtur) dan secara bersamaan memaparkan hambatan nyata (sertifikasi dan regulasi) agar tercipta solusi harmonisasi kebijakan.",
    "quickTrick": "💡 INTEN Reading Strategy: Tujuan teks argumentatif/analitis selalu merangkum problem statement dan arah solusi yang ditawarkan."
  },
  {
    "id": "bimbel_lit_indo_002",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Asumsi Implisit & Penalaran Kritis",
    "difficulty": "Sedang",
    "stimulus": "Pemanfaatan algoritma pembelajaran mesin pada platform media sosial telah dirancang untuk memaksimalkan retensi atensi pengguna. Konten yang memicu reaksi emosional kuat—terutama kemarahan atau kegelisahan—cenderung diamplifikasi oleh algoritma hingga memperoleh tingkat keterlibatan lima kali lebih tinggi dibandingkan konten bernada netral. Dampaknya, ruang publik digital kian terpolarisasi menjadi ruang gema (echo chamber) yang mengikis kapasitas dialog rasional masyarakat.",
    "question": "Berdasarkan wacana di atas, asumsi implisit yang mendasari kekhawatiran penulis terhadap algoritma media sosial adalah...",
    "options": [
      {
        "key": "A",
        "text": "Ruang gema digital yang terpolarisasi dapat mengancam kualitas pertimbangan demokratis dan kohesi sosial dalam masyarakat."
      },
      {
        "key": "B",
        "text": "Semua platform media sosial seharusnya ditutup secara permanen oleh kementerian komunikasi."
      },
      {
        "key": "C",
        "text": "Pengguna media sosial tidak memiliki kemampuan nalar sama sekali dalam menyaring berita palsu."
      },
      {
        "key": "D",
        "text": "Konten bernada netral tidak akan pernah dibaca oleh generasi muda di era kecerdasan buatan."
      },
      {
        "key": "E",
        "text": "Polarisasi ruang publik merupakan fenomena alami yang tidak memiliki konsekuensi politik apa pun."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Asumsi implisit adalah fondasi pemikiran yang tidak diucapkan secara eksplisit namun menjadi alasan logis di balik keprihatinan penulis. Penulis khawatir akan polarisasi karena ia meyakini dialog rasional sangat penting bagi kesehatan tatanan demokrasi dan kehidupan sosial.",
    "quickTrick": "👑 Metode The King GO: Tanyakan: 'Mengapa penulis begitu peduli dengan isu ini?' Jawabannya adalah asumsi nilai (value assumption) yang diyakininya."
  },
  {
    "id": "bimbel_lit_indo_003",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Analisis Hubungan Kausalitas Teks",
    "difficulty": "HOTS",
    "stimulus": "Ekosistem lahan gambut menyimpan cadangan karbon terestrial global dua kali lipat lebih banyak daripada seluruh biomassa hutan di dunia. Ketika lahan gambut dikeringkan melalui pembuatan kanal drainase untuk perkebunan monokultur, lapisan gambut menjadi sangat rentan teroksidasi dan terbakar. Kebakaran gambut melepaskan jutaan ton gas rumah kaca serta menghasilkan kabut asap pekat yang melumpuhkan aktivitas ekonomi regional.",
    "question": "Hubungan sebab-akibat yang PALING TEPAT digambarkan oleh teks adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kebakaran gambut menyebabkan terbentuknya kanal drainase baru di sekitar perkebunan."
      },
      {
        "key": "B",
        "text": "Biomassa hutan tropis menyerap seluruh emisi karbon yang dihasilkan dari kebakaran gambut."
      },
      {
        "key": "C",
        "text": "Aktivitas ekonomi regional pulih seketika setelah lahan gambut dikeringkan sepenuhnya."
      },
      {
        "key": "D",
        "text": "Pembuatan kanal drainase menyebabkan penurunan kadar air gambut yang memicu kerentanan kebakaran hebat dan pelepasan karbon masif."
      },
      {
        "key": "E",
        "text": "Lapisan gambut terhindar dari proses oksidasi jika berada dalam kondisi tanah yang kering."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Rantai kausalitas: Drainase kanal -> gambut mengering dan teroksidasi -> mudah terbakar -> polusi asap dan pelepasan emisi karbon.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Susun urutan kronologis kausalitas: Faktor pemicu -> Kondisi perantara -> Dampak akhir."
  },
  {
    "id": "bimbel_lit_indo_004",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Sikap Penulis (Author's Tone) & Evaluasi Wacana",
    "difficulty": "Sedang",
    "stimulus": "Sorgum dan sagu dinilai para ahli pangan sebagai komoditas masa depan yang mampu memperkuat kedaulatan pangan nasional. Keduanya memiliki indeks glikemik yang relatif rendah serta ketahanan tinggi terhadap kondisi tanah marjinal dan anomali cuaca ekstrem akibat El Nino. Kendati demikian, persepsi masyarakat yang masih menganggap beras sebagai 'status sosial' utama menjadi tantangan kultural yang harus dijembatani melalui kampanye gastronomi kreatif.",
    "question": "Sikap atau nada (tone) penulis dalam wacana di atas dapat dikategorikan sebagai...",
    "options": [
      {
        "key": "A",
        "text": "Pesimistis dan skeptis terhadap masa depan pertanian nasional."
      },
      {
        "key": "B",
        "text": "Objektif dan konstruktif terhadap prospek diversifikasi pangan alternatif."
      },
      {
        "key": "C",
        "text": "Sarkastis dan meremehkan preferensi konsumsi masyarakat tradisional."
      },
      {
        "key": "D",
        "text": "Emosional dan menuntut pelarangan total konsumsi beras putih."
      },
      {
        "key": "E",
        "text": "Apatis dan tidak peduli terhadap ancaman krisis pangan global."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Penulis menyajikan fakta agronomi sorgum dan sagu secara ilmiah (objektif) sembari mengakui tantangan budaya dan menyarankan solusi kampanye gastronomi yang positif (konstruktif).",
    "quickTrick": "🚀 Brain Academy Fast Trick: Perhatikan pilihan kata: tidak ada kata-kata menghakimi yang sinis; nada tulisan analitis dan solutif."
  },
  {
    "id": "bimbel_lit_indo_005",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Literasi Teks Ilmiah & Kebijakan",
    "difficulty": "HOTS",
    "stimulus": "Transisi energi di sektor penerbangan komersial global menuntut adopsi bahan bakar ramah lingkungan (Sustainable Aviation Fuel / SAF). Indonesia, sebagai produsen minyak kelapa sawit terbesar di dunia, memiliki posisi strategis dalam rantai pasok bioavtur. Namun, tantangan sertifikasi keberlanjutan Roundtable on Sustainable Biomass (RSB) dan persaingan pemanfaatan minyak nabati untuk kebutuhan pangan domestik menjadi hambatan struktural yang harus diselesaikan melalui harmonisasi regulasi lintas kementerian.",
    "question": "Tujuan utama penulis menyampaikan wacana tersebut adalah untuk...",
    "options": [
      {
        "key": "A",
        "text": "Mendesak maskapai penerbangan nasional menurunkan harga tiket penerbangan domestik."
      },
      {
        "key": "B",
        "text": "Mengkritik keras penggunaan kelapa sawit dalam produksi bahan bakar nabati."
      },
      {
        "key": "C",
        "text": "Memaparkan keunggulan teknologi mesin jet yang mengonsumsi bahan bakar konvensional."
      },
      {
        "key": "D",
        "text": "Menyatakan bahwa sertifikasi RSB tidak memiliki signifikansi dalam perdagangan global."
      },
      {
        "key": "E",
        "text": "Menyoroti potensi besar Indonesia dalam bioavtur sekaligus menggarisbawahi urgensi penyelesaian regulasi dan sertifikasi keberlanjutan."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Tujuan penulisan teks analitis: Penulis mengidentifikasi peluang strategis Indonesia (potensi bioavtur) dan secara bersamaan memaparkan hambatan nyata (sertifikasi dan regulasi) agar tercipta solusi harmonisasi kebijakan.",
    "quickTrick": "🌟 NF Smart Solution: Tujuan teks argumentatif/analitis selalu merangkum problem statement dan arah solusi yang ditawarkan."
  },
  {
    "id": "bimbel_lit_indo_006",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Asumsi Implisit & Penalaran Kritis",
    "difficulty": "Sedang",
    "stimulus": "Pemanfaatan algoritma pembelajaran mesin pada platform media sosial telah dirancang untuk memaksimalkan retensi atensi pengguna. Konten yang memicu reaksi emosional kuat—terutama kemarahan atau kegelisahan—cenderung diamplifikasi oleh algoritma hingga memperoleh tingkat keterlibatan lima kali lebih tinggi dibandingkan konten bernada netral. Dampaknya, ruang publik digital kian terpolarisasi menjadi ruang gema (echo chamber) yang mengikis kapasitas dialog rasional masyarakat.",
    "question": "Berdasarkan wacana di atas, asumsi implisit yang mendasari kekhawatiran penulis terhadap algoritma media sosial adalah...",
    "options": [
      {
        "key": "A",
        "text": "Semua platform media sosial seharusnya ditutup secara permanen oleh kementerian komunikasi."
      },
      {
        "key": "B",
        "text": "Pengguna media sosial tidak memiliki kemampuan nalar sama sekali dalam menyaring berita palsu."
      },
      {
        "key": "C",
        "text": "Ruang gema digital yang terpolarisasi dapat mengancam kualitas pertimbangan demokratis dan kohesi sosial dalam masyarakat."
      },
      {
        "key": "D",
        "text": "Konten bernada netral tidak akan pernah dibaca oleh generasi muda di era kecerdasan buatan."
      },
      {
        "key": "E",
        "text": "Polarisasi ruang publik merupakan fenomena alami yang tidak memiliki konsekuensi politik apa pun."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Asumsi implisit adalah fondasi pemikiran yang tidak diucapkan secara eksplisit namun menjadi alasan logis di balik keprihatinan penulis. Penulis khawatir akan polarisasi karena ia meyakini dialog rasional sangat penting bagi kesehatan tatanan demokrasi dan kehidupan sosial.",
    "quickTrick": "🧠 Zenius Core Logic: Tanyakan: 'Mengapa penulis begitu peduli dengan isu ini?' Jawabannya adalah asumsi nilai (value assumption) yang diyakininya."
  },
  {
    "id": "bimbel_lit_indo_007",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Analisis Hubungan Kausalitas Teks",
    "difficulty": "HOTS",
    "stimulus": "Ekosistem lahan gambut menyimpan cadangan karbon terestrial global dua kali lipat lebih banyak daripada seluruh biomassa hutan di dunia. Ketika lahan gambut dikeringkan melalui pembuatan kanal drainase untuk perkebunan monokultur, lapisan gambut menjadi sangat rentan teroksidasi dan terbakar. Kebakaran gambut melepaskan jutaan ton gas rumah kaca serta menghasilkan kabut asap pekat yang melumpuhkan aktivitas ekonomi regional.",
    "question": "Hubungan sebab-akibat yang PALING TEPAT digambarkan oleh teks adalah...",
    "options": [
      {
        "key": "A",
        "text": "Pembuatan kanal drainase menyebabkan penurunan kadar air gambut yang memicu kerentanan kebakaran hebat dan pelepasan karbon masif."
      },
      {
        "key": "B",
        "text": "Kebakaran gambut menyebabkan terbentuknya kanal drainase baru di sekitar perkebunan."
      },
      {
        "key": "C",
        "text": "Biomassa hutan tropis menyerap seluruh emisi karbon yang dihasilkan dari kebakaran gambut."
      },
      {
        "key": "D",
        "text": "Aktivitas ekonomi regional pulih seketika setelah lahan gambut dikeringkan sepenuhnya."
      },
      {
        "key": "E",
        "text": "Lapisan gambut terhindar dari proses oksidasi jika berada dalam kondisi tanah yang kering."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Rantai kausalitas: Drainase kanal -> gambut mengering dan teroksidasi -> mudah terbakar -> polusi asap dan pelepasan emisi karbon.",
    "quickTrick": "💡 INTEN Reading Strategy: Susun urutan kronologis kausalitas: Faktor pemicu -> Kondisi perantara -> Dampak akhir."
  },
  {
    "id": "bimbel_lit_indo_008",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Sikap Penulis (Author's Tone) & Evaluasi Wacana",
    "difficulty": "Sedang",
    "stimulus": "Sorgum dan sagu dinilai para ahli pangan sebagai komoditas masa depan yang mampu memperkuat kedaulatan pangan nasional. Keduanya memiliki indeks glikemik yang relatif rendah serta ketahanan tinggi terhadap kondisi tanah marjinal dan anomali cuaca ekstrem akibat El Nino. Kendati demikian, persepsi masyarakat yang masih menganggap beras sebagai 'status sosial' utama menjadi tantangan kultural yang harus dijembatani melalui kampanye gastronomi kreatif.",
    "question": "Sikap atau nada (tone) penulis dalam wacana di atas dapat dikategorikan sebagai...",
    "options": [
      {
        "key": "A",
        "text": "Pesimistis dan skeptis terhadap masa depan pertanian nasional."
      },
      {
        "key": "B",
        "text": "Sarkastis dan meremehkan preferensi konsumsi masyarakat tradisional."
      },
      {
        "key": "C",
        "text": "Emosional dan menuntut pelarangan total konsumsi beras putih."
      },
      {
        "key": "D",
        "text": "Objektif dan konstruktif terhadap prospek diversifikasi pangan alternatif."
      },
      {
        "key": "E",
        "text": "Apatis dan tidak peduli terhadap ancaman krisis pangan global."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Penulis menyajikan fakta agronomi sorgum dan sagu secara ilmiah (objektif) sembari mengakui tantangan budaya dan menyarankan solusi kampanye gastronomi yang positif (konstruktif).",
    "quickTrick": "👑 Metode The King GO: Perhatikan pilihan kata: tidak ada kata-kata menghakimi yang sinis; nada tulisan analitis dan solutif."
  },
  {
    "id": "bimbel_lit_indo_009",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Literasi Teks Ilmiah & Kebijakan",
    "difficulty": "HOTS",
    "stimulus": "Transisi energi di sektor penerbangan komersial global menuntut adopsi bahan bakar ramah lingkungan (Sustainable Aviation Fuel / SAF). Indonesia, sebagai produsen minyak kelapa sawit terbesar di dunia, memiliki posisi strategis dalam rantai pasok bioavtur. Namun, tantangan sertifikasi keberlanjutan Roundtable on Sustainable Biomass (RSB) dan persaingan pemanfaatan minyak nabati untuk kebutuhan pangan domestik menjadi hambatan struktural yang harus diselesaikan melalui harmonisasi regulasi lintas kementerian.",
    "question": "Tujuan utama penulis menyampaikan wacana tersebut adalah untuk...",
    "options": [
      {
        "key": "A",
        "text": "Mendesak maskapai penerbangan nasional menurunkan harga tiket penerbangan domestik."
      },
      {
        "key": "B",
        "text": "Menyoroti potensi besar Indonesia dalam bioavtur sekaligus menggarisbawahi urgensi penyelesaian regulasi dan sertifikasi keberlanjutan."
      },
      {
        "key": "C",
        "text": "Mengkritik keras penggunaan kelapa sawit dalam produksi bahan bakar nabati."
      },
      {
        "key": "D",
        "text": "Memaparkan keunggulan teknologi mesin jet yang mengonsumsi bahan bakar konvensional."
      },
      {
        "key": "E",
        "text": "Menyatakan bahwa sertifikasi RSB tidak memiliki signifikansi dalam perdagangan global."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Tujuan penulisan teks analitis: Penulis mengidentifikasi peluang strategis Indonesia (potensi bioavtur) dan secara bersamaan memaparkan hambatan nyata (sertifikasi dan regulasi) agar tercipta solusi harmonisasi kebijakan.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Tujuan teks argumentatif/analitis selalu merangkum problem statement dan arah solusi yang ditawarkan."
  },
  {
    "id": "bimbel_lit_indo_010",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Asumsi Implisit & Penalaran Kritis",
    "difficulty": "Sedang",
    "stimulus": "Pemanfaatan algoritma pembelajaran mesin pada platform media sosial telah dirancang untuk memaksimalkan retensi atensi pengguna. Konten yang memicu reaksi emosional kuat—terutama kemarahan atau kegelisahan—cenderung diamplifikasi oleh algoritma hingga memperoleh tingkat keterlibatan lima kali lebih tinggi dibandingkan konten bernada netral. Dampaknya, ruang publik digital kian terpolarisasi menjadi ruang gema (echo chamber) yang mengikis kapasitas dialog rasional masyarakat.",
    "question": "Berdasarkan wacana di atas, asumsi implisit yang mendasari kekhawatiran penulis terhadap algoritma media sosial adalah...",
    "options": [
      {
        "key": "A",
        "text": "Semua platform media sosial seharusnya ditutup secara permanen oleh kementerian komunikasi."
      },
      {
        "key": "B",
        "text": "Pengguna media sosial tidak memiliki kemampuan nalar sama sekali dalam menyaring berita palsu."
      },
      {
        "key": "C",
        "text": "Konten bernada netral tidak akan pernah dibaca oleh generasi muda di era kecerdasan buatan."
      },
      {
        "key": "D",
        "text": "Polarisasi ruang publik merupakan fenomena alami yang tidak memiliki konsekuensi politik apa pun."
      },
      {
        "key": "E",
        "text": "Ruang gema digital yang terpolarisasi dapat mengancam kualitas pertimbangan demokratis dan kohesi sosial dalam masyarakat."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Asumsi implisit adalah fondasi pemikiran yang tidak diucapkan secara eksplisit namun menjadi alasan logis di balik keprihatinan penulis. Penulis khawatir akan polarisasi karena ia meyakini dialog rasional sangat penting bagi kesehatan tatanan demokrasi dan kehidupan sosial.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Tanyakan: 'Mengapa penulis begitu peduli dengan isu ini?' Jawabannya adalah asumsi nilai (value assumption) yang diyakininya."
  },
  {
    "id": "bimbel_lit_indo_011",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Analisis Hubungan Kausalitas Teks",
    "difficulty": "HOTS",
    "stimulus": "Ekosistem lahan gambut menyimpan cadangan karbon terestrial global dua kali lipat lebih banyak daripada seluruh biomassa hutan di dunia. Ketika lahan gambut dikeringkan melalui pembuatan kanal drainase untuk perkebunan monokultur, lapisan gambut menjadi sangat rentan teroksidasi dan terbakar. Kebakaran gambut melepaskan jutaan ton gas rumah kaca serta menghasilkan kabut asap pekat yang melumpuhkan aktivitas ekonomi regional.",
    "question": "Hubungan sebab-akibat yang PALING TEPAT digambarkan oleh teks adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kebakaran gambut menyebabkan terbentuknya kanal drainase baru di sekitar perkebunan."
      },
      {
        "key": "B",
        "text": "Biomassa hutan tropis menyerap seluruh emisi karbon yang dihasilkan dari kebakaran gambut."
      },
      {
        "key": "C",
        "text": "Pembuatan kanal drainase menyebabkan penurunan kadar air gambut yang memicu kerentanan kebakaran hebat dan pelepasan karbon masif."
      },
      {
        "key": "D",
        "text": "Aktivitas ekonomi regional pulih seketika setelah lahan gambut dikeringkan sepenuhnya."
      },
      {
        "key": "E",
        "text": "Lapisan gambut terhindar dari proses oksidasi jika berada dalam kondisi tanah yang kering."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Rantai kausalitas: Drainase kanal -> gambut mengering dan teroksidasi -> mudah terbakar -> polusi asap dan pelepasan emisi karbon.",
    "quickTrick": "🌟 NF Smart Solution: Susun urutan kronologis kausalitas: Faktor pemicu -> Kondisi perantara -> Dampak akhir."
  },
  {
    "id": "bimbel_lit_indo_012",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Sikap Penulis (Author's Tone) & Evaluasi Wacana",
    "difficulty": "Sedang",
    "stimulus": "Sorgum dan sagu dinilai para ahli pangan sebagai komoditas masa depan yang mampu memperkuat kedaulatan pangan nasional. Keduanya memiliki indeks glikemik yang relatif rendah serta ketahanan tinggi terhadap kondisi tanah marjinal dan anomali cuaca ekstrem akibat El Nino. Kendati demikian, persepsi masyarakat yang masih menganggap beras sebagai 'status sosial' utama menjadi tantangan kultural yang harus dijembatani melalui kampanye gastronomi kreatif.",
    "question": "Sikap atau nada (tone) penulis dalam wacana di atas dapat dikategorikan sebagai...",
    "options": [
      {
        "key": "A",
        "text": "Objektif dan konstruktif terhadap prospek diversifikasi pangan alternatif."
      },
      {
        "key": "B",
        "text": "Pesimistis dan skeptis terhadap masa depan pertanian nasional."
      },
      {
        "key": "C",
        "text": "Sarkastis dan meremehkan preferensi konsumsi masyarakat tradisional."
      },
      {
        "key": "D",
        "text": "Emosional dan menuntut pelarangan total konsumsi beras putih."
      },
      {
        "key": "E",
        "text": "Apatis dan tidak peduli terhadap ancaman krisis pangan global."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Penulis menyajikan fakta agronomi sorgum dan sagu secara ilmiah (objektif) sembari mengakui tantangan budaya dan menyarankan solusi kampanye gastronomi yang positif (konstruktif).",
    "quickTrick": "🧠 Zenius Core Logic: Perhatikan pilihan kata: tidak ada kata-kata menghakimi yang sinis; nada tulisan analitis dan solutif."
  },
  {
    "id": "bimbel_lit_indo_013",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Literasi Teks Ilmiah & Kebijakan",
    "difficulty": "HOTS",
    "stimulus": "Transisi energi di sektor penerbangan komersial global menuntut adopsi bahan bakar ramah lingkungan (Sustainable Aviation Fuel / SAF). Indonesia, sebagai produsen minyak kelapa sawit terbesar di dunia, memiliki posisi strategis dalam rantai pasok bioavtur. Namun, tantangan sertifikasi keberlanjutan Roundtable on Sustainable Biomass (RSB) dan persaingan pemanfaatan minyak nabati untuk kebutuhan pangan domestik menjadi hambatan struktural yang harus diselesaikan melalui harmonisasi regulasi lintas kementerian.",
    "question": "Tujuan utama penulis menyampaikan wacana tersebut adalah untuk...",
    "options": [
      {
        "key": "A",
        "text": "Mendesak maskapai penerbangan nasional menurunkan harga tiket penerbangan domestik."
      },
      {
        "key": "B",
        "text": "Mengkritik keras penggunaan kelapa sawit dalam produksi bahan bakar nabati."
      },
      {
        "key": "C",
        "text": "Memaparkan keunggulan teknologi mesin jet yang mengonsumsi bahan bakar konvensional."
      },
      {
        "key": "D",
        "text": "Menyoroti potensi besar Indonesia dalam bioavtur sekaligus menggarisbawahi urgensi penyelesaian regulasi dan sertifikasi keberlanjutan."
      },
      {
        "key": "E",
        "text": "Menyatakan bahwa sertifikasi RSB tidak memiliki signifikansi dalam perdagangan global."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Tujuan penulisan teks analitis: Penulis mengidentifikasi peluang strategis Indonesia (potensi bioavtur) dan secara bersamaan memaparkan hambatan nyata (sertifikasi dan regulasi) agar tercipta solusi harmonisasi kebijakan.",
    "quickTrick": "💡 INTEN Reading Strategy: Tujuan teks argumentatif/analitis selalu merangkum problem statement dan arah solusi yang ditawarkan."
  },
  {
    "id": "bimbel_lit_indo_014",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Asumsi Implisit & Penalaran Kritis",
    "difficulty": "Sedang",
    "stimulus": "Pemanfaatan algoritma pembelajaran mesin pada platform media sosial telah dirancang untuk memaksimalkan retensi atensi pengguna. Konten yang memicu reaksi emosional kuat—terutama kemarahan atau kegelisahan—cenderung diamplifikasi oleh algoritma hingga memperoleh tingkat keterlibatan lima kali lebih tinggi dibandingkan konten bernada netral. Dampaknya, ruang publik digital kian terpolarisasi menjadi ruang gema (echo chamber) yang mengikis kapasitas dialog rasional masyarakat.",
    "question": "Berdasarkan wacana di atas, asumsi implisit yang mendasari kekhawatiran penulis terhadap algoritma media sosial adalah...",
    "options": [
      {
        "key": "A",
        "text": "Semua platform media sosial seharusnya ditutup secara permanen oleh kementerian komunikasi."
      },
      {
        "key": "B",
        "text": "Ruang gema digital yang terpolarisasi dapat mengancam kualitas pertimbangan demokratis dan kohesi sosial dalam masyarakat."
      },
      {
        "key": "C",
        "text": "Pengguna media sosial tidak memiliki kemampuan nalar sama sekali dalam menyaring berita palsu."
      },
      {
        "key": "D",
        "text": "Konten bernada netral tidak akan pernah dibaca oleh generasi muda di era kecerdasan buatan."
      },
      {
        "key": "E",
        "text": "Polarisasi ruang publik merupakan fenomena alami yang tidak memiliki konsekuensi politik apa pun."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Asumsi implisit adalah fondasi pemikiran yang tidak diucapkan secara eksplisit namun menjadi alasan logis di balik keprihatinan penulis. Penulis khawatir akan polarisasi karena ia meyakini dialog rasional sangat penting bagi kesehatan tatanan demokrasi dan kehidupan sosial.",
    "quickTrick": "👑 Metode The King GO: Tanyakan: 'Mengapa penulis begitu peduli dengan isu ini?' Jawabannya adalah asumsi nilai (value assumption) yang diyakininya."
  },
  {
    "id": "bimbel_lit_indo_015",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Analisis Hubungan Kausalitas Teks",
    "difficulty": "HOTS",
    "stimulus": "Ekosistem lahan gambut menyimpan cadangan karbon terestrial global dua kali lipat lebih banyak daripada seluruh biomassa hutan di dunia. Ketika lahan gambut dikeringkan melalui pembuatan kanal drainase untuk perkebunan monokultur, lapisan gambut menjadi sangat rentan teroksidasi dan terbakar. Kebakaran gambut melepaskan jutaan ton gas rumah kaca serta menghasilkan kabut asap pekat yang melumpuhkan aktivitas ekonomi regional.",
    "question": "Hubungan sebab-akibat yang PALING TEPAT digambarkan oleh teks adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kebakaran gambut menyebabkan terbentuknya kanal drainase baru di sekitar perkebunan."
      },
      {
        "key": "B",
        "text": "Biomassa hutan tropis menyerap seluruh emisi karbon yang dihasilkan dari kebakaran gambut."
      },
      {
        "key": "C",
        "text": "Aktivitas ekonomi regional pulih seketika setelah lahan gambut dikeringkan sepenuhnya."
      },
      {
        "key": "D",
        "text": "Lapisan gambut terhindar dari proses oksidasi jika berada dalam kondisi tanah yang kering."
      },
      {
        "key": "E",
        "text": "Pembuatan kanal drainase menyebabkan penurunan kadar air gambut yang memicu kerentanan kebakaran hebat dan pelepasan karbon masif."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Rantai kausalitas: Drainase kanal -> gambut mengering dan teroksidasi -> mudah terbakar -> polusi asap dan pelepasan emisi karbon.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Susun urutan kronologis kausalitas: Faktor pemicu -> Kondisi perantara -> Dampak akhir."
  },
  {
    "id": "bimbel_lit_indo_016",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Sikap Penulis (Author's Tone) & Evaluasi Wacana",
    "difficulty": "Sedang",
    "stimulus": "Sorgum dan sagu dinilai para ahli pangan sebagai komoditas masa depan yang mampu memperkuat kedaulatan pangan nasional. Keduanya memiliki indeks glikemik yang relatif rendah serta ketahanan tinggi terhadap kondisi tanah marjinal dan anomali cuaca ekstrem akibat El Nino. Kendati demikian, persepsi masyarakat yang masih menganggap beras sebagai 'status sosial' utama menjadi tantangan kultural yang harus dijembatani melalui kampanye gastronomi kreatif.",
    "question": "Sikap atau nada (tone) penulis dalam wacana di atas dapat dikategorikan sebagai...",
    "options": [
      {
        "key": "A",
        "text": "Pesimistis dan skeptis terhadap masa depan pertanian nasional."
      },
      {
        "key": "B",
        "text": "Sarkastis dan meremehkan preferensi konsumsi masyarakat tradisional."
      },
      {
        "key": "C",
        "text": "Objektif dan konstruktif terhadap prospek diversifikasi pangan alternatif."
      },
      {
        "key": "D",
        "text": "Emosional dan menuntut pelarangan total konsumsi beras putih."
      },
      {
        "key": "E",
        "text": "Apatis dan tidak peduli terhadap ancaman krisis pangan global."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Penulis menyajikan fakta agronomi sorgum dan sagu secara ilmiah (objektif) sembari mengakui tantangan budaya dan menyarankan solusi kampanye gastronomi yang positif (konstruktif).",
    "quickTrick": "🚀 Brain Academy Fast Trick: Perhatikan pilihan kata: tidak ada kata-kata menghakimi yang sinis; nada tulisan analitis dan solutif."
  },
  {
    "id": "bimbel_lit_indo_017",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Literasi Teks Ilmiah & Kebijakan",
    "difficulty": "HOTS",
    "stimulus": "Transisi energi di sektor penerbangan komersial global menuntut adopsi bahan bakar ramah lingkungan (Sustainable Aviation Fuel / SAF). Indonesia, sebagai produsen minyak kelapa sawit terbesar di dunia, memiliki posisi strategis dalam rantai pasok bioavtur. Namun, tantangan sertifikasi keberlanjutan Roundtable on Sustainable Biomass (RSB) dan persaingan pemanfaatan minyak nabati untuk kebutuhan pangan domestik menjadi hambatan struktural yang harus diselesaikan melalui harmonisasi regulasi lintas kementerian.",
    "question": "Tujuan utama penulis menyampaikan wacana tersebut adalah untuk...",
    "options": [
      {
        "key": "A",
        "text": "Menyoroti potensi besar Indonesia dalam bioavtur sekaligus menggarisbawahi urgensi penyelesaian regulasi dan sertifikasi keberlanjutan."
      },
      {
        "key": "B",
        "text": "Mendesak maskapai penerbangan nasional menurunkan harga tiket penerbangan domestik."
      },
      {
        "key": "C",
        "text": "Mengkritik keras penggunaan kelapa sawit dalam produksi bahan bakar nabati."
      },
      {
        "key": "D",
        "text": "Memaparkan keunggulan teknologi mesin jet yang mengonsumsi bahan bakar konvensional."
      },
      {
        "key": "E",
        "text": "Menyatakan bahwa sertifikasi RSB tidak memiliki signifikansi dalam perdagangan global."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tujuan penulisan teks analitis: Penulis mengidentifikasi peluang strategis Indonesia (potensi bioavtur) dan secara bersamaan memaparkan hambatan nyata (sertifikasi dan regulasi) agar tercipta solusi harmonisasi kebijakan.",
    "quickTrick": "🌟 NF Smart Solution: Tujuan teks argumentatif/analitis selalu merangkum problem statement dan arah solusi yang ditawarkan."
  },
  {
    "id": "bimbel_lit_indo_018",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Asumsi Implisit & Penalaran Kritis",
    "difficulty": "Sedang",
    "stimulus": "Pemanfaatan algoritma pembelajaran mesin pada platform media sosial telah dirancang untuk memaksimalkan retensi atensi pengguna. Konten yang memicu reaksi emosional kuat—terutama kemarahan atau kegelisahan—cenderung diamplifikasi oleh algoritma hingga memperoleh tingkat keterlibatan lima kali lebih tinggi dibandingkan konten bernada netral. Dampaknya, ruang publik digital kian terpolarisasi menjadi ruang gema (echo chamber) yang mengikis kapasitas dialog rasional masyarakat.",
    "question": "Berdasarkan wacana di atas, asumsi implisit yang mendasari kekhawatiran penulis terhadap algoritma media sosial adalah...",
    "options": [
      {
        "key": "A",
        "text": "Semua platform media sosial seharusnya ditutup secara permanen oleh kementerian komunikasi."
      },
      {
        "key": "B",
        "text": "Pengguna media sosial tidak memiliki kemampuan nalar sama sekali dalam menyaring berita palsu."
      },
      {
        "key": "C",
        "text": "Konten bernada netral tidak akan pernah dibaca oleh generasi muda di era kecerdasan buatan."
      },
      {
        "key": "D",
        "text": "Ruang gema digital yang terpolarisasi dapat mengancam kualitas pertimbangan demokratis dan kohesi sosial dalam masyarakat."
      },
      {
        "key": "E",
        "text": "Polarisasi ruang publik merupakan fenomena alami yang tidak memiliki konsekuensi politik apa pun."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Asumsi implisit adalah fondasi pemikiran yang tidak diucapkan secara eksplisit namun menjadi alasan logis di balik keprihatinan penulis. Penulis khawatir akan polarisasi karena ia meyakini dialog rasional sangat penting bagi kesehatan tatanan demokrasi dan kehidupan sosial.",
    "quickTrick": "🧠 Zenius Core Logic: Tanyakan: 'Mengapa penulis begitu peduli dengan isu ini?' Jawabannya adalah asumsi nilai (value assumption) yang diyakininya."
  },
  {
    "id": "bimbel_lit_indo_019",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Analisis Hubungan Kausalitas Teks",
    "difficulty": "HOTS",
    "stimulus": "Ekosistem lahan gambut menyimpan cadangan karbon terestrial global dua kali lipat lebih banyak daripada seluruh biomassa hutan di dunia. Ketika lahan gambut dikeringkan melalui pembuatan kanal drainase untuk perkebunan monokultur, lapisan gambut menjadi sangat rentan teroksidasi dan terbakar. Kebakaran gambut melepaskan jutaan ton gas rumah kaca serta menghasilkan kabut asap pekat yang melumpuhkan aktivitas ekonomi regional.",
    "question": "Hubungan sebab-akibat yang PALING TEPAT digambarkan oleh teks adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kebakaran gambut menyebabkan terbentuknya kanal drainase baru di sekitar perkebunan."
      },
      {
        "key": "B",
        "text": "Pembuatan kanal drainase menyebabkan penurunan kadar air gambut yang memicu kerentanan kebakaran hebat dan pelepasan karbon masif."
      },
      {
        "key": "C",
        "text": "Biomassa hutan tropis menyerap seluruh emisi karbon yang dihasilkan dari kebakaran gambut."
      },
      {
        "key": "D",
        "text": "Aktivitas ekonomi regional pulih seketika setelah lahan gambut dikeringkan sepenuhnya."
      },
      {
        "key": "E",
        "text": "Lapisan gambut terhindar dari proses oksidasi jika berada dalam kondisi tanah yang kering."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Rantai kausalitas: Drainase kanal -> gambut mengering dan teroksidasi -> mudah terbakar -> polusi asap dan pelepasan emisi karbon.",
    "quickTrick": "💡 INTEN Reading Strategy: Susun urutan kronologis kausalitas: Faktor pemicu -> Kondisi perantara -> Dampak akhir."
  },
  {
    "id": "bimbel_lit_indo_020",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Sikap Penulis (Author's Tone) & Evaluasi Wacana",
    "difficulty": "Sedang",
    "stimulus": "Sorgum dan sagu dinilai para ahli pangan sebagai komoditas masa depan yang mampu memperkuat kedaulatan pangan nasional. Keduanya memiliki indeks glikemik yang relatif rendah serta ketahanan tinggi terhadap kondisi tanah marjinal dan anomali cuaca ekstrem akibat El Nino. Kendati demikian, persepsi masyarakat yang masih menganggap beras sebagai 'status sosial' utama menjadi tantangan kultural yang harus dijembatani melalui kampanye gastronomi kreatif.",
    "question": "Sikap atau nada (tone) penulis dalam wacana di atas dapat dikategorikan sebagai...",
    "options": [
      {
        "key": "A",
        "text": "Pesimistis dan skeptis terhadap masa depan pertanian nasional."
      },
      {
        "key": "B",
        "text": "Sarkastis dan meremehkan preferensi konsumsi masyarakat tradisional."
      },
      {
        "key": "C",
        "text": "Emosional dan menuntut pelarangan total konsumsi beras putih."
      },
      {
        "key": "D",
        "text": "Apatis dan tidak peduli terhadap ancaman krisis pangan global."
      },
      {
        "key": "E",
        "text": "Objektif dan konstruktif terhadap prospek diversifikasi pangan alternatif."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Penulis menyajikan fakta agronomi sorgum dan sagu secara ilmiah (objektif) sembari mengakui tantangan budaya dan menyarankan solusi kampanye gastronomi yang positif (konstruktif).",
    "quickTrick": "👑 Metode The King GO: Perhatikan pilihan kata: tidak ada kata-kata menghakimi yang sinis; nada tulisan analitis dan solutif."
  },
  {
    "id": "bimbel_lit_indo_021",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Literasi Teks Ilmiah & Kebijakan",
    "difficulty": "HOTS",
    "stimulus": "Transisi energi di sektor penerbangan komersial global menuntut adopsi bahan bakar ramah lingkungan (Sustainable Aviation Fuel / SAF). Indonesia, sebagai produsen minyak kelapa sawit terbesar di dunia, memiliki posisi strategis dalam rantai pasok bioavtur. Namun, tantangan sertifikasi keberlanjutan Roundtable on Sustainable Biomass (RSB) dan persaingan pemanfaatan minyak nabati untuk kebutuhan pangan domestik menjadi hambatan struktural yang harus diselesaikan melalui harmonisasi regulasi lintas kementerian.",
    "question": "Tujuan utama penulis menyampaikan wacana tersebut adalah untuk...",
    "options": [
      {
        "key": "A",
        "text": "Mendesak maskapai penerbangan nasional menurunkan harga tiket penerbangan domestik."
      },
      {
        "key": "B",
        "text": "Mengkritik keras penggunaan kelapa sawit dalam produksi bahan bakar nabati."
      },
      {
        "key": "C",
        "text": "Menyoroti potensi besar Indonesia dalam bioavtur sekaligus menggarisbawahi urgensi penyelesaian regulasi dan sertifikasi keberlanjutan."
      },
      {
        "key": "D",
        "text": "Memaparkan keunggulan teknologi mesin jet yang mengonsumsi bahan bakar konvensional."
      },
      {
        "key": "E",
        "text": "Menyatakan bahwa sertifikasi RSB tidak memiliki signifikansi dalam perdagangan global."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Tujuan penulisan teks analitis: Penulis mengidentifikasi peluang strategis Indonesia (potensi bioavtur) dan secara bersamaan memaparkan hambatan nyata (sertifikasi dan regulasi) agar tercipta solusi harmonisasi kebijakan.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Tujuan teks argumentatif/analitis selalu merangkum problem statement dan arah solusi yang ditawarkan."
  },
  {
    "id": "bimbel_lit_indo_022",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Asumsi Implisit & Penalaran Kritis",
    "difficulty": "Sedang",
    "stimulus": "Pemanfaatan algoritma pembelajaran mesin pada platform media sosial telah dirancang untuk memaksimalkan retensi atensi pengguna. Konten yang memicu reaksi emosional kuat—terutama kemarahan atau kegelisahan—cenderung diamplifikasi oleh algoritma hingga memperoleh tingkat keterlibatan lima kali lebih tinggi dibandingkan konten bernada netral. Dampaknya, ruang publik digital kian terpolarisasi menjadi ruang gema (echo chamber) yang mengikis kapasitas dialog rasional masyarakat.",
    "question": "Berdasarkan wacana di atas, asumsi implisit yang mendasari kekhawatiran penulis terhadap algoritma media sosial adalah...",
    "options": [
      {
        "key": "A",
        "text": "Ruang gema digital yang terpolarisasi dapat mengancam kualitas pertimbangan demokratis dan kohesi sosial dalam masyarakat."
      },
      {
        "key": "B",
        "text": "Semua platform media sosial seharusnya ditutup secara permanen oleh kementerian komunikasi."
      },
      {
        "key": "C",
        "text": "Pengguna media sosial tidak memiliki kemampuan nalar sama sekali dalam menyaring berita palsu."
      },
      {
        "key": "D",
        "text": "Konten bernada netral tidak akan pernah dibaca oleh generasi muda di era kecerdasan buatan."
      },
      {
        "key": "E",
        "text": "Polarisasi ruang publik merupakan fenomena alami yang tidak memiliki konsekuensi politik apa pun."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Asumsi implisit adalah fondasi pemikiran yang tidak diucapkan secara eksplisit namun menjadi alasan logis di balik keprihatinan penulis. Penulis khawatir akan polarisasi karena ia meyakini dialog rasional sangat penting bagi kesehatan tatanan demokrasi dan kehidupan sosial.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Tanyakan: 'Mengapa penulis begitu peduli dengan isu ini?' Jawabannya adalah asumsi nilai (value assumption) yang diyakininya."
  },
  {
    "id": "bimbel_lit_indo_023",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Analisis Hubungan Kausalitas Teks",
    "difficulty": "HOTS",
    "stimulus": "Ekosistem lahan gambut menyimpan cadangan karbon terestrial global dua kali lipat lebih banyak daripada seluruh biomassa hutan di dunia. Ketika lahan gambut dikeringkan melalui pembuatan kanal drainase untuk perkebunan monokultur, lapisan gambut menjadi sangat rentan teroksidasi dan terbakar. Kebakaran gambut melepaskan jutaan ton gas rumah kaca serta menghasilkan kabut asap pekat yang melumpuhkan aktivitas ekonomi regional.",
    "question": "Hubungan sebab-akibat yang PALING TEPAT digambarkan oleh teks adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kebakaran gambut menyebabkan terbentuknya kanal drainase baru di sekitar perkebunan."
      },
      {
        "key": "B",
        "text": "Biomassa hutan tropis menyerap seluruh emisi karbon yang dihasilkan dari kebakaran gambut."
      },
      {
        "key": "C",
        "text": "Aktivitas ekonomi regional pulih seketika setelah lahan gambut dikeringkan sepenuhnya."
      },
      {
        "key": "D",
        "text": "Pembuatan kanal drainase menyebabkan penurunan kadar air gambut yang memicu kerentanan kebakaran hebat dan pelepasan karbon masif."
      },
      {
        "key": "E",
        "text": "Lapisan gambut terhindar dari proses oksidasi jika berada dalam kondisi tanah yang kering."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Rantai kausalitas: Drainase kanal -> gambut mengering dan teroksidasi -> mudah terbakar -> polusi asap dan pelepasan emisi karbon.",
    "quickTrick": "🌟 NF Smart Solution: Susun urutan kronologis kausalitas: Faktor pemicu -> Kondisi perantara -> Dampak akhir."
  },
  {
    "id": "bimbel_lit_indo_024",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Sikap Penulis (Author's Tone) & Evaluasi Wacana",
    "difficulty": "Sedang",
    "stimulus": "Sorgum dan sagu dinilai para ahli pangan sebagai komoditas masa depan yang mampu memperkuat kedaulatan pangan nasional. Keduanya memiliki indeks glikemik yang relatif rendah serta ketahanan tinggi terhadap kondisi tanah marjinal dan anomali cuaca ekstrem akibat El Nino. Kendati demikian, persepsi masyarakat yang masih menganggap beras sebagai 'status sosial' utama menjadi tantangan kultural yang harus dijembatani melalui kampanye gastronomi kreatif.",
    "question": "Sikap atau nada (tone) penulis dalam wacana di atas dapat dikategorikan sebagai...",
    "options": [
      {
        "key": "A",
        "text": "Pesimistis dan skeptis terhadap masa depan pertanian nasional."
      },
      {
        "key": "B",
        "text": "Objektif dan konstruktif terhadap prospek diversifikasi pangan alternatif."
      },
      {
        "key": "C",
        "text": "Sarkastis dan meremehkan preferensi konsumsi masyarakat tradisional."
      },
      {
        "key": "D",
        "text": "Emosional dan menuntut pelarangan total konsumsi beras putih."
      },
      {
        "key": "E",
        "text": "Apatis dan tidak peduli terhadap ancaman krisis pangan global."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Penulis menyajikan fakta agronomi sorgum dan sagu secara ilmiah (objektif) sembari mengakui tantangan budaya dan menyarankan solusi kampanye gastronomi yang positif (konstruktif).",
    "quickTrick": "🧠 Zenius Core Logic: Perhatikan pilihan kata: tidak ada kata-kata menghakimi yang sinis; nada tulisan analitis dan solutif."
  },
  {
    "id": "bimbel_lit_indo_025",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Literasi Teks Ilmiah & Kebijakan",
    "difficulty": "HOTS",
    "stimulus": "Transisi energi di sektor penerbangan komersial global menuntut adopsi bahan bakar ramah lingkungan (Sustainable Aviation Fuel / SAF). Indonesia, sebagai produsen minyak kelapa sawit terbesar di dunia, memiliki posisi strategis dalam rantai pasok bioavtur. Namun, tantangan sertifikasi keberlanjutan Roundtable on Sustainable Biomass (RSB) dan persaingan pemanfaatan minyak nabati untuk kebutuhan pangan domestik menjadi hambatan struktural yang harus diselesaikan melalui harmonisasi regulasi lintas kementerian.",
    "question": "Tujuan utama penulis menyampaikan wacana tersebut adalah untuk...",
    "options": [
      {
        "key": "A",
        "text": "Mendesak maskapai penerbangan nasional menurunkan harga tiket penerbangan domestik."
      },
      {
        "key": "B",
        "text": "Mengkritik keras penggunaan kelapa sawit dalam produksi bahan bakar nabati."
      },
      {
        "key": "C",
        "text": "Memaparkan keunggulan teknologi mesin jet yang mengonsumsi bahan bakar konvensional."
      },
      {
        "key": "D",
        "text": "Menyatakan bahwa sertifikasi RSB tidak memiliki signifikansi dalam perdagangan global."
      },
      {
        "key": "E",
        "text": "Menyoroti potensi besar Indonesia dalam bioavtur sekaligus menggarisbawahi urgensi penyelesaian regulasi dan sertifikasi keberlanjutan."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Tujuan penulisan teks analitis: Penulis mengidentifikasi peluang strategis Indonesia (potensi bioavtur) dan secara bersamaan memaparkan hambatan nyata (sertifikasi dan regulasi) agar tercipta solusi harmonisasi kebijakan.",
    "quickTrick": "💡 INTEN Reading Strategy: Tujuan teks argumentatif/analitis selalu merangkum problem statement dan arah solusi yang ditawarkan."
  },
  {
    "id": "bimbel_lit_indo_026",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Asumsi Implisit & Penalaran Kritis",
    "difficulty": "Sedang",
    "stimulus": "Pemanfaatan algoritma pembelajaran mesin pada platform media sosial telah dirancang untuk memaksimalkan retensi atensi pengguna. Konten yang memicu reaksi emosional kuat—terutama kemarahan atau kegelisahan—cenderung diamplifikasi oleh algoritma hingga memperoleh tingkat keterlibatan lima kali lebih tinggi dibandingkan konten bernada netral. Dampaknya, ruang publik digital kian terpolarisasi menjadi ruang gema (echo chamber) yang mengikis kapasitas dialog rasional masyarakat.",
    "question": "Berdasarkan wacana di atas, asumsi implisit yang mendasari kekhawatiran penulis terhadap algoritma media sosial adalah...",
    "options": [
      {
        "key": "A",
        "text": "Semua platform media sosial seharusnya ditutup secara permanen oleh kementerian komunikasi."
      },
      {
        "key": "B",
        "text": "Pengguna media sosial tidak memiliki kemampuan nalar sama sekali dalam menyaring berita palsu."
      },
      {
        "key": "C",
        "text": "Ruang gema digital yang terpolarisasi dapat mengancam kualitas pertimbangan demokratis dan kohesi sosial dalam masyarakat."
      },
      {
        "key": "D",
        "text": "Konten bernada netral tidak akan pernah dibaca oleh generasi muda di era kecerdasan buatan."
      },
      {
        "key": "E",
        "text": "Polarisasi ruang publik merupakan fenomena alami yang tidak memiliki konsekuensi politik apa pun."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Asumsi implisit adalah fondasi pemikiran yang tidak diucapkan secara eksplisit namun menjadi alasan logis di balik keprihatinan penulis. Penulis khawatir akan polarisasi karena ia meyakini dialog rasional sangat penting bagi kesehatan tatanan demokrasi dan kehidupan sosial.",
    "quickTrick": "👑 Metode The King GO: Tanyakan: 'Mengapa penulis begitu peduli dengan isu ini?' Jawabannya adalah asumsi nilai (value assumption) yang diyakininya."
  },
  {
    "id": "bimbel_lit_indo_027",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Analisis Hubungan Kausalitas Teks",
    "difficulty": "HOTS",
    "stimulus": "Ekosistem lahan gambut menyimpan cadangan karbon terestrial global dua kali lipat lebih banyak daripada seluruh biomassa hutan di dunia. Ketika lahan gambut dikeringkan melalui pembuatan kanal drainase untuk perkebunan monokultur, lapisan gambut menjadi sangat rentan teroksidasi dan terbakar. Kebakaran gambut melepaskan jutaan ton gas rumah kaca serta menghasilkan kabut asap pekat yang melumpuhkan aktivitas ekonomi regional.",
    "question": "Hubungan sebab-akibat yang PALING TEPAT digambarkan oleh teks adalah...",
    "options": [
      {
        "key": "A",
        "text": "Pembuatan kanal drainase menyebabkan penurunan kadar air gambut yang memicu kerentanan kebakaran hebat dan pelepasan karbon masif."
      },
      {
        "key": "B",
        "text": "Kebakaran gambut menyebabkan terbentuknya kanal drainase baru di sekitar perkebunan."
      },
      {
        "key": "C",
        "text": "Biomassa hutan tropis menyerap seluruh emisi karbon yang dihasilkan dari kebakaran gambut."
      },
      {
        "key": "D",
        "text": "Aktivitas ekonomi regional pulih seketika setelah lahan gambut dikeringkan sepenuhnya."
      },
      {
        "key": "E",
        "text": "Lapisan gambut terhindar dari proses oksidasi jika berada dalam kondisi tanah yang kering."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Rantai kausalitas: Drainase kanal -> gambut mengering dan teroksidasi -> mudah terbakar -> polusi asap dan pelepasan emisi karbon.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Susun urutan kronologis kausalitas: Faktor pemicu -> Kondisi perantara -> Dampak akhir."
  },
  {
    "id": "bimbel_lit_indo_028",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Sikap Penulis (Author's Tone) & Evaluasi Wacana",
    "difficulty": "Sedang",
    "stimulus": "Sorgum dan sagu dinilai para ahli pangan sebagai komoditas masa depan yang mampu memperkuat kedaulatan pangan nasional. Keduanya memiliki indeks glikemik yang relatif rendah serta ketahanan tinggi terhadap kondisi tanah marjinal dan anomali cuaca ekstrem akibat El Nino. Kendati demikian, persepsi masyarakat yang masih menganggap beras sebagai 'status sosial' utama menjadi tantangan kultural yang harus dijembatani melalui kampanye gastronomi kreatif.",
    "question": "Sikap atau nada (tone) penulis dalam wacana di atas dapat dikategorikan sebagai...",
    "options": [
      {
        "key": "A",
        "text": "Pesimistis dan skeptis terhadap masa depan pertanian nasional."
      },
      {
        "key": "B",
        "text": "Sarkastis dan meremehkan preferensi konsumsi masyarakat tradisional."
      },
      {
        "key": "C",
        "text": "Emosional dan menuntut pelarangan total konsumsi beras putih."
      },
      {
        "key": "D",
        "text": "Objektif dan konstruktif terhadap prospek diversifikasi pangan alternatif."
      },
      {
        "key": "E",
        "text": "Apatis dan tidak peduli terhadap ancaman krisis pangan global."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Penulis menyajikan fakta agronomi sorgum dan sagu secara ilmiah (objektif) sembari mengakui tantangan budaya dan menyarankan solusi kampanye gastronomi yang positif (konstruktif).",
    "quickTrick": "🚀 Brain Academy Fast Trick: Perhatikan pilihan kata: tidak ada kata-kata menghakimi yang sinis; nada tulisan analitis dan solutif."
  },
  {
    "id": "bimbel_lit_indo_029",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Literasi Teks Ilmiah & Kebijakan",
    "difficulty": "HOTS",
    "stimulus": "Transisi energi di sektor penerbangan komersial global menuntut adopsi bahan bakar ramah lingkungan (Sustainable Aviation Fuel / SAF). Indonesia, sebagai produsen minyak kelapa sawit terbesar di dunia, memiliki posisi strategis dalam rantai pasok bioavtur. Namun, tantangan sertifikasi keberlanjutan Roundtable on Sustainable Biomass (RSB) dan persaingan pemanfaatan minyak nabati untuk kebutuhan pangan domestik menjadi hambatan struktural yang harus diselesaikan melalui harmonisasi regulasi lintas kementerian.",
    "question": "Tujuan utama penulis menyampaikan wacana tersebut adalah untuk...",
    "options": [
      {
        "key": "A",
        "text": "Mendesak maskapai penerbangan nasional menurunkan harga tiket penerbangan domestik."
      },
      {
        "key": "B",
        "text": "Menyoroti potensi besar Indonesia dalam bioavtur sekaligus menggarisbawahi urgensi penyelesaian regulasi dan sertifikasi keberlanjutan."
      },
      {
        "key": "C",
        "text": "Mengkritik keras penggunaan kelapa sawit dalam produksi bahan bakar nabati."
      },
      {
        "key": "D",
        "text": "Memaparkan keunggulan teknologi mesin jet yang mengonsumsi bahan bakar konvensional."
      },
      {
        "key": "E",
        "text": "Menyatakan bahwa sertifikasi RSB tidak memiliki signifikansi dalam perdagangan global."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Tujuan penulisan teks analitis: Penulis mengidentifikasi peluang strategis Indonesia (potensi bioavtur) dan secara bersamaan memaparkan hambatan nyata (sertifikasi dan regulasi) agar tercipta solusi harmonisasi kebijakan.",
    "quickTrick": "🌟 NF Smart Solution: Tujuan teks argumentatif/analitis selalu merangkum problem statement dan arah solusi yang ditawarkan."
  },
  {
    "id": "bimbel_lit_indo_030",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Asumsi Implisit & Penalaran Kritis",
    "difficulty": "Sedang",
    "stimulus": "Pemanfaatan algoritma pembelajaran mesin pada platform media sosial telah dirancang untuk memaksimalkan retensi atensi pengguna. Konten yang memicu reaksi emosional kuat—terutama kemarahan atau kegelisahan—cenderung diamplifikasi oleh algoritma hingga memperoleh tingkat keterlibatan lima kali lebih tinggi dibandingkan konten bernada netral. Dampaknya, ruang publik digital kian terpolarisasi menjadi ruang gema (echo chamber) yang mengikis kapasitas dialog rasional masyarakat.",
    "question": "Berdasarkan wacana di atas, asumsi implisit yang mendasari kekhawatiran penulis terhadap algoritma media sosial adalah...",
    "options": [
      {
        "key": "A",
        "text": "Semua platform media sosial seharusnya ditutup secara permanen oleh kementerian komunikasi."
      },
      {
        "key": "B",
        "text": "Pengguna media sosial tidak memiliki kemampuan nalar sama sekali dalam menyaring berita palsu."
      },
      {
        "key": "C",
        "text": "Konten bernada netral tidak akan pernah dibaca oleh generasi muda di era kecerdasan buatan."
      },
      {
        "key": "D",
        "text": "Polarisasi ruang publik merupakan fenomena alami yang tidak memiliki konsekuensi politik apa pun."
      },
      {
        "key": "E",
        "text": "Ruang gema digital yang terpolarisasi dapat mengancam kualitas pertimbangan demokratis dan kohesi sosial dalam masyarakat."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Asumsi implisit adalah fondasi pemikiran yang tidak diucapkan secara eksplisit namun menjadi alasan logis di balik keprihatinan penulis. Penulis khawatir akan polarisasi karena ia meyakini dialog rasional sangat penting bagi kesehatan tatanan demokrasi dan kehidupan sosial.",
    "quickTrick": "🧠 Zenius Core Logic: Tanyakan: 'Mengapa penulis begitu peduli dengan isu ini?' Jawabannya adalah asumsi nilai (value assumption) yang diyakininya."
  },
  {
    "id": "bimbel_lit_indo_031",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Analisis Hubungan Kausalitas Teks",
    "difficulty": "HOTS",
    "stimulus": "Ekosistem lahan gambut menyimpan cadangan karbon terestrial global dua kali lipat lebih banyak daripada seluruh biomassa hutan di dunia. Ketika lahan gambut dikeringkan melalui pembuatan kanal drainase untuk perkebunan monokultur, lapisan gambut menjadi sangat rentan teroksidasi dan terbakar. Kebakaran gambut melepaskan jutaan ton gas rumah kaca serta menghasilkan kabut asap pekat yang melumpuhkan aktivitas ekonomi regional.",
    "question": "Hubungan sebab-akibat yang PALING TEPAT digambarkan oleh teks adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kebakaran gambut menyebabkan terbentuknya kanal drainase baru di sekitar perkebunan."
      },
      {
        "key": "B",
        "text": "Biomassa hutan tropis menyerap seluruh emisi karbon yang dihasilkan dari kebakaran gambut."
      },
      {
        "key": "C",
        "text": "Pembuatan kanal drainase menyebabkan penurunan kadar air gambut yang memicu kerentanan kebakaran hebat dan pelepasan karbon masif."
      },
      {
        "key": "D",
        "text": "Aktivitas ekonomi regional pulih seketika setelah lahan gambut dikeringkan sepenuhnya."
      },
      {
        "key": "E",
        "text": "Lapisan gambut terhindar dari proses oksidasi jika berada dalam kondisi tanah yang kering."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Rantai kausalitas: Drainase kanal -> gambut mengering dan teroksidasi -> mudah terbakar -> polusi asap dan pelepasan emisi karbon.",
    "quickTrick": "💡 INTEN Reading Strategy: Susun urutan kronologis kausalitas: Faktor pemicu -> Kondisi perantara -> Dampak akhir."
  },
  {
    "id": "bimbel_lit_indo_032",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Sikap Penulis (Author's Tone) & Evaluasi Wacana",
    "difficulty": "Sedang",
    "stimulus": "Sorgum dan sagu dinilai para ahli pangan sebagai komoditas masa depan yang mampu memperkuat kedaulatan pangan nasional. Keduanya memiliki indeks glikemik yang relatif rendah serta ketahanan tinggi terhadap kondisi tanah marjinal dan anomali cuaca ekstrem akibat El Nino. Kendati demikian, persepsi masyarakat yang masih menganggap beras sebagai 'status sosial' utama menjadi tantangan kultural yang harus dijembatani melalui kampanye gastronomi kreatif.",
    "question": "Sikap atau nada (tone) penulis dalam wacana di atas dapat dikategorikan sebagai...",
    "options": [
      {
        "key": "A",
        "text": "Objektif dan konstruktif terhadap prospek diversifikasi pangan alternatif."
      },
      {
        "key": "B",
        "text": "Pesimistis dan skeptis terhadap masa depan pertanian nasional."
      },
      {
        "key": "C",
        "text": "Sarkastis dan meremehkan preferensi konsumsi masyarakat tradisional."
      },
      {
        "key": "D",
        "text": "Emosional dan menuntut pelarangan total konsumsi beras putih."
      },
      {
        "key": "E",
        "text": "Apatis dan tidak peduli terhadap ancaman krisis pangan global."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Penulis menyajikan fakta agronomi sorgum dan sagu secara ilmiah (objektif) sembari mengakui tantangan budaya dan menyarankan solusi kampanye gastronomi yang positif (konstruktif).",
    "quickTrick": "👑 Metode The King GO: Perhatikan pilihan kata: tidak ada kata-kata menghakimi yang sinis; nada tulisan analitis dan solutif."
  },
  {
    "id": "bimbel_lit_indo_033",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Literasi Teks Ilmiah & Kebijakan",
    "difficulty": "HOTS",
    "stimulus": "Transisi energi di sektor penerbangan komersial global menuntut adopsi bahan bakar ramah lingkungan (Sustainable Aviation Fuel / SAF). Indonesia, sebagai produsen minyak kelapa sawit terbesar di dunia, memiliki posisi strategis dalam rantai pasok bioavtur. Namun, tantangan sertifikasi keberlanjutan Roundtable on Sustainable Biomass (RSB) dan persaingan pemanfaatan minyak nabati untuk kebutuhan pangan domestik menjadi hambatan struktural yang harus diselesaikan melalui harmonisasi regulasi lintas kementerian.",
    "question": "Tujuan utama penulis menyampaikan wacana tersebut adalah untuk...",
    "options": [
      {
        "key": "A",
        "text": "Mendesak maskapai penerbangan nasional menurunkan harga tiket penerbangan domestik."
      },
      {
        "key": "B",
        "text": "Mengkritik keras penggunaan kelapa sawit dalam produksi bahan bakar nabati."
      },
      {
        "key": "C",
        "text": "Memaparkan keunggulan teknologi mesin jet yang mengonsumsi bahan bakar konvensional."
      },
      {
        "key": "D",
        "text": "Menyoroti potensi besar Indonesia dalam bioavtur sekaligus menggarisbawahi urgensi penyelesaian regulasi dan sertifikasi keberlanjutan."
      },
      {
        "key": "E",
        "text": "Menyatakan bahwa sertifikasi RSB tidak memiliki signifikansi dalam perdagangan global."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Tujuan penulisan teks analitis: Penulis mengidentifikasi peluang strategis Indonesia (potensi bioavtur) dan secara bersamaan memaparkan hambatan nyata (sertifikasi dan regulasi) agar tercipta solusi harmonisasi kebijakan.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Tujuan teks argumentatif/analitis selalu merangkum problem statement dan arah solusi yang ditawarkan."
  },
  {
    "id": "bimbel_lit_indo_034",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Asumsi Implisit & Penalaran Kritis",
    "difficulty": "Sedang",
    "stimulus": "Pemanfaatan algoritma pembelajaran mesin pada platform media sosial telah dirancang untuk memaksimalkan retensi atensi pengguna. Konten yang memicu reaksi emosional kuat—terutama kemarahan atau kegelisahan—cenderung diamplifikasi oleh algoritma hingga memperoleh tingkat keterlibatan lima kali lebih tinggi dibandingkan konten bernada netral. Dampaknya, ruang publik digital kian terpolarisasi menjadi ruang gema (echo chamber) yang mengikis kapasitas dialog rasional masyarakat.",
    "question": "Berdasarkan wacana di atas, asumsi implisit yang mendasari kekhawatiran penulis terhadap algoritma media sosial adalah...",
    "options": [
      {
        "key": "A",
        "text": "Semua platform media sosial seharusnya ditutup secara permanen oleh kementerian komunikasi."
      },
      {
        "key": "B",
        "text": "Ruang gema digital yang terpolarisasi dapat mengancam kualitas pertimbangan demokratis dan kohesi sosial dalam masyarakat."
      },
      {
        "key": "C",
        "text": "Pengguna media sosial tidak memiliki kemampuan nalar sama sekali dalam menyaring berita palsu."
      },
      {
        "key": "D",
        "text": "Konten bernada netral tidak akan pernah dibaca oleh generasi muda di era kecerdasan buatan."
      },
      {
        "key": "E",
        "text": "Polarisasi ruang publik merupakan fenomena alami yang tidak memiliki konsekuensi politik apa pun."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Asumsi implisit adalah fondasi pemikiran yang tidak diucapkan secara eksplisit namun menjadi alasan logis di balik keprihatinan penulis. Penulis khawatir akan polarisasi karena ia meyakini dialog rasional sangat penting bagi kesehatan tatanan demokrasi dan kehidupan sosial.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Tanyakan: 'Mengapa penulis begitu peduli dengan isu ini?' Jawabannya adalah asumsi nilai (value assumption) yang diyakininya."
  },
  {
    "id": "bimbel_lit_indo_035",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Analisis Hubungan Kausalitas Teks",
    "difficulty": "HOTS",
    "stimulus": "Ekosistem lahan gambut menyimpan cadangan karbon terestrial global dua kali lipat lebih banyak daripada seluruh biomassa hutan di dunia. Ketika lahan gambut dikeringkan melalui pembuatan kanal drainase untuk perkebunan monokultur, lapisan gambut menjadi sangat rentan teroksidasi dan terbakar. Kebakaran gambut melepaskan jutaan ton gas rumah kaca serta menghasilkan kabut asap pekat yang melumpuhkan aktivitas ekonomi regional.",
    "question": "Hubungan sebab-akibat yang PALING TEPAT digambarkan oleh teks adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kebakaran gambut menyebabkan terbentuknya kanal drainase baru di sekitar perkebunan."
      },
      {
        "key": "B",
        "text": "Biomassa hutan tropis menyerap seluruh emisi karbon yang dihasilkan dari kebakaran gambut."
      },
      {
        "key": "C",
        "text": "Aktivitas ekonomi regional pulih seketika setelah lahan gambut dikeringkan sepenuhnya."
      },
      {
        "key": "D",
        "text": "Lapisan gambut terhindar dari proses oksidasi jika berada dalam kondisi tanah yang kering."
      },
      {
        "key": "E",
        "text": "Pembuatan kanal drainase menyebabkan penurunan kadar air gambut yang memicu kerentanan kebakaran hebat dan pelepasan karbon masif."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Rantai kausalitas: Drainase kanal -> gambut mengering dan teroksidasi -> mudah terbakar -> polusi asap dan pelepasan emisi karbon.",
    "quickTrick": "🌟 NF Smart Solution: Susun urutan kronologis kausalitas: Faktor pemicu -> Kondisi perantara -> Dampak akhir."
  },
  {
    "id": "bimbel_lit_indo_036",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Sikap Penulis (Author's Tone) & Evaluasi Wacana",
    "difficulty": "Sedang",
    "stimulus": "Sorgum dan sagu dinilai para ahli pangan sebagai komoditas masa depan yang mampu memperkuat kedaulatan pangan nasional. Keduanya memiliki indeks glikemik yang relatif rendah serta ketahanan tinggi terhadap kondisi tanah marjinal dan anomali cuaca ekstrem akibat El Nino. Kendati demikian, persepsi masyarakat yang masih menganggap beras sebagai 'status sosial' utama menjadi tantangan kultural yang harus dijembatani melalui kampanye gastronomi kreatif.",
    "question": "Sikap atau nada (tone) penulis dalam wacana di atas dapat dikategorikan sebagai...",
    "options": [
      {
        "key": "A",
        "text": "Pesimistis dan skeptis terhadap masa depan pertanian nasional."
      },
      {
        "key": "B",
        "text": "Sarkastis dan meremehkan preferensi konsumsi masyarakat tradisional."
      },
      {
        "key": "C",
        "text": "Objektif dan konstruktif terhadap prospek diversifikasi pangan alternatif."
      },
      {
        "key": "D",
        "text": "Emosional dan menuntut pelarangan total konsumsi beras putih."
      },
      {
        "key": "E",
        "text": "Apatis dan tidak peduli terhadap ancaman krisis pangan global."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Penulis menyajikan fakta agronomi sorgum dan sagu secara ilmiah (objektif) sembari mengakui tantangan budaya dan menyarankan solusi kampanye gastronomi yang positif (konstruktif).",
    "quickTrick": "🧠 Zenius Core Logic: Perhatikan pilihan kata: tidak ada kata-kata menghakimi yang sinis; nada tulisan analitis dan solutif."
  },
  {
    "id": "bimbel_lit_indo_037",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Literasi Teks Ilmiah & Kebijakan",
    "difficulty": "HOTS",
    "stimulus": "Transisi energi di sektor penerbangan komersial global menuntut adopsi bahan bakar ramah lingkungan (Sustainable Aviation Fuel / SAF). Indonesia, sebagai produsen minyak kelapa sawit terbesar di dunia, memiliki posisi strategis dalam rantai pasok bioavtur. Namun, tantangan sertifikasi keberlanjutan Roundtable on Sustainable Biomass (RSB) dan persaingan pemanfaatan minyak nabati untuk kebutuhan pangan domestik menjadi hambatan struktural yang harus diselesaikan melalui harmonisasi regulasi lintas kementerian.",
    "question": "Tujuan utama penulis menyampaikan wacana tersebut adalah untuk...",
    "options": [
      {
        "key": "A",
        "text": "Menyoroti potensi besar Indonesia dalam bioavtur sekaligus menggarisbawahi urgensi penyelesaian regulasi dan sertifikasi keberlanjutan."
      },
      {
        "key": "B",
        "text": "Mendesak maskapai penerbangan nasional menurunkan harga tiket penerbangan domestik."
      },
      {
        "key": "C",
        "text": "Mengkritik keras penggunaan kelapa sawit dalam produksi bahan bakar nabati."
      },
      {
        "key": "D",
        "text": "Memaparkan keunggulan teknologi mesin jet yang mengonsumsi bahan bakar konvensional."
      },
      {
        "key": "E",
        "text": "Menyatakan bahwa sertifikasi RSB tidak memiliki signifikansi dalam perdagangan global."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tujuan penulisan teks analitis: Penulis mengidentifikasi peluang strategis Indonesia (potensi bioavtur) dan secara bersamaan memaparkan hambatan nyata (sertifikasi dan regulasi) agar tercipta solusi harmonisasi kebijakan.",
    "quickTrick": "💡 INTEN Reading Strategy: Tujuan teks argumentatif/analitis selalu merangkum problem statement dan arah solusi yang ditawarkan."
  },
  {
    "id": "bimbel_lit_indo_038",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Asumsi Implisit & Penalaran Kritis",
    "difficulty": "Sedang",
    "stimulus": "Pemanfaatan algoritma pembelajaran mesin pada platform media sosial telah dirancang untuk memaksimalkan retensi atensi pengguna. Konten yang memicu reaksi emosional kuat—terutama kemarahan atau kegelisahan—cenderung diamplifikasi oleh algoritma hingga memperoleh tingkat keterlibatan lima kali lebih tinggi dibandingkan konten bernada netral. Dampaknya, ruang publik digital kian terpolarisasi menjadi ruang gema (echo chamber) yang mengikis kapasitas dialog rasional masyarakat.",
    "question": "Berdasarkan wacana di atas, asumsi implisit yang mendasari kekhawatiran penulis terhadap algoritma media sosial adalah...",
    "options": [
      {
        "key": "A",
        "text": "Semua platform media sosial seharusnya ditutup secara permanen oleh kementerian komunikasi."
      },
      {
        "key": "B",
        "text": "Pengguna media sosial tidak memiliki kemampuan nalar sama sekali dalam menyaring berita palsu."
      },
      {
        "key": "C",
        "text": "Konten bernada netral tidak akan pernah dibaca oleh generasi muda di era kecerdasan buatan."
      },
      {
        "key": "D",
        "text": "Ruang gema digital yang terpolarisasi dapat mengancam kualitas pertimbangan demokratis dan kohesi sosial dalam masyarakat."
      },
      {
        "key": "E",
        "text": "Polarisasi ruang publik merupakan fenomena alami yang tidak memiliki konsekuensi politik apa pun."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Asumsi implisit adalah fondasi pemikiran yang tidak diucapkan secara eksplisit namun menjadi alasan logis di balik keprihatinan penulis. Penulis khawatir akan polarisasi karena ia meyakini dialog rasional sangat penting bagi kesehatan tatanan demokrasi dan kehidupan sosial.",
    "quickTrick": "👑 Metode The King GO: Tanyakan: 'Mengapa penulis begitu peduli dengan isu ini?' Jawabannya adalah asumsi nilai (value assumption) yang diyakininya."
  },
  {
    "id": "bimbel_lit_indo_039",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Analisis Hubungan Kausalitas Teks",
    "difficulty": "HOTS",
    "stimulus": "Ekosistem lahan gambut menyimpan cadangan karbon terestrial global dua kali lipat lebih banyak daripada seluruh biomassa hutan di dunia. Ketika lahan gambut dikeringkan melalui pembuatan kanal drainase untuk perkebunan monokultur, lapisan gambut menjadi sangat rentan teroksidasi dan terbakar. Kebakaran gambut melepaskan jutaan ton gas rumah kaca serta menghasilkan kabut asap pekat yang melumpuhkan aktivitas ekonomi regional.",
    "question": "Hubungan sebab-akibat yang PALING TEPAT digambarkan oleh teks adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kebakaran gambut menyebabkan terbentuknya kanal drainase baru di sekitar perkebunan."
      },
      {
        "key": "B",
        "text": "Pembuatan kanal drainase menyebabkan penurunan kadar air gambut yang memicu kerentanan kebakaran hebat dan pelepasan karbon masif."
      },
      {
        "key": "C",
        "text": "Biomassa hutan tropis menyerap seluruh emisi karbon yang dihasilkan dari kebakaran gambut."
      },
      {
        "key": "D",
        "text": "Aktivitas ekonomi regional pulih seketika setelah lahan gambut dikeringkan sepenuhnya."
      },
      {
        "key": "E",
        "text": "Lapisan gambut terhindar dari proses oksidasi jika berada dalam kondisi tanah yang kering."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Rantai kausalitas: Drainase kanal -> gambut mengering dan teroksidasi -> mudah terbakar -> polusi asap dan pelepasan emisi karbon.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Susun urutan kronologis kausalitas: Faktor pemicu -> Kondisi perantara -> Dampak akhir."
  },
  {
    "id": "bimbel_lit_indo_040",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Sikap Penulis (Author's Tone) & Evaluasi Wacana",
    "difficulty": "Sedang",
    "stimulus": "Sorgum dan sagu dinilai para ahli pangan sebagai komoditas masa depan yang mampu memperkuat kedaulatan pangan nasional. Keduanya memiliki indeks glikemik yang relatif rendah serta ketahanan tinggi terhadap kondisi tanah marjinal dan anomali cuaca ekstrem akibat El Nino. Kendati demikian, persepsi masyarakat yang masih menganggap beras sebagai 'status sosial' utama menjadi tantangan kultural yang harus dijembatani melalui kampanye gastronomi kreatif.",
    "question": "Sikap atau nada (tone) penulis dalam wacana di atas dapat dikategorikan sebagai...",
    "options": [
      {
        "key": "A",
        "text": "Pesimistis dan skeptis terhadap masa depan pertanian nasional."
      },
      {
        "key": "B",
        "text": "Sarkastis dan meremehkan preferensi konsumsi masyarakat tradisional."
      },
      {
        "key": "C",
        "text": "Emosional dan menuntut pelarangan total konsumsi beras putih."
      },
      {
        "key": "D",
        "text": "Apatis dan tidak peduli terhadap ancaman krisis pangan global."
      },
      {
        "key": "E",
        "text": "Objektif dan konstruktif terhadap prospek diversifikasi pangan alternatif."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Penulis menyajikan fakta agronomi sorgum dan sagu secara ilmiah (objektif) sembari mengakui tantangan budaya dan menyarankan solusi kampanye gastronomi yang positif (konstruktif).",
    "quickTrick": "🚀 Brain Academy Fast Trick: Perhatikan pilihan kata: tidak ada kata-kata menghakimi yang sinis; nada tulisan analitis dan solutif."
  },
  {
    "id": "bimbel_lit_indo_041",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Literasi Teks Ilmiah & Kebijakan",
    "difficulty": "HOTS",
    "stimulus": "Transisi energi di sektor penerbangan komersial global menuntut adopsi bahan bakar ramah lingkungan (Sustainable Aviation Fuel / SAF). Indonesia, sebagai produsen minyak kelapa sawit terbesar di dunia, memiliki posisi strategis dalam rantai pasok bioavtur. Namun, tantangan sertifikasi keberlanjutan Roundtable on Sustainable Biomass (RSB) dan persaingan pemanfaatan minyak nabati untuk kebutuhan pangan domestik menjadi hambatan struktural yang harus diselesaikan melalui harmonisasi regulasi lintas kementerian.",
    "question": "Tujuan utama penulis menyampaikan wacana tersebut adalah untuk...",
    "options": [
      {
        "key": "A",
        "text": "Mendesak maskapai penerbangan nasional menurunkan harga tiket penerbangan domestik."
      },
      {
        "key": "B",
        "text": "Mengkritik keras penggunaan kelapa sawit dalam produksi bahan bakar nabati."
      },
      {
        "key": "C",
        "text": "Menyoroti potensi besar Indonesia dalam bioavtur sekaligus menggarisbawahi urgensi penyelesaian regulasi dan sertifikasi keberlanjutan."
      },
      {
        "key": "D",
        "text": "Memaparkan keunggulan teknologi mesin jet yang mengonsumsi bahan bakar konvensional."
      },
      {
        "key": "E",
        "text": "Menyatakan bahwa sertifikasi RSB tidak memiliki signifikansi dalam perdagangan global."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Tujuan penulisan teks analitis: Penulis mengidentifikasi peluang strategis Indonesia (potensi bioavtur) dan secara bersamaan memaparkan hambatan nyata (sertifikasi dan regulasi) agar tercipta solusi harmonisasi kebijakan.",
    "quickTrick": "🌟 NF Smart Solution: Tujuan teks argumentatif/analitis selalu merangkum problem statement dan arah solusi yang ditawarkan."
  },
  {
    "id": "bimbel_lit_indo_042",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Asumsi Implisit & Penalaran Kritis",
    "difficulty": "Sedang",
    "stimulus": "Pemanfaatan algoritma pembelajaran mesin pada platform media sosial telah dirancang untuk memaksimalkan retensi atensi pengguna. Konten yang memicu reaksi emosional kuat—terutama kemarahan atau kegelisahan—cenderung diamplifikasi oleh algoritma hingga memperoleh tingkat keterlibatan lima kali lebih tinggi dibandingkan konten bernada netral. Dampaknya, ruang publik digital kian terpolarisasi menjadi ruang gema (echo chamber) yang mengikis kapasitas dialog rasional masyarakat.",
    "question": "Berdasarkan wacana di atas, asumsi implisit yang mendasari kekhawatiran penulis terhadap algoritma media sosial adalah...",
    "options": [
      {
        "key": "A",
        "text": "Ruang gema digital yang terpolarisasi dapat mengancam kualitas pertimbangan demokratis dan kohesi sosial dalam masyarakat."
      },
      {
        "key": "B",
        "text": "Semua platform media sosial seharusnya ditutup secara permanen oleh kementerian komunikasi."
      },
      {
        "key": "C",
        "text": "Pengguna media sosial tidak memiliki kemampuan nalar sama sekali dalam menyaring berita palsu."
      },
      {
        "key": "D",
        "text": "Konten bernada netral tidak akan pernah dibaca oleh generasi muda di era kecerdasan buatan."
      },
      {
        "key": "E",
        "text": "Polarisasi ruang publik merupakan fenomena alami yang tidak memiliki konsekuensi politik apa pun."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Asumsi implisit adalah fondasi pemikiran yang tidak diucapkan secara eksplisit namun menjadi alasan logis di balik keprihatinan penulis. Penulis khawatir akan polarisasi karena ia meyakini dialog rasional sangat penting bagi kesehatan tatanan demokrasi dan kehidupan sosial.",
    "quickTrick": "🧠 Zenius Core Logic: Tanyakan: 'Mengapa penulis begitu peduli dengan isu ini?' Jawabannya adalah asumsi nilai (value assumption) yang diyakininya."
  },
  {
    "id": "bimbel_lit_indo_043",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Analisis Hubungan Kausalitas Teks",
    "difficulty": "HOTS",
    "stimulus": "Ekosistem lahan gambut menyimpan cadangan karbon terestrial global dua kali lipat lebih banyak daripada seluruh biomassa hutan di dunia. Ketika lahan gambut dikeringkan melalui pembuatan kanal drainase untuk perkebunan monokultur, lapisan gambut menjadi sangat rentan teroksidasi dan terbakar. Kebakaran gambut melepaskan jutaan ton gas rumah kaca serta menghasilkan kabut asap pekat yang melumpuhkan aktivitas ekonomi regional.",
    "question": "Hubungan sebab-akibat yang PALING TEPAT digambarkan oleh teks adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kebakaran gambut menyebabkan terbentuknya kanal drainase baru di sekitar perkebunan."
      },
      {
        "key": "B",
        "text": "Biomassa hutan tropis menyerap seluruh emisi karbon yang dihasilkan dari kebakaran gambut."
      },
      {
        "key": "C",
        "text": "Aktivitas ekonomi regional pulih seketika setelah lahan gambut dikeringkan sepenuhnya."
      },
      {
        "key": "D",
        "text": "Pembuatan kanal drainase menyebabkan penurunan kadar air gambut yang memicu kerentanan kebakaran hebat dan pelepasan karbon masif."
      },
      {
        "key": "E",
        "text": "Lapisan gambut terhindar dari proses oksidasi jika berada dalam kondisi tanah yang kering."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Rantai kausalitas: Drainase kanal -> gambut mengering dan teroksidasi -> mudah terbakar -> polusi asap dan pelepasan emisi karbon.",
    "quickTrick": "💡 INTEN Reading Strategy: Susun urutan kronologis kausalitas: Faktor pemicu -> Kondisi perantara -> Dampak akhir."
  },
  {
    "id": "bimbel_lit_indo_044",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Sikap Penulis (Author's Tone) & Evaluasi Wacana",
    "difficulty": "Sedang",
    "stimulus": "Sorgum dan sagu dinilai para ahli pangan sebagai komoditas masa depan yang mampu memperkuat kedaulatan pangan nasional. Keduanya memiliki indeks glikemik yang relatif rendah serta ketahanan tinggi terhadap kondisi tanah marjinal dan anomali cuaca ekstrem akibat El Nino. Kendati demikian, persepsi masyarakat yang masih menganggap beras sebagai 'status sosial' utama menjadi tantangan kultural yang harus dijembatani melalui kampanye gastronomi kreatif.",
    "question": "Sikap atau nada (tone) penulis dalam wacana di atas dapat dikategorikan sebagai...",
    "options": [
      {
        "key": "A",
        "text": "Pesimistis dan skeptis terhadap masa depan pertanian nasional."
      },
      {
        "key": "B",
        "text": "Objektif dan konstruktif terhadap prospek diversifikasi pangan alternatif."
      },
      {
        "key": "C",
        "text": "Sarkastis dan meremehkan preferensi konsumsi masyarakat tradisional."
      },
      {
        "key": "D",
        "text": "Emosional dan menuntut pelarangan total konsumsi beras putih."
      },
      {
        "key": "E",
        "text": "Apatis dan tidak peduli terhadap ancaman krisis pangan global."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Penulis menyajikan fakta agronomi sorgum dan sagu secara ilmiah (objektif) sembari mengakui tantangan budaya dan menyarankan solusi kampanye gastronomi yang positif (konstruktif).",
    "quickTrick": "👑 Metode The King GO: Perhatikan pilihan kata: tidak ada kata-kata menghakimi yang sinis; nada tulisan analitis dan solutif."
  },
  {
    "id": "bimbel_lit_indo_045",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Literasi Teks Ilmiah & Kebijakan",
    "difficulty": "HOTS",
    "stimulus": "Transisi energi di sektor penerbangan komersial global menuntut adopsi bahan bakar ramah lingkungan (Sustainable Aviation Fuel / SAF). Indonesia, sebagai produsen minyak kelapa sawit terbesar di dunia, memiliki posisi strategis dalam rantai pasok bioavtur. Namun, tantangan sertifikasi keberlanjutan Roundtable on Sustainable Biomass (RSB) dan persaingan pemanfaatan minyak nabati untuk kebutuhan pangan domestik menjadi hambatan struktural yang harus diselesaikan melalui harmonisasi regulasi lintas kementerian.",
    "question": "Tujuan utama penulis menyampaikan wacana tersebut adalah untuk...",
    "options": [
      {
        "key": "A",
        "text": "Mendesak maskapai penerbangan nasional menurunkan harga tiket penerbangan domestik."
      },
      {
        "key": "B",
        "text": "Mengkritik keras penggunaan kelapa sawit dalam produksi bahan bakar nabati."
      },
      {
        "key": "C",
        "text": "Memaparkan keunggulan teknologi mesin jet yang mengonsumsi bahan bakar konvensional."
      },
      {
        "key": "D",
        "text": "Menyatakan bahwa sertifikasi RSB tidak memiliki signifikansi dalam perdagangan global."
      },
      {
        "key": "E",
        "text": "Menyoroti potensi besar Indonesia dalam bioavtur sekaligus menggarisbawahi urgensi penyelesaian regulasi dan sertifikasi keberlanjutan."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Tujuan penulisan teks analitis: Penulis mengidentifikasi peluang strategis Indonesia (potensi bioavtur) dan secara bersamaan memaparkan hambatan nyata (sertifikasi dan regulasi) agar tercipta solusi harmonisasi kebijakan.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Tujuan teks argumentatif/analitis selalu merangkum problem statement dan arah solusi yang ditawarkan."
  },
  {
    "id": "bimbel_lit_indo_046",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Asumsi Implisit & Penalaran Kritis",
    "difficulty": "Sedang",
    "stimulus": "Pemanfaatan algoritma pembelajaran mesin pada platform media sosial telah dirancang untuk memaksimalkan retensi atensi pengguna. Konten yang memicu reaksi emosional kuat—terutama kemarahan atau kegelisahan—cenderung diamplifikasi oleh algoritma hingga memperoleh tingkat keterlibatan lima kali lebih tinggi dibandingkan konten bernada netral. Dampaknya, ruang publik digital kian terpolarisasi menjadi ruang gema (echo chamber) yang mengikis kapasitas dialog rasional masyarakat.",
    "question": "Berdasarkan wacana di atas, asumsi implisit yang mendasari kekhawatiran penulis terhadap algoritma media sosial adalah...",
    "options": [
      {
        "key": "A",
        "text": "Semua platform media sosial seharusnya ditutup secara permanen oleh kementerian komunikasi."
      },
      {
        "key": "B",
        "text": "Pengguna media sosial tidak memiliki kemampuan nalar sama sekali dalam menyaring berita palsu."
      },
      {
        "key": "C",
        "text": "Ruang gema digital yang terpolarisasi dapat mengancam kualitas pertimbangan demokratis dan kohesi sosial dalam masyarakat."
      },
      {
        "key": "D",
        "text": "Konten bernada netral tidak akan pernah dibaca oleh generasi muda di era kecerdasan buatan."
      },
      {
        "key": "E",
        "text": "Polarisasi ruang publik merupakan fenomena alami yang tidak memiliki konsekuensi politik apa pun."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Asumsi implisit adalah fondasi pemikiran yang tidak diucapkan secara eksplisit namun menjadi alasan logis di balik keprihatinan penulis. Penulis khawatir akan polarisasi karena ia meyakini dialog rasional sangat penting bagi kesehatan tatanan demokrasi dan kehidupan sosial.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Tanyakan: 'Mengapa penulis begitu peduli dengan isu ini?' Jawabannya adalah asumsi nilai (value assumption) yang diyakininya."
  },
  {
    "id": "bimbel_lit_indo_047",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Analisis Hubungan Kausalitas Teks",
    "difficulty": "HOTS",
    "stimulus": "Ekosistem lahan gambut menyimpan cadangan karbon terestrial global dua kali lipat lebih banyak daripada seluruh biomassa hutan di dunia. Ketika lahan gambut dikeringkan melalui pembuatan kanal drainase untuk perkebunan monokultur, lapisan gambut menjadi sangat rentan teroksidasi dan terbakar. Kebakaran gambut melepaskan jutaan ton gas rumah kaca serta menghasilkan kabut asap pekat yang melumpuhkan aktivitas ekonomi regional.",
    "question": "Hubungan sebab-akibat yang PALING TEPAT digambarkan oleh teks adalah...",
    "options": [
      {
        "key": "A",
        "text": "Pembuatan kanal drainase menyebabkan penurunan kadar air gambut yang memicu kerentanan kebakaran hebat dan pelepasan karbon masif."
      },
      {
        "key": "B",
        "text": "Kebakaran gambut menyebabkan terbentuknya kanal drainase baru di sekitar perkebunan."
      },
      {
        "key": "C",
        "text": "Biomassa hutan tropis menyerap seluruh emisi karbon yang dihasilkan dari kebakaran gambut."
      },
      {
        "key": "D",
        "text": "Aktivitas ekonomi regional pulih seketika setelah lahan gambut dikeringkan sepenuhnya."
      },
      {
        "key": "E",
        "text": "Lapisan gambut terhindar dari proses oksidasi jika berada dalam kondisi tanah yang kering."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Rantai kausalitas: Drainase kanal -> gambut mengering dan teroksidasi -> mudah terbakar -> polusi asap dan pelepasan emisi karbon.",
    "quickTrick": "🌟 NF Smart Solution: Susun urutan kronologis kausalitas: Faktor pemicu -> Kondisi perantara -> Dampak akhir."
  },
  {
    "id": "bimbel_lit_indo_048",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Sikap Penulis (Author's Tone) & Evaluasi Wacana",
    "difficulty": "Sedang",
    "stimulus": "Sorgum dan sagu dinilai para ahli pangan sebagai komoditas masa depan yang mampu memperkuat kedaulatan pangan nasional. Keduanya memiliki indeks glikemik yang relatif rendah serta ketahanan tinggi terhadap kondisi tanah marjinal dan anomali cuaca ekstrem akibat El Nino. Kendati demikian, persepsi masyarakat yang masih menganggap beras sebagai 'status sosial' utama menjadi tantangan kultural yang harus dijembatani melalui kampanye gastronomi kreatif.",
    "question": "Sikap atau nada (tone) penulis dalam wacana di atas dapat dikategorikan sebagai...",
    "options": [
      {
        "key": "A",
        "text": "Pesimistis dan skeptis terhadap masa depan pertanian nasional."
      },
      {
        "key": "B",
        "text": "Sarkastis dan meremehkan preferensi konsumsi masyarakat tradisional."
      },
      {
        "key": "C",
        "text": "Emosional dan menuntut pelarangan total konsumsi beras putih."
      },
      {
        "key": "D",
        "text": "Objektif dan konstruktif terhadap prospek diversifikasi pangan alternatif."
      },
      {
        "key": "E",
        "text": "Apatis dan tidak peduli terhadap ancaman krisis pangan global."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Penulis menyajikan fakta agronomi sorgum dan sagu secara ilmiah (objektif) sembari mengakui tantangan budaya dan menyarankan solusi kampanye gastronomi yang positif (konstruktif).",
    "quickTrick": "🧠 Zenius Core Logic: Perhatikan pilihan kata: tidak ada kata-kata menghakimi yang sinis; nada tulisan analitis dan solutif."
  },
  {
    "id": "bimbel_lit_indo_049",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Literasi Teks Ilmiah & Kebijakan",
    "difficulty": "HOTS",
    "stimulus": "Transisi energi di sektor penerbangan komersial global menuntut adopsi bahan bakar ramah lingkungan (Sustainable Aviation Fuel / SAF). Indonesia, sebagai produsen minyak kelapa sawit terbesar di dunia, memiliki posisi strategis dalam rantai pasok bioavtur. Namun, tantangan sertifikasi keberlanjutan Roundtable on Sustainable Biomass (RSB) dan persaingan pemanfaatan minyak nabati untuk kebutuhan pangan domestik menjadi hambatan struktural yang harus diselesaikan melalui harmonisasi regulasi lintas kementerian.",
    "question": "Tujuan utama penulis menyampaikan wacana tersebut adalah untuk...",
    "options": [
      {
        "key": "A",
        "text": "Mendesak maskapai penerbangan nasional menurunkan harga tiket penerbangan domestik."
      },
      {
        "key": "B",
        "text": "Menyoroti potensi besar Indonesia dalam bioavtur sekaligus menggarisbawahi urgensi penyelesaian regulasi dan sertifikasi keberlanjutan."
      },
      {
        "key": "C",
        "text": "Mengkritik keras penggunaan kelapa sawit dalam produksi bahan bakar nabati."
      },
      {
        "key": "D",
        "text": "Memaparkan keunggulan teknologi mesin jet yang mengonsumsi bahan bakar konvensional."
      },
      {
        "key": "E",
        "text": "Menyatakan bahwa sertifikasi RSB tidak memiliki signifikansi dalam perdagangan global."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Tujuan penulisan teks analitis: Penulis mengidentifikasi peluang strategis Indonesia (potensi bioavtur) dan secara bersamaan memaparkan hambatan nyata (sertifikasi dan regulasi) agar tercipta solusi harmonisasi kebijakan.",
    "quickTrick": "💡 INTEN Reading Strategy: Tujuan teks argumentatif/analitis selalu merangkum problem statement dan arah solusi yang ditawarkan."
  },
  {
    "id": "bimbel_lit_indo_050",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Asumsi Implisit & Penalaran Kritis",
    "difficulty": "Sedang",
    "stimulus": "Pemanfaatan algoritma pembelajaran mesin pada platform media sosial telah dirancang untuk memaksimalkan retensi atensi pengguna. Konten yang memicu reaksi emosional kuat—terutama kemarahan atau kegelisahan—cenderung diamplifikasi oleh algoritma hingga memperoleh tingkat keterlibatan lima kali lebih tinggi dibandingkan konten bernada netral. Dampaknya, ruang publik digital kian terpolarisasi menjadi ruang gema (echo chamber) yang mengikis kapasitas dialog rasional masyarakat.",
    "question": "Berdasarkan wacana di atas, asumsi implisit yang mendasari kekhawatiran penulis terhadap algoritma media sosial adalah...",
    "options": [
      {
        "key": "A",
        "text": "Semua platform media sosial seharusnya ditutup secara permanen oleh kementerian komunikasi."
      },
      {
        "key": "B",
        "text": "Pengguna media sosial tidak memiliki kemampuan nalar sama sekali dalam menyaring berita palsu."
      },
      {
        "key": "C",
        "text": "Konten bernada netral tidak akan pernah dibaca oleh generasi muda di era kecerdasan buatan."
      },
      {
        "key": "D",
        "text": "Polarisasi ruang publik merupakan fenomena alami yang tidak memiliki konsekuensi politik apa pun."
      },
      {
        "key": "E",
        "text": "Ruang gema digital yang terpolarisasi dapat mengancam kualitas pertimbangan demokratis dan kohesi sosial dalam masyarakat."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Asumsi implisit adalah fondasi pemikiran yang tidak diucapkan secara eksplisit namun menjadi alasan logis di balik keprihatinan penulis. Penulis khawatir akan polarisasi karena ia meyakini dialog rasional sangat penting bagi kesehatan tatanan demokrasi dan kehidupan sosial.",
    "quickTrick": "👑 Metode The King GO: Tanyakan: 'Mengapa penulis begitu peduli dengan isu ini?' Jawabannya adalah asumsi nilai (value assumption) yang diyakininya."
  },
  {
    "id": "bimbel_lit_indo_051",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Analisis Hubungan Kausalitas Teks",
    "difficulty": "HOTS",
    "stimulus": "Ekosistem lahan gambut menyimpan cadangan karbon terestrial global dua kali lipat lebih banyak daripada seluruh biomassa hutan di dunia. Ketika lahan gambut dikeringkan melalui pembuatan kanal drainase untuk perkebunan monokultur, lapisan gambut menjadi sangat rentan teroksidasi dan terbakar. Kebakaran gambut melepaskan jutaan ton gas rumah kaca serta menghasilkan kabut asap pekat yang melumpuhkan aktivitas ekonomi regional.",
    "question": "Hubungan sebab-akibat yang PALING TEPAT digambarkan oleh teks adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kebakaran gambut menyebabkan terbentuknya kanal drainase baru di sekitar perkebunan."
      },
      {
        "key": "B",
        "text": "Biomassa hutan tropis menyerap seluruh emisi karbon yang dihasilkan dari kebakaran gambut."
      },
      {
        "key": "C",
        "text": "Pembuatan kanal drainase menyebabkan penurunan kadar air gambut yang memicu kerentanan kebakaran hebat dan pelepasan karbon masif."
      },
      {
        "key": "D",
        "text": "Aktivitas ekonomi regional pulih seketika setelah lahan gambut dikeringkan sepenuhnya."
      },
      {
        "key": "E",
        "text": "Lapisan gambut terhindar dari proses oksidasi jika berada dalam kondisi tanah yang kering."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Rantai kausalitas: Drainase kanal -> gambut mengering dan teroksidasi -> mudah terbakar -> polusi asap dan pelepasan emisi karbon.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Susun urutan kronologis kausalitas: Faktor pemicu -> Kondisi perantara -> Dampak akhir."
  },
  {
    "id": "bimbel_lit_indo_052",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Sikap Penulis (Author's Tone) & Evaluasi Wacana",
    "difficulty": "Sedang",
    "stimulus": "Sorgum dan sagu dinilai para ahli pangan sebagai komoditas masa depan yang mampu memperkuat kedaulatan pangan nasional. Keduanya memiliki indeks glikemik yang relatif rendah serta ketahanan tinggi terhadap kondisi tanah marjinal dan anomali cuaca ekstrem akibat El Nino. Kendati demikian, persepsi masyarakat yang masih menganggap beras sebagai 'status sosial' utama menjadi tantangan kultural yang harus dijembatani melalui kampanye gastronomi kreatif.",
    "question": "Sikap atau nada (tone) penulis dalam wacana di atas dapat dikategorikan sebagai...",
    "options": [
      {
        "key": "A",
        "text": "Objektif dan konstruktif terhadap prospek diversifikasi pangan alternatif."
      },
      {
        "key": "B",
        "text": "Pesimistis dan skeptis terhadap masa depan pertanian nasional."
      },
      {
        "key": "C",
        "text": "Sarkastis dan meremehkan preferensi konsumsi masyarakat tradisional."
      },
      {
        "key": "D",
        "text": "Emosional dan menuntut pelarangan total konsumsi beras putih."
      },
      {
        "key": "E",
        "text": "Apatis dan tidak peduli terhadap ancaman krisis pangan global."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Penulis menyajikan fakta agronomi sorgum dan sagu secara ilmiah (objektif) sembari mengakui tantangan budaya dan menyarankan solusi kampanye gastronomi yang positif (konstruktif).",
    "quickTrick": "🚀 Brain Academy Fast Trick: Perhatikan pilihan kata: tidak ada kata-kata menghakimi yang sinis; nada tulisan analitis dan solutif."
  },
  {
    "id": "bimbel_lit_indo_053",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Literasi Teks Ilmiah & Kebijakan",
    "difficulty": "HOTS",
    "stimulus": "Transisi energi di sektor penerbangan komersial global menuntut adopsi bahan bakar ramah lingkungan (Sustainable Aviation Fuel / SAF). Indonesia, sebagai produsen minyak kelapa sawit terbesar di dunia, memiliki posisi strategis dalam rantai pasok bioavtur. Namun, tantangan sertifikasi keberlanjutan Roundtable on Sustainable Biomass (RSB) dan persaingan pemanfaatan minyak nabati untuk kebutuhan pangan domestik menjadi hambatan struktural yang harus diselesaikan melalui harmonisasi regulasi lintas kementerian.",
    "question": "Tujuan utama penulis menyampaikan wacana tersebut adalah untuk...",
    "options": [
      {
        "key": "A",
        "text": "Mendesak maskapai penerbangan nasional menurunkan harga tiket penerbangan domestik."
      },
      {
        "key": "B",
        "text": "Mengkritik keras penggunaan kelapa sawit dalam produksi bahan bakar nabati."
      },
      {
        "key": "C",
        "text": "Memaparkan keunggulan teknologi mesin jet yang mengonsumsi bahan bakar konvensional."
      },
      {
        "key": "D",
        "text": "Menyoroti potensi besar Indonesia dalam bioavtur sekaligus menggarisbawahi urgensi penyelesaian regulasi dan sertifikasi keberlanjutan."
      },
      {
        "key": "E",
        "text": "Menyatakan bahwa sertifikasi RSB tidak memiliki signifikansi dalam perdagangan global."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Tujuan penulisan teks analitis: Penulis mengidentifikasi peluang strategis Indonesia (potensi bioavtur) dan secara bersamaan memaparkan hambatan nyata (sertifikasi dan regulasi) agar tercipta solusi harmonisasi kebijakan.",
    "quickTrick": "🌟 NF Smart Solution: Tujuan teks argumentatif/analitis selalu merangkum problem statement dan arah solusi yang ditawarkan."
  },
  {
    "id": "bimbel_lit_indo_054",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Asumsi Implisit & Penalaran Kritis",
    "difficulty": "Sedang",
    "stimulus": "Pemanfaatan algoritma pembelajaran mesin pada platform media sosial telah dirancang untuk memaksimalkan retensi atensi pengguna. Konten yang memicu reaksi emosional kuat—terutama kemarahan atau kegelisahan—cenderung diamplifikasi oleh algoritma hingga memperoleh tingkat keterlibatan lima kali lebih tinggi dibandingkan konten bernada netral. Dampaknya, ruang publik digital kian terpolarisasi menjadi ruang gema (echo chamber) yang mengikis kapasitas dialog rasional masyarakat.",
    "question": "Berdasarkan wacana di atas, asumsi implisit yang mendasari kekhawatiran penulis terhadap algoritma media sosial adalah...",
    "options": [
      {
        "key": "A",
        "text": "Semua platform media sosial seharusnya ditutup secara permanen oleh kementerian komunikasi."
      },
      {
        "key": "B",
        "text": "Ruang gema digital yang terpolarisasi dapat mengancam kualitas pertimbangan demokratis dan kohesi sosial dalam masyarakat."
      },
      {
        "key": "C",
        "text": "Pengguna media sosial tidak memiliki kemampuan nalar sama sekali dalam menyaring berita palsu."
      },
      {
        "key": "D",
        "text": "Konten bernada netral tidak akan pernah dibaca oleh generasi muda di era kecerdasan buatan."
      },
      {
        "key": "E",
        "text": "Polarisasi ruang publik merupakan fenomena alami yang tidak memiliki konsekuensi politik apa pun."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Asumsi implisit adalah fondasi pemikiran yang tidak diucapkan secara eksplisit namun menjadi alasan logis di balik keprihatinan penulis. Penulis khawatir akan polarisasi karena ia meyakini dialog rasional sangat penting bagi kesehatan tatanan demokrasi dan kehidupan sosial.",
    "quickTrick": "🧠 Zenius Core Logic: Tanyakan: 'Mengapa penulis begitu peduli dengan isu ini?' Jawabannya adalah asumsi nilai (value assumption) yang diyakininya."
  },
  {
    "id": "bimbel_lit_indo_055",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Analisis Hubungan Kausalitas Teks",
    "difficulty": "HOTS",
    "stimulus": "Ekosistem lahan gambut menyimpan cadangan karbon terestrial global dua kali lipat lebih banyak daripada seluruh biomassa hutan di dunia. Ketika lahan gambut dikeringkan melalui pembuatan kanal drainase untuk perkebunan monokultur, lapisan gambut menjadi sangat rentan teroksidasi dan terbakar. Kebakaran gambut melepaskan jutaan ton gas rumah kaca serta menghasilkan kabut asap pekat yang melumpuhkan aktivitas ekonomi regional.",
    "question": "Hubungan sebab-akibat yang PALING TEPAT digambarkan oleh teks adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kebakaran gambut menyebabkan terbentuknya kanal drainase baru di sekitar perkebunan."
      },
      {
        "key": "B",
        "text": "Biomassa hutan tropis menyerap seluruh emisi karbon yang dihasilkan dari kebakaran gambut."
      },
      {
        "key": "C",
        "text": "Aktivitas ekonomi regional pulih seketika setelah lahan gambut dikeringkan sepenuhnya."
      },
      {
        "key": "D",
        "text": "Lapisan gambut terhindar dari proses oksidasi jika berada dalam kondisi tanah yang kering."
      },
      {
        "key": "E",
        "text": "Pembuatan kanal drainase menyebabkan penurunan kadar air gambut yang memicu kerentanan kebakaran hebat dan pelepasan karbon masif."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Rantai kausalitas: Drainase kanal -> gambut mengering dan teroksidasi -> mudah terbakar -> polusi asap dan pelepasan emisi karbon.",
    "quickTrick": "💡 INTEN Reading Strategy: Susun urutan kronologis kausalitas: Faktor pemicu -> Kondisi perantara -> Dampak akhir."
  },
  {
    "id": "bimbel_lit_indo_056",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Sikap Penulis (Author's Tone) & Evaluasi Wacana",
    "difficulty": "Sedang",
    "stimulus": "Sorgum dan sagu dinilai para ahli pangan sebagai komoditas masa depan yang mampu memperkuat kedaulatan pangan nasional. Keduanya memiliki indeks glikemik yang relatif rendah serta ketahanan tinggi terhadap kondisi tanah marjinal dan anomali cuaca ekstrem akibat El Nino. Kendati demikian, persepsi masyarakat yang masih menganggap beras sebagai 'status sosial' utama menjadi tantangan kultural yang harus dijembatani melalui kampanye gastronomi kreatif.",
    "question": "Sikap atau nada (tone) penulis dalam wacana di atas dapat dikategorikan sebagai...",
    "options": [
      {
        "key": "A",
        "text": "Pesimistis dan skeptis terhadap masa depan pertanian nasional."
      },
      {
        "key": "B",
        "text": "Sarkastis dan meremehkan preferensi konsumsi masyarakat tradisional."
      },
      {
        "key": "C",
        "text": "Objektif dan konstruktif terhadap prospek diversifikasi pangan alternatif."
      },
      {
        "key": "D",
        "text": "Emosional dan menuntut pelarangan total konsumsi beras putih."
      },
      {
        "key": "E",
        "text": "Apatis dan tidak peduli terhadap ancaman krisis pangan global."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Penulis menyajikan fakta agronomi sorgum dan sagu secara ilmiah (objektif) sembari mengakui tantangan budaya dan menyarankan solusi kampanye gastronomi yang positif (konstruktif).",
    "quickTrick": "👑 Metode The King GO: Perhatikan pilihan kata: tidak ada kata-kata menghakimi yang sinis; nada tulisan analitis dan solutif."
  },
  {
    "id": "bimbel_lit_indo_057",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Literasi Teks Ilmiah & Kebijakan",
    "difficulty": "HOTS",
    "stimulus": "Transisi energi di sektor penerbangan komersial global menuntut adopsi bahan bakar ramah lingkungan (Sustainable Aviation Fuel / SAF). Indonesia, sebagai produsen minyak kelapa sawit terbesar di dunia, memiliki posisi strategis dalam rantai pasok bioavtur. Namun, tantangan sertifikasi keberlanjutan Roundtable on Sustainable Biomass (RSB) dan persaingan pemanfaatan minyak nabati untuk kebutuhan pangan domestik menjadi hambatan struktural yang harus diselesaikan melalui harmonisasi regulasi lintas kementerian.",
    "question": "Tujuan utama penulis menyampaikan wacana tersebut adalah untuk...",
    "options": [
      {
        "key": "A",
        "text": "Menyoroti potensi besar Indonesia dalam bioavtur sekaligus menggarisbawahi urgensi penyelesaian regulasi dan sertifikasi keberlanjutan."
      },
      {
        "key": "B",
        "text": "Mendesak maskapai penerbangan nasional menurunkan harga tiket penerbangan domestik."
      },
      {
        "key": "C",
        "text": "Mengkritik keras penggunaan kelapa sawit dalam produksi bahan bakar nabati."
      },
      {
        "key": "D",
        "text": "Memaparkan keunggulan teknologi mesin jet yang mengonsumsi bahan bakar konvensional."
      },
      {
        "key": "E",
        "text": "Menyatakan bahwa sertifikasi RSB tidak memiliki signifikansi dalam perdagangan global."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tujuan penulisan teks analitis: Penulis mengidentifikasi peluang strategis Indonesia (potensi bioavtur) dan secara bersamaan memaparkan hambatan nyata (sertifikasi dan regulasi) agar tercipta solusi harmonisasi kebijakan.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Tujuan teks argumentatif/analitis selalu merangkum problem statement dan arah solusi yang ditawarkan."
  },
  {
    "id": "bimbel_lit_indo_058",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Asumsi Implisit & Penalaran Kritis",
    "difficulty": "Sedang",
    "stimulus": "Pemanfaatan algoritma pembelajaran mesin pada platform media sosial telah dirancang untuk memaksimalkan retensi atensi pengguna. Konten yang memicu reaksi emosional kuat—terutama kemarahan atau kegelisahan—cenderung diamplifikasi oleh algoritma hingga memperoleh tingkat keterlibatan lima kali lebih tinggi dibandingkan konten bernada netral. Dampaknya, ruang publik digital kian terpolarisasi menjadi ruang gema (echo chamber) yang mengikis kapasitas dialog rasional masyarakat.",
    "question": "Berdasarkan wacana di atas, asumsi implisit yang mendasari kekhawatiran penulis terhadap algoritma media sosial adalah...",
    "options": [
      {
        "key": "A",
        "text": "Semua platform media sosial seharusnya ditutup secara permanen oleh kementerian komunikasi."
      },
      {
        "key": "B",
        "text": "Pengguna media sosial tidak memiliki kemampuan nalar sama sekali dalam menyaring berita palsu."
      },
      {
        "key": "C",
        "text": "Konten bernada netral tidak akan pernah dibaca oleh generasi muda di era kecerdasan buatan."
      },
      {
        "key": "D",
        "text": "Ruang gema digital yang terpolarisasi dapat mengancam kualitas pertimbangan demokratis dan kohesi sosial dalam masyarakat."
      },
      {
        "key": "E",
        "text": "Polarisasi ruang publik merupakan fenomena alami yang tidak memiliki konsekuensi politik apa pun."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Asumsi implisit adalah fondasi pemikiran yang tidak diucapkan secara eksplisit namun menjadi alasan logis di balik keprihatinan penulis. Penulis khawatir akan polarisasi karena ia meyakini dialog rasional sangat penting bagi kesehatan tatanan demokrasi dan kehidupan sosial.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Tanyakan: 'Mengapa penulis begitu peduli dengan isu ini?' Jawabannya adalah asumsi nilai (value assumption) yang diyakininya."
  },
  {
    "id": "bimbel_lit_indo_059",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Analisis Hubungan Kausalitas Teks",
    "difficulty": "HOTS",
    "stimulus": "Ekosistem lahan gambut menyimpan cadangan karbon terestrial global dua kali lipat lebih banyak daripada seluruh biomassa hutan di dunia. Ketika lahan gambut dikeringkan melalui pembuatan kanal drainase untuk perkebunan monokultur, lapisan gambut menjadi sangat rentan teroksidasi dan terbakar. Kebakaran gambut melepaskan jutaan ton gas rumah kaca serta menghasilkan kabut asap pekat yang melumpuhkan aktivitas ekonomi regional.",
    "question": "Hubungan sebab-akibat yang PALING TEPAT digambarkan oleh teks adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kebakaran gambut menyebabkan terbentuknya kanal drainase baru di sekitar perkebunan."
      },
      {
        "key": "B",
        "text": "Pembuatan kanal drainase menyebabkan penurunan kadar air gambut yang memicu kerentanan kebakaran hebat dan pelepasan karbon masif."
      },
      {
        "key": "C",
        "text": "Biomassa hutan tropis menyerap seluruh emisi karbon yang dihasilkan dari kebakaran gambut."
      },
      {
        "key": "D",
        "text": "Aktivitas ekonomi regional pulih seketika setelah lahan gambut dikeringkan sepenuhnya."
      },
      {
        "key": "E",
        "text": "Lapisan gambut terhindar dari proses oksidasi jika berada dalam kondisi tanah yang kering."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Rantai kausalitas: Drainase kanal -> gambut mengering dan teroksidasi -> mudah terbakar -> polusi asap dan pelepasan emisi karbon.",
    "quickTrick": "🌟 NF Smart Solution: Susun urutan kronologis kausalitas: Faktor pemicu -> Kondisi perantara -> Dampak akhir."
  },
  {
    "id": "bimbel_lit_indo_060",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Sikap Penulis (Author's Tone) & Evaluasi Wacana",
    "difficulty": "Sedang",
    "stimulus": "Sorgum dan sagu dinilai para ahli pangan sebagai komoditas masa depan yang mampu memperkuat kedaulatan pangan nasional. Keduanya memiliki indeks glikemik yang relatif rendah serta ketahanan tinggi terhadap kondisi tanah marjinal dan anomali cuaca ekstrem akibat El Nino. Kendati demikian, persepsi masyarakat yang masih menganggap beras sebagai 'status sosial' utama menjadi tantangan kultural yang harus dijembatani melalui kampanye gastronomi kreatif.",
    "question": "Sikap atau nada (tone) penulis dalam wacana di atas dapat dikategorikan sebagai...",
    "options": [
      {
        "key": "A",
        "text": "Pesimistis dan skeptis terhadap masa depan pertanian nasional."
      },
      {
        "key": "B",
        "text": "Sarkastis dan meremehkan preferensi konsumsi masyarakat tradisional."
      },
      {
        "key": "C",
        "text": "Emosional dan menuntut pelarangan total konsumsi beras putih."
      },
      {
        "key": "D",
        "text": "Apatis dan tidak peduli terhadap ancaman krisis pangan global."
      },
      {
        "key": "E",
        "text": "Objektif dan konstruktif terhadap prospek diversifikasi pangan alternatif."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Penulis menyajikan fakta agronomi sorgum dan sagu secara ilmiah (objektif) sembari mengakui tantangan budaya dan menyarankan solusi kampanye gastronomi yang positif (konstruktif).",
    "quickTrick": "🧠 Zenius Core Logic: Perhatikan pilihan kata: tidak ada kata-kata menghakimi yang sinis; nada tulisan analitis dan solutif."
  },
  {
    "id": "bimbel_lit_indo_061",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Literasi Teks Ilmiah & Kebijakan",
    "difficulty": "HOTS",
    "stimulus": "Transisi energi di sektor penerbangan komersial global menuntut adopsi bahan bakar ramah lingkungan (Sustainable Aviation Fuel / SAF). Indonesia, sebagai produsen minyak kelapa sawit terbesar di dunia, memiliki posisi strategis dalam rantai pasok bioavtur. Namun, tantangan sertifikasi keberlanjutan Roundtable on Sustainable Biomass (RSB) dan persaingan pemanfaatan minyak nabati untuk kebutuhan pangan domestik menjadi hambatan struktural yang harus diselesaikan melalui harmonisasi regulasi lintas kementerian.",
    "question": "Tujuan utama penulis menyampaikan wacana tersebut adalah untuk...",
    "options": [
      {
        "key": "A",
        "text": "Mendesak maskapai penerbangan nasional menurunkan harga tiket penerbangan domestik."
      },
      {
        "key": "B",
        "text": "Mengkritik keras penggunaan kelapa sawit dalam produksi bahan bakar nabati."
      },
      {
        "key": "C",
        "text": "Menyoroti potensi besar Indonesia dalam bioavtur sekaligus menggarisbawahi urgensi penyelesaian regulasi dan sertifikasi keberlanjutan."
      },
      {
        "key": "D",
        "text": "Memaparkan keunggulan teknologi mesin jet yang mengonsumsi bahan bakar konvensional."
      },
      {
        "key": "E",
        "text": "Menyatakan bahwa sertifikasi RSB tidak memiliki signifikansi dalam perdagangan global."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Tujuan penulisan teks analitis: Penulis mengidentifikasi peluang strategis Indonesia (potensi bioavtur) dan secara bersamaan memaparkan hambatan nyata (sertifikasi dan regulasi) agar tercipta solusi harmonisasi kebijakan.",
    "quickTrick": "💡 INTEN Reading Strategy: Tujuan teks argumentatif/analitis selalu merangkum problem statement dan arah solusi yang ditawarkan."
  },
  {
    "id": "bimbel_lit_indo_062",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Asumsi Implisit & Penalaran Kritis",
    "difficulty": "Sedang",
    "stimulus": "Pemanfaatan algoritma pembelajaran mesin pada platform media sosial telah dirancang untuk memaksimalkan retensi atensi pengguna. Konten yang memicu reaksi emosional kuat—terutama kemarahan atau kegelisahan—cenderung diamplifikasi oleh algoritma hingga memperoleh tingkat keterlibatan lima kali lebih tinggi dibandingkan konten bernada netral. Dampaknya, ruang publik digital kian terpolarisasi menjadi ruang gema (echo chamber) yang mengikis kapasitas dialog rasional masyarakat.",
    "question": "Berdasarkan wacana di atas, asumsi implisit yang mendasari kekhawatiran penulis terhadap algoritma media sosial adalah...",
    "options": [
      {
        "key": "A",
        "text": "Ruang gema digital yang terpolarisasi dapat mengancam kualitas pertimbangan demokratis dan kohesi sosial dalam masyarakat."
      },
      {
        "key": "B",
        "text": "Semua platform media sosial seharusnya ditutup secara permanen oleh kementerian komunikasi."
      },
      {
        "key": "C",
        "text": "Pengguna media sosial tidak memiliki kemampuan nalar sama sekali dalam menyaring berita palsu."
      },
      {
        "key": "D",
        "text": "Konten bernada netral tidak akan pernah dibaca oleh generasi muda di era kecerdasan buatan."
      },
      {
        "key": "E",
        "text": "Polarisasi ruang publik merupakan fenomena alami yang tidak memiliki konsekuensi politik apa pun."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Asumsi implisit adalah fondasi pemikiran yang tidak diucapkan secara eksplisit namun menjadi alasan logis di balik keprihatinan penulis. Penulis khawatir akan polarisasi karena ia meyakini dialog rasional sangat penting bagi kesehatan tatanan demokrasi dan kehidupan sosial.",
    "quickTrick": "👑 Metode The King GO: Tanyakan: 'Mengapa penulis begitu peduli dengan isu ini?' Jawabannya adalah asumsi nilai (value assumption) yang diyakininya."
  },
  {
    "id": "bimbel_lit_indo_063",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Analisis Hubungan Kausalitas Teks",
    "difficulty": "HOTS",
    "stimulus": "Ekosistem lahan gambut menyimpan cadangan karbon terestrial global dua kali lipat lebih banyak daripada seluruh biomassa hutan di dunia. Ketika lahan gambut dikeringkan melalui pembuatan kanal drainase untuk perkebunan monokultur, lapisan gambut menjadi sangat rentan teroksidasi dan terbakar. Kebakaran gambut melepaskan jutaan ton gas rumah kaca serta menghasilkan kabut asap pekat yang melumpuhkan aktivitas ekonomi regional.",
    "question": "Hubungan sebab-akibat yang PALING TEPAT digambarkan oleh teks adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kebakaran gambut menyebabkan terbentuknya kanal drainase baru di sekitar perkebunan."
      },
      {
        "key": "B",
        "text": "Biomassa hutan tropis menyerap seluruh emisi karbon yang dihasilkan dari kebakaran gambut."
      },
      {
        "key": "C",
        "text": "Aktivitas ekonomi regional pulih seketika setelah lahan gambut dikeringkan sepenuhnya."
      },
      {
        "key": "D",
        "text": "Pembuatan kanal drainase menyebabkan penurunan kadar air gambut yang memicu kerentanan kebakaran hebat dan pelepasan karbon masif."
      },
      {
        "key": "E",
        "text": "Lapisan gambut terhindar dari proses oksidasi jika berada dalam kondisi tanah yang kering."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Rantai kausalitas: Drainase kanal -> gambut mengering dan teroksidasi -> mudah terbakar -> polusi asap dan pelepasan emisi karbon.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Susun urutan kronologis kausalitas: Faktor pemicu -> Kondisi perantara -> Dampak akhir."
  },
  {
    "id": "bimbel_lit_indo_064",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Sikap Penulis (Author's Tone) & Evaluasi Wacana",
    "difficulty": "Sedang",
    "stimulus": "Sorgum dan sagu dinilai para ahli pangan sebagai komoditas masa depan yang mampu memperkuat kedaulatan pangan nasional. Keduanya memiliki indeks glikemik yang relatif rendah serta ketahanan tinggi terhadap kondisi tanah marjinal dan anomali cuaca ekstrem akibat El Nino. Kendati demikian, persepsi masyarakat yang masih menganggap beras sebagai 'status sosial' utama menjadi tantangan kultural yang harus dijembatani melalui kampanye gastronomi kreatif.",
    "question": "Sikap atau nada (tone) penulis dalam wacana di atas dapat dikategorikan sebagai...",
    "options": [
      {
        "key": "A",
        "text": "Pesimistis dan skeptis terhadap masa depan pertanian nasional."
      },
      {
        "key": "B",
        "text": "Objektif dan konstruktif terhadap prospek diversifikasi pangan alternatif."
      },
      {
        "key": "C",
        "text": "Sarkastis dan meremehkan preferensi konsumsi masyarakat tradisional."
      },
      {
        "key": "D",
        "text": "Emosional dan menuntut pelarangan total konsumsi beras putih."
      },
      {
        "key": "E",
        "text": "Apatis dan tidak peduli terhadap ancaman krisis pangan global."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Penulis menyajikan fakta agronomi sorgum dan sagu secara ilmiah (objektif) sembari mengakui tantangan budaya dan menyarankan solusi kampanye gastronomi yang positif (konstruktif).",
    "quickTrick": "🚀 Brain Academy Fast Trick: Perhatikan pilihan kata: tidak ada kata-kata menghakimi yang sinis; nada tulisan analitis dan solutif."
  },
  {
    "id": "bimbel_lit_indo_065",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Literasi Teks Ilmiah & Kebijakan",
    "difficulty": "HOTS",
    "stimulus": "Transisi energi di sektor penerbangan komersial global menuntut adopsi bahan bakar ramah lingkungan (Sustainable Aviation Fuel / SAF). Indonesia, sebagai produsen minyak kelapa sawit terbesar di dunia, memiliki posisi strategis dalam rantai pasok bioavtur. Namun, tantangan sertifikasi keberlanjutan Roundtable on Sustainable Biomass (RSB) dan persaingan pemanfaatan minyak nabati untuk kebutuhan pangan domestik menjadi hambatan struktural yang harus diselesaikan melalui harmonisasi regulasi lintas kementerian.",
    "question": "Tujuan utama penulis menyampaikan wacana tersebut adalah untuk...",
    "options": [
      {
        "key": "A",
        "text": "Mendesak maskapai penerbangan nasional menurunkan harga tiket penerbangan domestik."
      },
      {
        "key": "B",
        "text": "Mengkritik keras penggunaan kelapa sawit dalam produksi bahan bakar nabati."
      },
      {
        "key": "C",
        "text": "Memaparkan keunggulan teknologi mesin jet yang mengonsumsi bahan bakar konvensional."
      },
      {
        "key": "D",
        "text": "Menyatakan bahwa sertifikasi RSB tidak memiliki signifikansi dalam perdagangan global."
      },
      {
        "key": "E",
        "text": "Menyoroti potensi besar Indonesia dalam bioavtur sekaligus menggarisbawahi urgensi penyelesaian regulasi dan sertifikasi keberlanjutan."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Tujuan penulisan teks analitis: Penulis mengidentifikasi peluang strategis Indonesia (potensi bioavtur) dan secara bersamaan memaparkan hambatan nyata (sertifikasi dan regulasi) agar tercipta solusi harmonisasi kebijakan.",
    "quickTrick": "🌟 NF Smart Solution: Tujuan teks argumentatif/analitis selalu merangkum problem statement dan arah solusi yang ditawarkan."
  },
  {
    "id": "bimbel_lit_indo_066",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Asumsi Implisit & Penalaran Kritis",
    "difficulty": "Sedang",
    "stimulus": "Pemanfaatan algoritma pembelajaran mesin pada platform media sosial telah dirancang untuk memaksimalkan retensi atensi pengguna. Konten yang memicu reaksi emosional kuat—terutama kemarahan atau kegelisahan—cenderung diamplifikasi oleh algoritma hingga memperoleh tingkat keterlibatan lima kali lebih tinggi dibandingkan konten bernada netral. Dampaknya, ruang publik digital kian terpolarisasi menjadi ruang gema (echo chamber) yang mengikis kapasitas dialog rasional masyarakat.",
    "question": "Berdasarkan wacana di atas, asumsi implisit yang mendasari kekhawatiran penulis terhadap algoritma media sosial adalah...",
    "options": [
      {
        "key": "A",
        "text": "Semua platform media sosial seharusnya ditutup secara permanen oleh kementerian komunikasi."
      },
      {
        "key": "B",
        "text": "Pengguna media sosial tidak memiliki kemampuan nalar sama sekali dalam menyaring berita palsu."
      },
      {
        "key": "C",
        "text": "Ruang gema digital yang terpolarisasi dapat mengancam kualitas pertimbangan demokratis dan kohesi sosial dalam masyarakat."
      },
      {
        "key": "D",
        "text": "Konten bernada netral tidak akan pernah dibaca oleh generasi muda di era kecerdasan buatan."
      },
      {
        "key": "E",
        "text": "Polarisasi ruang publik merupakan fenomena alami yang tidak memiliki konsekuensi politik apa pun."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Asumsi implisit adalah fondasi pemikiran yang tidak diucapkan secara eksplisit namun menjadi alasan logis di balik keprihatinan penulis. Penulis khawatir akan polarisasi karena ia meyakini dialog rasional sangat penting bagi kesehatan tatanan demokrasi dan kehidupan sosial.",
    "quickTrick": "🧠 Zenius Core Logic: Tanyakan: 'Mengapa penulis begitu peduli dengan isu ini?' Jawabannya adalah asumsi nilai (value assumption) yang diyakininya."
  },
  {
    "id": "bimbel_lit_indo_067",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Analisis Hubungan Kausalitas Teks",
    "difficulty": "HOTS",
    "stimulus": "Ekosistem lahan gambut menyimpan cadangan karbon terestrial global dua kali lipat lebih banyak daripada seluruh biomassa hutan di dunia. Ketika lahan gambut dikeringkan melalui pembuatan kanal drainase untuk perkebunan monokultur, lapisan gambut menjadi sangat rentan teroksidasi dan terbakar. Kebakaran gambut melepaskan jutaan ton gas rumah kaca serta menghasilkan kabut asap pekat yang melumpuhkan aktivitas ekonomi regional.",
    "question": "Hubungan sebab-akibat yang PALING TEPAT digambarkan oleh teks adalah...",
    "options": [
      {
        "key": "A",
        "text": "Pembuatan kanal drainase menyebabkan penurunan kadar air gambut yang memicu kerentanan kebakaran hebat dan pelepasan karbon masif."
      },
      {
        "key": "B",
        "text": "Kebakaran gambut menyebabkan terbentuknya kanal drainase baru di sekitar perkebunan."
      },
      {
        "key": "C",
        "text": "Biomassa hutan tropis menyerap seluruh emisi karbon yang dihasilkan dari kebakaran gambut."
      },
      {
        "key": "D",
        "text": "Aktivitas ekonomi regional pulih seketika setelah lahan gambut dikeringkan sepenuhnya."
      },
      {
        "key": "E",
        "text": "Lapisan gambut terhindar dari proses oksidasi jika berada dalam kondisi tanah yang kering."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Rantai kausalitas: Drainase kanal -> gambut mengering dan teroksidasi -> mudah terbakar -> polusi asap dan pelepasan emisi karbon.",
    "quickTrick": "💡 INTEN Reading Strategy: Susun urutan kronologis kausalitas: Faktor pemicu -> Kondisi perantara -> Dampak akhir."
  },
  {
    "id": "bimbel_lit_indo_068",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Sikap Penulis (Author's Tone) & Evaluasi Wacana",
    "difficulty": "Sedang",
    "stimulus": "Sorgum dan sagu dinilai para ahli pangan sebagai komoditas masa depan yang mampu memperkuat kedaulatan pangan nasional. Keduanya memiliki indeks glikemik yang relatif rendah serta ketahanan tinggi terhadap kondisi tanah marjinal dan anomali cuaca ekstrem akibat El Nino. Kendati demikian, persepsi masyarakat yang masih menganggap beras sebagai 'status sosial' utama menjadi tantangan kultural yang harus dijembatani melalui kampanye gastronomi kreatif.",
    "question": "Sikap atau nada (tone) penulis dalam wacana di atas dapat dikategorikan sebagai...",
    "options": [
      {
        "key": "A",
        "text": "Pesimistis dan skeptis terhadap masa depan pertanian nasional."
      },
      {
        "key": "B",
        "text": "Sarkastis dan meremehkan preferensi konsumsi masyarakat tradisional."
      },
      {
        "key": "C",
        "text": "Emosional dan menuntut pelarangan total konsumsi beras putih."
      },
      {
        "key": "D",
        "text": "Objektif dan konstruktif terhadap prospek diversifikasi pangan alternatif."
      },
      {
        "key": "E",
        "text": "Apatis dan tidak peduli terhadap ancaman krisis pangan global."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Penulis menyajikan fakta agronomi sorgum dan sagu secara ilmiah (objektif) sembari mengakui tantangan budaya dan menyarankan solusi kampanye gastronomi yang positif (konstruktif).",
    "quickTrick": "👑 Metode The King GO: Perhatikan pilihan kata: tidak ada kata-kata menghakimi yang sinis; nada tulisan analitis dan solutif."
  },
  {
    "id": "bimbel_lit_indo_069",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Literasi Teks Ilmiah & Kebijakan",
    "difficulty": "HOTS",
    "stimulus": "Transisi energi di sektor penerbangan komersial global menuntut adopsi bahan bakar ramah lingkungan (Sustainable Aviation Fuel / SAF). Indonesia, sebagai produsen minyak kelapa sawit terbesar di dunia, memiliki posisi strategis dalam rantai pasok bioavtur. Namun, tantangan sertifikasi keberlanjutan Roundtable on Sustainable Biomass (RSB) dan persaingan pemanfaatan minyak nabati untuk kebutuhan pangan domestik menjadi hambatan struktural yang harus diselesaikan melalui harmonisasi regulasi lintas kementerian.",
    "question": "Tujuan utama penulis menyampaikan wacana tersebut adalah untuk...",
    "options": [
      {
        "key": "A",
        "text": "Mendesak maskapai penerbangan nasional menurunkan harga tiket penerbangan domestik."
      },
      {
        "key": "B",
        "text": "Menyoroti potensi besar Indonesia dalam bioavtur sekaligus menggarisbawahi urgensi penyelesaian regulasi dan sertifikasi keberlanjutan."
      },
      {
        "key": "C",
        "text": "Mengkritik keras penggunaan kelapa sawit dalam produksi bahan bakar nabati."
      },
      {
        "key": "D",
        "text": "Memaparkan keunggulan teknologi mesin jet yang mengonsumsi bahan bakar konvensional."
      },
      {
        "key": "E",
        "text": "Menyatakan bahwa sertifikasi RSB tidak memiliki signifikansi dalam perdagangan global."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Tujuan penulisan teks analitis: Penulis mengidentifikasi peluang strategis Indonesia (potensi bioavtur) dan secara bersamaan memaparkan hambatan nyata (sertifikasi dan regulasi) agar tercipta solusi harmonisasi kebijakan.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Tujuan teks argumentatif/analitis selalu merangkum problem statement dan arah solusi yang ditawarkan."
  },
  {
    "id": "bimbel_lit_indo_070",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Asumsi Implisit & Penalaran Kritis",
    "difficulty": "Sedang",
    "stimulus": "Pemanfaatan algoritma pembelajaran mesin pada platform media sosial telah dirancang untuk memaksimalkan retensi atensi pengguna. Konten yang memicu reaksi emosional kuat—terutama kemarahan atau kegelisahan—cenderung diamplifikasi oleh algoritma hingga memperoleh tingkat keterlibatan lima kali lebih tinggi dibandingkan konten bernada netral. Dampaknya, ruang publik digital kian terpolarisasi menjadi ruang gema (echo chamber) yang mengikis kapasitas dialog rasional masyarakat.",
    "question": "Berdasarkan wacana di atas, asumsi implisit yang mendasari kekhawatiran penulis terhadap algoritma media sosial adalah...",
    "options": [
      {
        "key": "A",
        "text": "Semua platform media sosial seharusnya ditutup secara permanen oleh kementerian komunikasi."
      },
      {
        "key": "B",
        "text": "Pengguna media sosial tidak memiliki kemampuan nalar sama sekali dalam menyaring berita palsu."
      },
      {
        "key": "C",
        "text": "Konten bernada netral tidak akan pernah dibaca oleh generasi muda di era kecerdasan buatan."
      },
      {
        "key": "D",
        "text": "Polarisasi ruang publik merupakan fenomena alami yang tidak memiliki konsekuensi politik apa pun."
      },
      {
        "key": "E",
        "text": "Ruang gema digital yang terpolarisasi dapat mengancam kualitas pertimbangan demokratis dan kohesi sosial dalam masyarakat."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Asumsi implisit adalah fondasi pemikiran yang tidak diucapkan secara eksplisit namun menjadi alasan logis di balik keprihatinan penulis. Penulis khawatir akan polarisasi karena ia meyakini dialog rasional sangat penting bagi kesehatan tatanan demokrasi dan kehidupan sosial.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Tanyakan: 'Mengapa penulis begitu peduli dengan isu ini?' Jawabannya adalah asumsi nilai (value assumption) yang diyakininya."
  },
  {
    "id": "bimbel_lit_indo_071",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Analisis Hubungan Kausalitas Teks",
    "difficulty": "HOTS",
    "stimulus": "Ekosistem lahan gambut menyimpan cadangan karbon terestrial global dua kali lipat lebih banyak daripada seluruh biomassa hutan di dunia. Ketika lahan gambut dikeringkan melalui pembuatan kanal drainase untuk perkebunan monokultur, lapisan gambut menjadi sangat rentan teroksidasi dan terbakar. Kebakaran gambut melepaskan jutaan ton gas rumah kaca serta menghasilkan kabut asap pekat yang melumpuhkan aktivitas ekonomi regional.",
    "question": "Hubungan sebab-akibat yang PALING TEPAT digambarkan oleh teks adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kebakaran gambut menyebabkan terbentuknya kanal drainase baru di sekitar perkebunan."
      },
      {
        "key": "B",
        "text": "Biomassa hutan tropis menyerap seluruh emisi karbon yang dihasilkan dari kebakaran gambut."
      },
      {
        "key": "C",
        "text": "Pembuatan kanal drainase menyebabkan penurunan kadar air gambut yang memicu kerentanan kebakaran hebat dan pelepasan karbon masif."
      },
      {
        "key": "D",
        "text": "Aktivitas ekonomi regional pulih seketika setelah lahan gambut dikeringkan sepenuhnya."
      },
      {
        "key": "E",
        "text": "Lapisan gambut terhindar dari proses oksidasi jika berada dalam kondisi tanah yang kering."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Rantai kausalitas: Drainase kanal -> gambut mengering dan teroksidasi -> mudah terbakar -> polusi asap dan pelepasan emisi karbon.",
    "quickTrick": "🌟 NF Smart Solution: Susun urutan kronologis kausalitas: Faktor pemicu -> Kondisi perantara -> Dampak akhir."
  },
  {
    "id": "bimbel_lit_indo_072",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Sikap Penulis (Author's Tone) & Evaluasi Wacana",
    "difficulty": "Sedang",
    "stimulus": "Sorgum dan sagu dinilai para ahli pangan sebagai komoditas masa depan yang mampu memperkuat kedaulatan pangan nasional. Keduanya memiliki indeks glikemik yang relatif rendah serta ketahanan tinggi terhadap kondisi tanah marjinal dan anomali cuaca ekstrem akibat El Nino. Kendati demikian, persepsi masyarakat yang masih menganggap beras sebagai 'status sosial' utama menjadi tantangan kultural yang harus dijembatani melalui kampanye gastronomi kreatif.",
    "question": "Sikap atau nada (tone) penulis dalam wacana di atas dapat dikategorikan sebagai...",
    "options": [
      {
        "key": "A",
        "text": "Objektif dan konstruktif terhadap prospek diversifikasi pangan alternatif."
      },
      {
        "key": "B",
        "text": "Pesimistis dan skeptis terhadap masa depan pertanian nasional."
      },
      {
        "key": "C",
        "text": "Sarkastis dan meremehkan preferensi konsumsi masyarakat tradisional."
      },
      {
        "key": "D",
        "text": "Emosional dan menuntut pelarangan total konsumsi beras putih."
      },
      {
        "key": "E",
        "text": "Apatis dan tidak peduli terhadap ancaman krisis pangan global."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Penulis menyajikan fakta agronomi sorgum dan sagu secara ilmiah (objektif) sembari mengakui tantangan budaya dan menyarankan solusi kampanye gastronomi yang positif (konstruktif).",
    "quickTrick": "🧠 Zenius Core Logic: Perhatikan pilihan kata: tidak ada kata-kata menghakimi yang sinis; nada tulisan analitis dan solutif."
  },
  {
    "id": "bimbel_lit_indo_073",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Literasi Teks Ilmiah & Kebijakan",
    "difficulty": "HOTS",
    "stimulus": "Transisi energi di sektor penerbangan komersial global menuntut adopsi bahan bakar ramah lingkungan (Sustainable Aviation Fuel / SAF). Indonesia, sebagai produsen minyak kelapa sawit terbesar di dunia, memiliki posisi strategis dalam rantai pasok bioavtur. Namun, tantangan sertifikasi keberlanjutan Roundtable on Sustainable Biomass (RSB) dan persaingan pemanfaatan minyak nabati untuk kebutuhan pangan domestik menjadi hambatan struktural yang harus diselesaikan melalui harmonisasi regulasi lintas kementerian.",
    "question": "Tujuan utama penulis menyampaikan wacana tersebut adalah untuk...",
    "options": [
      {
        "key": "A",
        "text": "Mendesak maskapai penerbangan nasional menurunkan harga tiket penerbangan domestik."
      },
      {
        "key": "B",
        "text": "Mengkritik keras penggunaan kelapa sawit dalam produksi bahan bakar nabati."
      },
      {
        "key": "C",
        "text": "Memaparkan keunggulan teknologi mesin jet yang mengonsumsi bahan bakar konvensional."
      },
      {
        "key": "D",
        "text": "Menyoroti potensi besar Indonesia dalam bioavtur sekaligus menggarisbawahi urgensi penyelesaian regulasi dan sertifikasi keberlanjutan."
      },
      {
        "key": "E",
        "text": "Menyatakan bahwa sertifikasi RSB tidak memiliki signifikansi dalam perdagangan global."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Tujuan penulisan teks analitis: Penulis mengidentifikasi peluang strategis Indonesia (potensi bioavtur) dan secara bersamaan memaparkan hambatan nyata (sertifikasi dan regulasi) agar tercipta solusi harmonisasi kebijakan.",
    "quickTrick": "💡 INTEN Reading Strategy: Tujuan teks argumentatif/analitis selalu merangkum problem statement dan arah solusi yang ditawarkan."
  },
  {
    "id": "bimbel_lit_indo_074",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Asumsi Implisit & Penalaran Kritis",
    "difficulty": "Sedang",
    "stimulus": "Pemanfaatan algoritma pembelajaran mesin pada platform media sosial telah dirancang untuk memaksimalkan retensi atensi pengguna. Konten yang memicu reaksi emosional kuat—terutama kemarahan atau kegelisahan—cenderung diamplifikasi oleh algoritma hingga memperoleh tingkat keterlibatan lima kali lebih tinggi dibandingkan konten bernada netral. Dampaknya, ruang publik digital kian terpolarisasi menjadi ruang gema (echo chamber) yang mengikis kapasitas dialog rasional masyarakat.",
    "question": "Berdasarkan wacana di atas, asumsi implisit yang mendasari kekhawatiran penulis terhadap algoritma media sosial adalah...",
    "options": [
      {
        "key": "A",
        "text": "Semua platform media sosial seharusnya ditutup secara permanen oleh kementerian komunikasi."
      },
      {
        "key": "B",
        "text": "Ruang gema digital yang terpolarisasi dapat mengancam kualitas pertimbangan demokratis dan kohesi sosial dalam masyarakat."
      },
      {
        "key": "C",
        "text": "Pengguna media sosial tidak memiliki kemampuan nalar sama sekali dalam menyaring berita palsu."
      },
      {
        "key": "D",
        "text": "Konten bernada netral tidak akan pernah dibaca oleh generasi muda di era kecerdasan buatan."
      },
      {
        "key": "E",
        "text": "Polarisasi ruang publik merupakan fenomena alami yang tidak memiliki konsekuensi politik apa pun."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Asumsi implisit adalah fondasi pemikiran yang tidak diucapkan secara eksplisit namun menjadi alasan logis di balik keprihatinan penulis. Penulis khawatir akan polarisasi karena ia meyakini dialog rasional sangat penting bagi kesehatan tatanan demokrasi dan kehidupan sosial.",
    "quickTrick": "👑 Metode The King GO: Tanyakan: 'Mengapa penulis begitu peduli dengan isu ini?' Jawabannya adalah asumsi nilai (value assumption) yang diyakininya."
  },
  {
    "id": "bimbel_lit_indo_075",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Analisis Hubungan Kausalitas Teks",
    "difficulty": "HOTS",
    "stimulus": "Ekosistem lahan gambut menyimpan cadangan karbon terestrial global dua kali lipat lebih banyak daripada seluruh biomassa hutan di dunia. Ketika lahan gambut dikeringkan melalui pembuatan kanal drainase untuk perkebunan monokultur, lapisan gambut menjadi sangat rentan teroksidasi dan terbakar. Kebakaran gambut melepaskan jutaan ton gas rumah kaca serta menghasilkan kabut asap pekat yang melumpuhkan aktivitas ekonomi regional.",
    "question": "Hubungan sebab-akibat yang PALING TEPAT digambarkan oleh teks adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kebakaran gambut menyebabkan terbentuknya kanal drainase baru di sekitar perkebunan."
      },
      {
        "key": "B",
        "text": "Biomassa hutan tropis menyerap seluruh emisi karbon yang dihasilkan dari kebakaran gambut."
      },
      {
        "key": "C",
        "text": "Aktivitas ekonomi regional pulih seketika setelah lahan gambut dikeringkan sepenuhnya."
      },
      {
        "key": "D",
        "text": "Lapisan gambut terhindar dari proses oksidasi jika berada dalam kondisi tanah yang kering."
      },
      {
        "key": "E",
        "text": "Pembuatan kanal drainase menyebabkan penurunan kadar air gambut yang memicu kerentanan kebakaran hebat dan pelepasan karbon masif."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Rantai kausalitas: Drainase kanal -> gambut mengering dan teroksidasi -> mudah terbakar -> polusi asap dan pelepasan emisi karbon.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Susun urutan kronologis kausalitas: Faktor pemicu -> Kondisi perantara -> Dampak akhir."
  },
  {
    "id": "bimbel_lit_indo_076",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Sikap Penulis (Author's Tone) & Evaluasi Wacana",
    "difficulty": "Sedang",
    "stimulus": "Sorgum dan sagu dinilai para ahli pangan sebagai komoditas masa depan yang mampu memperkuat kedaulatan pangan nasional. Keduanya memiliki indeks glikemik yang relatif rendah serta ketahanan tinggi terhadap kondisi tanah marjinal dan anomali cuaca ekstrem akibat El Nino. Kendati demikian, persepsi masyarakat yang masih menganggap beras sebagai 'status sosial' utama menjadi tantangan kultural yang harus dijembatani melalui kampanye gastronomi kreatif.",
    "question": "Sikap atau nada (tone) penulis dalam wacana di atas dapat dikategorikan sebagai...",
    "options": [
      {
        "key": "A",
        "text": "Pesimistis dan skeptis terhadap masa depan pertanian nasional."
      },
      {
        "key": "B",
        "text": "Sarkastis dan meremehkan preferensi konsumsi masyarakat tradisional."
      },
      {
        "key": "C",
        "text": "Objektif dan konstruktif terhadap prospek diversifikasi pangan alternatif."
      },
      {
        "key": "D",
        "text": "Emosional dan menuntut pelarangan total konsumsi beras putih."
      },
      {
        "key": "E",
        "text": "Apatis dan tidak peduli terhadap ancaman krisis pangan global."
      }
    ],
    "correctAnswer": "C",
    "explanation": "Penulis menyajikan fakta agronomi sorgum dan sagu secara ilmiah (objektif) sembari mengakui tantangan budaya dan menyarankan solusi kampanye gastronomi yang positif (konstruktif).",
    "quickTrick": "🚀 Brain Academy Fast Trick: Perhatikan pilihan kata: tidak ada kata-kata menghakimi yang sinis; nada tulisan analitis dan solutif."
  },
  {
    "id": "bimbel_lit_indo_077",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Literasi Teks Ilmiah & Kebijakan",
    "difficulty": "HOTS",
    "stimulus": "Transisi energi di sektor penerbangan komersial global menuntut adopsi bahan bakar ramah lingkungan (Sustainable Aviation Fuel / SAF). Indonesia, sebagai produsen minyak kelapa sawit terbesar di dunia, memiliki posisi strategis dalam rantai pasok bioavtur. Namun, tantangan sertifikasi keberlanjutan Roundtable on Sustainable Biomass (RSB) dan persaingan pemanfaatan minyak nabati untuk kebutuhan pangan domestik menjadi hambatan struktural yang harus diselesaikan melalui harmonisasi regulasi lintas kementerian.",
    "question": "Tujuan utama penulis menyampaikan wacana tersebut adalah untuk...",
    "options": [
      {
        "key": "A",
        "text": "Menyoroti potensi besar Indonesia dalam bioavtur sekaligus menggarisbawahi urgensi penyelesaian regulasi dan sertifikasi keberlanjutan."
      },
      {
        "key": "B",
        "text": "Mendesak maskapai penerbangan nasional menurunkan harga tiket penerbangan domestik."
      },
      {
        "key": "C",
        "text": "Mengkritik keras penggunaan kelapa sawit dalam produksi bahan bakar nabati."
      },
      {
        "key": "D",
        "text": "Memaparkan keunggulan teknologi mesin jet yang mengonsumsi bahan bakar konvensional."
      },
      {
        "key": "E",
        "text": "Menyatakan bahwa sertifikasi RSB tidak memiliki signifikansi dalam perdagangan global."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tujuan penulisan teks analitis: Penulis mengidentifikasi peluang strategis Indonesia (potensi bioavtur) dan secara bersamaan memaparkan hambatan nyata (sertifikasi dan regulasi) agar tercipta solusi harmonisasi kebijakan.",
    "quickTrick": "🌟 NF Smart Solution: Tujuan teks argumentatif/analitis selalu merangkum problem statement dan arah solusi yang ditawarkan."
  },
  {
    "id": "bimbel_lit_indo_078",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Asumsi Implisit & Penalaran Kritis",
    "difficulty": "Sedang",
    "stimulus": "Pemanfaatan algoritma pembelajaran mesin pada platform media sosial telah dirancang untuk memaksimalkan retensi atensi pengguna. Konten yang memicu reaksi emosional kuat—terutama kemarahan atau kegelisahan—cenderung diamplifikasi oleh algoritma hingga memperoleh tingkat keterlibatan lima kali lebih tinggi dibandingkan konten bernada netral. Dampaknya, ruang publik digital kian terpolarisasi menjadi ruang gema (echo chamber) yang mengikis kapasitas dialog rasional masyarakat.",
    "question": "Berdasarkan wacana di atas, asumsi implisit yang mendasari kekhawatiran penulis terhadap algoritma media sosial adalah...",
    "options": [
      {
        "key": "A",
        "text": "Semua platform media sosial seharusnya ditutup secara permanen oleh kementerian komunikasi."
      },
      {
        "key": "B",
        "text": "Pengguna media sosial tidak memiliki kemampuan nalar sama sekali dalam menyaring berita palsu."
      },
      {
        "key": "C",
        "text": "Konten bernada netral tidak akan pernah dibaca oleh generasi muda di era kecerdasan buatan."
      },
      {
        "key": "D",
        "text": "Ruang gema digital yang terpolarisasi dapat mengancam kualitas pertimbangan demokratis dan kohesi sosial dalam masyarakat."
      },
      {
        "key": "E",
        "text": "Polarisasi ruang publik merupakan fenomena alami yang tidak memiliki konsekuensi politik apa pun."
      }
    ],
    "correctAnswer": "D",
    "explanation": "Asumsi implisit adalah fondasi pemikiran yang tidak diucapkan secara eksplisit namun menjadi alasan logis di balik keprihatinan penulis. Penulis khawatir akan polarisasi karena ia meyakini dialog rasional sangat penting bagi kesehatan tatanan demokrasi dan kehidupan sosial.",
    "quickTrick": "🧠 Zenius Core Logic: Tanyakan: 'Mengapa penulis begitu peduli dengan isu ini?' Jawabannya adalah asumsi nilai (value assumption) yang diyakininya."
  },
  {
    "id": "bimbel_lit_indo_079",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Analisis Hubungan Kausalitas Teks",
    "difficulty": "HOTS",
    "stimulus": "Ekosistem lahan gambut menyimpan cadangan karbon terestrial global dua kali lipat lebih banyak daripada seluruh biomassa hutan di dunia. Ketika lahan gambut dikeringkan melalui pembuatan kanal drainase untuk perkebunan monokultur, lapisan gambut menjadi sangat rentan teroksidasi dan terbakar. Kebakaran gambut melepaskan jutaan ton gas rumah kaca serta menghasilkan kabut asap pekat yang melumpuhkan aktivitas ekonomi regional.",
    "question": "Hubungan sebab-akibat yang PALING TEPAT digambarkan oleh teks adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kebakaran gambut menyebabkan terbentuknya kanal drainase baru di sekitar perkebunan."
      },
      {
        "key": "B",
        "text": "Pembuatan kanal drainase menyebabkan penurunan kadar air gambut yang memicu kerentanan kebakaran hebat dan pelepasan karbon masif."
      },
      {
        "key": "C",
        "text": "Biomassa hutan tropis menyerap seluruh emisi karbon yang dihasilkan dari kebakaran gambut."
      },
      {
        "key": "D",
        "text": "Aktivitas ekonomi regional pulih seketika setelah lahan gambut dikeringkan sepenuhnya."
      },
      {
        "key": "E",
        "text": "Lapisan gambut terhindar dari proses oksidasi jika berada dalam kondisi tanah yang kering."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Rantai kausalitas: Drainase kanal -> gambut mengering dan teroksidasi -> mudah terbakar -> polusi asap dan pelepasan emisi karbon.",
    "quickTrick": "💡 INTEN Reading Strategy: Susun urutan kronologis kausalitas: Faktor pemicu -> Kondisi perantara -> Dampak akhir."
  },
  {
    "id": "bimbel_lit_indo_080",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "lit_indo",
    "subtestName": "Literasi Bahasa Indonesia",
    "category": "Sikap Penulis (Author's Tone) & Evaluasi Wacana",
    "difficulty": "Sedang",
    "stimulus": "Sorgum dan sagu dinilai para ahli pangan sebagai komoditas masa depan yang mampu memperkuat kedaulatan pangan nasional. Keduanya memiliki indeks glikemik yang relatif rendah serta ketahanan tinggi terhadap kondisi tanah marjinal dan anomali cuaca ekstrem akibat El Nino. Kendati demikian, persepsi masyarakat yang masih menganggap beras sebagai 'status sosial' utama menjadi tantangan kultural yang harus dijembatani melalui kampanye gastronomi kreatif.",
    "question": "Sikap atau nada (tone) penulis dalam wacana di atas dapat dikategorikan sebagai...",
    "options": [
      {
        "key": "A",
        "text": "Pesimistis dan skeptis terhadap masa depan pertanian nasional."
      },
      {
        "key": "B",
        "text": "Sarkastis dan meremehkan preferensi konsumsi masyarakat tradisional."
      },
      {
        "key": "C",
        "text": "Emosional dan menuntut pelarangan total konsumsi beras putih."
      },
      {
        "key": "D",
        "text": "Apatis dan tidak peduli terhadap ancaman krisis pangan global."
      },
      {
        "key": "E",
        "text": "Objektif dan konstruktif terhadap prospek diversifikasi pangan alternatif."
      }
    ],
    "correctAnswer": "E",
    "explanation": "Penulis menyajikan fakta agronomi sorgum dan sagu secara ilmiah (objektif) sembari mengakui tantangan budaya dan menyarankan solusi kampanye gastronomi yang positif (konstruktif).",
    "quickTrick": "👑 Metode The King GO: Perhatikan pilihan kata: tidak ada kata-kata menghakimi yang sinis; nada tulisan analitis dan solutif."
  },
  {
    "id": "bimbel_lit_ing_001",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Reading Comprehension (Factual Retrieval)",
    "difficulty": "HOTS",
    "stimulus": "Quantum computing leverages the fundamental principles of quantum mechanics, specifically superposition and entanglement, to process complex data at speeds unimaginable with classical supercomputers. While classical bits represent information strictly as zeros or ones, quantum bits (qubits) can exist in multiple states simultaneously. This architectural paradigm shift holds immense promise for molecular modeling in drug discovery, optimizing global logistics networks, and breaking conventional RSA cryptographic protocols.",
    "question": "According to the passage, what is the fundamental feature distinguishing quantum computing from classical computing?",
    "options": [
      {
        "key": "A",
        "text": "The exclusive reliance on electrical circuits with higher voltage resistance."
      },
      {
        "key": "B",
        "text": "The ability of qubits to exist in multiple simultaneous states via superposition, unlike binary classical bits."
      },
      {
        "key": "C",
        "text": "The permanent immunity of quantum algorithms to any computational errors."
      },
      {
        "key": "D",
        "text": "The total replacement of biological molecules with synthetic silicon chips."
      },
      {
        "key": "E",
        "text": "The lower manufacturing cost of quantum microprocessors compared to PCs."
      }
    ],
    "correctAnswer": "B",
    "explanation": "The passage directly contrasts classical bits (which represent strictly zeros or ones) with qubits, which can exist in multiple states simultaneously due to quantum superposition.",
    "quickTrick": "👑 Metode The King GO: Look for the direct definition in the text: 'While classical bits represent strictly... qubits can exist in multiple states simultaneously.'"
  },
  {
    "id": "bimbel_lit_ing_002",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Vocabulary in Context",
    "difficulty": "Sedang",
    "stimulus": "Solid-state batteries (SSBs) represent the most anticipated technological breakthrough in electromobility. By replacing the flammable liquid or gel electrolyte found in conventional lithium-ion cells with a solid ceramic or polymer matrix, SSBs offer substantially higher energy density and reduced fire hazards. However, commercial mass production remains bottlenecked by interface resistance between electrodes and solid electrolytes during rapid charge-discharge cycles.",
    "question": "The word 'bottlenecked' in the passage is closest in meaning to...",
    "options": [
      {
        "key": "A",
        "text": "accelerated"
      },
      {
        "key": "B",
        "text": "terminated"
      },
      {
        "key": "C",
        "text": "authenticated"
      },
      {
        "key": "D",
        "text": "impeded or hindered"
      },
      {
        "key": "E",
        "text": "eliminated"
      }
    ],
    "correctAnswer": "D",
    "explanation": "In industrial and engineering contexts, 'bottlenecked' means restricted, slowed down, or hindered by an obstacle or limiting factor.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Context clue: 'However, commercial mass production remains... by interface resistance' denotes an obstacle/impediment."
  },
  {
    "id": "bimbel_lit_ing_003",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Critical Reading (Inference & Implication)",
    "difficulty": "HOTS",
    "stimulus": "Recent marine biological surveys indicate that microscopic plastic debris has infiltrated the lowest tiers of the aquatic food web. Zooplankton actively ingest microplastic particles, mistaking them for natural phytoplankton. Because plastics adsorb persistent organic pollutants from seawater, these toxic compounds biomagnify across successive trophic levels, ultimately accumulating in apex marine predators and commercially harvested fish consumed by humans.",
    "question": "It can be inferred from the passage that bioaccumulation of microplastics...",
    "options": [
      {
        "key": "A",
        "text": "poses an escalating ecological and health threat that extends from primary consumers all the way to humans."
      },
      {
        "key": "B",
        "text": "is completely neutralized once zooplankton digest the synthetic particles."
      },
      {
        "key": "C",
        "text": "affects only deep-sea creatures that dwell beyond the photic zone."
      },
      {
        "key": "D",
        "text": "has decreased significantly due to the rapid biodegradation of modern polymers."
      },
      {
        "key": "E",
        "text": "is restricted exclusively to predatory sharks and whales without reaching human diets."
      }
    ],
    "correctAnswer": "A",
    "explanation": "The text explains that microplastics adsorb toxins, biomagnify through trophic levels, and end up in apex predators and commercially harvested fish for humans, clearly indicating a systemic food chain hazard reaching human consumers.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Inference strategy: Synthesize the chain reaction from lowest tier (zooplankton) to highest tier (apex predators & humans)."
  },
  {
    "id": "bimbel_lit_ing_004",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Author's Tone & Rhetorical Purpose",
    "difficulty": "Sedang",
    "stimulus": "For decades, neuroscientists operated under the dogma that the adult human brain was structurally immutable after adolescence. Groundbreaking neuroimaging studies have thoroughly debunked this myth, proving that the brain exhibits neuroplasticity throughout life. By forming novel synaptic arborizations and pruning dormant pathways in response to cognitive challenges, the brain continually reorganizes its functional architecture.",
    "question": "What is the author's primary attitude toward the concept of neuroplasticity in adults?",
    "options": [
      {
        "key": "A",
        "text": "Skeptical and demanding further replication before accepting the theory."
      },
      {
        "key": "B",
        "text": "Nostalgic for classical neurological doctrines of the twentieth century."
      },
      {
        "key": "C",
        "text": "Supportive and confident in light of rigorous modern empirical evidence."
      },
      {
        "key": "D",
        "text": "Indifferent and detached regarding neurological discoveries."
      },
      {
        "key": "E",
        "text": "Cautious and fearful of the neurological implications on human memory."
      }
    ],
    "correctAnswer": "C",
    "explanation": "The author uses phrases like 'groundbreaking neuroimaging studies', 'thoroughly debunked this myth', and explains the phenomenon enthusiastically, demonstrating a confident, supportive stance backed by empirical science.",
    "quickTrick": "🌟 NF Smart Solution: Analyze adjectives: 'groundbreaking', 'thoroughly debunked' indicate strong affirmation and scientific validation."
  },
  {
    "id": "bimbel_lit_ing_005",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Reading Comprehension (Factual Retrieval)",
    "difficulty": "HOTS",
    "stimulus": "Quantum computing leverages the fundamental principles of quantum mechanics, specifically superposition and entanglement, to process complex data at speeds unimaginable with classical supercomputers. While classical bits represent information strictly as zeros or ones, quantum bits (qubits) can exist in multiple states simultaneously. This architectural paradigm shift holds immense promise for molecular modeling in drug discovery, optimizing global logistics networks, and breaking conventional RSA cryptographic protocols.",
    "question": "According to the passage, what is the fundamental feature distinguishing quantum computing from classical computing?",
    "options": [
      {
        "key": "A",
        "text": "The exclusive reliance on electrical circuits with higher voltage resistance."
      },
      {
        "key": "B",
        "text": "The permanent immunity of quantum algorithms to any computational errors."
      },
      {
        "key": "C",
        "text": "The total replacement of biological molecules with synthetic silicon chips."
      },
      {
        "key": "D",
        "text": "The lower manufacturing cost of quantum microprocessors compared to PCs."
      },
      {
        "key": "E",
        "text": "The ability of qubits to exist in multiple simultaneous states via superposition, unlike binary classical bits."
      }
    ],
    "correctAnswer": "E",
    "explanation": "The passage directly contrasts classical bits (which represent strictly zeros or ones) with qubits, which can exist in multiple states simultaneously due to quantum superposition.",
    "quickTrick": "🧠 Zenius Core Logic: Look for the direct definition in the text: 'While classical bits represent strictly... qubits can exist in multiple states simultaneously.'"
  },
  {
    "id": "bimbel_lit_ing_006",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Vocabulary in Context",
    "difficulty": "Sedang",
    "stimulus": "Solid-state batteries (SSBs) represent the most anticipated technological breakthrough in electromobility. By replacing the flammable liquid or gel electrolyte found in conventional lithium-ion cells with a solid ceramic or polymer matrix, SSBs offer substantially higher energy density and reduced fire hazards. However, commercial mass production remains bottlenecked by interface resistance between electrodes and solid electrolytes during rapid charge-discharge cycles.",
    "question": "The word 'bottlenecked' in the passage is closest in meaning to...",
    "options": [
      {
        "key": "A",
        "text": "accelerated"
      },
      {
        "key": "B",
        "text": "impeded or hindered"
      },
      {
        "key": "C",
        "text": "terminated"
      },
      {
        "key": "D",
        "text": "authenticated"
      },
      {
        "key": "E",
        "text": "eliminated"
      }
    ],
    "correctAnswer": "B",
    "explanation": "In industrial and engineering contexts, 'bottlenecked' means restricted, slowed down, or hindered by an obstacle or limiting factor.",
    "quickTrick": "💡 INTEN Reading Strategy: Context clue: 'However, commercial mass production remains... by interface resistance' denotes an obstacle/impediment."
  },
  {
    "id": "bimbel_lit_ing_007",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Critical Reading (Inference & Implication)",
    "difficulty": "HOTS",
    "stimulus": "Recent marine biological surveys indicate that microscopic plastic debris has infiltrated the lowest tiers of the aquatic food web. Zooplankton actively ingest microplastic particles, mistaking them for natural phytoplankton. Because plastics adsorb persistent organic pollutants from seawater, these toxic compounds biomagnify across successive trophic levels, ultimately accumulating in apex marine predators and commercially harvested fish consumed by humans.",
    "question": "It can be inferred from the passage that bioaccumulation of microplastics...",
    "options": [
      {
        "key": "A",
        "text": "is completely neutralized once zooplankton digest the synthetic particles."
      },
      {
        "key": "B",
        "text": "affects only deep-sea creatures that dwell beyond the photic zone."
      },
      {
        "key": "C",
        "text": "has decreased significantly due to the rapid biodegradation of modern polymers."
      },
      {
        "key": "D",
        "text": "poses an escalating ecological and health threat that extends from primary consumers all the way to humans."
      },
      {
        "key": "E",
        "text": "is restricted exclusively to predatory sharks and whales without reaching human diets."
      }
    ],
    "correctAnswer": "D",
    "explanation": "The text explains that microplastics adsorb toxins, biomagnify through trophic levels, and end up in apex predators and commercially harvested fish for humans, clearly indicating a systemic food chain hazard reaching human consumers.",
    "quickTrick": "👑 Metode The King GO: Inference strategy: Synthesize the chain reaction from lowest tier (zooplankton) to highest tier (apex predators & humans)."
  },
  {
    "id": "bimbel_lit_ing_008",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Author's Tone & Rhetorical Purpose",
    "difficulty": "Sedang",
    "stimulus": "For decades, neuroscientists operated under the dogma that the adult human brain was structurally immutable after adolescence. Groundbreaking neuroimaging studies have thoroughly debunked this myth, proving that the brain exhibits neuroplasticity throughout life. By forming novel synaptic arborizations and pruning dormant pathways in response to cognitive challenges, the brain continually reorganizes its functional architecture.",
    "question": "What is the author's primary attitude toward the concept of neuroplasticity in adults?",
    "options": [
      {
        "key": "A",
        "text": "Supportive and confident in light of rigorous modern empirical evidence."
      },
      {
        "key": "B",
        "text": "Skeptical and demanding further replication before accepting the theory."
      },
      {
        "key": "C",
        "text": "Nostalgic for classical neurological doctrines of the twentieth century."
      },
      {
        "key": "D",
        "text": "Indifferent and detached regarding neurological discoveries."
      },
      {
        "key": "E",
        "text": "Cautious and fearful of the neurological implications on human memory."
      }
    ],
    "correctAnswer": "A",
    "explanation": "The author uses phrases like 'groundbreaking neuroimaging studies', 'thoroughly debunked this myth', and explains the phenomenon enthusiastically, demonstrating a confident, supportive stance backed by empirical science.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Analyze adjectives: 'groundbreaking', 'thoroughly debunked' indicate strong affirmation and scientific validation."
  },
  {
    "id": "bimbel_lit_ing_009",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Reading Comprehension (Factual Retrieval)",
    "difficulty": "HOTS",
    "stimulus": "Quantum computing leverages the fundamental principles of quantum mechanics, specifically superposition and entanglement, to process complex data at speeds unimaginable with classical supercomputers. While classical bits represent information strictly as zeros or ones, quantum bits (qubits) can exist in multiple states simultaneously. This architectural paradigm shift holds immense promise for molecular modeling in drug discovery, optimizing global logistics networks, and breaking conventional RSA cryptographic protocols.",
    "question": "According to the passage, what is the fundamental feature distinguishing quantum computing from classical computing?",
    "options": [
      {
        "key": "A",
        "text": "The exclusive reliance on electrical circuits with higher voltage resistance."
      },
      {
        "key": "B",
        "text": "The permanent immunity of quantum algorithms to any computational errors."
      },
      {
        "key": "C",
        "text": "The ability of qubits to exist in multiple simultaneous states via superposition, unlike binary classical bits."
      },
      {
        "key": "D",
        "text": "The total replacement of biological molecules with synthetic silicon chips."
      },
      {
        "key": "E",
        "text": "The lower manufacturing cost of quantum microprocessors compared to PCs."
      }
    ],
    "correctAnswer": "C",
    "explanation": "The passage directly contrasts classical bits (which represent strictly zeros or ones) with qubits, which can exist in multiple states simultaneously due to quantum superposition.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Look for the direct definition in the text: 'While classical bits represent strictly... qubits can exist in multiple states simultaneously.'"
  },
  {
    "id": "bimbel_lit_ing_010",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Vocabulary in Context",
    "difficulty": "Sedang",
    "stimulus": "Solid-state batteries (SSBs) represent the most anticipated technological breakthrough in electromobility. By replacing the flammable liquid or gel electrolyte found in conventional lithium-ion cells with a solid ceramic or polymer matrix, SSBs offer substantially higher energy density and reduced fire hazards. However, commercial mass production remains bottlenecked by interface resistance between electrodes and solid electrolytes during rapid charge-discharge cycles.",
    "question": "The word 'bottlenecked' in the passage is closest in meaning to...",
    "options": [
      {
        "key": "A",
        "text": "accelerated"
      },
      {
        "key": "B",
        "text": "terminated"
      },
      {
        "key": "C",
        "text": "authenticated"
      },
      {
        "key": "D",
        "text": "eliminated"
      },
      {
        "key": "E",
        "text": "impeded or hindered"
      }
    ],
    "correctAnswer": "E",
    "explanation": "In industrial and engineering contexts, 'bottlenecked' means restricted, slowed down, or hindered by an obstacle or limiting factor.",
    "quickTrick": "🌟 NF Smart Solution: Context clue: 'However, commercial mass production remains... by interface resistance' denotes an obstacle/impediment."
  },
  {
    "id": "bimbel_lit_ing_011",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Critical Reading (Inference & Implication)",
    "difficulty": "HOTS",
    "stimulus": "Recent marine biological surveys indicate that microscopic plastic debris has infiltrated the lowest tiers of the aquatic food web. Zooplankton actively ingest microplastic particles, mistaking them for natural phytoplankton. Because plastics adsorb persistent organic pollutants from seawater, these toxic compounds biomagnify across successive trophic levels, ultimately accumulating in apex marine predators and commercially harvested fish consumed by humans.",
    "question": "It can be inferred from the passage that bioaccumulation of microplastics...",
    "options": [
      {
        "key": "A",
        "text": "is completely neutralized once zooplankton digest the synthetic particles."
      },
      {
        "key": "B",
        "text": "poses an escalating ecological and health threat that extends from primary consumers all the way to humans."
      },
      {
        "key": "C",
        "text": "affects only deep-sea creatures that dwell beyond the photic zone."
      },
      {
        "key": "D",
        "text": "has decreased significantly due to the rapid biodegradation of modern polymers."
      },
      {
        "key": "E",
        "text": "is restricted exclusively to predatory sharks and whales without reaching human diets."
      }
    ],
    "correctAnswer": "B",
    "explanation": "The text explains that microplastics adsorb toxins, biomagnify through trophic levels, and end up in apex predators and commercially harvested fish for humans, clearly indicating a systemic food chain hazard reaching human consumers.",
    "quickTrick": "🧠 Zenius Core Logic: Inference strategy: Synthesize the chain reaction from lowest tier (zooplankton) to highest tier (apex predators & humans)."
  },
  {
    "id": "bimbel_lit_ing_012",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Author's Tone & Rhetorical Purpose",
    "difficulty": "Sedang",
    "stimulus": "For decades, neuroscientists operated under the dogma that the adult human brain was structurally immutable after adolescence. Groundbreaking neuroimaging studies have thoroughly debunked this myth, proving that the brain exhibits neuroplasticity throughout life. By forming novel synaptic arborizations and pruning dormant pathways in response to cognitive challenges, the brain continually reorganizes its functional architecture.",
    "question": "What is the author's primary attitude toward the concept of neuroplasticity in adults?",
    "options": [
      {
        "key": "A",
        "text": "Skeptical and demanding further replication before accepting the theory."
      },
      {
        "key": "B",
        "text": "Nostalgic for classical neurological doctrines of the twentieth century."
      },
      {
        "key": "C",
        "text": "Indifferent and detached regarding neurological discoveries."
      },
      {
        "key": "D",
        "text": "Supportive and confident in light of rigorous modern empirical evidence."
      },
      {
        "key": "E",
        "text": "Cautious and fearful of the neurological implications on human memory."
      }
    ],
    "correctAnswer": "D",
    "explanation": "The author uses phrases like 'groundbreaking neuroimaging studies', 'thoroughly debunked this myth', and explains the phenomenon enthusiastically, demonstrating a confident, supportive stance backed by empirical science.",
    "quickTrick": "💡 INTEN Reading Strategy: Analyze adjectives: 'groundbreaking', 'thoroughly debunked' indicate strong affirmation and scientific validation."
  },
  {
    "id": "bimbel_lit_ing_013",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Reading Comprehension (Factual Retrieval)",
    "difficulty": "HOTS",
    "stimulus": "Quantum computing leverages the fundamental principles of quantum mechanics, specifically superposition and entanglement, to process complex data at speeds unimaginable with classical supercomputers. While classical bits represent information strictly as zeros or ones, quantum bits (qubits) can exist in multiple states simultaneously. This architectural paradigm shift holds immense promise for molecular modeling in drug discovery, optimizing global logistics networks, and breaking conventional RSA cryptographic protocols.",
    "question": "According to the passage, what is the fundamental feature distinguishing quantum computing from classical computing?",
    "options": [
      {
        "key": "A",
        "text": "The ability of qubits to exist in multiple simultaneous states via superposition, unlike binary classical bits."
      },
      {
        "key": "B",
        "text": "The exclusive reliance on electrical circuits with higher voltage resistance."
      },
      {
        "key": "C",
        "text": "The permanent immunity of quantum algorithms to any computational errors."
      },
      {
        "key": "D",
        "text": "The total replacement of biological molecules with synthetic silicon chips."
      },
      {
        "key": "E",
        "text": "The lower manufacturing cost of quantum microprocessors compared to PCs."
      }
    ],
    "correctAnswer": "A",
    "explanation": "The passage directly contrasts classical bits (which represent strictly zeros or ones) with qubits, which can exist in multiple states simultaneously due to quantum superposition.",
    "quickTrick": "👑 Metode The King GO: Look for the direct definition in the text: 'While classical bits represent strictly... qubits can exist in multiple states simultaneously.'"
  },
  {
    "id": "bimbel_lit_ing_014",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Vocabulary in Context",
    "difficulty": "Sedang",
    "stimulus": "Solid-state batteries (SSBs) represent the most anticipated technological breakthrough in electromobility. By replacing the flammable liquid or gel electrolyte found in conventional lithium-ion cells with a solid ceramic or polymer matrix, SSBs offer substantially higher energy density and reduced fire hazards. However, commercial mass production remains bottlenecked by interface resistance between electrodes and solid electrolytes during rapid charge-discharge cycles.",
    "question": "The word 'bottlenecked' in the passage is closest in meaning to...",
    "options": [
      {
        "key": "A",
        "text": "accelerated"
      },
      {
        "key": "B",
        "text": "terminated"
      },
      {
        "key": "C",
        "text": "impeded or hindered"
      },
      {
        "key": "D",
        "text": "authenticated"
      },
      {
        "key": "E",
        "text": "eliminated"
      }
    ],
    "correctAnswer": "C",
    "explanation": "In industrial and engineering contexts, 'bottlenecked' means restricted, slowed down, or hindered by an obstacle or limiting factor.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Context clue: 'However, commercial mass production remains... by interface resistance' denotes an obstacle/impediment."
  },
  {
    "id": "bimbel_lit_ing_015",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Critical Reading (Inference & Implication)",
    "difficulty": "HOTS",
    "stimulus": "Recent marine biological surveys indicate that microscopic plastic debris has infiltrated the lowest tiers of the aquatic food web. Zooplankton actively ingest microplastic particles, mistaking them for natural phytoplankton. Because plastics adsorb persistent organic pollutants from seawater, these toxic compounds biomagnify across successive trophic levels, ultimately accumulating in apex marine predators and commercially harvested fish consumed by humans.",
    "question": "It can be inferred from the passage that bioaccumulation of microplastics...",
    "options": [
      {
        "key": "A",
        "text": "is completely neutralized once zooplankton digest the synthetic particles."
      },
      {
        "key": "B",
        "text": "affects only deep-sea creatures that dwell beyond the photic zone."
      },
      {
        "key": "C",
        "text": "has decreased significantly due to the rapid biodegradation of modern polymers."
      },
      {
        "key": "D",
        "text": "is restricted exclusively to predatory sharks and whales without reaching human diets."
      },
      {
        "key": "E",
        "text": "poses an escalating ecological and health threat that extends from primary consumers all the way to humans."
      }
    ],
    "correctAnswer": "E",
    "explanation": "The text explains that microplastics adsorb toxins, biomagnify through trophic levels, and end up in apex predators and commercially harvested fish for humans, clearly indicating a systemic food chain hazard reaching human consumers.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Inference strategy: Synthesize the chain reaction from lowest tier (zooplankton) to highest tier (apex predators & humans)."
  },
  {
    "id": "bimbel_lit_ing_016",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Author's Tone & Rhetorical Purpose",
    "difficulty": "Sedang",
    "stimulus": "For decades, neuroscientists operated under the dogma that the adult human brain was structurally immutable after adolescence. Groundbreaking neuroimaging studies have thoroughly debunked this myth, proving that the brain exhibits neuroplasticity throughout life. By forming novel synaptic arborizations and pruning dormant pathways in response to cognitive challenges, the brain continually reorganizes its functional architecture.",
    "question": "What is the author's primary attitude toward the concept of neuroplasticity in adults?",
    "options": [
      {
        "key": "A",
        "text": "Skeptical and demanding further replication before accepting the theory."
      },
      {
        "key": "B",
        "text": "Supportive and confident in light of rigorous modern empirical evidence."
      },
      {
        "key": "C",
        "text": "Nostalgic for classical neurological doctrines of the twentieth century."
      },
      {
        "key": "D",
        "text": "Indifferent and detached regarding neurological discoveries."
      },
      {
        "key": "E",
        "text": "Cautious and fearful of the neurological implications on human memory."
      }
    ],
    "correctAnswer": "B",
    "explanation": "The author uses phrases like 'groundbreaking neuroimaging studies', 'thoroughly debunked this myth', and explains the phenomenon enthusiastically, demonstrating a confident, supportive stance backed by empirical science.",
    "quickTrick": "🌟 NF Smart Solution: Analyze adjectives: 'groundbreaking', 'thoroughly debunked' indicate strong affirmation and scientific validation."
  },
  {
    "id": "bimbel_lit_ing_017",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Reading Comprehension (Factual Retrieval)",
    "difficulty": "HOTS",
    "stimulus": "Quantum computing leverages the fundamental principles of quantum mechanics, specifically superposition and entanglement, to process complex data at speeds unimaginable with classical supercomputers. While classical bits represent information strictly as zeros or ones, quantum bits (qubits) can exist in multiple states simultaneously. This architectural paradigm shift holds immense promise for molecular modeling in drug discovery, optimizing global logistics networks, and breaking conventional RSA cryptographic protocols.",
    "question": "According to the passage, what is the fundamental feature distinguishing quantum computing from classical computing?",
    "options": [
      {
        "key": "A",
        "text": "The exclusive reliance on electrical circuits with higher voltage resistance."
      },
      {
        "key": "B",
        "text": "The permanent immunity of quantum algorithms to any computational errors."
      },
      {
        "key": "C",
        "text": "The total replacement of biological molecules with synthetic silicon chips."
      },
      {
        "key": "D",
        "text": "The ability of qubits to exist in multiple simultaneous states via superposition, unlike binary classical bits."
      },
      {
        "key": "E",
        "text": "The lower manufacturing cost of quantum microprocessors compared to PCs."
      }
    ],
    "correctAnswer": "D",
    "explanation": "The passage directly contrasts classical bits (which represent strictly zeros or ones) with qubits, which can exist in multiple states simultaneously due to quantum superposition.",
    "quickTrick": "🧠 Zenius Core Logic: Look for the direct definition in the text: 'While classical bits represent strictly... qubits can exist in multiple states simultaneously.'"
  },
  {
    "id": "bimbel_lit_ing_018",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Vocabulary in Context",
    "difficulty": "Sedang",
    "stimulus": "Solid-state batteries (SSBs) represent the most anticipated technological breakthrough in electromobility. By replacing the flammable liquid or gel electrolyte found in conventional lithium-ion cells with a solid ceramic or polymer matrix, SSBs offer substantially higher energy density and reduced fire hazards. However, commercial mass production remains bottlenecked by interface resistance between electrodes and solid electrolytes during rapid charge-discharge cycles.",
    "question": "The word 'bottlenecked' in the passage is closest in meaning to...",
    "options": [
      {
        "key": "A",
        "text": "impeded or hindered"
      },
      {
        "key": "B",
        "text": "accelerated"
      },
      {
        "key": "C",
        "text": "terminated"
      },
      {
        "key": "D",
        "text": "authenticated"
      },
      {
        "key": "E",
        "text": "eliminated"
      }
    ],
    "correctAnswer": "A",
    "explanation": "In industrial and engineering contexts, 'bottlenecked' means restricted, slowed down, or hindered by an obstacle or limiting factor.",
    "quickTrick": "💡 INTEN Reading Strategy: Context clue: 'However, commercial mass production remains... by interface resistance' denotes an obstacle/impediment."
  },
  {
    "id": "bimbel_lit_ing_019",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Critical Reading (Inference & Implication)",
    "difficulty": "HOTS",
    "stimulus": "Recent marine biological surveys indicate that microscopic plastic debris has infiltrated the lowest tiers of the aquatic food web. Zooplankton actively ingest microplastic particles, mistaking them for natural phytoplankton. Because plastics adsorb persistent organic pollutants from seawater, these toxic compounds biomagnify across successive trophic levels, ultimately accumulating in apex marine predators and commercially harvested fish consumed by humans.",
    "question": "It can be inferred from the passage that bioaccumulation of microplastics...",
    "options": [
      {
        "key": "A",
        "text": "is completely neutralized once zooplankton digest the synthetic particles."
      },
      {
        "key": "B",
        "text": "affects only deep-sea creatures that dwell beyond the photic zone."
      },
      {
        "key": "C",
        "text": "poses an escalating ecological and health threat that extends from primary consumers all the way to humans."
      },
      {
        "key": "D",
        "text": "has decreased significantly due to the rapid biodegradation of modern polymers."
      },
      {
        "key": "E",
        "text": "is restricted exclusively to predatory sharks and whales without reaching human diets."
      }
    ],
    "correctAnswer": "C",
    "explanation": "The text explains that microplastics adsorb toxins, biomagnify through trophic levels, and end up in apex predators and commercially harvested fish for humans, clearly indicating a systemic food chain hazard reaching human consumers.",
    "quickTrick": "👑 Metode The King GO: Inference strategy: Synthesize the chain reaction from lowest tier (zooplankton) to highest tier (apex predators & humans)."
  },
  {
    "id": "bimbel_lit_ing_020",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Author's Tone & Rhetorical Purpose",
    "difficulty": "Sedang",
    "stimulus": "For decades, neuroscientists operated under the dogma that the adult human brain was structurally immutable after adolescence. Groundbreaking neuroimaging studies have thoroughly debunked this myth, proving that the brain exhibits neuroplasticity throughout life. By forming novel synaptic arborizations and pruning dormant pathways in response to cognitive challenges, the brain continually reorganizes its functional architecture.",
    "question": "What is the author's primary attitude toward the concept of neuroplasticity in adults?",
    "options": [
      {
        "key": "A",
        "text": "Skeptical and demanding further replication before accepting the theory."
      },
      {
        "key": "B",
        "text": "Nostalgic for classical neurological doctrines of the twentieth century."
      },
      {
        "key": "C",
        "text": "Indifferent and detached regarding neurological discoveries."
      },
      {
        "key": "D",
        "text": "Cautious and fearful of the neurological implications on human memory."
      },
      {
        "key": "E",
        "text": "Supportive and confident in light of rigorous modern empirical evidence."
      }
    ],
    "correctAnswer": "E",
    "explanation": "The author uses phrases like 'groundbreaking neuroimaging studies', 'thoroughly debunked this myth', and explains the phenomenon enthusiastically, demonstrating a confident, supportive stance backed by empirical science.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Analyze adjectives: 'groundbreaking', 'thoroughly debunked' indicate strong affirmation and scientific validation."
  },
  {
    "id": "bimbel_lit_ing_021",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Reading Comprehension (Factual Retrieval)",
    "difficulty": "HOTS",
    "stimulus": "Quantum computing leverages the fundamental principles of quantum mechanics, specifically superposition and entanglement, to process complex data at speeds unimaginable with classical supercomputers. While classical bits represent information strictly as zeros or ones, quantum bits (qubits) can exist in multiple states simultaneously. This architectural paradigm shift holds immense promise for molecular modeling in drug discovery, optimizing global logistics networks, and breaking conventional RSA cryptographic protocols.",
    "question": "According to the passage, what is the fundamental feature distinguishing quantum computing from classical computing?",
    "options": [
      {
        "key": "A",
        "text": "The exclusive reliance on electrical circuits with higher voltage resistance."
      },
      {
        "key": "B",
        "text": "The ability of qubits to exist in multiple simultaneous states via superposition, unlike binary classical bits."
      },
      {
        "key": "C",
        "text": "The permanent immunity of quantum algorithms to any computational errors."
      },
      {
        "key": "D",
        "text": "The total replacement of biological molecules with synthetic silicon chips."
      },
      {
        "key": "E",
        "text": "The lower manufacturing cost of quantum microprocessors compared to PCs."
      }
    ],
    "correctAnswer": "B",
    "explanation": "The passage directly contrasts classical bits (which represent strictly zeros or ones) with qubits, which can exist in multiple states simultaneously due to quantum superposition.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Look for the direct definition in the text: 'While classical bits represent strictly... qubits can exist in multiple states simultaneously.'"
  },
  {
    "id": "bimbel_lit_ing_022",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Vocabulary in Context",
    "difficulty": "Sedang",
    "stimulus": "Solid-state batteries (SSBs) represent the most anticipated technological breakthrough in electromobility. By replacing the flammable liquid or gel electrolyte found in conventional lithium-ion cells with a solid ceramic or polymer matrix, SSBs offer substantially higher energy density and reduced fire hazards. However, commercial mass production remains bottlenecked by interface resistance between electrodes and solid electrolytes during rapid charge-discharge cycles.",
    "question": "The word 'bottlenecked' in the passage is closest in meaning to...",
    "options": [
      {
        "key": "A",
        "text": "accelerated"
      },
      {
        "key": "B",
        "text": "terminated"
      },
      {
        "key": "C",
        "text": "authenticated"
      },
      {
        "key": "D",
        "text": "impeded or hindered"
      },
      {
        "key": "E",
        "text": "eliminated"
      }
    ],
    "correctAnswer": "D",
    "explanation": "In industrial and engineering contexts, 'bottlenecked' means restricted, slowed down, or hindered by an obstacle or limiting factor.",
    "quickTrick": "🌟 NF Smart Solution: Context clue: 'However, commercial mass production remains... by interface resistance' denotes an obstacle/impediment."
  },
  {
    "id": "bimbel_lit_ing_023",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Critical Reading (Inference & Implication)",
    "difficulty": "HOTS",
    "stimulus": "Recent marine biological surveys indicate that microscopic plastic debris has infiltrated the lowest tiers of the aquatic food web. Zooplankton actively ingest microplastic particles, mistaking them for natural phytoplankton. Because plastics adsorb persistent organic pollutants from seawater, these toxic compounds biomagnify across successive trophic levels, ultimately accumulating in apex marine predators and commercially harvested fish consumed by humans.",
    "question": "It can be inferred from the passage that bioaccumulation of microplastics...",
    "options": [
      {
        "key": "A",
        "text": "poses an escalating ecological and health threat that extends from primary consumers all the way to humans."
      },
      {
        "key": "B",
        "text": "is completely neutralized once zooplankton digest the synthetic particles."
      },
      {
        "key": "C",
        "text": "affects only deep-sea creatures that dwell beyond the photic zone."
      },
      {
        "key": "D",
        "text": "has decreased significantly due to the rapid biodegradation of modern polymers."
      },
      {
        "key": "E",
        "text": "is restricted exclusively to predatory sharks and whales without reaching human diets."
      }
    ],
    "correctAnswer": "A",
    "explanation": "The text explains that microplastics adsorb toxins, biomagnify through trophic levels, and end up in apex predators and commercially harvested fish for humans, clearly indicating a systemic food chain hazard reaching human consumers.",
    "quickTrick": "🧠 Zenius Core Logic: Inference strategy: Synthesize the chain reaction from lowest tier (zooplankton) to highest tier (apex predators & humans)."
  },
  {
    "id": "bimbel_lit_ing_024",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Author's Tone & Rhetorical Purpose",
    "difficulty": "Sedang",
    "stimulus": "For decades, neuroscientists operated under the dogma that the adult human brain was structurally immutable after adolescence. Groundbreaking neuroimaging studies have thoroughly debunked this myth, proving that the brain exhibits neuroplasticity throughout life. By forming novel synaptic arborizations and pruning dormant pathways in response to cognitive challenges, the brain continually reorganizes its functional architecture.",
    "question": "What is the author's primary attitude toward the concept of neuroplasticity in adults?",
    "options": [
      {
        "key": "A",
        "text": "Skeptical and demanding further replication before accepting the theory."
      },
      {
        "key": "B",
        "text": "Nostalgic for classical neurological doctrines of the twentieth century."
      },
      {
        "key": "C",
        "text": "Supportive and confident in light of rigorous modern empirical evidence."
      },
      {
        "key": "D",
        "text": "Indifferent and detached regarding neurological discoveries."
      },
      {
        "key": "E",
        "text": "Cautious and fearful of the neurological implications on human memory."
      }
    ],
    "correctAnswer": "C",
    "explanation": "The author uses phrases like 'groundbreaking neuroimaging studies', 'thoroughly debunked this myth', and explains the phenomenon enthusiastically, demonstrating a confident, supportive stance backed by empirical science.",
    "quickTrick": "💡 INTEN Reading Strategy: Analyze adjectives: 'groundbreaking', 'thoroughly debunked' indicate strong affirmation and scientific validation."
  },
  {
    "id": "bimbel_lit_ing_025",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Reading Comprehension (Factual Retrieval)",
    "difficulty": "HOTS",
    "stimulus": "Quantum computing leverages the fundamental principles of quantum mechanics, specifically superposition and entanglement, to process complex data at speeds unimaginable with classical supercomputers. While classical bits represent information strictly as zeros or ones, quantum bits (qubits) can exist in multiple states simultaneously. This architectural paradigm shift holds immense promise for molecular modeling in drug discovery, optimizing global logistics networks, and breaking conventional RSA cryptographic protocols.",
    "question": "According to the passage, what is the fundamental feature distinguishing quantum computing from classical computing?",
    "options": [
      {
        "key": "A",
        "text": "The exclusive reliance on electrical circuits with higher voltage resistance."
      },
      {
        "key": "B",
        "text": "The permanent immunity of quantum algorithms to any computational errors."
      },
      {
        "key": "C",
        "text": "The total replacement of biological molecules with synthetic silicon chips."
      },
      {
        "key": "D",
        "text": "The lower manufacturing cost of quantum microprocessors compared to PCs."
      },
      {
        "key": "E",
        "text": "The ability of qubits to exist in multiple simultaneous states via superposition, unlike binary classical bits."
      }
    ],
    "correctAnswer": "E",
    "explanation": "The passage directly contrasts classical bits (which represent strictly zeros or ones) with qubits, which can exist in multiple states simultaneously due to quantum superposition.",
    "quickTrick": "👑 Metode The King GO: Look for the direct definition in the text: 'While classical bits represent strictly... qubits can exist in multiple states simultaneously.'"
  },
  {
    "id": "bimbel_lit_ing_026",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Vocabulary in Context",
    "difficulty": "Sedang",
    "stimulus": "Solid-state batteries (SSBs) represent the most anticipated technological breakthrough in electromobility. By replacing the flammable liquid or gel electrolyte found in conventional lithium-ion cells with a solid ceramic or polymer matrix, SSBs offer substantially higher energy density and reduced fire hazards. However, commercial mass production remains bottlenecked by interface resistance between electrodes and solid electrolytes during rapid charge-discharge cycles.",
    "question": "The word 'bottlenecked' in the passage is closest in meaning to...",
    "options": [
      {
        "key": "A",
        "text": "accelerated"
      },
      {
        "key": "B",
        "text": "impeded or hindered"
      },
      {
        "key": "C",
        "text": "terminated"
      },
      {
        "key": "D",
        "text": "authenticated"
      },
      {
        "key": "E",
        "text": "eliminated"
      }
    ],
    "correctAnswer": "B",
    "explanation": "In industrial and engineering contexts, 'bottlenecked' means restricted, slowed down, or hindered by an obstacle or limiting factor.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Context clue: 'However, commercial mass production remains... by interface resistance' denotes an obstacle/impediment."
  },
  {
    "id": "bimbel_lit_ing_027",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Critical Reading (Inference & Implication)",
    "difficulty": "HOTS",
    "stimulus": "Recent marine biological surveys indicate that microscopic plastic debris has infiltrated the lowest tiers of the aquatic food web. Zooplankton actively ingest microplastic particles, mistaking them for natural phytoplankton. Because plastics adsorb persistent organic pollutants from seawater, these toxic compounds biomagnify across successive trophic levels, ultimately accumulating in apex marine predators and commercially harvested fish consumed by humans.",
    "question": "It can be inferred from the passage that bioaccumulation of microplastics...",
    "options": [
      {
        "key": "A",
        "text": "is completely neutralized once zooplankton digest the synthetic particles."
      },
      {
        "key": "B",
        "text": "affects only deep-sea creatures that dwell beyond the photic zone."
      },
      {
        "key": "C",
        "text": "has decreased significantly due to the rapid biodegradation of modern polymers."
      },
      {
        "key": "D",
        "text": "poses an escalating ecological and health threat that extends from primary consumers all the way to humans."
      },
      {
        "key": "E",
        "text": "is restricted exclusively to predatory sharks and whales without reaching human diets."
      }
    ],
    "correctAnswer": "D",
    "explanation": "The text explains that microplastics adsorb toxins, biomagnify through trophic levels, and end up in apex predators and commercially harvested fish for humans, clearly indicating a systemic food chain hazard reaching human consumers.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Inference strategy: Synthesize the chain reaction from lowest tier (zooplankton) to highest tier (apex predators & humans)."
  },
  {
    "id": "bimbel_lit_ing_028",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Author's Tone & Rhetorical Purpose",
    "difficulty": "Sedang",
    "stimulus": "For decades, neuroscientists operated under the dogma that the adult human brain was structurally immutable after adolescence. Groundbreaking neuroimaging studies have thoroughly debunked this myth, proving that the brain exhibits neuroplasticity throughout life. By forming novel synaptic arborizations and pruning dormant pathways in response to cognitive challenges, the brain continually reorganizes its functional architecture.",
    "question": "What is the author's primary attitude toward the concept of neuroplasticity in adults?",
    "options": [
      {
        "key": "A",
        "text": "Supportive and confident in light of rigorous modern empirical evidence."
      },
      {
        "key": "B",
        "text": "Skeptical and demanding further replication before accepting the theory."
      },
      {
        "key": "C",
        "text": "Nostalgic for classical neurological doctrines of the twentieth century."
      },
      {
        "key": "D",
        "text": "Indifferent and detached regarding neurological discoveries."
      },
      {
        "key": "E",
        "text": "Cautious and fearful of the neurological implications on human memory."
      }
    ],
    "correctAnswer": "A",
    "explanation": "The author uses phrases like 'groundbreaking neuroimaging studies', 'thoroughly debunked this myth', and explains the phenomenon enthusiastically, demonstrating a confident, supportive stance backed by empirical science.",
    "quickTrick": "🌟 NF Smart Solution: Analyze adjectives: 'groundbreaking', 'thoroughly debunked' indicate strong affirmation and scientific validation."
  },
  {
    "id": "bimbel_lit_ing_029",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Reading Comprehension (Factual Retrieval)",
    "difficulty": "HOTS",
    "stimulus": "Quantum computing leverages the fundamental principles of quantum mechanics, specifically superposition and entanglement, to process complex data at speeds unimaginable with classical supercomputers. While classical bits represent information strictly as zeros or ones, quantum bits (qubits) can exist in multiple states simultaneously. This architectural paradigm shift holds immense promise for molecular modeling in drug discovery, optimizing global logistics networks, and breaking conventional RSA cryptographic protocols.",
    "question": "According to the passage, what is the fundamental feature distinguishing quantum computing from classical computing?",
    "options": [
      {
        "key": "A",
        "text": "The exclusive reliance on electrical circuits with higher voltage resistance."
      },
      {
        "key": "B",
        "text": "The permanent immunity of quantum algorithms to any computational errors."
      },
      {
        "key": "C",
        "text": "The ability of qubits to exist in multiple simultaneous states via superposition, unlike binary classical bits."
      },
      {
        "key": "D",
        "text": "The total replacement of biological molecules with synthetic silicon chips."
      },
      {
        "key": "E",
        "text": "The lower manufacturing cost of quantum microprocessors compared to PCs."
      }
    ],
    "correctAnswer": "C",
    "explanation": "The passage directly contrasts classical bits (which represent strictly zeros or ones) with qubits, which can exist in multiple states simultaneously due to quantum superposition.",
    "quickTrick": "🧠 Zenius Core Logic: Look for the direct definition in the text: 'While classical bits represent strictly... qubits can exist in multiple states simultaneously.'"
  },
  {
    "id": "bimbel_lit_ing_030",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Vocabulary in Context",
    "difficulty": "Sedang",
    "stimulus": "Solid-state batteries (SSBs) represent the most anticipated technological breakthrough in electromobility. By replacing the flammable liquid or gel electrolyte found in conventional lithium-ion cells with a solid ceramic or polymer matrix, SSBs offer substantially higher energy density and reduced fire hazards. However, commercial mass production remains bottlenecked by interface resistance between electrodes and solid electrolytes during rapid charge-discharge cycles.",
    "question": "The word 'bottlenecked' in the passage is closest in meaning to...",
    "options": [
      {
        "key": "A",
        "text": "accelerated"
      },
      {
        "key": "B",
        "text": "terminated"
      },
      {
        "key": "C",
        "text": "authenticated"
      },
      {
        "key": "D",
        "text": "eliminated"
      },
      {
        "key": "E",
        "text": "impeded or hindered"
      }
    ],
    "correctAnswer": "E",
    "explanation": "In industrial and engineering contexts, 'bottlenecked' means restricted, slowed down, or hindered by an obstacle or limiting factor.",
    "quickTrick": "💡 INTEN Reading Strategy: Context clue: 'However, commercial mass production remains... by interface resistance' denotes an obstacle/impediment."
  },
  {
    "id": "bimbel_lit_ing_031",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Critical Reading (Inference & Implication)",
    "difficulty": "HOTS",
    "stimulus": "Recent marine biological surveys indicate that microscopic plastic debris has infiltrated the lowest tiers of the aquatic food web. Zooplankton actively ingest microplastic particles, mistaking them for natural phytoplankton. Because plastics adsorb persistent organic pollutants from seawater, these toxic compounds biomagnify across successive trophic levels, ultimately accumulating in apex marine predators and commercially harvested fish consumed by humans.",
    "question": "It can be inferred from the passage that bioaccumulation of microplastics...",
    "options": [
      {
        "key": "A",
        "text": "is completely neutralized once zooplankton digest the synthetic particles."
      },
      {
        "key": "B",
        "text": "poses an escalating ecological and health threat that extends from primary consumers all the way to humans."
      },
      {
        "key": "C",
        "text": "affects only deep-sea creatures that dwell beyond the photic zone."
      },
      {
        "key": "D",
        "text": "has decreased significantly due to the rapid biodegradation of modern polymers."
      },
      {
        "key": "E",
        "text": "is restricted exclusively to predatory sharks and whales without reaching human diets."
      }
    ],
    "correctAnswer": "B",
    "explanation": "The text explains that microplastics adsorb toxins, biomagnify through trophic levels, and end up in apex predators and commercially harvested fish for humans, clearly indicating a systemic food chain hazard reaching human consumers.",
    "quickTrick": "👑 Metode The King GO: Inference strategy: Synthesize the chain reaction from lowest tier (zooplankton) to highest tier (apex predators & humans)."
  },
  {
    "id": "bimbel_lit_ing_032",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Author's Tone & Rhetorical Purpose",
    "difficulty": "Sedang",
    "stimulus": "For decades, neuroscientists operated under the dogma that the adult human brain was structurally immutable after adolescence. Groundbreaking neuroimaging studies have thoroughly debunked this myth, proving that the brain exhibits neuroplasticity throughout life. By forming novel synaptic arborizations and pruning dormant pathways in response to cognitive challenges, the brain continually reorganizes its functional architecture.",
    "question": "What is the author's primary attitude toward the concept of neuroplasticity in adults?",
    "options": [
      {
        "key": "A",
        "text": "Skeptical and demanding further replication before accepting the theory."
      },
      {
        "key": "B",
        "text": "Nostalgic for classical neurological doctrines of the twentieth century."
      },
      {
        "key": "C",
        "text": "Indifferent and detached regarding neurological discoveries."
      },
      {
        "key": "D",
        "text": "Supportive and confident in light of rigorous modern empirical evidence."
      },
      {
        "key": "E",
        "text": "Cautious and fearful of the neurological implications on human memory."
      }
    ],
    "correctAnswer": "D",
    "explanation": "The author uses phrases like 'groundbreaking neuroimaging studies', 'thoroughly debunked this myth', and explains the phenomenon enthusiastically, demonstrating a confident, supportive stance backed by empirical science.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Analyze adjectives: 'groundbreaking', 'thoroughly debunked' indicate strong affirmation and scientific validation."
  },
  {
    "id": "bimbel_lit_ing_033",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Reading Comprehension (Factual Retrieval)",
    "difficulty": "HOTS",
    "stimulus": "Quantum computing leverages the fundamental principles of quantum mechanics, specifically superposition and entanglement, to process complex data at speeds unimaginable with classical supercomputers. While classical bits represent information strictly as zeros or ones, quantum bits (qubits) can exist in multiple states simultaneously. This architectural paradigm shift holds immense promise for molecular modeling in drug discovery, optimizing global logistics networks, and breaking conventional RSA cryptographic protocols.",
    "question": "According to the passage, what is the fundamental feature distinguishing quantum computing from classical computing?",
    "options": [
      {
        "key": "A",
        "text": "The ability of qubits to exist in multiple simultaneous states via superposition, unlike binary classical bits."
      },
      {
        "key": "B",
        "text": "The exclusive reliance on electrical circuits with higher voltage resistance."
      },
      {
        "key": "C",
        "text": "The permanent immunity of quantum algorithms to any computational errors."
      },
      {
        "key": "D",
        "text": "The total replacement of biological molecules with synthetic silicon chips."
      },
      {
        "key": "E",
        "text": "The lower manufacturing cost of quantum microprocessors compared to PCs."
      }
    ],
    "correctAnswer": "A",
    "explanation": "The passage directly contrasts classical bits (which represent strictly zeros or ones) with qubits, which can exist in multiple states simultaneously due to quantum superposition.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Look for the direct definition in the text: 'While classical bits represent strictly... qubits can exist in multiple states simultaneously.'"
  },
  {
    "id": "bimbel_lit_ing_034",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Vocabulary in Context",
    "difficulty": "Sedang",
    "stimulus": "Solid-state batteries (SSBs) represent the most anticipated technological breakthrough in electromobility. By replacing the flammable liquid or gel electrolyte found in conventional lithium-ion cells with a solid ceramic or polymer matrix, SSBs offer substantially higher energy density and reduced fire hazards. However, commercial mass production remains bottlenecked by interface resistance between electrodes and solid electrolytes during rapid charge-discharge cycles.",
    "question": "The word 'bottlenecked' in the passage is closest in meaning to...",
    "options": [
      {
        "key": "A",
        "text": "accelerated"
      },
      {
        "key": "B",
        "text": "terminated"
      },
      {
        "key": "C",
        "text": "impeded or hindered"
      },
      {
        "key": "D",
        "text": "authenticated"
      },
      {
        "key": "E",
        "text": "eliminated"
      }
    ],
    "correctAnswer": "C",
    "explanation": "In industrial and engineering contexts, 'bottlenecked' means restricted, slowed down, or hindered by an obstacle or limiting factor.",
    "quickTrick": "🌟 NF Smart Solution: Context clue: 'However, commercial mass production remains... by interface resistance' denotes an obstacle/impediment."
  },
  {
    "id": "bimbel_lit_ing_035",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Critical Reading (Inference & Implication)",
    "difficulty": "HOTS",
    "stimulus": "Recent marine biological surveys indicate that microscopic plastic debris has infiltrated the lowest tiers of the aquatic food web. Zooplankton actively ingest microplastic particles, mistaking them for natural phytoplankton. Because plastics adsorb persistent organic pollutants from seawater, these toxic compounds biomagnify across successive trophic levels, ultimately accumulating in apex marine predators and commercially harvested fish consumed by humans.",
    "question": "It can be inferred from the passage that bioaccumulation of microplastics...",
    "options": [
      {
        "key": "A",
        "text": "is completely neutralized once zooplankton digest the synthetic particles."
      },
      {
        "key": "B",
        "text": "affects only deep-sea creatures that dwell beyond the photic zone."
      },
      {
        "key": "C",
        "text": "has decreased significantly due to the rapid biodegradation of modern polymers."
      },
      {
        "key": "D",
        "text": "is restricted exclusively to predatory sharks and whales without reaching human diets."
      },
      {
        "key": "E",
        "text": "poses an escalating ecological and health threat that extends from primary consumers all the way to humans."
      }
    ],
    "correctAnswer": "E",
    "explanation": "The text explains that microplastics adsorb toxins, biomagnify through trophic levels, and end up in apex predators and commercially harvested fish for humans, clearly indicating a systemic food chain hazard reaching human consumers.",
    "quickTrick": "🧠 Zenius Core Logic: Inference strategy: Synthesize the chain reaction from lowest tier (zooplankton) to highest tier (apex predators & humans)."
  },
  {
    "id": "bimbel_lit_ing_036",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Author's Tone & Rhetorical Purpose",
    "difficulty": "Sedang",
    "stimulus": "For decades, neuroscientists operated under the dogma that the adult human brain was structurally immutable after adolescence. Groundbreaking neuroimaging studies have thoroughly debunked this myth, proving that the brain exhibits neuroplasticity throughout life. By forming novel synaptic arborizations and pruning dormant pathways in response to cognitive challenges, the brain continually reorganizes its functional architecture.",
    "question": "What is the author's primary attitude toward the concept of neuroplasticity in adults?",
    "options": [
      {
        "key": "A",
        "text": "Skeptical and demanding further replication before accepting the theory."
      },
      {
        "key": "B",
        "text": "Supportive and confident in light of rigorous modern empirical evidence."
      },
      {
        "key": "C",
        "text": "Nostalgic for classical neurological doctrines of the twentieth century."
      },
      {
        "key": "D",
        "text": "Indifferent and detached regarding neurological discoveries."
      },
      {
        "key": "E",
        "text": "Cautious and fearful of the neurological implications on human memory."
      }
    ],
    "correctAnswer": "B",
    "explanation": "The author uses phrases like 'groundbreaking neuroimaging studies', 'thoroughly debunked this myth', and explains the phenomenon enthusiastically, demonstrating a confident, supportive stance backed by empirical science.",
    "quickTrick": "💡 INTEN Reading Strategy: Analyze adjectives: 'groundbreaking', 'thoroughly debunked' indicate strong affirmation and scientific validation."
  },
  {
    "id": "bimbel_lit_ing_037",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Reading Comprehension (Factual Retrieval)",
    "difficulty": "HOTS",
    "stimulus": "Quantum computing leverages the fundamental principles of quantum mechanics, specifically superposition and entanglement, to process complex data at speeds unimaginable with classical supercomputers. While classical bits represent information strictly as zeros or ones, quantum bits (qubits) can exist in multiple states simultaneously. This architectural paradigm shift holds immense promise for molecular modeling in drug discovery, optimizing global logistics networks, and breaking conventional RSA cryptographic protocols.",
    "question": "According to the passage, what is the fundamental feature distinguishing quantum computing from classical computing?",
    "options": [
      {
        "key": "A",
        "text": "The exclusive reliance on electrical circuits with higher voltage resistance."
      },
      {
        "key": "B",
        "text": "The permanent immunity of quantum algorithms to any computational errors."
      },
      {
        "key": "C",
        "text": "The total replacement of biological molecules with synthetic silicon chips."
      },
      {
        "key": "D",
        "text": "The ability of qubits to exist in multiple simultaneous states via superposition, unlike binary classical bits."
      },
      {
        "key": "E",
        "text": "The lower manufacturing cost of quantum microprocessors compared to PCs."
      }
    ],
    "correctAnswer": "D",
    "explanation": "The passage directly contrasts classical bits (which represent strictly zeros or ones) with qubits, which can exist in multiple states simultaneously due to quantum superposition.",
    "quickTrick": "👑 Metode The King GO: Look for the direct definition in the text: 'While classical bits represent strictly... qubits can exist in multiple states simultaneously.'"
  },
  {
    "id": "bimbel_lit_ing_038",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Vocabulary in Context",
    "difficulty": "Sedang",
    "stimulus": "Solid-state batteries (SSBs) represent the most anticipated technological breakthrough in electromobility. By replacing the flammable liquid or gel electrolyte found in conventional lithium-ion cells with a solid ceramic or polymer matrix, SSBs offer substantially higher energy density and reduced fire hazards. However, commercial mass production remains bottlenecked by interface resistance between electrodes and solid electrolytes during rapid charge-discharge cycles.",
    "question": "The word 'bottlenecked' in the passage is closest in meaning to...",
    "options": [
      {
        "key": "A",
        "text": "impeded or hindered"
      },
      {
        "key": "B",
        "text": "accelerated"
      },
      {
        "key": "C",
        "text": "terminated"
      },
      {
        "key": "D",
        "text": "authenticated"
      },
      {
        "key": "E",
        "text": "eliminated"
      }
    ],
    "correctAnswer": "A",
    "explanation": "In industrial and engineering contexts, 'bottlenecked' means restricted, slowed down, or hindered by an obstacle or limiting factor.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Context clue: 'However, commercial mass production remains... by interface resistance' denotes an obstacle/impediment."
  },
  {
    "id": "bimbel_lit_ing_039",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Critical Reading (Inference & Implication)",
    "difficulty": "HOTS",
    "stimulus": "Recent marine biological surveys indicate that microscopic plastic debris has infiltrated the lowest tiers of the aquatic food web. Zooplankton actively ingest microplastic particles, mistaking them for natural phytoplankton. Because plastics adsorb persistent organic pollutants from seawater, these toxic compounds biomagnify across successive trophic levels, ultimately accumulating in apex marine predators and commercially harvested fish consumed by humans.",
    "question": "It can be inferred from the passage that bioaccumulation of microplastics...",
    "options": [
      {
        "key": "A",
        "text": "is completely neutralized once zooplankton digest the synthetic particles."
      },
      {
        "key": "B",
        "text": "affects only deep-sea creatures that dwell beyond the photic zone."
      },
      {
        "key": "C",
        "text": "poses an escalating ecological and health threat that extends from primary consumers all the way to humans."
      },
      {
        "key": "D",
        "text": "has decreased significantly due to the rapid biodegradation of modern polymers."
      },
      {
        "key": "E",
        "text": "is restricted exclusively to predatory sharks and whales without reaching human diets."
      }
    ],
    "correctAnswer": "C",
    "explanation": "The text explains that microplastics adsorb toxins, biomagnify through trophic levels, and end up in apex predators and commercially harvested fish for humans, clearly indicating a systemic food chain hazard reaching human consumers.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Inference strategy: Synthesize the chain reaction from lowest tier (zooplankton) to highest tier (apex predators & humans)."
  },
  {
    "id": "bimbel_lit_ing_040",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Author's Tone & Rhetorical Purpose",
    "difficulty": "Sedang",
    "stimulus": "For decades, neuroscientists operated under the dogma that the adult human brain was structurally immutable after adolescence. Groundbreaking neuroimaging studies have thoroughly debunked this myth, proving that the brain exhibits neuroplasticity throughout life. By forming novel synaptic arborizations and pruning dormant pathways in response to cognitive challenges, the brain continually reorganizes its functional architecture.",
    "question": "What is the author's primary attitude toward the concept of neuroplasticity in adults?",
    "options": [
      {
        "key": "A",
        "text": "Skeptical and demanding further replication before accepting the theory."
      },
      {
        "key": "B",
        "text": "Nostalgic for classical neurological doctrines of the twentieth century."
      },
      {
        "key": "C",
        "text": "Indifferent and detached regarding neurological discoveries."
      },
      {
        "key": "D",
        "text": "Cautious and fearful of the neurological implications on human memory."
      },
      {
        "key": "E",
        "text": "Supportive and confident in light of rigorous modern empirical evidence."
      }
    ],
    "correctAnswer": "E",
    "explanation": "The author uses phrases like 'groundbreaking neuroimaging studies', 'thoroughly debunked this myth', and explains the phenomenon enthusiastically, demonstrating a confident, supportive stance backed by empirical science.",
    "quickTrick": "🌟 NF Smart Solution: Analyze adjectives: 'groundbreaking', 'thoroughly debunked' indicate strong affirmation and scientific validation."
  },
  {
    "id": "bimbel_lit_ing_041",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Reading Comprehension (Factual Retrieval)",
    "difficulty": "HOTS",
    "stimulus": "Quantum computing leverages the fundamental principles of quantum mechanics, specifically superposition and entanglement, to process complex data at speeds unimaginable with classical supercomputers. While classical bits represent information strictly as zeros or ones, quantum bits (qubits) can exist in multiple states simultaneously. This architectural paradigm shift holds immense promise for molecular modeling in drug discovery, optimizing global logistics networks, and breaking conventional RSA cryptographic protocols.",
    "question": "According to the passage, what is the fundamental feature distinguishing quantum computing from classical computing?",
    "options": [
      {
        "key": "A",
        "text": "The exclusive reliance on electrical circuits with higher voltage resistance."
      },
      {
        "key": "B",
        "text": "The ability of qubits to exist in multiple simultaneous states via superposition, unlike binary classical bits."
      },
      {
        "key": "C",
        "text": "The permanent immunity of quantum algorithms to any computational errors."
      },
      {
        "key": "D",
        "text": "The total replacement of biological molecules with synthetic silicon chips."
      },
      {
        "key": "E",
        "text": "The lower manufacturing cost of quantum microprocessors compared to PCs."
      }
    ],
    "correctAnswer": "B",
    "explanation": "The passage directly contrasts classical bits (which represent strictly zeros or ones) with qubits, which can exist in multiple states simultaneously due to quantum superposition.",
    "quickTrick": "🧠 Zenius Core Logic: Look for the direct definition in the text: 'While classical bits represent strictly... qubits can exist in multiple states simultaneously.'"
  },
  {
    "id": "bimbel_lit_ing_042",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Vocabulary in Context",
    "difficulty": "Sedang",
    "stimulus": "Solid-state batteries (SSBs) represent the most anticipated technological breakthrough in electromobility. By replacing the flammable liquid or gel electrolyte found in conventional lithium-ion cells with a solid ceramic or polymer matrix, SSBs offer substantially higher energy density and reduced fire hazards. However, commercial mass production remains bottlenecked by interface resistance between electrodes and solid electrolytes during rapid charge-discharge cycles.",
    "question": "The word 'bottlenecked' in the passage is closest in meaning to...",
    "options": [
      {
        "key": "A",
        "text": "accelerated"
      },
      {
        "key": "B",
        "text": "terminated"
      },
      {
        "key": "C",
        "text": "authenticated"
      },
      {
        "key": "D",
        "text": "impeded or hindered"
      },
      {
        "key": "E",
        "text": "eliminated"
      }
    ],
    "correctAnswer": "D",
    "explanation": "In industrial and engineering contexts, 'bottlenecked' means restricted, slowed down, or hindered by an obstacle or limiting factor.",
    "quickTrick": "💡 INTEN Reading Strategy: Context clue: 'However, commercial mass production remains... by interface resistance' denotes an obstacle/impediment."
  },
  {
    "id": "bimbel_lit_ing_043",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Critical Reading (Inference & Implication)",
    "difficulty": "HOTS",
    "stimulus": "Recent marine biological surveys indicate that microscopic plastic debris has infiltrated the lowest tiers of the aquatic food web. Zooplankton actively ingest microplastic particles, mistaking them for natural phytoplankton. Because plastics adsorb persistent organic pollutants from seawater, these toxic compounds biomagnify across successive trophic levels, ultimately accumulating in apex marine predators and commercially harvested fish consumed by humans.",
    "question": "It can be inferred from the passage that bioaccumulation of microplastics...",
    "options": [
      {
        "key": "A",
        "text": "poses an escalating ecological and health threat that extends from primary consumers all the way to humans."
      },
      {
        "key": "B",
        "text": "is completely neutralized once zooplankton digest the synthetic particles."
      },
      {
        "key": "C",
        "text": "affects only deep-sea creatures that dwell beyond the photic zone."
      },
      {
        "key": "D",
        "text": "has decreased significantly due to the rapid biodegradation of modern polymers."
      },
      {
        "key": "E",
        "text": "is restricted exclusively to predatory sharks and whales without reaching human diets."
      }
    ],
    "correctAnswer": "A",
    "explanation": "The text explains that microplastics adsorb toxins, biomagnify through trophic levels, and end up in apex predators and commercially harvested fish for humans, clearly indicating a systemic food chain hazard reaching human consumers.",
    "quickTrick": "👑 Metode The King GO: Inference strategy: Synthesize the chain reaction from lowest tier (zooplankton) to highest tier (apex predators & humans)."
  },
  {
    "id": "bimbel_lit_ing_044",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Author's Tone & Rhetorical Purpose",
    "difficulty": "Sedang",
    "stimulus": "For decades, neuroscientists operated under the dogma that the adult human brain was structurally immutable after adolescence. Groundbreaking neuroimaging studies have thoroughly debunked this myth, proving that the brain exhibits neuroplasticity throughout life. By forming novel synaptic arborizations and pruning dormant pathways in response to cognitive challenges, the brain continually reorganizes its functional architecture.",
    "question": "What is the author's primary attitude toward the concept of neuroplasticity in adults?",
    "options": [
      {
        "key": "A",
        "text": "Skeptical and demanding further replication before accepting the theory."
      },
      {
        "key": "B",
        "text": "Nostalgic for classical neurological doctrines of the twentieth century."
      },
      {
        "key": "C",
        "text": "Supportive and confident in light of rigorous modern empirical evidence."
      },
      {
        "key": "D",
        "text": "Indifferent and detached regarding neurological discoveries."
      },
      {
        "key": "E",
        "text": "Cautious and fearful of the neurological implications on human memory."
      }
    ],
    "correctAnswer": "C",
    "explanation": "The author uses phrases like 'groundbreaking neuroimaging studies', 'thoroughly debunked this myth', and explains the phenomenon enthusiastically, demonstrating a confident, supportive stance backed by empirical science.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Analyze adjectives: 'groundbreaking', 'thoroughly debunked' indicate strong affirmation and scientific validation."
  },
  {
    "id": "bimbel_lit_ing_045",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Reading Comprehension (Factual Retrieval)",
    "difficulty": "HOTS",
    "stimulus": "Quantum computing leverages the fundamental principles of quantum mechanics, specifically superposition and entanglement, to process complex data at speeds unimaginable with classical supercomputers. While classical bits represent information strictly as zeros or ones, quantum bits (qubits) can exist in multiple states simultaneously. This architectural paradigm shift holds immense promise for molecular modeling in drug discovery, optimizing global logistics networks, and breaking conventional RSA cryptographic protocols.",
    "question": "According to the passage, what is the fundamental feature distinguishing quantum computing from classical computing?",
    "options": [
      {
        "key": "A",
        "text": "The exclusive reliance on electrical circuits with higher voltage resistance."
      },
      {
        "key": "B",
        "text": "The permanent immunity of quantum algorithms to any computational errors."
      },
      {
        "key": "C",
        "text": "The total replacement of biological molecules with synthetic silicon chips."
      },
      {
        "key": "D",
        "text": "The lower manufacturing cost of quantum microprocessors compared to PCs."
      },
      {
        "key": "E",
        "text": "The ability of qubits to exist in multiple simultaneous states via superposition, unlike binary classical bits."
      }
    ],
    "correctAnswer": "E",
    "explanation": "The passage directly contrasts classical bits (which represent strictly zeros or ones) with qubits, which can exist in multiple states simultaneously due to quantum superposition.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Look for the direct definition in the text: 'While classical bits represent strictly... qubits can exist in multiple states simultaneously.'"
  },
  {
    "id": "bimbel_lit_ing_046",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Vocabulary in Context",
    "difficulty": "Sedang",
    "stimulus": "Solid-state batteries (SSBs) represent the most anticipated technological breakthrough in electromobility. By replacing the flammable liquid or gel electrolyte found in conventional lithium-ion cells with a solid ceramic or polymer matrix, SSBs offer substantially higher energy density and reduced fire hazards. However, commercial mass production remains bottlenecked by interface resistance between electrodes and solid electrolytes during rapid charge-discharge cycles.",
    "question": "The word 'bottlenecked' in the passage is closest in meaning to...",
    "options": [
      {
        "key": "A",
        "text": "accelerated"
      },
      {
        "key": "B",
        "text": "impeded or hindered"
      },
      {
        "key": "C",
        "text": "terminated"
      },
      {
        "key": "D",
        "text": "authenticated"
      },
      {
        "key": "E",
        "text": "eliminated"
      }
    ],
    "correctAnswer": "B",
    "explanation": "In industrial and engineering contexts, 'bottlenecked' means restricted, slowed down, or hindered by an obstacle or limiting factor.",
    "quickTrick": "🌟 NF Smart Solution: Context clue: 'However, commercial mass production remains... by interface resistance' denotes an obstacle/impediment."
  },
  {
    "id": "bimbel_lit_ing_047",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Critical Reading (Inference & Implication)",
    "difficulty": "HOTS",
    "stimulus": "Recent marine biological surveys indicate that microscopic plastic debris has infiltrated the lowest tiers of the aquatic food web. Zooplankton actively ingest microplastic particles, mistaking them for natural phytoplankton. Because plastics adsorb persistent organic pollutants from seawater, these toxic compounds biomagnify across successive trophic levels, ultimately accumulating in apex marine predators and commercially harvested fish consumed by humans.",
    "question": "It can be inferred from the passage that bioaccumulation of microplastics...",
    "options": [
      {
        "key": "A",
        "text": "is completely neutralized once zooplankton digest the synthetic particles."
      },
      {
        "key": "B",
        "text": "affects only deep-sea creatures that dwell beyond the photic zone."
      },
      {
        "key": "C",
        "text": "has decreased significantly due to the rapid biodegradation of modern polymers."
      },
      {
        "key": "D",
        "text": "poses an escalating ecological and health threat that extends from primary consumers all the way to humans."
      },
      {
        "key": "E",
        "text": "is restricted exclusively to predatory sharks and whales without reaching human diets."
      }
    ],
    "correctAnswer": "D",
    "explanation": "The text explains that microplastics adsorb toxins, biomagnify through trophic levels, and end up in apex predators and commercially harvested fish for humans, clearly indicating a systemic food chain hazard reaching human consumers.",
    "quickTrick": "🧠 Zenius Core Logic: Inference strategy: Synthesize the chain reaction from lowest tier (zooplankton) to highest tier (apex predators & humans)."
  },
  {
    "id": "bimbel_lit_ing_048",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Author's Tone & Rhetorical Purpose",
    "difficulty": "Sedang",
    "stimulus": "For decades, neuroscientists operated under the dogma that the adult human brain was structurally immutable after adolescence. Groundbreaking neuroimaging studies have thoroughly debunked this myth, proving that the brain exhibits neuroplasticity throughout life. By forming novel synaptic arborizations and pruning dormant pathways in response to cognitive challenges, the brain continually reorganizes its functional architecture.",
    "question": "What is the author's primary attitude toward the concept of neuroplasticity in adults?",
    "options": [
      {
        "key": "A",
        "text": "Supportive and confident in light of rigorous modern empirical evidence."
      },
      {
        "key": "B",
        "text": "Skeptical and demanding further replication before accepting the theory."
      },
      {
        "key": "C",
        "text": "Nostalgic for classical neurological doctrines of the twentieth century."
      },
      {
        "key": "D",
        "text": "Indifferent and detached regarding neurological discoveries."
      },
      {
        "key": "E",
        "text": "Cautious and fearful of the neurological implications on human memory."
      }
    ],
    "correctAnswer": "A",
    "explanation": "The author uses phrases like 'groundbreaking neuroimaging studies', 'thoroughly debunked this myth', and explains the phenomenon enthusiastically, demonstrating a confident, supportive stance backed by empirical science.",
    "quickTrick": "💡 INTEN Reading Strategy: Analyze adjectives: 'groundbreaking', 'thoroughly debunked' indicate strong affirmation and scientific validation."
  },
  {
    "id": "bimbel_lit_ing_049",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Reading Comprehension (Factual Retrieval)",
    "difficulty": "HOTS",
    "stimulus": "Quantum computing leverages the fundamental principles of quantum mechanics, specifically superposition and entanglement, to process complex data at speeds unimaginable with classical supercomputers. While classical bits represent information strictly as zeros or ones, quantum bits (qubits) can exist in multiple states simultaneously. This architectural paradigm shift holds immense promise for molecular modeling in drug discovery, optimizing global logistics networks, and breaking conventional RSA cryptographic protocols.",
    "question": "According to the passage, what is the fundamental feature distinguishing quantum computing from classical computing?",
    "options": [
      {
        "key": "A",
        "text": "The exclusive reliance on electrical circuits with higher voltage resistance."
      },
      {
        "key": "B",
        "text": "The permanent immunity of quantum algorithms to any computational errors."
      },
      {
        "key": "C",
        "text": "The ability of qubits to exist in multiple simultaneous states via superposition, unlike binary classical bits."
      },
      {
        "key": "D",
        "text": "The total replacement of biological molecules with synthetic silicon chips."
      },
      {
        "key": "E",
        "text": "The lower manufacturing cost of quantum microprocessors compared to PCs."
      }
    ],
    "correctAnswer": "C",
    "explanation": "The passage directly contrasts classical bits (which represent strictly zeros or ones) with qubits, which can exist in multiple states simultaneously due to quantum superposition.",
    "quickTrick": "👑 Metode The King GO: Look for the direct definition in the text: 'While classical bits represent strictly... qubits can exist in multiple states simultaneously.'"
  },
  {
    "id": "bimbel_lit_ing_050",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Vocabulary in Context",
    "difficulty": "Sedang",
    "stimulus": "Solid-state batteries (SSBs) represent the most anticipated technological breakthrough in electromobility. By replacing the flammable liquid or gel electrolyte found in conventional lithium-ion cells with a solid ceramic or polymer matrix, SSBs offer substantially higher energy density and reduced fire hazards. However, commercial mass production remains bottlenecked by interface resistance between electrodes and solid electrolytes during rapid charge-discharge cycles.",
    "question": "The word 'bottlenecked' in the passage is closest in meaning to...",
    "options": [
      {
        "key": "A",
        "text": "accelerated"
      },
      {
        "key": "B",
        "text": "terminated"
      },
      {
        "key": "C",
        "text": "authenticated"
      },
      {
        "key": "D",
        "text": "eliminated"
      },
      {
        "key": "E",
        "text": "impeded or hindered"
      }
    ],
    "correctAnswer": "E",
    "explanation": "In industrial and engineering contexts, 'bottlenecked' means restricted, slowed down, or hindered by an obstacle or limiting factor.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Context clue: 'However, commercial mass production remains... by interface resistance' denotes an obstacle/impediment."
  },
  {
    "id": "bimbel_lit_ing_051",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Critical Reading (Inference & Implication)",
    "difficulty": "HOTS",
    "stimulus": "Recent marine biological surveys indicate that microscopic plastic debris has infiltrated the lowest tiers of the aquatic food web. Zooplankton actively ingest microplastic particles, mistaking them for natural phytoplankton. Because plastics adsorb persistent organic pollutants from seawater, these toxic compounds biomagnify across successive trophic levels, ultimately accumulating in apex marine predators and commercially harvested fish consumed by humans.",
    "question": "It can be inferred from the passage that bioaccumulation of microplastics...",
    "options": [
      {
        "key": "A",
        "text": "is completely neutralized once zooplankton digest the synthetic particles."
      },
      {
        "key": "B",
        "text": "poses an escalating ecological and health threat that extends from primary consumers all the way to humans."
      },
      {
        "key": "C",
        "text": "affects only deep-sea creatures that dwell beyond the photic zone."
      },
      {
        "key": "D",
        "text": "has decreased significantly due to the rapid biodegradation of modern polymers."
      },
      {
        "key": "E",
        "text": "is restricted exclusively to predatory sharks and whales without reaching human diets."
      }
    ],
    "correctAnswer": "B",
    "explanation": "The text explains that microplastics adsorb toxins, biomagnify through trophic levels, and end up in apex predators and commercially harvested fish for humans, clearly indicating a systemic food chain hazard reaching human consumers.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Inference strategy: Synthesize the chain reaction from lowest tier (zooplankton) to highest tier (apex predators & humans)."
  },
  {
    "id": "bimbel_lit_ing_052",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Author's Tone & Rhetorical Purpose",
    "difficulty": "Sedang",
    "stimulus": "For decades, neuroscientists operated under the dogma that the adult human brain was structurally immutable after adolescence. Groundbreaking neuroimaging studies have thoroughly debunked this myth, proving that the brain exhibits neuroplasticity throughout life. By forming novel synaptic arborizations and pruning dormant pathways in response to cognitive challenges, the brain continually reorganizes its functional architecture.",
    "question": "What is the author's primary attitude toward the concept of neuroplasticity in adults?",
    "options": [
      {
        "key": "A",
        "text": "Skeptical and demanding further replication before accepting the theory."
      },
      {
        "key": "B",
        "text": "Nostalgic for classical neurological doctrines of the twentieth century."
      },
      {
        "key": "C",
        "text": "Indifferent and detached regarding neurological discoveries."
      },
      {
        "key": "D",
        "text": "Supportive and confident in light of rigorous modern empirical evidence."
      },
      {
        "key": "E",
        "text": "Cautious and fearful of the neurological implications on human memory."
      }
    ],
    "correctAnswer": "D",
    "explanation": "The author uses phrases like 'groundbreaking neuroimaging studies', 'thoroughly debunked this myth', and explains the phenomenon enthusiastically, demonstrating a confident, supportive stance backed by empirical science.",
    "quickTrick": "🌟 NF Smart Solution: Analyze adjectives: 'groundbreaking', 'thoroughly debunked' indicate strong affirmation and scientific validation."
  },
  {
    "id": "bimbel_lit_ing_053",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Reading Comprehension (Factual Retrieval)",
    "difficulty": "HOTS",
    "stimulus": "Quantum computing leverages the fundamental principles of quantum mechanics, specifically superposition and entanglement, to process complex data at speeds unimaginable with classical supercomputers. While classical bits represent information strictly as zeros or ones, quantum bits (qubits) can exist in multiple states simultaneously. This architectural paradigm shift holds immense promise for molecular modeling in drug discovery, optimizing global logistics networks, and breaking conventional RSA cryptographic protocols.",
    "question": "According to the passage, what is the fundamental feature distinguishing quantum computing from classical computing?",
    "options": [
      {
        "key": "A",
        "text": "The ability of qubits to exist in multiple simultaneous states via superposition, unlike binary classical bits."
      },
      {
        "key": "B",
        "text": "The exclusive reliance on electrical circuits with higher voltage resistance."
      },
      {
        "key": "C",
        "text": "The permanent immunity of quantum algorithms to any computational errors."
      },
      {
        "key": "D",
        "text": "The total replacement of biological molecules with synthetic silicon chips."
      },
      {
        "key": "E",
        "text": "The lower manufacturing cost of quantum microprocessors compared to PCs."
      }
    ],
    "correctAnswer": "A",
    "explanation": "The passage directly contrasts classical bits (which represent strictly zeros or ones) with qubits, which can exist in multiple states simultaneously due to quantum superposition.",
    "quickTrick": "🧠 Zenius Core Logic: Look for the direct definition in the text: 'While classical bits represent strictly... qubits can exist in multiple states simultaneously.'"
  },
  {
    "id": "bimbel_lit_ing_054",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Vocabulary in Context",
    "difficulty": "Sedang",
    "stimulus": "Solid-state batteries (SSBs) represent the most anticipated technological breakthrough in electromobility. By replacing the flammable liquid or gel electrolyte found in conventional lithium-ion cells with a solid ceramic or polymer matrix, SSBs offer substantially higher energy density and reduced fire hazards. However, commercial mass production remains bottlenecked by interface resistance between electrodes and solid electrolytes during rapid charge-discharge cycles.",
    "question": "The word 'bottlenecked' in the passage is closest in meaning to...",
    "options": [
      {
        "key": "A",
        "text": "accelerated"
      },
      {
        "key": "B",
        "text": "terminated"
      },
      {
        "key": "C",
        "text": "impeded or hindered"
      },
      {
        "key": "D",
        "text": "authenticated"
      },
      {
        "key": "E",
        "text": "eliminated"
      }
    ],
    "correctAnswer": "C",
    "explanation": "In industrial and engineering contexts, 'bottlenecked' means restricted, slowed down, or hindered by an obstacle or limiting factor.",
    "quickTrick": "💡 INTEN Reading Strategy: Context clue: 'However, commercial mass production remains... by interface resistance' denotes an obstacle/impediment."
  },
  {
    "id": "bimbel_lit_ing_055",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Critical Reading (Inference & Implication)",
    "difficulty": "HOTS",
    "stimulus": "Recent marine biological surveys indicate that microscopic plastic debris has infiltrated the lowest tiers of the aquatic food web. Zooplankton actively ingest microplastic particles, mistaking them for natural phytoplankton. Because plastics adsorb persistent organic pollutants from seawater, these toxic compounds biomagnify across successive trophic levels, ultimately accumulating in apex marine predators and commercially harvested fish consumed by humans.",
    "question": "It can be inferred from the passage that bioaccumulation of microplastics...",
    "options": [
      {
        "key": "A",
        "text": "is completely neutralized once zooplankton digest the synthetic particles."
      },
      {
        "key": "B",
        "text": "affects only deep-sea creatures that dwell beyond the photic zone."
      },
      {
        "key": "C",
        "text": "has decreased significantly due to the rapid biodegradation of modern polymers."
      },
      {
        "key": "D",
        "text": "is restricted exclusively to predatory sharks and whales without reaching human diets."
      },
      {
        "key": "E",
        "text": "poses an escalating ecological and health threat that extends from primary consumers all the way to humans."
      }
    ],
    "correctAnswer": "E",
    "explanation": "The text explains that microplastics adsorb toxins, biomagnify through trophic levels, and end up in apex predators and commercially harvested fish for humans, clearly indicating a systemic food chain hazard reaching human consumers.",
    "quickTrick": "👑 Metode The King GO: Inference strategy: Synthesize the chain reaction from lowest tier (zooplankton) to highest tier (apex predators & humans)."
  },
  {
    "id": "bimbel_lit_ing_056",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Author's Tone & Rhetorical Purpose",
    "difficulty": "Sedang",
    "stimulus": "For decades, neuroscientists operated under the dogma that the adult human brain was structurally immutable after adolescence. Groundbreaking neuroimaging studies have thoroughly debunked this myth, proving that the brain exhibits neuroplasticity throughout life. By forming novel synaptic arborizations and pruning dormant pathways in response to cognitive challenges, the brain continually reorganizes its functional architecture.",
    "question": "What is the author's primary attitude toward the concept of neuroplasticity in adults?",
    "options": [
      {
        "key": "A",
        "text": "Skeptical and demanding further replication before accepting the theory."
      },
      {
        "key": "B",
        "text": "Supportive and confident in light of rigorous modern empirical evidence."
      },
      {
        "key": "C",
        "text": "Nostalgic for classical neurological doctrines of the twentieth century."
      },
      {
        "key": "D",
        "text": "Indifferent and detached regarding neurological discoveries."
      },
      {
        "key": "E",
        "text": "Cautious and fearful of the neurological implications on human memory."
      }
    ],
    "correctAnswer": "B",
    "explanation": "The author uses phrases like 'groundbreaking neuroimaging studies', 'thoroughly debunked this myth', and explains the phenomenon enthusiastically, demonstrating a confident, supportive stance backed by empirical science.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Analyze adjectives: 'groundbreaking', 'thoroughly debunked' indicate strong affirmation and scientific validation."
  },
  {
    "id": "bimbel_lit_ing_057",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Reading Comprehension (Factual Retrieval)",
    "difficulty": "HOTS",
    "stimulus": "Quantum computing leverages the fundamental principles of quantum mechanics, specifically superposition and entanglement, to process complex data at speeds unimaginable with classical supercomputers. While classical bits represent information strictly as zeros or ones, quantum bits (qubits) can exist in multiple states simultaneously. This architectural paradigm shift holds immense promise for molecular modeling in drug discovery, optimizing global logistics networks, and breaking conventional RSA cryptographic protocols.",
    "question": "According to the passage, what is the fundamental feature distinguishing quantum computing from classical computing?",
    "options": [
      {
        "key": "A",
        "text": "The exclusive reliance on electrical circuits with higher voltage resistance."
      },
      {
        "key": "B",
        "text": "The permanent immunity of quantum algorithms to any computational errors."
      },
      {
        "key": "C",
        "text": "The total replacement of biological molecules with synthetic silicon chips."
      },
      {
        "key": "D",
        "text": "The ability of qubits to exist in multiple simultaneous states via superposition, unlike binary classical bits."
      },
      {
        "key": "E",
        "text": "The lower manufacturing cost of quantum microprocessors compared to PCs."
      }
    ],
    "correctAnswer": "D",
    "explanation": "The passage directly contrasts classical bits (which represent strictly zeros or ones) with qubits, which can exist in multiple states simultaneously due to quantum superposition.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Look for the direct definition in the text: 'While classical bits represent strictly... qubits can exist in multiple states simultaneously.'"
  },
  {
    "id": "bimbel_lit_ing_058",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Vocabulary in Context",
    "difficulty": "Sedang",
    "stimulus": "Solid-state batteries (SSBs) represent the most anticipated technological breakthrough in electromobility. By replacing the flammable liquid or gel electrolyte found in conventional lithium-ion cells with a solid ceramic or polymer matrix, SSBs offer substantially higher energy density and reduced fire hazards. However, commercial mass production remains bottlenecked by interface resistance between electrodes and solid electrolytes during rapid charge-discharge cycles.",
    "question": "The word 'bottlenecked' in the passage is closest in meaning to...",
    "options": [
      {
        "key": "A",
        "text": "impeded or hindered"
      },
      {
        "key": "B",
        "text": "accelerated"
      },
      {
        "key": "C",
        "text": "terminated"
      },
      {
        "key": "D",
        "text": "authenticated"
      },
      {
        "key": "E",
        "text": "eliminated"
      }
    ],
    "correctAnswer": "A",
    "explanation": "In industrial and engineering contexts, 'bottlenecked' means restricted, slowed down, or hindered by an obstacle or limiting factor.",
    "quickTrick": "🌟 NF Smart Solution: Context clue: 'However, commercial mass production remains... by interface resistance' denotes an obstacle/impediment."
  },
  {
    "id": "bimbel_lit_ing_059",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Critical Reading (Inference & Implication)",
    "difficulty": "HOTS",
    "stimulus": "Recent marine biological surveys indicate that microscopic plastic debris has infiltrated the lowest tiers of the aquatic food web. Zooplankton actively ingest microplastic particles, mistaking them for natural phytoplankton. Because plastics adsorb persistent organic pollutants from seawater, these toxic compounds biomagnify across successive trophic levels, ultimately accumulating in apex marine predators and commercially harvested fish consumed by humans.",
    "question": "It can be inferred from the passage that bioaccumulation of microplastics...",
    "options": [
      {
        "key": "A",
        "text": "is completely neutralized once zooplankton digest the synthetic particles."
      },
      {
        "key": "B",
        "text": "affects only deep-sea creatures that dwell beyond the photic zone."
      },
      {
        "key": "C",
        "text": "poses an escalating ecological and health threat that extends from primary consumers all the way to humans."
      },
      {
        "key": "D",
        "text": "has decreased significantly due to the rapid biodegradation of modern polymers."
      },
      {
        "key": "E",
        "text": "is restricted exclusively to predatory sharks and whales without reaching human diets."
      }
    ],
    "correctAnswer": "C",
    "explanation": "The text explains that microplastics adsorb toxins, biomagnify through trophic levels, and end up in apex predators and commercially harvested fish for humans, clearly indicating a systemic food chain hazard reaching human consumers.",
    "quickTrick": "🧠 Zenius Core Logic: Inference strategy: Synthesize the chain reaction from lowest tier (zooplankton) to highest tier (apex predators & humans)."
  },
  {
    "id": "bimbel_lit_ing_060",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Author's Tone & Rhetorical Purpose",
    "difficulty": "Sedang",
    "stimulus": "For decades, neuroscientists operated under the dogma that the adult human brain was structurally immutable after adolescence. Groundbreaking neuroimaging studies have thoroughly debunked this myth, proving that the brain exhibits neuroplasticity throughout life. By forming novel synaptic arborizations and pruning dormant pathways in response to cognitive challenges, the brain continually reorganizes its functional architecture.",
    "question": "What is the author's primary attitude toward the concept of neuroplasticity in adults?",
    "options": [
      {
        "key": "A",
        "text": "Skeptical and demanding further replication before accepting the theory."
      },
      {
        "key": "B",
        "text": "Nostalgic for classical neurological doctrines of the twentieth century."
      },
      {
        "key": "C",
        "text": "Indifferent and detached regarding neurological discoveries."
      },
      {
        "key": "D",
        "text": "Cautious and fearful of the neurological implications on human memory."
      },
      {
        "key": "E",
        "text": "Supportive and confident in light of rigorous modern empirical evidence."
      }
    ],
    "correctAnswer": "E",
    "explanation": "The author uses phrases like 'groundbreaking neuroimaging studies', 'thoroughly debunked this myth', and explains the phenomenon enthusiastically, demonstrating a confident, supportive stance backed by empirical science.",
    "quickTrick": "💡 INTEN Reading Strategy: Analyze adjectives: 'groundbreaking', 'thoroughly debunked' indicate strong affirmation and scientific validation."
  },
  {
    "id": "bimbel_lit_ing_061",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Reading Comprehension (Factual Retrieval)",
    "difficulty": "HOTS",
    "stimulus": "Quantum computing leverages the fundamental principles of quantum mechanics, specifically superposition and entanglement, to process complex data at speeds unimaginable with classical supercomputers. While classical bits represent information strictly as zeros or ones, quantum bits (qubits) can exist in multiple states simultaneously. This architectural paradigm shift holds immense promise for molecular modeling in drug discovery, optimizing global logistics networks, and breaking conventional RSA cryptographic protocols.",
    "question": "According to the passage, what is the fundamental feature distinguishing quantum computing from classical computing?",
    "options": [
      {
        "key": "A",
        "text": "The exclusive reliance on electrical circuits with higher voltage resistance."
      },
      {
        "key": "B",
        "text": "The ability of qubits to exist in multiple simultaneous states via superposition, unlike binary classical bits."
      },
      {
        "key": "C",
        "text": "The permanent immunity of quantum algorithms to any computational errors."
      },
      {
        "key": "D",
        "text": "The total replacement of biological molecules with synthetic silicon chips."
      },
      {
        "key": "E",
        "text": "The lower manufacturing cost of quantum microprocessors compared to PCs."
      }
    ],
    "correctAnswer": "B",
    "explanation": "The passage directly contrasts classical bits (which represent strictly zeros or ones) with qubits, which can exist in multiple states simultaneously due to quantum superposition.",
    "quickTrick": "👑 Metode The King GO: Look for the direct definition in the text: 'While classical bits represent strictly... qubits can exist in multiple states simultaneously.'"
  },
  {
    "id": "bimbel_lit_ing_062",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Vocabulary in Context",
    "difficulty": "Sedang",
    "stimulus": "Solid-state batteries (SSBs) represent the most anticipated technological breakthrough in electromobility. By replacing the flammable liquid or gel electrolyte found in conventional lithium-ion cells with a solid ceramic or polymer matrix, SSBs offer substantially higher energy density and reduced fire hazards. However, commercial mass production remains bottlenecked by interface resistance between electrodes and solid electrolytes during rapid charge-discharge cycles.",
    "question": "The word 'bottlenecked' in the passage is closest in meaning to...",
    "options": [
      {
        "key": "A",
        "text": "accelerated"
      },
      {
        "key": "B",
        "text": "terminated"
      },
      {
        "key": "C",
        "text": "authenticated"
      },
      {
        "key": "D",
        "text": "impeded or hindered"
      },
      {
        "key": "E",
        "text": "eliminated"
      }
    ],
    "correctAnswer": "D",
    "explanation": "In industrial and engineering contexts, 'bottlenecked' means restricted, slowed down, or hindered by an obstacle or limiting factor.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Context clue: 'However, commercial mass production remains... by interface resistance' denotes an obstacle/impediment."
  },
  {
    "id": "bimbel_lit_ing_063",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Critical Reading (Inference & Implication)",
    "difficulty": "HOTS",
    "stimulus": "Recent marine biological surveys indicate that microscopic plastic debris has infiltrated the lowest tiers of the aquatic food web. Zooplankton actively ingest microplastic particles, mistaking them for natural phytoplankton. Because plastics adsorb persistent organic pollutants from seawater, these toxic compounds biomagnify across successive trophic levels, ultimately accumulating in apex marine predators and commercially harvested fish consumed by humans.",
    "question": "It can be inferred from the passage that bioaccumulation of microplastics...",
    "options": [
      {
        "key": "A",
        "text": "poses an escalating ecological and health threat that extends from primary consumers all the way to humans."
      },
      {
        "key": "B",
        "text": "is completely neutralized once zooplankton digest the synthetic particles."
      },
      {
        "key": "C",
        "text": "affects only deep-sea creatures that dwell beyond the photic zone."
      },
      {
        "key": "D",
        "text": "has decreased significantly due to the rapid biodegradation of modern polymers."
      },
      {
        "key": "E",
        "text": "is restricted exclusively to predatory sharks and whales without reaching human diets."
      }
    ],
    "correctAnswer": "A",
    "explanation": "The text explains that microplastics adsorb toxins, biomagnify through trophic levels, and end up in apex predators and commercially harvested fish for humans, clearly indicating a systemic food chain hazard reaching human consumers.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Inference strategy: Synthesize the chain reaction from lowest tier (zooplankton) to highest tier (apex predators & humans)."
  },
  {
    "id": "bimbel_lit_ing_064",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Author's Tone & Rhetorical Purpose",
    "difficulty": "Sedang",
    "stimulus": "For decades, neuroscientists operated under the dogma that the adult human brain was structurally immutable after adolescence. Groundbreaking neuroimaging studies have thoroughly debunked this myth, proving that the brain exhibits neuroplasticity throughout life. By forming novel synaptic arborizations and pruning dormant pathways in response to cognitive challenges, the brain continually reorganizes its functional architecture.",
    "question": "What is the author's primary attitude toward the concept of neuroplasticity in adults?",
    "options": [
      {
        "key": "A",
        "text": "Skeptical and demanding further replication before accepting the theory."
      },
      {
        "key": "B",
        "text": "Nostalgic for classical neurological doctrines of the twentieth century."
      },
      {
        "key": "C",
        "text": "Supportive and confident in light of rigorous modern empirical evidence."
      },
      {
        "key": "D",
        "text": "Indifferent and detached regarding neurological discoveries."
      },
      {
        "key": "E",
        "text": "Cautious and fearful of the neurological implications on human memory."
      }
    ],
    "correctAnswer": "C",
    "explanation": "The author uses phrases like 'groundbreaking neuroimaging studies', 'thoroughly debunked this myth', and explains the phenomenon enthusiastically, demonstrating a confident, supportive stance backed by empirical science.",
    "quickTrick": "🌟 NF Smart Solution: Analyze adjectives: 'groundbreaking', 'thoroughly debunked' indicate strong affirmation and scientific validation."
  },
  {
    "id": "bimbel_lit_ing_065",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Reading Comprehension (Factual Retrieval)",
    "difficulty": "HOTS",
    "stimulus": "Quantum computing leverages the fundamental principles of quantum mechanics, specifically superposition and entanglement, to process complex data at speeds unimaginable with classical supercomputers. While classical bits represent information strictly as zeros or ones, quantum bits (qubits) can exist in multiple states simultaneously. This architectural paradigm shift holds immense promise for molecular modeling in drug discovery, optimizing global logistics networks, and breaking conventional RSA cryptographic protocols.",
    "question": "According to the passage, what is the fundamental feature distinguishing quantum computing from classical computing?",
    "options": [
      {
        "key": "A",
        "text": "The exclusive reliance on electrical circuits with higher voltage resistance."
      },
      {
        "key": "B",
        "text": "The permanent immunity of quantum algorithms to any computational errors."
      },
      {
        "key": "C",
        "text": "The total replacement of biological molecules with synthetic silicon chips."
      },
      {
        "key": "D",
        "text": "The lower manufacturing cost of quantum microprocessors compared to PCs."
      },
      {
        "key": "E",
        "text": "The ability of qubits to exist in multiple simultaneous states via superposition, unlike binary classical bits."
      }
    ],
    "correctAnswer": "E",
    "explanation": "The passage directly contrasts classical bits (which represent strictly zeros or ones) with qubits, which can exist in multiple states simultaneously due to quantum superposition.",
    "quickTrick": "🧠 Zenius Core Logic: Look for the direct definition in the text: 'While classical bits represent strictly... qubits can exist in multiple states simultaneously.'"
  },
  {
    "id": "bimbel_lit_ing_066",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Vocabulary in Context",
    "difficulty": "Sedang",
    "stimulus": "Solid-state batteries (SSBs) represent the most anticipated technological breakthrough in electromobility. By replacing the flammable liquid or gel electrolyte found in conventional lithium-ion cells with a solid ceramic or polymer matrix, SSBs offer substantially higher energy density and reduced fire hazards. However, commercial mass production remains bottlenecked by interface resistance between electrodes and solid electrolytes during rapid charge-discharge cycles.",
    "question": "The word 'bottlenecked' in the passage is closest in meaning to...",
    "options": [
      {
        "key": "A",
        "text": "accelerated"
      },
      {
        "key": "B",
        "text": "impeded or hindered"
      },
      {
        "key": "C",
        "text": "terminated"
      },
      {
        "key": "D",
        "text": "authenticated"
      },
      {
        "key": "E",
        "text": "eliminated"
      }
    ],
    "correctAnswer": "B",
    "explanation": "In industrial and engineering contexts, 'bottlenecked' means restricted, slowed down, or hindered by an obstacle or limiting factor.",
    "quickTrick": "💡 INTEN Reading Strategy: Context clue: 'However, commercial mass production remains... by interface resistance' denotes an obstacle/impediment."
  },
  {
    "id": "bimbel_lit_ing_067",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Critical Reading (Inference & Implication)",
    "difficulty": "HOTS",
    "stimulus": "Recent marine biological surveys indicate that microscopic plastic debris has infiltrated the lowest tiers of the aquatic food web. Zooplankton actively ingest microplastic particles, mistaking them for natural phytoplankton. Because plastics adsorb persistent organic pollutants from seawater, these toxic compounds biomagnify across successive trophic levels, ultimately accumulating in apex marine predators and commercially harvested fish consumed by humans.",
    "question": "It can be inferred from the passage that bioaccumulation of microplastics...",
    "options": [
      {
        "key": "A",
        "text": "is completely neutralized once zooplankton digest the synthetic particles."
      },
      {
        "key": "B",
        "text": "affects only deep-sea creatures that dwell beyond the photic zone."
      },
      {
        "key": "C",
        "text": "has decreased significantly due to the rapid biodegradation of modern polymers."
      },
      {
        "key": "D",
        "text": "poses an escalating ecological and health threat that extends from primary consumers all the way to humans."
      },
      {
        "key": "E",
        "text": "is restricted exclusively to predatory sharks and whales without reaching human diets."
      }
    ],
    "correctAnswer": "D",
    "explanation": "The text explains that microplastics adsorb toxins, biomagnify through trophic levels, and end up in apex predators and commercially harvested fish for humans, clearly indicating a systemic food chain hazard reaching human consumers.",
    "quickTrick": "👑 Metode The King GO: Inference strategy: Synthesize the chain reaction from lowest tier (zooplankton) to highest tier (apex predators & humans)."
  },
  {
    "id": "bimbel_lit_ing_068",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Author's Tone & Rhetorical Purpose",
    "difficulty": "Sedang",
    "stimulus": "For decades, neuroscientists operated under the dogma that the adult human brain was structurally immutable after adolescence. Groundbreaking neuroimaging studies have thoroughly debunked this myth, proving that the brain exhibits neuroplasticity throughout life. By forming novel synaptic arborizations and pruning dormant pathways in response to cognitive challenges, the brain continually reorganizes its functional architecture.",
    "question": "What is the author's primary attitude toward the concept of neuroplasticity in adults?",
    "options": [
      {
        "key": "A",
        "text": "Supportive and confident in light of rigorous modern empirical evidence."
      },
      {
        "key": "B",
        "text": "Skeptical and demanding further replication before accepting the theory."
      },
      {
        "key": "C",
        "text": "Nostalgic for classical neurological doctrines of the twentieth century."
      },
      {
        "key": "D",
        "text": "Indifferent and detached regarding neurological discoveries."
      },
      {
        "key": "E",
        "text": "Cautious and fearful of the neurological implications on human memory."
      }
    ],
    "correctAnswer": "A",
    "explanation": "The author uses phrases like 'groundbreaking neuroimaging studies', 'thoroughly debunked this myth', and explains the phenomenon enthusiastically, demonstrating a confident, supportive stance backed by empirical science.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Analyze adjectives: 'groundbreaking', 'thoroughly debunked' indicate strong affirmation and scientific validation."
  },
  {
    "id": "bimbel_lit_ing_069",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Reading Comprehension (Factual Retrieval)",
    "difficulty": "HOTS",
    "stimulus": "Quantum computing leverages the fundamental principles of quantum mechanics, specifically superposition and entanglement, to process complex data at speeds unimaginable with classical supercomputers. While classical bits represent information strictly as zeros or ones, quantum bits (qubits) can exist in multiple states simultaneously. This architectural paradigm shift holds immense promise for molecular modeling in drug discovery, optimizing global logistics networks, and breaking conventional RSA cryptographic protocols.",
    "question": "According to the passage, what is the fundamental feature distinguishing quantum computing from classical computing?",
    "options": [
      {
        "key": "A",
        "text": "The exclusive reliance on electrical circuits with higher voltage resistance."
      },
      {
        "key": "B",
        "text": "The permanent immunity of quantum algorithms to any computational errors."
      },
      {
        "key": "C",
        "text": "The ability of qubits to exist in multiple simultaneous states via superposition, unlike binary classical bits."
      },
      {
        "key": "D",
        "text": "The total replacement of biological molecules with synthetic silicon chips."
      },
      {
        "key": "E",
        "text": "The lower manufacturing cost of quantum microprocessors compared to PCs."
      }
    ],
    "correctAnswer": "C",
    "explanation": "The passage directly contrasts classical bits (which represent strictly zeros or ones) with qubits, which can exist in multiple states simultaneously due to quantum superposition.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Look for the direct definition in the text: 'While classical bits represent strictly... qubits can exist in multiple states simultaneously.'"
  },
  {
    "id": "bimbel_lit_ing_070",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Vocabulary in Context",
    "difficulty": "Sedang",
    "stimulus": "Solid-state batteries (SSBs) represent the most anticipated technological breakthrough in electromobility. By replacing the flammable liquid or gel electrolyte found in conventional lithium-ion cells with a solid ceramic or polymer matrix, SSBs offer substantially higher energy density and reduced fire hazards. However, commercial mass production remains bottlenecked by interface resistance between electrodes and solid electrolytes during rapid charge-discharge cycles.",
    "question": "The word 'bottlenecked' in the passage is closest in meaning to...",
    "options": [
      {
        "key": "A",
        "text": "accelerated"
      },
      {
        "key": "B",
        "text": "terminated"
      },
      {
        "key": "C",
        "text": "authenticated"
      },
      {
        "key": "D",
        "text": "eliminated"
      },
      {
        "key": "E",
        "text": "impeded or hindered"
      }
    ],
    "correctAnswer": "E",
    "explanation": "In industrial and engineering contexts, 'bottlenecked' means restricted, slowed down, or hindered by an obstacle or limiting factor.",
    "quickTrick": "🌟 NF Smart Solution: Context clue: 'However, commercial mass production remains... by interface resistance' denotes an obstacle/impediment."
  },
  {
    "id": "bimbel_lit_ing_071",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Critical Reading (Inference & Implication)",
    "difficulty": "HOTS",
    "stimulus": "Recent marine biological surveys indicate that microscopic plastic debris has infiltrated the lowest tiers of the aquatic food web. Zooplankton actively ingest microplastic particles, mistaking them for natural phytoplankton. Because plastics adsorb persistent organic pollutants from seawater, these toxic compounds biomagnify across successive trophic levels, ultimately accumulating in apex marine predators and commercially harvested fish consumed by humans.",
    "question": "It can be inferred from the passage that bioaccumulation of microplastics...",
    "options": [
      {
        "key": "A",
        "text": "is completely neutralized once zooplankton digest the synthetic particles."
      },
      {
        "key": "B",
        "text": "poses an escalating ecological and health threat that extends from primary consumers all the way to humans."
      },
      {
        "key": "C",
        "text": "affects only deep-sea creatures that dwell beyond the photic zone."
      },
      {
        "key": "D",
        "text": "has decreased significantly due to the rapid biodegradation of modern polymers."
      },
      {
        "key": "E",
        "text": "is restricted exclusively to predatory sharks and whales without reaching human diets."
      }
    ],
    "correctAnswer": "B",
    "explanation": "The text explains that microplastics adsorb toxins, biomagnify through trophic levels, and end up in apex predators and commercially harvested fish for humans, clearly indicating a systemic food chain hazard reaching human consumers.",
    "quickTrick": "🧠 Zenius Core Logic: Inference strategy: Synthesize the chain reaction from lowest tier (zooplankton) to highest tier (apex predators & humans)."
  },
  {
    "id": "bimbel_lit_ing_072",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Author's Tone & Rhetorical Purpose",
    "difficulty": "Sedang",
    "stimulus": "For decades, neuroscientists operated under the dogma that the adult human brain was structurally immutable after adolescence. Groundbreaking neuroimaging studies have thoroughly debunked this myth, proving that the brain exhibits neuroplasticity throughout life. By forming novel synaptic arborizations and pruning dormant pathways in response to cognitive challenges, the brain continually reorganizes its functional architecture.",
    "question": "What is the author's primary attitude toward the concept of neuroplasticity in adults?",
    "options": [
      {
        "key": "A",
        "text": "Skeptical and demanding further replication before accepting the theory."
      },
      {
        "key": "B",
        "text": "Nostalgic for classical neurological doctrines of the twentieth century."
      },
      {
        "key": "C",
        "text": "Indifferent and detached regarding neurological discoveries."
      },
      {
        "key": "D",
        "text": "Supportive and confident in light of rigorous modern empirical evidence."
      },
      {
        "key": "E",
        "text": "Cautious and fearful of the neurological implications on human memory."
      }
    ],
    "correctAnswer": "D",
    "explanation": "The author uses phrases like 'groundbreaking neuroimaging studies', 'thoroughly debunked this myth', and explains the phenomenon enthusiastically, demonstrating a confident, supportive stance backed by empirical science.",
    "quickTrick": "💡 INTEN Reading Strategy: Analyze adjectives: 'groundbreaking', 'thoroughly debunked' indicate strong affirmation and scientific validation."
  },
  {
    "id": "bimbel_lit_ing_073",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Reading Comprehension (Factual Retrieval)",
    "difficulty": "HOTS",
    "stimulus": "Quantum computing leverages the fundamental principles of quantum mechanics, specifically superposition and entanglement, to process complex data at speeds unimaginable with classical supercomputers. While classical bits represent information strictly as zeros or ones, quantum bits (qubits) can exist in multiple states simultaneously. This architectural paradigm shift holds immense promise for molecular modeling in drug discovery, optimizing global logistics networks, and breaking conventional RSA cryptographic protocols.",
    "question": "According to the passage, what is the fundamental feature distinguishing quantum computing from classical computing?",
    "options": [
      {
        "key": "A",
        "text": "The ability of qubits to exist in multiple simultaneous states via superposition, unlike binary classical bits."
      },
      {
        "key": "B",
        "text": "The exclusive reliance on electrical circuits with higher voltage resistance."
      },
      {
        "key": "C",
        "text": "The permanent immunity of quantum algorithms to any computational errors."
      },
      {
        "key": "D",
        "text": "The total replacement of biological molecules with synthetic silicon chips."
      },
      {
        "key": "E",
        "text": "The lower manufacturing cost of quantum microprocessors compared to PCs."
      }
    ],
    "correctAnswer": "A",
    "explanation": "The passage directly contrasts classical bits (which represent strictly zeros or ones) with qubits, which can exist in multiple states simultaneously due to quantum superposition.",
    "quickTrick": "👑 Metode The King GO: Look for the direct definition in the text: 'While classical bits represent strictly... qubits can exist in multiple states simultaneously.'"
  },
  {
    "id": "bimbel_lit_ing_074",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Vocabulary in Context",
    "difficulty": "Sedang",
    "stimulus": "Solid-state batteries (SSBs) represent the most anticipated technological breakthrough in electromobility. By replacing the flammable liquid or gel electrolyte found in conventional lithium-ion cells with a solid ceramic or polymer matrix, SSBs offer substantially higher energy density and reduced fire hazards. However, commercial mass production remains bottlenecked by interface resistance between electrodes and solid electrolytes during rapid charge-discharge cycles.",
    "question": "The word 'bottlenecked' in the passage is closest in meaning to...",
    "options": [
      {
        "key": "A",
        "text": "accelerated"
      },
      {
        "key": "B",
        "text": "terminated"
      },
      {
        "key": "C",
        "text": "impeded or hindered"
      },
      {
        "key": "D",
        "text": "authenticated"
      },
      {
        "key": "E",
        "text": "eliminated"
      }
    ],
    "correctAnswer": "C",
    "explanation": "In industrial and engineering contexts, 'bottlenecked' means restricted, slowed down, or hindered by an obstacle or limiting factor.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Context clue: 'However, commercial mass production remains... by interface resistance' denotes an obstacle/impediment."
  },
  {
    "id": "bimbel_lit_ing_075",
    "year": 2026,
    "source": "Ruangguru Brain Academy — Drill Elite HOTS 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Critical Reading (Inference & Implication)",
    "difficulty": "HOTS",
    "stimulus": "Recent marine biological surveys indicate that microscopic plastic debris has infiltrated the lowest tiers of the aquatic food web. Zooplankton actively ingest microplastic particles, mistaking them for natural phytoplankton. Because plastics adsorb persistent organic pollutants from seawater, these toxic compounds biomagnify across successive trophic levels, ultimately accumulating in apex marine predators and commercially harvested fish consumed by humans.",
    "question": "It can be inferred from the passage that bioaccumulation of microplastics...",
    "options": [
      {
        "key": "A",
        "text": "is completely neutralized once zooplankton digest the synthetic particles."
      },
      {
        "key": "B",
        "text": "affects only deep-sea creatures that dwell beyond the photic zone."
      },
      {
        "key": "C",
        "text": "has decreased significantly due to the rapid biodegradation of modern polymers."
      },
      {
        "key": "D",
        "text": "is restricted exclusively to predatory sharks and whales without reaching human diets."
      },
      {
        "key": "E",
        "text": "poses an escalating ecological and health threat that extends from primary consumers all the way to humans."
      }
    ],
    "correctAnswer": "E",
    "explanation": "The text explains that microplastics adsorb toxins, biomagnify through trophic levels, and end up in apex predators and commercially harvested fish for humans, clearly indicating a systemic food chain hazard reaching human consumers.",
    "quickTrick": "🚀 Brain Academy Fast Trick: Inference strategy: Synthesize the chain reaction from lowest tier (zooplankton) to highest tier (apex predators & humans)."
  },
  {
    "id": "bimbel_lit_ing_076",
    "year": 2026,
    "source": "Nurul Fikri (NF) — Paket Bintang Juara SNBT",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Author's Tone & Rhetorical Purpose",
    "difficulty": "Sedang",
    "stimulus": "For decades, neuroscientists operated under the dogma that the adult human brain was structurally immutable after adolescence. Groundbreaking neuroimaging studies have thoroughly debunked this myth, proving that the brain exhibits neuroplasticity throughout life. By forming novel synaptic arborizations and pruning dormant pathways in response to cognitive challenges, the brain continually reorganizes its functional architecture.",
    "question": "What is the author's primary attitude toward the concept of neuroplasticity in adults?",
    "options": [
      {
        "key": "A",
        "text": "Skeptical and demanding further replication before accepting the theory."
      },
      {
        "key": "B",
        "text": "Supportive and confident in light of rigorous modern empirical evidence."
      },
      {
        "key": "C",
        "text": "Nostalgic for classical neurological doctrines of the twentieth century."
      },
      {
        "key": "D",
        "text": "Indifferent and detached regarding neurological discoveries."
      },
      {
        "key": "E",
        "text": "Cautious and fearful of the neurological implications on human memory."
      }
    ],
    "correctAnswer": "B",
    "explanation": "The author uses phrases like 'groundbreaking neuroimaging studies', 'thoroughly debunked this myth', and explains the phenomenon enthusiastically, demonstrating a confident, supportive stance backed by empirical science.",
    "quickTrick": "🌟 NF Smart Solution: Analyze adjectives: 'groundbreaking', 'thoroughly debunked' indicate strong affirmation and scientific validation."
  },
  {
    "id": "bimbel_lit_ing_077",
    "year": 2026,
    "source": "Zenius Education — Fundamental Mastery 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Reading Comprehension (Factual Retrieval)",
    "difficulty": "HOTS",
    "stimulus": "Quantum computing leverages the fundamental principles of quantum mechanics, specifically superposition and entanglement, to process complex data at speeds unimaginable with classical supercomputers. While classical bits represent information strictly as zeros or ones, quantum bits (qubits) can exist in multiple states simultaneously. This architectural paradigm shift holds immense promise for molecular modeling in drug discovery, optimizing global logistics networks, and breaking conventional RSA cryptographic protocols.",
    "question": "According to the passage, what is the fundamental feature distinguishing quantum computing from classical computing?",
    "options": [
      {
        "key": "A",
        "text": "The exclusive reliance on electrical circuits with higher voltage resistance."
      },
      {
        "key": "B",
        "text": "The permanent immunity of quantum algorithms to any computational errors."
      },
      {
        "key": "C",
        "text": "The total replacement of biological molecules with synthetic silicon chips."
      },
      {
        "key": "D",
        "text": "The ability of qubits to exist in multiple simultaneous states via superposition, unlike binary classical bits."
      },
      {
        "key": "E",
        "text": "The lower manufacturing cost of quantum microprocessors compared to PCs."
      }
    ],
    "correctAnswer": "D",
    "explanation": "The passage directly contrasts classical bits (which represent strictly zeros or ones) with qubits, which can exist in multiple states simultaneously due to quantum superposition.",
    "quickTrick": "🧠 Zenius Core Logic: Look for the direct definition in the text: 'While classical bits represent strictly... qubits can exist in multiple states simultaneously.'"
  },
  {
    "id": "bimbel_lit_ing_078",
    "year": 2026,
    "source": "Prosus INTEN — Super Intensif SNBT 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Vocabulary in Context",
    "difficulty": "Sedang",
    "stimulus": "Solid-state batteries (SSBs) represent the most anticipated technological breakthrough in electromobility. By replacing the flammable liquid or gel electrolyte found in conventional lithium-ion cells with a solid ceramic or polymer matrix, SSBs offer substantially higher energy density and reduced fire hazards. However, commercial mass production remains bottlenecked by interface resistance between electrodes and solid electrolytes during rapid charge-discharge cycles.",
    "question": "The word 'bottlenecked' in the passage is closest in meaning to...",
    "options": [
      {
        "key": "A",
        "text": "impeded or hindered"
      },
      {
        "key": "B",
        "text": "accelerated"
      },
      {
        "key": "C",
        "text": "terminated"
      },
      {
        "key": "D",
        "text": "authenticated"
      },
      {
        "key": "E",
        "text": "eliminated"
      }
    ],
    "correctAnswer": "A",
    "explanation": "In industrial and engineering contexts, 'bottlenecked' means restricted, slowed down, or hindered by an obstacle or limiting factor.",
    "quickTrick": "💡 INTEN Reading Strategy: Context clue: 'However, commercial mass production remains... by interface resistance' denotes an obstacle/impediment."
  },
  {
    "id": "bimbel_lit_ing_079",
    "year": 2026,
    "source": "Ganesha Operation (GO) — The King Solusi 2026",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Critical Reading (Inference & Implication)",
    "difficulty": "HOTS",
    "stimulus": "Recent marine biological surveys indicate that microscopic plastic debris has infiltrated the lowest tiers of the aquatic food web. Zooplankton actively ingest microplastic particles, mistaking them for natural phytoplankton. Because plastics adsorb persistent organic pollutants from seawater, these toxic compounds biomagnify across successive trophic levels, ultimately accumulating in apex marine predators and commercially harvested fish consumed by humans.",
    "question": "It can be inferred from the passage that bioaccumulation of microplastics...",
    "options": [
      {
        "key": "A",
        "text": "is completely neutralized once zooplankton digest the synthetic particles."
      },
      {
        "key": "B",
        "text": "affects only deep-sea creatures that dwell beyond the photic zone."
      },
      {
        "key": "C",
        "text": "poses an escalating ecological and health threat that extends from primary consumers all the way to humans."
      },
      {
        "key": "D",
        "text": "has decreased significantly due to the rapid biodegradation of modern polymers."
      },
      {
        "key": "E",
        "text": "is restricted exclusively to predatory sharks and whales without reaching human diets."
      }
    ],
    "correctAnswer": "C",
    "explanation": "The text explains that microplastics adsorb toxins, biomagnify through trophic levels, and end up in apex predators and commercially harvested fish for humans, clearly indicating a systemic food chain hazard reaching human consumers.",
    "quickTrick": "👑 Metode The King GO: Inference strategy: Synthesize the chain reaction from lowest tier (zooplankton) to highest tier (apex predators & humans)."
  },
  {
    "id": "bimbel_lit_ing_080",
    "year": 2026,
    "source": "Neutron Yogyakarta — Modul Penalaran Unggulan",
    "subtest": "lit_ing",
    "subtestName": "Literasi Bahasa Inggris",
    "category": "Author's Tone & Rhetorical Purpose",
    "difficulty": "Sedang",
    "stimulus": "For decades, neuroscientists operated under the dogma that the adult human brain was structurally immutable after adolescence. Groundbreaking neuroimaging studies have thoroughly debunked this myth, proving that the brain exhibits neuroplasticity throughout life. By forming novel synaptic arborizations and pruning dormant pathways in response to cognitive challenges, the brain continually reorganizes its functional architecture.",
    "question": "What is the author's primary attitude toward the concept of neuroplasticity in adults?",
    "options": [
      {
        "key": "A",
        "text": "Skeptical and demanding further replication before accepting the theory."
      },
      {
        "key": "B",
        "text": "Nostalgic for classical neurological doctrines of the twentieth century."
      },
      {
        "key": "C",
        "text": "Indifferent and detached regarding neurological discoveries."
      },
      {
        "key": "D",
        "text": "Cautious and fearful of the neurological implications on human memory."
      },
      {
        "key": "E",
        "text": "Supportive and confident in light of rigorous modern empirical evidence."
      }
    ],
    "correctAnswer": "E",
    "explanation": "The author uses phrases like 'groundbreaking neuroimaging studies', 'thoroughly debunked this myth', and explains the phenomenon enthusiastically, demonstrating a confident, supportive stance backed by empirical science.",
    "quickTrick": "⚡ Langkah Taktis Neutron: Analyze adjectives: 'groundbreaking', 'thoroughly debunked' indicate strong affirmation and scientific validation."
  }
];

// Integrasi otomatis ke QUESTIONS_DATA global saat startup aplikasi
if (typeof QUESTIONS_DATA !== 'undefined' && Array.isArray(QUESTIONS_DATA)) {
  QUESTIONS_DATA.push(...BIMBEL_QUESTIONS_DATA);
}

if (typeof window !== 'undefined') {
  window.BIMBEL_QUESTIONS_DATA = BIMBEL_QUESTIONS_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BIMBEL_QUESTIONS_DATA;
}
