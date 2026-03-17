// =============================================================================
// React Hooks untuk API Integration - STTB
// Custom hooks dengan state management (loading, error, data)
// =============================================================================

import { useState, useEffect, useCallback } from "react";
import {
  newsApi,
  eventsApi,
  galleryApi,
  achievementsApi,
  announcementsApi,
  hrApi,
  testimonialsApi,
  contactsApi,
  authApi,
  adminNewsApi,
  adminEventsApi,
  adminAlbumsApi,
  adminMediaApi,
  uploadApi,
  type NewsItem,
  type EventItem,
  type GalleryAlbum,
  type AchievementItem,
  type AnnouncementItem,
  type Lecturer,
  type Staff,
  type TestimonialItem,
  type ContactMessageItem,
  type CreateContactPayload,
  type LoginPayload,
  type CreateNewsPayload,
  type UpdateNewsPayload,
  type CreateEventPayload,
  type UpdateEventPayload,
  type CreateAlbumPayload,
  type UpdateAlbumPayload,
  type CreateMediaPayload,
  type UpdateMediaPayload,
} from "./api";

// =============================================================================
// Generic Fetch Hook
// =============================================================================

interface UseFetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

function useFetch<T>(fetchFn: () => Promise<{ success: boolean; data: T }>, deps: unknown[] = []): UseFetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchFn();
      setData(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { data, loading, error, refetch: fetch };
}

// =============================================================================
// PUBLIC HOOKS (untuk Frontend Website)
// =============================================================================

/** Ambil daftar berita untuk halaman publik */
export function useNewsList(params?: { page?: number; pageSize?: number; status?: string }) {
  return useFetch<NewsItem[]>(
    () => newsApi.getList(params),
    [params?.page, params?.pageSize, params?.status]
  );
}

/** Ambil detail berita berdasarkan slug */
export function useNewsDetail(slug: string) {
  return useFetch<NewsItem>(
    () => newsApi.getDetail(slug) as Promise<{ success: boolean; data: NewsItem }>,
    [slug]
  );
}

/** Ambil daftar events */
export function useEventsList() {
  return useFetch<EventItem[]>(() => eventsApi.getList(), []);
}

/** Ambil daftar album galeri */
export function useGalleryAlbums() {
  return useFetch<GalleryAlbum[]>(() => galleryApi.getAlbums(), []);
}

/** Ambil detail album galeri */
export function useGalleryAlbumDetail(id: number) {
  return useFetch<GalleryAlbum>(
    () => galleryApi.getAlbumDetail(id) as Promise<{ success: boolean; data: GalleryAlbum }>,
    [id]
  );
}

/** Ambil daftar prestasi */
export function useAchievements() {
  return useFetch<AchievementItem[]>(() => achievementsApi.getList(), []);
}

/** Ambil daftar pengumuman */
export function useAnnouncements() {
  return useFetch<AnnouncementItem[]>(() => announcementsApi.getList(), []);
}

/** Ambil daftar dosen */
export function useLecturers() {
  return useFetch<Lecturer[]>(() => hrApi.getLecturers(), []);
}

/** Ambil daftar staff */
export function useStaff() {
  return useFetch<Staff[]>(() => hrApi.getStaff(), []);
}

/** Ambil daftar testimonial */
export function useTestimonials() {
  return useFetch<TestimonialItem[]>(() => testimonialsApi.getList(), []);
}

// =============================================================================
// MUTATION HOOKS (untuk CMS Admin)
// =============================================================================

interface UseMutationState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

function useMutation<TPayload>(
  mutationFn: (payload: TPayload) => Promise<{ success: boolean; message?: string }>
) {
  const [state, setState] = useState<UseMutationState>({
    loading: false,
    error: null,
    success: false,
  });

  const mutate = useCallback(
    async (payload: TPayload) => {
      setState({ loading: true, error: null, success: false });
      try {
        const res = await mutationFn(payload);
        setState({ loading: false, error: null, success: res.success });
        return res;
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Terjadi kesalahan";
        setState({ loading: false, error: errorMessage, success: false });
        throw err;
      }
    },
    [mutationFn]
  );

  return { ...state, mutate };
}

/** Kirim pesan kontak dari form publik */
export function useContactSubmit() {
  return useMutation<CreateContactPayload>((payload) => contactsApi.send(payload));
}

/** Login admin */
export function useLogin() {
  return useMutation<LoginPayload>((payload) => authApi.login(payload));
}

/** CRUD Berita (Admin) */
export function useCreateNews() {
  return useMutation<CreateNewsPayload>((payload) => adminNewsApi.create(payload));
}

export function useUpdateNews() {
  return useMutation<UpdateNewsPayload>((payload) => adminNewsApi.update(payload.id, payload));
}

export function useDeleteNews() {
  return useMutation<number>((id) => adminNewsApi.delete(id));
}

/** CRUD Events (Admin) */
export function useCreateEvent() {
  return useMutation<CreateEventPayload>((payload) => adminEventsApi.create(payload));
}

export function useUpdateEvent() {
  return useMutation<UpdateEventPayload>((payload) => adminEventsApi.update(payload.id, payload));
}

export function useDeleteEvent() {
  return useMutation<number>((id) => adminEventsApi.delete(id));
}

/** CRUD Albums (Admin) */
export function useCreateAlbum() {
  return useMutation<CreateAlbumPayload>((payload) => adminAlbumsApi.create(payload));
}

export function useUpdateAlbum() {
  return useMutation<UpdateAlbumPayload>((payload) => adminAlbumsApi.update(payload.id, payload));
}

export function useDeleteAlbum() {
  return useMutation<number>((id) => adminAlbumsApi.delete(id));
}

/** CRUD Media (Admin) */
export function useCreateMedia() {
  return useMutation<CreateMediaPayload>((payload) => adminMediaApi.create(payload));
}

export function useUpdateMedia() {
  return useMutation<UpdateMediaPayload>((payload) => adminMediaApi.update(payload.id, payload));
}

export function useDeleteMedia() {
  return useMutation<number>((id) => adminMediaApi.delete(id));
}

/** Upload file */
export function useUploadFile() {
  return useMutation<File>((file) => uploadApi.uploadFile(file));
}
