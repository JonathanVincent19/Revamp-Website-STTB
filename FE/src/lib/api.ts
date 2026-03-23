// =============================================================================
// API Service Layer - STTB Integration
// Sumber kebenaran: Backend .NET API (http://localhost:5000)
// =============================================================================

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

// =============================================================================
// Types / Interfaces
// =============================================================================

// --- Auth ---
export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: { id: number; name: string; email: string; isAdmin: boolean };
}

export interface ProfileResponse {
  success: boolean;
  message?: string;
  data?: { id: number; name: string; email: string; isAdmin: boolean };
}

// --- News ---
export interface NewsItem {
  id: number;
  categoryId?: number;
  title: string;
  slug: string;
  content: string;
  featuredImage?: string;
  author?: string;
  viewCount: number;
  status: string;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
  category?: { id: number; name: string; slug: string };
}

export interface NewsListResponse {
  success: boolean;
  data: NewsItem[];
  totalCount?: number;
  page?: number;
  pageSize?: number;
}

export interface NewsDetailResponse {
  success: boolean;
  data?: NewsItem;
  message?: string;
}

export interface CreateNewsPayload {
  title: string;
  slug: string;
  content: string;
  categoryId?: number;
  featuredImage?: string;
  author?: string;
  status?: string;
}

export interface UpdateNewsPayload extends CreateNewsPayload {
  id: number;
}

// --- Events ---
export interface EventItem {
  id: number;
  title: string;
  description?: string;
  location?: string;
  eventDate: string;
  startTime?: string;
  endTime?: string;
  image?: string;
  createdAt: string;
}

export interface EventsListResponse {
  success: boolean;
  data: EventItem[];
}

export interface CreateEventPayload {
  title: string;
  description?: string;
  location?: string;
  eventDate: string;
  startTime?: string;
  endTime?: string;
  image?: string;
}

export interface UpdateEventPayload extends CreateEventPayload {
  id: number;
}

// --- Gallery (Albums & Media) ---
export interface GalleryAlbum {
  id: number;
  title: string;
  description?: string;
  coverImage?: string;
  eventDate?: string;
  createdAt: string;
  media?: GalleryMedia[];
}

export interface GalleryMedia {
  id: number;
  albumId?: number;
  filePath: string;
  caption?: string;
  mediaType: string;
  createdAt: string;
}

export interface AlbumsListResponse {
  success: boolean;
  data: GalleryAlbum[];
}

export interface AlbumDetailResponse {
  success: boolean;
  data?: GalleryAlbum;
  message?: string;
}

export interface CreateAlbumPayload {
  title: string;
  description?: string;
  coverImage?: string;
  eventDate?: string;
}

export interface UpdateAlbumPayload extends CreateAlbumPayload {
  id: number;
}

export interface CreateMediaPayload {
  albumId?: number;
  filePath: string;
  caption?: string;
  mediaType?: string;
}

export interface UpdateMediaPayload extends CreateMediaPayload {
  id: number;
}

// --- Achievements ---
export interface AchievementItem {
  id: number;
  studentNames: string;
  achievementTitle: string;
  competitionName?: string;
  level: string;
  achievementRank?: string;
  dateAchieved?: string;
  certificateImage?: string;
  description?: string;
  createdAt: string;
}

export interface AchievementsListResponse {
  success: boolean;
  data: AchievementItem[];
}

// --- Announcements ---
export interface AnnouncementItem {
  id: number;
  title: string;
  description?: string;
  attachmentPath?: string;
  isUrgent: boolean;
  createdAt: string;
}

export interface AnnouncementsListResponse {
  success: boolean;
  data: AnnouncementItem[];
}

// --- Contact Messages ---
export interface CreateContactPayload {
  name: string;
  email: string;
  phoneNumber?: string;
  subject?: string;
  message: string;
}

export interface ContactMessageItem {
  id: number;
  name: string;
  email: string;
  phoneNumber?: string;
  subject?: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export interface ContactMessagesListResponse {
  success: boolean;
  data: ContactMessageItem[];
}

// --- HR (Lecturers & Staff) ---
export interface Lecturer {
  id: number;
  name: string;
  photo?: string;
  nidn?: string;
  position?: string;
  educationLevel?: string;
  expertise?: string;
  email?: string;
  sortOrder: number;
  createdAt: string;
}

export interface Staff {
  id: number;
  name: string;
  photo?: string;
  position?: string;
  email?: string;
  sortOrder: number;
  createdAt: string;
}

export interface LecturersListResponse {
  success: boolean;
  data: Lecturer[];
}

export interface StaffListResponse {
  success: boolean;
  data: Staff[];
}

// --- Testimonials ---
export interface TestimonialItem {
  id: number;
  alumniName: string;
  graduationYear?: number;
  currentJob?: string;
  photo?: string;
  testimonialText: string;
  isFeatured: boolean;
  createdAt: string;
}

export interface TestimonialsListResponse {
  success: boolean;
  data: TestimonialItem[];
}

// --- FAQ ---
export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  sortOrder: number;
  category: string;
}

export interface FAQsListResponse {
  success: boolean;
  data: FAQItem[];
}

export interface CreateFAQPayload {
  question: string;
  answer: string;
  sortOrder: number;
  category: string;
}

export interface UpdateFAQPayload extends CreateFAQPayload {
  id: number;
}

// --- Facilities ---
export interface FacilityListItem {
  id: number;
  name: string;
  slug: string;
  shortDescription: string;
  iconName: string;
  featuredImage: string;
}

export interface FacilityDetail extends FacilityListItem {
  longDescription: string;
  photos: string[];
}

export interface FacilitiesListResponse {
  success: boolean;
  data: FacilityListItem[];
}

export interface FacilityDetailResponse {
  success: boolean;
  message?: string;
  data?: FacilityDetail;
}

export interface CreateFacilityPayload {
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  iconName: string;
  featuredImage: string;
  photos: string[];
}

export interface UpdateFacilityPayload extends CreateFacilityPayload {
  id: number;
}

// --- Upload ---
export interface UploadResponse {
  success: boolean;
  message: string;
  url?: string;
}

// --- Generic ---
export interface ApiResponse {
  success: boolean;
  message?: string;
}

// --- Tuition Fees ---
export interface TuitionFeeItem {
  id: number;
  program: string;
  category: string;
  itemName: string;
  amount: number;
  sortOrder: number;
}

export interface TuitionFeesListResponse {
  success: boolean;
  data: TuitionFeeItem[];
}

export interface CreateTuitionFeePayload {
  program: string;
  category: string;
  itemName: string;
  amount: number;
  sortOrder: number;
}

export interface UpdateTuitionFeePayload extends CreateTuitionFeePayload {
  id: number;
}

// --- Tuition Notes ---
export interface TuitionNoteItem {
  id: number;
  program: string;
  noteText: string;
  sortOrder: number;
}

export interface TuitionNotesListResponse {
  success: boolean;
  data: TuitionNoteItem[];
}

export interface CreateTuitionNotePayload {
  program: string;
  noteText: string;
  sortOrder: number;
}

export interface UpdateTuitionNotePayload extends CreateTuitionNotePayload {
  id: number;
}

// --- Study Programs ---
export interface StudyProgramItem {
  id: number;
  name: string;
  level: string;
  degree: string;
  totalCredits: number;
  studyDuration: string;
  learningSystem: string;
}

export interface StudyProgramsListResponse {
  success: boolean;
  data: StudyProgramItem[];
}

export interface StudyProgramDetailResponse {
  success: boolean;
  data: StudyProgramItem;
}

export interface CreateStudyProgramPayload {
  name: string;
  level: string;
  degree: string;
  totalCredits: number;
  studyDuration: string;
  learningSystem: string;
}

export interface UpdateStudyProgramPayload extends CreateStudyProgramPayload {
  id: number;
}

// --- Courses & Categories ---

export interface CourseCategoryItem {
  id: number;
  name: string;
  totalSKS: number;
  studyProgramId?: number;
}

export interface CourseItem {
  id: number;
  name: string;
  credits: number;
  categoryId: number;
  category?: CourseCategoryItem;
}

export interface CreateCourseCategoryPayload {
  name: string;
  totalSKS: number;
  studyProgramId?: number | null;
}

export interface UpdateCourseCategoryPayload extends CreateCourseCategoryPayload {
  id: number;
}

export interface CreateCoursePayload {
  name: string;
  credits: number;
  categoryId: number;
}

export interface UpdateCoursePayload extends CreateCoursePayload {
  id: number;
}

export interface CourseListResponse {
  success: boolean;
  data: CourseItem[];
}

export interface CourseCategoryListResponse {
  success: boolean;
  data: CourseCategoryItem[];
}

export interface CourseDetailResponse {
  success: boolean;
  data: CourseItem;
}

export interface CourseCategoryDetailResponse {
  success: boolean;
  data: CourseCategoryItem;
}

// =============================================================================
// Helper Utilities
// =============================================================================

function getAuthHeaders(): HeadersInit {
  const token = typeof window !== "undefined" ? localStorage.getItem("sttb_token") : null;
  const headers: HeadersInit = { "Content-Type": "application/json" };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  return headers;
}

function getAuthHeadersMultipart(): HeadersInit {
  const token = typeof window !== "undefined" ? localStorage.getItem("sttb_token") : null;
  const headers: HeadersInit = {};
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  return headers;
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({ message: "Request failed" }));
    throw new Error(errorBody.message || `HTTP ${response.status}`);
  }
  return response.json();
}

// =============================================================================
// AUTH API
// =============================================================================

export const authApi = {
  /** POST /api/v1/auth/login */
  async login(payload: LoginPayload): Promise<LoginResponse> {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return handleResponse<LoginResponse>(res);
  },

  /** POST /api/v1/auth/logout */
  async logout(): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/auth/logout`, {
      method: "POST",
      headers: getAuthHeaders(),
    });
    return handleResponse<ApiResponse>(res);
  },

  /** GET /api/v1/auth/me */
  async getProfile(): Promise<ProfileResponse> {
    const res = await fetch(`${API_BASE_URL}/auth/me`, {
      headers: getAuthHeaders(),
    });
    return handleResponse<ProfileResponse>(res);
  },
};

// =============================================================================
// NEWS API (Public)
// =============================================================================

export const newsApi = {
  /** GET /api/v1/news */
  async getList(params?: { page?: number; pageSize?: number; status?: string }): Promise<NewsListResponse> {
    const query = new URLSearchParams();
    if (params?.page) query.set("page", String(params.page));
    if (params?.pageSize) query.set("pageSize", String(params.pageSize));
    if (params?.status) query.set("status", params.status);
    const res = await fetch(`${API_BASE_URL}/news?${query.toString()}`);
    return handleResponse<NewsListResponse>(res);
  },

  /** GET /api/v1/news/{slug} */
  async getDetail(slug: string): Promise<NewsDetailResponse> {
    const res = await fetch(`${API_BASE_URL}/news/${slug}`);
    return handleResponse<NewsDetailResponse>(res);
  },
};

// =============================================================================
// NEWS ADMIN API (requires auth)
// =============================================================================

export const adminNewsApi = {
  /** POST /api/v1/admin/news */
  async create(payload: CreateNewsPayload): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/news`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(payload),
    });
    return handleResponse<ApiResponse>(res);
  },

  /** PUT /api/v1/admin/news/{id} */
  async update(id: number, payload: UpdateNewsPayload): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/news/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify({ ...payload, id }),
    });
    return handleResponse<ApiResponse>(res);
  },

  /** DELETE /api/v1/admin/news/{id} */
  async delete(id: number): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/news/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    return handleResponse<ApiResponse>(res);
  },
};

// =============================================================================
// EVENTS API (Public)
// =============================================================================

export const eventsApi = {
  /** GET /api/v1/events */
  async getList(): Promise<EventsListResponse> {
    const res = await fetch(`${API_BASE_URL}/events`);
    return handleResponse<EventsListResponse>(res);
  },
};

// =============================================================================
// EVENTS ADMIN API (requires auth)
// =============================================================================

export const adminEventsApi = {
  /** POST /api/v1/admin/events */
  async create(payload: CreateEventPayload): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/events`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(payload),
    });
    return handleResponse<ApiResponse>(res);
  },

  /** PUT /api/v1/admin/events/{id} */
  async update(id: number, payload: UpdateEventPayload): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/events/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify({ ...payload, id }),
    });
    return handleResponse<ApiResponse>(res);
  },

  /** DELETE /api/v1/admin/events/{id} */
  async delete(id: number): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/events/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    return handleResponse<ApiResponse>(res);
  },
};

// =============================================================================
// GALLERY API (Public)
// =============================================================================

export const galleryApi = {
  /** GET /api/v1/gallery/albums */
  async getAlbums(): Promise<AlbumsListResponse> {
    const res = await fetch(`${API_BASE_URL}/gallery/albums`);
    return handleResponse<AlbumsListResponse>(res);
  },

  /** GET /api/v1/gallery/albums/{id} */
  async getAlbumDetail(id: number): Promise<AlbumDetailResponse> {
    const res = await fetch(`${API_BASE_URL}/gallery/albums/${id}`);
    return handleResponse<AlbumDetailResponse>(res);
  },
};

// =============================================================================
// ALBUMS ADMIN API (requires auth)
// =============================================================================

export const adminAlbumsApi = {
  /** POST /api/v1/admin/albums */
  async create(payload: CreateAlbumPayload): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/albums`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(payload),
    });
    return handleResponse<ApiResponse>(res);
  },

  /** PUT /api/v1/admin/albums/{id} */
  async update(id: number, payload: UpdateAlbumPayload): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/albums/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify({ ...payload, id }),
    });
    return handleResponse<ApiResponse>(res);
  },

  /** DELETE /api/v1/admin/albums/{id} */
  async delete(id: number): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/albums/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    return handleResponse<ApiResponse>(res);
  },
};

// =============================================================================
// MEDIA ADMIN API (requires auth)
// =============================================================================

export const adminMediaApi = {
  /** POST /api/v1/admin/media */
  async create(payload: CreateMediaPayload): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/media`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(payload),
    });
    return handleResponse<ApiResponse>(res);
  },

  /** PUT /api/v1/admin/media/{id} */
  async update(id: number, payload: UpdateMediaPayload): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/media/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify({ ...payload, id }),
    });
    return handleResponse<ApiResponse>(res);
  },

  /** DELETE /api/v1/admin/media/{id} */
  async delete(id: number): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/media/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    return handleResponse<ApiResponse>(res);
  },
};

// =============================================================================
// ACHIEVEMENTS API (Public)
// =============================================================================

export const achievementsApi = {
  /** GET /api/v1/achievements */
  async getList(): Promise<AchievementsListResponse> {
    const res = await fetch(`${API_BASE_URL}/achievements`);
    return handleResponse<AchievementsListResponse>(res);
  },
};

// =============================================================================
// ANNOUNCEMENTS API (Public)
// =============================================================================

export const announcementsApi = {
  /** GET /api/v1/announcements */
  async getList(): Promise<AnnouncementsListResponse> {
    const res = await fetch(`${API_BASE_URL}/announcements`);
    return handleResponse<AnnouncementsListResponse>(res);
  },
};

// =============================================================================
// CONTACTS API (Public submit)
// =============================================================================

export const contactsApi = {
  /** POST /api/v1/contacts */
  async send(payload: CreateContactPayload): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return handleResponse<ApiResponse>(res);
  },
};

// =============================================================================
// HR API (Public)
// =============================================================================

export const hrApi = {
  /** GET /api/v1/lecturers */
  async getLecturers(): Promise<LecturersListResponse> {
    const res = await fetch(`${API_BASE_URL}/lecturers`);
    return handleResponse<LecturersListResponse>(res);
  },

  /** GET /api/v1/Staff */
  async getStaff(): Promise<StaffListResponse> {
    const res = await fetch(`${API_BASE_URL}/Staff`);
    return handleResponse<StaffListResponse>(res);
  },
};

// =============================================================================
// TESTIMONIALS API (Public)
// =============================================================================

export const testimonialsApi = {
  /** GET /api/v1/testimonials */
  async getList(): Promise<TestimonialsListResponse> {
    const res = await fetch(`${API_BASE_URL}/testimonials`);
    return handleResponse<TestimonialsListResponse>(res);
  },
};

// =============================================================================
// FAQ API (Public)
// =============================================================================

export const faqApi = {
  /** GET /api/v1/faq */
  async getList(): Promise<FAQsListResponse> {
    const res = await fetch(`${API_BASE_URL}/faq`);
    return handleResponse<FAQsListResponse>(res);
  },
};

// =============================================================================
// UPLOAD API (requires auth)
// =============================================================================

export const uploadApi = {
  /** POST /api/v1/upload */
  async uploadFile(file: File): Promise<UploadResponse> {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(`${API_BASE_URL}/upload`, {
      method: "POST",
      headers: getAuthHeadersMultipart(),
      body: formData,
    });
    return handleResponse<UploadResponse>(res);
  },
};

// =============================================================================
// ADMIN CONTACTS API (requires auth)
// =============================================================================

export interface AdminContactMessagesListResponse {
  success: boolean;
  data: ContactMessageItem[];
  totalCount?: number;
}

export const adminContactsApi = {
  /** GET /api/v1/admin/contacts */
  async getList(params?: { page?: number; pageSize?: number; isRead?: boolean }): Promise<AdminContactMessagesListResponse> {
    const query = new URLSearchParams();
    if (params?.page) query.set("page", String(params.page));
    if (params?.pageSize) query.set("pageSize", String(params.pageSize));
    if (params?.isRead !== undefined) query.set("isRead", String(params.isRead));

    const res = await fetch(`${API_BASE_URL}/admin/contacts?${query.toString()}`, {
      headers: getAuthHeaders(),
    });
    return handleResponse<AdminContactMessagesListResponse>(res);
  },

  /** PUT /api/v1/admin/contacts/{id} */
  async update(id: number, payload: { isRead: boolean }): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/contacts/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify({ ...payload, id }),
    });
    return handleResponse<ApiResponse>(res);
  },

  /** DELETE /api/v1/admin/contacts/{id} */
  async delete(id: number): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/contacts/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    return handleResponse<ApiResponse>(res);
  },
};

// =============================================================================
// ADMIN USERS API (requires auth)
// =============================================================================

export interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
  createdAt?: string;
}

export interface UsersListResponse {
  success: boolean;
  data: User[];
}

export interface CreateUserPayload {
  name: string;
  email: string;
  password?: string;
  isAdmin: boolean;
}

export interface UpdateUserPayload extends CreateUserPayload {
  id: number;
}

export const adminUsersApi = {
  /** GET /api/v1/admin/users */
  async getList(): Promise<UsersListResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/users`, {
      headers: getAuthHeaders(),
    });
    return handleResponse<UsersListResponse>(res);
  },

  /** POST /api/v1/admin/users */
  async create(payload: CreateUserPayload): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/users`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(payload),
    });
    return handleResponse<ApiResponse>(res);
  },

  /** PUT /api/v1/admin/users/{id} */
  async update(id: number, payload: UpdateUserPayload): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/users/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify(payload),
    });
    return handleResponse<ApiResponse>(res);
  },

  /** DELETE /api/v1/admin/users/{id} */
  async delete(id: number): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/users/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    return handleResponse<ApiResponse>(res);
  },
};

// =============================================================================
// ADMIN LECTURERS API (requires auth)
// =============================================================================

export interface CreateLecturerPayload {
  name: string;
  photo?: string;
  nidn?: string;
  position?: string;
  educationLevel?: string;
  expertise?: string;
  email?: string;
  sortOrder?: number;
}

export interface UpdateLecturerPayload extends CreateLecturerPayload {
  id: number;
}

export const adminLecturersApi = {
  /** POST /api/v1/admin/lecturers */
  async create(payload: CreateLecturerPayload): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/lecturers`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(payload),
    });
    return handleResponse<ApiResponse>(res);
  },

  /** PUT /api/v1/admin/lecturers/{id} */
  async update(id: number, payload: UpdateLecturerPayload): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/lecturers/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify({ ...payload, id }),
    });
    return handleResponse<ApiResponse>(res);
  },

  /** DELETE /api/v1/admin/lecturers/{id} */
  async delete(id: number): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/lecturers/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    return handleResponse<ApiResponse>(res);
  },
};

// =============================================================================
// ADMIN STAFF API (requires auth)
// =============================================================================

export interface CreateStaffPayload {
  name: string;
  photo?: string;
  position?: string;
  email?: string;
  sortOrder?: number;
}

export interface UpdateStaffPayload extends CreateStaffPayload {
  id: number;
}

export const adminStaffApi = {
  /** POST /api/v1/admin/staff */
  async create(payload: CreateStaffPayload): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/staff`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(payload),
    });
    return handleResponse<ApiResponse>(res);
  },

  /** PUT /api/v1/admin/staff/{id} */
  async update(id: number, payload: UpdateStaffPayload): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/staff/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify({ ...payload, id }),
    });
    return handleResponse<ApiResponse>(res);
  },

  /** DELETE /api/v1/admin/staff/{id} */
  async delete(id: number): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/staff/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    return handleResponse<ApiResponse>(res);
  },
};

// =============================================================================
// ADMIN FAQ API (requires auth)
// =============================================================================

export const adminFaqApi = {
  /** POST /api/v1/admin/faq */
  async create(payload: CreateFAQPayload): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/faq`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(payload),
    });
    return handleResponse<ApiResponse>(res);
  },

  /** PUT /api/v1/admin/faq/{id} */
  async update(id: number, payload: UpdateFAQPayload): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/faq/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify({ ...payload, id }),
    });
    return handleResponse<ApiResponse>(res);
  },

  /** DELETE /api/v1/admin/faq/{id} */
  async delete(id: number): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/faq/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    return handleResponse<ApiResponse>(res);
  },
};

// =============================================================================
// FACILITIES API (Public)
// =============================================================================

export const facilitiesApi = {
  /** GET /api/v1/facilities */
  async getList(): Promise<FacilitiesListResponse> {
    const res = await fetch(`${API_BASE_URL}/facilities`);
    return handleResponse<FacilitiesListResponse>(res);
  },

  /** GET /api/v1/facilities/{slug} */
  async getDetail(slug: string): Promise<FacilityDetailResponse> {
    const res = await fetch(`${API_BASE_URL}/facilities/${slug}`);
    return handleResponse<FacilityDetailResponse>(res);
  },
};

// =============================================================================
// ADMIN FACILITIES API (requires auth)
// =============================================================================

export const adminFacilitiesApi = {
  /** POST /api/v1/admin/facilities */
  async create(payload: CreateFacilityPayload): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/facilities`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(payload),
    });
    return handleResponse<ApiResponse>(res);
  },

  /** PUT /api/v1/admin/facilities/{id} */
  async update(id: number, payload: UpdateFacilityPayload): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/facilities/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify({ ...payload, id }),
    });
    return handleResponse<ApiResponse>(res);
  },

  /** DELETE /api/v1/admin/facilities/{id} */
  async delete(id: number): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/facilities/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    return handleResponse<ApiResponse>(res);
  },
};

// =============================================================================
// TUITION FEES API (Public)
// =============================================================================

export const tuitionApi = {
  /** GET /api/v1/tuition */
  async getList(): Promise<TuitionFeesListResponse> {
    const res = await fetch(`${API_BASE_URL}/tuition`);
    return handleResponse<TuitionFeesListResponse>(res);
  },

  /** GET /api/v1/tuition/notes */
  async getNotes(): Promise<TuitionNotesListResponse> {
    const res = await fetch(`${API_BASE_URL}/tuition/notes`);
    return handleResponse<TuitionNotesListResponse>(res);
  },
};

// =============================================================================
// ADMIN TUITION FEES API (requires auth)
// =============================================================================

export const adminTuitionApi = {
  /** POST /api/v1/admin/tuition */
  async create(payload: CreateTuitionFeePayload): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/tuition`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(payload),
    });
    return handleResponse<ApiResponse>(res);
  },

  /** PUT /api/v1/admin/tuition/{id} */
  async update(id: number, payload: UpdateTuitionFeePayload): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/tuition/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify({ ...payload, id }),
    });
    return handleResponse<ApiResponse>(res);
  },

  /** DELETE /api/v1/admin/tuition/{id} */
  async delete(id: number): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/tuition/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    return handleResponse<ApiResponse>(res);
  },

  // --- Notes CRUD ---

  /** POST /api/v1/admin/tuition/notes */
  async createNote(payload: CreateTuitionNotePayload): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/tuition/notes`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(payload),
    });
    return handleResponse<ApiResponse>(res);
  },

  /** PUT /api/v1/admin/tuition/notes/{id} */
  async updateNote(id: number, payload: UpdateTuitionNotePayload): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/tuition/notes/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify({ ...payload, id }),
    });
    return handleResponse<ApiResponse>(res);
  },

  /** DELETE /api/v1/admin/tuition/notes/{id} */
  async deleteNote(id: number): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/tuition/notes/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    return handleResponse<ApiResponse>(res);
  },
};

// =============================================================================
// STUDY PROGRAMS API (Public)
// =============================================================================

export const programsApi = {
  /** GET /api/v1/programs */
  async getList(): Promise<StudyProgramsListResponse> {
    const res = await fetch(`${API_BASE_URL}/programs`);
    return handleResponse<StudyProgramsListResponse>(res);
  },

  /** GET /api/v1/programs/{id} */
  async getDetail(id: number): Promise<StudyProgramDetailResponse> {
    const res = await fetch(`${API_BASE_URL}/programs/${id}`);
    return handleResponse<StudyProgramDetailResponse>(res);
  },
};

// =============================================================================
// ADMIN STUDY PROGRAMS API (requires auth)
// =============================================================================

export const adminProgramsApi = {
  /** GET /api/v1/admin/programs */
  async getList(): Promise<StudyProgramsListResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/programs`, {
      method: "GET",
      headers: getAuthHeaders(),
    });
    return handleResponse<StudyProgramsListResponse>(res);
  },

  /** POST /api/v1/admin/programs */
  async create(payload: CreateStudyProgramPayload): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/programs`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(payload),
    });
    return handleResponse<ApiResponse>(res);
  },

  /** PUT /api/v1/admin/programs/{id} */
  async update(id: number, payload: UpdateStudyProgramPayload): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/programs/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify({ ...payload, id }),
    });
    return handleResponse<ApiResponse>(res);
  },

  /** DELETE /api/v1/admin/programs/{id} */
  async delete(id: number): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/programs/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    return handleResponse<ApiResponse>(res);
  },
};

// =============================================================================
// COURSE CATEGORIES API
// =============================================================================

export const courseCategoriesApi = {
  /** GET /api/v1/course-categories */
  async getList(): Promise<CourseCategoryListResponse> {
    const res = await fetch(`${API_BASE_URL}/course-categories`);
    return handleResponse<CourseCategoryListResponse>(res);
  },

  /** GET /api/v1/course-categories/{id} */
  async getDetail(id: number): Promise<CourseCategoryDetailResponse> {
    const res = await fetch(`${API_BASE_URL}/course-categories/${id}`);
    return handleResponse<CourseCategoryDetailResponse>(res);
  },
};

export const adminCourseCategoriesApi = {
  /** GET /api/v1/admin/course-categories */
  async getList(): Promise<CourseCategoryListResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/course-categories`, {
      method: "GET",
      headers: getAuthHeaders(),
    });
    return handleResponse<CourseCategoryListResponse>(res);
  },

  /** POST /api/v1/admin/course-categories */
  async create(payload: CreateCourseCategoryPayload): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/course-categories`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(payload),
    });
    return handleResponse<ApiResponse>(res);
  },

  /** PUT /api/v1/admin/course-categories/{id} */
  async update(id: number, payload: UpdateCourseCategoryPayload): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/course-categories/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify({ ...payload, id }),
    });
    return handleResponse<ApiResponse>(res);
  },

  /** DELETE /api/v1/admin/course-categories/{id} */
  async delete(id: number): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/course-categories/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    return handleResponse<ApiResponse>(res);
  },
};

// =============================================================================
// COURSES API
// =============================================================================

export const coursesApi = {
  /** GET /api/v1/courses */
  async getList(): Promise<CourseListResponse> {
    const res = await fetch(`${API_BASE_URL}/courses`);
    return handleResponse<CourseListResponse>(res);
  },

  /** GET /api/v1/courses/{id} */
  async getDetail(id: number): Promise<CourseDetailResponse> {
    const res = await fetch(`${API_BASE_URL}/courses/${id}`);
    return handleResponse<CourseDetailResponse>(res);
  },
};

export const adminCoursesApi = {
  /** GET /api/v1/admin/courses */
  async getList(): Promise<CourseListResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/courses`, {
      method: "GET",
      headers: getAuthHeaders(),
    });
    return handleResponse<CourseListResponse>(res);
  },

  /** POST /api/v1/admin/courses */
  async create(payload: CreateCoursePayload): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/courses`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(payload),
    });
    return handleResponse<ApiResponse>(res);
  },

  /** PUT /api/v1/admin/courses/{id} */
  async update(id: number, payload: UpdateCoursePayload): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/courses/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify({ ...payload, id }),
    });
    return handleResponse<ApiResponse>(res);
  },

  /** DELETE /api/v1/admin/courses/{id} */
  async delete(id: number): Promise<ApiResponse> {
    const res = await fetch(`${API_BASE_URL}/admin/courses/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    return handleResponse<ApiResponse>(res);
  },
};
