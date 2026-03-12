using MediatR;
using RevampWebSTTB.Contracts.Responses.Announcements;

namespace RevampWebSTTB.Contracts.Requests.Announcements
{
    public record GetAnnouncementsQuery : IRequest<GetAnnouncementsResponse>
    {
        public int? Limit { get; init; }
    }
}
