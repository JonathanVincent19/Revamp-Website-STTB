"use client";

import React from "react";
import { motion } from "motion/react";

const stats = [
  { value: "15,000+", label: "Active Students", color: "bg-blue-50" },
  { value: "85+", label: "Academic Programs", color: "bg-amber-50" },
  { value: "98%", label: "Placement Rate", color: "bg-green-50" },
  { value: "120+", label: "Research Projects", color: "bg-purple-50" },
];

export const Highlights = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[#1a365d] text-4xl font-black mb-4">Years of Excellence</h2>
          <div className="w-20 h-1.5 bg-[#d4af37] mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-lg">
            At Montfort Boys Town, we pride ourselves on a legacy of academic rigor, innovative research, and student success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${stat.color} p-10 rounded-3xl border border-slate-100 flex flex-col items-center text-center group hover:shadow-xl transition-all duration-300`}
            >
              <span className="text-5xl font-black text-[#1a365d] mb-3 group-hover:scale-110 transition-transform">
                {stat.value}
              </span>
              <span className="text-[#d4af37] font-bold uppercase tracking-widest text-sm">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
