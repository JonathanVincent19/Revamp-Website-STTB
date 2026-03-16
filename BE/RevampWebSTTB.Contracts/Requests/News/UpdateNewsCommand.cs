using MediatR;
using RevampWebSTTB.Contracts.Responses;

namespace RevampWebSTTB.Contracts.Requests.News
{
    public record UpdateNewsCommand : IRequest<StandardResponse>
    {
        public int Id { get; init; }
        public int? CategoryId { get; init; }
        public string Title { get; init; } = string.Empty;
        public string Slug { get; init; } = string.Empty;
        public string Content { get; init; } = string.Empty;
        public string? FeaturedImage { get; init; }
        public string? Author { get; init; }
        public string Status { get; init; } = string.Empty;
    }
}
