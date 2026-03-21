namespace RevampWebSTTB.Contracts.Responses.Courses
{
    public record CourseDto
    {
        public int Id { get; init; }
        public string Name { get; init; } = string.Empty;
        public int Credits { get; init; }
        public int CategoryId { get; init; }
    }
}
