namespace RevampWebSTTB.Contracts.Responses.Albums
{
    public record DeleteAlbumResponse
    {
        public bool Success { get; init; }
        public string Message { get; init; } = string.Empty;
    }
}
