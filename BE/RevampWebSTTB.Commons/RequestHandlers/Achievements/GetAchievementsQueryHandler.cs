using System;
using System.Collections.Generic;
using System.Text;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Achievements;
using RevampWebSTTB.Contracts.Responses.Achievements;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Achievements
{
    public class GetAchievementsQueryHandler : IRequestHandler<GetAchievementsQuery, GetAchievementsResponse>
    {
        private readonly STTBContext _context;

        public GetAchievementsQueryHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<GetAchievementsResponse> Handle(GetAchievementsQuery request, CancellationToken cancellationToken)
        {
            var query = _context.Achievements.AsQueryable();

            if (!string.IsNullOrEmpty(request.Level))
            {
                query = query.Where(a => a.Level.ToLower() == request.Level.ToLower());
            }

            var data = await query.OrderByDescending(a => a.DateAchieved).ToListAsync(cancellationToken);

            return new GetAchievementsResponse
            {
                Success = true,
                Data = data.Select(a => new AchievementDto
                {
                    Id = a.Id,
                    StudentNames = a.StudentNames,
                    AchievementTitle = a.AchievementTitle,
                    CompetitionName = a.CompetitionName,
                    Level = a.Level,
                    DateAchieved = a.DateAchieved,
                    CertificateImage = a.CertificateImage
                }).ToList()
            };
        }
    }
}
