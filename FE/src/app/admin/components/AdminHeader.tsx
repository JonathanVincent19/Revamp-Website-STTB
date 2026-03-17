"use client";

import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import { SidebarTrigger } from "@/app/components/ui/sidebar";
import { Separator } from "@/app/components/ui/separator";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";

const pageTitles: Record<string, string> = {
  "/admin": "Dashboard",
  "/admin/berita": "Manajemen Berita",
  "/admin/media": "Manajemen Media",
  "/admin/jurnal": "Manajemen Jurnal",
  "/admin/program-studi": "Program Studi",
  "/admin/jadwal": "Jadwal",
  "/admin/beasiswa": "Beasiswa",
  "/admin/biaya-studi": "Biaya Studi",
  "/admin/admisi": "Admisi",
  "/admin/faq": "FAQ",
  "/admin/about": "About",
  "/admin/fasilitas": "Fasilitas",
  "/admin/pembinaan": "Pembinaan",
  "/admin/senat": "Senat",
  "/admin/pesan": "Pesan Masuk",
  "/admin/users": "Manajemen User",
  "/admin/settings": "Site Settings",
};

export function AdminHeader() {
  const pathname = usePathname();
  const title = pageTitles[pathname] || "Admin";

  return (
    <header className="sticky top-0 z-40 flex h-14 items-center gap-3 border-b border-gray-200 bg-white/95 backdrop-blur-sm px-4">
      <SidebarTrigger className="text-gray-500 hover:text-[#1e3a8a]" />
      <Separator orientation="vertical" className="h-5" />

      <div className="flex flex-1 items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-gray-900">{title}</h1>
        </div>

        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Cari..."
              className="h-9 w-56 pl-8 bg-gray-50 border-gray-200 focus:border-[#1e3a8a] text-sm"
            />
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative text-gray-500 hover:text-[#1e3a8a]">
            <Bell size={18} />
            <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#dc2626] text-[9px] font-bold text-white">
              3
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
