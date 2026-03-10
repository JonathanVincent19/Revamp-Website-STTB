"use client";

import { motion } from "motion/react";
import { Target, History, Users, Award, BookOpen } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { MarsAudioPlayer } from "../components/sttb/MarsAudioPlayer";
import { DosenCarousel, DosenCard } from "../components/sttb/DosenCarousel";

export function AboutPage() {
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
              TENTANG KAMI
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Sekolah Tinggi Teologi Bandung
            </h1>
            <p className="text-xl text-blue-50 leading-relaxed">
              Mempersiapkan pastor-scholars untuk pelayanan transformatif sejak 1959
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white" id="vision">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-6">
                <Target size={20} />
                <span className="font-bold">VISI & MISI</span>
              </div>
              <h2 className="text-4xl font-black text-[#1e3a8a] mb-6">
                Visi Kami
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Menjadi lembaga pendidikan teologi terkemuka yang menghasilkan pemimpin rohani yang transformatif, berkomitmen pada kebenaran Alkitab, dan berdampak bagi transformasi gereja dan masyarakat.
              </p>
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">Misi Kami</h3>
              <ul className="space-y-3">
                {[
                  "Memberikan pendidikan teologi yang berkualitas tinggi dan berlandaskan Alkitab",
                  "Mengembangkan karakter Kristiani dan keterampilan pelayanan mahasiswa",
                  "Melakukan penelitian teologi yang relevan dengan konteks Indonesia",
                  "Membangun kemitraan dengan gereja dan lembaga pelayanan",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#f59e0b] mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1543702404-38c2035462ad"
                alt="STTB Vision"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-gray-50" id="history">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-6">
              <History size={20} />
              <span className="font-bold">SEJARAH</span>
            </div>
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
              Perjalanan Kami
            </h2>
            <p className="text-lg text-gray-600">
              Lebih dari 65 tahun pengalaman dalam pendidikan teologi
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: "1959",
                  title: "Pendirian STTB",
                  description:
                    "STTB didirikan dengan visi untuk menghasilkan hamba Tuhan yang berkualitas untuk melayani gereja di Indonesia.",
                },
                {
                  year: "1985",
                  title: "Pengembangan Kurikulum",
                  description:
                    "Pembaruan kurikulum dengan fokus pada teologi kontekstual dan pelayanan urban.",
                },
                {
                  year: "2005",
                  title: "Program Magister",
                  description:
                    "Pembukaan program Magister Teologi untuk memenuhi kebutuhan pendidikan lanjutan.",
                },
                {
                  year: "2026",
                  title: "Akreditasi BAN-PT",
                  description:
                    "Meraih akreditasi dari BAN-PT sebagai bukti komitmen terhadap kualitas pendidikan.",
                },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-3xl font-black text-[#f59e0b]">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-md border-l-4 border-[#1e3a8a]">
                    <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dewan Dosen */}
      <section className="py-20 bg-white" id="leadership">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-6">
              <Users size={20} />
              <span className="font-bold">KEPEMIMPINAN</span>
            </div>
            <h2 className="text-sm font-black text-red-500 mb-2 tracking-widest">
              DEWAN PENGAJAR
            </h2>
            <h2 className="text-4xl md:text-5xl font-black text-[#1e3a8a] mb-4">
              DOSEN STTB
            </h2>
            <p className="text-lg text-gray-600">
              Dipimpin oleh para akademisi dan pelayan yang berpengalaman
            </p>
          </div>

          <div className="max-w-7xl mx-auto flex flex-col gap-16">
            {/* Tier 1: Ketua — offset RIGHT */}
            <div className="relative">
              <div className="flex justify-end items-center gap-4 mb-6">
                <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-transparent to-[#1e3a8a]/30" />
                <span className="bg-[#1e3a8a] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider">
                  Ketua
                </span>
              </div>
              <div className="flex justify-center md:justify-end">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-52"
                >
                  <DosenCard
                    dosen={{
                      name: "Dr. John Doe, M.Th.",
                      position: "Ketua STTB",
                      teaching: "Dosen Teologi Sistematika",
                      education: [
                        "Ph.D. University of Southern California USA",
                        "M.BA. Graduate Theological Foundation Indiana",
                        "M.Th. Calvin Theological Seminary USA",
                      ],
                      image: "https://images.unsplash.com/photo-1758270704524-596810e891b5",
                    }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Tier 2: Wakil Ketua — offset LEFT */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-[#1e3a8a] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider">
                  Wakil Ketua
                </span>
                <div className="hidden md:block flex-1 h-px bg-gradient-to-l from-transparent to-[#1e3a8a]/30" />
              </div>
              <div className="flex justify-center md:justify-start">
                <div className="flex flex-wrap md:flex-nowrap gap-5">
                  {[
                    {
                      name: "Tan Giok Lie",
                      position: "Wakil Ketua I Akademik",
                      teaching: "Dosen Pendidikan",
                      education: [
                        "Ed.D. Biola University Talbot School Theology USA",
                        "M.A. Institut Alkitab Tiranus Bandung",
                        "S.S. Universitas Kristen Maranatha Bandung",
                      ],
                      image: "https://images.unsplash.com/photo-1758270704524-596810e891b5",
                    },
                    {
                      name: "Dr. Jane Smith, M.Div.",
                      position: "Wakil Ketua II Keuangan",
                      teaching: "Dosen Perjanjian Baru",
                      education: [
                        "Ph.D. Trinity Evangelical Divinity School USA",
                        "M.Div. Fuller Theological Seminary USA",
                      ],
                      image: "https://images.unsplash.com/photo-1758270704524-596810e891b5",
                    },
                    {
                      name: "Dr. Michael Brown, Th.D.",
                      position: "Wakil Ketua III Kemahasiswaan",
                      teaching: "Dosen Teologi Praktika",
                      education: [
                        "Th.D. South East Asia Graduate School of Theology",
                        "M.Th. Calvin Theological Seminary USA",
                      ],
                      image: "https://images.unsplash.com/photo-1758270704524-596810e891b5",
                    },
                  ].map((dosen, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="w-44 md:w-52 flex-shrink-0"
                    >
                      <DosenCard dosen={dosen} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tier 3: Kaprodi — offset RIGHT */}
            <div className="relative">
              <div className="flex justify-end items-center gap-4 mb-6">
                <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-transparent to-[#1e3a8a]/30" />
                <span className="bg-[#1e3a8a] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider">
                  Ketua Program Studi
                </span>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="flex flex-wrap md:flex-nowrap gap-5">
                  {[
                    {
                      name: "Dosen A",
                      position: "Kaprodi S1 Teologi",
                      teaching: "Dosen Perjanjian Lama",
                      education: ["Ph.D. Universitas A", "M.Th. Universitas B"],
                      image: "https://images.unsplash.com/photo-1758270704524-596810e891b5",
                    },
                    {
                      name: "Dosen B",
                      position: "Kaprodi S1 PAK",
                      teaching: "Dosen Pendidikan Agama Kristen",
                      education: ["Ed.D. Universitas C", "M.A. Universitas D"],
                      image: "https://images.unsplash.com/photo-1758270704524-596810e891b5",
                    },
                    {
                      name: "Dosen C",
                      position: "Kaprodi S2 Teologi",
                      teaching: "Dosen Sejarah Gereja",
                      education: ["Ph.D. Universitas E", "M.Div. Universitas F"],
                      image: "https://images.unsplash.com/photo-1758270704524-596810e891b5",
                    },
                    {
                      name: "Dosen D",
                      position: "Kaprodi S2 PAK",
                      teaching: "Dosen Filsafat",
                      education: ["Th.D. Universitas G", "M.Th. Universitas H"],
                      image: "https://images.unsplash.com/photo-1758270704524-596810e891b5",
                    },
                    {
                      name: "Dosen E",
                      position: "Kaprodi S3 Teologi",
                      teaching: "Dosen Misiologi",
                      education: ["Ph.D. Universitas I", "M.A. Universitas J"],
                      image: "https://images.unsplash.com/photo-1758270704524-596810e891b5",
                    },
                  ].map((dosen, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="w-44 md:w-52 flex-shrink-0"
                    >
                      <DosenCard dosen={dosen} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tier 4: Jajaran Dosen — offset LEFT, carousel */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-[#1e3a8a] text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider">
                  Jajaran Dosen
                </span>
                <div className="hidden md:block flex-1 h-px bg-gradient-to-l from-transparent to-[#1e3a8a]/30" />
              </div>
              <DosenCarousel
                dosenList={Array.from({ length: 30 }, (_, i) => ({
                  name: `Dosen ${i + 1}`,
                  position: "Dosen Tetap",
                  teaching: "Dosen Teologi",
                  education: [
                    "Ph.D. Universitas Contoh",
                    "M.Th. Seminari Contoh",
                    "S.Th. Sekolah Tinggi Contoh",
                  ],
                  image: "https://images.unsplash.com/photo-1758270704524-596810e891b5",
                }))}
              />
            </div>
          </div>
        </div>
      </section>
      {/* MARS */}
      <section className="py-20" id="mars">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-6">
              <Users size={20} />
              <span className="font-bold">MARS</span>
            </div>
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
              MARS STTB
            </h2>
            <p className="text-lg text-gray-600">
              Alunan nada dan lirik yang memanggil setiap sivitas akademika untuk berdedikasi dalam kebenaran Firman, keunggulan akademis, dan pelayanan yang transformatif.
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 mt-12 pb-16">
          {/* Foto Lirik */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full rounded-2xl overflow-hidden shadow-xl bg-white p-4 border border-gray-100"
          >
            {/* The image placeholder for lyrics */}
            <ImageWithFallback
              src="/images/09-MARS-STTB.jpg"
              alt="Lirik Mars STTB"
              className="w-full h-auto rounded-xl"
            />
          </motion.div>

          {/* Audio Player */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full"
          >
            <MarsAudioPlayer />
          </motion.div>
        </div>
      </section>

      {/* Pengakuan Iman */}
      <section className="py-20 bg-gray-50" id="pengakuan">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#dbeafe] text-[#1e3a8a] px-4 py-2 rounded-full mb-6">
              <BookOpen size={20} />
              <span className="font-bold">PENGAKUAN IMAN</span>
            </div>
            <h2 className="text-4xl font-black text-[#1e3a8a] mb-4">
              Pengakuan Iman STTB
            </h2>
            <p className="text-lg text-gray-600">
              Prinsip-prinsip teologis dan doktrin fundamental Sekolah Tinggi Teologi Bandung yang kami pegang teguh.
            </p>
          </div>

          <div className="max-w-6xl mx-auto flex flex-col gap-6">
            {/* Row 1: Full width - Allah Tritunggal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#1e3a8a] rounded-2xl p-8 md:p-10 text-white relative overflow-hidden shadow-lg"
            >
              <span className="absolute top-4 right-6 text-[120px] font-black text-white/10 leading-none select-none">01</span>
              <div className="relative z-10 max-w-3xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">KAMI PERCAYA</h3>
                <p className="text-blue-100 text-base md:text-lg leading-relaxed">
                  bahwa Alkitab secara keseluruhan, Perjanjian Lama dan Perjanjian Baru, adalah firman Allah yang diwahyukan dan diilhamkan tanpa kesalahan. Oleh karena itu, Alkitab adalah sumber otoritas tertinggi bagi iman dan kehidupan orang percaya di segala abad dan tempat.
                </p>
              </div>
            </motion.div>

            {/* Row 2: 2 columns - Alkitab & Yesus Kristus */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-[#1e3a8a] relative overflow-hidden"
              >
                <span className="absolute bottom-4 right-6 text-[80px] font-black text-[#f59e0b]/15 leading-none select-none">02</span>
                <div className="relative z-10">
                  <span className="text-3xl font-black text-[#f59e0b]">02</span>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mt-2 mb-3">KAMI PERCAYA</h3>
                  <p className="text-gray-600 leading-relaxed">
                    bahwa Allah adalah Esa dan kekal, Mahakudus, dan penuh rahmat. Ia adalah pencipta, penguasa, dan pemelihara alam semesta beserta segala isinya, Tritunggal sebagai Bapa, Anak, dan Roh Kudus. Masing-masing adalah Pribadi yang tidak diciptakan, sehakekat, dan setara dalam kuasa dan kemuliaan. Ia berdaulat baik dalam keselamatan maupun dalam penghakiman umat manusia.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-[#1e3a8a] relative overflow-hidden"
              >
                <span className="absolute bottom-4 right-6 text-[80px] font-black text-[#f59e0b]/15 leading-none select-none">03</span>
                <div className="relative z-10">
                  <span className="text-3xl font-black text-[#f59e0b]">03</span>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mt-2 mb-3">KAMI PERCAYA</h3>
                  <p className="text-gray-600 leading-relaxed">
                    bahwa manusia, laki-laki dan perempuan, telah diciptakan oleh Allah menurut gambar-Nya, yang telah dimahkotai-Nya dengan kemuliaan serta mandat untuk memenuhi bumi, mengelola dan memelihara seluruh ciptaan-Nya. Tetapi manusia telah jatuh ke dalam dosa, terpisah dari Allah, dan kehilangan kemampuan untuk hidup sesuai dengan citranya sebagai ciptaan Allah, sehingga tidak mampu menyelamatkan dirinya sendiri.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Row 3: 3 columns - Roh Kudus, Manusia, Keselamatan */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-[#1e3a8a] relative overflow-hidden"
              >
                <span className="absolute bottom-4 right-6 text-[80px] font-black text-[#f59e0b]/15 leading-none select-none">04</span>
                <div className="relative z-10">
                  <span className="text-3xl font-black text-[#f59e0b]">04</span>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mt-2 mb-3">KAMI PERCAYA</h3>
                  <p className="text-gray-600 leading-relaxed text-xs">
                    bahwa Yesus Kristus adalah Anak Tunggal Allah, Allah sejati dan Manusia sejati, penebus dan satu-satunya jalan keselamatan bagi seluruh umat manusia. Ia dikandung dari Roh Kudus, lahir dari anak dara Maria, hidup tanpa dosa, sempurna dalam pengorbanan dan kasih. Ia mati di atas kayu salib, bangkit kembali dari antara orang mati dalam tubuh kebangkitan yang nyata, naik ke sorga, duduk di sebelah kanan Allah Bapa, menjadi Imam Besar Agung bagi orang percaya, dan pengantara tunggal antara Allah dan manusia, serta Raja di atas segala raja.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-[#1e3a8a] relative overflow-hidden"
              >
                <span className="absolute bottom-4 right-6 text-[80px] font-black text-[#f59e0b]/15 leading-none select-none">05</span>
                <div className="relative z-10">
                  <span className="text-3xl font-black text-[#f59e0b]">05</span>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mt-2 mb-3">KAMI PERCAYA</h3>
                  <p className="text-gray-600 leading-relaxed text-xs">
                    bahwa Roh Kudus adalah Allah yang hidup, yang menginsafkan manusia akan dosa, kebenaran, dan penghakiman. Ia melahirbarukan orang berdosa yang percaya, mendiami, menguduskan, dan memberi kuasa serta karunia-karunia kepada setiap orang percaya menurut kehendak-Nya demi kesaksian, persekutuan, dan pelayanan untuk pembangunan tubuh Kristus.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-[#1e3a8a] relative overflow-hidden"
              >
                <span className="absolute bottom-4 right-6 text-[80px] font-black text-[#f59e0b]/15 leading-none select-none">06</span>
                <div className="relative z-10">
                  <span className="text-3xl font-black text-[#f59e0b]">06</span>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mt-2 mb-3">KAMI PERCAYA</h3>
                  <p className="text-gray-600 leading-relaxed text-xs">
                    bahwa manusia hanya dapat diselamatkan oleh kasih karunia melalui penebusan oleh Tuhan Yesus Kristus dan dibenarkan melalui iman, tanpa jasa, usaha, ataupun kesalehan dari pihak manusia. Melalui penyelamatan Allah dalam Kristus, gambar Allah pada manusia dipulihkan. Dengan demikian, manusia dimampukan untuk menjalani kehidupan yang penuh tanggung jawab dalam pengabdian dan kasih di hadapan Allah dan manusia.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Row 4: 2 columns - Gereja & Baptisan */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#f59e0b] rounded-2xl p-8 text-white relative overflow-hidden shadow-lg"
              >
                <span className="absolute bottom-4 right-6 text-[80px] font-black text-white/15 leading-none select-none">07</span>
                <div className="relative z-10">
                  <span className="text-3xl font-black text-white/80">07</span>
                  <h3 className="text-xl font-bold mt-2 mb-3">KAMI PERCAYA</h3>
                  <p className="text-white/90 leading-relaxed">
                    bahwa Gereja selaku garam dan terang dunia adalah himpunan semua orang percaya dari segala abad dan bangsa. Ia adalah tubuh Kristus yang kudus dan Am, dengan Kristus sebagai Kepalanya. Gereja memberitakan Kerajaan Allah melalui kebaktian, pengajaran, sakramen baptisan dan perjamuan kudus, serta pemberitaan Injil dan misi umat Allah seutuhnya di tengah dunia.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-md border-l-4 border-[#1e3a8a] relative overflow-hidden"
              >
                <span className="absolute bottom-4 right-6 text-[80px] font-black text-[#f59e0b]/15 leading-none select-none">08</span>
                <div className="relative z-10">
                  <span className="text-3xl font-black text-[#f59e0b]">08</span>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mt-2 mb-3">KAMI PERCAYA</h3>
                  <p className="text-gray-600 leading-relaxed">
                    bahwa kepastian kedatangan kembali Yesus Kristus secara nyata dan pribadi akan terjadi pada akhir zaman untuk menjemput umat-Nya untuk menghakimi seluruh umat manusia, baik yang hidup maupun yang mati. Pada kedatangan-Nya kedua kali itulah setiap orang mati akan dibangkitkan, orang percaya masuk ke dalam kehidupan yang kekal, orang yang tidak percaya masuk ke dalam kebinasaan yang kekal.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Row 5: Full width - Kedatangan Kristus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#1e3a8a] rounded-2xl p-8 md:p-10 text-white relative overflow-hidden shadow-lg"
            >
              <span className="absolute top-4 right-6 text-[120px] font-black text-white/10 leading-none select-none">09</span>
              <div className="relative z-10 max-w-3xl">
                <h3 className="text-1xl md:text-2xl font-semibold mb-4">DOMINO OPTIMO MAXIMO</h3>
                <p className="text-2xl md:text-2xl font-bold mb-4 leading-relaxed">
                  TO THE LORD THE BEST THE GREATEST
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
