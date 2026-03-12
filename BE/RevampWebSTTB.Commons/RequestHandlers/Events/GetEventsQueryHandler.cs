using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Events;
using RevampWebSTTB.Contracts.Responses.Events;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Events
{
    public class GetEventsQueryHandler : IRequestHandler<GetEventsQuery, GetEventsResponse>
    {
        private readonly STTBContext _context;

        public GetEventsQueryHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<GetEventsResponse> Handle(GetEventsQuery request, CancellationToken cancellationToken)
        {
            var query = _context.Events.AsQueryable();

            // Filter status logic (simple example)
            if (!string.IsNullOrEmpty(request.Status))
            {
                var today = DateTime.Today;
                if (request.Status.ToLower() == "upcoming")
                {
                    query = query.Where(e => e.EventDate >= today);
                }
                else if (request.Status.ToLower() == "past")
                {
                    query = query.Where(e => e.EventDate < today);
                }
            }

            if (request.Limit.HasValue)
            {
                query = query.Take(request.Limit.Value);
            }

            var events = await query.OrderByDescending(e => e.EventDate).ToListAsync(cancellationToken);

            return new GetEventsResponse
            {
                Success = true,
                Data = events.Select(e => new EventDto
                {
                    Id = e.Id,
                    Title = e.Title,
                    Location = e.Location ?? string.Empty,
                    EventDate = e.EventDate,
                    StartTime = e.StartTime?.ToString(@"hh\:mm\:ss") ?? string.Empty,
                    Image = e.Image,
                    Description = e.Description ?? string.Empty
                }).ToList()
            };
        }
    }
}
