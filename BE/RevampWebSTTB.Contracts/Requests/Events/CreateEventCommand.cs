using System;
using MediatR;
using RevampWebSTTB.Contracts.Responses.Events;

namespace RevampWebSTTB.Contracts.Requests.Events
{
    public record CreateEventCommand : IRequest<CreateEventResponse>
    {
        public string Title { get; init; } = string.Empty;
        public string? Description { get; init; }
        public string? Location { get; init; }
        public DateTime EventDate { get; init; }
        public TimeSpan? StartTime { get; init; }
        public TimeSpan? EndTime { get; init; }
        public string? Image { get; init; }
    }
}
