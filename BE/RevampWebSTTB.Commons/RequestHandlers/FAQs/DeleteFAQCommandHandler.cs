using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.FAQs;
using RevampWebSTTB.Contracts.Responses.FAQs;
using RevampWebSTTB.Contracts.Responses;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.FAQs
{
    public class DeleteFAQCommandHandler : IRequestHandler<DeleteFAQCommand, StandardResponse>
    {
        private readonly STTBContext _context;

        public DeleteFAQCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<StandardResponse> Handle(DeleteFAQCommand request, CancellationToken cancellationToken)
        {
            var faq = await _context.FAQs.FirstOrDefaultAsync(f => f.Id == request.Id, cancellationToken);

            if (faq == null)
            {
                return new StandardResponse
                {
                    Success = false,
                    Message = "FAQ not found."
                };
            }

            _context.FAQs.Remove(faq);
            await _context.SaveChangesAsync(cancellationToken);

            return new StandardResponse
            {
                Success = true,
                Message = "FAQ deleted successfully."
            };
        }
    }
}
