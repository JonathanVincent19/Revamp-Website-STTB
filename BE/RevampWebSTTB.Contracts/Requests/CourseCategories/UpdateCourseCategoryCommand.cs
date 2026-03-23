using MediatR;
using RevampWebSTTB.Contracts.Responses.CourseCategories;

namespace RevampWebSTTB.Contracts.Requests.CourseCategories
{
    public record UpdateCourseCategoryCommand : IRequest<UpdateCourseCategoryResponse>
    {
        public int Id { get; init; }
        public string Name { get; init; } = string.Empty;
        public int TotalSKS { get; init; }
        public int? StudyProgramId { get; init; }
    }
}
