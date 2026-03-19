"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  X,
  Loader2,
  AlertCircle,
  Newspaper,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Share2,
  Camera,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useNewsDetail, useNewsList } from "@/lib/hooks";
import Link from "next/link";

const API_IMAGE_BASE = "http://localhost:5067";

// ─── Photo Lightbox ─────────────────────────────────────────────────────────
function PhotoLightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-[#0a1930]/95 backdrop-blur-md flex items-center justify-center"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 bg-white/10 text-white/70 hover:bg-[#dc2626] hover:text-white p-3 rounded-full transition-all z-10"
        >
          <X size={24} strokeWidth={2.5} />
        </button>

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 text-white p-4 rounded-full hover:bg-[#dc2626] hover:border-transparent transition-all shadow-xl z-10"
            >
              <ChevronLeft size={28} strokeWidth={2.5} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 text-white p-4 rounded-full hover:bg-[#dc2626] hover:border-transparent transition-all shadow-xl z-10"
            >
              <ChevronRight size={28} strokeWidth={2.5} />
            </button>
          </>
        )}

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-6xl max-h-[85vh] w-full px-4 flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full h-[75vh] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/10">
            <img
              src={images[currentIndex]}
              alt={`Dokumentasi ${currentIndex + 1}`}
              className="w-full h-full object-contain bg-black/50"
            />
          </div>
          <div className="mt-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 text-white font-bold text-sm tracking-widest uppercase">
            <Camera size={16} />
            Media {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Main Detail Page ───────────────────────────────────────────────────────
export function NewsDetailPage({ slug }: { slug: string }) {
  const { data: news, loading, error } = useNewsDetail(slug);
  const { data: relatedNews } = useNewsList({ status: "published", pageSize: 4 });

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const extractImages = (content: string): string[] => {
    const matches = content.match(/<img[^>]+src=["']([^"']+)["']/gi) || [];
    return matches.map((m) => {
      const srcMatch = m.match(/src=["']([^"']+)["']/);
      return srcMatch ? srcMatch[1] : "";
    }).filter(Boolean);
  };

  const getFullImageUrl = (url?: string) => {
    if (!url) return "";
    if (url.startsWith("http")) return url;
    return `${API_IMAGE_BASE}${url.startsWith("/") ? "" : "/"}${url}`;
  };

  const contentImages = news?.content ? extractImages(news.content) : [];
  const allImages = [
    ...(news?.featuredImage ? [getFullImageUrl(news.featuredImage)] : []),
    ...contentImages.map(url => getFullImageUrl(url)),
  ].filter((v, i, a) => a.indexOf(v) === i);

  const cleanContent = (html: string) => {
    return html
      .replace(/<img[^>]*>/gi, "")
      .replace(/<p>\s*<\/p>/gi, "");
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const nextImage = () => setLightboxIndex((i) => (i + 1) % allImages.length);
  const prevImage = () => setLightboxIndex((i) => (i - 1 + allImages.length) % allImages.length);

  const filteredRelated = (relatedNews || []).filter((n) => n.slug !== slug).slice(0, 3);

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: news?.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link artikel disalin ke clipboard!");
    }
  };

  // ─── Loading State ────────────────────────────────
  if (loading) {
    return (
      <div className="pt-20 min-h-screen bg-[#f8fafc] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="animate-spin text-[#1e3a8a] mx-auto mb-4" size={48} />
          <p className="text-gray-500 font-bold tracking-widest uppercase text-sm">Memuat Artikel...</p>
        </div>
      </div>
    );
  }

  // ─── Error State ──────────────────────────────────
  if (error || !news) {
    return (
      <div className="pt-20 min-h-screen bg-[#f8fafc] flex items-center justify-center">
        <div className="text-center max-w-md bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100">
          <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="text-[#dc2626]" size={40} />
          </div>
          <h2 className="text-3xl font-black text-[#0a1930] mb-3 tracking-tight">Artikel Tidak Ditemukan</h2>
          <p className="text-gray-500 mb-8 font-medium">{error || "Berita yang Anda cari tidak tersedia atau mungkin telah dihapus."}</p>
          <Link
            href="/news"
            className="inline-flex items-center justify-center gap-2 bg-[#1e3a8a] text-white px-8 py-4 rounded-xl font-black hover:bg-[#dc2626] hover:-translate-y-1 transition-all shadow-lg w-full"
          >
            <ArrowLeft size={20} strokeWidth={2.5} />
            Kembali ke Berita
          </Link>
        </div>
      </div>
    );
  }

  const publishDate = news.publishedAt
    ? new Date(news.publishedAt)
    : new Date(news.createdAt);

  return (
    <>
      {/* Lightbox */}
      {lightboxOpen && allImages.length > 0 && (
        <PhotoLightbox
          images={allImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}

      <div className="pt-20 bg-[#f8fafc] min-h-screen pb-32">

        {/* ─── Hero Banner ──────────────────────────────── */}
        <section className="relative h-[65vh] min-h-[500px] overflow-hidden flex flex-col justify-end pb-12">
          <div className="absolute inset-0 z-0">
            <ImageWithFallback
              src={news.featuredImage || "https://images.unsplash.com/photo-1738949538943-e54722a44ffc"}
              alt={news.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay yang rapi */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1930] via-[#0a1930]/70 to-[#0a1930]/10" />
          </div>

          {/* Top Bar Actions */}
          <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-full text-xs font-black tracking-widest uppercase hover:bg-[#dc2626] hover:border-transparent transition-all shadow-lg"
            >
              <ArrowLeft size={16} strokeWidth={3} />
              Kembali
            </Link>

            <button
              onClick={handleShare}
              className="inline-flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-[#1e3a8a] hover:border-transparent transition-all shadow-lg"
              title="Bagikan Artikel"
            >
              <Share2 size={18} strokeWidth={2.5} />
            </button>
          </div>

          {/* Banner Content */}
          <div className="relative z-20 container mx-auto px-4 lg:px-8 pt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="inline-flex items-center gap-1.5 bg-[#dc2626] text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-md border border-red-500/50">
                  <Tag size={12} strokeWidth={3} />
                  {news.category?.name || "Berita Umum"}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight drop-shadow-lg">
                {news.title}
              </h1>
            </motion.div>
          </div>
        </section>

        {/* ─── Content Area ─────────────────────────────── */}
        <section className="relative">

          {/* Latar Belakang Halus tanpa garis memotong */}
          <div className="absolute inset-0 z-0 pointer-events-none text-[#1e3a8a]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-[0.03]">
              <defs>
                <pattern id="halftoneGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                  <circle cx="17" cy="17" r="1.5" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#halftoneGrid)" />
            </svg>
            <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[150px] -z-10" />
          </div>

          {/* Container Konten Utama (Overlap tipis & aman) */}
          <div className="container mx-auto px-4 lg:px-8 relative z-10 -mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

              {/* ─── Main Content (Kiri) ───── */}
              <div className="lg:col-span-8 space-y-10">

                {/* ─── Gallery Container ───── */}
                {allImages.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_15px_40_rgba(0,0,0,0.06)] border border-gray-100"
                  >
                    <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
                      <h3 className="text-2xl font-black text-[#0a1930] flex items-center gap-3 tracking-tight">
                        <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-[#dc2626]">
                          <Camera size={20} strokeWidth={2.5} />
                        </div>
                        Galeri Dokumentasi
                      </h3>
                      <button
                        onClick={() => openLightbox(lightboxIndex)}
                        className="inline-flex items-center gap-2 text-sm font-black text-[#1e3a8a] hover:text-[#dc2626] bg-blue-50 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors"
                      >
                        <Sparkles size={16} /> Mode Fullscreen
                      </button>
                    </div>

                    {/* Main Preview */}
                    <div
                      className="relative rounded-3xl overflow-hidden aspect-[16/9] mb-6 shadow-md cursor-zoom-in group border-2 border-gray-100"
                      onClick={() => openLightbox(lightboxIndex)}
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={lightboxIndex}
                          initial={{ opacity: 0, scale: 1.05 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="absolute inset-0"
                        >
                          <ImageWithFallback
                            src={allImages[lightboxIndex]}
                            alt="Preview Dokumentasi"
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      </AnimatePresence>
                      <div className="absolute inset-0 bg-[#1e3a8a]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                        <span className="bg-white text-[#1e3a8a] px-6 py-3 rounded-full font-black text-sm tracking-widest uppercase shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                          Perbesar Gambar
                        </span>
                      </div>
                    </div>

                    {/* Thumbnails Row */}
                    <div className="relative group/thumbs">
                      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none snap-x">
                        {allImages.map((img, i) => (
                          <button
                            key={i}
                            onClick={() => setLightboxIndex(i)}
                            className={`flex-shrink-0 w-28 md:w-36 aspect-video rounded-2xl overflow-hidden border-4 transition-all snap-start shadow-sm ${i === lightboxIndex
                                ? "border-[#dc2626] scale-100"
                                : "border-transparent opacity-50 hover:opacity-100 scale-95 hover:scale-100"
                              }`}
                          >
                            <ImageWithFallback
                              src={img}
                              alt={`Thumbnail ${i + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>

                      {/* Nav Thumbnails */}
                      {allImages.length > 3 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-[#0a1930] text-white p-2.5 rounded-full shadow-lg hover:bg-[#dc2626] transition-all opacity-0 group-hover/thumbs:opacity-100"
                          >
                            <ChevronLeft size={20} strokeWidth={3} />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-[#0a1930] text-white p-2.5 rounded-full shadow-lg hover:bg-[#dc2626] transition-all opacity-0 group-hover/thumbs:opacity-100"
                          >
                            <ChevronRight size={20} strokeWidth={3} />
                          </button>
                        </>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Article Text Container */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_15px_40_rgba(0,0,0,0.06)] border border-gray-100"
                >
                  <div
                    className="prose prose-lg md:prose-xl max-w-none
                      prose-headings:text-[#0a1930] prose-headings:font-black prose-headings:tracking-tight
                      prose-p:text-gray-600 prose-p:leading-relaxed prose-p:font-medium
                      prose-a:text-[#dc2626] prose-a:font-bold prose-a:no-underline hover:prose-a:underline
                      prose-strong:text-[#0a1930] prose-strong:font-black
                      prose-img:rounded-3xl prose-img:shadow-xl prose-img:my-10
                      prose-blockquote:border-l-8 prose-blockquote:border-[#1e3a8a] prose-blockquote:bg-blue-50/50 prose-blockquote:rounded-r-2xl prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:text-[#1e3a8a] prose-blockquote:font-bold prose-blockquote:italic
                      prose-ul:text-gray-600 prose-ul:font-medium
                      prose-ol:text-gray-600 prose-ol:font-medium"
                    dangerouslySetInnerHTML={{ __html: cleanContent(news.content || "") }}
                  />

                  {/* Fallback for Plain Text */}
                  {news.content && !news.content.includes("<") && (
                    <div className="text-gray-600 leading-relaxed font-medium whitespace-pre-wrap text-lg">
                      {news.content}
                    </div>
                  )}
                </motion.div>
              </div>

              {/* ─── Sidebar (Kanan) ──────────────── */}
              <aside className="lg:col-span-4">
                <div className="sticky top-28 space-y-8">

                  {/* Article Ticket Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-[#0a1930] text-white rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(10,25,48,0.15)] relative overflow-hidden"
                  >
                    {/* Ticket Dash Pattern */}
                    <div className="absolute left-0 top-1/2 w-4 h-8 bg-[#f8fafc] rounded-r-full -translate-y-1/2" />
                    <div className="absolute right-0 top-1/2 w-4 h-8 bg-[#f8fafc] rounded-l-full -translate-y-1/2" />
                    <div className="absolute top-1/2 left-8 right-8 h-[2px] border-t-2 border-dashed border-white/20 -translate-y-1/2" />

                    {/* Top Section */}
                    <div className="pb-8">
                      <h4 className="font-black text-xs tracking-[0.2em] text-blue-200 uppercase mb-6 flex items-center gap-3">
                        <Newspaper size={18} className="text-[#dc2626]" />
                        Metrik Artikel
                      </h4>

                      <div className="flex items-center gap-4 text-sm">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20">
                          <Calendar size={20} strokeWidth={2.5} />
                        </div>
                        <div>
                          <p className="text-blue-300/80 text-xs font-bold uppercase tracking-widest mb-1">Publikasi</p>
                          <p className="font-black text-lg tracking-tight">
                            {publishDate.toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" })}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="pt-8 space-y-6">
                      <div className="flex items-center gap-4 text-sm">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20">
                          <Tag size={20} strokeWidth={2.5} />
                        </div>
                        <div>
                          <p className="text-blue-300/80 text-xs font-bold uppercase tracking-widest mb-1">Kategori</p>
                          <p className="font-black text-lg tracking-tight text-[#dc2626]">{news.category?.name || "Umum"}</p>
                        </div>
                      </div>

                      <button
                        onClick={handleShare}
                        className="w-full bg-white text-[#0a1930] font-black py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-[#dc2626] hover:text-white transition-all shadow-lg hover:-translate-y-1"
                      >
                        <Share2 size={18} strokeWidth={3} />
                        BAGIKAN TAUTAN
                      </button>
                    </div>
                  </motion.div>

                  {/* Related News Bento Box */}
                  {filteredRelated.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="bg-white rounded-[2rem] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-100"
                    >
                      <div className="flex items-center justify-between mb-8">
                        <h4 className="font-black text-[#0a1930] text-2xl tracking-tight">
                          Baca Juga
                        </h4>
                        <div className="w-8 h-1.5 bg-[#dc2626] rounded-full" />
                      </div>

                      <div className="space-y-5">
                        {filteredRelated.map((item) => (
                          <Link
                            key={item.id}
                            href={`/news/${item.slug}`}
                            className="group flex flex-col gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100 hover:bg-blue-50/50 hover:border-blue-100 transition-all duration-300"
                          >
                            <div className="w-full h-36 rounded-xl overflow-hidden relative shadow-sm">
                              <ImageWithFallback
                                src={item.featuredImage || "https://images.unsplash.com/photo-1738949538943-e54722a44ffc"}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                              />
                              <div className="absolute top-2 left-2">
                                <span className="bg-[#1e3a8a]/90 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider">
                                  {item.category?.name || "Umum"}
                                </span>
                              </div>
                            </div>
                            <div className="flex-1 px-1">
                              <h5 className="text-[15px] font-black text-[#0a1930] line-clamp-2 group-hover:text-[#dc2626] transition-colors leading-snug mb-2">
                                {item.title}
                              </h5>
                              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                                <Clock size={12} className="text-[#1e3a8a]" />
                                {new Date(item.publishedAt || item.createdAt).toLocaleDateString("id-ID", {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      <Link
                        href="/news"
                        className="mt-8 flex items-center justify-center gap-2 w-full py-4 bg-gray-50 text-[#1e3a8a] font-black rounded-xl hover:bg-[#1e3a8a] hover:text-white transition-all group border border-gray-200"
                      >
                        Indeks Berita
                        <ArrowRight size={18} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  )}
                </div>
              </aside>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}