"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, BookOpen } from "lucide-react";
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
      { label: "Kepemimpinan", href: "/about#leadership" },
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
    label: "Admisi",
    href: "/admissions",
    subItems: [
      { label: "Pendaftaran", href: "/admissions#registration" },
      { label: "Jadwal", href: "" },
      { label: "Prosedur", href: "" },
      { label: "Persyaratan", href: "/admissions#requirements" },
      { label: "FAQ", href: "" },
    ],
  },
  {
    label: "Keuangan",
    href: "/finances",
    subItems: [
      { label: "Biaya Studi", href: "/admissions#fees" },
      { label: "Beasiswa", href: "" },
      { label: "Dukung STTB", href: "" },
    ],
  },
  {
    label: "Kehidupan Kampus",
    href: "/campuslife",
    subItems: [
      { label: "Fasilitas", href: "/facilities" },
      { label: "Pembinaan", href: "" },
      { label: "Senat", href: "" },
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

const mainNavLabels = [ "Tentang", "Program Studi", "Admisi", "Keuangan", "Kehidupan Kampus" ];
const mainNavItems = navItems.filter( (item) => mainNavLabels.includes(item.label) );
const sideNavItems = navItems.filter( (item) => !mainNavLabels.includes(item.label) );

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-sm shadow-md py-3"
          : "bg-[#1e3a8a] py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-lg transition-all ${
                scrolled
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
                className={`font-bold text-lg leading-tight tracking-tight ${
                  scrolled ? "text-[#1e3a8a]" : "text-white"
                }`}
              >
                STTB
              </span>
              <span
                className={`text-xs tracking-wider ${
                  scrolled ? "text-[#f59e0b]" : "text-[#fbbf24]"
                }`}
              >
                BANDUNG
              </span>
            </div>
          </Link>

          {/* Main Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {/* Primary Links */}
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 transition-colors ${
                      isActive
                        ? scrolled
                          ? "text-[#1e3a8a] font-bold"
                          : "text-[#fbbf24] font-bold"
                        : scrolled
                          ? "text-gray-700 hover:text-[#1e3a8a]"
                          : "text-white hover:text-[#fbbf24]"
                    }`}
                  >
                    {item.label}
                    {item.subItems && (
                      <ChevronDown size={14} className="mt-0.5" />
                    )}
                  </Link>

                  {/* Dropdown for Main Items */}
                  {item.subItems && (
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-52 bg-white rounded-lg shadow-xl overflow-hidden py-2 border border-gray-100"
                        >
                          {item.subItems.map((sub) => {
                            const isSubActive =
                              pathname +
                                (typeof window !== "undefined"
                                  ? window.location.hash
                                  : "") ===
                              sub.href;

                            return (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                className={`block px-4 py-2.5 text-sm transition-colors ${
                                  isSubActive
                                    ? "text-[#1e3a8a] font-semibold bg-blue-50"
                                    : "text-gray-700 hover:bg-[#dbeafe] hover:text-[#1e3a8a]"
                                }`}
                              >
                                {sub.label}
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}

            {/* Secondary Links Dropdown (Lainnya) */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("side-menu")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 transition-colors ${
                  scrolled
                    ? "text-gray-700 hover:text-[#1e3a8a]"
                    : "text-white hover:text-[#fbbf24]"
                } ${
                  activeDropdown === "side-menu"
                    ? scrolled
                      ? "text-[#1e3a8a]"
                      : "text-[#fbbf24]"
                    : ""
                }`}
              >
                Lainnya
                <ChevronDown size={14} className="mt-0.5" />
              </button>

              <AnimatePresence>
                {activeDropdown === "side-menu" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl overflow-hidden py-2 border border-gray-100"
                  >
                    {sideNavItems.map((item) => {
                      const isActive = pathname === item.href;
                      const isChildActive = item.subItems?.some(
                        (sub) => pathname === sub.href,
                      );
                      const shouldShowSubItems = isActive || isChildActive;

                      return (
                        <div key={item.label} className="group/sub">
                          <Link
                            href={item.href}
                            className={`flex justify-between items-center px-4 py-2.5 text-sm transition-colors ${
                              isActive || isChildActive
                                ? "text-[#1e3a8a] font-semibold bg-blue-50"
                                : "text-gray-700 hover:bg-[#dbeafe] hover:text-[#1e3a8a]"
                            }`}
                          >
                            <span>{item.label}</span>
                            {item.subItems && (
                              <ChevronDown
                                size={14}
                                className={`transition-transform duration-200 ${
                                  shouldShowSubItems
                                    ? "rotate-0"
                                    : "-rotate-90 group-hover/sub:rotate-0"
                                }`}
                              />
                            )}
                          </Link>

                          {/* Sub-items */}
                          {item.subItems && (
                            <div
                              className={`bg-gray-50 border-t border-gray-100 py-1 transition-all ${
                                shouldShowSubItems
                                  ? "block"
                                  : "hidden group-hover/sub:block"
                              }`}
                            >
                              {item.subItems.map((sub) => {
                                const isSubActive = pathname === sub.href;
                                return (
                                  <Link
                                    key={sub.label}
                                    href={sub.href}
                                    className={`block px-8 py-2 text-xs transition-colors ${
                                      isSubActive
                                        ? "text-[#1e3a8a] font-bold bg-blue-100/50"
                                        : "text-gray-600 hover:text-[#1e3a8a] hover:bg-gray-100"
                                    }`}
                                  >
                                    {sub.label}
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Login Button */}
            <a
              href="https://siakad.sttb.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 rounded-lg transition-all ${
                scrolled
                  ? "bg-[#1e3a8a] text-white hover:bg-[#f59e0b]"
                  : "bg-[#f59e0b] text-white hover:bg-[#fbbf24]"
              }`}
            >
              Login
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X
                size={28}
                className={scrolled ? "text-[#1e3a8a]" : "text-white"}
              />
            ) : (
              <Menu
                size={28}
                className={scrolled ? "text-[#1e3a8a]" : "text-white"}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu (Combined) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white mt-4 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="py-4 flex flex-col gap-3 max-h-[70vh] overflow-y-auto">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <div key={item.label} className="px-4">
                      <Link
                        href={item.href}
                        className={`flex justify-between items-center py-2 ${
                          isActive
                            ? "text-[#1e3a8a] font-bold border-l-4 border-[#1e3a8a] pl-3 -ml-4"
                            : "text-gray-700 hover:text-[#1e3a8a] pl-3"
                        }`}
                      >
                        <span>{item.label}</span>
                        {item.subItems && <ChevronDown size={16} />}
                      </Link>
                      {item.subItems && (
                        <div className="flex flex-col gap-1 pl-4 mt-1 border-l-2 border-gray-200 ml-2">
                          {item.subItems.map((sub) => {
                            const isSubActive = pathname === sub.href;
                            return (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                className={`py-1.5 text-sm ${
                                  isSubActive
                                    ? "text-[#1e3a8a] font-semibold"
                                    : "text-gray-600 hover:text-[#1e3a8a]"
                                }`}
                              >
                                {sub.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
                <div className="px-4 pt-2 border-t mt-2">
                  <a
                    href="https://siakad.sttb.ac.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-2 bg-[#1e3a8a] text-white rounded-lg hover:bg-[#f59e0b] transition-colors"
                  >
                    Login
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
