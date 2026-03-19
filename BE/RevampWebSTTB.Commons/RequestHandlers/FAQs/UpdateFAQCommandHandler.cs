using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.FAQs;
using RevampWebSTTB.Contracts.Responses.FAQs;
using RevampWebSTTB.Entities.Data;
using RevampWebSTTB.Entities.Models;

namespace RevampWebSTTB.Commons.RequestHandlers.FAQs
{
    public class UpdateFAQCommandHandler : IRequestHandler<UpdateFAQCommand, UpdateFAQResponse>
    {
        private readonly STTBContext _context;

        public UpdateFAQCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<UpdateFAQResponse> Handle(UpdateFAQCommand request, CancellationToken cancellationToken)
        {
            var faq = await _context.FAQs.FirstOrDefaultAsync(f => f.Id == request.Id, cancellationToken);

            if (faq == null)
            {
                return new UpdateFAQResponse
                {
                    Success = false,
                    Message = "FAQ not found."
                };
            }

            var category = Enum.TryParse<FaqCategory>(request.Category, ignoreCase: true, out var parsedCategory)
                ? parsedCategory
                : FaqCategory.General;

            faq.Question = request.Question;
            faq.Answer = request.Answer;
            faq.SortOrder = request.SortOrder;
            faq.Category = category;

            await _context.SaveChangesAsync(cancellationToken);

            return new UpdateFAQResponse
            {
                Success = true,
                Message = "FAQ updated successfully.",
                Data = new FAQDto
                {
                    Id = faq.Id,
                    Question = faq.Question,
                    Answer = faq.Answer,
                    SortOrder = faq.SortOrder,
                    Category = faq.Category.ToString()
                }
            };
        }
    }
}

