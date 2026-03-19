"use client";

import { motion } from "motion/react";
import { GraduationCap, Award, FileText, CheckCircle2, Users, Mail, AlertTriangle, HelpCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// ==========================================
// 1. DATA
// ==========================================

const beasiswaTypes = [
    {
        name: "S1 Pastor Scholar",
        description: "Diperuntukkan bagi mahasiswa S1 yang menjadikan STTB sebagai pilihan pertama. Beasiswa meliputi biaya pendidikan dari semester 1.",
        icon: GraduationCap,
        coverage: "Biaya Pendidikan",
        requirements: [
            "Prestasi menonjol di SMA (rata-rata rapor min. 8.0)",
            "Memiliki panggilan jelas & rekomendasi kuat",
            "IPK min. 2.75 (smt 1) & 3.0 (smt 2-4)",
            "Membantu administrasi 15 jam/bulan",
            "Ikatan dinas 0.5 N (setara 2 tahun) setelah lulus"
        ],
        color: "from-[#1e3a8a] to-blue-600",
    },
    {
        name: "S1 Formatio",
        description: "Diberikan kepada mahasiswa aktif berprestasi. Beasiswa meliputi biaya pendidikan S1 mulai dari tahun kedua (setelah menempuh semester 2).",
        icon: Award,
        coverage: "Biaya Pendidikan",
        requirements: [
            "Telah menempuh semester 2 di STTB",
            "Prestasi belajar baik, lolos seleksi & wawancara",
            "Membantu administrasi 15 jam/bulan",
            "Ikatan dinas 0.5 N",
            "Dievaluasi per semester secara ketat"
        ],
        color: "from-blue-600 to-blue-400",
    },
    {
        name: "S1-S2 Transformative Leadership",
        description: "Bagi mahasiswa dengan prestasi akademik/non-akademik menonjol, jiwa kepemimpinan, dan memiliki panggilan yang jelas.",
        icon: Users,
        coverage: "Maks. 50% Biaya Pendidikan",
        requirements: [
            "Melakukan pelayanan min. 10 jam di lembaga setempat",
            "Bersedia menjadi panitia event STTB / ketua kelas",
            "Tanpa ikatan dinas",
            "Aktif dalam komunitas dan organisasi kampus"
        ],
        color: "from-indigo-600 to-indigo-400",
    }
];

const faqBeasiswa = [
    {
        q: "Siapa saja yang bisa mendapatkan beasiswa?",
        a: "Secara umum yaitu mahasiswa aktif penuh waktu yang memenuhi syarat dan lolos proses seleksi secara ketat dari komite beasiswa."
    },
    {
        q: "Bagaimana cara mendafatar aplikasi beasiswa?",
        a: "Pendaftaran dilakukan dengan mengunduh form aplikasi beasiswa di www.sttb.ac.id serta melampirkan dokumen syarat-syarat yang ditentukan."
    },
    {
        q: "Kapan saya bisa mengirim aplikasi beasiswa?",
        a: "Selambat-lambatnya 3 (tiga) minggu sebelum proses pendaftaran periode perkuliahan ditutup."
    },
    {
        q: "Apakah saya bisa kehilangan beasiswa saya?",
        a: "Bisa, jika hasil evaluasi setiap semester/tahun menunjukkan performa yang tidak memuaskan atau melanggar aturan, maka beasiswa akan dihentikan."
    },
    {
        q: "Apakah penerima beasiswa jenis tertentu dapat mengajukan jenis beasiswa yang lain?",
        a: "Bagi penerima beasiswa aktif tidak dapat mengajukan beasiswa jenis yang lain di periode berikutnya secara bersamaan."
    }
];

const syaratKetentuan = [
    "Mengisi formulir beasiswa dan melengkapi dokumen penunjang sesuai jadwal yang ditetapkan.",
    "Memenuhi kriteria spesifik beasiswa yang didaftarkan, mengikuti proses seleksi tertulis dan wawancara.",
    "Bersedia mengikuti evaluasi akademik dan karakter setiap akhir semester oleh unit beasiswa.",
    "Bagi siswa SMA: rata-rata rapor minimal 8.5. Bagi mahasiswa aktif: IPK minimal 3.0.",
    "Bersedia memenuhi kewajiban pelayanan kampus dan ikatan dinas (khusus pada jenis beasiswa yang mewajibkan)."
];

const sanksiBeasiswa = [
    "Dana beasiswa akan diberhentikan seketika pada semester berjalan.",
    "Penerima beasiswa wajib mengembalikan seluruh dukungan dana beasiswa yang telah diterima selama masa studi.",
    "Penerima beasiswa akan dikenakan sanksi skorsing akademik selama 1 semester.",
    "Sanksi ini berlaku mutlak bagi pelanggar peraturan STTB, penerima Surat Peringatan (SP), atau mahasiswa yang IPK-nya jatuh di bawah batas minimal."
];

// ==========================================
// 2. HALAMAN UTAMA
// ==========================================

export function BeasiswaPage() {
    return (
        <div className="pt-20">

            {/* --- HERO SECTION --- */}
            <section className="relative py-28 bg-gradient-to-r from-[#071333] via-[#143177] to-[#071333] overflow-hidden">

                {/* Latar Belakang: Pola Starlight (Bintang Harapan) dan Cahaya Halus */}
                <div className="absolute inset-0 z-0 pointer-events-none text-white">

                    {/* Glowing Orbs (Pendaran Cahaya Lembut) */}
                    <div className="absolute -top-20 left-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px]" />
                    <div className="absolute -bottom-20 right-1/4 w-[400px] h-[400px] bg-indigo-400/10 rounded-full blur-[100px]" />

                    {/* Pola Bintang 4 Titik (Sparks) */}
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
                        <defs>
                            <pattern id="starlightPattern" width="60" height="60" patternUnits="userSpaceOnUse">
                                {/* Bentuk Bintang (Spark) */}
                                <path d="M30 20 Q30 30 40 30 Q30 30 30 40 Q30 30 20 30 Q30 30 30 20 Z" fill="currentColor" opacity="0.15" />
                                {/* Titik-titik Partikel Kecil */}
                                <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.2" />
                                <circle cx="50" cy="50" r="1.5" fill="currentColor" opacity="0.1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#starlightPattern)" />
                    </svg>

                    {/* Overlay bayangan vertikal (Vignette bawah) untuk transisi yang mulus */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071333] via-transparent to-transparent opacity-90" />
                </div>

                <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="" />
                        <span className="inline-block bg-white/10 text-blue-100 px-5 py-2 rounded-full text-xs tracking-[0.2em] uppercase mb-5 font-bold backdrop-blur-sm border border-white/20 shadow-sm">
                            PROGRAM BEASISWA
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                            Membuka Jalan Untuk <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200 drop-shadow-sm">Panggilan Anda</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-50/90 font-light leading-relaxed max-w-3xl mx-auto">
                            STTB berkomitmen bahwa panggilan pelayanan yang sejati tidak boleh terhalang oleh hambatan finansial.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- INTRODUCTION SECTION --- */}
            <section className="relative py-24 bg-white overflow-hidden">
                {/* Latar Belakang: Pilar Akademik (Archways) */}
                <div className="absolute inset-0 z-0 pointer-events-none flex justify-center opacity-[0.03] text-[#1e3a8a]">
                    <div className="w-[800px] h-[1200px] border-[3px] border-current rounded-t-full absolute -bottom-[400px]" />
                    <div className="w-[600px] h-[1000px] border-[2px] border-current rounded-t-full absolute -bottom-[300px]" />
                    <div className="w-[400px] h-[800px] border border-current rounded-t-full absolute -bottom-[200px]" />
                </div>

                <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2.5 rounded-full mb-6 font-bold shadow-sm border border-blue-100">
                                <GraduationCap size={18} className="text-[#dc2626]" />
                                <span>TENTANG BEASISWA STTB</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-[#1e3a8a] mb-6 tracking-tight">
                                Komitmen Pendidikan yang Terjangkau
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6 font-medium">
                                STTB percaya bahwa setiap orang yang terpanggil untuk melayani Tuhan harus memiliki akses terhadap pendidikan teologi berkualitas tinggi tanpa terkecuali.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8 font-medium">
                                Saat ini, <span className="font-bold text-[#1e3a8a]">lebih dari 60%</span> mahasiswa STTB menerima berbagai bentuk bantuan keuangan, mulai dari beasiswa parsial hingga beasiswa penuh yang mencakup seluruh biaya studi.
                            </p>
                            <div className="bg-gradient-to-r from-red-50 to-white border-l-4 border-[#dc2626] p-6 rounded-r-2xl shadow-sm">
                                <p className="text-[#0a1930] font-bold text-lg italic leading-relaxed">
                                    "Investasi dalam pendidikan teologi adalah investasi langsung dalam masa depan gereja dan masyarakat luas."
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            {/* Bingkai Simetris Elegan */}
                            <div className="absolute inset-0 bg-[#1e3a8a] rounded-3xl translate-x-4 translate-y-4 opacity-10" />
                            <div className="absolute inset-0 border-2 border-[#1e3a8a]/20 rounded-3xl -translate-x-4 -translate-y-4" />
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1589268022628-d0fa3fd7340f"
                                alt="Beasiswa STTB"
                                className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3]"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- SCHOLARSHIP TYPES (SIMETRIS) --- */}
            <section className="relative py-24 bg-[#fafafa] overflow-hidden">
                {/* Latar Belakang: Wajik Keunggulan (Diamond Excellence) */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] text-[#1e3a8a] flex justify-center">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="diamondGrid" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                                <rect width="20" height="20" fill="currentColor" opacity="0.2" />
                                <rect x="20" y="20" width="20" height="20" fill="currentColor" opacity="0.2" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#diamondGrid)" />
                    </svg>
                </div>

                <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-7xl">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2.5 rounded-full mb-6 font-bold shadow-inner border border-white">
                            <Award size={18} className="text-[#dc2626]" />
                            <span>KATEGORI BEASISWA</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-[#020817] mb-6 tracking-tight">
                            Pilihan Beasiswa Studi
                        </h2>
                        <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
                            Pilih program bantuan keuangan yang paling sesuai dengan kualifikasi dan tahapan studi Anda di STTB.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {beasiswaTypes.map((scholarship, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group"
                            >
                                {/* Top Accent Bar */}
                                <div className={`h-3 bg-gradient-to-r ${scholarship.color}`} />

                                <div className="p-8 md:p-10 flex-1 flex flex-col">
                                    <div className="flex flex-col items-center text-center mb-8">
                                        <div className={`w-20 h-20 bg-gradient-to-br ${scholarship.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <scholarship.icon className="text-white" size={32} strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-2xl font-black text-[#0a1930] mb-4 tracking-tight leading-tight">
                                            {scholarship.name}
                                        </h3>
                                        <div className="inline-block bg-blue-50 text-[#1e3a8a] border border-blue-100 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">
                                            {scholarship.coverage}
                                        </div>
                                    </div>

                                    <p className="text-gray-600 text-[15px] leading-relaxed mb-8 text-center font-medium">
                                        {scholarship.description}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-gray-100">
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Persyaratan Utama</p>
                                        <ul className="space-y-3.5">
                                            {scholarship.requirements.map((req, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <CheckCircle2 size={18} className="text-[#dc2626] flex-shrink-0 mt-0.5" />
                                                    <span className="text-[14px] text-gray-700 font-medium leading-snug">{req}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SYARAT & SANKSI (GABUNGAN SIMETRIS) --- */}
            <section className="relative py-24 bg-white overflow-hidden">
                {/* Latar Belakang: Bingkai Presisi (Target Brackets) */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] text-[#0a1930]">
                    <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-current" />
                    <div className="absolute top-10 right-10 w-20 h-20 border-r-2 border-t-2 border-current" />
                    <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-current" />
                    <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-current" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[80%] bg-gray-200" />
                </div>

                <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                        {/* Syarat & Ketentuan */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-blue-50 text-[#1e3a8a] rounded-xl flex items-center justify-center border border-blue-100">
                                    <FileText size={24} />
                                </div>
                                <h2 className="text-3xl font-black text-[#020817] tracking-tight">Syarat & Ketentuan</h2>
                            </div>
                            <ul className="space-y-6">
                                {syaratKetentuan.map((syarat, index) => (
                                    <li key={index} className="flex items-start gap-5 group">
                                        <div className="flex-shrink-0 w-10 h-10 bg-white border-2 border-gray-200 text-gray-400 rounded-full flex items-center justify-center font-black text-sm group-hover:border-[#1e3a8a] group-hover:text-[#1e3a8a] transition-colors">
                                            {index + 1}
                                        </div>
                                        <p className="text-gray-700 leading-relaxed pt-2 font-medium">
                                            {syarat}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Sanksi Pelanggaran */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-red-50/50 rounded-3xl p-8 md:p-10 border border-red-100 relative overflow-hidden"
                        >
                            {/* Aksen Tanda Seru Raksasa Samar */}
                            <AlertTriangle size={200} className="absolute -bottom-10 -right-10 text-red-600/5 rotate-12 pointer-events-none" />

                            <div className="flex items-center gap-4 mb-8 relative z-10">
                                <div className="w-12 h-12 bg-red-100 text-[#dc2626] rounded-xl flex items-center justify-center border border-red-200">
                                    <AlertTriangle size={24} />
                                </div>
                                <h2 className="text-3xl font-black text-[#dc2626] tracking-tight">Sanksi Pelanggaran</h2>
                            </div>
                            <div className="space-y-5 relative z-10">
                                {sanksiBeasiswa.map((sanksi, index) => (
                                    <div key={index} className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-red-50 shadow-sm">
                                        <div className="flex-shrink-0 w-2 h-2 bg-[#dc2626] rounded-full mt-2.5 shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                                        <p className="text-gray-800 leading-relaxed font-medium">{sanksi}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* --- FAQ SECTION --- */}
            <section className="relative py-24 bg-gray-50 overflow-hidden">
                {/* Latar Belakang FAQ (Pola Tanya Jawab) */}
                <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center opacity-[0.03] text-[#1e3a8a]">
                    <HelpCircle size={800} strokeWidth={0.5} className="-rotate-12 translate-x-1/4" />
                </div>

                <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-4xl">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2.5 rounded-full mb-6 font-bold shadow-sm border border-blue-100">
                            <HelpCircle size={18} />
                            <span>FAQ BEASISWA</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-[#020817] mb-5 tracking-tight">
                            Pertanyaan Umum
                        </h2>
                    </div>

                    <div className="space-y-5">
                        {faqBeasiswa.map((qa, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:shadow-md transition-shadow group"
                            >
                                <h3 className="text-lg md:text-xl font-bold text-[#0a1930] mb-3 flex gap-4 items-start">
                                    <span className="text-[#dc2626] font-black shrink-0">Q.</span>
                                    {qa.q}
                                </h3>
                                <div className="flex gap-4 items-start">
                                    <span className="text-[#1e3a8a] font-black shrink-0">A.</span>
                                    <p className="text-gray-600 leading-relaxed font-medium">
                                        {qa.a}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA SECTION --- */}
            <section className="relative py-24 bg-gradient-to-r from-[#071333] via-[#143177] to-[#071333] overflow-hidden">

                {/* Latar Belakang CTA Sama dengan Hero */}
                <div className="absolute inset-0 z-0 pointer-events-none text-white">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
                        <rect width="100%" height="100%" fill="url(#plusPatternHero)" />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071333] via-transparent to-[#071333] opacity-80" />
                </div>

                <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="h-1 w-12 bg-[#dc2626] mx-auto mb-6 rounded-full" />
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                            Siap Mengajukan <span className="text-[#dc2626] drop-shadow-md">Beasiswa?</span>
                        </h2>
                        <p className="text-xl text-blue-100/90 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
                            Jangan biarkan kendala finansial menghalangi panggilan pelayanan Anda. Hubungi tim kami untuk konsultasi dan informasi lebih lanjut.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <a
                                href="/biaya-studi"
                                className="inline-flex items-center justify-center gap-2.5 bg-[#dc2626] hover:bg-red-700 text-white px-10 py-4.5 rounded-full font-bold text-lg transition-all shadow-xl hover:-translate-y-1 hover:shadow-red-900/30"
                            >
                                <FileText size={20} />
                                Lihat Biaya Studi
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-10 py-4.5 rounded-full font-bold text-lg transition-all hover:-translate-y-1"
                            >
                                <Mail size={20} />
                                Hubungi Kami
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}