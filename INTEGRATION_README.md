# 📋 Laporan Integrasi Backend ↔ Frontend — STTB

> **Tanggal**: 13 Maret 2026  
> **Status Sebelum Integrasi**: 0% — semua data di Frontend hardcoded, belum ada satupun pemanggilan API.

---

## 🗺️ 1. Peta Integrasi (Matchmaking)

### 1A. Frontend Website (Public) ↔ Backend

| # | Halaman FE | File FE | Endpoint BE | Status |
|---|-----------|---------|-------------|--------|
| 1 | **News List** | `news/page.tsx` → `NewsPage.tsx` | `GET /api/v1/news` | ✅ Cocok |
| 2 | **News Detail** | `news/[slug]` *(belum ada)* | `GET /api/v1/news/{slug}` | ⚠️ FE perlu route `[slug]` |
| 3 | **Events / Jadwal** | `admissions/jadwal/page.tsx` | `GET /api/v1/events` | ✅ Cocok |
| 4 | **Gallery / Media** | `media/page.tsx` → `MediaPage.tsx` | `GET /api/v1/gallery/albums` | ✅ Cocok |
| 5 | **Gallery Detail** | *(belum ada)* | `GET /api/v1/gallery/albums/{id}` | ⚠️ FE perlu route detail |
| 6 | **About / Dosen** | `about/page.tsx` → `AboutPage.tsx` | `GET /api/v1/lecturers` | ✅ Cocok |
| 7 | **About / Staff** | `about/page.tsx` → `AboutPage.tsx` | `GET /api/v1/Staff` | ✅ Cocok |
| 8 | **Alumni / Testimonials** | `alumni/page.tsx` → `AlumniPage.tsx` | `GET /api/v1/testimonials` | ✅ Cocok |
| 9 | **Contact Form** | `contact/page.tsx` → `ContactPage.tsx` | `POST /api/v1/contacts` | ✅ Cocok |
| 10 | **Homepage (berita terbaru)** | `page.tsx` → `HomePage.tsx` | `GET /api/v1/news` | ✅ Cocok |
| 11 | **Homepage (agenda)** | `page.tsx` → `HomePage.tsx` | `GET /api/v1/events` | ✅ Cocok |
| 12 | **Homepage (testimonial)** | `page.tsx` → `HomePage.tsx` | `GET /api/v1/testimonials` | ✅ Cocok |
| 13 | **Homepage (pengumuman)** | `page.tsx` → `HomePage.tsx` | `GET /api/v1/announcements` | ✅ Cocok |

---

### 1B. CMS Admin ↔ Backend

| # | Halaman CMS | File CMS | Endpoint BE | Status |
|---|-----------|---------|-------------|--------|
| 1 | **Login** | *(belum ada)* | `POST /api/v1/auth/login` | ⚠️ Form login belum dibuat |
| 2 | **Dashboard** | `admin/page.tsx` | Multiple `GET` counts | ⚠️ Butuh API dashboard stats |
| 3 | **Kelola Berita** | `admin/berita/page.tsx` | `GET /news` + Admin `POST/PUT/DELETE` | ✅ Cocok |
| 4 | **Kelola Jadwal/Event** | `admin/jadwal/page.tsx` | `GET /events` + Admin `POST/PUT/DELETE` | ✅ Cocok |
| 5 | **Kelola Media** | `admin/media/page.tsx` | Admin `POST/PUT/DELETE /media` + `POST /upload` | ✅ Cocok |
| 6 | **Pesan Masuk** | `admin/pesan/page.tsx` | *(hanya POST publik, GET list admin belum ada)* | 🚨 Butuh BE baru |
| 7 | **Kelola User** | `admin/users/page.tsx` | *(tidak ada endpoint user CRUD)* | 🚨 Butuh BE baru |
| 8 | **About / Dosen** | `admin/about/page.tsx` | `GET /lecturers` *(admin CRUD belum ada)* | 🚨 Butuh BE baru |
| 9 | **Program Studi** | `admin/program-studi/page.tsx` | *(tidak ada endpoint)* | 🚨 Butuh BE baru |
| 10 | **Admisi** | `admin/admisi/page.tsx` | *(tidak ada endpoint)* | 🚨 Butuh BE baru |
| 11 | **Beasiswa** | `admin/beasiswa/page.tsx` | *(tidak ada endpoint)* | 🚨 Butuh BE baru |
| 12 | **Biaya Studi** | `admin/biaya-studi/page.tsx` | *(tidak ada endpoint)* | 🚨 Butuh BE baru |
| 13 | **FAQ** | `admin/faq/page.tsx` | *(tidak ada endpoint)* | 🚨 Butuh BE baru |
| 14 | **Fasilitas** | `admin/fasilitas/page.tsx` | *(tidak ada endpoint)* | 🚨 Butuh BE baru |
| 15 | **Jurnal** | `admin/jurnal/page.tsx` | *(tidak ada endpoint)* | 🚨 Butuh BE baru |
| 16 | **Pembinaan** | `admin/pembinaan/page.tsx` | *(tidak ada endpoint)* | 🚨 Butuh BE baru |
| 17 | **Senat** | `admin/senat/page.tsx` | *(tidak ada endpoint)* | 🚨 Butuh BE baru |
| 18 | **Settings** | `admin/settings/page.tsx` | *(tidak ada endpoint)* | 🚨 Butuh BE baru |

---

## 💻 2. Kode Integrasi (Siap Pakai)

Sudah dibuatkan 2 file siap pakai:

### `FE/src/lib/api.ts` — API Service Layer
Berisi semua fungsi `fetch` yang typed untuk setiap endpoint BE. Termasuk:
- **Interfaces/Types** untuk request payload dan response
- **Auth helpers** (token management via `localStorage`)
- **Error handling** terpusat via `handleResponse()`
- **Dukungan** untuk `multipart/form-data` (upload file)

### `FE/src/lib/hooks.ts` — React Hooks
Custom hooks siap pakai untuk setiap API:

**Public hooks** (auto-fetch saat mount):
- `useNewsList()`, `useNewsDetail(slug)`, `useEventsList()`
- `useGalleryAlbums()`, `useGalleryAlbumDetail(id)`
- `useAchievements()`, `useAnnouncements()`
- `useLecturers()`, `useStaff()`, `useTestimonials()`

**Mutation hooks** (panggil secara manual):
- `useContactSubmit()`, `useLogin()`
- `useCreateNews()`, `useUpdateNews()`, `useDeleteNews()`
- `useCreateEvent()`, `useUpdateEvent()`, `useDeleteEvent()`
- `useCreateAlbum()`, `useUpdateAlbum()`, `useDeleteAlbum()`
- `useCreateMedia()`, `useUpdateMedia()`, `useDeleteMedia()`
- `useUploadFile()`

### Contoh Penggunaan di Komponen:

```tsx
// Contoh 1: Halaman berita publik
import { useNewsList } from "@/lib/hooks";

export default function NewsPage() {
  const { data: news, loading, error } = useNewsList({ status: "published" });

  if (loading) return <p>Memuat...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {news?.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}
```

```tsx
// Contoh 2: Admin hapus berita
import { useDeleteNews, useNewsList } from "@/lib/hooks";

export default function AdminBerita() {
  const { data: news, refetch } = useNewsList();
  const { mutate: deleteNews, loading: deleting } = useDeleteNews();

  const handleDelete = async (id: number) => {
    if (!confirm("Yakin hapus?")) return;
    await deleteNews(id);
    refetch(); // refresh list
  };

  // ...
}
```

```tsx
// Contoh 3: Contact form publik
import { useContactSubmit } from "@/lib/hooks";

export default function ContactPage() {
  const { mutate: sendMessage, loading, success, error } = useContactSubmit();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    await sendMessage({
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      subject: fd.get("subject") as string,
      message: fd.get("message") as string,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      <button disabled={loading}>
        {loading ? "Mengirim..." : "Kirim Pesan"}
      </button>
      {success && <p>Pesan terkirim!</p>}
      {error && <p>Gagal: {error}</p>}
    </form>
  );
}
```

---

## 🚨 3. API Krusial yang Belum Dibuat (To-Do Backend)

### Prioritas TINGGI (Wajib untuk CMS berfungsi)

| # | Endpoint | Method | Deskripsi | Request Payload | Response |
|---|----------|--------|-----------|-----------------|----------|
| 1 | `/api/v1/admin/contacts` | `GET` | List pesan masuk (admin) | `?page=1&pageSize=10&isRead=false` | `{ success, data: ContactMessage[], totalCount }` |
| 2 | `/api/v1/admin/contacts/{id}` | `PUT` | Mark as read / update | `{ id, isRead: true }` | `{ success, message }` |
| 3 | `/api/v1/admin/contacts/{id}` | `DELETE` | Hapus pesan | - | `{ success, message }` |
| 4 | `/api/v1/admin/users` | `GET` | List semua user | - | `{ success, data: User[] }` |
| 5 | `/api/v1/admin/users` | `POST` | Create user baru | `{ name, email, password, isAdmin }` | `{ success, message }` |
| 6 | `/api/v1/admin/users/{id}` | `PUT` | Update user | `{ id, name, email, isAdmin }` | `{ success, message }` |
| 7 | `/api/v1/admin/users/{id}` | `DELETE` | Hapus user | - | `{ success, message }` |
| 8 | `/api/v1/admin/lecturers` | `POST` | Tambah dosen | `{ name, photo?, nidn?, position?, educationLevel?, expertise?, email? }` | `{ success, message }` |
| 9 | `/api/v1/admin/lecturers/{id}` | `PUT` | Update dosen | *same as POST + id* | `{ success, message }` |
| 10 | `/api/v1/admin/lecturers/{id}` | `DELETE` | Hapus dosen | - | `{ success, message }` |
| 11 | `/api/v1/admin/staff` | `POST` | Tambah staff | `{ name, photo?, position?, email? }` | `{ success, message }` |
| 12 | `/api/v1/admin/staff/{id}` | `PUT` | Update staff | *same as POST + id* | `{ success, message }` |
| 13 | `/api/v1/admin/staff/{id}` | `DELETE` | Hapus staff | - | `{ success, message }` |

### Prioritas SEDANG (Fitur CMS yang butuh model baru)

| # | Endpoint | Resource | Metode Minimal | Saran Model Entity |
|---|----------|----------|----------------|---------------------|
| 14 | `/api/v1/admin/programs` | Program Studi | `GET/POST/PUT/DELETE` | `Program { Id, Name, Level, Description, Semesters, Status, Curriculum? }` |
| 15 | `/api/v1/programs` | Program Studi (publik) | `GET list, GET /{slug}` | *sama* |
| 16 | `/api/v1/admin/admissions` | Pendaftar | `GET/POST/PUT/DELETE` | `Admission { Id, Name, Program, Gelombang, Status, Documents? }` |
| 17 | `/api/v1/admin/scholarships` | Beasiswa | `GET/POST/PUT/DELETE` | `Scholarship { Id, Name, Type, Quota, Status }` |
| 18 | `/api/v1/scholarships` | Beasiswa (publik) | `GET list` | *sama* |
| 19 | `/api/v1/admin/tuition` | Biaya Studi | `GET/PUT` | `TuitionFee { Id, Program, ItemName, Amount }` |
| 20 | `/api/v1/tuition` | Biaya Studi (publik) | `GET` | *sama* |
| 21 | `/api/v1/admin/faq` | FAQ | `GET/POST/PUT/DELETE` | `FAQ { Id, Question, Answer, SortOrder }` |
| 22 | `/api/v1/faq` | FAQ (publik) | `GET` | *sama* |
| 23 | `/api/v1/admin/facilities` | Fasilitas | `GET/POST/PUT/DELETE` | `Facility { Id, Name, Description, Photo, Status }` |
| 24 | `/api/v1/facilities` | Fasilitas (publik) | `GET` | *sama* |
| 25 | `/api/v1/admin/journals` | Jurnal | `GET/POST/PUT/DELETE` | `Journal { Id, Title, Author, Volume, PdfUrl, Status }` |
| 26 | `/api/v1/journals` | Jurnal (publik) | `GET` | *sama* |
| 27 | `/api/v1/admin/pembinaan` | Pembinaan | `GET/POST/PUT/DELETE` | `Pembinaan { Id, Name, Description, Schedule, Status }` |
| 28 | `/api/v1/admin/senat` | Senat | `GET/POST/PUT/DELETE` | `SenatMember { Id, Name, NIM, Jabatan, Periode, Status }` |

### Prioritas RENDAH (Nice to have)

| # | Endpoint | Deskripsi |
|---|----------|-----------|
| 29 | `/api/v1/admin/achievements` | Admin CRUD prestasi (saat ini hanya public GET) |
| 30 | `/api/v1/admin/announcements` | Admin CRUD pengumuman (saat ini hanya public GET) |
| 31 | `/api/v1/admin/testimonials` | Admin CRUD testimonial (saat ini hanya public GET) |
| 32 | `/api/v1/admin/settings` | GET/PUT untuk settings website |
| 33 | `/api/v1/admin/dashboard-stats` | GET stats untuk dashboard (Total berita, pendaftar, pesan) |

---

## ⚠️ 4. API Menganggur (Orphaned Endpoints)

Setelah analisis menyeluruh, **tidak ada endpoint yang benar-benar "orphaned"** (menganggur tanpa tujuan), karena semua endpoint yang sudah ada memiliki pasangan di sisi FE. Namun, ada beberapa catatan:

| Endpoint | Catatan |
|----------|---------|
| `GET /api/v1/achievements` | FE belum memiliki halaman khusus prestasi, tapi bisa dipakai di homepage |
| `GET /api/v1/announcements` | FE belum memiliki halaman pengumuman terpisah, tapi bisa dipakai di homepage |
| `POST /api/v1/auth/logout` | Belum ada UI logout di admin (belum ada login page) |
| `GET /api/v1/auth/me` | Belum ada implementasi profile checking di admin |
| `POST /api/v1/upload` | Sudah tersedia tapi belum terhubung ke form upload di CMS Media |

> **Kesimpulan**: Semua endpoint sudah memiliki potential consumer. Yang diperlukan hanyalah menghubungkan dengan kode integrasi yang sudah disediakan.

---

## 📁 5. File yang Dibuat

| File | Deskripsi |
|------|-----------|
| `FE/src/lib/api.ts` | API service layer — semua fungsi fetch + TypeScript interfaces |
| `FE/src/lib/hooks.ts` | React hooks — state management (loading/error/data) siap pakai |
| `INTEGRATION_README.md` | Dokumen ini |

---

## 🔧 6. Setup yang Diperlukan

### 1. Environment Variable
Tambahkan file `.env.local` di `FE/`:
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1
```

### 2. CORS
Backend sudah dikonfigurasi untuk menerima request dari `http://localhost:3000` (lihat `Program.cs` baris 70-76). Pastikan URL di env sesuai.

### 3. Alur Login
1. User submit form login → `authApi.login()` 
2. Simpan token di `localStorage.setItem("sttb_token", response.token)`
3. Semua request admin otomatis menyertakan `Authorization: Bearer {token}` via `getAuthHeaders()`

### 4. Langkah Implementasi Selanjutnya
1. **Tambahkan halaman login** di `FE/src/app/admin/login/page.tsx`
2. **Ganti data hardcoded** di setiap halaman dengan hooks dari `@/lib/hooks`
3. **Buat endpoint BE** yang belum ada (lihat Bagian 3)
4. **Tambahkan middleware auth** di Next.js untuk proteksi route `/admin/*`
