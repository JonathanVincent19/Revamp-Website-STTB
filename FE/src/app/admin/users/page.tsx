"use client";

import { Plus, Search, MoreHorizontal, Pencil, Trash2, Shield, UserCog, Eye } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Badge } from "@/app/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/app/components/ui/avatar";

const users = [
  { id: 1, name: "Admin STTB", email: "admin@sttb.ac.id", role: "Super Admin", status: "Aktif", lastLogin: "12 Mar 2026, 10:30" },
  { id: 2, name: "Editor Konten", email: "editor@sttb.ac.id", role: "Editor", status: "Aktif", lastLogin: "11 Mar 2026, 14:22" },
  { id: 3, name: "Staff Admisi", email: "admisi@sttb.ac.id", role: "Editor", status: "Aktif", lastLogin: "10 Mar 2026, 09:15" },
  { id: 4, name: "Viewer", email: "viewer@sttb.ac.id", role: "Viewer", status: "Nonaktif", lastLogin: "5 Mar 2026, 16:45" },
];

const roleStyles: Record<string, string> = {
  "Super Admin": "bg-red-50 text-[#dc2626]",
  Editor: "bg-blue-50 text-[#1e3a8a]",
  Viewer: "bg-gray-100 text-gray-600",
};

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input placeholder="Cari user..." className="h-9 w-64 pl-8 bg-white text-sm" />
        </div>
        <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 h-9">
          <Plus size={16} /> Tambah User
        </Button>
      </div>

      <Card className="border border-gray-100 shadow-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50/80 hover:bg-gray-50/80">
                <TableHead className="text-xs font-semibold text-gray-500 uppercase">User</TableHead>
                <TableHead className="text-xs font-semibold text-gray-500 uppercase">Role</TableHead>
                <TableHead className="text-xs font-semibold text-gray-500 uppercase">Status</TableHead>
                <TableHead className="text-xs font-semibold text-gray-500 uppercase">Login Terakhir</TableHead>
                <TableHead className="w-10" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id} className="hover:bg-gray-50/50">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarFallback className="bg-[#1e3a8a] text-white text-xs font-bold">
                          {user.name.split(" ").map(n => n[0]).join("").slice(0,2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-400">{user.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={`${roleStyles[user.role]} text-xs`}>
                      <Shield size={10} className="mr-1" />{user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={user.status === "Aktif" ? "bg-green-50 text-green-700 text-xs" : "bg-gray-100 text-gray-500 text-xs"}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-gray-500">{user.lastLogin}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400"><MoreHorizontal size={16} /></Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="gap-2 text-sm"><Pencil size={14} /> Edit</DropdownMenuItem>
                        <DropdownMenuItem className="gap-2 text-sm"><UserCog size={14} /> Ubah Role</DropdownMenuItem>
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
