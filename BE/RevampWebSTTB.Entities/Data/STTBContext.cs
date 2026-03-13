using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Entities.Models;

namespace RevampWebSTTB.Entities.Data
{
    public class STTBContext : DbContext
    {
        public STTBContext(DbContextOptions<STTBContext> options)
        : base(options)
        {
        }

        public DbSet<NewsCategory> NewsCategories { get; set; } = null!;
        public DbSet<News> News { get; set; } = null!;
        public DbSet<Announcement> Announcements { get; set; } = null!;
        public DbSet<Event> Events { get; set; } = null!;
        public DbSet<Lecturer> Lecturers { get; set; } = null!;
        public DbSet<Staff> Staff { get; set; } = null!;
        public DbSet<Achievement> Achievements { get; set; } = null!;
        public DbSet<GalleryAlbum> GalleryAlbums { get; set; } = null!;
        public DbSet<GalleryMedia> GalleryMedia { get; set; } = null!;
        public DbSet<Testimonial> Testimonials { get; set; } = null!;
        public DbSet<User> Users { get; set; } = null!;
        public DbSet<ContactMessage> ContactMessages { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<NewsCategory>()
                .HasIndex(n => n.Slug)
                .IsUnique();

            modelBuilder.Entity<News>()
                .HasIndex(n => n.Slug)
                .IsUnique();

            modelBuilder.Entity<News>()
                .HasOne(n => n.Category)
                .WithMany(c => c.News)
                .HasForeignKey(n => n.CategoryId)
                .OnDelete(DeleteBehavior.SetNull);

            modelBuilder.Entity<GalleryMedia>()
                .HasOne(m => m.Album)
                .WithMany(a => a.Media)
                .HasForeignKey(m => m.AlbumId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<News>()
                .Property(n => n.Status)
                .HasDefaultValue("draft");

            modelBuilder.Entity<Achievement>()
                .Property(a => a.Level)
                .HasDefaultValue("Nasional");

            modelBuilder.Entity<GalleryMedia>()
                .Property(m => m.MediaType)
                .HasDefaultValue("image");

            modelBuilder.Entity<ContactMessage>()
                .Property(c => c.IsRead)
                .HasDefaultValue(false);

            modelBuilder.Entity<ContactMessage>()
                .Property(c => c.CreatedAt)
                .HasDefaultValueSql("CURRENT_TIMESTAMP");
        }
    }
}
