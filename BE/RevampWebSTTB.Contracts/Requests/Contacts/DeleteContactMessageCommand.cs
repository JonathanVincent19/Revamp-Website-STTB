using MediatR;
using RevampWebSTTB.Contracts.Responses;

namespace RevampWebSTTB.Contracts.Requests.Contacts
{
    public record DeleteContactMessageCommand : IRequest<StandardResponse>
    {
        public int Id { get; init; }
    }
}
