using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace RevampWebSTTB.Entities.Models
{
    public class CourseCategory
    {
        [Key]
        public int Id { get; set; }

        [Required, MaxLength(100)]
        public string Name { get; set; } = string.Empty;

        public int TotalSKS { get; set; }

        public ICollection<Course> Courses { get; set; } = new List<Course>();
    }
}
