"use client";

import { motion } from "motion/react";
import { DollarSign, FileText, Calendar, CheckCircle2, Info, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// ==========================================
// 1. DATA (TIDAK ADA YANG DIUBAH)
// ==========================================

const s1Data = [
  { type: 'header', title: 'Administrasi' },
  { no: '1', jenis: 'Pendaftaran & Tes masuk', nominal: 'Rp. 500.000,-' },
  { no: '2', jenis: 'Administrasi Per Semester', nominal: 'Rp. 500.000,-' },
  { type: 'header', title: 'Kuliah/Bimbingan Khusus' },
  { no: '3', jenis: 'Pendidikan (Biaya Kuliah) Per Semester', nominal: 'Rp. 9.000.000,-' },
  { no: '4', jenis: 'Bimbingan Tugas Akhir', nominal: 'Rp. 1.500.000,-' },
  { type: 'header', title: 'Lain-lain' },
  { no: '5', jenis: 'Wisuda', nominal: 'Rp. 2.000.000,-' },
  { no: '6', jenis: 'Cuti Akademik (bila mengambil cuti) Per Semester', nominal: 'Rp. 500.000,-' }
];

const s1Notes = [
  "Pembayaran biaya pendidikan selama 1 semester (poin no. 3 sebesar Rp.9.000.000,-) dapat dilakukan sekaligus per 1 semester atau dengan mencicil selama 6 bulan (Januari-Juni atau Juli-Desember) sebesar Rp.1.500.000,-/bulan",
  "Biaya administrasi semester dibayarkan di awal semester (bulan Januari & Juli) selama mahasiswa berstatus mahasiswa aktif (hingga wisuda)",
  "STTB memberikan subsidi untuk biaya akomodasi & konsumsi",
  "Biaya sewaktu-waktu dapat berubah (dengan pemberitahuan sebelumnya)"
];

const s2Data = [
  { type: 'header', title: 'Administrasi' },
  { no: '1', jenis: 'Pendaftaran & Tes Masuk', nominal: 'Rp. 500.000,-' },
  { no: '2', jenis: 'Administrasi Per Semester', nominal: 'Rp. 500.000,-' },
  { type: 'header', title: 'Kuliah/Bimbingan Khusus' },
  { no: '3', jenis: 'Pendidikan (Kuliah) Per Mata Kuliah', nominal: 'Rp. 1.500.000,-' },
  { no: '4', jenis: 'Bimbingan & Ujian Proposal Tesis', nominal: 'Rp. 2.000.000,-' },
  { no: '5', jenis: 'Bimbingan & Sidang Tesis', nominal: 'Rp. 5.000.000,-' },
  { type: 'header', title: 'Lain-lain' },
  { no: '6', jenis: 'Wisuda', nominal: 'Rp. 2.500.000,-' },
  { no: '7', jenis: 'Cuti Akademik (bila mengambil cuti) Per Semester', nominal: 'Rp. 500.000,-' }
];

const s3Data = [
  { type: 'header', title: 'Administrasi' },
  { no: '1', jenis: 'Pendaftaran & Tes Masuk', nominal: 'Rp. 500.000,-' },
  { no: '2', jenis: 'Administrasi Per Semester', nominal: 'Rp. 500.000,-' },
  { type: 'header', title: 'Kuliah/Bimbingan Khusus' },
  { no: '3', jenis: 'Pendidikan (Kuliah) Per Mata Kuliah', nominal: 'Rp. 1.500.000,-' },
  { no: '4', jenis: 'Tugas Akhir (Proyek)', nominal: 'Rp. 2.500.000,-' },
  { type: 'header', title: 'Lain-lain' },
  { no: '5', jenis: 'Wisuda', nominal: 'Rp. 2.500.000,-' },
  { no: '6', jenis: 'Cuti Akademik (bila mengambil cuti) Per Semester', nominal: 'Rp. 500.000,-' }
];

const s2MatrikulasiData = [
  { type: 'header', title: 'Biaya Program Matrikulasi' },
  { no: '1', jenis: 'Pendidikan (Biaya Kuliah) Per Semester', nominal: 'Rp. 7.800.000,-' }
];

const mthNotes = [
  "Biaya pendidikan/kuliah dibayarkan selambat-lambatnya 2 (dua) minggu sebelum perkuliahan dimulai",
  "Biaya administrasi semester dibayarkan di awal semester (bulan Januari & Juli) selama mahasiswa berstatus mahasiswa aktif (hingga wisuda)",
  "Biaya sewaktu-waktu dapat berubah (dengan pemberitahuan sebelumnya)",
  "Bagi mahasiswa baru Prodi M.Th. yang tidak memiliki gelar S.Th, maka ybs wajib mengikuti program matrikulasi terlebih dahulu selama 4 semester (2 tahun) dengan biaya studi matrikulasi terlampir"
];

const s2MatrikulasiNotes = [
  "Pembayaran biaya pendidikan program matrikulasi selama 1 semester (poin no. 1 sebesar Rp.7.800.000,-) dapat dilakukan sekaligus per 1 semester atau dengan mencicil selama 6 bulan (Januari-Juni atau Juli-Desember) sebesar Rp.1.300.000,-/bulan"
];

const mpdNotes = [
  "Biaya pendidikan/kuliah dibayarkan selambat-lambatnya 2 (dua) minggu sebelum perkuliahan dimulai",
  "Biaya administrasi semester dibayarkan di awal semester (bulan Januari & Juli) selama mahasiswa berstatus mahasiswa aktif (hingga wisuda)",
  "Biaya sewaktu-waktu dapat berubah (dengan pemberitahuan sebelumnya)"
];

const mminNotes = [
  "Biaya pendidikan/kuliah dibayarkan selambat-lambatnya 2 (dua) minggu sebelum perkuliahan dimulai",
  "Biaya administrasi semester dibayarkan di awal semester (bulan Januari & Juli) selama mahasiswa berstatus mahasiswa aktif (hingga wisuda)",
  "Biaya sewaktu-waktu dapat berubah (dengan pemberitahuan sebelumnya)"
];

const paymentMethods = [
  {
    name: "Transfer Bank BCA",
    description: "Cabang Surya Sumantri, Bandung",
    details: "a/c 282.300.5555 (a/n Yayasan STT Bandung)",
  },
];

const importantNotes = [
  "Biaya pendidikan S1 dibayarkan sekaligus per semester atau dicicil selama 6 bulan (Januari-Juni atau Juli-Desember).",
  "Biaya administrasi semester dibayarkan di awal semester (bulan Januari & Juli) selama berstatus mahasiswa aktif hingga wisuda.",
  "Biaya pendidikan/kuliah S2/S3 dibayarkan selambat-lambatnya 2 (dua) minggu sebelum perkuliahan dimulai.",
  "STTB memberikan subsidi untuk biaya akomodasi & konsumsi bagi mahasiswa program S1.",
  "Bagi mahasiswa baru Prodi M.Th. yang tidak memiliki gelar S.Th, wajib mengikuti program matrikulasi terlebih dahulu.",
  "Biaya sewaktu-waktu dapat berubah (dengan pemberitahuan sebelumnya).",
];

// ==========================================
// 2. KOMPONEN MIKRO (FeeTable)
// ==========================================

const FeeTable = ({ title, data, notes }: { title: string, data: any[], notes: string[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
    className="w-full"
  >
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all hover:shadow-2xl hover:border-gray-300 group">

      {/* Table Title / Header Accent (Desain Baru yang Lebih Menarik) */}
      <div className="bg-gradient-to-br from-[#0a1930] to-[#143177] p-6 text-center border-b-4 border-[#dc2626] relative overflow-hidden">
        {/* Glow Merah di Kiri Atas */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#dc2626]/40 rounded-full blur-[40px] pointer-events-none" />
        {/* Glow Putih/Biru Terang di Kanan Bawah */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-[40px] pointer-events-none" />

        {/* Pola Garis Diagonal (Blueprint/Carbon Texture) */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.3) 49%, rgba(255,255,255,0.3) 51%, transparent 52%)',
            backgroundSize: '14px 14px'
          }}
        />

        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight relative z-10 drop-shadow-md">
          {title}
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50 text-[#0a1930]">
              <th className="py-4 px-4 sm:px-6 text-center font-black w-20 uppercase text-xs tracking-wider">No</th>
              <th className="py-4 px-6 text-left font-black uppercase text-xs tracking-wider">Jenis Pembiayaan</th>
              <th className="py-4 px-6 text-right font-black uppercase text-xs tracking-wider w-48 sm:w-64">Nominal</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => {
              if (row.type === 'header') {
                return (
                  <tr key={index} className="bg-gray-100/50 text-[#1e3a8a] border-y border-gray-200">
                    <td colSpan={3} className="py-3 px-6 text-center font-extrabold tracking-wide uppercase text-sm shadow-inner">
                      {row.title}
                    </td>
                  </tr>
                );
              }
              return (
                <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-blue-50/50 transition-colors">
                  <td className="py-4 px-4 sm:px-6 text-center text-gray-500 font-medium">{row.no}</td>
                  <td className="py-4 px-6 text-gray-800 font-medium leading-tight">{row.jenis}</td>
                  <td className="py-4 px-6 text-gray-950 text-right font-bold whitespace-nowrap tracking-tight">{row.nominal}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Notes Section Footer */}
      {notes && notes.length > 0 && (
        <div className="bg-gray-50 p-6 sm:p-8 border-t border-gray-200 rounded-b-2xl">
          <h4 className="font-extrabold text-[#0a1930] mb-4 tracking-wide flex items-center justify-center gap-3">
            <Info size={18} className="text-[#dc2626]" />
            Catatan Penting
          </h4>
          <ul className="space-y-3 mb-6 max-w-3xl mx-auto">
            {notes.map((note, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#dc2626] mt-2.5 flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm leading-relaxed flex-1">{note}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </motion.div>
);

// ==========================================
// 3. HALAMAN UTAMA
// ==========================================

export function BiayaStudiPage() {
  return (
    <div className="pt-20">

      {/* --- HERO SECTION --- */}
      <section className="relative py-24 bg-gradient-to-r from-[#071333] via-[#143177] to-[#071333] overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.15]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="plusPattern" width="36" height="36" patternUnits="userSpaceOnUse">
                  <path d="M18 14 L18 22 M14 18 L22 18" stroke="#ffffff" strokeWidth="1" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#plusPattern)" />
            </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#071333] via-transparent to-transparent opacity-80" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="" />
            <span className="inline-block bg-white/10 text-blue-100 px-5 py-2 rounded-full text-xs tracking-[0.2em] uppercase mb-5 font-bold backdrop-blur-sm border border-white/20 shadow-sm">
              INFORMASI BIAYA PENDIDIKAN
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
              Investasi Masa Depan <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-[#dc2626]">Teologi Anda</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100/90 font-light leading-relaxed max-w-3xl mx-auto">
              STTB berkomitmen menyediakan pendidikan teologi berkualitas tinggi dengan biaya yang terjangkau dan transparan bagi setiap calon mahasiswa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- INTRODUCTION & FEE TABLES (SIMETRIS) --- */}
      <section className="relative py-24 bg-white overflow-hidden" id="struktur-biaya">

        {/* Latar Belakang Desain Baru yang LEBIH EYE-CATCHING (Financial Flow) */}
        <div className="absolute inset-0 z-0 pointer-events-none flex justify-center overflow-hidden">

          {/* Pola Garis Diagonal (Hatch) besar di belakang */}
          <div className="absolute inset-0 opacity-[0.03] text-[#1e3a8a]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hatch_fee" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="40" stroke="currentColor" strokeWidth="2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hatch_fee)" />
            </svg>
          </div>

          {/* Grafik Lengkung (Flow) Besar Eye-Catching */}
          <svg className="absolute top-10 left-[-10%] w-[120%] h-auto opacity-[0.06] text-[#1e3a8a]" viewBox="0 0 1000 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,150 C200,50 300,250 500,150 C700,50 800,250 1000,150" fill="none" stroke="currentColor" strokeWidth="6" />
            <path d="M0,180 C250,80 350,280 500,180 C650,80 750,280 1000,180" fill="none" stroke="#dc2626" strokeWidth="3" opacity="0.6" strokeDasharray="10 10" />
          </svg>

          <svg className="absolute bottom-40 left-[-10%] w-[120%] h-auto opacity-[0.06] text-[#dc2626]" viewBox="0 0 1000 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1000,150 C800,250 700,50 500,150 C300,250 200,50 0,150" fill="none" stroke="currentColor" strokeWidth="6" />
            <path d="M1000,120 C750,220 650,20 500,120 C350,220 250,20 0,120" fill="none" stroke="#1e3a8a" strokeWidth="3" opacity="0.6" strokeDasharray="10 10" />
          </svg>

          {/* Glow / Spotlight Warna Besar yang Melebar */}
          <div className="absolute top-0 right-0 w-[50vw] h-[800px] bg-[#1e3a8a] rounded-full blur-[180px] opacity-[0.08]" />
          <div className="absolute bottom-20 left-0 w-[40vw] h-[1000px] bg-[#dc2626] rounded-full blur-[180px] opacity-[0.06]" />

          {/* Garis Struktural Vertikal Pengawal Konten */}
          <div className="absolute top-0 bottom-0 left-[15%] w-[2px] bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
          <div className="absolute top-0 bottom-0 right-[15%] w-[2px] bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2.5 rounded-full mb-6 font-bold shadow-sm border border-blue-200">
              <DollarSign size={18} className="text-[#dc2626]" />
              <span>STRUKTUR BIAYA PENDIDIKAN</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-6 tracking-tight drop-shadow-sm">
              Biaya Pendidikan Terjangkau
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-3xl mx-auto">
              Investasi pendidikan di STTB dirancang untuk mendukung perjalanan akademik Anda. Berikut adalah rincian biaya komprehensif dari setiap program studi.
            </p>
          </div>

          <div className="flex flex-col gap-14 w-full relative z-20">
            <FeeTable title="Program Sarjana Teologi (S.Th.)" data={s1Data} notes={s1Notes} />
            <FeeTable title="Program Sarjana Pendidikan (S.Pd.)" data={s1Data} notes={s1Notes} />
            <FeeTable title="Program Magister Teologi (M.Th.)" data={s2Data} notes={mthNotes} />
            <FeeTable title="Program Matrikulasi M.Th." data={s2MatrikulasiData} notes={s2MatrikulasiNotes} />
            <FeeTable title="Program Magister Pendidikan (M.Pd.)" data={s2Data} notes={mpdNotes} />
            <FeeTable title="Program Magister Ministri (M.Min.)" data={s3Data} notes={mminNotes} />
          </div>
        </div>
      </section>

      {/* --- PAYMENT METHODS (SIMETRIS) --- */}
      <section className="relative py-24 bg-[#fafafa] overflow-hidden border-t border-gray-200" id="payment">

        {/* Background Heksagonal Diperjelas */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.08] text-[#dc2626]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexNetwork_clear" width="100" height="173.2" patternUnits="userSpaceOnUse" patternTransform="scale(0.8) rotate(30)">
                <path d="M50 0 L100 28.85 L100 86.55 L50 115.4 L0 86.55 L0 28.85 Z" stroke="currentColor" strokeWidth="2" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexNetwork_clear)" />
          </svg>
        </div>

        {/* Glow Latar Merah Lembut di Tengah */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-100/50 rounded-full blur-[80px]" />

        <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white text-[#1e3a8a] px-4 py-2.5 rounded-full mb-6 font-bold shadow-md border border-gray-100">
              <Calendar size={18} className="text-[#dc2626]" />
              <span>METODE PEMBAYARAN MUDAH</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#020817] mb-5 tracking-tight">
              Cara Pembayaran Studi
            </h2>
          </div>

          <div className="flex justify-center max-w-lg mx-auto">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full bg-white rounded-3xl p-10 border border-gray-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 group flex flex-col items-center text-center relative overflow-hidden"
              >
                {/* Garis Aksen Card BCA */}
                <div className="absolute top-0 left-0 w-full h-2 bg-[#1e3a8a]" />

                <div className="w-24 h-24 bg-blue-50/50 rounded-2xl flex items-center justify-center mb-8 border border-blue-100 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <ImageWithFallback
                    src="/images/logo-bca.png"
                    alt="BCA Logo"
                    className="w-16 h-auto object-contain"
                  />
                </div>
                <h3 className="text-2xl font-extrabold text-[#0a1930] mb-3 tracking-tight">
                  {method.name}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-8 flex-1 font-medium">
                  {method.description}
                </p>
                <p className="text-base text-[#1e3a8a] bg-blue-50 rounded-full px-8 py-4 font-black tracking-widest border border-blue-200">
                  {method.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- IMPORTANT NOTES SECTION (SIMETRIS) --- */}
      <section className="relative py-24 bg-white overflow-hidden" id="notes">

        {/* Background Sudut (Corner Brackets) Diperjelas */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15] text-[#dc2626]">
          <div className="absolute top-1/4 left-[10%] w-32 h-32 border-l-8 border-t-8 border-current rounded-tl-2xl" />
          <div className="absolute top-1/4 right-[10%] w-32 h-32 border-r-8 border-t-8 border-current rounded-tr-2xl" />
          <div className="absolute bottom-1/4 left-[10%] w-32 h-32 border-l-8 border-b-8 border-current rounded-bl-2xl" />
          <div className="absolute bottom-1/4 right-[10%] w-32 h-32 border-r-8 border-b-8 border-current rounded-br-2xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="text-center mb-16 relative">
            <Info size={120} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#dc2626]/10 -z-10" strokeWidth={1} />
            <div className="inline-flex items-center gap-2 bg-[#dc2626] text-white px-5 py-2.5 rounded-full mb-6 font-bold shadow-lg">
              <FileText size={18} />
              <span>CATATAN PENTING & KEBIJAKAN</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-5 tracking-tight">
              Hal yang Perlu Diketahui
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 relative overflow-hidden group hover:border-red-200 transition-colors"
          >
            <div className="absolute top-0 bottom-0 left-0 w-2 bg-[#dc2626] group-hover:w-full group-hover:opacity-5 transition-all duration-500" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              {importantNotes.map((note, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-50 text-[#dc2626] rounded-full flex items-center justify-center border border-red-100 shadow-sm mt-0.5">
                    <CheckCircle2 size={18} strokeWidth={2.5} />
                  </div>
                  <p className="text-gray-700 leading-relaxed font-medium text-[15px]">{note}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}