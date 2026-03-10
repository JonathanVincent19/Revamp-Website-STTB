"use client";

import { motion } from "motion/react";
import { Users, Briefcase, Award, Heart } from "lucide-react";

export function AlumniPage() {
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
              Alumni & Karir
            </h1>
            <p className="text-xl text-blue-50">
              Jaringan alumni yang kuat untuk mendukung pelayanan Anda
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Users,
                title: "Alumni Network",
                desc: "Terhubung dengan 1,200+ alumni di seluruh Indonesia",
                color: "from-[#1e3a8a] to-[#3b82f6]",
              },
              {
                icon: Briefcase,
                title: "Program Young Theologians",
                desc: "Pengembangan karir untuk lulusan muda",
                color: "from-[#f59e0b] to-[#fbbf24]",
              },
              {
                icon: Award,
                title: "Continuing Education",
                desc: "Program pelatihan dan pengembangan berkelanjutan",
                color: "from-[#1e3a8a] to-[#3b82f6]",
              },
              {
                icon: Heart,
                title: "Alumni Giving",
                desc: "Kontribusi untuk generasi berikutnya",
                color: "from-[#f59e0b] to-[#fbbf24]",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${item.color} rounded-xl p-8 text-white`}
              >
                <item.icon className="mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-50">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-br from-[#dbeafe] to-white rounded-xl p-8 border-2 border-[#1e3a8a]">
            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4 text-center">
              Kisah Sukses Alumni
            </h3>
            <p className="text-gray-700 text-center mb-6">
              Alumni STTB tersebar di berbagai bidang pelayanan - sebagai gembala jemaat, dosen teologi, misionaris, dan pemimpin organisasi Kristen di seluruh Indonesia.
            </p>
            <div className="text-center">
              <button className="bg-[#1e3a8a] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#f59e0b] transition-colors">
                Daftar Alumni Portal
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
