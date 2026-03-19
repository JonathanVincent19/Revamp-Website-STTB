"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  User,
  Eye,
  Share2,
  ChevronLeft,
  ChevronRight,
  X,
  Loader2,
  AlertCircle,
  Newspaper,
  Sparkles,
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
        className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
        >
          <X size={28} />
        </button>

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all z-10"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="max-w-5xl max-h-[85vh] w-full px-4"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[currentIndex]}
            alt={`Foto ${currentIndex + 1}`}
            className="w-full h-full object-contain rounded-lg"
          />
          <p className="text-center text-white/60 text-sm mt-3">
            Foto {currentIndex + 1} dari {images.length}
          </p>
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

  // Extract images from content (looking for img tags in content HTML)
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
  ].filter((v, i, a) => a.indexOf(v) === i); // dedupe

  // Clean content (remove img tags for the text version)
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

  // Filter related (exclude current)
  const filteredRelated = (relatedNews || []).filter((n) => n.slug !== slug).slice(0, 3);

  // Share handler
  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: news?.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  // ─── Loading State ────────────────────────────────
  if (loading) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="animate-spin text-[#1e3a8a] mx-auto mb-4" size={48} />
          <p className="text-gray-500">Memuat berita...</p>
        </div>
      </div>
    );
  }

  // ─── Error State ──────────────────────────────────
  if (error || !news) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md">
          <AlertCircle className="text-[#dc2626] mx-auto mb-4" size={56} />
          <h2 className="text-2xl font-black text-gray-800 mb-2">Berita Tidak Ditemukan</h2>
          <p className="text-gray-500 mb-6">{error || "Berita yang Anda cari tidak tersedia atau telah dihapus."}</p>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 bg-[#1e3a8a] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#dc2626] transition-colors"
          >
            <ArrowLeft size={18} />
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

      <div className="pt-20 bg-gray-50 min-h-screen">
        {/* ─── Hero Banner ──────────────────────────────── */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <ImageWithFallback
            src={news.featuredImage || "https://images.unsplash.com/photo-1738949538943-e54722a44ffc"}
            alt={news.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1b3d] via-[#0f1b3d]/60 to-transparent" />

          {/* Back Button */}
          <Link
            href="/news"
            className="absolute top-6 left-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-white/20 transition-all"
          >
            <ArrowLeft size={16} />
            Kembali
          </Link>

          {/* Banner Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 bg-[#dc2626] text-white px-3 py-1 rounded-full text-xs font-bold">
                    <Tag size={10} />
                    {news.category?.name || "Umum"}
                  </span>
                  <span className="flex items-center gap-1.5 text-blue-200 text-sm">
                    <Calendar size={13} />
                    {publishDate.toLocaleDateString("id-ID", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-3">
                  {news.title}
                </h1>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Content Area ─────────────────────────────── */}
        <section className="relative">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12">
              {/* ─── Main Content (Left/Center) ───── */}
              <div className="lg:col-span-8">


                {/* ─── Premium Documentation Gallery ───── */}
                {allImages.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mb-12"
                  >
                    <div className="flex items-baseline justify-between mb-6">
                      <h3 className="text-2xl font-black text-[#1e3a8a] flex items-center gap-2">
                        <Sparkles className="text-[#dc2626]" size={24} />
                        Highlight Berita
                      </h3>
                      <button 
                        onClick={() => openLightbox(lightboxIndex)}
                        className="text-sm font-bold text-[#dc2626] hover:underline"
                      >
                        Lihat Fullscreen
                      </button>
                    </div>

                    {/* Main Preview */}
                    <div 
                      className="relative rounded-3xl overflow-hidden aspect-[16/9] mb-4 shadow-xl cursor-zoom-in group"
                      onClick={() => openLightbox(lightboxIndex)}
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={lightboxIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Thumbnails Row */}
                    <div className="relative group/thumbs">
                      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none snap-x">
                        {allImages.map((img, i) => (
                          <button
                            key={i}
                            onClick={() => setLightboxIndex(i)}
                            className={`flex-shrink-0 w-24 md:w-32 aspect-video rounded-xl overflow-hidden border-2 transition-all snap-start ${
                              i === lightboxIndex 
                                ? "border-[#dc2626] ring-4 ring-[#dc2626]/10 scale-95" 
                                : "border-transparent opacity-60 hover:opacity-100"
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

                      {allImages.length > 4 && (
                        <>
                          <button 
                            onClick={prevImage}
                            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur shadow-lg text-gray-800 p-2 rounded-full hover:bg-white transition-all opacity-0 group-hover/thumbs:opacity-100"
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button 
                            onClick={nextImage}
                            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur shadow-lg text-gray-800 p-2 rounded-full hover:bg-white transition-all opacity-0 group-hover/thumbs:opacity-100"
                          >
                            <ChevronRight size={20} />
                          </button>
                        </>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* ─── Article Content ───── */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100"
                >
                  <div
                    className="prose prose-lg max-w-none
                      prose-headings:text-[#1e3a8a] prose-headings:font-black
                      prose-p:text-gray-600 prose-p:leading-relaxed
                      prose-a:text-[#1e3a8a] prose-a:font-bold hover:prose-a:text-[#dc2626]
                      prose-strong:text-gray-800
                      prose-img:rounded-xl prose-img:shadow-md
                      prose-blockquote:border-l-[#1e3a8a] prose-blockquote:bg-blue-50/50 prose-blockquote:rounded-r-lg prose-blockquote:py-1 prose-blockquote:px-4
                      prose-ul:text-gray-600 prose-ol:text-gray-600"
                    dangerouslySetInnerHTML={{ __html: cleanContent(news.content || "") }}
                  />

                  {/* If content is plain text (not HTML) render it */}
                  {news.content && !news.content.includes("<") && (
                    <div className="text-gray-600 leading-relaxed whitespace-pre-wrap text-base">
                      {news.content}
                    </div>
                  )}
                </motion.div>
              </div>

              {/* ─── Sidebar (Right) ──────────────── */}
              <aside className="lg:col-span-4">
                <div className="sticky top-28 space-y-6">
                  {/* Article Info Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white rounded-2xl p-6 shadow-lg"
                  >
                    <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Newspaper size={18} />
                      Info Artikel
                    </h4>
                    <div className="space-y-3">

                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                          <Calendar size={14} />
                        </div>
                        <div>
                          <p className="text-blue-200 text-xs">Tanggal Publikasi</p>
                          <p className="font-bold">
                            {publishDate.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                          <Tag size={14} />
                        </div>
                        <div>
                          <p className="text-blue-200 text-xs">Kategori</p>
                          <p className="font-bold">{news.category?.name || "Umum"}</p>
                        </div>
                      </div>

                    </div>
                  </motion.div>

                  {/* Related News */}
                  {filteredRelated.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                    >
                      <h4 className="font-black text-[#1e3a8a] mb-4 text-lg">
                        Berita Lainnya
                      </h4>
                      <div className="space-y-4">
                        {filteredRelated.map((item) => (
                          <Link
                            key={item.id}
                            href={`/news/${item.slug}`}
                            className="group flex gap-3"
                          >
                            <div className="flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden">
                              <ImageWithFallback
                                src={item.featuredImage || "https://images.unsplash.com/photo-1738949538943-e54722a44ffc"}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h5 className="text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-[#dc2626] transition-colors leading-snug">
                                {item.title}
                              </h5>
                              <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                                <Clock size={10} />
                                {new Date(item.publishedAt || item.createdAt).toLocaleDateString("id-ID", {
                                  day: "numeric",
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
                        className="mt-5 block text-center text-sm font-bold text-[#1e3a8a] hover:text-[#dc2626] transition-colors"
                      >
                        Lihat Semua Berita →
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
