namespace RevampWebSTTB.Contracts.Responses.News
{
    public record DeleteNewsResponse
    {
        public bool Success { get; init; }
        public string Message { get; init; } = string.Empty;
    }
}
