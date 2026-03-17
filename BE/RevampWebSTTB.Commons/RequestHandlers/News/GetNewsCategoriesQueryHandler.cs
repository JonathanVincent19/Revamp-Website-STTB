using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.News;
using RevampWebSTTB.Contracts.Responses.News;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.News
{
    public class GetNewsCategoriesQueryHandler : IRequestHandler<GetNewsCategoriesQuery, GetNewsCategoriesResponse>
    {
        private readonly STTBContext _context;

        public GetNewsCategoriesQueryHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<GetNewsCategoriesResponse> Handle(GetNewsCategoriesQuery request, CancellationToken cancellationToken)
        {
            var categories = await _context.NewsCategories
                .OrderBy(c => c.Name)
                .Select(c => new NewsCategoryDto
                {
                    Id = c.Id,
                    Name = c.Name
                })
                .ToListAsync(cancellationToken);

            return new GetNewsCategoriesResponse
            {
                Success = true,
                Data = categories
            };
        }
    }
}
