namespace RevampWebSTTB.Contracts.Responses.CourseCategories
{
    public record CourseCategoryDto
    {
        public int Id { get; init; }
        public string Name { get; init; } = string.Empty;
        public int TotalSKS { get; init; }
        public int? StudyProgramId { get; init; }
    }
}
