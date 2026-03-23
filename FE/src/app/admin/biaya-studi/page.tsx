"use client";

import { useState, useMemo } from "react";
import { Plus, Pencil, Trash2, LibraryBig, GraduationCap } from "lucide-react";
import { 
  useTuitionFees, useCreateTuitionFee, useUpdateTuitionFee, useDeleteTuitionFee,
  useTuitionNotes, useCreateTuitionNote, useUpdateTuitionNote, useDeleteTuitionNote,
  usePrograms
} from "@/lib/hooks";
import type { TuitionFeeItem, TuitionNoteItem } from "@/lib/api";

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

const CATEGORIES = [
  "Administrasi",
  "Kuliah/Bimbingan Khusus",
  "Lain-lain",
  "Biaya Program Matrikulasi"
];

export default function AdminTuitionFeesPage() {
  const { data: tuitions, loading, refetch } = useTuitionFees();
  const createMutation = useCreateTuitionFee();
  const updateMutation = useUpdateTuitionFee();
  const deleteMutation = useDeleteTuitionFee();

  const { data: notes, loading: notesLoading, refetch: refetchNotes } = useTuitionNotes();
  const createNoteMutation = useCreateTuitionNote();
  const updateNoteMutation = useUpdateTuitionNote();
  const deleteNoteMutation = useDeleteTuitionNote();

  const { data: programList, loading: programsLoading } = usePrograms();

  const dynamicPrograms = useMemo(() => {
    if (!programList || programList.length === 0) return [];
    return programList.map(p => {
      // Logic matching existing seeder format if possible
      if (p.name.includes("Matrikulasi")) return p.name;
      const levelName = p.level === "S1" ? "Sarjana" : p.level === "S2" ? "Magister" : p.level;
      return `Program ${levelName} ${p.name} (${p.degree})`;
    });
  }, [programList]);

  const dynamicProgramShort = useMemo(() => {
    const map: Record<string, string> = {};
    if (!programList) return map;
    programList.forEach(p => {
      const levelName = p.level === "S1" ? "Sarjana" : p.level === "S2" ? "Magister" : p.level;
      const fullName = p.name.includes("Matrikulasi") ? p.name : `Program ${levelName} ${p.name} (${p.degree})`;
      map[fullName] = p.degree || p.name.split(" ")[0];
    });
    return map;
  }, [programList]);

  const [activeTab, setActiveTab] = useState("");

  // Set default tab once programs load
  useMemo(() => {
    if (dynamicPrograms.length > 0 && !activeTab) {
      setActiveTab(dynamicPrograms[0]);
    }
  }, [dynamicPrograms, activeTab]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<TuitionFeeItem | null>(null);
  const [formData, setFormData] = useState({
    program: "",
    category: "",
    itemName: "",
    amount: "",
    sortOrder: "0",
  });

  const [deleteId, setDeleteId] = useState<number | null>(null);

  const [isNoteDialogOpen, setIsNoteDialogOpen] = useState(false);
  const [editingNoteItem, setEditingNoteItem] = useState<TuitionNoteItem | null>(null);
  const [noteFormData, setNoteFormData] = useState({
    program: "",
    noteText: "",
    sortOrder: "0",
  });
  const [deleteNoteId, setDeleteNoteId] = useState<number | null>(null);

  /* Group tuitions by program */
  const grouped = useMemo(() => {
    const map: Record<string, TuitionFeeItem[]> = {};
    dynamicPrograms.forEach(p => { map[p] = []; });
    tuitions?.forEach(t => {
      if (map[t.program]) {
        map[t.program].push(t);
      } else {
        // Handle programs not in current dynamic list but existing in data
        if (!map[t.program]) map[t.program] = [];
        map[t.program].push(t);
      }
    });
    // sort each group by sortOrder
    Object.keys(map).forEach(k => {
      map[k].sort((a, b) => a.sortOrder - b.sortOrder);
    });
    return map;
  }, [tuitions]);

  /* Group notes by program */
  const groupedNotes = useMemo(() => {
    const map: Record<string, TuitionNoteItem[]> = {};
    dynamicPrograms.forEach(p => { map[p] = []; });
    notes?.forEach(n => {
      if (map[n.program]) {
        map[n.program].push(n);
      } else {
        if (!map[n.program]) map[n.program] = [];
        map[n.program].push(n);
      }
    });
    Object.keys(map).forEach(k => {
      map[k].sort((a, b) => a.sortOrder - b.sortOrder);
    });
    return map;
  }, [notes]);

  const resetForm = () => {
    setFormData({ program: "", category: "", itemName: "", amount: "", sortOrder: "0" });
    setEditingItem(null);
  };

  const handleOpenCreate = (prefilledProgram?: string) => {
    resetForm();
    if (prefilledProgram) {
      setFormData(prev => ({ ...prev, program: prefilledProgram }));
    }
    setIsDialogOpen(true);
  };

  const handleOpenEdit = (item: TuitionFeeItem) => {
    setEditingItem(item);
    setFormData({
      program: item.program,
      category: item.category,
      itemName: item.itemName,
      amount: item.amount.toString(),
      sortOrder: item.sortOrder.toString(),
    });
    setIsDialogOpen(true);
  };

  const parseNumber = (value: string) => {
    const raw = value.replace(/[^0-9]/g, "");
    return raw ? parseInt(raw, 10) : 0;
  };

  const formatIDR = (num: number) => {
    return "Rp " + new Intl.NumberFormat("id-ID").format(num);
  };

  const handleSave = async () => {
    if (!formData.program || !formData.category || !formData.itemName || formData.amount === "") {
      alert("Program, Kategori, Nama Item, dan Jumlah wajib diisi.");
      return;
    }

    const payload = {
      program: formData.program,
      category: formData.category,
      itemName: formData.itemName,
      amount: parseNumber(formData.amount),
      sortOrder: parseInt(formData.sortOrder, 10),
    };

    try {
      if (editingItem) {
        await updateMutation.mutate({ ...payload, id: editingItem.id });
        alert("Biaya studi berhasil diperbarui.");
      } else {
        await createMutation.mutate(payload);
        alert("Biaya studi baru telah ditambahkan.");
      }
      setIsDialogOpen(false);
      refetch();
    } catch {
      alert("Terjadi kesalahan saat menyimpan data biaya studi.");
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteMutation.mutate(id);
      alert("Data biaya studi telah dihapus.");
      setDeleteId(null);
      refetch();
    } catch {
      alert("Terjadi kesalahan saat menghapus data.");
    }
  };

  const resetNoteForm = () => {
    setNoteFormData({ program: "", noteText: "", sortOrder: "0" });
    setEditingNoteItem(null);
  };

  const handleOpenCreateNote = (prefilledProgram?: string) => {
    resetNoteForm();
    if (prefilledProgram) {
      setNoteFormData(prev => ({ ...prev, program: prefilledProgram }));
    }
    setIsNoteDialogOpen(true);
  };

  const handleOpenEditNote = (item: TuitionNoteItem) => {
    setEditingNoteItem(item);
    setNoteFormData({
      program: item.program,
      noteText: item.noteText,
      sortOrder: item.sortOrder.toString(),
    });
    setIsNoteDialogOpen(true);
  };

  const handleSaveNote = async () => {
    if (!noteFormData.program || !noteFormData.noteText) {
      alert("Program dan Teks Catatan wajib diisi.");
      return;
    }

    const payload = {
      program: noteFormData.program,
      noteText: noteFormData.noteText,
      sortOrder: parseInt(noteFormData.sortOrder, 10) || 0,
    };

    try {
      if (editingNoteItem) {
        await updateNoteMutation.mutate({ ...payload, id: editingNoteItem.id });
        alert("Catatan berhasil diperbarui.");
      } else {
        await createNoteMutation.mutate(payload);
        alert("Catatan baru telah ditambahkan.");
      }
      setIsNoteDialogOpen(false);
      refetchNotes();
    } catch {
      alert("Terjadi kesalahan saat menyimpan catatan.");
    }
  };

  const handleDeleteNote = async (id: number) => {
    try {
      await deleteNoteMutation.mutate(id);
      alert("Catatan telah dihapus.");
      setDeleteNoteId(null);
      refetchNotes();
    } catch {
      alert("Terjadi kesalahan saat menghapus catatan.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#0a1930] flex items-center gap-2">
          <LibraryBig size={24} className="text-[#dc2626]" />
          Kelola Biaya Studi
        </h1>
        <Button onClick={() => handleOpenCreate(activeTab)} className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90">
          <Plus size={16} className="mr-2" /> Tambah Biaya Baru
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="bg-gray-100 p-1 flex flex-wrap h-auto gap-1">
          {dynamicPrograms.map((p) => (
            <TabsTrigger
              key={p}
              value={p}
              className="data-[state=active]:bg-[#1e3a8a] data-[state=active]:text-white text-xs sm:text-sm px-3 py-1.5"
            >
              {dynamicProgramShort[p] || p}
            </TabsTrigger>
          ))}
        </TabsList>

        {dynamicPrograms.map((program) => (
          <TabsContent key={program} value={program} className="mt-4">
            <Card className="border border-gray-100 shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1e3a8a]/10 flex items-center justify-center">
                      <GraduationCap size={20} className="text-[#1e3a8a]" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{program}</CardTitle>
                      <CardDescription className="text-xs">
                        {grouped[program]?.length || 0} item biaya
                      </CardDescription>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-[#1e3a8a] border-[#1e3a8a]/30 hover:bg-[#1e3a8a]/5"
                    onClick={() => handleOpenCreate(program)}
                  >
                    <Plus size={14} className="mr-1" /> Tambah Item
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-[#1e3a8a] hover:bg-[#1e3a8a]">
                        <TableHead className="text-white text-xs font-semibold uppercase w-10 text-center">No</TableHead>
                        <TableHead className="text-white text-xs font-semibold uppercase">Kategori</TableHead>
                        <TableHead className="text-white text-xs font-semibold uppercase">Item Biaya</TableHead>
                        <TableHead className="text-white text-xs font-semibold uppercase text-right">Nominal</TableHead>
                        <TableHead className="text-white text-xs font-semibold uppercase w-16 text-center">Urutan</TableHead>
                        <TableHead className="text-white text-xs font-semibold uppercase w-24 text-center">Aksi</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {loading ? (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-8 text-gray-400">Memuat data...</TableCell>
                        </TableRow>
                      ) : !grouped[program] || grouped[program].length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-8 text-gray-400">
                            Belum ada data biaya untuk program ini.
                          </TableCell>
                        </TableRow>
                      ) : (
                        grouped[program].map((item, idx) => (
                          <TableRow key={item.id} className="hover:bg-blue-50/30">
                            <TableCell className="text-center text-gray-500 font-medium">{idx + 1}</TableCell>
                            <TableCell>
                              <span className="inline-block bg-blue-50 text-[#1e3a8a] text-xs font-semibold px-2.5 py-1 rounded-full">
                                {item.category}
                              </span>
                            </TableCell>
                            <TableCell className="font-medium text-gray-800">{item.itemName}</TableCell>
                            <TableCell className="font-bold text-gray-900 text-right whitespace-nowrap">{formatIDR(item.amount)}</TableCell>
                            <TableCell className="text-center text-gray-500">{item.sortOrder}</TableCell>
                            <TableCell className="text-center">
                              <div className="flex items-center justify-center gap-1">
                                <Button variant="ghost" size="icon" onClick={() => handleOpenEdit(item)} className="h-7 w-7 text-gray-400 hover:text-blue-600">
                                  <Pencil size={13} />
                                </Button>
                                <Button variant="ghost" size="icon" onClick={() => setDeleteId(item.id)} className="h-7 w-7 text-gray-400 hover:text-red-600">
                                  <Trash2 size={13} />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-gray-100 shadow-sm mt-6">
              <CardHeader className="pb-3 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-base text-gray-800">Catatan Penting</CardTitle>
                    <CardDescription className="text-xs">
                      {groupedNotes[program]?.length || 0} catatan
                    </CardDescription>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-[#1e3a8a] border-[#1e3a8a]/30 hover:bg-[#1e3a8a]/5 h-8 text-xs"
                    onClick={() => handleOpenCreateNote(program)}
                  >
                    <Plus size={14} className="mr-1" /> Tambah Catatan
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50 hover:bg-gray-50">
                        <TableHead className="w-10 text-center font-semibold uppercase text-xs">No</TableHead>
                        <TableHead className="font-semibold uppercase text-xs">Teks Catatan</TableHead>
                        <TableHead className="w-16 text-center font-semibold uppercase text-xs">Urutan</TableHead>
                        <TableHead className="w-24 text-center font-semibold uppercase text-xs">Aksi</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {notesLoading ? (
                        <TableRow>
                          <TableCell colSpan={4} className="text-center py-6 text-gray-400">Memuat catatan...</TableCell>
                        </TableRow>
                      ) : !groupedNotes[program] || groupedNotes[program].length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={4} className="text-center py-6 text-gray-400">Belum ada catatan untuk program ini.</TableCell>
                        </TableRow>
                      ) : (
                        groupedNotes[program].map((note, idx) => (
                          <TableRow key={note.id} className="hover:bg-gray-50/50">
                            <TableCell className="text-center text-gray-500 font-medium">{idx + 1}</TableCell>
                            <TableCell className="text-sm text-gray-700 py-3">{note.noteText}</TableCell>
                            <TableCell className="text-center text-gray-500">{note.sortOrder}</TableCell>
                            <TableCell className="text-center">
                              <div className="flex items-center justify-center gap-1">
                                <Button variant="ghost" size="icon" onClick={() => handleOpenEditNote(note)} className="h-7 w-7 text-gray-400 hover:text-blue-600">
                                  <Pencil size={13} />
                                </Button>
                                <Button variant="ghost" size="icon" onClick={() => setDeleteNoteId(note.id)} className="h-7 w-7 text-gray-400 hover:text-red-600">
                                  <Trash2 size={13} />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* Form Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{editingItem ? "Edit Biaya Studi" : "Tambah Biaya Studi Baru"}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-6 py-4">

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="program" className="text-right font-medium">Program</Label>
              <div className="col-span-3">
                <Select
                  value={formData.program}
                  onValueChange={(val) => setFormData({ ...formData, program: val })}
                >
                  <SelectTrigger id="program">
                    <SelectValue placeholder="Pilih Program Studi" />
                  </SelectTrigger>
                  <SelectContent>
                    {dynamicPrograms.map((p) => (
                      <SelectItem key={p} value={p}>{p}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right font-medium">Kategori</Label>
              <div className="col-span-3">
                <Select
                  value={formData.category}
                  onValueChange={(val) => setFormData({ ...formData, category: val })}
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Pilih Kategori Kumpulan" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="itemName" className="text-right font-medium">Nama Item</Label>
              <div className="col-span-3">
                <Input
                  id="itemName"
                  value={formData.itemName}
                  onChange={(e) => setFormData({ ...formData, itemName: e.target.value })}
                  placeholder="Misal: Pendaftaran & Tes Masuk"
                />
              </div>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="amount" className="text-right font-medium">Nominal (Rp)</Label>
              <div className="col-span-3">
                <Input
                  id="amount"
                  type="text"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  placeholder="Misal: 500000"
                />
                <p className="text-xs text-gray-500 mt-1">Hanya masukkan angka.</p>
              </div>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="sortOrder" className="text-right font-medium">Urutan Tampil</Label>
              <div className="col-span-3">
                <Input
                  id="sortOrder"
                  type="number"
                  value={formData.sortOrder}
                  onChange={(e) => setFormData({ ...formData, sortOrder: e.target.value })}
                />
              </div>
            </div>

          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Batal</Button>
            <Button onClick={handleSave} className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90">
              {createMutation.loading || updateMutation.loading ? "Menyimpan..." : "Simpan"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Alert */}
      <AlertDialog open={deleteId !== null} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Hapus Data Biaya?</AlertDialogTitle>
            <AlertDialogDescription>
              Tindakan ini tidak dapat dibatalkan. Data item biaya yang terhubung akan terhapus secara permanen.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 text-white hover:bg-red-700 focus:ring-red-600"
              onClick={() => deleteId && handleDelete(deleteId)}
            >
              {deleteMutation.loading ? "Menghapus..." : "Hapus Permanen"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Note Form Dialog */}
      <Dialog open={isNoteDialogOpen} onOpenChange={setIsNoteDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{editingNoteItem ? "Edit Catatan" : "Tambah Catatan Baru"}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-6 py-4">

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="noteProgram" className="text-right font-medium">Program</Label>
              <div className="col-span-3">
                <Select
                  value={noteFormData.program}
                  onValueChange={(val) => setNoteFormData({ ...noteFormData, program: val })}
                >
                  <SelectTrigger id="noteProgram">
                    <SelectValue placeholder="Pilih Program Studi" />
                  </SelectTrigger>
                  <SelectContent>
                    {dynamicPrograms.map((p) => (
                      <SelectItem key={p} value={p}>{p}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="noteText" className="text-right font-medium mt-2">Teks Catatan</Label>
              <div className="col-span-3">
                <textarea
                  id="noteText"
                  className="w-full flex min-h-[80px] rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  value={noteFormData.noteText}
                  onChange={(e) => setNoteFormData({ ...noteFormData, noteText: e.target.value })}
                  placeholder="Masukkan isi catatan"
                  rows={4}
                />
              </div>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="noteSortOrder" className="text-right font-medium">Urutan Tampil</Label>
              <div className="col-span-3">
                <Input
                  id="noteSortOrder"
                  type="number"
                  value={noteFormData.sortOrder}
                  onChange={(e) => setNoteFormData({ ...noteFormData, sortOrder: e.target.value })}
                />
              </div>
            </div>

          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsNoteDialogOpen(false)}>Batal</Button>
            <Button onClick={handleSaveNote} className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90">
              {createNoteMutation.loading || updateNoteMutation.loading ? "Menyimpan..." : "Simpan"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Note Confirmation Alert */}
      <AlertDialog open={deleteNoteId !== null} onOpenChange={(open) => !open && setDeleteNoteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Hapus Catatan?</AlertDialogTitle>
            <AlertDialogDescription>
              Tindakan ini tidak dapat dibatalkan. Catatan ini akan dihapus secara permanen.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 text-white hover:bg-red-700 focus:ring-red-600"
              onClick={() => deleteNoteId && handleDeleteNote(deleteNoteId)}
            >
              {deleteNoteMutation.loading ? "Menghapus..." : "Hapus Permanen"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
