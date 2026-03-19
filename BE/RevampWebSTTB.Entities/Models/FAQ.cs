using System.ComponentModel.DataAnnotations;

namespace RevampWebSTTB.Entities.Models
{
    public class FAQ
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Question { get; set; } = string.Empty;

        [Required]
        public string Answer { get; set; } = string.Empty;

        public int SortOrder { get; set; } = 0;
    }
}
