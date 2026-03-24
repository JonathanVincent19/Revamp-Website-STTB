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
                .FirstOrDefaultAsync(a => a.Id == request.Id, cancellationToken);

            if (album == null)
            {
                return new GetAlbumDetailResponse
                {
                    Success = false,
                    Data = null 
                };
            }

            return new GetAlbumDetailResponse
            {
                Success = true,
                Data = new AlbumDetailDto
                {
                    Id = album.Id,
                    Title = album.Title,
                    Description = album.Description,
                    Category = album.Category,
                    Type = album.Type,
                    CoverImage = album.CoverImage,
                    Url = album.Url,
                    EventDate = album.EventDate
                }
            };
        }
    }
}
