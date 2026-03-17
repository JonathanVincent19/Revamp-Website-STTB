using MediatR;
using RevampWebSTTB.Contracts.Responses.Testimonials;

namespace RevampWebSTTB.Contracts.Requests.Testimonials
{
    public record GetAdminTestimonialsQuery : IRequest<GetAdminTestimonialsResponse>
    {
        public int Page { get; init; } = 1;
        public int PageSize { get; init; } = 10;
        public string? SearchToken { get; init; }
    }
}
