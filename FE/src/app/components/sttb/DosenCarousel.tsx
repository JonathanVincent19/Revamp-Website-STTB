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
      const scrollAmount = 300;
      el.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 400);
    }
  };

  return (
    <div className="relative">
      {/* Left Arrow */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
        >
          <ChevronLeft size={20} className="text-[#1e3a8a]" />
        </button>
      )}

      {/* Right Arrow */}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
        >
          <ChevronRight size={20} className="text-[#1e3a8a]" />
        </button>
      )}

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 px-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {dosenList.map((dosen, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex-shrink-0 w-52"
          >
            <DosenCard dosen={dosen} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function DosenCard({ dosen }: { dosen: DosenData }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border-l-3 border-[#1e3a8a] h-full">
      <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        <ImageWithFallback
          src={dosen.image}
          alt={dosen.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3">
        <h4 className="text-sm font-bold text-[#1e3a8a] leading-tight">
          {dosen.name}
        </h4>
        <p className="text-[11px] font-bold text-red-600 mt-1">
          {dosen.position}
        </p>
        <p className="text-[11px] italic text-red-600">
          ({dosen.teaching})
        </p>
        <div className="mt-2 space-y-0.5">
          {dosen.education.map((edu, i) => (
            <p key={i} className="text-[10px] text-gray-500 leading-tight">
              {edu}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
