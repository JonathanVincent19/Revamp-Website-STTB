"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "motion/react";
import {
  Library,
  Video,
  Home,
  BookOpen,
  Coffee,
  Wifi,
  Computer,
  Building2,
  GraduationCap,
  Users,
  Dumbbell,
  ArrowRight,
  Camera,
  Heart,
  Music,
  Briefcase,
  LucideIcon,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import Link from "next/link";
import { useFacilities } from "@/lib/hooks";
import type { FacilityListItem } from "@/lib/api";

// Icon string → lucide-react component mapper
const iconMap: Record<string, LucideIcon> = {
  Library, Video, BookOpen, Computer, Building2, Coffee, Users, Wifi,
  Camera, Dumbbell, GraduationCap, Home, Heart, Music, Briefcase,
};
function getIcon(name: string): LucideIcon {
  return iconMap[name] || Building2;
}

// ==========================================
// 1. DATA
// ==========================================

// Old hardcoded array removed
const campusLifeSections = [
  {
    title: "Belajar Bersama",
    description:
      "Sebagai sebuah kampus perguruan tinggi, STTB menyediakan fasilitas yang optimal bagi kegiatan belajar-mengajar. Format ruang kelas didesain yang mengakomodasi berbagai format pembelajaran. Perpustakaan didesain agar nyaman dan instagramable. Ruang teleconference dan ruangan kelas lainnya siap pakai bagi pembelajaran hybrid (onsite-online). Dilengkapi juga dengan studio audio-visual Didasko yang menjadi tempat produksi media pengajaran STTB maupun tempat belajar pelayanan media bagi mahasiswa.",
    icon: GraduationCap,
    color: "from-[#1e3a8a] to-[#2563eb]",
    image: "https://images.unsplash.com/photo-1763811938846-0de457436794",
  },
  {
    title: "Bertumbuh Bersama",
    description:
      "Pembelajaran di STTB tidak hanya menekankan sisi akademik, melainkan pembentukan pribadi pelayan Tuhan secara utuh. Untuk itu STTB menyediakan fasilitas pendukung pertumbuhan rohani mahasiswa, seperti ruang konseling pribadi dan konseling kelompok, beberapa tempat untuk pertemuan hangout kelompok kecil, aula untuk pertemuan ibadah/seminar dengan audiens besar, serta fasilitas di luar kampus berupa rumah retreat (Rumah Doa Bethel).",
    icon: Users,
    color: "from-[#dc2626] to-[#ef4444]",
    image: "https://images.unsplash.com/photo-1652086378906-4d648d832ed9",
  },
  {
    title: "Hidup Bersama",
    description:
      "Pendidikan di STTB diselenggarakan secara residensial penuh. Sepanjang masa studi, mahasiswa akan tinggal bersama sebagai satu komunitas. Ada empat asrama yang terintegrasi di lokasi kampus STTB, yaitu asrama dosen, asrama mahasiswa putra (ASPRA), asrama mahasiswa putri (ASPRI), dan asrama mahasiswa pascasarjana/tamu. Fasilitas asrama terdiri dari kamar tidur lengkap, kamar mandi dan toilet, lounge, ruang makan, serta berbagai sarana olahraga.",
    icon: Home,
    color: "from-[#1e3a8a] to-[#1e40af]",
    image: "https://images.unsplash.com/photo-1641443084236-b29fa3c673a3",
  },
];

const asramaFeatures = [
  "Kamar tidur lengkap",
  "Kamar mandi & toilet",
  "Lounge & ruang makan",
  "Jogging track",
  "Lapangan basket",
  "Lapangan bulutangkis",
  "Lapangan futsal",
  "Tenis meja",
  "Kolam renang",
];

// ==========================================
// 2. HELPER COMPONENTS (SHAPES)
// ==========================================

// Pola Grid Garis Struktural untuk area terang
const StructuralGridPattern = () => (
  <svg
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0 opacity-[0.03]"
  >
    <defs>
      <pattern
        id="gridPattern"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M 40 0 L 0 0 0 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#gridPattern)" />
  </svg>
);

// Bentuk Geometris Sudut Tajam untuk area gelap
const GeometricDarkShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mt-[-100px]">
    {/* Shape 1: Segitiga siku besar di kiri atas */}
    <div
      className="absolute top-0 left-0 w-[60%] h-[80%] bg-[#1e40af] opacity-50"
      style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
    />
    {/* Shape 2: Balok diagonal di kanan bawah */}
    <div
      className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[60%] bg-[#1e3a8a] opacity-60 rounded-tl-[100px]"
      style={{ transform: "rotate(-15deg)" }}
    />
    {/* Shape 3: Aksen Merah kecil */}
    <div
      className="absolute top-[20%] right-[15%] w-24 h-24 bg-[#dc2626] opacity-30"
      style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
    />
  </div>
);

// ==========================================
// 3. MAIN COMPONENT
// ==========================================

export function FacilitiesPage() {
  const { data: apiFacilities, loading } = useFacilities();

  // Map API data to display format
  const displayFacilities = useMemo(() => {
    if (!apiFacilities) return [];
    
    return apiFacilities.map(f => ({
      slug: f.slug,
      name: f.name,
      description: f.shortDescription,
      image: f.featuredImage,
      icon: getIcon(f.iconName),
    }));
  }, [apiFacilities]);

  if (loading) {
    return (
      <div className="pt-20 bg-white min-h-screen flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#dc2626] border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-[#1e3a8a] font-bold animate-pulse uppercase tracking-widest text-sm">Menyiapkan Fasilitas Kampus...</p>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative py-28 bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a] overflow-hidden">
        {/* Background Shapes */}
        <GeometricDarkShapes />
        {/* Overlay gradien halus untuk menyatukan shape */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 z-0" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block bg-[#dc2626] text-white px-5 py-2 rounded-full text-xs tracking-[0.2em] uppercase mb-6 font-bold shadow-lg ring-4 ring-red-500/30">
              FASILITAS KAMPUS
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
              Fasilitas Kampus & Asrama untuk Pembentukan Pribadi dan
              Pemerlengkapan Pelayanan
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 leading-relaxed max-w-3xl mx-auto font-light">
              Seluruh aspek kehidupan di dalam kampus dan asrama diarahkan untuk
              membentuk hati yang mengasihi Tuhan dan sesama bagi kemuliaan
              Tuhan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- INTRO QUOTE SECTION --- */}
      <section className="relative py-20 bg-white overflow-hidden text-[#1e3a8a]">
        <StructuralGridPattern />
        {/* Aksen Geometris Sudut */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-[#dc2626]/20 rounded-tl-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-40 h-40 border-r-4 border-b-4 border-[#1e3a8a]/10 rounded-br-3xl pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center relative"
          >
            {/* Dekorasi Garis Merah */}
            <div className="w-20 h-1.5 bg-[#dc2626] rounded-full mx-auto mb-10" />

            <p className="text-2xl md:text-3xl font-bold leading-relaxed italic relative z-10 px-6">
              <span className="text-5xl text-[#dc2626]/40 absolute -top-5 -left-2 font-serif">
                &ldquo;
              </span>
              STTB merupakan sekolah Alkitab yang membentuk dan memperlengkapi
              para pelayan Tuhan bagi pelayanan di dalam tubuh Kristus dan di
              tengah dunia.
              <span className="text-5xl text-[#dc2626]/40 absolute -bottom-10 -right-2 font-serif">
                &rdquo;
              </span>
            </p>

            <p className="text-lg md:text-xl text-gray-700 mt-12 leading-relaxed font-medium">
              Fasilitas-fasilitas di kampus dan asrama STTB dirancang untuk
              mengoptimalkan proses pembentukan pribadi dan pemerlengkapan
              pelayanan mahasiswa. Sepanjang masa studi, mahasiswa akan{" "}
              <strong className="text-[#1e3a8a] font-extrabold">
                belajar bersama
              </strong>
              ,{" "}
              <strong className="text-[#1e3a8a] font-extrabold">
                bertumbuh bersama
              </strong>
              , dan{" "}
              <strong className="text-[#1e3a8a] font-extrabold">
                hidup bersama
              </strong>{" "}
              dalam komunitas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- THREE PILLARS SECTION --- */}
      <section className="relative py-24 bg-gray-50 overflow-hidden text-[#1e3a8a]">
        <StructuralGridPattern />
        {/* Aksen Sudut Besar samar di background */}
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-white rotate-45 rounded-3xl pointer-events-none z-0" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="space-y-20">
            {campusLifeSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}
              >
                {/* Text Content */}
                <div
                  className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                >
                  <div
                    className={`inline-flex items-center gap-3 bg-gradient-to-r ${section.color} text-white px-5 py-2.5 rounded-xl mb-6 shadow-md`}
                  >
                    <section.icon size={22} strokeWidth={2.5} />
                    <span className="font-bold text-sm tracking-[0.2em]">
                      {section.title.toUpperCase()}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-[#1e3a8a] mb-6 tracking-tight">
                    {section.title} Bersama di Kampus STTB
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    {section.description}
                  </p>
                </div>

                {/* Image Content */}
                <div
                  className={`lg:col-span-5 relative ${index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                >
                  {/* Bingkai dekoratif geometris di belakang gambar */}
                  <div className="absolute -inset-4 border-2 border-[#dc2626]/20 rounded-3xl transform rotate-3 z-0" />
                  <div
                    className={`absolute -inset-4 bg-gradient-to-r ${section.color} opacity-10 rounded-3xl transform -rotate-2 z-0`}
                  />

                  <ImageWithFallback
                    src={section.image}
                    alt={section.title}
                    className="rounded-2xl shadow-2xl w-full h-80 object-cover relative z-10 border-4 border-white"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FACILITIES GRID SECTION --- */}
      <section className="relative py-24 bg-white overflow-hidden text-[#1e3a8a]">
        <StructuralGridPattern />
        {/* Aksen Sudut Merah di Kanan Atas */}
        <div className="absolute top-0 right-0 w-64 h-64 border-r-8 border-t-8 border-[#dc2626]/10 rounded-tr-[50px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 relative">
            {/* Ikon dekoratif samar di bg judul */}
            <Building2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#1e3a8a]/5 size-40 z-0" />

            <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-5 tracking-tight relative z-10">
              Fasilitas Kampus Modern
            </h2>
            <p className="text-xl text-gray-600 font-medium relative z-10">
              Infrastruktur lengkap yang mendukung proses belajar, bertumbuh, dan
              hidup bersama dalam komunitas STTB.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayFacilities.map((facility, index) => (
              <Link
                key={index}
                href={`/facilities/${facility.slug}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay Gradien */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1930]/90 via-[#0a1930]/40 to-transparent" />

                    {/* Icon Badge */}
                    <div className="absolute bottom-4 left-4 z-10 flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 shadow-inner">
                        <facility.icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-xl font-extrabold text-white tracking-tight">
                        {facility.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-base text-gray-700 leading-relaxed font-medium">
                      {facility.description}
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-[#dc2626] font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                      <span>Lihat Detail</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- ASRAMA & SPORTS SECTION --- */}
      <section className="relative py-28 bg-gradient-to-br from-[#0a1930] to-[#1e3a8a] overflow-hidden">
        {/* Background Shapes khas area gelap */}
        <GeometricDarkShapes />
        {/* Aksen Grid Garis tipis untuk nuansa teknis/arsitektur */}
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 opacity-[0.05] text-white"
        >
          <defs>
            <pattern
              id="asramaGrid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(15)"
            >
              <circle cx="1" cy="1" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#asramaGrid)" />
        </svg>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-block bg-[#dc2626] text-white px-5 py-2 rounded-full text-xs tracking-[0.2em] mb-5 font-bold shadow-md">
                LIVING IN COMMUNITY
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                Fasilitas Asrama & Olahraga terintegrasi
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed max-w-3xl mx-auto">
                Empat kompleks asrama terintegrasi di lokasi kampus: asrama
                dosen, ASPRA (putra), ASPRI (putri), dan asrama pascasarjana/tamu,
                dilengkapi berbagai sarana olahraga untuk kesehatan civitas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
            >
              {asramaFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                    <Dumbbell className="text-[#dc2626]" size={20} strokeWidth={2.5} />
                  </div>
                  <span className="text-white font-semibold text-base tracking-tight">
                    {feature}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}