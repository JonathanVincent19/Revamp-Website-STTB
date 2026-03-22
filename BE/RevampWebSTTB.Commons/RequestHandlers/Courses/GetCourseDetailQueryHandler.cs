using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Courses;
using RevampWebSTTB.Contracts.Responses.Courses;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Courses
{
    public class GetCourseDetailQueryHandler : IRequestHandler<GetCourseDetailQuery, GetCourseDetailResponse>
    {
        private readonly STTBContext _context;

        public GetCourseDetailQueryHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<GetCourseDetailResponse> Handle(GetCourseDetailQuery request, CancellationToken cancellationToken)
        {
            var course = await _context.Courses
                .AsNoTracking()
                .FirstOrDefaultAsync(c => c.Id == request.Id, cancellationToken);

            if (course == null)
            {
                return new GetCourseDetailResponse
                {
                    Success = false,
                    Message = "Course not found."
                };
            }

            return new GetCourseDetailResponse
            {
                Success = true,
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
