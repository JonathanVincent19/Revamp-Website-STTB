"use client";

import { motion } from "motion/react";
import { Calendar, Tag, Clock } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const newsItems = [
  {
    title: "Pendaftaran Mahasiswa Baru 2026/2027 Dibuka",
    category: "Akademik",
    date: "15 Maret 2026",
    excerpt: "STTB membuka pendaftaran mahasiswa baru untuk tahun akademik 2026/2027. Daftar sekarang dan raih kesempatan beasiswa!",
    image: "https://images.unsplash.com/photo-1738949538943-e54722a44ffc",
  },
  {
    title: "STTB Raih Akreditasi BAN-PT Peringkat B",
    category: "Institusional",
    date: "10 Maret 2026",
    excerpt: "Selamat! STTB berhasil meraih akreditasi dari BAN-PT dengan peringkat B, menandai komitmen kami terhadap kualitas pendidikan.",
    image: "https://images.unsplash.com/photo-1758270704524-596810e891b5",
  },
  {
    title: "Retreat Mahasiswa 2026: 'Transformasi Dimulai Dari Kita'",
    category: "Kegiatan Mahasiswa",
    date: "5 Maret 2026",
    excerpt: "Ratusan mahasiswa STTB mengikuti retreat tahunan yang mengusung tema transformasi pribadi dan pelayanan.",
    image: "https://images.unsplash.com/photo-1763811938846-0de457436794",
  },
  {
    title: "Seminar Nasional Teologi Kontekstual",
    category: "Akademik",
    date: "1 Maret 2026",
    excerpt: "STTB menyelenggarakan seminar nasional dengan tema 'Teologi untuk Transformasi Urban'.",
    image: "https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7",
  },
];

export function NewsPage() {
  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Berita & Acara
            </h1>
            <p className="text-xl text-blue-50">
              Informasi terkini seputar kegiatan dan pencapaian STTB
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {newsItems.map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="relative h-56">
                  <ImageWithFallback
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 bg-[#dbeafe] text-[#1e3a8a] px-3 py-1 rounded-full text-xs">
                      <Tag size={12} />
                      {news.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-gray-500">
                      <Clock size={14} />
                      {news.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e3a8a] mb-3">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {news.excerpt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
