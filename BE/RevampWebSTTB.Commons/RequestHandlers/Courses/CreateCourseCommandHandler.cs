using MediatR;
using RevampWebSTTB.Contracts.Requests.Courses;
using RevampWebSTTB.Contracts.Responses.Courses;
using RevampWebSTTB.Entities.Data;
using RevampWebSTTB.Entities.Models;

namespace RevampWebSTTB.Commons.RequestHandlers.Courses
{
    public class CreateCourseCommandHandler : IRequestHandler<CreateCourseCommand, CreateCourseResponse>
    {
        private readonly STTBContext _context;

        public CreateCourseCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<CreateCourseResponse> Handle(CreateCourseCommand request, CancellationToken cancellationToken)
        {
            var course = new Course
            {
                Name = request.Name,
                Credits = request.Credits,
                CategoryId = request.CategoryId
            };

            _context.Courses.Add(course);
            await _context.SaveChangesAsync(cancellationToken);

            return new CreateCourseResponse
            {
                Success = true,
                Message = "Course created successfully.",
                Data = new CourseDto
                {
                    Id = course.Id,
                    Name = course.Name,
                    Credits = course.Credits,
                    CategoryId = course.CategoryId
                }
            };
        }
    }
}
