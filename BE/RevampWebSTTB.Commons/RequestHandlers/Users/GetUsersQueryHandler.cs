using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Users;
using RevampWebSTTB.Contracts.Responses;
using RevampWebSTTB.Contracts.Responses.Users;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Users
{
    public class GetUsersQueryHandler : IRequestHandler<GetUsersQuery, GetUsersResponse>
    {
        private readonly STTBContext _context;

        public GetUsersQueryHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<GetUsersResponse> Handle(GetUsersQuery request, CancellationToken cancellationToken)
        {
            var users = await _context.Users
                .OrderBy(u => u.Name)
                .ToListAsync(cancellationToken);

            return new GetUsersResponse
            {
                Success = true,
                Data = users.Select(u => new AdminUserDto
                {
                    Id = u.Id,
                    Name = u.Name,
                    Email = u.Email,
                    IsAdmin = u.IsAdmin,
                    CreatedAt = u.CreatedAt
                }).ToList()
            };
        }
    }
}
