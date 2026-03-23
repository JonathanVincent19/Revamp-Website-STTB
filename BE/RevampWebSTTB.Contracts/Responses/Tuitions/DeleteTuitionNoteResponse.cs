namespace RevampWebSTTB.Contracts.Responses.Tuitions
{
    public record DeleteTuitionNoteResponse
    {
        public bool Success { get; init; }
        public string Message { get; init; } = string.Empty;
    }
}
