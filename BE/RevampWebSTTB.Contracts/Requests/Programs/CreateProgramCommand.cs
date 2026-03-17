using MediatR;
using RevampWebSTTB.Contracts.Responses.Programs;

namespace RevampWebSTTB.Contracts.Requests.Programs
{
    public record CreateProgramCommand : IRequest<CreateProgramResponse>
        {
            public string Name { get; init; } = string.Empty;
            public string Level { get; init; } = string.Empty;
            public string? Description { get; init; }
            public int Semesters { get; init; }
            public string Status { get; init; } = "active";
            public string? Curriculum { get; init; }
        }
}
