"use client";

import { SidebarProvider, SidebarInset } from "@/app/components/ui/sidebar";
import { AdminSidebar } from "./AdminSidebar";
import { AdminHeader } from "./AdminHeader";

export function AdminLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
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
