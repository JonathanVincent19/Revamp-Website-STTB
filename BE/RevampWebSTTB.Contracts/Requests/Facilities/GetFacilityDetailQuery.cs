using MediatR;
using RevampWebSTTB.Contracts.Responses.Facilities;

namespace RevampWebSTTB.Contracts.Requests.Facilities
{
    public record GetFacilityDetailQuery : IRequest<GetFacilityDetailResponse>
    {
        public string Slug { get; init; } = string.Empty;
    }
}
