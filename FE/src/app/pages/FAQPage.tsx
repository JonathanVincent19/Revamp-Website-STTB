"use client";

import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, Search, BookOpen, GraduationCap, Info, MessageCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

// --- DATA FAQ BERDASARKAN FOTO YANG DIKIRIM ---
const faqCategories = [
  {
    category: "Informasi Umum",
    icon: Info,
    color: "from-blue-500 to-blue-700",
    questions: [
      {
        q: "Apakah STTB menyediakan beasiswa?",
        a: "STTB menyediakan beasiswa terbatas baik untuk program Sarjana maupun program Magister. Informasi dapat Anda pelajari pada website ini atau dengan bertanya langsung kepada Staf Beasiswa kami di nomor HP: +62 815-7127-228 atau melalui email: beasiswa@sttb.ac.id",
      },
      {
        q: "Apakah perkuliahan di STTB dilaksanakan dalam secara online sampai lulus?",
        a: "Program Sarjana: STTB belum memiliki perkuliahan program Sarjana dalam bentuk full online tetapi dalam masa pandemi perkuliahan dilakukan secara hybrid dengan pembagian sebagai berikut: Bagi mahasiswa program Sarjana, perkuliahan dilaksanakan secara hybrid learning, dimana mahasiswa yang tinggal di asrama mengikuti perkuliahan secara onsite/tatap muka, sedangkan mahasiswa yang sudah berkeluarga dan tidak tinggal di asrama, mengikuti perkuliahan secara online.\n\nProgram Magister: STTB belum memiliki perkuliahan program Magister dalam bentuk full online namun dalam masa pandemi, perkuliahan dilaksanakan dalam bentuk online. Perubahan menuju hybrid learning sedang dilakukan dan penetapan kebijakan perkuliahan masih menunggu perkembangan situasi dan kondisi Pandemi Covid-19.",
      },
      {
        q: "Berapa biaya studi di STTB?",
        a: "Biaya studi bagi program Sarjana dan Magister dibagi menjadi biaya rutin dan insidentil. Adapun biaya rutin adalah biaya administrasi setiap semester dan biaya pendidikan/kuliah yang dibayar sesuai mata kuliah yang diambil, sedangkan biaya tidak rutin/insidentil adalah biaya Pendaftaran dan Tes, Biaya Bimbingan dan Ujian Proposal Skripsi/Tesis serta biaya cuti bila mengambil cuti.",
      },
      {
        q: "Apakah saya dapat bekerja sambil kuliah?",
        a: "Bila Anda mengambil studi di program Sarjana atau M.Th. Matrikulasi, bekerja tidaklah memungkinkan karena jadwal kuliah yang padat dan adanya batasan waktu untuk meninggalkan lingkungan asrama.\n\nBila Anda mengambil studi di program Magister Teologi (M.Th.) atau Magister Pendidikan Kristen (M.Pd.) atau Magister Ministri Pelayanan Marketplace(M.Min.) yang memiliki sistem kuliah block teaching maka Anda dapat bekerja/melayani sambil studi.",
      },
      {
        q: "Apakah saya harus tinggal di asrama?",
        a: "Mahasiswa S1 dan M.Th. Matrikulasi yang belum menikah wajib tinggal di asrama STTB sekalipun mereka berdomisili di Kota Bandung.\n\nMahasiswa S1 dan M.Th. Matrikulasi yang telah berkeluarga (menikah/memiliki anak) harus mencari tempat tinggal sendiri dan tidak diperkenankan tinggal di asrama STTB bersama keluarganya.\n\nMahasiswa S2 yang kuliah secara intensif dapat menginap di asrama STTB hanya selama kelas berlangsung dengan membayar biaya yang telah ditetapkan.",
      },
    ],
  },
  {
    category: "Panduan Memilih Program Studi",
    icon: BookOpen,
    color: "from-green-500 to-green-700",
    questions: [
      {
        q: "Hal-hal apa saja yang harus dipertimbangkan dalam memilih STT atau program studi?",
        a: "• Karunia kemampuan/talenta Anda dan rencana pelayanan Anda di masa depan secara spesifik (misalnya apakah Anda ingin melayani sebagai guru di perkotaan, apakah Anda ingin berkhotbah dan membina jemaat, apakah Anda ingin melayani kaum muda di sekolah, dsb)\n• Peluang tempat dan jenis pelayanan di masa depan berkaitan dengan program studi yang Anda pilih. Kebijakan sinode/gereja berbeda-beda.\n• Isi kurikulum program studi, program pembinaan mahasiswa.\n• Kualitas dosen dan pandangan iman STT.\n• Kemampuan finansial pribadi dalam membiayai studi sampai lulus. Apakah Anda dapat memperoleh sponsor/dukungan dari lembaga atau perorangan? Apakah Anda dapat memperoleh beasiswa?\n• Manajemen waktu Anda – khususnya bagi Anda yang akan mengambil studi S2, pertimbangkanlah apakah Anda dapat menyelesaikan kuliah sambil bekerja dan membagi waktu dengan keluarga.\n• Komunitas belajar Anda kelak – siapakah yang akan menjadi teman-teman belajar Anda di seminari, apakah ada dukungan sosial dari dosen, pelayanan konseling, dan sebagainya.\n• Fasilitas STT khususnya yang mendukung pembelajaran Anda seperti fasilitas perpustakaan, jurnal online, dsb.",
      },
      {
        q: "Bila saya kebingungan dalam memilih program studi, kepada siapa saya dapat berkonsultasi?",
        a: "Anda dapat berkonsultasi dengan pihak-pihak berikut:\n• Hamba Tuhan di gereja Anda\n• Pembina rohani/mentor rohani Anda\n• Pihak admisi STT yang Anda ingin tuju tersebut\n• Sebelum memutuskan untuk mengambil studi di STT, kami menyarankan Anda tetap berkonsultasi dengan keluarga (orang tua dan/atau pasangan hidup Anda) dan atasan Anda (bila sudah bekerja). Anda perlu mengkonfirmasi dukungan mereka terhadap rencana studi Anda.",
      },
      {
        q: "Bagaimana cara melakukan riset pribadi untuk menentukan pilihan STT?",
        a: "Lakukan riset pribadi Anda dengan cara:\n• Bertanya atau mendengarkan testimoni alumni dari STT atau program studi yang dipilih.\n• Mengikuti open house yang diselenggarakan STT tersebut.\n• Mencari informasi dari website, video Youtube, posting media sosial dan sumber-sumber lainnya mengenai seluk-beluk organisasi, kegiatan dan pengajaran dosen dari STT tersebut.",
      },
    ],
  },
  {
    category: "Konsultasi Program Sarjana (S1)",
    icon: GraduationCap,
    color: "from-red-500 to-red-700",
    questions: [
      {
        q: "Saya ingin menjadi Hamba Tuhan secara full time",
        a: "Bagi Anda yang lulus SMA/diploma kami menyarankan Anda memilih program Sarjana Teologi. Jika sinode gereja tempat Anda melayani nantinya tidak mengharuskan lulusan S.Th. yang melayani sebagai pendeta maka Anda juga dapat memilih program Sarjana Pendidikan Kristen.",
      },
      {
        q: "Saya ingin menjadi guru agama atau guru di sekolah Kristen",
        a: "Kami menyarankan Anda untuk mengambil program studi Sarjana Pendidikan Kristen (S.Pd.K.). Memang lulusan program Sarjana Teologi dari STTB bisa saja menjadi guru Agama Kristen karena mereka juga dibekali ilmu pendidikan, namun bila tujuan Anda sejak awal adalah menjadi guru maka program Sarjana Pendidikan Kristen jauh lebih tepat karena muatan ilmu-ilmu pendidikan jauh lebih banyak dalam prodi ini.",
      },
      {
        q: "Saya ingin bekerja di bidang misi dan menjadi misionaris",
        a: "Kami menyarankan Anda untuk berkonsultasi dengan gereja atau tempat dimana Anda akan melayani dalam misi Anda. Beberapa denominasi membutuhkan Sarjana Teologi (S.Th.) sementara ada juga yang membutuhkan lulusan Sarjana Pendidikan (S.Pd.) karena pelayanan misi lembaganya dikhususkan dalam pendidikan.",
      },
      {
        q: "Apakah dengan studi S1 di seminari dapat bekerja nongereja?",
        a: "Ya, baik lulusan Sarjana Teologi (S.Th.) dan Sarjana Pendidikan Kristen (S.Pd.) dapat bekerja di lingkungan nongereja atau non sekolah kristen. Kami menyarankan Anda sudah mempertimbangkan panggilan dan rencana pelayanan ke depannya sebelum memilih untuk masuk S1 di seminari.",
      },
    ],
  },
  {
    category: "Konsultasi Program Magister (S2)",
    icon: MessageCircle,
    color: "from-amber-500 to-amber-700",
    questions: [
      {
        q: "Saya ingin berkarir dalam hal akademik atau pendidikan",
        a: "Kami menyarankan Anda untuk memilih program studi Magister Pendidikan (M.Pd.) dan membuat tesis/riset tentang metode pembelajaran di sekolah tertentu dan Anda bisa merencanakan untuk mengambil studi lanjut (Doktoral) yang berhubungan dengan pengembangan basis Anda.\n\nBila Anda ingin berkarir dalam dunia pendidikan teologi maka Anda juga dapat mengambil program studi Magister Teologi. Program magister teologi dapat menunjang karir Anda untuk mengambil doktoral dalam bidang teologi atau menjadi dosen teologi. Gelar ini juga diakui oleh pemerintah sebagai gelar akademis.",
      },
      {
        q: "Saya sudah memiliki gelar Master of Divinity (M.Div.), tapi saya ingin memperdalam beberapa mata kuliah teologi yang belum saya dapatkan",
        a: "Magister Teologi (M.Th.) memiliki kekuatan akademik yang dibutuhkan untuk gelar vokasional seperti M.Div.",
      },
      {
        q: "Saya ingin menjadi Hamba Tuhan secara full time",
        a: "Bagi Anda yang lulus S1 maka kami menyarankan Anda untuk memilih program studi Magister Teologi (M.Th.) Anda akan menempuh jalur matrikulasi Magister Teologi.\n\nKhusus lulusan program Sarjana Pendidikan Kristen dari STTB dapat mengambil program M.Th. tanpa mengikuti jalur matrikulasi.",
      },
      {
        q: "Saya ingin bekerja di lingkup gereja atau organisasi parachurch",
        a: "Umumnya gereja menerima mereka yang lulus dari program studi teologi namun kami juga menyarankan Anda untuk berkonsultasi dengan gereja atau tempat dimana Anda akan melayani dalam misi Anda. Beberapa denominasi membutuhkan Sarjana/Magister Teologi (M.Th.) sementara ada juga yang menerima Magister Ministri atau Sarjana/Magister Pendidikan (M.Pd.).",
      },
      {
        q: "Saya ingin mengintegrasikan iman Kristen saya dalam karir yang sedang saya jalani",
        a: "Kami menyarankan Anda untuk mengambil program studi Magister Ministri Pelayanan Marketplace (M.Min. Marketplace).",
      },
      {
        q: "Saya adalah aktivis gereja dan ingin diperlengkapi dalam bidang teologi untuk mengajar pemuridan jemaat/berkhotbah di mimbar",
        a: "Kami menyarankan Anda mengambil program Magister Ministri Pelayanan Marketplace karena program ini tetap menekankan banyak pengajaran teologi namun memberikan banyak ilmu-ilmu praktis juga untuk melayani pemuridan di marketplace. Setelah menjadi mahasiswa Anda juga dapat memperkaya diri dengan mengambil sit in ke mata kuliah teologi di prodi magister lainnya tanpa dipungut biaya.",
      },
      {
        q: "Saya ingin bekerja di bidang misi dan menjadi misionaris",
        a: "Kami menyarankan Anda untuk berkonsultasi dengan gereja atau tempat dimana Anda akan melayani dalam misi Anda. Beberapa denominasi membutuhkan Magister Teologi (M.Th.) sementara ada juga yang menerima Magister Ministri atau Magister Pendidikan (M.Pd.).\n\nApabila Anda ingin bermisi sebagai orang Kristen dalam kehidupan sehari-hari Anda di perkotaan maka kami menyarankan Anda mengambil program studi Magister Ministri Pelayanan Marketplace (M.Min. Marketplace).",
      },
      {
        q: "Saya sudah memiliki gelar Master Teologi tetapi saya belum menyelesaikan tesis saya",
        a: "Program Magister Teologi akan memperdalam pemahaman teologi Anda dan meningkatkan keterampilan penelitian Anda, yang kemungkinan akan memfasilitasi masuk ke program doktoral.",
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
      {/* --- HERO SECTION --- */}
      <section className="relative py-24 bg-gradient-to-br from-[#1e3a8a] to-[#172e6e] overflow-hidden">
        {/* Background Shapes: Tema Dialog & Konsultasi */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-center items-center">
          {/* Tanda Tanya Raksasa Watermark */}
          <div className="absolute top-10 left-10 text-[250px] font-serif text-white opacity-[0.03] select-none leading-none -rotate-12">?</div>
          {/* Tanda Kutip Dialog */}
          <div className="absolute -bottom-10 right-20 text-[300px] font-serif text-white opacity-[0.03] select-none leading-none rotate-12">"</div>

          {/* Garis Abstrak Wave */}
          <svg className="absolute w-full h-full opacity-[0.04]" preserveAspectRatio="none" viewBox="0 0 1440 320">
            <path fill="none" stroke="currentColor" strokeWidth="2" d="M0,256L80,245.3C160,235,320,213,480,218.7C640,224,800,256,960,250.7C1120,245,1280,203,1360,192L1440,181"></path>
            <path fill="none" stroke="currentColor" strokeWidth="2" d="M0,128L80,144C160,160,320,192,480,186.7C640,181,800,139,960,128C1120,117,1280,139,1360,149.3L1440,160"></path>
          </svg>
        </div>
        {/* ------------------------------------------- */}

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block bg-[#dc2626] text-white px-5 py-2 rounded-full text-xs tracking-widest mb-6 font-black uppercase shadow-lg shadow-red-500/30">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-md">
              Pertanyaan & Konsultasi
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-10 font-light">
              Temukan jawaban untuk pertanyaan umum seputar biaya, asrama, hingga panduan memilih program studi yang tepat untuk Anda.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative group">
              <input
                type="text"
                placeholder="Cari pertanyaan atau kata kunci..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-16 rounded-2xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-400 bg-white/95 backdrop-blur-sm shadow-xl transition-all"
              />
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1e3a8a] transition-colors" size={24} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FAQ CATEGORIES SECTION --- */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* --- BACKGROUND SHAPES: DIALOG & JARINGAN (SUDAH DITEBALKAN) --- */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Dot Grid Background - Opacity dinaikkan ke 8% */}
          <div className="absolute inset-0 text-[#1e3a8a] opacity-[0.08]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="dotGridFAQ" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="currentColor" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#dotGridFAQ)" />
            </svg>
          </div>

          {/* Lingkaran Koneksi Raksasa - Garis lebih tebal dan lebih terlihat */}
          <div className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] border-[6px] border-[#1e3a8a] opacity-[0.06] rounded-full" />
          <div className="absolute bottom-1/4 right-[-10%] w-[800px] h-[800px] border-[6px] border-[#dc2626] opacity-[0.04] rounded-full" />

          {/* Watermark Chat Bubble (Gelembung Pesan) Abstrak */}
          <div className="absolute top-20 right-20 text-[#1e3a8a] opacity-[0.05] rotate-12">
            <MessageCircle size={350} strokeWidth={1} />
          </div>
          <div className="absolute bottom-20 left-10 text-[#dc2626] opacity-[0.05] -rotate-12 -scale-x-100">
            <MessageCircle size={250} strokeWidth={1} />
          </div>
        </div>
        {/* ------------------------------------------------------------- */}

        <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-5xl">
          {filteredCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16 last:mb-0"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <category.icon className="text-white" size={28} />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-[#1e3a8a]">
                  {category.category}
                </h2>
              </div>

              {/* Questions Accordion */}
              <div className="space-y-4">
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
                      className={`bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border-2 transition-all duration-300 shadow-sm relative z-10 ${isOpen ? "border-[#1e3a8a] shadow-md" : "border-gray-200 hover:border-blue-300"}`}
                    >
                      <button
                        onClick={() => toggleQuestion(globalIndex)}
                        className={`w-full px-6 py-5 flex items-center justify-between text-left group ${isOpen ? "bg-blue-50/80" : ""}`}
                      >
                        <div className="flex items-start gap-4 flex-1 pr-4">
                          <div className={`mt-0.5 p-1.5 rounded-lg transition-colors ${isOpen ? "bg-[#1e3a8a] text-white" : "bg-gray-100 text-gray-400 group-hover:bg-red-50 group-hover:text-[#dc2626]"}`}>
                            <HelpCircle size={20} />
                          </div>
                          <span className={`font-bold text-lg leading-snug transition-colors ${isOpen ? "text-[#1e3a8a]" : "text-gray-800 group-hover:text-[#dc2626]"}`}>
                            {faq.q}
                          </span>
                        </div>
                        <ChevronDown
                          className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#1e3a8a]" : "text-gray-400"}`}
                          size={24}
                        />
                      </button>

                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-6 pt-2 bg-blue-50/80"
                        >
                          <div className="pl-14 pr-4">
                            <p className="text-gray-700 leading-relaxed font-medium whitespace-pre-line">
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

          {/* Empty State / Not Found */}
          {filteredCategories.length === 0 && (
            <div className="text-center py-20 bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200 shadow-sm relative z-10">
              <Search className="mx-auto text-gray-300 mb-4" size={64} />
              <p className="text-gray-500 text-xl font-medium">
                Tidak ada hasil yang ditemukan untuk <span className="text-[#dc2626]">"{searchQuery}"</span>
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-6 text-[#1e3a8a] font-bold hover:underline"
              >
                Reset Pencarian
              </button>
            </div>
          )}
        </div>
      </section>

      {/* --- CONTACT CTA --- */}
      <section className="relative py-24 bg-gray-50 overflow-hidden">
        {/* Background Shapes: Puzzle & Blok Kecocokan */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-[0.04] text-[#1e3a8a]">
          <svg width="800" height="800" viewBox="0 0 24 24" fill="currentColor">
            {/* Bentuk icon puzzle abstrak */}
            <path d="M19 11h-1.56a2.5 2.5 0 0 1-4.88 0H11v1.56a2.5 2.5 0 0 1 0 4.88V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4h1.56a2.5 2.5 0 0 1 0-4.88H3V5a2 2 0 0 1 2-2h4v1.56a2.5 2.5 0 0 1 4.88 0V3h4a2 2 0 0 1 2 2v4h-1.56a2.5 2.5 0 0 1 0 4.88V11z" />
          </svg>
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-[#1e3a8a] to-[#0f235e] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
          >
            {/* Dekorasi Garis Cahaya di dalam Card */}
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-white opacity-5 rounded-full blur-[30px]" />
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#dc2626] opacity-20 rounded-full blur-[50px]" />

            <div className="relative z-10">
              <div className="bg-red-500/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-red-400/30">
                <MessageCircle className="text-white" size={40} />
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 drop-shadow-md">
                Masih Membutuhkan Bantuan?
              </h2>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
                Jangan ragu. Tim Admisi STTB selalu siap membantu menjawab setiap keraguan dan pertanyaan Anda secara personal.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#dc2626] text-white px-8 py-4.5 rounded-xl font-bold text-lg hover:bg-red-700 transition-all transform hover:-translate-y-1 shadow-lg shadow-red-900/50"
                >
                  Hubungi Tim Admisi
                </a>
                <a
                  href="/admissions/pendaftaran-online"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#1e3a8a] px-8 py-4.5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-lg"
                >
                  Daftar Sekarang
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}