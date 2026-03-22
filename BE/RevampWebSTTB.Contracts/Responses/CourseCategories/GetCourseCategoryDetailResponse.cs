namespace RevampWebSTTB.Contracts.Responses.CourseCategories
{
    public record GetCourseCategoryDetailResponse
    {
        public bool Success { get; init; }
        public string Message { get; init; } = string.Empty;
        public CourseCategoryDto? Data { get; init; }
    }
}
