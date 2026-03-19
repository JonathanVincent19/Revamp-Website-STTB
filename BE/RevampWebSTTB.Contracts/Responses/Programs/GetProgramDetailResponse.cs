using System.Collections.Generic;

namespace RevampWebSTTB.Contracts.Responses.Programs
{
    public record GetProgramDetailResponse
    {
        public bool Success { get; init; }
        public string Message { get; init; } = string.Empty;
        public StudyProgramDto? Data { get; init; }
    }
}
