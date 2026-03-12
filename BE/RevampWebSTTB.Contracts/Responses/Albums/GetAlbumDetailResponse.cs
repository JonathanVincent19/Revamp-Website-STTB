namespace RevampWebSTTB.Contracts.Responses.Albums
{
    public record GetAlbumDetailResponse
    {
        public bool Success { get; init; }
        public AlbumDetailDto? Data { get; init; } = new();
    }

    public record AlbumDetailDto
    {
        public string AlbumTitle { get; init; } = string.Empty;
        public List<MediaDto> Media { get; init; } = new();
    }

    public record MediaDto
    {
        public int Id { get; init; }
        public string FilePath { get; init; } = string.Empty;
        public string? Caption { get; init; }
    }
}
