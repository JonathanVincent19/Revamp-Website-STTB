using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using RevampWebSTTB.Contracts.Requests.HR;
using RevampWebSTTB.Contracts.Responses;
using RevampWebSTTB.Entities.Data;
using RevampWebSTTB.Entities.Models;

namespace RevampWebSTTB.Commons.RequestHandlers.HR
{
    public class CreateStaffCommandHandler : IRequestHandler<CreateStaffCommand, StandardResponse>
    {
        private readonly STTBContext _context;

        public CreateStaffCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<StandardResponse> Handle(CreateStaffCommand request, CancellationToken cancellationToken)
        {
            var staff = new Staff
            {
                Name = request.Name,
                Photo = request.Photo,
                Position = request.Position,
                Email = request.Email,
                CreatedAt = DateTime.UtcNow
            };

            _context.Staff.Add(staff);
            await _context.SaveChangesAsync(cancellationToken);

            return new StandardResponse
            {
                Success = true,
                Message = "Staff member added successfully."
            };
        }
    }
}
