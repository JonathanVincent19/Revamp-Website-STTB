using MediatR;
using RevampWebSTTB.Contracts.Responses.Programs;

namespace RevampWebSTTB.Contracts.Requests.Programs
{
    public record GetProgramDetailQuery : IRequest<GetProgramDetailResponse>
        {
            public int Id { get; init; }
        }
}
