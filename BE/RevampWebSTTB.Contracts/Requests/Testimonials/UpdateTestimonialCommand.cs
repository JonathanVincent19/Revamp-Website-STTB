using MediatR;
using RevampWebSTTB.Contracts.Responses;

namespace RevampWebSTTB.Contracts.Requests.Testimonials
{
    public record UpdateTestimonialCommand : IRequest<StandardResponse>
    {
        public int Id { get; init; }
        public string AlumniName { get; init; } = string.Empty;
        public int? GraduationYear { get; init; }
        public string? CurrentJob { get; init; }
        public string? Photo { get; init; }
        public string TestimonialText { get; init; } = string.Empty;
        public bool IsFeatured { get; init; } = false;
    }
}
