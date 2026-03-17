"use client";

import { useState } from "react";
import { Save, Upload, Plus, Pencil, Trash2, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Badge } from "@/app/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Label } from "@/app/components/ui/label";

const dosenData = [
  { id: 1, name: "Dr. Theol. Johannes Rahardjo", jabatan: "Ketua STTB", bidang: "Teologi Sistematika" },
  { id: 2, name: "Dr. Maria Susanti, M.Th.", jabatan: "Wakil Ketua I", bidang: "Pendidikan Kristen" },
  { id: 3, name: "Pdt. Dr. Samuel Tanujaya", jabatan: "Wakil Ketua II", bidang: "Teologi Pastoral" },
  { id: 4, name: "Dr. Ruth Magdalena, M.A.", jabatan: "Dosen Tetap", bidang: "Perjanjian Baru" },
  { id: 5, name: "Dr. David Kurniawan, M.Div.", jabatan: "Dosen Tetap", bidang: "Perjanjian Lama" },
];

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="visi-misi" className="w-full">
        <TabsList className="bg-gray-100 p-1 h-auto flex-wrap">
          <TabsTrigger value="visi-misi" className="data-[state=active]:bg-[#1e3a8a] data-[state=active]:text-white text-sm">
            Visi & Misi
          </TabsTrigger>
          <TabsTrigger value="sejarah" className="data-[state=active]:bg-[#1e3a8a] data-[state=active]:text-white text-sm">
            Sejarah
          </TabsTrigger>
          <TabsTrigger value="dosen" className="data-[state=active]:bg-[#1e3a8a] data-[state=active]:text-white text-sm">
            Dewan Dosen
          </TabsTrigger>
          <TabsTrigger value="yayasan" className="data-[state=active]:bg-[#1e3a8a] data-[state=active]:text-white text-sm">
            Yayasan
          </TabsTrigger>
        </TabsList>

        {/* Visi & Misi */}
        <TabsContent value="visi-misi" className="mt-6 space-y-4">
          <Card className="border border-gray-100 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Visi</CardTitle>
            </CardHeader>
            <CardContent>
              <textarea
                className="w-full min-h-[120px] p-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/10 transition-all resize-y"
                defaultValue="Menjadi komunitas akademis Kristen yang menghasilkan pastor-scholars yang berkualitas, berkarakter, dan berdampak bagi transformasi gereja dan masyarakat."
              />
            </CardContent>
          </Card>
          <Card className="border border-gray-100 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Misi</CardTitle>
            </CardHeader>
            <CardContent>
              <textarea
                className="w-full min-h-[200px] p-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/10 transition-all resize-y"
                defaultValue={"1. Menyelenggarakan pendidikan teologi yang berkualitas tinggi\n2. Mempersiapkan pastor-scholars yang transformatif untuk pelayanan urban\n3. Mengembangkan penelitian teologi yang kontekstual\n4. Membangun komunitas akademik yang inklusif dan inovatif"}
              />
            </CardContent>
          </Card>
          <div className="flex justify-end">
            <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90">
              <Save size={16} />
              Simpan Perubahan
            </Button>
          </div>
        </TabsContent>

        {/* Sejarah */}
        <TabsContent value="sejarah" className="mt-6">
          <Card className="border border-gray-100 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Konten Sejarah</CardTitle>
              <CardDescription>Edit konten halaman sejarah STTB</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-sm">Tahun Berdiri</Label>
                <Input defaultValue="1955" className="bg-gray-50 focus:bg-white" />
              </div>
              <div className="space-y-2">
                <Label className="text-sm">Konten Sejarah</Label>
                <textarea
                  className="w-full min-h-[300px] p-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/10 transition-all resize-y"
                  defaultValue="Sekolah Tinggi Teologi Bandung (STTB) didirikan pada tahun 1955 oleh para tokoh gereja yang memiliki visi untuk mempersiapkan hamba-hamba Tuhan yang berkualitas..."
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm">Foto Sejarah</Label>
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
                  <Upload size={24} className="mx-auto text-gray-300 mb-2" />
                  <p className="text-xs text-gray-400">Upload foto sejarah</p>
                </div>
              </div>
              <div className="flex justify-end">
                <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90">
                  <Save size={16} />
                  Simpan
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Dewan Dosen */}
        <TabsContent value="dosen" className="mt-6 space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">{dosenData.length} dosen terdaftar</p>
            <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90" size="sm">
              <Plus size={16} />
              Tambah Dosen
            </Button>
          </div>
          {dosenData.map((dosen) => (
            <Card key={dosen.id} className="border border-gray-100 shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400 text-lg font-bold">
                      {dosen.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{dosen.name}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <Badge variant="secondary" className="bg-blue-50 text-[#1e3a8a] text-xs">
                          {dosen.jabatan}
                        </Badge>
                        <span className="text-xs text-gray-400">{dosen.bidang}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-[#1e3a8a]">
                      <Pencil size={14} />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-[#dc2626]">
                      <Trash2 size={14} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Yayasan */}
        <TabsContent value="yayasan" className="mt-6">
          <Card className="border border-gray-100 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Informasi Yayasan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm">Nama Yayasan</Label>
                  <Input defaultValue="Yayasan Pendidikan Teologi Bandung" className="bg-gray-50 focus:bg-white" />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm">Tahun Didirikan</Label>
                  <Input defaultValue="1953" className="bg-gray-50 focus:bg-white" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-sm">Deskripsi</Label>
                <textarea
                  className="w-full min-h-[150px] p-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/10 transition-all resize-y"
                  defaultValue="Yayasan Pendidikan Teologi Bandung adalah lembaga yang menaungi Sekolah Tinggi Teologi Bandung..."
                />
              </div>
              <div className="flex justify-end">
                <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90">
                  <Save size={16} />
                  Simpan
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
