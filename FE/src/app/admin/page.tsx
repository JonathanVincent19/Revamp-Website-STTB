"use client";

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

const stats = [
  {
    label: "Total Berita",
    value: "48",
    change: "+12%",
    trend: "up" as const,
    icon: Newspaper,
    color: "bg-blue-50 text-[#1e3a8a]",
  },
  {
    label: "Total Pendaftar",
    value: "156",
    change: "+24%",
    trend: "up" as const,
    icon: UserPlus,
    color: "bg-green-50 text-green-600",
  },
  {
    label: "Pesan Masuk",
    value: "23",
    change: "+5",
    trend: "up" as const,
    icon: Mail,
    color: "bg-red-50 text-[#dc2626]",
  },
  {
    label: "Pengunjung Bulan Ini",
    value: "3,241",
    change: "-3%",
    trend: "down" as const,
    icon: Eye,
    color: "bg-purple-50 text-purple-600",
  },
];

const chartData = [
  { month: "Jan", pengunjung: 1200 },
  { month: "Feb", pengunjung: 1800 },
  { month: "Mar", pengunjung: 2200 },
  { month: "Apr", pengunjung: 1900 },
  { month: "Mei", pengunjung: 2800 },
  { month: "Jun", pengunjung: 3241 },
  { month: "Jul", pengunjung: 2900 },
];

const recentActivities = [
  {
    user: "Admin STTB",
    action: "Memublikasikan berita",
    target: "Wisuda Angkatan 2025",
    time: "2 jam lalu",
    type: "berita",
  },
  {
    user: "Editor",
    action: "Memperbarui halaman",
    target: "Biaya Studi S1",
    time: "4 jam lalu",
    type: "halaman",
  },
  {
    user: "Admin STTB",
    action: "Menambahkan pendaftar",
    target: "Gelombang 2 - 2025",
    time: "5 jam lalu",
    type: "admisi",
  },
  {
    user: "Editor",
    action: "Mengunggah media",
    target: "Foto Kegiatan Pembinaan",
    time: "1 hari lalu",
    type: "media",
  },
  {
    user: "Admin STTB",
    action: "Membalas pesan dari",
    target: "Calon Mahasiswa",
    time: "1 hari lalu",
    type: "pesan",
  },
];

const quickActions = [
  { label: "Tulis Berita", href: "/admin/berita", icon: Plus },
  { label: "Lihat Pesan", href: "/admin/pesan", icon: Mail },
  { label: "Kelola User", href: "/admin/users", icon: Users },
  { label: "Lihat Laporan", href: "/admin", icon: FileText },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <div className="flex items-center gap-1">
                    {stat.trend === "up" ? (
                      <TrendingUp size={14} className="text-green-500" />
                    ) : (
                      <TrendingDown size={14} className="text-red-500" />
                    )}
                    <span
                      className={`text-xs font-medium ${
                        stat.trend === "up" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {stat.change}
                    </span>
                    <span className="text-xs text-gray-400">vs bulan lalu</span>
                  </div>
                </div>
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.color}`}>
                  <stat.icon size={20} />
                </div>
              </div>
            </CardContent>
          </Card>
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

      {/* Recent Activities */}
      <Card className="border border-gray-100 shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-bold text-gray-900">Aktivitas Terbaru</CardTitle>
          <CardDescription className="text-sm text-gray-500">
            Log aktivitas admin terkini
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="text-xs font-semibold text-gray-500 uppercase">User</TableHead>
                <TableHead className="text-xs font-semibold text-gray-500 uppercase">Aktivitas</TableHead>
                <TableHead className="text-xs font-semibold text-gray-500 uppercase">Target</TableHead>
                <TableHead className="text-xs font-semibold text-gray-500 uppercase">Tipe</TableHead>
                <TableHead className="text-xs font-semibold text-gray-500 uppercase text-right">Waktu</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentActivities.map((activity, i) => (
                <TableRow key={i} className="hover:bg-gray-50/50">
                  <TableCell className="text-sm font-medium text-gray-900">{activity.user}</TableCell>
                  <TableCell className="text-sm text-gray-600">{activity.action}</TableCell>
                  <TableCell className="text-sm font-medium text-[#1e3a8a]">{activity.target}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={
                        activity.type === "berita"
                          ? "bg-blue-50 text-[#1e3a8a] hover:bg-blue-100"
                          : activity.type === "pesan"
                            ? "bg-red-50 text-[#dc2626] hover:bg-red-100"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }
                    >
                      {activity.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-gray-400 text-right">{activity.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
