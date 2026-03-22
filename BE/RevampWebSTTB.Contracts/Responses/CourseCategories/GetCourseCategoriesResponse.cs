using System.Collections.Generic;

namespace RevampWebSTTB.Contracts.Responses.CourseCategories
{
    public record GetCourseCategoriesResponse
    {
        public bool Success { get; init; }
        public List<CourseCategoryDto> Data { get; init; } = new();
    }
}
