"use client";

import { useState, useMemo } from "react";
import { Plus, Pencil, Trash2, BookOpen, Layers } from "lucide-react";
import { 
  useAdminCourses, useCreateCourse, useUpdateCourse, useDeleteCourse,
  useAdminCourseCategories, useCreateCourseCategory, useUpdateCourseCategory, useDeleteCourseCategory,
  useAdminPrograms
} from "@/lib/hooks";
import type { CourseItem, CourseCategoryItem } from "@/lib/api";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
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

export default function KurikulumPage() {
  // --- State for Courses ---
  const { data: courses, loading: coursesLoading, refetch: refetchCourses } = useAdminCourses();
  const createCourseMutation = useCreateCourse();
  const updateCourseMutation = useUpdateCourse();
  const deleteCourseMutation = useDeleteCourse();

  // --- State for Categories ---
  const { data: categories, loading: categoriesLoading, refetch: refetchCategories } = useAdminCourseCategories();
  const createCatMutation = useCreateCourseCategory();
  const updateCatMutation = useUpdateCourseCategory();
  const deleteCatMutation = useDeleteCourseCategory();

  const { data: programs } = useAdminPrograms();

  const [activeTab, setActiveTab] = useState("courses");
  
  // --- Dialog States ---
  const [isCourseDialogOpen, setIsCourseDialogOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<CourseItem | null>(null);
  const [courseForm, setCourseForm] = useState({
    name: "",
    credits: 0,
    categoryId: 0,
  });

  const [isCatDialogOpen, setIsCatDialogOpen] = useState(false);
  const [editingCat, setEditingCat] = useState<CourseCategoryItem | null>(null);
  const [catForm, setCatForm] = useState({
    name: "",
    totalSKS: 0,
    studyProgramId: 0 as number | null,
  });

  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [deleteType, setDeleteType] = useState<"course" | "category" | null>(null);

  // --- Handlers for Courses ---
  const handleOpenCourseDialog = (item?: CourseItem) => {
    if (item) {
      setEditingCourse(item);
      setCourseForm({
        name: item.name,
        credits: item.credits,
        categoryId: item.categoryId,
      });
    } else {
      setEditingCourse(null);
      setCourseForm({
        name: "",
        credits: 2,
        categoryId: categories && categories.length > 0 ? categories[0].id : 0,
      });
    }
    setIsCourseDialogOpen(true);
  };

  const handleSaveCourse = async () => {
    try {
      if (editingCourse) {
        await updateCourseMutation.mutate({ ...courseForm, id: editingCourse.id });
      } else {
        await createCourseMutation.mutate(courseForm);
      }
      setIsCourseDialogOpen(false);
      refetchCourses();
    } catch (err) {
      alert("Gagal menyimpan mata kuliah");
    }
  };

  const handleDeleteCourse = async (id: number) => {
    try {
      await deleteCourseMutation.mutate(id);
      setDeleteId(null);
      refetchCourses();
    } catch (err) {
      alert("Gagal menghapus mata kuliah");
    }
  };

  // --- Handlers for Categories ---
  const handleOpenCatDialog = (item?: CourseCategoryItem) => {
    if (item) {
      setEditingCat(item);
      setCatForm({
        name: item.name,
        totalSKS: item.totalSKS,
        studyProgramId: item.studyProgramId || null,
      });
    } else {
      setEditingCat(null);
      setCatForm({
        name: "",
        totalSKS: 0,
        studyProgramId: null,
      });
    }
    setIsCatDialogOpen(true);
  };

  const handleSaveCat = async () => {
    try {
      if (editingCat) {
        await updateCatMutation.mutate({ ...catForm, id: editingCat.id });
      } else {
        await createCatMutation.mutate(catForm);
      }
      setIsCatDialogOpen(false);
      refetchCategories();
    } catch (err) {
      alert("Gagal menyimpan kategori");
    }
  };

  const handleDeleteCat = async (id: number) => {
    try {
      await deleteCatMutation.mutate(id);
      setDeleteId(null);
      refetchCategories();
    } catch (err) {
      alert("Gagal menghapus kategori");
    }
  };

  // --- Helpers ---
  const getCategoryName = (id: number) => {
    return categories?.find(c => c.id === id)?.name || "Tanpa Kategori";
  };

  const getProgramName = (id?: number) => {
    if (!id) return "Global / Semua";
    return programs?.find(p => p.id === id)?.name || `ID: ${id}`;
  };

  if (coursesLoading || categoriesLoading) {
    return <div className="p-8 text-center text-gray-500">Memuat data kurikulum...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#0a1930] flex items-center gap-2">
          <BookOpen size={24} className="text-[#dc2626]" />
          Kelola Kurikulum & Mata Kuliah
        </h1>
        <div className="flex gap-2">
          <Button onClick={() => handleOpenCatDialog()} variant="outline" className="border-[#1e3a8a] text-[#1e3a8a]">
            <Plus size={16} className="mr-2" /> Kategori Baru
          </Button>
          <Button onClick={() => handleOpenCourseDialog()} className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90">
            <Plus size={16} className="mr-2" /> Mata Kuliah Baru
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 max-w-[400px]">
          <TabsTrigger value="courses">Daftar Mata Kuliah</TabsTrigger>
          <TabsTrigger value="categories">Kategori Kurikulum</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Seluruh Mata Kuliah</CardTitle>
              <CardDescription>Daftar mata kuliah yang tersedia di seluruh program studi.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[40%]">Nama Mata Kuliah</TableHead>
                    <TableHead>Kategori</TableHead>
                    <TableHead className="text-center">SKS</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courses?.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell className="font-semibold">{course.name}</TableCell>
                      <TableCell>{getCategoryName(course.categoryId)}</TableCell>
                      <TableCell className="text-center">{course.credits}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm" onClick={() => handleOpenCourseDialog(course)}>
                            <Pencil size={14} />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="text-red-600 border-red-100 hover:bg-red-50"
                            onClick={() => { setDeleteType("course"); setDeleteId(course.id); }}
                          >
                            <Trash2 size={14} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                  {courses?.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-10 text-gray-500">
                        Belum ada mata kuliah. Klik "Mata Kuliah Baru" untuk menambah.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categories" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Kategori Kurikulum</CardTitle>
              <CardDescription>Pengelompokan mata kuliah (Wajib, Pilihan, Konsentrasi, dll).</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[40%]">Nama Kategori</TableHead>
                    <TableHead>Program Studi</TableHead>
                    <TableHead className="text-center">Target SKS</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {categories?.map((cat) => (
                    <TableRow key={cat.id}>
                      <TableCell className="font-semibold">{cat.name}</TableCell>
                      <TableCell>
                        <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded text-gray-600">
                          {getProgramName(cat.studyProgramId)}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">{cat.totalSKS}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm" onClick={() => handleOpenCatDialog(cat)}>
                            <Pencil size={14} />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="text-red-600 border-red-100 hover:bg-red-50"
                            onClick={() => { setDeleteType("category"); setDeleteId(cat.id); }}
                          >
                            <Trash2 size={14} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* --- Course Dialog --- */}
      <Dialog open={isCourseDialogOpen} onOpenChange={setIsCourseDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingCourse ? "Edit Mata Kuliah" : "Tambah Mata Kuliah Baru"}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="cname" className="text-right">Nama</Label>
              <Input 
                id="cname" 
                className="col-span-3" 
                value={courseForm.name} 
                onChange={e => setCourseForm({ ...courseForm, name: e.target.value })} 
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="ccredits" className="text-right">SKS</Label>
              <Input 
                id="ccredits" 
                type="number" 
                className="col-span-3" 
                value={courseForm.credits} 
                onChange={e => setCourseForm({ ...courseForm, credits: parseInt(e.target.value) || 0 })} 
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Kategori</Label>
              <div className="col-span-3">
                <Select 
                  value={courseForm.categoryId.toString()} 
                  onValueChange={val => setCourseForm({ ...courseForm, categoryId: parseInt(val) })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih Kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories?.map((c) => (
                      <SelectItem key={c.id} value={c.id.toString()}>{c.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCourseDialogOpen(false)}>Batal</Button>
            <Button onClick={handleSaveCourse} className="bg-[#1e3a8a] text-white">Simpan</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* --- Category Dialog --- */}
      <Dialog open={isCatDialogOpen} onOpenChange={setIsCatDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingCat ? "Edit Kategori" : "Tambah Kategori Baru"}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="catname" className="text-right">Nama</Label>
              <Input 
                id="catname" 
                className="col-span-3" 
                value={catForm.name} 
                onChange={e => setCatForm({ ...catForm, name: e.target.value })} 
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="cattotal" className="text-right">Target SKS</Label>
              <Input 
                id="cattotal" 
                type="number" 
                className="col-span-3" 
                value={catForm.totalSKS} 
                onChange={e => setCatForm({ ...catForm, totalSKS: parseInt(e.target.value) || 0 })} 
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Program Studi</Label>
              <div className="col-span-3">
                <Select 
                  value={catForm.studyProgramId?.toString() || "0"} 
                  onValueChange={val => setCatForm({ ...catForm, studyProgramId: val === "0" ? null : parseInt(val) })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Global (Semua Prodi)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Global (Semua Prodi)</SelectItem>
                    {programs?.map((p) => (
                      <SelectItem key={p.id} value={p.id.toString()}>{p.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-[10px] text-gray-500 mt-1 italic">Pilih "Global" jika kategori ini muncul di semua Program Studi.</p>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCatDialogOpen(false)}>Batal</Button>
            <Button onClick={handleSaveCat} className="bg-[#1e3a8a] text-white">Simpan</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* --- Delete Confirmation --- */}
      <AlertDialog open={deleteId !== null} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Hapus Data?</AlertDialogTitle>
            <AlertDialogDescription>
              Tindakan ini tidak dapat dibatalkan.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 text-white hover:bg-red-700"
              onClick={() => {
                if (deleteType === "course") handleDeleteCourse(deleteId!);
                else handleDeleteCat(deleteId!);
              }}
            >
              Hapus Permanen
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
