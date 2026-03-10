"use client";

import { motion } from "motion/react";
import { Library, Search, BookOpen, Download } from "lucide-react";

export function LibraryPage() {
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
              Perpustakaan STTB
            </h1>
            <p className="text-xl text-blue-50">
              Koleksi lengkap buku teologi dan sumber referensi akademis
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-12">
            <div className="flex items-center gap-4">
              <Search className="text-gray-400" size={24} />
              <input
                type="text"
                placeholder="Cari buku, jurnal, atau artikel..."
                className="flex-1 bg-transparent border-none outline-none text-lg"
              />
              <button className="bg-[#1e3a8a] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#f59e0b] transition-colors">
                Cari
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "10,000+ Buku",
                desc: "Koleksi buku teologi terlengkap",
              },
              {
                icon: Library,
                title: "Digital Library",
                desc: "Akses online 24/7",
              },
              {
                icon: Download,
                title: "E-Resources",
                desc: "Jurnal dan artikel digital",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#dbeafe] to-white rounded-xl p-8 text-center border-2 border-[#1e3a8a]/20"
              >
                <item.icon className="mx-auto mb-4 text-[#1e3a8a]" size={48} />
                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#1e3a8a] rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Jam Operasional</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-bold">Senin - Jumat</p>
                <p>08:00 - 20:00 WIB</p>
              </div>
              <div>
                <p className="font-bold">Sabtu</p>
                <p>09:00 - 15:00 WIB</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
