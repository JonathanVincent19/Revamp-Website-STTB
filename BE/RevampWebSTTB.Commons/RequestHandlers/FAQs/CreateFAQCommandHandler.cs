using MediatR;
using RevampWebSTTB.Contracts.Requests.FAQs;
using RevampWebSTTB.Contracts.Responses.FAQs;
using RevampWebSTTB.Entities.Data;
using RevampWebSTTB.Entities.Models;

namespace RevampWebSTTB.Commons.RequestHandlers.FAQs
{
    public class CreateFAQCommandHandler : IRequestHandler<CreateFAQCommand, CreateFAQResponse>
    {
        private readonly STTBContext _context;

        public CreateFAQCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<CreateFAQResponse> Handle(CreateFAQCommand request, CancellationToken cancellationToken)
        {
            var category = Enum.TryParse<FaqCategory>(request.Category, ignoreCase: true, out var parsedCategory)
                ? parsedCategory
                : FaqCategory.General;

            var faq = new FAQ
            {
                Question = request.Question,
                Answer = request.Answer,
                SortOrder = request.SortOrder,
                Category = category
            };

            _context.FAQs.Add(faq);
            await _context.SaveChangesAsync(cancellationToken);

            return new CreateFAQResponse
            {
                Success = true,
                Message = "FAQ created successfully.",
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

