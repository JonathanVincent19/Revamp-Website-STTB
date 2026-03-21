using MediatR;
using RevampWebSTTB.Contracts.Responses;

namespace RevampWebSTTB.Contracts.Requests.Facilities
{
    public record DeleteFacilityCommand : IRequest<StandardResponse>
    {
        public int Id { get; init; }
    }
}
