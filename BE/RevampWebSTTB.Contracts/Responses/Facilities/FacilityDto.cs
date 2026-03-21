namespace RevampWebSTTB.Contracts.Responses.Facilities
{
    /// <summary>
    /// Full facility DTO for the detail endpoint.
    /// Includes LongDescription and Photos array.
    /// </summary>
    public record FacilityDto
    {
        public int Id { get; init; }
        public string Name { get; init; } = string.Empty;
        public string Slug { get; init; } = string.Empty;
        public string ShortDescription { get; init; } = string.Empty;
        public string LongDescription { get; init; } = string.Empty;
        public string IconName { get; init; } = string.Empty;
        public string FeaturedImage { get; init; } = string.Empty;
        public List<string> Photos { get; init; } = new();
    }
}
