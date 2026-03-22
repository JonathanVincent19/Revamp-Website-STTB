namespace RevampWebSTTB.Contracts.Responses.CourseCategories
{
    public record UpdateCourseCategoryResponse
    {
        public bool Success { get; init; }
        public string Message { get; init; } = string.Empty;
        public CourseCategoryDto? Data { get; init; }
    }
}
