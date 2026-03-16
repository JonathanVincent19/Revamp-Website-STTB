using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Contacts;
using RevampWebSTTB.Contracts.Responses;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Contacts
{
    public class MarkContactReadCommandHandler : IRequestHandler<MarkContactReadCommand, StandardResponse>
    {
        private readonly STTBContext _context;

        public MarkContactReadCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<StandardResponse> Handle(MarkContactReadCommand request, CancellationToken cancellationToken)
        {
            var message = await _context.ContactMessages.FirstOrDefaultAsync(c => c.Id == request.Id, cancellationToken);

            if (message == null)
            {
                return new StandardResponse
                {
                    Success = false,
                    Message = "Contact message not found."
                };
            }

            message.IsRead = request.IsRead;
            await _context.SaveChangesAsync(cancellationToken);

            return new StandardResponse
            {
                Success = true,
                Message = "Contact message updated successfully."
            };
        }
    }
}
