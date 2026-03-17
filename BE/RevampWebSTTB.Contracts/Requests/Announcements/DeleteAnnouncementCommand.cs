using MediatR;
using RevampWebSTTB.Contracts.Responses;

namespace RevampWebSTTB.Contracts.Requests.Announcements
{
    public record DeleteAnnouncementCommand : IRequest<StandardResponse>
    {
        public int Id { get; init; }
    }
}
