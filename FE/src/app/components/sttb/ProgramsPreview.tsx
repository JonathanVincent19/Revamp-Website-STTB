"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { GraduationCap, BookOpen, ArrowRight, Clock, Users } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const programs = [
  {
    level: "S1",
    title: "Sarjana Teologi",
    description:
      "Program Sarjana Teologi (S.Th.) dirancang untuk mempersiapkan mahasiswa menjadi hamba Tuhan yang memiliki pemahaman teologi yang mendalam dan keterampilan pelayanan yang efektif.",
    duration: "8 Semester",
    credits: "144 SKS",
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
    title: "Magister Teologi Transformasi Budaya & Masyarakat",
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-[#dbeafe] text-[#1e3a8a] px-4 py-1.5 rounded-full text-sm tracking-wider mb-4">
              PROGRAM STUDI
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-4">
              Pilihan Program Akademik
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Kami menawarkan program pendidikan teologi yang komprehensif untuk berbagai tingkat akademis
            </p>
          </motion.div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#f59e0b] text-white px-4 py-1.5 rounded-full font-bold text-sm">
                    {program.level}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-black text-[#1e3a8a] mb-3 group-hover:text-[#f59e0b] transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {program.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-[#1e3a8a]" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} className="text-[#1e3a8a]" />
                    <span>{program.credits}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {program.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 text-[#1e3a8a] font-bold hover:text-[#f59e0b] transition-colors"
                >
                  Pelajari Lebih Lanjut
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/programs"
            className="inline-flex items-center justify-center gap-2 bg-[#1e3a8a] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#f59e0b] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
