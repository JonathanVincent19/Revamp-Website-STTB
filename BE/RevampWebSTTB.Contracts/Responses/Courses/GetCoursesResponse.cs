using System.Collections.Generic;

namespace RevampWebSTTB.Contracts.Responses.Courses
{
    public record GetCoursesResponse
    {
        public bool Success { get; init; }
        public List<CourseDto> Data { get; init; } = new();
    }
}
