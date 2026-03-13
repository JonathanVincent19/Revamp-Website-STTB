using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace RevampWebSTTB.Entities.Models
{
    public class Lecturer
    {
        [Key]
        public int Id { get; set; }
        [Required, MaxLength(150)]
        public string Name { get; set; } = string.Empty;
        public string? Photo { get; set; }
        public string? Nidn { get; set; }
        public string? Position { get; set; }
        public string? EducationLevel { get; set; }
        public string? Expertise { get; set; }
        public string? Email { get; set; }
        public int SortOrder { get; set; } = 0;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
