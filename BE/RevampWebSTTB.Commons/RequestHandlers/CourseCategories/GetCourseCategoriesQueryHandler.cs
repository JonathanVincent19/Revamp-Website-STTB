using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.CourseCategories;
using RevampWebSTTB.Contracts.Responses.CourseCategories;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.CourseCategories
{
    public class GetCourseCategoriesQueryHandler : IRequestHandler<GetCourseCategoriesQuery, GetCourseCategoriesResponse>
    {
        private readonly STTBContext _context;

        public GetCourseCategoriesQueryHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<GetCourseCategoriesResponse> Handle(GetCourseCategoriesQuery request, CancellationToken cancellationToken)
        {
            var query = _context.CourseCategories.AsNoTracking();

            if (request.StudyProgramId.HasValue)
            {
                query = query.Where(c => c.StudyProgramId == request.StudyProgramId.Value);
            }

            var categories = await query
                .Select(c => new CourseCategoryDto
                {
                    Id = c.Id,
                    Name = c.Name,
                    TotalSKS = c.TotalSKS,
                    StudyProgramId = c.StudyProgramId
                })
                .ToListAsync(cancellationToken);

            return new GetCourseCategoriesResponse
            {
                Success = true,
                Data = categories
            };
        }
    }
}
