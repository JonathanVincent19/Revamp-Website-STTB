"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft, CheckCircle2, MapPin, Camera, Sparkles, Building2, LayoutGrid,
  Library, Video, BookOpen, Computer, Coffee, Users, Wifi, Dumbbell,
  GraduationCap, Home, Heart, Music, Briefcase,
  LucideIcon
} from "lucide-react";
import Link from "next/link";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { notFound } from "next/navigation";
import { useFacilityDetail } from "@/lib/hooks";

interface FacilityDetailPageProps {
    slug: string;
}

// Icon string → lucide-react component mapper
const iconMap: Record<string, LucideIcon> = {
  Library, Video, BookOpen, Computer, Building2, Coffee, Users, Wifi,
  Camera, Dumbbell, GraduationCap, Home, Heart, Music, Briefcase,
};
function getIcon(name: string): LucideIcon {
  return iconMap[name] || Building2;
}

// ─── Komponen Background: Modern Soft Blobs ────────────────────────────────
const OrganicBackgroundBlobs = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-[0.15]">
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-[120%] h-[120%] -translate-x-[10%] -translate-y-[10%] text-[#1e3a8a]">
            <path fill="currentColor" d="M43.5,-71.5C56.6,-66.6,67.6,-54.6,76.5,-40.7C85.5,-26.8,92.5,-11,90.2,3.8C87.9,18.6,76.3,32.4,63.9,43.2C51.5,54,38.3,61.8,24,68.2C9.7,74.5,-5.6,79.5,-20.9,76.6C-36.2,73.8,-51.4,63.1,-63.3,50.2C-75.1,37.3,-83.5,22.2,-86.3,6.5C-89.1,-9.1,-86.3,-25.3,-77.3,-38.3C-68.3,-51.3,-53.1,-61.1,-38.5,-65.4C-24,-69.6,-12,-68.4,1.8,-71.2C15.6,-74,30.3,-80.7,43.5,-71.5Z" transform="translate(500 500) scale(1.1)" />
            <path fill="#dc2626" opacity="0.3" d="M37,-63.5C50,-57.4,64,-50.2,71.2,-39C78.3,-27.7,78.6,-12.3,77.5,2.6C76.5,17.4,74.2,31.7,66.3,42.5C58.4,53.2,44.9,60.3,30.7,66.8C16.5,73.4,1.7,79.3,-12.1,77.2C-25.9,75.2,-38.7,65.2,-50.7,53.6C-62.6,41.9,-73.7,28.7,-78.9,13.2C-84.1,-2.3,-83.4,-20.2,-74.6,-32.9C-65.7,-45.7,-48.7,-53.2,-33.5,-58.5C-18.3,-63.8,-4.9,-66.8,7.9,-78.3C20.7,-89.9,33,-109.9,37,-63.5Z" transform="translate(600 400) scale(0.9)" />
        </svg>
    </div>
);

// ─── Komponen Premium Photo Gallery ────────────────────────────────────────
function PhotoGallery({ photos, name }: { photos: string[], name: string }) {
    const [current, setCurrent] = useState(0);

    if (!photos || photos.length === 0) return null;

    return (
        <div className="bg-white p-4 md:p-6 rounded-[2.5rem] shadow-[0_20px_60px_rgba(10,25,48,0.15)] border border-white relative overflow-hidden w-full group">

            {/* Main Image Banner */}
            <div className="relative rounded-[2rem] overflow-hidden h-[40vh] md:h-[60vh] shadow-inner bg-gray-100 border border-gray-100">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="absolute inset-0"
                    >
                        <ImageWithFallback
                            src={photos[current]}
                            alt={`${name} view ${current + 1}`}
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay Gradien Halus di Bawah */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                    </motion.div>
                </AnimatePresence>

                {/* Floating Indicators */}
                <div className="absolute top-6 left-6 z-10">
                    <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-full text-xs font-black tracking-widest uppercase shadow-lg">
                        <Camera size={14} />
                        Galeri: {current + 1} / {photos.length}
                    </span>
                </div>
            </div>

            {/* Thumbnails Row */}
            {photos.length > 1 && (
                <div className="flex items-center gap-4 mt-6 overflow-x-auto py-4 px-4 scrollbar-none snap-x relative z-10">
                    {photos.map((photo, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`relative flex-shrink-0 rounded-2xl overflow-hidden aspect-video w-32 md:w-44 transition-all duration-500 snap-start ${i === current
                                    ? "ring-4 ring-[#dc2626] scale-105 shadow-2xl z-20"
                                    : "ring-1 ring-gray-200 opacity-60 hover:opacity-100 scale-100 hover:scale-105"
                                }`}
                        >
                            <ImageWithFallback src={photo} alt="" className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

// ─── Main Page Component ───────────────────────────────────────────────────
export function FacilityDetailPage({ slug }: FacilityDetailPageProps) {
    const { data: apiDetail, loading } = useFacilityDetail(slug);

    // Normalize data: only use API
    const facility = useMemo(() => {
        if (!apiDetail) return null;
        
        const paragraphs = apiDetail.longDescription
            ? apiDetail.longDescription.split("\n\n").filter(Boolean)
            : [];
            
        return {
            name: apiDetail.name,
            slug: apiDetail.slug,
            description: apiDetail.shortDescription,
            longDescription: paragraphs,
            icon: getIcon(apiDetail.iconName),
            image: apiDetail.featuredImage,
            photos: apiDetail.photos && apiDetail.photos.length > 0 ? apiDetail.photos : [apiDetail.featuredImage],
        };
    }, [apiDetail]);

    // Loading State
    if (loading) {
        return (
            <div className="pt-20 bg-white min-h-screen flex flex-col items-center justify-center">
                <div className="w-16 h-16 border-4 border-[#dc2626] border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-[#1e3a8a] font-bold animate-pulse text-sm uppercase tracking-widest">Memuat Detail Fasilitas...</p>
            </div>
        );
    }

    if (!facility) {
        notFound();
    }

    const galleryPhotos = facility.photos;

    return (
        <div className="pt-20 bg-[#f8fafc] min-h-screen">

            {/* --- HERO SECTION (Ultra Modern) --- */}
            <section className="relative pt-24 pb-48 lg:pb-64 overflow-hidden bg-gradient-to-br from-[#0a1930] via-[#1e3a8a] to-[#1e40af]">

                {/* Latar Belakang Geometris Abstrak */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,100 C30,50 70,50 100,0 L100,100 Z" fill="rgba(255,255,255,0.05)" />
                        <path d="M0,100 C40,70 60,30 100,0 L100,100 Z" fill="rgba(255,255,255,0.05)" />
                        <circle cx="80" cy="20" r="10" fill="none" stroke="#dc2626" strokeWidth="0.5" opacity="0.8" strokeDasharray="2 2" />
                    </svg>
                </div>

                {/* Cahaya Spotlight Dramatis */}
                <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-red-500/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Breadcrumb yang Bersih */}
                            <div className="flex items-center justify-center gap-3 text-blue-200/80 text-sm font-bold mb-8 tracking-widest uppercase">
                                <Link href="/facilities" className="hover:text-white transition-colors flex items-center gap-1">
                                    <ArrowLeft size={16} strokeWidth={2.5} /> Fasilitas
                                </Link>
                                <span>/</span>
                                <span className="text-white">{facility.name}</span>
                            </div>

                            <div className="inline-flex items-center gap-2 bg-[#dc2626] text-white px-5 py-2 rounded-full mb-6 shadow-lg shadow-red-500/30">
                                <facility.icon size={16} strokeWidth={3} />
                                <span className="font-black tracking-[0.2em] uppercase text-xs">Jelajah Fasilitas</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight drop-shadow-xl">
                                {facility.name}
                            </h1>

                            <p className="text-xl md:text-2xl text-blue-100/90 font-light leading-relaxed max-w-2xl mx-auto">
                                {facility.description}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- MAIN CONTENT SECTION --- */}
            <section className="relative z-20 pb-32">
                <div className="container mx-auto px-4 lg:px-8 max-w-6xl">

                    {/* Pusat Perhatian: The Overlapping Gallery (Menghilangkan redundansi) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="-mt-32 lg:-mt-48 mb-16 lg:mb-24"
                    >
                        <PhotoGallery photos={galleryPhotos} name={facility.name} />
                    </motion.div>

                    {/* Deskripsi & Keunggulan Card */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative">

                        {/* Kiri: Deskripsi Detail */}
                        <div className="lg:col-span-7 relative z-10">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-6 shadow-sm border border-blue-100">
                                    <LayoutGrid size={16} strokeWidth={2.5} />
                                    <span className="font-black text-xs tracking-widest uppercase">Tentang Fasilitas Ini</span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-black text-[#0a1930] mb-8 tracking-tight leading-tight">
                                    Mendukung <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] to-[#dc2626]">Pendidikan Anda</span> Secara Maksimal
                                </h2>

                                <div className="space-y-6 text-gray-600 leading-relaxed font-medium text-lg">
                                    {facility.longDescription.map((paragraph, idx) => (
                                        <p key={idx}>{paragraph}</p>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Kanan: Sticky Keunggulan Card */}
                        <div className="lg:col-span-5 relative z-10">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="sticky top-28 bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-[0_20px_50px_rgba(10,25,48,0.06)] relative overflow-hidden group"
                            >
                                {/* Latar Belakang Organik pada Card agar elegan */}
                                <OrganicBackgroundBlobs />

                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-[2] transition-transform duration-700 pointer-events-none" />

                                <div className="relative z-10">
                                    <h3 className="font-black text-2xl text-[#0a1930] mb-8 flex items-center gap-3">
                                        <div className="w-10 h-10 bg-[#dc2626] rounded-xl flex items-center justify-center text-white shadow-md">
                                            <Sparkles size={20} strokeWidth={2.5} />
                                        </div>
                                        Keunggulan Utama
                                    </h3>

                                    <ul className="space-y-6">
                                        {[
                                            'Dapat diakses oleh seluruh Civitas Akademika',
                                            'Fasilitas dirawat dengan standar dan kualitas tinggi',
                                            'Mematuhi pedoman keamanan dan ketertiban kampus'
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-4">
                                                <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5 border border-red-100">
                                                    <CheckCircle2 className="text-[#dc2626]" strokeWidth={3} size={14} />
                                                </div>
                                                <span className="font-bold text-gray-800 leading-snug">{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-10 pt-8 border-t border-gray-100">
                                        <div className="flex items-center gap-3">
                                            <Building2 className="text-[#1e3a8a] flex-shrink-0" size={24} />
                                            <div>
                                                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Lokasi Kampus</p>
                                                <p className="font-bold text-[#0a1930]">Kampus Utama STTB</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}