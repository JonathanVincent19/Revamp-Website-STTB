using MediatR;
using RevampWebSTTB.Contracts.Responses.Contacts;

namespace RevampWebSTTB.Contracts.Requests.Contacts
{
    public record GetContactMessagesQuery : IRequest<GetContactMessagesResponse>
    {
        public int Page { get; init; } = 1;
        public int PageSize { get; init; } = 10;
        public bool? IsRead { get; init; }
    }
}
