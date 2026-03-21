using System.ComponentModel.DataAnnotations;

namespace RevampWebSTTB.Entities.Models
{
    public class TuitionFee
    {
        [Key]
        public int Id { get; set; }

        [Required, MaxLength(100)]
        public string Program { get; set; } = string.Empty;

        [Required, MaxLength(100)]
        public string Category { get; set; } = string.Empty;

        [Required, MaxLength(255)]
        public string ItemName { get; set; } = string.Empty;

        public decimal Amount { get; set; }

        public int SortOrder { get; set; }
    }
}
