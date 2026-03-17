"use client";

import { motion } from "motion/react";
import { FileText, Image, FileCheck, Download, AlertCircle, CheckCircle, Users, GraduationCap } from "lucide-react";

const documentsGeneral = [
  {
    name: "Formulir Pendaftaran",
    description: "Diisi lengkap melalui portal online PMB",
    format: "Online Form",
    note: "Pastikan semua data terisi dengan benar",
    icon: FileText,
  },
  {
    name: "Foto Terbaru",
    description: "Pas foto berwarna dengan latar belakang merah",
    format: "JPG/PNG, 3x4 cm",
    note: "Maksimal ukuran file 2 MB",
    icon: Image,
  },
  {
    name: "Fotokopi KTP",
    description: "Kartu Tanda Penduduk yang masih berlaku",
    format: "PDF/JPG",
    note: "Scan dengan jelas dan tidak buram",
    icon: FileCheck,
  },
  {
    name: "Fotokopi Ijazah",
    description: "Ijazah terakhir yang telah dilegalisir",
    format: "PDF",
    note: "Untuk S1: SMA/SMK/MA, Untuk S2: S1 Teologi",
    icon: GraduationCap,
  },
  {
    name: "Fotokopi Transkrip Nilai",
    description: "Transkrip akademik yang telah dilegalisir",
    format: "PDF",
    note: "Untuk S2 minimal IPK 2.75",
    icon: FileText,
  },
];

const documentsSpecific = {
  s1: [
    {
      name: "Surat Rekomendasi Gereja",
      description: "Dari gembala atau pemimpin gereja lokal",
      requirements: [
        "Ditulis di atas kop surat gereja",
        "Ditandatangani dan distempel",
        "Menjelaskan karakter dan keterlibatan pelayanan",
        "Tidak lebih dari 3 bulan",
      ],
    },
    {
      name: "Surat Pernyataan",
      description: "Kesediaan mengikuti peraturan STTB",
      requirements: [
        "Download template dari website",
        "Diisi dan ditandatangani di atas materai",
        "Scan dalam format PDF",
        "Upload ke sistem PMB",
      ],
    },
    {
      name: "Surat Keterangan Sehat",
      description: "Dari dokter atau puskesmas",
      requirements: [
        "Mencakup pemeriksaan fisik umum",
        "Diterbitkan maksimal 3 bulan terakhir",
        "Di atas kop surat resmi",
        "Ditandatangani oleh dokter",
      ],
    },
  ],
  s2: [
    {
      name: "Surat Rekomendasi Akademik",
      description: "Dari dosen pembimbing atau dosen yang mengenal",
      requirements: [
        "Minimal 2 surat rekomendasi",
        "Ditulis di atas kop surat institusi",
        "Menjelaskan kemampuan akademik",
        "Ditandatangani dan distempel",
      ],
    },
    {
      name: "Surat Tugas Pelayanan",
      description: "Dari gereja atau lembaga tempat melayani",
      requirements: [
        "Menjelaskan posisi dan tanggung jawab",
        "Minimal 2 tahun pengalaman pelayanan",
        "Di atas kop surat resmi",
        "Ditandatangani oleh pimpinan",
      ],
    },
    {
      name: "Proposal Riset (Opsional)",
      description: "Untuk konsentrasi Biblika atau Teologi Sistematis",
      requirements: [
        "Outline topik riset (3-5 halaman)",
        "Latar belakang dan tujuan penelitian",
        "Metodologi yang akan digunakan",
        "Daftar pustaka awal",
      ],
    },
  ],
};

const documentGuidelines = [
  {
    title: "Format Dokumen",
    items: [
      "Semua dokumen di-scan dalam format PDF atau JPG",
      "Resolusi minimal 300 dpi untuk kejelasan",
      "Ukuran file maksimal 2 MB per dokumen",
      "Nama file sesuai dengan jenis dokumen (contoh: KTP_NamaAnda.pdf)",
    ],
  },
  {
    title: "Legalisir",
    items: [
      "Ijazah dan transkrip harus dilegalisir oleh institusi asal",
      "Cap dan tanda tangan pejabat yang berwenang harus jelas",
      "Legalisir tidak lebih dari 6 bulan",
      "Fotokopi legalisir yang di-scan harus terbaca dengan jelas",
    ],
  },
  {
    title: "Pengumpulan",
    items: [
      "Upload semua dokumen melalui portal PMB online",
      "Pastikan semua file berhasil terupload",
      "Simpan bukti upload untuk keperluan verifikasi",
      "Dokumen asli dibawa saat daftar ulang (jika diterima)",
    ],
  },
];

const specialNotes = [
  "Calon mahasiswa yang berasal dari luar negeri perlu melampirkan dokumen yang sudah diterjemahkan ke Bahasa Indonesia",
  "Ijazah dari luar negeri harus sudah disetarakan oleh Dikti",
  "Untuk S1, calon mahasiswa tanpa latar belakang teologi akan mengikuti program matrikulasi",
  "Semua dokumen yang diserahkan menjadi milik STTB dan tidak dapat diminta kembali",
  "Dokumen palsu atau pemalsuan data akan mengakibatkan pembatalan penerimaan",
];

export function InfoPersyaratanPage() {
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
              INFO PERSYARATAN
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Persyaratan Pendaftaran
            </h1>
            <p className="text-xl text-blue-50 leading-relaxed">
              Dokumen dan persyaratan lengkap yang harus Anda siapkan untuk mendaftar di STTB
            </p>
          </motion.div>
        </div>
      </section>

      {/* General Documents */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-6">
              <FileText size={20} />
              <span className="font-bold">DOKUMEN UMUM</span>
            </div>
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
              Persyaratan untuk Semua Program
            </h2>
            <p className="text-lg text-gray-600">
              Dokumen yang wajib disiapkan oleh semua calon mahasiswa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {documentsGeneral.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#dbeafe] to-white rounded-xl p-6 border-2 border-[#1e3a8a]/20 hover:border-[#1e3a8a] transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center flex-shrink-0">
                    <doc.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">
                      {doc.name}
                    </h3>
                    <p className="text-sm text-gray-700 mb-2">
                      {doc.description}
                    </p>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs bg-[#dc2626]/20 text-[#dc2626] px-2 py-1 rounded font-semibold">
                        {doc.format}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 italic">
                      {doc.note}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specific Documents */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
              Persyaratan Khusus per Program
            </h2>
            <p className="text-lg text-gray-600">
              Dokumen tambahan sesuai program studi yang dipilih
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* S1 Requirements */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
                <h3 className="text-2xl font-black text-white flex items-center gap-2">
                  <GraduationCap size={28} />
                  Program S1
                </h3>
              </div>
              <div className="p-6 space-y-6">
                {documentsSpecific.s1.map((doc, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="text-lg font-bold text-[#1e3a8a] mb-2">
                      {doc.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      {doc.description}
                    </p>
                    <ul className="space-y-1">
                      {doc.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* S2 Requirements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-4">
                <h3 className="text-2xl font-black text-white flex items-center gap-2">
                  <GraduationCap size={28} />
                  Program S2
                </h3>
              </div>
              <div className="p-6 space-y-6">
                {documentsSpecific.s2.map((doc, index) => (
                  <div key={index} className="border-l-4 border-red-500 pl-4">
                    <h4 className="text-lg font-bold text-[#1e3a8a] mb-2">
                      {doc.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      {doc.description}
                    </p>
                    <ul className="space-y-1">
                      {doc.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle size={14} className="text-red-600 flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Document Guidelines */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#dc2626]/10 text-[#dc2626] px-4 py-2 rounded-full mb-6">
              <FileCheck size={20} />
              <span className="font-bold">PANDUAN DOKUMEN</span>
            </div>
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
              Ketentuan Dokumen
            </h2>
            <p className="text-lg text-gray-600">
              Panduan penting dalam mempersiapkan dokumen pendaftaran
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {documentGuidelines.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#dbeafe] to-white rounded-xl p-6 border-2 border-[#1e3a8a]/20"
              >
                <h3 className="text-lg font-bold text-[#1e3a8a] mb-4">
                  {guide.title}
                </h3>
                <ul className="space-y-2">
                  {guide.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle size={14} className="text-[#dc2626] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Notes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full mb-6">
                <AlertCircle size={20} />
                <span className="font-bold">CATATAN KHUSUS</span>
              </div>
              <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
                Hal Penting yang Perlu Diperhatikan
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
                {specialNotes.map((note, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mt-0.5">
                      <AlertCircle className="text-white" size={16} />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{note}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] rounded-2xl p-8 text-white">
              <div className="text-center mb-8">
                <Download className="mx-auto text-[#dc2626] mb-4" size={48} />
                <h2 className="text-3xl font-black mb-4">
                  Download Template Dokumen
                </h2>
                <p className="text-blue-100 text-lg">
                  Template formulir dan surat pernyataan untuk memudahkan persiapan Anda
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="#"
                  className="flex items-center justify-between bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-4 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="text-[#dc2626]" size={24} />
                    <span className="font-bold">Surat Pernyataan</span>
                  </div>
                  <Download className="text-[#dc2626] group-hover:translate-y-1 transition-transform" size={20} />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-4 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="text-[#dc2626]" size={24} />
                    <span className="font-bold">Form Rekomendasi</span>
                  </div>
                  <Download className="text-[#dc2626] group-hover:translate-y-1 transition-transform" size={20} />
                </a>
              </div>
            </div>
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
              Sudah Siap dengan Dokumennya?
            </h2>
            <p className="text-xl text-red-50 mb-8 leading-relaxed">
              Jika semua dokumen sudah lengkap, segera lakukan pendaftaran online
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/admissions/pendaftaran-online"
                className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                <Users size={20} />
                Daftar Sekarang
              </a>
              <a
                href="/admissions/faq"
                className="inline-flex items-center justify-center gap-2 bg-red-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-900 transition-all transform hover:scale-105"
              >
                <AlertCircle size={20} />
                FAQ
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
