using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Contacts;
using RevampWebSTTB.Contracts.Responses.Contacts;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Contacts
{
    public class GetContactMessagesQueryHandler : IRequestHandler<GetContactMessagesQuery, GetContactMessagesResponse>
    {
        private readonly STTBContext _context;

        public GetContactMessagesQueryHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<GetContactMessagesResponse> Handle(GetContactMessagesQuery request, CancellationToken cancellationToken)
        {
            var query = _context.ContactMessages.AsQueryable();

            // Optional filter by read status
            if (request.IsRead.HasValue)
            {
                query = query.Where(c => c.IsRead == request.IsRead.Value);
            }

            var totalCount = await query.CountAsync(cancellationToken);

            var messages = await query
                .OrderByDescending(c => c.CreatedAt)
                .Skip((request.Page - 1) * request.PageSize)
                .Take(request.PageSize)
                .Select(c => new ContactMessageDto
                {
                    Id = c.Id,
                    Name = c.Name,
                    Email = c.Email,
                    PhoneNumber = c.PhoneNumber,
                    Subject = c.Subject,
                    Message = c.Message,
                    IsRead = c.IsRead,
                    CreatedAt = c.CreatedAt
                })
                .ToListAsync(cancellationToken);

            return new GetContactMessagesResponse
            {
                Success = true,
                Data = messages,
                TotalCount = totalCount
            };
        }
    }
}
