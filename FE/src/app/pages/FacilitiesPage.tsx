"use client";

import { motion } from "motion/react";
import {
  Library,
  Video,
  Home,
  BookOpen,
  Coffee,
  Wifi,
  Computer,
  Building2,
  GraduationCap,
  Users,
  Dumbbell,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const facilities = [
  {
    name: "Perpustakaan",
    description:
      "Perpustakaan didesain agar nyaman dan instagramable, dengan koleksi lebih dari 10.000 buku teologi, jurnal internasional, dan sumber referensi digital.",
    icon: Library,
    image: "https://images.unsplash.com/photo-1763811938846-0de457436794",
  },
  {
    name: "Studio Didasko",
    description:
      "Studio audio-visual Didasko menjadi tempat produksi media pengajaran STTB maupun tempat belajar pelayanan media bagi mahasiswa.",
    icon: Video,
    image: "https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7",
  },
  {
    name: "Ruang Kelas",
    description:
      "Format ruang kelas didesain untuk mengakomodasi berbagai format pembelajaran. Dilengkapi dengan teknologi untuk pembelajaran hybrid (onsite-online).",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7",
  },
  {
    name: "Ruang Teleconference",
    description:
      "Ruangan yang siap pakai bagi pembelajaran hybrid, memungkinkan interaksi real-time antara mahasiswa onsite dan online.",
    icon: Computer,
    image: "https://images.unsplash.com/photo-1766297247924-6638d54e7c89",
  },
  {
    name: "Aula Pertemuan",
    description:
      "Aula untuk pertemuan ibadah, seminar dengan audiens besar, serta berbagai acara kemahasiswaan dan konferensi.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1764471444363-e6dc0f9773bc",
  },
  {
    name: "Rumah Doa Bethel",
    description:
      "Fasilitas di luar kampus berupa rumah retreat untuk kegiatan refleksi spiritual, doa, dan retret mahasiswa.",
    icon: Coffee,
    image: "https://images.unsplash.com/photo-1543702404-38c2035462ad",
  },
  {
    name: "Ruang Konseling",
    description:
      "Ruang konseling pribadi dan konseling kelompok untuk mendukung pertumbuhan rohani dan psikologis mahasiswa.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1652086378906-4d648d832ed9",
  },
  {
    name: "Internet & Wi-Fi",
    description:
      "Akses internet berkecepatan tinggi di seluruh area kampus untuk mendukung pembelajaran digital dan riset.",
    icon: Wifi,
    image: "https://images.unsplash.com/photo-1758413350815-7b06dbbfb9a7",
  },
];

const campusLifeSections = [
  {
    title: "Belajar Bersama",
    description:
      "Sebagai sebuah kampus perguruan tinggi, STTB menyediakan fasilitas yang optimal bagi kegiatan belajar-mengajar. Format ruang kelas didesain yang mengakomodasi berbagai format pembelajaran. Perpustakaan didesain agar nyaman dan instagramable. Ruang teleconference dan ruangan kelas lainnya siap pakai bagi pembelajaran hybrid (onsite-online). Dilengkapi juga dengan studio audio-visual Didasko yang menjadi tempat produksi media pengajaran STTB maupun tempat belajar pelayanan media bagi mahasiswa.",
    icon: GraduationCap,
    color: "from-[#1e3a8a] to-[#2563eb]",
    image: "https://images.unsplash.com/photo-1763811938846-0de457436794",
  },
  {
    title: "Bertumbuh Bersama",
    description:
      "Pembelajaran di STTB tidak hanya menekankan sisi akademik, melainkan pembentukan pribadi pelayan Tuhan secara utuh. Untuk itu STTB menyediakan fasilitas pendukung pertumbuhan rohani mahasiswa, seperti ruang konseling pribadi dan konseling kelompok, beberapa tempat untuk pertemuan hangout kelompok kecil, aula untuk pertemuan ibadah/seminar dengan audiens besar, serta fasilitas di luar kampus berupa rumah retreat (Rumah Doa Bethel).",
    icon: Users,
    color: "from-[#dc2626] to-[#ef4444]",
    image: "https://images.unsplash.com/photo-1652086378906-4d648d832ed9",
  },
  {
    title: "Hidup Bersama",
    description:
      "Pendidikan di STTB diselenggarakan secara residensial penuh. Sepanjang masa studi, mahasiswa akan tinggal bersama sebagai satu komunitas. Ada empat asrama yang terintegrasi di lokasi kampus STTB, yaitu asrama dosen, asrama mahasiswa putra (ASPRA), asrama mahasiswa putri (ASPRI), dan asrama mahasiswa pascasarjana/tamu. Fasilitas asrama terdiri dari kamar tidur lengkap, kamar mandi dan toilet, lounge, ruang makan, serta berbagai sarana olahraga.",
    icon: Home,
    color: "from-[#1e3a8a] to-[#1e40af]",
    image: "https://images.unsplash.com/photo-1641443084236-b29fa3c673a3",
  },
];

const asramaFeatures = [
  "Kamar tidur lengkap",
  "Kamar mandi & toilet",
  "Lounge & ruang makan",
  "Jogging track",
  "Lapangan basket",
  "Lapangan bulutangkis",
  "Lapangan futsal",
  "Tenis meja",
  "Kolam renang",
];

export function FacilitiesPage() {
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
            <span className="inline-block bg-[#dc2626] text-white px-4 py-1.5 rounded-full text-sm tracking-wider mb-4">
              FASILITAS KAMPUS
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Fasilitas Kampus & Asrama untuk Pembentukan Pribadi dan Pemerlengkapan Pelayanan
            </h1>
            <p className="text-xl text-blue-50 leading-relaxed max-w-3xl mx-auto">
              Seluruh aspek kehidupan di dalam kampus dan asrama diarahkan untuk
              membentuk hati yang mengasihi Tuhan dan sesama bagi kemuliaan
              Tuhan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Quote */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#dc2626] rounded-full" />
              <p className="text-2xl md:text-3xl font-bold text-[#1e3a8a] leading-relaxed italic">
                &ldquo;STTB merupakan sekolah Alkitab yang membentuk dan
                memperlengkapi para pelayan Tuhan bagi pelayanan di dalam tubuh
                Kristus dan di tengah dunia.&rdquo;
              </p>
            </div>
            <p className="text-lg text-gray-600 mt-6">
              Fasilitas-fasilitas di kampus dan asrama STTB dirancang untuk
              mengoptimalkan proses pembentukan pribadi dan pemerlengkapan
              pelayanan mahasiswa. Sepanjang masa studi, mahasiswa akan{" "}
              <strong>belajar bersama</strong>,{" "}
              <strong>bertumbuh bersama</strong>, dan{" "}
              <strong>hidup bersama</strong> dalam komunitas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars - Belajar, Bertumbuh, Hidup Bersama */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {campusLifeSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${section.color} text-white px-4 py-2 rounded-full mb-4`}
                  >
                    <section.icon size={20} />
                    <span className="font-bold text-sm tracking-wider">
                      {section.title.toUpperCase()}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-[#1e3a8a] mb-6">
                    {section.title}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {section.description}
                  </p>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <ImageWithFallback
                    src={section.image}
                    alt={section.title}
                    className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
              Fasilitas Kampus & Asrama
            </h2>
            <p className="text-lg text-gray-600">
              Fasilitas yang mendukung proses belajar, bertumbuh, dan hidup
              bersama di STTB
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="relative h-40 overflow-hidden">
                  <ImageWithFallback
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
                      <facility.icon className="text-white" size={20} />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">
                    {facility.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Asrama & Sports */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-white mb-4">
                Fasilitas Asrama & Olahraga
              </h2>
              <p className="text-lg text-blue-100">
                Empat asrama terintegrasi di lokasi kampus: asrama dosen, ASPRA
                (putra), ASPRI (putri), dan asrama pascasarjana/tamu
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {asramaFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20"
                >
                  <Dumbbell className="text-[#dc2626] flex-shrink-0" size={18} />
                  <span className="text-white font-medium text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}