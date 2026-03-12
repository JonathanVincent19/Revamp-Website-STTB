using System;
using System.Collections.Generic;
using System.Text;
using RevampWebSTTB.Entities.Models;
using static System.Net.Mime.MediaTypeNames;

namespace RevampWebSTTB.Entities.Data
{
    public static class DbSeeder
    {
        public static void Initialize(STTBContext context)
        {
            // ==========================================
            // 0. SEED ADMIN USER
            // ==========================================
            if (!context.Users.Any(u => u.Email == "admin@sttb.ac.id"))
            {
                var adminUser = new User
                {
                    Name = "Admin STTB",
                    Email = "admin@sttb.ac.id",
                    Password = BCrypt.Net.BCrypt.HashPassword("admin123"),
                    IsAdmin = true
                };
                context.Users.Add(adminUser);
                context.SaveChanges();
            }

            // Check if database is already seeded
            if (context.News.Any())
            {
                return; // DB has been seeded
            }

            // ==========================================
            // 1. SEED NEWS CATEGORIES
            // ==========================================
            var categories = new[]
            {
            new NewsCategory { Name = "Kegiatan", Slug = "kegiatan" },
            new NewsCategory { Name = "Prestasi", Slug = "prestasi" },
            new NewsCategory { Name = "Pengumuman", Slug = "pengumuman" }
        };
            context.NewsCategories.AddRange(categories);
            context.SaveChanges(); // Save to get IDs

            // ==========================================
            // 2. SEED NEWS
            // ==========================================
            var newsItems = new[]
            {
            new News
            {
                CategoryId = categories[0].Id, // Kegiatan
                Title = "Pembukaan Pendaftaran Mahasiswa Baru",
                Slug = "pembukaan-pendaftaran-mahasiswa-baru",
                Content = "<p>Kami dengan senang hati mengumumkan pembukaan pendaftaran mahasiswa baru untuk tahun akademik 2024/2025. Segera daftarkan diri Anda!</p>",
                FeaturedImage = "https://picsum.photos/seed/news1/800/400", // Placeholder Image
                Author = "Admin",
                Status = "published",
                PublishedAt = DateTime.UtcNow.AddDays(-5),
                ViewCount = 150
            },
            new News
            {
                CategoryId = categories[1].Id, // Prestasi
                Title = "Mahasiswa STTB Juara 1 Hackathon Nasional",
                Slug = "mahasiswa-sttb-juara-1-hackathon-nasional",
                Content = "<p>Telah berhasil meraih juara 1 dalam kompetisi bergengsi tingkat nasional.</p>",
                FeaturedImage = "https://picsum.photos/seed/news2/800/400",
                Author = "Humas",
                Status = "published",
                PublishedAt = DateTime.UtcNow.AddDays(-2),
                ViewCount = 320
            }
        };
            context.News.AddRange(newsItems);

            // ==========================================
            // 3. SEED ANNOUNCEMENTS
            // ==========================================
            var announcements = new[]
            {
            new Announcement
            {
                Title = "Libur Hari Raya Idul Fitri",
                Description = "Kampus libur selama 7 hari mulai tanggal 20 April sampai 27 April.",
                IsUrgent = true,
                AttachmentPath = "/uploads/docs/libur.pdf",
                CreatedAt = DateTime.UtcNow.AddDays(-10)
            },
            new Announcement
            {
                Title = "Jadwal Ujian Akhir Semester",
                Description = "Ujian akhir semester ganjil akan dilaksanakan mulai tanggal 15 Januari.",
                IsUrgent = false,
                AttachmentPath = null,
                CreatedAt = DateTime.UtcNow
            }
        };
            context.Announcements.AddRange(announcements);

            // ==========================================
            // 4. SEED EVENTS
            // ==========================================
            var events = new[]
            {
            new Event
            {
                Title = "Seminar Nasional Teknologi",
                Description = "Membahas perkembangan teknologi AI di Indonesia.",
                Location = "Aula Utama Kampus",
                EventDate = DateTime.UtcNow.AddDays(30),
                StartTime = new TimeSpan(9, 0, 0), // 09:00
                EndTime = new TimeSpan(12, 0, 0),  // 12:00
                Image = "https://picsum.photos/seed/event1/800/400"
            },
            new Event
            {
                Title = "Workshop Web Development",
                Description = "Pelatihan pembuatan website menggunakan ASP.NET Core.",
                Location = "Lab Komputer 1",
                EventDate = DateTime.UtcNow.AddDays(7),
                StartTime = new TimeSpan(13, 0, 0),
                Image = "https://picsum.photos/seed/event2/800/400"
            }
        };
            context.Events.AddRange(events);

            // ==========================================
            // 5. SEED LECTURERS
            // ==========================================
            var lecturers = new[]
            {
            new Lecturer
            {
                Name = "Dr. Ahmad Hidayat",
                Photo = "https://picsum.photos/seed/lec1/400/400",
                Nidn = "0023018701",
                Position = "Ketua Prodi Teknik Informatika",
                EducationLevel = "S3",
                Expertise = "Artificial Intelligence",
                Email = "ahmad@sttb.ac.id",
                SortOrder = 1
            },
            new Lecturer
            {
                Name = "Ir. Siti Rahayu, M.T.",
                Photo = "https://picsum.photos/seed/lec2/400/400",
                Nidn = "0012058602",
                Position = "Dosen Senior",
                EducationLevel = "S2",
                Expertise = "Database Systems",
                Email = "siti@sttb.ac.id",
                SortOrder = 2
            }
        };
            context.Lecturers.AddRange(lecturers);

            // ==========================================
            // 6. SEED STAFF
            // ==========================================
            var staffList = new[]
            {
            new Staff
            {
                Name = "Budi Santoso",
                Photo = "https://picsum.photos/seed/staff1/400/400",
                Position = "Kepala Bagian Administrasi",
                Email = "budi.admin@sttb.ac.id",
                SortOrder = 1
            },
             new Staff
            {
                Name = "Dewi Lestari",
                Photo = "https://picsum.photos/seed/staff2/400/400",
                Position = "Staff Keuangan",
                Email = "dewi.keu@sttb.ac.id",
                SortOrder = 2
            }
        };
            context.Staff.AddRange(staffList);

            // ==========================================
            // 7. SEED ACHIEVEMENTS
            // ==========================================
            var achievements = new[]
            {
            new Achievement
            {
                StudentNames = "Rudi, Ani",
                AchievementTitle = "Juara 1 Hackathon",
                CompetitionName = "Hackathon Indonesia 2023",
                Level = "Nasional",
                AchievementRank = "Juara 1",
                DateAchieved = DateTime.UtcNow.AddMonths(-2),
                CertificateImage = "https://picsum.photos/seed/ach1/600/400",
                Description = "Membuat aplikasi berbasis AI untuk pertanian."
            },
            new Achievement
            {
                StudentNames = "Joko",
                AchievementTitle = "Best Paper Award",
                CompetitionName = "International Conference on IT",
                Level = "Internasional",
                AchievementRank = "Best Paper",
                DateAchieved = DateTime.UtcNow.AddMonths(-6),
                CertificateImage = "https://picsum.photos/seed/ach2/600/400",
                Description = "Publikasi ilmiah di bidang cybersecurity."
            }
        };
            context.Achievements.AddRange(achievements);

            // ==========================================
            // 8. SEED GALLERY ALBUMS & MEDIA
            // ==========================================
            var albums = new[]
            {
            new GalleryAlbum
            {
                Title = "Wisuda 2023",
                Description = "Suasana acara wisuda periode pertama 2023.",
                CoverImage = "https://picsum.photos/seed/album1/800/400",
                EventDate = DateTime.UtcNow.AddMonths(-3)
            },
            new GalleryAlbum
            {
                Title = "Seminar Teknologi",
                Description = "Dokumentasi seminar nasional.",
                CoverImage = "https://picsum.photos/seed/album2/800/400",
                EventDate = DateTime.UtcNow.AddDays(-5)
            }
        };
            context.GalleryAlbums.AddRange(albums);
            context.SaveChanges(); // Save to get Album IDs

            // Seed Media inside albums
            var mediaItems = new[]
            {
            // Media for Album 1 (Wisuda)
            new GalleryMedia
            {
                AlbumId = albums[0].Id,
                FilePath = "https://picsum.photos/seed/med1/800/600",
                Caption = "Suasana acara",
                MediaType = "image"
            },
            new GalleryMedia
            {
                AlbumId = albums[0].Id,
                FilePath = "https://picsum.photos/seed/med2/800/600",
                Caption = "Penyerahan ijazah",
                MediaType = "image"
            },
            // Media for Album 2 (Seminar)
             new GalleryMedia
            {
                AlbumId = albums[1].Id,
                FilePath = "https://picsum.photos/seed/med3/800/600",
                Caption = "Pembicara tamu",
                MediaType = "image"
            }
        };
            context.GalleryMedia.AddRange(mediaItems);

            // ==========================================
            // 9. SEED TESTIMONIALS
            // ==========================================
            var testimonials = new[]
            {
            new Testimonial
            {
                AlumniName = "Andi Wijaya",
                GraduationYear = 2018,
                CurrentJob = "Software Engineer at Google",
                Photo = "https://picsum.photos/seed/alumni1/400/400",
                TestimonialText = "STTB memberikan dasar yang kuat dalam pemrograman. Dosen sangat supportif dan kurikulum selalu update.",
                IsFeatured = true
            },
            new Testimonial
            {
                AlumniName = "Sarah Putri",
                GraduationYear = 2020,
                CurrentJob = "Data Analyst at Traveloka",
                Photo = "https://picsum.photos/seed/alumni2/400/400",
                TestimonialText = "Pengalaman belajar di STTB sangat menyenangkan. Banyak peluang magang yang ditawarkan.",
                IsFeatured = true
            }
        };
            context.Testimonials.AddRange(testimonials);

            // ==========================================
            // SAVE ALL CHANGES
            // ==========================================
            context.SaveChanges();
        }
    }
}
