using MediatR;
using RevampWebSTTB.Contracts.Responses.CourseCategories;

namespace RevampWebSTTB.Contracts.Requests.CourseCategories
{
    public record GetCourseCategoriesQuery : IRequest<GetCourseCategoriesResponse>
    {
        public int? StudyProgramId { get; init; }
    }
}
