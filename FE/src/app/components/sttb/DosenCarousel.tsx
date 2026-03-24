"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export interface DosenData {
  name: string;
  position: string;
  teaching: string;
  education: string[];
  image: string;
}

interface DosenCarouselProps {
  dosenList: DosenData[];
}

export function DosenCarousel({ dosenList }: DosenCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (el) {
      const scrollAmount = 350;
      el.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 400);
    }
  };

  return (
    <div className="relative group">
      {/* Left Arrow */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-5 z-20 w-14 h-14 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex items-center justify-center hover:bg-[#1e3a8a] text-[#1e3a8a] hover:text-white transition-all border border-gray-100 opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft size={28} strokeWidth={2.5} />
        </button>
      )}

      {/* Right Arrow */}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-5 z-20 w-14 h-14 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex items-center justify-center hover:bg-[#1e3a8a] text-[#1e3a8a] hover:text-white transition-all border border-gray-100 opacity-0 group-hover:opacity-100"
        >
          <ChevronRight size={28} strokeWidth={2.5} />
        </button>
      )}

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="flex gap-8 overflow-x-auto scrollbar-hide pb-12 px-4 pt-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {dosenList.map((dosen, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex-shrink-0 w-[260px] md:w-[280px] snap-start"
          >
            <DosenCard dosen={dosen} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function DosenCard({ dosen, isFeatured = false }: { dosen: DosenData, isFeatured?: boolean }) {
  return (
    <div className="flex flex-col h-full group cursor-default">

      {/* Bagian Foto (Aspect Ratio 3:4) dengan Efek Hover Canggih */}
      <div className={`relative w-full aspect-[3/4] rounded-2xl mb-6 overflow-hidden bg-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.06)] group-hover:shadow-[0_20px_40px_rgba(30,58,138,0.15)] group-hover:-translate-y-2 transition-all duration-500 ease-out`}>
        <ImageWithFallback
          src={dosen.image}
          alt={dosen.name}
          className="w-full h-full object-cover object-top filter contrast-[0.95] group-hover:scale-105 group-hover:contrast-100 transition-all duration-700 ease-out"
        />
        {/* Glare Effect (Cahaya menyapu saat di-hover) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out pointer-events-none" />
      </div>

      {/* Bagian Teks Editorial */}
      <div className="flex flex-col flex-1 px-1">

        {/* Nama Dosen */}
        <h4 className={`font-black text-[#1e3a8a] leading-tight mb-2 group-hover:text-[#dc2626] transition-colors ${isFeatured ? 'text-2xl' : 'text-xl'}`}>
          {dosen.name}
        </h4>

        {/* Jabatan & Bidang */}
        <div className="mb-4">
          <p className={`font-black text-[#dc2626] uppercase tracking-[0.15em] mb-1 ${isFeatured ? 'text-sm' : 'text-xs'}`}>
            {dosen.position}
          </p>
          <p className={`font-bold text-[#dc2626] ${isFeatured ? 'text-sm' : 'text-xs'}`}>
            ({dosen.teaching})
          </p>
        </div>

        {/* Garis Aksen Pendek */}
        <div className="w-8 h-[2px] bg-gray-200 mb-4 group-hover:bg-[#1e3a8a] group-hover:w-12 transition-all duration-300" />

        {/* Riwayat Pendidikan (Spasi lega) */}
        <div className="space-y-2.5">
          {dosen.education.map((edu, i) => (
            <p key={i} className={`text-gray-500 font-medium leading-snug hover:text-gray-800 transition-colors ${isFeatured ? 'text-[13px]' : 'text-xs'}`}>
              {edu}
            </p>
          ))}
        </div>

      </div>
    </div>
  );
}