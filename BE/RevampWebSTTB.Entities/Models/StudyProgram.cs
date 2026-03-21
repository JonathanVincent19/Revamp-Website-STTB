using System.ComponentModel.DataAnnotations;

namespace RevampWebSTTB.Entities.Models
{
    public class StudyProgram
    {
        [Key]
        public int Id { get; set; }

        [Required, MaxLength(100)]
        public string Name { get; set; } = string.Empty;

        [Required, MaxLength(50)]
        public string Level { get; set; } = string.Empty;

        [Required, MaxLength(50)]
        public string Degree { get; set; } = string.Empty;

        public int TotalCredits { get; set; }

        [Required, MaxLength(100)]
        public string StudyDuration { get; set; } = string.Empty;

        [Required, MaxLength(100)]
        public string LearningSystem { get; set; } = string.Empty;
    }
}

