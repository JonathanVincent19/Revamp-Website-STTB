namespace RevampWebSTTB.Contracts.Responses.Media
{
    public record CreateMediaResponse
    {
        public bool Success { get; init; }
        public string Message { get; init; } = string.Empty;
        public int MediaId { get; init; }
    }
}
