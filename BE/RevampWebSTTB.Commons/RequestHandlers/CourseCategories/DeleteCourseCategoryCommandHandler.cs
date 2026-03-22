using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.CourseCategories;
using RevampWebSTTB.Contracts.Responses;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.CourseCategories
{
    public class DeleteCourseCategoryCommandHandler : IRequestHandler<DeleteCourseCategoryCommand, StandardResponse>
    {
        private readonly STTBContext _context;

        public DeleteCourseCategoryCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<StandardResponse> Handle(DeleteCourseCategoryCommand request, CancellationToken cancellationToken)
        {
            var category = await _context.CourseCategories.FirstOrDefaultAsync(c => c.Id == request.Id, cancellationToken);

            if (category == null)
            {
                return new StandardResponse
                {
                    Success = false,
                    Message = "Course Category not found."
                };
            }

            _context.CourseCategories.Remove(category);
            await _context.SaveChangesAsync(cancellationToken);

            return new StandardResponse
            {
                Success = true,
                Message = "Course Category deleted successfully."
            };
        }
    }
}
