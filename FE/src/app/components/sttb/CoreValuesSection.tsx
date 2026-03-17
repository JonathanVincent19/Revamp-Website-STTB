"use client";

import { motion } from "motion/react";
import { Cross, Heart, Lightbulb, Users, Globe, Book } from "lucide-react";

const values = [
  {
    icon: Cross,
    title: "Christ-Centered",
    description: "Berpusat pada Kristus dalam setiap aspek pendidikan dan pelayanan.",
    color: "text-[#1e3a8a]",
    hoverBorder: "group-hover:bg-[#1e3a8a]"
  },
  {
    icon: Book,
    title: "Academic Excellence",
    description: "Keunggulan akademis dengan standar kualitas internasional.",
    color: "text-[#dc2626]",
    hoverBorder: "group-hover:bg-[#dc2626]"
  },
  {
    icon: Heart,
    title: "Transformative Ministry",
    description: "Pelayanan yang berdampak dan transformatif untuk masyarakat.",
    color: "text-[#1e3a8a]",
    hoverBorder: "group-hover:bg-[#1e3a8a]"
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "Membangun komunitas rohani yang solid dan saling mendukung.",
    color: "text-[#dc2626]",
    hoverBorder: "group-hover:bg-[#dc2626]"
  },
  {
    icon: Globe,
    title: "Urban Mission",
    description: "Fokus pada misi urban dan transformasi peradaban kota.",
    color: "text-[#1e3a8a]",
    hoverBorder: "group-hover:bg-[#1e3a8a]"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Inovasi berkelanjutan dalam metode pengajaran dan pelayanan.",
    color: "text-[#dc2626]",
    hoverBorder: "group-hover:bg-[#dc2626]"
  },
];

export function CoreValuesSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-[#fafafa]">

      {/* --- BACKGROUND LAYER: STRUKTUR & BLUEPRINT (MINIMALIS) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-7xl relative h-full border-x border-gray-200/50">
          {/* Garis Vertikal Tipis */}
          <div className="absolute top-0 bottom-0 left-1/3 w-px bg-gray-200/50" />
          <div className="absolute top-0 bottom-0 left-2/3 w-px bg-gray-200/50" />

          {/* Garis Horizontal Tipis */}
          <div className="absolute top-1/3 left-0 right-0 h-px bg-gray-200/50" />
          <div className="absolute top-2/3 left-0 right-0 h-px bg-gray-200/50" />

          {/* Anchor Points (Tanda Plus) untuk kesan presisi/fondasi */}
          <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 text-gray-400 text-xs">+</div>
          <div className="absolute top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/2 text-gray-300 text-xs">+</div>
          <div className="absolute top-2/3 left-1/3 -translate-x-1/2 -translate-y-1/2 text-gray-300 text-xs">+</div>
          <div className="absolute top-2/3 left-2/3 -translate-x-1/2 -translate-y-1/2 text-gray-300 text-xs">+</div>
        </div>
      </div>
      {/* -------------------------------------------------------- */}

      <div className="container relative z-10 mx-auto px-4 lg:px-8">

        {/* Section Header (Editorial Style / Rata Kiri) */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Garis Aksen Pengganti Badge */}
            <div className="h-1 w-12 bg-[#dc2626] mb-6" />
            <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-6 tracking-tight">
              Fondasi yang Kuat.
            </h2>
            <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-2xl">
              Nilai-nilai inti yang membentuk identitas dan misi STTB dalam mempersiapkan pemimpin rohani masa depan yang transformatif.
            </p>
          </motion.div>
        </div>

        {/* Values Grid (Borderless Minimalist Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white p-8 md:p-10 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden"
            >
              {/* Animasi Garis Atas saat Hover */}
              <div className={`absolute top-0 left-0 w-full h-[3px] bg-gray-100 origin-left transition-all duration-500`} />
              <div className={`absolute top-0 left-0 w-full h-[3px] ${value.hoverBorder} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`} />

              <div className="flex flex-col h-full">
                {/* Ikon Minimalis */}
                <div className={`mb-8 ${value.color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 origin-left`}>
                  <value.icon size={36} strokeWidth={1.5} />
                </div>

                {/* Teks */}
                <h3 className="text-xl font-bold text-[#020817] mb-3 group-hover:text-[#1e3a8a] transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-500 font-light leading-relaxed text-[15px]">
                  {value.description}
                </p>

                {/* Angka Samar di Pojok Bawah (Sentuhan Editorial) */}
                <div className="absolute bottom-4 right-6 text-gray-100 font-black text-4xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 select-none">
                  0{index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}