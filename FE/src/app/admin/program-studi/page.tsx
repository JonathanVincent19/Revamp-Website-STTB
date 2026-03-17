"use client";

import { Pencil, Eye, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";

const programs = [
  { id: 1, name: "Sarjana Teologi (S.Th.)", level: "S1", students: 120, semesters: 8, status: "Aktif" },
  { id: 2, name: "Sarjana Pendidikan Kristen (S.Pd.K.)", level: "S1", students: 85, semesters: 8, status: "Aktif" },
  { id: 3, name: "Magister Teologi Pelayanan Pastoral Gereja Urban", level: "S2", students: 32, semesters: 4, status: "Aktif" },
  { id: 4, name: "Magister Teologi Transformasi Budaya & Masyarakat", level: "S2", students: 18, semesters: 4, status: "Aktif" },
  { id: 5, name: "Magister Pendidikan Kristen (M.Pd.K.)", level: "S2", students: 24, semesters: 4, status: "Aktif" },
  { id: 6, name: "Magister Ministri Marketplace", level: "S2", students: 15, semesters: 4, status: "Aktif" },
  { id: 7, name: "Magister Ministri Kepemimpinan Pastoral", level: "S2", students: 20, semesters: 4, status: "Aktif" },
  { id: 8, name: "Magister Ministri Teologi Pelayanan Gerejawi", level: "S2", students: 12, semesters: 4, status: "Aktif" },
];

export default function ProgramStudiPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card className="border border-gray-100 shadow-sm">
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-[#1e3a8a]">{programs.length}</p>
            <p className="text-sm text-gray-500 mt-1">Total Program</p>
          </CardContent>
        </Card>
        <Card className="border border-gray-100 shadow-sm">
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-green-600">{programs.filter(p => p.level === "S1").length}</p>
            <p className="text-sm text-gray-500 mt-1">Program S1</p>
          </CardContent>
        </Card>
        <Card className="border border-gray-100 shadow-sm">
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-purple-600">{programs.filter(p => p.level === "S2").length}</p>
            <p className="text-sm text-gray-500 mt-1">Program S2</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-3">
        {programs.map((prog) => (
          <Card key={prog.id} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-4 min-w-0">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${prog.level === "S1" ? "bg-blue-50 text-[#1e3a8a]" : "bg-purple-50 text-purple-600"}`}>
                    <GraduationCap size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-sm truncate">{prog.name}</p>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <Badge variant="secondary" className={prog.level === "S1" ? "bg-blue-50 text-[#1e3a8a] text-xs" : "bg-purple-50 text-purple-600 text-xs"}>{prog.level}</Badge>
                      <span className="text-xs text-gray-400">{prog.students} mahasiswa</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-400">{prog.semesters} semester</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-green-50 text-green-700 text-xs">{prog.status}</Badge>
                  <Button variant="outline" size="sm" className="text-gray-600 h-8"><Eye size={14} /> Lihat</Button>
                  <Button variant="outline" size="sm" className="text-[#1e3a8a] border-[#1e3a8a]/30 h-8"><Pencil size={14} /> Edit</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
