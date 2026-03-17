"use client";

import { useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  Calendar as CalIcon,
  Clock,
  MapPin,
  Loader2,
  AlertCircle,
  X,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { motion } from "motion/react";
import { useEventsList, useDeleteEvent, useCreateEvent, useUpdateEvent } from "@/lib/hooks";

export default function JadwalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<any>(null);

  const { data: eventsData, loading, error, refetch } = useEventsList();
  const { mutate: deleteEvent, loading: isDeleting } = useDeleteEvent();
  const { mutate: createEvent, loading: isSaving } = useCreateEvent();
  const { mutate: updateEvent, loading: isUpdating } = useUpdateEvent();

  const handleDelete = async (id: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus jadwal ini?")) {
      await deleteEvent(id);
      refetch();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      title: fd.get("title") as string,
      description: fd.get("description") as string,
      location: fd.get("location") as string,
      eventDate: fd.get("eventDate") as string,
      startTime: fd.get("startTime") as string || undefined,
      endTime: fd.get("endTime") as string || undefined,
    };

    try {
      if (editingEvent) {
        await updateEvent({ ...payload, id: editingEvent.id });
      } else {
        await createEvent(payload);
      }
      setIsModalOpen(false);
      setEditingEvent(null);
      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  const openEdit = (event: any) => {
    setEditingEvent(event);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-[#1e3a8a]">Manajemen Jadwal & Agenda</h2>
          <p className="text-sm text-gray-500">
            {eventsData?.length || 0} agenda terdaftar di sistem
          </p>
        </div>
        <Button
          onClick={() => {
            setEditingEvent(null);
            setIsModalOpen(true);
          }}
          className="bg-[#1e3a8a] text-white hover:bg-[#dc2626] transition-colors h-10 shadow-md"
        >
          <Plus size={18} className="mr-1" /> Tambah Agenda
        </Button>
      </div>

      <Card className="border border-gray-100 shadow-sm overflow-hidden">
        <CardContent className="p-0">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="animate-spin text-[#1e3a8a] mb-2" size={32} />
              <p className="text-gray-500 text-sm">Memuat data agenda...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-20 text-red-500">
              <AlertCircle size={32} className="mb-2" />
              <p>{error}</p>
              <Button variant="link" onClick={() => refetch()} className="text-[#1e3a8a]">
                Coba Lagi
              </Button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50/80 hover:bg-gray-50/80">
                    <TableHead className="text-xs font-semibold text-gray-500 uppercase px-6 py-4">
                      Kegiatan
                    </TableHead>
                    <TableHead className="text-xs font-semibold text-gray-500 uppercase px-4">
                      <div className="flex items-center gap-1">
                        <CalIcon size={14} /> Tanggal
                      </div>
                    </TableHead>
                    <TableHead className="text-xs font-semibold text-gray-500 uppercase px-4">
                      <div className="flex items-center gap-1">
                        <Clock size={14} /> Waktu
                      </div>
                    </TableHead>
                    <TableHead className="text-xs font-semibold text-gray-500 uppercase px-4">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} /> Lokasi
                      </div>
                    </TableHead>
                    <TableHead className="w-24 text-center px-6">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {eventsData?.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-16 text-gray-400">
                        Belum ada agenda terdaftar.
                      </TableCell>
                    </TableRow>
                  ) : (
                    eventsData?.map((e) => (
                      <TableRow key={e.id} className="hover:bg-gray-50/50">
                        <TableCell className="font-bold text-gray-900 text-sm px-6 py-4">
                          {e.title}
                        </TableCell>
                        <TableCell className="text-sm text-gray-600 px-4">
                          {new Date(e.eventDate).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </TableCell>
                        <TableCell className="text-sm text-gray-500 px-4">
                          {e.startTime || "-"} {e.endTime ? ` - ${e.endTime}` : ""}
                        </TableCell>
                        <TableCell className="text-sm text-gray-500 px-4">
                          {e.location || "-"}
                        </TableCell>
                        <TableCell className="px-6">
                          <div className="flex justify-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => openEdit(e)}
                              className="h-8 w-8 text-gray-500 hover:text-[#1e3a8a] border-gray-200"
                            >
                              <Pencil size={14} />
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => handleDelete(e.id)}
                              disabled={isDeleting}
                              className="h-8 w-8 text-gray-500 hover:text-[#dc2626] border-gray-200"
                            >
                              <Trash2 size={14} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Modal Tambah/Edit */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-xl"
          >
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-xl font-bold text-[#1e3a8a]">
                {editingEvent ? "Edit Agenda" : "Tambah Agenda Baru"}
              </h3>
              <Button variant="ghost" size="icon" onClick={() => setIsModalOpen(false)}>
                <X size={20} />
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Nama Kegiatan</label>
                  <Input
                    name="title"
                    defaultValue={editingEvent?.title}
                    required
                    placeholder="Contoh: UTS Semester Genap"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Tanggal</label>
                    <Input
                      name="eventDate"
                      type="date"
                      defaultValue={editingEvent?.eventDate?.split("T")[0]}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Lokasi</label>
                    <Input
                      name="location"
                      defaultValue={editingEvent?.location}
                      placeholder="Contoh: Aula Utama"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Jam Mulai</label>
                    <Input
                      name="startTime"
                      placeholder="08:00"
                      defaultValue={editingEvent?.startTime}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Jam Selesai</label>
                    <Input
                      name="endTime"
                      placeholder="16:00"
                      defaultValue={editingEvent?.endTime}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Deskripsi</label>
                  <textarea
                    name="description"
                    rows={3}
                    defaultValue={editingEvent?.description}
                    className="w-full p-3 rounded-md border border-gray-200 text-sm focus:ring-2 focus:ring-[#1e3a8a] outline-none"
                    placeholder="Opsional: Keterangan singkat mengenai agenda..."
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-6 border-t">
                <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
                  Batal
                </Button>
                <Button
                  type="submit"
                  disabled={isSaving || isUpdating}
                  className="bg-[#1e3a8a] text-white hover:bg-[#dc2626]"
                >
                  {isSaving || isUpdating ? (
                    <Loader2 size={16} className="animate-spin mr-2" />
                  ) : (
                    <CheckCircle2 size={16} className="mr-2" />
                  )}
                  {editingEvent ? "Simpan Perubahan" : "Simpan Agenda"}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
