using MediatR;
using RevampWebSTTB.Contracts.Responses;

namespace RevampWebSTTB.Contracts.Requests.Users
{
    public record DeleteUserCommand : IRequest<StandardResponse>
    {
        public int Id { get; init; }
    }
}
