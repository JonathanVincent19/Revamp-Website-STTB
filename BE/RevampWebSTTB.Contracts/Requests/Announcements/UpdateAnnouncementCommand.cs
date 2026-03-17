using MediatR;
using RevampWebSTTB.Contracts.Responses;

namespace RevampWebSTTB.Contracts.Requests.Announcements
{
    public record UpdateAnnouncementCommand : IRequest<StandardResponse>
    {
        public int Id { get; init; }
        public string Title { get; init; } = string.Empty;
        public string? Description { get; init; }
        public string? AttachmentPath { get; init; }
        public bool IsUrgent { get; init; } = false;
    }
}
