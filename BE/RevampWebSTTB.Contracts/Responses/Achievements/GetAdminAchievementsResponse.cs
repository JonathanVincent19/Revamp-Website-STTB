using System;
using System.Collections.Generic;

namespace RevampWebSTTB.Contracts.Responses.Achievements
{
    public class GetAdminAchievementsResponse
    {
        public bool Success { get; set; } = true;
        public string Message { get; set; } = "Achievements fetched successfully.";
        public IEnumerable<AdminAchievementDto> Data { get; set; } = new List<AdminAchievementDto>();
        public int TotalCount { get; set; }
        public int Page { get; set; }
        public int PageSize { get; set; }
    }

    public class AdminAchievementDto
    {
        public int Id { get; set; }
        public string StudentNames { get; set; } = string.Empty;
        public string AchievementTitle { get; set; } = string.Empty;
        public string? CompetitionName { get; set; }
        public string Level { get; set; } = string.Empty;
        public string? AchievementRank { get; set; }
        public DateTime? DateAchieved { get; set; }
        public string? CertificateImage { get; set; }
        public string? Description { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
