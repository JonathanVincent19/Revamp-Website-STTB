namespace RevampWebSTTB.Contracts.Responses
{
    /// <summary>
    /// Shared response for operations that return only a success flag and a message.
    /// Used by create, update, delete, and other simple command handlers.
    /// </summary>
    public record StandardResponse
    {
        public bool Success { get; init; }
        public string Message { get; init; } = string.Empty;
        public object? Data { get; init; }
    }
}
