using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Dto.Contacts;
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
            var messages = await _context.ContactMessages
                .OrderByDescending(c => c.CreatedAt)
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
                Messages = messages
            };
        }
    }
}
