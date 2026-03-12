using System;
using MediatR;
using RevampWebSTTB.Contracts.Responses.Media;

namespace RevampWebSTTB.Contracts.Requests.Media
{
    public record UpdateMediaCommand : IRequest<UpdateMediaResponse>
    {
        public int Id { get; init; }
        public int? AlbumId { get; init; }
        public string FilePath { get; init; } = string.Empty;
        public string? Caption { get; init; }
        public string MediaType { get; init; } = string.Empty;
    }
}
