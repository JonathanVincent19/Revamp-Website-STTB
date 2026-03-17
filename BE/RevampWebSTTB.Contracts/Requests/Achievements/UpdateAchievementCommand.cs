using MediatR;
using RevampWebSTTB.Contracts.Responses;
using System;

namespace RevampWebSTTB.Contracts.Requests.Achievements
{
    public record UpdateAchievementCommand : IRequest<StandardResponse>
    {
        public int Id { get; init; }
        public string StudentNames { get; init; } = string.Empty;
        public string AchievementTitle { get; init; } = string.Empty;
        public string? CompetitionName { get; init; }
        public string Level { get; init; } = string.Empty;
        public string? AchievementRank { get; init; }
        public DateTime? DateAchieved { get; init; }
        public string? CertificateImage { get; init; }
        public string? Description { get; init; }
    }
}
