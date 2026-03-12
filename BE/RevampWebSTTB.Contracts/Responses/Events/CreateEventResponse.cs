namespace RevampWebSTTB.Contracts.Responses.Events
{
    public record CreateEventResponse
    {
        public bool Success { get; init; }
        public string Message { get; init; } = string.Empty;
        public int EventId { get; init; }
    }
}
