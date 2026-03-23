namespace RevampWebSTTB.Contracts.Responses.Tuitions
{
    public record TuitionNoteDto
    {
        public int Id { get; init; }
        public string Program { get; init; } = string.Empty;
        public string NoteText { get; init; } = string.Empty;
        public int SortOrder { get; init; }
    }
}
