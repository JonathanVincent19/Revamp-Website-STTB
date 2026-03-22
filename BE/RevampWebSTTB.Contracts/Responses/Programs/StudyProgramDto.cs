namespace RevampWebSTTB.Contracts.Responses.Programs
{
    public record StudyProgramDto
    {
        public int Id { get; init; }
        public string Name { get; init; } = string.Empty;
        public string Level { get; init; } = string.Empty;
        public string Degree { get; init; } = string.Empty;
        public int TotalCredits { get; init; }
        public string StudyDuration { get; init; } = string.Empty;
        public string LearningSystem { get; init; } = string.Empty;
    }
}

