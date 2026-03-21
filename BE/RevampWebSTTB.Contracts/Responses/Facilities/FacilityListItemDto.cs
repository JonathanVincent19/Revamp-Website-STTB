namespace RevampWebSTTB.Contracts.Responses.Facilities
{
    /// <summary>
    /// Lightweight DTO for the facilities list endpoint.
    /// Excludes LongDescription and Photos for performance.
    /// </summary>
    public record FacilityListItemDto
    {
        public int Id { get; init; }
        public string Name { get; init; } = string.Empty;
        public string Slug { get; init; } = string.Empty;
        public string ShortDescription { get; init; } = string.Empty;
        public string IconName { get; init; } = string.Empty;
        public string FeaturedImage { get; init; } = string.Empty;
    }
}
