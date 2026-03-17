"use client";

import { useState } from "react";
import {
  Search,
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2,
  UserPlus,
  Download,
  Filter,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Badge } from "@/app/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
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

const pendaftarData = [
  { id: 1, nama: "Jonathan Vincent", program: "S.Th.", gelombang: "Gel. 1", tanggal: "10 Mar 2026", status: "Lolos" },
  { id: 2, nama: "Maria Susanto", program: "M.Th. Pastoral", gelombang: "Gel. 1", tanggal: "8 Mar 2026", status: "Pending" },
  { id: 3, nama: "David Pratama", program: "S.Pd.K.", gelombang: "Gel. 1", tanggal: "7 Mar 2026", status: "Lolos" },
  { id: 4, nama: "Sarah Tan", program: "M.Min. Marketplace", gelombang: "Gel. 2", tanggal: "5 Mar 2026", status: "Pending" },
  { id: 5, nama: "Andreas Wijaya", program: "M.Pd.K.", gelombang: "Gel. 1", tanggal: "3 Mar 2026", status: "Tidak Lolos" },
  { id: 6, nama: "Grace Lim", program: "S.Th.", gelombang: "Gel. 2", tanggal: "1 Mar 2026", status: "Pending" },
];

const statusStyles: Record<string, string> = {
  Lolos: "bg-green-50 text-green-700",
  Pending: "bg-yellow-50 text-yellow-700",
  "Tidak Lolos": "bg-red-50 text-[#dc2626]",
};

export default function AdmisiPage() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card className="border border-gray-100 shadow-sm">
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-[#1e3a8a]">156</p>
            <p className="text-sm text-gray-500 mt-1">Total Pendaftar</p>
          </CardContent>
        </Card>
        <Card className="border border-gray-100 shadow-sm">
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-green-600">98</p>
            <p className="text-sm text-gray-500 mt-1">Diterima</p>
          </CardContent>
        </Card>
        <Card className="border border-gray-100 shadow-sm">
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-yellow-600">42</p>
            <p className="text-sm text-gray-500 mt-1">Menunggu Review</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="pendaftar">
        <TabsList className="bg-gray-100 p-1">
          <TabsTrigger value="pendaftar" className="data-[state=active]:bg-[#1e3a8a] data-[state=active]:text-white text-sm">
            Data Pendaftar
          </TabsTrigger>
          <TabsTrigger value="prosedur" className="data-[state=active]:bg-[#1e3a8a] data-[state=active]:text-white text-sm">
            Prosedur
          </TabsTrigger>
          <TabsTrigger value="persyaratan" className="data-[state=active]:bg-[#1e3a8a] data-[state=active]:text-white text-sm">
            Persyaratan
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pendaftar" className="mt-6 space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input placeholder="Cari pendaftar..." className="h-9 w-72 pl-8 bg-white text-sm" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="text-gray-600">
                <Download size={14} />
                Export
              </Button>
              <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90" size="sm">
                <UserPlus size={14} />
                Tambah Pendaftar
              </Button>
            </div>
          </div>

          <Card className="border border-gray-100 shadow-sm">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50/80 hover:bg-gray-50/80">
                    <TableHead className="text-xs font-semibold text-gray-500 uppercase">Nama</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-500 uppercase">Program</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-500 uppercase">Gelombang</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-500 uppercase">Tanggal</TableHead>
                    <TableHead className="text-xs font-semibold text-gray-500 uppercase">Status</TableHead>
                    <TableHead className="w-10" />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendaftarData.map((p) => (
                    <TableRow key={p.id} className="hover:bg-gray-50/50">
                      <TableCell className="font-medium text-gray-900 text-sm">{p.nama}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="bg-blue-50 text-[#1e3a8a] text-xs">
                          {p.program}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-gray-600">{p.gelombang}</TableCell>
                      <TableCell className="text-sm text-gray-500">{p.tanggal}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className={`${statusStyles[p.status]} text-xs`}>
                          {p.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400">
                              <MoreHorizontal size={16} />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem className="gap-2 text-sm"><Eye size={14} /> Detail</DropdownMenuItem>
                            <DropdownMenuItem className="gap-2 text-sm"><Pencil size={14} /> Edit Status</DropdownMenuItem>
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
        </TabsContent>

        <TabsContent value="prosedur" className="mt-6">
          <Card className="border border-gray-100 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Konten Prosedur Pendaftaran</CardTitle>
              <CardDescription>Edit langkah-langkah pendaftaran yang ditampilkan di website</CardDescription>
            </CardHeader>
            <CardContent>
              <textarea
                className="w-full min-h-[300px] p-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/10 transition-all resize-y"
                defaultValue={"1. Mengisi formulir pendaftaran online\n2. Mengunggah dokumen persyaratan\n3. Membayar biaya pendaftaran\n4. Mengikuti tes masuk\n5. Pengumuman hasil seleksi"}
              />
              <div className="flex justify-end mt-4">
                <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90">Simpan</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="persyaratan" className="mt-6">
          <Card className="border border-gray-100 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Konten Persyaratan Pendaftaran</CardTitle>
              <CardDescription>Edit informasi persyaratan yang ditampilkan di website</CardDescription>
            </CardHeader>
            <CardContent>
              <textarea
                className="w-full min-h-[300px] p-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/10 transition-all resize-y"
                defaultValue={"Program Sarjana (S1):\n- Ijazah SMA/sederajat\n- Transkrip nilai\n- Surat rekomendasi gereja\n- Pas foto 3x4\n\nProgram Magister (S2):\n- Ijazah S1 Teologi\n- Transkrip nilai S1\n- Surat rekomendasi (2 buah)\n- Proposal penelitian"}
              />
              <div className="flex justify-end mt-4">
                <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90">Simpan</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
