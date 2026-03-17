"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { GraduationCap, Award, ChevronRight, Clock, BookOpen, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ProgramsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-[#0f1b3d] via-[#1e3a8a] to-[#1e40af] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block bg-[#dc2626] text-white px-4 py-1.5 rounded-full text-sm tracking-wider mb-4 font-bold">
              PROGRAM STUDI
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Program Akademik
            </h1>
            <p className="text-xl text-blue-50 leading-relaxed">
              Pilih program yang sesuai dengan panggilan pelayanan Anda
            </p>
          </motion.div>
        </div>
      </section>

      {/* S1 Program */}
      <section className="relative overflow-hidden py-20 bg-white" id="s1">
        {/* --- BACKGROUND LAYER DENGAN KOMPOSISI GEOMETRIS YANG LEBIH KAYA --- */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

          {/* 1. Grid Pattern Khas Modern Web (Base Layer) */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.05]" />

          {/* 2. Shape Biru Organik Kanan Atas */}
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] opacity-[0.12] text-[#1e3a8a] rotate-12">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
              <path d="M45.7,-76.4C58.9,-69.3,69.2,-55.4,78.2,-40.8C87.2,-26.2,94.9,-10.9,94.4,4.2C93.9,19.3,85.2,34.2,74.6,46.8C64,59.4,51.5,69.7,37.3,76.5C23.1,83.3,7.2,86.6,-8.3,86.1C-23.8,85.6,-38.9,81.3,-51.7,72.7C-64.5,64.1,-75,51.2,-81.9,36.5C-88.8,21.8,-92.1,5.3,-89.6,-10.3C-87.1,-25.9,-78.8,-40.6,-67.2,-52C-55.6,-63.4,-40.7,-71.5,-26.4,-76.3C-12.1,-81.1,1.6,-82.6,16.2,-80.1C30.8,-77.6,45.7,-76.4,45.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>

          {/* 3. Dot Matrix Block (Kiri Atas, di belakang teks Visi Misi) */}
          <div className="absolute top-32 left-8 w-48 h-48 bg-[radial-gradient(#dc2626_3px,transparent_3px)] [background-size:20px_20px] opacity-[0.15]" />

          {/* 4. Giant Circle Outline (Kanan Tengah, di belakang gambar) */}
          <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full border-[60px] border-[#1e3a8a] opacity-[0.04]" />

          {/* 5. Aksen Kotak/Garis Merah (Kiri Bawah, di sekitar tabel) */}
          <div className="absolute bottom-20 -left-16 w-80 h-80 opacity-[0.12] text-[#dc2626] -rotate-12">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
              <rect x="20" y="20" width="160" height="160" transform="rotate(45 100 100)" stroke="currentColor" strokeWidth="6" fill="none" />
              <rect x="50" y="50" width="100" height="100" transform="rotate(45 100 100)" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>

          {/* 6. Garis Diagonal Dinamis (Kanan Bawah) */}
          <div className="absolute -bottom-24 right-20 w-64 h-64 opacity-[0.08] text-[#1e3a8a]">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" strokeWidth="2">
              {[...Array(10)].map((_, i) => (
                <line key={i} x1={i * 10} y1="0" x2={i * 10 - 50} y2="100" />
              ))}
            </svg>
          </div>

          {/* 7. Floating Crosses / Plus Signs (Sentuhan Teologis Modern) */}
          <div className="absolute top-[45%] left-[45%] text-[#dc2626] opacity-[0.15] text-5xl font-light select-none rotate-45">+</div>
          <div className="absolute top-[20%] left-[55%] text-[#1e3a8a] opacity-[0.15] text-3xl font-light select-none">+</div>
          <div className="absolute bottom-[25%] right-[30%] text-[#1e3a8a] opacity-[0.2] text-4xl font-light select-none rotate-12">+</div>

        </div>
        {/* ------------------------------------------------------------------- */}

        {/* KONTEN UTAMA (z-10) */}
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-6 shadow-sm">
                <GraduationCap size={20} />
                <span className="font-bold">PROGRAM SARJANA</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-6 leading-tight">
                Program Sarjana (S1)
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Program Sarjana dirancang untuk mempersiapkan mahasiswa menjadi hamba Tuhan, pendidik, dan pemimpin Kristen yang memiliki pemahaman teologi yang mendalam, berkarakter Kristiani yang kuat, dan dibekali keterampilan pelayanan yang efektif.
              </p>

              <div className="grid grid-cols-2 gap-5 mb-8">
                <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-2xl p-6 text-white shadow-lg hover:-translate-y-1 transition-transform">
                  <Clock className="mb-3 opacity-80" size={28} />
                  <div className="text-3xl font-black mb-1">8<span className="text-lg font-medium ml-1">Sem</span></div>
                  <div className="text-sm text-blue-100 font-medium">Durasi Program</div>
                </div>
                <div className="bg-gradient-to-br from-[#dc2626] to-[#f87171] rounded-2xl p-6 text-white shadow-lg hover:-translate-y-1 transition-transform">
                  <BookOpen className="mb-3 opacity-80" size={28} />
                  <div className="text-3xl font-black mb-1">148<span className="text-lg font-medium ml-1">SKS</span></div>
                  <div className="text-sm text-red-100 font-medium">Total SKS</div>
                </div>
              </div>

              <div className="space-y-4 mb-8 relative z-20">
                {[
                  {
                    title: "Sarjana Teologi (S.Th.)",
                    desc: "Transformative Pastor-Scholar",
                    href: "/programs/sarjana-teologi",
                  },
                  {
                    title: "Sarjana Pendidikan Kristen (S.Pd.K.)",
                    desc: "Transformative Educator",
                    href: "/programs/sarjana-pendidikan-kristen",
                  },
                ].map((prog, idx) => (
                  <Link href={prog.href} key={idx} className="block group">
                    <div className="relative bg-white/90 backdrop-blur-sm border border-gray-100 shadow-md hover:shadow-xl rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="flex justify-between items-center relative z-10">
                        <div>
                          <h3 className="font-bold text-[#1e3a8a] text-xl mb-1 group-hover:text-[#dc2626] transition-colors">
                            {prog.title}
                          </h3>
                          <p className="text-sm text-gray-500 font-medium">{prog.desc}</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-full group-hover:bg-[#dc2626] group-hover:text-white text-[#1e3a8a] shadow-sm transition-all flex-shrink-0 ml-4">
                          <ChevronRight size={20} strokeWidth={3} />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-gray-100 shadow-sm relative z-20">
                <h3 className="font-bold text-[#1e3a8a] text-lg mb-4">Fokus Studi:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Studi Alkitab",
                    "Teologi Sistematika",
                    "Teologi Praktika",
                    "Sejarah Gereja & Misi",
                    "Bahasa Ibrani & Yunani",
                    "Apologetika & Etika",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="text-[#dc2626] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative lg:pl-8"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1595315342809-fa10945ed07c"
                alt="Program S1"
                className="rounded-3xl shadow-2xl relative z-10"
              />
              {/* Dekorasi Frame di Belakang Gambar yang lebih tebal */}
              <div className="hidden md:block absolute top-6 -right-2 bottom-6 -left-2 border-[3px] border-[#1e3a8a]/20 rounded-[2rem] -z-0 translate-x-5 translate-y-5" />
            </motion.div>
          </div>

          {/* Curriculum Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative z-20"
          >
            <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white px-8 py-6 flex items-center gap-3">
              <BookOpen size={28} className="opacity-90" />
              <h3 className="text-2xl font-bold tracking-tight">Struktur Kurikulum S1</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm sm:text-base">
                <thead className="bg-gray-50/80 border-b border-gray-200">
                  <tr>
                    <th className="px-8 py-5 text-left font-bold text-[#1e3a8a] uppercase tracking-wider text-xs">Kategori</th>
                    <th className="px-8 py-5 text-left font-bold text-[#1e3a8a] uppercase tracking-wider text-xs">Bobot</th>
                    <th className="px-8 py-5 text-left font-bold text-[#1e3a8a] uppercase tracking-wider text-xs">Deskripsi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { category: "Mata Kuliah Inti", sks: "96", desc: "Alkitab, Teologi, Bahasa" },
                    { category: "Mata Kuliah Pilihan", sks: "24", desc: "Konsentrasi khusus" },
                    { category: "Praktek Pelayanan", sks: "12", desc: "Magang & Praktikum" },
                    { category: "Skripsi", sks: "6", desc: "Penelitian akhir" },
                    { category: "Matrikulasi", sks: "6", desc: "Persiapan akademik" },
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-blue-50/40 transition-colors">
                      <td className="px-8 py-5 font-bold text-gray-900">{row.category}</td>
                      <td className="px-8 py-5">
                        <span className="bg-red-50 text-[#dc2626] font-extrabold px-3 py-1.5 rounded-lg text-sm border border-red-100">
                          {row.sks} SKS
                        </span>
                      </td>
                      <td className="px-8 py-5 text-gray-600 font-medium">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* S2 Program */}
      {/* Program Magister (S2) */}
      <section className="relative overflow-hidden py-20 bg-gray-50" id="s2">
        {/* --- BACKGROUND LAYER: MAGISTER (TEMA: KONEKSI & KEDALAMAN) --- */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* 1. Blueprint Grid (Lebar & Elegan) */}
          <div className="absolute inset-0 bg-[linear-gradient(#1e3a8a10_1px,transparent_1px),linear-gradient(to_right,#1e3a8a10_1px,transparent_1px)] bg-[size:80px_80px]" />

          {/* 2. Giant Intersecting Rings (Kiri Atas) - Melambangkan koneksi/network */}
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full border-[40px] border-[#1e3a8a] opacity-[0.06]" />
          <div className="absolute top-10 -left-20 w-[400px] h-[400px] rounded-full border-[30px] border-[#dc2626] opacity-[0.05]" />

          {/* 3. Aksen Gelombang Modern (Kanan Bawah) */}
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] opacity-[0.15] text-[#1e3a8a]">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-none stroke-current" strokeWidth="2">
              <path d="M 0,100 C 50,150 150,50 200,100" />
              <path d="M 0,120 C 50,170 150,70 200,120" />
              <path d="M 0,140 C 50,190 150,90 200,140" />
              <path d="M 0,160 C 50,210 150,110 200,160" />
            </svg>
          </div>

          {/* 4. Ornamen Titik-titik Aksentuasi */}
          <div className="absolute top-1/4 right-20 w-32 h-32 bg-[radial-gradient(#1e3a8a_3px,transparent_3px)] [background-size:16px_16px] opacity-[0.2]" />
        </div>
        {/* ----------------------------------------------------------- */}

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7"
                alt="Program S2"
                className="rounded-3xl shadow-2xl relative z-10"
              />
              {/* Dekorasi Frame Gambar Khas S2 */}
              <div className="hidden md:block absolute -top-5 -left-5 bottom-10 right-10 bg-gradient-to-br from-[#1e3a8a]/10 to-transparent rounded-[2.5rem] -z-0" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-6 shadow-sm border border-blue-100">
                <Award size={20} />
                <span className="font-bold">PROGRAM MAGISTER</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-6 leading-tight">
                Program Magister (S2)
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-white/60 shadow-sm">
                Program Magister mempersiapkan pemimpin untuk pelayanan kontekstual dan transformatif, baik di gereja, dunia pendidikan, maupun di tengah kompleksitas masyarakat dan dunia kerja (marketplace).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    title: "Magister Pelayanan Pastoral Gereja Urban",
                    desc: "M.Th.",
                    href: "/programs/magister-teologi-pelayanan-pastoral",
                  },
                  {
                    title: "Magister Transformasi Budaya & Masyarakat",
                    desc: "M.Th.",
                    href: "/programs/magister-teologi-transformasi-budaya",
                  },
                  {
                    title: "Magister Pendidikan Kristen",
                    desc: "M.Pd.K.",
                    href: "/programs/magister-pendidikan-kristen",
                  },
                  {
                    title: "Magister Ministri Marketplace",
                    desc: "M.Min.",
                    href: "/programs/magister-ministri-marketplace",
                  },
                  {
                    title: "Magister Kepemimpinan Pastoral",
                    desc: "M.Min.",
                    href: "/programs/magister-ministri-kepemimpinan-pastoral",
                  },
                  {
                    title: "Magister Pelayanan Gerejawi",
                    desc: "M.Min.",
                    href: "/programs/magister-ministri-gerejawi",
                  },
                ].map((prog, idx) => (
                  <Link href={prog.href} key={idx} className="block group h-full">
                    <div className="h-full flex flex-col justify-center relative bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-xl rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#dc2626]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="flex justify-between items-center relative z-10 w-full gap-3">
                        <div className="flex-1">
                          <h3 className="font-bold text-[#1e3a8a] text-[15px] leading-tight mb-2 group-hover:text-[#dc2626] transition-colors">
                            {prog.title}
                          </h3>
                          <span className="inline-block bg-blue-50 text-[#1e3a8a] text-xs font-bold px-2.5 py-1 rounded-md">
                            Gelar: {prog.desc}
                          </span>
                        </div>
                        <div className="bg-gray-50 p-2 rounded-full group-hover:bg-[#dc2626] group-hover:text-white text-gray-400 transition-all flex-shrink-0">
                          <ChevronRight size={18} strokeWidth={2.5} />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Matrikulasi */}
      <section className="relative overflow-hidden py-20 bg-white" id="matriculation">

        {/* --- BACKGROUND LAYER: MATRIKULASI (TEMA: FONDASI & BLUEPRINT) --- */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* 1. Diagonal Lines (Blueprint Foundation vibe) */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,#1e3a8a08_20px,#1e3a8a08_22px)]" />

          {/* 2. Segitiga Fondasi Kuat (Kiri Atas) */}
          <div className="absolute -top-10 -left-10 w-80 h-80 opacity-[0.08] text-[#1e3a8a]">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
              <polygon points="0,0 100,0 0,100" />
            </svg>
          </div>

          {/* 3. Aksen Kotak Solid Tumpuk (Kanan Bawah) */}
          <div className="absolute -bottom-24 -right-12 w-96 h-96 opacity-[0.06] text-[#dc2626] rotate-12">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
              <rect x="20" y="20" width="100" height="100" />
              <rect x="60" y="60" width="100" height="100" className="opacity-50" />
              <rect x="100" y="100" width="80" height="80" className="opacity-25" />
            </svg>
          </div>
        </div>
        {/* --------------------------------------------------------------- */}

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-4">
              Program Matrikulasi
            </h2>
            <p className="text-lg text-gray-600">
              Persiapan akademik untuk membangun fondasi studi mahasiswa baru
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto relative"
          >
            {/* Dekorasi offset kotak (shadow keras) di belakang box matrikulasi */}
            <div className="absolute inset-0 bg-[#dc2626] rounded-3xl translate-x-4 translate-y-4 shadow-xl" />

            <div className="relative bg-gradient-to-br from-[#dbeafe] to-white rounded-3xl p-8 md:p-12 border-2 border-[#1e3a8a] shadow-lg backdrop-blur-sm">
              <p className="text-lg text-gray-800 leading-relaxed mb-10 text-center md:text-left font-medium">
                Program Matrikulasi dirancang khusus untuk mahasiswa baru yang memerlukan persiapan akademik tambahan sebelum memulai program sarjana. Program ini mencakup mata kuliah dasar dalam Alkitab, Teologi, dan Bahasa Inggris.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-blue-50 hover:-translate-y-1 transition-transform group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 p-3 rounded-xl text-[#1e3a8a] group-hover:bg-[#1e3a8a] group-hover:text-white transition-colors">
                      <Clock size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-[#1e3a8a]">Durasi</h4>
                  </div>
                  <p className="text-gray-600 font-semibold text-lg">1 Semester <span className="text-[#dc2626] font-bold bg-red-50 px-2 py-1 rounded-md ml-1 text-sm">(6 SKS)</span></p>
                </div>

                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-blue-50 hover:-translate-y-1 transition-transform group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-red-100 p-3 rounded-xl text-[#dc2626] group-hover:bg-[#dc2626] group-hover:text-white transition-colors">
                      <BookOpen size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-[#1e3a8a]">Mata Kuliah</h4>
                  </div>
                  <ul className="text-gray-600 font-medium space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a]" /> Pengantar Alkitab
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a]" /> Teologi Dasar
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a]" /> Bahasa Inggris
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
