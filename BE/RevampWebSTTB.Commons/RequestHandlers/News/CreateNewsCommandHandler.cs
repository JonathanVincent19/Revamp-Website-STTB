using System.Text.RegularExpressions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.News;
using RevampWebSTTB.Contracts.Responses.News;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.News
{
    public class CreateNewsCommandHandler : IRequestHandler<CreateNewsCommand, CreateNewsResponse>
    {
        private readonly STTBContext _context;

        public CreateNewsCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<CreateNewsResponse> Handle(CreateNewsCommand request, CancellationToken cancellationToken)
        {
            var slug = string.IsNullOrWhiteSpace(request.Slug)
                ? GenerateSlug(request.Title)
                : request.Slug.ToLowerInvariant().Trim();

            slug = await EnsureUniqueSlugAsync(slug, excludeId: null, cancellationToken);

            var news = new Entities.Models.News
            {
                CategoryId = request.CategoryId,
                Title = request.Title,
                Slug = slug,
                Content = request.Content,
                FeaturedImage = request.FeaturedImage,
                Author = request.Author,
                Status = request.Status,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow,
                PublishedAt = request.PublishedAt ?? (request.Status == "published" ? DateTime.UtcNow : null)
            };

            _context.News.Add(news);
            await _context.SaveChangesAsync(cancellationToken);

            return new CreateNewsResponse
            {
                Success = true,
                Message = "News created successfully.",
                Id = news.Id,
                Title = news.Title,
                Slug = news.Slug,
                CategoryId = news.CategoryId,
                FeaturedImage = news.FeaturedImage,
                Author = news.Author,
                Status = news.Status,
                CreatedAt = news.CreatedAt
            };
        }
        private static string GenerateSlug(string title)
        {
            var slug = title.ToLowerInvariant();
            slug = Regex.Replace(slug, @"[^a-z0-9\s-]", "");
            slug = Regex.Replace(slug, @"\s+", "-");
            slug = Regex.Replace(slug, @"-{2,}", "-");
            slug = slug.Trim('-');
            return slug;
        }

        private async Task<string> EnsureUniqueSlugAsync(string baseSlug, int? excludeId, CancellationToken cancellationToken)
        {
            var slug = baseSlug;
            var counter = 1;

            while (await _context.News
                .AnyAsync(n => n.Slug == slug && (excludeId == null || n.Id != excludeId), cancellationToken))
            {
                counter++;
                slug = $"{baseSlug}-{counter}";
            }

            return slug;
        }
    }
}
