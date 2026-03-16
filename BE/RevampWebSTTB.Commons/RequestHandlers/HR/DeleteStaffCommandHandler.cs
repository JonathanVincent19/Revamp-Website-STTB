using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.HR;
using RevampWebSTTB.Contracts.Responses;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.HR
{
    public class DeleteStaffCommandHandler : IRequestHandler<DeleteStaffCommand, StandardResponse>
    {
        private readonly STTBContext _context;

        public DeleteStaffCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<StandardResponse> Handle(DeleteStaffCommand request, CancellationToken cancellationToken)
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

            _context.Staff.Remove(staff);
            await _context.SaveChangesAsync(cancellationToken);

            return new StandardResponse
            {
                Success = true,
                Message = "Staff member deleted successfully."
            };
        }
    }
}
