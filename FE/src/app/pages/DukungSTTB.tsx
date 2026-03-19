"use client";

import { motion } from "motion/react";
import { Heart, Users, Building2, BookOpen, DollarSign, Gift, HandHeart, TrendingUp, CheckCircle2, ChevronRight, HelpCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const prioritasDonasi = [
    {
        title: "Beasiswa",
        description: "Sebagian pribadi yang Tuhan panggil untuk melanjutkan pendidikan terkadang terkendala pendanaan. Dukungan beasiswa terbuka bagi mahasiswa mulai semester 2 dengan IPK minimal 3.0 dan lulus seleksi.",
        icon: Users,
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
        color: "from-blue-500 to-blue-600",
        examples: [
            "Biaya Kuliah (Bulanan)",
            "Biaya Administrasi & Buku (Per Semester)",
            "Biaya Skripsi & Wisuda (Semester Akhir)",
        ],
    },
    {
        title: "Perpustakaan Digital",
        description: "STTB memiliki ~50.000 buku fisik dan terus memperkaya koleksi, termasuk e-books (Ebscohost) dan database jurnal ATLA. Kami rindu menambah koleksi e-books secara reguler.",
        icon: BookOpen,
        image: "https://images.unsplash.com/photo-1763811938846-0de457436794",
        color: "from-amber-500 to-amber-600",
        examples: [
            "Pengadaan Buku Fisik & Digital",
            "Langganan Database E-books",
            "Akses Database Jurnal Internasional",
        ],
    },
    {
        title: "Dukungan Lain",
        description: "STTB terus berinovasi dan berkembang sesuai kemajuan jaman, menciptakan pendidik-pendidik berkualitas melalui pengembangan berbagai sumber daya dan fasilitas pendidikan.",
        icon: Building2,
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
        color: "from-green-500 to-green-600",
        examples: [
            "Digital Ministry & Studio Rekaman",
            "Pembangunan Fasilitas Kampus",
            "Pembinaan Hamba Tuhan di Daerah",
        ],
    },
];

const faqSponsor = [
    {
        q: "Apakah STTB memiliki program beasiswa?",
        a: "Ya, STTB memiliki 3 (tiga) jenis beasiswa: Pastor Scholar, Formatio, dan Transformative Leadership.",
    },
    {
        q: "Bagaimana saya dapat berpartisipasi mendukung program ini?",
        a: "STTB sangat mengharapkan dukungan Bapak/Ibu untuk pengadaan beasiswa bagi mahasiswa S1 dan S2. Anda dapat menghubungi divisi beasiswa atau keuangan STTB.",
    },
    {
        q: "Apakah STTB akan menyediakan laporan beasiswa bagi sponsor?",
        a: "Ya, STTB akan menyediakan laporan tahunan kepada Bapak/Ibu sponsor beasiswa.",
    },
    {
        q: "Berapa dana untuk dapat berpartisipasi dalam program beasiswa?",
        a: "Kami menyediakan gambaran besaran dana untuk setiap jenis beasiswa. Untuk info lebih lengkap dapat menghubungi email: beasiswa@sttb.ac.id",
    },
    {
        q: "Bagaimana saya dapat memberikan dana sponsor beasiswa?",
        a: "Bapak/Ibu dapat melakukan transfer dana ke rekening STTB yang tersedia di bawah ini.",
    },
];

const donationMethods = [
    {
        method: "Bank Transfer",
        icon: DollarSign,
        details: [
            "BCA - Cabang Surya Sumantri",
            "Account No. 282 300 5555",
            "Yayasan STT Bandung",
            "Email: keuangan@sttb.ac.id"
        ],
    }
];

export function DukungSTTBPage() {
    return (
        <div className="pt-20">

            {/* --- HERO SECTION --- */}
            {/* Ukuran py-20 dipertahankan sesuai request */}
            <section className="relative py-20 bg-gradient-to-r from-[#071333] via-[#143177] to-[#071333] overflow-hidden">

                {/* Latar Belakang Desain Baru: Jaringan Sinergi (Unity Mesh) */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="unityMesh" width="80" height="80" patternUnits="userSpaceOnUse">
                                <circle cx="40" cy="40" r="30" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
                                <circle cx="40" cy="40" r="3" fill="#ffffff" opacity="0.8" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#unityMesh)" />
                    </svg>
                    {/* Shadow bawah agar transisi halus */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e40af] via-transparent to-transparent opacity-80" />
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white px-5 py-2 rounded-full text-xs tracking-[0.2em] mb-5 font-bold shadow-sm">
                            DUKUNG STTB
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                            Bersama Membangun Masa Depan Gereja
                        </h1>
                        <p className="text-xl text-blue-50/90 leading-relaxed mb-10 font-light">
                            Dukungan Anda memampukan STTB untuk terus mempersiapkan pemimpin rohani yang transformatif bagi Indonesia.
                        </p>

                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 flex flex-wrap items-center justify-center gap-8 md:gap-16 shadow-2xl">
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-black text-white mb-1 drop-shadow-md">65+</div>
                                <div className="text-xs font-bold tracking-widest text-blue-200 uppercase">Tahun Melayani</div>
                            </div>
                            <div className="hidden md:block w-px h-12 bg-white/30" />
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-black text-white mb-1 drop-shadow-md">1000+</div>
                                <div className="text-xs font-bold tracking-widest text-blue-200 uppercase">Alumni</div>
                            </div>
                            <div className="hidden md:block w-px h-12 bg-white/30" />
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-black text-white mb-1 drop-shadow-md">200+</div>
                                <div className="text-xs font-bold tracking-widest text-blue-200 uppercase">Gereja Dilayani</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- WHY SUPPORT SECTION --- */}
            <section className="relative py-20 bg-white overflow-hidden">

                {/* Latar Belakang Desain Baru: Arah Pertumbuhan (Growth Angles) */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
                    <div className="absolute -top-[10%] -right-[5%] w-[60%] h-[120%] bg-[#1e3a8a] -rotate-6 transform origin-top-right rounded-bl-[100px]" />
                    <div className="absolute -bottom-[20%] -left-[10%] w-[40%] h-[80%] bg-[#dc2626] rotate-12 transform origin-bottom-left rounded-tr-[100px]" />
                </div>

                <div className="container relative z-10 mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-[#1e3a8a] rounded-2xl translate-x-3 translate-y-3 opacity-10 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-500" />
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1697665387559-253e7a645e96"
                                alt="Dukung STTB"
                                className="rounded-2xl shadow-2xl relative z-10 w-full object-cover group-hover:-translate-y-1 transition-transform duration-500"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2.5 rounded-full mb-6 font-bold shadow-sm">
                                <HandHeart size={18} />
                                <span>MENGAPA DUKUNG STTB?</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-6 tracking-tight">
                                Investasi dalam Kerajaan Allah
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                                Setiap dukungan yang Anda berikan kepada STTB adalah investasi dalam pembentukan pemimpin rohani masa depan. Alumni kami melayani di berbagai gereja, lembaga Kristen, dan pelayanan transformatif di seluruh Indonesia.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
                                Dengan mendukung STTB, Anda tidak hanya membantu satu mahasiswa, tetapi juga ribuan jiwa yang akan mereka layani dalam pelayanan mereka.
                            </p>
                            <div className="bg-red-50/50 border-l-4 border-[#dc2626] p-5 rounded-r-xl">
                                <p className="text-[#1e3a8a] font-bold italic">
                                    "Dukungan Anda hari ini adalah pelayanan yang transformatif di masa depan."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- WAYS TO SUPPORT SECTION --- */}
            <section className="relative py-20 bg-gray-50 overflow-hidden">

                {/* Latar Belakang Desain Baru: Pola Fondasi Blok (Block Foundation) */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="blocks" width="60" height="60" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="26" height="26" fill="#1e3a8a" rx="4" />
                                <rect x="30" y="30" width="26" height="26" fill="#dc2626" rx="4" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#blocks)" />
                    </svg>
                </div>

                <div className="container relative z-10 mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-[#1e3a8a] px-4 py-2.5 rounded-full mb-6 font-bold shadow-sm">
                            <Gift size={18} className="text-[#dc2626]" />
                            <span>KONTRIBUSI NYATA</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-[#020817] mb-4 tracking-tight">
                            Prioritas Penggunaan Donasi
                        </h2>
                        <p className="text-lg text-gray-500 font-light">
                            Berbagai cara untuk berkontribusi secara spesifik dalam visi dan misi STTB.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {prioritasDonasi.map((way, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <ImageWithFallback
                                        src={way.image}
                                        alt={way.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${way.color} opacity-70`} />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <way.icon className="text-white" size={36} strokeWidth={1.5} />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-2xl font-black text-[#0a1930] mb-4">
                                        {way.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-6 font-medium text-[15px] flex-1">
                                        {way.description}
                                    </p>
                                    <div className="pt-6 border-t border-gray-100">
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Contoh Pengalokasian:</p>
                                        <ul className="space-y-3">
                                            {way.examples.map((example, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <CheckCircle2 size={18} className="text-[#dc2626] flex-shrink-0 mt-0.5" />
                                                    <span className="text-[14px] text-gray-700 font-medium">{example}</span>
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

            {/* --- FAQ SPONSOR SECTION --- */}
            <section className="relative py-20 bg-white overflow-hidden">

                {/* Latar Belakang Desain Baru: Riak Gelombang (Ripple Waves) */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] flex justify-center items-center">
                    <div className="w-[600px] h-[600px] rounded-full border-[3px] border-[#1e3a8a] absolute" />
                    <div className="w-[900px] h-[900px] rounded-full border-[2px] border-[#1e3a8a] absolute" />
                    <div className="w-[1200px] h-[1200px] rounded-full border-[1px] border-[#1e3a8a] absolute" />
                </div>

                <div className="container relative z-10 mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-red-50 text-[#dc2626] px-4 py-2.5 rounded-full mb-6 font-bold shadow-sm border border-red-100">
                            <HelpCircle size={18} />
                            <span>TANYA JAWAB</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-4 tracking-tight">
                            FAQ Kesediaan Mendukung
                        </h2>
                        <p className="text-lg text-gray-500 font-light">
                            Pertanyaan yang sering diajukan mengenai partisipasi dukungan untuk STTB.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {faqSponsor.map((qa, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 md:p-8 border-l-4 border-[#dc2626] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow group"
                            >
                                <h3 className="text-lg md:text-xl font-bold text-[#1e3a8a] mb-3 flex items-start gap-4">
                                    <span className="text-gray-900 font-black">Q.</span>
                                    {qa.q}
                                </h3>
                                <div className="flex items-start gap-4">
                                    <span className="text-[#dc2626] font-black">A.</span>
                                    <p className="text-gray-600 text-[15px] font-medium leading-relaxed">
                                        {qa.a}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FORMULIR DUKUNGAN & QRIS SECTION --- */}
            <section className="relative py-24 bg-gray-50 overflow-hidden" id="formulir">

                {/* Latar Belakang Desain Baru: Jalur Transaksi (Secure Transaction Paths) */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="paths" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M0 40 L40 0 M-10 10 L10 -10 M30 50 L50 30" stroke="#0a1930" strokeWidth="2" fill="none" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#paths)" />
                    </svg>
                </div>

                <div className="container relative z-10 mx-auto px-4 lg:px-8">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center lg:items-start justify-center">

                        {/* QRIS / Rekening Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-3xl p-10 shadow-xl w-full max-w-md border-t-8 border-[#dc2626] relative overflow-hidden text-center group hover:border-[#1e3a8a] transition-colors"
                        >
                            <h3 className="text-[#dc2626] font-bold text-sm mb-2 tracking-[0.2em] uppercase text-left group-hover:text-[#1e3a8a] transition-colors">Saluran Resmi</h3>
                            <h2 className="text-[#0a1930] text-4xl font-black mb-10 text-left tracking-tight">Kirim <br />Dukungan.</h2>

                            {/* QRIS Graphic */}
                            <div className="w-full bg-gray-50 border border-gray-200 p-8 mb-8 rounded-2xl shadow-sm">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="font-black text-3xl tracking-tighter text-[#020817]">QRIS</div>
                                    <div className="bg-[#dc2626] text-white text-xs px-2 py-1 rounded font-bold italic">GPN</div>
                                </div>
                                <div className="text-center mb-6">
                                    <h4 className="font-extrabold text-sm text-[#1e3a8a] mb-1">STT BANDUNG</h4>
                                    <p className="text-xs text-gray-500 font-mono">NMID : ID2020047080276</p>
                                </div>
                                {/* Mock QR Code Square */}
                                <div className="aspect-square bg-white p-3 rounded-xl border border-gray-200 max-w-[220px] mx-auto shadow-sm">
                                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&q=80&w=300')] bg-cover bg-center opacity-80 mix-blend-luminosity" />
                                </div>
                            </div>

                            <div className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">Atau Via Transfer Bank</div>
                            <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-5 text-left">
                                <div className="font-black text-lg text-[#0a1930] mb-1">BCA Surya Sumantri</div>
                                <div className="text-2xl font-black text-[#1e3a8a] tracking-widest mb-1">282 300 5555</div>
                                <div className="text-sm font-medium text-gray-600">a/n Yayasan STT Bandung</div>
                            </div>
                        </motion.div>

                        {/* Mock Form Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full max-w-2xl lg:pl-12"
                        >
                            <div className="bg-white rounded-3xl p-10 md:p-12 shadow-2xl border border-gray-100 mt-12 lg:mt-16">
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-14 h-14 rounded-full bg-blue-50 border-2 border-blue-100 flex items-center justify-center font-black text-[#1e3a8a] text-xl">
                                        1/4
                                    </div>
                                    <div>
                                        <span className="font-black text-[#0a1930] text-xl block">Data Donatur</span>
                                        <span className="text-sm text-gray-500 font-medium">Lengkapi identitas dukungan Anda</span>
                                    </div>
                                </div>

                                <div className="space-y-8" suppressHydrationWarning>
                                    <div className="space-y-2 relative">
                                        <label className="text-sm font-bold text-[#0a1930] uppercase tracking-wide">Pilih Jenis Dukungan Atas Nama:</label>
                                        <select defaultValue="" suppressHydrationWarning className="w-full appearance-none bg-gray-50 border-2 border-gray-200 text-[#0a1930] font-medium rounded-xl py-4.5 px-5 outline-none cursor-pointer focus:border-[#1e3a8a] focus:bg-white transition-colors mt-2">
                                            <option value="" disabled>Pilih status Anda...</option>
                                            <option value="pribadi">Pribadi / Perorangan</option>
                                            <option value="gereja">Gereja / Lembaga</option>
                                            <option value="anonim">Hamba Tuhan (Anonim)</option>
                                        </select>
                                        <div className="absolute right-5 top-[50px] pointer-events-none text-gray-400">
                                            <ChevronRight className="w-5 h-5 rotate-90" />
                                        </div>
                                    </div>

                                    <div className="space-y-2 opacity-50 pointer-events-none grayscale">
                                        <label className="text-sm font-bold text-gray-400 uppercase tracking-wide">Nama Lengkap / Nama Lembaga</label>
                                        <input type="text" disabled suppressHydrationWarning placeholder="Isi setelah memilih status di atas" className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl py-4.5 px-5 mt-2" />
                                    </div>

                                    <button className="w-full bg-[#0a1930] hover:bg-[#1e3a8a] transition-all text-white font-bold py-5 px-6 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex justify-center items-center gap-2 mt-8">
                                        Lanjutkan Pengisian
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* --- CTA SECTION --- */}
            <section className="relative py-24 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] overflow-hidden">

                {/* Latar Belakang Desain Baru: Heartbeat Glow & Target Pulse */}
                <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center opacity-20">
                    <div className="absolute w-[400px] h-[400px] bg-[#dc2626] rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute w-[600px] h-[600px] border border-white/20 rounded-full" />
                    <div className="absolute w-[800px] h-[800px] border border-white/10 rounded-full" />
                </div>

                <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 border border-white/20 shadow-xl">
                            <Heart className="text-white fill-[#dc2626] stroke-[#dc2626]" size={40} />
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                            Mari Berdampak Bersama
                        </h2>
                        <p className="text-xl text-blue-100/90 mb-12 leading-relaxed font-light">
                            Dukungan Anda hari ini adalah jembatan terang bagi ribuan pelayanan transformatif di masa depan.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center gap-3 bg-[#dc2626] hover:bg-red-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-red-900/30"
                        >
                            <HandHeart size={22} />
                            Hubungi Tim Donasi Kami
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}