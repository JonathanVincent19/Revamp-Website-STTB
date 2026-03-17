"use client";

import { usePathname } from "next/navigation";
import { STTBNavbar } from "./sttb/STTBNavbar";
import { STTBFooter } from "./sttb/STTBFooter";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-white">
      <STTBNavbar />
      <main className="min-h-screen">{children}</main>
      <STTBFooter />
    </div>
  );
}
