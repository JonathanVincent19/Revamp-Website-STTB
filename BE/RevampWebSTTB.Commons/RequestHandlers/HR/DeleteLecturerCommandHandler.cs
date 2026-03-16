using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.HR;
using RevampWebSTTB.Contracts.Responses;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.HR
{
    public class DeleteLecturerCommandHandler : IRequestHandler<DeleteLecturerCommand, StandardResponse>
    {
        private readonly STTBContext _context;

        public DeleteLecturerCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<StandardResponse> Handle(DeleteLecturerCommand request, CancellationToken cancellationToken)
        {
            var lecturer = await _context.Lecturers.FirstOrDefaultAsync(l => l.Id == request.Id, cancellationToken);

            if (lecturer == null)
            {
                return new StandardResponse
                {
                    Success = false,
                    Message = "Lecturer not found."
                };
            }

            _context.Lecturers.Remove(lecturer);
            await _context.SaveChangesAsync(cancellationToken);

            return new StandardResponse
            {
                Success = true,
                Message = "Lecturer deleted successfully."
            };
        }
    }
}
