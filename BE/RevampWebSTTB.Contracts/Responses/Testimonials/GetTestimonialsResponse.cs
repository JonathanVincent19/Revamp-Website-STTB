namespace RevampWebSTTB.Contracts.Responses.Testimonials
{
    public record GetTestimonialsResponse
    {
        public bool Success { get; init; }
        public List<TestimonialDto> Data { get; init; } = new();
    }

    public record TestimonialDto
    {
        public int Id { get; init; }
        public string AlumniName { get; init; } = string.Empty;
        public int GraduationYear { get; init; }
        public string? CurrentJob { get; init; }
        public string? Photo { get; init; }
        public string TestimonialText { get; init; } = string.Empty;
    }
}
