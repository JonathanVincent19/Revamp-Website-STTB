using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace RevampWebSTTB.Entities.Models
{
    public class Announcement
    {
        [Key]
        public int Id { get; set; }
        [Required, MaxLength(255)]
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string? AttachmentPath { get; set; }
        public bool IsUrgent { get; set; } = false;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
