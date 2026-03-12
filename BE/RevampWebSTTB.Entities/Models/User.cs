using System;
using System.ComponentModel.DataAnnotations;

namespace RevampWebSTTB.Entities.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        
        [Required, MaxLength(150)]
        public string Name { get; set; } = string.Empty;
        
        [Required, MaxLength(150)]
        public string Email { get; set; } = string.Empty;
        
        [Required, MaxLength(255)]
        public string Password { get; set; } = string.Empty;
        
        public bool IsAdmin { get; set; } = false;
        
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
