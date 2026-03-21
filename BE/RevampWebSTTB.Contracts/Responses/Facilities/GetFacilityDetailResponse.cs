namespace RevampWebSTTB.Contracts.Responses.Facilities
{
    public record GetFacilityDetailResponse
    {
        public bool Success { get; init; }
        public string Message { get; init; } = string.Empty;
        public FacilityDto? Data { get; init; }
    }
}
