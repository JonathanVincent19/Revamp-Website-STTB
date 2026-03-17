"use client";

import { motion } from "motion/react";
import { Video, FileText, Book, Loader2, AlertCircle, Image as ImageIcon } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useGalleryAlbums } from "@/lib/hooks";

export function MediaPage() {
  const { data: albums, loading, error } = useGalleryAlbums();

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Media & Sumber Daya
            </h1>
            <p className="text-xl text-blue-50">
              Akses khotbah digital, artikel teologi, dan media pendidikan Kristen
            </p>
          </motion.div>
        </div>
      </section>

      {/* Kategori Media (Statis) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Video, title: "Video Khotbah", desc: "Kumpulan khotbah dari dosen dan alumni" },
              { icon: FileText, title: "Artikel Teologi", desc: "Artikel dan esai teologi kontekstual" },
              { icon: Book, title: "Media PAK", desc: "Bahan Pendidikan Agama Kristen" },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center">
                <item.icon className="mx-auto mb-4 text-[#1e3a8a]" size={48} />
                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeri Album dari API */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block bg-[#dbeafe] text-[#1e3a8a] px-4 py-1.5 rounded-full text-sm tracking-wider mb-2">
              GALERI FOTO
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1e3a8a]">
              Album Galeri
            </h2>
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-16">
              <Loader2 className="animate-spin text-[#1e3a8a] mb-4" size={36} />
              <p className="text-gray-500">Memuat album...</p>
            </div>
          )}

          {/* Error */}
          {error && !loading && (
            <div className="flex flex-col items-center justify-center py-12 bg-red-50 rounded-xl max-w-xl mx-auto">
              <AlertCircle className="text-[#dc2626] mb-3" size={36} />
              <p className="text-[#dc2626] font-semibold">Gagal memuat album</p>
              <p className="text-sm text-gray-500 mt-1">{error}</p>
            </div>
          )}

          {/* Empty */}
          {!loading && !error && (!albums || albums.length === 0) && (
            <div className="text-center py-16">
              <ImageIcon className="mx-auto mb-4 text-gray-300" size={48} />
              <p className="text-gray-500">Belum ada album galeri.</p>
            </div>
          )}

          {/* Albums Grid */}
          {!loading && !error && albums && albums.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {albums.map((album, index) => (
                <motion.div
                  key={album.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={album.coverImage || "https://images.unsplash.com/photo-1738949538943-e54722a44ffc"}
                      alt={album.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {album.media && album.media.length > 0 && (
                      <div className="absolute bottom-3 right-3 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {album.media.length} foto
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">{album.title}</h3>
                    {album.description && (
                      <p className="text-sm text-gray-600 line-clamp-2">{album.description}</p>
                    )}
                    {album.eventDate && (
                      <p className="text-xs text-gray-400 mt-2">
                        {new Date(album.eventDate).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
