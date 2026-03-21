using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace RevampWebSTTB.Entities.Models
{
    public class FacilityPhoto
    {
        [Key]
        public int Id { get; set; }

        public int FacilityId { get; set; }

        [Required, MaxLength(500)]
        public string ImageUrl { get; set; } = string.Empty;

        public int SortOrder { get; set; } = 0;

        [JsonIgnore]
        public Facility Facility { get; set; } = null!;
    }
}
