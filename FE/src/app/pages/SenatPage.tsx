"use client";

import { motion } from "motion/react";
import {
  Users,
  Target,
  Trophy,
  Megaphone,
  BookOpen,
  Heart,
  Flag,
  Music,
  Camera,
  Gamepad2,
  GraduationCap,
  Church,
  Globe,
  Handshake,
  ArrowRight
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// ==========================================
// 1. DATA
// ==========================================

const senatActivities = [
  {
    category: "Training Group",
    color: "from-blue-600 to-blue-800",
    iconColor: "text-blue-600",
    icon: GraduationCap,
    items: [
      {
        title: "Training Group Media & Au-Vi",
        description: "Pelatihan produksi media dan audio-visual untuk pelayanan",
        icon: Camera,
      },
      {
        title: "Training Group Panggung Boneka",
        description: "Pelatihan pelayanan anak melalui panggung boneka kreatif",
        icon: Gamepad2,
      },
      {
        title: "Training Group Musik Ibadah",
        description: "Pelatihan musik pujian dan penyembahan untuk ibadah",
        icon: Music,
      },
    ],
  },
  {
    category: "Pembinaan & Pelayanan",
    color: "from-red-600 to-red-800",
    iconColor: "text-red-600",
    icon: Heart,
    items: [
      {
        title: "Pameran Buku",
        description: "Menyelenggarakan pameran buku teologi dan rohani untuk mahasiswa",
        icon: BookOpen,
      },
      {
        title: "Pelatihan / Lokakarya",
        description: "Workshop dan pelatihan untuk pengembangan keterampilan pelayanan",
        icon: Target,
      },
      {
        title: "Pelayanan Gereja",
        description: "Koordinasi pelayanan mahasiswa di gereja-gereja mitra",
        icon: Church,
      },
      {
        title: "Pelayanan Masyarakat",
        description: "Kegiatan pelayanan sosial kepada masyarakat sekitar kampus",
        icon: Globe,
      },
    ],
  },
  {
    category: "Perayaan & Peringatan",
    color: "from-blue-600 to-blue-800",
    iconColor: "text-blue-600",
    icon: Flag,
    items: [
      {
        title: "Upacara HUT RI",
        description: "Peringatan Hari Kemerdekaan Republik Indonesia",
        icon: Flag,
      },
      {
        title: "Malam Budaya",
        description: "Perayaan keberagaman budaya mahasiswa dari berbagai daerah",
        icon: Music,
      },
      {
        title: "Hari Reformasi",
        description: "Peringatan Hari Reformasi Gereja",
        icon: BookOpen,
      },
      {
        title: "Hari Natal / Paskah",
        description: "Perayaan hari besar keagamaan bersama seluruh civitas akademika",
        icon: Church,
      },
    ],
  },
  {
    category: "Kehidupan Kampus",
    color: "from-red-600 to-red-800",
    iconColor: "text-red-600",
    icon: Users,
    items: [
      {
        title: "Orientasi Mahasiswa Baru",
        description: "Program orientasi untuk mengenalkan kehidupan kampus STTB",
        icon: GraduationCap,
      },
      {
        title: "Pemilihan Senat",
        description: "Proses demokratis pemilihan pengurus Senat Mahasiswa",
        icon: Megaphone,
      },
      {
        title: "Wisuda & Dies Natalis STTB",
        description: "Perayaan kelulusan dan hari jadi STTB",
        icon: Trophy,
      },
      {
        title: "Games / Sport Day",
        description: "Kegiatan olahraga dan permainan untuk membangun kebersamaan",
        icon: Gamepad2,
      },
    ],
  },
];

// ==========================================
// 2. HALAMAN UTAMA
// ==========================================

export function SenatPage() {
  return (
    <div className="pt-20">

      {/* --- HERO SECTION --- */}
      <section className="relative py-28 bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#0a1930] overflow-hidden">

        {/* Latar Belakang: Forward Momentum (Garis Progresif Cepat) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0">
            <path d="M0 100 L40 0 L55 0 L15 100 Z" fill="rgba(255,255,255,0.08)" />
            <path d="M20 100 L60 0 L70 0 L30 100 Z" fill="rgba(255,255,255,0.05)" />
            <path d="M40 100 L80 0 L85 0 L45 100 Z" fill="rgba(255,255,255,0.03)" />
            <path d="M60 100 L100 0 L110 0 L70 100 Z" fill="rgba(255,255,255,0.02)" />
          </svg>
          {/* Soft Glow */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block bg-[#dc2626] text-white px-5 py-2 rounded-full text-xs tracking-[0.2em] uppercase mb-6 font-bold shadow-lg ring-4 ring-red-500/30">
              SENAT MAHASISWA
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              Senat Mahasiswa STTB
            </h1>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 inline-block px-8 py-3 rounded-2xl mb-8 shadow-xl transform -rotate-1">
              <p className="text-2xl md:text-3xl text-white font-black italic tracking-wide">
                "Students Today, <span className="text-[#dc2626] drop-shadow-md">Leaders Tomorrow!</span>"
              </p>
            </div>
            <p className="text-xl text-blue-100/90 leading-relaxed max-w-3xl mx-auto font-light">
              Wadah kepemimpinan dan pengembangan potensi mahasiswa dalam melayani serta membangun komunitas kampus yang dinamis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- INTRODUCTION SECTION --- */}
      <section className="relative py-24 bg-white overflow-hidden">

        {/* Latar Belakang: Interconnected Hubs (Jaringan Komunitas) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] text-[#1e3a8a]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hubs" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="4" fill="currentColor" />
                <circle cx="80" cy="80" r="6" fill="currentColor" />
                <circle cx="20" cy="80" r="3" fill="currentColor" />
                <circle cx="80" cy="20" r="2" fill="currentColor" />
                <path d="M20 20 L80 80 M20 80 L80 80 M20 20 L20 80 M80 20 L80 80" stroke="currentColor" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hubs)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-[#dc2626] rounded-3xl translate-x-4 -translate-y-4 opacity-10 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758519289361-2615778e0e5d"
                alt="Senat Mahasiswa STTB"
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3] relative z-10"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2.5 rounded-full mb-6 font-bold shadow-sm">
                <Users size={18} className="text-[#dc2626]" />
                <span>TENTANG SENAT</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#1e3a8a] mb-6 tracking-tight leading-[1.1]">
                Laboratorium Kepemimpinan
              </h2>

              <div className="bg-gradient-to-r from-red-50 to-white border-l-4 border-[#dc2626] p-6 rounded-r-2xl mb-8 shadow-sm">
                <p className="text-[#0a1930] font-bold text-lg italic leading-relaxed">
                  "Ladang sangat luas dan siap dituai, namun penuai sangat sedikit dan tidak siap."
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  Signifikansi dan urgensi kepemimpinan Kristen dalam misi Tuhan merupakan prioritas strategis bagi sinode, gereja, sekolah, lembaga pelayanan, dan ladang misi.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  Mempersiapkan para pemimpin masa depan memerlukan bukan hanya wawasan teoritis, melainkan juga <strong className="text-[#1e3a8a]">pengalaman langsung dalam memimpin</strong> yang disertai proses *mentoring* intensif.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  Senat Mahasiswa adalah ekosistem utama untuk mengasah *soft-skill* dan kepemimpinan di dalam diri setiap mahasiswa STTB.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PERAN SENAT SECTION --- */}
      <section className="relative py-24 bg-gray-50 overflow-hidden">

        {/* Latar Belakang: Concentric Polygons (Fokus & Struktur) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] text-[#0a1930] flex justify-center items-center">
          <div className="w-[800px] h-[800px] border-[2px] border-current rotate-45 absolute" />
          <div className="w-[600px] h-[600px] border-[6px] border-current rotate-45 absolute" />
          <div className="w-[400px] h-[400px] border-[12px] border-current rotate-45 absolute" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-5 tracking-tight">
                Peran Strategis Senat
              </h2>
              <p className="text-lg md:text-xl text-gray-500 font-light">
                Senat menjalankan fungsi manajerial dan representatif dalam kehidupan kampus STTB.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Representasi Mahasiswa",
                  description: "Wadah representasi aspirasi bagi mahasiswa secara internal ke lembaga dan eksternal ke masyarakat.",
                  icon: Megaphone,
                  color: "border-[#1e3a8a]",
                  bgIcon: "bg-blue-50",
                  textColor: "text-[#1e3a8a]"
                },
                {
                  title: "Koordinasi Kegiatan",
                  description: "Merancang, mengeksekusi, dan mengkoordinasikan kegiatan kampus serta dinamika kemahasiswaan.",
                  icon: Handshake,
                  color: "border-[#dc2626]",
                  bgIcon: "bg-red-50",
                  textColor: "text-[#dc2626]"
                },
                {
                  title: "Pengembangan Potensi",
                  description: "Menyelenggarakan sarana pengembangan minat, bakat, dan talenta terpendam mahasiswa.",
                  icon: Trophy,
                  color: "border-[#1e3a8a]",
                  bgIcon: "bg-blue-50",
                  textColor: "text-[#1e3a8a]"
                },
                {
                  title: "Penjaga Suasana Kondusif",
                  description: "Memberikan solusi proaktif untuk menciptakan suasana belajar dan bertumbuh yang sehat dan aman.",
                  icon: Target,
                  color: "border-[#dc2626]",
                  bgIcon: "bg-red-50",
                  textColor: "text-[#dc2626]"
                },
              ].map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-8 ${role.color} group`}
                >
                  <div className="flex items-start gap-5">
                    <div className={`w-14 h-14 ${role.bgIcon} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <role.icon className={role.textColor} size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-[#0a1930] mb-2">
                        {role.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed font-medium">
                        {role.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- KEGIATAN SENAT SECTION --- */}
      <section className="relative py-24 bg-white overflow-hidden">

        {/* Latar Belakang: Equalizer Bars (Aktivitas Dinamis) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] text-[#1e3a8a]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="equalizer" width="80" height="120" patternUnits="userSpaceOnUse">
                <rect x="10" y="40" width="12" height="80" fill="currentColor" rx="6" />
                <rect x="35" y="70" width="12" height="50" fill="currentColor" rx="6" />
                <rect x="60" y="20" width="12" height="100" fill="currentColor" rx="6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#equalizer)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-red-50 text-[#dc2626] px-4 py-2.5 rounded-full mb-6 font-bold shadow-sm border border-red-100">
              <Megaphone size={18} />
              <span>PROGRAM KERJA</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-5 tracking-tight">
              Aktivitas & Kegiatan Senat
            </h2>
            <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto">
              Menyelenggarakan ragam kegiatan inovatif yang mencakup pelatihan, perayaan, hingga pelayanan sosial.
            </p>
          </motion.div>

          <div className="space-y-16 max-w-7xl mx-auto">
            {senatActivities.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Category Header */}
                <div className="flex flex-col md:flex-row md:items-center gap-5 mb-8">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <category.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-[#020817] tracking-tight">
                      {category.category}
                    </h3>
                  </div>
                  <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent ml-4" />
                </div>

                {/* Category Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.1 }}
                      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
                    >
                      <div className={`w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-gray-100`}>
                        <item.icon className={category.iconColor} size={22} />
                      </div>
                      <h4 className="font-bold text-[#0a1930] mb-2 leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500 font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="relative py-28 bg-[#dc2626] overflow-hidden">

        {/* Latar Belakang: Racing Stripes (Aksi Cepat/Progresif) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="speed" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="60" stroke="#ffffff" strokeWidth="3" />
                <line x1="30" y1="0" x2="30" y2="60" stroke="#ffffff" strokeWidth="12" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#speed)" />
          </svg>
        </div>
        {/* Overlay Vignette Gelap di Bawah */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#991b1b] via-transparent to-transparent opacity-90" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
              <span className="opacity-90">Students Today,</span> <br /> Leaders Tomorrow!
            </h2>
            <p className="text-xl text-red-100 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
              Ambil bagian dari perubahan. Kembangkan kepemimpinan dan bakat Anda melalui pelayanan aktif di Senat Mahasiswa STTB.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="/admissions"
                className="inline-flex items-center justify-center gap-2.5 bg-white text-[#dc2626] px-10 py-4.5 rounded-full font-black text-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-2xl"
              >
                <GraduationCap size={20} />
                Daftar Mahasiswa Baru
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-4.5 rounded-full font-bold text-lg hover:bg-white/20 transition-all transform hover:-translate-y-1"
              >
                <Megaphone size={20} />
                Hubungi Kami
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}