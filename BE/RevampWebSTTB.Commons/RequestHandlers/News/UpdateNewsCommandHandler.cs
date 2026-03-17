using System.Text.RegularExpressions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.News;
using RevampWebSTTB.Contracts.Responses.News;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.News
{
    public class UpdateNewsCommandHandler : IRequestHandler<UpdateNewsCommand, UpdateNewsResponse>
    {
        private readonly STTBContext _context;

        public UpdateNewsCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<UpdateNewsResponse> Handle(UpdateNewsCommand request, CancellationToken cancellationToken)
        {
            var news = await _context.News.FirstOrDefaultAsync(n => n.Id == request.Id, cancellationToken);

            if (news == null)
            {
                return new UpdateNewsResponse
                {
                    Success = false,
                    Message = "News not found."
                };
            }

            var slug = string.IsNullOrWhiteSpace(request.Slug)
                ? GenerateSlug(request.Title)
                : request.Slug.ToLowerInvariant().Trim();

            slug = await EnsureUniqueSlugAsync(slug, excludeId: news.Id, cancellationToken);

            news.CategoryId = request.CategoryId;
            news.Title = request.Title;
            news.Slug = slug;
            news.Content = request.Content;
            news.FeaturedImage = request.FeaturedImage;
            news.Author = request.Author;

            if (!string.IsNullOrEmpty(request.Status))
            {
                var wasPublished = news.Status == "published";
                news.Status = request.Status;

                if (request.Status == "published" && !wasPublished)
                {
                    news.PublishedAt = DateTime.UtcNow;
                }
            }

            news.UpdatedAt = DateTime.UtcNow;

            await _context.SaveChangesAsync(cancellationToken);

            return new UpdateNewsResponse
            {
                Success = true,
                Message = "News updated successfully.",
                Id = news.Id,
                Title = news.Title,
                Slug = news.Slug,
                CategoryId = news.CategoryId,
                FeaturedImage = news.FeaturedImage,
                Author = news.Author,
                Status = news.Status,
                UpdatedAt = news.UpdatedAt
            };
        }

        // ─────────────────────────────────────────────
        // Helpers
        // ─────────────────────────────────────────────

        private static string GenerateSlug(string title)
        {
            var slug = title.ToLowerInvariant();
            slug = Regex.Replace(slug, @"[^a-z0-9\s-]", ""); // Remove non-alphanumeric
            slug = Regex.Replace(slug, @"\s+", "-");          // Replace spaces with hyphens
            slug = Regex.Replace(slug, @"-{2,}", "-");        // Collapse multiple hyphens
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
