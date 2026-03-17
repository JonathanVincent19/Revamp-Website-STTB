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
} from "lucide-react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Badge } from "@/app/components/ui/badge";
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
import { useNewsList, useDeleteNews, useCreateNews, useUpdateNews } from "@/lib/hooks";

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const title = fd.get("title") as string;
    
    // Gunakan slug lama jika sedang edit dan judul tidak berubah, atau generate baru
    const slug = editingNews && editingNews.title === title 
      ? editingNews.slug 
      : generateSlug(title);

    const payload = {
      title,
      slug,
      content: fd.get("content") as string,
      status: "published", // Default to published when status management is disabled
      author: "Admin",
      categoryId: 1, // Default category for now
    };

    try {
      if (editingNews) {
        await updateNews({ ...payload, id: editingNews.id });
      } else {
        await createNews(payload);
      }
      setIsModalOpen(false);
      setEditingNews(null);
      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  const openEdit = (news: any) => {
    setEditingNews(news);
    setIsModalOpen(true);
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
            onClick={() => { setEditingNews(null); setIsModalOpen(true); }}
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
              <Button variant="ghost" size="icon" onClick={() => setIsModalOpen(false)}>
                <X size={20} />
              </Button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
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


              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Konten Berita</label>
                <textarea 
                  name="content"
                  required
                  rows={8}
                  defaultValue={editingNews?.content}
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
