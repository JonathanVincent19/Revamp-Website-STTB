using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using RevampWebSTTB.Contracts.Requests.Media;
using RevampWebSTTB.Contracts.Responses.Media;
using RevampWebSTTB.Entities.Data;
using RevampWebSTTB.Entities.Models;

namespace RevampWebSTTB.Commons.RequestHandlers.Media
{
    public class CreateMediaCommandHandler : IRequestHandler<CreateMediaCommand, CreateMediaResponse>
    {
        private readonly STTBContext _context;

        public CreateMediaCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<CreateMediaResponse> Handle(CreateMediaCommand request, CancellationToken cancellationToken)
        {
            var newMedia = new GalleryMedia
            {
                AlbumId = request.AlbumId,
                FilePath = request.FilePath,
                Caption = request.Caption,
                MediaType = string.IsNullOrEmpty(request.MediaType) ? "image" : request.MediaType,
                CreatedAt = DateTime.UtcNow
            };

            _context.GalleryMedia.Add(newMedia);
            await _context.SaveChangesAsync(cancellationToken);

            return new CreateMediaResponse
            {
                Success = true,
                Message = "Media created successfully.",
                MediaId = newMedia.Id
            };
        }
    }
}
