using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using RevampWebSTTB.Contracts.Requests.News;
using RevampWebSTTB.Contracts.Responses.News;
using RevampWebSTTB.Entities.Data;
using RevampWebSTTB.Entities.Models;

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
            var news = new Entities.Models.News
            {
                CategoryId = request.CategoryId,
                Title = request.Title,
                Slug = request.Slug,
                Content = request.Content,
                FeaturedImage = request.FeaturedImage,
                Author = request.Author,
                Status = request.Status,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            _context.News.Add(news);
            await _context.SaveChangesAsync(cancellationToken);

            return new CreateNewsResponse
            {
                Success = true,
                Message = "News created successfully.",
                NewsId = news.Id
            };
        }
    }
}
