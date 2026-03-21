namespace RevampWebSTTB.Contracts.Responses.Facilities
{
    public record GetFacilitiesResponse
    {
        public bool Success { get; init; }
        public List<FacilityListItemDto> Data { get; init; } = new();
    }
}
