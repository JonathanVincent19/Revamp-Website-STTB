"use client";

import { motion } from "motion/react";
import { Target, History, Users, Award } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function AboutPage() {
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
              TENTANG KAMI
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Sekolah Tinggi Teologi Bandung
            </h1>
            <p className="text-xl text-blue-50 leading-relaxed">
              Mempersiapkan pastor-scholars untuk pelayanan transformatif sejak 1959
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white" id="vision">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-6">
                <Target size={20} />
                <span className="font-bold">VISI & MISI</span>
              </div>
              <h2 className="text-4xl font-black text-[#1e3a8a] mb-6">
                Visi Kami
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Menjadi lembaga pendidikan teologi terkemuka yang menghasilkan pemimpin rohani yang transformatif, berkomitmen pada kebenaran Alkitab, dan berdampak bagi transformasi gereja dan masyarakat.
              </p>
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">Misi Kami</h3>
              <ul className="space-y-3">
                {[
                  "Memberikan pendidikan teologi yang berkualitas tinggi dan berlandaskan Alkitab",
                  "Mengembangkan karakter Kristiani dan keterampilan pelayanan mahasiswa",
                  "Melakukan penelitian teologi yang relevan dengan konteks Indonesia",
                  "Membangun kemitraan dengan gereja dan lembaga pelayanan",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#f59e0b] mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1543702404-38c2035462ad"
                alt="STTB Vision"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-gray-50" id="history">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-6">
              <History size={20} />
              <span className="font-bold">SEJARAH</span>
            </div>
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
              Perjalanan Kami
            </h2>
            <p className="text-lg text-gray-600">
              Lebih dari 65 tahun pengalaman dalam pendidikan teologi
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: "1959",
                  title: "Pendirian STTB",
                  description:
                    "STTB didirikan dengan visi untuk menghasilkan hamba Tuhan yang berkualitas untuk melayani gereja di Indonesia.",
                },
                {
                  year: "1985",
                  title: "Pengembangan Kurikulum",
                  description:
                    "Pembaruan kurikulum dengan fokus pada teologi kontekstual dan pelayanan urban.",
                },
                {
                  year: "2005",
                  title: "Program Magister",
                  description:
                    "Pembukaan program Magister Teologi untuk memenuhi kebutuhan pendidikan lanjutan.",
                },
                {
                  year: "2026",
                  title: "Akreditasi BAN-PT",
                  description:
                    "Meraih akreditasi dari BAN-PT sebagai bukti komitmen terhadap kualitas pendidikan.",
                },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-3xl font-black text-[#f59e0b]">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-md border-l-4 border-[#1e3a8a]">
                    <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white" id="leadership">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-6">
              <Users size={20} />
              <span className="font-bold">KEPEMIMPINAN</span>
            </div>
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
              Tim Kepemimpinan
            </h2>
            <p className="text-lg text-gray-600">
              Dipimpin oleh para akademisi dan pelayan yang berpengalaman
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Dr. John Doe, M.Th.",
                position: "Ketua STTB",
                image: "https://images.unsplash.com/photo-1758270704524-596810e891b5",
              },
              {
                name: "Dr. Jane Smith, M.Div.",
                position: "Wakil Ketua Akademik",
                image: "https://images.unsplash.com/photo-1758270704524-596810e891b5",
              },
              {
                name: "Dr. Michael Brown, Th.D.",
                position: "Dekan Fakultas Teologi",
                image: "https://images.unsplash.com/photo-1758270704524-596810e891b5",
              },
            ].map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-64 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6]" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-gray-600">{leader.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
