using MediatR;
using RevampWebSTTB.Contracts.Requests.Achievements;
using RevampWebSTTB.Contracts.Responses;
using RevampWebSTTB.Entities.Data;
using RevampWebSTTB.Entities.Models;
using System.Threading;
using System.Threading.Tasks;

namespace RevampWebSTTB.Commons.RequestHandlers.Achievements
{
    public class CreateAchievementCommandHandler : IRequestHandler<CreateAchievementCommand, StandardResponse>
    {
        private readonly STTBContext _context;

        public CreateAchievementCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<StandardResponse> Handle(CreateAchievementCommand request, CancellationToken cancellationToken)
        {
            var achievement = new Achievement
            {
                StudentNames = request.StudentNames,
                AchievementTitle = request.AchievementTitle,
                CompetitionName = request.CompetitionName,
                Level = request.Level,
                AchievementRank = request.AchievementRank,
                DateAchieved = request.DateAchieved,
                CertificateImage = request.CertificateImage,
                Description = request.Description,
                CreatedAt = System.DateTime.UtcNow
            };

            await _context.Achievements.AddAsync(achievement, cancellationToken);
            await _context.SaveChangesAsync(cancellationToken);

            return new StandardResponse
            {
                Success = true,
                Message = "Achievement created successfully.",
                Data = new { achievement.Id, achievement.AchievementTitle }
            };
        }
    }
}
