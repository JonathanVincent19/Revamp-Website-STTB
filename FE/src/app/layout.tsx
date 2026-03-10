import type { Metadata } from "next";
import "@/styles/index.css";
import { STTBNavbar } from "./components/sttb/STTBNavbar";
import { STTBFooter } from "./components/sttb/STTBFooter";

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
        <div className="min-h-screen bg-white">
          <STTBNavbar />
          <main className="min-h-screen">{children}</main>
          <STTBFooter />
        </div>
      </body>
    </html>
  );
}
