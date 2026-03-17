import type { Metadata } from "next";
import { AdminLayoutClient } from "@/app/admin/components/AdminLayoutClient";

export const metadata: Metadata = {
  title: "Admin CMS — STTB",
  description: "Dashboard Admin CMS Sekolah Tinggi Teologi Bandung",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminLayoutClient>{children}</AdminLayoutClient>;
}
