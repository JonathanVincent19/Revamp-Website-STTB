import Link from "next/link";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, BookOpen, MessageCircle } from "lucide-react";

export function STTBFooter() {
  return (
    <footer className="bg-[#1e3a8a] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={28} className="text-[#dc2626]" />
              <div>
                <h3 className="font-bold text-lg">STTB</h3>
                <p className="text-xs text-[#dc2626]">Bandung</p>
              </div>
            </div>
            <p className="text-sm text-blue-100 leading-relaxed mb-4">
              Sekolah Tinggi Teologi Bandung - Mempersiapkan pastor-scholars yang transformatif untuk pelayanan urban.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#dc2626] transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#dc2626] transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#dc2626] transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <Link href="/about" className="hover:text-[#dc2626] transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-[#dc2626] transition-colors">
                  Program Studi
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-[#dc2626] transition-colors">
                  Penerimaan Mahasiswa
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-[#dc2626] transition-colors">
                  E-Journal
                </Link>
              </li>
              <li>
                <Link href="/library" className="hover:text-[#dc2626] transition-colors">
                  Perpustakaan
                </Link>
              </li>
            </ul>
          </div>

          {/* Akademik */}
          <div>
            <h4 className="font-bold mb-4">Akademik</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              {[
                { name: "Sarjana Teologi (S.Th.)", href: "/programs/sarjana-teologi" },
                { name: "Sarjana Pendidikan Kristen (S.Pd.K.)", href: "/programs/sarjana-pendidikan-kristen" },
                { name: "Magister Teologi Pelayanan Pastoral Gereja Urban", href: "/programs/magister-teologi-pelayanan-pastoral" },
                { name: "Magister Teologi Transformasi Budaya", href: "/programs/magister-teologi-transformasi-budaya" },
                { name: "Magister Pendidikan Kristen M.Pd.K.", href: "/programs/magister-pendidikan-kristen" },
                { name: "Magister Ministri Marketplace", href: "/programs/magister-ministri-marketplace" },
                { name: "Magister Ministri Kepemimpinan Pastoral", href: "/programs/magister-ministri-kepemimpinan-pastoral" },
                { name: "Magister Ministri Gerejawi", href: "/programs/magister-ministri-gerejawi" },
              ].map((prog, idx) => (
                <li key={idx}>
                  <Link href={prog.href} className="hover:text-red-600 transition-colors">
                    {prog.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Kontak Kami</h4>
            <ul className="space-y-4 text-sm text-blue-100">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-[#dc2626]" />
                <span>Jl Dr. Djunjunan No. 105<br />Bandung 40173, Indonesia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0 text-[#dc2626]" />
                <span>(+62) 22 601-6454, 607-7920</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="flex-shrink-0 text-[#dc2626]" />
                <span>WhatsApp:<br />(+62) 815 7336 0009<br />(+62) 851-8302-6009</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0 text-[#dc2626]" />
                <span>official@sttb.ac.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-blue-100">
          <p>&copy; {new Date().getFullYear()} Sekolah Tinggi Teologi Bandung. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
