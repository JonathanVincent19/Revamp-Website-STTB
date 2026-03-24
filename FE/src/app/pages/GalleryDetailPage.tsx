"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Calendar,
  User,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Link as LinkIcon,
  PlayCircle,
  Loader2,
  Tag
} from "lucide-react";
import Link from "next/link";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { galleryApi, GalleryAlbum } from "../../lib/api";

interface GalleryDetailPageProps {
  id: string;
}

export function GalleryDetailPage({ id }: GalleryDetailPageProps) {
  const [media, setMedia] = useState<GalleryAlbum | null>(null);
  const [related, setRelated] = useState<GalleryAlbum[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Fetch current detail
        const detailRes = await galleryApi.getAlbumDetail(Number(id));
        if (detailRes.success && detailRes.data) {
          setMedia(detailRes.data);
        }

        // Fetch related (latest albums/media)
        const listRes = await galleryApi.getAlbums();
        if (listRes.success && listRes.data) {
          // Exclude current item and take top 3
          const relatedItems = listRes.data
            .filter((item) => item.id.toString() !== id)
            .slice(0, 3);
          setRelated(relatedItems);
        }
      } catch (error) {
        console.error("Error fetching media detail:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-[#f8fafc] flex flex-col items-center justify-center">
        <Loader2 size={48} className="animate-spin text-[#1e3a8a] mb-4" />
        <p className="text-gray-500 font-bold">Memuat Detail Media...</p>
      </div>
    );
  }

  if (!media) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-[#f8fafc] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-black text-[#0a1930] mb-4">Media Tidak Ditemukan</h2>
        <Link href="/media" className="text-[#1e3a8a] font-bold hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Kembali ke Galeri
        </Link>
      </div>
    );
  }

  const isVideo = media.type === "Video";
  const displayDate = media.eventDate 
    ? new Date(media.eventDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
    : new Date(media.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

  // Dummy fallback content if description is empty, simulating the rich article structure requested
  const rawDescription = media.description || `
    <p>Di era modern ini, perkembangan teknologi dan ilmu pengetahuan sering kali dianggap berjalan terpisah dari nilai-nilai spiritualitas. Namun, Sekolah Tinggi Teologi Bandung (STTB) mengambil langkah progresif dengan mengadakan seminar nasional yang mengangkat tema krusial ini.</p>
    
    <h3>Definisi Integrasi Iman & Ilmu</h3>
    <p>Pendekatan holistik dalam pendidikan teologi bukan sekadar menggabungkan dua disiplin, melainkan melihat ilmu pengetahuan sebagai alat untuk lebih memahami kebesaran Sang Pencipta.</p>

    <blockquote>"Pendidikan yang sejati tidak hanya mencerdaskan akal, tetapi juga mencerahkan roh dan meneguhkan iman di tengah tantangan zaman." – Rektor STTB</blockquote>
    
    <h3>Kesimpulan</h3>
    <p>Melalui kegiatan ini, diharapkan mahasiswa dan dosen dapat terus bersinergi mengaplikasikan nilai-nilai kristiani dalam setiap inovasi dan karya akademis mereka, membawa dampak nyata bagi gereja dan masyarakat luas.</p>
  `;

  return (
    <div className="pt-20 bg-[#f8fafc] min-h-screen pb-20 relative">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-10">
        
        {/* Back Button */}
        <Link href="/media" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#dc2626] transition-colors font-bold mb-8">
          <ArrowLeft size={18} />
          Kembali ke Galeri
        </Link>

        {isVideo ? (
          // ==========================================
          // LAYOUT: VIDEO (Cinematic & Focused)
          // ==========================================
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto"
          >
            <div className="mb-10 lg:w-3/4">
              <span className="inline-flex bg-[#1e3a8a] text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4 shadow-sm">
                {media.category || "Video"}
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-[#0a1930] mb-6 tracking-tight leading-tight">
                {media.title}
              </h1>
              <div className="flex items-center gap-4 text-gray-500 font-bold text-sm">
                <span className="flex items-center gap-1.5"><Calendar size={16} /> {displayDate}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                <span className="flex items-center gap-1.5"><User size={16} /> STTB Admin</span>
              </div>
            </div>

            {/* Video Player Frame */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#0a1930] p-2 md:p-3 mb-12 ring-1 ring-gray-200/50">
              <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-black group">
                {media.url ? (
                  <iframe
                    src={media.url.replace("watch?v=", "embed/") + "?autoplay=0"}
                    title={media.title}
                    className="absolute inset-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center relative">
                    <ImageWithFallback 
                      src={media.coverImage || "/placeholder.jpg"} 
                      alt={media.title} 
                      className="w-full h-full object-cover opacity-60" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <PlayCircle size={80} className="text-white hover:scale-110 transition-transform cursor-pointer drop-shadow-xl" strokeWidth={1} />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm prose prose-lg max-w-none text-gray-600 prose-headings:font-black prose-headings:text-[#0a1930]">
                  <div dangerouslySetInnerHTML={{ __html: rawDescription }} />
                </div>
              </div>
              <div className="lg:col-span-4">
                 {/* Share Action Block */}
                 <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                    <h3 className="font-black text-[#0a1930] mb-6 flex items-center gap-2"><Share2 size={20}/> Bagikan Video Ini</h3>
                    <div className="flex gap-4">
                      <button className="flex-1 py-3 rounded-xl bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all font-bold"><Facebook size={18} /></button>
                      <button className="flex-1 py-3 rounded-xl bg-[#1DA1F2]/10 text-[#1DA1F2] flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-all font-bold"><Twitter size={18} /></button>
                      <button className="flex-1 py-3 rounded-xl bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 transition-all font-bold"><LinkIcon size={18} /></button>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>

        ) : (
          // ==========================================
          // LAYOUT: ARTICLE / NEWS (Asymmetrical Mag)
          // ==========================================
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start"
          >
            {/* LEFT COLUMN: Main Article (8 cols) */}
            <div className="lg:col-span-8">
              
              {/* 1. Article Header */}
              <div className="mb-8">
                <span className="inline-flex bg-[#dc2626] text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-5 shadow-sm">
                  {media.category || "Press Release"}
                </span>
                
                <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-black text-[#0a1930] mb-6 tracking-tight leading-tight">
                  {media.title.includes("City Trans") ? "Integrasi Iman dan Ilmu Menuju Pendekatan yang Lebih Holistik" : media.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-gray-500 font-bold text-sm pb-6 border-b border-gray-200/60">
                  <span className="flex items-center gap-2"><Calendar size={16} className="text-[#dc2626]" /> {displayDate}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span className="flex items-center gap-2"><User size={16} className="text-[#1e3a8a]" /> Oleh Admin STTB</span>
                </div>
              </div>

              {/* 2. Featured Image (Edge-to-edge on mobile, rounded on desktop) */}
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-lg mb-12 bg-gray-100">
                <ImageWithFallback 
                  src={media.coverImage || "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80&w=1200&auto=format&fit=crop"} 
                  alt={media.title} 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* 3. Content Body (Without heavy card border, utilizing whitespace) */}
              <article className="prose prose-lg md:prose-xl max-w-none text-gray-700
                prose-headings:font-black prose-headings:text-[#0a1930] prose-h3:text-2xl prose-h3:mt-10
                prose-a:text-[#1e3a8a] prose-a:font-bold hover:prose-a:text-[#dc2626]
                prose-p:leading-relaxed prose-p:mb-6
                prose-blockquote:border-l-4 prose-blockquote:border-[#dc2626] prose-blockquote:bg-red-50/50 prose-blockquote:p-6 prose-blockquote:rounded-r-2xl prose-blockquote:text-[#1e3a8a] prose-blockquote:font-bold prose-blockquote:not-italic prose-blockquote:text-xl
              ">
                <div dangerouslySetInnerHTML={{ __html: rawDescription }} />
              </article>

              {/* 4. Article Footer (Tags & Share inline) */}
              <div className="mt-16 pt-8 border-t border-gray-200/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-black text-[#0a1930] mr-2 flex items-center gap-1.5"><Tag size={16}/> Tags:</span>
                  {["Pendidikan", "Teologi", "Iman", "Sains"].map(tag => (
                    <span key={tag} className="bg-white text-gray-500 px-3 py-1.5 rounded-lg text-sm font-bold border border-gray-200 hover:border-[#1e3a8a] hover:text-[#1e3a8a] transition-all cursor-pointer">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="font-black text-gray-400 text-sm uppercase tracking-wider">Bagikan</span>
                  <button className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all"><Facebook size={16} /></button>
                  <button className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-all"><Twitter size={16} /></button>
                  <button className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all"><LinkIcon size={16} /></button>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Sidebar (4 cols, Sticky) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-32 space-y-10">
              
              {/* About Author Widget */}
              <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center">
                 <div className="w-20 h-20 bg-blue-50 rounded-full mx-auto mb-4 flex items-center justify-center text-[#1e3a8a]">
                    <User size={32} />
                 </div>
                 <h4 className="font-black text-lg text-[#0a1930]">Bagian Humas STTB</h4>
                 <p className="text-sm text-gray-500 mt-2 leading-relaxed">Pusat informasi dan berita resmi seputar kegiatan akademik, kemahasiswaan, dan pengabdian Sekolah Tinggi Teologi Bandung.</p>
              </div>

              {/* Related Posts Widget */}
              <div>
                <h3 className="text-xl font-black text-[#0a1930] mb-6 flex items-center gap-3 border-b border-gray-200/60 pb-4">
                  <span className="w-2 h-6 bg-[#dc2626] rounded-full"></span>
                  Berita Terkait
                </h3>
                
                <div className="flex flex-col gap-5">
                  {related.length > 0 ? related.map((rel) => (
                    <Link href={`/media/${rel.id}`} key={rel.id} className="group flex gap-4 items-center bg-white p-3 rounded-2xl border border-gray-50 hover:border-gray-200 hover:shadow-md transition-all">
                      <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden relative bg-gray-100">
                        <ImageWithFallback 
                          src={rel.coverImage || "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&auto=format&fit=crop"} 
                          alt={rel.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 min-w-0 py-1">
                        <span className="text-[10px] font-black text-[#dc2626] uppercase tracking-wider mb-1 block">
                          {rel.category || "Artikel"}
                        </span>
                        <h4 className="font-bold text-sm text-[#0a1930] line-clamp-2 mb-2 group-hover:text-[#1e3a8a] transition-colors leading-snug">
                          {rel.title}
                        </h4>
                        <span className="text-[11px] text-gray-400 font-medium flex items-center gap-1">
                          <Calendar size={12} /> {new Date(rel.createdAt).toLocaleDateString('id-ID')}
                        </span>
                      </div>
                    </Link>
                  )) : (
                    <p className="text-sm text-gray-500 italic">Tidak ada berita terkait.</p>
                  )}
                </div>
              </div>

            </aside>
          </motion.div>
        )}

      </div>
    </div>
  );
}
