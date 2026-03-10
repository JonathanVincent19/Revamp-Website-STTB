"use client";

import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";

export function ContactPage() {
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
              Hubungi Kami
            </h1>
            <p className="text-xl text-blue-50">
              Kami siap membantu menjawab pertanyaan Anda
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-8">
                Informasi Kontak
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#dbeafe] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#1e3a8a]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1e3a8a] mb-1">Alamat</h4>
                    <p className="text-gray-600">
                      Jl. Example No. 123<br />
                      Bandung, Jawa Barat 40123<br />
                      Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#dbeafe] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#1e3a8a]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1e3a8a] mb-1">Telepon</h4>
                    <p className="text-gray-600">
                      +62 22 1234 5678<br />
                      +62 812 3456 7890 (WhatsApp)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#dbeafe] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#1e3a8a]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1e3a8a] mb-1">Email</h4>
                    <p className="text-gray-600">
                      info@sttb.ac.id<br />
                      admissions@sttb.ac.id
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#dbeafe] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[#1e3a8a]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1e3a8a] mb-1">Jam Operasional</h4>
                    <p className="text-gray-600">
                      Senin - Jumat: 08:00 - 16:00 WIB<br />
                      Sabtu: 08:00 - 12:00 WIB
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-bold text-[#1e3a8a] mb-4">Media Sosial</h4>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center text-white hover:bg-[#f59e0b] transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center text-white hover:bg-[#f59e0b] transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center text-white hover:bg-[#f59e0b] transition-colors"
                  >
                    <Youtube size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">
                Kirim Pesan
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                    placeholder="+62"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Subjek
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]">
                    <option>Informasi Umum</option>
                    <option>Pendaftaran</option>
                    <option>Biaya Studi</option>
                    <option>Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1e3a8a] text-white px-6 py-4 rounded-lg font-bold hover:bg-[#f59e0b] transition-colors"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-8 text-center">
            Lokasi Kami
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-300 rounded-xl h-96 flex items-center justify-center">
              <p className="text-gray-600">Google Maps Embed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
