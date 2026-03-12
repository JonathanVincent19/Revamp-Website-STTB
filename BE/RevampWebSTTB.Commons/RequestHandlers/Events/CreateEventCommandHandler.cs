using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using RevampWebSTTB.Contracts.Requests.Events;
using RevampWebSTTB.Contracts.Responses.Events;
using RevampWebSTTB.Entities.Data;
using RevampWebSTTB.Entities.Models;

namespace RevampWebSTTB.Commons.RequestHandlers.Events
{
    public class CreateEventCommandHandler : IRequestHandler<CreateEventCommand, CreateEventResponse>
    {
        private readonly STTBContext _context;

        public CreateEventCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<CreateEventResponse> Handle(CreateEventCommand request, CancellationToken cancellationToken)
        {
            var newEvent = new Event
            {
                Title = request.Title,
                Description = request.Description,
                Location = request.Location,
                EventDate = request.EventDate,
                StartTime = request.StartTime,
                EndTime = request.EndTime,
                Image = request.Image,
                CreatedAt = DateTime.UtcNow
            };

            _context.Events.Add(newEvent);
            await _context.SaveChangesAsync(cancellationToken);

            return new CreateEventResponse
            {
                Success = true,
                Message = "Event created successfully.",
                EventId = newEvent.Id
            };
        }
    }
}
