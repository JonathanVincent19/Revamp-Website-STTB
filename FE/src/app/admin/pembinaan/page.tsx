"use client";

import { Plus, Pencil, Trash2, Heart, Upload } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";

const pembinaanList = [
  { id: 1, name: "Kelompok Kecil (KK)", desc: "Pembinaan rohani mingguan dalam kelompok kecil", jadwal: "Setiap Selasa", status: "Aktif" },
  { id: 2, name: "Kebaktian Chapel", desc: "Ibadah bersama seluruh civitas akademika", jadwal: "Setiap Rabu", status: "Aktif" },
  { id: 3, name: "Retreat Mahasiswa", desc: "Retret tahunan untuk pendalaman iman", jadwal: "Feb & Agt", status: "Aktif" },
  { id: 4, name: "Pelayanan Sosial", desc: "Kegiatan pengabdian masyarakat dan diakonia", jadwal: "Setiap Sabtu", status: "Aktif" },
  { id: 5, name: "Mentoring Dosen-Mahasiswa", desc: "Program pendampingan personal oleh dosen", jadwal: "Terjadwal", status: "Aktif" },
];

export default function PembinaanPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">{pembinaanList.length} program pembinaan</p>
        <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 h-9"><Plus size={16} /> Tambah Pembinaan</Button>
      </div>

      <div className="space-y-3">
        {pembinaanList.map((p) => (
          <Card key={p.id} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pink-50 text-pink-600">
                    <Heart size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{p.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{p.desc}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="bg-blue-50 text-[#1e3a8a] text-xs">{p.jadwal}</Badge>
                      <Badge variant="secondary" className="bg-green-50 text-green-700 text-xs">{p.status}</Badge>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button variant="outline" size="sm" className="h-8 text-[#1e3a8a]"><Pencil size={14} /> Edit</Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-[#dc2626]"><Trash2 size={14} /></Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
