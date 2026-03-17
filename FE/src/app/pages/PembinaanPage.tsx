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
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const pembinaanSections = [
    {
        id: "kehidupan-komunitas",
        title: "Kehidupan Komunitas",
        icon: Users,
    },
    {
        id: "kapel-dan-forum-pembinaan",
        title: "Kapel & Forum Pembinaan",
        icon: Church,
    },
    {
        id: "kelompok-pastoral",
        title: "Kelompok Pastoral",
        icon: Heart,
    },
    {
        id: "kelompok-pemuridan",
        title: "Kelompok Pemuridan",
        icon: BookOpen,
    },
    {
        id: "formasi-spiritual",
        title: "Formasi Spiritual",
        icon: Compass,
    },
    {
        id: "mission-trip",
        title: "Mission Education & Exposure",
        icon: Globe,
    },
    {
        id: "praktik-pelayanan",
        title: "Praktik Pelayanan",
        icon: Handshake,
    },
];

const formasiBidang = [
    {
        title: "Formasi Pengajaran",
        description: "Bertumbuh dalam pengenalan akan Tuhan dan firman-Nya",
        icon: BookOpen,
        color: "bg-[#dc2626]",
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
        color: "bg-[#dc2626]",
    },
    {
        title: "Formasi Pelayanan",
        description:
            "Bertumbuh dalam pelayanan di dalam tubuh Kristus dan misi di tengah dunia",
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
    "Pembinaan dan orientasi bagi mahasiswa baru (retreat awal studi)",
    "Pembinaan satu bulan bagi mahasiswa yang lolos evaluasi tahun pertama",
    "Seminar umum, kuliah umum, simposium, diskusi panel",
    "Pemerlengkapan misi sebelum dan sesudah mission trip",
    "Persiapan praktik pelayanan 1 tahun (retreat akhir studi)",
];

const praktikPelayananTypes = [
    {
        title: "Mission Education & Exposure Training (MEET)",
        description:
            "Dilaksanakan selama satu bulan penuh pada akhir tahun kedua perkuliahan untuk memberikan wawasan, keterampilan bermisi, dan pembentukan gaya hidup misioner.",
    },
    {
        title: "Praktik Pelayanan Akhir Pekan",
        description:
            "Pelayanan rutin di gereja-gereja dan lembaga pelayanan mitra setiap akhir pekan.",
    },
    {
        title: "Praktik Pelayanan Jangka Pendek",
        description:
            "Program pelayanan intensif dalam durasi tertentu di berbagai ladang misi.",
    },
    {
        title: "Praktik Pelayanan Jangka Panjang (1 Tahun)",
        description:
            "Bagi mahasiswa yang telah menyelesaikan ujian dan revisi skripsi serta memiliki IPK minimal 2,5. Melalui program Develop Mentor (mentoring for development).",
    },
];

export function PembinaanPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af]">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <span className="inline-block bg-[#dc2626] text-white px-4 py-1.5 rounded-full text-sm tracking-wider mb-4">
                            PEMBINAAN MAHASISWA
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                            Pembinaan Mahasiswa
                        </h1>
                        <p className="text-xl text-blue-50 leading-relaxed">
                            Membentuk dan memperlengkapi kehidupan dan pelayanan mahasiswa
                            secara holistik
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Quick Navigation */}
            <section className="py-4 bg-white border-b border-gray-100 sticky top-[72px] z-40">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {pembinaanSections.map((section) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className="whitespace-nowrap px-3 py-1.5 rounded-full border border-[#1e3a8a]/20 text-[#1e3a8a] font-medium text-xs hover:bg-[#1e3a8a] hover:text-white transition-all"
                            >
                                {section.title}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Kehidupan Komunitas */}
            <section id="kehidupan-komunitas" className="py-20 bg-white scroll-mt-32">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-6">
                                <Users size={20} />
                                <span className="font-bold text-sm">KEHIDUPAN KOMUNITAS</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-[#1e3a8a] mb-6">
                                Hidup dalam Komunitas
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Semua mahasiswa penuh waktu dalam program S.Th., S.Pd.K., dan
                                M.Th. matrikulasi yang belum menikah wajib tinggal di dalam
                                asrama. Sebagai bagian dari komunitas, setiap mahasiswa perlu
                                belajar saling mengasihi, saling menolong, dan saling menjaga
                                dalam mengelola dan membentuk kehidupan kampus dan asrama yang
                                kondusif.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                &ldquo;Panduan Kehidupan Mahasiswa STTB&rdquo; dibuat untuk
                                membantu mahasiswa belajar dan bertumbuh di kampus dan asrama.
                            </p>
                            <div className="bg-[#fef2f2] border-l-4 border-[#dc2626] rounded-r-lg p-4">
                                <p className="text-sm text-gray-700">
                                    <strong>Bidang Kemahasiswaan</strong> dipimpin oleh Waket III
                                    dengan dibantu oleh staf, kepala asrama, pembimbing pastoral,
                                    pembina pemuridan, konselor, senat, ketua lorong, ketua kamar,
                                    pengurus angkatan, dan bagian dapur.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600"
                                alt="Kehidupan Komunitas STTB"
                                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Kapel & Forum Pembinaan */}
            <section
                id="kapel-dan-forum-pembinaan"
                className="py-20 bg-gray-50 scroll-mt-32"
            >
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <div className="inline-flex items-center gap-2 bg-[#1e3a8a] text-white px-4 py-2 rounded-full mb-4">
                                <Church size={20} />
                                <span className="font-bold text-sm">KAPEL & FORUM PEMBINAAN</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-[#1e3a8a] mb-4">
                                Kapel & Forum Pembinaan
                            </h2>
                            <p className="text-lg text-gray-600">
                                Kapel dilaksanakan beberapa kali dalam setiap minggu, dengan
                                format yang bervariasi
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            {/* Kapel Formats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-8 shadow-lg"
                            >
                                <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">
                                    Format Kapel
                                </h3>
                                <div className="space-y-3">
                                    {kapelFormats.map((format, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-[#dc2626] rounded-full flex-shrink-0" />
                                            <span className="text-gray-700">{format}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-500 mt-4">
                                    Konten dibawakan oleh dosen, alumni, para pemimpin lembaga
                                    pelayanan/misi, narasumber yang diundang, maupun khotbah
                                    mahasiswa.
                                </p>
                            </motion.div>

                            {/* Pembinaan Lainnya */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-lg"
                            >
                                <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">
                                    Pembinaan Lainnya
                                </h3>
                                <div className="space-y-3">
                                    {pembinaanLain.map((item, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckCircle2
                                                className="text-[#dc2626] flex-shrink-0 mt-0.5"
                                                size={16}
                                            />
                                            <span className="text-sm text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* 4 Formasi Transformasi */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-8"
                        >
                            <h3 className="text-2xl font-black text-[#1e3a8a] mb-2">
                                Empat Bidang Transformasi
                            </h3>
                            <p className="text-gray-600">
                                Forum pembinaan dilaksanakan untuk membentuk dan memperlengkapi
                                mahasiswa dalam:
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {formasiBidang.map((formasi, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-xl p-5 shadow-md border-t-4 border-[#dc2626] text-center"
                                >
                                    <div
                                        className={`w-12 h-12 ${formasi.color} rounded-lg flex items-center justify-center mx-auto mb-3`}
                                    >
                                        <formasi.icon className="text-white" size={24} />
                                    </div>
                                    <h4 className="font-bold text-[#1e3a8a] mb-2">
                                        {formasi.title}
                                    </h4>
                                    <p className="text-sm text-gray-600">{formasi.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Kelompok Pastoral */}
            <section
                id="kelompok-pastoral"
                className="py-20 bg-white scroll-mt-32"
            >
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600"
                                alt="Kelompok Pastoral"
                                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 bg-[#fef2f2] text-[#dc2626] px-4 py-2 rounded-full mb-4">
                                <Heart size={20} />
                                <span className="font-bold text-sm">KELOMPOK PASTORAL</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-[#1e3a8a] mb-6">
                                Kelompok Pastoral
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                Kelompok pastoral merupakan sarana untuk mendampingi mahasiswa
                                secara pembelajaran-akademik, kerohanian-karakter, dan
                                pelayanan-vokasional.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Setiap kelompok akan dipimpin oleh seorang{" "}
                                <strong>pembimbing pastoral</strong>, yang menjadi orangtua
                                rohani yang mendampingi sejumlah mahasiswa dalam satu angkatan
                                yang sama sepanjang empat tahun studi di STTB dan satu tahun
                                praktik pelayanan.
                            </p>
                            <div className="space-y-3 bg-[#dbeafe] rounded-xl p-5">
                                <div className="flex items-start gap-3">
                                    <Target className="text-[#1e3a8a] flex-shrink-0 mt-1" size={18} />
                                    <span className="text-sm text-gray-700">
                                        Pertemuan kelompok dilakukan <strong>dua minggu sekali</strong>
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Target className="text-[#1e3a8a] flex-shrink-0 mt-1" size={18} />
                                    <span className="text-sm text-gray-700">
                                        Pertemuan pribadi-ke-pribadi berdasarkan keperluan
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Target className="text-[#1e3a8a] flex-shrink-0 mt-1" size={18} />
                                    <span className="text-sm text-gray-700">
                                        Mendampingi dalam gangguan kesehatan, umpan-balik karakter,
                                        dan permasalahan psikologis
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Kelompok Pemuridan */}
            <section
                id="kelompok-pemuridan"
                className="py-20 bg-gray-50 scroll-mt-32"
            >
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-4">
                                <BookOpen size={20} />
                                <span className="font-bold text-sm">KELOMPOK PEMURIDAN</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-[#1e3a8a] mb-6">
                                Kelompok Pemuridan
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                Kelompok pemuridan merupakan sarana untuk menolong mahasiswa
                                belajar dan bertumbuh bersama mengenai dasar-dasar pertumbuhan
                                iman Kristen untuk menjadi murid Kristus dan menjadikan orang
                                lain murid Kristus, di mana pun berada dan diutus.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Setiap kelompok akan dipimpin oleh{" "}
                                <strong>pembimbing pemuridan</strong>, yang menjadi &ldquo;kakak
                                rohani&rdquo; yang menolong mahasiswa mengalami perubahan pola
                                pikir dan gaya hidup sepanjang{" "}
                                <strong>tiga semester pertama</strong> di STTB.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <Mic className="text-[#dc2626] flex-shrink-0 mt-1" size={18} />
                                    <span className="text-gray-700">
                                        Pertemuan kelompok <strong>satu minggu sekali</strong> pada hari
                                        yang ditentukan
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Mic className="text-[#dc2626] flex-shrink-0 mt-1" size={18} />
                                    <span className="text-gray-700">
                                        Para pembimbing pemuridan dimentor oleh pembina pemuridan
                                        putra dan putri
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600"
                                alt="Kelompok Pemuridan"
                                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Formasi Spiritual */}
            <section
                id="formasi-spiritual"
                className="py-20 bg-white scroll-mt-32"
            >
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 bg-[#dc2626] text-white px-4 py-2 rounded-full mb-4">
                                <Compass size={20} />
                                <span className="font-bold text-sm">FORMASI SPIRITUAL</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-[#1e3a8a] mb-6">
                                Formasi Spiritual
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                Program formasi spiritual dilaksanakan untuk menolong mahasiswa
                                bertumbuh dalam hubungan pribadi dengan Tuhan melalui berbagai
                                kegiatan:
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: "Retreat Awal Studi",
                                    desc: "Persiapan menjalani kehidupan sebagai mahasiswa teologi",
                                },
                                {
                                    title: "Mini Retreat",
                                    desc: "Dilaksanakan hampir setiap semester untuk pembaruan rohani",
                                },
                                {
                                    title: "Retreat Akhir Studi",
                                    desc: "Persiapan praktik pelayanan 1 tahun",
                                },
                                {
                                    title: "Kegiatan Spiritual Lainnya",
                                    desc: "Berbagai kegiatan untuk pembentukan kehidupan rohani yang mendalam",
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gradient-to-br from-[#dbeafe] to-white rounded-xl p-6 border-2 border-[#1e3a8a]/20 text-left"
                                >
                                    <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Education & Exposure */}
            <section id="mission-trip" className="py-20 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] scroll-mt-32">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <div className="inline-flex items-center gap-2 bg-[#dc2626] text-white px-4 py-2 rounded-full mb-4">
                                <Globe size={20} />
                                <span className="font-bold text-sm">FORMASI MISIONAL</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                                Mission Education & Exposure
                            </h2>
                            <p className="text-lg text-blue-100 leading-relaxed">
                                Formasi Misional dilaksanakan untuk menolong mahasiswa
                                mendapatkan wawasan dan keterampilan untuk bermisi, pengalaman
                                langsung di ladang misi, dan pembentukan gaya hidup misioner.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center"
                        >
                            <GraduationCap className="text-[#dc2626] mx-auto mb-4" size={48} />
                            <h3 className="text-2xl font-bold text-white mb-4">
                                MEET (Mission Education & Exposure Training)
                            </h3>
                            <p className="text-blue-100 leading-relaxed">
                                Dilaksanakan selama{" "}
                                <strong className="text-white">satu bulan penuh</strong> pada
                                akhir tahun kedua perkuliahan. Mahasiswa akan mendapatkan
                                pengalaman langsung di ladang misi dan pembentukan gaya hidup
                                misioner.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Praktik Pelayanan */}
            <section
                id="praktik-pelayanan"
                className="py-20 bg-white scroll-mt-32"
            >
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-4">
                                <Handshake size={20} />
                                <span className="font-bold text-sm">PRAKTIK PELAYANAN</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-[#1e3a8a] mb-4">
                                Praktik Pelayanan
                            </h2>
                            <p className="text-lg text-gray-600">
                                Gereja dan lembaga pelayanan memiliki peran penting sebagai
                                mitra STTB dalam memberikan pembelajaran dan pemerlengkapan
                                mahasiswa bagi pelayanan di masa akan datang.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {praktikPelayananTypes.map((type, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#dc2626]"
                                >
                                    <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">
                                        {type.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {type.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-8 bg-[#fef2f2] rounded-xl p-6 text-center"
                        >
                            <p className="text-gray-700">
                                STTB bekerja sama dengan mitra pelayanan mengusahakan terjadinya
                                proses belajar dan mentoring melalui{" "}
                                <strong className="text-[#dc2626]">
                                    Develop Mentor (mentoring for development)
                                </strong>{" "}
                                program.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-[#dc2626] to-[#b91c1c]">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                            Siap Dibentuk & Dipersiapkan?
                        </h2>
                        <p className="text-xl text-red-50 mb-8 leading-relaxed">
                            Bergabunglah dengan komunitas STTB dan alami proses pembentukan
                            pribadi yang holistik
                        </p>
                        <a
                            href="/admissions"
                            className="inline-block bg-white text-[#dc2626] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
                        >
                            Daftar Sekarang
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}