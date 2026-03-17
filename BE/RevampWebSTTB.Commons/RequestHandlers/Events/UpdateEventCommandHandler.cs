using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Events;
using RevampWebSTTB.Contracts.Responses;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Events
{
    public class UpdateEventCommandHandler : IRequestHandler<UpdateEventCommand, StandardResponse>
    {
        private readonly STTBContext _context;

        public UpdateEventCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<StandardResponse> Handle(UpdateEventCommand request, CancellationToken cancellationToken)
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

            eventEntity.Title = request.Title;
            eventEntity.Description = request.Description;
            eventEntity.Location = request.Location;
            eventEntity.EventDate = request.EventDate;
            eventEntity.StartTime = request.StartTime;
            eventEntity.EndTime = request.EndTime;
            eventEntity.Image = request.Image;

            await _context.SaveChangesAsync(cancellationToken);

            return new StandardResponse
            {
                Success = true,
                Message = "Event updated successfully."
            };
        }
    }
}
