using System.ComponentModel.DataAnnotations;

namespace RevampWebSTTB.Entities.Models
{
    public class TuitionNote
    {
        [Key]
        public int Id { get; set; }

        [Required, MaxLength(100)]
        public string Program { get; set; } = string.Empty;

        [Required]
        public string NoteText { get; set; } = string.Empty;

        public int SortOrder { get; set; }
    }
}
