"use client";

import { motion } from "motion/react";
import { CalendarDays, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";

const waves = [
  { wave: "Gelombang 1", period: "1 Jan - 15 Apr 2026", status: "Open", color: "from-green-500 to-emerald-600" },
  { wave: "Gelombang 2", period: "16 Apr - 30 Jun 2026", status: "Upcoming", color: "from-blue-500 to-blue-600" },
  { wave: "Gelombang 3", period: "1 Jul - 15 Agu 2026", status: "Upcoming", color: "from-gray-400 to-gray-500" },
];

const keyDates = [
  { date: "Setiap minggu", title: "Verifikasi Dokumen", desc: "Dilakukan setelah upload dokumen & pembayaran diverifikasi." },
  { date: "Mei - Juli 2026", title: "Tes Seleksi", desc: "Tes tertulis dan wawancara sesuai jadwal yang diinformasikan via email." },
  { date: "Maks. 7 hari setelah tes", title: "Pengumuman Hasil", desc: "Pengumuman via email & portal PMB." },
];

const notes = [
  "Jadwal dapat berubah menyesuaikan kebijakan STTB (update via email & website).",
  "Pastikan email aktif dan cek folder spam secara berkala.",
  "Jika melewati batas waktu gelombang, pendaftaran otomatis masuk gelombang berikutnya (jika tersedia).",
];

export function JadwalPMBPage() {
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
              JADWAL PMB
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Jadwal Pendaftaran & Seleksi
            </h1>
            <p className="text-xl text-blue-50 leading-relaxed mb-8">
              Timeline gelombang pendaftaran serta agenda penting seleksi mahasiswa baru STTB
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/admissions/pendaftaran-online"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1e3a8a] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                <CheckCircle size={20} />
                Mulai Pendaftaran
                <ArrowRight size={18} />
              </a>
              <a
                href="/admissions/prosedur"
                className="inline-flex items-center justify-center gap-2 bg-[#dc2626] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#fbbf24] transition-all transform hover:scale-105"
              >
                <CalendarDays size={20} />
                Lihat Prosedur
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gelombang Pendaftaran */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-6">
              <CalendarDays size={20} />
              <span className="font-bold">GELOMBANG PENDAFTARAN</span>
            </div>
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">Timeline PMB 2026/2027</h2>
            <p className="text-lg text-gray-600">Pilih gelombang sesuai periode pendaftaran yang tersedia</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {waves.map((w) => (
              <motion.div
                key={w.wave}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${w.color} text-white px-6 py-4`}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black">{w.wave}</h3>
                    <span className="text-sm font-bold bg-white/20 px-3 py-1 rounded-full">{w.status}</span>
                  </div>
                  <p className="mt-2 text-white/90 text-sm">{w.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda Penting */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">Agenda Penting</h2>
            <p className="text-lg text-gray-600">Tahapan setelah pendaftaran yang perlu diperhatikan</p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyDates.map((d) => (
              <div key={d.title} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-sm font-bold text-[#dc2626] mb-2">{d.date}</div>
                <h3 className="text-lg font-black text-[#1e3a8a] mb-2">{d.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catatan */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full mb-6">
                <AlertCircle size={20} />
                <span className="font-bold">CATATAN</span>
              </div>
              <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">Informasi Tambahan</h2>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <ul className="space-y-3">
                {notes.map((n) => (
                  <li key={n} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#dc2626] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{n}</span>
                  </li>
                ))}
              </ul>
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
              Siap Memulai Perjalanan Anda?
            </h2>
            <p className="text-xl text-red-50 mb-8 leading-relaxed">
              Jangan tunda lagi! Daftar sekarang dan jadilah bagian dari komunitas pastor-scholars STTB
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/admissions/pendaftaran-online"
                className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                <CheckCircle size={20} />
                Daftar Sekarang
                <ArrowRight size={18} />
              </a>
              <a
                href="/admissions/info-persyaratan"
                className="inline-flex items-center justify-center gap-2 bg-red-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-900 transition-all transform hover:scale-105"
              >
                <AlertCircle size={20} />
                Lihat Persyaratan
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
