"use client";

import { Save, Upload } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="general">
        <TabsList className="bg-gray-100 p-1 flex-wrap h-auto">
          <TabsTrigger value="general" className="data-[state=active]:bg-[#1e3a8a] data-[state=active]:text-white text-sm">Umum</TabsTrigger>
          <TabsTrigger value="contact" className="data-[state=active]:bg-[#1e3a8a] data-[state=active]:text-white text-sm">Kontak</TabsTrigger>
          <TabsTrigger value="social" className="data-[state=active]:bg-[#1e3a8a] data-[state=active]:text-white text-sm">Media Sosial</TabsTrigger>
          <TabsTrigger value="footer" className="data-[state=active]:bg-[#1e3a8a] data-[state=active]:text-white text-sm">Footer</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-6 space-y-6">
          <Card className="border border-gray-100 shadow-sm">
            <CardHeader><CardTitle className="text-base">Informasi Institusi</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm">Nama Institusi</Label>
                  <Input defaultValue="Sekolah Tinggi Teologi Bandung" className="bg-gray-50 focus:bg-white" />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm">Singkatan</Label>
                  <Input defaultValue="STTB" className="bg-gray-50 focus:bg-white" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-sm">Deskripsi Website</Label>
                <textarea className="w-full min-h-[80px] p-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-[#1e3a8a] focus:outline-none resize-y" defaultValue="Mempersiapkan pastor-scholars yang transformatif untuk pelayanan urban." />
              </div>
              <div className="space-y-2">
                <Label className="text-sm">Logo</Label>
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-[#1e3a8a] text-white text-xl font-bold">STTB</div>
                  <Button variant="outline" size="sm"><Upload size={14} /> Ganti Logo</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex justify-end">
            <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90"><Save size={16} /> Simpan</Button>
          </div>
        </TabsContent>

        <TabsContent value="contact" className="mt-6 space-y-6">
          <Card className="border border-gray-100 shadow-sm">
            <CardHeader><CardTitle className="text-base">Informasi Kontak</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-sm">Alamat</Label>
                <textarea className="w-full min-h-[60px] p-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-[#1e3a8a] focus:outline-none resize-y" defaultValue="Jl. Cihampelas No. 16, Bandung 40131" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2"><Label className="text-sm">Telepon</Label><Input defaultValue="(022) 2032196" className="bg-gray-50 focus:bg-white" /></div>
                <div className="space-y-2"><Label className="text-sm">Email</Label><Input defaultValue="info@sttb.ac.id" className="bg-gray-50 focus:bg-white" /></div>
              </div>
            </CardContent>
          </Card>
          <div className="flex justify-end">
            <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90"><Save size={16} /> Simpan</Button>
          </div>
        </TabsContent>

        <TabsContent value="social" className="mt-6 space-y-6">
          <Card className="border border-gray-100 shadow-sm">
            <CardHeader><CardTitle className="text-base">Akun Media Sosial</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {["Facebook", "Instagram", "YouTube", "Twitter / X"].map((s) => (
                <div key={s} className="space-y-2"><Label className="text-sm">{s}</Label><Input placeholder={`https://${s.toLowerCase().replace(/ \/ /g,"")}.com/sttb`} className="bg-gray-50 focus:bg-white" /></div>
              ))}
            </CardContent>
          </Card>
          <div className="flex justify-end">
            <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90"><Save size={16} /> Simpan</Button>
          </div>
        </TabsContent>

        <TabsContent value="footer" className="mt-6 space-y-6">
          <Card className="border border-gray-100 shadow-sm">
            <CardHeader><CardTitle className="text-base">Konten Footer</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2"><Label className="text-sm">Teks Copyright</Label><Input defaultValue="© 2026 STTB. All rights reserved." className="bg-gray-50 focus:bg-white" /></div>
              <div className="space-y-2"><Label className="text-sm">Jam Operasional</Label><Input defaultValue="Senin - Jumat: 08.00 - 16.00 WIB" className="bg-gray-50 focus:bg-white" /></div>
            </CardContent>
          </Card>
          <div className="flex justify-end">
            <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90"><Save size={16} /> Simpan</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
