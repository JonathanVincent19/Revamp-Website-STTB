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
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const senatActivities = [
  {
    category: "Training Group",
    color: "bg-[#1e3a8a]",
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
    color: "bg-[#dc2626]",
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
    color: "bg-[#1e3a8a]",
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
    color: "bg-[#dc2626]",
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

export function SenatPage() {
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
              SENAT MAHASISWA
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Senat Mahasiswa STTB
            </h1>
            <p className="text-2xl text-[#fbbf24] font-bold italic mb-4">
              Students Today, Leaders Tomorrow!
            </p>
            <p className="text-lg text-blue-50 leading-relaxed max-w-3xl mx-auto">
              Wadah kepemimpinan dan pengembangan mahasiswa dalam melayani dan
              membangun komunitas kampus
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758519289361-2615778e0e5d"
                alt="Senat Mahasiswa STTB"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-6">
                <Users size={20} />
                <span className="font-bold text-sm">TENTANG SENAT</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#1e3a8a] mb-6">
                Mengasah Kepemimpinan
              </h2>
              <div className="bg-[#fef2f2] border-l-4 border-[#dc2626] rounded-r-lg p-4 mb-6">
                <p className="text-gray-700 italic font-medium">
                  &ldquo;Ladang sangat luas dan siap dituai, namun penuai sangat
                  sedikit dan tidak siap.&rdquo;
                </p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Signifikansi dan urgensi kepemimpinan Kristen dalam misi Tuhan
                merupakan prioritas strategis bagi sinode, gereja, sekolah,
                lembaga pelayanan, dan ladang misi.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Untuk mempersiapkan para pemimpin masa depan memerlukan bukan
                hanya pemahaman wawasan kepemimpinan melainkan juga{" "}
                <strong>pengalaman langsung dalam memimpin</strong> dengan
                disertai mentoring dalam prosesnya.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Senat mahasiswa adalah salah satu wadah untuk mengasah
                kepemimpinan di dalam diri mahasiswa.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Peran Senat */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-black text-[#1e3a8a] mb-4">
                Peran Senat Mahasiswa
              </h2>
              <p className="text-lg text-gray-600">
                Senat berperan strategis dalam kehidupan kampus STTB
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Representasi Mahasiswa",
                  description:
                    "Wadah representasi bagi mahasiswa secara internal dan eksternal",
                  icon: Megaphone,
                  color: "border-[#1e3a8a]",
                },
                {
                  title: "Koordinasi Kegiatan",
                  description:
                    "Mengkoordinasikan kegiatan kampus dan kemahasiswaan",
                  icon: Handshake,
                  color: "border-[#dc2626]",
                },
                {
                  title: "Pengembangan Minat & Bakat",
                  description:
                    "Menyelenggarakan sarana pengembangan minat-bakat mahasiswa",
                  icon: Trophy,
                  color: "border-[#1e3a8a]",
                },
                {
                  title: "Suasana Kondusif",
                  description:
                    "Memberi solusi untuk menciptakan suasana belajar dan bertumbuh yang kondusif",
                  icon: Target,
                  color: "border-[#dc2626]",
                },
              ].map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-xl p-6 shadow-lg border-l-4 ${role.color}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#dbeafe] rounded-lg flex items-center justify-center flex-shrink-0">
                      <role.icon className="text-[#1e3a8a]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">
                        {role.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
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

      {/* Kegiatan Senat */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#1e3a8a] mb-4">
              Kegiatan Senat
            </h2>
            <p className="text-lg text-gray-600">
              Berbagai program dan kegiatan yang diselenggarakan Senat Mahasiswa
              STTB
            </p>
          </motion.div>

          <div className="space-y-12">
            {senatActivities.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center`}
                  >
                    <category.icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-2xl font-black text-[#1e3a8a]">
                    {category.category}
                  </h3>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                {/* Category Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.05 }}
                      className="bg-gray-50 rounded-xl p-5 hover:shadow-lg transition-all border border-gray-100 hover:border-[#1e3a8a]/30"
                    >
                      <div
                        className={`w-10 h-10 ${category.color}/10 rounded-lg flex items-center justify-center mb-3`}
                      >
                        <item.icon
                          className={
                            category.color === "bg-[#dc2626]"
                              ? "text-[#dc2626]"
                              : "text-[#1e3a8a]"
                          }
                          size={20}
                        />
                      </div>
                      <h4 className="font-bold text-[#1e3a8a] mb-1 text-sm">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500">
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#dc2626] to-[#b91c1c]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Students Today, Leaders Tomorrow!
            </h2>
            <p className="text-xl text-red-50 mb-8 leading-relaxed">
              Kembangkan kepemimpinan dan bakat Anda melalui pelayanan di Senat
              Mahasiswa STTB
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/admissions"
                className="inline-block bg-white text-[#dc2626] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Daftar Mahasiswa
              </a>
              <a
                href="/contact"
                className="inline-block bg-white/10 border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all transform hover:scale-105"
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