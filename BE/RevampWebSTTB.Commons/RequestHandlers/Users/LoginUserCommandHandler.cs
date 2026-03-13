using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Users;
using RevampWebSTTB.Contracts.Responses.Users;
using RevampWebSTTB.Entities.Data;
using RevampWebSTTB.Commons.Services;

namespace RevampWebSTTB.Commons.RequestHandlers.Users
{
    public class LoginUserCommandHandler : IRequestHandler<LoginUserCommand, LoginUserResponse>
    {
        private readonly STTBContext _context;
        private readonly ITokenService _tokenService;

        public LoginUserCommandHandler(STTBContext context, ITokenService tokenService)
        {
            _context = context;
            _tokenService = tokenService;
        }

        public async Task<LoginUserResponse> Handle(LoginUserCommand request, CancellationToken cancellationToken)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == request.Email, cancellationToken);

            if (user == null || !BCrypt.Net.BCrypt.Verify(request.Password, user.Password))
            {
                return new LoginUserResponse
                {
                    Success = false,
                    Message = "Invalid email or password."
                };
            }

            var token = _tokenService.GenerateToken(user);

            return new LoginUserResponse
            {
                Success = true,
                Message = "Login successful.",
                Token = token,
                User = new UserDto
                {
                    Id = user.Id,
                    Name = user.Name,
                    Email = user.Email,
                    IsAdmin = user.IsAdmin
                }
            };
        }
    }
}
