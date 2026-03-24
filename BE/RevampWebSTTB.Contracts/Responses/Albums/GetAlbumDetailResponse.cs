namespace RevampWebSTTB.Contracts.Responses.Albums
{
    public record GetAlbumDetailResponse
    {
        public bool Success { get; init; }
        public AlbumDetailDto? Data { get; init; } = new();
    }

    public record AlbumDetailDto
    {
        public int Id { get; init; }
        public string Title { get; init; } = string.Empty;
        public string? Description { get; init; }
        public string? Category { get; init; }
        public string? Type { get; init; }
        public string? CoverImage { get; init; }
        public string? Url { get; init; }
        public DateTime? EventDate { get; init; }
    }

    public record MediaDto
    {
        public int Id { get; init; }
        public string FilePath { get; init; } = string.Empty;
        public string? Caption { get; init; }
    }
}
