using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Media;
using RevampWebSTTB.Contracts.Responses.Media;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Media
{
    public class UpdateMediaCommandHandler : IRequestHandler<UpdateMediaCommand, UpdateMediaResponse>
    {
        private readonly STTBContext _context;

        public UpdateMediaCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<UpdateMediaResponse> Handle(UpdateMediaCommand request, CancellationToken cancellationToken)
        {
            var mediaEntity = await _context.GalleryMedia.FirstOrDefaultAsync(m => m.Id == request.Id, cancellationToken);

            if (mediaEntity == null)
            {
                return new UpdateMediaResponse
                {
                    Success = false,
                    Message = "Media not found."
                };
            }

            mediaEntity.AlbumId = request.AlbumId;
            mediaEntity.FilePath = request.FilePath;
            mediaEntity.Caption = request.Caption;
            
            if (!string.IsNullOrEmpty(request.MediaType)) {
                mediaEntity.MediaType = request.MediaType;
            }

            await _context.SaveChangesAsync(cancellationToken);

            return new UpdateMediaResponse
            {
                Success = true,
                Message = "Media updated successfully."
            };
        }
    }
}
