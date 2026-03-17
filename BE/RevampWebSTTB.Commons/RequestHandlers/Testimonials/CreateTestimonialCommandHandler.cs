using MediatR;
using RevampWebSTTB.Contracts.Requests.Testimonials;
using RevampWebSTTB.Contracts.Responses;
using RevampWebSTTB.Entities.Data;
using RevampWebSTTB.Entities.Models;
using System.Threading;
using System.Threading.Tasks;

namespace RevampWebSTTB.Commons.RequestHandlers.Testimonials
{
    public class CreateTestimonialCommandHandler : IRequestHandler<CreateTestimonialCommand, StandardResponse>
    {
        private readonly STTBContext _context;

        public CreateTestimonialCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<StandardResponse> Handle(CreateTestimonialCommand request, CancellationToken cancellationToken)
        {
            var testimonial = new Testimonial
            {
                AlumniName = request.AlumniName,
                GraduationYear = request.GraduationYear,
                CurrentJob = request.CurrentJob,
                Photo = request.Photo,
                TestimonialText = request.TestimonialText,
                IsFeatured = request.IsFeatured,
                CreatedAt = System.DateTime.UtcNow
            };

            await _context.Testimonials.AddAsync(testimonial, cancellationToken);
            await _context.SaveChangesAsync(cancellationToken);

            return new StandardResponse
            {
                Success = true,
                Message = "Testimonial created successfully.",
                Data = new { testimonial.Id, testimonial.AlumniName }
            };
        }
    }
}
