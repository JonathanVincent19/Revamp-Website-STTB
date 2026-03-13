"use client";

import { motion } from "motion/react";
import { ClipboardList, UserPlus, FileCheck, CreditCard, Users, CheckCircle, BookOpen, Home, Calendar, ArrowRight } from "lucide-react";

const admissionSteps = [
  {
    step: 1,
    title: "Pendaftaran Online",
    description: "Daftar melalui portal PMB online STTB",
    icon: UserPlus,
    details: [
      "Akses portal PMB di sis.sttb.ac.id/pmb",
      "Buat akun dengan email aktif",
      "Isi formulir pendaftaran secara lengkap",
      "Upload dokumen persyaratan",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    step: 2,
    title: "Pembayaran Biaya Pendaftaran",
    description: "Bayar biaya pendaftaran sesuai program",
    icon: CreditCard,
    details: [
      "S1: Rp 300.000",
      "S2: Rp 500.000",
      "Transfer ke rekening resmi STTB",
      "Upload bukti pembayaran ke sistem",
    ],
    color: "from-green-500 to-green-600",
  },
  {
    step: 3,
    title: "Verifikasi Dokumen",
    description: "Tim admisi memverifikasi kelengkapan dokumen",
    icon: FileCheck,
    details: [
      "Proses verifikasi 3-5 hari kerja",
      "Notifikasi via email jika ada dokumen yang kurang",
      "Pastikan dokumen sesuai format yang ditentukan",
      "Lengkapi dokumen yang kurang jika diminta",
    ],
    color: "from-amber-500 to-amber-600",
  },
  {
    step: 4,
    title: "Tes Seleksi",
    description: "Mengikuti tes tertulis dan wawancara",
    icon: ClipboardList,
    details: [
      "Tes tertulis: Alkitab, akademik, bahasa Inggris",
      "Tes wawancara dengan tim seleksi",
      "Datang sesuai jadwal yang ditentukan",
      "Bawa kartu peserta dan identitas diri",
    ],
    color: "from-red-500 to-red-600",
  },
  {
    step: 5,
    title: "Pengumuman Hasil",
    description: "Pengumuman kelulusan seleksi",
    icon: CheckCircle,
    details: [
      "Pengumuman via email dan website",
      "Cek nomor registrasi di portal PMB",
      "Download surat penerimaan",
      "Simpan surat untuk daftar ulang",
    ],
    color: "from-purple-500 to-purple-600",
  },
  {
    step: 6,
    title: "Daftar Ulang",
    description: "Registrasi ulang sebagai mahasiswa STTB",
    icon: BookOpen,
    details: [
      "Bayar biaya studi tahun pertama",
      "Serahkan dokumen asli untuk verifikasi",
      "Foto untuk KTM (Kartu Tanda Mahasiswa)",
      "Dapat jadwal orientasi mahasiswa baru",
    ],
    color: "from-indigo-500 to-indigo-600",
  },
];

const requirements = {
  s1: [
    "Lulusan SMA/SMK/MA atau sederajat",
    "Memiliki panggilan pelayanan yang jelas",
    "Rekomendasi dari gembala/pemimpin gereja",
    "Sehat jasmani dan rohani",
    "Bersedia mengikuti peraturan STTB",
  ],
  s2: [
    "Lulusan S1 Teologi atau setara",
    "IPK minimal 2.75 (skala 4.00)",
    "Pengalaman pelayanan minimal 2 tahun",
    "Rekomendasi dari gembala/lembaga",
    "Proposal riset (untuk konsentrasi tertentu)",
  ],
};

const selectionCriteria = [
  {
    criteria: "Akademik",
    weight: "30%",
    description: "Nilai tes tertulis dan transkrip akademik",
  },
  {
    criteria: "Panggilan Pelayanan",
    weight: "25%",
    description: "Kejelasan visi dan panggilan melayani Tuhan",
  },
  {
    criteria: "Pengalaman Pelayanan",
    weight: "20%",
    description: "Keterlibatan aktif dalam pelayanan gereja",
  },
  {
    criteria: "Kemampuan Komunikasi",
    weight: "15%",
    description: "Hasil wawancara dan kemampuan berbahasa",
  },
  {
    criteria: "Rekomendasi",
    weight: "10%",
    description: "Surat rekomendasi dari pemimpin rohani",
  },
];

const faqs = [
  {
    question: "Apakah bisa mendaftar tanpa latar belakang teologi?",
    answer: "Ya, untuk S1 tidak diperlukan latar belakang teologi. Namun akan ada program matrikulasi untuk penyetaraan pengetahuan dasar.",
  },
  {
    question: "Berapa lama proses seleksi admisi?",
    answer: "Dari pendaftaran hingga pengumuman hasil memakan waktu sekitar 6-8 minggu, tergantung gelombang pendaftaran.",
  },
  {
    question: "Apakah ada batasan usia untuk mendaftar?",
    answer: "Tidak ada batasan usia khusus, namun calon mahasiswa diharapkan memiliki kematangan spiritual dan mental yang cukup.",
  },
];

export function ProsedurAdmisiPage() {
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
              PROSEDUR ADMISI
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Langkah Demi Langkah Menuju STTB
            </h1>
            <p className="text-xl text-blue-50 leading-relaxed">
              Panduan lengkap prosedur penerimaan mahasiswa baru dari pendaftaran hingga daftar ulang
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Steps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
              6 Tahap Admisi STTB
            </h2>
            <p className="text-lg text-gray-600">
              Ikuti setiap tahapan dengan cermat untuk memastikan proses yang lancar
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-8 last:mb-0"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  <div className={`h-2 bg-gradient-to-r ${step.color}`} />
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-black text-2xl shadow-lg`}>
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <step.icon className="text-white" size={24} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-black text-[#1e3a8a] mb-2">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 ml-16">
                          <ul className="space-y-2">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                <CheckCircle size={16} className="text-[#f59e0b] flex-shrink-0 mt-0.5" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
              Persyaratan Umum
            </h2>
            <p className="text-lg text-gray-600">
              Kriteria dasar untuk mendaftar di STTB
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-blue-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-black text-[#1e3a8a]">
                  Program S1
                </h3>
              </div>
              <ul className="space-y-3">
                {requirements.s1.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 border-2 border-red-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-black text-[#1e3a8a]">
                  Program S2
                </h3>
              </div>
              <ul className="space-y-3">
                {requirements.s2.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Selection Criteria */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
              Kriteria Penilaian
            </h2>
            <p className="text-lg text-gray-600">
              Aspek-aspek yang dinilai dalam proses seleksi
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold">Kriteria</th>
                      <th className="px-6 py-4 text-left font-bold">Bobot</th>
                      <th className="px-6 py-4 text-left font-bold">Keterangan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectionCriteria.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-200 hover:bg-[#dbeafe]/30 transition-colors"
                      >
                        <td className="px-6 py-4 font-semibold text-gray-800">
                          {item.criteria}
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-block bg-[#dc2626] text-white px-3 py-1 rounded-full text-sm font-bold">
                            {item.weight}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-600 text-sm">
                          {item.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
              Pertanyaan Umum
            </h2>
            <p className="text-lg text-gray-600">
              Jawaban untuk pertanyaan yang sering diajukan
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#dbeafe] to-white rounded-xl p-6 border-2 border-[#1e3a8a]/20"
              >
                <h3 className="text-lg font-bold text-[#1e3a8a] mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="/admissions/faq"
              className="inline-flex items-center gap-2 text-[#1e3a8a] font-bold hover:text-[#f59e0b] transition-colors"
            >
              Lihat Semua FAQ
              <ArrowRight size={18} />
            </a>
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
              Siap Memulai Proses Admisi?
            </h2>
            <p className="text-xl text-red-50 mb-8 leading-relaxed">
              Jangan ragu untuk memulai! Tim admisi kami siap membantu Anda di setiap tahap
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/admissions/pendaftaran-online"
                className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                <UserPlus size={20} />
                Daftar Sekarang
              </a>
              <a
                href="/admissions/info-persyaratan"
                className="inline-flex items-center justify-center gap-2 bg-red-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-900 transition-all transform hover:scale-105"
              >
                <FileCheck size={20} />
                Lihat Persyaratan
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
