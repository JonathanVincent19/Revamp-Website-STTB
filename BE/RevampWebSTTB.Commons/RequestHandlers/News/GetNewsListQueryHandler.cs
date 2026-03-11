using MediatR;
using RevampWebSTTB.Entities.Data;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.News;
using RevampWebSTTB.Contracts.Responses.News;

namespace RevampWebSTTB.Commons.RequestHandlers.News
{
    public class GetNewsListQueryHandler : IRequestHandler<GetNewsListQuery, GetNewsListResponse>
    {
        private readonly STTBContext _context;

        public GetNewsListQueryHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<GetNewsListResponse> Handle(GetNewsListQuery request, CancellationToken cancellationToken)
        {
            var query = _context.News.AsQueryable();

            // Filter by Category
            if (request.CategoryId.HasValue)
            {
                query = query.Where(n => n.CategoryId == request.CategoryId.Value);
            }

            // Filter only published news
            query = query.Where(n => n.Status == "published");

            // Pagination calculation
            int page = request.Page ?? 1;
            int limit = request.Limit ?? 10;
            int totalItems = await query.CountAsync(cancellationToken);
            int totalPages = (int)Math.Ceiling(totalItems / (double)limit);

            var items = await query
                .OrderByDescending(n => n.PublishedAt)
                .Skip((page - 1) * limit)
                .Take(limit)
                .Select(n => new NewsItemDto
                {
                    Id = n.Id,
                    Title = n.Title,
                    Slug = n.Slug,
                    Category = n.Category.Name, // Assuming navigation property
                    FeaturedImage = n.FeaturedImage,
                    Author = n.Author,
                    PublishedAt = n.PublishedAt ?? DateTime.MinValue
                })
                .ToListAsync(cancellationToken);

            return new GetNewsListResponse
            {
                Success = true,
                Data = items,
                Pagination = new PaginationDto
                {
                    CurrentPage = page,
                    TotalPages = totalPages,
                    TotalItems = totalItems
                }
            };
        }
    }
}
