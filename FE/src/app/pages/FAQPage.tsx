"use client";

import { motion } from "motion/react";
import { HelpCircle, ChevronDown, Search, BookOpen, CreditCard, Calendar, Users, GraduationCap, Home } from "lucide-react";
import { useState } from "react";

const faqCategories = [
  {
    category: "Pendaftaran & Admisi",
    icon: Users,
    color: "from-blue-500 to-blue-600",
    questions: [
      {
        q: "Bagaimana cara mendaftar di STTB?",
        a: "Pendaftaran dilakukan secara online melalui portal PMB di sis.sttb.ac.id/pmb. Anda perlu membuat akun terlebih dahulu, mengisi formulir pendaftaran, mengunggah dokumen persyaratan, dan melakukan pembayaran biaya pendaftaran.",
      },
      {
        q: "Kapan waktu pendaftaran dibuka?",
        a: "Pendaftaran dibuka dalam 2 gelombang setiap tahun. Gelombang 1: Februari-Maret, Gelombang 2: Mei-Juni. Tahun akademik dimulai pada bulan Agustus.",
      },
      {
        q: "Berapa biaya pendaftaran untuk S1 dan S2?",
        a: "Biaya pendaftaran untuk program S1 adalah Rp 300.000 dan untuk program S2 adalah Rp 500.000. Biaya ini tidak dapat dikembalikan dan harus dibayarkan saat melakukan pendaftaran online.",
      },
      {
        q: "Apakah bisa mendaftar jika tidak memiliki latar belakang teologi?",
        a: "Ya, untuk program S1 tidak diperlukan latar belakang teologi. Namun, calon mahasiswa akan mengikuti program matrikulasi untuk penyetaraan pengetahuan dasar teologi sebelum memulai perkuliahan regular.",
      },
      {
        q: "Apa saja dokumen yang diperlukan untuk mendaftar?",
        a: "Dokumen umum meliputi: formulir pendaftaran, pas foto 3x4, KTP, ijazah dan transkrip terakhir, surat rekomendasi gereja, surat keterangan sehat. Untuk S2, diperlukan tambahan surat tugas pelayanan dan proposal riset (untuk konsentrasi tertentu).",
      },
    ],
  },
  {
    category: "Program Studi",
    icon: BookOpen,
    color: "from-green-500 to-green-600",
    questions: [
      {
        q: "Apa perbedaan program S1 dan S2 di STTB?",
        a: "Program S1 (Sarjana Teologi) adalah program sarjana 4 tahun yang mempersiapkan pemimpin rohani dengan dasar teologi yang kuat. Program S2 (Magister Teologi) adalah program pascasarjana 2 tahun dengan fokus penelitian yang lebih mendalam dalam bidang Biblika, Teologi Sistematis, atau Teologi Praktika.",
      },
      {
        q: "Berapa lama durasi studi untuk S1 dan S2?",
        a: "Program S1 ditempuh dalam 8 semester (4 tahun) dengan total 144 SKS. Program S2 ditempuh dalam 4 semester (2 tahun) dengan total 48 SKS termasuk tesis.",
      },
      {
        q: "Apakah ada program non-gelar atau kursus singkat?",
        a: "Saat ini STTB fokus pada program S1 dan S2. Namun, kami juga menawarkan program matrikulasi untuk calon mahasiswa yang memerlukan penyetaraan pengetahuan teologi dasar.",
      },
      {
        q: "Apa saja konsentrasi yang tersedia untuk S2?",
        a: "Program S2 menawarkan tiga konsentrasi: (1) Teologi Biblika - fokus pada studi mendalam Alkitab, (2) Teologi Sistematis - fokus pada doktrin dan teologi konstruktif, (3) Teologi Praktika - fokus pada penerapan teologi dalam konteks pelayanan.",
      },
      {
        q: "Apakah ada program khusus untuk mahasiswa yang sudah bekerja?",
        a: "STTB menawarkan jadwal kuliah yang fleksibel dengan kombinasi weekday dan weekend untuk mengakomodasi mahasiswa yang sudah bekerja atau aktif dalam pelayanan penuh waktu.",
      },
    ],
  },
  {
    category: "Biaya & Keuangan",
    icon: CreditCard,
    color: "from-amber-500 to-amber-600",
    questions: [
      {
        q: "Berapa total biaya kuliah untuk program S1?",
        a: "Untuk tahun pertama S1: Rp 300.000 (pendaftaran) + Rp 3.000.000 (uang gedung) + Rp 3.000.000 (SPP 2 semester) = Total Rp 6.300.000. Tahun berikutnya hanya SPP Rp 1.500.000 per semester.",
      },
      {
        q: "Berapa total biaya kuliah untuk program S2?",
        a: "Untuk tahun pertama S2: Rp 500.000 (pendaftaran) + Rp 5.000.000 (uang gedung) + Rp 5.000.000 (SPP 2 semester) = Total Rp 10.500.000. Tahun berikutnya hanya SPP Rp 2.500.000 per semester.",
      },
      {
        q: "Apakah ada program beasiswa?",
        a: "Ya, STTB menyediakan berbagai program beasiswa: Beasiswa Akademik (25-100% SPP), Beasiswa Prestasi (30-75% SPP), Beasiswa Pelayanan (40-100% SPP), dan Beasiswa Ekonomi (50-100% biaya studi). Informasi lengkap tersedia di halaman Beasiswa.",
      },
      {
        q: "Apakah biaya kuliah bisa dicicil?",
        a: "Ya, pembayaran SPP dapat dicicil. Untuk informasi lebih detail mengenai skema cicilan, silakan konsultasikan dengan bagian keuangan STTB.",
      },
      {
        q: "Apakah ada biaya tambahan selain SPP?",
        a: "Biaya tambahan yang mungkin diperlukan: asrama (Rp 500.000/semester, opsional), makan (estimasi Rp 800.000/bulan), buku dan bahan kuliah (Rp 500-750.000/semester), dan biaya wisuda (Rp 1.500.000-2.000.000).",
      },
    ],
  },
  {
    category: "Kehidupan Kampus",
    icon: Home,
    color: "from-red-500 to-red-600",
    questions: [
      {
        q: "Apakah STTB menyediakan asrama?",
        a: "Ya, STTB menyediakan asrama untuk mahasiswa yang membutuhkan dengan biaya Rp 500.000 per semester. Asrama dilengkapi dengan fasilitas kamar tidur, ruang belajar bersama, dan ruang ibadah.",
      },
      {
        q: "Bagaimana sistem pembinaan rohani di STTB?",
        a: "Mahasiswa wajib mengikuti pembinaan rohani mingguan melalui chapel service, kelompok mentoring, dan kegiatan spiritual formation. Ini adalah bagian integral dari pembentukan karakter pastor-scholar.",
      },
      {
        q: "Apakah ada kegiatan ekstrakurikuler?",
        a: "Ya, mahasiswa dapat terlibat dalam berbagai kegiatan: paduan suara, tim pelayanan sosial, kelompok studi Alkitab, seminar dan konferensi, serta kegiatan olahraga dan rekreasi.",
      },
      {
        q: "Apa itu Senat Mahasiswa STTB?",
        a: "Senat Mahasiswa adalah organisasi kemahasiswaan yang mewakili suara mahasiswa dan mengkoordinasikan berbagai kegiatan kampus. Senat dipilih secara demokratis oleh mahasiswa setiap tahun.",
      },
      {
        q: "Apakah mahasiswa diwajibkan tinggal di asrama?",
        a: "Tidak wajib. Mahasiswa bebas memilih untuk tinggal di asrama kampus atau mencari tempat tinggal sendiri di sekitar kampus sesuai kebutuhan dan kemampuan finansial masing-masing.",
      },
    ],
  },
  {
    category: "Akademik",
    icon: GraduationCap,
    color: "from-purple-500 to-purple-600",
    questions: [
      {
        q: "Bagaimana sistem perkuliahan di STTB?",
        a: "STTB menggunakan sistem SKS (Satuan Kredit Semester) dengan kombinasi perkuliahan tatap muka, diskusi kelas, presentasi, dan penulisan paper. Setiap semester berlangsung sekitar 16 minggu dengan ujian tengah dan akhir semester.",
      },
      {
        q: "Berapa beban SKS maksimal per semester?",
        a: "Mahasiswa S1 dapat mengambil maksimal 24 SKS per semester, sedangkan mahasiswa S2 maksimal 15 SKS per semester. Beban SKS dapat disesuaikan berdasarkan IPK semester sebelumnya.",
      },
      {
        q: "Apakah ada program pertukaran mahasiswa?",
        a: "STTB memiliki kerjasama dengan beberapa sekolah teologi di Asia Tenggara untuk program pertukaran mahasiswa semester pendek dan short courses. Informasi lebih lanjut dapat dikonsultasikan dengan bagian akademik.",
      },
      {
        q: "Bahasa pengantar apa yang digunakan?",
        a: "Bahasa pengantar utama adalah Bahasa Indonesia. Beberapa mata kuliah tertentu menggunakan Bahasa Inggris, terutama untuk level S2. Kemampuan bahasa Inggris sangat dianjurkan untuk akses literatur teologi.",
      },
      {
        q: "Apakah ada bimbingan skripsi/tesis?",
        a: "Ya, setiap mahasiswa akan didampingi oleh dosen pembimbing untuk penulisan skripsi (S1) atau tesis (S2). Proses bimbingan dilakukan secara berkala hingga karya tulis siap untuk diujikan.",
      },
    ],
  },
  {
    category: "Alumni & Karir",
    icon: Users,
    color: "from-indigo-500 to-indigo-600",
    questions: [
      {
        q: "Apa saja prospek karir lulusan STTB?",
        a: "Alumni STTB melayani di berbagai bidang: gembala gereja lokal, dosen/pengajar teologi, misionaris, pemimpin organisasi Kristen, penulis dan penginjil, serta konselor pastoral.",
      },
      {
        q: "Apakah ada program alumni STTB?",
        a: "Ya, STTB memiliki Ikatan Alumni (IA-STTB) yang aktif mengadakan pertemuan rutin, continuing education, dan networking. Alumni juga terlibat dalam mentoring mahasiswa aktif.",
      },
      {
        q: "Apakah lulusan STTB diakui secara nasional?",
        a: "Ya, STTB telah terakreditasi oleh BAN-PT dan diakui secara nasional. Lulusan S1 dan S2 memiliki ijazah yang setara dengan perguruan tinggi umum.",
      },
      {
        q: "Apakah ada program magang atau praktik lapangan?",
        a: "Ya, mahasiswa S1 wajib mengikuti program praktik pelayanan (field education) di gereja atau lembaga Kristen sebagai bagian dari kurikulum. Ini memberikan pengalaman praktis dalam konteks pelayanan nyata.",
      },
      {
        q: "Bagaimana STTB membantu mahasiswa dalam penempatan pelayanan?",
        a: "STTB bekerja sama dengan berbagai gereja dan lembaga Kristen untuk membantu penempatan alumni. Career development juga diberikan melalui workshop, job fair, dan konseling karir.",
      },
    ],
  },
];

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredCategories = faqCategories.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (q) =>
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.questions.length > 0);

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
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Pertanyaan yang Sering Diajukan
            </h1>
            <p className="text-xl text-blue-50 leading-relaxed mb-8">
              Temukan jawaban untuk pertanyaan umum seputar pendaftaran, program studi, dan kehidupan kampus di STTB
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari pertanyaan..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-14 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ffffff] border-2 border-[#ffffff] bg-[#dc2626]/80"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white" size={24} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          {filteredCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12 last:mb-0"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-black text-[#1e3a8a]">
                  {category.category}
                </h2>
              </div>

              {/* Questions */}
              <div className="space-y-3">
                {category.questions.map((faq, qIndex) => {
                  const globalIndex = catIndex * 100 + qIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <motion.div
                      key={qIndex}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: qIndex * 0.05 }}
                      className="bg-gray-50 rounded-lg overflow-hidden border-2 border-transparent hover:border-[#1e3a8a]/20 transition-all"
                    >
                      <button
                        onClick={() => toggleQuestion(globalIndex)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left group"
                      >
                        <div className="flex items-start gap-3 flex-1">
                          <HelpCircle className="text-[#dc2626] flex-shrink-0 mt-0.5" size={20} />
                          <span className="font-bold text-gray-800 group-hover:text-[#1e3a8a] transition-colors">
                            {faq.q}
                          </span>
                        </div>
                        <ChevronDown
                          className={`text-[#1e3a8a] flex-shrink-0 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          size={20}
                        />
                      </button>
                      
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-4"
                        >
                          <div className="pl-8 pr-10">
                            <p className="text-gray-700 leading-relaxed">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="mx-auto text-gray-300 mb-4" size={64} />
              <p className="text-gray-500 text-lg">
                Tidak ada hasil yang ditemukan untuk "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] rounded-2xl p-12 text-center text-white"
          >
            <HelpCircle className="mx-auto text-[#dc2626] mb-6" size={64} />
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Masih Ada Pertanyaan?
            </h2>
            <p className="text-xl text-blue-50 mb-8 leading-relaxed">
              Tim admisi kami siap membantu menjawab pertanyaan Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-[#dc2626] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#fbbf24] transition-all transform hover:scale-105"
              >
                Hubungi Kami
              </a>
              <a
                href="/admissions/pendaftaran-online"
                className="inline-block bg-white text-[#1e3a8a] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Daftar Sekarang
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
