using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.HR;
using RevampWebSTTB.Contracts.Responses;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.HR
{
    public class UpdateStaffCommandHandler : IRequestHandler<UpdateStaffCommand, StandardResponse>
    {
        private readonly STTBContext _context;

        public UpdateStaffCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<StandardResponse> Handle(UpdateStaffCommand request, CancellationToken cancellationToken)
        {
            var staff = await _context.Staff.FirstOrDefaultAsync(s => s.Id == request.Id, cancellationToken);

            if (staff == null)
            {
                return new StandardResponse
                {
                    Success = false,
                    Message = "Staff member not found."
                };
            }

            staff.Name = request.Name;
            staff.Photo = request.Photo;
            staff.Position = request.Position;
            staff.Email = request.Email;

            await _context.SaveChangesAsync(cancellationToken);

            return new StandardResponse
            {
                Success = true,
                Message = "Staff member updated successfully."
            };
        }
    }
}
