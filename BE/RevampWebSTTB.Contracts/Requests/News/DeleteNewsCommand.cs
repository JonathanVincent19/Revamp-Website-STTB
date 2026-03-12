using MediatR;
using RevampWebSTTB.Contracts.Responses.News;

namespace RevampWebSTTB.Contracts.Requests.News
{
    public record DeleteNewsCommand : IRequest<DeleteNewsResponse>
    {
        public int Id { get; init; }
    }
}
