"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { BookOpen, ArrowRight, Download } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-16 md:py-20 bg-[#0a1930] overflow-hidden">

      {/* --- UNIQUE BACKGROUND LAYER: QUIET ARCH & FADE --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-center items-center">

        {/* Glow efek samar di pojok */}
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-white opacity-5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#dc2626] opacity-5 rounded-full blur-[100px]" />

        {/* Lengkungan geometris statis (Arch) */}
        <div className="absolute -bottom-1/4 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] text-white max-w-7xl">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none" stroke="currentColor" strokeWidth="0.25">
            <path d="M 0 100 A 50 50 0 0 1 100 100" />
            <path d="M 10 100 A 40 40 0 0 1 90 100" />
            <path d="M 20 100 A 30 30 0 0 1 80 100" />
          </svg>
        </div>
      </div>
      {/* ---------------------------------------------------- */}

      <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tight">
              Siap Memulai Perjalanan
              <br className="hidden md:block" />
              <span className="text-[#dc2626]"> Teologi Anda?</span>
            </h2>
            <p className="text-lg md:text-xl text-blue-100/90 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              Bergabunglah dengan komunitas mahasiswa yang passionate untuk belajar, tumbuh, dan melayani. Pendaftaran untuk tahun akademik 2026/2027 sudah dibuka!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-[15px] md:text-base transition-all duration-300 shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-900/30"
              >
                <BookOpen size={20} />
                Daftar Sekarang
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-[15px] md:text-base transition-all duration-300 hover:-translate-y-1"
              >
                <Download size={20} />
                Download Brosur
              </Link>
            </div>

            {/* Stats (Borderless Minimalist Tabs) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { value: "Open", label: "Status PMB" },
                { value: "15 Apr", label: "Deadline Gelombang 1" },
                { value: "Tersedia", label: "Beasiswa Merit" },
                { value: "Online", label: "Proses Pendaftaran" },
              ].map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center shadow-sm hover:border-white/20 transition-colors">
                  <div className="text-2xl md:text-3xl font-black text-[#dc2626] mb-1 drop-shadow-sm">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-blue-100 font-medium tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}