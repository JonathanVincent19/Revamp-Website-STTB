using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Testimonials;
using RevampWebSTTB.Contracts.Responses;
using RevampWebSTTB.Entities.Data;
using System.Threading;
using System.Threading.Tasks;

namespace RevampWebSTTB.Commons.RequestHandlers.Testimonials
{
    public class DeleteTestimonialCommandHandler : IRequestHandler<DeleteTestimonialCommand, StandardResponse>
    {
        private readonly STTBContext _context;

        public DeleteTestimonialCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<StandardResponse> Handle(DeleteTestimonialCommand request, CancellationToken cancellationToken)
        {
            var testimonial = await _context.Testimonials.FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            if (testimonial == null)
            {
                return new StandardResponse
                {
                    Success = false,
                    Message = "Testimonial not found."
                };
            }

            _context.Testimonials.Remove(testimonial);
            await _context.SaveChangesAsync(cancellationToken);

            return new StandardResponse
            {
                Success = true,
                Message = "Testimonial deleted successfully.",
                Data = new { testimonial.Id, testimonial.AlumniName }
            };
        }
    }
}
