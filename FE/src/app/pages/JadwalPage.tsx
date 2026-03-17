"use client";

import { motion } from "motion/react";
import { CalendarDays, CheckCircle, AlertCircle, ArrowRight, Clock, MapPin, Loader2 } from "lucide-react";
import { useEventsList } from "@/lib/hooks";

const waves = [
  { wave: "Gelombang 1", period: "1 Jan - 15 Apr 2026", status: "Open", color: "from-green-500 to-emerald-600" },
  { wave: "Gelombang 2", period: "16 Apr - 30 Jun 2026", status: "Upcoming", color: "from-blue-500 to-blue-600" },
  { wave: "Gelombang 3", period: "1 Jul - 15 Agu 2026", status: "Upcoming", color: "from-gray-400 to-gray-500" },
];

const notes = [
  "Jadwal dapat berubah menyesuaikan kebijakan STTB (update via email & website).",
  "Pastikan email aktif dan cek folder spam secara berkala.",
  "Jika melewati batas waktu gelombang, pendaftaran otomatis masuk gelombang berikutnya (jika tersedia).",
];

export function JadwalPMBPage() {
  const { data: events, loading: eventsLoading, error: eventsError } = useEventsList();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af]">
        {/* --- BACKGROUND LAYER: WAKTU & RADAR --- */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
          {/* Cincin Radar / Jam */}
          <div className="absolute w-[600px] h-[600px] border-[1px] border-white/10 rounded-full" />
          <div className="absolute w-[800px] h-[800px] border-[2px] border-white/5 rounded-full border-dashed animate-[spin_120s_linear_infinite]" />
          <div className="absolute w-[1000px] h-[1000px] border-[1px] border-white/10 rounded-full" />
          {/* Sweep Gradient */}
          <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)]" />
        </div>
        {/* --------------------------------------- */}

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block bg-[#dc2626] text-white px-5 py-2 rounded-full text-xs tracking-widest mb-6 font-black uppercase shadow-lg shadow-red-500/30">
              JADWAL PMB
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-md">
              Jadwal Pendaftaran & Seleksi
            </h1>
            <p className="text-xl text-blue-100/90 leading-relaxed mb-10 font-light">
              Timeline gelombang pendaftaran serta agenda penting seleksi mahasiswa baru STTB
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/admissions/pendaftaran-online"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1e3a8a] px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all transform hover:-translate-y-1 shadow-xl"
              >
                <CheckCircle size={20} />
                Mulai Pendaftaran
                <ArrowRight size={18} />
              </a>
              <a
                href="/admissions/prosedur"
                className="inline-flex items-center justify-center gap-2 bg-[#dc2626] border border-red-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-all transform hover:-translate-y-1 shadow-xl"
              >
                <CalendarDays size={20} />
                Lihat Prosedur
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gelombang Pendaftaran */}
      <section className="relative overflow-hidden py-24 bg-white">
        {/* --- BACKGROUND LAYER: GELOMBANG (WAVES) --- */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Vektor Gelombang Atas */}
          <div className="absolute top-0 left-0 w-full text-[#1e3a8a] opacity-[0.03]">
            <svg viewBox="0 0 1440 320" className="w-full h-auto" fill="currentColor">
              <path d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,133.3C672,107,768,85,864,106.7C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
          </div>
          {/* Vektor Gelombang Bawah */}
          <div className="absolute bottom-0 left-0 w-full text-[#dc2626] opacity-[0.03] rotate-180">
            <svg viewBox="0 0 1440 320" className="w-full h-auto" fill="currentColor">
              <path d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,133.3C672,107,768,85,864,106.7C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
          </div>
        </div>
        {/* ------------------------------------------- */}

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-6 shadow-sm">
              <CalendarDays size={20} />
              <span className="font-bold">GELOMBANG PENDAFTARAN</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-4">Timeline PMB 2026/2027</h2>
            <p className="text-lg text-gray-600 bg-white/80 inline-block px-6 py-2 rounded-full backdrop-blur-sm">
              Pilih gelombang sesuai periode pendaftaran yang tersedia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
            {waves.map((w, index) => (
              <motion.div
                key={w.wave}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-100 overflow-hidden group"
              >
                <div className={`bg-gradient-to-r ${w.color} text-white px-6 py-5 relative overflow-hidden`}>
                  {/* Efek kilap saat hover */}
                  <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-white/20 skew-x-[45deg] group-hover:left-[200%] transition-all duration-700 ease-in-out" />
                  <div className="flex items-center justify-between relative z-10">
                    <h3 className="text-2xl font-black tracking-tight">{w.wave}</h3>
                    <span className="text-xs font-bold bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                      {w.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-gray-600 font-medium bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <Clock size={18} className="text-[#1e3a8a]" />
                    <p className="text-sm">{w.period}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda / Events dari API */}
      <section className="relative overflow-hidden py-24 bg-gray-50">
        {/* --- BACKGROUND LAYER: KALENDER DINDING RAKSASA --- */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Kotak-kotak kalender raksasa */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a08_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a08_1px,transparent_1px)] bg-[size:160px_160px]" />

          {/* Watermark Angka Raksasa (merepresentasikan Tanggal) */}
          <div className="absolute top-10 left-10 text-[300px] font-black text-[#1e3a8a] opacity-[0.02] leading-none select-none">14</div>
          <div className="absolute bottom-0 right-20 text-[250px] font-black text-[#dc2626] opacity-[0.02] leading-none select-none">28</div>
        </div>
        {/* -------------------------------------------------- */}

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-4">Agenda & Acara</h2>
            <p className="text-lg text-gray-600 bg-white/50 backdrop-blur-sm inline-block px-6 py-2 rounded-full border border-gray-200">
              Kegiatan dan acara penting seputar penerimaan mahasiswa baru
            </p>
          </div>

          {/* Loading */}
          {eventsLoading && (
            <div className="flex flex-col items-center justify-center py-16 bg-white/50 backdrop-blur-sm rounded-3xl border border-white">
              <Loader2 className="animate-spin text-[#1e3a8a] mb-4" size={48} />
              <p className="text-gray-500 font-medium">Sinkronisasi agenda...</p>
            </div>
          )}

          {/* Error */}
          {eventsError && !eventsLoading && (
            <div className="flex flex-col items-center justify-center py-16 bg-red-50/80 backdrop-blur-sm rounded-3xl max-w-2xl mx-auto border border-red-100 shadow-sm">
              <AlertCircle className="text-[#dc2626] mb-4" size={48} />
              <p className="text-[#dc2626] font-bold text-xl mb-2">Gagal memuat agenda</p>
              <p className="text-sm text-red-400 bg-white px-4 py-2 rounded-lg shadow-inner">{eventsError}</p>
            </div>
          )}

          {/* Empty */}
          {!eventsLoading && !eventsError && (!events || events.length === 0) && (
            <div className="text-center py-20 bg-white/50 backdrop-blur-sm rounded-3xl border border-white">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CalendarDays className="text-gray-400" size={32} />
              </div>
              <p className="text-gray-500 font-medium text-lg">Belum ada agenda yang dijadwalkkan saat ini.</p>
            </div>
          )}

          {/* Events Grid */}
          {!eventsLoading && !eventsError && events && events.length > 0 && (
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {events.map((event, index) => {
                const eventDate = new Date(event.eventDate);
                const day = eventDate.getDate().toString();
                const monthYear = eventDate.toLocaleDateString("id-ID", { month: "long", year: "numeric" });
                const timeStr = event.startTime
                  ? `${event.startTime}${event.endTime ? ` - ${event.endTime}` : ""}`
                  : eventDate.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });

                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg border-l-4 border-[#1e3a8a] hover:shadow-2xl hover:-translate-y-1 transition-all group"
                  >
                    <div className="flex items-start gap-5">
                      {/* Kotak Tanggal */}
                      <div className="flex-shrink-0 bg-gradient-to-b from-[#1e3a8a] to-[#1e40af] rounded-xl p-3 text-center min-w-[70px] shadow-md group-hover:scale-105 transition-transform">
                        <div className="text-sm font-bold text-blue-200 uppercase mb-1">{monthYear.split(" ")[0]}</div>
                        <div className="text-3xl font-black text-white leading-none">{day}</div>
                      </div>
                      <div className="flex-1 pt-1">
                        <h3 className="text-lg font-black text-[#1e3a8a] mb-2 leading-tight group-hover:text-[#dc2626] transition-colors">{event.title}</h3>
                        {event.description && (
                          <p className="text-sm text-gray-500 mb-4 line-clamp-2">{event.description}</p>
                        )}
                        <div className="space-y-2 text-sm text-gray-600 font-medium bg-gray-50 p-3 rounded-lg">
                          <div className="flex items-center gap-2">
                            <Clock size={16} className="text-[#dc2626]" />
                            <span>{timeStr} WIB</span>
                          </div>
                          {event.location && (
                            <div className="flex items-center gap-2">
                              <MapPin size={16} className="text-[#dc2626]" />
                              <span className="truncate">{event.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Catatan Tambahan */}
      <section className="relative overflow-hidden py-24 bg-white">
        {/* --- BACKGROUND LAYER: HIGHLIGHT / SOROTAN --- */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-center items-center">
          {/* Garis Stabilo Miring (Kuning/Merah/Biru Pudar) */}
          <div className="absolute -top-40 right-10 w-[800px] h-32 bg-[#dc2626] opacity-[0.03] -rotate-12 blur-md" />
          <div className="absolute bottom-0 -left-20 w-[600px] h-40 bg-[#1e3a8a] opacity-[0.03] rotate-12 blur-md" />
          {/* Dots Halus */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_2px,transparent_2px)] [background-size:30px_30px] opacity-[0.04]" />
        </div>
        {/* --------------------------------------------- */}

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-5 py-2.5 rounded-full mb-6 border border-red-100 shadow-sm">
                <AlertCircle size={20} />
                <span className="font-bold tracking-wide">CATATAN PENTING</span>
              </div>
              <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">Informasi Tambahan</h2>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl"
            >
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {notes.map((n, index) => (
                  <li key={index} className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-red-200 transition-colors">
                    <div className="bg-red-50 p-2 rounded-lg flex-shrink-0 mt-0.5">
                      <CheckCircle size={20} className="text-[#dc2626]" />
                    </div>
                    <span className="text-gray-700 leading-relaxed font-medium">{n}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-red-600 to-red-800">
        {/* --- BACKGROUND LAYER: FAST FORWARD (MAJU CEPAT) --- */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center">
          {/* Deretan Chevron Raksasa (>>) */}
          <div className="absolute -right-20 flex gap-8 text-white opacity-5">
            <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
            <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
            <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
          {/* Garis Kecepatan (Speed lines) di kiri */}
          <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(255,255,255,0.03)_10px,rgba(255,255,255,0.03)_20px)] skew-x-12" />
        </div>
        {/* --------------------------------------------------- */}

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
              Siap Memulai Perjalanan Anda?
            </h2>
            <p className="text-xl md:text-2xl text-red-50 mb-10 leading-relaxed font-light">
              Jangan tunda lagi! <span className="font-bold text-white">Waktu pendaftaran terbatas.</span> Segera daftar dan jadilah bagian dari komunitas pastor-scholars STTB.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="/admissions/pendaftaran-online"
                className="inline-flex items-center justify-center gap-3 bg-white text-red-700 px-8 py-4.5 rounded-xl font-black text-lg hover:bg-gray-100 hover:shadow-2xl hover:shadow-white/20 transition-all transform hover:-translate-y-1 w-full sm:w-auto"
              >
                <CheckCircle size={24} />
                Daftar Sekarang
                <ArrowRight size={20} />
              </a>
              <a
                href="/admissions/info-persyaratan"
                className="inline-flex items-center justify-center gap-3 bg-black/20 backdrop-blur-md text-white border border-white/30 px-8 py-4.5 rounded-xl font-bold text-lg hover:bg-black/40 transition-all transform hover:-translate-y-1 w-full sm:w-auto"
              >
                <AlertCircle size={24} />
                Lihat Persyaratan
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
