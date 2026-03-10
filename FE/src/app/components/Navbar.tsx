"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Admissions",
    href: "admissions",
    subItems: [
      { label: "Application Process", href: "admissions#process" },
      { label: "Financial Aid", href: "admissions#aid" },
      { label: "Campus Tours", href: "admissions#tours" },
    ],
  },
  {
    label: "Academics",
    href: "academics",
    subItems: [
      { label: "Departments", href: "academics#departments" },
      { label: "Courses", href: "academics#courses" },
      { label: "Faculty Profiles", href: "academics#faculty" },
    ],
  },
  {
    label: "Research",
    href: "research",
    subItems: [
      { label: "Research Centers", href: "research#centers" },
      { label: "Publications", href: "research#publications" },
      { label: "Opportunities", href: "research#opportunities" },
    ],
  },
  {
    label: "Campus Life",
    href: "campus-life",
    subItems: [
      { label: "Student Organizations", href: "campus-life#orgs" },
      { label: "Events", href: "campus-life#events" },
      { label: "Housing", href: "campus-life#housing" },
    ],
  },
  {
    label: "Alumni",
    href: "alumni",
    subItems: [
      { label: "Networking", href: "alumni#networking" },
      { label: "Events", href: "alumni#events" },
      { label: "Support", href: "alumni#support" },
    ],
  },
  { label: "Contact Us", href: "contact" },
];

export const Navbar = ({ onNavigate, currentPage }: { onNavigate: (page: string) => void, currentPage: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => onNavigate("home")}
        >
          <div className="w-10 h-10 bg-[#1a365d] flex items-center justify-center rounded-lg group-hover:bg-[#d4af37] transition-colors">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-xl leading-tight ${scrolled ? "text-[#1a365d]" : "text-white"}`}>
              MONTFORT
            </span>
            <span className={`text-xs font-semibold tracking-widest ${scrolled ? "text-[#d4af37]" : "text-[#fbbf24]"}`}>
              BOYS TOWN
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => onNavigate(item.href)}
                className={`flex items-center gap-1 font-semibold transition-colors cursor-pointer ${
                  scrolled ? "text-[#1a365d] hover:text-[#d4af37]" : "text-white hover:text-[#fbbf24]"
                } ${currentPage === item.href ? "text-[#d4af37]" : ""}`}
              >
                {item.label}
                {item.subItems && <ChevronDown size={16} className="mt-0.5" />}
              </button>

              {/* Dropdown */}
              {item.subItems && (
                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl overflow-hidden py-2 border border-slate-100"
                    >
                      {item.subItems.map((sub) => (
                        <button
                          key={sub.label}
                          onClick={() => {
                            onNavigate(item.href);
                            setActiveDropdown(null);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-[#1a365d] hover:bg-slate-50 hover:text-[#d4af37] transition-colors"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <Search size={20} className={scrolled ? "text-[#1a365d]" : "text-white"} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={28} className={scrolled || isOpen ? "text-[#1a365d]" : "text-white"} />
          ) : (
            <Menu size={28} className={scrolled ? "text-[#1a365d]" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <div key={item.label} className="flex flex-col gap-3">
                  <button
                    onClick={() => {
                      onNavigate(item.href);
                      if (!item.subItems) setIsOpen(false);
                    }}
                    className="text-left font-bold text-lg text-[#1a365d] flex justify-between items-center"
                  >
                    {item.label}
                    {item.subItems && <ChevronDown size={20} />}
                  </button>
                  {item.subItems && (
                    <div className="flex flex-col gap-2 pl-4 border-l-2 border-slate-100">
                      {item.subItems.map((sub) => (
                        <button
                          key={sub.label}
                          onClick={() => {
                            onNavigate(item.href);
                            setIsOpen(false);
                          }}
                          className="text-left text-slate-600 py-1"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="relative mt-4">
                <input
                  type="text"
                  placeholder="Search campus..."
                  className="w-full bg-slate-100 rounded-full py-3 px-12 focus:outline-none focus:ring-2 focus:ring-[#1a365d]"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
