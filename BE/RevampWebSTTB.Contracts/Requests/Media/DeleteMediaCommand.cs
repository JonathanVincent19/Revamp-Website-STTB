using MediatR;
using RevampWebSTTB.Contracts.Responses;

namespace RevampWebSTTB.Contracts.Requests.Media
{
    public record DeleteMediaCommand : IRequest<StandardResponse>
    {
        public int Id { get; init; }
    }
}
