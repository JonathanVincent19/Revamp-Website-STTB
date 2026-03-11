"use client";

import { motion } from "motion/react";
import { GraduationCap, Award, FileText, CheckCircle2, Users, TrendingUp, Calendar, Mail } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const beasiswaTypes = [
    {
        name: "Beasiswa S1 Pastor Scholar",
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
        color: "from-blue-500 to-blue-600",
    },
    {
        name: "Beasiswa S1 Formatio",
        description: "Beasiswa meliputi biaya pendidikan S1 mulai dari tahun kedua (setelah menempuh semester 2).",
        icon: Award,
        coverage: "Biaya Pendidikan",
        requirements: [
            "Telah menempuh semester 2",
            "Prestasi belajar baik, lolos seleksi & wawancara",
            "Membantu administrasi 15 jam/bulan",
            "Ikatan dinas 0.5 N",
            "Dievaluasi per semester"
        ],
        color: "from-green-500 to-green-600",
    },
    {
        name: "Beasiswa S1-S2 Transformative Leadership",
        description: "Bagi mahasiswa S2 dengan prestasi akademik/non-akademik menonjol dan memiliki panggilan yang jelas.",
        icon: Users,
        coverage: "Maks. 50% Biaya Pendidikan",
        requirements: [
            "Melakukan pelayanan min. 10 jam di lembaga setempat",
            "Bersedia menjadi panitia event STTB / ketua kelas",
            "Tanpa ikatan dinas"
        ],
        color: "from-amber-500 to-amber-600",
    }
];

const faqBeasiswa = [
    {
        q: "Siapa saja yang bisa mendapatkan beasiswa?",
        a: "Secara umum yaitu mahasiswa aktif penuh waktu yang memenuhi syarat dan lolos proses seleksi."
    },
    {
        q: "Bagaimana cara mendafatar aplikasi beasiswa?",
        a: "Pendaftaran dilakukan dengan mengunduh form aplikasi beasiswa di www.sttb.ac.id serta melampirkan syarat-syarat yang ditentukan."
    },
    {
        q: "Kapan saya bisa mengirim aplikasi beasiswa?",
        a: "Selambat-lambatnya 3 (tiga) minggu sebelum proses pendaftaran periode ditutup."
    },
    {
        q: "Apakah saya bisa kehilangan beasiswa saya?",
        a: "Bisa, jika hasil evaluasi setiap semester/tahun tidak memuaskan, maka beasiswa akan dihentikan."
    },
    {
        q: "Apakah penerima beasiswa jenis tertentu dapat mengajukan jenis beasiswa yang lain?",
        a: "Bagi penerima beasiswa tidak dapat mengajukan beasiswa jenis yang lain di periode berikutnya."
    }
];

const syaratKetentuan = [
    "Mengisi formulir beasiswa dan melengkapi dokumen penunjang sesuai jadwal.",
    "Memenuhi kriteria beasiswa yang didaftarkan, mengikuti proses seleksi dan wawancara.",
    "Mengikuti evaluasi semester oleh unit beasiswa.",
    "Bagi siswa SMA: rata-rata rapor minimal 8.5. Bagi mahasiswa aktif: IPK minimal 3.0.",
    "Bersedia memenuhi ikatan dinas (pada jenis beasiswa yang mewajibkan)."
];

const sanksiBeasiswa = [
    "Dana beasiswa akan diberhentikan pada semester berjalan.",
    "Penerima beasiswa wajib mengembalikan seluruh dukungan beasiswa yang telah diterima.",
    "Penerima beasiswa akan di-skorsing selama 1 semester.",
    "Berlaku bagi yang melanggar peraturan STTB, mendapat Surat Peringatan, atau IPK tidak memenuhi batas minimal."
];

export function BeasiswaPage() {
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
                        <span className="inline-block bg-[#f59e0b] text-white px-4 py-1.5 rounded-full text-sm tracking-wider mb-4">
                            PROGRAM BEASISWA
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                            Beasiswa & Bantuan Keuangan
                        </h1>
                        <p className="text-xl text-blue-50 leading-relaxed">
                            Panggilan pelayanan tidak boleh terhalang oleh hambatan finansial
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-6">
                                <GraduationCap size={20} />
                                <span className="font-bold">TENTANG BEASISWA</span>
                            </div>
                            <h2 className="text-4xl font-black text-[#1e3a8a] mb-6">
                                Komitmen Kami untuk Pendidikan Teologi yang Terjangkau
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                STTB percaya bahwa setiap orang yang terpanggil untuk melayani Tuhan harus memiliki akses terhadap pendidikan teologi berkualitas. Oleh karena itu, kami menyediakan berbagai program beasiswa dan bantuan keuangan.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Lebih dari 60% mahasiswa STTB saat ini menerima berbagai bentuk bantuan keuangan, mulai dari beasiswa parsial hingga beasiswa penuh yang mencakup seluruh biaya studi.
                            </p>
                            <div className="bg-[#f59e0b]/10 border-l-4 border-[#f59e0b] p-4 rounded-lg">
                                <p className="text-[#1e3a8a] font-bold">
                                    "Investasi dalam pendidikan teologi adalah investasi dalam masa depan gereja dan masyarakat."
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
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1589268022628-d0fa3fd7340f"
                                alt="Beasiswa STTB"
                                className="rounded-2xl shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Scholarship Types */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
                            Jenis Beasiswa
                        </h2>
                        <p className="text-lg text-gray-600">
                            STTB menyediakan 3 (tiga) kategori beasiswa yang dapat diajukan sesuai kriteria
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
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                            >
                                <div className={`h-2 bg-gradient-to-r ${scholarship.color}`} />
                                <div className="p-6">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={`w-12 h-12 bg-gradient-to-br ${scholarship.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                            <scholarship.icon className="text-white" size={24} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">
                                                {scholarship.name}
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                                {scholarship.description}
                                            </p>
                                            <div className="inline-block bg-[#f59e0b]/10 text-[#f59e0b] px-3 py-1.5 rounded-lg text-sm font-bold">
                                                {scholarship.coverage}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-gray-200">
                                        <p className="text-sm font-bold text-[#1e3a8a] mb-3">Persyaratan Utama:</p>
                                        <ul className="space-y-2">
                                            {scholarship.requirements.map((req, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                                    <CheckCircle2 size={16} className="text-[#f59e0b] flex-shrink-0 mt-0.5" />
                                                    <span>{req}</span>
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

            {/* Syarat & Ketentuan */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-6">
                                <FileText size={20} />
                                <span className="font-bold">SYARAT & KETENTUAN</span>
                            </div>
                            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
                                Syarat & Ketentuan Umum Beasiswa
                            </h2>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 border border-gray-100"
                        >
                            <ul className="space-y-4">
                                {syaratKetentuan.map((syarat, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white rounded-full flex items-center justify-center font-bold text-sm">
                                            {index + 1}
                                        </div>
                                        <p className="text-gray-700 leading-relaxed pt-1">
                                            {syarat}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Sanksi */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-black text-red-600 mb-4">
                                Sanksi Pelanggaran
                            </h2>
                            <p className="text-lg text-gray-600">
                                Sanksi ini berlaku bagi penerima beasiswa yang melanggar ketentuan dan peraturan STTB
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-red-50 rounded-2xl p-8 border-l-4 border-red-500 shadow-sm"
                        >
                            <div className="space-y-4">
                                {sanksiBeasiswa.map((sanksi, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-0.5">
                                            <span className="text-white text-xs font-bold">!</span>
                                        </div>
                                        <p className="text-red-900 leading-relaxed">{sanksi}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Beasiswa */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
                            FAQ Calon Penerima Beasiswa
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {faqBeasiswa.map((qa, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gradient-to-br from-[#dbeafe]/40 to-white rounded-2xl p-6 border border-[#1e3a8a]/20 shadow-sm hover:border-[#1e3a8a]/40 transition-colors"
                            >
                                <h3 className="text-lg font-bold text-[#1e3a8a] mb-2 flex gap-3">
                                    <span className="text-[#f59e0b]">Q:</span>
                                    {qa.q}
                                </h3>
                                <p className="text-gray-700 leading-relaxed flex gap-3 pl-[28px]">
                                    {qa.a}
                                </p>
                            </motion.div>
                        ))}
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
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                            Siap Mengajukan Beasiswa?
                        </h2>
                        <p className="text-xl text-blue-50 mb-8 leading-relaxed">
                            Jangan biarkan kendala finansial menghalangi panggilan pelayanan Anda. Hubungi tim keuangan kami untuk informasi lebih lanjut.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/biaya-studi"
                                className="inline-flex items-center justify-center gap-2 bg-[#f59e0b] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#fbbf24] transition-all transform hover:scale-105"
                            >
                                <FileText size={20} />
                                Lihat Biaya Studi
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-white text-[#1e3a8a] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
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