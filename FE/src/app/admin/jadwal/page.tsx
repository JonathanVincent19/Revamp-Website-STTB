"use client";

import { Plus, Pencil, Trash2, Calendar as CalIcon, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table";

const events = [
  { id: 1, nama: "Perkuliahan Semester Genap Dimulai", tanggal: "10 Feb 2026", waktu: "08:00", lokasi: "Kampus STTB", tipe: "Akademik" },
  { id: 2, nama: "UTS Semester Genap", tanggal: "24 Mar 2026", waktu: "08:00 - 16:00", lokasi: "Kampus STTB", tipe: "Ujian" },
  { id: 3, nama: "Seminar Teologi Nasional", tanggal: "15 Apr 2026", waktu: "09:00 - 15:00", lokasi: "Aula Utama", tipe: "Kegiatan" },
  { id: 4, nama: "Pendaftaran Gelombang 2 Dibuka", tanggal: "1 Mei 2026", waktu: "-", lokasi: "Online", tipe: "Admisi" },
  { id: 5, nama: "UAS Semester Genap", tanggal: "8 Jun 2026", waktu: "08:00 - 16:00", lokasi: "Kampus STTB", tipe: "Ujian" },
  { id: 6, nama: "Wisuda Angkatan 2026", tanggal: "15 Jul 2026", waktu: "09:00", lokasi: "Aula Utama", tipe: "Akademik" },
];

const tipeStyles: Record<string, string> = {
  Akademik: "bg-blue-50 text-[#1e3a8a]",
  Ujian: "bg-red-50 text-[#dc2626]",
  Kegiatan: "bg-green-50 text-green-700",
  Admisi: "bg-purple-50 text-purple-600",
};

export default function JadwalPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">{events.length} jadwal terdaftar</p>
        <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 h-9"><Plus size={16} /> Tambah Jadwal</Button>
      </div>

      <Card className="border border-gray-100 shadow-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50/80 hover:bg-gray-50/80">
                <TableHead className="text-xs font-semibold text-gray-500 uppercase">Kegiatan</TableHead>
                <TableHead className="text-xs font-semibold text-gray-500 uppercase"><div className="flex items-center gap-1"><CalIcon size={12} />Tanggal</div></TableHead>
                <TableHead className="text-xs font-semibold text-gray-500 uppercase"><div className="flex items-center gap-1"><Clock size={12} />Waktu</div></TableHead>
                <TableHead className="text-xs font-semibold text-gray-500 uppercase"><div className="flex items-center gap-1"><MapPin size={12} />Lokasi</div></TableHead>
                <TableHead className="text-xs font-semibold text-gray-500 uppercase">Tipe</TableHead>
                <TableHead className="w-20" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((e) => (
                <TableRow key={e.id} className="hover:bg-gray-50/50">
                  <TableCell className="font-medium text-gray-900 text-sm">{e.nama}</TableCell>
                  <TableCell className="text-sm text-gray-600">{e.tanggal}</TableCell>
                  <TableCell className="text-sm text-gray-500">{e.waktu}</TableCell>
                  <TableCell className="text-sm text-gray-500">{e.lokasi}</TableCell>
                  <TableCell><Badge variant="secondary" className={`${tipeStyles[e.tipe]} text-xs`}>{e.tipe}</Badge></TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-400 hover:text-[#1e3a8a]"><Pencil size={14} /></Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-400 hover:text-[#dc2626]"><Trash2 size={14} /></Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
