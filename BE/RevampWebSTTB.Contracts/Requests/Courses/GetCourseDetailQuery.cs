using MediatR;
using RevampWebSTTB.Contracts.Responses.Courses;

namespace RevampWebSTTB.Contracts.Requests.Courses
{
    public record GetCourseDetailQuery : IRequest<GetCourseDetailResponse>
    {
        public int Id { get; init; }
    }
}
