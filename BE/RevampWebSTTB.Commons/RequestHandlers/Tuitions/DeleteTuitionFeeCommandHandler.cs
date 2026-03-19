using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Tuitions;
using RevampWebSTTB.Contracts.Responses.Tuitions;
using RevampWebSTTB.Contracts.Responses;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Tuitions
{
    public class DeleteTuitionFeeCommandHandler : IRequestHandler<DeleteTuitionFeeCommand, StandardResponse>
    {
        private readonly STTBContext _context;

        public DeleteTuitionFeeCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<StandardResponse> Handle(DeleteTuitionFeeCommand request, CancellationToken cancellationToken)
        {
            var fee = await _context.TuitionFees.FirstOrDefaultAsync(f => f.Id == request.Id, cancellationToken);

            if (fee == null)
            {
                return new StandardResponse
                {
                    Success = false,
                    Message = "Tuition Fee not found."
                };
            }

            _context.TuitionFees.Remove(fee);
            await _context.SaveChangesAsync(cancellationToken);

            return new StandardResponse
            {
                Success = true,
                Message = "Tuition Fee deleted successfully."
            };
        }
    }
}
