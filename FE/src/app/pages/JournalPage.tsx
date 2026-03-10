"use client";

import { motion } from "motion/react";
import { BookOpen, Download, FileText, Upload } from "lucide-react";

export function JournalPage() {
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
              E-Journal Transformatio
            </h1>
            <p className="text-xl text-blue-50">
              Jurnal Teologi dan Transformasi Sosial-Budaya
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="bg-gradient-to-br from-[#dbeafe] to-white rounded-2xl p-8 md:p-12 border-2 border-[#1e3a8a] mb-12">
            <h2 className="text-3xl font-black text-[#1e3a8a] mb-4">
              Tentang Transformatio
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Transformatio adalah jurnal ilmiah peer-reviewed yang mempublikasikan artikel penelitian dalam bidang teologi, misi urban, dan transformasi sosial-budaya dari perspektif Kristen.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#1e3a8a]">2x/Tahun</div>
                <div className="text-sm text-gray-600">Terbit</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#1e3a8a]">ISSN</div>
                <div className="text-sm text-gray-600">Teregistrasi</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#1e3a8a]">Open</div>
                <div className="text-sm text-gray-600">Access</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#1e3a8a]">Peer</div>
                <div className="text-sm text-gray-600">Review</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: FileText,
                title: "Panduan Penulis",
                desc: "Template dan pedoman penulisan artikel",
              },
              {
                icon: Upload,
                title: "Submit Artikel",
                desc: "Kirim artikel untuk review",
              },
              {
                icon: BookOpen,
                title: "Edisi Terbaru",
                desc: "Akses jurnal edisi terkini",
              },
              {
                icon: Download,
                title: "Arsip Jurnal",
                desc: "Download edisi sebelumnya",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-[#1e3a8a] hover:shadow-lg transition-all"
              >
                <item.icon className="text-[#f59e0b] mb-3" size={32} />
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
