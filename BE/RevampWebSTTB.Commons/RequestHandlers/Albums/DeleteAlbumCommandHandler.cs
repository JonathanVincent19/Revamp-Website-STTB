using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Albums;
using RevampWebSTTB.Contracts.Responses.Albums;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Albums
{
    public class DeleteAlbumCommandHandler : IRequestHandler<DeleteAlbumCommand, DeleteAlbumResponse>
    {
        private readonly STTBContext _context;

        public DeleteAlbumCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<DeleteAlbumResponse> Handle(DeleteAlbumCommand request, CancellationToken cancellationToken)
        {
            var albumEntity = await _context.GalleryAlbums.FirstOrDefaultAsync(a => a.Id == request.Id, cancellationToken);

            if (albumEntity == null)
            {
                return new DeleteAlbumResponse
                {
                    Success = false,
                    Message = "Album not found."
                };
            }

            _context.GalleryAlbums.Remove(albumEntity);
            await _context.SaveChangesAsync(cancellationToken);

            return new DeleteAlbumResponse
            {
                Success = true,
                Message = "Album deleted successfully."
            };
        }
    }
}
