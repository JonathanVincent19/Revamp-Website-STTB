namespace RevampWebSTTB.Contracts.Responses.News
{
    public record GetNewsListResponse
    {
        public bool Success { get; init; }
        public List<NewsItemDto> Data { get; init; } = new();
        public PaginationDto Pagination { get; init; } = new();
    }

    public record NewsItemDto
    {
        public int Id { get; init; }
        public string Title { get; init; } = string.Empty;
        public string Slug { get; init; } = string.Empty;
        public string Category { get; init; } = string.Empty;
        public string FeaturedImage { get; init; } = string.Empty;
        public string Author { get; init; } = string.Empty;
        public DateTime PublishedAt { get; init; }
        public string Content { get; init; } = string.Empty;
    }

    public record PaginationDto
    {
        public int CurrentPage { get; init; }
        public int TotalPages { get; init; }
        public int TotalItems { get; init; }
    }
}
