using MediatR;
using RevampWebSTTB.Contracts.Responses;

namespace RevampWebSTTB.Contracts.Requests.Tuitions
{
    public record DeleteTuitionFeeCommand : IRequest<StandardResponse>
    {
        public int Id { get; init; }
    }
}
