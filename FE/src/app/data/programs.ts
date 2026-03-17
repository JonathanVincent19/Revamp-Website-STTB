export interface Course {
    name: string;
    sks: number;
}

export interface CurriculumCategory {
    category: string;
    sks: number;
    courses: Course[];
}

export interface Program {
    slug: string;
    label: string;
    fullName: string;
    level: "S1" | "S2";
    degree: string;
    profilTitle: string;
    tagline: string;
    description: string[];
    sistem: string[];
    totalSKS: number;
    masaStudi: string;
    requirements: string[];
    curriculum: CurriculumCategory[];
    curriculumNote: string;
}

const programs: Program[] = [
    {
        slug: "sarjana-teologi",
        label: "Sarjana Teologi",
        fullName: "Sarjana Teologi",
        level: "S1",
        degree: "S.Th.",
        profilTitle: "Transformative Pastor-Scholar",
        tagline:
            "Mempersiapkan pastor-scholar yang transformatif, berpengetahuan luas, dan berdampak bagi jemaat dan lingkungan pelayanan dalam konteks urban.",
        description: [
            "Program Sarjana Teologi (S.Th.) dirancang untuk mempersiapkan mahasiswa menjadi hamba Tuhan penuh waktu — pendeta, penginjil, gembala jemaat — yang memiliki fondasi teologis yang kokoh dan karakter Kristiani yang matang.",
            "Kurikulum Program S.Th. mencakup studi mendalam atas Alkitab (Perjanjian Lama dan Baru), Teologi Sistematika, Sejarah Gereja, hingga Bahasa Alkitab (Ibrani & Yunani). Selain akademis, program ini menekankan formasi spiritualitas dan praktik pelayanan nyata melalui Praktik Lapangan selama 6 bulan.",
        ],
        sistem: [
            "Perkuliahan dilakukan secara blok teaching selama 3 minggu yang diikuti dengan minggu pengerjaan tugas.",
            "Satu semester terdiri dari 15x pertemuan (kuliah & evaluasi).",
            "Perkuliahan berlangsung selama 7 semester dan dilanjut dengan praktik pelayanan selama 6 bulan.",
            "Mahasiswa yang belum menikah wajib tinggal di asrama.",
        ],
        totalSKS: 148,
        masaStudi: "4 Tahun (7 Semester + 6 Bulan Praktik)",
        requirements: [
            "Minimal lulusan SMA/sederajat.",
            "Pernah terlibat pelayanan gerejawi dan/atau lembaga Kristen minimal 2 tahun.",
            "Memiliki panggilan yang jelas sebagai rohaniwan penuh waktu.",
            "Memiliki kemampuan dasar Bahasa Inggris (membaca & memahami teks).",
            "Memenuhi seluruh prosedur pendaftaran yang berlaku di STTB.",
        ],
        curriculum: [
            {
                category: "Mata Kuliah Umum",
                sks: 14,
                courses: [
                    { name: "Pancasila dan Kewarganegaraan", sks: 2 },
                    { name: "Bahasa Indonesia", sks: 2 },
                    { name: "Bahasa Inggris Teologi", sks: 2 },
                    { name: "Metode Berpikir", sks: 2 },
                    { name: "Psikologi Perkembangan Masa Hidup", sks: 3 },
                    { name: "Metode Penulisan & Penelitian", sks: 3 },
                ],
            },
            {
                category: "Studi Biblika",
                sks: 34,
                courses: [
                    { name: "Pengantar Alkitab dan Teologi Biblika", sks: 3 },
                    { name: "Studi PL 1: Kitab Taurat", sks: 3 },
                    { name: "Studi PL 2: Kitab Sejarah", sks: 3 },
                    { name: "Studi PL 3: Kitab Sastra", sks: 3 },
                    { name: "Studi PL 4: Kitab Nabi-nabi", sks: 3 },
                    { name: "Studi PB 1: Kitab Injil", sks: 3 },
                    { name: "Studi PB 2: Kis Para Rasul & Surat Paulus", sks: 3 },
                    { name: "Studi PB 3: Surat Umum & Wahyu", sks: 3 },
                    { name: "Hermeneutika Biblika", sks: 3 },
                    { name: "Bahasa Ibrani", sks: 3 },
                    { name: "Bahasa Yunani", sks: 3 },
                    { name: "Bahasa Yunani Lanjutan", sks: 3 },
                ],
            },
            {
                category: "Studi Teologi",
                sks: 23,
                courses: [
                    { name: "Prolegomena & Doktrin Alkitab", sks: 3 },
                    { name: "Doktrin Allah, Penciptaan & Manusia", sks: 3 },
                    { name: "Doktrin Kristus, Dosa & Keselamatan", sks: 3 },
                    { name: "Doktrin Roh Kudus & Akhir Zaman", sks: 3 },
                    { name: "Doktrin Gereja", sks: 3 },
                    { name: "Apologetika", sks: 2 },
                    { name: "Etika Kristen", sks: 3 },
                    { name: "Teologi Reformed & Injili", sks: 3 },
                ],
            },
            {
                category: "Sejarah & Budaya",
                sks: 12,
                courses: [
                    { name: "Sejarah Gereja Dunia", sks: 3 },
                    { name: "Sejarah Gereja Indonesia", sks: 3 },
                    { name: "Sejarah Teologi", sks: 2 },
                    { name: "Fenomenologi Agama", sks: 2 },
                    { name: "Iman & Kebudayaan", sks: 2 },
                ],
            },
            {
                category: "Praktika",
                sks: 42,
                courses: [
                    { name: "Asuhan Kristen", sks: 3 },
                    { name: "Formasi Spiritualitas", sks: 3 },
                    { name: "Homiletika 1 (Khotbah Ekspositori)", sks: 3 },
                    { name: "Homiletika 2", sks: 3 },
                    { name: "Pelayanan Ibadah & Musik Gerejawi", sks: 3 },
                    { name: "Teologi Penggembalaan", sks: 3 },
                    { name: "Penginjilan & Pemuridan", sks: 3 },
                    { name: "Misi & Teologi Misi", sks: 3 },
                    { name: "Kepemimpinan Kristen", sks: 3 },
                    { name: "Manajemen Gereja", sks: 3 },
                    { name: "Konseling Pastoral", sks: 3 },
                    { name: "Pelayanan Anak & Remaja", sks: 3 },
                    { name: "Kontekstualisasi Teologi", sks: 3 },
                    { name: "Gereja Urban", sks: 3 },
                ],
            },
            {
                category: "Konsentrasi: Pemuridan & Misi",
                sks: 9,
                courses: [
                    { name: "Strategi Pemuridan", sks: 3 },
                    { name: "Teologi Misi Kontemporer", sks: 3 },
                    { name: "Pelayanan Misi Lintas Budaya", sks: 3 },
                ],
            },
            {
                category: "Praktik Lapangan & Tugas Akhir",
                sks: 15,
                courses: [
                    { name: "Praktik Pelayanan Lapangan I", sks: 3 },
                    { name: "Praktik Pelayanan Lapangan II", sks: 3 },
                    { name: "Praktik Pelayanan Lapangan III", sks: 3 },
                    { name: "Skripsi / Tugas Akhir", sks: 6 },
                ],
            },
        ],
        curriculumNote:
            "Total SKS kelulusan minimal adalah 148 SKS. Mahasiswa wajib memilih salah satu konsentrasi: Pemuridan & Misi atau Pelayanan Anak Holistik (9 SKS). Mata Kuliah Praktik Lapangan dilaksanakan selama 6 bulan penuh di gereja atau lembaga mitra STTB.",
    },
    {
        slug: "sarjana-pendidikan-kristen",
        label: "Sarjana Pendidikan Kristen",
        fullName: "Sarjana Pendidikan Kristen",
        level: "S1",
        degree: "S.Pd.K.",
        profilTitle: "Transformative Educator",
        tagline:
            "Mempersiapkan pendidik Kristen yang berpengetahuan luas, berfondasi spiritualitas kokoh, dan berdampak bagi peserta didik di berbagai konteks pelayanan.",
        description: [
            "Program Sarjana Pendidikan Kristen (S.Pd.K.) mempersiapkan lulusan yang kompeten sebagai pendidik Kristen yang holistik, mampu mengintegrasikan iman dan ilmu dalam proses pendidikan, baik di sekolah Kristen, gereja, maupun komunitas.",
            "Kurikulum program ini menggabungkan fondasi studi biblika-teologis dengan ilmu pendidikan modern, sehingga lulusan memiliki kacamata teologis yang kuat sekaligus kecakapan pedagogis yang relevan dengan perkembangan dunia pendidikan masa kini.",
        ],
        sistem: [
            "Perkuliahan dilakukan secara blok teaching selama 3 minggu yang diikuti dengan minggu pengerjaan tugas.",
            "Satu semester terdiri dari 15x pertemuan (kuliah & evaluasi).",
            "Mahasiswa melakukan Praktik Pengajaran di sekolah Kristen atau komunitas gerejawi.",
        ],
        totalSKS: 148,
        masaStudi: "4 Tahun (8 Semester)",
        requirements: [
            "Minimal lulusan SMA/sederajat.",
            "Pernah terlibat pelayanan gerejawi dan/atau lembaga Kristen minimal 2 tahun.",
            "Memiliki panggilan yang jelas di bidang pendidikan Kristen.",
            "Memiliki kemampuan dasar Bahasa Inggris (membaca & memahami teks).",
            "Memenuhi seluruh prosedur pendaftaran yang berlaku di STTB.",
        ],
        curriculum: [
            {
                category: "Mata Kuliah Dasar Umum",
                sks: 12,
                courses: [
                    { name: "Pancasila dan Kewarganegaraan", sks: 2 },
                    { name: "Bahasa Indonesia", sks: 2 },
                    { name: "Bahasa Inggris Teologi", sks: 2 },
                    { name: "Metode Berpikir", sks: 2 },
                    { name: "Metode Penulisan & Penelitian", sks: 2 },
                    { name: "Psikologi Perkembangan", sks: 2 },
                ],
            },
            {
                category: "Studi Biblika",
                sks: 29,
                courses: [
                    { name: "Pengantar Alkitab & Teologi Biblika", sks: 3 },
                    { name: "Studi PL 1: Kitab Taurat & Sejarah", sks: 3 },
                    { name: "Studi PL 2: Kitab Sastra & Nabi-nabi", sks: 3 },
                    { name: "Studi PB 1: Kitab Injil & Kisah Para Rasul", sks: 3 },
                    { name: "Studi PB 2: Surat-surat Paulus & Umum", sks: 3 },
                    { name: "Hermeneutika Biblika", sks: 3 },
                    { name: "Bahasa Ibrani Dasar", sks: 3 },
                    { name: "Bahasa Yunani Dasar", sks: 3 },
                    { name: "Teologi Alkitabiah Pendidikan", sks: 2 },
                ],
            },
            {
                category: "Mata Kuliah Teologi",
                sks: 20,
                courses: [
                    { name: "Teologi Sistematika 1: Allah & Manusia", sks: 3 },
                    { name: "Teologi Sistematika 2: Kristologi & Soteriologi", sks: 3 },
                    { name: "Teologi Sistematika 3: Eklesiologi & Eskatologi", sks: 3 },
                    { name: "Etika Kristen", sks: 3 },
                    { name: "Apologetika Kristen", sks: 2 },
                    { name: "Sejarah Gereja & Tradisi", sks: 3 },
                    { name: "Iman & Kebudayaan", sks: 3 },
                ],
            },
            {
                category: "Pendidikan & Praktika",
                sks: 65,
                courses: [
                    { name: "Filsafat Pendidikan Kristen", sks: 3 },
                    { name: "Kurikulum Pendidikan Kristen", sks: 3 },
                    { name: "Psikologi Belajar", sks: 3 },
                    { name: "Teori & Metode Mengajar", sks: 3 },
                    { name: "Desain Pembelajaran", sks: 3 },
                    { name: "Pendidikan Anak Kristen", sks: 3 },
                    { name: "Pendidikan Remaja & Pemuda", sks: 3 },
                    { name: "Pendidikan Dewasa", sks: 3 },
                    { name: "Manajemen Sekolah Kristen", sks: 3 },
                    { name: "Konseling & Bimbingan", sks: 3 },
                    { name: "Micro Teaching", sks: 3 },
                    { name: "Praktik Pengajaran I", sks: 3 },
                    { name: "Praktik Pengajaran II", sks: 3 },
                ],
            },
            {
                category: "Praktik Pelayanan & Tugas Akhir",
                sks: 16,
                courses: [
                    { name: "Praktik Pelayanan Lapangan I", sks: 3 },
                    { name: "Praktik Pelayanan Lapangan II", sks: 3 },
                    { name: "Seminar Penelitian Pendidikan", sks: 3 },
                    { name: "Skripsi / Tugas Akhir", sks: 7 },
                ],
            },
        ],
        curriculumNote:
            "Total SKS kelulusan minimal adalah 148 SKS. Lulusan program ini siap berkarya sebagai guru agama Kristen, koordinator PAK gereja, guru sekolah Kristen, maupun pelayan anak dan remaja di jemaat.",
    },
    {
        slug: "magister-teologi-pelayanan-pastoral",
        label: "Magister Teologi Pelayanan Pastoral Gereja Urban",
        fullName: "Magister Teologi — Pelayanan Pastoral Gereja Urban",
        level: "S2",
        degree: "M.Th.",
        profilTitle: "Transformative Pastor-Scholar",
        tagline:
            "Mempersiapkan pastor-scholar yang mampu mengkonstruksi teologi sehat berdasarkan Alkitab dan menghadirkan pelayanan pastoral yang integral dalam konteks gereja perkotaan.",
        description: [
            "Program Magister Teologi konsentrasi Pelayanan Pastoral Gereja Urban hadir untuk memperlengkapi hamba Tuhan yang sudah berpengalaman agar semakin kokoh secara teologis dan mampu merancang serta melaksanakan pelayanan yang relevan di tengah kompleksitas masyarakat kota.",
            "Program ini menggabungkan studi teks Alkitab yang mendalam dengan kajian pastoral kontekstual di perkotaan. Mahasiswa akan diperlengkapi secara teologis, pastoral, dan akademis untuk berkontribusi bagi gereja urban masa kini dan mendatang.",
        ],
        sistem: [
            "Perkuliahan dilakukan secara blok intensif, memungkinkan peserta yang aktif melayani tetap dapat mengikuti studi.",
            "Program dapat diselesaikan dalam 4 semester (2 tahun) dengan total 56 SKS.",
            "Setiap semester mahasiswa mendapatkan sesi Mentoring pastoral dari dosen pembimbing.",
        ],
        totalSKS: 56,
        masaStudi: "2 Tahun (4 Semester)",
        requirements: [
            "Lulusan S1 Teologi atau bidang terkait.",
            "IPK minimal 2.75.",
            "Memiliki pengalaman pelayanan gerejawi minimal 2 tahun.",
            "Rekomendasi dari gereja/lembaga tempat melayani.",
            "Lulus seleksi wawancara akademik.",
            "Memenuhi seluruh prosedur pendaftaran yang berlaku di STTB.",
        ],
        curriculum: [
            {
                category: "Mata Kuliah Inti",
                sks: 15,
                courses: [
                    { name: "Teologi Biblika Perjanjian Lama", sks: 3 },
                    { name: "Teologi Biblika Perjanjian Baru", sks: 3 },
                    { name: "Teologi Sistematika Lanjutan", sks: 3 },
                    { name: "Hermeneutika Lanjutan", sks: 3 },
                    { name: "Metodologi Penelitian Teologi", sks: 3 },
                ],
            },
            {
                category: "Mata Kuliah Konsentrasi",
                sks: 18,
                courses: [
                    { name: "Teologi Pastoral Kontemporer", sks: 3 },
                    { name: "Pelayanan Pastoral dalam Konteks Urban", sks: 3 },
                    { name: "Konseling Pastoral Lanjutan", sks: 3 },
                    { name: "Kepemimpinan Gereja Urban", sks: 3 },
                    { name: "Homiletics & Preaching in Urban Context", sks: 3 },
                    { name: "Gereja & Misi Urban", sks: 3 },
                ],
            },
            {
                category: "Mata Kuliah Elektif",
                sks: 6,
                courses: [
                    { name: "Teologi Kontekstualisasi", sks: 3 },
                    { name: "Studi Kasus Gereja Urban", sks: 3 },
                ],
            },
            {
                category: "Penelitian & Tugas Akhir",
                sks: 15,
                courses: [
                    { name: "Seminar Proposal Tesis", sks: 3 },
                    { name: "Tesis", sks: 12 },
                ],
            },
            {
                category: "Mentoring",
                sks: 2,
                courses: [
                    { name: "Mentoring Pastoral Semester 1", sks: 1 },
                    { name: "Mentoring Pastoral Semester 2", sks: 1 },
                ],
            },
        ],
        curriculumNote:
            "Total SKS kelulusan adalah 56 SKS. Mata kuliah elektif dipilih sesuai minat dan arah penelitian tesis mahasiswa. Sesi mentoring dilakukan secara personal bersama dosen pembimbing setiap semester.",
    },
    {
        slug: "magister-teologi-transformasi-budaya",
        label: "Magister Teologi Transformasi Budaya & Masyarakat",
        fullName: "Magister Teologi — Transformasi Budaya & Masyarakat",
        level: "S2",
        degree: "M.Th.",
        profilTitle: "Transformative Pastor-Scholar",
        tagline:
            "Mempersiapkan pastor-scholar yang mampu merancang pelayanan integral dan melakukan penelitian akademis di bidang teologi transformasi budaya & masyarakat.",
        description: [
            "Program Magister Teologi konsentrasi Transformasi Budaya & Masyarakat mempersiapkan pemimpin Kristen yang mampu memahami dan merespons tantangan sosial-budaya dari perspektif teologi yang solid serta menghadirkan transformasi yang nyata di tengah masyarakat.",
            "Melalui kurikulum ini, mahasiswa dilatih untuk tidak sekadar mempelajari teologi secara akademis, tetapi juga mengaplikasikannya secara konkrit dalam konteks budaya, sosial, dan masyarakat — khususnya di lingkungan perkotaan Indonesia.",
        ],
        sistem: [
            "Perkuliahan dilakukan secara blok intensif yang memungkinkan peserta yang aktif melayani tetap dapat mengikuti studi.",
            "Program dapat diselesaikan dalam 4 semester (2 tahun) dengan total 56 SKS.",
            "Mahasiswa didorong untuk mempublikasikan hasil penelitian tesis di jurnal teologi.",
        ],
        totalSKS: 56,
        masaStudi: "2 Tahun (4 Semester)",
        requirements: [
            "Lulusan S1 Teologi atau bidang terkait.",
            "IPK minimal 2.75.",
            "Memiliki pengalaman pelayanan gerejawi atau sosial minimal 2 tahun.",
            "Rekomendasi dari gereja/lembaga tempat melayani.",
            "Lulus seleksi wawancara akademik.",
            "Memenuhi seluruh prosedur pendaftaran yang berlaku di STTB.",
        ],
        curriculum: [
            {
                category: "Mata Kuliah Inti",
                sks: 15,
                courses: [
                    { name: "Teologi Biblika Perjanjian Lama", sks: 3 },
                    { name: "Teologi Biblika Perjanjian Baru", sks: 3 },
                    { name: "Teologi Sistematika Lanjutan", sks: 3 },
                    { name: "Hermeneutika Lanjutan", sks: 3 },
                    { name: "Metodologi Penelitian Teologi", sks: 3 },
                ],
            },
            {
                category: "Mata Kuliah Konsentrasi",
                sks: 18,
                courses: [
                    { name: "Teologi Kebudayaan", sks: 3 },
                    { name: "Etika Sosial Kristen", sks: 3 },
                    { name: "Transformasi Komunitas", sks: 3 },
                    { name: "Iman & Ilmu Pengetahuan", sks: 3 },
                    { name: "Teologi & Ekonomi", sks: 3 },
                    { name: "Apologetika Kontekstual", sks: 3 },
                ],
            },
            {
                category: "Mata Kuliah Elektif",
                sks: 6,
                courses: [
                    { name: "Studi Lintas Budaya", sks: 3 },
                    { name: "Gereja & Pluralisme", sks: 3 },
                ],
            },
            {
                category: "Penelitian & Tugas Akhir",
                sks: 15,
                courses: [
                    { name: "Seminar Proposal Tesis", sks: 3 },
                    { name: "Tesis", sks: 12 },
                ],
            },
            {
                category: "Mentoring",
                sks: 2,
                courses: [
                    { name: "Mentoring Akademik Semester 1", sks: 1 },
                    { name: "Mentoring Akademik Semester 2", sks: 1 },
                ],
            },
        ],
        curriculumNote:
            "Total SKS kelulusan adalah 56 SKS. Tesis merupakan karya ilmiah orisinal yang diharapkan dapat berkontribusi pada pengembangan teologi transformasi di Indonesia. Mahasiswa didorong untuk mempresentasikan riset di forum akademik.",
    },
    {
        slug: "magister-pendidikan-kristen",
        label: "Magister Pendidikan Kristen",
        fullName: "Magister Pendidikan Kristen",
        level: "S2",
        degree: "M.Pd.K.",
        profilTitle: "Transformative Educational Leaders",
        tagline:
            "Mempersiapkan pemimpin pendidikan Kristen yang memiliki fondasi biblika-teologis kokoh dan kecakapan merancang pendidikan Kristen yang transformatif dan integratif.",
        description: [
            "Program Magister Pendidikan Kristen (M.Pd.K.) dirancang untuk para pendidik, pemimpin sekolah Kristen, dan pelayan pendidikan gereja yang ingin memperdalam wawasan teologi pendidikan dan meningkatkan kompetensi kepemimpinan mereka.",
            "Kurikulum program ini memadukan fondasi biblika-teologis dengan teori pendidikan modern, sehingga lulusan mampu memimpin dan merancang sistem pendidikan Kristen yang holistik, relevan, dan transformatif di gereja, sekolah, maupun komunitas.",
        ],
        sistem: [
            "Perkuliahan dilakukan secara blok intensif, memungkinkan peserta yang aktif berkarya tetap dapat mengikuti studi.",
            "Program dapat diselesaikan dalam 4 semester dengan total 60 SKS.",
            "Tersedia dua pilihan konsentrasi: Desain Pembelajaran atau Kepemimpinan Pendidikan.",
        ],
        totalSKS: 60,
        masaStudi: "2 Tahun (4 Semester)",
        requirements: [
            "Lulusan S1 Pendidikan, Teologi, atau bidang terkait.",
            "IPK minimal 2.75.",
            "Memiliki pengalaman di bidang pendidikan atau pelayanan gereja minimal 1 tahun.",
            "Rekomendasi dari institusi tempat berkarya.",
            "Lulus seleksi wawancara akademik.",
            "Memenuhi seluruh prosedur pendaftaran yang berlaku di STTB.",
        ],
        curriculum: [
            {
                category: "Mata Kuliah Fondasi",
                sks: 12,
                courses: [
                    { name: "Teologi Biblika & Pendidikan", sks: 3 },
                    { name: "Filsafat Pendidikan Kristen", sks: 3 },
                    { name: "Landasan Historis & Komparatif PAK", sks: 3 },
                    { name: "Hermeneutika & Teologi Terapan", sks: 3 },
                ],
            },
            {
                category: "Mata Kuliah Inti",
                sks: 16,
                courses: [
                    { name: "Teori Kurikulum Pendidikan Kristen", sks: 3 },
                    { name: "Psikologi Pendidikan Lanjutan", sks: 3 },
                    { name: "Evaluasi & Asesmen Pembelajaran", sks: 3 },
                    { name: "Kepemimpinan Pendidikan Kristen", sks: 3 },
                    { name: "Etika & Profesionalisme Pendidik", sks: 4 },
                ],
            },
            {
                category: "Konsentrasi: Desain Pembelajaran",
                sks: 9,
                courses: [
                    { name: "Desain Instruksional", sks: 3 },
                    { name: "Teknologi Pendidikan & E-Learning", sks: 3 },
                    { name: "Pengembangan Materi Ajar PAK", sks: 3 },
                ],
            },
            {
                category: "Mata Kuliah Elektif",
                sks: 6,
                courses: [
                    { name: "Pendidikan Keluarga Kristen", sks: 3 },
                    { name: "Pendidikan Karakter", sks: 3 },
                ],
            },
            {
                category: "Penelitian & Tugas Akhir",
                sks: 17,
                courses: [
                    { name: "Metodologi Penelitian Pendidikan", sks: 3 },
                    { name: "Seminar Proposal Tesis", sks: 2 },
                    { name: "Tesis", sks: 12 },
                ],
            },
        ],
        curriculumNote:
            "Total SKS kelulusan adalah 60 SKS. Mahasiswa memilih satu konsentrasi: Desain Pembelajaran atau Kepemimpinan Pendidikan. Tesis difokuskan pada permasalahan nyata di dunia pendidikan Kristen Indonesia.",
    },
    {
        slug: "magister-ministri-marketplace",
        label: "Magister Ministri Marketplace",
        fullName: "Magister Ministri — In Marketplace",
        level: "S2",
        degree: "M.Min.",
        profilTitle: "Transformative Christian Professionals",
        tagline:
            "Mempersiapkan profesional Kristen yang memiliki fondasi biblikal-teologis untuk memahami misi Allah melalui dunia kerja dan menghadirkan shalom di lingkungan marketplace.",
        description: [
            "Program Magister Ministri Marketplace (M.Min.) hadir untuk para profesional Kristen yang terpanggil untuk menjadi saksi Kristus di dunia kerja — baik di perusahaan, pemerintahan, organisasi nirlaba, maupun wirausaha — yang ingin memperdalam fondasi teologis pelayanan mereka.",
            "Program ini tidak dirancang untuk membuat peserta meninggalkan pekerjaan mereka, melainkan untuk memperlengkapi mereka agar menjadi hamba Tuhan yang efektif di tempatnya masing-masing — menghadirkan nilai-nilai kerajaan Allah ke dalam dunia profesi.",
        ],
        sistem: [
            "Perkuliahan dilakukan secara blok intensif pada akhir pekan atau hari libur, sangat cocok untuk profesional yang bekerja penuh waktu.",
            "Program dapat diselesaikan dalam 4 semester dengan total 54 SKS.",
            "Metode pembelajaran kombinasi antara perkuliahan tatap muka, diskusi kelompok, dan refleksi kontekstual.",
        ],
        totalSKS: 54,
        masaStudi: "2 Tahun (4 Semester)",
        requirements: [
            "Lulusan S1 dari bidang apapun (Teologi atau non-Teologi).",
            "IPK minimal 2.75.",
            "Aktif bekerja atau berpengalaman di dunia profesional minimal 2 tahun.",
            "Aktif terlibat di gereja lokal.",
            "Rekomendasi dari gembala sidang atau pemimpin rohani.",
            "Memenuhi seluruh prosedur pendaftaran yang berlaku di STTB.",
        ],
        curriculum: [
            {
                category: "Fondasi Biblika",
                sks: 9,
                courses: [
                    { name: "Teologi Alkitabiah untuk Marketplace", sks: 3 },
                    { name: "Studi Alkitab Tematik: Pekerjaan & Panggilan", sks: 3 },
                    { name: "Hermeneutika Praktis", sks: 3 },
                ],
            },
            {
                category: "Fondasi Sistematika & Historika",
                sks: 12,
                courses: [
                    { name: "Teologi Sistematika Terapan", sks: 3 },
                    { name: "Sejarah Gereja & Reformasi", sks: 3 },
                    { name: "Etika Bisnis & Profesi Kristen", sks: 3 },
                    { name: "Teologi Kerja & Vokasi", sks: 3 },
                ],
            },
            {
                category: "Mata Kuliah Inti",
                sks: 12,
                courses: [
                    { name: "Kepemimpinan Kristen dalam Dunia Kerja", sks: 3 },
                    { name: "Pelayanan Holistik di Marketplace", sks: 3 },
                    { name: "Formasi Spiritualitas untuk Profesional", sks: 3 },
                    { name: "Strategi Penginjilan di Workplace", sks: 3 },
                ],
            },
            {
                category: "Mata Kuliah Konsentrasi",
                sks: 6,
                courses: [
                    { name: "Ekonomi & Shalom", sks: 3 },
                    { name: "Kewirausahaan Sosial Kristen", sks: 3 },
                ],
            },
            {
                category: "Mata Kuliah Elektif",
                sks: 6,
                courses: [
                    { name: "Konseling di Lingkungan Kerja", sks: 3 },
                    { name: "Studi Kasus Pelayanan Workplace", sks: 3 },
                ],
            },
            {
                category: "Mata Kuliah Penelitian",
                sks: 9,
                courses: [
                    { name: "Metodologi Penelitian Terapan", sks: 3 },
                    { name: "Proyek Akhir / Ministry Project", sks: 6 },
                ],
            },
        ],
        curriculumNote:
            "Total SKS kelulusan adalah 54 SKS. Tugas akhir berupa Ministry Project — sebuah rancangan dan implementasi proyek pelayanan nyata di lingkungan kerja atau komunitas profesional peserta.",
    },
    {
        slug: "magister-ministri-kepemimpinan-pastoral",
        label: "Magister Ministri Kepemimpinan Pastoral",
        fullName: "Magister Ministri — Kepemimpinan Pastoral",
        level: "S2",
        degree: "M.Min.",
        profilTitle: "Transformative Christian Professionals",
        tagline:
            "Mempersiapkan pemimpin gereja yang memiliki fondasi biblikal-teologis solid, karakter dewasa dalam Kristus, dan kecakapan memimpin serta menggembalakan jemaat urban.",
        description: [
            "Program Magister Ministri Kepemimpinan Pastoral (M.Min.) dirancang untuk para pelayan Tuhan yang aktif di gereja dan ingin meningkatkan kapasitas kepemimpinan serta penggembalaan mereka melalui pendekatan yang teologis, praktis, dan kontekstual.",
            "Program ini menekankan integrasi antara fondasi biblika yang kokoh dengan prinsip-prinsip kepemimpinan Kristen yang sehat dan kecakapan menggembalakan jemaat di berbagai usia dan latar belakang — terutama dalam konteks gereja urban yang dinamis.",
        ],
        sistem: [
            "Perkuliahan dilakukan secara blok intensif memungkinkan hamba Tuhan yang aktif melayani tetap dapat mengikuti studi.",
            "Program dapat diselesaikan dalam 4 semester dengan total 45 SKS.",
            "Tersedia sesi mentoring pastoral dari dosen pembimbing setiap semester.",
        ],
        totalSKS: 45,
        masaStudi: "2 Tahun (4 Semester)",
        requirements: [
            "Lulusan S1 Teologi atau bidang terkait.",
            "IPK minimal 2.75.",
            "Aktif melayani sebagai pendeta, penatua, atau pemimpin gereja minimal 2 tahun.",
            "Rekomendasi dari sinode/denomiasi atau gembala senior.",
            "Lulus seleksi wawancara akademik.",
            "Memenuhi seluruh prosedur pendaftaran yang berlaku di STTB.",
        ],
        curriculum: [
            {
                category: "Fondasi Biblika",
                sks: 9,
                courses: [
                    { name: "Eksegesis Perjanjian Lama untuk Penggembalaan", sks: 3 },
                    { name: "Eksegesis Perjanjian Baru untuk Kepemimpinan", sks: 3 },
                    { name: "Teologi Alkitabiah Kepemimpinan", sks: 3 },
                ],
            },
            {
                category: "Mata Kuliah Inti",
                sks: 15,
                courses: [
                    { name: "Teologi Penggembalaan Kontemporer", sks: 3 },
                    { name: "Kepemimpinan Transformatif Kristen", sks: 3 },
                    { name: "Konseling Pastoral Lanjutan", sks: 3 },
                    { name: "Manajemen & Tata Kelola Gereja", sks: 3 },
                    { name: "Formasi Spiritualitas Pemimpin", sks: 3 },
                ],
            },
            {
                category: "Mata Kuliah Konsentrasi",
                sks: 9,
                courses: [
                    { name: "Penggembalaan Jemaat Urban", sks: 3 },
                    { name: "Kepemimpinan Lintas Generasi", sks: 3 },
                    { name: "Pengembangan Tim Pelayanan", sks: 3 },
                ],
            },
            {
                category: "Mata Kuliah Elektif",
                sks: 3,
                courses: [{ name: "Studi Kasus Kepemimpinan Gereja", sks: 3 }],
            },
            {
                category: "Penelitian & Tugas Akhir",
                sks: 9,
                courses: [
                    { name: "Metodologi Penelitian Pastoral", sks: 3 },
                    { name: "Proyek Akhir / Ministry Project", sks: 6 },
                ],
            },
        ],
        curriculumNote:
            "Total SKS kelulusan adalah 45 SKS. Tugas akhir berupa Ministry Project yang berfokus pada permasalahan kepemimpinan atau penggembalaan nyata yang dihadapi di gereja peserta.",
    },
    {
        slug: "magister-ministri-gerejawi",
        label: "Magister Ministri Teologi Pelayanan Gerejawi",
        fullName: "Magister Ministri — Teologi Pelayanan Gerejawi",
        level: "S2",
        degree: "M.Min.",
        profilTitle: "Transformative Church Minister",
        tagline:
            "Mempersiapkan pelayan gerejawi yang memiliki fondasi teologis solid, hidup yang berpusatkan Kristus, dan mampu merancang pelayanan yang integral dan transformatif dalam konteks gereja masa kini.",
        description: [
            "Program Magister Ministri Teologi Pelayanan Gerejawi (M.Min.) mempersiapkan para pelayan gereja agar memiliki kedalaman teologis dan kecakapan praktis dalam merancang dan menjalankan berbagai aspek pelayanan gereja secara integratif.",
            "Program ini relevan bagi gembala, pemimpin ibadah, koordinator pelayanan, dan hamba Tuhan lainnya yang ingin memperdalam pelayanan gerejawi mereka dari perspektif teologi yang solid sekaligus praktis untuk konteks jemaat Indonesia masa kini.",
        ],
        sistem: [
            "Perkuliahan dilakukan secara blok intensif memungkinkan hamba Tuhan yang aktif melayani tetap dapat mengikuti studi.",
            "Program dapat diselesaikan dalam 4 semester dengan total 65 SKS.",
            "Penekanan pada praktik pelayanan nyata yang diintegrasikan dalam tugas-tugas akademis.",
        ],
        totalSKS: 65,
        masaStudi: "2 Tahun (4 Semester)",
        requirements: [
            "Lulusan S1 Teologi atau bidang terkait.",
            "IPK minimal 2.75.",
            "Aktif melayani di gereja lokal minimal 2 tahun.",
            "Rekomendasi dari gembala sidang atau pimpinan denominasi.",
            "Lulus seleksi wawancara akademik.",
            "Memenuhi seluruh prosedur pendaftaran yang berlaku di STTB.",
        ],
        curriculum: [
            {
                category: "Fondasi Biblika",
                sks: 9,
                courses: [
                    { name: "Eksegesis & Hermeneutika Lanjutan", sks: 3 },
                    { name: "Studi PL untuk Pelayanan Gereja", sks: 3 },
                    { name: "Studi PB untuk Pelayanan Gereja", sks: 3 },
                ],
            },
            {
                category: "Fondasi Sistematika & Historika",
                sks: 12,
                courses: [
                    { name: "Teologi Sistematika Gereja", sks: 3 },
                    { name: "Sejarah & Tradisi Gereja Indonesia", sks: 3 },
                    { name: "Eklesiologi Kontemporer", sks: 3 },
                    { name: "Etika Pelayanan", sks: 3 },
                ],
            },
            {
                category: "Mata Kuliah Inti",
                sks: 12,
                courses: [
                    { name: "Teologi Liturgi & Ibadah", sks: 3 },
                    { name: "Kepemimpinan Gerejawi", sks: 3 },
                    { name: "Penggembalaan Jemaat", sks: 3 },
                    { name: "Formasi Spiritualitas Jemaat", sks: 3 },
                ],
            },
            {
                category: "Mata Kuliah Konsentrasi",
                sks: 22,
                courses: [
                    { name: "Pelayanan Musik & Seni Kristen", sks: 3 },
                    { name: "Pelayanan Anak & Keluarga Holistik", sks: 3 },
                    { name: "Pelayanan Pemuda Kontemporer", sks: 3 },
                    { name: "Penginjilan & Pemuridan Kontekstual", sks: 3 },
                    { name: "Misi & Gerakan Gereja Urban", sks: 3 },
                    { name: "Komunikasi & Media Gerejawi", sks: 3 },
                    { name: "Manajemen & Administrasi Jemaat", sks: 4 },
                ],
            },
            {
                category: "Tugas Akhir",
                sks: 10,
                courses: [
                    { name: "Seminar Proposal Ministry Project", sks: 2 },
                    { name: "Ministry Project / Tesis", sks: 8 },
                ],
            },
        ],
        curriculumNote:
            "Total SKS kelulusan adalah 65 SKS. Tugas akhir dapat berupa Ministry Project (proyek pelayanan terapan) atau Tesis akademik sesuai minat dan arah pelayanan mahasiswa.",
    },
];

export default programs;

export function getProgramBySlug(slug: string): Program | undefined {
    return programs.find((p) => p.slug === slug);
}
