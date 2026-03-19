"use client";

import { Plus, Search, MoreHorizontal, Pencil, Trash2, Shield, UserCog, Eye } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Badge } from "@/app/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/app/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/app/components/ui/dialog";
import { Label } from "@/app/components/ui/label";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authApi, type User } from "@/lib/api";
import { useAdminUsers, useCreateUser, useUpdateUser, useDeleteUser } from "@/lib/hooks";

const roleStyles: Record<string, string> = {
  "Super Admin": "bg-red-50 text-[#dc2626]",
  Editor: "bg-blue-50 text-[#1e3a8a]",
  Viewer: "bg-gray-100 text-gray-600",
};

export default function UsersPage() {
  const router = useRouter();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  const { data: users, loading: loadingUsers, refetch } = useAdminUsers();
  const { mutate: deleteUser } = useDeleteUser();
  const { mutate: createUser, loading: isCreating } = useCreateUser();
  const { mutate: updateUser, loading: isUpdating } = useUpdateUser();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "Editor" });

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await authApi.getProfile();
        if (!res.success) {
          router.push("/login");
        }
      } catch {
        router.push("/login");
      } finally {
        setIsCheckingAuth(false);
      }
    };
    checkAuth();
  }, [router]);

  const handleDelete = async (id: number) => {
    if (window.confirm("Yakin ingin menghapus user ini?")) {
      await deleteUser(id);
      refetch();
    }
  };

  const handleOpenAdd = () => {
    setEditingUser(null);
    setFormData({ name: "", email: "", password: "", role: "Editor" });
    setIsDialogOpen(true);
  };

  const handleOpenEdit = (user: User) => {
    setEditingUser(user);
    setFormData({ name: user.name, email: user.email, password: "", role: user.isAdmin ? "Super Admin" : "Editor" });
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        password: formData.password || undefined,
        isAdmin: formData.role === "Super Admin",
      };

      if (editingUser) {
        await updateUser({ ...payload, id: editingUser.id });
      } else {
        await createUser(payload);
      }
      setIsDialogOpen(false);
      refetch();
    } catch {
      alert("Gagal menyimpan data user");
    }
  };

  if (isCheckingAuth || loadingUsers) {
    return (
      <div className="flex items-center justify-center p-12 text-gray-500">
        <Loader2 className="mr-2 h-6 w-6 animate-spin" />
        Memuat data...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input placeholder="Cari user..." className="h-9 w-64 pl-8 bg-white text-sm" />
        </div>
        <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 h-9" onClick={handleOpenAdd}>
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
              {users?.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-4 text-gray-500">Belum ada user.</TableCell>
                </TableRow>
              ) : (
                users?.map((user) => (
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
                    <Badge variant="secondary" className={`${roleStyles[user.isAdmin ? "Super Admin" : "Editor"]} text-xs`}>
                      <Shield size={10} className="mr-1" />{user.isAdmin ? "Super Admin" : "Editor"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={"bg-green-50 text-green-700 text-xs"}>
                      Aktif
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-gray-500">{new Date(user.createdAt || "").toLocaleDateString()}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400"><MoreHorizontal size={16} /></Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="gap-2 text-sm" onClick={() => handleOpenEdit(user)}><Pencil size={14} /> Edit</DropdownMenuItem>
                        <DropdownMenuItem className="gap-2 text-sm text-[#dc2626]" onClick={() => handleDelete(user.id)}><Trash2 size={14} /> Hapus</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              )))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{editingUser ? "Edit User" : "Tambah User Baru"}</DialogTitle>
            <DialogDescription>
              Isi data berikut untuk {editingUser ? "mengubah data" : "membuat"} user.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm">Nama Lengkap <span className="text-red-500">*</span></Label>
              <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="h-9" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm">Email Aktif <span className="text-red-500">*</span></Label>
              <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="h-9" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm">Password {editingUser && <span className="text-xs text-gray-400 font-normal">(Kosongkan jika tidak ingin diubah)</span>} {!editingUser && <span className="text-red-500">*</span>}</Label>
              <Input id="password" type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required={!editingUser} className="h-9" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role" className="text-sm">Akses Role <span className="text-red-500">*</span></Label>
              <select id="role" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} required className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                <option value="Editor">Editor</option>
                <option value="Super Admin">Super Admin</option>
              </select>
            </div>
            <DialogFooter className="mt-6 border-t pt-4">
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Batal</Button>
              <Button type="submit" disabled={isCreating || isUpdating} className="bg-[#1e3a8a] text-white">
                {(isCreating || isUpdating) && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Simpan
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
