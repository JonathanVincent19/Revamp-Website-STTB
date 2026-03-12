using MediatR;
using RevampWebSTTB.Contracts.Responses.Achievements;

namespace RevampWebSTTB.Contracts.Requests.Achievements
{
    public record GetAchievementsQuery : IRequest<GetAchievementsResponse>
    {
        public string? Level { get; init; } // e.g., "Nasional", "Internasional"
    }
}
