using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using RevampWebSTTB.Contracts.Requests.Albums;
using RevampWebSTTB.Contracts.Responses.Albums;
using RevampWebSTTB.Entities.Data;
using RevampWebSTTB.Entities.Models;

namespace RevampWebSTTB.Commons.RequestHandlers.Albums
{
    public class CreateAlbumCommandHandler : IRequestHandler<CreateAlbumCommand, CreateAlbumResponse>
    {
        private readonly STTBContext _context;

        public CreateAlbumCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<CreateAlbumResponse> Handle(CreateAlbumCommand request, CancellationToken cancellationToken)
        {
            var newAlbum = new GalleryAlbum
            {
                Title = request.Title,
                Description = request.Description,
                CoverImage = request.CoverImage,
                EventDate = request.EventDate,
                CreatedAt = DateTime.UtcNow
            };

            _context.GalleryAlbums.Add(newAlbum);
            await _context.SaveChangesAsync(cancellationToken);

            return new CreateAlbumResponse
            {
                Success = true,
                Message = "Album created successfully.",
                AlbumId = newAlbum.Id
            };
        }
    }
}
