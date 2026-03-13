"use client";

import { useState } from "react";
import {
  Upload,
  Search,
  Grid3X3,
  List,
  MoreHorizontal,
  Trash2,
  Download,
  Image as ImageIcon,
  Video,
  FileText,
  Eye,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Badge } from "@/app/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";

const mediaItems = [
  { id: 1, name: "wisuda-2025.jpg", type: "image", size: "2.4 MB", date: "12 Mar 2026", dimensions: "1920×1080" },
  { id: 2, name: "kampus-aerial.jpg", type: "image", size: "3.1 MB", date: "10 Mar 2026", dimensions: "4000×2250" },
  { id: 3, name: "khotbah-minggu.mp4", type: "video", size: "45 MB", date: "9 Mar 2026", dimensions: "1920×1080" },
  { id: 4, name: "brosur-2026.pdf", type: "document", size: "1.2 MB", date: "8 Mar 2026", dimensions: "-" },
  { id: 5, name: "pembinaan-feb.jpg", type: "image", size: "1.8 MB", date: "7 Mar 2026", dimensions: "1600×1200" },
  { id: 6, name: "seminar-teologi.jpg", type: "image", size: "2.0 MB", date: "5 Mar 2026", dimensions: "1920×1080" },
  { id: 7, name: "chapel-interior.jpg", type: "image", size: "4.5 MB", date: "3 Mar 2026", dimensions: "3840×2160" },
  { id: 8, name: "testimonial-alumni.mp4", type: "video", size: "32 MB", date: "1 Mar 2026", dimensions: "1920×1080" },
];

const typeIcons: Record<string, React.ElementType> = {
  image: ImageIcon,
  video: Video,
  document: FileText,
};

const typeColors: Record<string, string> = {
  image: "bg-blue-50 text-[#1e3a8a]",
  video: "bg-purple-50 text-purple-600",
  document: "bg-orange-50 text-orange-600",
};

export default function MediaPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [filter, setFilter] = useState("Semua");
  const filters = ["Semua", "image", "video", "document"];
  const filterLabels: Record<string, string> = {
    Semua: "Semua",
    image: "Gambar",
    video: "Video",
    document: "Dokumen",
  };

  const filteredMedia =
    filter === "Semua"
      ? mediaItems
      : mediaItems.filter((m) => m.type === filter);

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <Card className="border-2 border-dashed border-gray-200 bg-gray-50/30 hover:border-[#1e3a8a]/30 hover:bg-blue-50/20 transition-colors cursor-pointer">
        <CardContent className="flex flex-col items-center justify-center py-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 mb-3">
            <Upload size={24} className="text-[#1e3a8a]" />
          </div>
          <p className="text-sm font-semibold text-gray-700 mb-1">
            Klik atau drag & drop file di sini
          </p>
          <p className="text-xs text-gray-400">
            Mendukung JPG, PNG, MP4, PDF (Maks. 50MB)
          </p>
          <Button className="mt-4 bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90" size="sm">
            <Upload size={14} />
            Pilih File
          </Button>
        </CardContent>
      </Card>

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
              {filterLabels[f]}
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Cari media..."
              className="h-9 w-56 pl-8 bg-white border-gray-200 text-sm"
            />
          </div>
          <div className="flex border border-gray-200 rounded-lg overflow-hidden">
            <Button
              variant="ghost"
              size="icon"
              className={`h-9 w-9 rounded-none ${view === "grid" ? "bg-[#1e3a8a] text-white" : "text-gray-500"}`}
              onClick={() => setView("grid")}
            >
              <Grid3X3 size={16} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`h-9 w-9 rounded-none ${view === "list" ? "bg-[#1e3a8a] text-white" : "text-gray-500"}`}
              onClick={() => setView("list")}
            >
              <List size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Media Grid/List */}
      {view === "grid" ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filteredMedia.map((item) => {
            const Icon = typeIcons[item.type];
            return (
              <Card key={item.id} className="group border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden">
                <div className="relative aspect-[4/3] bg-gray-100 flex items-center justify-center">
                  <Icon size={40} className="text-gray-300" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button size="icon" variant="ghost" className="text-white hover:bg-white/20 h-9 w-9">
                      <Eye size={18} />
                    </Button>
                    <Button size="icon" variant="ghost" className="text-white hover:bg-white/20 h-9 w-9">
                      <Download size={18} />
                    </Button>
                    <Button size="icon" variant="ghost" className="text-white hover:bg-white/20 h-9 w-9">
                      <Trash2 size={18} />
                    </Button>
                  </div>
                  <Badge
                    className={`absolute top-2 right-2 ${typeColors[item.type]} text-[10px] font-semibold`}
                    variant="secondary"
                  >
                    {item.type.toUpperCase()}
                  </Badge>
                </div>
                <CardContent className="p-3">
                  <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-gray-400">{item.size}</span>
                    <span className="text-xs text-gray-400">{item.date}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        <Card className="border border-gray-100 shadow-sm">
          <CardContent className="p-0">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50/80 border-b border-gray-100">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Nama File</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Tipe</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Ukuran</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Dimensi</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Tanggal</th>
                  <th className="px-4 py-3 w-10" />
                </tr>
              </thead>
              <tbody>
                {filteredMedia.map((item) => {
                  const Icon = typeIcons[item.type];
                  return (
                    <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${typeColors[item.type]}`}>
                            <Icon size={16} />
                          </div>
                          <span className="text-sm font-medium text-gray-900">{item.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant="secondary" className={`${typeColors[item.type]} text-xs`}>
                          {item.type}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">{item.size}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{item.dimensions}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{item.date}</td>
                      <td className="px-4 py-3">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400">
                              <MoreHorizontal size={16} />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem className="gap-2 text-sm"><Eye size={14} /> Lihat</DropdownMenuItem>
                            <DropdownMenuItem className="gap-2 text-sm"><Download size={14} /> Download</DropdownMenuItem>
                            <DropdownMenuItem className="gap-2 text-sm text-[#dc2626]"><Trash2 size={14} /> Hapus</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
