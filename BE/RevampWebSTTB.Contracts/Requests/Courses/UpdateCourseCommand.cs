using MediatR;
using RevampWebSTTB.Contracts.Responses.Courses;

namespace RevampWebSTTB.Contracts.Requests.Courses
{
    public record UpdateCourseCommand : IRequest<UpdateCourseResponse>
    {
        public int Id { get; init; }
        public string Name { get; init; } = string.Empty;
        public int Credits { get; init; }
        public int CategoryId { get; init; }
    }
}
