using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.CourseCategories;
using RevampWebSTTB.Contracts.Responses.CourseCategories;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.CourseCategories
{
    public class GetCourseCategoryDetailQueryHandler : IRequestHandler<GetCourseCategoryDetailQuery, GetCourseCategoryDetailResponse>
    {
        private readonly STTBContext _context;

        public GetCourseCategoryDetailQueryHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<GetCourseCategoryDetailResponse> Handle(GetCourseCategoryDetailQuery request, CancellationToken cancellationToken)
        {
            var category = await _context.CourseCategories
                .AsNoTracking()
                .FirstOrDefaultAsync(c => c.Id == request.Id, cancellationToken);

            if (category == null)
            {
                return new GetCourseCategoryDetailResponse
                {
                    Success = false,
                    Message = "Course Category not found."
                };
            }

            return new GetCourseCategoryDetailResponse
            {
                Success = true,
                Data = new CourseCategoryDto
                {
                    Id = category.Id,
                    Name = category.Name,
                    TotalSKS = category.TotalSKS
                }
            };
        }
    }
}
