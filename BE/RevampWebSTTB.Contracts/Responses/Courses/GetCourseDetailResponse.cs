namespace RevampWebSTTB.Contracts.Responses.Courses
{
    public record GetCourseDetailResponse
    {
        public bool Success { get; init; }
        public string Message { get; init; } = string.Empty;
        public CourseDto? Data { get; init; }
    }
}
