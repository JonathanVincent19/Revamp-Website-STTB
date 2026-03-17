using MediatR;
using RevampWebSTTB.Contracts.Responses;

namespace RevampWebSTTB.Contracts.Requests.Contacts
{
    public record MarkContactReadCommand : IRequest<StandardResponse>
    {
        public int Id { get; init; }
        public bool IsRead { get; init; }
    }
}
