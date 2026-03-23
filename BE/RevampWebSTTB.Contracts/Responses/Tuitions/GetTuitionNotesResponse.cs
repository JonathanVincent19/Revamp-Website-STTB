namespace RevampWebSTTB.Contracts.Responses.Tuitions
{
    public record GetTuitionNotesResponse
    {
        public bool Success { get; init; }
        public List<TuitionNoteDto> Data { get; init; } = new();
    }
}
