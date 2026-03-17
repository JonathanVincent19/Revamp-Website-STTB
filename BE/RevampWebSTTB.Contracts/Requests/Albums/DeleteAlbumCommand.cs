using MediatR;
using RevampWebSTTB.Contracts.Responses;

namespace RevampWebSTTB.Contracts.Requests.Albums
{
    public record DeleteAlbumCommand : IRequest<StandardResponse>
    {
        public int Id { get; init; }
    }
}
