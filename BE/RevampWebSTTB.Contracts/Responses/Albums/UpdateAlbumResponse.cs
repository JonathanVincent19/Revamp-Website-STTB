namespace RevampWebSTTB.Contracts.Responses.Albums
{
    public record UpdateAlbumResponse
    {
        public bool Success { get; init; }
        public string Message { get; init; } = string.Empty;
    }
}
