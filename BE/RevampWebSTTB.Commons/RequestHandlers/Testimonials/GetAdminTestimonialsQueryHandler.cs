using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Testimonials;
using RevampWebSTTB.Contracts.Responses.Testimonials;
using RevampWebSTTB.Entities.Data;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace RevampWebSTTB.Commons.RequestHandlers.Testimonials
{
    public class GetAdminTestimonialsQueryHandler : IRequestHandler<GetAdminTestimonialsQuery, GetAdminTestimonialsResponse>
    {
        private readonly STTBContext _context;

        public GetAdminTestimonialsQueryHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<GetAdminTestimonialsResponse> Handle(GetAdminTestimonialsQuery request, CancellationToken cancellationToken)
        {
            var query = _context.Testimonials.AsQueryable();

            if (!string.IsNullOrEmpty(request.SearchToken))
            {
                var lowerSearch = request.SearchToken.ToLower();
                query = query.Where(a => 
                    a.AlumniName.ToLower().Contains(lowerSearch) || 
                    a.TestimonialText.ToLower().Contains(lowerSearch) ||
                    (a.CurrentJob != null && a.CurrentJob.ToLower().Contains(lowerSearch)));
            }

            var totalCount = await query.CountAsync(cancellationToken);
            var skip = (request.Page - 1) * request.PageSize;

            var items = await query
                .OrderByDescending(x => x.CreatedAt)
                .Skip(skip)
                .Take(request.PageSize)
                .ToListAsync(cancellationToken);

            var dtos = items.Select(x => new AdminTestimonialDto
            {
                Id = x.Id,
                AlumniName = x.AlumniName,
                GraduationYear = x.GraduationYear,
                CurrentJob = x.CurrentJob,
                Photo = x.Photo,
                TestimonialText = x.TestimonialText,
                IsFeatured = x.IsFeatured,
                CreatedAt = x.CreatedAt
            }).ToList();

            return new GetAdminTestimonialsResponse
            {
                Success = true,
                Message = "Testimonials fetched successfully.",
                Data = dtos,
                TotalCount = totalCount,
                Page = request.Page,
                PageSize = request.PageSize
            };
        }
    }
}
