"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, PlayCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const Hero = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1754878206904-683b42034067"
          alt="Montfort Boys Town"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/90 via-[#1a365d]/60 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-[#d4af37] text-[#1a365d] px-4 py-1.5 rounded-full font-bold text-sm tracking-widest uppercase mb-6 shadow-lg">
              Est. 1959
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-6">
              Empowering <br />
              <span className="text-[#fbbf24]">Future Leaders</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 mb-10 leading-relaxed max-w-2xl font-light">
              Join a community where tradition meets innovation. Discover your potential through world-class academics and vibrant campus life.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <button
                onClick={() => onNavigate("admissions")}
                className="bg-[#d4af37] text-[#1a365d] px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-white transition-all transform hover:-translate-y-1 shadow-xl"
              >
                Apply Now <ArrowRight size={20} />
              </button>
              <button
                onClick={() => onNavigate("academics")}
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
              >
                Explore Programs <PlayCircle size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-2 bg-[#d4af37]/50 blur-xl" />
    </section>
  );
};
