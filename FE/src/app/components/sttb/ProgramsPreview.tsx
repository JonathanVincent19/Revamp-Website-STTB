"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { GraduationCap, BookOpen, ArrowRight, Clock } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const programs = [
  {
    level: "S1",
    title: "Sarjana Teologi",
    description:
      "Program Sarjana Teologi (S.Th.) dirancang untuk mempersiapkan mahasiswa menjadi hamba Tuhan yang memiliki pemahaman teologi yang mendalam dan keterampilan pelayanan yang efektif.",
    duration: "8 Semester",
    credits: "148 SKS",
    image: "https://images.unsplash.com/photo-1595315342809-fa10945ed07c",
    highlights: [
      "Studi Alkitab intensif",
      "Teologi Sistematika",
      "Praktek Pelayanan",
      "Misi & Evangelisme",
    ],
  },
  {
    level: "S2",
    title: "Magister Teologi",
    description:
      "Program Magister yang fokus pada transformasi budaya dan masyarakat melalui perspektif teologi Kristen, mempersiapkan pemimpin untuk pelayanan urban yang kontekstual.",
    duration: "4 Semester",
    credits: "48 SKS",
    image: "https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7",
    highlights: [
      "Teologi Kontekstual",
      "Transformasi Sosial",
      "Riset Akademis",
      "Urban Ministry",
    ],
  },
];

export function ProgramsPreview() {
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">

      {/* --- BACKGROUND SHAPES: PATHS & STRUCTURES (LEBIH TRANSPARAN) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Jalur Diagonal (Opacity diturunkan ke 4%) */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid_paths" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 100 M -10 10 L 10 -10 M 90 110 L 110 90" stroke="#1e3a8a" strokeWidth="1.5" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid_paths)" />
          </svg>
        </div>

        {/* Glow Merah di Kanan Atas (Opacity diturunkan ke 4%) */}
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full bg-[#dc2626] opacity-[0.04] blur-[100px]" />

        {/* Glow Biru di Kiri Bawah (Opacity diturunkan ke 3%) */}
        <div className="absolute -bottom-40 -left-20 w-[800px] h-[800px] rounded-full bg-[#1e3a8a] opacity-[0.03] blur-[120px]" />

        {/* Siluet Struktur Bangunan/Arsitektur Abstrak di Kiri (Opacity diturunkan ke 3%) */}
        <div className="absolute top-1/4 -left-10 text-[#1e3a8a] opacity-[0.03] rotate-12">
          <svg width="400" height="400" viewBox="0 0 100 120" fill="currentColor">
            <rect x="0" y="80" width="15" height="40" rx="4" />
            <rect x="25" y="60" width="15" height="60" rx="4" />
            <rect x="50" y="40" width="15" height="80" rx="4" />
            <rect x="75" y="20" width="15" height="100" rx="4" />
            <circle cx="50" cy="15" r="12" />
          </svg>
        </div>
      </div>
      {/* ----------------------------------------------- */}

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-[#dbeafe] text-[#1e3a8a] px-4 py-1.5 rounded-full text-sm tracking-wider mb-4 shadow-sm font-semibold">
              PROGRAM STUDI
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-4">
              Pilihan Program Akademik
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Kami menawarkan program pendidikan teologi yang komprehensif untuk berbagai tingkat akademis.
            </p>
          </motion.div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <ImageWithFallback
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-[#dc2626] text-white px-5 py-2 rounded-full font-bold text-xs tracking-wider shadow-md">
                    {program.level}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-black text-[#1e3a8a] mb-3 group-hover:text-[#dc2626] transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 font-light text-sm flex-1">
                  {program.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-6 mb-6 text-sm text-gray-500 border-t border-gray-100 pt-5">
                  <div className="flex items-center gap-2.5">
                    <Clock size={17} className="text-[#dc2626]" />
                    <span className="font-medium text-gray-700">{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <BookOpen size={17} className="text-[#dc2626]" />
                    <span className="font-medium text-gray-700">{program.credits}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-8 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  {program.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-sm text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] flex-shrink-0" />
                      <span className="font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 text-[#1e3a8a] font-bold hover:text-[#dc2626] transition-colors mt-auto group/link"
                >
                  Pelajari Lebih Lanjut
                  <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/programs"
            className="inline-flex items-center justify-center gap-2.5 bg-[#1e3a8a] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#dc2626] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <GraduationCap size={22} />
            Lihat Semua Program
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}