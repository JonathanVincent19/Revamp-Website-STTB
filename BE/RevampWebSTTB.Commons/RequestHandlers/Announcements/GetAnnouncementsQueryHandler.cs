using MediatR;
using RevampWebSTTB.Entities.Data;
using RevampWebSTTB.Contracts.Requests.Announcements;
using RevampWebSTTB.Contracts.Responses.Announcements;
using Microsoft.EntityFrameworkCore;
using ModelAnnouncement = RevampWebSTTB.Entities.Models.Announcement;


namespace RevampWebSTTB.Commons.RequestHandlers.Announcements
{

    public class GetAnnouncementsQueryHandler : IRequestHandler<GetAnnouncementsQuery, GetAnnouncementsResponse>
    {
        private readonly STTBContext _context;

        public GetAnnouncementsQueryHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<GetAnnouncementsResponse> Handle(GetAnnouncementsQuery request, CancellationToken cancellationToken)
        {
            var query = _context.Announcements.OrderByDescending(a => a.CreatedAt);

            if (request.Limit.HasValue)
            {
                var limitedData = await query.Take(request.Limit.Value).ToListAsync(cancellationToken);
                return MapResponse(limitedData);
            }

            var allData = await query.ToListAsync(cancellationToken);
            return MapResponse(allData);
        }

        private GetAnnouncementsResponse MapResponse(List<ModelAnnouncement> data)
        {
            return new GetAnnouncementsResponse
            {
                Success = true,
                Data = data.Select(a => new AnnouncementDto
                {
                    Id = a.Id,
                    Title = a.Title,
                    Description = a.Description,
                    IsUrgent = a.IsUrgent,
                    AttachmentPath = a.AttachmentPath,
                    CreatedAt = a.CreatedAt
                }).ToList()
            };
        }
    }
}
