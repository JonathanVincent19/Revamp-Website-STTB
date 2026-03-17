using System;
using System.Collections.Generic;

namespace RevampWebSTTB.Contracts.Responses.Testimonials
{
    public class GetAdminTestimonialsResponse
    {
        public bool Success { get; set; } = true;
        public string Message { get; set; } = "Testimonials fetched successfully.";
        public IEnumerable<AdminTestimonialDto> Data { get; set; } = new List<AdminTestimonialDto>();
        public int TotalCount { get; set; }
        public int Page { get; set; }
        public int PageSize { get; set; }
    }

    public class AdminTestimonialDto
    {
        public int Id { get; set; }
        public string AlumniName { get; set; } = string.Empty;
        public int? GraduationYear { get; set; }
        public string? CurrentJob { get; set; }
        public string? Photo { get; set; }
        public string TestimonialText { get; set; } = string.Empty;
        public bool IsFeatured { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
