using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace RevampWebSTTB.Entities.Models
{
    public class News
    {
        [Key]
        public int Id { get; set; }
        public int? CategoryId { get; set; }
        [Required, MaxLength(255)]
        public string Title { get; set; } = string.Empty;
        [Required, MaxLength(255)]
        public string Slug { get; set; } = string.Empty;
        [Required]
        public string Content { get; set; } = string.Empty;
        public string? FeaturedImage { get; set; }
        public string? Author { get; set; }
        public int ViewCount { get; set; } = 0;
        public string Status { get; set; } = "draft"; // draft, published
        public DateTime? PublishedAt { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;

        [ForeignKey("CategoryId")]
        public virtual NewsCategory? Category { get; set; }
    }
}
