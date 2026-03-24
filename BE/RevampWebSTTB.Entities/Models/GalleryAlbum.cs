using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace RevampWebSTTB.Entities.Models
{
    public class GalleryAlbum
    {
        [Key]
        public int Id { get; set; } 
        [Required]
        [MaxLength(150)]
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string? Category { get; set; }
        public string? Type { get; set; }
        public string? CoverImage { get; set; } 
        public string? Url { get; set; }
        public DateTime? EventDate { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;

        public virtual ICollection<GalleryMedia> Media { get; set; } = new List<GalleryMedia>();
    }
}
