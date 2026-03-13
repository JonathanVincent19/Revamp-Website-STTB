import type { Metadata } from "next";
import "@/styles/index.css";
import { LayoutShell } from "./components/LayoutShell";

export const metadata: Metadata = {
  title: "STTB - Sekolah Tinggi Teologi Bandung",
  description:
    "Sekolah Tinggi Teologi Bandung - Mempersiapkan pastor-scholars yang transformatif untuk pelayanan urban.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
