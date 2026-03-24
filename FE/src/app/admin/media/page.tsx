"use client";

import { useState } from "react";
import {
  Plus,
  Search,
  MoreHorizontal,
  Pencil,
  Trash2,
  Loader2,
  AlertCircle,
  X,
  CheckCircle2,
  Upload,
  Image as ImageIcon,
  Video,
  Link2,
  Calendar,
  Eye,
  ExternalLink,
} from "lucide-react";
import { motion } from "motion/react";
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
  useGalleryAlbums,
  useCreateAlbum,
  useUpdateAlbum,
  useDeleteAlbum,
  useUploadFile,
} from "@/lib/hooks";

const CATEGORY_OPTIONS = [
  { value: "Kegiatan", label: "Kegiatan" },
  { value: "Publikasi", label: "Publikasi" },
  { value: "Ibadah", label: "Ibadah" },
  { value: "Kampus", label: "Kampus" },
  { value: "Lainnya", label: "Lainnya" },
];

const TYPE_OPTIONS = [
  { value: "Artikel", label: "Artikel / Foto", icon: ImageIcon },
  { value: "Video", label: "Video", icon: Video },
];

const typeBadgeColors: Record<string, string> = {
  Artikel: "bg-blue-50 text-[#1e3a8a] border-blue-100",
  Video: "bg-purple-50 text-purple-700 border-purple-100",
};

const categoryBadgeColors: Record<string, string> = {
  Kegiatan: "bg-green-50 text-green-700 border-green-100",
  Publikasi: "bg-amber-50 text-amber-700 border-amber-100",
  Ibadah: "bg-indigo-50 text-indigo-700 border-indigo-100",
  Kampus: "bg-cyan-50 text-cyan-700 border-cyan-100",
  Lainnya: "bg-gray-50 text-gray-600 border-gray-200",
};

export default function MediaCMSPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("Semua");
  const [filterType, setFilterType] = useState("Semua");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [selectedType, setSelectedType] = useState("Artikel");

  const { data: albums, loading, error, refetch } = useGalleryAlbums();
  const { mutate: deleteAlbum, loading: isDeleting } = useDeleteAlbum();
  const { mutate: createAlbum, loading: isSaving } = useCreateAlbum();
  const { mutate: updateAlbum, loading: isUpdating } = useUpdateAlbum();
  const { mutate: uploadFile, loading: isUploading } = useUploadFile();

  const handleDelete = async (id: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus media ini?")) {
      await deleteAlbum(id);
      refetch();
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    try {
      const res = (await uploadFile(files[0])) as any;
      if (res.success && res.url) {
        setCoverImageUrl(res.url);
      }
    } catch (err) {
      console.error("Upload failed", err);
      alert("Gagal mengunggah file.");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    const payload = {
      title: fd.get("title") as string,
      description: (fd.get("description") as string) || undefined,
      category: (fd.get("category") as string) || undefined,
      type: selectedType || undefined,
      coverImage: coverImageUrl || undefined,
      url: (fd.get("url") as string) || undefined,
      eventDate: (fd.get("eventDate") as string) || undefined,
    };

    try {
      if (editingItem) {
        await updateAlbum({ ...payload, id: editingItem.id });
      } else {
        await createAlbum(payload);
      }
      closeResetModal();
      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  const openEdit = (item: any) => {
    setEditingItem(item);
    setCoverImageUrl(item.coverImage || "");
    setSelectedType(item.type || "Artikel");
    setIsModalOpen(true);
  };

  const closeResetModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
    setCoverImageUrl("");
    setSelectedType("Artikel");
  };

  const filteredAlbums =
    albums?.filter((a) => {
      const matchSearch =
        a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (a.description || "").toLowerCase().includes(searchTerm.toLowerCase());
      const matchCategory = filterCategory === "Semua" || a.category === filterCategory;
      const matchType = filterType === "Semua" || a.type === filterType;
      return matchSearch && matchCategory && matchType;
    }) || [];

  // Stats
  const totalAlbums = albums?.length || 0;
  const totalFoto = albums?.filter((a) => a.type === "Artikel").length || 0;
  const totalVideo = albums?.filter((a) => a.type === "Video").length || 0;

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="border border-gray-100 shadow-sm">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center">
              <ImageIcon size={22} className="text-[#1e3a8a]" />
            </div>
            <div>
              <p className="text-2xl font-black text-[#0a1930]">{totalAlbums}</p>
              <p className="text-xs font-medium text-gray-500">Total Media</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border border-gray-100 shadow-sm">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-green-50 flex items-center justify-center">
              <ImageIcon size={22} className="text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-black text-[#0a1930]">{totalFoto}</p>
              <p className="text-xs font-medium text-gray-500">Artikel / Foto</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border border-gray-100 shadow-sm">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-purple-50 flex items-center justify-center">
              <Video size={22} className="text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-black text-[#0a1930]">{totalVideo}</p>
              <p className="text-xs font-medium text-gray-500">Video</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-bold text-[#1e3a8a] flex items-center gap-2">
          <ImageIcon size={24} />
          Manajemen Media
        </h2>
        <div className="flex items-center gap-2 flex-wrap">
          {/* Filter Category */}
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="h-9 px-3 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] cursor-pointer"
          >
            <option value="Semua">Semua Kategori</option>
            {CATEGORY_OPTIONS.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>

          {/* Filter Type */}
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="h-9 px-3 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] cursor-pointer"
          >
            <option value="Semua">Semua Tipe</option>
            {TYPE_OPTIONS.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>

          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Cari media..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-9 w-48 lg:w-56 pl-8 bg-white border-gray-200 text-sm"
            />
          </div>
          <Button
            onClick={() => {
              setEditingItem(null);
              setCoverImageUrl("");
              setSelectedType("Artikel");
              setIsModalOpen(true);
            }}
            className="bg-[#1e3a8a] text-white hover:bg-[#dc2626] transition-colors h-9"
          >
            <Plus size={16} />
            <span className="hidden sm:inline ml-1">Tambah Media</span>
          </Button>
        </div>
      </div>

      {/* Table */}
      <Card className="border border-gray-100 shadow-sm overflow-hidden">
        <CardContent className="p-0">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="animate-spin text-[#1e3a8a] mb-2" size={32} />
              <p className="text-gray-500 text-sm">Memuat data media...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-20 text-red-500">
              <AlertCircle size={32} className="mb-2" />
              <p>{error}</p>
              <Button variant="link" onClick={() => refetch()} className="text-[#1e3a8a]">
                Coba Lagi
              </Button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50/80 hover:bg-gray-50/80 text-nowrap">
                    <TableHead className="text-xs font-semibold text-gray-500 uppercase px-4 w-12">
                      #
                    </TableHead>
                    <TableHead className="text-xs font-semibold text-gray-500 uppercase px-4 w-20">
                      Cover
                    </TableHead>
                    <TableHead className="text-xs font-semibold text-gray-500 uppercase px-6">
                      Judul
                    </TableHead>
                    <TableHead className="text-xs font-semibold text-gray-500 uppercase px-4">
                      Kategori
                    </TableHead>
                    <TableHead className="text-xs font-semibold text-gray-500 uppercase px-4">
                      Tipe
                    </TableHead>
                    <TableHead className="text-xs font-semibold text-gray-500 uppercase px-4 hidden md:table-cell">
                      Tanggal
                    </TableHead>
                    <TableHead className="text-xs font-semibold text-gray-500 uppercase px-4 text-center w-10">
                      Aksi
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAlbums.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-10">
                        <div className="flex flex-col items-center justify-center text-gray-400">
                          <ImageIcon size={40} className="mb-3 text-gray-300" />
                          <p>Belum ada media.</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredAlbums.map((item, idx) => (
                      <TableRow key={item.id} className="group hover:bg-blue-50/50">
                        <TableCell className="px-4 font-medium text-gray-500">
                          {idx + 1}
                        </TableCell>
                        <TableCell className="px-4">
                          <div className="w-16 h-10 rounded-lg overflow-hidden border border-gray-100 bg-gray-50">
                            {item.coverImage ? (
                              <ImageWithFallback
                                src={item.coverImage}
                                alt={item.title}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                                {item.type === "Video" ? (
                                  <Video size={18} />
                                ) : (
                                  <ImageIcon size={18} />
                                )}
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="px-6">
                          <div className="flex flex-col">
                            <span className="font-bold text-[#0a1930] text-sm">
                              {item.title}
                            </span>
                            {item.description && (
                              <span className="text-xs text-gray-400 truncate max-w-[200px]">
                                {item.description}
                              </span>
                            )}
                            {item.url && (
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[10px] text-[#1e3a8a] hover:underline flex items-center gap-0.5 mt-0.5"
                              >
                                <ExternalLink size={10} /> Link
                              </a>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="px-4">
                          <Badge
                            variant="outline"
                            className={`text-[10px] font-bold uppercase tracking-wider ${
                              categoryBadgeColors[item.category || ""] || "bg-gray-50 text-gray-600"
                            }`}
                          >
                            {item.category || "-"}
                          </Badge>
                        </TableCell>
                        <TableCell className="px-4">
                          <Badge
                            variant="outline"
                            className={`text-[10px] font-bold uppercase tracking-wider ${
                              typeBadgeColors[item.type || ""] || "bg-gray-50 text-gray-600"
                            }`}
                          >
                            {item.type === "Video" ? (
                              <Video size={10} className="mr-0.5" />
                            ) : (
                              <ImageIcon size={10} className="mr-0.5" />
                            )}
                            {item.type || "-"}
                          </Badge>
                        </TableCell>
                        <TableCell className="px-4 text-sm text-gray-500 hidden md:table-cell">
                          {item.eventDate
                            ? new Date(item.eventDate).toLocaleDateString("id-ID", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })
                            : "-"}
                        </TableCell>
                        <TableCell className="px-4 text-center">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <span className="sr-only">Buka menu</span>
                                <MoreHorizontal size={16} className="text-gray-500" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                              align="end"
                              className="w-36 rounded-xl shadow-lg border-gray-100"
                            >
                              <DropdownMenuItem
                                onClick={() => openEdit(item)}
                                className="cursor-pointer text-gray-700 font-medium"
                              >
                                <Pencil className="mr-2.5 h-4 w-4 text-[#1e3a8a]" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => handleDelete(item.id)}
                                className="cursor-pointer text-red-600 font-medium hover:bg-red-50 focus:bg-red-50"
                                disabled={isDeleting}
                              >
                                <Trash2 className="mr-2.5 h-4 w-4" />
                                Hapus
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

      {/* ===== MODAL FORM ===== */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeResetModal}
          ></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
              <h3 className="font-bold text-lg text-[#0a1930] flex items-center gap-2">
                {editingItem ? (
                  <>
                    <Pencil size={20} className="text-[#1e3a8a]" />
                    Edit Media
                  </>
                ) : (
                  <>
                    <Plus size={20} className="text-[#1e3a8a]" />
                    Tambah Media Baru
                  </>
                )}
              </h3>
              <button
                onClick={closeResetModal}
                className="text-gray-400 hover:text-gray-600 p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="overflow-y-auto p-6 space-y-6">
              {/* Cover Image Upload */}
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">
                  Cover Image
                </label>
                <div className="flex items-start gap-4">
                  <div className="w-40 h-24 rounded-xl overflow-hidden bg-gray-100 border-2 border-dashed border-gray-300 relative group flex-shrink-0">
                    {coverImageUrl ? (
                      <ImageWithFallback
                        src={coverImageUrl}
                        alt="Cover Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                        <ImageIcon size={24} />
                        <span className="text-[10px] mt-1">Upload</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Upload className="text-white" size={20} />
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={handleFileUpload}
                      disabled={isUploading}
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-xs text-gray-500">
                      Klik area di samping atau drag & drop gambar cover.
                    </p>
                    {isUploading && (
                      <span className="text-xs text-blue-500 font-medium animate-pulse flex items-center gap-1">
                        <Loader2 size={12} className="animate-spin" /> Mengunggah...
                      </span>
                    )}
                    {coverImageUrl && (
                      <button
                        type="button"
                        onClick={() => setCoverImageUrl("")}
                        className="text-xs text-red-500 hover:underline"
                      >
                        Hapus gambar
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 block">
                  Judul Media <span className="text-red-500">*</span>
                </label>
                <Input
                  name="title"
                  required
                  placeholder='Contoh: "Wisuda 2025" atau "Khotbah Minggu"'
                  defaultValue={editingItem?.title}
                  className="bg-gray-50"
                />
              </div>

              {/* Description */}
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 block">
                  Deskripsi
                </label>
                <textarea
                  name="description"
                  placeholder="Deskripsi singkat tentang media ini..."
                  defaultValue={editingItem?.description}
                  className="w-full min-h-[80px] bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-all"
                ></textarea>
              </div>

              {/* Category & Type */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 block">
                    Kategori
                  </label>
                  <select
                    name="category"
                    defaultValue={editingItem?.category || ""}
                    className="w-full h-10 px-3 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                  >
                    <option value="">Pilih kategori</option>
                    {CATEGORY_OPTIONS.map((c) => (
                      <option key={c.value} value={c.value}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 block">
                    Tipe Media
                  </label>
                  <div className="flex gap-2">
                    {TYPE_OPTIONS.map((t) => {
                      const Icon = t.icon;
                      return (
                        <button
                          key={t.value}
                          type="button"
                          onClick={() => setSelectedType(t.value)}
                          className={`flex-1 h-10 rounded-lg border text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
                            selectedType === t.value
                              ? "bg-[#1e3a8a] text-white border-[#1e3a8a]"
                              : "bg-gray-50 text-gray-600 border-gray-200 hover:border-[#1e3a8a]"
                          }`}
                        >
                          <Icon size={14} />
                          {t.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* URL (for Video type) */}
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 block">
                  URL {selectedType === "Video" ? "(link YouTube / embed)" : "(opsional)"}
                </label>
                <div className="relative">
                  <Link2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    name="url"
                    placeholder="https://youtube.com/..."
                    defaultValue={editingItem?.url}
                    className="bg-gray-50 pl-9"
                  />
                </div>
              </div>

              {/* Event Date */}
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 block">
                  Tanggal Kegiatan
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    name="eventDate"
                    type="date"
                    defaultValue={
                      editingItem?.eventDate
                        ? new Date(editingItem.eventDate).toISOString().split("T")[0]
                        : ""
                    }
                    className="bg-gray-50 pl-9"
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="flex justify-end gap-3 pt-6 border-t border-gray-100 mt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={closeResetModal}
                  className="font-bold rounded-xl"
                  disabled={isSaving || isUpdating}
                >
                  Batal
                </Button>
                <Button
                  type="submit"
                  className="bg-[#1e3a8a] hover:bg-[#0a1930] text-white font-bold rounded-xl flex items-center gap-2 px-6"
                  disabled={isSaving || isUpdating || isUploading}
                >
                  {isSaving || isUpdating ? (
                    <>
                      <Loader2 className="animate-spin h-4 w-4" />
                      Menyimpan...
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      Simpan Media
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
