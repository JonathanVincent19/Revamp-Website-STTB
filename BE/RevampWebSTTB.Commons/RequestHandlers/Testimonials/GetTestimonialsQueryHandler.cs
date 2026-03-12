using MediatR;
using RevampWebSTTB.Entities.Data;
using RevampWebSTTB.Contracts.Requests.Testimonials;
using RevampWebSTTB.Contracts.Responses.Testimonials;
using Microsoft.EntityFrameworkCore;
    
namespace RevampWebSTTB.Commons.RequestHandlers.Testimonials
{
    public class GetTestimonialsQueryHandler : IRequestHandler<GetTestimonialsQuery, GetTestimonialsResponse>
    {
        private readonly STTBContext _context;

        public GetTestimonialsQueryHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<GetTestimonialsResponse> Handle(GetTestimonialsQuery request, CancellationToken cancellationToken)
        {
            var query = _context.Testimonials.AsQueryable();

            if (request.IsFeatured == true)
            {
                query = query.Where(t => t.IsFeatured == true);
            }

            var data = await query.OrderByDescending(t => t.CreatedAt).ToListAsync(cancellationToken);

            return new GetTestimonialsResponse
            {
                Success = true,
                Data = data.Select(t => new TestimonialDto
                {
                    Id = t.Id,
                    AlumniName = t.AlumniName,
                    GraduationYear = t.GraduationYear ?? 0,
                    CurrentJob = t.CurrentJob,
                    Photo = t.Photo,
                    TestimonialText = t.TestimonialText
                }).ToList()
            };
        }
    }
}
