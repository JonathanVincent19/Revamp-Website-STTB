using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Users;
using RevampWebSTTB.Contracts.Responses;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Users
{
    public class UpdateUserCommandHandler : IRequestHandler<UpdateUserCommand, StandardResponse>
    {
        private readonly STTBContext _context;

        public UpdateUserCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<StandardResponse> Handle(UpdateUserCommand request, CancellationToken cancellationToken)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == request.Id, cancellationToken);

            if (user == null)
            {
                return new StandardResponse
                {
                    Success = false,
                    Message = "User not found."
                };
            }

            var emailTaken = await _context.Users.AnyAsync(u => u.Email == request.Email && u.Id != request.Id, cancellationToken);

            if (emailTaken)
            {
                return new StandardResponse
                {
                    Success = false,
                    Message = "This email is already used by another user."
                };
            }

            user.Name = request.Name;
            user.Email = request.Email;
            user.IsAdmin = request.IsAdmin;

            await _context.SaveChangesAsync(cancellationToken);

            return new StandardResponse
            {
                Success = true,
                Message = "User updated successfully."
            };
        }
    }
}
