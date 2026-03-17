"use client";

import { Save, Plus, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";

const biayaS1 = [
  { item: "SPP per Semester", s_th: "Rp 4.500.000", s_pdk: "Rp 4.500.000" },
  { item: "Biaya Pembangunan (sekali)", s_th: "Rp 5.000.000", s_pdk: "Rp 5.000.000" },
  { item: "Biaya Pendaftaran", s_th: "Rp 350.000", s_pdk: "Rp 350.000" },
  { item: "Biaya Wisuda", s_th: "Rp 1.500.000", s_pdk: "Rp 1.500.000" },
  { item: "Biaya Praktik Lapangan", s_th: "Rp 750.000", s_pdk: "Rp 750.000" },
];

const biayaS2 = [
  { item: "SPP per Semester", mth: "Rp 7.500.000", mpdk: "Rp 7.000.000", mmin: "Rp 8.000.000" },
  { item: "Biaya Pembangunan (sekali)", mth: "Rp 7.000.000", mpdk: "Rp 7.000.000", mmin: "Rp 7.000.000" },
  { item: "Biaya Pendaftaran", mth: "Rp 500.000", mpdk: "Rp 500.000", mmin: "Rp 500.000" },
  { item: "Biaya Tesis", mth: "Rp 3.000.000", mpdk: "Rp 3.000.000", mmin: "Rp 3.000.000" },
  { item: "Biaya Wisuda", mth: "Rp 2.000.000", mpdk: "Rp 2.000.000", mmin: "Rp 2.000.000" },
];

export default function BiayaStudiPage() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="s1">
        <TabsList className="bg-gray-100 p-1">
          <TabsTrigger value="s1" className="data-[state=active]:bg-[#1e3a8a] data-[state=active]:text-white text-sm">
            Program Sarjana (S1)
          </TabsTrigger>
          <TabsTrigger value="s2" className="data-[state=active]:bg-[#1e3a8a] data-[state=active]:text-white text-sm">
            Program Magister (S2)
          </TabsTrigger>
        </TabsList>

        {/* S1 */}
        <TabsContent value="s1" className="mt-6 space-y-4">
          <Card className="border border-gray-100 shadow-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-base">Biaya Studi Program Sarjana</CardTitle>
                  <CardDescription>Edit tabel biaya untuk program S1</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="text-gray-600">
                  <Plus size={14} />
                  Tambah Baris
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#1e3a8a] hover:bg-[#1e3a8a]">
                    <TableHead className="text-white text-xs font-semibold uppercase">Item Biaya</TableHead>
                    <TableHead className="text-white text-xs font-semibold uppercase">S.Th.</TableHead>
                    <TableHead className="text-white text-xs font-semibold uppercase">S.Pd.K.</TableHead>
                    <TableHead className="w-10" />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {biayaS1.map((row, i) => (
                    <TableRow key={i} className="hover:bg-gray-50/50">
                      <TableCell>
                        <Input defaultValue={row.item} className="h-8 text-sm bg-transparent border-gray-200" />
                      </TableCell>
                      <TableCell>
                        <Input defaultValue={row.s_th} className="h-8 text-sm bg-transparent border-gray-200 font-medium" />
                      </TableCell>
                      <TableCell>
                        <Input defaultValue={row.s_pdk} className="h-8 text-sm bg-transparent border-gray-200 font-medium" />
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-300 hover:text-[#dc2626]">
                          <Trash2 size={14} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="border border-gray-100 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Catatan Biaya S1</CardTitle>
            </CardHeader>
            <CardContent>
              <textarea
                className="w-full min-h-[100px] p-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/10 transition-all resize-y"
                defaultValue="* Biaya dapat berubah sewaktu-waktu sesuai kebijakan yayasan.
* Pembayaran SPP dapat dicicil maksimal 2x per semester.
* Biaya di atas belum termasuk biaya buku dan seragam."
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

        {/* S2 */}
        <TabsContent value="s2" className="mt-6 space-y-4">
          <Card className="border border-gray-100 shadow-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-base">Biaya Studi Program Magister</CardTitle>
                  <CardDescription>Edit tabel biaya untuk program S2</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="text-gray-600">
                  <Plus size={14} />
                  Tambah Baris
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#1e3a8a] hover:bg-[#1e3a8a]">
                    <TableHead className="text-white text-xs font-semibold uppercase">Item Biaya</TableHead>
                    <TableHead className="text-white text-xs font-semibold uppercase">M.Th.</TableHead>
                    <TableHead className="text-white text-xs font-semibold uppercase">M.Pd.K.</TableHead>
                    <TableHead className="text-white text-xs font-semibold uppercase">M.Min.</TableHead>
                    <TableHead className="w-10" />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {biayaS2.map((row, i) => (
                    <TableRow key={i} className="hover:bg-gray-50/50">
                      <TableCell>
                        <Input defaultValue={row.item} className="h-8 text-sm bg-transparent border-gray-200" />
                      </TableCell>
                      <TableCell>
                        <Input defaultValue={row.mth} className="h-8 text-sm bg-transparent border-gray-200 font-medium" />
                      </TableCell>
                      <TableCell>
                        <Input defaultValue={row.mpdk} className="h-8 text-sm bg-transparent border-gray-200 font-medium" />
                      </TableCell>
                      <TableCell>
                        <Input defaultValue={row.mmin} className="h-8 text-sm bg-transparent border-gray-200 font-medium" />
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-300 hover:text-[#dc2626]">
                          <Trash2 size={14} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90">
              <Save size={16} />
              Simpan Perubahan
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
