import Link from "next/link";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, BookOpen } from "lucide-react";

export function STTBFooter() {
  return (
    <footer className="bg-[#1e3a8a] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={28} className="text-[#fbbf24]" />
              <div>
                <h3 className="font-bold text-lg">STTB</h3>
                <p className="text-xs text-[#fbbf24]">Bandung</p>
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
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#f59e0b] transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#f59e0b] transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#f59e0b] transition-colors"
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
                <Link href="/about" className="hover:text-[#fbbf24] transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-[#fbbf24] transition-colors">
                  Program Studi
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-[#fbbf24] transition-colors">
                  Penerimaan Mahasiswa
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-[#fbbf24] transition-colors">
                  E-Journal Transformatio
                </Link>
              </li>
              <li>
                <Link href="/library" className="hover:text-[#fbbf24] transition-colors">
                  Perpustakaan
                </Link>
              </li>
            </ul>
          </div>

          {/* Akademik */}
          <div>
            <h4 className="font-bold mb-4">Akademik</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <a
                  href="https://siakad.sttb.ac.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#fbbf24] transition-colors"
                >
                  Portal SIAKAD
                </a>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-[#fbbf24] transition-colors">
                  Fasilitas Kampus
                </Link>
              </li>
              <li>
                <Link href="/media" className="hover:text-[#fbbf24] transition-colors">
                  Media & Sumber Daya
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-[#fbbf24] transition-colors">
                  Berita & Acara
                </Link>
              </li>
              <li>
                <Link href="/alumni" className="hover:text-[#fbbf24] transition-colors">
                  Alumni & Karir
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Kontak Kami</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[#fbbf24]" />
                <span>Jl. Example No. 123<br />Bandung, Jawa Barat 40123</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0 text-[#fbbf24]" />
                <span>+62 22 1234 5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0 text-[#fbbf24]" />
                <span>info@sttb.ac.id</span>
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
