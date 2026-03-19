using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Announcements;
using RevampWebSTTB.Contracts.Responses;
using RevampWebSTTB.Entities.Data;
using System.Threading;
using System.Threading.Tasks;

namespace RevampWebSTTB.Commons.RequestHandlers.Announcements
{
    public class DeleteAnnouncementCommandHandler : IRequestHandler<DeleteAnnouncementCommand, StandardResponse>
    {
        private readonly STTBContext _context;

        public DeleteAnnouncementCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<StandardResponse> Handle(DeleteAnnouncementCommand request, CancellationToken cancellationToken)
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

            _context.Announcements.Remove(announcement);
            await _context.SaveChangesAsync(cancellationToken);

            return new StandardResponse
            {
                Success = true,
                Message = "Announcement deleted successfully.",
                Data = new { announcement.Id, announcement.Title }
            };
        }
    }
}
