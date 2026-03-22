using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.CourseCategories;
using RevampWebSTTB.Contracts.Responses.CourseCategories;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.CourseCategories
{
    public class UpdateCourseCategoryCommandHandler : IRequestHandler<UpdateCourseCategoryCommand, UpdateCourseCategoryResponse>
    {
        private readonly STTBContext _context;

        public UpdateCourseCategoryCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<UpdateCourseCategoryResponse> Handle(UpdateCourseCategoryCommand request, CancellationToken cancellationToken)
        {
            var category = await _context.CourseCategories.FirstOrDefaultAsync(c => c.Id == request.Id, cancellationToken);

            if (category == null)
            {
                return new UpdateCourseCategoryResponse
                {
                    Success = false,
                    Message = "Course Category not found."
                };
            }

            category.Name = request.Name;
            category.TotalSKS = request.TotalSKS;

            await _context.SaveChangesAsync(cancellationToken);

            return new UpdateCourseCategoryResponse
            {
                Success = true,
                Message = "Course Category updated successfully.",
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
