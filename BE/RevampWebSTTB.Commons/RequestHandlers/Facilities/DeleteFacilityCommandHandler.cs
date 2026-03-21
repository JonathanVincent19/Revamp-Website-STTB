using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Facilities;
using RevampWebSTTB.Contracts.Responses;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Facilities
{
    public class DeleteFacilityCommandHandler : IRequestHandler<DeleteFacilityCommand, StandardResponse>
    {
        private readonly STTBContext _context;

        public DeleteFacilityCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<StandardResponse> Handle(DeleteFacilityCommand request, CancellationToken cancellationToken)
        {
            var facility = await _context.Facilities.FirstOrDefaultAsync(f => f.Id == request.Id, cancellationToken);

            if (facility == null)
            {
                return new StandardResponse
                {
                    Success = false,
                    Message = "Facility not found."
                };
            }

            _context.Facilities.Remove(facility);
            await _context.SaveChangesAsync(cancellationToken);

            return new StandardResponse
            {
                Success = true,
                Message = "Facility deleted successfully."
            };
        }
    }
}
