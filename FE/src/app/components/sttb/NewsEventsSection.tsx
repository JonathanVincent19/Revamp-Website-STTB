"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Calendar, ArrowRight, Clock, Tag, Loader2, AlertCircle, Radio } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useNewsList, useEventsList } from "@/lib/hooks";

export function NewsEventsSection() {
  const { data: newsData, loading: newsLoading, error: newsError } = useNewsList({ pageSize: 3, status: "published" });
  const { data: eventsData, loading: eventsLoading, error: eventsError } = useEventsList();

  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* --- BACKGROUND SHAPES: EDITORIAL & BROADCAST --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-between items-center">
        {/* Pola Garis Diagonal (Editorial Stripes) */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="editorial_stripes" width="40" height="40" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="40" stroke="#1e3a8a" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#editorial_stripes)" />
          </svg>
        </div>

        {/* Glow Biru & Watermark Radio/Broadcast di Kiri Atas */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#1e3a8a] opacity-[0.03] rounded-full blur-[100px]" />
        <div className="absolute top-10 -left-10 text-[#1e3a8a] opacity-[0.03] -rotate-12">
          <Radio size={400} strokeWidth={1} />
        </div>

        {/* Glow Merah di Kanan Bawah */}
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[#dc2626] opacity-[0.03] rounded-full blur-[100px]" />

        {/* Tanda Kutip Koran Abstrak Kanan Atas */}
        <div className="absolute top-20 right-10 text-[#1e3a8a] opacity-[0.02] font-serif text-[300px] leading-none select-none">
          "
        </div>
      </div>
      {/* ------------------------------------------------ */}

      <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* --- NEWS SECTION (Kiri - Lebar 7 Kolom) --- */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="flex items-end justify-between mb-10 border-b-2 border-gray-100 pb-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-1 bg-[#dc2626]" />
                  <span className="text-[#1e3a8a] font-bold text-sm tracking-widest uppercase">
                    BERITA TERKINI
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] tracking-tight">
                  Berita Kampus
                </h2>
              </div>
              <Link
                href="/news"
                className="hidden md:inline-flex items-center gap-2 bg-gray-50 text-[#1e3a8a] px-5 py-2.5 rounded-xl font-bold hover:bg-[#1e3a8a] hover:text-white transition-all group shadow-sm"
              >
                Semua Berita
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Loading State */}
            {newsLoading && (
              <div className="flex flex-col items-center justify-center py-20 bg-gray-50/50 rounded-3xl border border-gray-100">
                <Loader2 className="animate-spin text-[#1e3a8a] mb-4" size={40} />
                <span className="text-gray-500 font-medium">Mengambil berita terbaru...</span>
              </div>
            )}

            {/* Error State */}
            {newsError && !newsLoading && (
              <div className="flex flex-col items-center justify-center py-16 bg-red-50 rounded-3xl border border-red-100">
                <AlertCircle className="text-[#dc2626] mb-3" size={32} />
                <span className="text-[#dc2626] font-semibold">Gagal memuat berita.</span>
                <span className="text-sm text-red-400 mt-1">Silakan muat ulang halaman.</span>
              </div>
            )}

            {/* Empty State */}
            {!newsLoading && !newsError && (!newsData || newsData.length === 0) && (
              <div className="text-center py-20 bg-gray-50 rounded-3xl border border-gray-100">
                <span className="text-4xl block mb-3">📰</span>
                <p className="text-gray-500 font-medium">Belum ada publikasi berita terbaru.</p>
              </div>
            )}

            {/* News Cards (Editorial Style) */}
            {!newsLoading && !newsError && newsData && newsData.length > 0 && (
              <div className="space-y-8">
                {newsData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-white rounded-3xl overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row h-full">
                      {/* Image */}
                      <div className="relative md:w-2/5 h-56 md:h-auto overflow-hidden">
                        <ImageWithFallback
                          src={item.featuredImage || "https://images.unsplash.com/photo-1738949538943-e54722a44ffc"}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:hidden" />
                        {index === 0 && (
                          <div className="absolute top-4 right-4 md:left-4 md:right-auto">
                            <span className="bg-white/90 backdrop-blur-md text-[#dc2626] px-3 py-1.5 rounded-md text-xs font-black shadow-lg uppercase tracking-wider">
                              Baru
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-[#1e3a8a] px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider">
                            <Tag size={12} strokeWidth={2.5} />
                            {item.category?.name || "Umum"}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-400">
                            <Clock size={14} />
                            {item.publishedAt
                              ? new Date(item.publishedAt).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })
                              : new Date(item.createdAt).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
                          </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-black text-[#020817] mb-3 leading-snug group-hover:text-[#1e3a8a] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 font-light leading-relaxed mb-6 line-clamp-2">
                          {(item.content || "").replace(/<[^>]*>/g, "").substring(0, 150)}...
                        </p>
                        <Link
                          href={`/news/${item.slug}`}
                          className="inline-flex items-center gap-2 text-[#dc2626] font-bold text-sm hover:text-[#1e3a8a] transition-colors mt-auto group/link"
                        >
                          Baca Selengkapnya
                          <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            <div className="mt-8 md:hidden">
              <Link
                href="/news"
                className="flex items-center justify-center gap-2 bg-[#1e3a8a] text-white px-6 py-3.5 rounded-xl font-bold shadow-lg"
              >
                Lihat Semua Berita
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* --- EVENTS SIDEBAR (Kanan - Lebar 5 Kolom) --- */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="bg-gradient-to-b from-gray-50 to-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-1 bg-[#1e3a8a]" />
                  <span className="text-[#dc2626] font-bold text-sm tracking-widest uppercase">
                    AGENDA KAMPUS
                  </span>
                </div>
                <h2 className="text-3xl font-black text-[#1e3a8a] tracking-tight">
                  Acara Mendatang
                </h2>
              </div>

              {/* Loading */}
              {eventsLoading && (
                <div className="flex flex-col items-center justify-center py-16">
                  <Loader2 className="animate-spin text-[#dc2626] mb-3" size={32} />
                  <span className="text-gray-500 text-sm">Sinkronisasi jadwal...</span>
                </div>
              )}

              {/* Error */}
              {eventsError && !eventsLoading && (
                <div className="bg-red-50 rounded-2xl p-5 text-center border border-red-100">
                  <AlertCircle className="mx-auto text-[#dc2626] mb-2" size={24} />
                  <span className="text-sm font-medium text-[#dc2626]">Gagal memuat agenda.</span>
                </div>
              )}

              {/* Empty */}
              {!eventsLoading && !eventsError && (!eventsData || eventsData.length === 0) && (
                <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm">
                  <Calendar className="mx-auto text-gray-300 mb-3" size={32} />
                  <p className="text-sm font-medium text-gray-500">Tidak ada jadwal terdekat.</p>
                </div>
              )}

              {/* Events List (Timeline Style) */}
              {!eventsLoading && !eventsError && eventsData && eventsData.length > 0 && (
                <div className="relative">
                  {/* Garis Vertikal Timeline */}
                  <div className="absolute left-[38px] top-4 bottom-4 w-px bg-gray-200" />

                  <div className="space-y-6 relative z-10">
                    {eventsData.slice(0, 4).map((event, index) => {
                      const eventDate = new Date(event.eventDate);
                      const day = eventDate.getDate().toString().padStart(2, '0');
                      const month = eventDate.toLocaleDateString("id-ID", { month: "short" });
                      const timeStr = event.startTime
                        ? `${event.startTime}${event.endTime ? ` - ${event.endTime}` : ""}`
                        : eventDate.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });

                      return (
                        <motion.div
                          key={event.id}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex gap-5 group"
                        >
                          {/* Date Node */}
                          <div className="flex-shrink-0 w-20 h-20 bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col items-center justify-center relative z-10 group-hover:border-[#1e3a8a] transition-colors">
                            <span className="text-sm font-bold text-gray-400 uppercase leading-none mb-1">{month}</span>
                            <span className="text-2xl font-black text-[#dc2626] leading-none">{day}</span>
                          </div>

                          {/* Event Details */}
                          <div className="flex-1 pt-1 pb-4">
                            <h4 className="font-bold text-[#020817] mb-2 leading-snug group-hover:text-[#1e3a8a] transition-colors">
                              {event.title}
                            </h4>
                            <div className="space-y-1.5 text-sm text-gray-500 font-medium">
                              <div className="flex items-center gap-2.5">
                                <Clock size={14} className="text-[#dc2626]" />
                                <span>{timeStr}</span>
                              </div>
                              {event.location && (
                                <div className="flex items-center gap-2.5">
                                  <Calendar size={14} className="text-[#dc2626]" />
                                  <span className="line-clamp-1">{event.location}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}

              <Link
                href="/news"
                className="mt-8 flex items-center justify-center gap-2 w-full bg-white border-2 border-gray-200 text-gray-600 px-6 py-3.5 rounded-xl font-bold hover:border-[#1e3a8a] hover:text-[#1e3a8a] hover:bg-blue-50 transition-all shadow-sm"
              >
                Kalender Lengkap
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
} 