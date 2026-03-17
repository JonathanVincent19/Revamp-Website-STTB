"use client";

import { motion } from "motion/react";
import { DollarSign, GraduationCap, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const financeAreas = [
  {
    title: "Biaya Studi",
    description: "Informasi lengkap tentang biaya pendidikan, pembayaran, dan struktur biaya untuk program S1 dan S2",
    icon: DollarSign,
    href: "/biaya-studi",
    image: "https://images.unsplash.com/photo-1554224311-beee2f770fc4",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Beasiswa",
    description: "Program bantuan keuangan dan beasiswa untuk membantu mahasiswa yang membutuhkan",
    icon: GraduationCap,
    href: "/beasiswa",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    color: "from-amber-500 to-amber-600",
  },
  {
    title: "Dukung STTB",
    description: "Bergabunglah dalam mendukung visi dan misi STTB melalui donasi dan kemitraan",
    icon: Heart,
    href: "/dukung-sttb",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
    color: "from-green-500 to-green-600",
  },
];

export function FinancePage() {
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
            <span className="inline-block bg-[#dc2626] text-white px-4 py-1.5 rounded-full text-sm tracking-wider mb-4 font-bold">
              INFORMASI KEUANGAN
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Keuangan & Dukungan
            </h1>
            <p className="text-xl text-blue-50 leading-relaxed">
              Investasi dalam pendidikan teologi untuk masa depan pelayanan yang transformatif
            </p>
          </motion.div>
        </div>
      </section>

      {/* Finance Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {financeAreas.map((area, index) => (
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
                    <div className={`absolute inset-0 bg-gradient-to-t ${area.color} opacity-60`} />
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

      {/* Commitment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-6">
              Komitmen Kami
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              STTB berkomitmen untuk menyediakan pendidikan teologi berkualitas tinggi yang terjangkau. Kami percaya bahwa panggilan pelayanan tidak boleh terhalang oleh hambatan finansial.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  title: "Transparansi",
                  description: "Informasi biaya yang jelas dan terbuka",
                },
                {
                  title: "Aksesibilitas",
                  description: "Beasiswa untuk yang membutuhkan",
                },
                {
                  title: "Akuntabilitas",
                  description: "Pengelolaan keuangan yang bertanggung jawab",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#dbeafe] to-white rounded-xl p-6 border-2 border-[#1e3a8a]/20"
                >
                  <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
