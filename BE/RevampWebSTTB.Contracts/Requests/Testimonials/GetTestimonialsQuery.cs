using MediatR;
using RevampWebSTTB.Contracts.Responses.Testimonials;

namespace RevampWebSTTB.Contracts.Requests.Testimonials
{
    public record GetTestimonialsQuery : IRequest<GetTestimonialsResponse>
    {
        public bool? IsFeatured { get; init; }
    }
}
