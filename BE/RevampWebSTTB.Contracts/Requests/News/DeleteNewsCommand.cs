using MediatR;
using RevampWebSTTB.Contracts.Responses;

namespace RevampWebSTTB.Contracts.Requests.News
{
    public record DeleteNewsCommand : IRequest<StandardResponse>
    {
        public int Id { get; init; }
    }
}
