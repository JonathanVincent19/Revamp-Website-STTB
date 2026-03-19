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
