"use client";

import { motion } from "motion/react";
import { Users, Briefcase, Award, Heart, Quote, Loader2, AlertCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useTestimonials } from "@/lib/hooks";

export function AlumniPage() {
  const { data: testimonials, loading, error } = useTestimonials();

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

      {/* Fitur Alumni (Statis) */}
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
        </div>
      </section>

      {/* Testimonial Alumni dari API */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block bg-[#dbeafe] text-[#1e3a8a] px-4 py-1.5 rounded-full text-sm tracking-wider mb-2">
              TESTIMONI
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1e3a8a] mb-4">
              Kisah Sukses Alumni
            </h2>
            <p className="text-lg text-gray-600">
              Alumni STTB tersebar di berbagai bidang pelayanan — sebagai gembala jemaat, dosen teologi, misionaris, dan pemimpin organisasi Kristen.
            </p>
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-16">
              <Loader2 className="animate-spin text-[#1e3a8a] mb-4" size={36} />
              <p className="text-gray-500">Memuat testimonial...</p>
            </div>
          )}

          {/* Error */}
          {error && !loading && (
            <div className="flex flex-col items-center justify-center py-12 bg-red-50 rounded-xl max-w-xl mx-auto">
              <AlertCircle className="text-[#dc2626] mb-3" size={36} />
              <p className="text-[#dc2626] font-semibold">Gagal memuat testimonial</p>
              <p className="text-sm text-gray-500 mt-1">{error}</p>
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && (!testimonials || testimonials.length === 0) && (
            <div className="text-center py-12">
              <p className="text-gray-500">Belum ada testimonial alumni.</p>
            </div>
          )}

          {/* Testimonial Cards */}
          {!loading && !error && testimonials && testimonials.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all relative"
                >
                  <Quote className="absolute top-4 right-4 text-[#dbeafe]" size={32} />
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                      <ImageWithFallback
                        src={testimonial.photo || "https://images.unsplash.com/photo-1758270704524-596810e891b5"}
                        alt={testimonial.alumniName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1e3a8a]">{testimonial.alumniName}</h4>
                      <div className="text-sm text-gray-500">
                        {testimonial.currentJob && <span>{testimonial.currentJob}</span>}
                        {testimonial.graduationYear && (
                          <span className="text-xs text-gray-400 ml-2">• Lulus {testimonial.graduationYear}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed italic">
                    &ldquo;{testimonial.testimonialText}&rdquo;
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#dbeafe] to-white rounded-xl p-8 border-2 border-[#1e3a8a] text-center">
            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">
              Bergabung dengan Jaringan Alumni
            </h3>
            <p className="text-gray-700 mb-6">
              Daftar di portal alumni kami dan tetap terhubung dengan komunitas STTB.
            </p>
            <button className="bg-[#1e3a8a] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#dc2626] transition-colors">
              Daftar Alumni Portal
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
