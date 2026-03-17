using System.Collections.Generic;

namespace RevampWebSTTB.Contracts.Responses.Programs
{
    public record StudyProgramDto
    {
        public int Id { get; init; }
        public string Name { get; init; } = string.Empty;
        public string Level { get; init; } = string.Empty;
        public string? Description { get; init; }
        public int Semesters { get; set; }
        public string Status { get; init; } = string.Empty;
        public string? Curriculum { get; init; }
    }
}
