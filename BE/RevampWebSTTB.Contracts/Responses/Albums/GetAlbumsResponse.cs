namespace RevampWebSTTB.Contracts.Responses.Albums
{
    public record GetAlbumsResponse
    {
        public bool Success { get; init; }
        public List<AlbumDto> Data { get; init; } = new();
    }

    public record AlbumDto
    {
        public int Id { get; init; }
        public string Title { get; init; } = string.Empty;
        public string? Category { get; init; }
        public string? Type { get; init; }
        public string? CoverImage { get; init; }
        public DateTime? EventDate { get; init; }
    }
}
