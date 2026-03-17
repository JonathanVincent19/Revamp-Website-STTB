using MediatR;
using RevampWebSTTB.Contracts.Responses;

namespace RevampWebSTTB.Contracts.Requests.Users
{
    public record LogoutUserCommand : IRequest<StandardResponse>
    {
    }
}
