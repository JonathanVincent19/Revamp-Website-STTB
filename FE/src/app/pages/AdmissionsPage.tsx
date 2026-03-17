"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FileText, DollarSign, CheckCircle2, Calendar, ArrowRight, Download } from "lucide-react";

export function AdmissionsPage() {
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
            <div className="inline-block bg-[#f59e0b] text-white px-4 py-1.5 rounded-full text-sm tracking-wider mb-4">
              STATUS: OPEN
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Penerimaan Mahasiswa Baru
            </h1>
            <p className="text-xl text-blue-50 leading-relaxed mb-8">
              Tahun Akademik 2026/2027 - Bergabunglah dengan keluarga STTB
            </p>
            <Link
              href="#registration"
              className="inline-flex items-center justify-center gap-2 bg-[#f59e0b] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#fbbf24] transition-all shadow-xl"
            >
              <FileText size={22} />
              Daftar Sekarang
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Registration Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block bg-[#dbeafe] text-[#1e3a8a] px-4 py-1.5 rounded-full text-sm tracking-wider mb-4">
              JADWAL PENDAFTARAN
            </span>
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
              Timeline PMB 2026/2027
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  gelombang: "Gelombang 1",
                  periode: "1 Jan - 15 Apr 2026",
                  status: "Open",
                  color: "bg-green-500",
                },
                {
                  gelombang: "Gelombang 2",
                  periode: "16 Apr - 30 Jun 2026",
                  status: "Upcoming",
                  color: "bg-blue-500",
                },
                {
                  gelombang: "Gelombang 3",
                  periode: "1 Jul - 15 Agu 2026",
                  status: "Upcoming",
                  color: "bg-gray-400",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg border-2 border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className={`${item.color} text-white px-6 py-3 text-center`}>
                    <span className="font-bold text-sm">{item.status}</span>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">
                      {item.gelombang}
                    </h3>
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <Calendar size={16} />
                      <span className="text-sm">{item.periode}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50" id="requirements">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block bg-[#dbeafe] text-[#1e3a8a] px-4 py-1.5 rounded-full text-sm tracking-wider mb-4">
              PERSYARATAN
            </span>
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
              Persyaratan Pendaftaran
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* S1 Requirements */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="bg-[#1e3a8a] text-white px-6 py-4">
                <h3 className="text-xl font-bold">Program Sarjana Teologi (S.Th.)</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {[
                    "Lulusan SMA/SMK/Sederajat",
                    "Surat Rekomendasi dari Gereja",
                    "Fotokopi Ijazah & Transkrip Nilai",
                    "Fotokopi KTP & KK",
                    "Pas Foto 4x6 (4 lembar)",
                    "Surat Keterangan Sehat",
                    "Formulir Pendaftaran",
                    "Biaya Pendaftaran Rp 300.000",
                  ].map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#f59e0b] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="bg-[#1e3a8a] text-white px-6 py-4">
                <h3 className="text-xl font-bold">Program Sarjana Teologi (S.Th.)</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {[
                    "Lulusan SMA/SMK/Sederajat",
                    "Surat Rekomendasi dari Gereja",
                    "Fotokopi Ijazah & Transkrip Nilai",
                    "Fotokopi KTP & KK",
                    "Pas Foto 4x6 (4 lembar)",
                    "Surat Keterangan Sehat",
                    "Formulir Pendaftaran",
                    "Biaya Pendaftaran Rp 300.000",
                  ].map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#f59e0b] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* S2 Requirements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="bg-[#f59e0b] text-white px-6 py-4">
                <h3 className="text-xl font-bold">Program Magister Teologi (M.Th.)</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {[
                    "Lulusan S1 Teologi/Sederajat",
                    "IPK minimal 2.75",
                    "Surat Rekomendasi (2 lembar)",
                    "Fotokopi Ijazah & Transkrip S1",
                    "Fotokopi KTP & KK",
                    "Pas Foto 4x6 (4 lembar)",
                    "Proposal Penelitian",
                    "Biaya Pendaftaran Rp 500.000",
                  ].map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#1e3a8a] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="bg-[#f59e0b] text-white px-6 py-4">
                <h3 className="text-xl font-bold">Program Magister Teologi (M.Th.)</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {[
                    "Lulusan S1 Teologi/Sederajat",
                    "IPK minimal 2.75",
                    "Surat Rekomendasi (2 lembar)",
                    "Fotokopi Ijazah & Transkrip S1",
                    "Fotokopi KTP & KK",
                    "Pas Foto 4x6 (4 lembar)",
                    "Proposal Penelitian",
                    "Biaya Pendaftaran Rp 500.000",
                  ].map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#1e3a8a] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden lg:col-span-2 w-full lg:w-[calc(50%-1rem)] mx-auto"
            >
              <div className="justify-center items-center flex bg-[#f59e0b] text-white px-6 py-4">
                <h3 className="text-xl font-bold">Program Magister Teologi (M.Th.)</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {[
                    "Lulusan S1 Teologi/Sederajat",
                    "IPK minimal 2.75",
                    "Surat Rekomendasi (2 lembar)",
                    "Fotokopi Ijazah & Transkrip S1",
                    "Fotokopi KTP & KK",
                    "Pas Foto 4x6 (4 lembar)",
                    "Proposal Penelitian",
                    "Biaya Pendaftaran Rp 500.000",
                  ].map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#1e3a8a] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Biaya Studi */}
      <section className="py-20 bg-white" id="fees">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block bg-[#dbeafe] text-[#1e3a8a] px-4 py-1.5 rounded-full text-sm tracking-wider mb-4">
              <DollarSign className="inline mr-1" size={16} />
              BIAYA STUDI
            </span>
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
              Struktur Biaya Pendidikan
            </h2>
            <p className="text-gray-600">Tahun Akademik 2026/2027</p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* S1 Fees */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="bg-[#1e3a8a] text-white px-6 py-4">
                <h3 className="text-xl font-bold">Program Sarjana Teologi (S.Th.)</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left font-bold text-[#1e3a8a]">Komponen</th>
                      <th className="px-6 py-3 text-right font-bold text-[#1e3a8a]">Biaya</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { item: "Uang Pangkal (Sekali Bayar)", amount: "Rp 5.000.000" },
                      { item: "SPP per Semester", amount: "Rp 3.500.000" },
                      { item: "Biaya Praktikum per Semester", amount: "Rp 500.000" },
                      { item: "Biaya Wisuda", amount: "Rp 1.500.000" },
                    ].map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">{row.item}</td>
                        <td className="px-6 py-4 text-right font-bold text-[#1e3a8a]">{row.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="bg-[#1e3a8a] text-white px-6 py-4">
                <h3 className="text-xl font-bold">Program Sarjana Pendidikan (S.Pd.)</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left font-bold text-[#1e3a8a]">Komponen</th>
                      <th className="px-6 py-3 text-right font-bold text-[#1e3a8a]">Biaya</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { item: "Uang Pangkal (Sekali Bayar)", amount: "Rp 5.000.000" },
                      { item: "SPP per Semester", amount: "Rp 3.500.000" },
                      { item: "Biaya Praktikum per Semester", amount: "Rp 500.000" },
                      { item: "Biaya Wisuda", amount: "Rp 1.500.000" },
                    ].map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">{row.item}</td>
                        <td className="px-6 py-4 text-right font-bold text-[#1e3a8a]">{row.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* S2 Fees */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 mb-8"
            >
              <div className="bg-[#f59e0b] text-white px-6 py-4">
                <h3 className="text-xl font-bold">Program Magister Teologi (M.Th.)</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left font-bold text-[#1e3a8a]">Komponen</th>
                      <th className="px-6 py-3 text-right font-bold text-[#1e3a8a]">Biaya</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { item: "Uang Pangkal (Sekali Bayar)", amount: "Rp 7.500.000" },
                      { item: "SPP per Semester", amount: "Rp 5.000.000" },
                      { item: "Biaya Penelitian", amount: "Rp 2.000.000" },
                      { item: "Biaya Wisuda", amount: "Rp 2.000.000" },
                    ].map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">{row.item}</td>
                        <td className="px-6 py-4 text-right font-bold text-[#f59e0b]">{row.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 mb-8"
            >
              <div className="bg-[#f59e0b] text-white px-6 py-4">
                <h3 className="text-xl font-bold">Program Magister Pendidikan (M.Pd.)</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left font-bold text-[#1e3a8a]">Komponen</th>
                      <th className="px-6 py-3 text-right font-bold text-[#1e3a8a]">Biaya</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { item: "Uang Pangkal (Sekali Bayar)", amount: "Rp 7.500.000" },
                      { item: "SPP per Semester", amount: "Rp 5.000.000" },
                      { item: "Biaya Penelitian", amount: "Rp 2.000.000" },
                      { item: "Biaya Wisuda", amount: "Rp 2.000.000" },
                    ].map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">{row.item}</td>
                        <td className="px-6 py-4 text-right font-bold text-[#f59e0b]">{row.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="bg-[#f59e0b] text-white px-6 py-4">
                <h3 className="text-xl font-bold">Program Magister Ministri (M.Min.)</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left font-bold text-[#1e3a8a]">Komponen</th>
                      <th className="px-6 py-3 text-right font-bold text-[#1e3a8a]">Biaya</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { item: "Uang Pangkal (Sekali Bayar)", amount: "Rp 7.500.000" },
                      { item: "SPP per Semester", amount: "Rp 5.000.000" },
                      { item: "Biaya Penelitian", amount: "Rp 2.000.000" },
                      { item: "Biaya Wisuda", amount: "Rp 2.000.000" },
                    ].map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-700">{row.item}</td>
                        <td className="px-6 py-4 text-right font-bold text-[#f59e0b]">{row.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Scholarship Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-8 bg-gradient-to-br from-[#dbeafe] to-white rounded-xl p-6 border-2 border-[#1e3a8a]"
            >
              <h4 className="font-bold text-[#1e3a8a] mb-3 flex items-center gap-2">
                <CheckCircle2 size={20} />
                Beasiswa Tersedia
              </h4>
              <p className="text-gray-700 mb-3">
                STTB menyediakan berbagai program beasiswa untuk mahasiswa berprestasi dan yang membutuhkan bantuan finansial:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Beasiswa Prestasi Akademik (50-100%)</li>
                <li>• Beasiswa Pelayanan (25-75%)</li>
                <li>• Beasiswa Kurang Mampu (50%)</li>
                <li>• Beasiswa Kemitraan Gereja</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration Process */}
      <section className="py-20 bg-gray-50" id="registration">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block bg-[#dbeafe] text-[#1e3a8a] px-4 py-1.5 rounded-full text-sm tracking-wider mb-4">
              CARA MENDAFTAR
            </span>
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
              Proses Pendaftaran
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Formulir Online", desc: "Isi formulir pendaftaran" },
                { step: "2", title: "Upload Dokumen", desc: "Lengkapi persyaratan" },
                { step: "3", title: "Tes Masuk", desc: "Mengikuti tes & wawancara" },
                { step: "4", title: "Pengumuman", desc: "Hasil seleksi" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-full flex items-center justify-center text-white text-2xl font-black mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-[#1e3a8a] mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="/admissions/pendaftaran-online"
                className="inline-flex items-center justify-center gap-2 bg-[#1e3a8a] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#f59e0b] transition-all shadow-xl"
              >
                <FileText size={22} />
                Mulai Pendaftaran Online
                <ArrowRight size={20} />
              </a>
              <p className="mt-4 text-sm text-gray-600">
                Atau <a href="#" className="text-[#1e3a8a] font-bold hover:text-[#f59e0b]">download formulir PDF</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
