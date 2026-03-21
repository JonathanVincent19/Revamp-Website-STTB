using MediatR;
using RevampWebSTTB.Contracts.Responses;

namespace RevampWebSTTB.Contracts.Requests.Courses
{
    public record DeleteCourseCommand : IRequest<StandardResponse>
    {
        public int Id { get; init; }
    }
}
