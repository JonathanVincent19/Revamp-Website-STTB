namespace RevampWebSTTB.Contracts.Responses.News
{
    public record CreateNewsResponse
    {
        public bool Success { get; init; }
        public string Message { get; init; } = string.Empty;
        public int NewsId { get; init; }
    }
}
