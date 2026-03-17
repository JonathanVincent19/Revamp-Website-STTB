using MediatR;
using RevampWebSTTB.Contracts.Responses.Achievements;

namespace RevampWebSTTB.Contracts.Requests.Achievements
{
    public record GetAdminAchievementsQuery : IRequest<GetAdminAchievementsResponse>
    {
        public int Page { get; init; } = 1;
        public int PageSize { get; init; } = 10;
        public string? SearchToken { get; init; }
    }
}
