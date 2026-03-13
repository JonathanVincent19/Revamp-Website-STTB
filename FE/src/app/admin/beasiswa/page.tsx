"use client";

import { Plus, Pencil, Trash2, Award } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";

const beasiswaList = [
  { id: 1, nama: "Beasiswa Prestasi Akademik", jenis: "Penuh", kuota: 10, pendaftar: 25, status: "Dibuka" },
  { id: 2, nama: "Beasiswa Pelayanan Gereja", jenis: "Parsial", kuota: 20, pendaftar: 18, status: "Dibuka" },
  { id: 3, nama: "Beasiswa Kurang Mampu", jenis: "Penuh", kuota: 15, pendaftar: 32, status: "Dibuka" },
  { id: 4, nama: "Beasiswa Alumni STTB", jenis: "Parsial", kuota: 5, pendaftar: 8, status: "Ditutup" },
  { id: 5, nama: "Beasiswa Yayasan Teologi", jenis: "Penuh", kuota: 8, pendaftar: 12, status: "Dibuka" },
];

export default function BeasiswaPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">{beasiswaList.length} program beasiswa</p>
        <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 h-9"><Plus size={16} /> Tambah Beasiswa</Button>
      </div>

      <div className="space-y-3">
        {beasiswaList.map((b) => (
          <Card key={b.id} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-50 text-yellow-600">
                    <Award size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{b.nama}</p>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <Badge variant="secondary" className={b.jenis === "Penuh" ? "bg-green-50 text-green-700 text-xs" : "bg-blue-50 text-[#1e3a8a] text-xs"}>{b.jenis}</Badge>
                      <span className="text-xs text-gray-400">Kuota: {b.kuota}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-400">Pendaftar: {b.pendaftar}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className={b.status === "Dibuka" ? "bg-green-50 text-green-700 text-xs" : "bg-gray-100 text-gray-500 text-xs"}>{b.status}</Badge>
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
