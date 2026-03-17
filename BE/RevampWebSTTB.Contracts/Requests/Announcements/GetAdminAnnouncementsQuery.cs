using MediatR;
using RevampWebSTTB.Contracts.Responses.Announcements;

namespace RevampWebSTTB.Contracts.Requests.Announcements
{
    public record GetAdminAnnouncementsQuery : IRequest<GetAdminAnnouncementsResponse>
    {
        public int Page { get; init; } = 1;
        public int PageSize { get; init; } = 10;
        public string? SearchToken { get; init; }
    }
}
