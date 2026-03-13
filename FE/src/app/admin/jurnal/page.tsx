"use client";

import { Plus, Pencil, Trash2, Download, Upload, FileText, Eye } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

const jurnalData = [
  { id: 1, title: "Teologi Kontekstual dalam Pelayanan Urban", author: "Dr. Johannes Rahardjo", volume: "Vol. 12, No. 1", date: "Jan 2026", status: "Published" },
  { id: 2, title: "Pendidikan Kristen di Era Digital", author: "Dr. Maria Susanti", volume: "Vol. 12, No. 1", date: "Jan 2026", status: "Published" },
  { id: 3, title: "Transformasi Budaya melalui Perspektif Alkitabiah", author: "Dr. Samuel Tanujaya", volume: "Vol. 11, No. 2", date: "Jul 2025", status: "Published" },
  { id: 4, title: "Kepemimpinan Pastoral dalam Gereja Masa Kini", author: "Dr. Ruth Magdalena", volume: "Vol. 12, No. 2", date: "Jul 2026", status: "Draft" },
  { id: 5, title: "Misi dan Penginjilan di Kota Besar", author: "Dr. David Kurniawan", volume: "Vol. 12, No. 2", date: "Jul 2026", status: "Review" },
];

const statusStyles: Record<string, string> = {
  Published: "bg-green-50 text-green-700",
  Draft: "bg-yellow-50 text-yellow-700",
  Review: "bg-blue-50 text-[#1e3a8a]",
};

export default function JurnalPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="text-gray-600"><Upload size={14} /> Upload PDF</Button>
        </div>
        <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 h-9"><Plus size={16} /> Tambah Jurnal</Button>
      </div>

      <Card className="border border-gray-100 shadow-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50/80 hover:bg-gray-50/80">
                <TableHead className="text-xs font-semibold text-gray-500 uppercase w-[35%]">Judul</TableHead>
                <TableHead className="text-xs font-semibold text-gray-500 uppercase">Penulis</TableHead>
                <TableHead className="text-xs font-semibold text-gray-500 uppercase">Volume</TableHead>
                <TableHead className="text-xs font-semibold text-gray-500 uppercase">Tanggal</TableHead>
                <TableHead className="text-xs font-semibold text-gray-500 uppercase">Status</TableHead>
                <TableHead className="w-10" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {jurnalData.map((j) => (
                <TableRow key={j.id} className="hover:bg-gray-50/50">
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <FileText size={16} className="text-gray-400 shrink-0" />
                      <span className="font-medium text-gray-900 text-sm">{j.title}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-gray-600">{j.author}</TableCell>
                  <TableCell><Badge variant="secondary" className="bg-gray-100 text-gray-600 text-xs">{j.volume}</Badge></TableCell>
                  <TableCell className="text-sm text-gray-500">{j.date}</TableCell>
                  <TableCell><Badge variant="secondary" className={`${statusStyles[j.status]} text-xs`}>{j.status}</Badge></TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400"><MoreHorizontal size={16} /></Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="gap-2 text-sm"><Eye size={14} /> Lihat</DropdownMenuItem>
                        <DropdownMenuItem className="gap-2 text-sm"><Pencil size={14} /> Edit</DropdownMenuItem>
                        <DropdownMenuItem className="gap-2 text-sm"><Download size={14} /> Download PDF</DropdownMenuItem>
                        <DropdownMenuItem className="gap-2 text-sm text-[#dc2626]"><Trash2 size={14} /> Hapus</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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
