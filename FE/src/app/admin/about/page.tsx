"use client";

import { useState } from "react";
import { Save, Upload, Plus, Pencil, Trash2, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Badge } from "@/app/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Label } from "@/app/components/ui/label";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/app/components/ui/dialog";
import { Loader2 } from "lucide-react";
import { type Lecturer, type Staff } from "@/lib/api";
import { useLecturers, useCreateLecturer, useUpdateLecturer, useDeleteLecturer, useStaff, useCreateStaff, useUpdateStaff, useDeleteStaff } from "@/lib/hooks";

export default function AboutPage() {
  const { data: lecturers, loading: loadingLecturers, refetch: refetchLecturers } = useLecturers();
  const { mutate: createLecturer, loading: isCreatingLecturer } = useCreateLecturer();
  const { mutate: updateLecturer, loading: isUpdatingLecturer } = useUpdateLecturer();
  const { mutate: deleteLecturer } = useDeleteLecturer();

  const { data: staff, loading: loadingStaff, refetch: refetchStaff } = useStaff();
  const { mutate: createStaff, loading: isCreatingStaff } = useCreateStaff();
  const { mutate: updateStaff, loading: isUpdatingStaff } = useUpdateStaff();
  const { mutate: deleteStaff } = useDeleteStaff();

  const [isLecturerDialogOpen, setIsLecturerDialogOpen] = useState(false);
  const [editingLecturer, setEditingLecturer] = useState<Lecturer | null>(null);
  const [lecturerFormData, setLecturerFormData] = useState({ name: "", nidn: "", position: "", educationLevel: "", expertise: "", email: "", photo: "" });

  const [isStaffDialogOpen, setIsStaffDialogOpen] = useState(false);
  const [editingStaff, setEditingStaff] = useState<Staff | null>(null);
  const [staffFormData, setStaffFormData] = useState({ name: "", position: "", email: "", photo: "" });

  const handleOpenAddLecturer = () => {
    setEditingLecturer(null);
    setLecturerFormData({ name: "", nidn: "", position: "", educationLevel: "", expertise: "", email: "", photo: "" });
    setIsLecturerDialogOpen(true);
  };

  const handleOpenEditLecturer = (dosen: Lecturer) => {
    setEditingLecturer(dosen);
    setLecturerFormData({ name: dosen.name, nidn: dosen.nidn || "", position: dosen.position || "", educationLevel: dosen.educationLevel || "", expertise: dosen.expertise || "", email: dosen.email || "", photo: dosen.photo || "" });
    setIsLecturerDialogOpen(true);
  };

  const handleLecturerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingLecturer) {
      await updateLecturer({ ...lecturerFormData, id: editingLecturer.id });
    } else {
      await createLecturer(lecturerFormData);
    }
    setIsLecturerDialogOpen(false);
    refetchLecturers();
  };

  const handleDeleteLecturer = async (id: number) => {
    if (window.confirm("Yakin ingin menghapus dosen ini?")) {
      await deleteLecturer(id);
      refetchLecturers();
    }
  };

  const handleOpenAddStaff = () => {
    setEditingStaff(null);
    setStaffFormData({ name: "", position: "", email: "", photo: "" });
    setIsStaffDialogOpen(true);
  };

  const handleOpenEditStaff = (s: Staff) => {
    setEditingStaff(s);
    setStaffFormData({ name: s.name, position: s.position || "", email: s.email || "", photo: s.photo || "" });
    setIsStaffDialogOpen(true);
  };

  const handleStaffSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingStaff) {
      await updateStaff({ ...staffFormData, id: editingStaff.id });
    } else {
      await createStaff(staffFormData);
    }
    setIsStaffDialogOpen(false);
    refetchStaff();
  };

  const handleDeleteStaff = async (id: number) => {
    if (window.confirm("Yakin ingin menghapus staff ini?")) {
      await deleteStaff(id);
      refetchStaff();
    }
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="visi-misi" className="w-full">
        <TabsList className="bg-gray-100 p-1 h-auto flex-wrap">
          <TabsTrigger value="visi-misi" className="data-[state=active]:bg-[#1e3a8a] data-[state=active]:text-white text-sm">
            Visi & Misi
          </TabsTrigger>
          <TabsTrigger value="sejarah" className="data-[state=active]:bg-[#1e3a8a] data-[state=active]:text-white text-sm">
            Sejarah
          </TabsTrigger>
          <TabsTrigger value="dosen" className="data-[state=active]:bg-[#1e3a8a] data-[state=active]:text-white text-sm">
            Dewan Dosen
          </TabsTrigger>
          <TabsTrigger value="yayasan" className="data-[state=active]:bg-[#1e3a8a] data-[state=active]:text-white text-sm">
            Yayasan
          </TabsTrigger>
          <TabsTrigger value="staff" className="data-[state=active]:bg-[#1e3a8a] data-[state=active]:text-white text-sm">
            Tenaga Kependidikan
          </TabsTrigger>
        </TabsList>

        {/* Visi & Misi */}
        <TabsContent value="visi-misi" className="mt-6 space-y-4">
          <Card className="border border-gray-100 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Visi</CardTitle>
            </CardHeader>
            <CardContent>
              <textarea
                className="w-full min-h-[120px] p-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/10 transition-all resize-y"
                defaultValue="Menjadi komunitas akademis Kristen yang menghasilkan pastor-scholars yang berkualitas, berkarakter, dan berdampak bagi transformasi gereja dan masyarakat."
              />
            </CardContent>
          </Card>
          <Card className="border border-gray-100 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Misi</CardTitle>
            </CardHeader>
            <CardContent>
              <textarea
                className="w-full min-h-[200px] p-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/10 transition-all resize-y"
                defaultValue={"1. Menyelenggarakan pendidikan teologi yang berkualitas tinggi\n2. Mempersiapkan pastor-scholars yang transformatif untuk pelayanan urban\n3. Mengembangkan penelitian teologi yang kontekstual\n4. Membangun komunitas akademik yang inklusif dan inovatif"}
              />
            </CardContent>
          </Card>
          <div className="flex justify-end">
            <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90">
              <Save size={16} />
              Simpan Perubahan
            </Button>
          </div>
        </TabsContent>

        {/* Sejarah */}
        <TabsContent value="sejarah" className="mt-6">
          <Card className="border border-gray-100 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Konten Sejarah</CardTitle>
              <CardDescription>Edit konten halaman sejarah STTB</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-sm">Tahun Berdiri</Label>
                <Input defaultValue="1955" className="bg-gray-50 focus:bg-white" />
              </div>
              <div className="space-y-2">
                <Label className="text-sm">Konten Sejarah</Label>
                <textarea
                  className="w-full min-h-[300px] p-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/10 transition-all resize-y"
                  defaultValue="Sekolah Tinggi Teologi Bandung (STTB) didirikan pada tahun 1955 oleh para tokoh gereja yang memiliki visi untuk mempersiapkan hamba-hamba Tuhan yang berkualitas..."
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm">Foto Sejarah</Label>
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
                  <Upload size={24} className="mx-auto text-gray-300 mb-2" />
                  <p className="text-xs text-gray-400">Upload foto sejarah</p>
                </div>
              </div>
              <div className="flex justify-end">
                <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90">
                  <Save size={16} />
                  Simpan
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Dewan Dosen */}
        <TabsContent value="dosen" className="mt-6 space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">{lecturers?.length || 0} dosen terdaftar</p>
            <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90" size="sm" onClick={handleOpenAddLecturer}>
              <Plus size={16} />
              Tambah Dosen
            </Button>
          </div>
          {loadingLecturers ? (
            <div className="flex items-center justify-center p-8 text-gray-500">
              <Loader2 className="mr-2 h-6 w-6 animate-spin" /> Memuat data...
            </div>
          ) : lecturers?.length === 0 ? (
            <div className="text-center p-8 text-gray-400 border rounded bg-white">Belum ada data dosen.</div>
          ) : (
            lecturers?.map((dosen) => (
              <Card key={dosen.id} className="border border-gray-100 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400 text-lg font-bold">
                        {dosen.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{dosen.name}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          {dosen.position && (
                            <Badge variant="secondary" className="bg-blue-50 text-[#1e3a8a] text-xs">
                              {dosen.position}
                            </Badge>
                          )}
                          <span className="text-xs text-gray-400">{dosen.expertise || dosen.educationLevel}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-[#1e3a8a]" onClick={() => handleOpenEditLecturer(dosen)}>
                        <Pencil size={14} />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-[#dc2626]" onClick={() => handleDeleteLecturer(dosen.id)}>
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>

        {/* Yayasan */}
        <TabsContent value="yayasan" className="mt-6 space-y-4">
          <Card className="border border-gray-100 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Pengurus Yayasan</CardTitle>
            </CardHeader>
            <CardContent>
              <textarea
                className="w-full min-h-[150px] p-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/10 transition-all resize-y"
                defaultValue="Susunan pengurus yayasan..."
              />
              <div className="flex justify-end mt-4">
                <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90">
                  <Save size={16} />
                  Simpan Perubahan
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tenaga Kependidikan / Staff */}
        <TabsContent value="staff" className="mt-6 space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">{staff?.length || 0} staff terdaftar</p>
            <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90" size="sm" onClick={handleOpenAddStaff}>
              <Plus size={16} />
              Tambah Staff
            </Button>
          </div>
          {loadingStaff ? (
            <div className="flex items-center justify-center p-8 text-gray-500">
              <Loader2 className="mr-2 h-6 w-6 animate-spin" /> Memuat data...
            </div>
          ) : staff?.length === 0 ? (
            <div className="text-center p-8 text-gray-400 border rounded bg-white">Belum ada data staff.</div>
          ) : (
            staff?.map((s) => (
              <Card key={s.id} className="border border-gray-100 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400 text-lg font-bold">
                        {s.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{s.name}</p>
                        {s.position && (
                          <Badge variant="secondary" className="bg-blue-50 text-[#1e3a8a] text-xs mt-0.5">
                            {s.position}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-[#1e3a8a]" onClick={() => handleOpenEditStaff(s)}>
                        <Pencil size={14} />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-[#dc2626]" onClick={() => handleDeleteStaff(s.id)}>
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>
      </Tabs>

      {/* Dialog Lecturer */}
      <Dialog open={isLecturerDialogOpen} onOpenChange={setIsLecturerDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{editingLecturer ? "Edit Dosen" : "Tambah Dosen Baru"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleLecturerSubmit} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nama Lengkap <span className="text-red-500">*</span></Label>
              <Input id="name" value={lecturerFormData.name} onChange={(e) => setLecturerFormData({...lecturerFormData, name: e.target.value})} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nidn">NIDN</Label>
              <Input id="nidn" value={lecturerFormData.nidn} onChange={(e) => setLecturerFormData({...lecturerFormData, nidn: e.target.value})} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="position">Jabatan</Label>
              <Input id="position" value={lecturerFormData.position} onChange={(e) => setLecturerFormData({...lecturerFormData, position: e.target.value})} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="education">Tingkat Pendidikan</Label>
              <Input id="education" value={lecturerFormData.educationLevel} onChange={(e) => setLecturerFormData({...lecturerFormData, educationLevel: e.target.value})} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expertise">Bidang Keahlian</Label>
              <Input id="expertise" value={lecturerFormData.expertise} onChange={(e) => setLecturerFormData({...lecturerFormData, expertise: e.target.value})} />
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsLecturerDialogOpen(false)}>Batal</Button>
              <Button type="submit" disabled={isCreatingLecturer || isUpdatingLecturer} className="bg-[#1e3a8a] text-white">
                {(isCreatingLecturer || isUpdatingLecturer) && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Simpan
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Dialog Staff */}
      <Dialog open={isStaffDialogOpen} onOpenChange={setIsStaffDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{editingStaff ? "Edit Staff" : "Tambah Staff Baru"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleStaffSubmit} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="staff_name">Nama Lengkap <span className="text-red-500">*</span></Label>
              <Input id="staff_name" value={staffFormData.name} onChange={(e) => setStaffFormData({...staffFormData, name: e.target.value})} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="staff_position">Jabatan/Posisi</Label>
              <Input id="staff_position" value={staffFormData.position} onChange={(e) => setStaffFormData({...staffFormData, position: e.target.value})} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="staff_email">Email</Label>
              <Input id="staff_email" type="email" value={staffFormData.email} onChange={(e) => setStaffFormData({...staffFormData, email: e.target.value})} />
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsStaffDialogOpen(false)}>Batal</Button>
              <Button type="submit" disabled={isCreatingStaff || isUpdatingStaff} className="bg-[#1e3a8a] text-white">
                {(isCreatingStaff || isUpdatingStaff) && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Simpan
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

