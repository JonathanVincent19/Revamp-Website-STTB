"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface SectionProps {
  title: string;
  tagline: string;
  heroImage: string;
  subsections: {
    title: string;
    description: string;
    icon?: React.ReactNode;
    features?: string[];
  }[];
}

export const SectionPage = ({ title, tagline, heroImage, subsections }: SectionProps) => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback src={heroImage} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1a365d]/80" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">{title}</h1>
            <p className="text-[#fbbf24] text-xl font-bold uppercase tracking-widest">{tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-20">
            {subsections.map((sub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="w-16 h-16 bg-blue-50 text-[#1a365d] rounded-2xl flex items-center justify-center mb-6">
                    {sub.icon || <CheckCircle2 size={32} />}
                  </div>
                  <h2 className="text-3xl font-black text-[#1a365d] mb-6">{sub.title}</h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {sub.description}
                  </p>
                  
                  {sub.features && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {sub.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-3 text-slate-700">
                          <CheckCircle2 size={18} className="text-[#d4af37]" />
                          <span className="font-semibold">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <button className="mt-10 bg-[#1a365d] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#d4af37] transition-all flex items-center gap-2 group">
                    Learn More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                
                <div className="flex-1 w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl relative group">
                  <ImageWithFallback 
                    src={heroImage} // Using heroImage as placeholder for all for now, or could pass specific ones
                    alt={sub.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/40 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
