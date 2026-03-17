using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Programs;
using RevampWebSTTB.Contracts.Responses.Programs;
using RevampWebSTTB.Contracts.Responses;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Programs
{
    public class DeleteProgramCommandHandler : IRequestHandler<DeleteProgramCommand, StandardResponse>
    {
        private readonly STTBContext _context;

        public DeleteProgramCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<StandardResponse> Handle(DeleteProgramCommand request, CancellationToken cancellationToken)
        {
            var program = await _context.StudyPrograms.FirstOrDefaultAsync(p => p.Id == request.Id, cancellationToken);

            if (program == null)
            {
                return new StandardResponse
                {
                    Success = false,
                    Message = "Program not found."
                };
            }

            _context.StudyPrograms.Remove(program);
            await _context.SaveChangesAsync(cancellationToken);

            return new StandardResponse
            {
                Success = true,
                Message = "Program deleted successfully."
            };
        }
    }
}
