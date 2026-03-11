using MediatR;
using RevampWebSTTB.Contracts.Responses.News;

namespace RevampWebSTTB.Contracts.Requests.News
{
    public record GetNewsListQuery : IRequest<GetNewsListResponse>
    {
        public int? Page { get; init; } = 1;
        public int? Limit { get; init; } = 10;
        public int? CategoryId { get; init; }
    }
}
