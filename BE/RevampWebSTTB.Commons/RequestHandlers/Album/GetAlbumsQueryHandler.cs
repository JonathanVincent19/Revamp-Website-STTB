using System;
using System.Collections.Generic;
using System.Text;
using MediatR;
using RevampWebSTTB.Entities.Data;
using RevampWebSTTB.Contracts.Requests.Albums;
using RevampWebSTTB.Contracts.Responses.Albums;
using Microsoft.EntityFrameworkCore;

namespace RevampWebSTTB.Commons.RequestHandlers.Album
{
    public class GetAlbumsQueryHandler : IRequestHandler<GetAlbumsQuery, GetAlbumsResponse>
    {
        private readonly STTBContext _context;

        public GetAlbumsQueryHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<GetAlbumsResponse> Handle(GetAlbumsQuery request, CancellationToken cancellationToken)
        {
            var albums = await _context.GalleryAlbums
                .OrderByDescending(a => a.EventDate)
                .ToListAsync(cancellationToken);

            return new GetAlbumsResponse
            {
                Success = true,
                Data = albums.Select(a => new AlbumDto
                {
                    Id = a.Id,
                    Title = a.Title,
                    CoverImage = a.CoverImage,
                    EventDate = a.EventDate
                }).ToList()
            };
        }
    }
}
