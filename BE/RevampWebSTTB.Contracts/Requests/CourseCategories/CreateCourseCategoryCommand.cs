using MediatR;
using RevampWebSTTB.Contracts.Responses.CourseCategories;

namespace RevampWebSTTB.Contracts.Requests.CourseCategories
{
    public record CreateCourseCategoryCommand : IRequest<CreateCourseCategoryResponse>
    {
        public string Name { get; init; } = string.Empty;
        public int TotalSKS { get; init; }
    }
}
