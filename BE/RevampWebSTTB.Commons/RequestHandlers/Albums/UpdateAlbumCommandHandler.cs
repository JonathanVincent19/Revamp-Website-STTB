using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Albums;
using RevampWebSTTB.Contracts.Responses.Albums;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Albums
{
    public class UpdateAlbumCommandHandler : IRequestHandler<UpdateAlbumCommand, UpdateAlbumResponse>
    {
        private readonly STTBContext _context;

        public UpdateAlbumCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<UpdateAlbumResponse> Handle(UpdateAlbumCommand request, CancellationToken cancellationToken)
        {
            var albumEntity = await _context.GalleryAlbums.FirstOrDefaultAsync(a => a.Id == request.Id, cancellationToken);

            if (albumEntity == null)
            {
                return new UpdateAlbumResponse
                {
                    Success = false,
                    Message = "Album not found."
                };
            }

            albumEntity.Title = request.Title;
            albumEntity.Description = request.Description;
            albumEntity.CoverImage = request.CoverImage;
            albumEntity.EventDate = request.EventDate;

            await _context.SaveChangesAsync(cancellationToken);

            return new UpdateAlbumResponse
            {
                Success = true,
                Message = "Album updated successfully."
            };
        }
    }
}
