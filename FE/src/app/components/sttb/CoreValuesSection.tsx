"use client";

import { motion } from "motion/react";
import { Cross, Heart, Lightbulb, Users, Globe, Book } from "lucide-react";

const values = [
  {
    icon: Cross,
    title: "Christ-Centered",
    description: "Berpusat pada Kristus dalam setiap aspek pendidikan dan pelayanan",
    color: "bg-blue-50 text-[#1e3a8a]",
  },
  {
    icon: Book,
    title: "Academic Excellence",
    description: "Keunggulan akademis dengan standar internasional",
    color: "bg-red-50 text-[#dc2626]",
  },
  {
    icon: Heart,
    title: "Transformative Ministry",
    description: "Pelayanan yang transformatif untuk masyarakat dan budaya",
    color: "bg-blue-50 text-[#1e3a8a]",
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "Membangun komunitas yang solid dan saling mendukung",
    color: "bg-red-50 text-[#dc2626]",
  },
  {
    icon: Globe,
    title: "Urban Mission",
    description: "Fokus pada misi urban dan transformasi kota",
    color: "bg-blue-50 text-[#1e3a8a]",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Inovasi dalam metode pengajaran dan pelayanan",
    color: "bg-red-50 text-[#dc2626]",
  },
];

export function CoreValuesSection() {
  return (
    <section className="py-20 bg-white">
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
              NILAI-NILAI KAMI
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-4">
              Fondasi yang Kuat
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nilai-nilai inti yang membentuk identitas dan misi STTB dalam mempersiapkan pemimpin rohani masa depan
            </p>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#1e3a8a] hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${value.color} mb-5 group-hover:scale-110 transition-transform`}
              >
                <value.icon size={28} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
