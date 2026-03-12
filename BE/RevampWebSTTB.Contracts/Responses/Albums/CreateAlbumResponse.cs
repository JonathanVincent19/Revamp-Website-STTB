namespace RevampWebSTTB.Contracts.Responses.Albums
{
    public record CreateAlbumResponse
    {
        public bool Success { get; init; }
        public string Message { get; init; } = string.Empty;
        public int AlbumId { get; init; }
    }
}
