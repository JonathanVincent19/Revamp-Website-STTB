"use client";

import { motion } from "motion/react";
import {
    Heart,
    BookOpen,
    Users,
    Mic,
    Target,
    CheckCircle2,
    GraduationCap,
    Globe,
    Church,
    Compass,
    Shield,
    Handshake,
    ArrowRight
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// ==========================================
// 1. DATA
// ==========================================

const pembinaanSections = [
    { id: "kehidupan-komunitas", title: "Kehidupan Komunitas", icon: Users },
    { id: "kapel-dan-forum-pembinaan", title: "Kapel & Forum", icon: Church },
    { id: "kelompok-pastoral", title: "Kelompok Pastoral", icon: Heart },
    { id: "kelompok-pemuridan", title: "Kelompok Pemuridan", icon: BookOpen },
    { id: "formasi-spiritual", title: "Formasi Spiritual", icon: Compass },
    { id: "mission-trip", title: "Mission Exposure", icon: Globe },
    { id: "praktik-pelayanan", title: "Praktik Pelayanan", icon: Handshake },
];

const formasiBidang = [
    {
        title: "Formasi Pengajaran",
        description: "Bertumbuh dalam pengenalan akan Tuhan dan firman-Nya",
        icon: BookOpen,
        color: "bg-[#1e3a8a]", // Diubah ke warna brand STTB agar harmonis
    },
    {
        title: "Formasi Spiritual",
        description: "Bertumbuh dalam hubungan pribadi dengan Tuhan",
        icon: Heart,
        color: "bg-[#dc2626]",
    },
    {
        title: "Formasi Karakter",
        description: "Bertumbuh dalam karakter serupa Kristus",
        icon: Shield,
        color: "bg-[#1e3a8a]",
    },
    {
        title: "Formasi Pelayanan",
        description: "Bertumbuh dalam pelayanan di dalam tubuh Kristus dan misi dunia",
        icon: Globe,
        color: "bg-[#dc2626]",
    },
];

const kapelFormats = [
    "Ibadah liturgis",
    "Ibadah kontemporer",
    "Ibadah kontemplatif",
    "Persekutuan Doa Misi",
];

const pembinaanLain = [
    "Pembinaan orientasi mahasiswa baru (Retreat awal studi)",
    "Pembinaan intensif satu bulan pasca tahun pertama",
    "Seminar umum, kuliah umum, simposium, diskusi panel",
    "Pemerlengkapan misi sebelum dan sesudah mission trip",
    "Persiapan praktik pelayanan 1 tahun (Retreat akhir studi)",
];

const praktikPelayananTypes = [
    {
        title: "MEET (Mission Education & Exposure Training)",
        description: "Satu bulan penuh pada akhir tahun kedua untuk memberikan wawasan, keterampilan bermisi, dan pembentukan gaya hidup misioner.",
    },
    {
        title: "Praktik Pelayanan Akhir Pekan",
        description: "Pelayanan rutin di gereja-gereja dan lembaga pelayanan mitra setiap akhir pekan.",
    },
    {
        title: "Praktik Pelayanan Jangka Pendek",
        description: "Program pelayanan intensif dalam durasi tertentu di berbagai ladang misi khusus.",
    },
    {
        title: "Praktik Pelayanan Jangka Panjang (1 Tahun)",
        description: "Melalui program Develop Mentor. Syarat: lulus ujian/revisi skripsi & IPK minimal 2,5.",
    },
];

// ==========================================
// 2. HALAMAN UTAMA
// ==========================================

export function PembinaanPage() {
    return (
        <div className="pt-20">

            {/* --- HERO SECTION --- */}
            <section className="relative py-28 bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#0a1930] overflow-hidden">

                {/* Latar Belakang: Ascending Pathways (Jalur Pertumbuhan) */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-10,110 C30,80 40,20 110,-10" fill="none" stroke="#ffffff" strokeWidth="0.5" />
                        <path d="M-10,120 C40,90 50,30 110,0" fill="none" stroke="#ffffff" strokeWidth="1" />
                        <path d="M-10,130 C50,100 60,40 110,10" fill="none" stroke="#ffffff" strokeWidth="0.5" />
                        {/* Glow Center */}
                        <circle cx="50" cy="50" r="40" fill="url(#heroGlow)" opacity="0.5" />
                        <defs>
                            <radialGradient id="heroGlow">
                                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="" />
                        <span className="inline-block bg-[#dc2626] text-white px-5 py-2 rounded-full text-xs tracking-[0.2em] uppercase mb-6 font-bold shadow-lg ring-4 ring-red-500/30">
                            PEMBINAAN MAHASISWA
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                            Membentuk Karakter, <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-white to-red-100">Memperlengkapi Pelayanan</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100/90 leading-relaxed font-light max-w-3xl mx-auto">
                            Program komprehensif untuk membentuk kehidupan dan kerohanian mahasiswa secara holistik selama masa studi di STTB.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- QUICK NAVIGATION (Sticky) --- */}
            <section className="py-4 bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-[72px] z-40 shadow-sm">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-nowrap overflow-x-auto gap-3 justify-start lg:justify-center pb-2 hide-scrollbar">
                        {pembinaanSections.map((section) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className="whitespace-nowrap flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-600 font-bold text-xs hover:bg-[#1e3a8a] hover:border-[#1e3a8a] hover:text-white transition-all shadow-sm"
                            >
                                <section.icon size={14} />
                                {section.title}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 1. KEHIDUPAN KOMUNITAS --- */}
            <section id="kehidupan-komunitas" className="relative py-24 bg-white scroll-mt-32 overflow-hidden">
                {/* Latar Belakang: Intersecting Rings (Ikatan Komunitas) */}
                <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center opacity-[0.03]">
                    <div className="w-[600px] h-[600px] border-[40px] border-[#1e3a8a] rounded-full absolute -translate-x-1/4" />
                    <div className="w-[600px] h-[600px] border-[40px] border-[#dc2626] rounded-full absolute translate-x-1/4" />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2.5 rounded-full mb-6 font-bold shadow-sm border border-blue-100">
                                <Users size={18} className="text-[#dc2626]" />
                                <span>KEHIDUPAN KOMUNITAS</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-6 tracking-tight">
                                Hidup dalam Komunitas
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6 font-medium">
                                Semua mahasiswa penuh waktu yang belum menikah wajib tinggal di dalam asrama. Sebagai bagian dari komunitas, setiap mahasiswa dituntut untuk belajar saling mengasihi, menolong, dan menjaga iklim kampus yang kondusif.
                            </p>
                            <div className="bg-[#f8fafc] border-l-4 border-[#1e3a8a] rounded-r-xl p-6 shadow-sm">
                                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                                    <strong className="text-[#0a1930] block mb-2 text-base">Dibina oleh Bidang Kemahasiswaan</strong>
                                    Dipimpin oleh Waket III, dibantu oleh staf, kepala asrama, pembimbing pastoral, pembina pemuridan, konselor, senat, ketua lorong, ketua kamar, hingga pengurus angkatan.
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
                            <div className="absolute inset-0 bg-[#dc2626] rounded-3xl translate-x-4 translate-y-4 opacity-10" />
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600"
                                alt="Kehidupan Komunitas STTB"
                                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3] relative z-10 border border-gray-100"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- 2. KAPEL & FORUM PEMBINAAN --- */}
            <section id="kapel-dan-forum-pembinaan" className="relative py-24 bg-gray-50 scroll-mt-32 overflow-hidden">
                {/* Latar Belakang: Light Pillars (Pilar Kapel / Cahaya Surgawi) */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="lightPillars" width="100" height="100" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="20" height="100" fill="url(#pillarGrad)" />
                            </pattern>
                            <linearGradient id="pillarGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#lightPillars)" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-[#1e3a8a] px-4 py-2.5 rounded-full mb-6 font-bold shadow-sm">
                            <Church size={18} className="text-[#dc2626]" />
                            <span>KAPEL & FORUM PEMBINAAN</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-5 tracking-tight">
                            Pusat Ibadah & Inspirasi
                        </h2>
                        <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
                            Kapel dilaksanakan secara rutin dengan berbagai format untuk memperkaya pengalaman ibadah dan spiritual mahasiswa.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
                        {/* Format Kapel */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-5 bg-white rounded-3xl p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 hover:border-blue-100 transition-colors"
                        >
                            <h3 className="text-2xl font-black text-[#1e3a8a] mb-6">Format Ibadah</h3>
                            <ul className="space-y-4 mb-8">
                                {kapelFormats.map((format, index) => (
                                    <li key={index} className="flex items-center gap-4 bg-gray-50/50 p-3 rounded-xl border border-gray-100">
                                        <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-[#1e3a8a] font-bold">
                                            {index + 1}
                                        </div>
                                        <span className="text-gray-800 font-medium">{format}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="bg-blue-50/50 border-l-2 border-[#1e3a8a] pl-4 py-2">
                                <p className="text-sm text-gray-600 font-medium leading-relaxed">
                                    Dilayani oleh dosen, alumni, pemimpin lembaga misi, narasumber ahli, dan mahasiswa.
                                </p>
                            </div>
                        </motion.div>

                        {/* 4 Formasi Bidang */}
                        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {formasiBidang.map((formasi, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all group"
                                >
                                    <div className={`w-12 h-12 ${formasi.color} rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform`}>
                                        <formasi.icon className="text-white" size={24} />
                                    </div>
                                    <h4 className="font-bold text-lg text-[#0a1930] mb-2">
                                        {formasi.title}
                                    </h4>
                                    <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                        {formasi.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Pembinaan Lainnya (Agenda Pembinaan Berkelanjutan) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#0a1930] rounded-3xl p-8 md:p-12 shadow-2xl text-center relative overflow-hidden mt-16"
                    >
                        {/* Aksen Background */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1')] bg-cover bg-center opacity-5 mix-blend-luminosity" />

                        <h3 className="text-2xl font-black text-white mb-10 relative z-10">Agenda Pembinaan Berkelanjutan</h3>

                        {/* Menggunakan Flexbox agar simetris (3 di atas, 2 di tengah bawah) */}
                        <div className="flex flex-wrap justify-center gap-4 relative z-10 max-w-5xl mx-auto">
                            {pembinaanLain.map((item, index) => (
                                <div
                                    key={index}
                                    // Lebar kartu diatur manual: Di layar besar (lg) lebarnya ~31% (jadi pas 3 baris), di tablet (md) ~48% (2 baris), di HP 100%
                                    className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] bg-[#142340] border border-white/10 hover:border-white/20 rounded-2xl p-5 flex items-start gap-4 text-left transition-colors"
                                >
                                    <div className="w-5 h-5 rounded-full border border-[#dc2626] flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <CheckCircle2 className="text-[#dc2626]" size={14} />
                                    </div>
                                    <span className="text-sm text-blue-50 font-bold leading-snug">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- 3. KELOMPOK PASTORAL --- */}
            <section id="kelompok-pastoral" className="relative py-24 bg-white scroll-mt-32 overflow-hidden">
                {/* Latar Belakang: Gentle Waves (Pendampingan & Perlindungan) */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] text-[#dc2626]">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100" fill="none" stroke="currentColor" strokeWidth="40" opacity="0.3" />
                        <path d="M0,300 C150,400 350,200 500,300 C650,400 850,200 1000,300" fill="none" stroke="currentColor" strokeWidth="20" opacity="0.6" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative lg:order-2"
                        >
                            <div className="absolute inset-0 bg-[#dc2626] rounded-3xl -translate-x-4 translate-y-4 opacity-10" />
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600"
                                alt="Kelompok Pastoral"
                                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3] relative z-10 border border-gray-100"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:order-1"
                        >
                            <div className="inline-flex items-center gap-2 bg-[#fef2f2] text-[#dc2626] px-4 py-2.5 rounded-full mb-6 font-bold shadow-sm border border-red-100">
                                <Heart size={18} />
                                <span>KELOMPOK PASTORAL</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-6 tracking-tight">
                                Pendampingan Penuh Kasih
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6 font-medium">
                                Kelompok pastoral adalah sarana krusial untuk mendampingi mahasiswa secara akademik, kerohanian, karakter, dan kesiapan vokasional.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8 font-medium">
                                Setiap kelompok dipimpin oleh seorang <strong className="text-[#1e3a8a]">Pembimbing Pastoral</strong>, figur orangtua rohani yang akan mendampingi angkatan tersebut secara penuh selama masa studi 4 tahun dan 1 tahun praktik pelayanan.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Pertemuan terjadwal dua minggu sekali",
                                    "Sesi konseling & pertemuan pribadi-ke-pribadi",
                                    "Pendampingan masalah kesehatan, psikologis, dan umpan balik karakter"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 bg-gray-50 border border-gray-100 p-4 rounded-2xl shadow-sm">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200">
                                            <Target className="text-[#dc2626]" size={18} />
                                        </div>
                                        <span className="font-bold text-gray-700 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- 4. KELOMPOK PEMURIDAN --- */}
            <section id="kelompok-pemuridan" className="relative py-24 bg-gray-50 scroll-mt-32 overflow-hidden">
                {/* Latar Belakang: Mentorship Nodes (Jaringan Pemuridan) */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] text-[#1e3a8a]">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="nodes" width="60" height="60" patternUnits="userSpaceOnUse">
                                <circle cx="30" cy="30" r="3" fill="currentColor" />
                                <circle cx="60" cy="60" r="2" fill="currentColor" />
                                <path d="M30 30 L60 60 M30 30 L0 60 M30 30 L60 0" stroke="currentColor" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#nodes)" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 bg-white text-[#1e3a8a] px-4 py-2.5 rounded-full mb-6 font-bold shadow-sm border border-gray-200">
                                <BookOpen size={18} className="text-[#dc2626]" />
                                <span>KELOMPOK PEMURIDAN</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-6 tracking-tight">
                                Menjadi Murid Kristus
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6 font-medium">
                                Dirancang khusus untuk menolong mahasiswa baru belajar dan bertumbuh bersama mengenai dasar-dasar iman Kristen: menjadi murid yang kelak menjadikan orang lain murid Kristus.
                            </p>

                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-2 h-full bg-[#1e3a8a]" />
                                <h4 className="text-xl font-black text-[#1e3a8a] mb-4">Kakak Rohani Pendamping</h4>
                                <p className="text-gray-600 font-medium leading-relaxed mb-6">
                                    Setiap kelompok dipimpin oleh <strong className="text-[#dc2626]">Pembimbing Pemuridan</strong>, yang menolong transisi pola pikir dan gaya hidup mahasiswa selama <strong>tiga semester pertama</strong>.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <Mic className="text-[#dc2626] bg-red-50 p-1.5 rounded-md" size={24} />
                                        <span className="text-sm font-bold text-gray-700">Pertemuan rutin satu minggu sekali</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Users className="text-[#1e3a8a] bg-blue-50 p-1.5 rounded-md" size={24} />
                                        <span className="text-sm font-bold text-gray-700">Dimentor langsung oleh Pembina Pemuridan</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-[#1e3a8a] rounded-3xl translate-x-4 translate-y-4 opacity-10" />
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600"
                                alt="Kelompok Pemuridan"
                                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3] relative z-10 border border-gray-100"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- 5. FORMASI SPIRITUAL & MISSION TRIP --- */}
            {/* Menggabungkan Spiritual dan Missional dalam satu section gradien besar agar menghemat ruang tapi terlihat mewah */}
            <section id="formasi-spiritual" className="relative py-28 bg-gradient-to-br from-[#0a1930] via-[#1e3a8a] to-[#1e40af] scroll-mt-32 overflow-hidden">

                {/* Latar Belakang: Topographic & Orbs (Perpaduan Misi dan Spritual) */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.1]">
                    {/* Topographic Lines */}
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-100,500 Q 200,300 500,500 T 1100,500" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.3" />
                        <path d="M-100,550 Q 250,350 550,550 T 1150,550" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.2" />
                        <path d="M-100,600 Q 300,400 600,600 T 1200,600" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.1" />
                    </svg>
                    {/* Glowing Orbs */}
                    <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-red-500/20 rounded-full blur-[100px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">

                    {/* Bagian Formasi Spiritual */}
                    <div className="max-w-4xl mx-auto text-center mb-24">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full mb-6 font-bold shadow-sm border border-white/20">
                                <Compass size={18} className="text-red-300" />
                                <span className="tracking-widest uppercase text-xs">Formasi Spiritual</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                                Kedekatan Pribadi dengan Tuhan
                            </h2>
                            <p className="text-lg md:text-xl text-blue-100/80 font-light leading-relaxed mb-12">
                                Program formasi spiritual menolong mahasiswa bertumbuh secara intensional dalam pengenalan dan hubungan pribadi bersama Allah.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                            {[
                                { title: "Retreat Awal", desc: "Persiapan kehidupan sebagai mahasiswa teologi" },
                                { title: "Mini Retreat", desc: "Pembaruan rohani di setiap pertengahan semester" },
                                { title: "Retreat Akhir", desc: "Persiapan mental/rohani menjelang 1 tahun pelayanan" },
                                { title: "Aktivitas Spiritual", desc: "Berbagai kegiatan kontemplasi rohani mendalam" },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
                                >
                                    <div className="w-10 h-10 bg-[#dc2626] rounded-xl flex items-center justify-center font-black text-white mb-5 shadow-lg">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-blue-100/70 text-sm font-medium">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Bagian Mission Exposure */}
                    <div id="mission-trip" className="max-w-5xl mx-auto scroll-mt-32">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[40px] p-8 md:p-14 shadow-2xl relative overflow-hidden"
                        >
                            {/* Aksen Misi / Dunia (Globe) */}
                            <Globe className="absolute -top-10 -right-10 text-gray-100 w-64 h-64 pointer-events-none" strokeWidth={1} />

                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                                <div>
                                    <div className="inline-flex items-center gap-2 bg-red-50 text-[#dc2626] px-4 py-2 rounded-full mb-6 font-bold text-sm">
                                        <Globe size={18} />
                                        <span>FORMASI MISIONAL</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-black text-[#0a1930] mb-5 tracking-tight">
                                        Mission Education & Exposure
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed font-medium mb-6">
                                        Mahasiswa tidak hanya diam di kelas. Kami membentuk wawasan global, keterampilan lintas budaya, dan gaya hidup misioner yang otentik.
                                    </p>
                                    <a href="#praktik-pelayanan" className="inline-flex items-center gap-2 text-[#1e3a8a] font-bold hover:text-[#dc2626] transition-colors group">
                                        Lihat Praktik Pelayanan <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                                <div className="bg-[#0a1930] rounded-3xl p-8 text-center text-white shadow-xl relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1.5 bg-[#dc2626]" />
                                    <GraduationCap className="text-[#dc2626] mx-auto mb-4" size={40} />
                                    <h3 className="text-xl font-black mb-3">M.E.E.T</h3>
                                    <p className="text-sm text-blue-100/80 font-light leading-relaxed">
                                        <strong className="text-white">Mission Education & Exposure Training.</strong>
                                        Satu bulan penuh pada akhir tahun kedua untuk terjun langsung merasakan denyut nadi ladang misi.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* --- 6. PRAKTIK PELAYANAN --- */}
            <section id="praktik-pelayanan" className="relative py-24 bg-white scroll-mt-32 overflow-hidden">
                {/* Latar Belakang: Interlocking Chevrons (Kemitraan/Sinergi) */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] text-[#1e3a8a]">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="chevrons" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
                                <path d="M0 30 L30 0 L60 30 M0 60 L30 30 L60 60" stroke="currentColor" strokeWidth="2" fill="none" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#chevrons)" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2.5 rounded-full mb-6 font-bold shadow-sm border border-blue-100">
                                <Handshake size={18} className="text-[#dc2626]" />
                                <span>PRAKTIK PELAYANAN</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-5 tracking-tight">
                                Mengasah Keterampilan Nyata
                            </h2>
                            <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
                                Teori harus menjadi aksi. Kami bermitra dengan gereja dan lembaga pelayanan untuk mempersiapkan Anda bagi dunia nyata.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {/* Di-slice dari index 1 karena MEET sudah dibahas terpisah di section atasnya */}
                        {praktikPelayananTypes.slice(1).map((type, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-red-50 text-[#dc2626] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Target size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-[#1e3a8a] mb-4 leading-tight">
                                    {type.title}
                                </h3>
                                <p className="text-[15px] text-gray-600 font-medium leading-relaxed">
                                    {type.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 bg-[#f8fafc] rounded-3xl p-8 md:p-10 text-center border-dashed border-2 border-gray-300 max-w-4xl mx-auto"
                    >
                        <h4 className="text-lg font-black text-[#0a1930] mb-3 uppercase tracking-widest">Metodologi Develop Mentor</h4>
                        <p className="text-gray-600 text-lg">
                            Proses praktik pelayanan 1 tahun diawasi ketat melalui program
                            <strong className="text-[#dc2626] mx-1">Mentoring for Development</strong>
                            untuk memastikan pertumbuhan karakter dan *skill* yang optimal di lapangan.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- CTA SECTION --- */}
            <section className="relative py-28 bg-[#dc2626] overflow-hidden">
                {/* Latar Belakang CTA: Radiant Burst (Pancaran Semangat) */}
                <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center opacity-20">
                    <svg width="200%" height="200%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="origin-center animate-[spin_120s_linear_infinite]">
                        <defs>
                            <radialGradient id="ctaBurst" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                        {[...Array(24)].map((_, i) => (
                            <polygon key={i} points="50,50 60,0 40,0" fill="url(#ctaBurst)" transform={`rotate(${i * 15} 50 50)`} />
                        ))}
                    </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#b91c1c] via-transparent to-transparent opacity-80" />

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                            Siap Dibentuk & <br className="hidden md:block" /> Dipersiapkan?
                        </h2>
                        <p className="text-xl text-red-100 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
                            Bergabunglah dengan komunitas STTB dan alami proses pembentukan pribadi, karakter, serta panggilan yang holistik.
                        </p>
                        <a
                            href="/admissions"
                            className="inline-flex items-center justify-center gap-3 bg-white text-[#dc2626] px-10 py-5 rounded-full font-black text-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-2xl"
                        >
                            <GraduationCap size={22} />
                            Daftar Sekarang
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}