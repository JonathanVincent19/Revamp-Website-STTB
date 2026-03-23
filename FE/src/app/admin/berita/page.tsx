"use client";

import { useState, useEffect } from "react";
import {
  Plus,
  Search,
  MoreHorizontal,
  Pencil,
  Trash2,
  Eye,
  Calendar,
  Loader2,
  AlertCircle,
  X,
  CheckCircle2,
  Image as ImageIcon,
  Upload,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Badge } from "@/app/components/ui/badge";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import {
  useNewsList,
  useDeleteNews,
  useCreateNews,
  useUpdateNews,
  useUploadFile
} from "@/lib/hooks";

const statusStyles: Record<string, string> = {
  published: "bg-emerald-500 text-white border-transparent",
  draft: "bg-amber-500 text-white border-transparent",
  archived: "bg-slate-500 text-white border-transparent",
};

export default function BeritaPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNews, setEditingNews] = useState<any>(null);

  const { data: newsData, loading, error, refetch } = useNewsList({ status: "semua" });
  const { mutate: deleteNews, loading: isDeleting } = useDeleteNews();
  const { mutate: createNews, loading: isSaving } = useCreateNews();
  const { mutate: updateNews, loading: isUpdating } = useUpdateNews();
  const { mutate: uploadFile, loading: isUploading } = useUploadFile();

  const [featuredImageUrl, setFeaturedImageUrl] = useState("");
  const [galleryImageUrls, setGalleryImageUrls] = useState<string[]>([]);

  const handleDelete = async (id: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus berita ini?")) {
      await deleteNews(id);
      refetch();
    }
  };

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove special characters
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/-+/g, "-") // Replace multiple - with single -
      .trim();
  };

  const extractImages = (content: string): string[] => {
    const matches = content.match(/<img[^>]+src=["']([^"']+)["']/gi) || [];
    return matches.map((m) => {
      const srcMatch = m.match(/src=["']([^"']+)["']/);
      return srcMatch ? srcMatch[1] : "";
    }).filter(Boolean);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, isGallery = false) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    try {
      if (isGallery) {
        const newUrls = [...galleryImageUrls];
        for (let i = 0; i < files.length; i++) {
          const res = await uploadFile(files[i]) as any;
          if (res.success && res.url) {
            newUrls.push(res.url);
          }
        }
        setGalleryImageUrls(newUrls);
      } else {
        const res = await uploadFile(files[0]) as any;
        if (res.success && res.url) {
          setFeaturedImageUrl(res.url);
        }
      }
    } catch (err) {
      console.error("Upload failed", err);
      alert("Gagal mengunggah file.");
    }
  };

  const removeGalleryImage = (index: number) => {
    setGalleryImageUrls(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const title = fd.get("title") as string;

    // Gunakan slug lama jika sedang edit dan judul tidak berubah, atau generate baru
    const slug = editingNews && editingNews.title === title
      ? editingNews.slug
      : generateSlug(title);

    // Bersihkan konten dari tag img lama yang mungkin ada di gallery
    let content = fd.get("content") as string;

    // Tambahkan foto gallery sebagai tag img di akhir konten
    const galleryHtml = galleryImageUrls
      .map(url => `<img src="${url}" alt="Dokumentasi Berita" class="rounded-xl shadow-md my-4" />`)
      .join("\n");

    const finalContent = `${content}\n${galleryHtml}`;

    const inputDate = fd.get("publishedAt") as string;
    let finalPublishedAt = new Date().toISOString();
    
    // Check if user changed the date, otherwise keep the original exact time
    if (inputDate) {
      if (editingNews && editingNews.publishedAt && new Date(editingNews.publishedAt).toLocaleDateString("en-CA") === inputDate) {
        finalPublishedAt = editingNews.publishedAt;
      } else {
        finalPublishedAt = new Date(inputDate).toISOString();
      }
    }

    const payload = {
      title,
      slug,
      content: finalContent,
      status: "published", // Default to published when status management is disabled
      author: "Admin",
      publishedAt: finalPublishedAt,
      featuredImage: featuredImageUrl || undefined,
    };

    try {
      if (editingNews) {
        await updateNews({ ...payload, id: editingNews.id });
      } else {
        await createNews(payload);
      }
      setIsModalOpen(false);
      setEditingNews(null);
      setFeaturedImageUrl("");
      setGalleryImageUrls([]);
      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  const openEdit = (news: any) => {
    setEditingNews(news);
    setFeaturedImageUrl(news.featuredImage || "");

    // Extract gallery images from content
    const images = extractImages(news.content || "");
    // Filter out the featured image if it's already in the content to avoid duplicates in gallery state
    const galleryOnly = images.filter(img => img !== news.featuredImage);
    setGalleryImageUrls(galleryOnly);

    setIsModalOpen(true);
  };

  const closeResetModal = () => {
    setIsModalOpen(false);
    setEditingNews(null);
    setFeaturedImageUrl("");
    setGalleryImageUrls([]);
  };

  const filteredNews = newsData?.filter(n =>
    n.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="space-y-6">
      {/* Toolbar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-bold text-[#1e3a8a]">Manajemen Berita</h2>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Cari berita..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-9 w-48 lg:w-64 pl-8 bg-white border-gray-200 text-sm"
            />
          </div>
          <Button
            onClick={() => {
              setEditingNews(null);
              setFeaturedImageUrl("");
              setGalleryImageUrls([]);
              setIsModalOpen(true);
            }}
            className="bg-[#1e3a8a] text-white hover:bg-[#dc2626] transition-colors h-9"
          >
            <Plus size={16} />
            <span className="hidden sm:inline ml-1">Tambah Berita</span>
          </Button>
        </div>
      </div>

      {/* News Table */}
      <Card className="border border-gray-100 shadow-sm overflow-hidden">
        <CardContent className="p-0">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="animate-spin text-[#1e3a8a] mb-2" size={32} />
              <p className="text-gray-500 text-sm">Memuat data berita...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-20 text-red-500">
              <AlertCircle size={32} className="mb-2" />
              <p>{error}</p>
              <Button variant="link" onClick={() => refetch()} className="text-[#1e3a8a]">Coba Lagi</Button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50/80 hover:bg-gray-50/80 text-nowrap">
                    <TableHead className="text-xs font-semibold text-gray-500 uppercase px-6">Judul</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-500 uppercase px-4">Kategori</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-500 uppercase px-4">Tanggal</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-500 uppercase px-4 text-center w-10">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredNews.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-12 text-gray-400">
                        Tidak ada berita ditemukan.
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredNews.map((news) => (
                      <TableRow key={news.id} className="hover:bg-gray-50/50">
                        <TableCell className="font-medium text-gray-900 text-sm px-6 max-w-md truncate">
                          {news.title}
                        </TableCell>
                        <TableCell className="px-4">
                          <Badge variant="secondary" className="bg-blue-50 text-[#1e3a8a] text-xs">
                            {news.category?.name || "Umum"}
                          </Badge>
                        </TableCell>


                        <TableCell className="text-sm text-gray-500 px-4 text-nowrap">
                          {new Date(news.publishedAt || news.createdAt).toLocaleDateString("id-ID")}
                        </TableCell>
                        <TableCell className="px-4 text-center">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400">
                                <MoreHorizontal size={16} />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-40">
                              <DropdownMenuItem className="gap-2" onClick={() => window.open(`/news/${news.slug}`, '_blank')}>
                                <Eye size={14} /> Lihat Publik
                              </DropdownMenuItem>
                              <DropdownMenuItem className="gap-2" onClick={() => openEdit(news)}>
                                <Pencil size={14} /> Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                className="gap-2 text-[#dc2626] focus:text-[#dc2626]"
                                onClick={() => handleDelete(news.id)}
                                disabled={isDeleting}
                              >
                                <Trash2 size={14} /> Hapus
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Modal Tambah/Edit */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-xl font-bold text-[#1e3a8a]">
                {editingNews ? "Edit Berita" : "Tambah Berita Baru"}
              </h3>
              <Button variant="ghost" size="icon" onClick={closeResetModal}>
                <X size={20} />
              </Button>
            </div>

            <form
              key={editingNews?.id || "new-news"}
              onSubmit={handleSubmit}
              className="p-6 space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-1">Judul Berita</label>
                  <Input
                    name="title"
                    defaultValue={editingNews?.title}
                    required
                    placeholder="Masukkan judul berita..."
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-sm font-bold text-gray-700 mb-1">Tanggal Publikasi</label>
                  <Input
                    name="publishedAt"
                    type="date"
                    defaultValue={editingNews?.publishedAt ? new Date(editingNews.publishedAt).toLocaleDateString("en-CA") : new Date().toLocaleDateString("en-CA")}
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-sm font-bold text-gray-700 mb-1">Foto Utama</label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Input
                        placeholder="Pilih file atau tempel URL..."
                        value={featuredImageUrl}
                        onChange={(e) => setFeaturedImageUrl(e.target.value)}
                        className="pr-10"
                      />
                      <label className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer hover:bg-gray-100 p-1 rounded transition-colors">
                        <Upload size={16} className="text-gray-400" />
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={(e) => handleFileUpload(e, false)}
                        />
                      </label>
                    </div>
                    {featuredImageUrl && (
                      <div className="h-10 w-10 relative group rounded border overflow-hidden shrink-0">
                        <ImageWithFallback src={featuredImageUrl} alt="Preview" className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => setFeaturedImageUrl("")}
                          title="Hapus Foto Utama"
                          className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Galeri Dokumentasi (Bisa banyak foto)</label>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 border-2 border-dashed rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer relative group">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={(e) => handleFileUpload(e, true)}
                    />
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                      {isUploading ? <Loader2 className="animate-spin text-[#1e3a8a]" size={20} /> : <Plus className="text-[#1e3a8a]" size={20} />}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-700">Klik untuk upload banyak foto</p>
                      <p className="text-xs text-gray-400">Foto akan otomatis muncul sebagai galeri slider di web</p>
                    </div>
                  </div>

                  {galleryImageUrls.length > 0 && (
                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                      {galleryImageUrls.map((url, idx) => (
                        <div key={idx} className="relative aspect-video group rounded-lg overflow-hidden border">
                          <ImageWithFallback src={url} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                          <button
                            type="button"
                            onClick={() => removeGalleryImage(idx)}
                            className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X size={10} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Konten Berita</label>
                <textarea
                  name="content"
                  required
                  rows={6}
                  defaultValue={editingNews?.content ? editingNews.content.replace(/<img[^>]*>/gi, "").trim() : ""}
                  className="w-full p-3 rounded-md border border-gray-200 text-sm focus:ring-2 focus:ring-[#1e3a8a] outline-none"
                  placeholder="Tulis isi berita di sini..."
                ></textarea>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t">
                <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
                  Batal
                </Button>
                <Button
                  type="submit"
                  disabled={isSaving || isUpdating}
                  className="bg-[#1e3a8a] text-white hover:bg-[#dc2626]"
                >
                  {(isSaving || isUpdating) ? (
                    <Loader2 size={16} className="animate-spin mr-2" />
                  ) : (
                    <CheckCircle2 size={16} className="mr-2" />
                  )}
                  {editingNews ? "Simpan Perubahan" : "Terbitkan Berita"}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
