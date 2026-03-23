namespace RevampWebSTTB.Contracts.Responses.Tuitions
{
    public record UpdateTuitionNoteResponse
    {
        public bool Success { get; init; }
        public string Message { get; init; } = string.Empty;
        public TuitionNoteDto? Data { get; init; }
    }
}
