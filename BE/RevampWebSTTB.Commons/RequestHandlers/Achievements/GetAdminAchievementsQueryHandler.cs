using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Achievements;
using RevampWebSTTB.Contracts.Responses.Achievements;
using RevampWebSTTB.Entities.Data;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace RevampWebSTTB.Commons.RequestHandlers.Achievements
{
    public class GetAdminAchievementsQueryHandler : IRequestHandler<GetAdminAchievementsQuery, GetAdminAchievementsResponse>
    {
        private readonly STTBContext _context;

        public GetAdminAchievementsQueryHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<GetAdminAchievementsResponse> Handle(GetAdminAchievementsQuery request, CancellationToken cancellationToken)
        {
            var query = _context.Achievements.AsQueryable();

            if (!string.IsNullOrEmpty(request.SearchToken))
            {
                var lowerSearch = request.SearchToken.ToLower();
                query = query.Where(a => 
                    a.AchievementTitle.ToLower().Contains(lowerSearch) || 
                    a.StudentNames.ToLower().Contains(lowerSearch));
            }

            var totalCount = await query.CountAsync(cancellationToken);
            var skip = (request.Page - 1) * request.PageSize;

            var items = await query
                .OrderByDescending(x => x.CreatedAt)
                .Skip(skip)
                .Take(request.PageSize)
                .ToListAsync(cancellationToken);

            var dtos = items.Select(x => new AdminAchievementDto
            {
                Id = x.Id,
                StudentNames = x.StudentNames,
                AchievementTitle = x.AchievementTitle,
                CompetitionName = x.CompetitionName,
                Level = x.Level,
                AchievementRank = x.AchievementRank,
                DateAchieved = x.DateAchieved,
                CertificateImage = x.CertificateImage,
                Description = x.Description,
                CreatedAt = x.CreatedAt
            }).ToList();

            return new GetAdminAchievementsResponse
            {
                Success = true,
                Message = "Achievements fetched successfully.",
                Data = dtos,
                TotalCount = totalCount,
                Page = request.Page,
                PageSize = request.PageSize
            };
        }
    }
}
