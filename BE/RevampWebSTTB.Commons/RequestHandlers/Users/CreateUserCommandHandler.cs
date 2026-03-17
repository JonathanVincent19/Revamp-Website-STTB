using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Users;
using RevampWebSTTB.Contracts.Responses;
using RevampWebSTTB.Entities.Data;
using RevampWebSTTB.Entities.Models;

namespace RevampWebSTTB.Commons.RequestHandlers.Users
{
    public class CreateUserCommandHandler : IRequestHandler<CreateUserCommand, StandardResponse>
    {
        private readonly STTBContext _context;

        public CreateUserCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<StandardResponse> Handle(CreateUserCommand request, CancellationToken cancellationToken)
        {
            var emailExists = await _context.Users.AnyAsync(u => u.Email == request.Email, cancellationToken);

            if (emailExists)
            {
                return new StandardResponse
                {
                    Success = false,
                    Message = "A user with this email already exists."
                };
            }

            var newUser = new User
            {
                Name = request.Name,
                Email = request.Email,
                Password = BCrypt.Net.BCrypt.HashPassword(request.Password),
                IsAdmin = request.IsAdmin,
                CreatedAt = DateTime.UtcNow
            };

            _context.Users.Add(newUser);
            await _context.SaveChangesAsync(cancellationToken);

            return new StandardResponse
            {
                Success = true,
                Message = "User created successfully."
            };
        }
    }
}
