using System.Collections.Generic;

namespace RevampWebSTTB.Contracts.Responses.Programs
{
    public record GetProgramsResponse
    {
        public bool Success { get; init; }
        public List<StudyProgramDto> Data { get; init; } = new();
    }
}
