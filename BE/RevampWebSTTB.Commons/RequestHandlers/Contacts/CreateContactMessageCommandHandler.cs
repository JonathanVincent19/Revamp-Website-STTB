using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using RevampWebSTTB.Contracts.Requests.Contacts;
using RevampWebSTTB.Contracts.Responses.Contacts;
using RevampWebSTTB.Entities.Data;
using RevampWebSTTB.Entities.Models;

namespace RevampWebSTTB.Commons.RequestHandlers.Contacts
{
    public class CreateContactMessageCommandHandler : IRequestHandler<CreateContactMessageCommand, CreateContactMessageResponse>
    {
        private readonly STTBContext _context;

        public CreateContactMessageCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<CreateContactMessageResponse> Handle(CreateContactMessageCommand request, CancellationToken cancellationToken)
        {
            var newContactMsg = new ContactMessage
            {
                Name = request.Name,
                Email = request.Email,
                PhoneNumber = request.PhoneNumber,
                Subject = request.Subject,
                Message = request.Message,
                IsRead = false,
                CreatedAt = DateTime.UtcNow
            };

            _context.ContactMessages.Add(newContactMsg);
            await _context.SaveChangesAsync(cancellationToken);

            return new CreateContactMessageResponse
            {
                Success = true,
                Message = "Terkirim! Terima kasih atas pesan Anda." // Returned in Indonesian per mockup context
            };
        }
    }
}
