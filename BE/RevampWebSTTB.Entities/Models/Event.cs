using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace RevampWebSTTB.Entities.Models
{
    public class Event
    {
        [Key]
        public int Id { get; set; }
        [Required, MaxLength(255)]
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string? Location { get; set; }
        [Required]
        public DateTime EventDate { get; set; }
        public TimeSpan? StartTime { get; set; }
        public TimeSpan? EndTime { get; set; }
        public string? Image { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
