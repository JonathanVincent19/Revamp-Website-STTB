"use client";

import { useState, useEffect } from "react";
import {
  Newspaper,
  UserPlus,
  Mail,
  Eye,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  Plus,
  FileText,
  Users,
  Image as ImageIcon,
  Loader2,
  MessageSquareQuote,
  GraduationCap,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { Badge } from "@/app/components/ui/badge";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import Link from "next/link";
import {
  newsApi,
  galleryApi,
  adminContactsApi,
  testimonialsApi,
  hrApi,
} from "@/lib/api";

// Chart data tetap statis (belum ada API analytics)
const chartData = [
  { month: "Jan", pengunjung: 1200 },
  { month: "Feb", pengunjung: 1800 },
  { month: "Mar", pengunjung: 2200 },
  { month: "Apr", pengunjung: 1900 },
  { month: "Mei", pengunjung: 2800 },
  { month: "Jun", pengunjung: 3241 },
  { month: "Jul", pengunjung: 2900 },
];

const quickActions = [
  { label: "Tulis Berita", href: "/admin/berita", icon: Plus },
  { label: "Lihat Pesan", href: "/admin/pesan", icon: Mail },
  { label: "Kelola Media", href: "/admin/media", icon: ImageIcon },
  { label: "Kelola Testimoni", href: "/admin/testimonials", icon: MessageSquareQuote },
];

interface DashboardStats {
  totalNews: number;
  totalMedia: number;
  totalMessages: number;
  totalTestimonials: number;
  totalLecturers: number;
  recentNews: { title: string; author: string; createdAt: string; status: string }[];
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<DashboardStats>({
    totalNews: 0,
    totalMedia: 0,
    totalMessages: 0,
    totalTestimonials: 0,
    totalLecturers: 0,
    recentNews: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [newsRes, albumsRes, contactsRes, testimonialRes, lecturersRes] =
          await Promise.allSettled([
            newsApi.getList({ page: 1, pageSize: 100 }),
            galleryApi.getAlbums(),
            adminContactsApi.getList({ page: 1, pageSize: 100 }),
            testimonialsApi.getList(),
            hrApi.getLecturers(),
          ]);

        const totalNews =
          newsRes.status === "fulfilled" ? newsRes.value.data?.length || 0 : 0;
        const totalMedia =
          albumsRes.status === "fulfilled" ? albumsRes.value.data?.length || 0 : 0;
        const totalMessages =
          contactsRes.status === "fulfilled" ? contactsRes.value.data?.length || 0 : 0;
        const totalTestimonials =
          testimonialRes.status === "fulfilled" ? testimonialRes.value.data?.length || 0 : 0;
        const totalLecturers =
          lecturersRes.status === "fulfilled" ? lecturersRes.value.data?.length || 0 : 0;

        // Build recent news from actual data
        const recentNews =
          newsRes.status === "fulfilled" && newsRes.value.data
            ? newsRes.value.data
                .sort(
                  (a: any, b: any) =>
                    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                )
                .slice(0, 5)
                .map((n: any) => ({
                  title: n.title,
                  author: n.author || "Admin",
                  createdAt: n.createdAt,
                  status: n.status,
                }))
            : [];

        setStats({
          totalNews,
          totalMedia,
          totalMessages,
          totalTestimonials,
          totalLecturers,
          recentNews,
        });
      } catch (err) {
        console.error("Dashboard fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const statCards = [
    {
      label: "Total Berita",
      value: stats.totalNews,
      icon: Newspaper,
      color: "bg-blue-50 text-[#1e3a8a]",
      href: "/admin/berita",
    },
    {
      label: "Total Media",
      value: stats.totalMedia,
      icon: ImageIcon,
      color: "bg-green-50 text-green-600",
      href: "/admin/media",
    },
    {
      label: "Pesan Masuk",
      value: stats.totalMessages,
      icon: Mail,
      color: "bg-red-50 text-[#dc2626]",
      href: "/admin/pesan",
    },
    {
      label: "Dosen & Testimoni",
      value: `${stats.totalLecturers} / ${stats.totalTestimonials}`,
      icon: GraduationCap,
      color: "bg-purple-50 text-purple-600",
      href: "/admin/dosen",
    },
  ];

  const formatTimeAgo = (dateStr: string) => {
    const now = new Date();
    const date = new Date(dateStr);
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    if (diffMins < 60) return `${diffMins} menit lalu`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours} jam lalu`;
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays < 7) return `${diffDays} hari lalu`;
    return date.toLocaleDateString("id-ID", { day: "numeric", month: "short" });
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat) => (
          <Link key={stat.label} href={stat.href}>
            <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {loading ? (
                        <Loader2 size={20} className="animate-spin text-gray-400" />
                      ) : (
                        stat.value
                      )}
                    </p>
                    <span className="text-xs text-gray-400 group-hover:text-[#1e3a8a] transition-colors flex items-center gap-1">
                      Lihat detail <ArrowUpRight size={12} />
                    </span>
                  </div>
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.color}`}>
                    <stat.icon size={20} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Visitor Chart */}
        <Card className="border border-gray-100 shadow-sm lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-bold text-gray-900">Statistik Pengunjung</CardTitle>
            <CardDescription className="text-sm text-gray-500">
              Jumlah pengunjung website per bulan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[280px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorPengunjung" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1e3a8a" stopOpacity={0.15} />
                      <stop offset="95%" stopColor="#1e3a8a" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    dataKey="month"
                    tick={{ fontSize: 12, fill: "#9ca3af" }}
                    axisLine={{ stroke: "#e5e7eb" }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 12, fill: "#9ca3af" }}
                    axisLine={{ stroke: "#e5e7eb" }}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "#fff",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      fontSize: "13px",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="pengunjung"
                    stroke="#1e3a8a"
                    strokeWidth={2}
                    fill="url(#colorPengunjung)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border border-gray-100 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-bold text-gray-900">Aksi Cepat</CardTitle>
            <CardDescription className="text-sm text-gray-500">
              Pintasan ke halaman utama
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {quickActions.map((action) => (
                <Link key={action.label} href={action.href}>
                  <Button
                    variant="outline"
                    className="w-full justify-between text-gray-700 hover:text-[#1e3a8a] hover:border-[#1e3a8a] hover:bg-blue-50/50 h-11 mb-1"
                  >
                    <span className="flex items-center gap-2">
                      <action.icon size={16} />
                      {action.label}
                    </span>
                    <ArrowUpRight size={14} className="text-gray-400" />
                  </Button>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent News (Dynamic) */}
      <Card className="border border-gray-100 shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-bold text-gray-900">Berita Terbaru</CardTitle>
          <CardDescription className="text-sm text-gray-500">
            5 berita terakhir yang dipublikasikan
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-10">
              <Loader2 className="animate-spin text-[#1e3a8a]" size={24} />
            </div>
          ) : stats.recentNews.length === 0 ? (
            <div className="text-center py-10 text-gray-400">
              <Newspaper size={32} className="mx-auto mb-2 text-gray-300" />
              <p className="text-sm">Belum ada berita.</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="text-xs font-semibold text-gray-500 uppercase">#</TableHead>
                  <TableHead className="text-xs font-semibold text-gray-500 uppercase">Judul</TableHead>
                  <TableHead className="text-xs font-semibold text-gray-500 uppercase">Author</TableHead>
                  <TableHead className="text-xs font-semibold text-gray-500 uppercase">Status</TableHead>
                  <TableHead className="text-xs font-semibold text-gray-500 uppercase text-right">Waktu</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {stats.recentNews.map((news, i) => (
                  <TableRow key={i} className="hover:bg-gray-50/50">
                    <TableCell className="text-sm text-gray-500 font-medium">{i + 1}</TableCell>
                    <TableCell className="text-sm font-medium text-[#0a1930] max-w-[300px] truncate">
                      {news.title}
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">{news.author}</TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={
                          news.status === "published"
                            ? "bg-green-50 text-green-700 hover:bg-green-100"
                            : "bg-amber-50 text-amber-700 hover:bg-amber-100"
                        }
                      >
                        {news.status === "published" ? "Terbit" : "Draft"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-gray-400 text-right">
                      {formatTimeAgo(news.createdAt)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
