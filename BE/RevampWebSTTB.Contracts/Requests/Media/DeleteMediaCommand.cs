using MediatR;
using RevampWebSTTB.Contracts.Responses.Media;

namespace RevampWebSTTB.Contracts.Requests.Media
{
    public record DeleteMediaCommand : IRequest<DeleteMediaResponse>
    {
        public int Id { get; init; }
    }
}
