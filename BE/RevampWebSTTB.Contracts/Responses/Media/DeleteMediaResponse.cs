namespace RevampWebSTTB.Contracts.Responses.Media
{
    public record DeleteMediaResponse
    {
        public bool Success { get; init; }
        public string Message { get; init; } = string.Empty;
    }
}
