using MediatR;
using RevampWebSTTB.Contracts.Responses.Users;

namespace RevampWebSTTB.Contracts.Requests.Users
{
    public record LoginUserCommand : IRequest<LoginUserResponse>
    {
        public string Email { get; init; } = string.Empty;
        public string Password { get; init; } = string.Empty;
    }
}
