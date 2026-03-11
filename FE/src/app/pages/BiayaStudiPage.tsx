"use client";

import { motion } from "motion/react";
import { DollarSign, FileText, Calendar, CheckCircle2, Info } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

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
    "Pembayaran biaya pendidikan selama 1 semester (poin no. 3 dengan jumlah sebesar Rp.9.000.000,-) dapat dilakukan sekaligus per 1 semester atau dengan mencicil selama 6 bulan (Januari-Juni atau Juli-Desember) sebesar Rp.1.500.000,-/bulan",
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
    "Pembayaran biaya pendidikan program matrikulasi selama 1 semester (poin no. 1 dengan jumlah sebesar Rp.7.800.000,-) dapat dilakukan sekaligus per 1 semester atau dengan mencicil selama 6 bulan (Januari-Juni atau Juli-Desember) sebesar Rp.1.300.000,-/bulan"
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
  "Biaya pendidikan/kuliah S2 dibayarkan selambat-lambatnya 2 (dua) minggu sebelum perkuliahan dimulai.",
  "STTB memberikan subsidi untuk biaya akomodasi & konsumsi bagi mahasiswa program S1.",
  "Bagi mahasiswa baru Prodi M.Th. yang tidak memiliki gelar S.Th, wajib mengikuti program matrikulasi terlebih dahulu.",
  "Biaya sewaktu-waktu dapat berubah (dengan pemberitahuan sebelumnya).",
];

const FeeTable = ({ title, data, notes, link }: { title: string, data: any[], notes: string[], link?: string }) => (
    <div className="mb-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Table Title / Header Accent */}
            <div className="bg-gradient-to-r from-[#1e3a8a] to-blue-800 p-6 sm:px-8 border-b-4 border-[#e62020]">
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-wider">{title}</h3>
            </div>
            
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-[#0f2856] text-white">
                            <th className="py-4 px-4 sm:px-6 text-center font-bold w-16">No</th>
                            <th className="py-4 px-6 text-left font-bold">Jenis</th>
                            <th className="py-4 px-6 text-right font-bold w-48 sm:w-64">Nominal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => {
                            if (row.type === 'header') {
                                return (
                                    <tr key={index} className="bg-[#dbeafe] text-[#1e3a8a] border-b border-gray-200">
                                        <td colSpan={3} className="py-3 px-6 text-left font-black tracking-wide uppercase text-sm shadow-sm">
                                            {row.title}
                                        </td>
                                    </tr>
                                );
                            }
                            return (
                                <tr key={index} className="border-b border-gray-100 last:border-0 odd:bg-white even:bg-gray-50 hover:bg-blue-50/50 transition-colors">
                                    <td className="py-4 px-4 sm:px-6 text-center text-gray-500 font-medium">{row.no}</td>
                                    <td className="py-4 px-6 text-gray-800 font-medium">{row.jenis}</td>
                                    <td className="py-4 px-6 text-gray-800 text-right font-bold whitespace-nowrap">{row.nominal}</td>
                                </tr>
                            );
                        })}
                        {data.length === 0 && (
                            <tr>
                                <td colSpan={3} className="py-16 px-6 text-center text-gray-500 italic bg-gray-50/50">
                                    <FileText className="mx-auto mb-4 text-gray-400" size={36} />
                                    <p className="text-lg mb-1 font-medium">Rincian besaran biaya belum tersedia secara online.</p>
                                    <p className="text-sm">Silakan hubungi pihak program studi atau administrasi terkait.</p>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Notes Section Footer */}
            {notes && notes.length > 0 && (
                <div className="bg-gray-50 p-6 sm:p-8 border-t border-gray-200">
                    <h4 className="font-extrabold text-[#111] mb-5 tracking-wide flex items-center gap-2">
                        <span className="w-2 h-6 bg-[#e62020] rounded-sm inline-block" />
                        Catatan Penting:
                    </h4>
                    <ul className="space-y-3 mb-8">
                        {notes.map((note, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] mt-2 flex-shrink-0" />
                                <span className="text-gray-700 font-medium text-[15px] leading-relaxed">{note}</span>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <button className="bg-[#e62020] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg flex items-center gap-2 group w-full sm:w-auto justify-center">
                            INFO SELENGKAPNYA 
                            <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">›</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    </div>
);

export function BiayaStudiPage() {
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
            <span className="inline-block bg-[#f59e0b] text-white px-4 py-1.5 rounded-full text-sm tracking-wider mb-4">
              INFORMASI BIAYA
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Biaya Studi
            </h1>
            <p className="text-xl text-blue-50 leading-relaxed">
              Investasi terjangkau untuk pendidikan teologi berkualitas tinggi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-6">
              <DollarSign size={20} />
              <span className="font-bold">STRUKTUR BIAYA</span>
            </div>
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
              Biaya Pendidikan
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              STTB berkomitmen menyediakan pendidikan teologi berkualitas dengan biaya yang terjangkau. Berikut adalah rincian biaya untuk program Sarjana (S1) dan Magister (S2).
            </p>
          </div>

          {/* Fee Tables */}
          <div className="max-w-5xl mx-auto">
            <FeeTable title="Program Sarjana Teologi (S.Th.)" data={s1Data} notes={s1Notes} />
            <FeeTable title="Program Sarjana Pendidikan (S.Pd.)" data={s1Data} notes={s1Notes} />
            <FeeTable title="Program Magister Teologi (M.Th.)" data={s2Data} notes={mthNotes} />
            <FeeTable title="Program Matrikulasi M.Th." data={s2MatrikulasiData} notes={s2MatrikulasiNotes} />
            <FeeTable title="Program Magister Pendidikan (M.Pd.)" data={s2Data} notes={mpdNotes} />
            <FeeTable title="Program Magister Ministri (M.Min.)" data={s3Data} notes={mminNotes} />
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-6">
                <Calendar size={20} />
                <span className="font-bold">METODE PEMBAYARAN</span>
              </div>
              <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
                Cara Pembayaran
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {paymentMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#dbeafe] to-white rounded-xl p-6 border-2 border-[#1e3a8a]/20"
                >
                  <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">
                    {method.name}
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    {method.description}
                  </p>
                  <p className="text-xs text-gray-600 bg-white rounded-lg px-3 py-2">
                    {method.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#f59e0b]/10 text-[#f59e0b] px-4 py-2 rounded-full mb-6">
                <Info size={20} />
                <span className="font-bold">CATATAN PENTING</span>
              </div>
              <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
                Hal yang Perlu Diketahui
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
                    <div className="flex-shrink-0 w-6 h-6 bg-[#f59e0b] rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="text-white" size={16} />
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
      <section className="py-20 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Ada Pertanyaan tentang Biaya?
            </h2>
            <p className="text-xl text-blue-50 mb-8 leading-relaxed">
              Tim keuangan kami siap membantu Anda memahami struktur biaya dan opsi pembayaran yang tersedia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/beasiswa"
                className="inline-block bg-[#f59e0b] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#fbbf24] transition-all transform hover:scale-105"
              >
                Lihat Beasiswa
              </a>
              <a
                href="/contact"
                className="inline-block bg-white text-[#1e3a8a] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Hubungi Kami
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
