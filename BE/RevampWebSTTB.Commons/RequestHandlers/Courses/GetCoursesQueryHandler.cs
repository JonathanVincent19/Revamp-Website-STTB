using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Courses;
using RevampWebSTTB.Contracts.Responses.Courses;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Courses
{
    public class GetCoursesQueryHandler : IRequestHandler<GetCoursesQuery, GetCoursesResponse>
    {
        private readonly STTBContext _context;

        public GetCoursesQueryHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<GetCoursesResponse> Handle(GetCoursesQuery request, CancellationToken cancellationToken)
        {
            var courses = await _context.Courses
                .AsNoTracking()
                .Select(c => new CourseDto
                {
                    Id = c.Id,
                    Name = c.Name,
                    Credits = c.Credits,
                    CategoryId = c.CategoryId
                })
                .ToListAsync(cancellationToken);

            return new GetCoursesResponse
            {
                Success = true,
                Data = courses
            };
        }
    }
}
