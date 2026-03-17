"use client";

import { motion } from "motion/react";
import { Building2, Heart, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const campusLifeAreas = [
  {
    title: "Fasilitas",
    description:
      "Fasilitas-fasilitas di kampus dan asrama STTB dirancang untuk mengoptimalkan proses pembentukan pribadi dan pemerlengkapan pelayanan mahasiswa.",
    icon: Building2,
    href: "/facilities",
    image: "https://images.unsplash.com/photo-1763811938846-0de457436794",
    color: "from-[#1e3a8a] to-[#2563eb]",
  },
  {
    title: "Pembinaan",
    description:
      "Program pembinaan integral untuk membentuk dan memperlengkapi kehidupan dan pelayanan mahasiswa dalam empat bidang transformasi.",
    icon: Heart,
    href: "/pembinaan",
    image: "https://images.unsplash.com/photo-1543702404-38c2035462ad",
    color: "from-[#dc2626] to-[#ef4444]",
  },
  {
    title: "Senat Mahasiswa",
    description:
      "Wadah untuk mengasah kepemimpinan di dalam diri mahasiswa — representasi, koordinasi kegiatan, pengembangan minat-bakat, dan menciptakan suasana kondusif.",
    icon: Users,
    href: "/senat",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    color: "from-[#1e3a8a] to-[#1e40af]",
  },
];

const campusHighlights = [
  {
    title: "Belajar Bersama",
    description: "Fasilitas optimal bagi kegiatan belajar-mengajar dengan format yang beragam",
  },
  {
    title: "Bertumbuh Bersama",
    description: "Pembentukan pribadi pelayan Tuhan secara utuh melalui pembinaan holistik",
  },
  {
    title: "Hidup Bersama",
    description: "Pendidikan residensial penuh — tinggal bersama sebagai satu komunitas",
  },
  {
    title: "Melayani Bersama",
    description: "Praktik pelayanan di gereja dan masyarakat untuk pengalaman nyata",
  },
];

export function CampusLifePage() {
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
            <span className="inline-block bg-[#dc2626] text-white px-4 py-1.5 rounded-full text-sm tracking-wider mb-4">
              KEHIDUPAN KAMPUS
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Kehidupan Kampus STTB
            </h1>
            <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mx-auto">
              Seluruh aspek kehidupan di dalam kampus dan asrama diarahkan untuk
              membentuk hati yang mengasihi Tuhan dan sesama bagi kemuliaan
              Tuhan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Campus Life Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {campusLifeAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={area.href}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${area.color} opacity-60`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <area.icon className="text-white" size={32} />
                        </div>
                        <h3 className="text-2xl font-black text-white">
                          {area.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {area.description}
                    </p>
                    <div className="flex items-center gap-2 text-[#1e3a8a] font-semibold group-hover:gap-3 transition-all">
                      <span>Selengkapnya</span>
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
              Komunitas yang Membentuk
            </h2>
            <p className="text-lg text-gray-600">
              Kehidupan kampus di STTB dirancang untuk membentuk Anda menjadi
              pelayan Tuhan yang transformatif — belajar, bertumbuh, hidup, dan
              melayani bersama.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {campusHighlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#dbeafe] to-white rounded-xl p-6 text-center border-2 border-[#1e3a8a]/20"
              >
                <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#dc2626] to-[#b91c1c]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Bergabung dengan Komunitas STTB
            </h2>
            <p className="text-xl text-red-50 mb-8 leading-relaxed">
              Alami proses pembentukan pribadi dan pemerlengkapan pelayanan dalam
              komunitas yang mendukung
            </p>
            <a
              href="/admissions"
              className="inline-block bg-white text-[#dc2626] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Daftar Sekarang
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
