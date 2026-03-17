"use client";

import { motion } from "motion/react";
import { GraduationCap, BookOpen, Users, ShieldCheck, Library, History } from "lucide-react";

// Data diperbarui dengan penambahan Dosen dan Program Studi
const stats = [
  {
    icon: History,
    value: "65+",
    label: "Tahun Pengalaman",
    description: "Berdiri Sejak 1959",
    color: "text-[#f59e0b]", // Amber
  },
  {
    icon: GraduationCap,
    value: "1,200+",
    label: "Alumni Tersebar",
    description: "Di seluruh Indonesia",
    color: "text-[#3b82f6]", // Blue
  },
  {
    icon: Library,
    value: "8",
    label: "Program Studi",
    description: "S1 dan S2 Lengkap",
    color: "text-[#10b981]", // Emerald
  },
  {
    icon: Users,
    value: "30+",
    label: "Dosen Pengajar",
    description: "Berkualitas & Berdedikasi",
    color: "text-[#8b5cf6]", // Purple
  },
  {
    icon: BookOpen,
    value: "148",
    label: "SKS Program S1",
    description: "Kurikulum Komprehensif",
    color: "text-[#ec4899]", // Pink
  },
  {
    icon: ShieldCheck,
    value: "BAN-PT",
    label: "Terakreditasi",
    description: "Standar Nasional",
    color: "text-[#dc2626]", // Red
  },
];

export function StatsSection() {
  // Kita menduplikasi array stats beberapa kali agar saat di-scroll secara infinite tidak ada ruang kosong
  const duplicatedStats = [...stats, ...stats, ...stats];

  return (
    <section className="relative py-10 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a] overflow-hidden">

      {/* --- BACKGROUND SHAPES & LIGHTING --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Glow efek di tengah (diperkecil) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-blue-500/20 blur-[100px] rounded-[100%]" />
        {/* Pola grid transparan */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>
      {/* ------------------------------------- */}

      {/* --- INFINITE CAROUSEL / MARQUEE --- */}
      <div className="relative w-full overflow-hidden flex z-10">

        {/* Inject custom CSS animation for smooth marquee */}
        <style>{`
          @keyframes marquee-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-100% / 3)); } /* Bergerak sepertiga karena kita menduplikasi 3x */
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee-scroll 40s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Fading Edges Overlay (Efek blur di tepi layar) */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#0f172a] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#0f172a] to-transparent z-20 pointer-events-none" />

        {/* Scrolling Container */}
        <div className="animate-marquee gap-5 px-3 py-2">
          {duplicatedStats.map((stat, index) => (
            <div
              key={index}
              className="w-[240px] md:w-[280px] bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/15 hover:border-white/30 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 cursor-default group shadow-lg"
            >
              {/* Icon Container (Diperkecil) */}
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <stat.icon className={stat.color} size={24} strokeWidth={2} />
              </div>

              {/* Value (Diperkecil sedikit) */}
              <div className="text-3xl md:text-4xl font-black text-white mb-1 tracking-tight">
                {stat.value}
              </div>

              {/* Label (Diperkecil) */}
              <div className="text-base font-bold text-gray-200 mb-1">
                {stat.label}
              </div>

              {/* Description (Diperkecil) */}
              <div className="text-xs text-blue-200/70 font-medium">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}