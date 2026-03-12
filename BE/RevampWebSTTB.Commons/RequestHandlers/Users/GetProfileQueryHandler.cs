using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Users;
using RevampWebSTTB.Contracts.Responses.Users;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Users
{
    public class GetProfileQueryHandler : IRequestHandler<GetProfileQuery, GetProfileResponse>
    {
        private readonly STTBContext _context;

        public GetProfileQueryHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<GetProfileResponse> Handle(GetProfileQuery request, CancellationToken cancellationToken)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == request.UserId, cancellationToken);
            
            if (user == null)
            {
                return new GetProfileResponse
                {
                    Success = false,
                    Message = "User not found."
                };
            }

            return new GetProfileResponse
            {
                Success = true,
                Message = "User profile retrieved successfully.",
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
