using MediatR;
using RevampWebSTTB.Contracts.Responses;

namespace RevampWebSTTB.Contracts.Requests.Events
{
    public record DeleteEventCommand : IRequest<StandardResponse>
    {
        public int Id { get; init; }
    }
}
