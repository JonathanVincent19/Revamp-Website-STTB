using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Achievements;
using RevampWebSTTB.Contracts.Responses;
using RevampWebSTTB.Entities.Data;
using System.Threading;
using System.Threading.Tasks;

namespace RevampWebSTTB.Commons.RequestHandlers.Achievements
{
    public class DeleteAchievementCommandHandler : IRequestHandler<DeleteAchievementCommand, StandardResponse>
    {
        private readonly STTBContext _context;

        public DeleteAchievementCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<StandardResponse> Handle(DeleteAchievementCommand request, CancellationToken cancellationToken)
        {
            var achievement = await _context.Achievements.FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            if (achievement == null)
            {
                return new StandardResponse
                {
                    Success = false,
                    Message = "Achievement not found."
                };
            }

            _context.Achievements.Remove(achievement);
            await _context.SaveChangesAsync(cancellationToken);

            return new StandardResponse
            {
                Success = true,
                Message = "Achievement deleted successfully.",
                Data = new { achievement.Id, achievement.AchievementTitle }
            };
        }
    }
}
