"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BookOpen,
  Wrench,
  Lightbulb,
  CalendarDays,
  Clock,
  MapPin,
  PlayCircle,
  ArrowRight,
  Quote,
  Target,
  Users
} from "lucide-react";
import Link from "next/link";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// ==========================================
// 1. DUMMY DATA (Siap diganti dengan API)
// ==========================================

const LEAD_SERVICES = [
  {
    id: "learning",
    title: "Learning",
    subtitle: "Layanan Pembelajaran",
    desc: "Menyediakan akses bagi umat Tuhan untuk mengikuti kelas sekolah teologi secara audit (sit in). Termasuk juga penyelenggaraan Kuliah Umum (Public Lecture) dan Seminar Umum untuk topik esensial.",
    icon: BookOpen,
    color: "bg-[#1e3a8a]",
    textColor: "text-[#1e3a8a]",
    colSpan: "md:col-span-2 lg:col-span-1"
  },
  {
    id: "equipping",
    title: "Equipping",
    subtitle: "Layanan Pemerlengkapan",
    desc: "Menyelenggarakan kursus bersertifikat, pelatihan (training course), dan klinik (crash course). Bekerja sama dengan berbagai lembaga seperti Perspectives Indonesia (PSP) dan Vocatio Marketplace Fellow.",
    icon: Wrench,
    color: "bg-[#dc2626]",
    textColor: "text-[#dc2626]",
    colSpan: "md:col-span-2 lg:col-span-1"
  },
  {
    id: "development",
    title: "Development",
    subtitle: "Layanan Pengembangan",
    desc: "Mengembangkan bahan ajar, modul pembinaan, dan sumber daya teologis (resourcing the body of Christ) yang dapat dipakai oleh gereja untuk memperlengkapi semua orang percaya.",
    icon: Lightbulb,
    color: "bg-emerald-600",
    textColor: "text-emerald-600",
    colSpan: "md:col-span-2 lg:col-span-1"
  }
];

const UPCOMING_EVENTS = [
  {
    id: "1",
    title: "Little STEP #5",
    date: "23 Feb 2026",
    time: "08:00 - Selesai",
    location: "Kampus STTB",
    category: "Seminar"
  },
  {
    id: "2",
    title: "PERSPECTIVES STUDY PROGRAM (PSP) ONLINE",
    date: "23 Feb 2026",
    time: "19:00 - 21:00",
    location: "STTB Zoom 1",
    category: "Course"
  },
  {
    id: "3",
    title: "Vocatio Marketplace Fellow: Batch 4",
    date: "15 Mar 2026",
    time: "18:00 - 20:00",
    location: "Kampus STTB",
    category: "Training"
  }
];

const FEATURED_MEDIA = {
  title: 'City TransForMission #2: "Fokus Strategis Misi Urban"',
  date: "9 Maret 2023",
  type: "LEAD Video",
  // Mengambil thumbnail asli langsung dari YouTube menggunakan ID videonya
  thumbnail: "https://img.youtube.com/vi/Sop6nPCHyys/maxresdefault.jpg",
  // Link YouTube yang akan dituju
  url: "https://www.youtube.com/watch?v=Sop6nPCHyys"
};

// ==========================================
// 2. MAIN COMPONENT PAGE
// ==========================================

export function LeadPage() {
  const [activeTab, setActiveTab] = useState("konsep");
  const [isPlaying, setIsPlaying] = useState(false);

  // Fungsi scroll ke section
  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Fungsi untuk mengubah URL biasa menjadi URL Embed YouTube
  const getYouTubeEmbedUrl = (url: string) => {
    // Mengekstrak ID Video (contoh: Sop6nPCHyys)
    const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&]{11})/);
    const videoId = videoIdMatch ? videoIdMatch[1] : "";
    // Mengembalikan URL embed dengan parameter autoplay=1
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  };

  return (
    <div className="pt-20 bg-[#f8fafc] min-h-screen">

      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-40 overflow-hidden bg-gradient-to-br from-[#0a1930] via-[#1e3a8a] to-[#1e40af]">

        {/* Background Shapes: Dynamic Intersections */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="intersectGrid" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
                <path d="M40 0 L40 80 M0 40 L80 40" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#intersectGrid)" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/20 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/4" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="h-1.5 w-16 bg-[#dc2626] mx-auto mb-6 rounded-full" />
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1] drop-shadow-lg">
              Learning, Equipping <br className="hidden md:block" /> & Development
            </h1>
            <p className="text-2xl md:text-3xl text-blue-200 font-black tracking-[0.2em] mb-8">
              L.E.A.D. CENTER
            </p>
            <p className="text-xl text-blue-100/90 font-medium leading-relaxed max-w-3xl mx-auto mb-10">
              Pusat pendidikan dan pelatihan non-formal Sekolah Tinggi Teologi Bandung untuk memperlengkapi orang-orang kudus bagi pekerjaan pelayanan.
            </p>

            {/* In-Page Navigation */}
            <div className="inline-flex bg-white/10 backdrop-blur-md p-1.5 rounded-full border border-white/20 shadow-xl">
              {['konsep', 'kegiatan', 'media'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => scrollToSection(tab)}
                  className={`px-6 py-2.5 rounded-full text-sm font-black tracking-widest uppercase transition-all ${activeTab === tab
                    ? "bg-[#dc2626] text-white shadow-md"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- KONSEP & VISI (ABOUT) SECTION --- */}
      <section id="konsep" className="relative z-20 -mt-16 pb-24 scroll-mt-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Left: Visi Highlight */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden h-full flex flex-col justify-center"
              >
                <Quote className="absolute -top-6 -left-6 text-gray-100 rotate-180" size={160} />
                <div className="relative z-10">
                  <h3 className="text-[#dc2626] font-black text-xs tracking-[0.2em] uppercase mb-4">Visi Utama Kami</h3>
                  <p className="text-3xl md:text-4xl font-black text-[#0a1930] leading-[1.3] tracking-tight mb-8">
                    "Seluruh Umat membawa Seluruh Injil ke Seluruh Dunia"
                  </p>
                  <div className="flex items-center gap-3 text-gray-500 font-bold text-sm uppercase tracking-widest">
                    <div className="w-8 h-1 bg-[#1e3a8a] rounded-full" />
                    Lausanne Movement
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Deskripsi */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-xl p-10 md:p-14 rounded-[2.5rem] shadow-[0_20px_50px_rgba(10,25,48,0.06)] border border-gray-100 h-full"
              >
                <h2 className="text-2xl font-black text-[#1e3a8a] mb-6 flex items-center gap-3">
                  <Target size={28} className="text-[#dc2626]" />
                  Equipping the Equippers
                </h2>
                <div className="space-y-5 text-gray-600 font-medium leading-relaxed text-lg">
                  <p>
                    Salah satu buah terpenting dari reformasi adalah keyakinan alkitabiah tentang keimaman semua orang percaya (<em>the priesthood of all believers</em>). Jika semua orang percaya adalah imam dan pelayan Tuhan, maka pemerlengkapan untuk dapat melayani dengan baik perlu dapat diakses oleh semua orang percaya, bukan hanya oleh mereka yang memasuki sekolah teologi formal.
                  </p>
                  <p>
                    LEAD Center digerakkan untuk <strong className="text-[#0a1930]">resourcing the body of Christ</strong>—menyediakan sumber dan sarana pembelajaran yang dapat dipakai oleh tubuh Kristus untuk memperlengkapi semua orang percaya menjadi murid dan pekerja Kristus yang andal.
                  </p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* --- TIGA PILAR LAYANAN (BENTO GRID) --- */}
      <section className="py-20 bg-gray-50 relative overflow-hidden border-t border-gray-200">
        {/* Background Shapes */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] text-[#1e3a8a]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotNet" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotNet)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#dbeafe] text-[#1e3a8a] px-5 py-2.5 rounded-full text-xs font-black tracking-[0.2em] uppercase mb-4 shadow-sm border border-blue-100">
              Tridharma LEAD
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0a1930] tracking-tight">
              Fokus Layanan Utama
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LEAD_SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group bg-white rounded-[2rem] p-10 border-b-8 border-transparent hover:border-current ${service.textColor} shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative overflow-hidden`}
              >
                {/* Hover Blob */}
                <div className={`absolute -right-10 -top-10 w-40 h-40 ${service.color} rounded-full blur-[50px] opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-md group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 ${service.color}`}>
                  <service.icon size={32} strokeWidth={2} />
                </div>
                <h3 className="text-sm font-black tracking-[0.2em] uppercase mb-1 opacity-70">{service.subtitle}</h3>
                <h4 className="text-3xl font-black text-[#0a1930] mb-4 tracking-tight">{service.title}</h4>
                <p className="text-gray-600 font-medium leading-relaxed flex-1">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- KEGIATAN (EVENTS CALENDAR) --- */}
      <section id="kegiatan" className="py-24 bg-white relative scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b-2 border-gray-100 pb-6">
            <div>
              <span className="text-[#dc2626] font-black text-xs tracking-[0.2em] uppercase mb-3 block">Agenda Terkini</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#0a1930] tracking-tight">Jadwal Kegiatan</h2>
            </div>
            <Link href="#" className="inline-flex items-center gap-2 text-[#1e3a8a] font-black hover:text-[#dc2626] transition-colors">
              Lihat Kalender Penuh <ArrowRight size={20} strokeWidth={3} />
            </Link>
          </div>

          <div className="space-y-6">
            {UPCOMING_EVENTS.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col md:flex-row gap-6 bg-[#f8fafc] p-6 rounded-3xl border border-gray-200 hover:bg-white hover:border-[#1e3a8a]/30 hover:shadow-[0_20px_40px_rgba(30,58,138,0.06)] transition-all duration-300"
              >
                {/* Date Block */}
                <div className="w-full md:w-40 flex-shrink-0 bg-white border border-gray-100 rounded-2xl p-4 flex flex-col justify-center items-center text-center shadow-sm group-hover:bg-[#1e3a8a] group-hover:border-transparent transition-colors">
                  <span className="text-xs font-black text-gray-400 uppercase tracking-widest group-hover:text-blue-200 mb-1">{event.date.split(' ')[1]} {event.date.split(' ')[2]}</span>
                  <span className="text-4xl font-black text-[#dc2626] group-hover:text-white leading-none">{event.date.split(' ')[0]}</span>
                </div>

                {/* Detail Block */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-red-50 text-[#dc2626] px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest border border-red-100">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-[#0a1930] mb-3 leading-tight group-hover:text-[#1e3a8a] transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <Clock size={16} className="text-[#1e3a8a]" /> {event.time}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={16} className="text-[#dc2626]" /> {event.location}
                    </div>
                  </div>
                </div>

                {/* Action Block */}
                <div className="flex items-center md:justify-end">
                  <button className="w-full md:w-14 h-14 bg-gray-100 text-gray-500 rounded-xl flex items-center justify-center group-hover:bg-[#dc2626] group-hover:text-white transition-all shadow-sm">
                    <ArrowRight size={24} strokeWidth={2.5} className="group-hover:-rotate-45 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MEDIA HIGHLIGHT --- */}
      <section id="media" className="py-24 bg-[#0a1930] relative overflow-hidden scroll-mt-10">
        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mediaGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mediaGrid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-[#dc2626] text-white px-5 py-2.5 rounded-full text-xs font-black tracking-[0.2em] uppercase mb-4 shadow-sm">
              <PlayCircle size={16} /> Dokumentasi Publik
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Sorotan Media
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
          >
            <div className="aspect-video md:aspect-[21/9] w-full relative bg-black">

              {!isPlaying ? (
                /* Tampilan Thumbnail (Sebelum di-klik) */
                <div
                  className="w-full h-full relative cursor-pointer"
                  onClick={() => setIsPlaying(true)}
                >
                  <ImageWithFallback
                    src={FEATURED_MEDIA.thumbnail}
                    alt={FEATURED_MEDIA.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-[#dc2626]/90 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform">
                      <PlayCircle size={44} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 pointer-events-none">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-[#1e3a8a] text-white px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest">
                        {FEATURED_MEDIA.type}
                      </span>
                      <span className="text-white/70 text-sm font-bold">{FEATURED_MEDIA.date}</span>
                    </div>
                    <h3 className="text-2xl md:text-2xl font-black text-white leading-tight max-w-3xl drop-shadow-lg group-hover:text-blue-200 transition-colors">
                      {FEATURED_MEDIA.title}
                    </h3>
                  </div>
                </div>
              ) : (
                /* Tampilan Video YouTube (Setelah di-klik) */
                <iframe
                  src={getYouTubeEmbedUrl(FEATURED_MEDIA.url)}
                  title={FEATURED_MEDIA.title}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}

            </div>
          </motion.div>

          <div className="mt-12 text-center">
            <Link href="/media" className="inline-flex items-center gap-3 text-white font-black bg-white/10 hover:bg-[#dc2626] border border-white/20 hover:border-transparent px-8 py-4 rounded-xl transition-all shadow-lg hover:-translate-y-1">
              Lihat Semua Media <ArrowRight size={20} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}