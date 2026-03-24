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
  MessageSquareQuote,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
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
  useTestimonials,
  useCreateTestimonial,
  useUpdateTestimonial,
  useDeleteTestimonial,
  useUploadFile,
} from "@/lib/hooks";

export default function TestimonialsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [photoUrl, setPhotoUrl] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);

  const { data: testimonials, loading, error, refetch } = useTestimonials();
  const { mutate: deleteTestimonial, loading: isDeleting } = useDeleteTestimonial();
  const { mutate: createTestimonial, loading: isSaving } = useCreateTestimonial();
  const { mutate: updateTestimonial, loading: isUpdating } = useUpdateTestimonial();
  const { mutate: uploadFile, loading: isUploading } = useUploadFile();

  const handleDelete = async (id: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus testimonial ini?")) {
      await deleteTestimonial(id);
      refetch();
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    try {
      const res = (await uploadFile(files[0])) as any;
      if (res.success && res.url) {
        setPhotoUrl(res.url);
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
      alumniName: fd.get("alumniName") as string,
      graduationYear: fd.get("graduationYear") ? parseInt(fd.get("graduationYear") as string) : undefined,
      currentJob: (fd.get("currentJob") as string) || undefined,
      photo: photoUrl || undefined,
      testimonialText: fd.get("testimonialText") as string,
      isFeatured: isFeatured,
    };

    try {
      if (editingItem) {
        await updateTestimonial({ ...payload, id: editingItem.id });
      } else {
        await createTestimonial(payload);
      }
      closeResetModal();
      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  const openEdit = (item: any) => {
    setEditingItem(item);
    setPhotoUrl(item.photo || "");
    setIsFeatured(item.isFeatured || false);
    setIsModalOpen(true);
  };

  const closeResetModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
    setPhotoUrl("");
    setIsFeatured(false);
  };

  const filteredTestimonials =
    testimonials?.filter((t) =>
      t.alumniName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.testimonialText.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <div className="space-y-6">
      {/* Toolbar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-bold text-[#1e3a8a] flex items-center gap-2">
          <MessageSquareQuote size={24} />
          Manajemen Testimoni
        </h2>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Cari saksi / nama..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-9 w-48 lg:w-64 pl-8 bg-white border-gray-200 text-sm"
            />
          </div>
          <Button
            onClick={() => {
              setEditingItem(null);
              setPhotoUrl("");
              setIsFeatured(false);
              setIsModalOpen(true);
            }}
            className="bg-[#1e3a8a] text-white hover:bg-[#dc2626] transition-colors h-9"
          >
            <Plus size={16} />
            <span className="hidden sm:inline ml-1">Tambah Testimoni</span>
          </Button>
        </div>
      </div>

      {/* Tables */}
      <Card className="border border-gray-100 shadow-sm overflow-hidden">
        <CardContent className="p-0">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="animate-spin text-[#1e3a8a] mb-2" size={32} />
              <p className="text-gray-500 text-sm">Memuat data testimoni...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-20 text-red-500">
              <AlertCircle size={32} className="mb-2" />
              <p>{error}</p>
              <Button
                variant="link"
                onClick={() => refetch()}
                className="text-[#1e3a8a]"
              >
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
                      Foto
                    </TableHead>
                    <TableHead className="text-xs font-semibold text-gray-500 uppercase px-6">
                      Nama Alumni
                    </TableHead>
                    <TableHead className="text-xs font-semibold text-gray-500 uppercase px-4">
                      Tahun/Pekerjaan
                    </TableHead>
                    <TableHead className="text-xs font-semibold text-gray-500 uppercase px-4 hidden md:table-cell">
                      Cuplikan Testimoni
                    </TableHead>
                    <TableHead className="text-xs font-semibold text-gray-500 uppercase px-4 text-center w-10">
                      Aksi
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTestimonials.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-10">
                        <div className="flex flex-col items-center justify-center text-gray-400">
                          <MessageSquareQuote size={40} className="mb-3 text-gray-300" />
                          <p>Belum ada testimoni.</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredTestimonials.map((t, idx) => (
                      <TableRow key={t.id} className="group hover:bg-blue-50/50">
                        <TableCell className="px-4 font-medium text-gray-500">
                          {idx + 1}
                        </TableCell>
                        <TableCell className="px-4">
                          <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100 bg-gray-50">
                            {t.photo ? (
                              <ImageWithFallback
                                src={t.photo}
                                alt={t.alumniName}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                                <Users size={20} />
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="px-6 font-bold text-[#0a1930]">
                          <div className="flex flex-col">
                            <span>{t.alumniName}</span>
                            {t.isFeatured && (
                              <span className="text-[10px] uppercase font-black tracking-wider text-[#dc2626]">
                                Featured
                              </span>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="px-4 text-sm text-gray-600 font-medium">
                          {t.currentJob || "-"} {t.graduationYear ? `(${t.graduationYear})` : ""}
                        </TableCell>
                        <TableCell className="px-4 text-sm text-gray-500 hidden md:table-cell max-w-xs truncate">
                          {t.testimonialText}
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
                            <DropdownMenuContent align="end" className="w-36 rounded-xl shadow-lg border-gray-100">
                              <DropdownMenuItem
                                onClick={() => openEdit(t)}
                                className="cursor-pointer text-gray-700 font-medium"
                              >
                                <Pencil className="mr-2.5 h-4 w-4 text-[#1e3a8a]" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => handleDelete(t.id)}
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

      {/* Modal / Dialog Form untuk Tambah/Edit */}
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
                    Edit Testimoni
                  </>
                ) : (
                  <>
                    <Plus size={20} className="text-[#1e3a8a]" />
                    Tambah Testimoni Baru
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

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="overflow-y-auto p-6 space-y-6">
              
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Photo Upload Area */}
                <div className="flex flex-col gap-2 w-full sm:w-1/3">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                    Foto Profil
                  </label>
                  <div className="mt-1 flex flex-col items-center gap-3">
                    <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 border-2 border-dashed border-gray-300 relative group flex-shrink-0">
                      {photoUrl ? (
                        <ImageWithFallback
                          src={photoUrl}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                          <Users size={32} />
                        </div>
                      )}
                      {/* Overlay upload */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Upload className="text-white" size={24} />
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={handleFileUpload}
                        disabled={isUploading}
                      />
                    </div>
                    {isUploading && (
                      <span className="text-xs text-blue-500 font-medium animate-pulse flex items-center gap-1">
                        <Loader2 size={12} className="animate-spin" /> Mengunggah...
                      </span>
                    )}
                  </div>
                </div>

                {/* Main Fields */}
                <div className="flex-1 space-y-4">
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 block">
                      Nama Alumni <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="alumniName"
                      required
                      placeholder="Contoh: Pdt. Budi Santoso"
                      defaultValue={editingItem?.alumniName}
                      className="bg-gray-50"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 block">
                        Tahun Lulus
                      </label>
                      <Input
                        name="graduationYear"
                        type="number"
                        placeholder="Contoh: 2021"
                        defaultValue={editingItem?.graduationYear}
                        className="bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 block">
                        Pekerjaan/Gelar
                      </label>
                      <Input
                        name="currentJob"
                        placeholder="Contoh: S.Th"
                        defaultValue={editingItem?.currentJob}
                        className="bg-gray-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 block">
                      Teks Kesaksian <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="testimonialText"
                      required
                      placeholder="Ceritakan kesaksian dan pengalaman..."
                      defaultValue={editingItem?.testimonialText}
                      className="w-full min-h-[120px] bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-all"
                    ></textarea>
                  </div>

                  {/* Checkbox IsFeatured (Optional) */}
                  <div className="flex items-center gap-2 pt-2">
                    <input 
                      type="checkbox" 
                      id="isFeatured" 
                      className="rounded text-[#1e3a8a] focus:ring-[#1e3a8a] w-4 h-4"
                      checked={isFeatured}
                      onChange={(e) => setIsFeatured(e.target.checked)}
                    />
                    <label htmlFor="isFeatured" className="text-sm font-medium text-gray-700 cursor-pointer">
                      Jadikan prioritas utama (Featured)
                    </label>
                  </div>

                </div>
              </div>

              {/* Footer Actions */}
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
                      Simpan Testimoni
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
