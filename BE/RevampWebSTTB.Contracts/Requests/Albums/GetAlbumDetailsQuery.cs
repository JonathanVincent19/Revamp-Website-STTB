using MediatR;
using RevampWebSTTB.Contracts.Responses.Albums;

namespace RevampWebSTTB.Contracts.Requests.Albums
{
    public record GetAlbumDetailQuery : IRequest<GetAlbumDetailResponse>
    {
        public int Id { get; init; }
    }
}
