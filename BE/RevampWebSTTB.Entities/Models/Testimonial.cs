using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace RevampWebSTTB.Entities.Models
{
    public class Testimonial
    {
        [Key]
        public int Id { get; set; }
        [Required, StringLength(150)]
        public string AlumniName { get; set; } = null!;
        public int? GraduationYear { get; set; }
        public string? CurrentJob { get; set; }
        public string? Photo { get; set; }
        [Required]
        public string TestimonialText { get; set; } = null!;
        public bool IsFeatured { get; set; } = false;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
