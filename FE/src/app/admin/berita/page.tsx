"use client";

import { useState } from "react";
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Pencil,
  Trash2,
  Eye,
  Calendar,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Badge } from "@/app/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";

const newsData = [
  {
    id: 1,
    title: "Wisuda Angkatan 2025 STTB",
    category: "Akademik",
    status: "Published",
    author: "Admin STTB",
    date: "12 Mar 2026",
    views: 234,
  },
  {
    id: 2,
    title: "Pembukaan Pendaftaran Mahasiswa Baru Gelombang 2",
    category: "Admisi",
    status: "Published",
    author: "Editor",
    date: "10 Mar 2026",
    views: 189,
  },
  {
    id: 3,
    title: "Seminar Teologi Transformatif",
    category: "Kegiatan",
    status: "Draft",
    author: "Admin STTB",
    date: "8 Mar 2026",
    views: 0,
  },
  {
    id: 4,
    title: "Pengumuman Beasiswa Tahun Akademik 2026/2027",
    category: "Beasiswa",
    status: "Published",
    author: "Admin STTB",
    date: "5 Mar 2026",
    views: 412,
  },
  {
    id: 5,
    title: "Kegiatan Pembinaan Mahasiswa Semester Genap",
    category: "Kegiatan",
    status: "Archived",
    author: "Editor",
    date: "1 Mar 2026",
    views: 98,
  },
  {
    id: 6,
    title: "Kerjasama STTB dengan Universitas Luar Negeri",
    category: "Akademik",
    status: "Draft",
    author: "Admin STTB",
    date: "28 Feb 2026",
    views: 0,
  },
];

const statusStyles: Record<string, string> = {
  Published: "bg-green-50 text-green-700 hover:bg-green-100",
  Draft: "bg-yellow-50 text-yellow-700 hover:bg-yellow-100",
  Archived: "bg-gray-100 text-gray-500 hover:bg-gray-200",
};

export default function BeritaPage() {
  const [filter, setFilter] = useState("Semua");
  const filters = ["Semua", "Published", "Draft", "Archived"];

  const filteredNews =
    filter === "Semua"
      ? newsData
      : newsData.filter((n) => n.status === filter);

  return (
    <div className="space-y-6">
      {/* Toolbar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          {filters.map((f) => (
            <Button
              key={f}
              variant={filter === f ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(f)}
              className={
                filter === f
                  ? "bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90"
                  : "text-gray-600 border-gray-200"
              }
            >
              {f}
              {f !== "Semua" && (
                <span className="ml-1 text-xs opacity-70">
                  ({newsData.filter((n) => n.status === f).length})
                </span>
              )}
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Cari berita..."
              className="h-9 w-64 pl-8 bg-white border-gray-200 text-sm"
            />
          </div>
          <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 h-9">
            <Plus size={16} />
            Tambah Berita
          </Button>
        </div>
      </div>

      {/* News Table */}
      <Card className="border border-gray-100 shadow-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50/80 hover:bg-gray-50/80">
                <TableHead className="text-xs font-semibold text-gray-500 uppercase w-[40%]">
                  Judul
                </TableHead>
                <TableHead className="text-xs font-semibold text-gray-500 uppercase">
                  Kategori
                </TableHead>
                <TableHead className="text-xs font-semibold text-gray-500 uppercase">
                  Status
                </TableHead>
                <TableHead className="text-xs font-semibold text-gray-500 uppercase">
                  Penulis
                </TableHead>
                <TableHead className="text-xs font-semibold text-gray-500 uppercase">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    Tanggal
                  </div>
                </TableHead>
                <TableHead className="text-xs font-semibold text-gray-500 uppercase text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Eye size={12} />
                    Views
                  </div>
                </TableHead>
                <TableHead className="w-10" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredNews.map((news) => (
                <TableRow key={news.id} className="hover:bg-gray-50/50">
                  <TableCell className="font-medium text-gray-900 text-sm">
                    {news.title}
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="bg-blue-50 text-[#1e3a8a] hover:bg-blue-100 text-xs">
                      {news.category}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={statusStyles[news.status] + " text-xs"}>
                      {news.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-gray-600">{news.author}</TableCell>
                  <TableCell className="text-sm text-gray-500">{news.date}</TableCell>
                  <TableCell className="text-sm text-gray-500 text-center">{news.views}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400">
                          <MoreHorizontal size={16} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-40">
                        <DropdownMenuItem className="gap-2 text-sm">
                          <Eye size={14} /> Lihat
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2 text-sm">
                          <Pencil size={14} /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2 text-sm text-[#dc2626] focus:text-[#dc2626]">
                          <Trash2 size={14} /> Hapus
                        </DropdownMenuItem>
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
