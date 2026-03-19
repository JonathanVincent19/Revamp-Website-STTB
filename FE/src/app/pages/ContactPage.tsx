"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, MessageCircle, Loader2, CheckCircle2, AlertCircle, ArrowRight, Send } from "lucide-react";
import { useContactSubmit } from "@/lib/hooks";

export function ContactPage() {
  const { mutate: sendMessage, loading, success, error } = useContactSubmit();
  const [formReset, setFormReset] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    try {
      await sendMessage({
        name: fd.get("name") as string,
        email: fd.get("email") as string,
        phoneNumber: fd.get("phoneNumber") as string,
        subject: fd.get("subject") as string,
        message: fd.get("message") as string,
      });
      setFormReset((prev) => prev + 1);
    } catch {
      // error sudah ditangani oleh hook
    }
  };

  return (
    <div className="pt-20 bg-[#f8fafc]">

      {/* --- HERO SECTION (TIDAK DIUBAH) --- */}
      <section className="relative py-32 bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#0a1930] overflow-hidden pb-48">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
            <circle cx="90%" cy="-10%" r="20%" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="10 20" />
            <circle cx="90%" cy="-10%" r="40%" fill="none" stroke="#ffffff" strokeWidth="1" strokeDasharray="15 30" />
            <circle cx="90%" cy="-10%" r="60%" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="20 40" />
            <circle cx="90%" cy="-10%" r="80%" fill="none" stroke="#ffffff" strokeWidth="0.25" />
          </svg>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1930] via-transparent to-transparent opacity-90" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="h-1 w-12 bg-[#dc2626] mx-auto mb-6 rounded-full" />
            <span className="inline-block bg-[#dc2626] text-white px-5 py-2 rounded-full text-xs tracking-[0.2em] uppercase mb-6 font-bold shadow-lg ring-4 ring-red-500/30">
              PUSAT BANTUAN
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
              Hubungi Kami
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed max-w-2xl mx-auto">
              Kami siap mendengarkan dan membantu menjawab setiap pertanyaan Anda mengenai STT Bandung.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- OVERLAPPING CONTACT FORM & INFO --- */}
      <section className="relative z-20 -mt-32 pb-24 overflow-hidden">

        {/* Latar Belakang Baru: Blueprint Coordinates yang SANGAT JELAS */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.01] text-[#1e3a8a]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="coordGridBold" width="120" height="120" patternUnits="userSpaceOnUse">
                <rect width="120" height="120" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" opacity="0.5" />
                {/* Aksen Crosshair Merah yang Tebal */}
                <path d="M 50 40 L 70 40 M 60 30 L 60 50" stroke="#dc2626" strokeWidth="3" fill="none" />
                <circle cx="60" cy="40" r="4" fill="#dc2626" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#coordGridBold)" />
          </svg>
        </div>

        {/* Latar Belakang Glow Kuat untuk memberi warna pada background putih */}
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-300/30 rounded-full blur-[120px] -z-10 pointer-events-none -translate-x-1/3" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-300/20 rounded-full blur-[100px] -z-10 pointer-events-none translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] shadow-[0_30px_60px_rgba(10,25,48,0.12)] border border-gray-100 flex flex-col lg:flex-row overflow-hidden relative"
          >

            {/* Left Panel: High Contrast Dark Mode Info */}
            <div className="lg:w-2/5 bg-[#0a1930] p-10 md:p-14 relative overflow-hidden text-white flex flex-col justify-between">
              {/* Decorative Shapes inside Dark Panel */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#1e3a8a] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 opacity-80" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#dc2626] rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 opacity-10" />

              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-2 tracking-tight">Informasi Kontak</h3>
                <p className="text-blue-200/80 mb-12 font-medium">Punya pertanyaan seputar kampus? Silakan hubungi kami.</p>

                <div className="space-y-8">
                  {[
                    { icon: MapPin, title: "Alamat Kampus", desc: "Jl Dr. Djunjunan No. 105", sub: "Bandung 40173, Indonesia" },
                    { icon: Phone, title: "Telepon & WhatsApp", desc: "(+62) 22 601-6454", sub: "(+62) 815 7336 0009" },
                    { icon: Mail, title: "Email Resmi", desc: "official@sttb.ac.id", sub: "Membalas dalam 1x24 jam kerja" },
                  ].map((info, idx) => (
                    <div key={idx} className="flex items-start gap-5 group cursor-default">
                      <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#dc2626] group-hover:border-[#dc2626] transition-all duration-300">
                        <info.icon className="text-white" size={24} strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-blue-200 text-sm font-bold uppercase tracking-wider mb-1">{info.title}</p>
                        <p className="font-extrabold text-xl mb-0.5">{info.desc}</p>
                        <p className="text-blue-300/70 text-sm font-medium">{info.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media Footer */}
              <div className="relative z-10 pt-12 mt-12 border-t border-white/10 flex items-center gap-4">
                <span className="text-sm font-bold uppercase tracking-wider text-blue-200">Ikuti Kami:</span>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, link: "https://facebook.com" },
                    { icon: Instagram, link: "https://instagram.com" },
                    { icon: Youtube, link: "https://youtube.com" }
                  ].map((social, idx) => (
                    <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#dc2626] transition-colors">
                      <social.icon size={18} strokeWidth={2.5} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel: Clean Modern Form */}
            <div className="lg:w-3/5 p-10 md:p-14 bg-white relative z-10">
              <h2 className="text-3xl font-black text-[#0a1930] mb-2 tracking-tight">Kirim Pesan</h2>
              <p className="text-gray-500 font-medium mb-10">Isi form di bawah ini dan kami akan segera merespons Anda.</p>

              {/* Status Messages */}
              {success && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex items-start gap-4 bg-green-50 border border-green-100 rounded-2xl p-5 mb-8 shadow-sm">
                  <div className="bg-green-100 p-2 rounded-full"><CheckCircle2 className="text-green-600" size={20} /></div>
                  <div>
                    <p className="font-black text-green-900 text-lg">Pesan Terkirim!</p>
                    <p className="text-sm font-medium text-green-700 mt-1">Terima kasih telah menghubungi kami. Tim kami akan segera membalas.</p>
                  </div>
                </motion.div>
              )}

              {error && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex items-start gap-4 bg-red-50 border border-red-100 rounded-2xl p-5 mb-8 shadow-sm">
                  <div className="bg-red-100 p-2 rounded-full"><AlertCircle className="text-[#dc2626]" size={20} /></div>
                  <div>
                    <p className="font-black text-red-900 text-lg">Gagal Mengirim</p>
                    <p className="text-sm font-medium text-red-700 mt-1">{error}</p>
                  </div>
                </motion.div>
              )}

              <form key={formReset} onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>

                {/* 2-Column Grid for Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group relative">
                    <input name="name" type="text" required suppressHydrationWarning placeholder=" "
                      className="peer w-full px-5 py-4 rounded-2xl bg-[#f8fafc] border-2 border-transparent text-gray-900 font-bold focus:bg-white focus:border-[#1e3a8a]/20 focus:ring-4 focus:ring-[#1e3a8a]/5 transition-all outline-none"
                    />
                    <label className="absolute left-5 top-4 text-gray-400 font-bold text-sm transition-all peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-[#1e3a8a] peer-valid:-translate-y-3 peer-valid:text-xs peer-valid:text-gray-500 pointer-events-none">
                      Nama Lengkap
                    </label>
                  </div>

                  <div className="group relative">
                    <input name="email" type="email" required suppressHydrationWarning placeholder=" "
                      className="peer w-full px-5 py-4 rounded-2xl bg-[#f8fafc] border-2 border-transparent text-gray-900 font-bold focus:bg-white focus:border-[#1e3a8a]/20 focus:ring-4 focus:ring-[#1e3a8a]/5 transition-all outline-none"
                    />
                    <label className="absolute left-5 top-4 text-gray-400 font-bold text-sm transition-all peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-[#1e3a8a] peer-valid:-translate-y-3 peer-valid:text-xs peer-valid:text-gray-500 pointer-events-none">
                      Email Aktif
                    </label>
                  </div>

                  <div className="group relative">
                    <input name="phoneNumber" type="tel" required suppressHydrationWarning placeholder=" "
                      className="peer w-full px-5 py-4 rounded-2xl bg-[#f8fafc] border-2 border-transparent text-gray-900 font-bold focus:bg-white focus:border-[#1e3a8a]/20 focus:ring-4 focus:ring-[#1e3a8a]/5 transition-all outline-none"
                    />
                    <label className="absolute left-5 top-4 text-gray-400 font-bold text-sm transition-all peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-[#1e3a8a] peer-valid:-translate-y-3 peer-valid:text-xs peer-valid:text-gray-500 pointer-events-none">
                      Nomor WhatsApp
                    </label>
                  </div>

                  <div className="group relative">
                    <select name="subject" suppressHydrationWarning
                      className="peer w-full px-5 pt-6 pb-2 rounded-2xl bg-[#f8fafc] border-2 border-transparent text-gray-900 font-bold focus:bg-white focus:border-[#1e3a8a]/20 focus:ring-4 focus:ring-[#1e3a8a]/5 transition-all outline-none appearance-none cursor-pointer"
                    >
                      <option>Informasi Umum</option>
                      <option>Pendaftaran Mahasiswa Baru</option>
                      <option>Informasi Biaya Studi</option>
                      <option>Layanan Kerjasama/Donasi</option>
                      <option>Lainnya</option>
                    </select>
                    <label className="absolute left-5 top-2 text-[#1e3a8a] font-bold text-xs pointer-events-none">
                      Topik Pertanyaan
                    </label>
                  </div>
                </div>

                <div className="group relative">
                  <textarea name="message" rows={4} required suppressHydrationWarning placeholder=" "
                    className="peer w-full px-5 py-4 rounded-2xl bg-[#f8fafc] border-2 border-transparent text-gray-900 font-bold focus:bg-white focus:border-[#1e3a8a]/20 focus:ring-4 focus:ring-[#1e3a8a]/5 transition-all outline-none resize-none"
                  />
                  <label className="absolute left-5 top-4 text-gray-400 font-bold text-sm transition-all peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-[#1e3a8a] peer-valid:-translate-y-3 peer-valid:text-xs peer-valid:text-gray-500 pointer-events-none">
                    Tulis pesan Anda di sini...
                  </label>
                </div>

                <button type="submit" disabled={loading}
                  className="w-full bg-[#1e3a8a] text-white px-8 py-5 rounded-2xl font-black text-lg hover:bg-[#0a1930] hover:shadow-[0_10px_20px_rgba(30,58,138,0.2)] transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:transform-none disabled:shadow-none flex items-center justify-center gap-3 mt-4"
                >
                  {loading ? (
                    <><Loader2 className="animate-spin" size={24} /> Memproses...</>
                  ) : (
                    <>Kirim Pesan <Send size={20} /></>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- BENTO GRID: DEPARTMENTAL CONTACTS --- */}
      <section className="relative py-24 overflow-hidden bg-white border-t border-gray-200">

        {/* Latar Belakang Baru: Connectivity Nodes yang TEGAS */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.1] text-[#1e3a8a]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="signalNodesBold" width="150" height="150" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="5" fill="currentColor" />
                <circle cx="120" cy="80" r="8" fill="#dc2626" opacity="0.8" />
                <circle cx="60" cy="130" r="4" fill="currentColor" />
                <path d="M30 30 L120 80 L60 130 Z" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 6" fill="none" opacity="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#signalNodesBold)" />
          </svg>
        </div>
        {/* Aksen Glow Sudut yang Lebih Terlihat */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1e3a8a] rounded-full blur-[140px] opacity-[0.08] pointer-events-none -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#dc2626] rounded-full blur-[140px] opacity-[0.08] pointer-events-none translate-y-1/2 -translate-x-1/4" />

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-red-50 text-[#dc2626] px-5 py-2 rounded-full text-xs font-black tracking-[0.2em] uppercase mb-4 shadow-sm border border-red-100">
                Spesifik & Tepat Sasaran
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#0a1930] tracking-tight">
                Layanan Departemen
              </h2>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  dept: "Admisi & Marketing",
                  contact: "+62 815-7336-0009",
                  isEmail: false,
                  color: "bg-[#1e3a8a]",
                  textColor: "text-[#1e3a8a]",
                  colSpan: "md:col-span-1",
                  items: ["Pendaftaran mahasiswa baru", "Seminar / Kelas audit", "Pertanyaan masyarakat umum"]
                },
                {
                  dept: "Akademik & Kemahasiswaan",
                  contact: "+62 815-7127-228",
                  isEmail: false,
                  color: "bg-[#dc2626]",
                  textColor: "text-[#dc2626]",
                  colSpan: "md:col-span-2",
                  items: [
                    { type: "header", text: "Akademik" },
                    "KRS, nilai, tugas kuliah, dan penjadwalan akademik.",
                    { type: "header", text: "Kemahasiswaan" },
                    "Kegiatan kemahasiswaan, fasilitas asrama, dan konseling."
                  ]
                },
                {
                  dept: "Perpustakaan",
                  contact: "+62 857-9153-8527",
                  isEmail: false,
                  color: "bg-blue-500",
                  textColor: "text-blue-600",
                  colSpan: "md:col-span-1",
                  items: ["Akses e-books & jurnal ATLA", "Pembelian buku terbitan STTB", "Info Jurnal STULOS"]
                },
                {
                  dept: "Keuangan & Beasiswa",
                  contact: "keuangan@sttb.ac.id",
                  isEmail: true,
                  color: "bg-green-600",
                  textColor: "text-green-600",
                  colSpan: "md:col-span-2",
                  items: [
                    "Informasi UKT & Rincian biaya kuliah per semester",
                    "Pengajuan form beasiswa dan bantuan finansial",
                    "Konfirmasi bukti transfer pembayaran studi"
                  ]
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-[#f8fafc] rounded-3xl p-8 border border-gray-200 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-transparent transition-all duration-300 flex flex-col h-full group ${item.colSpan}`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-3 h-12 rounded-full ${item.color} group-hover:h-14 transition-all duration-300`} />
                    <div>
                      <h3 className="font-black text-[#0a1930] text-xl tracking-tight">{item.dept}</h3>
                      <div className={`flex items-center gap-2 font-bold mt-1 ${item.textColor}`}>
                        {item.isEmail ? <Mail size={16} strokeWidth={3} /> : <MessageCircle size={16} strokeWidth={3} />}
                        <span className="text-[15px]">{item.contact}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-4 flex-1 mt-2">
                    {item.items.map((li, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-800">
                        {typeof li === "string" ? (
                          <>
                            <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${item.color}`} />
                            <span className="font-semibold text-[15px] leading-relaxed">{li}</span>
                          </>
                        ) : (
                          <span className="font-black text-[#0a1930] text-xs uppercase tracking-widest mt-2 block w-full bg-white px-3 py-1.5 rounded-md border border-gray-100 shadow-sm">{li.text}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- IMMERSIVE MAP SECTION (TIDAK DIUBAH) --- */}
      <section className="relative w-full h-[600px] lg:h-[700px] bg-gray-200">

        {/* Floating Card Info di atas Map */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="container mx-auto px-4 lg:px-8 h-full flex items-center justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white max-w-sm pointer-events-auto"
            >
              <div className="w-12 h-12 bg-[#dc2626] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-red-500/30">
                <MapPin className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-black text-[#0a1930] mb-2 tracking-tight">Kunjungi Kampus</h2>
              <p className="text-gray-500 font-bold mb-6">Pintu kami selalu terbuka untuk Anda.</p>

              <div className="space-y-4 mb-8">
                <p className="text-gray-800 font-bold leading-relaxed">
                  <strong className="block text-[#1e3a8a] text-xs uppercase tracking-widest mb-1">Lokasi Kampus</strong>
                  Jl Dr. Djunjunan No. 105<br /> Bandung 40173, Jawa Barat
                </p>
              </div>

              <a href="https://maps.app.goo.gl/YAv2arf8nqgK6Ns27" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full bg-[#1e3a8a] text-white px-6 py-4 rounded-xl font-bold hover:bg-[#0a1930] transition-colors group">
                Buka di Google Maps
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Peta Full Width */}
        <div className="absolute inset-0 z-10 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold tracking-widest uppercase text-sm z-0">
            <Loader2 className="animate-spin mr-3" size={20} /> Memuat Peta...
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.028475850949!2d107.58525547587428!3d-6.887186193111776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6657fce748b%3A0xb0a7274675724c5a!2sSekolah%20Tinggi%20Teologi%20Bandung!5e0!3m2!1sid!2sid!4v1710237000000!5m2!1sid!2sid"
            className="absolute inset-0 w-full h-full relative z-10"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Sekolah Tinggi Teologi Bandung"
          />
        </div>
        {/* Overlay transisi atas map */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-10" />
      </section>

    </div>
  );
}