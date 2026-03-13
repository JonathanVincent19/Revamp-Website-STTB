using MediatR;
using RevampWebSTTB.Contracts.Responses.Contacts;

namespace RevampWebSTTB.Contracts.Requests.Contacts
{
    public record GetContactMessagesQuery : IRequest<GetContactMessagesResponse>;
}
