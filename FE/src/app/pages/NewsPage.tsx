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
  const year = eventDate.getFullYear();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className={`group relative flex gap-4 p-4 rounded-2xl border transition-all duration-300 cursor-default ${
        type === "upcoming"
          ? "bg-gradient-to-r from-[#1e3a8a]/5 to-[#1e40af]/5 border-[#1e3a8a]/20 hover:border-[#1e3a8a]/50 hover:shadow-lg hover:shadow-blue-500/5"
          : "bg-white border-gray-100 hover:border-gray-200 hover:shadow-lg hover:shadow-gray-200/50"
      }`}
    >
      {/* Date Badge */}
      <div
        className={`flex-shrink-0 w-16 h-16 rounded-xl flex flex-col items-center justify-center ${
          type === "upcoming"
            ? "bg-[#1e3a8a] text-white shadow-lg shadow-blue-900/20"
            : "bg-gray-100 text-gray-600"
        }`}
      >
        <span className={`text-xl font-black leading-none ${type === "upcoming" ? "text-white" : "text-gray-800"}`}>
          {day}
        </span>
        <span className={`text-[10px] font-bold tracking-wider ${type === "upcoming" ? "text-blue-200" : "text-gray-500"}`}>
          {month}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4
          className={`font-bold text-sm leading-tight mb-1.5 line-clamp-2 transition-colors ${
            type === "upcoming"
              ? "text-[#1e3a8a] group-hover:text-[#dc2626]"
              : "text-gray-800 group-hover:text-[#1e3a8a]"
          }`}
        >
          {event.title}
        </h4>
        <div className="flex items-center gap-3 text-xs text-gray-500">
          {event.location && (
            <span className="flex items-center gap-1">
              <MapPin size={11} />
              <span className="truncate max-w-[120px]">{event.location}</span>
            </span>
          )}
          {event.startTime && (
            <span className="flex items-center gap-1">
              <Clock size={11} />
              {event.startTime}
              {event.endTime && ` - ${event.endTime}`}
            </span>
          )}
          {!event.startTime && !event.location && (
            <span className="flex items-center gap-1">
              <Calendar size={11} />
              {eventDate.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
            </span>
          )}
        </div>
      </div>

      {/* Status Dot */}
      {type === "upcoming" && (
        <div className="flex-shrink-0 self-center">
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
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, featured.length]);

  if (featured.length === 0) return null;

  return (
    <div className="relative w-full h-[420px] md:h-[480px] overflow-hidden rounded-2xl group">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src={featured[current].featuredImage || "https://images.unsplash.com/photo-1738949538943-e54722a44ffc"}
            alt={featured[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1b3d]/90 via-[#1e3a8a]/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-1.5 bg-[#dc2626] text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
              <Sparkles size={12} />
              {featured[current].category?.name || "Berita Utama"}
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-white mb-3 leading-tight max-w-2xl">
              {featured[current].title}
            </h2>
            <p className="text-blue-100 text-sm md:text-base mb-4 max-w-xl line-clamp-2">
              {(featured[current].content || "").replace(/<[^>]*>/g, "").substring(0, 150)}...
            </p>
            <Link
              href={`/news/${featured[current].slug}`}
              className="inline-flex items-center gap-2 bg-white text-[#1e3a8a] px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-[#dc2626] hover:text-white transition-all shadow-lg"
            >
              BACA SELENGKAPNYA
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      {featured.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-2.5 rounded-full hover:bg-white/25 transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-2.5 rounded-full hover:bg-white/25 transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={22} />
          </button>
        </>
      )}

      {/* Dots */}
      {featured.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {featured.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "bg-white w-8 h-2.5"
                  : "bg-white/40 w-2.5 h-2.5 hover:bg-white/70"
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
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* ─── Hero Section ───────────────────────────────────────────── */}
      <section className="relative py-16 bg-gradient-to-br from-[#0f1b3d] via-[#1e3a8a] to-[#1e40af] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-4"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-blue-100 px-4 py-1.5 rounded-full text-sm tracking-wider mb-4">
              <Newspaper size={14} />
              PUSAT INFORMASI STTB
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              Berita & <span className="text-[#FF4D4D]">Acara</span>
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Informasi terkini seputar kegiatan, prestasi, dan perkembangan di Sekolah Tinggi Teologi Bandung
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Timeline + Carousel Section ─────────────────────────────── */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
            {/* Left: Past Events */}
            <div className="xl:col-span-3">
              <div className="flex items-center gap-2 mb-5">
                <div className="p-2 rounded-lg bg-gray-100">
                  <History size={18} className="text-gray-600" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-gray-800 uppercase tracking-wider">Sudah Berlangsung</h3>
                  <p className="text-xs text-gray-400">Acara yang telah selesai</p>
                </div>
              </div>

              {eventsLoading ? (
                <div className="flex justify-center py-8">
                  <Loader2 className="animate-spin text-gray-400" size={20} />
                </div>
              ) : pastEvents.length > 0 ? (
                <div className="space-y-3">
                  {pastEvents.map((event, i) => (
                    <TimelineItem key={event.id} event={event} type="past" index={i} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 bg-gray-50 rounded-xl">
                  <p className="text-xs text-gray-400">Belum ada acara yang berlalu</p>
                </div>
              )}
            </div>

            {/* Center: Featured Carousel */}
            <div className="xl:col-span-6">
              {loading ? (
                <div className="flex items-center justify-center h-[420px] bg-gray-50 rounded-2xl">
                  <Loader2 className="animate-spin text-[#1e3a8a]" size={36} />
                </div>
              ) : newsItems && newsItems.length > 0 ? (
                <HeroCarousel newsItems={newsItems} />
              ) : (
                <div className="flex items-center justify-center h-[420px] bg-gray-50 rounded-2xl">
                  <p className="text-gray-400">Belum ada berita yang ditampilkan</p>
                </div>
              )}
            </div>

            {/* Right: Upcoming Events */}
            <div className="xl:col-span-3">
              <div className="flex items-center gap-2 mb-5">
                <div className="p-2 rounded-lg bg-[#1e3a8a]/10">
                  <CalendarDays size={18} className="text-[#1e3a8a]" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-[#1e3a8a] uppercase tracking-wider">Akan Datang</h3>
                  <p className="text-xs text-gray-400">Acara yang akan berlangsung</p>
                </div>
              </div>

              {eventsLoading ? (
                <div className="flex justify-center py-8">
                  <Loader2 className="animate-spin text-[#1e3a8a]" size={20} />
                </div>
              ) : upcomingEvents.length > 0 ? (
                <div className="space-y-3">
                  {upcomingEvents.map((event, i) => (
                    <TimelineItem key={event.id} event={event} type="upcoming" index={i} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 bg-[#1e3a8a]/5 rounded-xl">
                  <p className="text-xs text-gray-400">Belum ada acara mendatang</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── News Grid Section ──────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4"
          >
            <div>
              <span className="inline-block bg-[#dbeafe] text-[#1e3a8a] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-3">
                SEMUA BERITA
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#1e3a8a]">
                Artikel & Informasi Terkini
              </h2>
            </div>
          </motion.div>

          {/* Loading State */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="animate-spin text-[#1e3a8a] mb-4" size={40} />
              <p className="text-gray-500">Memuat berita...</p>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="flex flex-col items-center justify-center py-16 bg-red-50 rounded-xl max-w-2xl mx-auto">
              <AlertCircle className="text-[#dc2626] mb-3" size={40} />
              <p className="text-[#dc2626] font-semibold mb-1">Gagal memuat berita</p>
              <p className="text-sm text-gray-500">{error}</p>
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && (!newsItems || newsItems.length === 0) && (
            <div className="text-center py-20">
              <Newspaper className="mx-auto text-gray-300 mb-4" size={56} />
              <p className="text-gray-500 text-lg">Belum ada berita yang dipublikasikan.</p>
            </div>
          )}

          {/* News Grid - Masonry-like */}
          {!loading && !error && newsItems && newsItems.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsItems.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className={`group ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                >
                  <Link href={`/news/${news.slug}`} className="block h-full">
                    <div
                      className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#1e3a8a]/20 h-full flex flex-col`}
                    >
                      {/* Image */}
                      <div className={`relative overflow-hidden ${index === 0 ? "h-64 md:h-80" : "h-52"}`}>
                        <ImageWithFallback
                          src={news.featuredImage || "https://images.unsplash.com/photo-1738949538943-e54722a44ffc"}
                          alt={news.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center gap-1.5 bg-[#1e3a8a]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[11px] font-bold">
                            <Tag size={10} />
                            {news.category?.name || "Umum"}
                          </span>
                        </div>

                        {/* Latest Badge */}
                        {index === 0 && (
                          <div className="absolute top-4 right-4">
                            <span className="inline-flex items-center gap-1 bg-[#dc2626] text-white px-3 py-1 rounded-full text-[11px] font-bold">
                              <Sparkles size={10} />
                              Terbaru
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-3 text-xs text-gray-400">
                          <Clock size={12} />
                          <span>
                            {news.publishedAt
                              ? new Date(news.publishedAt).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })
                              : new Date(news.createdAt).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
                          </span>

                        </div>

                        <h3 className={`font-bold text-[#1e3a8a] mb-2 group-hover:text-[#dc2626] transition-colors leading-snug ${
                          index === 0 ? "text-xl md:text-2xl line-clamp-3" : "text-lg line-clamp-2"
                        }`}>
                          {news.title}
                        </h3>

                        <p className={`text-gray-500 leading-relaxed mb-4 flex-1 ${
                          index === 0 ? "line-clamp-4 text-sm" : "line-clamp-2 text-sm"
                        }`}>
                          {(news.content || "").replace(/<[^>]*>/g, "").substring(0, 250)}...
                        </p>

                        <div className="flex items-center gap-1.5 text-[#1e3a8a] font-bold text-sm group-hover:text-[#dc2626] transition-colors mt-auto">
                          Baca Selengkapnya
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
