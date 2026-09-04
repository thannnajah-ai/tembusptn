// Database Komprehensif Resmi PTN & Program Studi UTBK SNBT se-Indonesia 2026
// Lengkap dengan Kode Resmi SNPMB, Jenjang Sarjana (S1), Sarjana Terapan (D4), dan Diploma Tiga (D3)

const PTN_LIST = [
  {
    "id": "usk",
    "name": "Universitas Syiah Kuala",
    "shortName": "USK",
    "location": "Banda Aceh, Aceh",
    "region": "Sumatera",
    "type": "Universitas",
    "majors": [
      {
        "id": "usk-pendidikan-dokter",
        "name": "Pendidikan Dokter",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 715,
        "quota": 80,
        "applicants": 2800,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "usk-pendidikan-dokter-gigi",
        "name": "Pendidikan Dokter Gigi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 665,
        "quota": 45,
        "applicants": 1350,
        "competitiveness": "Tinggi"
      },
      {
        "id": "usk-farmasi",
        "name": "Farmasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 656,
        "quota": 50,
        "applicants": 1600,
        "competitiveness": "Tinggi"
      },
      {
        "id": "usk-informatika",
        "name": "Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 60,
        "applicants": 1800,
        "competitiveness": "Sedang"
      },
      {
        "id": "usk-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 65,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "usk-teknik-mesin",
        "name": "Teknik Mesin",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 55,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "usk-teknik-elektro",
        "name": "Teknik Elektro",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 635,
        "quota": 55,
        "applicants": 980,
        "competitiveness": "Sedang"
      },
      {
        "id": "usk-teknik-kimia",
        "name": "Teknik Kimia",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 50,
        "applicants": 850,
        "competitiveness": "Sedang"
      },
      {
        "id": "usk-arsitektur",
        "name": "Arsitektur",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 45,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "usk-pendidikan-dokter-hewan",
        "name": "Pendidikan Dokter Hewan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 634,
        "quota": 85,
        "applicants": 1300,
        "competitiveness": "Sedang"
      },
      {
        "id": "usk-keperawatan",
        "name": "Keperawatan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 75,
        "applicants": 1450,
        "competitiveness": "Sedang"
      },
      {
        "id": "usk-agroteknologi",
        "name": "Agroteknologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 624,
        "quota": 75,
        "applicants": 920,
        "competitiveness": "Sedang"
      },
      {
        "id": "usk-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 160,
        "applicants": 2500,
        "competitiveness": "Sedang"
      },
      {
        "id": "usk-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 110,
        "applicants": 2600,
        "competitiveness": "Tinggi"
      },
      {
        "id": "usk-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 95,
        "applicants": 2050,
        "competitiveness": "Sedang"
      },
      {
        "id": "usk-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 55,
        "applicants": 1850,
        "competitiveness": "Sedang"
      },
      {
        "id": "usk-ekonomi-pembangunan",
        "name": "Ekonomi Pembangunan",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 638,
        "quota": 70,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "usk-pgsd",
        "name": "PGSD",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 636,
        "quota": 90,
        "applicants": 1750,
        "competitiveness": "Sedang"
      }
    ],
    "code": "1111"
  },
  {
    "id": "unimal",
    "name": "Universitas Malikussaleh",
    "shortName": "UNIMAL",
    "location": "Lhokseumawe & Reuleuet, Aceh",
    "region": "Sumatera",
    "type": "Universitas",
    "majors": [
      {
        "id": "unimal-pendidikan-dokter",
        "name": "Pendidikan Dokter",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 685,
        "quota": 45,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "unimal-teknik-informatika",
        "name": "Teknik Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 70,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "unimal-sistem-informasi",
        "name": "Sistem Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 626,
        "quota": 60,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "unimal-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 625,
        "quota": 75,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "unimal-teknik-industri",
        "name": "Teknik Industri",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 622,
        "quota": 65,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "unimal-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 632,
        "quota": 150,
        "applicants": 1950,
        "competitiveness": "Sedang"
      },
      {
        "id": "unimal-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 635,
        "quota": 120,
        "applicants": 2100,
        "competitiveness": "Sedang"
      },
      {
        "id": "unimal-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 630,
        "quota": 95,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "unimal-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 632,
        "quota": 65,
        "applicants": 1500,
        "competitiveness": "Sedang"
      },
      {
        "id": "unimal-administrasi-publik",
        "name": "Administrasi Publik",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 626,
        "quota": 80,
        "applicants": 1250,
        "competitiveness": "Sedang"
      }
    ],
    "code": "1112"
  },
  {
    "id": "utu",
    "name": "Universitas Teuku Umar",
    "shortName": "UTU",
    "location": "Meulaboh, Aceh Barat",
    "region": "Sumatera",
    "type": "Universitas",
    "majors": [
      {
        "id": "utu-teknologi-informasi",
        "name": "Teknologi Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 626,
        "quota": 50,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "utu-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 622,
        "quota": 55,
        "applicants": 820,
        "competitiveness": "Sedang"
      },
      {
        "id": "utu-kesehatan-masyarakat",
        "name": "Kesehatan Masyarakat",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 65,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "utu-gizi",
        "name": "Gizi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 40,
        "applicants": 980,
        "competitiveness": "Sedang"
      },
      {
        "id": "utu-agribisnis",
        "name": "Agribisnis",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 620,
        "quota": 60,
        "applicants": 780,
        "competitiveness": "Sedang"
      },
      {
        "id": "utu-ilmu-hukum",
        "name": "Ilmu Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 628,
        "quota": 100,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "utu-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 632,
        "quota": 95,
        "applicants": 1600,
        "competitiveness": "Sedang"
      },
      {
        "id": "utu-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 630,
        "quota": 55,
        "applicants": 1250,
        "competitiveness": "Sedang"
      }
    ],
    "code": "1113"
  },
  {
    "id": "unsam",
    "name": "Universitas Samudra",
    "shortName": "UNSAM",
    "location": "Langsa, Aceh",
    "region": "Sumatera",
    "type": "Universitas",
    "majors": [
      {
        "id": "unsam-informatika",
        "name": "Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 50,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsam-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 622,
        "quota": 55,
        "applicants": 850,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsam-pendidikan-matematika",
        "name": "Pendidikan Matematika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 620,
        "quota": 45,
        "applicants": 720,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsam-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 626,
        "quota": 120,
        "applicants": 1450,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsam-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 630,
        "quota": 100,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsam-pgsd",
        "name": "PGSD",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 632,
        "quota": 75,
        "applicants": 1500,
        "competitiveness": "Sedang"
      }
    ],
    "code": "1114"
  },
  {
    "id": "isbi-aceh",
    "name": "ISBI Aceh",
    "shortName": "ISBI Aceh",
    "location": "Kota Jantho, Aceh Besar",
    "region": "Sumatera",
    "type": "Institut",
    "majors": [
      {
        "id": "isbi-seni-karawitan",
        "name": "Seni Karawitan",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 610,
        "quota": 35,
        "applicants": 250,
        "competitiveness": "Sedang"
      },
      {
        "id": "isbi-seni-tari",
        "name": "Seni Tari",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 608,
        "quota": 35,
        "applicants": 280,
        "competitiveness": "Sedang"
      },
      {
        "id": "isbi-seni-teater",
        "name": "Seni Teater",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 605,
        "quota": 30,
        "applicants": 220,
        "competitiveness": "Sedang"
      },
      {
        "id": "isbi-seni-rupa-murni",
        "name": "Seni Rupa Murni",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 615,
        "quota": 35,
        "applicants": 320,
        "competitiveness": "Sedang"
      },
      {
        "id": "isbi-kriya-seni",
        "name": "Kriya Seni",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 612,
        "quota": 30,
        "applicants": 260,
        "competitiveness": "Sedang"
      },
      {
        "id": "isbi-dkv",
        "name": "Desain Komunikasi Visual (DKV)",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 635,
        "quota": 40,
        "applicants": 850,
        "competitiveness": "Tinggi"
      }
    ],
    "code": "1115"
  },
  {
    "id": "uin-arraniry",
    "name": "UIN Ar-Raniry",
    "shortName": "UIN Ar-Raniry",
    "location": "Banda Aceh, Aceh",
    "region": "Sumatera",
    "type": "UIN",
    "majors": [
      {
        "id": "arraniry-teknologi-informasi",
        "name": "Teknologi Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 55,
        "applicants": 1450,
        "competitiveness": "Sedang"
      },
      {
        "id": "arraniry-arsitektur",
        "name": "Arsitektur",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 40,
        "applicants": 850,
        "competitiveness": "Sedang"
      },
      {
        "id": "arraniry-teknik-lingkungan",
        "name": "Teknik Lingkungan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 40,
        "applicants": 780,
        "competitiveness": "Sedang"
      },
      {
        "id": "arraniry-kimia",
        "name": "Kimia",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 620,
        "quota": 45,
        "applicants": 650,
        "competitiveness": "Sedang"
      },
      {
        "id": "arraniry-biologi",
        "name": "Biologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 622,
        "quota": 45,
        "applicants": 720,
        "competitiveness": "Sedang"
      },
      {
        "id": "arraniry-psikologi",
        "name": "Psikologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 70,
        "applicants": 2150,
        "competitiveness": "Tinggi"
      },
      {
        "id": "arraniry-ilmu-hukum",
        "name": "Ilmu Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 645,
        "quota": 85,
        "applicants": 1950,
        "competitiveness": "Sedang"
      },
      {
        "id": "arraniry-ilmu-administrasi-negara",
        "name": "Ilmu Administrasi Negara",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 640,
        "quota": 70,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "arraniry-ilmu-ekonomi",
        "name": "Ilmu Ekonomi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 638,
        "quota": 60,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "arraniry-ilmu-perpustakaan",
        "name": "Ilmu Perpustakaan",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 632,
        "quota": 55,
        "applicants": 1100,
        "competitiveness": "Sedang"
      }
    ],
    "code": "1116"
  },
  {
    "id": "usu",
    "name": "Universitas Sumatera Utara",
    "shortName": "USU",
    "location": "Padang Bulan, Medan, Sumatera Utara",
    "region": "Sumatera",
    "type": "Universitas",
    "majors": [
      {
        "id": "usu-pendidikan-dokter",
        "name": "Pendidikan Dokter",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 722,
        "quota": 95,
        "applicants": 3850,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "usu-pendidikan-dokter-gigi",
        "name": "Pendidikan Dokter Gigi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 674,
        "quota": 60,
        "applicants": 1650,
        "competitiveness": "Tinggi"
      },
      {
        "id": "usu-farmasi",
        "name": "Farmasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 665,
        "quota": 70,
        "applicants": 2100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "usu-teknologi-informasi",
        "name": "Teknologi Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 668,
        "quota": 65,
        "applicants": 2350,
        "competitiveness": "Tinggi"
      },
      {
        "id": "usu-ilmu-komputer",
        "name": "Ilmu Komputer",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 665,
        "quota": 65,
        "applicants": 2200,
        "competitiveness": "Tinggi"
      },
      {
        "id": "usu-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 75,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "usu-teknik-industri",
        "name": "Teknik Industri",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 656,
        "quota": 75,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "usu-teknik-mesin",
        "name": "Teknik Mesin",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 65,
        "applicants": 1300,
        "competitiveness": "Sedang"
      },
      {
        "id": "usu-teknik-elektro",
        "name": "Teknik Elektro",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 646,
        "quota": 65,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "usu-teknik-kimia",
        "name": "Teknik Kimia",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 645,
        "quota": 60,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "usu-arsitektur",
        "name": "Arsitektur",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 654,
        "quota": 55,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "usu-statistika",
        "name": "Statistika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 45,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "usu-ilmu-keperawatan",
        "name": "Ilmu Keperawatan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 85,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "usu-kesehatan-masyarakat",
        "name": "Kesehatan Masyarakat",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 110,
        "applicants": 2050,
        "competitiveness": "Sedang"
      },
      {
        "id": "usu-agroteknologi",
        "name": "Agroteknologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 110,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "usu-ilmu-hukum",
        "name": "Ilmu Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 665,
        "quota": 190,
        "applicants": 3600,
        "competitiveness": "Tinggi"
      },
      {
        "id": "usu-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 666,
        "quota": 120,
        "applicants": 3200,
        "competitiveness": "Tinggi"
      },
      {
        "id": "usu-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 662,
        "quota": 100,
        "applicants": 2450,
        "competitiveness": "Tinggi"
      },
      {
        "id": "usu-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 662,
        "quota": 65,
        "applicants": 2750,
        "competitiveness": "Tinggi"
      },
      {
        "id": "usu-psikologi",
        "name": "Psikologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 660,
        "quota": 85,
        "applicants": 3050,
        "competitiveness": "Tinggi"
      },
      {
        "id": "usu-ilmu-administrasi-publik",
        "name": "Ilmu Administrasi Publik",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 65,
        "applicants": 1500,
        "competitiveness": "Sedang"
      },
      {
        "id": "usu-ilmu-administrasi-bisnis",
        "name": "Ilmu Administrasi Bisnis",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 65,
        "applicants": 1700,
        "competitiveness": "Sedang"
      },
      {
        "id": "usu-sastra-inggris",
        "name": "Sastra Inggris",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 50,
        "applicants": 1250,
        "competitiveness": "Sedang"
      }
    ],
    "code": "1121"
  },
  {
    "id": "unimed",
    "name": "Universitas Negeri Medan",
    "shortName": "UNIMED",
    "location": "Medan Estate, Percut Sei Tuan, Deli Serdang",
    "region": "Sumatera",
    "type": "Universitas",
    "majors": [
      {
        "id": "unimed-ilmu-komputer",
        "name": "Ilmu Komputer",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 650,
        "quota": 55,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "unimed-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 50,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "unimed-pendidikan-matematika",
        "name": "Pendidikan Matematika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 60,
        "applicants": 1300,
        "competitiveness": "Sedang"
      },
      {
        "id": "unimed-pendidikan-biologi",
        "name": "Pendidikan Biologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 55,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "unimed-gizi",
        "name": "Gizi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 45,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "unimed-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 654,
        "quota": 110,
        "applicants": 2800,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unimed-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 95,
        "applicants": 2150,
        "competitiveness": "Sedang"
      },
      {
        "id": "unimed-pendidikan-guru-sekolah-",
        "name": "Pendidikan Guru Sekolah Dasar (PGSD)",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 130,
        "applicants": 2600,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unimed-pendidikan-bahasa-inggri",
        "name": "Pendidikan Bahasa Inggris",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 65,
        "applicants": 1600,
        "competitiveness": "Sedang"
      },
      {
        "id": "unimed-ilmu-ekonomi",
        "name": "Ilmu Ekonomi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 638,
        "quota": 70,
        "applicants": 1250,
        "competitiveness": "Sedang"
      }
    ],
    "code": "1122"
  },
  {
    "id": "polmed",
    "name": "Politeknik Negeri Medan",
    "shortName": "POLMED",
    "location": "Medan, Sumatera Utara",
    "region": "Sumatera",
    "type": "Politeknik",
    "majors": [
      {
        "id": "polmed-d4-rekayasa-perangkat-lu",
        "name": "D4 Rekayasa Perangkat Lunak",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 45,
        "applicants": 1600,
        "competitiveness": "Sedang"
      },
      {
        "id": "polmed-d4-manajemen-rekayasa-ko",
        "name": "D4 Manajemen Rekayasa Konstruksi",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 45,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "polmed-d4-akuntansi-keuangan-pu",
        "name": "D4 Akuntansi Keuangan Publik",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 55,
        "applicants": 1800,
        "competitiveness": "Sedang"
      },
      {
        "id": "polmed-d4-keuangan-dan-perbanka",
        "name": "D4 Keuangan dan Perbankan Terapan",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 50,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "polmed-d4-administrasi-bisnis-t",
        "name": "D4 Administrasi Bisnis Terapan",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 50,
        "applicants": 1550,
        "competitiveness": "Sedang"
      },
      {
        "id": "polmed-d3-teknik-mesin",
        "name": "D3 Teknik Mesin",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 50,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "polmed-d3-teknik-sipil",
        "name": "D3 Teknik Sipil",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 50,
        "applicants": 1000,
        "competitiveness": "Sedang"
      },
      {
        "id": "polmed-d3-akuntansi",
        "name": "D3 Akuntansi",
        "degree": "D3",
        "category": "Soshum",
        "targetScore": 640,
        "quota": 55,
        "applicants": 1600,
        "competitiveness": "Sedang"
      },
      {
        "id": "polmed-d3-administrasi-bisnis",
        "name": "D3 Administrasi Bisnis",
        "degree": "D3",
        "category": "Soshum",
        "targetScore": 636,
        "quota": 50,
        "applicants": 1450,
        "competitiveness": "Sedang"
      }
    ],
    "code": "1151"
  },
  {
    "id": "unri",
    "name": "Universitas Riau",
    "shortName": "UNRI",
    "location": "Kampus Bina Widya, Panam, Pekanbaru",
    "region": "Sumatera",
    "type": "Universitas",
    "majors": [
      {
        "id": "unri-pendidikan-dokter",
        "name": "Pendidikan Dokter",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 716,
        "quota": 75,
        "applicants": 2900,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "unri-teknik-informatika",
        "name": "Teknik Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 655,
        "quota": 60,
        "applicants": 1950,
        "competitiveness": "Sedang"
      },
      {
        "id": "unri-sistem-informasi",
        "name": "Sistem Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 50,
        "applicants": 1550,
        "competitiveness": "Sedang"
      },
      {
        "id": "unri-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 65,
        "applicants": 1300,
        "competitiveness": "Sedang"
      },
      {
        "id": "unri-teknik-kimia",
        "name": "Teknik Kimia",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 55,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "unri-keperawatan",
        "name": "Keperawatan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 85,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "unri-agroteknologi",
        "name": "Agroteknologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 85,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "unri-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 654,
        "quota": 170,
        "applicants": 3100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unri-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 656,
        "quota": 115,
        "applicants": 2850,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unri-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 95,
        "applicants": 2200,
        "competitiveness": "Sedang"
      },
      {
        "id": "unri-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 654,
        "quota": 60,
        "applicants": 2400,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unri-hubungan-internasional",
        "name": "Hubungan Internasional",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 50,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "unri-pgsd",
        "name": "PGSD",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 110,
        "applicants": 2300,
        "competitiveness": "Sedang"
      }
    ],
    "code": "1211"
  },
  {
    "id": "unand",
    "name": "Universitas Andalas",
    "shortName": "UNAND",
    "location": "Limau Manis, Padang, Sumatera Barat",
    "region": "Sumatera",
    "type": "Universitas",
    "majors": [
      {
        "id": "unand-pendidikan-dokter",
        "name": "Pendidikan Dokter",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 720,
        "quota": 85,
        "applicants": 3400,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "unand-pendidikan-dokter-gigi",
        "name": "Pendidikan Dokter Gigi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 670,
        "quota": 50,
        "applicants": 1500,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unand-farmasi",
        "name": "Farmasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 662,
        "quota": 65,
        "applicants": 1950,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unand-informatika",
        "name": "Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 660,
        "quota": 60,
        "applicants": 2100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unand-sistem-informasi",
        "name": "Sistem Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 55,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "unand-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 65,
        "applicants": 1450,
        "competitiveness": "Sedang"
      },
      {
        "id": "unand-teknik-industri",
        "name": "Teknik Industri",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 65,
        "applicants": 1500,
        "competitiveness": "Sedang"
      },
      {
        "id": "unand-teknik-mesin",
        "name": "Teknik Mesin",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 60,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "unand-teknik-elektro",
        "name": "Teknik Elektro",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 60,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "unand-teknik-lingkungan",
        "name": "Teknik Lingkungan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 644,
        "quota": 50,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "unand-gizi",
        "name": "Gizi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 45,
        "applicants": 1500,
        "competitiveness": "Sedang"
      },
      {
        "id": "unand-keperawatan",
        "name": "Keperawatan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 80,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "unand-agroteknologi",
        "name": "Agroteknologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 90,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "unand-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 660,
        "quota": 180,
        "applicants": 3300,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unand-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 662,
        "quota": 110,
        "applicants": 2950,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unand-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 658,
        "quota": 95,
        "applicants": 2300,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unand-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 658,
        "quota": 60,
        "applicants": 2550,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unand-hubungan-internasional",
        "name": "Hubungan Internasional",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 655,
        "quota": 45,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "unand-psikologi",
        "name": "Psikologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 656,
        "quota": 65,
        "applicants": 2600,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unand-administrasi-publik",
        "name": "Administrasi Publik",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 65,
        "applicants": 1550,
        "competitiveness": "Sedang"
      }
    ],
    "code": "1311"
  },
  {
    "id": "unp",
    "name": "Universitas Negeri Padang",
    "shortName": "UNP",
    "location": "Air Tawar, Padang, Sumatera Barat",
    "region": "Sumatera",
    "type": "Universitas",
    "majors": [
      {
        "id": "unp-kedokteran",
        "name": "Kedokteran",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 705,
        "quota": 45,
        "applicants": 2250,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "unp-teknik-informatika",
        "name": "Teknik Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 60,
        "applicants": 1950,
        "competitiveness": "Sedang"
      },
      {
        "id": "unp-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 55,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "unp-pendidikan-matematika",
        "name": "Pendidikan Matematika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 60,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "unp-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 654,
        "quota": 110,
        "applicants": 2750,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unp-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 95,
        "applicants": 2100,
        "competitiveness": "Sedang"
      },
      {
        "id": "unp-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 60,
        "applicants": 2300,
        "competitiveness": "Sedang"
      },
      {
        "id": "unp-psikologi",
        "name": "Psikologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 655,
        "quota": 75,
        "applicants": 2700,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unp-pendidikan-guru-sekolah-",
        "name": "Pendidikan Guru Sekolah Dasar (PGSD)",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 125,
        "applicants": 2550,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unp-pendidikan-bahasa-inggri",
        "name": "Pendidikan Bahasa Inggris",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 65,
        "applicants": 1550,
        "competitiveness": "Sedang"
      }
    ],
    "code": "1312"
  },
  {
    "id": "pnp",
    "name": "Politeknik Negeri Padang",
    "shortName": "PNP",
    "location": "Limau Manis, Padang, Sumatera Barat",
    "region": "Sumatera",
    "type": "Politeknik",
    "majors": [
      {
        "id": "pnp-d4-teknologi-rekayasa-pe",
        "name": "D4 Teknologi Rekayasa Perangkat Lunak",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 646,
        "quota": 45,
        "applicants": 1550,
        "competitiveness": "Sedang"
      },
      {
        "id": "pnp-d4-manajemen-rekayasa-ko",
        "name": "D4 Manajemen Rekayasa Konstruksi",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 635,
        "quota": 45,
        "applicants": 1000,
        "competitiveness": "Sedang"
      },
      {
        "id": "pnp-d4-akuntansi-manajerial",
        "name": "D4 Akuntansi Manajerial",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 50,
        "applicants": 1700,
        "competitiveness": "Sedang"
      },
      {
        "id": "pnp-d4-administrasi-bisnis-t",
        "name": "D4 Administrasi Bisnis Terapan",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 640,
        "quota": 50,
        "applicants": 1500,
        "competitiveness": "Sedang"
      },
      {
        "id": "pnp-d3-teknik-sipil",
        "name": "D3 Teknik Sipil",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 50,
        "applicants": 920,
        "competitiveness": "Sedang"
      },
      {
        "id": "pnp-d3-teknik-mesin",
        "name": "D3 Teknik Mesin",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 626,
        "quota": 45,
        "applicants": 850,
        "competitiveness": "Sedang"
      },
      {
        "id": "pnp-d3-manajemen-informatika",
        "name": "D3 Manajemen Informatika",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 50,
        "applicants": 1450,
        "competitiveness": "Sedang"
      },
      {
        "id": "pnp-d3-akuntansi",
        "name": "D3 Akuntansi",
        "degree": "D3",
        "category": "Soshum",
        "targetScore": 638,
        "quota": 50,
        "applicants": 1500,
        "competitiveness": "Sedang"
      }
    ],
    "code": "1351"
  },
  {
    "id": "unja",
    "name": "Universitas Jambi",
    "shortName": "UNJA",
    "location": "Mendalo Darat, Muaro Jambi",
    "region": "Sumatera",
    "type": "Universitas",
    "majors": [
      {
        "id": "unja-pendidikan-dokter",
        "name": "Pendidikan Dokter",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 710,
        "quota": 55,
        "applicants": 2350,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "unja-sistem-informasi",
        "name": "Sistem Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 644,
        "quota": 55,
        "applicants": 1500,
        "competitiveness": "Sedang"
      },
      {
        "id": "unja-teknik-pertambangan",
        "name": "Teknik Pertambangan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 646,
        "quota": 50,
        "applicants": 1450,
        "competitiveness": "Sedang"
      },
      {
        "id": "unja-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 55,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "unja-agroteknologi",
        "name": "Agroteknologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 624,
        "quota": 75,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "unja-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 160,
        "applicants": 2550,
        "competitiveness": "Sedang"
      },
      {
        "id": "unja-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 110,
        "applicants": 2500,
        "competitiveness": "Sedang"
      },
      {
        "id": "unja-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 90,
        "applicants": 1950,
        "competitiveness": "Sedang"
      },
      {
        "id": "unja-pgsd",
        "name": "PGSD",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 640,
        "quota": 100,
        "applicants": 2100,
        "competitiveness": "Sedang"
      }
    ],
    "code": "1411"
  },
  {
    "id": "unib",
    "name": "Universitas Bengkulu",
    "shortName": "UNIB",
    "location": "Kandang Limun, Kota Bengkulu",
    "region": "Sumatera",
    "type": "Universitas",
    "majors": [
      {
        "id": "unib-pendidikan-dokter",
        "name": "Pendidikan Dokter",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 708,
        "quota": 50,
        "applicants": 2200,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "unib-informatika",
        "name": "Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 55,
        "applicants": 1550,
        "competitiveness": "Sedang"
      },
      {
        "id": "unib-sistem-informasi",
        "name": "Sistem Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 50,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "unib-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 55,
        "applicants": 1080,
        "competitiveness": "Sedang"
      },
      {
        "id": "unib-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 150,
        "applicants": 2400,
        "competitiveness": "Sedang"
      },
      {
        "id": "unib-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 110,
        "applicants": 2450,
        "competitiveness": "Sedang"
      },
      {
        "id": "unib-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 90,
        "applicants": 1900,
        "competitiveness": "Sedang"
      },
      {
        "id": "unib-pgsd",
        "name": "PGSD",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 638,
        "quota": 100,
        "applicants": 2050,
        "competitiveness": "Sedang"
      }
    ],
    "code": "1511"
  },
  {
    "id": "unsri",
    "name": "Universitas Sriwijaya",
    "shortName": "UNSRI",
    "location": "Indralaya & Palembang, Sumatera Selatan",
    "region": "Sumatera",
    "type": "Universitas",
    "majors": [
      {
        "id": "unsri-pendidikan-dokter",
        "name": "Pendidikan Dokter",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 720,
        "quota": 85,
        "applicants": 3450,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "unsri-pendidikan-dokter-gigi",
        "name": "Pendidikan Dokter Gigi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 670,
        "quota": 45,
        "applicants": 1500,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unsri-farmasi",
        "name": "Farmasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 660,
        "quota": 55,
        "applicants": 1850,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unsri-teknik-informatika",
        "name": "Teknik Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 662,
        "quota": 65,
        "applicants": 2250,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unsri-sistem-informasi",
        "name": "Sistem Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 654,
        "quota": 55,
        "applicants": 1700,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsri-teknik-pertambangan",
        "name": "Teknik Pertambangan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 660,
        "quota": 65,
        "applicants": 2050,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unsri-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 75,
        "applicants": 1500,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsri-teknik-mesin",
        "name": "Teknik Mesin",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 65,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsri-teknik-elektro",
        "name": "Teknik Elektro",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 644,
        "quota": 65,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsri-teknik-kimia",
        "name": "Teknik Kimia",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 646,
        "quota": 65,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsri-arsitektur",
        "name": "Arsitektur",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 45,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsri-kesehatan-masyarakat",
        "name": "Kesehatan Masyarakat",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 95,
        "applicants": 1850,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsri-ilmu-keperawatan",
        "name": "Ilmu Keperawatan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 75,
        "applicants": 1550,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsri-agribisnis",
        "name": "Agribisnis",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 75,
        "applicants": 1300,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsri-ilmu-hukum",
        "name": "Ilmu Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 662,
        "quota": 180,
        "applicants": 3400,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unsri-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 664,
        "quota": 120,
        "applicants": 3100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unsri-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 660,
        "quota": 100,
        "applicants": 2400,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unsri-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 658,
        "quota": 60,
        "applicants": 2500,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unsri-administrasi-publik",
        "name": "Administrasi Publik",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 70,
        "applicants": 1600,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsri-pgsd",
        "name": "PGSD",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 100,
        "applicants": 2150,
        "competitiveness": "Sedang"
      }
    ],
    "code": "1611"
  },
  {
    "id": "polsri",
    "name": "Politeknik Negeri Sriwijaya",
    "shortName": "POLSRI",
    "location": "Palembang, Sumatera Selatan",
    "region": "Sumatera",
    "type": "Politeknik",
    "majors": [
      {
        "id": "polsri-d4-teknik-informatika",
        "name": "D4 Teknik Informatika",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 50,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "polsri-d4-rekayasa-sistem-kompu",
        "name": "D4 Rekayasa Sistem Komputer",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 45,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "polsri-d4-manajemen-rekayasa-ko",
        "name": "D4 Manajemen Rekayasa Konstruksi",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 45,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "polsri-d4-akuntansi-sektor-publ",
        "name": "D4 Akuntansi Sektor Publik",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 55,
        "applicants": 1800,
        "competitiveness": "Sedang"
      },
      {
        "id": "polsri-d4-manajemen-bisnis-tera",
        "name": "D4 Manajemen Bisnis Terapan",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 50,
        "applicants": 1550,
        "competitiveness": "Sedang"
      },
      {
        "id": "polsri-d3-teknik-sipil",
        "name": "D3 Teknik Sipil",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 50,
        "applicants": 1000,
        "competitiveness": "Sedang"
      },
      {
        "id": "polsri-d3-teknik-mesin",
        "name": "D3 Teknik Mesin",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 50,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "polsri-d3-manajemen-informatika",
        "name": "D3 Manajemen Informatika",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 50,
        "applicants": 1500,
        "competitiveness": "Sedang"
      },
      {
        "id": "polsri-d3-akuntansi",
        "name": "D3 Akuntansi",
        "degree": "D3",
        "category": "Soshum",
        "targetScore": 640,
        "quota": 55,
        "applicants": 1650,
        "competitiveness": "Sedang"
      }
    ],
    "code": "1651"
  },
  {
    "id": "ubb",
    "name": "Universitas Bangka Belitung",
    "shortName": "UBB",
    "location": "Balunijuk, Merawang, Bangka",
    "region": "Sumatera",
    "type": "Universitas",
    "majors": [
      {
        "id": "ubb-kedokteran",
        "name": "Kedokteran",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 695,
        "quota": 40,
        "applicants": 1750,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ubb-teknik-pertambangan",
        "name": "Teknik Pertambangan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 50,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "ubb-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 50,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "ubb-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 634,
        "quota": 110,
        "applicants": 1600,
        "competitiveness": "Sedang"
      },
      {
        "id": "ubb-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 638,
        "quota": 95,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "ubb-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 634,
        "quota": 75,
        "applicants": 1350,
        "competitiveness": "Sedang"
      }
    ],
    "code": "1711"
  },
  {
    "id": "unila",
    "name": "Universitas Lampung",
    "shortName": "UNILA",
    "location": "Gedong Meneng, Bandar Lampung",
    "region": "Sumatera",
    "type": "Universitas",
    "majors": [
      {
        "id": "unila-pendidikan-dokter",
        "name": "Pendidikan Dokter",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 716,
        "quota": 80,
        "applicants": 3100,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "unila-farmasi",
        "name": "Farmasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 658,
        "quota": 50,
        "applicants": 1750,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unila-informatika",
        "name": "Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 654,
        "quota": 60,
        "applicants": 1950,
        "competitiveness": "Sedang"
      },
      {
        "id": "unila-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 65,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "unila-teknik-elektro",
        "name": "Teknik Elektro",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 60,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "unila-teknik-mesin",
        "name": "Teknik Mesin",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 634,
        "quota": 60,
        "applicants": 1000,
        "competitiveness": "Sedang"
      },
      {
        "id": "unila-arsitektur",
        "name": "Arsitektur",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 45,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "unila-agroteknologi",
        "name": "Agroteknologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 85,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "unila-agribisnis",
        "name": "Agribisnis",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 634,
        "quota": 80,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "unila-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 656,
        "quota": 190,
        "applicants": 3250,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unila-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 658,
        "quota": 120,
        "applicants": 2950,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unila-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 100,
        "applicants": 2300,
        "competitiveness": "Sedang"
      },
      {
        "id": "unila-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 655,
        "quota": 65,
        "applicants": 2450,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unila-administrasi-bisnis",
        "name": "Administrasi Bisnis",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 70,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "unila-pgsd",
        "name": "PGSD",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 110,
        "applicants": 2350,
        "competitiveness": "Sedang"
      }
    ],
    "code": "1811"
  },
  {
    "id": "itera",
    "name": "Institut Teknologi Sumatera",
    "shortName": "ITERA",
    "location": "Jati Agung, Lampung Selatan",
    "region": "Sumatera",
    "type": "Institut",
    "majors": [
      {
        "id": "itera-teknik-informatika",
        "name": "Teknik Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 656,
        "quota": 75,
        "applicants": 2150,
        "competitiveness": "Tinggi"
      },
      {
        "id": "itera-sains-data",
        "name": "Sains Data",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 650,
        "quota": 50,
        "applicants": 1550,
        "competitiveness": "Sedang"
      },
      {
        "id": "itera-teknik-pertambangan",
        "name": "Teknik Pertambangan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 654,
        "quota": 65,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "itera-teknik-perminyakan",
        "name": "Teknik Perminyakan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 60,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "itera-teknik-geologi",
        "name": "Teknik Geologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 644,
        "quota": 60,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "itera-teknik-geofisika",
        "name": "Teknik Geofisika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 50,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "itera-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 645,
        "quota": 75,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "itera-arsitektur",
        "name": "Arsitektur",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 60,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "itera-perencanaan-wilayah-kota",
        "name": "Perencanaan Wilayah & Kota (PWK)",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 645,
        "quota": 60,
        "applicants": 1300,
        "competitiveness": "Sedang"
      },
      {
        "id": "itera-teknik-elektro",
        "name": "Teknik Elektro",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 65,
        "applicants": 1080,
        "competitiveness": "Sedang"
      },
      {
        "id": "itera-teknik-mesin",
        "name": "Teknik Mesin",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 65,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "itera-teknik-industri",
        "name": "Teknik Industri",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 646,
        "quota": 65,
        "applicants": 1380,
        "competitiveness": "Sedang"
      },
      {
        "id": "itera-farmasi",
        "name": "Farmasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 655,
        "quota": 60,
        "applicants": 1750,
        "competitiveness": "Tinggi"
      },
      {
        "id": "itera-teknologi-pangan",
        "name": "Teknologi Pangan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 55,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "itera-teknik-biomedis",
        "name": "Teknik Biomedis",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 45,
        "applicants": 950,
        "competitiveness": "Sedang"
      }
    ],
    "code": "1812"
  },
  {
    "id": "umrah",
    "name": "Universitas Maritim Raja Ali Haji",
    "shortName": "UMRAH",
    "location": "Tanjungpinang & Batam, Kepulauan Riau",
    "region": "Sumatera",
    "type": "Universitas",
    "majors": [
      {
        "id": "umrah-teknik-informatika",
        "name": "Teknik Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 55,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "umrah-teknik-elektro",
        "name": "Teknik Elektro",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 625,
        "quota": 45,
        "applicants": 820,
        "competitiveness": "Sedang"
      },
      {
        "id": "umrah-teknik-perkapalan",
        "name": "Teknik Perkapalan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 45,
        "applicants": 850,
        "competitiveness": "Sedang"
      },
      {
        "id": "umrah-ilmu-kelautan",
        "name": "Ilmu Kelautan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 624,
        "quota": 50,
        "applicants": 750,
        "competitiveness": "Sedang"
      },
      {
        "id": "umrah-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 635,
        "quota": 110,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "umrah-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 640,
        "quota": 100,
        "applicants": 1850,
        "competitiveness": "Sedang"
      },
      {
        "id": "umrah-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 636,
        "quota": 80,
        "applicants": 1450,
        "competitiveness": "Sedang"
      },
      {
        "id": "umrah-hubungan-internasional",
        "name": "Hubungan Internasional",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 638,
        "quota": 45,
        "applicants": 1200,
        "competitiveness": "Sedang"
      }
    ],
    "code": "1911"
  },
  {
    "id": "ui",
    "name": "Universitas Indonesia",
    "shortName": "UI",
    "location": "Depok & Salemba, DKI Jakarta / Jawa Barat",
    "region": "Jawa",
    "type": "Universitas",
    "majors": [
      {
        "id": "ui-pendidikan-dokter-kedokt",
        "name": "Pendidikan Dokter (Kedokteran)",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 738,
        "quota": 90,
        "applicants": 3950,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "ui-ilmu-komputer",
        "name": "Ilmu Komputer",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 718,
        "quota": 85,
        "applicants": 2750,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "ui-sistem-informasi",
        "name": "Sistem Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 692,
        "quota": 75,
        "applicants": 1980,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "ui-aktuaria",
        "name": "Aktuaria",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 685,
        "quota": 45,
        "applicants": 1200,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "ui-pendidikan-dokter-gigi",
        "name": "Pendidikan Dokter Gigi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 690,
        "quota": 60,
        "applicants": 1450,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ui-farmasi",
        "name": "Farmasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 685,
        "quota": 65,
        "applicants": 1720,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ui-teknik-industri",
        "name": "Teknik Industri",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 678,
        "quota": 85,
        "applicants": 1680,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ui-teknik-biomedis",
        "name": "Teknik Biomedis",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 675,
        "quota": 45,
        "applicants": 980,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ui-teknik-elektro",
        "name": "Teknik Elektro",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 670,
        "quota": 80,
        "applicants": 1100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ui-teknik-mesin",
        "name": "Teknik Mesin",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 665,
        "quota": 80,
        "applicants": 1050,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ui-teknik-kimia",
        "name": "Teknik Kimia",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 662,
        "quota": 75,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 655,
        "quota": 80,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-teknik-lingkungan",
        "name": "Teknik Lingkungan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 60,
        "applicants": 920,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-teknik-metalurgi-materia",
        "name": "Teknik Metalurgi & Material",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 75,
        "applicants": 880,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-teknik-perkapalan",
        "name": "Teknik Perkapalan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 50,
        "applicants": 620,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-teknik-bioproses",
        "name": "Teknik Bioproses",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 45,
        "applicants": 690,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-arsitektur",
        "name": "Arsitektur",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 668,
        "quota": 55,
        "applicants": 1150,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ui-arsitektur-interior",
        "name": "Arsitektur Interior",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 660,
        "quota": 40,
        "applicants": 890,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ui-statistika",
        "name": "Statistika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 664,
        "quota": 55,
        "applicants": 1100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ui-matematika",
        "name": "Matematika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 645,
        "quota": 60,
        "applicants": 850,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-fisika",
        "name": "Fisika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 70,
        "applicants": 580,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-kimia",
        "name": "Kimia",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 70,
        "applicants": 640,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-biologi",
        "name": "Biologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 635,
        "quota": 65,
        "applicants": 720,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-geologi",
        "name": "Geologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 45,
        "applicants": 780,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-geofisika",
        "name": "Geofisika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 45,
        "applicants": 650,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-geografi",
        "name": "Geografi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 60,
        "applicants": 820,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-ilmu-gizi",
        "name": "Ilmu Gizi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 658,
        "quota": 50,
        "applicants": 1400,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ui-ilmu-kesehatan-masyaraka",
        "name": "Ilmu Kesehatan Masyarakat",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 120,
        "applicants": 2100,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-kesehatan-lingkungan",
        "name": "Kesehatan Lingkungan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 635,
        "quota": 50,
        "applicants": 790,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-keselamatan-dan-kesehata",
        "name": "Keselamatan dan Kesehatan Kerja (K3)",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 645,
        "quota": 50,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-ilmu-keperawatan",
        "name": "Ilmu Keperawatan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 110,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-ilmu-hubungan-internasio",
        "name": "Ilmu Hubungan Internasional",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 690,
        "quota": 45,
        "applicants": 1920,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "ui-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 688,
        "quota": 110,
        "applicants": 2550,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "ui-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 682,
        "quota": 125,
        "applicants": 3200,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "ui-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 678,
        "quota": 75,
        "applicants": 3050,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "ui-ilmu-hukum",
        "name": "Ilmu Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 676,
        "quota": 170,
        "applicants": 3650,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ui-psikologi",
        "name": "Psikologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 672,
        "quota": 120,
        "applicants": 3300,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ui-ilmu-ekonomi",
        "name": "Ilmu Ekonomi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 670,
        "quota": 85,
        "applicants": 1600,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ui-ilmu-administrasi-fiskal",
        "name": "Ilmu Administrasi Fiskal",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 665,
        "quota": 65,
        "applicants": 1450,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ui-kriminologi",
        "name": "Kriminologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 664,
        "quota": 55,
        "applicants": 2100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ui-ilmu-administrasi-niaga",
        "name": "Ilmu Administrasi Niaga",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 662,
        "quota": 65,
        "applicants": 1380,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ui-ilmu-administrasi-publik",
        "name": "Ilmu Administrasi Publik",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 658,
        "quota": 65,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-bisnis-islam",
        "name": "Bisnis Islam",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 656,
        "quota": 45,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-ilmu-ekonomi-islam",
        "name": "Ilmu Ekonomi Islam",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 45,
        "applicants": 980,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-sosiologi",
        "name": "Sosiologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 60,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-ilmu-politik",
        "name": "Ilmu Politik",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 60,
        "applicants": 1120,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-antropologi-sosial",
        "name": "Antropologi Sosial",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 50,
        "applicants": 910,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-sastra-korea",
        "name": "Sastra Korea",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 655,
        "quota": 40,
        "applicants": 1650,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ui-sastra-inggris",
        "name": "Sastra Inggris",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 50,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-sastra-jepang",
        "name": "Sastra Jepang",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 45,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-sastra-jerman",
        "name": "Sastra Jerman",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 638,
        "quota": 35,
        "applicants": 720,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-sastra-prancis",
        "name": "Sastra Prancis",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 636,
        "quota": 35,
        "applicants": 680,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-sastra-arab",
        "name": "Sastra Arab",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 634,
        "quota": 45,
        "applicants": 780,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-sastra-indonesia",
        "name": "Sastra Indonesia",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 635,
        "quota": 50,
        "applicants": 920,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-sastra-cina",
        "name": "Sastra Cina",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 640,
        "quota": 35,
        "applicants": 750,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-sastra-rusia",
        "name": "Sastra Rusia",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 630,
        "quota": 35,
        "applicants": 580,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-sastra-belanda",
        "name": "Sastra Belanda",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 628,
        "quota": 35,
        "applicants": 520,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-ilmu-sejarah",
        "name": "Ilmu Sejarah",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 632,
        "quota": 45,
        "applicants": 680,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-arkeologi",
        "name": "Arkeologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 630,
        "quota": 40,
        "applicants": 610,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-ilmu-perpustakaan",
        "name": "Ilmu Perpustakaan",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 50,
        "applicants": 1020,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-ilmu-filsafat",
        "name": "Ilmu Filsafat",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 626,
        "quota": 45,
        "applicants": 550,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-d4-bisnis-kreatif",
        "name": "D4 Bisnis Kreatif",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 662,
        "quota": 45,
        "applicants": 1850,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ui-d4-produksi-media",
        "name": "D4 Produksi Media",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 660,
        "quota": 45,
        "applicants": 1800,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ui-d4-manajemen-bisnis-pari",
        "name": "D4 Manajemen Bisnis Pariwisata",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 656,
        "quota": 45,
        "applicants": 1600,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ui-d4-fisioterapi",
        "name": "D4 Fisioterapi",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 654,
        "quota": 40,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-d4-terapi-okupasi",
        "name": "D4 Terapi Okupasi",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 35,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-d3-hubungan-masyarakat",
        "name": "D3 Hubungan Masyarakat",
        "degree": "D3",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 45,
        "applicants": 1300,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-d3-penyiaran-multimedia",
        "name": "D3 Penyiaran Multimedia",
        "degree": "D3",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 40,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-d3-periklanan-kreatif",
        "name": "D3 Periklanan Kreatif",
        "degree": "D3",
        "category": "Soshum",
        "targetScore": 645,
        "quota": 40,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-d3-akuntansi-terapan",
        "name": "D3 Akuntansi Terapan",
        "degree": "D3",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 50,
        "applicants": 1700,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-d3-administrasi-perpajak",
        "name": "D3 Administrasi Perpajakan",
        "degree": "D3",
        "category": "Soshum",
        "targetScore": 654,
        "quota": 50,
        "applicants": 1800,
        "competitiveness": "Sedang"
      },
      {
        "id": "ui-d3-administrasi-rumah-sa",
        "name": "D3 Administrasi Rumah Sakit",
        "degree": "D3",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 45,
        "applicants": 1400,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3111"
  },
  {
    "id": "unj",
    "name": "Universitas Negeri Jakarta",
    "shortName": "UNJ",
    "location": "Rawamangun, Jakarta Timur",
    "region": "Jawa",
    "type": "Universitas",
    "majors": [
      {
        "id": "unj-ilmu-komputer",
        "name": "Ilmu Komputer",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 658,
        "quota": 55,
        "applicants": 1850,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unj-sistem-dan-teknologi-inf",
        "name": "Sistem dan Teknologi Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 50,
        "applicants": 1600,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unj-statistika",
        "name": "Statistika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 50,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "unj-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 634,
        "quota": 55,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "unj-teknik-mesin",
        "name": "Teknik Mesin",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 50,
        "applicants": 850,
        "competitiveness": "Sedang"
      },
      {
        "id": "unj-pendidikan-matematika",
        "name": "Pendidikan Matematika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 60,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "unj-pendidikan-biologi",
        "name": "Pendidikan Biologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 60,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "unj-pendidikan-fisika",
        "name": "Pendidikan Fisika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 622,
        "quota": 50,
        "applicants": 750,
        "competitiveness": "Sedang"
      },
      {
        "id": "unj-pendidikan-kimia",
        "name": "Pendidikan Kimia",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 624,
        "quota": 50,
        "applicants": 780,
        "competitiveness": "Sedang"
      },
      {
        "id": "unj-psikologi",
        "name": "Psikologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 662,
        "quota": 110,
        "applicants": 3400,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unj-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 658,
        "quota": 120,
        "applicants": 3200,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unj-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 660,
        "quota": 75,
        "applicants": 2900,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unj-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 655,
        "quota": 100,
        "applicants": 2400,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unj-pendidikan-guru-sekolah-",
        "name": "Pendidikan Guru Sekolah Dasar (PGSD)",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 140,
        "applicants": 2800,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unj-pendidikan-bahasa-inggri",
        "name": "Pendidikan Bahasa Inggris",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 645,
        "quota": 70,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "unj-sosiologi",
        "name": "Sosiologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 638,
        "quota": 65,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "unj-pendidikan-bahasa-indone",
        "name": "Pendidikan Bahasa Indonesia",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 635,
        "quota": 65,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "unj-pendidikan-jasmani-keseh",
        "name": "Pendidikan Jasmani, Kesehatan & Rekreasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 625,
        "quota": 75,
        "applicants": 950,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3112"
  },
  {
    "id": "upnvj",
    "name": "UPN 'Veteran' Jakarta",
    "shortName": "UPNVJ",
    "location": "Pondok Labu, Jakarta Selatan & Limo, Depok",
    "region": "Jawa",
    "type": "Universitas",
    "majors": [
      {
        "id": "upnvj-kedokteran",
        "name": "Kedokteran",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 715,
        "quota": 75,
        "applicants": 3300,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "upnvj-farmasi",
        "name": "Farmasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 658,
        "quota": 50,
        "applicants": 1650,
        "competitiveness": "Tinggi"
      },
      {
        "id": "upnvj-informatika",
        "name": "Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 664,
        "quota": 70,
        "applicants": 2100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "upnvj-sistem-informasi",
        "name": "Sistem Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 656,
        "quota": 65,
        "applicants": 1750,
        "competitiveness": "Tinggi"
      },
      {
        "id": "upnvj-kesehatan-masyarakat",
        "name": "Kesehatan Masyarakat",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 90,
        "applicants": 1600,
        "competitiveness": "Sedang"
      },
      {
        "id": "upnvj-ilmu-gizi",
        "name": "Ilmu Gizi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 650,
        "quota": 55,
        "applicants": 1500,
        "competitiveness": "Tinggi"
      },
      {
        "id": "upnvj-teknik-industri",
        "name": "Teknik Industri",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 645,
        "quota": 65,
        "applicants": 1300,
        "competitiveness": "Sedang"
      },
      {
        "id": "upnvj-teknik-mesin",
        "name": "Teknik Mesin",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 635,
        "quota": 60,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "upnvj-teknik-elektro",
        "name": "Teknik Elektro",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 60,
        "applicants": 980,
        "competitiveness": "Sedang"
      },
      {
        "id": "upnvj-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 666,
        "quota": 95,
        "applicants": 3600,
        "competitiveness": "Tinggi"
      },
      {
        "id": "upnvj-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 662,
        "quota": 115,
        "applicants": 3400,
        "competitiveness": "Tinggi"
      },
      {
        "id": "upnvj-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 660,
        "quota": 105,
        "applicants": 2450,
        "competitiveness": "Tinggi"
      },
      {
        "id": "upnvj-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 656,
        "quota": 140,
        "applicants": 2900,
        "competitiveness": "Tinggi"
      },
      {
        "id": "upnvj-hubungan-internasional",
        "name": "Hubungan Internasional",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 660,
        "quota": 60,
        "applicants": 2150,
        "competitiveness": "Tinggi"
      },
      {
        "id": "upnvj-ekonomi-pembangunan",
        "name": "Ekonomi Pembangunan",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 65,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "upnvj-ekonomi-syariah",
        "name": "Ekonomi Syariah",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 55,
        "applicants": 1050,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3113"
  },
  {
    "id": "uin-jkt",
    "name": "UIN Syarif Hidayatullah Jakarta",
    "shortName": "UIN Jakarta",
    "location": "Ciputat, Tangerang Selatan",
    "region": "Jawa",
    "type": "UIN",
    "majors": [
      {
        "id": "uin-jkt-pendidikan-dokter",
        "name": "Pendidikan Dokter",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 712,
        "quota": 50,
        "applicants": 2750,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "uin-jkt-farmasi",
        "name": "Farmasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 662,
        "quota": 55,
        "applicants": 1950,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uin-jkt-teknik-informatika",
        "name": "Teknik Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 660,
        "quota": 60,
        "applicants": 2150,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uin-jkt-sistem-informasi",
        "name": "Sistem Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 55,
        "applicants": 1700,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-jkt-kesehatan-masyarakat",
        "name": "Kesehatan Masyarakat",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 70,
        "applicants": 1600,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-jkt-ilmu-keperawatan",
        "name": "Ilmu Keperawatan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 75,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-jkt-matematika",
        "name": "Matematika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 45,
        "applicants": 750,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-jkt-psikologi",
        "name": "Psikologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 662,
        "quota": 90,
        "applicants": 3250,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uin-jkt-ilmu-hukum",
        "name": "Ilmu Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 656,
        "quota": 120,
        "applicants": 2800,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uin-jkt-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 658,
        "quota": 95,
        "applicants": 2900,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uin-jkt-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 654,
        "quota": 85,
        "applicants": 2250,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uin-jkt-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 658,
        "quota": 65,
        "applicants": 2650,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uin-jkt-hubungan-internasional",
        "name": "Hubungan Internasional",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 654,
        "quota": 50,
        "applicants": 1850,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-jkt-ekonomi-pembangunan",
        "name": "Ekonomi Pembangunan",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 60,
        "applicants": 1300,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-jkt-perbankan-syariah",
        "name": "Perbankan Syariah",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 75,
        "applicants": 1450,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3114"
  },
  {
    "id": "pnj",
    "name": "Politeknik Negeri Jakarta",
    "shortName": "PNJ",
    "location": "Kampus UI Depok, Jawa Barat",
    "region": "Jawa",
    "type": "Politeknik",
    "majors": [
      {
        "id": "pnj-d4-teknik-informatika",
        "name": "D4 Teknik Informatika",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 656,
        "quota": 45,
        "applicants": 1850,
        "competitiveness": "Tinggi"
      },
      {
        "id": "pnj-d4-rekayasa-perangkat-lu",
        "name": "D4 Rekayasa Perangkat Lunak",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 40,
        "applicants": 1600,
        "competitiveness": "Tinggi"
      },
      {
        "id": "pnj-d4-teknik-multimedia-dig",
        "name": "D4 Teknik Multimedia Digital",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 40,
        "applicants": 1450,
        "competitiveness": "Sedang"
      },
      {
        "id": "pnj-d4-teknik-manufaktur",
        "name": "D4 Teknik Manufaktur",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 634,
        "quota": 45,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "pnj-d4-teknik-otomasi-listri",
        "name": "D4 Teknik Otomasi Listrik Industri",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 45,
        "applicants": 980,
        "competitiveness": "Sedang"
      },
      {
        "id": "pnj-d4-perancangan-jalan-jem",
        "name": "D4 Perancangan Jalan & Jembatan",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 45,
        "applicants": 1080,
        "competitiveness": "Sedang"
      },
      {
        "id": "pnj-d4-akuntansi-keuangan",
        "name": "D4 Akuntansi Keuangan",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 60,
        "applicants": 2100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "pnj-d4-manajemen-keuangan-pe",
        "name": "D4 Manajemen Keuangan Perbankan",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 55,
        "applicants": 1950,
        "competitiveness": "Sedang"
      },
      {
        "id": "pnj-d4-administrasi-bisnis-t",
        "name": "D4 Administrasi Bisnis Terapan",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 55,
        "applicants": 1850,
        "competitiveness": "Sedang"
      },
      {
        "id": "pnj-d4-usaha-jasa-konvensi-m",
        "name": "D4 Usaha Jasa Konvensi (MICE)",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 45,
        "applicants": 1500,
        "competitiveness": "Sedang"
      },
      {
        "id": "pnj-d4-penerbitan-jurnalisti",
        "name": "D4 Penerbitan (Jurnalistik)",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 640,
        "quota": 40,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "pnj-d3-teknik-mesin",
        "name": "D3 Teknik Mesin",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 50,
        "applicants": 980,
        "competitiveness": "Sedang"
      },
      {
        "id": "pnj-d3-teknik-konversi-energ",
        "name": "D3 Teknik Konversi Energi",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 45,
        "applicants": 880,
        "competitiveness": "Sedang"
      },
      {
        "id": "pnj-d3-teknik-elektronika-in",
        "name": "D3 Teknik Elektronika Industri",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 634,
        "quota": 45,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "pnj-d3-teknik-telekomunikasi",
        "name": "D3 Teknik Telekomunikasi",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 45,
        "applicants": 920,
        "competitiveness": "Sedang"
      },
      {
        "id": "pnj-d3-teknik-konstruksi-ged",
        "name": "D3 Teknik Konstruksi Gedung",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 635,
        "quota": 50,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "pnj-d3-akuntansi",
        "name": "D3 Akuntansi",
        "degree": "D3",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 60,
        "applicants": 1850,
        "competitiveness": "Sedang"
      },
      {
        "id": "pnj-d3-keuangan-dan-perbanka",
        "name": "D3 Keuangan dan Perbankan",
        "degree": "D3",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 55,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "pnj-d3-administrasi-bisnis",
        "name": "D3 Administrasi Bisnis",
        "degree": "D3",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 55,
        "applicants": 1650,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3151"
  },
  {
    "id": "ipb",
    "name": "IPB University (Institut Pertanian Bogor)",
    "shortName": "IPB",
    "location": "Dramaga, Bogor, Jawa Barat",
    "region": "Jawa",
    "type": "Institut",
    "majors": [
      {
        "id": "ipb-kedokteran",
        "name": "Kedokteran",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 715,
        "quota": 50,
        "applicants": 2850,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "ipb-ilmu-komputer",
        "name": "Ilmu Komputer",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 685,
        "quota": 75,
        "applicants": 2550,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ipb-statistika-dan-sains-dat",
        "name": "Statistika dan Sains Data",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 670,
        "quota": 65,
        "applicants": 1650,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ipb-aktuaria",
        "name": "Aktuaria",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 672,
        "quota": 45,
        "applicants": 1300,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ipb-teknologi-pangan",
        "name": "Teknologi Pangan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 665,
        "quota": 75,
        "applicants": 1850,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ipb-kedokteran-hewan",
        "name": "Kedokteran Hewan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 655,
        "quota": 110,
        "applicants": 2100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ipb-teknik-mesin-biosistem",
        "name": "Teknik Mesin & Biosistem",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 60,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "ipb-teknik-sipil-dan-lingkun",
        "name": "Teknik Sipil dan Lingkungan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 60,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "ipb-teknologi-industri-perta",
        "name": "Teknologi Industri Pertanian",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 65,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "ipb-arsitektur-lanskap",
        "name": "Arsitektur Lanskap",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 645,
        "quota": 50,
        "applicants": 980,
        "competitiveness": "Sedang"
      },
      {
        "id": "ipb-biokimia",
        "name": "Biokimia",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 55,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "ipb-biologi",
        "name": "Biologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 60,
        "applicants": 850,
        "competitiveness": "Sedang"
      },
      {
        "id": "ipb-kimia",
        "name": "Kimia",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 635,
        "quota": 60,
        "applicants": 780,
        "competitiveness": "Sedang"
      },
      {
        "id": "ipb-matematika",
        "name": "Matematika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 55,
        "applicants": 820,
        "competitiveness": "Sedang"
      },
      {
        "id": "ipb-fisika",
        "name": "Fisika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 50,
        "applicants": 550,
        "competitiveness": "Sedang"
      },
      {
        "id": "ipb-agronomi-hortikultura",
        "name": "Agronomi & Hortikultura",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 95,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "ipb-proteksi-tanaman",
        "name": "Proteksi Tanaman",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 626,
        "quota": 55,
        "applicants": 680,
        "competitiveness": "Sedang"
      },
      {
        "id": "ipb-ilmu-tanah",
        "name": "Ilmu Tanah",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 55,
        "applicants": 750,
        "competitiveness": "Sedang"
      },
      {
        "id": "ipb-silvikultur",
        "name": "Silvikultur",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 55,
        "applicants": 780,
        "competitiveness": "Sedang"
      },
      {
        "id": "ipb-manajemen-hutan",
        "name": "Manajemen Hutan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 60,
        "applicants": 850,
        "competitiveness": "Sedang"
      },
      {
        "id": "ipb-konservasi-sumberdaya-hu",
        "name": "Konservasi Sumberdaya Hutan & Ekowisata",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 55,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "ipb-ilmu-nutrisi-teknologi-p",
        "name": "Ilmu Nutrisi & Teknologi Pakan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 65,
        "applicants": 820,
        "competitiveness": "Sedang"
      },
      {
        "id": "ipb-teknologi-produksi-terna",
        "name": "Teknologi Produksi Ternak",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 626,
        "quota": 65,
        "applicants": 790,
        "competitiveness": "Sedang"
      },
      {
        "id": "ipb-budidaya-perairan",
        "name": "Budidaya Perairan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 624,
        "quota": 60,
        "applicants": 720,
        "competitiveness": "Sedang"
      },
      {
        "id": "ipb-ilmu-dan-teknologi-kelau",
        "name": "Ilmu dan Teknologi Kelautan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 634,
        "quota": 55,
        "applicants": 880,
        "competitiveness": "Sedang"
      },
      {
        "id": "ipb-ilmu-gizi",
        "name": "Ilmu Gizi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 660,
        "quota": 55,
        "applicants": 1750,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ipb-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 670,
        "quota": 75,
        "applicants": 2750,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ipb-agribisnis",
        "name": "Agribisnis",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 75,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "ipb-ekonomi-sumberdaya-lingk",
        "name": "Ekonomi Sumberdaya & Lingkungan",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 50,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "ipb-ilmu-ekonomi-syariah",
        "name": "Ilmu Ekonomi Syariah",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 45,
        "applicants": 920,
        "competitiveness": "Sedang"
      },
      {
        "id": "ipb-ilmu-keluarga-konsumen",
        "name": "Ilmu Keluarga & Konsumen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 640,
        "quota": 50,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "ipb-komunikasi-pengembangan-",
        "name": "Komunikasi & Pengembangan Masyarakat",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 655,
        "quota": 65,
        "applicants": 1800,
        "competitiveness": "Sedang"
      },
      {
        "id": "ipb-d4-rekayasa-perangkat-lu",
        "name": "D4 Rekayasa Perangkat Lunak Terapan",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 662,
        "quota": 50,
        "applicants": 1950,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ipb-d4-akuntansi-terapan",
        "name": "D4 Akuntansi Terapan",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 655,
        "quota": 55,
        "applicants": 1900,
        "competitiveness": "Sedang"
      },
      {
        "id": "ipb-d4-manajemen-agribisnis-",
        "name": "D4 Manajemen Agribisnis Terapan",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 55,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "ipb-d3-komunikasi-digital-da",
        "name": "D3 Komunikasi Digital dan Media",
        "degree": "D3",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 55,
        "applicants": 1700,
        "competitiveness": "Sedang"
      },
      {
        "id": "ipb-d3-ekowisata",
        "name": "D3 Ekowisata",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 50,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "ipb-d3-manajemen-informatika",
        "name": "D3 Manajemen Informatika",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 654,
        "quota": 60,
        "applicants": 1900,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ipb-d3-teknik-komputer",
        "name": "D3 Teknik Komputer",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 650,
        "quota": 55,
        "applicants": 1550,
        "competitiveness": "Sedang"
      },
      {
        "id": "ipb-d3-supervisor-jaminan-mu",
        "name": "D3 Supervisor Jaminan Mutu Pangan",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 644,
        "quota": 50,
        "applicants": 1300,
        "competitiveness": "Sedang"
      },
      {
        "id": "ipb-d3-manajemen-industri-ja",
        "name": "D3 Manajemen Industri Jasa Makanan & Gizi",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 50,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "ipb-d3-paramedik-veteriner",
        "name": "D3 Paramedik Veteriner",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 50,
        "applicants": 1100,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3211"
  },
  {
    "id": "itb",
    "name": "Institut Teknologi Bandung",
    "shortName": "ITB",
    "location": "Bandung & Jatinangor, Jawa Barat",
    "region": "Jawa",
    "type": "Institut",
    "majors": [
      {
        "id": "itb-stei-komputasi-informati",
        "name": "STEI - Komputasi (Informatika & Sistem Informasi)",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 728,
        "quota": 150,
        "applicants": 3650,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "itb-stei-rekayasa-teknik-ele",
        "name": "STEI - Rekayasa (Teknik Elektro & Biomedis)",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 695,
        "quota": 140,
        "applicants": 2150,
        "competitiveness": "Tinggi"
      },
      {
        "id": "itb-sekolah-bisnis-manajemen",
        "name": "Sekolah Bisnis & Manajemen (SBM)",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 698,
        "quota": 110,
        "applicants": 3250,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "itb-fakultas-teknologi-indus",
        "name": "Fakultas Teknologi Industri (FTI - Ganesa)",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 690,
        "quota": 170,
        "applicants": 2850,
        "competitiveness": "Tinggi"
      },
      {
        "id": "itb-fakultas-teknik-mesin-di",
        "name": "Fakultas Teknik Mesin & Dirgantara (FTMD)",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 682,
        "quota": 130,
        "applicants": 1980,
        "competitiveness": "Tinggi"
      },
      {
        "id": "itb-sappk-arsitektur-perenca",
        "name": "SAPPK (Arsitektur & Perencanaan Wilayah Kota)",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 678,
        "quota": 110,
        "applicants": 2200,
        "competitiveness": "Tinggi"
      },
      {
        "id": "itb-sekolah-farmasi-sf-sains",
        "name": "Sekolah Farmasi (SF - Sains & Teknologi Farmasi)",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 675,
        "quota": 75,
        "applicants": 1450,
        "competitiveness": "Tinggi"
      },
      {
        "id": "itb-fakultas-teknik-sipil-li",
        "name": "Fakultas Teknik Sipil & Lingkungan (FTSL - Ganesa)",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 668,
        "quota": 160,
        "applicants": 1850,
        "competitiveness": "Tinggi"
      },
      {
        "id": "itb-fakultas-seni-rupa-desai",
        "name": "Fakultas Seni Rupa & Desain (FSRD - DKV & Desain)",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 658,
        "quota": 130,
        "applicants": 2250,
        "competitiveness": "Tinggi"
      },
      {
        "id": "itb-fmipa-matematika",
        "name": "FMIPA - Matematika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 662,
        "quota": 85,
        "applicants": 1250,
        "competitiveness": "Tinggi"
      },
      {
        "id": "itb-fmipa-ilmu-pengetahuan-a",
        "name": "FMIPA - Ilmu Pengetahuan Alam (Fisika, Kimia, Astronomi)",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 650,
        "quota": 120,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "itb-fakultas-ilmu-teknologi-",
        "name": "Fakultas Ilmu & Teknologi Kebumian (FITB)",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 155,
        "applicants": 1420,
        "competitiveness": "Sedang"
      },
      {
        "id": "itb-sith-program-sains-biolo",
        "name": "SITH - Program Sains (Biologi, Mikrobiologi)",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 645,
        "quota": 90,
        "applicants": 980,
        "competitiveness": "Sedang"
      },
      {
        "id": "itb-sith-program-rekayasa-bi",
        "name": "SITH - Program Rekayasa (Bioinformatika, Pertanian)",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 140,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "itb-fti-kampus-cirebon-tekni",
        "name": "FTI Kampus Cirebon (Teknik Industri, Kimia)",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 80,
        "applicants": 850,
        "competitiveness": "Sedang"
      },
      {
        "id": "itb-ftsl-kampus-jatinangor-t",
        "name": "FTSL Kampus Jatinangor (Teknik Lingkungan, Pengairan)",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 645,
        "quota": 90,
        "applicants": 920,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3212"
  },
  {
    "id": "unpad",
    "name": "Universitas Padjadjaran",
    "shortName": "UNPAD",
    "location": "Jatinangor & Bandung, Jawa Barat",
    "region": "Jawa",
    "type": "Universitas",
    "majors": [
      {
        "id": "unpad-pendidikan-dokter-kedokt",
        "name": "Pendidikan Dokter (Kedokteran)",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 724,
        "quota": 110,
        "applicants": 3950,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "unpad-pendidikan-dokter-gigi",
        "name": "Pendidikan Dokter Gigi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 676,
        "quota": 75,
        "applicants": 1680,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unpad-farmasi",
        "name": "Farmasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 668,
        "quota": 85,
        "applicants": 2350,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unpad-teknik-informatika",
        "name": "Teknik Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 678,
        "quota": 70,
        "applicants": 2500,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unpad-teknik-elektro",
        "name": "Teknik Elektro",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 45,
        "applicants": 920,
        "competitiveness": "Sedang"
      },
      {
        "id": "unpad-statistika",
        "name": "Statistika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 655,
        "quota": 55,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "unpad-aktuaria",
        "name": "Aktuaria",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 662,
        "quota": 45,
        "applicants": 1150,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unpad-matematika",
        "name": "Matematika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 55,
        "applicants": 780,
        "competitiveness": "Sedang"
      },
      {
        "id": "unpad-biologi",
        "name": "Biologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 634,
        "quota": 60,
        "applicants": 750,
        "competitiveness": "Sedang"
      },
      {
        "id": "unpad-kimia",
        "name": "Kimia",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 60,
        "applicants": 710,
        "competitiveness": "Sedang"
      },
      {
        "id": "unpad-teknologi-pangan",
        "name": "Teknologi Pangan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 650,
        "quota": 60,
        "applicants": 1450,
        "competitiveness": "Sedang"
      },
      {
        "id": "unpad-teknik-pertanian",
        "name": "Teknik Pertanian",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 55,
        "applicants": 820,
        "competitiveness": "Sedang"
      },
      {
        "id": "unpad-agroteknologi",
        "name": "Agroteknologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 634,
        "quota": 120,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "unpad-agribisnis",
        "name": "Agribisnis",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 75,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "unpad-peternakan",
        "name": "Peternakan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 140,
        "applicants": 1600,
        "competitiveness": "Sedang"
      },
      {
        "id": "unpad-perikanan",
        "name": "Perikanan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 624,
        "quota": 80,
        "applicants": 890,
        "competitiveness": "Sedang"
      },
      {
        "id": "unpad-ilmu-kelautan",
        "name": "Ilmu Kelautan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 626,
        "quota": 60,
        "applicants": 750,
        "competitiveness": "Sedang"
      },
      {
        "id": "unpad-keperawatan",
        "name": "Keperawatan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 100,
        "applicants": 1950,
        "competitiveness": "Sedang"
      },
      {
        "id": "unpad-psikologi",
        "name": "Psikologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 670,
        "quota": 105,
        "applicants": 3450,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unpad-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 668,
        "quota": 75,
        "applicants": 3100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unpad-ilmu-hukum",
        "name": "Ilmu Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 665,
        "quota": 190,
        "applicants": 3700,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unpad-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 668,
        "quota": 85,
        "applicants": 2850,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unpad-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 664,
        "quota": 80,
        "applicants": 2200,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unpad-ilmu-hubungan-internasio",
        "name": "Ilmu Hubungan Internasional",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 665,
        "quota": 50,
        "applicants": 1950,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unpad-ilmu-administrasi-publik",
        "name": "Ilmu Administrasi Publik",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 60,
        "applicants": 1450,
        "competitiveness": "Sedang"
      },
      {
        "id": "unpad-ilmu-administrasi-bisnis",
        "name": "Ilmu Administrasi Bisnis",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 655,
        "quota": 65,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "unpad-ilmu-hubungan-masyarakat",
        "name": "Ilmu Hubungan Masyarakat",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 656,
        "quota": 50,
        "applicants": 1550,
        "competitiveness": "Sedang"
      },
      {
        "id": "unpad-jurnalistik",
        "name": "Jurnalistik",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 50,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "unpad-televisi-dan-film",
        "name": "Televisi dan Film",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 654,
        "quota": 45,
        "applicants": 1600,
        "competitiveness": "Sedang"
      },
      {
        "id": "unpad-sastra-inggris",
        "name": "Sastra Inggris",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 55,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "unpad-sastra-jepang",
        "name": "Sastra Jepang",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 45,
        "applicants": 980,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3213"
  },
  {
    "id": "upi",
    "name": "Universitas Pendidikan Indonesia",
    "shortName": "UPI",
    "location": "Bandung, Jawa Barat",
    "region": "Jawa",
    "type": "Universitas",
    "majors": [
      {
        "id": "upi-kedokteran",
        "name": "Kedokteran",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 712,
        "quota": 45,
        "applicants": 2600,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "upi-ilmu-komputer",
        "name": "Ilmu Komputer",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 662,
        "quota": 55,
        "applicants": 2100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "upi-teknik-elektro",
        "name": "Teknik Elektro",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 50,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "upi-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 55,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "upi-pendidikan-matematika",
        "name": "Pendidikan Matematika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 65,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "upi-pendidikan-biologi",
        "name": "Pendidikan Biologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 634,
        "quota": 60,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "upi-psikologi",
        "name": "Psikologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 662,
        "quota": 90,
        "applicants": 3200,
        "competitiveness": "Tinggi"
      },
      {
        "id": "upi-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 660,
        "quota": 65,
        "applicants": 2800,
        "competitiveness": "Tinggi"
      },
      {
        "id": "upi-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 658,
        "quota": 95,
        "applicants": 2900,
        "competitiveness": "Tinggi"
      },
      {
        "id": "upi-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 654,
        "quota": 85,
        "applicants": 2200,
        "competitiveness": "Tinggi"
      },
      {
        "id": "upi-pendidikan-guru-sekolah-",
        "name": "Pendidikan Guru Sekolah Dasar (PGSD)",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 130,
        "applicants": 2700,
        "competitiveness": "Tinggi"
      },
      {
        "id": "upi-pendidikan-bahasa-inggri",
        "name": "Pendidikan Bahasa Inggris",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 70,
        "applicants": 1700,
        "competitiveness": "Sedang"
      },
      {
        "id": "upi-pendidikan-bahasa-korea",
        "name": "Pendidikan Bahasa Korea",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 45,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "upi-pendidikan-bahasa-jepang",
        "name": "Pendidikan Bahasa Jepang",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 50,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "upi-pendidikan-bisnis",
        "name": "Pendidikan Bisnis",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 55,
        "applicants": 1200,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3214"
  },
  {
    "id": "unsika",
    "name": "Universitas Singaperbangsa Karawang",
    "shortName": "UNSIKA",
    "location": "Karawang, Jawa Barat",
    "region": "Jawa",
    "type": "Universitas",
    "majors": [
      {
        "id": "unsika-informatika",
        "name": "Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 646,
        "quota": 75,
        "applicants": 1750,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unsika-sistem-informasi",
        "name": "Sistem Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 65,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsika-teknik-industri",
        "name": "Teknik Industri",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 85,
        "applicants": 1450,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsika-teknik-mesin",
        "name": "Teknik Mesin",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 75,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsika-teknik-elektro",
        "name": "Teknik Elektro",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 65,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsika-teknik-lingkungan",
        "name": "Teknik Lingkungan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 50,
        "applicants": 880,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsika-gizi",
        "name": "Gizi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 50,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsika-farmasi",
        "name": "Farmasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 45,
        "applicants": 1500,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsika-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 140,
        "applicants": 2700,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unsika-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 110,
        "applicants": 2050,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsika-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 80,
        "applicants": 2250,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unsika-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 160,
        "applicants": 2300,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsika-hubungan-internasional",
        "name": "Hubungan Internasional",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 50,
        "applicants": 1350,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3215"
  },
  {
    "id": "untirta",
    "name": "Universitas Sultan Ageng Tirtayasa",
    "shortName": "UNTIRTA",
    "location": "Serang & Cilegon, Banten",
    "region": "Jawa",
    "type": "Universitas",
    "majors": [
      {
        "id": "untirta-kedokteran",
        "name": "Kedokteran",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 692,
        "quota": 50,
        "applicants": 2100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "untirta-informatika",
        "name": "Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 65,
        "applicants": 1750,
        "competitiveness": "Tinggi"
      },
      {
        "id": "untirta-teknik-industri",
        "name": "Teknik Industri",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 80,
        "applicants": 1300,
        "competitiveness": "Sedang"
      },
      {
        "id": "untirta-teknik-kimia",
        "name": "Teknik Kimia",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 70,
        "applicants": 980,
        "competitiveness": "Sedang"
      },
      {
        "id": "untirta-teknik-mesin",
        "name": "Teknik Mesin",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 75,
        "applicants": 1020,
        "competitiveness": "Sedang"
      },
      {
        "id": "untirta-teknik-elektro",
        "name": "Teknik Elektro",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 75,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "untirta-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 80,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "untirta-teknik-metalurgi",
        "name": "Teknik Metalurgi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 65,
        "applicants": 850,
        "competitiveness": "Sedang"
      },
      {
        "id": "untirta-gizi",
        "name": "Gizi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 50,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "untirta-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 175,
        "applicants": 2550,
        "competitiveness": "Sedang"
      },
      {
        "id": "untirta-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 130,
        "applicants": 2700,
        "competitiveness": "Tinggi"
      },
      {
        "id": "untirta-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 645,
        "quota": 115,
        "applicants": 2050,
        "competitiveness": "Sedang"
      },
      {
        "id": "untirta-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 85,
        "applicants": 2450,
        "competitiveness": "Tinggi"
      },
      {
        "id": "untirta-pgsd",
        "name": "PGSD",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 638,
        "quota": 110,
        "applicants": 1950,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3216"
  },
  {
    "id": "unsil",
    "name": "Universitas Siliwangi",
    "shortName": "UNSIL",
    "location": "Tasikmalaya, Jawa Barat",
    "region": "Jawa",
    "type": "Universitas",
    "majors": [
      {
        "id": "unsil-informatika",
        "name": "Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 60,
        "applicants": 1550,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsil-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 634,
        "quota": 65,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsil-teknik-elektro",
        "name": "Teknik Elektro",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 55,
        "applicants": 920,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsil-kesehatan-masyarakat",
        "name": "Kesehatan Masyarakat",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 75,
        "applicants": 1450,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsil-gizi",
        "name": "Gizi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 45,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsil-agroteknologi",
        "name": "Agroteknologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 624,
        "quota": 70,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsil-agribisnis",
        "name": "Agribisnis",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 65,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsil-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 125,
        "applicants": 2600,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unsil-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 100,
        "applicants": 1950,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsil-ekonomi-pembangunan",
        "name": "Ekonomi Pembangunan",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 634,
        "quota": 75,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsil-pendidikan-guru-sekolah-",
        "name": "Pendidikan Guru Sekolah Dasar (PGSD)",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 638,
        "quota": 90,
        "applicants": 1850,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsil-pendidikan-bahasa-inggri",
        "name": "Pendidikan Bahasa Inggris",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 632,
        "quota": 55,
        "applicants": 1100,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3217"
  },
  {
    "id": "uin-bdg",
    "name": "UIN Sunan Gunung Djati Bandung",
    "shortName": "UIN Bandung",
    "location": "Cibiru, Bandung, Jawa Barat",
    "region": "Jawa",
    "type": "UIN",
    "majors": [
      {
        "id": "uin-bdg-teknik-informatika",
        "name": "Teknik Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 55,
        "applicants": 1900,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uin-bdg-teknik-elektro",
        "name": "Teknik Elektro",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 45,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-bdg-matematika",
        "name": "Matematika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 626,
        "quota": 40,
        "applicants": 680,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-bdg-biologi",
        "name": "Biologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 625,
        "quota": 40,
        "applicants": 650,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-bdg-psikologi",
        "name": "Psikologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 656,
        "quota": 80,
        "applicants": 2900,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uin-bdg-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 654,
        "quota": 70,
        "applicants": 2600,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uin-bdg-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 85,
        "applicants": 2650,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uin-bdg-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 75,
        "applicants": 2050,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-bdg-ilmu-hukum",
        "name": "Ilmu Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 95,
        "applicants": 2350,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-bdg-administrasi-publik",
        "name": "Administrasi Publik",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 65,
        "applicants": 1450,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3218"
  },
  {
    "id": "polban",
    "name": "Politeknik Negeri Bandung",
    "shortName": "POLBAN",
    "location": "Ciwaruga, Bandung Barat, Jawa Barat",
    "region": "Jawa",
    "type": "Politeknik",
    "majors": [
      {
        "id": "polban-d4-teknik-informatika",
        "name": "D4 Teknik Informatika",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 662,
        "quota": 45,
        "applicants": 2150,
        "competitiveness": "Tinggi"
      },
      {
        "id": "polban-d4-rekayasa-perangkat-lu",
        "name": "D4 Rekayasa Perangkat Lunak",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 658,
        "quota": 40,
        "applicants": 1850,
        "competitiveness": "Tinggi"
      },
      {
        "id": "polban-d4-teknik-telekomunikasi",
        "name": "D4 Teknik Telekomunikasi",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 45,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "polban-d4-teknik-elektronika",
        "name": "D4 Teknik Elektronika",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 45,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "polban-d4-perancangan-manufaktu",
        "name": "D4 Perancangan Manufaktur",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 45,
        "applicants": 1000,
        "competitiveness": "Sedang"
      },
      {
        "id": "polban-d4-manajemen-rekayasa-ko",
        "name": "D4 Manajemen Rekayasa Konstruksi",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 45,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "polban-d4-teknik-kimia-produksi",
        "name": "D4 Teknik Kimia Produksi Bersih",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 40,
        "applicants": 920,
        "competitiveness": "Sedang"
      },
      {
        "id": "polban-d4-akuntansi-manajemen-p",
        "name": "D4 Akuntansi Manajemen Pemerintahan",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 50,
        "applicants": 2050,
        "competitiveness": "Tinggi"
      },
      {
        "id": "polban-d4-manajemen-aset",
        "name": "D4 Manajemen Aset",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 50,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "polban-d4-administrasi-bisnis-t",
        "name": "D4 Administrasi Bisnis Terapan",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 50,
        "applicants": 1900,
        "competitiveness": "Sedang"
      },
      {
        "id": "polban-d4-keuangan-syariah",
        "name": "D4 Keuangan Syariah",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 45,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "polban-d3-teknik-konstruksi-ged",
        "name": "D3 Teknik Konstruksi Gedung",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 50,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "polban-d3-teknik-mesin",
        "name": "D3 Teknik Mesin",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 50,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "polban-d3-teknik-refrigerasi-ta",
        "name": "D3 Teknik Refrigerasi & Tata Udara",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 634,
        "quota": 45,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "polban-d3-teknik-kimia",
        "name": "D3 Teknik Kimia",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 635,
        "quota": 45,
        "applicants": 980,
        "competitiveness": "Sedang"
      },
      {
        "id": "polban-d3-teknik-komputer",
        "name": "D3 Teknik Komputer",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 50,
        "applicants": 1600,
        "competitiveness": "Sedang"
      },
      {
        "id": "polban-d3-akuntansi",
        "name": "D3 Akuntansi",
        "degree": "D3",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 55,
        "applicants": 1850,
        "competitiveness": "Sedang"
      },
      {
        "id": "polban-d3-keuangan-dan-perbanka",
        "name": "D3 Keuangan dan Perbankan",
        "degree": "D3",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 50,
        "applicants": 1700,
        "competitiveness": "Sedang"
      },
      {
        "id": "polban-d3-administrasi-bisnis",
        "name": "D3 Administrasi Bisnis",
        "degree": "D3",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 50,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "polban-d3-bahasa-inggris",
        "name": "D3 Bahasa Inggris",
        "degree": "D3",
        "category": "Soshum",
        "targetScore": 640,
        "quota": 45,
        "applicants": 1300,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3251"
  },
  {
    "id": "ugm",
    "name": "Universitas Gadjah Mada",
    "shortName": "UGM",
    "location": "Sleman, D.I. Yogyakarta",
    "region": "Jawa",
    "type": "Universitas",
    "majors": [
      {
        "id": "ugm-kedokteran",
        "name": "Kedokteran",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 735,
        "quota": 90,
        "applicants": 4200,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "ugm-teknologi-informasi",
        "name": "Teknologi Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 712,
        "quota": 60,
        "applicants": 2600,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "ugm-ilmu-komputer",
        "name": "Ilmu Komputer",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 710,
        "quota": 55,
        "applicants": 2300,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "ugm-farmasi",
        "name": "Farmasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 682,
        "quota": 90,
        "applicants": 2450,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ugm-kedokteran-gigi",
        "name": "Kedokteran Gigi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 686,
        "quota": 60,
        "applicants": 1600,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ugm-teknik-industri",
        "name": "Teknik Industri",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 676,
        "quota": 75,
        "applicants": 1950,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ugm-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 664,
        "quota": 85,
        "applicants": 1750,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ugm-teknik-mesin",
        "name": "Teknik Mesin",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 662,
        "quota": 70,
        "applicants": 1450,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ugm-teknik-elektro",
        "name": "Teknik Elektro",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 668,
        "quota": 70,
        "applicants": 1400,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ugm-arsitektur",
        "name": "Arsitektur",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 668,
        "quota": 45,
        "applicants": 1250,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ugm-perencanaan-wilayah-kota",
        "name": "Perencanaan Wilayah & Kota (PWK)",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 662,
        "quota": 45,
        "applicants": 1180,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ugm-teknik-nuklir",
        "name": "Teknik Nuklir",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 655,
        "quota": 45,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-teknik-fisika",
        "name": "Teknik Fisika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 650,
        "quota": 50,
        "applicants": 850,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-teknik-kimia",
        "name": "Teknik Kimia",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 660,
        "quota": 75,
        "applicants": 1200,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ugm-teknik-geodesi",
        "name": "Teknik Geodesi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 55,
        "applicants": 980,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-teknik-geologi",
        "name": "Teknik Geologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 55,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-teknik-biomedis",
        "name": "Teknik Biomedis",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 665,
        "quota": 40,
        "applicants": 990,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ugm-statistika",
        "name": "Statistika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 664,
        "quota": 45,
        "applicants": 1300,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ugm-aktuaria",
        "name": "Aktuaria",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 675,
        "quota": 35,
        "applicants": 1150,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "ugm-matematika",
        "name": "Matematika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 646,
        "quota": 50,
        "applicants": 920,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-fisika",
        "name": "Fisika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 55,
        "applicants": 620,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-kimia",
        "name": "Kimia",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 634,
        "quota": 60,
        "applicants": 780,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-biologi",
        "name": "Biologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 75,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-geofisika",
        "name": "Geofisika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 40,
        "applicants": 680,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-gizi-kesehatan",
        "name": "Gizi Kesehatan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 658,
        "quota": 45,
        "applicants": 1550,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ugm-ilmu-keperawatan",
        "name": "Ilmu Keperawatan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 65,
        "applicants": 1450,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-kedokteran-hewan",
        "name": "Kedokteran Hewan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 90,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-kehutanan",
        "name": "Kehutanan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 635,
        "quota": 115,
        "applicants": 1500,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-agronomi",
        "name": "Agronomi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 55,
        "applicants": 920,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-proteksi-tanaman",
        "name": "Proteksi Tanaman",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 624,
        "quota": 45,
        "applicants": 650,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-ilmu-tanah",
        "name": "Ilmu Tanah",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 625,
        "quota": 45,
        "applicants": 720,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-penyuluhan-dan-komunikas",
        "name": "Penyuluhan dan Komunikasi Pertanian",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 626,
        "quota": 40,
        "applicants": 690,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-sosial-ekonomi-pertanian",
        "name": "Sosial Ekonomi Pertanian (Agribisnis)",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 55,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-akuakultur-budidaya-peri",
        "name": "Akuakultur (Budidaya Perikanan)",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 622,
        "quota": 45,
        "applicants": 640,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-manajemen-sumberdaya-aku",
        "name": "Manajemen Sumberdaya Akuatik",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 620,
        "quota": 45,
        "applicants": 590,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-teknologi-pangan-dan-has",
        "name": "Teknologi Pangan dan Hasil Pertanian",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 55,
        "applicants": 1320,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-teknik-pertanian",
        "name": "Teknik Pertanian",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 50,
        "applicants": 850,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-teknologi-industri-perta",
        "name": "Teknologi Industri Pertanian",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 50,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-ilmu-dan-industri-petern",
        "name": "Ilmu dan Industri Peternakan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 120,
        "applicants": 1600,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-ilmu-hubungan-internasio",
        "name": "Ilmu Hubungan Internasional",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 686,
        "quota": 45,
        "applicants": 2350,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "ugm-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 682,
        "quota": 60,
        "applicants": 3100,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "ugm-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 680,
        "quota": 65,
        "applicants": 2600,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "ugm-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 676,
        "quota": 45,
        "applicants": 2800,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "ugm-psikologi",
        "name": "Psikologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 674,
        "quota": 90,
        "applicants": 3750,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ugm-ilmu-hukum",
        "name": "Ilmu Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 672,
        "quota": 140,
        "applicants": 3950,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ugm-ilmu-ekonomi",
        "name": "Ilmu Ekonomi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 668,
        "quota": 45,
        "applicants": 1350,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ugm-manajemen-kebijakan-publ",
        "name": "Manajemen & Kebijakan Publik",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 658,
        "quota": 40,
        "applicants": 1300,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-politik-pemerintahan",
        "name": "Politik & Pemerintahan",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 654,
        "quota": 40,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-pembangunan-sosial-kesej",
        "name": "Pembangunan Sosial & Kesejahteraan",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 40,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-sosiologi",
        "name": "Sosiologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 40,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-antropologi-budaya",
        "name": "Antropologi Budaya",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 638,
        "quota": 40,
        "applicants": 920,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-sastra-inggris",
        "name": "Sastra Inggris",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 35,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-sastra-jepang",
        "name": "Sastra Jepang",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 30,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-sastra-korea",
        "name": "Sastra Korea",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 30,
        "applicants": 1450,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ugm-sastra-indonesia",
        "name": "Sastra Indonesia",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 635,
        "quota": 35,
        "applicants": 880,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-sastra-arab",
        "name": "Sastra Arab",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 630,
        "quota": 35,
        "applicants": 780,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-sastra-prancis",
        "name": "Sastra Prancis",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 632,
        "quota": 25,
        "applicants": 620,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-pariwisata",
        "name": "Pariwisata",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 645,
        "quota": 35,
        "applicants": 1280,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-sejarah",
        "name": "Sejarah",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 628,
        "quota": 35,
        "applicants": 690,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-arkeologi",
        "name": "Arkeologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 628,
        "quota": 30,
        "applicants": 650,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-filsafat",
        "name": "Filsafat",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 625,
        "quota": 45,
        "applicants": 720,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-d4-teknologi-rekayasa-pe",
        "name": "D4 Teknologi Rekayasa Perangkat Lunak",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 670,
        "quota": 50,
        "applicants": 2200,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ugm-d4-manajemen-informasi-k",
        "name": "D4 Manajemen Informasi Kesehatan",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 660,
        "quota": 45,
        "applicants": 1750,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ugm-d4-teknologi-rekayasa-el",
        "name": "D4 Teknologi Rekayasa Elektro",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 654,
        "quota": 45,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-d4-teknologi-rekayasa-me",
        "name": "D4 Teknologi Rekayasa Mesin",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 45,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-d4-teknologi-rekayasa-in",
        "name": "D4 Teknologi Rekayasa Instrumentasi & Kontrol",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 40,
        "applicants": 980,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-d4-pengelolaan-hutan",
        "name": "D4 Pengelolaan Hutan",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 45,
        "applicants": 920,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-d4-pengembangan-produk-a",
        "name": "D4 Pengembangan Produk Agroindustri",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 644,
        "quota": 45,
        "applicants": 980,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-d4-akuntansi-sektor-publ",
        "name": "D4 Akuntansi Sektor Publik",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 666,
        "quota": 55,
        "applicants": 2300,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ugm-d4-manajemen-penilaian-p",
        "name": "D4 Manajemen & Penilaian Properti",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 660,
        "quota": 50,
        "applicants": 2050,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ugm-d4-perbankan",
        "name": "D4 Perbankan",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 662,
        "quota": 50,
        "applicants": 2100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ugm-d4-bisnis-perjalanan-wis",
        "name": "D4 Bisnis Perjalanan Wisata",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 655,
        "quota": 45,
        "applicants": 1700,
        "competitiveness": "Sedang"
      },
      {
        "id": "ugm-d4-bahasa-inggris-terapa",
        "name": "D4 Bahasa Inggris Terapan",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 654,
        "quota": 40,
        "applicants": 1450,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3311"
  },
  {
    "id": "uny",
    "name": "Universitas Negeri Yogyakarta",
    "shortName": "UNY",
    "location": "Sleman, D.I. Yogyakarta",
    "region": "Jawa",
    "type": "Universitas",
    "majors": [
      {
        "id": "uny-teknologi-informasi",
        "name": "Teknologi Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 660,
        "quota": 50,
        "applicants": 1750,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uny-teknik-elektro",
        "name": "Teknik Elektro",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 50,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "uny-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 55,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "uny-statistika",
        "name": "Statistika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 644,
        "quota": 45,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "uny-pendidikan-matematika",
        "name": "Pendidikan Matematika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 60,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "uny-pendidikan-biologi",
        "name": "Pendidikan Biologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 55,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "uny-pendidikan-fisika",
        "name": "Pendidikan Fisika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 624,
        "quota": 45,
        "applicants": 750,
        "competitiveness": "Sedang"
      },
      {
        "id": "uny-psikologi",
        "name": "Psikologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 664,
        "quota": 85,
        "applicants": 3100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uny-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 662,
        "quota": 60,
        "applicants": 2750,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uny-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 658,
        "quota": 100,
        "applicants": 2950,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uny-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 654,
        "quota": 80,
        "applicants": 2150,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uny-pendidikan-guru-sekolah-",
        "name": "Pendidikan Guru Sekolah Dasar (PGSD)",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 120,
        "applicants": 2500,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uny-pendidikan-bahasa-inggri",
        "name": "Pendidikan Bahasa Inggris",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 65,
        "applicants": 1600,
        "competitiveness": "Sedang"
      },
      {
        "id": "uny-pendidikan-luar-biasa-pl",
        "name": "Pendidikan Luar Biasa (PLB)",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 632,
        "quota": 60,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "uny-d4-teknik-mesin-terapan",
        "name": "D4 Teknik Mesin Terapan",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 644,
        "quota": 45,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "uny-d4-teknik-otomotif",
        "name": "D4 Teknik Otomotif",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 45,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "uny-d4-teknik-sipil-terapan",
        "name": "D4 Teknik Sipil Terapan",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 645,
        "quota": 45,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "uny-d4-tata-boga",
        "name": "D4 Tata Boga",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 50,
        "applicants": 1800,
        "competitiveness": "Sedang"
      },
      {
        "id": "uny-d4-tata-busana",
        "name": "D4 Tata Busana",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 45,
        "applicants": 1500,
        "competitiveness": "Sedang"
      },
      {
        "id": "uny-d4-pengelolaan-perhotela",
        "name": "D4 Pengelolaan Perhotelan",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 50,
        "applicants": 1700,
        "competitiveness": "Sedang"
      },
      {
        "id": "uny-d4-akuntansi-terapan",
        "name": "D4 Akuntansi Terapan",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 50,
        "applicants": 1800,
        "competitiveness": "Sedang"
      },
      {
        "id": "uny-d4-administrasi-perkanto",
        "name": "D4 Administrasi Perkantoran",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 50,
        "applicants": 1650,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3312"
  },
  {
    "id": "upn-yk",
    "name": "UPN 'Veteran' Yogyakarta",
    "shortName": "UPNYK",
    "location": "Sleman, D.I. Yogyakarta",
    "region": "Jawa",
    "type": "Universitas",
    "majors": [
      {
        "id": "upn-yk-teknik-perminyakan",
        "name": "Teknik Perminyakan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 670,
        "quota": 75,
        "applicants": 2300,
        "competitiveness": "Tinggi"
      },
      {
        "id": "upn-yk-teknik-pertambangan",
        "name": "Teknik Pertambangan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 668,
        "quota": 80,
        "applicants": 2400,
        "competitiveness": "Tinggi"
      },
      {
        "id": "upn-yk-teknik-geologi",
        "name": "Teknik Geologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 65,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "upn-yk-teknik-geofisika",
        "name": "Teknik Geofisika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 50,
        "applicants": 920,
        "competitiveness": "Sedang"
      },
      {
        "id": "upn-yk-informatika",
        "name": "Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 662,
        "quota": 65,
        "applicants": 2100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "upn-yk-sistem-informasi",
        "name": "Sistem Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 654,
        "quota": 55,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "upn-yk-teknik-industri",
        "name": "Teknik Industri",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 655,
        "quota": 75,
        "applicants": 1600,
        "competitiveness": "Sedang"
      },
      {
        "id": "upn-yk-teknik-kimia",
        "name": "Teknik Kimia",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 70,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "upn-yk-teknik-lingkungan",
        "name": "Teknik Lingkungan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 646,
        "quota": 55,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "upn-yk-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 664,
        "quota": 85,
        "applicants": 3100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "upn-yk-hubungan-internasional",
        "name": "Hubungan Internasional",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 660,
        "quota": 60,
        "applicants": 2100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "upn-yk-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 660,
        "quota": 110,
        "applicants": 2950,
        "competitiveness": "Tinggi"
      },
      {
        "id": "upn-yk-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 656,
        "quota": 95,
        "applicants": 2200,
        "competitiveness": "Tinggi"
      },
      {
        "id": "upn-yk-ilmu-administrasi-bisnis",
        "name": "Ilmu Administrasi Bisnis",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 75,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "upn-yk-ekonomi-pembangunan",
        "name": "Ekonomi Pembangunan",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 65,
        "applicants": 1250,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3313"
  },
  {
    "id": "isi-yk",
    "name": "Institut Seni Indonesia Yogyakarta",
    "shortName": "ISI Yogyakarta",
    "location": "Sewon, Bantul, D.I. Yogyakarta",
    "region": "Jawa",
    "type": "Institut",
    "majors": [
      {
        "id": "isi-yk-desain-komunikasi-visual",
        "name": "Desain Komunikasi Visual (DKV)",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 65,
        "applicants": 2150,
        "competitiveness": "Tinggi"
      },
      {
        "id": "isi-yk-televisi-dan-film",
        "name": "Televisi dan Film",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 60,
        "applicants": 1800,
        "competitiveness": "Sedang"
      },
      {
        "id": "isi-yk-desain-interior",
        "name": "Desain Interior",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 640,
        "quota": 50,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "isi-yk-seni-murni-seni-lukis-pa",
        "name": "Seni Murni (Seni Lukis, Patung)",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 628,
        "quota": 55,
        "applicants": 850,
        "competitiveness": "Sedang"
      },
      {
        "id": "isi-yk-seni-musik",
        "name": "Seni Musik",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 635,
        "quota": 60,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "isi-yk-fotografi",
        "name": "Fotografi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 638,
        "quota": 50,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "isi-yk-seni-tari",
        "name": "Seni Tari",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 622,
        "quota": 45,
        "applicants": 620,
        "competitiveness": "Sedang"
      },
      {
        "id": "isi-yk-seni-teater",
        "name": "Seni Teater",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 620,
        "quota": 40,
        "applicants": 550,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3314"
  },
  {
    "id": "uin-suka",
    "name": "UIN Sunan Kalijaga Yogyakarta",
    "shortName": "UIN Sunan Kalijaga",
    "location": "Sleman, D.I. Yogyakarta",
    "region": "Jawa",
    "type": "UIN",
    "majors": [
      {
        "id": "uin-suka-informatika",
        "name": "Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 654,
        "quota": 50,
        "applicants": 1800,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uin-suka-teknik-industri",
        "name": "Teknik Industri",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 45,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-suka-matematika",
        "name": "Matematika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 40,
        "applicants": 720,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-suka-biologi",
        "name": "Biologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 40,
        "applicants": 680,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-suka-psikologi",
        "name": "Psikologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 660,
        "quota": 75,
        "applicants": 2850,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uin-suka-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 656,
        "quota": 60,
        "applicants": 2400,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uin-suka-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 654,
        "quota": 70,
        "applicants": 2500,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uin-suka-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 60,
        "applicants": 1950,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-suka-ilmu-hukum",
        "name": "Ilmu Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 85,
        "applicants": 2200,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-suka-sosiologi",
        "name": "Sosiologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 638,
        "quota": 50,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-suka-ilmu-perpustakaan",
        "name": "Ilmu Perpustakaan",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 640,
        "quota": 50,
        "applicants": 1150,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3315"
  },
  {
    "id": "undip",
    "name": "Universitas Diponegoro",
    "shortName": "UNDIP",
    "location": "Tembalang, Semarang, Jawa Tengah",
    "region": "Jawa",
    "type": "Universitas",
    "majors": [
      {
        "id": "undip-kedokteran",
        "name": "Kedokteran",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 726,
        "quota": 95,
        "applicants": 3850,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "undip-farmasi",
        "name": "Farmasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 670,
        "quota": 60,
        "applicants": 1850,
        "competitiveness": "Tinggi"
      },
      {
        "id": "undip-kedokteran-gigi",
        "name": "Kedokteran Gigi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 675,
        "quota": 45,
        "applicants": 1400,
        "competitiveness": "Tinggi"
      },
      {
        "id": "undip-informatika",
        "name": "Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 685,
        "quota": 75,
        "applicants": 2650,
        "competitiveness": "Tinggi"
      },
      {
        "id": "undip-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 658,
        "quota": 90,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "undip-teknik-industri",
        "name": "Teknik Industri",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 665,
        "quota": 85,
        "applicants": 1800,
        "competitiveness": "Tinggi"
      },
      {
        "id": "undip-teknik-elektro",
        "name": "Teknik Elektro",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 655,
        "quota": 75,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "undip-teknik-mesin",
        "name": "Teknik Mesin",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 656,
        "quota": 80,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "undip-teknik-arsitektur",
        "name": "Teknik Arsitektur",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 660,
        "quota": 60,
        "applicants": 1400,
        "competitiveness": "Tinggi"
      },
      {
        "id": "undip-perencanaan-wilayah-kota",
        "name": "Perencanaan Wilayah & Kota (PWK)",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 655,
        "quota": 65,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "undip-teknik-kimia",
        "name": "Teknik Kimia",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 75,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "undip-teknik-lingkungan",
        "name": "Teknik Lingkungan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 650,
        "quota": 60,
        "applicants": 1080,
        "competitiveness": "Sedang"
      },
      {
        "id": "undip-teknik-geologi",
        "name": "Teknik Geologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 645,
        "quota": 55,
        "applicants": 920,
        "competitiveness": "Sedang"
      },
      {
        "id": "undip-teknik-geodesi",
        "name": "Teknik Geodesi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 55,
        "applicants": 850,
        "competitiveness": "Sedang"
      },
      {
        "id": "undip-teknik-perkapalan",
        "name": "Teknik Perkapalan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 55,
        "applicants": 780,
        "competitiveness": "Sedang"
      },
      {
        "id": "undip-statistika",
        "name": "Statistika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 654,
        "quota": 55,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "undip-matematika",
        "name": "Matematika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 55,
        "applicants": 820,
        "competitiveness": "Sedang"
      },
      {
        "id": "undip-bioteknologi",
        "name": "Bioteknologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 650,
        "quota": 45,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "undip-gizi",
        "name": "Gizi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 655,
        "quota": 55,
        "applicants": 1600,
        "competitiveness": "Tinggi"
      },
      {
        "id": "undip-kesehatan-masyarakat",
        "name": "Kesehatan Masyarakat",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 646,
        "quota": 120,
        "applicants": 2100,
        "competitiveness": "Sedang"
      },
      {
        "id": "undip-keperawatan",
        "name": "Keperawatan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 90,
        "applicants": 1700,
        "competitiveness": "Sedang"
      },
      {
        "id": "undip-oseanografi",
        "name": "Oseanografi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 55,
        "applicants": 890,
        "competitiveness": "Sedang"
      },
      {
        "id": "undip-ilmu-kelautan",
        "name": "Ilmu Kelautan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 60,
        "applicants": 850,
        "competitiveness": "Sedang"
      },
      {
        "id": "undip-peternakan",
        "name": "Peternakan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 100,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "undip-agroekoteknologi",
        "name": "Agroekoteknologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 626,
        "quota": 75,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "undip-agribisnis",
        "name": "Agribisnis",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 635,
        "quota": 70,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "undip-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 670,
        "quota": 220,
        "applicants": 4100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "undip-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 672,
        "quota": 125,
        "applicants": 3350,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "undip-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 670,
        "quota": 100,
        "applicants": 2500,
        "competitiveness": "Tinggi"
      },
      {
        "id": "undip-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 666,
        "quota": 65,
        "applicants": 2800,
        "competitiveness": "Tinggi"
      },
      {
        "id": "undip-psikologi",
        "name": "Psikologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 665,
        "quota": 110,
        "applicants": 3400,
        "competitiveness": "Tinggi"
      },
      {
        "id": "undip-hubungan-internasional",
        "name": "Hubungan Internasional",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 662,
        "quota": 50,
        "applicants": 1850,
        "competitiveness": "Tinggi"
      },
      {
        "id": "undip-ekonomi",
        "name": "Ekonomi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 654,
        "quota": 75,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "undip-bisnis-digital",
        "name": "Bisnis Digital",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 664,
        "quota": 45,
        "applicants": 1650,
        "competitiveness": "Tinggi"
      },
      {
        "id": "undip-administrasi-publik",
        "name": "Administrasi Publik",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 65,
        "applicants": 1500,
        "competitiveness": "Sedang"
      },
      {
        "id": "undip-administrasi-bisnis",
        "name": "Administrasi Bisnis",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 655,
        "quota": 75,
        "applicants": 1700,
        "competitiveness": "Sedang"
      },
      {
        "id": "undip-ilmu-pemerintahan",
        "name": "Ilmu Pemerintahan",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 60,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "undip-sastra-inggris",
        "name": "Sastra Inggris",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 645,
        "quota": 55,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "undip-d4-teknologi-rekayasa-ki",
        "name": "D4 Teknologi Rekayasa Kimia Industri",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 50,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "undip-d4-rekayasa-perancangan-",
        "name": "D4 Rekayasa Perancangan Mekanik",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 646,
        "quota": 50,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "undip-d4-teknologi-rekayasa-ot",
        "name": "D4 Teknologi Rekayasa Otomasi",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 650,
        "quota": 50,
        "applicants": 1300,
        "competitiveness": "Sedang"
      },
      {
        "id": "undip-d4-teknik-listrik-indust",
        "name": "D4 Teknik Listrik Industri",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 644,
        "quota": 50,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "undip-d4-perencanaan-tata-ruan",
        "name": "D4 Perencanaan Tata Ruang dan Pertanahan",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 650,
        "quota": 55,
        "applicants": 1450,
        "competitiveness": "Sedang"
      },
      {
        "id": "undip-d4-akuntansi-perpajakan",
        "name": "D4 Akuntansi Perpajakan",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 660,
        "quota": 65,
        "applicants": 2400,
        "competitiveness": "Tinggi"
      },
      {
        "id": "undip-d4-manajemen-dan-adminis",
        "name": "D4 Manajemen dan Administrasi Logistik",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 654,
        "quota": 60,
        "applicants": 1900,
        "competitiveness": "Sedang"
      },
      {
        "id": "undip-d4-informasi-dan-hubunga",
        "name": "D4 Informasi dan Hubungan Masyarakat",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 656,
        "quota": 60,
        "applicants": 2000,
        "competitiveness": "Sedang"
      },
      {
        "id": "undip-d4-bahasa-asing-terapan",
        "name": "D4 Bahasa Asing Terapan",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 50,
        "applicants": 1500,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3411"
  },
  {
    "id": "uns",
    "name": "Universitas Sebelas Maret",
    "shortName": "UNS",
    "location": "Surakarta (Solo), Jawa Tengah",
    "region": "Jawa",
    "type": "Universitas",
    "majors": [
      {
        "id": "uns-kedokteran",
        "name": "Kedokteran",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 724,
        "quota": 90,
        "applicants": 3750,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "uns-informatika",
        "name": "Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 676,
        "quota": 65,
        "applicants": 2400,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uns-sains-data",
        "name": "Sains Data",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 668,
        "quota": 40,
        "applicants": 1450,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uns-farmasi",
        "name": "Farmasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 665,
        "quota": 55,
        "applicants": 1750,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uns-kebidanan",
        "name": "Kebidanan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 40,
        "applicants": 850,
        "competitiveness": "Sedang"
      },
      {
        "id": "uns-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 654,
        "quota": 75,
        "applicants": 1600,
        "competitiveness": "Sedang"
      },
      {
        "id": "uns-teknik-industri",
        "name": "Teknik Industri",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 660,
        "quota": 70,
        "applicants": 1650,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uns-teknik-mesin",
        "name": "Teknik Mesin",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 65,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "uns-teknik-elektro",
        "name": "Teknik Elektro",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 650,
        "quota": 60,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "uns-teknik-kimia",
        "name": "Teknik Kimia",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 55,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "uns-arsitektur",
        "name": "Arsitektur",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 656,
        "quota": 50,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "uns-perencanaan-wilayah-kota",
        "name": "Perencanaan Wilayah & Kota (PWK)",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 50,
        "applicants": 1180,
        "competitiveness": "Sedang"
      },
      {
        "id": "uns-statistika",
        "name": "Statistika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 650,
        "quota": 45,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "uns-matematika",
        "name": "Matematika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 45,
        "applicants": 750,
        "competitiveness": "Sedang"
      },
      {
        "id": "uns-agroteknologi",
        "name": "Agroteknologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 90,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "uns-agribisnis",
        "name": "Agribisnis",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 75,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "uns-peternakan",
        "name": "Peternakan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 85,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "uns-ilmu-hukum",
        "name": "Ilmu Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 666,
        "quota": 180,
        "applicants": 3600,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uns-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 668,
        "quota": 100,
        "applicants": 3100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uns-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 664,
        "quota": 85,
        "applicants": 2300,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uns-bisnis-digital",
        "name": "Bisnis Digital",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 665,
        "quota": 40,
        "applicants": 1550,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uns-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 664,
        "quota": 60,
        "applicants": 2650,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uns-psikologi",
        "name": "Psikologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 665,
        "quota": 80,
        "applicants": 3100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uns-hubungan-internasional",
        "name": "Hubungan Internasional",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 660,
        "quota": 45,
        "applicants": 1750,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uns-sosiologi",
        "name": "Sosiologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 45,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "uns-desain-komunikasi-visual",
        "name": "Desain Komunikasi Visual (DKV)",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 654,
        "quota": 55,
        "applicants": 1650,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uns-pendidikan-guru-sekolah-",
        "name": "Pendidikan Guru Sekolah Dasar (PGSD)",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 95,
        "applicants": 2200,
        "competitiveness": "Sedang"
      },
      {
        "id": "uns-pendidikan-bahasa-inggri",
        "name": "Pendidikan Bahasa Inggris",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 50,
        "applicants": 1300,
        "competitiveness": "Sedang"
      },
      {
        "id": "uns-pendidikan-matematika",
        "name": "Pendidikan Matematika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 50,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "uns-d4-keselamatan-dan-keseh",
        "name": "D4 Keselamatan dan Kesehatan Kerja (K3)",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 658,
        "quota": 55,
        "applicants": 2000,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uns-d4-demografi-dan-pencata",
        "name": "D4 Demografi dan Pencatatan Sipil",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 50,
        "applicants": 1600,
        "competitiveness": "Sedang"
      },
      {
        "id": "uns-d4-akuntansi-sektor-publ",
        "name": "D4 Akuntansi Sektor Publik",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 654,
        "quota": 55,
        "applicants": 1950,
        "competitiveness": "Sedang"
      },
      {
        "id": "uns-d3-kebidanan",
        "name": "D3 Kebidanan",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 45,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "uns-d3-teknik-mesin",
        "name": "D3 Teknik Mesin",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 45,
        "applicants": 980,
        "competitiveness": "Sedang"
      },
      {
        "id": "uns-d3-teknik-sipil",
        "name": "D3 Teknik Sipil",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 634,
        "quota": 50,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "uns-d3-komunikasi-terapan",
        "name": "D3 Komunikasi Terapan",
        "degree": "D3",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 50,
        "applicants": 1700,
        "competitiveness": "Sedang"
      },
      {
        "id": "uns-d3-perpajakan",
        "name": "D3 Perpajakan",
        "degree": "D3",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 55,
        "applicants": 1850,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3412"
  },
  {
    "id": "unsoed",
    "name": "Universitas Jenderal Soedirman",
    "shortName": "UNSOED",
    "location": "Purwokerto, Jawa Tengah",
    "region": "Jawa",
    "type": "Universitas",
    "majors": [
      {
        "id": "unsoed-pendidikan-dokter",
        "name": "Pendidikan Dokter",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 718,
        "quota": 75,
        "applicants": 3100,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "unsoed-kedokteran-gigi",
        "name": "Kedokteran Gigi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 670,
        "quota": 45,
        "applicants": 1450,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unsoed-farmasi",
        "name": "Farmasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 662,
        "quota": 55,
        "applicants": 1850,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unsoed-informatika",
        "name": "Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 656,
        "quota": 60,
        "applicants": 2050,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unsoed-teknik-elektro",
        "name": "Teknik Elektro",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 50,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsoed-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 55,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsoed-keperawatan",
        "name": "Keperawatan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 80,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsoed-ilmu-gizi",
        "name": "Ilmu Gizi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 50,
        "applicants": 1500,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unsoed-kesehatan-masyarakat",
        "name": "Kesehatan Masyarakat",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 85,
        "applicants": 1600,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsoed-agroteknologi",
        "name": "Agroteknologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 95,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsoed-peternakan",
        "name": "Peternakan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 626,
        "quota": 120,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsoed-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 654,
        "quota": 180,
        "applicants": 3200,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unsoed-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 658,
        "quota": 110,
        "applicants": 3050,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unsoed-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 95,
        "applicants": 2250,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unsoed-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 658,
        "quota": 65,
        "applicants": 2700,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unsoed-hubungan-internasional",
        "name": "Hubungan Internasional",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 50,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsoed-administrasi-publik",
        "name": "Administrasi Publik",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 65,
        "applicants": 1400,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3413"
  },
  {
    "id": "unnes",
    "name": "Universitas Negeri Semarang",
    "shortName": "UNNES",
    "location": "Gunungpati, Semarang, Jawa Tengah",
    "region": "Jawa",
    "type": "Universitas",
    "majors": [
      {
        "id": "unnes-kedokteran",
        "name": "Kedokteran",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 710,
        "quota": 45,
        "applicants": 2450,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "unnes-farmasi",
        "name": "Farmasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 655,
        "quota": 45,
        "applicants": 1600,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unnes-teknik-informatika",
        "name": "Teknik Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 660,
        "quota": 60,
        "applicants": 2200,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unnes-sistem-informasi",
        "name": "Sistem Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 50,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "unnes-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 55,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "unnes-pendidikan-matematika",
        "name": "Pendidikan Matematika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 60,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "unnes-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 656,
        "quota": 120,
        "applicants": 3050,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unnes-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 100,
        "applicants": 2300,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unnes-ilmu-hukum",
        "name": "Ilmu Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 654,
        "quota": 150,
        "applicants": 3100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unnes-psikologi",
        "name": "Psikologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 658,
        "quota": 85,
        "applicants": 2950,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unnes-pendidikan-guru-sekolah-",
        "name": "Pendidikan Guru Sekolah Dasar (PGSD)",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 140,
        "applicants": 2600,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unnes-pendidikan-bahasa-inggri",
        "name": "Pendidikan Bahasa Inggris",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 65,
        "applicants": 1500,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3414"
  },
  {
    "id": "untidar",
    "name": "Universitas Tidar",
    "shortName": "UNTIDAR",
    "location": "Magelang, Jawa Tengah",
    "region": "Jawa",
    "type": "Universitas",
    "majors": [
      {
        "id": "untidar-teknologi-informasi",
        "name": "Teknologi Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 50,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "untidar-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 60,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "untidar-teknik-mesin",
        "name": "Teknik Mesin",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 60,
        "applicants": 980,
        "competitiveness": "Sedang"
      },
      {
        "id": "untidar-teknik-elektro",
        "name": "Teknik Elektro",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 55,
        "applicants": 920,
        "competitiveness": "Sedang"
      },
      {
        "id": "untidar-agroteknologi",
        "name": "Agroteknologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 624,
        "quota": 65,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "untidar-peternakan",
        "name": "Peternakan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 622,
        "quota": 65,
        "applicants": 880,
        "competitiveness": "Sedang"
      },
      {
        "id": "untidar-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 640,
        "quota": 130,
        "applicants": 2100,
        "competitiveness": "Sedang"
      },
      {
        "id": "untidar-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 645,
        "quota": 115,
        "applicants": 2450,
        "competitiveness": "Sedang"
      },
      {
        "id": "untidar-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 95,
        "applicants": 1900,
        "competitiveness": "Sedang"
      },
      {
        "id": "untidar-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 60,
        "applicants": 2150,
        "competitiveness": "Sedang"
      },
      {
        "id": "untidar-administrasi-negara",
        "name": "Administrasi Negara",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 638,
        "quota": 65,
        "applicants": 1350,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3415"
  },
  {
    "id": "isi-ska",
    "name": "Institut Seni Indonesia Surakarta",
    "shortName": "ISI Surakarta",
    "location": "Surakarta, Jawa Tengah",
    "region": "Jawa",
    "type": "Institut",
    "majors": [
      {
        "id": "isi-ska-desain-komunikasi-visual",
        "name": "Desain Komunikasi Visual (DKV)",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 55,
        "applicants": 1550,
        "competitiveness": "Sedang"
      },
      {
        "id": "isi-ska-film-dan-televisi",
        "name": "Film dan Televisi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 640,
        "quota": 50,
        "applicants": 1300,
        "competitiveness": "Sedang"
      },
      {
        "id": "isi-ska-fotografi",
        "name": "Fotografi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 632,
        "quota": 45,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "isi-ska-desain-interior",
        "name": "Desain Interior",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 634,
        "quota": 45,
        "applicants": 980,
        "competitiveness": "Sedang"
      },
      {
        "id": "isi-ska-seni-musik",
        "name": "Seni Musik",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 628,
        "quota": 50,
        "applicants": 850,
        "competitiveness": "Sedang"
      },
      {
        "id": "isi-ska-seni-tari",
        "name": "Seni Tari",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 620,
        "quota": 40,
        "applicants": 550,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3416"
  },
  {
    "id": "uin-smg",
    "name": "UIN Walisongo Semarang",
    "shortName": "UIN Walisongo",
    "location": "Semarang, Jawa Tengah",
    "region": "Jawa",
    "type": "UIN",
    "majors": [
      {
        "id": "uin-smg-kedokteran",
        "name": "Kedokteran",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 698,
        "quota": 40,
        "applicants": 1950,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uin-smg-teknologi-informasi",
        "name": "Teknologi Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 645,
        "quota": 45,
        "applicants": 1500,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-smg-gizi",
        "name": "Gizi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 45,
        "applicants": 1300,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-smg-psikologi",
        "name": "Psikologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 65,
        "applicants": 2450,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uin-smg-ilmu-hukum",
        "name": "Ilmu Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 75,
        "applicants": 1950,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-smg-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 70,
        "applicants": 2150,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-smg-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 60,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-smg-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 55,
        "applicants": 1980,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3417"
  },
  {
    "id": "polines",
    "name": "Politeknik Negeri Semarang",
    "shortName": "POLINES",
    "location": "Tembalang, Semarang, Jawa Tengah",
    "region": "Jawa",
    "type": "Politeknik",
    "majors": [
      {
        "id": "polines-d4-teknik-informatika",
        "name": "D4 Teknik Informatika",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 656,
        "quota": 50,
        "applicants": 1950,
        "competitiveness": "Tinggi"
      },
      {
        "id": "polines-d4-teknik-telekomunikasi",
        "name": "D4 Teknik Telekomunikasi",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 45,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "polines-d4-perancangan-jalan-jem",
        "name": "D4 Perancangan Jalan & Jembatan",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 45,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "polines-d4-teknik-mesin-produksi",
        "name": "D4 Teknik Mesin Produksi & Perawatan",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 634,
        "quota": 45,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "polines-d4-komputerisasi-akuntan",
        "name": "D4 Komputerisasi Akuntansi",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 55,
        "applicants": 1900,
        "competitiveness": "Sedang"
      },
      {
        "id": "polines-d4-manajemen-bisnis-inte",
        "name": "D4 Manajemen Bisnis Internasional",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 55,
        "applicants": 1850,
        "competitiveness": "Sedang"
      },
      {
        "id": "polines-d4-perbankan-syariah",
        "name": "D4 Perbankan Syariah",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 50,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "polines-d3-teknik-konstruksi-sip",
        "name": "D3 Teknik Konstruksi Sipil",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 634,
        "quota": 50,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "polines-d3-teknik-mesin",
        "name": "D3 Teknik Mesin",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 50,
        "applicants": 1000,
        "competitiveness": "Sedang"
      },
      {
        "id": "polines-d3-teknik-listrik",
        "name": "D3 Teknik Listrik",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 45,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "polines-d3-akuntansi",
        "name": "D3 Akuntansi",
        "degree": "D3",
        "category": "Soshum",
        "targetScore": 645,
        "quota": 55,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "polines-d3-keuangan-dan-perbanka",
        "name": "D3 Keuangan dan Perbankan",
        "degree": "D3",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 50,
        "applicants": 1600,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3451"
  },
  {
    "id": "unair",
    "name": "Universitas Airlangga",
    "shortName": "UNAIR",
    "location": "Surabaya, Jawa Timur",
    "region": "Jawa",
    "type": "Universitas",
    "majors": [
      {
        "id": "unair-kedokteran",
        "name": "Kedokteran",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 730,
        "quota": 95,
        "applicants": 3850,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "unair-kedokteran-gigi",
        "name": "Kedokteran Gigi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 685,
        "quota": 75,
        "applicants": 1750,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unair-farmasi",
        "name": "Farmasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 678,
        "quota": 85,
        "applicants": 2150,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unair-teknologi-sains-data",
        "name": "Teknologi Sains Data",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 675,
        "quota": 55,
        "applicants": 1850,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unair-sistem-informasi",
        "name": "Sistem Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 665,
        "quota": 60,
        "applicants": 1750,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unair-teknik-robotika-kecerdas",
        "name": "Teknik Robotika & Kecerdasan Buatan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 668,
        "quota": 45,
        "applicants": 1400,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unair-teknik-biomedis",
        "name": "Teknik Biomedis",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 658,
        "quota": 45,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-teknik-industri",
        "name": "Teknik Industri",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 654,
        "quota": 55,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-teknik-lingkungan",
        "name": "Teknik Lingkungan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 55,
        "applicants": 980,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-rekayasa-nanoteknologi",
        "name": "Rekayasa Nanoteknologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 645,
        "quota": 40,
        "applicants": 750,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-statistika",
        "name": "Statistika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 55,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-matematika",
        "name": "Matematika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 50,
        "applicants": 750,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-biologi",
        "name": "Biologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 50,
        "applicants": 720,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-kimia",
        "name": "Kimia",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 50,
        "applicants": 680,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-fisika",
        "name": "Fisika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 625,
        "quota": 45,
        "applicants": 520,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-kedokteran-hewan",
        "name": "Kedokteran Hewan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 110,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-ilmu-gizi",
        "name": "Ilmu Gizi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 50,
        "applicants": 1600,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unair-kesehatan-masyarakat",
        "name": "Kesehatan Masyarakat",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 646,
        "quota": 120,
        "applicants": 2200,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-keperawatan",
        "name": "Keperawatan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 95,
        "applicants": 1850,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-kebidanan",
        "name": "Kebidanan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 634,
        "quota": 40,
        "applicants": 920,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-akuakultur",
        "name": "Akuakultur",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 622,
        "quota": 65,
        "applicants": 750,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-teknologi-hasil-perikana",
        "name": "Teknologi Hasil Perikanan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 620,
        "quota": 55,
        "applicants": 650,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 676,
        "quota": 105,
        "applicants": 2400,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "unair-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 674,
        "quota": 125,
        "applicants": 3050,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "unair-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 668,
        "quota": 65,
        "applicants": 2600,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unair-psikologi",
        "name": "Psikologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 668,
        "quota": 100,
        "applicants": 3200,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unair-ilmu-hukum",
        "name": "Ilmu Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 665,
        "quota": 140,
        "applicants": 3300,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unair-hubungan-internasional",
        "name": "Hubungan Internasional",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 664,
        "quota": 55,
        "applicants": 1900,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unair-ekonomi-pembangunan",
        "name": "Ekonomi Pembangunan",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 655,
        "quota": 80,
        "applicants": 1450,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-ekonomi-islam",
        "name": "Ekonomi Islam",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 75,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-administrasi-publik",
        "name": "Administrasi Publik",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 65,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-ilmu-informasi-perpustak",
        "name": "Ilmu Informasi & Perpustakaan",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 638,
        "quota": 55,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-sosiologi",
        "name": "Sosiologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 638,
        "quota": 55,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-ilmu-politik",
        "name": "Ilmu Politik",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 640,
        "quota": 50,
        "applicants": 920,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-antropologi",
        "name": "Antropologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 632,
        "quota": 45,
        "applicants": 780,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-bahasa-dan-sastra-inggri",
        "name": "Bahasa dan Sastra Inggris",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 55,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-bahasa-dan-sastra-indone",
        "name": "Bahasa dan Sastra Indonesia",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 634,
        "quota": 50,
        "applicants": 900,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-studi-kejepangan",
        "name": "Studi Kejepangan",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 638,
        "quota": 40,
        "applicants": 850,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-d4-fisioterapi-terapan",
        "name": "D4 Fisioterapi Terapan",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 654,
        "quota": 45,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-d4-radiologi-terapan",
        "name": "D4 Radiologi Terapan",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 656,
        "quota": 45,
        "applicants": 1500,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-d4-teknologi-laboratoriu",
        "name": "D4 Teknologi Laboratorium Medis",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 45,
        "applicants": 1450,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-d4-perbankan-dan-keuanga",
        "name": "D4 Perbankan dan Keuangan",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 658,
        "quota": 55,
        "applicants": 2100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unair-d4-destinasi-pariwisata",
        "name": "D4 Destinasi Pariwisata",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 50,
        "applicants": 1700,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-d3-keperawatan-terapan",
        "name": "D3 Keperawatan Terapan",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 55,
        "applicants": 1500,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-d3-keselamatan-dan-keseh",
        "name": "D3 Keselamatan dan Kesehatan Kerja (K3)",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 644,
        "quota": 50,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-d3-perpajakan",
        "name": "D3 Perpajakan",
        "degree": "D3",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 55,
        "applicants": 1800,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-d3-akuntansi-terapan",
        "name": "D3 Akuntansi Terapan",
        "degree": "D3",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 55,
        "applicants": 1700,
        "competitiveness": "Sedang"
      },
      {
        "id": "unair-d3-bahasa-inggris-terapa",
        "name": "D3 Bahasa Inggris Terapan",
        "degree": "D3",
        "category": "Soshum",
        "targetScore": 640,
        "quota": 45,
        "applicants": 1200,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3511"
  },
  {
    "id": "its",
    "name": "Institut Teknologi Sepuluh Nopember",
    "shortName": "ITS",
    "location": "Sukolilo, Surabaya, Jawa Timur",
    "region": "Jawa",
    "type": "Institut",
    "majors": [
      {
        "id": "its-teknik-informatika",
        "name": "Teknik Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 718,
        "quota": 90,
        "applicants": 3200,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "its-sistem-informasi",
        "name": "Sistem Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 685,
        "quota": 70,
        "applicants": 2100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "its-sains-data",
        "name": "Sains Data",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 682,
        "quota": 50,
        "applicants": 1750,
        "competitiveness": "Tinggi"
      },
      {
        "id": "its-rekayasa-perangkat-lunak",
        "name": "Rekayasa Perangkat Lunak",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 678,
        "quota": 45,
        "applicants": 1450,
        "competitiveness": "Tinggi"
      },
      {
        "id": "its-rekayasa-kecerdasan-arti",
        "name": "Rekayasa Kecerdasan Artifisial",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 680,
        "quota": 45,
        "applicants": 1550,
        "competitiveness": "Tinggi"
      },
      {
        "id": "its-teknik-elektro",
        "name": "Teknik Elektro",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 670,
        "quota": 85,
        "applicants": 1350,
        "competitiveness": "Tinggi"
      },
      {
        "id": "its-teknik-mesin",
        "name": "Teknik Mesin",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 665,
        "quota": 85,
        "applicants": 1450,
        "competitiveness": "Tinggi"
      },
      {
        "id": "its-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 662,
        "quota": 85,
        "applicants": 1600,
        "competitiveness": "Tinggi"
      },
      {
        "id": "its-teknik-industri",
        "name": "Teknik Industri",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 672,
        "quota": 80,
        "applicants": 1850,
        "competitiveness": "Tinggi"
      },
      {
        "id": "its-teknik-kimia",
        "name": "Teknik Kimia",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 660,
        "quota": 80,
        "applicants": 1150,
        "competitiveness": "Tinggi"
      },
      {
        "id": "its-arsitektur",
        "name": "Arsitektur",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 665,
        "quota": 55,
        "applicants": 1300,
        "competitiveness": "Tinggi"
      },
      {
        "id": "its-perencanaan-wilayah-kota",
        "name": "Perencanaan Wilayah & Kota (PWK)",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 655,
        "quota": 60,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "its-teknik-biomedik",
        "name": "Teknik Biomedik",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 658,
        "quota": 45,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "its-teknik-komputer",
        "name": "Teknik Komputer",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 664,
        "quota": 50,
        "applicants": 1250,
        "competitiveness": "Tinggi"
      },
      {
        "id": "its-teknik-material",
        "name": "Teknik Material",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 645,
        "quota": 65,
        "applicants": 880,
        "competitiveness": "Sedang"
      },
      {
        "id": "its-teknik-lingkungan",
        "name": "Teknik Lingkungan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 650,
        "quota": 60,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "its-teknik-geomatika",
        "name": "Teknik Geomatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 55,
        "applicants": 820,
        "competitiveness": "Sedang"
      },
      {
        "id": "its-teknik-geofisika",
        "name": "Teknik Geofisika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 45,
        "applicants": 690,
        "competitiveness": "Sedang"
      },
      {
        "id": "its-teknik-perkapalan",
        "name": "Teknik Perkapalan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 646,
        "quota": 65,
        "applicants": 890,
        "competitiveness": "Sedang"
      },
      {
        "id": "its-teknik-sistem-perkapalan",
        "name": "Teknik Sistem Perkapalan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 644,
        "quota": 60,
        "applicants": 820,
        "competitiveness": "Sedang"
      },
      {
        "id": "its-teknik-kelautan",
        "name": "Teknik Kelautan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 55,
        "applicants": 780,
        "competitiveness": "Sedang"
      },
      {
        "id": "its-teknik-transportasi-laut",
        "name": "Teknik Transportasi Laut",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 45,
        "applicants": 650,
        "competitiveness": "Sedang"
      },
      {
        "id": "its-teknologi-kedokteran",
        "name": "Teknologi Kedokteran",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 662,
        "quota": 35,
        "applicants": 920,
        "competitiveness": "Tinggi"
      },
      {
        "id": "its-statistika",
        "name": "Statistika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 660,
        "quota": 60,
        "applicants": 1350,
        "competitiveness": "Tinggi"
      },
      {
        "id": "its-aktuaria",
        "name": "Aktuaria",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 668,
        "quota": 40,
        "applicants": 1100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "its-matematika",
        "name": "Matematika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 60,
        "applicants": 850,
        "competitiveness": "Sedang"
      },
      {
        "id": "its-fisika",
        "name": "Fisika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 60,
        "applicants": 580,
        "competitiveness": "Sedang"
      },
      {
        "id": "its-kimia",
        "name": "Kimia",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 60,
        "applicants": 650,
        "competitiveness": "Sedang"
      },
      {
        "id": "its-biologi",
        "name": "Biologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 50,
        "applicants": 620,
        "competitiveness": "Sedang"
      },
      {
        "id": "its-desain-komunikasi-visual",
        "name": "Desain Komunikasi Visual (DKV)",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 654,
        "quota": 55,
        "applicants": 1750,
        "competitiveness": "Tinggi"
      },
      {
        "id": "its-desain-produk-industri",
        "name": "Desain Produk Industri",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 45,
        "applicants": 920,
        "competitiveness": "Sedang"
      },
      {
        "id": "its-desain-interior",
        "name": "Desain Interior",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 45,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "its-manajemen-bisnis",
        "name": "Manajemen Bisnis",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 665,
        "quota": 65,
        "applicants": 2300,
        "competitiveness": "Tinggi"
      },
      {
        "id": "its-studi-pembangunan",
        "name": "Studi Pembangunan",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 640,
        "quota": 45,
        "applicants": 880,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3512"
  },
  {
    "id": "ub",
    "name": "Universitas Brawijaya",
    "shortName": "UB",
    "location": "Kota Malang, Jawa Timur",
    "region": "Jawa",
    "type": "Universitas",
    "majors": [
      {
        "id": "ub-kedokteran",
        "name": "Kedokteran",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 728,
        "quota": 110,
        "applicants": 4100,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "ub-farmasi",
        "name": "Farmasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 672,
        "quota": 75,
        "applicants": 2100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ub-kedokteran-gigi",
        "name": "Kedokteran Gigi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 675,
        "quota": 60,
        "applicants": 1600,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ub-teknik-informatika",
        "name": "Teknik Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 682,
        "quota": 90,
        "applicants": 3100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ub-sistem-informasi",
        "name": "Sistem Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 668,
        "quota": 75,
        "applicants": 2050,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ub-teknik-komputer",
        "name": "Teknik Komputer",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 658,
        "quota": 65,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "ub-teknologi-informasi",
        "name": "Teknologi Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 660,
        "quota": 65,
        "applicants": 1450,
        "competitiveness": "Sedang"
      },
      {
        "id": "ub-teknik-industri",
        "name": "Teknik Industri",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 664,
        "quota": 85,
        "applicants": 1850,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ub-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 658,
        "quota": 85,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "ub-teknik-mesin",
        "name": "Teknik Mesin",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 655,
        "quota": 80,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "ub-teknik-elektro",
        "name": "Teknik Elektro",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 654,
        "quota": 75,
        "applicants": 1300,
        "competitiveness": "Sedang"
      },
      {
        "id": "ub-arsitektur",
        "name": "Arsitektur",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 660,
        "quota": 60,
        "applicants": 1400,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ub-perencanaan-wilayah-kota",
        "name": "Perencanaan Wilayah & Kota (PWK)",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 654,
        "quota": 60,
        "applicants": 1300,
        "competitiveness": "Sedang"
      },
      {
        "id": "ub-teknik-pengairan",
        "name": "Teknik Pengairan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 60,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "ub-teknik-kimia",
        "name": "Teknik Kimia",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 650,
        "quota": 60,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "ub-statistika",
        "name": "Statistika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 60,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "ub-aktuaria",
        "name": "Aktuaria",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 660,
        "quota": 40,
        "applicants": 1100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ub-bioteknologi",
        "name": "Bioteknologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 50,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "ub-ilmu-gizi",
        "name": "Ilmu Gizi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 654,
        "quota": 60,
        "applicants": 1700,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ub-keperawatan",
        "name": "Keperawatan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 90,
        "applicants": 1850,
        "competitiveness": "Sedang"
      },
      {
        "id": "ub-kebidanan",
        "name": "Kebidanan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 45,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "ub-kedokteran-hewan",
        "name": "Kedokteran Hewan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 80,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "ub-agroteknologi",
        "name": "Agroteknologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 634,
        "quota": 180,
        "applicants": 2200,
        "competitiveness": "Sedang"
      },
      {
        "id": "ub-agribisnis",
        "name": "Agribisnis",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 140,
        "applicants": 2050,
        "competitiveness": "Sedang"
      },
      {
        "id": "ub-peternakan",
        "name": "Peternakan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 190,
        "applicants": 2100,
        "competitiveness": "Sedang"
      },
      {
        "id": "ub-teknologi-hasil-pertania",
        "name": "Teknologi Hasil Pertanian",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 65,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "ub-teknik-pertanian-dan-bio",
        "name": "Teknik Pertanian dan Biosistem",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 55,
        "applicants": 850,
        "competitiveness": "Sedang"
      },
      {
        "id": "ub-teknologi-industri-perta",
        "name": "Teknologi Industri Pertanian",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 70,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "ub-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 670,
        "quota": 260,
        "applicants": 4500,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ub-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 672,
        "quota": 140,
        "applicants": 3600,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "ub-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 668,
        "quota": 120,
        "applicants": 2700,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ub-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 668,
        "quota": 85,
        "applicants": 3100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ub-psikologi",
        "name": "Psikologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 666,
        "quota": 100,
        "applicants": 3350,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ub-hubungan-internasional",
        "name": "Hubungan Internasional",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 664,
        "quota": 65,
        "applicants": 2100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ub-administrasi-publik",
        "name": "Administrasi Publik",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 654,
        "quota": 110,
        "applicants": 2200,
        "competitiveness": "Sedang"
      },
      {
        "id": "ub-administrasi-bisnis",
        "name": "Administrasi Bisnis",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 658,
        "quota": 120,
        "applicants": 2500,
        "competitiveness": "Sedang"
      },
      {
        "id": "ub-perpajakan",
        "name": "Perpajakan",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 656,
        "quota": 75,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "ub-pariwisata",
        "name": "Pariwisata",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 645,
        "quota": 55,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "ub-ekonomi-pembangunan",
        "name": "Ekonomi Pembangunan",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 75,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "ub-ekonomi-islam",
        "name": "Ekonomi Islam",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 65,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "ub-d4-manajemen-perhotelan",
        "name": "D4 Manajemen Perhotelan",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 656,
        "quota": 55,
        "applicants": 2000,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ub-d4-desain-grafis-terapan",
        "name": "D4 Desain Grafis Terapan",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 654,
        "quota": 50,
        "applicants": 1850,
        "competitiveness": "Sedang"
      },
      {
        "id": "ub-d3-keuangan-dan-perbanka",
        "name": "D3 Keuangan dan Perbankan",
        "degree": "D3",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 60,
        "applicants": 1800,
        "competitiveness": "Sedang"
      },
      {
        "id": "ub-d3-administrasi-bisnis-t",
        "name": "D3 Administrasi Bisnis Terapan",
        "degree": "D3",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 60,
        "applicants": 1700,
        "competitiveness": "Sedang"
      },
      {
        "id": "ub-d3-teknologi-informasi-t",
        "name": "D3 Teknologi Informasi Terapan",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 654,
        "quota": 60,
        "applicants": 1900,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3513"
  },
  {
    "id": "um",
    "name": "Universitas Negeri Malang",
    "shortName": "UM",
    "location": "Kota Malang, Jawa Timur",
    "region": "Jawa",
    "type": "Universitas",
    "majors": [
      {
        "id": "um-kedokteran",
        "name": "Kedokteran",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 710,
        "quota": 45,
        "applicants": 2400,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "um-teknik-informatika",
        "name": "Teknik Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 662,
        "quota": 55,
        "applicants": 2150,
        "competitiveness": "Tinggi"
      },
      {
        "id": "um-teknik-elektro",
        "name": "Teknik Elektro",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 50,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "um-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 55,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "um-pendidikan-matematika",
        "name": "Pendidikan Matematika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 55,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "um-psikologi",
        "name": "Psikologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 660,
        "quota": 85,
        "applicants": 3050,
        "competitiveness": "Tinggi"
      },
      {
        "id": "um-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 656,
        "quota": 110,
        "applicants": 2900,
        "competitiveness": "Tinggi"
      },
      {
        "id": "um-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 95,
        "applicants": 2250,
        "competitiveness": "Tinggi"
      },
      {
        "id": "um-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 658,
        "quota": 60,
        "applicants": 2500,
        "competitiveness": "Tinggi"
      },
      {
        "id": "um-pendidikan-guru-sekolah-",
        "name": "Pendidikan Guru Sekolah Dasar (PGSD)",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 125,
        "applicants": 2550,
        "competitiveness": "Tinggi"
      },
      {
        "id": "um-pendidikan-bahasa-inggri",
        "name": "Pendidikan Bahasa Inggris",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 60,
        "applicants": 1550,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3514"
  },
  {
    "id": "unej",
    "name": "Universitas Jember",
    "shortName": "UNEJ",
    "location": "Jember, Jawa Timur",
    "region": "Jawa",
    "type": "Universitas",
    "majors": [
      {
        "id": "unej-pendidikan-dokter",
        "name": "Pendidikan Dokter",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 712,
        "quota": 70,
        "applicants": 2700,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "unej-pendidikan-dokter-gigi",
        "name": "Pendidikan Dokter Gigi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 665,
        "quota": 55,
        "applicants": 1400,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unej-farmasi",
        "name": "Farmasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 658,
        "quota": 60,
        "applicants": 1650,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unej-informatika",
        "name": "Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 65,
        "applicants": 1850,
        "competitiveness": "Sedang"
      },
      {
        "id": "unej-sistem-informasi",
        "name": "Sistem Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 644,
        "quota": 55,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "unej-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 65,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "unej-keperawatan",
        "name": "Keperawatan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 85,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "unej-agroteknologi",
        "name": "Agroteknologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 110,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "unej-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 175,
        "applicants": 2800,
        "competitiveness": "Sedang"
      },
      {
        "id": "unej-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 120,
        "applicants": 2750,
        "competitiveness": "Sedang"
      },
      {
        "id": "unej-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 100,
        "applicants": 2100,
        "competitiveness": "Sedang"
      },
      {
        "id": "unej-hubungan-internasional",
        "name": "Hubungan Internasional",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 50,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "unej-pgsd",
        "name": "PGSD",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 110,
        "applicants": 2100,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3515"
  },
  {
    "id": "unesa",
    "name": "Universitas Negeri Surabaya",
    "shortName": "UNESA",
    "location": "Ketintang & Lidah Wetan, Surabaya",
    "region": "Jawa",
    "type": "Universitas",
    "majors": [
      {
        "id": "unesa-kedokteran",
        "name": "Kedokteran",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 708,
        "quota": 45,
        "applicants": 2350,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "unesa-teknik-informatika",
        "name": "Teknik Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 658,
        "quota": 60,
        "applicants": 2100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unesa-sistem-informasi",
        "name": "Sistem Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 650,
        "quota": 50,
        "applicants": 1600,
        "competitiveness": "Sedang"
      },
      {
        "id": "unesa-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 55,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "unesa-psikologi",
        "name": "Psikologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 658,
        "quota": 95,
        "applicants": 3100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unesa-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 655,
        "quota": 115,
        "applicants": 2950,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unesa-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 656,
        "quota": 65,
        "applicants": 2600,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unesa-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 95,
        "applicants": 2200,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unesa-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 130,
        "applicants": 2700,
        "competitiveness": "Sedang"
      },
      {
        "id": "unesa-pendidikan-guru-sekolah-",
        "name": "Pendidikan Guru Sekolah Dasar (PGSD)",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 135,
        "applicants": 2600,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unesa-ilmu-keolahragaan",
        "name": "Ilmu Keolahragaan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 625,
        "quota": 80,
        "applicants": 950,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3516"
  },
  {
    "id": "utm",
    "name": "Universitas Trunojoyo Madura",
    "shortName": "UTM",
    "location": "Bangkalan, Madura, Jawa Timur",
    "region": "Jawa",
    "type": "Universitas",
    "majors": [
      {
        "id": "utm-teknik-informatika",
        "name": "Teknik Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 75,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "utm-sistem-informasi",
        "name": "Sistem Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 634,
        "quota": 60,
        "applicants": 1300,
        "competitiveness": "Sedang"
      },
      {
        "id": "utm-teknik-industri",
        "name": "Teknik Industri",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 65,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "utm-teknik-elektro",
        "name": "Teknik Elektro",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 624,
        "quota": 55,
        "applicants": 850,
        "competitiveness": "Sedang"
      },
      {
        "id": "utm-teknologi-industri-perta",
        "name": "Teknologi Industri Pertanian",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 622,
        "quota": 60,
        "applicants": 800,
        "competitiveness": "Sedang"
      },
      {
        "id": "utm-agribisnis",
        "name": "Agribisnis",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 624,
        "quota": 70,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "utm-ilmu-kelautan",
        "name": "Ilmu Kelautan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 620,
        "quota": 50,
        "applicants": 650,
        "competitiveness": "Sedang"
      },
      {
        "id": "utm-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 638,
        "quota": 140,
        "applicants": 2100,
        "competitiveness": "Sedang"
      },
      {
        "id": "utm-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 120,
        "applicants": 2300,
        "competitiveness": "Sedang"
      },
      {
        "id": "utm-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 638,
        "quota": 95,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "utm-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 65,
        "applicants": 1900,
        "competitiveness": "Sedang"
      },
      {
        "id": "utm-psikologi",
        "name": "Psikologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 60,
        "applicants": 1850,
        "competitiveness": "Sedang"
      },
      {
        "id": "utm-pgsd",
        "name": "PGSD",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 636,
        "quota": 95,
        "applicants": 1700,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3517"
  },
  {
    "id": "upn-jt",
    "name": "UPN 'Veteran' Jawa Timur",
    "shortName": "UPN Jatim",
    "location": "Rungkut, Surabaya, Jawa Timur",
    "region": "Jawa",
    "type": "Universitas",
    "majors": [
      {
        "id": "upn-jt-informatika",
        "name": "Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 655,
        "quota": 70,
        "applicants": 2100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "upn-jt-sistem-informasi",
        "name": "Sistem Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 60,
        "applicants": 1600,
        "competitiveness": "Sedang"
      },
      {
        "id": "upn-jt-sains-data",
        "name": "Sains Data",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 45,
        "applicants": 1400,
        "competitiveness": "Tinggi"
      },
      {
        "id": "upn-jt-teknik-industri",
        "name": "Teknik Industri",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 646,
        "quota": 75,
        "applicants": 1450,
        "competitiveness": "Sedang"
      },
      {
        "id": "upn-jt-teknik-kimia",
        "name": "Teknik Kimia",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 65,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "upn-jt-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 65,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "upn-jt-teknik-lingkungan",
        "name": "Teknik Lingkungan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 55,
        "applicants": 980,
        "competitiveness": "Sedang"
      },
      {
        "id": "upn-jt-teknologi-pangan",
        "name": "Teknologi Pangan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 60,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "upn-jt-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 660,
        "quota": 85,
        "applicants": 2950,
        "competitiveness": "Tinggi"
      },
      {
        "id": "upn-jt-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 656,
        "quota": 120,
        "applicants": 2900,
        "competitiveness": "Tinggi"
      },
      {
        "id": "upn-jt-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 100,
        "applicants": 2200,
        "competitiveness": "Tinggi"
      },
      {
        "id": "upn-jt-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 130,
        "applicants": 2400,
        "competitiveness": "Sedang"
      },
      {
        "id": "upn-jt-hubungan-internasional",
        "name": "Hubungan Internasional",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 654,
        "quota": 55,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "upn-jt-administrasi-bisnis",
        "name": "Administrasi Bisnis",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 70,
        "applicants": 1550,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3518"
  },
  {
    "id": "uin-sby",
    "name": "UIN Sunan Ampel Surabaya",
    "shortName": "UINSA",
    "location": "Surabaya, Jawa Timur",
    "region": "Jawa",
    "type": "UIN",
    "majors": [
      {
        "id": "uin-sby-sistem-informasi",
        "name": "Sistem Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 646,
        "quota": 50,
        "applicants": 1550,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-sby-teknik-lingkungan",
        "name": "Teknik Lingkungan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 40,
        "applicants": 880,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-sby-arsitektur",
        "name": "Arsitektur",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 40,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-sby-psikologi",
        "name": "Psikologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 655,
        "quota": 75,
        "applicants": 2750,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uin-sby-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 60,
        "applicants": 2350,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uin-sby-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 75,
        "applicants": 2400,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-sby-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 65,
        "applicants": 1900,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-sby-ilmu-hukum",
        "name": "Ilmu Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 80,
        "applicants": 2100,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-sby-hubungan-internasional",
        "name": "Hubungan Internasional",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 45,
        "applicants": 1500,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3519"
  },
  {
    "id": "uin-mlg",
    "name": "UIN Maulana Malik Ibrahim Malang",
    "shortName": "UIN Malang",
    "location": "Kota Malang, Jawa Timur",
    "region": "Jawa",
    "type": "UIN",
    "majors": [
      {
        "id": "uin-mlg-pendidikan-dokter",
        "name": "Pendidikan Dokter",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 705,
        "quota": 45,
        "applicants": 2200,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "uin-mlg-farmasi",
        "name": "Farmasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 654,
        "quota": 50,
        "applicants": 1650,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uin-mlg-teknik-informatika",
        "name": "Teknik Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 650,
        "quota": 55,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-mlg-teknik-arsitektur",
        "name": "Teknik Arsitektur",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 45,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-mlg-psikologi",
        "name": "Psikologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 654,
        "quota": 75,
        "applicants": 2700,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uin-mlg-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 75,
        "applicants": 2350,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-mlg-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 65,
        "applicants": 1850,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-mlg-hukum-bisnis-syariah",
        "name": "Hukum Bisnis Syariah",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 638,
        "quota": 70,
        "applicants": 1400,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3520"
  },
  {
    "id": "pens",
    "name": "Politeknik Elektronika Negeri Surabaya",
    "shortName": "PENS",
    "location": "Sukolilo, Surabaya, Jawa Timur",
    "region": "Jawa",
    "type": "Politeknik",
    "majors": [
      {
        "id": "pens-d4-teknik-informatika",
        "name": "D4 Teknik Informatika",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 668,
        "quota": 50,
        "applicants": 2350,
        "competitiveness": "Tinggi"
      },
      {
        "id": "pens-d4-sains-data-terapan",
        "name": "D4 Sains Data Terapan",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 664,
        "quota": 40,
        "applicants": 1800,
        "competitiveness": "Tinggi"
      },
      {
        "id": "pens-d4-teknik-komputer",
        "name": "D4 Teknik Komputer",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 656,
        "quota": 45,
        "applicants": 1550,
        "competitiveness": "Sedang"
      },
      {
        "id": "pens-d4-teknik-mekatronika",
        "name": "D4 Teknik Mekatronika",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 45,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "pens-d4-teknologi-game",
        "name": "D4 Teknologi Game",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 650,
        "quota": 40,
        "applicants": 1500,
        "competitiveness": "Sedang"
      },
      {
        "id": "pens-d4-teknik-elektronika",
        "name": "D4 Teknik Elektronika",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 646,
        "quota": 45,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "pens-d4-teknik-telekomunikasi",
        "name": "D4 Teknik Telekomunikasi",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 45,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "pens-d4-sistem-pembangkit-ene",
        "name": "D4 Sistem Pembangkit Energi",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 40,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "pens-d3-teknik-elektronika",
        "name": "D3 Teknik Elektronika",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 645,
        "quota": 50,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "pens-d3-teknik-telekomunikasi",
        "name": "D3 Teknik Telekomunikasi",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 45,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "pens-d3-teknik-elektro-indust",
        "name": "D3 Teknik Elektro Industri",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 644,
        "quota": 45,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "pens-d3-teknik-informatika",
        "name": "D3 Teknik Informatika",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 655,
        "quota": 50,
        "applicants": 1850,
        "competitiveness": "Tinggi"
      }
    ],
    "code": "3551"
  },
  {
    "id": "ppns",
    "name": "Politeknik Perkapalan Negeri Surabaya",
    "shortName": "PPNS",
    "location": "Sukolilo, Surabaya, Jawa Timur",
    "region": "Jawa",
    "type": "Politeknik",
    "majors": [
      {
        "id": "ppns-d4-teknik-keselamatan-ke",
        "name": "D4 Teknik Keselamatan & Kesehatan Kerja (K3)",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 650,
        "quota": 55,
        "applicants": 1750,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ppns-d4-teknik-desain-konstru",
        "name": "D4 Teknik Desain & Konstruksi Kapal",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 45,
        "applicants": 980,
        "competitiveness": "Sedang"
      },
      {
        "id": "ppns-d4-teknik-permesinan-kap",
        "name": "D4 Teknik Permesinan Kapal",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 45,
        "applicants": 920,
        "competitiveness": "Sedang"
      },
      {
        "id": "ppns-d4-teknik-kelistrikan-ka",
        "name": "D4 Teknik Kelistrikan Kapal",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 634,
        "quota": 45,
        "applicants": 880,
        "competitiveness": "Sedang"
      },
      {
        "id": "ppns-d4-teknik-pengolahan-lim",
        "name": "D4 Teknik Pengolahan Limbah",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 40,
        "applicants": 850,
        "competitiveness": "Sedang"
      },
      {
        "id": "ppns-d4-manajemen-bisnis-mari",
        "name": "D4 Manajemen Bisnis Maritim",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 45,
        "applicants": 1300,
        "competitiveness": "Sedang"
      },
      {
        "id": "ppns-d3-teknik-bangunan-kapal",
        "name": "D3 Teknik Bangunan Kapal",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 45,
        "applicants": 880,
        "competitiveness": "Sedang"
      },
      {
        "id": "ppns-d3-teknik-permesinan-kap",
        "name": "D3 Teknik Permesinan Kapal",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 45,
        "applicants": 850,
        "competitiveness": "Sedang"
      },
      {
        "id": "ppns-d3-teknik-kelistrikan-ka",
        "name": "D3 Teknik Kelistrikan Kapal",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 40,
        "applicants": 820,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3552"
  },
  {
    "id": "polinema",
    "name": "Politeknik Negeri Malang",
    "shortName": "POLINEMA",
    "location": "Kota Malang, Jawa Timur",
    "region": "Jawa",
    "type": "Politeknik",
    "majors": [
      {
        "id": "polinema-d4-teknik-informatika",
        "name": "D4 Teknik Informatika",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 658,
        "quota": 65,
        "applicants": 2200,
        "competitiveness": "Tinggi"
      },
      {
        "id": "polinema-d4-sistem-informasi-bisn",
        "name": "D4 Sistem Informasi Bisnis",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 650,
        "quota": 55,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "polinema-d4-teknik-elektronika",
        "name": "D4 Teknik Elektronika",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 50,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "polinema-d4-manajemen-rekayasa-ko",
        "name": "D4 Manajemen Rekayasa Konstruksi",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 55,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "polinema-d4-teknik-mesin-produksi",
        "name": "D4 Teknik Mesin Produksi dan Perawatan",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 634,
        "quota": 55,
        "applicants": 980,
        "competitiveness": "Sedang"
      },
      {
        "id": "polinema-d4-akuntansi-manajemen",
        "name": "D4 Akuntansi Manajemen",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 75,
        "applicants": 2150,
        "competitiveness": "Tinggi"
      },
      {
        "id": "polinema-d4-keuangan-terapan",
        "name": "D4 Keuangan Terapan",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 65,
        "applicants": 1800,
        "competitiveness": "Sedang"
      },
      {
        "id": "polinema-d4-manajemen-pemasaran",
        "name": "D4 Manajemen Pemasaran",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 65,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "polinema-d3-teknik-sipil",
        "name": "D3 Teknik Sipil",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 634,
        "quota": 55,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "polinema-d3-teknik-mesin",
        "name": "D3 Teknik Mesin",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 55,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "polinema-d3-teknik-kimia",
        "name": "D3 Teknik Kimia",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 50,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "polinema-d3-teknik-elektronika",
        "name": "D3 Teknik Elektronika",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 50,
        "applicants": 980,
        "competitiveness": "Sedang"
      },
      {
        "id": "polinema-d3-manajemen-informatika",
        "name": "D3 Manajemen Informatika",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 646,
        "quota": 60,
        "applicants": 1700,
        "competitiveness": "Sedang"
      },
      {
        "id": "polinema-d3-akuntansi",
        "name": "D3 Akuntansi",
        "degree": "D3",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 65,
        "applicants": 1800,
        "competitiveness": "Sedang"
      },
      {
        "id": "polinema-d3-administrasi-bisnis",
        "name": "D3 Administrasi Bisnis",
        "degree": "D3",
        "category": "Soshum",
        "targetScore": 640,
        "quota": 60,
        "applicants": 1600,
        "competitiveness": "Sedang"
      }
    ],
    "code": "3553"
  },
  {
    "id": "unud",
    "name": "Universitas Udayana",
    "shortName": "UNUD",
    "location": "Jimbaran & Denpasar, Bali",
    "region": "Bali & Nusa Tenggara",
    "type": "Universitas",
    "majors": [
      {
        "id": "unud-pendidikan-dokter",
        "name": "Pendidikan Dokter",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 722,
        "quota": 85,
        "applicants": 3350,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "unud-pendidikan-dokter-gigi",
        "name": "Pendidikan Dokter Gigi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 672,
        "quota": 45,
        "applicants": 1450,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unud-farmasi",
        "name": "Farmasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 662,
        "quota": 55,
        "applicants": 1800,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unud-informatika",
        "name": "Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 656,
        "quota": 60,
        "applicants": 2050,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unud-teknologi-informasi",
        "name": "Teknologi Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 650,
        "quota": 55,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "unud-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 644,
        "quota": 65,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "unud-arsitektur",
        "name": "Arsitektur",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 650,
        "quota": 50,
        "applicants": 1300,
        "competitiveness": "Sedang"
      },
      {
        "id": "unud-teknik-elektro",
        "name": "Teknik Elektro",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 55,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "unud-teknik-mesin",
        "name": "Teknik Mesin",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 55,
        "applicants": 1000,
        "competitiveness": "Sedang"
      },
      {
        "id": "unud-kedokteran-hewan",
        "name": "Kedokteran Hewan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 75,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "unud-keperawatan",
        "name": "Keperawatan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 70,
        "applicants": 1550,
        "competitiveness": "Sedang"
      },
      {
        "id": "unud-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 658,
        "quota": 175,
        "applicants": 3100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unud-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 660,
        "quota": 115,
        "applicants": 2950,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unud-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 656,
        "quota": 95,
        "applicants": 2250,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unud-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 658,
        "quota": 55,
        "applicants": 2400,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unud-hubungan-internasional",
        "name": "Hubungan Internasional",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 655,
        "quota": 45,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "unud-pariwisata",
        "name": "Pariwisata",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 65,
        "applicants": 1950,
        "competitiveness": "Sedang"
      },
      {
        "id": "unud-sastra-inggris",
        "name": "Sastra Inggris",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 55,
        "applicants": 1300,
        "competitiveness": "Sedang"
      },
      {
        "id": "unud-sastra-jepang",
        "name": "Sastra Jepang",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 640,
        "quota": 40,
        "applicants": 950,
        "competitiveness": "Sedang"
      }
    ],
    "code": "5111"
  },
  {
    "id": "undiksha",
    "name": "Universitas Pendidikan Ganesha",
    "shortName": "UNDIKSHA",
    "location": "Singaraja, Buleleng, Bali",
    "region": "Bali & Nusa Tenggara",
    "type": "Universitas",
    "majors": [
      {
        "id": "undiksha-kedokteran",
        "name": "Kedokteran",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 705,
        "quota": 45,
        "applicants": 2150,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "undiksha-ilmu-komputer",
        "name": "Ilmu Komputer",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 50,
        "applicants": 1450,
        "competitiveness": "Sedang"
      },
      {
        "id": "undiksha-sistem-informasi",
        "name": "Sistem Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 45,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "undiksha-pendidikan-matematika",
        "name": "Pendidikan Matematika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 50,
        "applicants": 1000,
        "competitiveness": "Sedang"
      },
      {
        "id": "undiksha-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 100,
        "applicants": 2200,
        "competitiveness": "Sedang"
      },
      {
        "id": "undiksha-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 85,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "undiksha-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 640,
        "quota": 110,
        "applicants": 1850,
        "competitiveness": "Sedang"
      },
      {
        "id": "undiksha-pgsd",
        "name": "PGSD",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 95,
        "applicants": 2050,
        "competitiveness": "Sedang"
      },
      {
        "id": "undiksha-pendidikan-bahasa-inggri",
        "name": "Pendidikan Bahasa Inggris",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 638,
        "quota": 60,
        "applicants": 1350,
        "competitiveness": "Sedang"
      }
    ],
    "code": "5112"
  },
  {
    "id": "pnb",
    "name": "Politeknik Negeri Bali",
    "shortName": "PNB",
    "location": "Bukit Jimbaran, Badung, Bali",
    "region": "Bali & Nusa Tenggara",
    "type": "Politeknik",
    "majors": [
      {
        "id": "pnb-d4-manajemen-bisnis-pari",
        "name": "D4 Manajemen Bisnis Pariwisata",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 55,
        "applicants": 1850,
        "competitiveness": "Sedang"
      },
      {
        "id": "pnb-d4-manajemen-perhotelan",
        "name": "D4 Manajemen Perhotelan",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 50,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "pnb-d4-akuntansi-manajerial",
        "name": "D4 Akuntansi Manajerial",
        "degree": "D4",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 50,
        "applicants": 1600,
        "competitiveness": "Sedang"
      },
      {
        "id": "pnb-d4-teknologi-rekayasa-pe",
        "name": "D4 Teknologi Rekayasa Perangkat Lunak",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 645,
        "quota": 45,
        "applicants": 1450,
        "competitiveness": "Sedang"
      },
      {
        "id": "pnb-d4-manajemen-rekayasa-ko",
        "name": "D4 Manajemen Rekayasa Konstruksi",
        "degree": "D4",
        "category": "Saintek",
        "targetScore": 634,
        "quota": 45,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "pnb-d3-teknik-sipil",
        "name": "D3 Teknik Sipil",
        "degree": "D3",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 45,
        "applicants": 900,
        "competitiveness": "Sedang"
      },
      {
        "id": "pnb-d3-perhotelan",
        "name": "D3 Perhotelan",
        "degree": "D3",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 55,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "pnb-d3-akuntansi",
        "name": "D3 Akuntansi",
        "degree": "D3",
        "category": "Soshum",
        "targetScore": 638,
        "quota": 50,
        "applicants": 1450,
        "competitiveness": "Sedang"
      }
    ],
    "code": "5151"
  },
  {
    "id": "unram",
    "name": "Universitas Mataram",
    "shortName": "UNRAM",
    "location": "Kota Mataram, Lombok, NTB",
    "region": "Bali & Nusa Tenggara",
    "type": "Universitas",
    "majors": [
      {
        "id": "unram-pendidikan-dokter",
        "name": "Pendidikan Dokter",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 715,
        "quota": 65,
        "applicants": 2750,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "unram-farmasi",
        "name": "Farmasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 45,
        "applicants": 1600,
        "competitiveness": "Sedang"
      },
      {
        "id": "unram-teknik-informatika",
        "name": "Teknik Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 650,
        "quota": 55,
        "applicants": 1800,
        "competitiveness": "Sedang"
      },
      {
        "id": "unram-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 65,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "unram-teknik-elektro",
        "name": "Teknik Elektro",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 55,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "unram-agroteknologi",
        "name": "Agroteknologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 624,
        "quota": 75,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "unram-peternakan",
        "name": "Peternakan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 622,
        "quota": 85,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "unram-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 160,
        "applicants": 2600,
        "competitiveness": "Sedang"
      },
      {
        "id": "unram-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 110,
        "applicants": 2650,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unram-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 95,
        "applicants": 2050,
        "competitiveness": "Sedang"
      },
      {
        "id": "unram-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 55,
        "applicants": 1850,
        "competitiveness": "Sedang"
      },
      {
        "id": "unram-hubungan-internasional",
        "name": "Hubungan Internasional",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 45,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "unram-pgsd",
        "name": "PGSD",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 640,
        "quota": 100,
        "applicants": 2150,
        "competitiveness": "Sedang"
      }
    ],
    "code": "5211"
  },
  {
    "id": "undana",
    "name": "Universitas Nusa Cendana",
    "shortName": "UNDANA",
    "location": "Penfui, Kupang, NTT",
    "region": "Bali & Nusa Tenggara",
    "type": "Universitas",
    "majors": [
      {
        "id": "undana-pendidikan-dokter",
        "name": "Pendidikan Dokter",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 702,
        "quota": 55,
        "applicants": 2300,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "undana-ilmu-komputer",
        "name": "Ilmu Komputer",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 50,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "undana-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 55,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "undana-kesehatan-masyarakat",
        "name": "Kesehatan Masyarakat",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 634,
        "quota": 75,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "undana-kedokteran-hewan",
        "name": "Kedokteran Hewan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 60,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "undana-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 150,
        "applicants": 2300,
        "competitiveness": "Sedang"
      },
      {
        "id": "undana-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 110,
        "applicants": 2350,
        "competitiveness": "Sedang"
      },
      {
        "id": "undana-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 640,
        "quota": 90,
        "applicants": 1800,
        "competitiveness": "Sedang"
      },
      {
        "id": "undana-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 640,
        "quota": 55,
        "applicants": 1550,
        "competitiveness": "Sedang"
      },
      {
        "id": "undana-pgsd",
        "name": "PGSD",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 636,
        "quota": 95,
        "applicants": 1900,
        "competitiveness": "Sedang"
      }
    ],
    "code": "5311"
  },
  {
    "id": "untan",
    "name": "Universitas Tanjungpura",
    "shortName": "UNTAN",
    "location": "Kota Pontianak, Kalimantan Barat",
    "region": "Kalimantan",
    "type": "Universitas",
    "majors": [
      {
        "id": "untan-pendidikan-dokter",
        "name": "Pendidikan Dokter",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 710,
        "quota": 65,
        "applicants": 2500,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "untan-farmasi",
        "name": "Farmasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 45,
        "applicants": 1600,
        "competitiveness": "Sedang"
      },
      {
        "id": "untan-informatika",
        "name": "Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 55,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "untan-sistem-informasi",
        "name": "Sistem Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 50,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "untan-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 65,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "untan-teknik-pertambangan",
        "name": "Teknik Pertambangan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 644,
        "quota": 50,
        "applicants": 1450,
        "competitiveness": "Sedang"
      },
      {
        "id": "untan-agroteknologi",
        "name": "Agroteknologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 624,
        "quota": 75,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "untan-kehutanan",
        "name": "Kehutanan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 625,
        "quota": 80,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "untan-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 170,
        "applicants": 2750,
        "competitiveness": "Sedang"
      },
      {
        "id": "untan-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 115,
        "applicants": 2700,
        "competitiveness": "Sedang"
      },
      {
        "id": "untan-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 95,
        "applicants": 2050,
        "competitiveness": "Sedang"
      },
      {
        "id": "untan-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 55,
        "applicants": 1950,
        "competitiveness": "Sedang"
      },
      {
        "id": "untan-pgsd",
        "name": "PGSD",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 640,
        "quota": 100,
        "applicants": 2150,
        "competitiveness": "Sedang"
      }
    ],
    "code": "6111"
  },
  {
    "id": "upr",
    "name": "Universitas Palangka Raya",
    "shortName": "UPR",
    "location": "Kota Palangka Raya, Kalimantan Tengah",
    "region": "Kalimantan",
    "type": "Universitas",
    "majors": [
      {
        "id": "upr-pendidikan-dokter",
        "name": "Pendidikan Dokter",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 695,
        "quota": 50,
        "applicants": 1850,
        "competitiveness": "Tinggi"
      },
      {
        "id": "upr-teknik-informatika",
        "name": "Teknik Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 55,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "upr-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 55,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "upr-kehutanan",
        "name": "Kehutanan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 622,
        "quota": 75,
        "applicants": 850,
        "competitiveness": "Sedang"
      },
      {
        "id": "upr-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 638,
        "quota": 160,
        "applicants": 2200,
        "competitiveness": "Sedang"
      },
      {
        "id": "upr-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 640,
        "quota": 110,
        "applicants": 2250,
        "competitiveness": "Sedang"
      },
      {
        "id": "upr-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 636,
        "quota": 85,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "upr-pgsd",
        "name": "PGSD",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 634,
        "quota": 90,
        "applicants": 1850,
        "competitiveness": "Sedang"
      }
    ],
    "code": "6211"
  },
  {
    "id": "ulm",
    "name": "Universitas Lambung Mangkurat",
    "shortName": "ULM",
    "location": "Banjarmasin & Banjarbaru, Kalimantan Selatan",
    "region": "Kalimantan",
    "type": "Universitas",
    "majors": [
      {
        "id": "ulm-pendidikan-dokter",
        "name": "Pendidikan Dokter",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 714,
        "quota": 75,
        "applicants": 2900,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "ulm-pendidikan-dokter-gigi",
        "name": "Pendidikan Dokter Gigi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 665,
        "quota": 45,
        "applicants": 1350,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ulm-farmasi",
        "name": "Farmasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 655,
        "quota": 50,
        "applicants": 1650,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ulm-teknologi-informasi",
        "name": "Teknologi Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 650,
        "quota": 55,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "ulm-ilmu-komputer",
        "name": "Ilmu Komputer",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 50,
        "applicants": 1600,
        "competitiveness": "Sedang"
      },
      {
        "id": "ulm-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 65,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "ulm-teknik-pertambangan",
        "name": "Teknik Pertambangan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 646,
        "quota": 55,
        "applicants": 1500,
        "competitiveness": "Sedang"
      },
      {
        "id": "ulm-teknik-lingkungan",
        "name": "Teknik Lingkungan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 50,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "ulm-kesehatan-masyarakat",
        "name": "Kesehatan Masyarakat",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 80,
        "applicants": 1600,
        "competitiveness": "Sedang"
      },
      {
        "id": "ulm-kehutanan",
        "name": "Kehutanan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 85,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "ulm-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 170,
        "applicants": 2950,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ulm-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 654,
        "quota": 115,
        "applicants": 2800,
        "competitiveness": "Tinggi"
      },
      {
        "id": "ulm-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 95,
        "applicants": 2100,
        "competitiveness": "Sedang"
      },
      {
        "id": "ulm-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 55,
        "applicants": 2150,
        "competitiveness": "Sedang"
      },
      {
        "id": "ulm-pgsd",
        "name": "PGSD",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 100,
        "applicants": 2250,
        "competitiveness": "Sedang"
      }
    ],
    "code": "6311"
  },
  {
    "id": "unmul",
    "name": "Universitas Mulawarman",
    "shortName": "UNMUL",
    "location": "Samarinda, Kalimantan Timur",
    "region": "Kalimantan",
    "type": "Universitas",
    "majors": [
      {
        "id": "unmul-pendidikan-dokter",
        "name": "Pendidikan Dokter",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 715,
        "quota": 75,
        "applicants": 2950,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "unmul-pendidikan-dokter-gigi",
        "name": "Pendidikan Dokter Gigi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 664,
        "quota": 40,
        "applicants": 1300,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unmul-farmasi",
        "name": "Farmasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 656,
        "quota": 50,
        "applicants": 1700,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unmul-informatika",
        "name": "Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 60,
        "applicants": 1850,
        "competitiveness": "Sedang"
      },
      {
        "id": "unmul-sistem-informasi",
        "name": "Sistem Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 646,
        "quota": 50,
        "applicants": 1450,
        "competitiveness": "Sedang"
      },
      {
        "id": "unmul-teknik-pertambangan",
        "name": "Teknik Pertambangan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 650,
        "quota": 55,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "unmul-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 65,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "unmul-kesehatan-masyarakat",
        "name": "Kesehatan Masyarakat",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 80,
        "applicants": 1550,
        "competitiveness": "Sedang"
      },
      {
        "id": "unmul-kehutanan",
        "name": "Kehutanan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 85,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "unmul-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 170,
        "applicants": 2900,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unmul-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 654,
        "quota": 115,
        "applicants": 2850,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unmul-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 95,
        "applicants": 2150,
        "competitiveness": "Sedang"
      },
      {
        "id": "unmul-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 60,
        "applicants": 2200,
        "competitiveness": "Sedang"
      },
      {
        "id": "unmul-hubungan-internasional",
        "name": "Hubungan Internasional",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 45,
        "applicants": 1600,
        "competitiveness": "Sedang"
      },
      {
        "id": "unmul-pgsd",
        "name": "PGSD",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 100,
        "applicants": 2200,
        "competitiveness": "Sedang"
      }
    ],
    "code": "6411"
  },
  {
    "id": "itk",
    "name": "Institut Teknologi Kalimantan",
    "shortName": "ITK",
    "location": "Karang Joang, Balikpapan, Kalimantan Timur",
    "region": "Kalimantan",
    "type": "Institut",
    "majors": [
      {
        "id": "itk-informatika",
        "name": "Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 654,
        "quota": 60,
        "applicants": 1950,
        "competitiveness": "Sedang"
      },
      {
        "id": "itk-sistem-informasi",
        "name": "Sistem Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 50,
        "applicants": 1550,
        "competitiveness": "Sedang"
      },
      {
        "id": "itk-sains-data",
        "name": "Sains Data",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 646,
        "quota": 40,
        "applicants": 1300,
        "competitiveness": "Sedang"
      },
      {
        "id": "itk-teknik-mesin",
        "name": "Teknik Mesin",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 55,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "itk-teknik-elektro",
        "name": "Teknik Elektro",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 55,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "itk-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 60,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "itk-teknik-industri",
        "name": "Teknik Industri",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 644,
        "quota": 55,
        "applicants": 1300,
        "competitiveness": "Sedang"
      },
      {
        "id": "itk-teknik-kimia",
        "name": "Teknik Kimia",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 50,
        "applicants": 980,
        "competitiveness": "Sedang"
      },
      {
        "id": "itk-teknik-perkapalan",
        "name": "Teknik Perkapalan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 634,
        "quota": 45,
        "applicants": 850,
        "competitiveness": "Sedang"
      },
      {
        "id": "itk-arsitektur",
        "name": "Arsitektur",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 645,
        "quota": 45,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "itk-perencanaan-wilayah-kota",
        "name": "Perencanaan Wilayah & Kota (PWK)",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 45,
        "applicants": 1150,
        "competitiveness": "Sedang"
      }
    ],
    "code": "6412"
  },
  {
    "id": "ubt",
    "name": "Universitas Borneo Tarakan",
    "shortName": "UBT",
    "location": "Tarakan, Kalimantan Utara",
    "region": "Kalimantan",
    "type": "Universitas",
    "majors": [
      {
        "id": "ubt-pendidikan-dokter",
        "name": "Pendidikan Dokter",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 685,
        "quota": 40,
        "applicants": 1450,
        "competitiveness": "Sedang"
      },
      {
        "id": "ubt-teknik-komputer",
        "name": "Teknik Komputer",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 45,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "ubt-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 624,
        "quota": 50,
        "applicants": 850,
        "competitiveness": "Sedang"
      },
      {
        "id": "ubt-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 630,
        "quota": 120,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "ubt-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 634,
        "quota": 95,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "ubt-pgsd",
        "name": "PGSD",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 630,
        "quota": 80,
        "applicants": 1500,
        "competitiveness": "Sedang"
      }
    ],
    "code": "6511"
  },
  {
    "id": "unsrat",
    "name": "Universitas Sam Ratulangi",
    "shortName": "UNSRAT",
    "location": "Bahu, Malalayang, Manado, Sulawesi Utara",
    "region": "Sulawesi",
    "type": "Universitas",
    "majors": [
      {
        "id": "unsrat-pendidikan-dokter",
        "name": "Pendidikan Dokter",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 712,
        "quota": 75,
        "applicants": 2800,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "unsrat-pendidikan-dokter-gigi",
        "name": "Pendidikan Dokter Gigi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 665,
        "quota": 45,
        "applicants": 1350,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unsrat-farmasi",
        "name": "Farmasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 654,
        "quota": 50,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsrat-informatika",
        "name": "Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 55,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsrat-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 65,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsrat-teknik-elektro",
        "name": "Teknik Elektro",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 55,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsrat-arsitektur",
        "name": "Arsitektur",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 45,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsrat-ilmu-kelautan",
        "name": "Ilmu Kelautan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 626,
        "quota": 60,
        "applicants": 850,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsrat-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 170,
        "applicants": 2850,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsrat-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 652,
        "quota": 115,
        "applicants": 2750,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unsrat-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 95,
        "applicants": 2100,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsrat-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 55,
        "applicants": 1950,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsrat-hubungan-internasional",
        "name": "Hubungan Internasional",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 645,
        "quota": 45,
        "applicants": 1500,
        "competitiveness": "Sedang"
      }
    ],
    "code": "7111"
  },
  {
    "id": "ung",
    "name": "Universitas Negeri Gorontalo",
    "shortName": "UNG",
    "location": "Kota Gorontalo, Gorontalo",
    "region": "Sulawesi",
    "type": "Universitas",
    "majors": [
      {
        "id": "ung-kedokteran",
        "name": "Kedokteran",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 702,
        "quota": 45,
        "applicants": 2150,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "ung-farmasi",
        "name": "Farmasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 646,
        "quota": 45,
        "applicants": 1500,
        "competitiveness": "Sedang"
      },
      {
        "id": "ung-sistem-informasi",
        "name": "Sistem Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 50,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "ung-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 55,
        "applicants": 1050,
        "competitiveness": "Sedang"
      },
      {
        "id": "ung-kesehatan-masyarakat",
        "name": "Kesehatan Masyarakat",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 70,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "ung-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 140,
        "applicants": 2250,
        "competitiveness": "Sedang"
      },
      {
        "id": "ung-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 110,
        "applicants": 2350,
        "competitiveness": "Sedang"
      },
      {
        "id": "ung-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 640,
        "quota": 90,
        "applicants": 1800,
        "competitiveness": "Sedang"
      },
      {
        "id": "ung-pgsd",
        "name": "PGSD",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 636,
        "quota": 95,
        "applicants": 1950,
        "competitiveness": "Sedang"
      }
    ],
    "code": "7211"
  },
  {
    "id": "untad",
    "name": "Universitas Tadulako",
    "shortName": "UNTAD",
    "location": "Tondo, Palu, Sulawesi Tengah",
    "region": "Sulawesi",
    "type": "Universitas",
    "majors": [
      {
        "id": "untad-pendidikan-dokter",
        "name": "Pendidikan Dokter",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 706,
        "quota": 60,
        "applicants": 2400,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "untad-farmasi",
        "name": "Farmasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 45,
        "applicants": 1550,
        "competitiveness": "Sedang"
      },
      {
        "id": "untad-teknik-informatika",
        "name": "Teknik Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 644,
        "quota": 55,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "untad-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 634,
        "quota": 65,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "untad-kesehatan-masyarakat",
        "name": "Kesehatan Masyarakat",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 634,
        "quota": 75,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "untad-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 160,
        "applicants": 2450,
        "competitiveness": "Sedang"
      },
      {
        "id": "untad-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 115,
        "applicants": 2500,
        "competitiveness": "Sedang"
      },
      {
        "id": "untad-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 95,
        "applicants": 1900,
        "competitiveness": "Sedang"
      },
      {
        "id": "untad-pgsd",
        "name": "PGSD",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 638,
        "quota": 100,
        "applicants": 2100,
        "competitiveness": "Sedang"
      }
    ],
    "code": "7311"
  },
  {
    "id": "unhas",
    "name": "Universitas Hasanuddin",
    "shortName": "UNHAS",
    "location": "Tamalanrea, Makassar, Sulawesi Selatan",
    "region": "Sulawesi",
    "type": "Universitas",
    "majors": [
      {
        "id": "unhas-pendidikan-dokter",
        "name": "Pendidikan Dokter",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 726,
        "quota": 95,
        "applicants": 4100,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "unhas-pendidikan-dokter-gigi",
        "name": "Pendidikan Dokter Gigi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 675,
        "quota": 60,
        "applicants": 1700,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unhas-farmasi",
        "name": "Farmasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 665,
        "quota": 70,
        "applicants": 2200,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unhas-teknik-informatika",
        "name": "Teknik Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 670,
        "quota": 65,
        "applicants": 2550,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unhas-sistem-informasi",
        "name": "Sistem Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 658,
        "quota": 55,
        "applicants": 1850,
        "competitiveness": "Sedang"
      },
      {
        "id": "unhas-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 75,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "unhas-teknik-elektro",
        "name": "Teknik Elektro",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 65,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "unhas-teknik-mesin",
        "name": "Teknik Mesin",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 646,
        "quota": 65,
        "applicants": 1300,
        "competitiveness": "Sedang"
      },
      {
        "id": "unhas-teknik-industri",
        "name": "Teknik Industri",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 65,
        "applicants": 1600,
        "competitiveness": "Sedang"
      },
      {
        "id": "unhas-teknik-pertambangan",
        "name": "Teknik Pertambangan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 658,
        "quota": 60,
        "applicants": 2100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unhas-teknik-geologi",
        "name": "Teknik Geologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 55,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "unhas-teknik-perkapalan",
        "name": "Teknik Perkapalan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 55,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "unhas-arsitektur",
        "name": "Arsitektur",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 654,
        "quota": 55,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "unhas-kesehatan-masyarakat",
        "name": "Kesehatan Masyarakat",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 646,
        "quota": 120,
        "applicants": 2350,
        "competitiveness": "Sedang"
      },
      {
        "id": "unhas-ilmu-gizi",
        "name": "Ilmu Gizi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 50,
        "applicants": 1650,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unhas-keperawatan",
        "name": "Keperawatan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 85,
        "applicants": 1800,
        "competitiveness": "Sedang"
      },
      {
        "id": "unhas-kedokteran-hewan",
        "name": "Kedokteran Hewan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 60,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "unhas-agroteknologi",
        "name": "Agroteknologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 95,
        "applicants": 1300,
        "competitiveness": "Sedang"
      },
      {
        "id": "unhas-peternakan",
        "name": "Peternakan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 100,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "unhas-ilmu-kelautan",
        "name": "Ilmu Kelautan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 65,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "unhas-ilmu-hukum",
        "name": "Ilmu Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 666,
        "quota": 190,
        "applicants": 3850,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unhas-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 668,
        "quota": 120,
        "applicants": 3350,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unhas-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 662,
        "quota": 100,
        "applicants": 2550,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unhas-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 664,
        "quota": 65,
        "applicants": 2900,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unhas-hubungan-internasional",
        "name": "Hubungan Internasional",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 660,
        "quota": 50,
        "applicants": 2100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unhas-psikologi",
        "name": "Psikologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 662,
        "quota": 75,
        "applicants": 3050,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unhas-ilmu-administrasi-publik",
        "name": "Ilmu Administrasi Publik",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 65,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "unhas-sastra-inggris",
        "name": "Sastra Inggris",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 50,
        "applicants": 1350,
        "competitiveness": "Sedang"
      }
    ],
    "code": "7411"
  },
  {
    "id": "unm",
    "name": "Universitas Negeri Makassar",
    "shortName": "UNM",
    "location": "Gunung Sari, Makassar, Sulawesi Selatan",
    "region": "Sulawesi",
    "type": "Universitas",
    "majors": [
      {
        "id": "unm-kedokteran",
        "name": "Kedokteran",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 708,
        "quota": 45,
        "applicants": 2300,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "unm-teknik-komputer",
        "name": "Teknik Komputer",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 652,
        "quota": 60,
        "applicants": 1950,
        "competitiveness": "Sedang"
      },
      {
        "id": "unm-pendidikan-teknik-inform",
        "name": "Pendidikan Teknik Informatika & Komputer (PTIK)",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 648,
        "quota": 55,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "unm-pendidikan-matematika",
        "name": "Pendidikan Matematika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 638,
        "quota": 60,
        "applicants": 1300,
        "competitiveness": "Sedang"
      },
      {
        "id": "unm-psikologi",
        "name": "Psikologi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 660,
        "quota": 90,
        "applicants": 3100,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unm-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 656,
        "quota": 115,
        "applicants": 2850,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unm-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 650,
        "quota": 95,
        "applicants": 2200,
        "competitiveness": "Sedang"
      },
      {
        "id": "unm-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 654,
        "quota": 60,
        "applicants": 2450,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unm-ilmu-administrasi-negara",
        "name": "Ilmu Administrasi Negara",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 70,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "unm-pendidikan-guru-sekolah-",
        "name": "Pendidikan Guru Sekolah Dasar (PGSD)",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 135,
        "applicants": 2650,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unm-pendidikan-bahasa-inggri",
        "name": "Pendidikan Bahasa Inggris",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 65,
        "applicants": 1600,
        "competitiveness": "Sedang"
      },
      {
        "id": "unm-desain-komunikasi-visual",
        "name": "Desain Komunikasi Visual (DKV)",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 55,
        "applicants": 1750,
        "competitiveness": "Sedang"
      }
    ],
    "code": "7412"
  },
  {
    "id": "uin-alauddin",
    "name": "UIN Alauddin Makassar",
    "shortName": "UIN Alauddin",
    "location": "Romangpolong, Gowa, Sulawesi Selatan",
    "region": "Sulawesi",
    "type": "UIN",
    "majors": [
      {
        "id": "uin-alauddin-pendidikan-dokter",
        "name": "Pendidikan Dokter",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 705,
        "quota": 45,
        "applicants": 2300,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "uin-alauddin-farmasi",
        "name": "Farmasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 650,
        "quota": 50,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-alauddin-teknik-informatika",
        "name": "Teknik Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 646,
        "quota": 55,
        "applicants": 1700,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-alauddin-sistem-informasi",
        "name": "Sistem Informasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 45,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-alauddin-kesehatan-masyarakat",
        "name": "Kesehatan Masyarakat",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 635,
        "quota": 65,
        "applicants": 1450,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-alauddin-ilmu-hukum",
        "name": "Ilmu Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 85,
        "applicants": 2150,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-alauddin-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 648,
        "quota": 80,
        "applicants": 2200,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-alauddin-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 70,
        "applicants": 1750,
        "competitiveness": "Sedang"
      },
      {
        "id": "uin-alauddin-ilmu-komunikasi",
        "name": "Ilmu Komunikasi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 60,
        "applicants": 1950,
        "competitiveness": "Sedang"
      }
    ],
    "code": "7413"
  },
  {
    "id": "uho",
    "name": "Universitas Halu Oleo",
    "shortName": "UHO",
    "location": "Kambu, Kendari, Sulawesi Tenggara",
    "region": "Sulawesi",
    "type": "Universitas",
    "majors": [
      {
        "id": "uho-pendidikan-dokter",
        "name": "Pendidikan Dokter",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 708,
        "quota": 60,
        "applicants": 2450,
        "competitiveness": "Sangat Tinggi"
      },
      {
        "id": "uho-farmasi",
        "name": "Farmasi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 650,
        "quota": 45,
        "applicants": 1600,
        "competitiveness": "Sedang"
      },
      {
        "id": "uho-teknik-pertambangan",
        "name": "Teknik Pertambangan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 646,
        "quota": 55,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "uho-teknik-informatika",
        "name": "Teknik Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 55,
        "applicants": 1600,
        "competitiveness": "Sedang"
      },
      {
        "id": "uho-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 634,
        "quota": 60,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "uho-kesehatan-masyarakat",
        "name": "Kesehatan Masyarakat",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 634,
        "quota": 75,
        "applicants": 1400,
        "competitiveness": "Sedang"
      },
      {
        "id": "uho-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 644,
        "quota": 160,
        "applicants": 2400,
        "competitiveness": "Sedang"
      },
      {
        "id": "uho-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 646,
        "quota": 115,
        "applicants": 2450,
        "competitiveness": "Sedang"
      },
      {
        "id": "uho-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 642,
        "quota": 95,
        "applicants": 1850,
        "competitiveness": "Sedang"
      },
      {
        "id": "uho-pgsd",
        "name": "PGSD",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 638,
        "quota": 100,
        "applicants": 2050,
        "competitiveness": "Sedang"
      }
    ],
    "code": "7511"
  },
  {
    "id": "unsulbar",
    "name": "Universitas Sulawesi Barat",
    "shortName": "UNSULBAR",
    "location": "Majene, Sulawesi Barat",
    "region": "Sulawesi",
    "type": "Universitas",
    "majors": [
      {
        "id": "unsulbar-informatika",
        "name": "Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 50,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsulbar-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 626,
        "quota": 50,
        "applicants": 900,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsulbar-keperawatan",
        "name": "Keperawatan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 60,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsulbar-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 632,
        "quota": 110,
        "applicants": 1550,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsulbar-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 636,
        "quota": 95,
        "applicants": 1700,
        "competitiveness": "Sedang"
      },
      {
        "id": "unsulbar-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 630,
        "quota": 80,
        "applicants": 1300,
        "competitiveness": "Sedang"
      }
    ],
    "code": "7611"
  },
  {
    "id": "unpatti",
    "name": "Universitas Pattimura",
    "shortName": "UNPATTI",
    "location": "Poka, Ambon, Maluku",
    "region": "Maluku & Papua",
    "type": "Universitas",
    "majors": [
      {
        "id": "unpatti-pendidikan-dokter",
        "name": "Pendidikan Dokter",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 695,
        "quota": 60,
        "applicants": 1950,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unpatti-teknik-perminyakan",
        "name": "Teknik Perminyakan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 642,
        "quota": 50,
        "applicants": 1300,
        "competitiveness": "Sedang"
      },
      {
        "id": "unpatti-informatika",
        "name": "Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 635,
        "quota": 50,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "unpatti-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 55,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "unpatti-teknik-geologi",
        "name": "Teknik Geologi",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 45,
        "applicants": 880,
        "competitiveness": "Sedang"
      },
      {
        "id": "unpatti-ilmu-kelautan",
        "name": "Ilmu Kelautan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 625,
        "quota": 55,
        "applicants": 850,
        "competitiveness": "Sedang"
      },
      {
        "id": "unpatti-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 638,
        "quota": 160,
        "applicants": 2100,
        "competitiveness": "Sedang"
      },
      {
        "id": "unpatti-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 640,
        "quota": 110,
        "applicants": 2150,
        "competitiveness": "Sedang"
      },
      {
        "id": "unpatti-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 635,
        "quota": 90,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "unpatti-pgsd",
        "name": "PGSD",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 632,
        "quota": 95,
        "applicants": 1850,
        "competitiveness": "Sedang"
      }
    ],
    "code": "8111"
  },
  {
    "id": "unkhair",
    "name": "Universitas Khairun",
    "shortName": "UNKHAIR",
    "location": "Gambesi, Ternate Selatan, Maluku Utara",
    "region": "Maluku & Papua",
    "type": "Universitas",
    "majors": [
      {
        "id": "unkhair-pendidikan-dokter",
        "name": "Pendidikan Dokter",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 690,
        "quota": 45,
        "applicants": 1700,
        "competitiveness": "Tinggi"
      },
      {
        "id": "unkhair-teknik-informatika",
        "name": "Teknik Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 632,
        "quota": 50,
        "applicants": 1150,
        "competitiveness": "Sedang"
      },
      {
        "id": "unkhair-teknik-pertambangan",
        "name": "Teknik Pertambangan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 636,
        "quota": 50,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "unkhair-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 625,
        "quota": 50,
        "applicants": 850,
        "competitiveness": "Sedang"
      },
      {
        "id": "unkhair-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 630,
        "quota": 140,
        "applicants": 1800,
        "competitiveness": "Sedang"
      },
      {
        "id": "unkhair-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 634,
        "quota": 100,
        "applicants": 1850,
        "competitiveness": "Sedang"
      },
      {
        "id": "unkhair-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 628,
        "quota": 80,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "unkhair-pgsd",
        "name": "PGSD",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 628,
        "quota": 85,
        "applicants": 1550,
        "competitiveness": "Sedang"
      }
    ],
    "code": "8211"
  },
  {
    "id": "uncen",
    "name": "Universitas Cenderawasih",
    "shortName": "UNCEN",
    "location": "Abepura & Waena, Jayapura, Papua",
    "region": "Maluku & Papua",
    "type": "Universitas",
    "majors": [
      {
        "id": "uncen-pendidikan-dokter",
        "name": "Pendidikan Dokter",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 692,
        "quota": 55,
        "applicants": 1850,
        "competitiveness": "Tinggi"
      },
      {
        "id": "uncen-teknik-pertambangan",
        "name": "Teknik Pertambangan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 640,
        "quota": 50,
        "applicants": 1350,
        "competitiveness": "Sedang"
      },
      {
        "id": "uncen-teknik-informatika",
        "name": "Teknik Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 634,
        "quota": 50,
        "applicants": 1250,
        "competitiveness": "Sedang"
      },
      {
        "id": "uncen-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 55,
        "applicants": 950,
        "competitiveness": "Sedang"
      },
      {
        "id": "uncen-kesehatan-masyarakat",
        "name": "Kesehatan Masyarakat",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 65,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "uncen-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 636,
        "quota": 160,
        "applicants": 2150,
        "competitiveness": "Sedang"
      },
      {
        "id": "uncen-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 638,
        "quota": 110,
        "applicants": 2200,
        "competitiveness": "Sedang"
      },
      {
        "id": "uncen-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 632,
        "quota": 90,
        "applicants": 1650,
        "competitiveness": "Sedang"
      },
      {
        "id": "uncen-hubungan-internasional",
        "name": "Hubungan Internasional",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 635,
        "quota": 45,
        "applicants": 1300,
        "competitiveness": "Sedang"
      },
      {
        "id": "uncen-pgsd",
        "name": "PGSD",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 630,
        "quota": 95,
        "applicants": 1750,
        "competitiveness": "Sedang"
      }
    ],
    "code": "9111"
  },
  {
    "id": "unipa",
    "name": "Universitas Papua",
    "shortName": "UNIPA",
    "location": "Amban, Manokwari, Papua Barat",
    "region": "Maluku & Papua",
    "type": "Universitas",
    "majors": [
      {
        "id": "unipa-pendidikan-dokter",
        "name": "Pendidikan Dokter",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 688,
        "quota": 45,
        "applicants": 1600,
        "competitiveness": "Sedang"
      },
      {
        "id": "unipa-teknik-informatika",
        "name": "Teknik Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 630,
        "quota": 45,
        "applicants": 1100,
        "competitiveness": "Sedang"
      },
      {
        "id": "unipa-teknik-pertambangan",
        "name": "Teknik Pertambangan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 634,
        "quota": 45,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "unipa-kehutanan",
        "name": "Kehutanan",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 624,
        "quota": 75,
        "applicants": 900,
        "competitiveness": "Sedang"
      },
      {
        "id": "unipa-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 632,
        "quota": 90,
        "applicants": 1600,
        "competitiveness": "Sedang"
      },
      {
        "id": "unipa-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 630,
        "quota": 110,
        "applicants": 1550,
        "competitiveness": "Sedang"
      }
    ],
    "code": "9211"
  },
  {
    "id": "unmus",
    "name": "Universitas Musamus Merauke",
    "shortName": "UNMUS",
    "location": "Merauke, Papua Selatan",
    "region": "Maluku & Papua",
    "type": "Universitas",
    "majors": [
      {
        "id": "unmus-teknik-informatika",
        "name": "Teknik Informatika",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 628,
        "quota": 45,
        "applicants": 980,
        "competitiveness": "Sedang"
      },
      {
        "id": "unmus-teknik-sipil",
        "name": "Teknik Sipil",
        "degree": "S1",
        "category": "Saintek",
        "targetScore": 622,
        "quota": 45,
        "applicants": 820,
        "competitiveness": "Sedang"
      },
      {
        "id": "unmus-hukum",
        "name": "Hukum",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 628,
        "quota": 110,
        "applicants": 1450,
        "competitiveness": "Sedang"
      },
      {
        "id": "unmus-manajemen",
        "name": "Manajemen",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 630,
        "quota": 90,
        "applicants": 1550,
        "competitiveness": "Sedang"
      },
      {
        "id": "unmus-akuntansi",
        "name": "Akuntansi",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 626,
        "quota": 75,
        "applicants": 1200,
        "competitiveness": "Sedang"
      },
      {
        "id": "unmus-pgsd",
        "name": "PGSD",
        "degree": "S1",
        "category": "Soshum",
        "targetScore": 628,
        "quota": 80,
        "applicants": 1400,
        "competitiveness": "Sedang"
      }
    ],
    "code": "9311"
  }
];

// Fungsi Helper Pencarian Jurusan
function findMajorById(majorId) {
  if (!majorId || !Array.isArray(PTN_LIST)) return null;
  for (const ptn of PTN_LIST) {
    if (!Array.isArray(ptn.majors)) continue;
    const found = ptn.majors.find(m => m.id === majorId);
    if (found) {
      return {
        ...found,
        degree: found.degree || "S1",
        ptnId: ptn.id,
        ptnCode: ptn.code,
        ptnName: ptn.name,
        ptnShort: ptn.shortName,
        ptnLocation: ptn.location,
        ptnRegion: ptn.region,
        ptnType: ptn.type
      };
    }
  }
  return null;
}

if (typeof window !== "undefined") {
  window.PTN_LIST = PTN_LIST;
  window.findMajorById = findMajorById;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { PTN_LIST, findMajorById };
}
