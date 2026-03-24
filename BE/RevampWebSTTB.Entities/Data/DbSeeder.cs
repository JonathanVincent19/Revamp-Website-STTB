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

            // ==========================================
            // 0.1 SEED FACILITIES (Independent)
            // ==========================================
            if (!context.Facilities.Any())
            {
                var facilities = new[]
                {
                    new Facility
                    {
                        Name = "Laboratorium Komputer",
                        Slug = "laboratorium-komputer",
                        ShortDescription = "Laboratorium komputer modern dengan spesifikasi tinggi untuk mendukung praktikum mahasiswa.",
                        LongDescription = "Laboratorium Komputer STTB dilengkapi dengan unit komputer terbaru, koneksi internet cepat, dan perangkat lunak pendukung akademik yang lengkap. Digunakan untuk praktikum pemrograman, basis data, jaringan komputer, dan desain grafis.",
                        IconName = "Monitor",
                        FeaturedImage = "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1000",
                        CreatedAt = DateTime.UtcNow
                    },
                    new Facility
                    {
                        Name = "Perpustakaan Digital",
                        Slug = "perpustakaan-digital",
                        ShortDescription = "Akses ribuan buku dan jurnal ilmiah baik fisik maupun digital.",
                        LongDescription = "Perpustakaan STTB menyediakan ribuan koleksi buku teks, jurnal ilmiah, dan akses ke e-library. Fasilitas baca yang nyaman dan sistem pencarian digital memudahkan mahasiswa dalam riset dan tugas akhir.",
                        IconName = "Library",
                        FeaturedImage = "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1000",
                        CreatedAt = DateTime.UtcNow
                    },
                    new Facility
                    {
                        Name = "Aula Serbaguna",
                        Slug = "aula-serbaguna",
                        ShortDescription = "Ruangan luas untuk berbagai acara kampus dan kegiatan mahasiswa.",
                        LongDescription = "Aula STTB dapat menampung hingga 500 orang, dilengkapi dengan sound system dan proyektor. Digunakan untuk seminar, workshop, wisuda, dan kegiatan organisasi mahasiswa.",
                        IconName = "Users",
                        FeaturedImage = "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1000",
                        CreatedAt = DateTime.UtcNow
                    }
                };
                context.Facilities.AddRange(facilities);
                context.SaveChanges();

                var computerLabPhotos = new[]
                {
                    new FacilityPhoto { FacilityId = facilities[0].Id, ImageUrl = "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1000", SortOrder = 1 },
                    new FacilityPhoto { FacilityId = facilities[0].Id, ImageUrl = "https://images.unsplash.com/photo-1525547718511-b056023d7ff2?q=80&w=1000", SortOrder = 2 }
                };
                context.FacilityPhotos.AddRange(computerLabPhotos);
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
                    Title = "City TransForMission #1: \"Fokus Strategis Misi Urban\"",
                    Category = "LEAD",
                    Type = "Video",
                    EventDate = DateTime.UtcNow.AddMonths(-6),
                    CoverImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
                    Url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                    Description = "Seminar Misi Urban STTB membahas fokus strategis."
                },
                new GalleryAlbum
                {
                    Title = "Integrasi Iman dan Ilmu Menuju Pendekatan yang Lebih Holistik",
                    Category = "Press Release",
                    Type = "Artikel",
                    EventDate = DateTime.UtcNow.AddMonths(-1),
                    CoverImage = "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80&w=1200&auto=format&fit=crop",
                    Url = "",
                    Description = "<p>Di era modern ini, perkembangan teknologi dan ilmu pengetahuan sering kali dianggap berjalan terpisah dari nilai-nilai spiritualitas. Namun, Sekolah Tinggi Teologi Bandung (STTB) mengambil langkah progresif dengan mengadakan seminar nasional yang mengangkat tema krusial ini.</p><br/><h3>Definisi Integrasi Iman & Ilmu</h3><p>Pendekatan holistik dalam pendidikan teologi bukan sekadar menggabungkan dua disiplin, melainkan melihat ilmu pengetahuan sebagai alat untuk lebih memahami kebesaran Sang Pencipta.</p><br/><blockquote>\"Pendidikan yang sejati tidak hanya mencerdaskan akal, tetapi juga mencerahkan roh dan meneguhkan iman di tengah tantangan zaman.\" – Rektor STTB</blockquote><br/><h3>Kesimpulan</h3><p>Melalui kegiatan ini, diharapkan mahasiswa dan dosen dapat terus bersinergi mengaplikasikan nilai-nilai kristiani dalam setiap inovasi dan karya akademis mereka, membawa dampak nyata bagi gereja dan masyarakat luas.</p>"
                },
                new GalleryAlbum
                {
                    Title = "Persembahan Pujian STTB untuk Pelayanan Sekolah Minggu",
                    Category = "STT BANDUNG",
                    Type = "Video",
                    EventDate = DateTime.UtcNow.AddMonths(-3),
                    CoverImage = "https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=800&auto=format&fit=crop",
                    Url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                    Description = "Pelayanan puji-pujian yang diadakan khusus untuk melayani ibadah sekolah minggu oleh tim pujian STT Bandung."
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
            // 10. SEED TUITION FEES
            // ==========================================
            if (!context.TuitionFees.Any())
            {
                var tuitionFees = new[]
                {
                    // S1 Data
                    new TuitionFee { Program = "Program Sarjana Teologi (S.Th.)", Category = "Administrasi", ItemName = "Pendaftaran & Tes masuk", Amount = 500000, SortOrder = 1 },
                    new TuitionFee { Program = "Program Sarjana Teologi (S.Th.)", Category = "Administrasi", ItemName = "Administrasi Per Semester", Amount = 500000, SortOrder = 2 },
                    new TuitionFee { Program = "Program Sarjana Teologi (S.Th.)", Category = "Kuliah/Bimbingan Khusus", ItemName = "Pendidikan (Biaya Kuliah) Per Semester", Amount = 9000000, SortOrder = 3 },
                    new TuitionFee { Program = "Program Sarjana Teologi (S.Th.)", Category = "Kuliah/Bimbingan Khusus", ItemName = "Bimbingan Tugas Akhir", Amount = 1500000, SortOrder = 4 },
                    new TuitionFee { Program = "Program Sarjana Teologi (S.Th.)", Category = "Lain-lain", ItemName = "Wisuda", Amount = 2000000, SortOrder = 5 },
                    new TuitionFee { Program = "Program Sarjana Teologi (S.Th.)", Category = "Lain-lain", ItemName = "Cuti Akademik (bila mengambil cuti) Per Semester", Amount = 500000, SortOrder = 6 },

                    new TuitionFee { Program = "Program Sarjana Pendidikan (S.Pd.)", Category = "Administrasi", ItemName = "Pendaftaran & Tes masuk", Amount = 500000, SortOrder = 1 },
                    new TuitionFee { Program = "Program Sarjana Pendidikan (S.Pd.)", Category = "Administrasi", ItemName = "Administrasi Per Semester", Amount = 500000, SortOrder = 2 },
                    new TuitionFee { Program = "Program Sarjana Pendidikan (S.Pd.)", Category = "Kuliah/Bimbingan Khusus", ItemName = "Pendidikan (Biaya Kuliah) Per Semester", Amount = 9000000, SortOrder = 3 },
                    new TuitionFee { Program = "Program Sarjana Pendidikan (S.Pd.)", Category = "Kuliah/Bimbingan Khusus", ItemName = "Bimbingan Tugas Akhir", Amount = 1500000, SortOrder = 4 },
                    new TuitionFee { Program = "Program Sarjana Pendidikan (S.Pd.)", Category = "Lain-lain", ItemName = "Wisuda", Amount = 2000000, SortOrder = 5 },
                    new TuitionFee { Program = "Program Sarjana Pendidikan (S.Pd.)", Category = "Lain-lain", ItemName = "Cuti Akademik (bila mengambil cuti) Per Semester", Amount = 500000, SortOrder = 6 },

                    // S2 Data
                    new TuitionFee { Program = "Program Magister Teologi (M.Th.)", Category = "Administrasi", ItemName = "Pendaftaran & Tes Masuk", Amount = 500000, SortOrder = 1 },
                    new TuitionFee { Program = "Program Magister Teologi (M.Th.)", Category = "Administrasi", ItemName = "Administrasi Per Semester", Amount = 500000, SortOrder = 2 },
                    new TuitionFee { Program = "Program Magister Teologi (M.Th.)", Category = "Kuliah/Bimbingan Khusus", ItemName = "Pendidikan (Kuliah) Per Mata Kuliah", Amount = 1500000, SortOrder = 3 },
                    new TuitionFee { Program = "Program Magister Teologi (M.Th.)", Category = "Kuliah/Bimbingan Khusus", ItemName = "Bimbingan & Ujian Proposal Tesis", Amount = 2000000, SortOrder = 4 },
                    new TuitionFee { Program = "Program Magister Teologi (M.Th.)", Category = "Kuliah/Bimbingan Khusus", ItemName = "Bimbingan & Sidang Tesis", Amount = 5000000, SortOrder = 5 },
                    new TuitionFee { Program = "Program Magister Teologi (M.Th.)", Category = "Lain-lain", ItemName = "Wisuda", Amount = 2500000, SortOrder = 6 },
                    new TuitionFee { Program = "Program Magister Teologi (M.Th.)", Category = "Lain-lain", ItemName = "Cuti Akademik (bila mengambil cuti) Per Semester", Amount = 500000, SortOrder = 7 },

                    new TuitionFee { Program = "Program Magister Pendidikan (M.Pd.)", Category = "Administrasi", ItemName = "Pendaftaran & Tes Masuk", Amount = 500000, SortOrder = 1 },
                    new TuitionFee { Program = "Program Magister Pendidikan (M.Pd.)", Category = "Administrasi", ItemName = "Administrasi Per Semester", Amount = 500000, SortOrder = 2 },
                    new TuitionFee { Program = "Program Magister Pendidikan (M.Pd.)", Category = "Kuliah/Bimbingan Khusus", ItemName = "Pendidikan (Kuliah) Per Mata Kuliah", Amount = 1500000, SortOrder = 3 },
                    new TuitionFee { Program = "Program Magister Pendidikan (M.Pd.)", Category = "Kuliah/Bimbingan Khusus", ItemName = "Bimbingan & Ujian Proposal Tesis", Amount = 2000000, SortOrder = 4 },
                    new TuitionFee { Program = "Program Magister Pendidikan (M.Pd.)", Category = "Kuliah/Bimbingan Khusus", ItemName = "Bimbingan & Sidang Tesis", Amount = 5000000, SortOrder = 5 },
                    new TuitionFee { Program = "Program Magister Pendidikan (M.Pd.)", Category = "Lain-lain", ItemName = "Wisuda", Amount = 2500000, SortOrder = 6 },
                    new TuitionFee { Program = "Program Magister Pendidikan (M.Pd.)", Category = "Lain-lain", ItemName = "Cuti Akademik (bila mengambil cuti) Per Semester", Amount = 500000, SortOrder = 7 },

                    // Matrikulasi Data
                    new TuitionFee { Program = "Program Matrikulasi M.Th.", Category = "Biaya Program Matrikulasi", ItemName = "Pendidikan (Biaya Kuliah) Per Semester", Amount = 7800000, SortOrder = 1 },

                    // S3 Data (M.Min.)
                    new TuitionFee { Program = "Program Magister Ministri (M.Min.)", Category = "Administrasi", ItemName = "Pendaftaran & Tes Masuk", Amount = 500000, SortOrder = 1 },
                    new TuitionFee { Program = "Program Magister Ministri (M.Min.)", Category = "Administrasi", ItemName = "Administrasi Per Semester", Amount = 500000, SortOrder = 2 },
                    new TuitionFee { Program = "Program Magister Ministri (M.Min.)", Category = "Kuliah/Bimbingan Khusus", ItemName = "Pendidikan (Kuliah) Per Mata Kuliah", Amount = 1500000, SortOrder = 3 },
                    new TuitionFee { Program = "Program Magister Ministri (M.Min.)", Category = "Kuliah/Bimbingan Khusus", ItemName = "Tugas Akhir (Proyek)", Amount = 2500000, SortOrder = 4 },
                    new TuitionFee { Program = "Program Magister Ministri (M.Min.)", Category = "Lain-lain", ItemName = "Wisuda", Amount = 2500000, SortOrder = 5 },
                    new TuitionFee { Program = "Program Magister Ministri (M.Min.)", Category = "Lain-lain", ItemName = "Cuti Akademik (bila mengambil cuti) Per Semester", Amount = 500000, SortOrder = 6 }
                };

                context.TuitionFees.AddRange(tuitionFees);
            }

            // ==========================================
            // 11. SEED TUITION NOTES
            // ==========================================
            if (!context.TuitionNotes.Any())
            {
                var tuitionNotes = new[]
                {
                    // S.Th. notes
                    new TuitionNote { Program = "Program Sarjana Teologi (S.Th.)", NoteText = "Pembayaran biaya pendidikan selama 1 semester (poin no. 3 sebesar Rp.9.000.000,-) dapat dilakukan sekaligus per 1 semester atau dengan mencicil selama 6 bulan (Januari-Juni atau Juli-Desember) sebesar Rp.1.500.000,-/bulan", SortOrder = 1 },
                    new TuitionNote { Program = "Program Sarjana Teologi (S.Th.)", NoteText = "Biaya administrasi semester dibayarkan di awal semester (bulan Januari & Juli) selama mahasiswa berstatus mahasiswa aktif (hingga wisuda)", SortOrder = 2 },
                    new TuitionNote { Program = "Program Sarjana Teologi (S.Th.)", NoteText = "STTB memberikan subsidi untuk biaya akomodasi & konsumsi", SortOrder = 3 },
                    new TuitionNote { Program = "Program Sarjana Teologi (S.Th.)", NoteText = "Biaya sewaktu-waktu dapat berubah (dengan pemberitahuan sebelumnya)", SortOrder = 4 },

                    // S.Pd. notes (same as S.Th.)
                    new TuitionNote { Program = "Program Sarjana Pendidikan (S.Pd.)", NoteText = "Pembayaran biaya pendidikan selama 1 semester (poin no. 3 sebesar Rp.9.000.000,-) dapat dilakukan sekaligus per 1 semester atau dengan mencicil selama 6 bulan (Januari-Juni atau Juli-Desember) sebesar Rp.1.500.000,-/bulan", SortOrder = 1 },
                    new TuitionNote { Program = "Program Sarjana Pendidikan (S.Pd.)", NoteText = "Biaya administrasi semester dibayarkan di awal semester (bulan Januari & Juli) selama mahasiswa berstatus mahasiswa aktif (hingga wisuda)", SortOrder = 2 },
                    new TuitionNote { Program = "Program Sarjana Pendidikan (S.Pd.)", NoteText = "STTB memberikan subsidi untuk biaya akomodasi & konsumsi", SortOrder = 3 },
                    new TuitionNote { Program = "Program Sarjana Pendidikan (S.Pd.)", NoteText = "Biaya sewaktu-waktu dapat berubah (dengan pemberitahuan sebelumnya)", SortOrder = 4 },

                    // M.Th. notes
                    new TuitionNote { Program = "Program Magister Teologi (M.Th.)", NoteText = "Biaya pendidikan/kuliah dibayarkan selambat-lambatnya 2 (dua) minggu sebelum perkuliahan dimulai", SortOrder = 1 },
                    new TuitionNote { Program = "Program Magister Teologi (M.Th.)", NoteText = "Biaya administrasi semester dibayarkan di awal semester (bulan Januari & Juli) selama mahasiswa berstatus mahasiswa aktif (hingga wisuda)", SortOrder = 2 },
                    new TuitionNote { Program = "Program Magister Teologi (M.Th.)", NoteText = "Biaya sewaktu-waktu dapat berubah (dengan pemberitahuan sebelumnya)", SortOrder = 3 },
                    new TuitionNote { Program = "Program Magister Teologi (M.Th.)", NoteText = "Bagi mahasiswa baru Prodi M.Th. yang tidak memiliki gelar S.Th, maka ybs wajib mengikuti program matrikulasi terlebih dahulu selama 4 semester (2 tahun) dengan biaya studi matrikulasi terlampir", SortOrder = 4 },

                    // Matrikulasi M.Th. notes
                    new TuitionNote { Program = "Program Matrikulasi M.Th.", NoteText = "Pembayaran biaya pendidikan program matrikulasi selama 1 semester (poin no. 1 sebesar Rp.7.800.000,-) dapat dilakukan sekaligus per 1 semester atau dengan mencicil selama 6 bulan (Januari-Juni atau Juli-Desember) sebesar Rp.1.300.000,-/bulan", SortOrder = 1 },

                    // M.Pd. notes
                    new TuitionNote { Program = "Program Magister Pendidikan (M.Pd.)", NoteText = "Biaya pendidikan/kuliah dibayarkan selambat-lambatnya 2 (dua) minggu sebelum perkuliahan dimulai", SortOrder = 1 },
                    new TuitionNote { Program = "Program Magister Pendidikan (M.Pd.)", NoteText = "Biaya administrasi semester dibayarkan di awal semester (bulan Januari & Juli) selama mahasiswa berstatus mahasiswa aktif (hingga wisuda)", SortOrder = 2 },
                    new TuitionNote { Program = "Program Magister Pendidikan (M.Pd.)", NoteText = "Biaya sewaktu-waktu dapat berubah (dengan pemberitahuan sebelumnya)", SortOrder = 3 },

                    // M.Min. notes
                    new TuitionNote { Program = "Program Magister Ministri (M.Min.)", NoteText = "Biaya pendidikan/kuliah dibayarkan selambat-lambatnya 2 (dua) minggu sebelum perkuliahan dimulai", SortOrder = 1 },
                    new TuitionNote { Program = "Program Magister Ministri (M.Min.)", NoteText = "Biaya administrasi semester dibayarkan di awal semester (bulan Januari & Juli) selama mahasiswa berstatus mahasiswa aktif (hingga wisuda)", SortOrder = 2 },
                    new TuitionNote { Program = "Program Magister Ministri (M.Min.)", NoteText = "Biaya sewaktu-waktu dapat berubah (dengan pemberitahuan sebelumnya)", SortOrder = 3 }
                };

                context.TuitionNotes.AddRange(tuitionNotes);
            }

            context.SaveChanges();
        }
    }
}
