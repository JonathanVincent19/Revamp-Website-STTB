"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Montfort Boys Town didn't just give me an education; it gave me a purpose. The faculty's dedication to student success is unmatched.",
    author: "Sarah Jenkins",
    role: "Alumni, Class of '18",
  },
  {
    quote: "The research opportunities here allowed me to work on real-world solutions while still an undergraduate. Truly a transformative experience.",
    author: "David Chen",
    role: "Senior, Engineering",
  },
  {
    quote: "Campus life is vibrant and inclusive. I've found lifelong friends and mentors through the various student organizations.",
    author: "Elena Rodriguez",
    role: "Junior, Psychology",
  },
];

export const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 bg-[#1a365d] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d4af37]/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl font-black mb-4">Student Stories</h2>
          <div className="w-20 h-1.5 bg-[#d4af37] mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0 px-4">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 md:p-16 text-center relative">
                    <Quote className="text-[#d4af37] mx-auto mb-8 opacity-50" size={60} />
                    <p className="text-xl md:text-3xl text-white font-light italic leading-relaxed mb-10">
                      "{t.quote}"
                    </p>
                    <div className="text-white">
                      <h4 className="font-bold text-xl">{t.author}</h4>
                      <p className="text-[#d4af37] font-semibold">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-12 w-12 h-12 rounded-full bg-white text-[#1a365d] flex items-center justify-center shadow-xl hover:bg-[#d4af37] transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-12 w-12 h-12 rounded-full bg-white text-[#1a365d] flex items-center justify-center shadow-xl hover:bg-[#d4af37] transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};
