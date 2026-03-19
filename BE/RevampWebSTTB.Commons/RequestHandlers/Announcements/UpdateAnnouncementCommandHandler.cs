using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Announcements;
using RevampWebSTTB.Contracts.Responses;
using RevampWebSTTB.Entities.Data;
using System.Threading;
using System.Threading.Tasks;

namespace RevampWebSTTB.Commons.RequestHandlers.Announcements
{
    public class UpdateAnnouncementCommandHandler : IRequestHandler<UpdateAnnouncementCommand, StandardResponse>
    {
        private readonly STTBContext _context;

        public UpdateAnnouncementCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<StandardResponse> Handle(UpdateAnnouncementCommand request, CancellationToken cancellationToken)
        {
            var announcement = await _context.Announcements.FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

            if (announcement == null)
            {
                return new StandardResponse
                {
                    Success = false,
                    Message = "Announcement not found."
                };
            }

            announcement.Title = request.Title;
            announcement.Description = request.Description;
            announcement.AttachmentPath = request.AttachmentPath;
            announcement.IsUrgent = request.IsUrgent;

            _context.Announcements.Update(announcement);
            await _context.SaveChangesAsync(cancellationToken);

            return new StandardResponse
            {
                Success = true,
                Message = "Announcement updated successfully.",
                Data = new { announcement.Id, announcement.Title }
            };
        }
    }
}
