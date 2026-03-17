using MediatR;
using RevampWebSTTB.Contracts.Responses;

namespace RevampWebSTTB.Contracts.Requests.Testimonials
{
    public record DeleteTestimonialCommand : IRequest<StandardResponse>
    {
        public int Id { get; init; }
    }
}
