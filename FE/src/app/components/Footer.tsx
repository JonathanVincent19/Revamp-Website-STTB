import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export const Footer = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <footer className="bg-[#1a365d] text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div 
              className="flex items-center gap-2 cursor-pointer group w-fit"
              onClick={() => onNavigate("home")}
            >
              <div className="w-10 h-10 bg-[#d4af37] flex items-center justify-center rounded-lg">
                <span className="text-[#1a365d] font-bold text-xl">M</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight text-white">
                  MONTFORT
                </span>
                <span className="text-xs font-semibold tracking-widest text-[#fbbf24]">
                  BOYS TOWN
                </span>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Excellence in education and character formation since 1959. Empowering young minds to lead and serve in a global society.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4af37] hover:text-[#1a365d] transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-b-2 border-[#d4af37] w-fit pb-1">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {["Admissions", "Academics", "Research", "Campus Life", "Alumni"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => onNavigate(link.toLowerCase().replace(" ", "-"))}
                    className="text-slate-300 hover:text-[#fbbf24] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-b-2 border-[#d4af37] w-fit pb-1">Contact Us</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4">
                <MapPin className="text-[#d4af37] shrink-0" size={20} />
                <span className="text-slate-300">
                  123 University Avenue,<br />
                  St. Thomas, ST 12345
                </span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-[#d4af37] shrink-0" size={20} />
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-[#d4af37] shrink-0" size={20} />
                <span className="text-slate-300">info@montfortboystown.edu</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-b-2 border-[#d4af37] w-fit pb-1">Stay Updated</h4>
            <p className="text-slate-300 mb-4">Subscribe to our newsletter for the latest campus news.</p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white/10 border border-white/20 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#d4af37] text-white"
              />
              <button className="bg-[#d4af37] text-[#1a365d] font-bold py-3 rounded-lg hover:bg-[#fbbf24] transition-colors uppercase tracking-wider text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© 2026 Montfort Boys Town. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
