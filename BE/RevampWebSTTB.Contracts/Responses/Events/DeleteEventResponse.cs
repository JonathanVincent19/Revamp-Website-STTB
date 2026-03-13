namespace RevampWebSTTB.Contracts.Responses.Events
{
    public record DeleteEventResponse
    {
        public bool Success { get; init; }
        public string Message { get; init; } = string.Empty;
    }
}
