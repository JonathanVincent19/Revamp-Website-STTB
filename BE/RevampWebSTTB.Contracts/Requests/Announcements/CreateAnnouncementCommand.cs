using MediatR;
using RevampWebSTTB.Contracts.Responses;

namespace RevampWebSTTB.Contracts.Requests.Announcements
{
    public record CreateAnnouncementCommand : IRequest<StandardResponse>
    {
        public string Title { get; init; } = string.Empty;
        public string? Description { get; init; }
        public string? AttachmentPath { get; init; }
        public bool IsUrgent { get; init; } = false;
    }
}
