using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.FAQs;
using RevampWebSTTB.Contracts.Responses.FAQs;
using RevampWebSTTB.Entities.Data;

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
            var faqs = await _context.FAQs
                .AsNoTracking()
                .OrderBy(f => f.SortOrder)
                .Select(f => new FAQDto
                {
                    Id = f.Id,
                    Question = f.Question,
                    Answer = f.Answer,
                    SortOrder = f.SortOrder
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
