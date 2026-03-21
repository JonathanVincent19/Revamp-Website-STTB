using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Courses;
using RevampWebSTTB.Contracts.Responses;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Courses
{
    public class DeleteCourseCommandHandler : IRequestHandler<DeleteCourseCommand, StandardResponse>
    {
        private readonly STTBContext _context;

        public DeleteCourseCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<StandardResponse> Handle(DeleteCourseCommand request, CancellationToken cancellationToken)
        {
            var course = await _context.Courses.FirstOrDefaultAsync(c => c.Id == request.Id, cancellationToken);

            if (course == null)
            {
                return new StandardResponse
                {
                    Success = false,
                    Message = "Course not found."
                };
            }

            _context.Courses.Remove(course);
            await _context.SaveChangesAsync(cancellationToken);

            return new StandardResponse
            {
                Success = true,
                Message = "Course deleted successfully."
            };
        }
    }
}
