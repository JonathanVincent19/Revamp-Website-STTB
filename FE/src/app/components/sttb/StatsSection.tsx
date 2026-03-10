"use client";

import { motion } from "motion/react";
import { GraduationCap, BookOpen, Users, Award } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    value: "65+",
    label: "Tahun Pengalaman",
    description: "Sejak 1959",
  },
  {
    icon: Users,
    value: "1,200+",
    label: "Alumni",
    description: "Di seluruh Indonesia",
  },
  {
    icon: BookOpen,
    value: "144 SKS",
    label: "Program S1",
    description: "Kurikulum lengkap",
  },
  {
    icon: Award,
    value: "Terakreditasi",
    label: "BAN-PT",
    description: "Standar nasional",
  },
];

export function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4">
                <stat.icon className="text-[#fbbf24]" size={32} />
              </div>
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-bold text-[#fbbf24] mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-blue-100">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
