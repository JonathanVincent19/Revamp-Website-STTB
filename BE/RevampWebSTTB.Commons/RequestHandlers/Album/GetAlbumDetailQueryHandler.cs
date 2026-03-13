using MediatR;
using RevampWebSTTB.Entities.Data;
using RevampWebSTTB.Contracts.Responses.Albums;
using RevampWebSTTB.Contracts.Requests.Albums;
using Microsoft.EntityFrameworkCore;

namespace RevampWebSTTB.Commons.RequestHandlers.Album
{
    public class GetAlbumDetailQueryHandler : IRequestHandler<GetAlbumDetailQuery, GetAlbumDetailResponse>
    {
        private readonly STTBContext _context;

        public GetAlbumDetailQueryHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<GetAlbumDetailResponse> Handle(GetAlbumDetailQuery request, CancellationToken cancellationToken)
        {
            var album = await _context.GalleryAlbums
                .Include(a => a.Media) // Assuming navigation property
                .FirstOrDefaultAsync(a => a.Id == request.Id, cancellationToken);

            if (album == null)
            {
                return new GetAlbumDetailResponse
                {
                    Success = false,
                    Data = null // This overrides the default empty object
                };
            }

            return new GetAlbumDetailResponse
            {
                Success = true,
                Data = new AlbumDetailDto
                {
                    AlbumTitle = album.Title,
                    Media = album.Media.Select(m => new MediaDto
                    {
                        Id = m.Id,
                        FilePath = m.FilePath,
                        Caption = m.Caption
                    }).ToList()
                }
            };
        }
    }
}
