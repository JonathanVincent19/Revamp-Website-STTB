"use client";

import { useState, useEffect } from "react";
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
  useLecturers,
  useCreateLecturer,
  useUpdateLecturer,
  useDeleteLecturer,
  useUploadFile,
} from "@/lib/hooks";

export default function DosenPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingLecturer, setEditingLecturer] = useState<any>(null);

  const { data: lecturers, loading, error, refetch } = useLecturers();
  const { mutate: deleteLecturer, loading: isDeleting } = useDeleteLecturer();
  const { mutate: createLecturer, loading: isSaving } = useCreateLecturer();
  const { mutate: updateLecturer, loading: isUpdating } = useUpdateLecturer();
  const { mutate: uploadFile, loading: isUploading } = useUploadFile();

  const [photoUrl, setPhotoUrl] = useState("");

  const handleDelete = async (id: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus dosen ini?")) {
      await deleteLecturer(id);
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
      name: fd.get("name") as string,
      photo: photoUrl || undefined,
      position: (fd.get("position") as string) || undefined,
      educationLevel: (fd.get("educationLevel") as string) || undefined,
      expertise: (fd.get("expertise") as string) || undefined,
      sortOrder: parseInt(fd.get("sortOrder") as string) || 0,
    };

    try {
      if (editingLecturer) {
        await updateLecturer({ ...payload, id: editingLecturer.id });
      } else {
        await createLecturer(payload);
      }
      closeResetModal();
      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  const openEdit = (lecturer: any) => {
    setEditingLecturer(lecturer);
    setPhotoUrl(lecturer.photo || "");
    setIsModalOpen(true);
  };

  const closeResetModal = () => {
    setIsModalOpen(false);
    setEditingLecturer(null);
    setPhotoUrl("");
  };

  const filteredLecturers =
    lecturers?.filter((l) =>
      l.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <div className="space-y-6">
      {/* Toolbar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-bold text-[#1e3a8a]">Manajemen Dosen</h2>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Cari dosen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-9 w-48 lg:w-64 pl-8 bg-white border-gray-200 text-sm"
            />
          </div>
          <Button
            onClick={() => {
              setEditingLecturer(null);
              setPhotoUrl("");
              setIsModalOpen(true);
            }}
            className="bg-[#1e3a8a] text-white hover:bg-[#dc2626] transition-colors h-9"
          >
            <Plus size={16} />
            <span className="hidden sm:inline ml-1">Tambah Dosen</span>
          </Button>
        </div>
      </div>

      {/* Lecturers Table */}
      <Card className="border border-gray-100 shadow-sm overflow-hidden">
        <CardContent className="p-0">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2
                className="animate-spin text-[#1e3a8a] mb-2"
                size={32}
              />
              <p className="text-gray-500 text-sm">Memuat data dosen...</p>
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
                    <TableHead className="text-xs font-semibold text-gray-500 uppercase px-4">
                      Foto
                    </TableHead>
                    <TableHead className="text-xs font-semibold text-gray-500 uppercase px-6">
                      Nama
                    </TableHead>
                    <TableHead className="text-xs font-semibold text-gray-500 uppercase px-4">
                      Jabatan
                    </TableHead>
                    <TableHead className="text-xs font-semibold text-gray-500 uppercase px-4">
                      Bidang Keahlian
                    </TableHead>
                    <TableHead className="text-xs font-semibold text-gray-500 uppercase px-4 text-center w-10">
                      Aksi
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredLecturers.length === 0 ? (
                    <TableRow>
                      <TableCell
                        colSpan={6}
                        className="text-center py-12 text-gray-400"
                      >
                        Tidak ada dosen ditemukan.
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredLecturers.map((lecturer, idx) => (
                      <TableRow
                        key={lecturer.id}
                        className="hover:bg-gray-50/50"
                      >
                        <TableCell className="text-sm text-gray-400 px-4 font-mono">
                          {lecturer.sortOrder || idx + 1}
                        </TableCell>
                        <TableCell className="px-4">
                          <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-100 border">
                            {lecturer.photo ? (
                              <ImageWithFallback
                                src={lecturer.photo}
                                alt={lecturer.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <Users
                                  size={16}
                                  className="text-gray-300"
                                />
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="font-medium text-gray-900 text-sm px-6 max-w-xs">
                          <div>{lecturer.name}</div>
                        </TableCell>
                        <TableCell className="text-sm text-gray-600 px-4">
                          {lecturer.position || "-"}
                        </TableCell>
                        <TableCell className="text-sm text-gray-600 px-4">
                          {lecturer.expertise || "-"}
                        </TableCell>
                        <TableCell className="px-4 text-center">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-gray-400"
                              >
                                <MoreHorizontal size={16} />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                              align="end"
                              className="w-40"
                            >
                              <DropdownMenuItem
                                className="gap-2"
                                onClick={() => openEdit(lecturer)}
                              >
                                <Pencil size={14} /> Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                className="gap-2 text-[#dc2626] focus:text-[#dc2626]"
                                onClick={() => handleDelete(lecturer.id)}
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
                {editingLecturer ? "Edit Dosen" : "Tambah Dosen Baru"}
              </h3>
              <Button variant="ghost" size="icon" onClick={closeResetModal}>
                <X size={20} />
              </Button>
            </div>

            <form
              key={editingLecturer?.id || "new-lecturer"}
              onSubmit={handleSubmit}
              className="p-6 space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Nama */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    Nama Lengkap *
                  </label>
                  <Input
                    name="name"
                    defaultValue={editingLecturer?.name}
                    required
                    placeholder="Masukkan nama lengkap dosen..."
                  />
                </div>

                {/* Jabatan */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    Jabatan
                  </label>
                  <Input
                    name="position"
                    defaultValue={editingLecturer?.position}
                    placeholder="Contoh: Ketua STTB, Wakil Ketua I"
                  />
                </div>

                {/* Bidang Keahlian */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    Bidang Keahlian
                  </label>
                  <Input
                    name="expertise"
                    defaultValue={editingLecturer?.expertise}
                    placeholder="Contoh: Dosen Teologi Sistematika"
                  />
                </div>

                {/* Pendidikan - Multi-line */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    Riwayat Pendidikan
                  </label>
                  <textarea
                    name="educationLevel"
                    rows={4}
                    defaultValue={editingLecturer?.educationLevel}
                    className="w-full p-3 rounded-md border border-gray-200 text-sm focus:ring-2 focus:ring-[#1e3a8a] outline-none resize-y"
                    placeholder={"Tulis satu pendidikan per baris, contoh:\nPh.D. University of Southern California USA\nM.Th. Calvin Theological Seminary USA\nS.Th. Sekolah Tinggi Teologi Bandung"}
                  />
                  <p className="text-xs text-gray-400 mt-1">Tulis satu riwayat pendidikan per baris. Setiap baris akan ditampilkan terpisah di website.</p>
                </div>

                {/* Sort Order */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    Urutan Tampil
                  </label>
                  <Input
                    name="sortOrder"
                    type="number"
                    defaultValue={editingLecturer?.sortOrder ?? 0}
                    placeholder="0"
                  />
                </div>

                {/* Foto */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    Foto Dosen
                  </label>
                  <div className="flex gap-3 items-start">
                    <div className="relative flex-1">
                      <Input
                        placeholder="Pilih file atau tempel URL..."
                        value={photoUrl}
                        onChange={(e) => setPhotoUrl(e.target.value)}
                        className="pr-10"
                      />
                      <label className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer hover:bg-gray-100 p-1 rounded transition-colors">
                        <Upload size={16} className="text-gray-400" />
                        <input
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleFileUpload}
                        />
                      </label>
                    </div>
                    {photoUrl && (
                      <div className="h-16 w-16 relative group rounded-full border overflow-hidden shrink-0">
                        <ImageWithFallback
                          src={photoUrl}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => setPhotoUrl("")}
                          title="Hapus Foto"
                          className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={closeResetModal}
                >
                  Batal
                </Button>
                <Button
                  type="submit"
                  disabled={isSaving || isUpdating}
                  className="bg-[#1e3a8a] text-white hover:bg-[#dc2626]"
                >
                  {isSaving || isUpdating ? (
                    <Loader2 size={16} className="animate-spin mr-2" />
                  ) : (
                    <CheckCircle2 size={16} className="mr-2" />
                  )}
                  {editingLecturer ? "Simpan Perubahan" : "Tambahkan Dosen"}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
