using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Events;
using RevampWebSTTB.Contracts.Responses;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Events
{
    public class DeleteEventCommandHandler : IRequestHandler<DeleteEventCommand, StandardResponse>
    {
        private readonly STTBContext _context;

        public DeleteEventCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<StandardResponse> Handle(DeleteEventCommand request, CancellationToken cancellationToken)
        {
            var eventEntity = await _context.Events.FirstOrDefaultAsync(e => e.Id == request.Id, cancellationToken);

            if (eventEntity == null)
            {
                return new StandardResponse
                {
                    Success = false,
                    Message = "Event not found."
                };
            }

            _context.Events.Remove(eventEntity);
            await _context.SaveChangesAsync(cancellationToken);

            return new StandardResponse
            {
                Success = true,
                Message = "Event deleted successfully."
            };
        }
    }
}
