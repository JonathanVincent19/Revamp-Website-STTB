import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const news = [
  {
    title: "Breakthrough in Sustainable Energy Research",
    category: "Research",
    date: "Oct 24, 2026",
    image: "https://images.unsplash.com/photo-1759092912891-9f52486bb059",
  },
  {
    title: "New Student Center Opening Next Semester",
    category: "Campus Life",
    date: "Oct 18, 2026",
    image: "https://images.unsplash.com/photo-1765638647849-f525bece7ca4",
  },
  {
    title: "Annual Alumni Homecoming Gala 2026",
    category: "Events",
    date: "Nov 05, 2026",
    image: "https://images.unsplash.com/photo-1758270703262-2b40b6b66be6",
  },
];

export const NewsEvents = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-[#1a365d] text-4xl font-black mb-4">News & Announcements</h2>
            <div className="w-20 h-1.5 bg-[#d4af37] rounded-full" />
          </div>
          <button className="flex items-center gap-2 font-bold text-[#1a365d] hover:text-[#d4af37] transition-colors group">
            View All News <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#1a365d] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {item.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                  <Calendar size={14} />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold text-[#1a365d] mb-4 group-hover:text-[#d4af37] transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <button className="mt-auto text-[#1a365d] font-bold text-sm flex items-center gap-1 hover:underline">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
