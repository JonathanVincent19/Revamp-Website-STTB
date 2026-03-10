"use client";

import { motion } from "motion/react";
import { Video, FileText, Book, Play } from "lucide-react";

export function MediaPage() {
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
              Media & Sumber Daya
            </h1>
            <p className="text-xl text-blue-50">
              Akses khotbah digital, artikel teologi, dan media pendidikan Kristen
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Video, title: "Video Khotbah", desc: "Kumpulan khotbah dari dosen dan alumni" },
              { icon: FileText, title: "Artikel Teologi", desc: "Artikel dan esai teologi kontekstual" },
              { icon: Book, title: "Media PAK", desc: "Bahan Pendidikan Agama Kristen" },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center">
                <item.icon className="mx-auto mb-4 text-[#1e3a8a]" size={48} />
                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
