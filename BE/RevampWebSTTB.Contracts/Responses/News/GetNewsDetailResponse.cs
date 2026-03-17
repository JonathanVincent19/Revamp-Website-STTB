namespace RevampWebSTTB.Contracts.Responses.News
{
    public record GetNewsDetailResponse
    {
        public bool Success { get; init; }
        public NewsDetailDto? Data { get; init; } = new();
    }

    public record NewsDetailDto
    {
        public int Id { get; init; }
        public string Title { get; init; } = string.Empty;
        public string Content { get; init; } = string.Empty;
        public string FeaturedImage { get; init; } = string.Empty;
        public string Author { get; init; } = string.Empty;
        public int ViewCount { get; init; }
        public DateTime PublishedAt { get; init; }
        public List<RelatedNewsDto> RelatedNews { get; init; } = new();
    }

    public record RelatedNewsDto
    {
        public int Id { get; init; }
        public string Title { get; init; } = string.Empty;
        public string Slug { get; init; } = string.Empty;
        // Add other fields as needed based on API implementation
    }
}

/// <summary>
/// Full data response returned after updating a news article.
/// </summary>
public record UpdateNewsResponse
{
    public bool Success { get; init; }
    public string Message { get; init; } = string.Empty;

    // Full data of the updated news
    public int Id { get; init; }
    public string Title { get; init; } = string.Empty;
    public string Slug { get; init; } = string.Empty;
    public int? CategoryId { get; init; }
    public string? FeaturedImage { get; init; }
    public string? Author { get; init; }
    public string Status { get; init; } = string.Empty;
    public DateTime UpdatedAt { get; init; }
}
