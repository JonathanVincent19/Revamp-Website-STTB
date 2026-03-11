"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, BookOpen, Users } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1543702404-38c2035462ad"
          alt="STTB Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/80 via-[#1e3a8a]/50 to-[#1e3a8a]/20" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <span className="inline-block bg-[#f59e0b] text-white px-5 py-2 rounded-full text-sm tracking-wider mb-6 shadow-lg">
              CHRIST-CENTERED EDUCATION
            </span>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              Mempersiapkan
              <br />
              <span className="text-[#fbbf24]">Pastor-Scholars</span>
              <br />
              untuk Transformasi
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-blue-50 mb-10 leading-relaxed max-w-2xl">
              Sekolah Tinggi Teologi Bandung - Pusat pendidikan teologi yang memadukan kedalaman spiritual dengan keunggulan akademis untuk pelayanan urban yang transformatif.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center gap-2 bg-[#f59e0b] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#fbbf24] transition-all transform hover:-translate-y-1 shadow-xl"
              >
                <BookOpen size={22} />
                Daftar Sekarang
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all"
              >
                <Users size={22} />
                Lihat Program
              </Link>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { value: "8", label: "Program Studi", unit: "" },
              { value: "500+", label: "Mahasiswa Aktif", unit: "" },
              { value: "30+", label: "Dosen Berkualitas", unit: "" },
              { value: "1000+", label: "Alumni Tersebar", unit: "" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center"
              >
                <div className="text-3xl md:text-4xl font-black text-[#fbbf24] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-2 bg-[#f59e0b]/50 blur-xl" />
    </section>
  );
}
