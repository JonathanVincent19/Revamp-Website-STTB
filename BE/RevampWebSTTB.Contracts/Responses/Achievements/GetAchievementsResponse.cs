namespace RevampWebSTTB.Contracts.Responses.Achievements
{
    public record GetAchievementsResponse
    {
        public bool Success { get; init; }
        public List<AchievementDto> Data { get; init; } = new();
    }

    public record AchievementDto
    {
        public int Id { get; init; }
        public string StudentNames { get; init; } = string.Empty;
        public string AchievementTitle { get; init; } = string.Empty;
        public string? CompetitionName { get; init; } = string.Empty;
        public string Level { get; init; } = string.Empty;
        public DateTime? DateAchieved { get; init; }
        public string? CertificateImage { get; init; }
    }
}
