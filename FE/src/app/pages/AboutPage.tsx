"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Target,
  History,
  Users,
  BookOpen,
  Shield,
  Star,
  Flame,
  Wand2,
  Loader2,
  AlertCircle,
  ArrowRight,
  PlayCircle,
  Play
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { MarsAudioPlayer } from "../components/sttb/MarsAudioPlayer";
import { DosenCarousel, DosenCard } from "../components/sttb/DosenCarousel";
import { useLecturers } from "@/lib/hooks";

export function AboutPage() {
  const { data: lecturers, loading: lecturersLoading, error: lecturersError } = useLecturers();
  const historyRef = useRef<HTMLDivElement>(null);

  // State untuk mengontrol pemutaran video Campus Tour
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const { scrollYProgress } = useScroll({
    target: historyRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-[#0f1b3d] via-[#1e3a8a] to-[#1e40af] overflow-hidden">
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
              TENTANG KAMI
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Sekolah Tinggi Teologi Bandung
            </h1>
            <p className="text-xl text-blue-50 leading-relaxed">
              Mempersiapkan pastor-scholars untuk pelayanan transformatif sejak 1959
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative py-20 bg-gray-50 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px]" id="vision">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-6">
                <Target size={20} />
                <span className="font-bold">VISI & MISI</span>
              </div>
              <h2 className="text-4xl font-black text-[#1e3a8a] mb-6">
                Visi Kami
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Menjadi institusi pendidikan teologi yang mempersiapkan yang transformatif dan memberdayakan seluruh umat Allah untuk menghadirkan Injil seutuhnya di tengah konteks masyarakat urban.
              </p>
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">Misi Kami</h3>
              <ul className="space-y-3">
                {[
                  "Mempersiapkan pastor-scholar yang transformatif untuk melayanan dalam konteks urban.",
                  "Memberdayakan seluruh umat Allah untuk menghadirkan Injil seutuhnya di tengah konteks masyarakat urban melalui penelitian dan pendidikan non-formal.",
                  "Mengembangkan tim dosen, struktur organisasi dan keuangan, serta kemitraan untuk mendukung pencapaian visi STTB.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#dc2626] mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1543702404-38c2035462ad"
                alt="STTB Vision"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CAMPUS TOUR SECTION --- */}
      <section className="relative py-20 bg-gray-50 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px]" id="campus-tour">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center justify-center gap-2 bg-red-50 text-[#dc2626] px-5 py-2.5 rounded-full text-xs font-black tracking-widest uppercase mb-5 shadow-sm border border-red-100">
              <PlayCircle size={16} className="fill-current" />
              CAMPUS TOUR
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-6 tracking-tight">
              Jelajahi Kampus STTB
            </h2>
            <p className="text-lg text-gray-800 font-medium leading-relaxed">
              Lihat lebih dekat fasilitas, ruangan kelas, dan suasana lingkungan belajar yang mendukung pembentukan spiritualitas dan keunggulan akademik.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            {/* Wrapper Video Premium - Kesan "Dark Frame" di sekeliling video */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(10,25,48,0.15)] bg-[#0a1930] p-3 md:p-5 border border-gray-200">
              <div className="relative aspect-video rounded-[1.5rem] overflow-hidden bg-black ring-1 ring-white/10 shadow-inner group">

                {!isVideoPlaying ? (
                  <div
                    className="w-full h-full relative cursor-pointer"
                    onClick={() => setIsVideoPlaying(true)}
                  >
                    {/* Thumbnail Video dari YouTube */}
                    <ImageWithFallback
                      src="https://img.youtube.com/vi/hTh0QkKxNhg/maxresdefault.jpg"
                      alt="Campus Tour STTB 2022"
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    {/* Tombol Play Raksasa yang Interaktif */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-[#dc2626]/90 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-[0_0_40px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-all duration-300 border border-red-400/50">
                        <PlayCircle size={48} strokeWidth={2} />
                      </div>
                    </div>

                    {/* Text Keterangan di Bawah Thumbnail */}
                    <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full pointer-events-none">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-[#1e3a8a] text-white px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest">
                          Video Tur
                        </span>
                        <span className="text-white/80 text-sm font-bold">Durasi: 8 Menit</span>
                      </div>
                      <h3 className="text-2xl md:text-4xl font-black text-white drop-shadow-lg tracking-tight group-hover:text-blue-200 transition-colors">
                        Campus Tour STTB 2022
                      </h3>
                    </div>
                  </div>
                ) : (
                  <iframe
                    src="https://www.youtube.com/embed/hTh0QkKxNhg?autoplay=1&rel=0"
                    title="Campus Tour STTB 2022"
                    className="absolute inset-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                )}

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-20 bg-gray-50 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px]" id="core-values">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-6">
              <Star size={20} />
              <span className="font-bold">NILAI-NILAI INTI</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-4 uppercase tracking-tight">
              CORE VALUES
            </h2>
            <p className="text-lg text-gray-600">
              Nilai-nilai utama yang menjadi landasan dan identitas Sekolah Tinggi Teologi Bandung
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {[
              {
                title: "CHRIST CENTERED",
                points: [
                  "Rencana keselamatan Allah atas seisi dunia yg berpusat di dalam karya penebusan Kristus.",
                  "Mandat budaya dan mandat Injil dalam kerangka metanarasi Alkitab: Penciptaan-Kejatuhan-Penebusan-Penggenapan."
                ]
              },
              {
                title: "TEKS - KONTEKS",
                points: [
                  "Setia kepada teks: Firman Tuhan dan warisan iman Bapa-Bapa Gereja",
                  "Responsif terhadap konteks: sosial dan generasional"
                ]
              },
              {
                title: "PENATALAYANAN",
                points: [
                  "Integritas (kejujuran, transparansi, akuntabilitas - waktu, uang, relasi)",
                  "Dedikasi (melayani dan mengupayakan yang terbaik bagi sesama)",
                  "Kompetensi (kecakapan akademik, pelayanan, dan penelitian)"
                ]
              },
              {
                title: "TRANSFORMATIF",
                points: [
                  "Karya penebusan Kristus yg transformatif dialami oleh semua stakeholder STTB (mahasiswa, dosen, staf, karyawan, yayasan, mitra pelayanan, gereja, dan masyarakat)"
                ]
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="mb-8">
                  <h3 className="text-lg font-black text-gray-900 uppercase tracking-wider relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-full after:h-1.5 after:bg-[#dc2626]">
                    {value.title}
                  </h3>
                </div>
                <ul className="space-y-4 text-sm text-gray-600 flex-1 flex flex-col">
                  {value.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HISTORY TIMELINE SECTION --- */}
      <section className="relative overflow-hidden py-24 bg-white" id="history">
        {/* BACKGROUND SHAPES */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] text-[#1e3a8a]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="spiralpattern" width="200" height="200" patternUnits="userSpaceOnUse">
                  <path d="M 0,200 A 200,200 0 0,1 200,0 M -10,190 A 200,200 0 0,1 190,-10" stroke="currentColor" strokeWidth="1" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#spiralpattern)" />
            </svg>
          </div>
          <div className="absolute inset-0 opacity-[0.04] text-[#dc2626]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="networkpattern" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2" fill="currentColor" />
                  <line x1="2" y1="2" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#networkpattern)" />
            </svg>
          </div>
          <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-[#1e3a8a] opacity-[0.05] rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-[-10%] w-[400px] h-[400px] bg-[#dc2626] opacity-[0.03] rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mb-16 md:mb-20 text-center md:text-left mx-auto md:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-1 w-12 bg-[#dc2626] mb-6 mx-auto md:mx-0" />
              <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-6 tracking-tight">
                Evolusi Perjalanan Kami.
              </h2>
              <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto md:mx-0">
                Lebih dari 65 tahun pengalaman dalam pendidikan teologi transformatif, membentuk identitas dan misi STTB seiring waktu.
              </p>
            </motion.div>
          </div>

          <div className="relative max-w-5xl mx-auto pl-10 md:pl-0" ref={historyRef}>
            <div className="absolute left-[20px] md:left-1/2 top-4 bottom-12 w-[2px] bg-gray-200 -translate-x-1/2" />
            <motion.div
              className="absolute left-[20px] md:left-1/2 top-4 bottom-12 w-[2px] bg-gradient-to-b from-[#1e3a8a] via-[#dc2626] to-[#1e3a8a] origin-top -translate-x-1/2 z-10"
              style={{ scaleY: lineHeight }}
            />
            <div className="space-y-16">
              {[
                {
                  year: "1992 - 1998",
                  title: "Pendirian Reformed Injili",
                  descriptions: [
                    "Pdt. Caleb Tong, Pdt. Joseph Tong, dan Pdt. Dorothy I. Marx mendirikan STTB pada tahun 1992 dengan tujuan menghasilkan Pastor-Scholar yg memiliki kerangka teologi Reformed Injili dalam konteks pekerjaan Tuhan di Indonesia. Pdt. Daniel Lucas Lukito sebagai Dekan Akademik pertama meletakkan kerangka dasar pembangunan STTB.",
                    "Pembukaan STTB disiapkan sangat baik dengan dosen berkualitas, perpustakaan koleksi lengkap, serta penerbitan Jurnal Teologi STULOS.",
                    "Tahun-tahun pertama diselenggarakan Ferakristal (Festival Remaja Kristen Pencinta Alkitab). Wisuda pertama diadakan pada tahun 1996."
                  ],
                  icon: Target,
                },
                {
                  year: "1999 - 2005",
                  title: "Gedung & Program Baru",
                  descriptions: [
                    "Ibu Dorothy I. Marx menjabat sebagai Rektor. STTB membuka program-program studi baru: M.A. (Magister Artium) untuk kaum awam dan M.Th. (Magister Teologi) untuk akademisi.",
                    "Asrama dosen dibangun bersebelahan dengan asrama mahasiswa. STTB berkomitmen menerbitkan seri buku “Sola…” dan menyelenggarakan acara nasional bagi pemuda CYLF (Christian Youth Leadership Forum)."
                  ],
                  icon: ArrowRight,
                },
                {
                  year: "2006 - 2010",
                  title: "Peningkatan Akademik Global",
                  descriptions: [
                    "Di bawah kepemimpinan Pdt. Joseph Tong, STTB mengutus beberapa dosen untuk studi lanjut di USA. Terbit dua buku Seri Sola: Sola Scriptura dan Sola Fide.",
                    "Membuka program studi berbahasa Mandarin (S.Th., M.Div., dan M.A.) untuk misi di Tiongkok dengan mengundang 2 dosen dari Taiwan mengajar para mahasiswa yang datang dari Tiongkok."
                  ],
                  icon: History,
                },
                {
                  year: "2011 - 2016",
                  title: "Gedung 7 Lantai & Akreditasi",
                  descriptions: [
                    "Pdt. Agus Gunawan melanjutkan kepemimpinan sebagai Rektor. Pada tahun 2011, dibangun gedung baru berlantai tujuh untuk ruang kelas, asrama, dan perpustakaan.",
                    "Tahun 2012 dibuka prodi S.Pd.K. (Sarjana Pendidikan Kristen) dan M.Min. (Magister Ministri). Selanjutnya, pada tahun 2015, ditambah program studi M.Pd.K.",
                    "Beberapa program studi sudah terakreditasi oleh BAN-PT dan ATA (Asian Theological Association). Jejaring global diperluas dengan dosen dari Inggris, India, dan Filipina, yang sangat mendukung program M.Th. Bahasa Inggris."
                  ],
                  icon: Target,
                },
                {
                  year: "2017 - 2022",
                  title: "Inovasi LEAD Center & Era Digital",
                  descriptions: [
                    "Pembenahan kualitas dan penajaman arah pengembangan program studi formal dan non-formal. Formasi spiritualitas yg berkualitas dan terintegrasi.",
                    "Inisiasi komunitas IFCE, perkembangan prodi M.Th. berfokus pada Transformasi Budaya dan program studi MMin Marketplace.",
                    "Pendidikan nonformal makin berkembang dengan budaya digital di LEAD Center (pusat studi non-formal) dikembangkan Vocatio, Perspectives, dan materi-materi pembinaan digital.",
                    "Pdt Chandra Koewoso menjabat Ketua sejak Agustus 2017, dan Sutrisna Harjanto PhD sejak Agustus 2019."
                  ],
                  icon: History,
                }
              ].map((milestone, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row gap-6 md:gap-16 items-start relative group"
                  >
                    <div className="absolute left-[20px] md:left-1/2 top-4 -translate-x-1/2 z-20">
                      <div className="w-10 h-10 bg-white border border-gray-100 shadow-md group-hover:border-[#1e3a8a] flex items-center justify-center relative transition-colors duration-300" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
                        <milestone.icon size={16} className="text-[#1e3a8a]" />
                      </div>
                    </div>

                    <div className={`w-full md:w-[calc(50%-48px)] ${isEven ? 'md:text-right md:order-1' : 'md:text-left md:order-2'} pt-2.5`}>
                      <span className="text-3xl md:text-4xl font-black text-[#1e3a8a] leading-none block tracking-tighter ml-10">
                        {milestone.year}
                      </span>
                    </div>

                    <div className={`w-full md:w-[calc(50%-48px)] ${isEven ? 'md:order-2 md:pl-6' : 'md:order-1 md:pr-6'}`}>
                      <div className="bg-white p-8 transition-all duration-300 relative overflow-hidden group border border-gray-100 hover:border-gray-200 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] rounded-2xl">
                        <div className="absolute top-0 left-0 w-full h-[3px] bg-gray-100 group-hover:bg-[#1e3a8a] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                        <h3 className="text-xl md:text-2xl font-bold text-[#1e3a8a] mb-5 leading-tight">
                          {milestone.title}
                        </h3>
                        <div className="space-y-4">
                          {milestone.descriptions.map((desc, i) => (
                            <p key={i} className="text-gray-600 text-[15px] font-light leading-relaxed text-left">
                              {desc}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* --- Arti Logo Section --- */}
      <section className="relative py-24 bg-white overflow-hidden" id="arti-logo">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(30,58,138,0.2) 0%, rgba(30,58,138,0) 70%)',
              animation: 'pulseLogo 8s ease-in-out infinite'
            }} />
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] opacity-[0.08] text-red-600">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="crossHatch" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="20" stroke="currentColor" strokeWidth="2" />
                  <line x1="0" y1="0" x2="20" y2="0" stroke="currentColor" strokeWidth="2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#crossHatch)" />
            </svg>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.06]">
            <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,500 C200,400 300,600 500,500 C700,400 800,600 1000,500 L1000,1000 L0,1000 Z" fill="#1e3a8a" opacity="0.4" />
              <path d="M0,500 C150,550 250,450 400,500 C550,550 650,450 800,500 C950,550 1000,500 1000,500" stroke="#dc2626" strokeWidth="3" fill="none" />
            </svg>
          </div>
        </div>

        <style>{`
          @keyframes pulseLogo {
            0%, 100% { transform: scale(1) translate(-10px, -10px); opacity: 0.4; }
            50% { transform: scale(1.1) translate(10px, 10px); opacity: 0.8; }
          }
        `}</style>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 relative">
            <div className="w-12 h-1 bg-red-500 mx-auto mb-4 rounded-full"></div>
            <h2 className="text-sm font-black text-red-500 mb-2 tracking-[0.2em] uppercase">
              ARTI LOGO
            </h2>
            <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-4 tracking-tight">
              STTB
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 shadow-2xl shadow-blue-900/5 border border-gray-100 rounded-3xl overflow-hidden bg-white/80 backdrop-blur-sm">
              {[
                {
                  title: "API",
                  icon: <Flame className="w-16 h-16 text-red-600 mx-auto" strokeWidth={1} />,
                  description: "di atas logo menggambarkan penyertaan dan pemenuhan dari Allah Roh Kudus yang menjadi sumber hikmat, kuasa, dan kasih serta merupakan syarat mutlak bagi pelayan Tuhan.",
                },
                {
                  title: "ALKITAB",
                  icon: <BookOpen className="w-16 h-16 text-[#1e3a8a] mx-auto" strokeWidth={1} />,
                  description: "adalah satu-satunya sumber pengetahuan yang benar tentang Allah dan dasar bagi panggilan serta pelayanan (Sola Scriptura).",
                },
                {
                  title: "SALIB & MAHKOTA",
                  icon: <div className="text-red-600 mx-auto flex justify-center text-7xl font-serif">✝</div>,
                  description: "melambangkan panggilan untuk berpegang kepada kebenaran dan merajakan Kristus.",
                },
                {
                  title: "TONGKAT GEMBALA",
                  icon: <Wand2 className="w-16 h-16 text-[#1e3a8a] mx-auto" strokeWidth={1} />,
                  description: "melambangkan panggilan Tuhan untuk menggembalakan umat-Nya.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`p-12 flex flex-col items-center text-center group hover:bg-gray-50/50 transition-colors duration-300
                    ${index === 0 || index === 2 ? 'md:border-r border-gray-100' : ''}
                    ${index === 0 || index === 1 ? 'border-b border-gray-100' : ''}
                  `}
                >
                  <div className="h-28 flex items-end justify-center mb-10 group-hover:-translate-y-2 transition-transform duration-300 ease-out">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-black text-[#1e3a8a] mb-5 tracking-tight">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-[300px] font-medium">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center px-6 py-10 rounded-3xl bg-gray-50/50 border border-gray-100 backdrop-blur-sm">
              <div className="w-full max-w-[260px] mb-10 group">
                <ImageWithFallback
                  src="/images/logo-sttb.png"
                  alt="Logo STTB"
                  className="w-full h-auto object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="w-16 h-1 bg-[#1e3a8a] mb-6 rounded-full opacity-60"></div>
              <h3 className="text-3xl font-black text-[#1e3a8a] mb-5 tracking-tight">LOGO STTB</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm font-medium">
                Logo STTB menggambarkan pola pendidikan teologi yang akan memperlengkapi para mahasiswa untuk menjadi hamba Allah yang baik, setia, dan penuh hikmat, serta siap dipakai dalam pelayanan di ladangNya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pendiri Section */}
      <section className="py-20 bg-gray-50" id="pendiri">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-sm font-black text-red-500 mb-2 tracking-widest uppercase">
                PENDIRI
              </h2>
              <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-4">
                STTB
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  name: "Rev. DR. Caleb Tong (Alm.)",
                  image: "https://images.unsplash.com/photo-1758270704524-596810e891b5"
                },
                {
                  name: "Rev. DR. Joseph Tong, Ph.D.",
                  image: "https://images.unsplash.com/photo-1758270704524-596810e891b5"
                },
                {
                  name: "Rev. Dorothy I. Marx (Alm.)",
                  image: "https://images.unsplash.com/photo-1758270704524-596810e891b5"
                }
              ].map((pendiri, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white shadow-md p-4 pb-6 flex flex-col items-center border border-gray-100 h-full"
                >
                  <div className="w-full aspect-[3/4] overflow-hidden mb-6 bg-gray-100 flex items-center justify-center">
                    <ImageWithFallback
                      src={pendiri.image}
                      alt={pendiri.name}
                      className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <h3 className="text-[13px] font-bold text-[#1e3a8a] text-center w-full px-2">
                    {pendiri.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dewan Dosen */}
      <section className="py-20 bg-white" id="leadership">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-6">
              <Users size={20} />
              <span className="font-bold">KEPEMIMPINAN</span>
            </div>
            <h2 className="text-sm font-black text-red-500 mb-2 tracking-widest">
              DEWAN PENGAJAR
            </h2>
            <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-4">
              DOSEN STTB
            </h2>
            <p className="text-lg text-gray-600">
              Dipimpin oleh para akademisi dan pelayan yang berpengalaman
            </p>
          </div>

          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            <div className="relative">
              <div className="flex justify-end items-center gap-4 mb-6 md:pr-24">
                <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-transparent to-[#1e3a8a]/30" />
                <span className="bg-[#1e3a8a] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider">
                  Ketua
                </span>
              </div>
              <div className="flex justify-center md:justify-end md:pr-24">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-52"
                >
                  <DosenCard
                    dosen={{
                      name: "Dr. John Doe, M.Th.",
                      position: "Ketua STTB",
                      teaching: "Dosen Teologi Sistematika",
                      education: [
                        "Ph.D. University of Southern California USA",
                        "M.BA. Graduate Theological Foundation Indiana",
                        "M.Th. Calvin Theological Seminary USA",
                      ],
                      image: "https://images.unsplash.com/photo-1758270704524-596810e891b5",
                    }}
                  />
                </motion.div>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-[#1e3a8a] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider">
                  Wakil Ketua
                </span>
                <div className="hidden md:block flex-1 h-px bg-gradient-to-l from-transparent to-[#1e3a8a]/30" />
              </div>
              <div className="flex justify-center md:justify-start">
                <div className="flex flex-wrap md:flex-nowrap gap-5">
                  {[
                    {
                      name: "Tan Giok Lie",
                      position: "Wakil Ketua I Akademik",
                      teaching: "Dosen Pendidikan",
                      education: [
                        "Ed.D. Biola University Talbot School Theology USA",
                        "M.A. Institut Alkitab Tiranus Bandung",
                        "S.S. Universitas Kristen Maranatha Bandung",
                      ],
                      image: "https://images.unsplash.com/photo-1758270704524-596810e891b5",
                    },
                    {
                      name: "Dr. Jane Smith, M.Div.",
                      position: "Wakil Ketua II Keuangan",
                      teaching: "Dosen Perjanjian Baru",
                      education: [
                        "Ph.D. Trinity Evangelical Divinity School USA",
                        "M.Div. Fuller Theological Seminary USA",
                      ],
                      image: "https://images.unsplash.com/photo-1758270704524-596810e891b5",
                    },
                    {
                      name: "Dr. Michael Brown, Th.D.",
                      position: "Wakil Ketua III Kemahasiswaan",
                      teaching: "Dosen Teologi Praktika",
                      education: [
                        "Th.D. South East Asia Graduate School of Theology",
                        "M.Th. Calvin Theological Seminary USA",
                      ],
                      image: "https://images.unsplash.com/photo-1758270704524-596810e891b5",
                    },
                  ].map((dosen, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="w-44 md:w-52 flex-shrink-0"
                    >
                      <DosenCard dosen={dosen} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex justify-end items-center gap-4 mb-6">
                <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-transparent to-[#1e3a8a]/30" />
                <span className="bg-[#1e3a8a] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider">
                  Ketua Program Studi
                </span>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="flex flex-wrap md:flex-nowrap gap-5">
                  {[
                    {
                      name: "Dosen A",
                      position: "Kaprodi S1 Teologi",
                      teaching: "Dosen Perjanjian Lama",
                      education: ["Ph.D. Universitas A", "M.Th. Universitas B"],
                      image: "https://images.unsplash.com/photo-1758270704524-596810e891b5",
                    },
                    {
                      name: "Dosen B",
                      position: "Kaprodi S1 PAK",
                      teaching: "Dosen Pendidikan Agama Kristen",
                      education: ["Ed.D. Universitas C", "M.A. Universitas D"],
                      image: "https://images.unsplash.com/photo-1758270704524-596810e891b5",
                    },
                    {
                      name: "Dosen C",
                      position: "Kaprodi S2 Teologi",
                      teaching: "Dosen Sejarah Gereja",
                      education: ["Ph.D. Universitas E", "M.Div. Universitas F"],
                      image: "https://images.unsplash.com/photo-1758270704524-596810e891b5",
                    },
                    {
                      name: "Dosen D",
                      position: "Kaprodi S2 PAK",
                      teaching: "Dosen Filsafat",
                      education: ["Th.D. Universitas G", "M.Th. Universitas H"],
                      image: "https://images.unsplash.com/photo-1758270704524-596810e891b5",
                    },
                    {
                      name: "Dosen E",
                      position: "Kaprodi S3 Teologi",
                      teaching: "Dosen Misiologi",
                      education: ["Ph.D. Universitas I", "M.A. Universitas J"],
                      image: "https://images.unsplash.com/photo-1758270704524-596810e891b5",
                    },
                  ].map((dosen, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="w-44 md:w-52 flex-shrink-0"
                    >
                      <DosenCard dosen={dosen} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-[#1e3a8a] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider">
                  Jajaran Dosen
                </span>
                <div className="hidden md:block flex-1 h-px bg-gradient-to-l from-transparent to-[#1e3a8a]/30" />
              </div>
              {lecturersLoading && (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="animate-spin text-[#1e3a8a] mr-3" size={28} />
                  <span className="text-gray-500">Memuat data dosen...</span>
                </div>
              )}
              {lecturersError && !lecturersLoading && (
                <div className="flex items-center justify-center py-8 bg-red-50 rounded-xl">
                  <AlertCircle className="text-[#dc2626] mr-3" size={24} />
                  <span className="text-[#dc2626]">Gagal memuat data dosen.</span>
                </div>
              )}
              {!lecturersLoading && !lecturersError && lecturers && lecturers.length > 0 && (
                <DosenCarousel
                  dosenList={lecturers.map((d) => ({
                    name: d.name,
                    position: d.position || "Dosen Tetap",
                    teaching: d.expertise || "Dosen Teologi",
                    education: d.educationLevel ? [d.educationLevel] : [],
                    image: d.photo || "https://images.unsplash.com/photo-1758270704524-596810e891b5",
                  }))}
                />
              )}
              {!lecturersLoading && !lecturersError && (!lecturers || lecturers.length === 0) && (
                <div className="text-center py-8 bg-gray-50 rounded-xl">
                  <p className="text-gray-500">Data dosen belum tersedia.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MARS */}
      <section className="py-20" id="mars">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-6">
              <Users size={20} />
              <span className="font-bold">MARS</span>
            </div>
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
              MARS STTB
            </h2>
            <p className="text-lg text-gray-600">
              Alunan nada dan lirik yang memanggil setiap sivitas akademika untuk berdedikasi dalam kebenaran Firman, keunggulan akademis, dan pelayanan yang transformatif.
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 mt-12 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full rounded-2xl overflow-hidden shadow-xl bg-white p-4 border border-gray-100"
          >
            <ImageWithFallback
              src="/images/09-MARS-STTB.jpg"
              alt="Lirik Mars STTB"
              className="w-full h-auto rounded-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full"
          >
            <MarsAudioPlayer />
          </motion.div>
        </div>
      </section>

      {/* Pengakuan Iman */}
      <section className="py-20 bg-gray-50" id="pengakuan">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-6">
              <BookOpen size={20} />
              <span className="font-bold">PENGAKUAN IMAN</span>
            </div>
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
              Pengakuan Iman STTB
            </h2>
            <p className="text-lg text-gray-600">
              Prinsip-prinsip teologis dan doktrin fundamental Sekolah Tinggi Teologi Bandung yang kami pegang teguh.
            </p>
          </div>
          <div className="max-w-6xl mx-auto flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#1e3a8a] rounded-2xl p-8 md:p-10 text-white relative overflow-hidden shadow-lg"
            >
              <span className="absolute top-4 right-6 text-[120px] font-black text-white/10 leading-none select-none">01</span>
              <div className="relative z-10 max-w-3xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">KAMI PERCAYA</h3>
                <p className="text-blue-100 text-base md:text-lg leading-relaxed">
                  bahwa Alkitab secara keseluruhan, Perjanjian Lama dan Perjanjian Baru, adalah firman Allah yang diwahyukan dan diilhamkan tanpa kesalahan. Oleh karena itu, Alkitab adalah sumber otoritas tertinggi bagi iman dan kehidupan orang percaya di segala abad dan tempat.
                </p>
              </div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-[#1e3a8a] relative overflow-hidden"
              >
                <span className="absolute bottom-4 right-6 text-[80px] font-black text-[#dc2626]/15 leading-none select-none">02</span>
                <div className="relative z-10">
                  <span className="text-3xl font-black text-[#dc2626]">02</span>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mt-2 mb-3">KAMI PERCAYA</h3>
                  <p className="text-gray-600 leading-relaxed">
                    bahwa Allah adalah Esa dan kekal, Mahakudus, dan penuh rahmat. Ia adalah pencipta, penguasa, dan pemelihara alam semesta beserta segala isinya, Tritunggal sebagai Bapa, Anak, dan Roh Kudus. Masing-masing adalah Pribadi yang tidak diciptakan, sehakekat, dan setara dalam kuasa dan kemuliaan. Ia berdaulat baik dalam keselamatan maupun dalam penghakiman umat manusia.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-[#1e3a8a] relative overflow-hidden"
              >
                <span className="absolute bottom-4 right-6 text-[80px] font-black text-[#dc2626]/15 leading-none select-none">03</span>
                <div className="relative z-10">
                  <span className="text-3xl font-black text-[#dc2626]">03</span>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mt-2 mb-3">KAMI PERCAYA</h3>
                  <p className="text-gray-600 leading-relaxed">
                    bahwa manusia, laki-laki dan perempuan, telah diciptakan oleh Allah menurut gambar-Nya, yang telah dimahkotai-Nya dengan kemuliaan serta mandat untuk memenuhi bumi, mengelola dan memelihara seluruh ciptaan-Nya. Tetapi manusia telah jatuh ke dalam dosa, terpisah dari Allah, dan kehilangan kemampuan untuk hidup sesuai dengan citranya sebagai ciptaan Allah, sehingga tidak mampu menyelamatkan dirinya sendiri.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-[#1e3a8a] relative overflow-hidden"
              >
                <span className="absolute bottom-4 right-6 text-[80px] font-black text-[#dc2626]/15 leading-none select-none">04</span>
                <div className="relative z-10">
                  <span className="text-3xl font-black text-[#dc2626]">04</span>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mt-2 mb-3">KAMI PERCAYA</h3>
                  <p className="text-gray-600 leading-relaxed text-xs">
                    bahwa Yesus Kristus adalah Anak Tunggal Allah, Allah sejati dan Manusia sejati, penebus dan satu-satunya jalan keselamatan bagi seluruh umat manusia. Ia dikandung dari Roh Kudus, lahir dari anak dara Maria, hidup tanpa dosa, sempurna dalam pengorbanan dan kasih. Ia mati di atas kayu salib, bangkit kembali dari antara orang mati dalam tubuh kebangkitan yang nyata, naik ke sorga, duduk di sebelah kanan Allah Bapa, menjadi Imam Besar Agung bagi orang percaya, dan pengantara tunggal antara Allah dan manusia, serta Raja di atas segala raja.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-[#1e3a8a] relative overflow-hidden"
              >
                <span className="absolute bottom-4 right-6 text-[80px] font-black text-[#dc2626]/15 leading-none select-none">05</span>
                <div className="relative z-10">
                  <span className="text-3xl font-black text-[#dc2626]">05</span>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mt-2 mb-3">KAMI PERCAYA</h3>
                  <p className="text-gray-600 leading-relaxed text-xs">
                    bahwa Roh Kudus adalah Allah yang hidup, yang menginsafkan manusia akan dosa, kebenaran, dan penghakiman. Ia melahirbarukan orang berdosa yang percaya, mendiami, menguduskan, dan memberi kuasa serta karunia-karunia kepada setiap orang percaya menurut kehendak-Nya demi kesaksian, persekutuan, dan pelayanan untuk pembangunan tubuh Kristus.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-[#1e3a8a] relative overflow-hidden"
              >
                <span className="absolute bottom-4 right-6 text-[80px] font-black text-[#dc2626]/15 leading-none select-none">06</span>
                <div className="relative z-10">
                  <span className="text-3xl font-black text-[#dc2626]">06</span>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mt-2 mb-3">KAMI PERCAYA</h3>
                  <p className="text-gray-600 leading-relaxed text-xs">
                    bahwa manusia hanya dapat diselamatkan oleh kasih karunia melalui penebusan oleh Tuhan Yesus Kristus dan dibenarkan melalui iman, tanpa jasa, usaha, ataupun kesalehan dari pihak manusia. Melalui penyelamatan Allah dalam Kristus, gambar Allah pada manusia dipulihkan. Dengan demikian, manusia dimampukan untuk menjalani kehidupan yang penuh tanggung jawab dalam pengabdian dan kasih di hadapan Allah dan manusia.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#dc2626] rounded-2xl p-8 text-white relative overflow-hidden shadow-lg"
              >
                <span className="absolute bottom-4 right-6 text-[80px] font-black text-white/15 leading-none select-none">07</span>
                <div className="relative z-10">
                  <span className="text-3xl font-black text-white/80">07</span>
                  <h3 className="text-xl font-bold mt-2 mb-3">KAMI PERCAYA</h3>
                  <p className="text-white/90 leading-relaxed">
                    bahwa Gereja selaku garam dan terang dunia adalah himpunan semua orang percaya dari segala abad dan bangsa. Ia adalah tubuh Kristus yang kudus dan Am, dengan Kristus sebagai Kepalanya. Gereja memberitakan Kerajaan Allah melalui kebaktian, pengajaran, sakramen baptisan dan perjamuan kudus, serta pemberitaan Injil dan misi umat Allah seutuhnya di tengah dunia.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-[#1e3a8a] relative overflow-hidden"
              >
                <span className="absolute bottom-4 right-6 text-[80px] font-black text-[#dc2626]/15 leading-none select-none">08</span>
                <div className="relative z-10">
                  <span className="text-3xl font-black text-[#dc2626]">08</span>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mt-2 mb-3">KAMI PERCAYA</h3>
                  <p className="text-gray-600 leading-relaxed">
                    bahwa kepastian kedatangan kembali Yesus Kristus secara nyata dan pribadi akan terjadi pada akhir zaman untuk menjemput umat-Nya untuk menghakimi seluruh umat manusia, baik yang hidup maupun yang mati. Pada kedatangan-Nya kedua kali itulah setiap orang mati akan dibangkitkan, orang percaya masuk ke dalam kehidupan yang kekal, orang yang tidak percaya masuk ke dalam kebinasaan yang kekal.
                  </p>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#1e3a8a] rounded-2xl p-8 md:p-10 text-white relative overflow-hidden shadow-lg"
            >
              <span className="absolute top-4 right-6 text-[120px] font-black text-white/10 leading-none select-none">09</span>
              <div className="relative z-10 max-w-3xl">
                <h3 className="text-1xl md:text-2xl font-semibold mb-4">DOMINO OPTIMO MAXIMO</h3>
                <p className="text-2xl md:text-2xl font-bold mb-4 leading-relaxed">
                  TO THE LORD THE BEST THE GREATEST
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Yayasan */}
      <section className="py-20 bg-white" id="yayasan">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-6">
              <Shield size={20} />
              <span className="font-bold">YAYASAN</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-4">
              Yayasan STTB
            </h2>
            <p className="text-lg text-gray-600">
              Struktur organisasi yayasan yang menaungi Sekolah Tinggi Teologi Bandung
            </p>
          </div>
          <div className="max-w-6xl mx-auto flex flex-col gap-14">
            <div className="relative">
              <div className="flex justify-end items-center gap-4 mb-6">
                <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-transparent to-[#1e3a8a]/30" />
                <span className="bg-[#1e3a8a] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider">
                  Dewan Pembina
                </span>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full sm:w-auto">
                  {[
                    { name: "Nama Pembina 1", role: "Ketua Dewan Pembina" },
                    { name: "Nama Pembina 2", role: "Anggota Dewan Pembina" },
                    { name: "Nama Pembina 3", role: "Anggota Dewan Pembina" },
                  ].map((person, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="w-full sm:w-48"
                    >
                      <div className="bg-white rounded-xl p-5 shadow-md border-l-4 border-[#1e3a8a] hover:shadow-lg transition-shadow h-full">
                        <div className="">
                        </div>
                        <h4 className="text-sm font-bold text-[#1e3a8a] leading-tight">
                          {person.name}
                        </h4>
                        <p className="text-[11px] font-semibold text-[#dc2626] mt-1">
                          {person.role}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-[#1e3a8a] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider">
                  Dewan Pengurus
                </span>
                <div className="hidden md:block flex-1 h-px bg-gradient-to-l from-transparent to-[#1e3a8a]/30" />
              </div>
              <div className="flex justify-center md:justify-start">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full md:w-auto">
                  {[
                    { name: "Nama Pengurus 1", role: "Ketua" },
                    { name: "Nama Pengurus 2", role: "Wakil Ketua" },
                    { name: "Nama Pengurus 3", role: "Sekretaris" },
                    { name: "Nama Pengurus 4", role: "Bendahara" },
                  ].map((person, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="w-full md:w-48"
                    >
                      <div className="bg-white rounded-xl p-5 shadow-md border-t-4 border-[#1e3a8a] hover:shadow-lg transition-shadow h-full">
                        <span className="inline-block bg-[#dc2626] text-white text-[10px] font-bold px-2.5 py-1 rounded-full mb-3">
                          {person.role}
                        </span>
                        <h4 className="text-sm font-bold text-[#1e3a8a] leading-tight">
                          {person.name}
                        </h4>
                        <p className="text-[11px] text-gray-500 mt-1">
                          Dewan Pengurus Yayasan
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="flex justify-end items-center gap-4 mb-6">
                <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-transparent to-[#1e3a8a]/30" />
                <span className="bg-[#1e3a8a] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider">
                  Anggota
                </span>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex gap-4 w-full lg:w-auto">
                  {[
                    "Nama Anggota 1",
                    "Nama Anggota 2",
                    "Nama Anggota 3",
                    "Nama Anggota 4",
                    "Nama Anggota 5",
                    "Nama Anggota 6",
                    "Nama Anggota 7",
                  ].map((name, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="w-full lg:w-36"
                    >
                      <div className="bg-white rounded-xl p-4 shadow-md border-l-3 border-[#1e3a8a] hover:shadow-lg transition-shadow">
                        <h4 className="text-xs font-bold text-[#1e3a8a] leading-tight">
                          {name}
                        </h4>
                        <p className="text-[10px] text-gray-500 mt-1">
                          Anggota Yayasan
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}