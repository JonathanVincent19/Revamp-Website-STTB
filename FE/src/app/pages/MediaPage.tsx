"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  X,
  ChevronRight,
  PlayCircle,
  FileText,
  Share2,
  Calendar,
  Filter,
  ArrowRight,
  Loader2
} from "lucide-react";
import Link from "next/link";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { galleryApi } from "../../lib/api";

// ==========================================
// 1. DUMMY DATA (Now acting as fallback format)
// ==========================================
interface MappedMedia {
  id: string;
  title: string;
  category: string;
  type: string;
  date: string;
  rawDate: number;
  image: string;
  url: string;
}

const SIDEBAR_LINKS = [
  {
    title: "PERPUSTAKAAN",
    url: "/library",
    subLinks: [
      { title: "Katalog Fisik", url: "/library" },
      { title: "EBSCO Host", url: "https://login.ebsco.com/?requestIdentifier=f931f9d8-c73f-4b87-8a4d-1db74405fbc4&acrValues=uid&ui_locales&redirect_uri=https://logon.ebsco.zone/api/dispatcher/continue/prompted?state=YzAxYjJlODY5ZjZjNDA5YmI3YjkyYzNiN2I1NThjZmQ=&authRequest=eyJraWQiOiIxNzY5MTEwMjQ0MDQ3IiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJodHRwczpcL1wvYXV0aC5lYnNjby56b25lXC9hcGlcL2Rpc3BhdGNoZXIiLCJhdXRoUmVxdWVzdCI6eyJsb2dpbl9oaW50IjpudWxsLCJncmFudF90eXBlIjoiYXV0aG9yaXphdGlvbl9jb2RlIiwic2NvcGUiOiJvcGVuaWQgZW1haWwgYWZmaWxpYXRpb24iLCJhY3JfdmFsdWVzIjoidWlkIiwicmVzcG9uc2VfdHlwZSI6ImNvZGUiLCJyZWRpcmVjdF91cmkiOiJodHRwczpcL1wvc2VhcmNoLmVic2NvaG9zdC5jb21cL3dlYmF1dGhcL1Byb21wdGVkQ2FsbGJhY2suYXNweCIsInN0YXRlIjoiQXhFZ0ZoYnh3M1RCa056eTlRdDRiXzVFaWplQkZ4UlN4U2htR0pJTjB1b21fYTJjLTdIdkx5MFc3Tjh0VEJPanNiQ3FocWRJMmtyd3prWlJ6Z2NDMmhUSnZZT1k0RGoyZ2N2V3pJS0tDaWlUU3dwd0ozNjBIOUxTRUsxazdReElLYlVrRG0zamN0N3ZRSEFnOFR5U0RheFdUdjB5RjZ4T3FmUzN5MHkzbzZaeVVnbEJOVGZLa0hZUjFuMFlGUURacnhWX3hrN19wb0xUN3FpVlo1RU5UN1J4NFVMal8zMjFZR2RsZ0FsWjEyU3otR2dMTE52NEZGTXE1QmlMbTJVR3JwUUZKcnhyYm1DcURqR2w3VzFtVTZHMGJMc2JUTGpUM2tFb3lUdW1wZFZXVnNFQjNPbWJBc0tTa1BFc0M3VVJ1OE1YR3Q1dGJaNE9JLXFmZmlhV3FFWEo3QjR6MG9xaE5yd2UwZzBNNERFIiwiY2xpZW50X2lkIjoiYXdneWNJeDU3TXJ3bkRRNWg0VWU2eUNWRVAwcjVNdDkiLCJyZXNwb25zZV9tb2RlIjoicXVlcnkiLCJyZXFJZCI6ImY5MzFmOWQ4LWM3M2YtNGI4Ny04YTRkLTFkYjc0NDA1ZmJjNCJ9LCJpYXQiOjE3NzQwODM3ODgsImp0aSI6IjMxNTNiNjkxLTExMTAtNGFjMS1iMGU4LTZiYjA1YWY5MDIxYyIsInJlcUlkIjoiZjkzMWY5ZDgtYzczZi00Yjg3LThhNGQtMWRiNzQ0MDVmYmM0In0.SPUo2RjfYLMQXsk3Qy6TGTbqAS7wZTpk59kVPWVcOg-Sa__31jOmVS8GlCcfwBPAai2msmkdFcEd9YjgHKBJiaEQROB182QFwRv7dyvwlNXxrtlVkJnORvAiZkQqiDH1BUkhR_chOQsCDq8KSOW0HcvWH_ga6mt4SSsyUEvUMVymABfamj6dMsmZhMuwUwVtKc5bV1OGlwXSSZNPfiuPA-fsxMDL02r6nVegiAOV07iZgq5QA9X6wTSWsYOrHkItShVrbWoV-jkDs0psnu5FciEqJM7ccoI1GogWeIxGsZynDMqQUi0Glm08Z7IdAwiBKQgzpHcXPdNFOzDHa1VBfA" },
      { title: "Jurnal ATLA", url: "https://login.ebsco.com/?requestIdentifier=f931f9d8-c73f-4b87-8a4d-1db74405fbc4&acrValues=uid&ui_locales&redirect_uri=https://logon.ebsco.zone/api/dispatcher/continue/prompted?state=NTBlZWY0NWQ5M2YyNDQyMzg5MzMyZTA3YTkwYjYyODE=&authRequest=eyJraWQiOiIxNzY5MTEwMjQ0MDQ3IiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJodHRwczpcL1wvYXV0aC5lYnNjby56b25lXC9hcGlcL2Rpc3BhdGNoZXIiLCJhdXRoUmVxdWVzdCI6eyJsb2dpbl9oaW50IjpudWxsLCJncmFudF90eXBlIjoiYXV0aG9yaXphdGlvbl9jb2RlIiwic2NvcGUiOiJvcGVuaWQgZW1haWwgYWZmaWxpYXRpb24iLCJhY3JfdmFsdWVzIjoidWlkIiwicmVzcG9uc2VfdHlwZSI6ImNvZGUiLCJyZWRpcmVjdF91cmkiOiJodHRwczpcL1wvc2VhcmNoLmVic2NvaG9zdC5jb21cL3dlYmF1dGhcL1Byb21wdGVkQ2FsbGJhY2suYXNweCIsInN0YXRlIjoiQXhIYm1vaGtPbHhSb19aZU1raHNzWHplOEw3eFd4UlN4U2htR0pJTjB1b21fYTJjLTdIdkx5MFc3Tjh0VEJPanNiQ3FocWRJMmtyd3prWlJ6Z2NDMmhUSnZZT1lBSFcyMWRteTFWajh1OXZjQ2FQRWFucUxJOU9vYlRIT1FWYXBfdTBZZ19HN2xUOUE5UmozdnZzV3A1WVZVOFNZZEVoU3VkeUxmUHJRdEtVMkpGbS1HM0ZPYmJwampDbHNacEtuVGNIaTJqTXVwekMtU3ZRMXQ0RkdWTC1kMW9vNHdNTVVqbS1JZTU3UzIyZmJkc3daWE41WV9FQUxjRFdlTjRMR1NhQVlLX3J0YXllX2tmQVVsa3liOGNlNjZaNUE2X1NidDl5OTNIMFM2cU9DLWczWjBGOVN2T1JNOHo3VEp4elBuWmtkVU5jSkR4VTdITjFRdHZsNGFFX1FOMVMzZzdwWDh4MlVxQlZWUUtBIiwiY2xpZW50X2lkIjoiYXdneWNJeDU3TXJ3bkRRNWg0VWU2eUNWRVAwcjVNdDkiLCJyZXNwb25zZV9tb2RlIjoicXVlcnkiLCJyZXFJZCI6ImY5MzFmOWQ4LWM3M2YtNGI4Ny04YTRkLTFkYjc0NDA1ZmJjNCJ9LCJpYXQiOjE3NzQwODM2OTgsImp0aSI6ImJlMjE1NzkwLWE3MDgtNGViOS1hNmZkLWU4M2QzZWZhYWMyMyIsInJlcUlkIjoiZjkzMWY5ZDgtYzczZi00Yjg3LThhNGQtMWRiNzQ0MDVmYmM0In0.GDEtBR4aQ-_x9p4QJvdYE4rp9-Q9ifqBiSA3R56mMuwnMI-FProX0dS_AoLKbf8RGpoo-bAutVhTwiIpMm1wzDCKdtabtORjVIJ5d9FTrUECXgOZgu4e_zfF8aRcF2briZwkdBP3NczyGtJusaUVoKEA6tm87BWn0EH35yy7HXFyrm7GBWITD_xy99cGRF-6-wOPF5h_XVTP4so3fU6-pCglNEuLW7eN6MjTxrp3lJETmQ5i0YzxomZ6dcs7IZUqO2xTvy-1VecdqHW9-bByFYhXxh-iWPTk4gQbQz9S0tN6couIXESsOmJ_EiWuRJawclsZv_jLCFs_vP5JjD-J6Q" }
    ]
  },
  { title: "JURNAL STULOS", url: "/journal" },
  { title: "OJS", url: "#" },
  { title: "BULETIN STTB", url: "#" },
  { title: "MONOGRAF", url: "#" }
];

// ==========================================
// 2. MAIN PAGE COMPONENT
// ==========================================

export function MediaPage() {
  // States untuk filter & pencarian
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFormat, setActiveFormat] = useState<string | null>(null); // "Artikel" | "Video" | null
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [sortBy, setSortBy] = useState("date-desc");

  const [mediaList, setMediaList] = useState<MappedMedia[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch API Data
  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const res = await galleryApi.getAlbums();
        if (res.success && res.data) {
          const formatted = res.data.map(album => {
             // Fallback to createdAt if eventDate is null
             const rawDate = album.eventDate ? new Date(album.eventDate) : new Date(album.createdAt ?? Date.now());
             return {
               id: album.id.toString(),
               title: album.title,
               category: album.category || "STT BANDUNG",
               type: album.type || "Album",
               date: rawDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
               rawDate: rawDate.getTime(),
               image: album.coverImage || "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80&w=800&auto=format&fit=crop",
               url: `/media/${album.id}`
             };
          });
          setMediaList(formatted);
        }
      } catch (error) {
        console.error("Failed to fetch albums:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMedia();
  }, []);

  // Simulasi Filter (Di dunia nyata, ini bisa dihandle oleh API Backend via query params)
  let filteredMedia = mediaList.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchFormat = activeFormat ? item.type === activeFormat : true;
    const matchCategory = activeCategory ? item.category === activeCategory : true;
    return matchSearch && matchFormat && matchCategory;
  });

  // Apply Sorting
  filteredMedia.sort((a, b) => {
    if (sortBy === "date-desc") return b.rawDate - a.rawDate;
    if (sortBy === "date-asc") return a.rawDate - b.rawDate;
    if (sortBy === "title-asc") return a.title.localeCompare(b.title);
    return 0;
  });

  // Extract unique categories for dropdown dynamically from fetched UI data
  const categories = Array.from(new Set(mediaList.map(item => item.category)));

  return (
    <div className="pt-20 bg-[#f8fafc] min-h-screen pb-32">

      {/* --- HERO HEADER --- */}
      <section className="bg-[#0a1930] py-12 md:py-16 border-b-4 border-[#dc2626] relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mediaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mediaGrid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-3">Galeri Media</h1>
          <p className="text-blue-200 font-medium text-lg">Kumpulan video, artikel, dan dokumentasi kegiatan STT Bandung.</p>
        </div>
      </section>

      {/* --- MAIN LAYOUT (SIDEBAR + GRID) --- */}
      <div className="container mx-auto px-4 lg:px-8 mt-10">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* ------------------------------------------- */}
          {/* LEFT SIDEBAR (Filters & Quick Links) */}
          {/* ------------------------------------------- */}
          <aside className="w-full lg:w-1/4 xl:w-1/5 flex flex-col gap-10">

            {/* Format Media Filter */}
            <div>
              <h3 className="text-[#dc2626] font-black text-lg tracking-tight uppercase mb-4 flex items-center gap-2">
                Format Media
              </h3>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setActiveFormat(activeFormat === "Artikel" ? null : "Artikel")}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all font-bold ${activeFormat === "Artikel"
                    ? "bg-blue-50 border-[#1e3a8a] text-[#1e3a8a]"
                    : "bg-white border-gray-100 text-gray-600 hover:border-gray-300"
                    }`}
                >
                  <div className="flex items-center gap-2">
                    <FileText size={18} className={activeFormat === "Artikel" ? "text-[#1e3a8a]" : "text-gray-400"} />
                    Artikel
                  </div>
                  {activeFormat === "Artikel" && <X size={16} className="text-gray-400 hover:text-red-500" />}
                </button>
                <button
                  onClick={() => setActiveFormat(activeFormat === "Video" ? null : "Video")}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all font-bold ${activeFormat === "Video"
                    ? "bg-blue-50 border-[#1e3a8a] text-[#1e3a8a]"
                    : "bg-white border-gray-100 text-gray-600 hover:border-gray-300"
                    }`}
                >
                  <div className="flex items-center gap-2">
                    <PlayCircle size={18} className={activeFormat === "Video" ? "text-[#1e3a8a]" : "text-gray-400"} />
                    Video
                  </div>
                  {activeFormat === "Video" && <X size={16} className="text-gray-400 hover:text-red-500" />}
                </button>
              </div>
            </div>

            {/* Topik Kategori Filter */}
            <div>
              <h3 className="text-[#1e3a8a] font-black text-lg tracking-tight uppercase mb-4 flex items-center gap-2">
                Topik Kategori
              </h3>
              <div className="relative">
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="w-full appearance-none bg-white border-2 border-gray-100 px-4 py-3.5 rounded-xl font-bold text-gray-700 focus:outline-none focus:border-[#1e3a8a] focus:ring-0 transition-colors cursor-pointer"
                >
                  <option value="">Semua Kategori Media</option>
                  {categories.map((cat, idx) => (
                    <option key={idx} value={cat}>{cat}</option>
                  ))}
                </select>
                <Filter size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Red Quick Links */}
            <div className="space-y-3 pt-6 border-t border-gray-200">
              {SIDEBAR_LINKS.map((link, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <Link
                    href={link.url}
                    className="group bg-[#dc2626] hover:bg-[#b91c1c] text-white flex items-center justify-between px-5 py-4 rounded-xl shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <span className="font-black text-sm tracking-widest uppercase">{link.title}</span>
                    <ChevronRight size={18} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                  {/* Render Sublinks if exists (e.g., Katalog Fisik, dll) */}
                  {link.subLinks && (
                    <div className="flex flex-col gap-1.5 pl-4 pr-2 py-2">
                      {link.subLinks.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          href={sub.url}
                          className="text-sm font-bold text-gray-500 hover:text-[#1e3a8a] py-1.5 transition-colors flex items-center gap-2"
                        >
                          <div className="w-1 h-1 bg-gray-300 rounded-full" />
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </aside>

          {/* ------------------------------------------- */}
          {/* RIGHT MAIN CONTENT (Search & Grid) */}
          {/* ------------------------------------------- */}
          <main className="w-full lg:w-3/4 xl:w-4/5 flex flex-col gap-8">

            {/* Top Action Bar */}
            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-4 justify-between items-center z-10 relative">

              {/* Search Box */}
              <div className="relative w-full sm:w-96">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari media..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-11 pr-10 font-medium text-gray-700 focus:outline-none focus:bg-white focus:border-[#1e3a8a] focus:ring-4 focus:ring-blue-500/10 transition-all"
                />
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-600 transition-colors"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider hidden sm:block">Urutkan:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full sm:w-auto bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 font-bold text-[#1e3a8a] focus:outline-none focus:border-[#1e3a8a] cursor-pointer"
                >
                  <option value="date-desc">Terbaru</option>
                  <option value="date-asc">Terlama</option>
                  <option value="title-asc">A - Z</option>
                </select>
              </div>
            </div>

            {/* Media Grid */}
            {isLoading ? (
              <div className="w-full bg-white rounded-3xl border border-gray-100 py-32 flex flex-col items-center justify-center shadow-sm">
                <Loader2 size={40} className="animate-spin text-[#1e3a8a] mb-4" />
                <p className="text-gray-500 font-medium">Memuat Galeri Media...</p>
              </div>
            ) : filteredMedia.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <AnimatePresence>
                  {filteredMedia.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                    >
                      {/* Media Card Premium Design */}
                      <Link href={item.url} className="group block h-full">
                        <div className="bg-white rounded-[2rem] p-3 border-2 border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(30,58,138,0.1)] hover:border-[#1e3a8a]/30 transition-all duration-500 h-full flex flex-col">

                          {/* Image Container */}
                          <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100">
                            <ImageWithFallback
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            />

                            {/* Overlay Gradient for readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                            {/* Top Badges (Category & Type) */}
                            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                              <span className="bg-[#dc2626] text-white px-3 py-1.5 rounded-lg text-[10px] font-black tracking-widest uppercase shadow-md">
                                {item.category}
                              </span>
                              <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white p-2 rounded-xl shadow-md">
                                {item.type === "Video" ? <PlayCircle size={20} /> : <FileText size={20} />}
                              </span>
                            </div>

                            {/* Share Button (Shows on Hover - Replacing the old rotated text) */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 z-10">
                              <div className="bg-white/90 backdrop-blur-md text-[#1e3a8a] w-14 h-14 rounded-full flex items-center justify-center shadow-2xl">
                                {item.type === "Video" ? <PlayCircle size={28} strokeWidth={2.5} /> : <ArrowRight size={28} strokeWidth={2.5} />}
                              </div>
                            </div>

                            {/* Date Badge */}
                            <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white/90 text-xs font-bold tracking-wider">
                              <Calendar size={14} />
                              {item.date}
                            </div>
                          </div>

                          {/* Content Section */}
                          <div className="p-4 flex-1 flex flex-col justify-between">
                            <h4 className="text-[#0a1930] font-black text-lg leading-snug line-clamp-2 group-hover:text-[#1e3a8a] transition-colors mb-4">
                              {item.title}
                            </h4>

                            {/* Interactive Footer */}
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                              <span className="text-sm font-bold text-gray-400 group-hover:text-[#dc2626] transition-colors flex items-center gap-1">
                                {item.type === "Video" ? "Play Video" : item.type === "Artikel" || item.type.toLowerCase().includes("study") ? "Read More" : "See More"} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                              </span>

                              <button
                                onClick={(e) => { e.preventDefault(); /* Handle Share */ }}
                                className="text-gray-300 hover:text-[#1e3a8a] transition-colors p-2"
                                title="Bagikan"
                              >
                                <Share2 size={18} />
                              </button>
                            </div>
                          </div>

                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              /* Empty State */
              <div className="w-full bg-white rounded-3xl border border-gray-100 py-32 flex flex-col items-center justify-center shadow-sm">
                <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                  <Search size={40} className="text-gray-300" />
                </div>
                <h3 className="text-2xl font-black text-[#0a1930] mb-2">Media Tidak Ditemukan</h3>
                <p className="text-gray-500 font-medium">Coba gunakan kata kunci atau filter yang berbeda.</p>
                <button
                  onClick={() => { setSearchQuery(""); setActiveFormat(null); setActiveCategory(""); }}
                  className="mt-6 bg-[#1e3a8a] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#0a1930] transition-colors"
                >
                  Reset Filter
                </button>
              </div>
            )}

          </main>
        </div>
      </div>
    </div>
  );
}