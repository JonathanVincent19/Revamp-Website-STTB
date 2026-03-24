"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { adminContactsApi, authApi } from "@/lib/api";

import {
  LayoutDashboard,
  Newspaper,
  Image,
  BookOpen,
  GraduationCap,
  Calendar,
  Award,
  Wallet,
  UserPlus,
  HelpCircle,
  Info,
  Building2,
  Heart,
  Users,
  Mail,
  UserCog,
  Settings,
  LogOut,
  MessageSquareQuote,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/app/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/app/components/ui/avatar";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  badge?: number;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

const navGroups: NavGroup[] = [
  {
    label: "Utama",
    items: [
      { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    ],
  },
  {
    label: "Konten",
    items: [
      { label: "Berita", href: "/admin/berita", icon: Newspaper },
      { label: "Media", href: "/admin/media", icon: Image },
      { label: "Jurnal", href: "/admin/jurnal", icon: BookOpen },
    ],
  },
  {
    label: "Akademik",
    items: [
      { label: "Program Studi", href: "/admin/program-studi", icon: GraduationCap },
      { label: "Jadwal", href: "/admin/jadwal", icon: Calendar },
      { label: "Beasiswa", href: "/admin/beasiswa", icon: Award },
      { label: "Biaya Studi", href: "/admin/biaya-studi", icon: Wallet },
    ],
  },
  {
    label: "Penerimaan",
    items: [
      { label: "Admisi", href: "/admin/admisi", icon: UserPlus },
      { label: "FAQ", href: "/admin/faq", icon: HelpCircle },
    ],
  },
  {
    label: "Kampus",
    items: [
      { label: "About", href: "/admin/about", icon: Info },
      { label: "Dosen", href: "/admin/dosen", icon: GraduationCap },
      { label: "Testimoni", href: "/admin/testimonials", icon: MessageSquareQuote },
      { label: "Fasilitas", href: "/admin/fasilitas", icon: Building2 },
      { label: "Pembinaan", href: "/admin/pembinaan", icon: Heart },
      { label: "Senat", href: "/admin/senat", icon: Users },
    ],
  },
  {
    label: "Komunikasi",
    items: [
      { label: "Pesan Masuk", href: "/admin/pesan", icon: Mail },
    ],
  },
  {
    label: "Sistem",
    items: [
      { label: "Manajemen User", href: "/admin/users", icon: UserCog },
      { label: "Site Settings", href: "/admin/settings", icon: Settings },
    ],
  },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [unreadCount, setUnreadCount] = useState<number>(0);

  const handleLogout = async () => {
    try {
      await authApi.logout();
    } catch (error) {
      console.error("Logout error", error);
    } finally {
      localStorage.removeItem("sttb_token");
      router.push("/admin/login");
    }
  };

  useEffect(() => {
    const fetchUnreadCount = async () => {
      try {
        const res = await adminContactsApi.getList({ page: 1, pageSize: 1, isRead: false });
        if (res.success && res.totalCount !== undefined) {
          setUnreadCount(res.totalCount);
        }
      } catch (error) {
        console.error("Failed to fetch unread messages count:", error);
      }
    };

    fetchUnreadCount();

    // Listen for manual trigger (e.g. from PesanPage)
    const handleRefresh = () => fetchUnreadCount();
    window.addEventListener("refresh-unread-count", handleRefresh);

    // Refresh count every 1 minute (more responsive for "+1" detection)
    const intervalId = setInterval(fetchUnreadCount, 60 * 1000);

    return () => {
      window.removeEventListener("refresh-unread-count", handleRefresh);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Sidebar collapsible="icon" className="border-r border-gray-200">
      {/* Sidebar Header — STTB Branding */}
      <SidebarHeader className="border-b border-gray-200 px-4 py-4">
        <Link href="/admin" className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1e3a8a] text-white">
            <BookOpen size={18} />
          </div>
          <div className="flex flex-col leading-tight group-data-[collapsible=icon]:hidden">
            <span className="font-bold text-[#1e3a8a] text-sm">STTB Admin</span>
            <span className="text-[10px] font-semibold tracking-wider text-[#dc2626]">
              CMS DASHBOARD
            </span>
          </div>
        </Link>
      </SidebarHeader>

      {/* Sidebar Navigation */}
      <SidebarContent className="px-2 py-2">
        {navGroups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-1">
              {group.label}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const isActive =
                    item.href === "/admin"
                      ? pathname === "/admin"
                      : pathname.startsWith(item.href);

                  return (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        tooltip={item.label}
                        className={
                          isActive
                            ? "bg-[#dbeafe] text-[#1e3a8a] font-semibold hover:bg-[#dbeafe] hover:text-[#1e3a8a]"
                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                        }
                      >
                        <Link href={item.href}>
                          <item.icon size={18} />
                          <span>{item.label}</span>
                          {item.label === "Pesan Masuk" && unreadCount > 0 && (
                            <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-[#dc2626] px-1.5 text-[10px] font-bold text-white">
                              {unreadCount}
                            </span>
                          )}
                          {item.label !== "Pesan Masuk" && item.badge && (
                            <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-[#dc2626] px-1.5 text-[10px] font-bold text-white">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      {/* Sidebar Footer — Admin Profile */}
      <SidebarFooter className="border-t border-gray-200 px-3 py-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="h-auto py-2" tooltip="Admin Account">
              <Avatar className="h-8 w-8 shrink-0">
                <AvatarFallback className="bg-[#1e3a8a] text-white text-xs font-bold">
                  AD
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col leading-tight group-data-[collapsible=icon]:hidden">
                <span className="text-sm font-semibold text-gray-900">Admin STTB</span>
                <span className="text-xs text-gray-500">admin@sttb.ac.id</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={handleLogout}
              className="text-red-600 hover:text-red-700 hover:bg-red-50 mt-1 group-data-[collapsible=icon]:justify-center"
              tooltip="Logout"
            >
              <LogOut size={18} />
              <span className="group-data-[collapsible=icon]:hidden">Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
