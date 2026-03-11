using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace RevampWebSTTB.Entities.Models
{
    public class GalleryMedia
    {
        [Key]
        public int Id { get; set; }
        public int? AlbumId { get; set; }
        [Required]
        [MaxLength(255)]
        public string FilePath { get; set; } = string.Empty;
        [MaxLength(255)]
        public string? Caption { get; set; }
        public string MediaType { get; set; } = "image";
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        [ForeignKey("AlbumId")]
        public virtual GalleryAlbum? Album { get; set; }
    }
}
