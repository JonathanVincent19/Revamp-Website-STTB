using MediatR;
using RevampWebSTTB.Contracts.Responses.Programs;

namespace RevampWebSTTB.Contracts.Requests.Programs
{
    public record GetProgramsQuery : IRequest<GetProgramsResponse>
        {
        }
}
