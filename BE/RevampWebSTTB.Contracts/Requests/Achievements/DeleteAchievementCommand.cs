using MediatR;
using RevampWebSTTB.Contracts.Responses;

namespace RevampWebSTTB.Contracts.Requests.Achievements
{
    public record DeleteAchievementCommand : IRequest<StandardResponse>
    {
        public int Id { get; init; }
    }
}
