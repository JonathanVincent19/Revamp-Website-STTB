"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  BookOpen,
  Search,
  Library,
  Clock,
  ArrowRight,
  Database,
  BookMarked,
  Unlock,
  ExternalLink,
  Quote,
  MessageCircle,
  Sparkles,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// ==========================================
// 1. DUMMY DATA (Siap diganti dengan API GET)
// ==========================================

const E_RESOURCES = [
  {
    id: "ebsco",
    title: "Koleksi E-Book via EBSCO",
    desc: "Akses ribuan e-book dan jurnal akademik multi-disiplin berskala internasional.",
    icon: Database,
    color: "bg-[#1e3a8a]",
    url: "#"
  },
  {
    id: "atla",
    title: "Jurnal Teologi ATLA",
    desc: "Database utama untuk studi agama dan teologi dari American Theological Library Association.",
    icon: BookMarked,
    color: "bg-[#dc2626]",
    url: "#"
  },
  {
    id: "open-access",
    title: "Open Access E-Book",
    desc: "Kumpulan koleksi buku elektronik dan literatur teologi yang dapat diakses secara gratis.",
    icon: Unlock,
    color: "bg-emerald-600",
    url: "#"
  }
];

const ONLINE_SOURCES = [
  "PERPUSNAS", "OADTL", "OJS / TRANSFORMATIO", "GARUDA", "SINTA", "GLOBETHICS", "SCIMAGO"
];

const FEATURED_BOOKS = [
  {
    id: "1",
    title: "A Christian Education in the Virtues",
    author: "James Arthur",
    desc: "Membahas hubungan antara natur manusia dan pembentukan karakter berdasarkan antropologi Kristen.",
    cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600",
    category: "Pendidikan Kristen",
    date: "Feb 2026"
  },
  {
    id: "2",
    title: "Christian Bioethics: A Guide",
    author: "C. Ben Mitchell",
    desc: "Menjawab isu-isu pluralisme moral dan polarisasi dengan menarik perhatian pada karakter transenden dari kebaikan.",
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600",
    category: "Etika Kristen",
    date: "Jan 2026"
  },
  {
    id: "3",
    title: "Misi Allah dan Tugas Gereja",
    author: "Christopher J.H. Wright",
    desc: "Buku esensial yang mengupas secara mendalam tentang teologi misi dan bagaimana gereja berperan di dalamnya.",
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600",
    category: "Misiologi",
    date: "Des 2025"
  }
];

// ==========================================
// 2. MAIN COMPONENT PAGE
// ==========================================

export function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic untuk redirect ke OPAC Library STTB
    // window.open(`https://library.sttb.ac.id/index.php?keywords=${searchQuery}`, '_blank');
    alert(`Mencari katalog untuk: ${searchQuery}`);
  };

  return (
    <div className="pt-20 bg-[#f8fafc] min-h-screen pb-32">

      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-48 overflow-hidden bg-gradient-to-br from-[#0a1930] via-[#1e3a8a] to-[#1e40af]">

        {/* Latar Belakang: Grid Kertas Modern */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="libraryGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
                <circle cx="60" cy="60" r="2" fill="white" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#libraryGrid)" />
          </svg>
        </div>

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[100px] pointer-events-none -translate-x-1/4 translate-y-1/4" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="h-1 w-12 bg-[#dc2626] mx-auto mb-6 rounded-full" />
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-xs font-black tracking-[0.2em] uppercase mb-6 shadow-sm">
              <Library size={16} />
              Sumber Daya Akademik
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1] drop-shadow-md">
              Perpustakaan <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-[#dc2626]">Transformatio</span>
            </h1>
            <p className="text-xl text-blue-100 font-light leading-relaxed max-w-2xl mx-auto">
              Menjadi wadah transformasi pemikiran dan kehidupan melalui penyediaan literatur teologi dan akademik yang komprehensif.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- FLOATING OPAC SEARCH (ONLINE PUBLIC ACCESS CATALOGUE) --- */}
      <section className="relative z-20 -mt-24 mb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_30px_60px_rgba(10,25,48,0.12)] border border-gray-100 relative overflow-hidden"
          >
            {/* Dekorasi Garis Merah di atas kartu */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#1e3a8a] to-[#dc2626]" />

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 w-full">
                <h2 className="text-2xl md:text-3xl font-black text-[#0a1930] mb-2 tracking-tight">Cari Katalog Buku (OPAC)</h2>
                <p className="text-gray-500 font-medium">Temukan lebih dari 50.000 koleksi fisik dan literatur di perpustakaan kami.</p>
              </div>

              <form onSubmit={handleSearch} className="w-full md:w-[60%] relative group">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Masukkan judul buku, pengarang, atau subjek..."
                  className="w-full bg-[#f8fafc] border-2 border-gray-200 rounded-2xl py-5 pl-14 pr-36 font-bold text-gray-800 focus:outline-none focus:bg-white focus:border-[#1e3a8a]/30 focus:ring-4 focus:ring-[#1e3a8a]/5 transition-all"
                />
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1e3a8a] transition-colors" size={24} />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 bg-[#1e3a8a] text-white px-6 rounded-xl font-black text-sm hover:bg-[#0a1930] transition-colors shadow-md"
                >
                  CARI
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- INFO, QUOTE & OPERATIONAL HOURS --- */}
      <section className="py-12 bg-[#f8fafc]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Philosophical Quote */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="h-full bg-blue-50/50 rounded-[2rem] p-10 md:p-14 border border-blue-100 relative overflow-hidden"
              >
                <Quote className="absolute top-8 left-8 text-blue-200/50 rotate-180" size={120} strokeWidth={1} />
                <div className="relative z-10 h-full flex flex-col justify-center">
                  <p className="text-2xl md:text-3xl text-[#1e3a8a] font-black leading-snug tracking-tight mb-8">
                    "Semua yang benar, semua yang mulia, semua yang adil, semua yang suci, semua yang manis, semua yang sedap didengar, semua yang disebut kebajikan dan patut dipuji, <span className="text-[#dc2626]">pikirkanlah semuanya itu</span>."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-0.5 w-12 bg-[#dc2626]" />
                    <span className="font-bold text-gray-600 uppercase tracking-widest text-sm">Filipi 4:8</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Info & Operational Hours */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="h-full bg-white rounded-[2rem] p-10 shadow-lg border border-gray-100 flex flex-col justify-center"
              >
                <h3 className="text-2xl font-black text-[#0a1930] mb-8 tracking-tight">Informasi Layanan</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-200">
                      <Clock className="text-[#1e3a8a]" size={20} strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Jam Operasional</p>
                      <p className="font-bold text-gray-800">Senin - Jumat: 08.00 - 17.00 WIB</p>
                      <p className="text-sm font-medium text-gray-500">Sabtu, Minggu & Hari Libur: Tutup</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-red-100">
                      <MessageCircle className="text-[#dc2626]" size={20} strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Layanan Pustaka Pintar</p>
                      <p className="font-bold text-gray-800">WhatsApp: 0851-7305-7735</p>
                      <p className="text-sm font-medium text-gray-500">Peminjaman di tempat / via kurir</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* --- E-RESOURCES & DIGITAL LIBRARY --- */}
      <section className="relative py-24 bg-white border-t border-gray-100 overflow-hidden">
        {/* Halftone Dot Pattern Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] text-[#0a1930]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="halftone" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#halftone)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#dbeafe] text-[#1e3a8a] px-5 py-2.5 rounded-full text-xs font-black tracking-[0.2em] uppercase mb-4 shadow-sm border border-blue-100">
              Perpustakaan Digital
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0a1930] tracking-tight mb-4">
              Sumber Daya Elektronik
            </h2>
            <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto">Akses ribuan literatur akademik, jurnal, dan e-book kapan saja dan di mana saja untuk mendukung penelitian Anda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {E_RESOURCES.map((resource, idx) => (
              <motion.a
                href={resource.url}
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-[#f8fafc] rounded-3xl p-8 border border-gray-200 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-transparent transition-all duration-300 flex flex-col h-full relative overflow-hidden"
              >
                {/* Decorative Blur Bubble */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 ${resource.color} rounded-full blur-[40px] opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg mb-8 group-hover:scale-110 transition-transform duration-300 ${resource.color}`}>
                  <resource.icon size={28} strokeWidth={2} />
                </div>

                <h3 className="text-2xl font-black text-[#0a1930] mb-3 tracking-tight">{resource.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed flex-1">{resource.desc}</p>

                <div className="mt-8 flex items-center gap-2 text-sm font-black tracking-widest uppercase text-gray-400 group-hover:text-[#1e3a8a] transition-colors">
                  Kunjungi Tautan <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Online Sources Marquee/Grid */}
          <div className="mt-20 pt-12 border-t border-gray-100">
            <h4 className="text-center font-bold text-gray-400 text-sm tracking-widest uppercase mb-8">Sumber Database Online Lainnya</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {ONLINE_SOURCES.map((source, idx) => (
                <span key={idx} className="bg-white border border-gray-200 text-gray-600 px-6 py-3 rounded-xl font-black text-sm tracking-widest hover:border-[#1e3a8a] hover:text-[#1e3a8a] transition-colors cursor-pointer shadow-sm hover:shadow-md">
                  {source}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW ARRIVALS / FEATURED BOOKS --- */}
      <section className="py-24 bg-[#0a1930] relative overflow-hidden">
        {/* Latar Belakang Garis Miring Besar */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] origin-bottom-right pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[#dc2626] font-black text-xs tracking-[0.2em] uppercase mb-3 block">Koleksi Terkini</span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                Buku & Jurnal <br /> <span className="text-blue-300">Rekomendasi</span>
              </h2>
            </div>
            <Link href="#" className="hidden md:flex items-center gap-2 text-white font-bold bg-white/10 hover:bg-[#dc2626] px-6 py-3 rounded-xl transition-colors">
              Lihat Semua Koleksi <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_BOOKS.map((book, idx) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-[2rem] p-4 border border-white/10 hover:bg-white hover:border-white transition-colors duration-500">
                  {/* Book Cover Image */}
                  <div className="w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden relative mb-6 shadow-xl">
                    <ImageWithFallback
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#dc2626] text-white px-3 py-1.5 rounded-lg text-[10px] font-black tracking-widest uppercase shadow-lg">
                      {book.category}
                    </div>
                  </div>

                  {/* Book Info */}
                  <div className="px-2 pb-4">
                    <div className="flex items-center gap-2 text-blue-200 group-hover:text-gray-400 text-xs font-bold mb-2 transition-colors">
                      <Clock size={12} /> {book.date}
                    </div>
                    <h3 className="font-black text-xl text-white group-hover:text-[#0a1930] mb-2 leading-snug transition-colors line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-blue-200 font-bold text-sm mb-4 group-hover:text-[#1e3a8a] transition-colors">
                      Oleh: {book.author}
                    </p>
                    <p className="text-gray-400 text-sm line-clamp-2 font-medium group-hover:text-gray-600 transition-colors">
                      {book.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Link */}
          <div className="mt-10 md:hidden text-center">
            <Link href="#" className="inline-flex items-center justify-center gap-2 text-white font-bold bg-white/10 hover:bg-[#dc2626] px-8 py-4 w-full rounded-xl transition-colors">
              Lihat Semua Koleksi <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}