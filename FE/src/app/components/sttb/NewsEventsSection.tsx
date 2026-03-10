"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Calendar, ArrowRight, Clock, Tag } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const news = [
  {
    category: "Akademik",
    title: "Pendaftaran Mahasiswa Baru 2026/2027 Dibuka",
    excerpt:
      "STTB membuka pendaftaran mahasiswa baru untuk tahun akademik 2026/2027. Daftar sekarang dan raih kesempatan beasiswa!",
    date: "15 Maret 2026",
    image: "https://images.unsplash.com/photo-1738949538943-e54722a44ffc",
    badge: "Terbaru",
  },
  {
    category: "Institusional",
    title: "STTB Raih Akreditasi BAN-PT dengan Peringkat B",
    excerpt:
      "Selamat! STTB berhasil meraih akreditasi dari BAN-PT dengan peringkat B, menandai komitmen kami terhadap kualitas pendidikan.",
    date: "10 Maret 2026",
    image: "https://images.unsplash.com/photo-1758270704524-596810e891b5",
    badge: null,
  },
  {
    category: "Kegiatan Mahasiswa",
    title: "Retreat Mahasiswa 2026: 'Transformasi Dimulai Dari Kita'",
    excerpt:
      "Ratusan mahasiswa STTB mengikuti retreat tahunan yang mengusung tema transformasi pribadi dan pelayanan.",
    date: "5 Maret 2026",
    image: "https://images.unsplash.com/photo-1763811938846-0de457436794",
    badge: null,
  },
];

const events = [
  {
    date: "25",
    month: "Apr",
    title: "Seminar Teologi Kontekstual",
    time: "14:00 - 17:00 WIB",
    location: "Auditorium STTB",
  },
  {
    date: "15",
    month: "Mei",
    title: "Workshop: Khotbah Ekspositif",
    time: "09:00 - 16:00 WIB",
    location: "Ruang Seminar",
  },
  {
    date: "20",
    month: "Jun",
    title: "Wisuda Sarjana & Magister 2026",
    time: "10:00 - 12:00 WIB",
    location: "Gedung Utama",
  },
];

export function NewsEventsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* News Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="inline-block bg-[#dbeafe] text-[#1e3a8a] px-4 py-1.5 rounded-full text-sm tracking-wider mb-2">
                  BERITA TERKINI
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-[#1e3a8a]">
                  Berita & Artikel
                </h2>
              </div>
              <Link
                href="/news"
                className="hidden md:inline-flex items-center gap-2 text-[#1e3a8a] font-bold hover:text-[#f59e0b] transition-colors"
              >
                Lihat Semua
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="space-y-6">
              {news.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:border-[#1e3a8a] hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="relative md:w-64 h-48 md:h-auto overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {item.badge && (
                        <div className="absolute top-3 right-3">
                          <span className="bg-[#f59e0b] text-white px-3 py-1 rounded-full text-xs font-bold">
                            {item.badge}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center gap-1.5 bg-[#dbeafe] text-[#1e3a8a] px-3 py-1 rounded-full text-xs">
                          <Tag size={12} />
                          {item.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm text-gray-500">
                          <Clock size={14} />
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#1e3a8a] mb-2 group-hover:text-[#f59e0b] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {item.excerpt}
                      </p>
                      <Link
                        href="/news"
                        className="inline-flex items-center gap-2 text-[#1e3a8a] font-bold text-sm hover:text-[#f59e0b] transition-colors"
                      >
                        Baca Selengkapnya
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 md:hidden">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-[#1e3a8a] font-bold hover:text-[#f59e0b] transition-colors"
              >
                Lihat Semua Berita
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Events Sidebar */}
          <div>
            <div className="mb-8">
              <span className="inline-block bg-[#dbeafe] text-[#1e3a8a] px-4 py-1.5 rounded-full text-sm tracking-wider mb-2">
                ACARA MENDATANG
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#1e3a8a]">
                Agenda
              </h2>
            </div>

            <div className="space-y-4">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] rounded-xl p-5 text-white hover:shadow-xl transition-shadow"
                >
                  <div className="flex gap-4">
                    {/* Date Badge */}
                    <div className="flex-shrink-0 bg-white/10 rounded-lg p-3 text-center">
                      <div className="text-2xl font-black text-[#fbbf24]">
                        {event.date}
                      </div>
                      <div className="text-xs text-blue-100 uppercase">
                        {event.month}
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="flex-1">
                      <h4 className="font-bold mb-2 leading-tight">
                        {event.title}
                      </h4>
                      <div className="space-y-1 text-sm text-blue-100">
                        <div className="flex items-center gap-2">
                          <Clock size={14} />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              href="/news"
              className="mt-6 block text-center bg-white border-2 border-[#1e3a8a] text-[#1e3a8a] px-6 py-3 rounded-lg font-bold hover:bg-[#1e3a8a] hover:text-white transition-all"
            >
              Lihat Semua Acara
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
