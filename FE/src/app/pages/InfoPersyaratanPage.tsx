"use client";

import { motion } from "motion/react";
import { FileText, Image, FileCheck, Download, AlertCircle, CheckCircle, Users, GraduationCap, ArrowRight, Bookmark } from "lucide-react";

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

// --- DATA PERSYARATAN KHUSUS (Teks Sesuai Gambar) ---
const specificRequirements = {
  s1: [
    {
      program: "SARJANA TEOLOGI (S.Th.)",
      items: [
        "Minimal lulusan SMA/sederajat",
        "Memiliki pengalaman pelayanan gerejawi/lembaga Kristen minimal 2 tahun.",
        "Memiliki panggilan jelas sebagai hamba Tuhan penuh waktu.",
        "Memiliki kemampuan dasar Bahasa Inggris yang baik, terutama membaca dan memahami teks berbahasa Inggris.",
        "Memenuhi seluruh prosedur pendaftaran yang berlaku di STTB."
      ]
    },
    {
      program: "SARJANA PENDIDIKAN KRISTEN (S.Pd.K.)",
      items: [
        "Minimal lulusan SMA/sederajat",
        "Memiliki pengalaman pelayanan gerejawi/lembaga Kristen minimal 2 tahun.",
        "Memiliki panggilan jelas sebagai pendidik Kristen penuh waktu.",
        "Memiliki kemampuan dasar Bahasa Inggris yang baik, terutama membaca dan memahami teks berbahasa Inggris.",
        "Memenuhi seluruh prosedur pendaftaran yang berlaku di STTB."
      ]
    }
  ],
  s2: [
    {
      program: "MAGISTER PENDIDIKAN KRISTEN (M.Pd.)",
      items: [
        "Lulus program S1 (semua jurusan)",
        "Memiliki pengalaman pelayanan di sekolah/gereja minimal 2 tahun.",
        "Memiliki kemampuan dasar Bahasa Inggris yang baik, terutama membaca dan memahami teks berbahasa Inggris.",
        "Menyerahkan book review saat mendaftar di STTB.",
        "Memenuhi seluruh prosedur pendaftaran yang berlaku di STTB."
      ]
    },
    {
      program: "MAGISTER MINISTRI MARKETPLACE (M.Min.)",
      items: [
        "Lulusan S-1 Teologi/Umum",
        "Memiliki pengalaman bekerja minimal 2 tahun",
        "Memiliki pengalaman pelayanan di gereja atau lembaga pelayanan minimal 1 tahun",
        "Menyerahkan book review saat mendaftar di STTB."
      ]
    }
  ]
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

      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af]">
        {/* Background Shapes: Tema Hexagon & Validasi */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-center items-center">
          <div className="absolute -right-32 top-10 w-[500px] h-[500px] opacity-10 text-white animate-[spin_180s_linear_infinite]">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
              <polygon points="50 5, 90 25, 90 75, 50 95, 10 75, 10 25" />
            </svg>
          </div>
          <div className="absolute -left-20 -bottom-20 w-[400px] h-[400px] border-[8px] border-white/10 opacity-50 rotate-12">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="2">
              <polygon points="50 5, 90 25, 90 75, 50 95, 10 75, 10 25" />
            </svg>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.05]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block bg-[#dc2626] text-white px-5 py-2 rounded-full text-xs tracking-widest mb-6 font-black uppercase shadow-lg shadow-red-500/30">
              INFO PERSYARATAN
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-md">
              Persyaratan Pendaftaran
            </h1>
            <p className="text-xl text-blue-50 leading-relaxed font-light">
              Dokumen dan persyaratan lengkap yang harus Anda siapkan untuk mendaftar di STTB
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- GENERAL DOCUMENTS --- */}
      <section className="relative overflow-hidden py-24 bg-white">
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-6 shadow-sm">
              <FileText size={20} />
              <span className="font-bold">DOKUMEN UMUM</span>
            </div>
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
              Persyaratan Semua Program
            </h2>
            <p className="text-lg text-gray-600 bg-white/80 inline-block px-6 py-2 rounded-full">
              Dokumen yang wajib disiapkan oleh semua calon mahasiswa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {documentsGeneral.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <doc.icon className="text-white" size={26} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">
                      {doc.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 font-medium leading-relaxed">
                      {doc.description}
                    </p>
                    <div className="flex flex-col gap-2">
                      <span className="inline-flex text-xs bg-red-50 text-[#dc2626] px-3 py-1.5 rounded-lg font-bold w-fit">
                        {doc.format}
                      </span>
                      <p className="text-xs text-gray-500 italic">
                        * {doc.note}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SPECIFIC DOCUMENTS (Re-designed Attractive Layout) --- */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Background Layer: Pola Kartu/Dokumen */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-10 w-64 h-64 border-[3px] border-[#1e3a8a]/5 rounded-3xl rotate-12" />
          <div className="absolute bottom-1/4 right-10 w-80 h-80 border-[3px] border-[#dc2626]/5 rounded-full -rotate-12" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
              Persyaratan Khusus per Program
            </h2>
            <p className="text-lg text-gray-600">
              Dokumen dan kualifikasi tambahan sesuai jenjang studi
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">

            {/* Kolom S1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col h-full"
            >
              <div className="bg-[#1e3a8a] text-white p-4 rounded-2xl text-center shadow-lg mb-6 flex-shrink-0">
                <h3 className="text-2xl font-black tracking-widest">PROGRAM S1</h3>
              </div>

              <div className="flex flex-col gap-6 flex-1">
                {specificRequirements.s1.map((prog, idx) => (
                  <div key={idx} className="bg-white rounded-3xl p-8 border border-blue-100 shadow-lg relative overflow-hidden group hover:border-[#1e3a8a] transition-colors flex-1 flex flex-col">
                    {/* Decorative corner */}
                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors" />

                    <div className="relative z-10 flex-1">
                      <div className="flex items-center gap-3 mb-6">
                        <Bookmark className="text-[#dc2626] fill-[#dc2626]/10" size={28} />
                        <h4 className="text-xl font-bold text-[#1e3a8a] leading-tight">
                          {prog.program}
                        </h4>
                      </div>
                      <ul className="space-y-3">
                        {prog.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="text-[#1e3a8a] flex-shrink-0 mt-0.5" size={18} />
                            <span className="text-gray-700 text-sm leading-relaxed font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Kolom S2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col h-full"
            >
              <div className="bg-[#dc2626] text-white p-4 rounded-2xl text-center shadow-lg mb-6 flex-shrink-0">
                <h3 className="text-2xl font-black tracking-widest">PROGRAM S2</h3>
              </div>

              <div className="flex flex-col gap-6 flex-1">
                {specificRequirements.s2.map((prog, idx) => (
                  <div key={idx} className="bg-white rounded-3xl p-8 border border-red-100 shadow-lg relative overflow-hidden group hover:border-[#dc2626] transition-colors flex-1 flex flex-col">
                    {/* Decorative corner */}
                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-red-50 rounded-full group-hover:bg-red-100 transition-colors" />

                    <div className="relative z-10 flex-1">
                      <div className="flex items-center gap-3 mb-6">
                        <Bookmark className="text-[#1e3a8a] fill-[#1e3a8a]/10" size={28} />
                        <h4 className="text-xl font-bold text-[#1e3a8a] leading-tight">
                          {prog.program}
                        </h4>
                      </div>
                      <ul className="space-y-3">
                        {prog.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="text-[#dc2626] flex-shrink-0 mt-0.5" size={18} />
                            <span className="text-gray-700 text-sm leading-relaxed font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- DOCUMENT GUIDELINES --- */}
      <section className="relative overflow-hidden py-24 bg-white">
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#dc2626]/10 text-[#dc2626] px-5 py-2.5 rounded-full mb-6 font-bold border border-red-100">
              <FileCheck size={20} />
              <span>PANDUAN DOKUMEN</span>
            </div>
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
              Ketentuan Dokumen
            </h2>
            <p className="text-lg text-gray-600">
              Panduan penting dalam mempersiapkan dokumen pendaftaran
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {documentGuidelines.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 relative overflow-hidden group hover:-translate-y-2 transition-transform"
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#1e3a8a] group-hover:bg-[#dc2626] transition-colors" />
                <h3 className="text-xl font-black text-[#1e3a8a] mb-6">
                  {guide.title}
                </h3>
                <ul className="space-y-4">
                  {guide.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 font-medium">
                      <div className="bg-red-50 p-1 rounded mt-0.5">
                        <CheckCircle size={14} className="text-[#dc2626] flex-shrink-0" />
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SPECIAL NOTES --- */}
      <section className="relative py-24 bg-[#0a2351]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -left-40 -top-40 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[80px]" />
          <div className="absolute -right-20 -bottom-40 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[80px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Hal Penting yang Perlu Diperhatikan
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl"
            >
              <div className="space-y-5">
                {specialNotes.map((note, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-7 h-7 bg-red-500 rounded-full flex items-center justify-center mt-0.5 shadow-lg">
                      <AlertCircle className="text-white" size={16} />
                    </div>
                    <p className="text-white/90 leading-relaxed font-medium">{note}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- DOWNLOAD SECTION --- */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-10 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1 text-center md:text-left">
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <Download className="text-[#1e3a8a]" size={32} />
                </div>
                <h2 className="text-3xl font-black text-[#1e3a8a] mb-4">
                  Download Template Dokumen
                </h2>
                <p className="text-gray-600 text-lg">
                  Template formulir dan surat pernyataan resmi dari STTB untuk memudahkan persiapan Anda.
                </p>
              </div>
              <div className="flex flex-col gap-4 w-full md:w-auto min-w-[300px]">
                <a
                  href="#"
                  className="flex items-center justify-between bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-xl p-5 transition-all group shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="text-[#dc2626]" size={24} />
                    <span className="font-bold text-[#1e3a8a]">Surat Pernyataan</span>
                  </div>
                  <Download className="text-gray-400 group-hover:text-[#dc2626] group-hover:translate-y-1 transition-all" size={20} />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-xl p-5 transition-all group shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="text-[#dc2626]" size={24} />
                    <span className="font-bold text-[#1e3a8a]">Form Rekomendasi</span>
                  </div>
                  <Download className="text-gray-400 group-hover:text-[#dc2626] group-hover:translate-y-1 transition-all" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-red-600 to-red-800">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 40 0 0 Z" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 drop-shadow-md">
              Sudah Siap dengan Dokumennya?
            </h2>
            <p className="text-xl text-red-100 mb-10 leading-relaxed font-light">
              Jika semua dokumen sudah lengkap, segera lakukan pendaftaran online.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="/admissions/pendaftaran-online"
                className="inline-flex items-center justify-center gap-2 bg-white text-red-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
              >
                <Users size={20} />
                Daftar Sekarang
              </a>
              <a
                href="/admissions/faq"
                className="inline-flex items-center justify-center gap-2 bg-black/20 text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-black/40 transition-all transform hover:scale-105 backdrop-blur-sm"
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