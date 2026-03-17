"use client";

import { useState } from "react";
import { Mail, MailOpen, Reply, Trash2, Star, Archive, Search, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Badge } from "@/app/components/ui/badge";

const messages = [
  {
    id: 1,
    sender: "Maria Anggraeni",
    email: "maria@gmail.com",
    subject: "Pertanyaan tentang program S2 Pastoral",
    preview: "Selamat pagi, saya ingin bertanya mengenai persyaratan pendaftaran program Magister Teologi Pelayanan Pastoral...",
    date: "12 Mar 2026",
    time: "10:30",
    read: false,
    starred: true,
  },
  {
    id: 2,
    sender: "David Kurniawan",
    email: "david.kur@yahoo.com",
    subject: "Informasi beasiswa tahun 2026",
    preview: "Dengan hormat, saya ingin mengetahui lebih lanjut mengenai program beasiswa yang tersedia di STTB untuk tahun akademik 2026/2027...",
    date: "11 Mar 2026",
    time: "14:22",
    read: false,
    starred: false,
  },
  {
    id: 3,
    sender: "Pdt. Samuel Tan",
    email: "samuel.tan@gbi.or.id",
    subject: "Kerjasama pelayanan gereja dan kampus",
    preview: "Shalom, kami dari GBI Bandung ingin mendiskusikan kemungkinan kerjasama dalam bidang pelayanan antara gereja kami dan STTB...",
    date: "10 Mar 2026",
    time: "09:15",
    read: true,
    starred: false,
  },
  {
    id: 4,
    sender: "Sarah Lim",
    email: "sarah.lim@outlook.com",
    subject: "Jadwal pendaftaran gelombang 2",
    preview: "Halo admin STTB, kapan pembukaan pendaftaran gelombang 2 untuk program sarjana teologi? Apakah masih ada kuota tersisa...",
    date: "9 Mar 2026",
    time: "16:45",
    read: true,
    starred: true,
  },
  {
    id: 5,
    sender: "Alumni STTB 2020",
    email: "alumni_sttb@googlegroups.com",
    subject: "Reuni angkatan 2020",
    preview: "Kepada pihak kampus, kami dari alumni angkatan 2020 ingin mengadakan acara reuni di kampus STTB pada bulan Mei...",
    date: "8 Mar 2026",
    time: "11:00",
    read: true,
    starred: false,
  },
];

export default function PesanPage() {
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);
  const selected = messages.find((m) => m.id === selectedMessage);
  const unreadCount = messages.filter((m) => !m.read).length;

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card className="border border-gray-100 shadow-sm">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-[#1e3a8a]">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{messages.length}</p>
              <p className="text-xs text-gray-500">Total Pesan</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border border-gray-100 shadow-sm">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-[#dc2626]">
              <MailOpen size={20} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{unreadCount}</p>
              <p className="text-xs text-gray-500">Belum Dibaca</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border border-gray-100 shadow-sm">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-50 text-yellow-600">
              <Star size={20} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{messages.filter((m) => m.starred).length}</p>
              <p className="text-xs text-gray-500">Ditandai</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Message List */}
        <div className="lg:col-span-2 space-y-3">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input placeholder="Cari pesan..." className="h-9 pl-8 bg-white text-sm" />
          </div>
          <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
            {messages.map((msg) => (
              <Card
                key={msg.id}
                className={`border cursor-pointer transition-all hover:shadow-sm ${
                  selectedMessage === msg.id
                    ? "border-[#1e3a8a] bg-blue-50/30 shadow-sm"
                    : msg.read
                      ? "border-gray-100 bg-white"
                      : "border-gray-200 bg-white"
                }`}
                onClick={() => setSelectedMessage(msg.id)}
              >
                <CardContent className="p-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        {!msg.read && (
                          <div className="h-2 w-2 rounded-full bg-[#1e3a8a] shrink-0" />
                        )}
                        <p className={`text-sm truncate ${!msg.read ? "font-bold text-gray-900" : "font-medium text-gray-700"}`}>
                          {msg.sender}
                        </p>
                        {msg.starred && <Star size={12} className="text-yellow-500 fill-yellow-500 shrink-0" />}
                      </div>
                      <p className={`text-sm truncate mt-0.5 ${!msg.read ? "font-semibold text-gray-800" : "text-gray-600"}`}>
                        {msg.subject}
                      </p>
                      <p className="text-xs text-gray-400 truncate mt-0.5">{msg.preview}</p>
                    </div>
                    <span className="text-[10px] text-gray-400 whitespace-nowrap">{msg.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Message Detail */}
        <div className="lg:col-span-3">
          {selected ? (
            <Card className="border border-gray-100 shadow-sm">
              <CardHeader className="border-b border-gray-100">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-base">{selected.subject}</CardTitle>
                    <CardDescription className="mt-1">
                      Dari: <span className="font-medium text-gray-700">{selected.sender}</span>{" "}
                      &lt;{selected.email}&gt;
                    </CardDescription>
                    <div className="flex items-center gap-1 mt-1 text-xs text-gray-400">
                      <Clock size={12} />
                      {selected.date} pukul {selected.time}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-yellow-500">
                      <Star size={16} className={selected.starred ? "fill-yellow-500 text-yellow-500" : ""} />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-gray-600">
                      <Archive size={16} />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-[#dc2626]">
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                  {selected.preview}
                  {"\n\n"}Mohon informasinya. Terima kasih.
                  {"\n\n"}Salam,{"\n"}{selected.sender}
                </p>
              </CardContent>
              <div className="border-t border-gray-100 p-4">
                <div className="space-y-3">
                  <textarea
                    className="w-full min-h-[100px] p-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:border-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/10 resize-y"
                    placeholder="Tulis balasan..."
                  />
                  <div className="flex justify-end">
                    <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90">
                      <Reply size={16} />
                      Kirim Balasan
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ) : (
            <Card className="border border-gray-100 shadow-sm">
              <CardContent className="flex flex-col items-center justify-center py-20">
                <Mail size={48} className="text-gray-200 mb-3" />
                <p className="text-sm text-gray-400">Pilih pesan untuk membaca detail</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
