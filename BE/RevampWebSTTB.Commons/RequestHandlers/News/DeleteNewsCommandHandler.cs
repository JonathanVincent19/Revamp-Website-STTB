using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.News;
using RevampWebSTTB.Contracts.Responses.News;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.News
{
    public class DeleteNewsCommandHandler : IRequestHandler<DeleteNewsCommand, DeleteNewsResponse>
    {
        private readonly STTBContext _context;

        public DeleteNewsCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<DeleteNewsResponse> Handle(DeleteNewsCommand request, CancellationToken cancellationToken)
        {
            var news = await _context.News.FirstOrDefaultAsync(n => n.Id == request.Id, cancellationToken);

            if (news == null)
            {
                return new DeleteNewsResponse
                {
                    Success = false,
                    Message = "News not found."
                };
            }

            _context.News.Remove(news);
            await _context.SaveChangesAsync(cancellationToken);

            return new DeleteNewsResponse
            {
                Success = true,
                Message = "News deleted successfully."
            };
        }
    }
}
