using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Testimonials;
using RevampWebSTTB.Contracts.Responses;
using RevampWebSTTB.Entities.Data;
using System.Threading;
using System.Threading.Tasks;

namespace RevampWebSTTB.Commons.RequestHandlers.Testimonials
{
    public class UpdateTestimonialCommandHandler : IRequestHandler<UpdateTestimonialCommand, StandardResponse>
    {
        private readonly STTBContext _context;

        public UpdateTestimonialCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<StandardResponse> Handle(UpdateTestimonialCommand request, CancellationToken cancellationToken)
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

            testimonial.AlumniName = request.AlumniName;
            testimonial.GraduationYear = request.GraduationYear;
            testimonial.CurrentJob = request.CurrentJob;
            testimonial.Photo = request.Photo;
            testimonial.TestimonialText = request.TestimonialText;
            testimonial.IsFeatured = request.IsFeatured;

            _context.Testimonials.Update(testimonial);
            await _context.SaveChangesAsync(cancellationToken);

            return new StandardResponse
            {
                Success = true,
                Message = "Testimonial updated successfully.",
                Data = new { testimonial.Id, testimonial.AlumniName }
            };
        }
    }
}
