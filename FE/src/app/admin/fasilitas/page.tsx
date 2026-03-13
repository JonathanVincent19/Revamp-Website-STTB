"use client";

import { Plus, Pencil, Trash2, Building2, Upload } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";

const facilitiesList = [
  { id: 1, name: "Aula Utama", desc: "Ruang pertemuan besar untuk acara akademik dan kebaktian", status: "Aktif" },
  { id: 2, name: "Perpustakaan", desc: "Koleksi buku teologi terlengkap di Bandung", status: "Aktif" },
  { id: 3, name: "Asrama Mahasiswa", desc: "Fasilitas asrama putra dan putri yang nyaman", status: "Aktif" },
  { id: 4, name: "Ruang Kelas", desc: "Dilengkapi dengan multimedia dan AC", status: "Aktif" },
  { id: 5, name: "Laboratorium Komputer", desc: "Fasilitas komputer dengan akses internet", status: "Aktif" },
  { id: 6, name: "Lapangan Olahraga", desc: "Area olahraga untuk kegiatan mahasiswa", status: "Renovasi" },
];

export default function FasilitasPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">{facilitiesList.length} fasilitas</p>
        <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 h-9"><Plus size={16} /> Tambah Fasilitas</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {facilitiesList.map((f) => (
          <Card key={f.id} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="aspect-[16/9] bg-gray-100 flex items-center justify-center relative">
              <Building2 size={40} className="text-gray-300" />
              <Button variant="ghost" size="sm" className="absolute bottom-2 right-2 bg-white/80 text-xs h-7"><Upload size={12} /> Upload Foto</Button>
            </div>
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{f.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{f.desc}</p>
                </div>
                <Badge variant="secondary" className={f.status === "Aktif" ? "bg-green-50 text-green-700 text-xs" : "bg-yellow-50 text-yellow-700 text-xs"}>{f.status}</Badge>
              </div>
              <div className="flex gap-2 mt-3">
                <Button variant="outline" size="sm" className="h-7 text-xs flex-1"><Pencil size={12} /> Edit</Button>
                <Button variant="ghost" size="sm" className="h-7 text-xs text-[#dc2626]"><Trash2 size={12} /></Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
