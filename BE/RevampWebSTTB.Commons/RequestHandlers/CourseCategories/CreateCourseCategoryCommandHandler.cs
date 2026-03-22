using MediatR;
using RevampWebSTTB.Contracts.Requests.CourseCategories;
using RevampWebSTTB.Contracts.Responses.CourseCategories;
using RevampWebSTTB.Entities.Data;
using RevampWebSTTB.Entities.Models;

namespace RevampWebSTTB.Commons.RequestHandlers.CourseCategories
{
    public class CreateCourseCategoryCommandHandler : IRequestHandler<CreateCourseCategoryCommand, CreateCourseCategoryResponse>
    {
        private readonly STTBContext _context;

        public CreateCourseCategoryCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<CreateCourseCategoryResponse> Handle(CreateCourseCategoryCommand request, CancellationToken cancellationToken)
        {
            var category = new CourseCategory
            {
                Name = request.Name,
                TotalSKS = request.TotalSKS
            };

            _context.CourseCategories.Add(category);
            await _context.SaveChangesAsync(cancellationToken);

            return new CreateCourseCategoryResponse
            {
                Success = true,
                Message = "Course Category created successfully.",
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
