"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { SidebarProvider, SidebarInset } from "@/app/components/ui/sidebar";
import { AdminSidebar } from "./AdminSidebar";
import { AdminHeader } from "./AdminHeader";

export function AdminLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Client-side authentication check
    // Hanya periksa jika pengguna TIDAK berada di halaman login
    if (pathname !== "/admin/login") {
      const token = localStorage.getItem("sttb_token");
      if (!token) {
        // Jika tidak ada token (belum login), tendang ke halaman login
        router.push("/admin/login");
      }
    }
  }, [pathname, router]);

  // Jika di halaman login, jangan tampilkan sidebar dan header
  if (pathname === "/admin/login") {
    return <main className="min-h-screen bg-white">{children}</main>;
  }

  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <AdminHeader />
        <div className="flex-1 bg-gray-50/50 p-4 md:p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
