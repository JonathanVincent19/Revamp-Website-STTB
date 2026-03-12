using MediatR;
using RevampWebSTTB.Contracts.Responses.Albums;

namespace RevampWebSTTB.Contracts.Requests.Albums
{
    public record DeleteAlbumCommand : IRequest<DeleteAlbumResponse>
    {
        public int Id { get; init; }
    }
}
