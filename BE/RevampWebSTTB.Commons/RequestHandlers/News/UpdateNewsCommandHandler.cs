using System;
using System.Threading;
using System.Threading.Tasks;
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

            news.CategoryId = request.CategoryId;
            news.Title = request.Title;
            news.Slug = request.Slug;
            news.Content = request.Content;
            news.FeaturedImage = request.FeaturedImage;
            news.Author = request.Author;
            
            if (!string.IsNullOrEmpty(request.Status)) {
                news.Status = request.Status;
            }

            news.UpdatedAt = DateTime.UtcNow;

            await _context.SaveChangesAsync(cancellationToken);

            return new UpdateNewsResponse
            {
                Success = true,
                Message = "News updated successfully."
            };
        }
    }
}
