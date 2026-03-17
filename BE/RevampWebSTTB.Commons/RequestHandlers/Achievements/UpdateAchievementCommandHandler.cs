using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Achievements;
using RevampWebSTTB.Contracts.Responses;
using RevampWebSTTB.Entities.Data;
using System.Threading;
using System.Threading.Tasks;

namespace RevampWebSTTB.Commons.RequestHandlers.Achievements
{
    public class UpdateAchievementCommandHandler : IRequestHandler<UpdateAchievementCommand, StandardResponse>
    {
        private readonly STTBContext _context;

        public UpdateAchievementCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<StandardResponse> Handle(UpdateAchievementCommand request, CancellationToken cancellationToken)
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

            achievement.StudentNames = request.StudentNames;
            achievement.AchievementTitle = request.AchievementTitle;
            achievement.CompetitionName = request.CompetitionName;
            achievement.Level = request.Level;
            achievement.AchievementRank = request.AchievementRank;
            achievement.DateAchieved = request.DateAchieved;
            achievement.CertificateImage = request.CertificateImage;
            achievement.Description = request.Description;

            _context.Achievements.Update(achievement);
            await _context.SaveChangesAsync(cancellationToken);

            return new StandardResponse
            {
                Success = true,
                Message = "Achievement updated successfully.",
                Data = new { achievement.Id, achievement.AchievementTitle }
            };
        }
    }
}
