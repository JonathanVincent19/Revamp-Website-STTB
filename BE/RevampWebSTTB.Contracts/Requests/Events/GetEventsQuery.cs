using MediatR;
using RevampWebSTTB.Contracts.Responses.Events;

namespace RevampWebSTTB.Contracts.Requests.Events
{
    public record GetEventsQuery : IRequest<GetEventsResponse>
    {
        public string? Status { get; init; } // e.g., "upcoming", "past"
        public int? Limit { get; init; }
    }
}
