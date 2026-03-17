using MediatR;
using RevampWebSTTB.Contracts.Responses;

namespace RevampWebSTTB.Contracts.Requests.Users
{
    public record UpdateUserCommand : IRequest<StandardResponse>
    {
        public int Id { get; init; }
        public string Name { get; init; } = string.Empty;
        public string Email { get; init; } = string.Empty;
        public bool IsAdmin { get; init; } = false;
    }
}
