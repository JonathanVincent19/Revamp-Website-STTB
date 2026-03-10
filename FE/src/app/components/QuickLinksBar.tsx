import React from "react";
import { GraduationCap, BookOpen, Microscope, Music, Users, Contact2 } from "lucide-react";

const links = [
  { icon: GraduationCap, label: "Admissions", page: "admissions" },
  { icon: BookOpen, label: "Academics", page: "academics" },
  { icon: Microscope, label: "Research", page: "research" },
  { icon: Music, label: "Campus Life", page: "campus-life" },
  { icon: Users, label: "Alumni", page: "alumni" },
  { icon: Contact2, label: "Contact Us", page: "contact" },
];

export const QuickLinksBar = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <div className="container mx-auto px-6 -mt-16 relative z-20">
      <div className="bg-white rounded-2xl shadow-2xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-slate-100 overflow-hidden border border-slate-100">
        {links.map((link) => (
          <button
            key={link.label}
            onClick={() => onNavigate(link.page)}
            className="flex flex-col items-center justify-center p-8 hover:bg-[#1a365d] group transition-all duration-300"
          >
            <link.icon className="text-[#1a365d] mb-3 group-hover:text-[#d4af37] group-hover:scale-110 transition-all" size={32} />
            <span className="font-bold text-sm text-[#1a365d] group-hover:text-white uppercase tracking-wider">
              {link.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
