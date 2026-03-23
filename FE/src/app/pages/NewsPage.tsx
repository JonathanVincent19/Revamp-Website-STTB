"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Calendar,
  Tag,
  Clock,
  Loader2,
  AlertCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Newspaper,
  CalendarDays,
  History,
  Sparkles,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useNewsList, useEventsList } from "@/lib/hooks";
import Link from "next/link";

// ─── Timeline Item Component ────────────────────────────────────────────────
function TimelineItem({
  event,
  type,
  index,
}: {
  event: any;
  type: "past" | "upcoming";
  index: number;
}) {
  const eventDate = new Date(event.eventDate || event.publishedAt || event.createdAt);
  const day = eventDate.getDate().toString().padStart(2, "0");
  const month = eventDate.toLocaleDateString("id-ID", { month: "short" }).toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className={`group relative flex gap-4 p-4 rounded-2xl border transition-all duration-300 cursor-default ${type === "upcoming"
          ? "bg-gradient-to-r from-[#1e3a8a]/5 to-[#1e40af]/5 border-[#1e3a8a]/20 hover:border-[#1e3a8a]/50 hover:shadow-xl hover:shadow-[#1e3a8a]/10 hover:-translate-y-1"
          : "bg-white border-gray-100 hover:border-gray-200 hover:shadow-lg hover:shadow-gray-200/50 hover:-translate-y-1"
        }`}
    >
      {/* Date Badge */}
      <div
        className={`flex-shrink-0 w-16 h-16 rounded-xl flex flex-col items-center justify-center border ${type === "upcoming"
            ? "bg-[#1e3a8a] text-white border-[#1e3a8a] shadow-lg shadow-blue-900/20"
            : "bg-gray-50 text-gray-500 border-gray-200 group-hover:bg-[#dc2626] group-hover:text-white group-hover:border-[#dc2626] transition-colors"
          }`}
      >
        <span className="text-xl font-black leading-none drop-shadow-sm">
          {day}
        </span>
        <span className={`text-[10px] font-black tracking-widest mt-0.5 ${type === "upcoming" ? "text-blue-200" : ""}`}>
          {month}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <h4
          className={`font-extrabold text-sm leading-snug mb-1.5 line-clamp-2 transition-colors ${type === "upcoming"
              ? "text-[#1e3a8a] group-hover:text-[#dc2626]"
              : "text-gray-800 group-hover:text-[#dc2626]"
            }`}
        >
          {event.title}
        </h4>
        <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-gray-500">
          {event.location && (
            <span className="flex items-center gap-1.5 bg-gray-100 px-2 py-1 rounded-md text-gray-600">
              <MapPin size={12} className={type === "upcoming" ? "text-[#1e3a8a]" : ""} />
              <span className="truncate max-w-[120px]">{event.location}</span>
            </span>
          )}
          {event.startTime && (
            <span className="flex items-center gap-1.5">
              <Clock size={12} className={type === "upcoming" ? "text-[#1e3a8a]" : ""} />
              {event.startTime}
              {event.endTime && ` - ${event.endTime}`}
            </span>
          )}
          {!event.startTime && !event.location && (
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {eventDate.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
            </span>
          )}
        </div>
      </div>

      {/* Status Dot */}
      {type === "upcoming" && (
        <div className="flex-shrink-0 self-start mt-2 mr-1">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#dc2626] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#dc2626]"></span>
          </span>
        </div>
      )}
    </motion.div>
  );
}

// ─── Hero Carousel ──────────────────────────────────────────────────────────
function HeroCarousel({ newsItems }: { newsItems: any[] }) {
  const [current, setCurrent] = useState(0);
  const featured = newsItems.slice(0, 5);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % featured.length);
  }, [featured.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + featured.length) % featured.length);
  }, [featured.length]);

  useEffect(() => {
    if (featured.length <= 1) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, featured.length]);

  if (featured.length === 0) return null;

  return (
    <div className="relative w-full h-[420px] md:h-[500px] overflow-hidden rounded-[2rem] shadow-2xl group border-4 border-white/50">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src={featured[current].featuredImage || "https://images.unsplash.com/photo-1738949538943-e54722a44ffc"}
            alt={featured[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1930] via-[#0a1930]/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-1.5 bg-[#dc2626] text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4 shadow-lg">
              <Sparkles size={14} />
              {featured[current].category?.name || "Berita Utama"}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight max-w-3xl drop-shadow-md">
              {featured[current].title}
            </h2>
            <p className="text-blue-100/90 text-sm md:text-base font-medium mb-6 max-w-2xl line-clamp-2 leading-relaxed">
              {(featured[current].content || "").replace(/<[^>]*>/g, "").substring(0, 180)}...
            </p>
            <Link
              href={`/news/${featured[current].slug}`}
              className="inline-flex items-center gap-2 bg-white text-[#1e3a8a] px-6 py-3 rounded-xl font-black text-sm hover:bg-[#dc2626] hover:text-white transition-all shadow-xl hover:-translate-y-1"
            >
              BACA SELENGKAPNYA
              <ArrowRight size={18} strokeWidth={2.5} />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      {featured.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md border border-white/30 text-white p-3 rounded-full hover:bg-[#dc2626] transition-all opacity-0 group-hover:opacity-100 shadow-lg"
          >
            <ChevronLeft size={24} strokeWidth={3} />
          </button>
          <button
            onClick={next}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md border border-white/30 text-white p-3 rounded-full hover:bg-[#dc2626] transition-all opacity-0 group-hover:opacity-100 shadow-lg"
          >
            <ChevronRight size={24} strokeWidth={3} />
          </button>
        </>
      )}

      {/* Dots */}
      {featured.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {featured.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${i === current
                  ? "bg-[#dc2626] w-10 h-2.5 shadow-lg shadow-red-500/50"
                  : "bg-white/40 w-2.5 h-2.5 hover:bg-white/80"
                }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main News Page ─────────────────────────────────────────────────────────
export function NewsPage() {
  const { data: newsItems, loading, error } = useNewsList({ status: "published" });
  const { data: eventsData, loading: eventsLoading } = useEventsList();

  // Separate events into past and upcoming
  const now = new Date();
  const pastEvents = (eventsData || [])
    .filter((e) => new Date(e.eventDate) < now)
    .sort((a, b) => new Date(b.eventDate).getTime() - new Date(a.eventDate).getTime())
    .slice(0, 3);

  const upcomingEvents = (eventsData || [])
    .filter((e) => new Date(e.eventDate) >= now)
    .sort((a, b) => new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime())
    .slice(0, 3);

  return (
    <div className="pt-20 bg-[#f8fafc] min-h-screen">

      {/* ─── Hero Section ───────────────────────────────────────────── */}
      <section className="relative py-24 bg-gradient-to-br from-[#0a1930] via-[#1e3a8a] to-[#1e40af] overflow-hidden">

        {/* Latar Belakang Baru: Broadcast Waves (Gelombang Informasi) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,100 C20,50 80,50 50,0" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.3" />
            <path d="M30,100 C0,50 100,50 70,0" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
            <path d="M10,100 C-20,50 120,50 90,0" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.1" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="#dc2626" strokeWidth="0.5" opacity="0.4" strokeDasharray="2 2" />
          </svg>
        </div>

        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-4"
          >
            <div className="h-1 w-12 bg-[#dc2626] mx-auto mb-6 rounded-full" />
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-xs font-black tracking-[0.2em] uppercase mb-6 shadow-sm">
              <Newspaper size={16} />
              PUSAT INFORMASI STTB
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
              Berita & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-[#dc2626]">Acara</span>
            </h1>
            <p className="text-xl text-blue-100/90 max-w-2xl mx-auto font-light leading-relaxed">
              Dapatkan informasi terkini seputar kegiatan akademik, prestasi, dan perkembangan pelayanan di Sekolah Tinggi Teologi Bandung.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Timeline + Carousel Section ─────────────────────────────── */}
      <section className="relative py-16 bg-white overflow-hidden border-b border-gray-100">

        {/* Latar Belakang Baru: Chronology Tracks (Garis Waktu) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.06] text-[#1e3a8a]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="timeTracks" width="120" height="120" patternUnits="userSpaceOnUse">
                <line x1="20" y1="0" x2="20" y2="120" stroke="currentColor" strokeWidth="2" strokeDasharray="4 8" />
                <line x1="80" y1="0" x2="80" y2="120" stroke="currentColor" strokeWidth="1" />
                <circle cx="80" cy="60" r="4" fill="#dc2626" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#timeTracks)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10">

            {/* Left: Past Events */}
            <div className="xl:col-span-3 flex flex-col">
              <div className="flex items-center gap-3 mb-6 bg-gray-50/80 p-3 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                  <History size={20} className="text-gray-500" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-gray-800 uppercase tracking-widest">Sudah Berlalu</h3>
                  <p className="text-xs font-bold text-gray-400">Arsip Acara Selesai</p>
                </div>
              </div>

              {eventsLoading ? (
                <div className="flex justify-center py-8">
                  <Loader2 className="animate-spin text-gray-400" size={24} />
                </div>
              ) : pastEvents.length > 0 ? (
                <div className="space-y-4 flex-1">
                  {pastEvents.map((event, i) => (
                    <TimelineItem key={event.id} event={event} type="past" index={i} />
                  ))}
                </div>
              ) : (
                <div className="text-center flex flex-col items-center justify-center py-12 bg-gray-50 border border-gray-100 rounded-2xl h-full">
                  <History className="text-gray-300 mb-2" size={32} />
                  <p className="text-sm font-bold text-gray-400">Belum ada arsip acara</p>
                </div>
              )}
            </div>

            {/* Center: Featured Carousel */}
            <div className="xl:col-span-6 relative z-20">
              {loading ? (
                <div className="flex items-center justify-center h-[420px] md:h-[500px] bg-gray-50 border border-gray-100 rounded-[2rem]">
                  <Loader2 className="animate-spin text-[#1e3a8a]" size={40} />
                </div>
              ) : newsItems && newsItems.length > 0 ? (
                <HeroCarousel newsItems={newsItems} />
              ) : (
                <div className="flex items-center justify-center h-[420px] md:h-[500px] bg-gray-50 border border-gray-100 rounded-[2rem]">
                  <p className="text-gray-400 font-bold">Belum ada berita unggulan</p>
                </div>
              )}
            </div>

            {/* Right: Upcoming Events */}
            <div className="xl:col-span-3 flex flex-col">
              <div className="flex items-center gap-3 mb-6 bg-blue-50/80 p-3 rounded-2xl border border-blue-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-white border border-blue-200 flex items-center justify-center shadow-sm">
                  <CalendarDays size={20} className="text-[#1e3a8a]" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-[#1e3a8a] uppercase tracking-widest">Akan Datang</h3>
                  <p className="text-xs font-bold text-[#1e3a8a]/60">Agenda STTB Mendatang</p>
                </div>
              </div>

              {eventsLoading ? (
                <div className="flex justify-center py-8">
                  <Loader2 className="animate-spin text-[#1e3a8a]" size={24} />
                </div>
              ) : upcomingEvents.length > 0 ? (
                <div className="space-y-4 flex-1">
                  {upcomingEvents.map((event, i) => (
                    <TimelineItem key={event.id} event={event} type="upcoming" index={i} />
                  ))}
                </div>
              ) : (
                <div className="text-center flex flex-col items-center justify-center py-12 bg-blue-50/50 border border-blue-100 rounded-2xl h-full">
                  <CalendarDays className="text-[#1e3a8a]/30 mb-2" size={32} />
                  <p className="text-sm font-bold text-[#1e3a8a]/60">Belum ada acara terdekat</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── News Grid Section ──────────────────────────────────────── */}
      <section className="relative py-24 bg-[#f8fafc] overflow-hidden">

        {/* Latar Belakang Baru: Editorial Cascade (Pola Tumpukan Majalah) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] text-[#0a1930]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="editorialGrid" width="150" height="150" patternUnits="userSpaceOnUse" patternTransform="rotate(20)">
                <rect x="10" y="10" width="50" height="80" fill="currentColor" rx="4" />
                <rect x="70" y="30" width="40" height="60" fill="currentColor" rx="4" />
                <rect x="10" y="100" width="100" height="30" fill="currentColor" rx="4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#editorialGrid)" />
          </svg>
        </div>
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#1e3a8a] rounded-full blur-[150px] opacity-[0.05] pointer-events-none translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#dc2626] rounded-full blur-[150px] opacity-[0.05] pointer-events-none -translate-x-1/3 translate-y-1/4" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 gap-6"
          >
            <div className="text-center md:text-left">
              <span className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-5 py-2 rounded-full text-xs font-black tracking-[0.2em] uppercase mb-4 shadow-sm border border-blue-100">
                <Newspaper size={16} /> Arsip Berita
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#0a1930] tracking-tight">
                Artikel & Informasi Terkini
              </h2>
            </div>
            <div className="hidden md:block h-px flex-1 bg-gray-200 mx-8 relative top-[-10px]" />
          </motion.div>

          {/* Loading State */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="animate-spin text-[#1e3a8a] mb-4" size={48} />
              <p className="text-gray-500 font-bold">Memuat arsip berita...</p>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="flex flex-col items-center justify-center py-16 bg-red-50 border border-red-100 rounded-3xl max-w-2xl mx-auto shadow-sm">
              <AlertCircle className="text-[#dc2626] mb-4" size={48} />
              <p className="text-[#dc2626] font-black text-xl mb-1">Gagal memuat berita</p>
              <p className="text-sm font-medium text-red-700">{error}</p>
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && (!newsItems || newsItems.length === 0) && (
            <div className="text-center py-24 bg-white border border-gray-100 rounded-3xl shadow-sm">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Newspaper className="text-gray-300" size={48} />
              </div>
              <p className="text-gray-500 text-xl font-bold">Belum ada berita yang dipublikasikan.</p>
            </div>
          )}

          {/* News Grid - Modern Masonry-like */}
          {!loading && !error && newsItems && newsItems.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`group ${index === 0 ? "md:col-span-2" : ""}`}
                >
                  <Link href={`/news/${news.slug}`} className="block h-full">
                    <div
                      className={`bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(30,58,138,0.1)] transition-all duration-500 border border-gray-100 hover:border-[#1e3a8a]/30 h-full flex ${index === 0 ? "flex-col lg:flex-row" : "flex-col"} group-hover:-translate-y-2`}
                    >
                      {/* Image */}
                      <div className={`relative overflow-hidden shrink-0 ${index === 0 ? "h-64 lg:h-full lg:w-[45%]" : "h-56"}`}>
                        <ImageWithFallback
                          src={news.featuredImage || "https://images.unsplash.com/photo-1738949538943-e54722a44ffc"}
                          alt={news.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1930]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                        {/* Category Badge */}
                        <div className="absolute top-5 left-5 z-10">
                          <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-md text-[#1e3a8a] px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase shadow-sm">
                            <Tag size={12} strokeWidth={2.5} />
                            {news.category?.name || "Umum"}
                          </span>
                        </div>

                        {/* Latest Badge for First Item */}
                        {index === 0 && (
                          <div className="absolute top-5 right-5 z-10">
                            <span className="inline-flex items-center gap-1 bg-[#dc2626] text-white px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase shadow-lg">
                              <Sparkles size={12} />
                              Terbaru
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className={`p-6 md:p-8 flex-1 flex flex-col bg-white relative ${index === 0 ? "lg:justify-center" : ""}`}>
                        {/* Garis Aksen Hover */}
                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e3a8a] to-[#dc2626] transform ${index === 0 ? "lg:w-1 lg:h-full lg:origin-top lg:scale-y-0 group-hover:lg:scale-y-100 origin-left scale-x-0 group-hover:scale-x-100" : "origin-left scale-x-0 group-hover:scale-x-100"} transition-transform duration-500`} />

                        <div className="flex items-center gap-2 mb-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                          <Clock size={14} className="text-[#dc2626]" />
                          <span>
                            {news.publishedAt
                              ? new Date(news.publishedAt).toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" })
                              : new Date(news.createdAt).toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" })}
                          </span>
                        </div>

                        <h3 className={`font-black text-[#0a1930] mb-3 group-hover:text-[#1e3a8a] transition-colors leading-tight tracking-tight ${index === 0 ? "text-2xl md:text-3xl line-clamp-3" : "text-xl line-clamp-2"
                          }`}>
                          {news.title}
                        </h3>

                        <p className={`text-gray-500 leading-relaxed font-medium mb-6 flex-1 ${index === 0 ? "line-clamp-6 text-base" : "line-clamp-3 text-sm"
                          }`}>
                          {(news.content || "").replace(/<[^>]*>/g, "").substring(0, index === 0 ? 500 : 150)}...
                        </p>

                        <div className="flex items-center gap-2 text-[#dc2626] font-black text-sm group-hover:text-[#1e3a8a] transition-colors mt-auto">
                          BACA ARTIKEL
                          <ArrowRight size={16} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}