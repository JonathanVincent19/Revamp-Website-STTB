using MediatR;
using RevampWebSTTB.Contracts.Responses.Albums;

namespace RevampWebSTTB.Contracts.Requests.Albums
{
    public record GetAlbumsQuery : IRequest<GetAlbumsResponse> { }
}
