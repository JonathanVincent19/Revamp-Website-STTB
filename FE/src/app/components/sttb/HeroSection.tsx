"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* --- MINIMALIST BACKGROUND & OVERLAY --- */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1543702404-38c2035462ad"
            alt="STTB Campus"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Overlay gelap yang solid di sebelah kiri, memudar ke kanan */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020817] via-[#020817]/80 to-transparent" />
        <div className="absolute inset-0 bg-[#020817]/30" />
      </div>
      {/* --------------------------------------- */}

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="max-w-4xl">

          {/* Garis Aksen Minimalis sebagai pengganti Badge */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "64px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1.5 bg-[#dc2626] mb-8"
          />

          {/* Main Heading dengan Tipografi Tajam */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[1.05] tracking-tight mb-8">
              Mempersiapkan <br />
              <span className="text-[#dc2626]">Pastor-Scholars</span> <br />
              Untuk Transformasi
            </h1>
          </motion.div>

          {/* Subtitle Minimalis */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl mb-12"
          >
            Sekolah Tinggi Teologi Bandung - Pusat pendidikan teologi yang memadukan kedalaman spiritual dengan keunggulan akademis untuk pelayanan urban yang transformatif.
          </motion.p>

          {/* Clean CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/admissions"
              className="group flex items-center justify-center gap-3 bg-[#dc2626] text-white px-8 py-4 rounded-full font-semibold transition-all hover:bg-red-700 w-full sm:w-auto"
            >
              Daftar Sekarang
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/about"
              className="flex items-center justify-center gap-3 bg-transparent text-white border border-white/30 px-8 py-4 rounded-full font-semibold transition-all hover:bg-white/10 hover:border-white/60 w-full sm:w-auto"
            >
              Kenali STTB
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}