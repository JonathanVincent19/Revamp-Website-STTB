using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Media;
using RevampWebSTTB.Contracts.Responses;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Media
{
    public class DeleteMediaCommandHandler : IRequestHandler<DeleteMediaCommand, StandardResponse>
    {
        private readonly STTBContext _context;

        public DeleteMediaCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<StandardResponse> Handle(DeleteMediaCommand request, CancellationToken cancellationToken)
        {
            var mediaEntity = await _context.GalleryMedia.FirstOrDefaultAsync(m => m.Id == request.Id, cancellationToken);

            if (mediaEntity == null)
            {
                return new StandardResponse
                {
                    Success = false,
                    Message = "Media not found."
                };
            }

            _context.GalleryMedia.Remove(mediaEntity);
            await _context.SaveChangesAsync(cancellationToken);

            return new StandardResponse
            {
                Success = true,
                Message = "Media deleted successfully."
            };
        }
    }
}
