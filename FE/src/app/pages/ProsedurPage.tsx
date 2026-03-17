"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  UserPlus, FileCheck, CreditCard, ClipboardList, CheckCircle,
  BookOpen, CalendarDays, ArrowRight, FileText, AlertCircle,
  Phone, Mail, Info, ChevronDown
} from "lucide-react";

// --- DATA TAHAPAN ADMISI (Sesuai Gambar STTB) ---
const sttbStages = [
  {
    step: 1,
    title: "Memperoleh formulir pendaftaran",
    description: "Melakukan pendaftaran awal ke sistem admisi online dengan mengakses alamat sis.sttb.ac.id/pmb.",
    rows: [
      {
        left: "Melakukan pendaftaran awal ke sistem admisi online dengan mengakses alamat sis.sttb.ac.id/pmb.",
        right: [
          "Setelah mengisi data, maka formulir dapat diunduh di halaman situs berikutnya.",
          "Foto yang dilampirkan harus berbentuk format JPEG dan ukuran tidak lebih dari 400 kb",
          "Jangan menggunakan tanda koma atau tanda baca apapun dalam teks yang diketik."
        ]
      },
      {
        left: "Form pendaftaran juga dapat diminta dengan menghubungi email admisi@sttb.ac.id atau Whatsapp: 0815 7336 0009.",
        right: [
          "Pengiriman form tidak dipungut biaya",
          "Form dapat diperoleh secara hardcopy melalui pos atau secara softcopy melalui whatsapp/email sesuai permintaan pendaftar"
        ]
      }
    ]
  },
  {
    step: 2,
    title: "Mengisi form dan mempersiapkan berkas lainnya",
    description: "",
    rows: [
      {
        left: (
          <div className="space-y-2">
            <p className="font-bold">Mengisi 1 set formulir pendaftaran yang terdiri dari:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Form Pendaftaran</li>
              <li>Form Kesaksian A (pertobatan pribadi)</li>
              <li>Form Kesaksian B (panggilan pelayanan)</li>
              <li>Form Data Kesehatan 1 & 2</li>
              <li>Form Data Keluarga</li>
              <li>Form Konfirmasi Dukungan Pembiayaan Studi</li>
              <li>Form Persetujuan 1 & 2</li>
              <li>Form Rekomendasi 1 (dari gembala/pembina rohani)</li>
              <li>Form Rekomendasi 2 (dari teman/rekan kerja)</li>
              <li>Form Rekomendasi 3 (dari guru, dosen/atasan)</li>
            </ul>
          </div>
        ),
        right: [
          "Bila ingin mengajukan permohonan beasiswa mohon hubungi petugas kami untuk memperoleh form pengajuan beasiswa (lihat data kontak petugas pada halaman berikutnya mengenai beasiswa).",
          <span key="bold1" className="font-bold text-gray-800">Form dapat diisi secara digital, tidak perlu dicetak (diprint). Tanda tangan tetap wajib dicantumkan secara digital.</span>
        ]
      },
      {
        left: (
          <div className="space-y-2">
            <p className="font-bold">Melampirkan dokumen-dokumen tambahan yang juga menjadi syarat pendaftaran:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Fotocopy Akte Kelahiran</li>
              <li>Fotocopy Kartu Tanda Penduduk (KTP)</li>
              <li>Pasfoto terbaru berwarna ukuran 4 x 6</li>
              <li>Fotocopy Surat Kelulusan/Ijazah dan</li>
              <li>Fotocopy Raport terakhir/transkrip yang dilegalisir</li>
              <li>Fotocopy surat baptis dan surat sidi</li>
              <li>Fotocopy Kartu BPJS atau Kartu Indonesia Sehat atau Asuransi Kesehatan</li>
              <li>Paper Akademik/Book review bagi pendaftar program studi S2</li>
            </ul>
          </div>
        ),
        right: [
          "Bila belum memiliki KTP harap cantumkan kartu pelajar",
          "Bila ijazah belum terbit karena tanggal ujian belum berlangsung ketika Anda mendaftar, mohon sertakan surat keterangan dari sekolah Anda bahwa Anda adalah pelajar kelas 3 yang akan menempuh ujian akhir",
          "Bagi mahasiswa pindahan dari STT lain wajib menyerahkan surat pindah/keluar dari STT tersebut dan menyerahkan transkrip terakhir",
          "Bila gereja tempat Anda dibaptis memiliki baptis anak dan baptis sidi maka surat baptis sidi wajib dilampirkan (2 surat baptis)",
          "Bila tidak memiliki BPJS atau KIS maka Anda harus menyertakan surat pernyataan dari orang tua/pribadi bahwa mereka akan menanggung biaya kesehatan atau pengobatan calon mahasiswa"
        ]
      },
      {
        left: (
          <div className="space-y-3 text-sm">
            <p>Mengirimkan berkas-berkas pendaftaran (sudah lengkap) sebelum periode pendaftaran berakhir ke alamat STT Bandung dan ditujukan kepada:</p>
            <p className="font-bold">Bagian Admisi – Kantor STT Bandung</p>
            <p className="font-bold">Jl. Dr. Djunjunan 105</p>
            <p className="font-bold">Kelurahan Cicendo Kecamatan Andir,</p>
            <p className="font-bold">Bandung, Jawa Barat 40173</p>
            <p>Bagian Admisi STT Bandung akan menghubungi calon mahasiswa melalui email atau WhatsApp untuk mengkomunikasikan status dan kelengkapan pendaftaran calon mahasiswa maksimal 3 hari kerja setelah berkas diterima.</p>
          </div>
        ),
        right: [
          <span>Berkas dapat dikirimkan <span className="font-bold">secara hardcopy</span> melalui pos atau <span className="font-bold">secara softcopy</span>. Berkas yang dikirimkan dalam bentuk softcopy dikirim melalui email: <span className="font-bold">admisi@sttb.ac.id</span> atau melalui whatsapp: <span className="font-bold">0815 7336 0009</span> (dokumen-dokumen lampiran bisa discan/ difoto dengan jelas).</span>,
          "Jika belum mendapatkan email atau WhatsApp pemberitahuan, calon mahasiswa dapat menghubungi Bagian Admisi STT Bandung di 0815 7336 0009 atau melalui email: admisi@sttb.ac.id"
        ]
      }
    ]
  },
  {
    step: 3,
    title: "Membayar Biaya Pendaftaran & Tes Masuk",
    description: "",
    rows: [
      {
        left: "Membayar biaya formulir pendaftaran sebesar Rp500,000.- (wajib ditransfer ke rekening BCA an. Yayasan STT Bandung, ac: 282 300 5555).",
        right: [
          <span>Biaya pendaftaran <span className="font-bold">tidak dapat dikembalikan</span>. Berkas yang tidak disertai biaya pendaftaran tidak akan diproses untuk tes masuk.</span>
        ]
      },
      {
        left: "Mengirimkan bukti transfer melalui link sttb.ac.id/konfirmasi atau via WA: 0815 7336 0009",
        right: []
      }
    ]
  },
  {
    step: 4,
    title: "Mengikuti Tes Seleksi Penerimaan",
    description: "",
    rows: [
      {
        left: (
          <div className="space-y-4 text-sm">
            <p>Berkas pendaftaran yang telah dikumpulkan akan diseleksi oleh Direktur Admisi STT Bandung. Setelah seleksi dokumen, surat panggilan tes dan instruksi detil mengenai pelaksanaan tes masuk akan dikirimkan via email dan pendaftar akan menerima notifikasi melalui Whatsapp.</p>
            <p className="font-bold">Mengikuti 5 Tes Penerimaan Online yang meliputi:</p>
            <div>
              <p>1. Psikotes (3 tahapan tes):</p>
              <ul className="pl-8">
                <li>1. Pengisian Form</li>
                <li>2. Tes Bersama</li>
              </ul>
            </div>
            <ul className="list-disc pl-5">
              <li>Wawancara dengan Psikolog</li>
            </ul>
            <p>Psikotes bertujuan mengukur tingkat kecerdasan, sikap dan cara kerja, emosi, relasi sosial calon mahasiswa.</p>
            <p>2. Pengetahuan Teologi</p>
            <p>Tes Pengetahuan Teologi menguji pengetahuan calon mahasiswa mengenai tokoh-tokoh Alkitab, ayat-ayat penting dalam Alkitab, serta pemahaman iman Kristen calon mahasiswa.</p>
            <p>3. Bahasa Indonesia</p>
            <p>Tes Bahasa Indonesia menguji kemampuan calon mahasiswa dalam menyusun tata bahasa yang baik, memahami bacaan dan menuliskan ide-ide dalam bahasa Indonesia.</p>
            <p>4. Bahasa Inggris</p>
            <p>Tes Bahasa Inggris menguji kemampuan calon mahasiswa untuk memahami tata bahasa, bacaan dan menuliskan ide-ide dalam bahasa Inggris.</p>
            <p>5. Wawancara (dengan dosen STTB)</p>
            <p>Wawancara memiliki penilaian terbesar dalam tes masuk untuk menguji keseriusan panggilan dan rencana pelayanan mahasiswa di masa depan.</p>
          </div>
        ),
        right: [
          "Bila dokumen memenuhi persyaratan dan pembayaran telah dilunasi maka pendaftar akan menerima surat tes masuk.",
          "Pendaftar yang berkasnya tidak lolos seleksi dokumen pendaftaran tidak akan dipanggil untuk ikut tes."
        ]
      }
    ]
  },
  {
    step: 5,
    title: "Pengumuman Penerimaan & Konfirmasi MABA",
    description: "",
    rows: [
      {
        left: "Dalam kurun waktu 2-3 minggu setelah tanggal tes terakhir, pendaftar akan menerima pemberitahuan hasil penerimaan.",
        right: ["Surat keputusan penerimaan akan dikirimkan melalui email dan notifikasi diberikan melalui Whatsapp."]
      },
      {
        left: "Calon mahasiswa yang diterima wajib mengisi dan mengembalikan formulir konfirmasi untuk menjadi mahasiswa yang dikirimkan oleh petugas admisi STTB.",
        right: ["Form konfirmasi (menyatakan bersedia menjadi mahasiswa) dikirimkan kembali kepada pihak STTB melalui email."]
      },
      {
        left: "Mahasiswa baru menyelesaikan pembayaran uang kuliah dan administrasi pertama lalu mengikuti proses orientasi.",
        right: ["Mahasiswa resmi diterima dan selanjutnya proses studi mahasiswa akan ditangani oleh bagian kemahasiswaan & akademik."]
      }
    ]
  }
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
  { criteria: "Akademik", weight: "30%", description: "Nilai tes tertulis dan transkrip akademik" },
  { criteria: "Panggilan Pelayanan", weight: "25%", description: "Kejelasan visi dan panggilan melayani Tuhan" },
  { criteria: "Pengalaman Pelayanan", weight: "20%", description: "Keterlibatan aktif dalam pelayanan gereja" },
  { criteria: "Kemampuan Komunikasi", weight: "15%", description: "Hasil wawancara dan kemampuan berbahasa" },
  { criteria: "Rekomendasi", weight: "10%", description: "Surat rekomendasi dari pemimpin rohani" },
];

const faqs = [
  { question: "Apakah bisa mendaftar tanpa latar belakang teologi?", answer: "Ya, untuk S1 tidak diperlukan latar belakang teologi. Namun akan ada program matrikulasi untuk penyetaraan pengetahuan dasar." },
  { question: "Berapa lama proses seleksi admisi?", answer: "Dari pendaftaran hingga pengumuman hasil memakan waktu sekitar 6-8 minggu, tergantung gelombang pendaftaran." },
  { question: "Apakah ada batasan usia untuk mendaftar?", answer: "Tidak ada batasan usia khusus, namun calon mahasiswa diharapkan memiliki kematangan spiritual dan mental yang cukup." },
];

export function ProsedurAdmisiPage() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="pt-20">

      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-[#1e3a8a] to-[#172e6e]">
        {/* Background Shapes: Tema Pintu Gerbang (Open Doors) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -left-20 top-10 w-96 h-[800px] border-[2px] border-white/10 skew-x-12 opacity-50" />
          <div className="absolute -right-20 top-0 w-96 h-[800px] border-[2px] border-white/10 -skew-x-12 opacity-50" />
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[100px] rounded-full" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block bg-[#dc2626] text-white px-5 py-2 rounded-full text-xs tracking-widest mb-6 font-black uppercase shadow-lg shadow-red-500/30">
              PROSEDUR ADMISI
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
              Langkah Demi Langkah Menuju STTB
            </h1>
            <p className="text-xl text-blue-100 font-light leading-relaxed max-w-2xl mx-auto">
              Panduan lengkap prosedur penerimaan mahasiswa baru dari tahap pendaftaran awal hingga konfirmasi penerimaan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- MAIN STEPS (Sesuai Gambar Web Asli STTB) --- */}
      <section className="relative overflow-hidden py-24 bg-gray-50">
        {/* Background Shapes: Tema Tangga/Tahapan */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex flex-col justify-end items-end opacity-[0.03] text-[#1e3a8a]">
          <svg width="100%" height="100%" preserveAspectRatio="none">
            <path d="M0,1000 L200,1000 L200,800 L400,800 L400,600 L600,600 L600,400 L800,400 L800,200 L1000,200 L1000,0 L10000,0 L10000,1000 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
              5 Tahap Admisi STTB
            </h2>
            <p className="text-lg text-gray-600 bg-white/50 backdrop-blur-sm inline-block px-6 py-2 rounded-full border border-gray-200">
              Pilih tahapan di bawah ini untuk melihat detail prosedurnya
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
            {/* Sidebar Navigation */}
            <div className="w-full lg:w-1/3 flex flex-col gap-2">
              {sttbStages.map((stage) => (
                <button
                  key={stage.step}
                  onClick={() => setActiveStep(stage.step)}
                  className={`w-full text-left p-5 rounded-xl border-l-4 transition-all duration-300 flex justify-between items-center group
                    ${activeStep === stage.step
                      ? "bg-[#1e3a8a] text-white border-[#dc2626] shadow-lg scale-105 z-10"
                      : "bg-white text-gray-600 border-transparent hover:bg-gray-100 shadow-sm"
                    }`}
                >
                  <div>
                    <div className={`text-sm font-black mb-1 ${activeStep === stage.step ? "text-red-300" : "text-[#1e3a8a]"}`}>
                      TAHAP {stage.step}
                    </div>
                    <div className={`font-semibold line-clamp-2 pr-4 ${activeStep === stage.step ? "text-white" : "text-gray-700"}`}>
                      {stage.title}
                    </div>
                  </div>
                  <ChevronDown className={`transform transition-transform ${activeStep === stage.step ? "-rotate-90 text-white" : "-rotate-90 text-gray-300 group-hover:text-gray-500"}`} />
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="w-full lg:w-2/3">
              <AnimatePresence mode="wait">
                {sttbStages.map((stage) => (
                  activeStep === stage.step && (
                    <motion.div
                      key={stage.step}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden h-full"
                    >
                      <div className="p-8 border-b border-gray-100 bg-gradient-to-r from-blue-50/50 to-white">
                        <h2 className="text-3xl font-light text-gray-400 mb-2">TAHAP {stage.step}</h2>
                        <h3 className="text-2xl font-bold text-[#1e3a8a] leading-tight">
                          {stage.title}
                        </h3>
                        {stage.description && (
                          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
                            {stage.description}
                          </p>
                        )}
                      </div>

                      <div className="p-8">
                        <div className="flex flex-col gap-6">
                          {stage.rows.map((row, rIdx) => (
                            <div key={rIdx} className="flex flex-col md:flex-row border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                              {/* Left Column (Main Info) */}
                              <div className="w-full md:w-1/2 p-5 bg-white text-gray-700 text-sm leading-relaxed border-b md:border-b-0 md:border-r border-gray-200">
                                {row.left}
                              </div>
                              {/* Right Column (Notes/Bullets) */}
                              <div className="w-full md:w-1/2 p-5 bg-gray-50 text-gray-600 text-sm leading-relaxed flex flex-col justify-center">
                                {row.right && row.right.length > 0 ? (
                                  <ul className="list-disc pl-5 space-y-2">
                                    {row.right.map((point, pIdx) => (
                                      <li key={pIdx}>{point}</li>
                                    ))}
                                  </ul>
                                ) : (
                                  <div className="text-center text-gray-400 italic">Tidak ada catatan tambahan</div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* --- REQUIREMENTS & CRITERIA --- */}
      <section className="relative overflow-hidden py-24 bg-white">
        {/* Background Shapes: Tema Fokus & Lensa */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-center items-center">
          {/* Target Reticle Raksasa */}
          <div className="absolute w-[800px] h-[800px] border-[1px] border-[#1e3a8a] opacity-[0.05] rounded-full" />
          <div className="absolute w-[600px] h-[600px] border-[1px] border-[#1e3a8a] opacity-[0.08] rounded-full" />
          <div className="absolute w-[400px] h-[400px] border-[2px] border-[#dc2626] opacity-[0.05] rounded-full" />
          {/* Octagon di pojok */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 border-[8px] border-[#1e3a8a] opacity-[0.03] rotate-45" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">Persyaratan & Kriteria</h2>
            <p className="text-lg text-gray-600">Dokumen yang perlu disiapkan dan aspek yang dinilai.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Persyaratan Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#1e3a8a] rounded-xl flex items-center justify-center text-white shadow-md">
                  <FileCheck size={24} />
                </div>
                <h3 className="text-2xl font-black text-[#1e3a8a]">Persyaratan Umum</h3>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-[#dc2626] mb-3 text-lg border-b border-red-100 pb-2">Program S1</h4>
                  <ul className="space-y-3">
                    {requirements.s1.map((req, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-[#1e3a8a] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[#dc2626] mb-3 text-lg border-b border-red-100 pb-2">Program S2</h4>
                  <ul className="space-y-3">
                    {requirements.s2.map((req, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-[#1e3a8a] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Kriteria Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#dc2626] rounded-xl flex items-center justify-center text-white shadow-md">
                  <ClipboardList size={24} />
                </div>
                <h3 className="text-2xl font-black text-[#1e3a8a]">Kriteria Penilaian</h3>
              </div>

              <div className="space-y-4">
                {selectionCriteria.map((item, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center font-black text-[#dc2626] text-xl shadow-sm border border-red-50 flex-shrink-0 mr-4">
                      {item.weight}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1e3a8a]">{item.criteria}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FAQs --- */}
      <section className="relative overflow-hidden py-24 bg-gray-50">
        {/* Background Shapes: Tema Nodes/Percakapan */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.05] text-[#1e3a8a]">
          <svg className="w-full h-full">
            <circle cx="10%" cy="20%" r="5" fill="currentColor" />
            <circle cx="20%" cy="50%" r="8" fill="currentColor" />
            <circle cx="80%" cy="30%" r="6" fill="currentColor" />
            <circle cx="90%" cy="70%" r="10" fill="currentColor" />
            <line x1="10%" y1="20%" x2="20%" y2="50%" stroke="currentColor" strokeWidth="2" />
            <line x1="20%" y1="50%" x2="80%" y2="30%" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="80%" y1="30%" x2="90%" y2="70%" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">Pertanyaan Umum</h2>
            <p className="text-lg text-gray-600">Jawaban untuk pertanyaan yang sering diajukan saat pendaftaran</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <Info className="text-[#dc2626]" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mengembalikan tombol Lihat Semua FAQ */}
          <div className="text-center mt-10">
            <a
              href="/admissions/faq"
              className="inline-flex items-center gap-2 text-[#1e3a8a] font-bold hover:text-[#dc2626] transition-colors"
            >
              Lihat Semua FAQ
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* --- NEW: BANTUAN INFORMASI & PENGEMBALIAN BERKAS --- */}
      <section className="py-12 bg-white relative z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl bg-[#0a2351] shadow-2xl p-8 md:p-10 max-w-5xl mx-auto border border-blue-900"
          >
            {/* Background Shapes di dalam banner */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-between">
              <div className="w-1/2 h-full bg-[#dc2626] opacity-[0.4] skew-x-[-30deg] -ml-20 blur-[80px]" />
              <div className="w-1/2 h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_100%)] bg-[size:20px_20px] opacity-30" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-yellow-400 font-bold text-sm md:text-base mb-5 tracking-widest uppercase">
                  Bantuan Informasi & Pengembalian Berkas
                </h2>
                <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">

                  {/* Kontak 1 - Telepon */}
                  <div className="flex items-center gap-3 text-white">
                    <div className="bg-blue-500/20 p-3 rounded-full flex-shrink-0">
                      {/* fill="currentColor" dihapus */}
                      <Phone className="text-blue-400" size={24} />
                    </div>
                    <span className="text-xl md:text-2xl font-black tracking-wider">0815 7336 0009</span>
                  </div>

                  {/* Kontak 2 - Email */}
                  <div className="flex items-center gap-3 text-white">
                    <div className="bg-blue-500/20 p-3 rounded-full flex-shrink-0">
                      {/* fill="currentColor" dihapus */}
                      <Mail className="text-blue-400" size={24} />
                    </div>
                    <span className="text-lg md:text-xl font-bold">admisi@sttb.ac.id</span>
                  </div>

                </div>
              </div>

              <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4 flex-shrink-0">
                <a
                  href="https://sis.sttb.ac.id/pmb"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#dc2626] hover:bg-red-700 text-white font-bold text-center py-3.5 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg whitespace-nowrap"
                >
                  Daftar Online
                </a>
                <a
                  href="/admissions/beasiswa"
                  className="bg-white hover:bg-gray-100 text-[#1e3a8a] font-bold text-center py-3.5 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg whitespace-nowrap"
                >
                  Beasiswa
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-red-600 to-red-800">
        {/* Background Shapes: Tema Konvergensi */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-10 flex justify-center items-center">
          <svg viewBox="0 0 100 100" className="w-[150%] h-[150%] stroke-white fill-none" strokeWidth="0.5">
            {[...Array(24)].map((_, i) => {
              // Kita bulatkan angkanya ke 4 desimal agar Server dan Client menghasilkan angka yang sama persis
              const calcX2 = (50 + 50 * Math.cos(i * 15 * Math.PI / 180)).toFixed(4);
              const calcY2 = (50 + 50 * Math.sin(i * 15 * Math.PI / 180)).toFixed(4);

              return (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={calcX2}
                  y2={calcY2}
                />
              );
            })}
          </svg>
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 drop-shadow-md">
              Siap Memulai Proses Admisi?
            </h2>
            <p className="text-xl text-red-50 mb-8 leading-relaxed font-light">
              Jangan ragu untuk memulai! Tim admisi kami siap membantu Anda di setiap tahap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/admissions/pendaftaran-online"
                className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
              >
                <UserPlus size={20} />
                Daftar Sekarang
              </a>
              <a
                href="/admissions/info-persyaratan"
                className="inline-flex items-center justify-center gap-2 bg-red-900/80 border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-900 transition-all transform hover:scale-105 shadow-xl"
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