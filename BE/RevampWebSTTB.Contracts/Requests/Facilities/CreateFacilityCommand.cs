using MediatR;
using RevampWebSTTB.Contracts.Responses;

namespace RevampWebSTTB.Contracts.Requests.Facilities
{
    public record CreateFacilityCommand : IRequest<StandardResponse>
    {
        public string Name { get; init; } = string.Empty;
        public string Slug { get; init; } = string.Empty;
        public string ShortDescription { get; init; } = string.Empty;
        public string LongDescription { get; init; } = string.Empty;
        public string IconName { get; init; } = string.Empty;
        public string FeaturedImage { get; init; } = string.Empty;
        public List<string> Photos { get; init; } = new();
    }
}
