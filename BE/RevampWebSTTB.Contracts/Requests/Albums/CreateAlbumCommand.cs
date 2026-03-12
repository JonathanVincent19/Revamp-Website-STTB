using System;
using MediatR;
using RevampWebSTTB.Contracts.Responses.Albums;

namespace RevampWebSTTB.Contracts.Requests.Albums
{
    public record CreateAlbumCommand : IRequest<CreateAlbumResponse>
    {
        public string Title { get; init; } = string.Empty;
        public string? Description { get; init; }
        public string? CoverImage { get; init; }
        public DateTime? EventDate { get; init; }
    }
}
