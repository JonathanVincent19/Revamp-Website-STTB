using MediatR;
using RevampWebSTTB.Contracts.Responses.Programs;

namespace RevampWebSTTB.Contracts.Requests.Programs
{
    public record UpdateProgramCommand : IRequest<UpdateProgramResponse>
        {
            public int Id { get; init; }
            public string Name { get; init; } = string.Empty;
            public string Level { get; init; } = string.Empty;
            public string? Description { get; init; }
            public int Semesters { get; init; }
            public string Status { get; init; } = string.Empty;
            public string? Curriculum { get; init; }
        }
}
