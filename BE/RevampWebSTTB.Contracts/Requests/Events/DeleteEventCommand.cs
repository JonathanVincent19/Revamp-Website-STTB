using MediatR;
using RevampWebSTTB.Contracts.Responses.Events;

namespace RevampWebSTTB.Contracts.Requests.Events
{
    public record DeleteEventCommand : IRequest<DeleteEventResponse>
    {
        public int Id { get; init; }
    }
}
