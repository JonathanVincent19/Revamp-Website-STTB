"use client";

import { motion } from "motion/react";
import { GraduationCap, BookOpen, Clock, Award, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ProgramsPage() {
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
              PROGRAM STUDI
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Program Akademik
            </h1>
            <p className="text-xl text-blue-50 leading-relaxed">
              Pilih program yang sesuai dengan panggilan pelayanan Anda
            </p>
          </motion.div>
        </div>
      </section>

      {/* S1 Program */}
      <section className="py-20 bg-white" id="s1">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-6">
                <GraduationCap size={20} />
                <span className="font-bold">PROGRAM SARJANA</span>
              </div>
              <h2 className="text-4xl font-black text-[#1e3a8a] mb-6">
                Sarjana Teologi (S.Th.)
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Program Sarjana Teologi dirancang untuk mempersiapkan mahasiswa menjadi hamba Tuhan yang memiliki pemahaman teologi yang mendalam, karakter Kristiani yang kuat, dan keterampilan pelayanan yang efektif.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-xl p-5 text-white">
                  <Clock className="mb-2" size={24} />
                  <div className="text-2xl font-bold mb-1">8 Semester</div>
                  <div className="text-sm text-blue-100">Durasi Program</div>
                </div>
                <div className="bg-gradient-to-br from-[#f59e0b] to-[#fbbf24] rounded-xl p-5 text-white">
                  <BookOpen className="mb-2" size={24} />
                  <div className="text-2xl font-bold mb-1">144 SKS</div>
                  <div className="text-sm text-amber-100">Total SKS</div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-[#1e3a8a] mb-4">Fokus Studi:</h3>
                <ul className="space-y-2">
                  {[
                    "Studi Alkitab (Perjanjian Lama & Baru)",
                    "Teologi Sistematika",
                    "Teologi Praktika & Pelayanan",
                    "Sejarah Gereja & Misi",
                    "Bahasa Alkitab (Ibrani & Yunani)",
                    "Apologetika & Etika Kristen",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 size={20} className="text-[#f59e0b] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1595315342809-fa10945ed07c"
                alt="Program S1"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Curriculum Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
          >
            <div className="bg-[#1e3a8a] text-white px-6 py-4">
              <h3 className="text-xl font-bold">Struktur Kurikulum S1</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left font-bold text-[#1e3a8a]">Kategori</th>
                    <th className="px-6 py-3 text-left font-bold text-[#1e3a8a]">SKS</th>
                    <th className="px-6 py-3 text-left font-bold text-[#1e3a8a]">Deskripsi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { category: "Mata Kuliah Inti", sks: "96", desc: "Alkitab, Teologi, Bahasa" },
                    { category: "Mata Kuliah Pilihan", sks: "24", desc: "Konsentrasi khusus" },
                    { category: "Praktek Pelayanan", sks: "12", desc: "Magang & Praktikum" },
                    { category: "Skripsi", sks: "6", desc: "Penelitian akhir" },
                    { category: "Matrikulasi", sks: "6", desc: "Persiapan akademik" },
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-bold text-gray-900">{row.category}</td>
                      <td className="px-6 py-4 text-[#f59e0b] font-bold">{row.sks}</td>
                      <td className="px-6 py-4 text-gray-600">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* S2 Program */}
      <section className="py-20 bg-gray-50" id="s2">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7"
                alt="Program S2"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-6">
                <Award size={20} />
                <span className="font-bold">PROGRAM MAGISTER</span>
              </div>
              <h2 className="text-4xl font-black text-[#1e3a8a] mb-6">
                Magister Teologi  (M.Th.)
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Program Magister yang fokus pada transformasi budaya dan masyarakat melalui perspektif teologi Kristen, mempersiapkan pemimpin untuk pelayanan urban yang kontekstual dan transformatif.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-xl p-5 text-white">
                  <Clock className="mb-2" size={24} />
                  <div className="text-2xl font-bold mb-1">4 Semester</div>
                  <div className="text-sm text-blue-100">Durasi Program</div>
                </div>
                <div className="bg-gradient-to-br from-[#f59e0b] to-[#fbbf24] rounded-xl p-5 text-white">
                  <BookOpen className="mb-2" size={24} />
                  <div className="text-2xl font-bold mb-1">48 SKS</div>
                  <div className="text-sm text-amber-100">Total SKS</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-[#1e3a8a] mb-4">Fokus Studi:</h3>
                <ul className="space-y-2">
                  {[
                    "Teologi Kontekstual & Urban",
                    "Transformasi Sosial & Budaya",
                    "Metodologi Penelitian Teologi",
                    "Kepemimpinan Transformatif",
                    "Etika Sosial & Ekonomi",
                    "Tesis Penelitian",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 size={20} className="text-[#f59e0b] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Matriculation */}
      <section className="py-20 bg-white" id="matriculation">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
              Program Matrikulasi
            </h2>
            <p className="text-lg text-gray-600">
              Persiapan akademik untuk mahasiswa baru
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#dbeafe] to-white rounded-2xl p-8 md:p-12 border-2 border-[#1e3a8a]">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Program Matrikulasi dirancang khusus untuk mahasiswa baru yang memerlukan persiapan akademik tambahan sebelum memulai program sarjana. Program ini mencakup mata kuliah dasar dalam Alkitab, Teologi, dan Bahasa Inggris.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-bold text-[#1e3a8a] mb-3">Durasi</h4>
                <p className="text-gray-600">1 Semester (6 SKS)</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-bold text-[#1e3a8a] mb-3">Mata Kuliah</h4>
                <p className="text-gray-600">Pengantar Alkitab, Teologi Dasar, Bahasa Inggris</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
