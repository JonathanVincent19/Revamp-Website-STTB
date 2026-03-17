using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Announcements;
using RevampWebSTTB.Contracts.Responses.Announcements;
using RevampWebSTTB.Entities.Data;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace RevampWebSTTB.Commons.RequestHandlers.Announcements
{
    public class GetAdminAnnouncementsQueryHandler : IRequestHandler<GetAdminAnnouncementsQuery, GetAdminAnnouncementsResponse>
    {
        private readonly STTBContext _context;

        public GetAdminAnnouncementsQueryHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<GetAdminAnnouncementsResponse> Handle(GetAdminAnnouncementsQuery request, CancellationToken cancellationToken)
        {
            var query = _context.Announcements.AsQueryable();

            if (!string.IsNullOrEmpty(request.SearchToken))
            {
                var lowerSearch = request.SearchToken.ToLower();
                query = query.Where(a => 
                    a.Title.ToLower().Contains(lowerSearch) || 
                    (a.Description != null && a.Description.ToLower().Contains(lowerSearch)));
            }

            var totalCount = await query.CountAsync(cancellationToken);
            var skip = (request.Page - 1) * request.PageSize;

            var items = await query
                .OrderByDescending(x => x.CreatedAt)
                .Skip(skip)
                .Take(request.PageSize)
                .ToListAsync(cancellationToken);

            var dtos = items.Select(x => new AdminAnnouncementDto
            {
                Id = x.Id,
                Title = x.Title,
                Description = x.Description,
                AttachmentPath = x.AttachmentPath,
                IsUrgent = x.IsUrgent,
                CreatedAt = x.CreatedAt
            }).ToList();

            return new GetAdminAnnouncementsResponse
            {
                Success = true,
                Message = "Announcements fetched successfully.",
                Data = dtos,
                TotalCount = totalCount,
                Page = request.Page,
                PageSize = request.PageSize
            };
        }
    }
}
