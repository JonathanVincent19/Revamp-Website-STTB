"use client";

import { motion } from "motion/react";
import { Library, Video, Home, BookOpen, Coffee, Wifi } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const facilities = [
  {
    name: "Perpustakaan",
    description: "Koleksi lebih dari 10.000 buku teologi, jurnal, dan sumber referensi digital",
    icon: Library,
    image: "https://images.unsplash.com/photo-1763811938846-0de457436794",
  },
  {
    name: "Studio Didasko",
    description: "Studio produksi multimedia untuk khotbah digital dan media pelayanan",
    icon: Video,
    image: "https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7",
  },
  {
    name: "Asrama (Aspra/Aspri)",
    description: "Fasilitas asrama modern dengan suasana komunitas yang mendukung",
    icon: Home,
    image: "https://images.unsplash.com/photo-1641443084236-b29fa3c673a3",
  },
  {
    name: "Ruang Kelas",
    description: "Ruang belajar ber-AC dengan fasilitas audio-visual modern",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7",
  },
  {
    name: "Rumah Doa",
    description: "Ruang ibadah dan doa untuk refleksi spiritual mahasiswa",
    icon: Coffee,
    image: "https://images.unsplash.com/photo-1543702404-38c2035462ad",
  },
  {
    name: "Internet & Wi-Fi",
    description: "Akses internet berkecepatan tinggi di seluruh area kampus",
    icon: Wifi,
    image: "https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7",
  },
];

export function FacilitiesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block bg-[#f59e0b] text-white px-4 py-1.5 rounded-full text-sm tracking-wider mb-4">
              FASILITAS KAMPUS
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Fasilitas Pendukung Studi
            </h1>
            <p className="text-xl text-blue-50 leading-relaxed">
              Lingkungan belajar yang kondusif dengan fasilitas modern untuk mendukung pendidikan teologi berkualitas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
                      <facility.icon className="text-white" size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                    {facility.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
              Keunggulan Fasilitas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Hybrid Learning Ready",
                description: "Dilengkapi dengan teknologi untuk pembelajaran online dan blended",
              },
              {
                title: "Lingkungan Kondusif",
                description: "Suasana kampus yang mendukung pertumbuhan spiritual dan akademis",
              },
              {
                title: "Akses 24/7",
                description: "Fasilitas perpustakaan digital dapat diakses kapan saja",
              },
              {
                title: "Lokasi Strategis",
                description: "Berada di pusat kota Bandung dengan akses transportasi mudah",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#dbeafe] to-white rounded-xl p-6 border-2 border-[#1e3a8a]/20"
              >
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
