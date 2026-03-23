using MediatR;
using RevampWebSTTB.Contracts.Responses.News;

namespace RevampWebSTTB.Contracts.Requests.News
{
    public record CreateNewsCommand : IRequest<CreateNewsResponse>
    {
        public int? CategoryId { get; init; }
        public string Title { get; init; } = string.Empty;
        public string? Slug { get; init; }
        public string Content { get; init; } = string.Empty;
        public string? FeaturedImage { get; init; }
        public string? Author { get; init; }
        public string Status { get; init; } = "draft";
        public DateTime? PublishedAt { get; init; }
    }
}
