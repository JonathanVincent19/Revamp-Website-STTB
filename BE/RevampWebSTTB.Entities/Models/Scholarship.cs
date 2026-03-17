using System.ComponentModel.DataAnnotations;

namespace RevampWebSTTB.Entities.Models
{
    public class Scholarship
    {
        [Key]
        public int Id { get; set; }

        [Required, MaxLength(255)]
        public string Name { get; set; } = string.Empty;

        [Required, MaxLength(100)]
        public string Type { get; set; } = string.Empty; // internal, external

        public int Quota { get; set; }

        public string Status { get; set; } = "open"; // open, closed
    }
}
