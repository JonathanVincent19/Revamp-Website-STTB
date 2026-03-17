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
      <section className="relative py-16 bg-gradient-to-br from-[#0f1b3d] via-[#1e3a8a] to-[#1e40af] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
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
      <section className="relative overflow-hidden py-20 bg-white" id="registration-process">
        {/* --- BACKGROUND LAYER: ALUR & PROSES --- */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Curving Path Vector (Kanan) */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.06] text-[#1e3a8a]">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full stroke-current fill-none" strokeWidth="2">
              <path d="M 100,0 C 20,40 80,60 0,100" />
            </svg>
          </div>
          {/* Chevron Arrows (Kiri Atas) */}
          <div className="absolute top-32 left-10 opacity-[0.05] text-[#dc2626]">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-pulse">
              <polyline points="6 5 12 11 18 5"></polyline>
              <polyline points="6 11 12 17 18 11"></polyline>
            </svg>
          </div>
          {/* Dot pattern vertikal */}
          <div className="absolute left-1/4 top-0 bottom-0 w-32 bg-[radial-gradient(#1e3a8a_2px,transparent_2px)] [background-size:20px_20px] opacity-[0.04]" />
        </div>
        {/* -------------------------------------- */}

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
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

          <div className="max-w-4xl mx-auto relative z-10">
            {registrationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg ring-4 ring-blue-50 group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  {index < registrationSteps.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-[#1e3a8a] to-gray-200 mt-2 min-h-[4rem]" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-gradient-to-br from-[#dbeafe]/50 to-white rounded-xl p-6 border-2 border-[#1e3a8a]/10 hover:border-[#1e3a8a]/40 shadow-sm hover:shadow-md transition-all backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100 group-hover:bg-[#1e3a8a] transition-colors duration-300">
                        <step.icon className="text-[#1e3a8a] group-hover:text-white transition-colors duration-300" size={24} />
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
      <section className="relative overflow-hidden py-20 bg-gray-50" id="program-options">
        {/* --- BACKGROUND LAYER: ISOMETRIC & BLOK --- */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
          {/* Isometric Grid (Miring 3D) */}
          <div className="absolute w-[200%] h-[200%] bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:60px_60px] transform -rotate-12 scale-150 opacity-70" />

          {/* Floating Offset Squares */}
          <div className="absolute top-20 right-20 w-48 h-48 border-[12px] border-[#dc2626] opacity-[0.06] rounded-2xl rotate-45" />
          <div className="absolute bottom-10 left-10 w-64 h-64 border-[16px] border-[#1e3a8a] opacity-[0.04] rounded-3xl -rotate-12" />
        </div>
        {/* ---------------------------------------- */}

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
              Pilih Program Studi
            </h2>
            <p className="text-lg text-gray-600 bg-white/50 backdrop-blur-sm inline-block px-6 py-2 rounded-full border border-gray-200">
              Daftar untuk program yang sesuai dengan panggilan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
            {programOptions.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-[#dc2626] group"
              >
                <div className={`h-3 bg-gradient-to-r ${program.color}`} />
                <div className="p-8">
                  <h3 className="text-2xl font-black text-[#1e3a8a] mb-6 group-hover:text-[#dc2626] transition-colors">
                    {program.program}
                  </h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-500 font-medium">Durasi Studi</span>
                      <span className="font-bold text-[#1e3a8a] bg-blue-50 px-3 py-1 rounded-md">{program.duration}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-500 font-medium">Biaya Pendaftaran</span>
                      <span className="font-bold text-[#1e3a8a]">{program.registrationFee}</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-gray-500 font-medium">Periode Pendaftaran</span>
                      <span className="font-bold text-red-600 bg-red-50 px-3 py-1 rounded-md">{program.openPeriod}</span>
                    </div>
                  </div>
                  <a
                    href="https://sis.sttb.ac.id/pmb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white py-3.5 rounded-xl font-bold hover:from-red-600 hover:to-red-700 transition-all shadow-md hover:shadow-lg"
                  >
                    Daftar Sekarang
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="relative overflow-hidden py-20 bg-white" id="required-documents">
        {/* --- BACKGROUND LAYER: KERTAS BUKU TULIS & TUMPUKAN --- */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Lined Paper Pattern (Garis Buku Tulis) */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_39px,#1e3a8a06_39px,#1e3a8a06_40px)]" />

          {/* Tumpukan Kertas Abstrak (Kanan) */}
          <div className="absolute top-20 right-10 w-64 h-80 border-[4px] border-[#1e3a8a] opacity-[0.06] rotate-[15deg] rounded-2xl bg-white/50" />
          <div className="absolute top-24 right-16 w-64 h-80 border-[4px] border-[#dc2626] opacity-[0.04] rotate-[5deg] rounded-2xl" />

          {/* Checkmark Raksasa (Kiri Bawah) */}
          <div className="absolute -bottom-10 -left-10 opacity-[0.03] text-[#1e3a8a]">
            <CheckCircle size={400} />
          </div>
        </div>
        {/* ---------------------------------------------------- */}

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full mb-6 border border-red-100">
                <FileText size={20} />
                <span className="font-bold">DOKUMEN YANG DIPERLUKAN</span>
              </div>
              <h2 className="text-4xl font-black text-[#1e3a8a] mb-4 bg-white/80 inline-block px-4 rounded-xl">
                Persyaratan Dokumen
              </h2>
              <p className="text-lg text-gray-600 bg-white/80 inline-block px-4 rounded-xl">
                Siapkan dokumen-dokumen berikut sebelum memulai pendaftaran
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Offset shadow box manual */}
              <div className="absolute inset-0 bg-[#1e3a8a]/10 rounded-3xl translate-x-3 translate-y-3 -z-10" />

              <div className="bg-gradient-to-br from-[#f8fafc] to-white rounded-3xl p-8 md:p-10 border border-blue-100 shadow-xl backdrop-blur-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {requiredDocuments.map((doc, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-[0_2px_10px_rgb(0,0,0,0.03)] border border-gray-50 hover:border-red-100 transition-colors group">
                      <div className="flex-shrink-0 w-7 h-7 bg-red-50 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-red-600 transition-colors">
                        <CheckCircle className="text-red-600 group-hover:text-white transition-colors" size={16} />
                      </div>
                      <p className="text-gray-700 font-medium leading-relaxed text-sm pt-1">{doc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="relative overflow-hidden py-20 bg-gray-50" id="important-notes">
        {/* --- BACKGROUND LAYER: FOKUS & BATASAN --- */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Warning Stripes Diagonal Tipis */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_20px,#dc262604_20px,#dc262604_40px)]" />

          {/* Brackets [ ] Raksasa sebagai pembingkai fokus */}
          <div className="absolute top-10 left-10 w-32 h-32 border-t-[12px] border-l-[12px] border-[#dc2626] opacity-[0.08] rounded-tl-3xl" />
          <div className="absolute bottom-10 right-10 w-32 h-32 border-b-[12px] border-r-[12px] border-[#1e3a8a] opacity-[0.08] rounded-br-3xl" />

          {/* Alert Circle Watermark (Kiri) */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-20 opacity-[0.03] text-[#dc2626]">
            <AlertCircle size={300} strokeWidth={1} />
          </div>
        </div>
        {/* ----------------------------------------- */}

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#dc2626]/10 text-[#dc2626] px-5 py-2.5 rounded-full mb-6 border border-red-200">
                <AlertCircle size={20} />
                <span className="font-bold tracking-wide">CATATAN PENTING</span>
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
              className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border-t-4 border-[#dc2626] relative overflow-hidden"
            >
              {/* Red glow accent inside box */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 opacity-10 filter blur-[40px] rounded-full" />

              <div className="space-y-5 relative z-10">
                {importantNotes.map((note, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="flex-shrink-0 w-7 h-7 bg-[#dc2626] rounded-full flex items-center justify-center mt-0.5 shadow-md">
                      <AlertCircle className="text-white" size={16} />
                    </div>
                    <p className="text-gray-700 leading-relaxed font-medium">{note}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-red-600 via-red-700 to-red-900" id="cta">
        {/* --- BACKGROUND LAYER: ENERGI & RIPPLE --- */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
          {/* Gelombang Konsentris (Ripple Effect) */}
          <div className="absolute w-[400px] h-[400px] border border-white/20 rounded-full" />
          <div className="absolute w-[600px] h-[600px] border border-white/10 rounded-full" />
          <div className="absolute w-[800px] h-[800px] border border-white/5 rounded-full" />
          <div className="absolute w-[1000px] h-[1000px] border border-white/5 rounded-full" />

          {/* Garis Pancaran Cahaya (Sunburst) */}
          <div className="absolute inset-0 bg-[repeating-conic-gradient(from_0deg,transparent_0deg_15deg,rgba(255,255,255,0.03)_15deg_30deg)]" />
        </div>
        {/* ----------------------------------------- */}

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-md">
              Siap Memulai Perjalanan Anda?
            </h2>
            <p className="text-xl md:text-2xl text-red-50 mb-10 leading-relaxed font-light">
              Jangan tunda lagi! Daftar sekarang dan jadilah bagian dari komunitas <span className="font-bold text-white">pastor-scholars</span> STTB.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a
                href="https://sis.sttb.ac.id/pmb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-red-700 px-8 py-4 rounded-xl font-black text-lg hover:bg-gray-50 hover:shadow-xl hover:shadow-red-900/50 transition-all transform hover:-translate-y-1 w-full sm:w-auto"
              >
                <ExternalLink size={24} strokeWidth={2.5} />
                Portal Pendaftaran
              </a>
              <a
                href="/admissions/info-persyaratan"
                className="inline-flex items-center justify-center gap-3 bg-red-900/50 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-900 transition-all transform hover:-translate-y-1 w-full sm:w-auto"
              >
                <FileText size={24} />
                Lihat Persyaratan
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
