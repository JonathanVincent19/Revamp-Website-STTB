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
        public string Level { get; set; } = string.Empty; // S1, S2, D3
        
        public string? Description { get; set; }
        
        public int Semesters { get; set; }
        
        public string Status { get; set; } = "active";
        
        public string? Curriculum { get; set; } // URL PDF/Doc
    }
}
