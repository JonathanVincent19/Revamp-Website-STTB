"use client";

import { Plus, Pencil, Trash2, Building2, Upload, Save, Loader2, AlertCircle, X, ImagePlus } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Badge } from "@/app/components/ui/badge";
import { useState, useEffect } from "react";
import { useFacilities, useCreateFacility, useUpdateFacility, useDeleteFacility, useUploadFile } from "@/lib/hooks";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const ICON_OPTIONS = [
  "Library", "Video", "BookOpen", "Computer", "Building2", "Coffee", "Users", "Wifi",
  "Camera", "Dumbbell", "GraduationCap", "Home", "Music", "Briefcase", "Heart",
];

interface FacilityForm {
  id?: number;
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  iconName: string;
  featuredImage: string;
  photos: string[];
}

const emptyForm: FacilityForm = {
  name: "", slug: "", shortDescription: "", longDescription: "",
  iconName: "Building2", featuredImage: "", photos: [],
};

function generateSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function FasilitasPage() {
  const { data: facilities, loading, error, refetch } = useFacilities();
  const createMutation = useCreateFacility();
  const updateMutation = useUpdateFacility();
  const deleteMutation = useDeleteFacility();
  const uploadMutation = useUploadFile();

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<FacilityForm>({ ...emptyForm });
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleOpenCreate = () => {
    setEditingId(null);
    setForm({ ...emptyForm });
    setShowForm(true);
  };

  const handleOpenEdit = (f: any) => {
    setEditingId(f.id);
    setForm({
      id: f.id,
      name: f.name,
      slug: f.slug,
      shortDescription: f.shortDescription,
      longDescription: f.longDescription || "",
      iconName: f.iconName || "Building2",
      featuredImage: f.featuredImage || "",
      photos: f.photos || [],
    });
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Apakah Anda yakin ingin menghapus fasilitas ini?")) return;
    await deleteMutation.mutate(id);
    refetch();
  };

  const handleUploadFeatured = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    try {
      const res = await uploadMutation.mutate(file) as any;
      if (res?.url) {
        setForm(prev => ({ ...prev, featuredImage: res.url }));
      }
    } catch { }
    setIsUploading(false);
  };

  const handleUploadPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    try {
      const res = await uploadMutation.mutate(file) as any;
      if (res?.url) {
        setForm(prev => ({ ...prev, photos: [...prev.photos, res.url] }));
      }
    } catch { }
    setIsUploading(false);
  };

  const handleRemovePhoto = (index: number) => {
    setForm(prev => ({ ...prev, photos: prev.photos.filter((_, i) => i !== index) }));
  };

  const handleSave = async () => {
    if (!form.name || !form.slug) {
      alert("Nama dan Slug wajib diisi.");
      return;
    }
    setIsSaving(true);
    try {
      if (editingId) {
        await updateMutation.mutate({ ...form, id: editingId });
      } else {
        await createMutation.mutate(form);
      }
      setShowForm(false);
      setForm({ ...emptyForm });
      setEditingId(null);
      refetch();
    } catch (err) {
      alert("Gagal menyimpan fasilitas.");
    }
    setIsSaving(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="animate-spin text-blue-600" size={48} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-6 rounded-xl border border-red-100 flex flex-col items-center">
        <AlertCircle className="text-red-500 mb-2" size={32} />
        <p className="text-red-700 font-medium">Gagal memuat fasilitas: {error}</p>
        <Button onClick={refetch} className="mt-4 bg-red-600 text-white hover:bg-red-700">Coba Lagi</Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">{facilities?.length || 0} fasilitas</p>
        <Button onClick={handleOpenCreate} className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 h-9">
          <Plus size={16} className="mr-1" /> Tambah Fasilitas
        </Button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <Card className="border-2 border-[#1e3a8a]/30 shadow-lg">
          <CardContent className="p-6 space-y-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg text-gray-900">{editingId ? "Edit Fasilitas" : "Tambah Fasilitas Baru"}</h3>
              <Button variant="ghost" size="icon" onClick={() => setShowForm(false)}><X size={18} /></Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-gray-500 block mb-1">Nama Fasilitas *</label>
                <Input value={form.name} onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value, slug: editingId ? prev.slug : generateSlug(e.target.value) }))} placeholder="Perpustakaan" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 block mb-1">Slug (URL) *</label>
                <Input value={form.slug} onChange={(e) => setForm(prev => ({ ...prev, slug: e.target.value }))} placeholder="perpustakaan" />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-500 block mb-1">Deskripsi Singkat</label>
              <Input value={form.shortDescription} onChange={(e) => setForm(prev => ({ ...prev, shortDescription: e.target.value }))} placeholder="Penjelasan singkat 1-2 kalimat" />
            </div>

            <div>
              <label className="text-xs font-bold text-gray-500 block mb-1">Deskripsi Lengkap (pisah paragraf dengan baris kosong)</label>
              <textarea
                className="w-full min-h-[120px] p-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-[#1e3a8a] focus:outline-none resize-y"
                value={form.longDescription}
                onChange={(e) => setForm(prev => ({ ...prev, longDescription: e.target.value }))}
                placeholder={"Paragraf pertama...\n\nParagraf kedua...\n\nParagraf ketiga..."}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-gray-500 block mb-1">Ikon</label>
                <select
                  value={form.iconName}
                  onChange={(e) => setForm(prev => ({ ...prev, iconName: e.target.value }))}
                  className="w-full text-sm border border-gray-200 rounded-lg p-2.5 bg-white focus:outline-none focus:border-[#1e3a8a]"
                >
                  {ICON_OPTIONS.map(icon => (
                    <option key={icon} value={icon}>{icon}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 block mb-1">Gambar Utama (Featured Image)</label>
                <div className="flex gap-2">
                  <Input value={form.featuredImage} onChange={(e) => setForm(prev => ({ ...prev, featuredImage: e.target.value }))} placeholder="URL gambar atau upload" className="flex-1" />
                  <label className="cursor-pointer">
                    <input type="file" accept="image/*" onChange={handleUploadFeatured} className="hidden" />
                    <div className="px-3 h-10 flex items-center gap-1 border border-gray-200 rounded-lg text-xs font-medium hover:bg-gray-50 text-gray-600">
                      {isUploading ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />} Upload
                    </div>
                  </label>
                </div>
                {form.featuredImage && (
                  <div className="mt-2 w-32 h-20 rounded-lg overflow-hidden border border-gray-200">
                    <ImageWithFallback src={form.featuredImage} alt="preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
            </div>

            {/* Gallery Photos */}
            <div>
              <label className="text-xs font-bold text-gray-500 block mb-2">Galeri Foto</label>
              <div className="flex flex-wrap gap-3">
                {form.photos.map((photo, i) => (
                  <div key={i} className="relative w-28 h-20 rounded-lg overflow-hidden border border-gray-200 group">
                    <ImageWithFallback src={photo} alt="" className="w-full h-full object-cover" />
                    <button
                      onClick={() => handleRemovePhoto(i)}
                      className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))}
                <label className="cursor-pointer w-28 h-20 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-400 hover:border-[#1e3a8a] hover:text-[#1e3a8a] transition-colors">
                  <input type="file" accept="image/*" onChange={handleUploadPhoto} className="hidden" />
                  {isUploading ? <Loader2 size={18} className="animate-spin" /> : <ImagePlus size={18} />}
                  <span className="text-[10px] mt-1 font-medium">Tambah</span>
                </label>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Button variant="outline" onClick={() => setShowForm(false)}>Batal</Button>
              <Button onClick={handleSave} disabled={isSaving} className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 min-w-28">
                {isSaving ? <Loader2 className="animate-spin" size={16} /> : <><Save size={16} className="mr-1" /> Simpan</>}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {facilities && facilities.map((f) => (
          <Card key={f.id} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="aspect-[16/9] bg-gray-100 relative overflow-hidden">
              {f.featuredImage ? (
                <ImageWithFallback src={f.featuredImage} alt={f.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Building2 size={40} className="text-gray-300" />
                </div>
              )}
            </div>
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{f.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{f.shortDescription}</p>
                  <p className="text-[10px] text-gray-400 mt-1 font-mono">/{f.slug}</p>
                </div>
                <Badge variant="secondary" className="bg-blue-50 text-blue-700 text-xs flex-shrink-0">
                  {f.iconName}
                </Badge>
              </div>
              <div className="flex gap-2 mt-3">
                <Button variant="outline" size="sm" className="h-7 text-xs flex-1" onClick={() => handleOpenEdit(f)}>
                  <Pencil size={12} className="mr-1" /> Edit
                </Button>
                <Button variant="ghost" size="sm" className="h-7 text-xs text-[#dc2626]" onClick={() => handleDelete(f.id)}>
                  <Trash2 size={12} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {(!facilities || facilities.length === 0) && (
        <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-xl border border-dashed border-gray-300">
          Belum ada fasilitas. Klik &quot;Tambah Fasilitas&quot; untuk menambahkan.
        </div>
      )}
    </div>
  );
}
