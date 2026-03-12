using MediatR;
using RevampWebSTTB.Contracts.Responses.Users;

namespace RevampWebSTTB.Contracts.Requests.Users
{
    public record LogoutUserCommand : IRequest<LogoutUserResponse>
    {
    }
}
