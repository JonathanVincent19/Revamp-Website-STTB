using MediatR;
using RevampWebSTTB.Contracts.Responses.News;

namespace RevampWebSTTB.Contracts.Requests.News
{
    public record GetNewsDetailQuery : IRequest<GetNewsDetailResponse>
    {
        public string Slug { get; init; } = string.Empty;

    }
}
