"use client";

import { Pencil, Eye, GraduationCap, Plus, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/app/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { useAdminPrograms, useCreateProgram, useUpdateProgram, useDeleteProgram } from "@/lib/hooks";
import { useState } from "react";
import type { StudyProgramItem } from "@/lib/api";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { CurriculumManager } from "../components/CurriculumManager";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/app/components/ui/alert-dialog";

export default function ProgramStudiPage() {
  const { data: programs, loading, refetch } = useAdminPrograms();
  const createMutation = useCreateProgram();
  const updateMutation = useUpdateProgram();
  const deleteMutation = useDeleteProgram();

  const [deleteId, setDeleteId] = useState<number | null>(null);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<StudyProgramItem | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    level: "",
    degree: "",
    totalCredits: 0,
    studyDuration: "",
    learningSystem: ""
  });

  const handleDelete = async (id: number) => {
    try {
      await deleteMutation.mutate(id);
      alert("Program studi berhasil dihapus.");
      setDeleteId(null);
      refetch();
    } catch (err) {
      alert("Gagal menghapus program studi.");
    }
  };

  const handleOpenCreate = () => {
    setFormData({
      name: "",
      level: "",
      degree: "",
      totalCredits: 0,
      studyDuration: "",
      learningSystem: ""
    });
    setEditingItem(null);
    setIsDialogOpen(true);
  };

  const handleOpenEdit = (prog: StudyProgramItem) => {
    setFormData({
      name: prog.name,
      level: prog.level,
      degree: prog.degree,
      totalCredits: prog.totalCredits,
      studyDuration: prog.studyDuration,
      learningSystem: prog.learningSystem
    });
    setEditingItem(prog);
    setIsDialogOpen(true);
  };

  const handleSave = async () => {
    try {
      if (editingItem) {
        await updateMutation.mutate({ ...formData, id: editingItem.id });
        alert("Program studi berhasil diperbarui!");
      } else {
        await createMutation.mutate(formData);
        alert("Program studi berhasil ditambahkan!");
      }
      setIsDialogOpen(false);
      refetch();
    } catch (err) {
      alert("Terjadi kesalahan saat menyimpan data.");
    }
  };

  if (loading) return <div className="p-8 text-center text-gray-500">Memuat data program studi...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#0a1930] flex items-center gap-2">
          <GraduationCap size={24} className="text-[#dc2626]" />
          Kelola Program Studi
        </h1>
        <Button onClick={handleOpenCreate} className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90">
          <Plus size={16} className="mr-2" /> Tambah Program
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card className="border border-gray-100 shadow-sm">
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-[#1e3a8a]">{programs?.length || 0}</p>
            <p className="text-sm text-gray-500 mt-1">Total Program</p>
          </CardContent>
        </Card>
        <Card className="border border-gray-100 shadow-sm">
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-green-600">{programs?.filter(p => p.level === "S1").length || 0}</p>
            <p className="text-sm text-gray-500 mt-1">Program S1</p>
          </CardContent>
        </Card>
        <Card className="border border-gray-100 shadow-sm">
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-purple-600">{programs?.filter(p => p.level === "S2").length || 0}</p>
            <p className="text-sm text-gray-500 mt-1">Program S2</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-3">
        {programs?.length === 0 ? (
          <div className="text-center py-10 text-gray-400 bg-white rounded-xl border border-dashed border-gray-200">
            Belum ada program studi yang terdaftar.
          </div>
        ) : (programs || []).map((prog) => (
          <Card key={prog.id} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-4 min-w-0">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${prog.level === "S1" ? "bg-blue-50 text-[#1e3a8a]" : "bg-purple-50 text-purple-600"}`}>
                    <GraduationCap size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900 text-sm truncate">{prog.name} ({prog.degree})</p>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <Badge variant="secondary" className={prog.level === "S1" ? "bg-blue-50 text-[#1e3a8a] text-xs" : "bg-purple-50 text-purple-600 text-xs"}>{prog.level}</Badge>
                      <span className="text-xs text-gray-400">{prog.totalCredits} SKS</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-400">{prog.studyDuration}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-400">{prog.learningSystem}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-green-50 text-green-700 text-xs">Aktif</Badge>
                  <Button variant="outline" size="sm" onClick={() => handleOpenEdit(prog)} className="text-[#1e3a8a] border-[#1e3a8a]/30 h-8"><Pencil size={14} /> Edit</Button>
                  <Button variant="outline" size="sm" onClick={() => setDeleteId(prog.id)} className="text-red-500 border-red-100 hover:bg-red-50 h-8"><Trash2 size={14} /></Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <AlertDialog open={deleteId !== null} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Hapus Program Studi?</AlertDialogTitle>
            <AlertDialogDescription>
              Tindakan ini tidak dapat dibatalkan. Menghapus program studi mungkin berdampak pada data terkait lainnya.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 text-white hover:bg-red-700"
              onClick={() => deleteId && handleDelete(deleteId)}
            >
              Hapus Permanen
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[800px] max-h-[95vh] overflow-y-auto p-0">
          <Tabs defaultValue="info" className="w-full">
            <div className="px-6 pt-6 border-b bg-gray-50/50">
              <DialogHeader className="mb-4">
                <DialogTitle>{editingItem ? `Edit Program: ${editingItem.name}` : "Tambah Program Studi"}</DialogTitle>
              </DialogHeader>
              <TabsList className="grid w-full grid-cols-2 max-w-[400px]">
                <TabsTrigger value="info">Informasi Umum</TabsTrigger>
                <TabsTrigger value="curriculum" disabled={!editingItem}>Kurikulum</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="info" className="p-6 mt-0">
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right font-medium">Nama Program</Label>
                  <Input id="name" className="col-span-3" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="contoh: Pendidikan Kristen" />
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="level" className="text-right font-medium">Jenjang (Level)</Label>
                  <div className="col-span-3">
                    <Select value={formData.level} onValueChange={val => setFormData({ ...formData, level: val })}>
                      <SelectTrigger><SelectValue placeholder="Pilih Jenjang" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="S1">S1 (Sarjana)</SelectItem>
                        <SelectItem value="S2">S2 (Magister)</SelectItem>
                        <SelectItem value="S3">S3 (Doktoral)</SelectItem>
                        <SelectItem value="Non-Degree">Non-Degree / Sertifikasi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="degree" className="text-right font-medium">Gelar</Label>
                  <Input id="degree" className="col-span-3" value={formData.degree} onChange={e => setFormData({ ...formData, degree: e.target.value })} placeholder="contoh: S.Pd.K." />
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="credits" className="text-right font-medium">Total SKS</Label>
                  <Input id="credits" type="number" className="col-span-3" value={formData.totalCredits} onChange={e => setFormData({ ...formData, totalCredits: parseInt(e.target.value) || 0 })} />
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="duration" className="text-right font-medium">Durasi Studi</Label>
                  <Input id="duration" className="col-span-3" value={formData.studyDuration} onChange={e => setFormData({ ...formData, studyDuration: e.target.value })} placeholder="contoh: 4 Tahun (8 Semester)" />
                </div>

                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="system" className="text-right font-medium">Sistem Belajar</Label>
                  <Input id="system" className="col-span-3" value={formData.learningSystem} onChange={e => setFormData({ ...formData, learningSystem: e.target.value })} placeholder="contoh: Tatap Muka & Daring" />
                </div>
              </div>
              <DialogFooter className="mt-6">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Batal</Button>
                <Button onClick={handleSave} className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90">
                  {createMutation.loading || updateMutation.loading ? "Menyimpan..." : "Simpan Informasi"}
                </Button>
              </DialogFooter>
            </TabsContent>

            <TabsContent value="curriculum" className="p-6 mt-0 min-h-[400px]">
              {editingItem ? (
                <CurriculumManager programId={editingItem.id} />
              ) : (
                <div className="flex items-center justify-center py-20 text-gray-400 italic">
                  Simpan informasi umum terlebih dahulu untuk mengelola kurikulum.
                </div>
              )}
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  );
}
