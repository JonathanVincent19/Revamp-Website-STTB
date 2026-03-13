"use client";

import { Plus, Pencil, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Avatar, AvatarFallback } from "@/app/components/ui/avatar";

const senatMembers = [
  { id: 1, name: "Jonathan Vincent", nim: "2023001", jabatan: "Ketua Senat", periode: "2025-2026", status: "Aktif" },
  { id: 2, name: "Maria Anggraeni", nim: "2023015", jabatan: "Wakil Ketua", periode: "2025-2026", status: "Aktif" },
  { id: 3, name: "David Pratama", nim: "2022008", jabatan: "Sekretaris", periode: "2025-2026", status: "Aktif" },
  { id: 4, name: "Sarah Lim", nim: "2023022", jabatan: "Bendahara", periode: "2025-2026", status: "Aktif" },
  { id: 5, name: "Andreas Tan", nim: "2022019", jabatan: "Koordinator Kerohanian", periode: "2025-2026", status: "Aktif" },
  { id: 6, name: "Ruth Magdalena", nim: "2023030", jabatan: "Koordinator Akademik", periode: "2025-2026", status: "Aktif" },
];

export default function SenatPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">{senatMembers.length} anggota senat</p>
        <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 h-9"><Plus size={16} /> Tambah Anggota</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {senatMembers.map((m) => (
          <Card key={m.id} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <Avatar className="h-16 w-16 mx-auto mb-3">
                <AvatarFallback className="bg-[#1e3a8a] text-white font-bold text-lg">
                  {m.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <p className="font-semibold text-gray-900 text-sm">{m.name}</p>
              <p className="text-xs text-gray-400 mt-0.5">{m.nim}</p>
              <Badge variant="secondary" className="bg-blue-50 text-[#1e3a8a] text-xs mt-2">{m.jabatan}</Badge>
              <p className="text-xs text-gray-400 mt-2">Periode: {m.periode}</p>
              <div className="flex justify-center gap-2 mt-3">
                <Button variant="outline" size="sm" className="h-7 text-xs"><Pencil size={12} /> Edit</Button>
                <Button variant="ghost" size="sm" className="h-7 text-xs text-[#dc2626]"><Trash2 size={12} /></Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
