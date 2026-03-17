using System.Threading;
using System.Threading.Tasks;
using MediatR;
using RevampWebSTTB.Contracts.Requests.Users;
using RevampWebSTTB.Contracts.Responses;

namespace RevampWebSTTB.Commons.RequestHandlers.Users
{
    public class LogoutUserCommandHandler : IRequestHandler<LogoutUserCommand, StandardResponse>
    {
        public Task<StandardResponse> Handle(LogoutUserCommand request, CancellationToken cancellationToken)
        {
            // In a simple JWT setup, logout is handled client-side by deleting the token.
            // If blacklisting is needed, this logic would update a Redis cache or DB here.
            return Task.FromResult(new StandardResponse
            {
                Success = true,
                Message = "Logged out successfully."
            });
        }
    }
}
