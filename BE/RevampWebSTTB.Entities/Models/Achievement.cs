using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace RevampWebSTTB.Entities.Models
{
    public class Achievement
    {
        [Key]
        public int Id { get; set; }
        [Required, MaxLength(255)]
        public string StudentNames { get; set; } = string.Empty;
        [Required, MaxLength(255)]
        public string AchievementTitle { get; set; } = string.Empty;
        public string? CompetitionName { get; set; }
        public string Level { get; set; } = "Nasional"; // Regional, Nasional, Internasional
        public string? AchievementRank { get; set; }
        public DateTime? DateAchieved { get; set; }
        public string? CertificateImage { get; set; }
        public string? Description { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
