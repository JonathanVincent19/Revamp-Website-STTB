using MediatR;
using RevampWebSTTB.Contracts.Responses.Courses;

namespace RevampWebSTTB.Contracts.Requests.Courses
{
    public record GetCoursesQuery : IRequest<GetCoursesResponse>
    {
    }
}
