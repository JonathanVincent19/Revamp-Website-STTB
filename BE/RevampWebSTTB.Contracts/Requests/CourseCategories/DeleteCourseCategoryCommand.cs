using MediatR;
using RevampWebSTTB.Contracts.Responses;

namespace RevampWebSTTB.Contracts.Requests.CourseCategories
{
    public record DeleteCourseCategoryCommand : IRequest<StandardResponse>
    {
        public int Id { get; init; }
    }
}
