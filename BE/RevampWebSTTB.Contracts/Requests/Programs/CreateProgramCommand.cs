using MediatR;
using RevampWebSTTB.Contracts.Responses.Programs;

namespace RevampWebSTTB.Contracts.Requests.Programs
{
    public record CreateProgramCommand : IRequest<CreateProgramResponse>
    {
        public string Name { get; init; } = string.Empty;
        public string Level { get; init; } = string.Empty;
        public string Degree { get; init; } = string.Empty;
        public int TotalCredits { get; init; }
        public string StudyDuration { get; init; } = string.Empty;
        public string LearningSystem { get; init; } = string.Empty;
    }
}

