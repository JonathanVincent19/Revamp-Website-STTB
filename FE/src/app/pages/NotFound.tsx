"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] pt-20">
      <div className="text-center px-4">
        <h1 className="text-9xl font-black text-white/20 mb-4">404</h1>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-md mx-auto">
          Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#f59e0b] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#fbbf24] transition-all"
          >
            <Home size={20} />
            Kembali ke Beranda
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all"
          >
            <ArrowLeft size={20} />
            Halaman Sebelumnya
          </button>
        </div>
      </div>
    </div>
  );
}
