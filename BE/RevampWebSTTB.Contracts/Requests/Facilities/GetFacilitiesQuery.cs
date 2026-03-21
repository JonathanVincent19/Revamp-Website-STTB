using MediatR;
using RevampWebSTTB.Contracts.Responses.Facilities;

namespace RevampWebSTTB.Contracts.Requests.Facilities
{
    public record GetFacilitiesQuery : IRequest<GetFacilitiesResponse>
    {
    }
}
