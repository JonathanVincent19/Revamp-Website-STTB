namespace RevampWebSTTB.Contracts.Responses.Events
{
    public record GetEventsResponse
    {
        public bool Success { get; init; }
        public List<EventDto> Data { get; init; } = new();
    }

    public record EventDto
    {
        public int Id { get; init; }
        public string Title { get; init; } = string.Empty;
        public string Location { get; init; } = string.Empty;
        public DateTime EventDate { get; init; }
        public string StartTime { get; init; } = string.Empty; // Time format "HH:mm:ss"
        public string? Image { get; init; }
        public string Description { get; init; } = string.Empty;
    }
}
