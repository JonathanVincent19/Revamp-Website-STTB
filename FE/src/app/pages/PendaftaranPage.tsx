"use client";

import { motion } from "motion/react";
import { ExternalLink, User, FileText, CreditCard, CheckCircle, Clock, AlertCircle, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const registrationSteps = [
  {
    step: 1,
    title: "Buat Akun",
    description: "Daftar akun di sistem PMB STTB dengan email aktif Anda",
    icon: User,
  },
  {
    step: 2,
    title: "Isi Formulir",
    description: "Lengkapi formulir pendaftaran dengan data yang akurat",
    icon: FileText,
  },
  {
    step: 3,
    title: "Upload Dokumen",
    description: "Unggah semua dokumen persyaratan yang diperlukan",
    icon: FileText,
  },
  {
    step: 4,
    title: "Bayar Pendaftaran",
    description: "Lakukan pembayaran biaya pendaftaran sesuai program",
    icon: CreditCard,
  },
  {
    step: 5,
    title: "Konfirmasi",
    description: "Tunggu konfirmasi dan jadwal seleksi dari tim admisi",
    icon: CheckCircle,
  },
];

const programOptions = [
  {
    program: "Sarjana Teologi (S1)",
    duration: "4 Tahun",
    registrationFee: "Rp 300.000",
    openPeriod: "Februari - Juni 2026",
    color: "from-blue-500 to-blue-600",
  },
  {
    program: "Magister Teologi (S2)",
    duration: "2 Tahun",
    registrationFee: "Rp 500.000",
    openPeriod: "Februari - Juni 2026",
    color: "from-blue-500 to-blue-600",
  },
];

const importantNotes = [
  "Pastikan email yang Anda daftarkan adalah email aktif yang dapat diakses",
  "Siapkan scan dokumen dalam format PDF atau JPG (maksimal 2MB per file)",
  "Pembayaran dapat dilakukan melalui transfer bank atau langsung ke kasir STTB",
  "Simpan bukti pembayaran untuk keperluan verifikasi",
  "Setelah mendaftar, Anda akan menerima nomor registrasi via email",
  "Pantau email secara berkala untuk informasi seleksi dan jadwal tes",
];

const requiredDocuments = [
  "Foto terbaru ukuran 3x4 (warna, background merah)",
  "KTP / Kartu Identitas yang masih berlaku",
  "Ijazah terakhir (S1 untuk pendaftar S1, S1 Teologi untuk S2)",
  "Transkrip nilai terakhir",
  "Surat rekomendasi dari gembala/pemimpin gereja",
  "Surat keterangan sehat dari dokter",
  "Surat pernyataan kesediaan mengikuti peraturan STTB",
];

export function PendaftaranOnlinePage() {
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
            <span className="inline-block bg-[#dc2626] text-white px-4 py-1.5 rounded-full text-sm tracking-wider mb-4 font-bold" >
              PENDAFTARAN ONLINE
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Daftar Sekarang di STTB
            </h1>
            <p className="text-xl text-blue-50 leading-relaxed mb-8">
              Mulai perjalanan Anda dalam pendidikan teologi berkualitas melalui sistem pendaftaran online yang mudah dan cepat
            </p>
            <motion.a
              href="https://sis.sttb.ac.id/pmb"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-all shadow-lg"
            >
              <ExternalLink size={20} />
              Buka Portal Pendaftaran
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Registration Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-6">
              <Clock size={20} />
              <span className="font-bold">PROSES PENDAFTARAN</span>
            </div>
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
              Langkah Mudah Mendaftar
            </h2>
            <p className="text-lg text-gray-600">
              Ikuti 5 langkah sederhana untuk menyelesaikan pendaftaran online Anda
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {registrationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">
                    {step.step}
                  </div>
                  {index < registrationSteps.length - 1 && (
                    <div className="w-0.5 h-20 bg-gradient-to-b from-[#1e3a8a] to-gray-300 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-gradient-to-br from-[#dbeafe] to-white rounded-xl p-6 border-2 border-[#1e3a8a]/20 hover:border-[#1e3a8a] transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        <step.icon className="text-[#1e3a8a]" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Options */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
              Pilih Program Studi
            </h2>
            <p className="text-lg text-gray-600">
              Daftar untuk program yang sesuai dengan panggilan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {programOptions.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-[#dc2626]"
              >
                <div className={`h-3 bg-gradient-to-r ${program.color}`} />
                <div className="p-8">
                  <h3 className="text-2xl font-black text-[#1e3a8a] mb-6">
                    {program.program}
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600">Durasi Studi</span>
                      <span className="font-bold text-[#1e3a8a]">{program.duration}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600">Biaya Pendaftaran</span>
                      <span className="font-bold text-[#1e3a8a]">{program.registrationFee}</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-gray-600">Periode Pendaftaran</span>
                      <span className="font-bold text-red-600">{program.openPeriod}</span>
                    </div>
                  </div>
                  <a
                    href="https://sis.sttb.ac.id/pmb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white py-3 rounded-lg font-bold hover:from-red-600 hover:to-red-700 transition-all"
                  >
                    Daftar Sekarang
                    <ArrowRight size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full mb-6">
                <FileText size={20} />
                <span className="font-bold">DOKUMEN YANG DIPERLUKAN</span>
              </div>
              <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
                Persyaratan Dokumen
              </h2>
              <p className="text-lg text-gray-600">
                Siapkan dokumen-dokumen berikut sebelum memulai pendaftaran
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#dbeafe] to-white rounded-2xl p-8 border-2 border-[#1e3a8a]/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle className="text-white" size={16} />
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm">{doc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#dc2626]/10 text-[#dc2626] px-4 py-2 rounded-full mb-6">
                <AlertCircle size={20} />
                <span className="font-bold">CATATAN PENTING</span>
              </div>
              <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
                Hal yang Perlu Diperhatikan
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="space-y-4">
                {importantNotes.map((note, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#dc2626] rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle className="text-white" size={16} />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{note}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Siap Memulai Perjalanan Anda?
            </h2>
            <p className="text-xl text-red-50 mb-8 leading-relaxed">
              Jangan tunda lagi! Daftar sekarang dan jadilah bagian dari komunitas pastor-scholars STTB
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://sis.sttb.ac.id/pmb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                <ExternalLink size={20} />
                Portal Pendaftaran
              </a>
              <a
                href="/admissions/info-persyaratan"
                className="inline-flex items-center justify-center gap-2 bg-red-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-900 transition-all transform hover:scale-105"
              >
                <FileText size={20} />
                Lihat Persyaratan
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
