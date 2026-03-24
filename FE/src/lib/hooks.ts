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
  adminContactsApi,
  adminUsersApi,
  adminTestimonialsApi,
  type CreateTestimonialPayload,
  type UpdateTestimonialPayload,
  adminLecturersApi,
  adminStaffApi,
  type User,
  type CreateUserPayload,
  type UpdateUserPayload,
  type CreateLecturerPayload,
  type UpdateLecturerPayload,
  type CreateStaffPayload,
  type UpdateStaffPayload,
  type AdminContactMessagesListResponse,
  type UsersListResponse,
  faqApi,
  adminFaqApi,
  type FAQItem,
  type CreateFAQPayload,
  type UpdateFAQPayload,
  facilitiesApi,
  adminFacilitiesApi,
  type FacilityListItem,
  type FacilityDetail,
  type CreateFacilityPayload,
  type UpdateFacilityPayload,
  tuitionApi,
  adminTuitionApi,
  type TuitionFeeItem,
  type CreateTuitionFeePayload,
  type UpdateTuitionFeePayload,
  type TuitionNoteItem,
  type CreateTuitionNotePayload,
  type UpdateTuitionNotePayload,
  programsApi,
  adminProgramsApi,
  type StudyProgramItem,
  type CreateStudyProgramPayload,
  type UpdateStudyProgramPayload,
  coursesApi,
  adminCoursesApi,
  courseCategoriesApi,
  adminCourseCategoriesApi,
  type CourseItem,
  type CourseCategoryItem,
  type CreateCoursePayload,
  type UpdateCoursePayload,
  type CreateCourseCategoryPayload,
  type UpdateCourseCategoryPayload,
  type CourseListResponse,
  type CourseCategoryListResponse,
  type CourseDetailResponse,
  type CourseCategoryDetailResponse
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

/** Ambil daftar FAQ untuk halaman publik */
export function useFAQs() {
  return useFetch<FAQItem[]>(() => faqApi.getList(), []);
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

// =============================================================================
// ADMIN CONTACTS HOOKS
// =============================================================================

export function useAdminContacts(params?: { page?: number; pageSize?: number; isRead?: boolean }) {
  return useFetch<ContactMessageItem[]>(() => adminContactsApi.getList(params), [params?.page, params?.pageSize, params?.isRead]);
}

export function useMarkContactRead() {
  return useMutation<number>((id) => adminContactsApi.update(id, { isRead: true }));
}

export function useDeleteContactMessage() {
  return useMutation<number>((id) => adminContactsApi.delete(id));
}

// =============================================================================
// ADMIN USERS HOOKS
// =============================================================================

export function useAdminUsers() {
  return useFetch<User[]>(adminUsersApi.getList);
}

export function useCreateUser() {
  return useMutation<CreateUserPayload>((payload) => adminUsersApi.create(payload));
}

export function useUpdateUser() {
  return useMutation<UpdateUserPayload>((payload) => adminUsersApi.update(payload.id, payload));
}

export function useDeleteUser() {
  return useMutation<number>((id) => adminUsersApi.delete(id));
}

// =============================================================================
// ADMIN HR (LECTURERS & STAFF) HOOKS
// =============================================================================

export function useCreateLecturer() {
  return useMutation<CreateLecturerPayload>((payload) => adminLecturersApi.create(payload));
}

export function useUpdateLecturer() {
  return useMutation<UpdateLecturerPayload>((payload) => adminLecturersApi.update(payload.id, payload));
}

export function useDeleteLecturer() {
  return useMutation<number>((id) => adminLecturersApi.delete(id));
}

export function useCreateStaff() {
  return useMutation<CreateStaffPayload>((payload) => adminStaffApi.create(payload));
}

export function useUpdateStaff() {
  return useMutation<UpdateStaffPayload>((payload) => adminStaffApi.update(payload.id, payload));
}

export function useDeleteStaff() {
  return useMutation<number>((id) => adminStaffApi.delete(id));
}

/** CRUD FAQ (Admin) */
export function useCreateFAQ() {
  return useMutation<CreateFAQPayload>((payload) => adminFaqApi.create(payload));
}

export function useUpdateFAQ() {
  return useMutation<UpdateFAQPayload>((payload) => adminFaqApi.update(payload.id, payload));
}

export function useDeleteFAQ() {
  return useMutation<number>((id) => adminFaqApi.delete(id));
}

// =============================================================================
// ADMIN TESTIMONIALS HOOKS
// =============================================================================

export function useCreateTestimonial() {
  return useMutation<CreateTestimonialPayload>((payload) => adminTestimonialsApi.create(payload));
}

export function useUpdateTestimonial() {
  return useMutation<UpdateTestimonialPayload>((payload) => adminTestimonialsApi.update(payload.id, payload));
}

export function useDeleteTestimonial() {
  return useMutation<number>((id) => adminTestimonialsApi.delete(id));
}

// =============================================================================
// FACILITIES HOOKS
// =============================================================================

/** Ambil daftar fasilitas untuk halaman publik */
export function useFacilities() {
  return useFetch<FacilityListItem[]>(() => facilitiesApi.getList(), []);
}

/** Ambil detail fasilitas berdasarkan slug */
export function useFacilityDetail(slug: string) {
  return useFetch<FacilityDetail>(
    () => facilitiesApi.getDetail(slug) as Promise<{ success: boolean; data: FacilityDetail }>,
    [slug]
  );
}

/** CRUD Fasilitas (Admin) */
export function useCreateFacility() {
  return useMutation<CreateFacilityPayload>((payload) => adminFacilitiesApi.create(payload));
}

export function useUpdateFacility() {
  return useMutation<UpdateFacilityPayload>((payload) => adminFacilitiesApi.update(payload.id, payload));
}

export function useDeleteFacility() {
  return useMutation<number>((id) => adminFacilitiesApi.delete(id));
}

// =============================================================================
// TUITION FEES HOOKS
// =============================================================================

export function useTuitionFees() {
  return useFetch<TuitionFeeItem[]>(() => tuitionApi.getList(), []);
}

export function useCreateTuitionFee() {
  return useMutation<CreateTuitionFeePayload>((payload) => adminTuitionApi.create(payload));
}

export function useUpdateTuitionFee() {
  return useMutation<UpdateTuitionFeePayload>((payload) => adminTuitionApi.update(payload.id, payload));
}

export function useDeleteTuitionFee() {
  return useMutation<number>((id) => adminTuitionApi.delete(id));
}

// =============================================================================
// TUITION NOTES HOOKS
// =============================================================================

export function useTuitionNotes() {
  return useFetch<TuitionNoteItem[]>(() => tuitionApi.getNotes(), []);
}

export function useCreateTuitionNote() {
  return useMutation<CreateTuitionNotePayload>((payload) => adminTuitionApi.createNote(payload));
}

export function useUpdateTuitionNote() {
  return useMutation<UpdateTuitionNotePayload>((payload) => adminTuitionApi.updateNote(payload.id, payload));
}

export function useDeleteTuitionNote() {
  return useMutation<number>((id) => adminTuitionApi.deleteNote(id));
}

// =============================================================================
// STUDY PROGRAMS HOOKS
// =============================================================================

export function usePrograms() {
  return useFetch<StudyProgramItem[]>(() => programsApi.getList(), []);
}

export function useAdminPrograms() {
  return useFetch<StudyProgramItem[]>(() => adminProgramsApi.getList(), []);
}

export function useCreateProgram() {
  return useMutation<CreateStudyProgramPayload>((payload) => adminProgramsApi.create(payload));
}

export function useUpdateProgram() {
  return useMutation<UpdateStudyProgramPayload>((payload) => adminProgramsApi.update(payload.id, payload));
}

export function useDeleteProgram() {
  const deleteProgram = useMutation((id: number) => adminProgramsApi.delete(id));
  return deleteProgram;
}

// --- Courses Hooks ---

export function useCourses() {
  return useFetch(() => coursesApi.getList());
}

export function useAdminCourses() {
  return useFetch(() => adminCoursesApi.getList());
}

export function useCreateCourse() {
  return useMutation((payload: CreateCoursePayload) => adminCoursesApi.create(payload));
}

export function useUpdateCourse() {
  return useMutation((payload: UpdateCoursePayload) => adminCoursesApi.update(payload.id, payload));
}

export function useDeleteCourse() {
  return useMutation((id: number) => adminCoursesApi.delete(id));
}

// --- Course Categories Hooks ---

export function useCourseCategories() {
  return useFetch(() => courseCategoriesApi.getList());
}

export function useAdminCourseCategories() {
  return useFetch(() => adminCourseCategoriesApi.getList());
}

export function useCreateCourseCategory() {
  return useMutation((payload: CreateCourseCategoryPayload) => adminCourseCategoriesApi.create(payload));
}

export function useUpdateCourseCategory() {
  return useMutation((payload: UpdateCourseCategoryPayload) => adminCourseCategoriesApi.update(payload.id, payload));
}

export function useDeleteCourseCategory() {
  return useMutation((id: number) => adminCourseCategoriesApi.delete(id));
}
