using MediatR;
using RevampWebSTTB.Entities.Data;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.News;
using RevampWebSTTB.Contracts.Responses.News;

namespace RevampWebSTTB.Commons.RequestHandlers.News
{
    public class GetNewsDetailQueryHandler : IRequestHandler<GetNewsDetailQuery, GetNewsDetailResponse>
    {
        private readonly STTBContext _context;

        public GetNewsDetailQueryHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<GetNewsDetailResponse> Handle(GetNewsDetailQuery request, CancellationToken cancellationToken)
        {
            var news = await _context.News
                .Include(n => n.Category)
                .FirstOrDefaultAsync(n => n.Slug == request.Slug, cancellationToken);

            if (news == null)
            {
                return new GetNewsDetailResponse { Success = false, Data = null };
            }

            // Logic for related news (e.g., same category, excluding current)
            var relatedNews = await _context.News
                .Where(n => n.CategoryId == news.CategoryId && n.Id != news.Id)
                .OrderByDescending(n => n.PublishedAt)
                .Take(3)
                .Select(n => new RelatedNewsDto
                {
                    Id = n.Id,
                    Title = n.Title,
                    Slug = n.Slug
                })
                .ToListAsync(cancellationToken);

            return new GetNewsDetailResponse
            {
                Success = true,
                Data = new NewsDetailDto
                {
                    Id = news.Id,
                    Title = news.Title,
                    Content = news.Content,
                    FeaturedImage = news.FeaturedImage,
                    Author = news.Author,
                    ViewCount = news.ViewCount,
                    PublishedAt = news.PublishedAt ?? DateTime.MinValue,
                    RelatedNews = relatedNews
                }
            };
        }
    }
}
