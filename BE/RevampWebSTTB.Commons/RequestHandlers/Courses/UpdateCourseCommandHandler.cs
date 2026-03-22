using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Courses;
using RevampWebSTTB.Contracts.Responses.Courses;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Courses
{
    public class UpdateCourseCommandHandler : IRequestHandler<UpdateCourseCommand, UpdateCourseResponse>
    {
        private readonly STTBContext _context;

        public UpdateCourseCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<UpdateCourseResponse> Handle(UpdateCourseCommand request, CancellationToken cancellationToken)
        {
            var course = await _context.Courses.FirstOrDefaultAsync(c => c.Id == request.Id, cancellationToken);

            if (course == null)
            {
                return new UpdateCourseResponse
                {
                    Success = false,
                    Message = "Course not found."
                };
            }

            course.Name = request.Name;
            course.Credits = request.Credits;
            course.CategoryId = request.CategoryId;

            await _context.SaveChangesAsync(cancellationToken);

            return new UpdateCourseResponse
            {
                Success = true,
                Message = "Course updated successfully.",
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
