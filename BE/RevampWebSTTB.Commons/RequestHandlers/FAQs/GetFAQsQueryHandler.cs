using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.FAQs;
using RevampWebSTTB.Contracts.Responses.FAQs;
using RevampWebSTTB.Entities.Data;
using RevampWebSTTB.Entities.Models;

namespace RevampWebSTTB.Commons.RequestHandlers.FAQs
{
    public class GetFAQsQueryHandler : IRequestHandler<GetFAQsQuery, GetFAQsResponse>
    {
        private readonly STTBContext _context;

        public GetFAQsQueryHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<GetFAQsResponse> Handle(GetFAQsQuery request, CancellationToken cancellationToken)
        {
            var query = _context.FAQs.AsNoTracking();

            if (!string.IsNullOrEmpty(request.Category) &&
                Enum.TryParse<FaqCategory>(request.Category, ignoreCase: true, out var parsedCategory))
            {
                query = query.Where(f => f.Category == parsedCategory);
            }

            var faqs = await query
                .OrderBy(f => f.SortOrder)
                .Select(f => new FAQDto
                {
                    Id = f.Id,
                    Question = f.Question,
                    Answer = f.Answer,
                    SortOrder = f.SortOrder,
                    Category = f.Category.ToString()
                })
                .ToListAsync(cancellationToken);

            return new GetFAQsResponse
            {
                Success = true,
                Data = faqs
            };
        }
    }
}

