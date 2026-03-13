"use client";

import { motion } from "motion/react";
import { Heart, Users, Building2, BookOpen, DollarSign, Gift, HandHeart, TrendingUp, CheckCircle2 } from "lucide-react";
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
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]" />
                </div>
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <span className="inline-block bg-[#dc2626] text-white px-4 py-1.5 rounded-full text-sm tracking-wider mb-4 font-bold">
                            DUKUNG STTB
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                            Bersama Membangun Masa Depan Gereja
                        </h1>
                        <p className="text-xl text-blue-50 leading-relaxed mb-8">
                            Dukungan Anda memampukan STTB untuk terus mempersiapkan pemimpin rohani yang transformatif bagi Indonesia
                        </p>
                        <div className="flex items-center justify-center gap-8 mt-8">
                            <div className="text-center">
                                <div className="text-4xl font-black text-[#dc2626] mb-2">65+</div>
                                <div className="text-sm text-blue-100">Tahun Melayani</div>
                            </div>
                            <div className="w-px h-12 bg-white/30" />
                            <div className="text-center">
                                <div className="text-4xl font-black text-[#dc2626] mb-2">1000+</div>
                                <div className="text-sm text-blue-100">Alumni</div>
                            </div>
                            <div className="w-px h-12 bg-white/30" />
                            <div className="text-center">
                                <div className="text-4xl font-black text-[#dc2626] mb-2">200+</div>
                                <div className="text-sm text-blue-100">Gereja Dilayani</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Support */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1697665387559-253e7a645e96"
                                alt="Dukung STTB"
                                className="rounded-2xl shadow-2xl"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-6">
                                <HandHeart size={20} />
                                <span className="font-bold">MENGAPA DUKUNG STTB?</span>
                            </div>
                            <h2 className="text-4xl font-black text-[#1e3a8a] mb-6">
                                Investasi dalam Kerajaan Allah
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Setiap dukungan yang Anda berikan kepada STTB adalah investasi dalam pembentukan pemimpin rohani masa depan. Alumni kami melayani di berbagai gereja, lembaga Kristen, dan pelayanan transformatif di seluruh Indonesia.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Dengan mendukung STTB, Anda tidak hanya membantu satu mahasiswa, tetapi juga ribuan jiwa yang akan mereka layani dalam pelayanan mereka.
                            </p>
                            <div className="bg-[#dc2626]/10 border-l-4 border-[#dc2626] p-4 rounded-lg">
                                <p className="text-[#1e3a8a] font-bold italic">
                                    "Dukungan Anda hari ini adalah pelayanan yang transformatif di masa depan."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Ways to Support */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
                            Prioritas Penggunaan Donasi
                        </h2>
                        <p className="text-lg text-gray-600">
                            Berbagai cara untuk berkontribusi dalam visi dan misi STTB
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {prioritasDonasi.map((way, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <ImageWithFallback
                                        src={way.image}
                                        alt={way.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${way.color} opacity-60`} />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                                            <way.icon className="text-white" size={32} />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">
                                        {way.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                                        {way.description}
                                    </p>
                                    <div className="space-y-2">
                                        <p className="text-sm font-bold text-gray-700">Contoh:</p>
                                        <ul className="space-y-1">
                                            {way.examples.map((example, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                                    <CheckCircle2 size={16} className="text-[#dc2626] flex-shrink-0 mt-0.5" />
                                                    <span>{example}</span>
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

            {/* FAQ Sponsor */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
                            FAQ Kesediaan Mendukung
                        </h2>
                        <p className="text-lg text-gray-600">
                            Pertanyaan yang sering diajukan mengenai partisipasi dukungan untuk STTB
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
                                className="bg-gray-50 rounded-2xl p-6 border-l-4 border-[#dc2626] shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">
                                    {qa.q}
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {qa.a}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Formulir Dukungan & QRIS */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center lg:items-start justify-center">

                        {/* QRIS / Rekening Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-xl p-8 shadow-xl w-full max-w-md border-t-8 border-red-600 relative overflow-hidden text-center"
                        >
                            <h3 className="text-red-600 font-bold text-lg mb-1 tracking-widest text-left">FORMULIR</h3>
                            <h2 className="text-[#1e3a8a] text-5xl font-black mb-12 text-left">DUKUNGAN</h2>

                            {/* QRIS Placeholder / Graphic */}
                            <div className="w-full bg-white border border-gray-200 p-6 mb-8 rounded-lg shadow-sm">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="font-black text-2xl tracking-tighter">QRIS</div>
                                    <div className="text-red-600 font-bold italic">GPN</div>
                                </div>
                                <div className="text-center mb-6">
                                    <h4 className="font-bold text-sm text-[#1e3a8a]">SEKOLAH TINGGI TEOLOGI BANDUNG (STTB)</h4>
                                    <p className="text-xs text-gray-500 font-mono mt-1">NMID : ID2020047080276</p>
                                    <p className="text-xs text-gray-500 font-mono">A01</p>
                                </div>
                                {/* Mock QR Code Square */}
                                <div className="aspect-square bg-gray-100 p-2 rounded-lg border border-gray-200 max-w-[220px] mx-auto relative">
                                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&q=80&w=300')] bg-cover bg-center opacity-80" style={{ filter: 'grayscale(100%) contrast(150%)' }} />
                                </div>
                            </div>

                            <div className="text-sm text-gray-600 font-medium mb-4">
                                Bentuk kontribusi dapat berupa Bank Transfer
                            </div>
                            <div className="text-sm font-bold text-[#1e3a8a] leading-relaxed">
                                BCA Surya Sumantri<br />
                                Account No. 282 300 5555<br />
                                Yayasan STT Bandung
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
                            <div className="bg-white rounded-lg p-10 shadow-2xl border-2 border-[#1e3a8a] mt-12 lg:mt-24">
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-12 h-12 rounded-full border-2 border-[#1e3a8a] flex items-center justify-center font-bold text-[#1e3a8a] text-lg">
                                        1/4
                                    </div>
                                    <span className="font-bold text-[#1e3a8a] text-lg">Page 1</span>
                                </div>

                                <div className="space-y-8">
                                    <div className="border-b-2 border-blue-400 pb-3 relative transition-colors focus-within:border-[#1e3a8a]">
                                        <select className="w-full appearance-none bg-transparent outline-none text-gray-600 text-base cursor-pointer pr-8">
                                            <option value="">Ingin Mendukung STTB atas nama :</option>
                                            <option value="pribadi">Pribadi / Perorangan</option>
                                            <option value="gereja">Gereja / Lembaga</option>
                                            <option value="anonim">Anonim</option>
                                        </select>
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>

                                    <button className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] transition-all text-white font-bold py-4 px-6 rounded text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af]">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <Heart className="mx-auto text-[#dc2626] mb-6" size={64} />
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                            Mari Berdampak Bersama
                        </h2>
                        <p className="text-xl text-blue-50 mb-8 leading-relaxed">
                            Dukungan Anda hari ini adalah investasi dalam ribuan pelayanan transformatif di masa depan
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-[#dc2626] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#FF4D4D] transition-all transform hover:scale-105"
                        >
                            Hubungi Tim Keuangan
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}