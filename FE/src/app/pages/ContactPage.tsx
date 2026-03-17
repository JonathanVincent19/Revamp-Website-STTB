"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, MessageCircle, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useContactSubmit } from "@/lib/hooks";

export function ContactPage() {
  const { mutate: sendMessage, loading, success, error } = useContactSubmit();
  const [formReset, setFormReset] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    try {
      await sendMessage({
        name: fd.get("name") as string,
        email: fd.get("email") as string,
        phoneNumber: fd.get("phoneNumber") as string,
        subject: fd.get("subject") as string,
        message: fd.get("message") as string,
      });
      setFormReset((prev) => prev + 1);
    } catch {
      // error sudah ditangani oleh hook
    }
  };

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
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#dc2626]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1e3a8a] mb-1">Alamat</h4>
                    <p className="text-gray-600">
                      Jl Dr. Djunjunan No. 105<br />
                      Bandung 40173, Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#dc2626]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1e3a8a] mb-1">Telepon & WhatsApp</h4>
                    <p className="text-gray-600">
                      (+62) 22 601-6454, 607-7920<br />
                      (+62) 815 7336 0009, (+62) 851-8302-6009
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#dc2626]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1e3a8a] mb-1">Email</h4>
                    <p className="text-gray-600">
                      official@sttb.ac.id
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[#dc2626]" size={24} />
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
                    className="w-12 h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center text-white hover:bg-[#dc2626] transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center text-white hover:bg-[#dc2626] transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center text-white hover:bg-[#dc2626] transition-colors"
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

              {/* Success Message */}
              {success && (
                <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <CheckCircle2 className="text-green-600 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-green-700">Pesan terkirim!</p>
                    <p className="text-sm text-green-600">Terima kasih, kami akan segera menghubungi Anda.</p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <AlertCircle className="text-[#dc2626] flex-shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-red-700">Gagal mengirim pesan</p>
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                </div>
              )}

              <form key={formReset} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Nomor Telepon
                  </label>
                  <input
                    name="phoneNumber"
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                    placeholder="+62"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Subjek
                  </label>
                  <select
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                  >
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
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1e3a8a] text-white px-6 py-4 rounded-lg font-bold hover:bg-[#dc2626] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Mengirim...
                    </>
                  ) : (
                    "Kirim Pesan"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Departmental Contacts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-12 text-center">
              Layanan Departemen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  dept: "ADMISI & MARKETING",
                  contact: "+62 815-7336-0009",
                  items: [
                    "Informasi pendaftaran mahasiswa",
                    "Informasi seminar/kelas audit",
                    "Dan hal-hal lainnya yang perlu diketahui pihak umum di luar civitas STTB"
                  ]
                },
                {
                  dept: "AKADEMIK & KEMAHASISWAAN",
                  contact: "+62 815-7127-228",
                  items: [
                    { type: "header", text: "Akademik:" },
                    "Pendaftaran kuliah",
                    "Informasi kuliah, nilai, tugas dan jadwal",
                    "Pemesanan asrama untuk kuliah intensif",
                    { type: "header", text: "Kemahasiswaan:" },
                    "Informasi kegiatan",
                    "Informasi beasiswa",
                    "Dan hal-hal lainnya yang berhubungan dengan keperluan Anda sebagai mahasiswa"
                  ]
                },
                {
                  dept: "PERPUSTAKAAN",
                  contact: "+62 857-9153-8527",
                  items: [
                    "Info Perpustakaan",
                    "Pembelian buku terbitan STTB",
                    "Info Jurnal Teologi STULOS"
                  ]
                },
                {
                  dept: "KEUANGAN",
                  contact: "keuangan@sttb.ac.id",
                  items: [
                    "Informasi seputar keuangan, biaya kuliah, biaya audit, sit in, dan lain-lain",
                    "Info biaya kuliah",
                    "Bukti transfer biaya kuliah"
                  ]
                },
                {
                  dept: "BEASISWA",
                  contact: "beasiswa@sttb.ac.id",
                  items: [
                    "info seputar beasiswa"
                  ]
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-black text-[#1e3a8a] text-lg mb-2">{item.dept}</h3>
                  <div className="flex items-center gap-2 text-[#dc2626] font-bold mb-4">
                    {item.contact.includes("@") ? <Mail size={16} /> : <MessageCircle size={16} />}
                    <span>{item.contact}</span>
                  </div>
                  <ul className="space-y-2">
                    {item.items.map((li, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        {typeof li === "string" ? (
                          <>
                            <div className="w-1.5 h-1.5 bg-[#dc2626] rounded-full mt-1.5 flex-shrink-0" />
                            <span>{li}</span>
                          </>
                        ) : (
                          <span className="font-bold text-[#1e3a8a] mt-1">{li.text}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-8 text-center">
            Lokasi Kami
          </h2>
          <div className="max-w-5xl mx-auto px-4">
            <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.028475850949!2d107.58525547587428!3d-6.887186193111776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6657fce748b%3A0xb0a7274675724c5a!2sSekolah%20Tinggi%20Teologi%20Bandung!5e0!3m2!1sid!2sid!4v1710237000000!5m2!1sid!2sid"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Sekolah Tinggi Teologi Bandung"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
