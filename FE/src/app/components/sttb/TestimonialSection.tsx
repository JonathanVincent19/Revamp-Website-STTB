"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion } from "motion/react";
import { useTestimonials } from "@/lib/hooks";

export interface TestimonialData {
  id: string | number;
  text: string;
  name: string;
  title: string;
}

const defaultTestimonials: TestimonialData[] = [
  {
    id: 1,
    text: "Kuliah di Magister Pendidikan STT Bandung telah memperlengkapi saya dalam pelayanan, khususnya yang berkaitan dengan anak dan keluarga. Wawasan saya semakin luas, melalui bidang studi yang diajarkan oleh dosen-dosen yang berkualitas dalam bidangnya masing-masing. Satu keunggulan yang saya banggakan adalah apa yang dipelajari, pada akhirnya mengarahkan mahasiswa bukan sekedar tahu, tetapi mampu menerapkannya dalam pelayanan. Hingga kini saya masih melakukan penerapan-penerapan tersebut yang ternyata membuahkan hasil yaitu terjadinya pergerakan pemuridan keluarga. Terima kasih STT Bandung.",
    name: "Roni Sudarmo",
    title: "(M.Pd. 2014)",
  },
  {
    id: 2,
    text: "Pendidikan di STT Bandung merupakan salah satu pathway yang sangat bermakna di hidup saya. Saya sangat diberkati melalui materi pembelajaran dan kehidupan berasrama di STT Bandung. Materi pembelajaran yang diberikan sangat memperlengkapi mahasiswa untuk dapat melayani secara kontekstual. Diversity di asrama STT Bandung telah menolong saya bertumbuh dengan cara berpikir yang baru. Kiranya STT Bandung terus dipakai Tuhan untuk memperlengkapi para hamba Tuhan yang dipercayakan oleh Tuhan untuk siap melayani Tuhan.",
    name: "Rikke Rosady",
    title: "(S.Pd. 2015)",
  },
  {
    id: 3,
    text: "Bukan sebuah kebetulan jika saya bisa menikmati studi lanjut di STT Bandung. Ketika melihat daftar matakuliah program M.Th, saya langsung tertarik untuk mempelajarinya. Menurut saya, isu-isu yang dipelajari sangat kontekstual, baik bagi pelayanan lokal maupun global. Didukung dengan pengajar-pengajar dan narasumber-narasumber yang berkompeten di bidangnya, rekan-rekan diskusi yang saling membangun, fasilitas belajar yang memadai, semakin memperlengkapi saya dalam menjalani panggilan-NYA.",
    name: "Kristian Kusumawardana",
    title: "(M.Th. 2019)",
  },
  {
    id: 4,
    text: "Pendidikan teologi di STT Bandung membuka wawasan saya tentang pentingnya teologi yang membumi dan berdampak pada masyarakat. Saya melihat bagaimana setiap materi dirancang tidak hanya untuk memperkaya intelektual, tetapi juga mengasah kepekaan sosial dan kerohanian. Berkat bimbingan para dosen yang penuh dedikasi, saya siap untuk berkontribusi lebih nyata dalam pelayanan dan pengembangan komunitas di mana pun Tuhan menempatkan saya.",
    name: "Amanda Christanty",
    title: "(S.Th. 2021)",
  },
  {
    id: 5,
    text: "Kuliah di STT Bandung memberikan keseimbangan yang luar biasa antara kedalaman akademis dan pembentukan karakter rohani. Fasilitas yang memadai serta bimbingan intensif dari para dosen sangat menolong saya menemukan panggilan spesifik. Hingga hari ini, banyak prinsip dasar teologi yang saya pelajari sangat relevan ketika diaplikasikan dalam melayani kelompok pemuda di gereja modern.",
    name: "Samuel Pratama",
    title: "(S.Th. 2022)",
  },
];

interface TestimonialSectionProps {
  testimonials?: TestimonialData[];
}

export function TestimonialSection({
  testimonials: propTestimonials,
}: TestimonialSectionProps) {
  const { data: apiTestimonials } = useTestimonials();

  let testimonials = propTestimonials || defaultTestimonials;

  // Jika tidak ada props dan API me-*return* data, pakai data dari API
  if (!propTestimonials && apiTestimonials && apiTestimonials.length > 0) {
    testimonials = apiTestimonials.map((t) => ({
      id: t.id,
      text: t.testimonialText,
      name: t.alumniName,
      title: t.currentJob && t.graduationYear 
        ? `${t.currentJob} (${t.graduationYear})` 
        : t.currentJob || `(${t.graduationYear || ""})`,
    }));
  }

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(
        Math.ceil(el.scrollLeft + el.clientWidth) < el.scrollWidth
      );
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [testimonials]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (el) {
      const cardWidth = el.firstElementChild?.clientWidth || 400;
      const scrollAmount = cardWidth + 32; // width + gap
      el.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      // Allow scroll event to fire completely before rechecking bounds
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      {/* Background / Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 rounded-l-[100px] opacity-30 pointer-events-none transform translate-x-1/3" />

      <div className="w-full px-4 lg:px-12 xl:px-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-black text-[#0a1930] tracking-tight mb-4">
                Testimoni <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-[#dc2626]">Alumni</span>
              </h2>
              <p className="text-gray-800 font-medium text-lg leading-relaxed">
                Kisah dan pengalaman dari mereka yang telah dipersiapkan dan diutus untuk melayani.
              </p>
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${canScrollLeft
                ? "bg-white border hover:border-[#1e3a8a] text-[#1e3a8a] shadow-[0_4px_10px_rgba(0,0,0,0.05)] hover:bg-[#1e3a8a] hover:text-white"
                : "bg-gray-50 border border-gray-100 text-gray-300 cursor-not-allowed"
                }`}
            >
              <ChevronLeft size={24} strokeWidth={2.5} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${canScrollRight
                ? "bg-white border hover:border-[#1e3a8a] text-[#1e3a8a] shadow-[0_4px_10px_rgba(0,0,0,0.05)] hover:bg-[#1e3a8a] hover:text-white"
                : "bg-gray-50 border border-gray-100 text-gray-300 cursor-not-allowed"
                }`}
            >
              <ChevronRight size={24} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative group -mx-4 px-4 sm:mx-0 sm:px-0">
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-10 pt-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testi, idx) => (
              <motion.div
                key={testi.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                // On desktop: 4 columns. On mobile: 1 column
                className="flex-shrink-0 w-[85vw] md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] snap-start flex flex-col h-full group/card"
              >
                <div className="flex-1 bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(30,58,138,0.08)] hover:-translate-y-1 transition-all duration-500 relative flex flex-col justify-between overflow-hidden">
                  {/* Subtle Quote Icon Background */}
                  <Quote className="absolute top-6 right-6 text-gray-50 w-20 h-20 -rotate-12 group-hover/card:text-blue-50 transition-colors duration-500" />

                  <div className="relative z-10">
                    <p className="text-gray-800 text-[14px] leading-[1.8] mb-8 font-medium">
                      {testi.text}
                    </p>
                  </div>

                  <div className="relative z-10 mt-auto">
                    <div className="w-full h-px bg-gray-100 mb-6 relative">
                      <div className="absolute left-0 top-0 w-12 h-full bg-[#dc2626] group-hover/card:w-1/3 transition-all duration-700 ease-in-out" />
                    </div>
                    <div>
                      <h4 className="font-black text-[#0a1930] text-lg leading-tight mb-1 group-hover/card:text-[#1e3a8a] transition-colors">
                        {testi.name}
                      </h4>
                      <p className="text-[13px] font-bold text-[#dc2626]">
                        {testi.title}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
