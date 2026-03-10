"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Search, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Tentang",
    href: "/about",
    subItems: [
      { label: "Visi & Misi", href: "/about#vision" },
      { label: "Sejarah", href: "/about#history" },
      { label: "Dewan Dosen", href: "/about#leadership" },
      { label: "Mars STTB", href: "/about#mars" },
      { label: "Pengakuan Iman", href: "/about#pengakuan" },
      { label: "Yayasan", href: "/about#yayasan" },

    ],
  },
  {
    label: "Program Studi",
    href: "/programs",
    subItems: [
      { label: "Sarjana (S1)", href: "/programs#s1" },
      { label: "Magister (S2)", href: "/programs#s2" },
      { label: "Matrikulasi", href: "/programs#matriculation" },
    ],
  },
  {
    label: "PMB",
    href: "/admissions",
    subItems: [
      { label: "Pendaftaran", href: "/admissions#registration" },
      { label: "Biaya Studi", href: "/admissions#fees" },
      { label: "Persyaratan", href: "/admissions#requirements" },
    ],
  },
  {
    label: "Fasilitas",
    href: "/facilities",
  },
  {
    label: "Media",
    href: "/media",
    subItems: [
      { label: "Video Khotbah", href: "/media#sermons" },
      { label: "Artikel", href: "/media#articles" },
      { label: "Perpustakaan Digital", href: "/library" },
    ],
  },
  {
    label: "E-Journal",
    href: "/journal",
  },
  {
    label: "Berita",
    href: "/news",
  },
  {
    label: "Alumni",
    href: "/alumni",
  },
  {
    label: "Kontak",
    href: "/contact",
  },
];

export function STTBNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/98 backdrop-blur-sm shadow-md py-3"
        : "bg-[#1e3a8a] py-4"
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-lg transition-all ${scrolled
                ? "bg-[#1e3a8a] group-hover:bg-[#f59e0b]"
                : "bg-white/10 group-hover:bg-[#f59e0b]"
                }`}
            >
              <BookOpen
                className={`${scrolled ? "text-white" : "text-white"}`}
                size={24}
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-bold text-lg leading-tight tracking-tight ${scrolled ? "text-[#1e3a8a]" : "text-white"
                  }`}
              >
                STTB
              </span>
              <span
                className={`text-xs tracking-wider ${scrolled ? "text-[#f59e0b]" : "text-[#fbbf24]"
                  }`}
              >
                BANDUNG
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 transition-colors ${scrolled
                    ? "text-gray-700 hover:text-[#1e3a8a]"
                    : "text-white hover:text-[#fbbf24]"
                    } ${pathname === item.href
                      ? scrolled
                        ? "text-[#1e3a8a] font-semibold"
                        : "text-[#fbbf24] font-semibold"
                      : ""
                    }`}
                >
                  {item.label}
                  {item.subItems && <ChevronDown size={14} className="mt-0.5" />}
                </Link>

                {/* Dropdown */}
                {item.subItems && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-52 bg-white rounded-lg shadow-xl overflow-hidden py-2 border border-gray-100"
                      >
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#dbeafe] hover:text-[#1e3a8a] transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            <a
              href="https://siakad.sttb.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 rounded-lg transition-all ${scrolled
                ? "bg-[#1e3a8a] text-white hover:bg-[#f59e0b]"
                : "bg-[#f59e0b] text-white hover:bg-[#fbbf24]"
                }`}
            >
              SIAKAD
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={28} className={scrolled ? "text-[#1e3a8a]" : "text-white"} />
            ) : (
              <Menu size={28} className={scrolled ? "text-[#1e3a8a]" : "text-white"} />
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
              className="lg:hidden bg-white mt-4 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="py-4 flex flex-col gap-3">
                {navItems.map((item) => (
                  <div key={item.label} className="px-4">
                    <Link
                      href={item.href}
                      className="flex justify-between items-center py-2 text-gray-700 hover:text-[#1e3a8a]"
                    >
                      <span>{item.label}</span>
                      {item.subItems && <ChevronDown size={16} />}
                    </Link>
                    {item.subItems && (
                      <div className="flex flex-col gap-1 pl-4 mt-1 border-l-2 border-gray-200">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="py-1.5 text-sm text-gray-600 hover:text-[#1e3a8a]"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-2">
                  <a
                    href="https://siakad.sttb.ac.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-2 bg-[#1e3a8a] text-white rounded-lg hover:bg-[#f59e0b] transition-colors"
                  >
                    SIAKAD
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
