"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { BookOpen, ArrowRight, Download } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#fbbf24] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Siap Memulai Perjalanan
              <br />
              <span className="text-[#fbbf24]">Teologi Anda?</span>
            </h2>
            <p className="text-xl text-blue-50 mb-10 leading-relaxed max-w-2xl mx-auto">
              Bergabunglah dengan komunitas mahasiswa yang passionate untuk belajar, tumbuh, dan melayani. Pendaftaran untuk tahun akademik 2026/2027 sudah dibuka!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center gap-2 bg-[#f59e0b] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#fbbf24] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <BookOpen size={22} />
                Daftar Sekarang
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all"
              >
                <Download size={22} />
                Download Brosur
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/20">
              {[
                { value: "Open", label: "Status PMB" },
                { value: "15 Apr", label: "Deadline Gelombang 1" },
                { value: "Tersedia", label: "Beasiswa Merit" },
                { value: "Online", label: "Proses Pendaftaran" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-[#fbbf24] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
