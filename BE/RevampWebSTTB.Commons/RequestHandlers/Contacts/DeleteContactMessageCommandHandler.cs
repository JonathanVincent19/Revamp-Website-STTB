using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Contacts;
using RevampWebSTTB.Contracts.Responses;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Contacts
{
    public class DeleteContactMessageCommandHandler : IRequestHandler<DeleteContactMessageCommand, StandardResponse>
    {
        private readonly STTBContext _context;

        public DeleteContactMessageCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<StandardResponse> Handle(DeleteContactMessageCommand request, CancellationToken cancellationToken)
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

            _context.ContactMessages.Remove(message);
            await _context.SaveChangesAsync(cancellationToken);

            return new StandardResponse
            {
                Success = true,
                Message = "Contact message deleted successfully."
            };
        }
    }
}
