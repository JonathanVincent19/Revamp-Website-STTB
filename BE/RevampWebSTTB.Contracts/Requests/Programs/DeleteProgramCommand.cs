using MediatR;
using RevampWebSTTB.Contracts.Responses;

namespace RevampWebSTTB.Contracts.Requests.Programs
{
    public record DeleteProgramCommand : IRequest<StandardResponse>
    {
        public int Id { get; init; }
    }
}
