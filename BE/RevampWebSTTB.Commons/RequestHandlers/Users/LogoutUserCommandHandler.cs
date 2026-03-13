using System.Threading;
using System.Threading.Tasks;
using MediatR;
using RevampWebSTTB.Contracts.Requests.Users;
using RevampWebSTTB.Contracts.Responses.Users;

namespace RevampWebSTTB.Commons.RequestHandlers.Users
{
    public class LogoutUserCommandHandler : IRequestHandler<LogoutUserCommand, LogoutUserResponse>
    {
        public Task<LogoutUserResponse> Handle(LogoutUserCommand request, CancellationToken cancellationToken)
        {
            // In a simple JWT setup, logout is handled client-side by deleting the token.
            // If blacklisting is needed, this logic would update a Redis cache or DB here.
            return Task.FromResult(new LogoutUserResponse
            {
                Success = true,
                Message = "Logged out successfully."
            });
        }
    }
}
