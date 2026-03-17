using MediatR;
using RevampWebSTTB.Contracts.Requests.Announcements;
using RevampWebSTTB.Contracts.Responses;
using RevampWebSTTB.Entities.Data;
using RevampWebSTTB.Entities.Models;
using System.Threading;
using System.Threading.Tasks;

namespace RevampWebSTTB.Commons.RequestHandlers.Announcements
{
    public class CreateAnnouncementCommandHandler : IRequestHandler<CreateAnnouncementCommand, StandardResponse>
    {
        private readonly STTBContext _context;

        public CreateAnnouncementCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<StandardResponse> Handle(CreateAnnouncementCommand request, CancellationToken cancellationToken)
        {
            var announcement = new Announcement
            {
                Title = request.Title,
                Description = request.Description,
                AttachmentPath = request.AttachmentPath,
                IsUrgent = request.IsUrgent,
                CreatedAt = System.DateTime.UtcNow
            };

            await _context.Announcements.AddAsync(announcement, cancellationToken);
            await _context.SaveChangesAsync(cancellationToken);

            return new StandardResponse
            {
                Success = true,
                Message = "Announcement created successfully.",
                Data = new { announcement.Id, announcement.Title }
            };
        }
    }
}
