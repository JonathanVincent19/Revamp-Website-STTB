"use client";

import { useState, useMemo } from "react";
import { Plus, Pencil, Trash2, BookOpen, Layers } from "lucide-react";
import { 
  useAdminCourses, useCreateCourse, useUpdateCourse, useDeleteCourse,
  useAdminCourseCategories, useCreateCourseCategory, useUpdateCourseCategory, useDeleteCourseCategory,
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

interface CurriculumManagerProps {
  programId?: number;
}

export function CurriculumManager({ programId }: CurriculumManagerProps) {
  // --- Data Hook ---
  const { data: courses, loading: coursesLoading, refetch: refetchCourses } = useAdminCourses();
  const { data: categories, loading: categoriesLoading, refetch: refetchCategories } = useAdminCourseCategories();
  
  const createCourseMutation = useCreateCourse();
  const updateCourseMutation = useUpdateCourse();
  const deleteCourseMutation = useDeleteCourse();

  const createCatMutation = useCreateCourseCategory();
  const updateCatMutation = useUpdateCourseCategory();
  const deleteCatMutation = useDeleteCourseCategory();

  const [activeTab, setActiveTab] = useState("courses");
  
  // --- Filtered Data ---
  const filteredCategories = useMemo(() => {
    if (!categories) return [];
    if (!programId) return categories;
    // Show only categories for THIS program OR global categories
    return categories.filter(c => !c.studyProgramId || c.studyProgramId === programId);
  }, [categories, programId]);

  const filteredCourses = useMemo(() => {
    if (!courses || !filteredCategories) return [];
    const validCatIds = filteredCategories.map(c => c.id);
    return courses.filter(course => validCatIds.includes(course.categoryId));
  }, [courses, filteredCategories]);

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

  // --- Handlers ---
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
        categoryId: filteredCategories.length > 0 ? filteredCategories[0].id : 0,
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
        studyProgramId: programId || null,
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

  if (coursesLoading || categoriesLoading) {
    return <div className="p-4 text-center text-gray-400 text-sm">Memuat data kurikulum...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Manajemen Kurikulum</h3>
        <div className="flex gap-2">
          <Button size="sm" onClick={() => handleOpenCatDialog()} variant="outline" className="h-8 text-xs">
            <Plus size={14} className="mr-1" /> Kategori
          </Button>
          <Button size="sm" onClick={() => handleOpenCourseDialog()} className="bg-[#1e3a8a] text-white h-8 text-xs">
            <Plus size={14} className="mr-1" /> Mata Kuliah
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 max-w-[300px] h-9">
          <TabsTrigger value="courses" className="text-xs">Mata Kuliah</TabsTrigger>
          <TabsTrigger value="categories" className="text-xs">Kategori</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="mt-4">
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader className="bg-gray-50">
                <TableRow>
                  <TableHead className="text-xs">Nama</TableHead>
                  <TableHead className="text-xs">Kategori</TableHead>
                  <TableHead className="text-center text-xs">SKS</TableHead>
                  <TableHead className="text-right text-xs">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCourses.map((course) => (
                  <TableRow key={course.id} className="text-sm">
                    <TableCell className="font-medium py-2">{course.name}</TableCell>
                    <TableCell className="py-2 text-gray-500">{categories?.find(c => c.id === course.categoryId)?.name || "-"}</TableCell>
                    <TableCell className="text-center py-2">{course.credits}</TableCell>
                    <TableCell className="text-right py-2">
                      <div className="flex justify-end gap-1">
                        <Button variant="ghost" size="sm" onClick={() => handleOpenCourseDialog(course)} className="h-7 w-7 p-0"><Pencil size={12} /></Button>
                        <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-red-500" onClick={() => { setDeleteType("course"); setDeleteId(course.id); }}><Trash2 size={12} /></Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {filteredCourses.length === 0 && (
                  <TableRow><TableCell colSpan={4} className="text-center py-8 text-gray-400 text-xs italic">Belum ada mata kuliah.</TableCell></TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="categories" className="mt-4">
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader className="bg-gray-50">
                <TableRow>
                  <TableHead className="text-xs">Kategori</TableHead>
                  <TableHead className="text-center text-xs">Target SKS</TableHead>
                  <TableHead className="text-right text-xs">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCategories.map((cat) => (
                  <TableRow key={cat.id} className="text-sm">
                    <TableCell className="font-medium py-2">{cat.name} {!cat.studyProgramId && <span className="text-[10px] bg-blue-50 text-blue-600 px-1 rounded ml-1">Global</span>}</TableCell>
                    <TableCell className="text-center py-2">{cat.totalSKS}</TableCell>
                    <TableCell className="text-right py-2">
                      <div className="flex justify-end gap-1">
                        <Button variant="ghost" size="sm" onClick={() => handleOpenCatDialog(cat)} className="h-7 w-7 p-0"><Pencil size={12} /></Button>
                        <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-red-500" onClick={() => { setDeleteType("category"); setDeleteId(cat.id); }}><Trash2 size={12} /></Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>

      {/* Course Dialog */}
      <Dialog open={isCourseDialogOpen} onOpenChange={setIsCourseDialogOpen}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader><DialogTitle className="text-base">{editingCourse ? "Edit Mata Kuliah" : "Tambah Mata Kuliah"}</DialogTitle></DialogHeader>
          <div className="grid gap-3 py-2">
            <div className="space-y-1">
              <Label className="text-xs">Nama</Label>
              <Input size={32} value={courseForm.name} onChange={e => setCourseForm({ ...courseForm, name: e.target.value })} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label className="text-xs">SKS</Label>
                <Input type="number" value={courseForm.credits} onChange={e => setCourseForm({ ...courseForm, credits: parseInt(e.target.value) || 0 })} />
              </div>
              <div className="space-y-1">
                <Label className="text-xs">Kategori</Label>
                <Select value={courseForm.categoryId.toString()} onValueChange={v => setCourseForm({ ...courseForm, categoryId: parseInt(v) })}>
                  <SelectTrigger><SelectValue placeholder="Kategori" /></SelectTrigger>
                  <SelectContent>
                    {filteredCategories.map(c => <SelectItem key={c.id} value={c.id.toString()}>{c.name}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter><Button size="sm" onClick={handleSaveCourse} className="bg-[#1e3a8a] text-white">Simpan</Button></DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Category Dialog */}
      <Dialog open={isCatDialogOpen} onOpenChange={setIsCatDialogOpen}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader><DialogTitle className="text-base">{editingCat ? "Edit Kategori" : "Tambah Kategori"}</DialogTitle></DialogHeader>
          <div className="grid gap-3 py-2">
            <div className="space-y-1">
              <Label className="text-xs">Nama Kategori</Label>
              <Input value={catForm.name} onChange={e => setCatForm({ ...catForm, name: e.target.value })} />
            </div>
            <div className="space-y-1">
              <Label className="text-xs">Target Total SKS</Label>
              <Input type="number" value={catForm.totalSKS} onChange={e => setCatForm({ ...catForm, totalSKS: parseInt(e.target.value) || 0 })} />
            </div>
          </div>
          <DialogFooter><Button size="sm" onClick={handleSaveCat} className="bg-[#1e3a8a] text-white">Simpan</Button></DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={deleteId !== null} onOpenChange={o => !o && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader><AlertDialogTitle>Hapus?</AlertDialogTitle><AlertDialogDescription>Yakin ingin menghapus item ini?</AlertDialogDescription></AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction className="bg-red-600" onClick={async () => {
              if (deleteType === "course") await deleteCourseMutation.mutate(deleteId!);
              else await deleteCatMutation.mutate(deleteId!);
              setDeleteId(null);
              refetchCourses();
              refetchCategories();
            }}>Hapus</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
