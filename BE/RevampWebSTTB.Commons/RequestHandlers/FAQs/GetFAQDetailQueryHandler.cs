using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.FAQs;
using RevampWebSTTB.Contracts.Responses.FAQs;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.FAQs
{
    public class GetFAQDetailQueryHandler : IRequestHandler<GetFAQDetailQuery, GetFAQDetailResponse>
    {
        private readonly STTBContext _context;

        public GetFAQDetailQueryHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<GetFAQDetailResponse> Handle(GetFAQDetailQuery request, CancellationToken cancellationToken)
        {
            var faq = await _context.FAQs
                .AsNoTracking()
                .FirstOrDefaultAsync(f => f.Id == request.Id, cancellationToken);

            if (faq == null)
            {
                return new GetFAQDetailResponse
                {
                    Success = false,
                    Message = "FAQ not found."
                };
            }

            return new GetFAQDetailResponse
            {
                Success = true,
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

