using MediatR;
using RevampWebSTTB.Contracts.Responses.CourseCategories;

namespace RevampWebSTTB.Contracts.Requests.CourseCategories
{
    public record GetCourseCategoryDetailQuery : IRequest<GetCourseCategoryDetailResponse>
    {
        public int Id { get; init; }
    }
}
