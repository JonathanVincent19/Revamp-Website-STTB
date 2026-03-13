namespace RevampWebSTTB.Contracts.Responses.HR
{
    public record GetLecturersResponse
    {
        public bool Success { get; init; }
        public List<LecturerDto> Data { get; init; } = new();
    }

    public record LecturerDto
    {
        public int Id { get; init; }
        public string Name { get; init; } = string.Empty;
        public string? Photo { get; init; }
        public string? Position { get; init; }
        public string? EducationLevel { get; init; }
        public string? Expertise { get; init; }
        public string? Email { get; init; }
    }
}
