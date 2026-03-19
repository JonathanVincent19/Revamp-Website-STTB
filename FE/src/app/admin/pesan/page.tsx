"use client";

import { useState } from "react";
import { Mail, MailOpen, Reply, Trash2, Star, Archive, Search, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Badge } from "@/app/components/ui/badge";

import { useAdminContacts, useMarkContactRead, useDeleteContactMessage } from "@/lib/hooks";
import { type ContactMessageItem } from "@/lib/api";
import { Loader2 } from "lucide-react";

export default function PesanPage() {
  const [selectedMessageId, setSelectedMessageId] = useState<number | null>(null);
  
  const { data: messages, loading, refetch } = useAdminContacts();
  const { mutate: markAsRead } = useMarkContactRead();
  const { mutate: deleteMessage, loading: isDeleting } = useDeleteContactMessage();

  const activeMessages = messages || [];
  const selected = activeMessages.find((m) => m.id === selectedMessageId);
  const unreadCount = activeMessages.filter((m) => !m.isRead).length;

  const handleSelectMessage = async (msg: ContactMessageItem) => {
    setSelectedMessageId(msg.id);
    if (!msg.isRead) {
      await markAsRead(msg.id);
      refetch();
      // Trigger sidebar refresh
      window.dispatchEvent(new Event("refresh-unread-count"));
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Yakin ingin menghapus pesan ini?")) {
      await deleteMessage(id);
      setSelectedMessageId(null);
      refetch();
      // Trigger sidebar refresh
      window.dispatchEvent(new Event("refresh-unread-count"));
    }
  };

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
              <p className="text-2xl font-bold text-gray-900">{activeMessages.length}</p>
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
              <p className="text-2xl font-bold text-gray-900">{activeMessages.length}</p>
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
            {loading ? (
              <div className="flex flex-col items-center justify-center p-8 text-gray-500">
                <Loader2 className="h-8 w-8 animate-spin mb-2" />
                <span className="text-sm">Memuat pesan...</span>
              </div>
            ) : activeMessages.length === 0 ? (
              <div className="flex flex-col items-center justify-center p-8 text-gray-500 bg-white border border-gray-100 rounded-lg">
                <Mail className="h-8 w-8 mb-2 text-gray-300" />
                <span className="text-sm">Tidak ada pesan masuk.</span>
              </div>
            ) : (
              activeMessages.map((msg) => (
                <Card
                  key={msg.id}
                  className={`border cursor-pointer transition-all hover:shadow-sm ${
                    selectedMessageId === msg.id
                      ? "border-[#1e3a8a] bg-blue-50/30 shadow-sm"
                      : msg.isRead
                        ? "border-gray-100 bg-white"
                        : "border-gray-200 bg-white"
                  }`}
                  onClick={() => handleSelectMessage(msg)}
                >
                  <CardContent className="p-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          {!msg.isRead && (
                            <div className="h-2 w-2 rounded-full bg-[#1e3a8a] shrink-0" />
                          )}
                          <p className={`text-sm truncate ${!msg.isRead ? "font-bold text-gray-900" : "font-medium text-gray-700"}`}>
                            {msg.name}
                          </p>
                        </div>
                        <p className={`text-xs truncate mt-0.5 ${!msg.isRead ? "font-semibold text-gray-800" : "text-gray-500"}`}>
                          {msg.subject || "(Tanpa Subjek)"}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5 truncate">
                          {msg.message?.substring(0, 50)}...
                        </p>
                      </div>
                      <div className="flex flex-col items-end shrink-0">
                        <span className="text-[10px] text-gray-400 font-medium">
                          {new Date(msg.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>

        {/* Message Detail */}
        <div className="lg:col-span-3">
          {selected ? (
            <Card className="border border-gray-100 shadow-sm h-full flex flex-col">
              <CardHeader className="p-4 border-b bg-gray-50/50">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <CardTitle className="text-lg leading-tight">{selected.subject || "(Tanpa Subjek)"}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="bg-white">
                        {selected.name} &lt;{selected.email}&gt;
                      </Badge>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Clock size={12} />
                        {new Date(selected.createdAt).toLocaleString()}
                      </span>
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Button variant="outline" size="icon" className="h-8 w-8 text-gray-500 hover:text-[#1e3a8a] bg-white">
                      <Reply size={16} />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={() => handleDelete(selected.id)}
                      disabled={isDeleting}
                      className="h-8 w-8 text-[#dc2626] hover:bg-red-50 hover:text-[#dc2626] bg-white"
                    >
                      {isDeleting ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-1 overflow-y-auto">
                <div className="space-y-6 text-sm text-gray-700 leading-relaxed font-sans">
                  <p className="whitespace-pre-line">{selected.message}</p>
                </div>
              </CardContent>
              <div className="p-4 border-t bg-gray-50">
                <div className="space-y-3">
                  <div className="flex items-center justify-between mb-2 text-xs text-gray-500">
                    <span>Balas ke {selected.email}</span>
                  </div>
                  <textarea
                    placeholder="Tulis balasan pesan di sini..."
                    className="w-full min-h-[100px] p-2 text-sm border-none focus:ring-0 resize-y rounded-md"
                  />
                  <div className="flex justify-end mt-2">
                    <Button className="bg-[#1e3a8a] text-white hover:bg-[#1e3a8a]/90 h-8 text-xs font-semibold px-4">
                      Kirim Balasan
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ) : (
            <Card className="border border-gray-100 shadow-sm h-full min-h-[400px] flex items-center justify-center">
              <div className="text-center text-gray-400">
                <Mail size={48} className="mx-auto mb-4 text-gray-300 opacity-50" />
                <p className="text-sm">Pilih pesan di sebelah kiri untuk membaca.</p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
