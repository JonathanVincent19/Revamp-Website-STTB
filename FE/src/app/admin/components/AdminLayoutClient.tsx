"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { SidebarProvider, SidebarInset } from "@/app/components/ui/sidebar";
import { AdminSidebar } from "./AdminSidebar";
import { AdminHeader } from "./AdminHeader";
import { authApi } from "@/lib/api";
import { Loader2 } from "lucide-react";

export function AdminLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      if (pathname === "/admin/login") {
        setIsCheckingAuth(false);
        return;
      }

      const token = localStorage.getItem("sttb_token");
      if (!token) {
        router.push("/admin/login");
        return;
      }

      try {
        const res = await authApi.getProfile();
        if (!res.success) {
          localStorage.removeItem("sttb_token");
          router.push("/admin/login");
        }
      } catch {
        localStorage.removeItem("sttb_token");
        router.push("/admin/login");
      } finally {
        setIsCheckingAuth(false);
      }
    };

    checkAuth();
  }, [pathname, router]);

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="h-8 w-8 animate-spin text-[#1e3a8a]" />
      </div>
    );
  }

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
