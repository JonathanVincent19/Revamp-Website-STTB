using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Tuitions;
using RevampWebSTTB.Contracts.Responses.Tuitions;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Tuitions
{
    public class UpdateTuitionFeeCommandHandler : IRequestHandler<UpdateTuitionFeeCommand, UpdateTuitionFeeResponse>
    {
        private readonly STTBContext _context;

        public UpdateTuitionFeeCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<UpdateTuitionFeeResponse> Handle(UpdateTuitionFeeCommand request, CancellationToken cancellationToken)
        {
            var fee = await _context.TuitionFees.FirstOrDefaultAsync(f => f.Id == request.Id, cancellationToken);

            if (fee == null)
            {
                return new UpdateTuitionFeeResponse
                {
                    Success = false,
                    Message = "Tuition Fee not found."
                };
            }

            fee.Program = request.Program;
            fee.Category = request.Category;
            fee.ItemName = request.ItemName;
            fee.Amount = request.Amount;
            fee.SortOrder = request.SortOrder;

            await _context.SaveChangesAsync(cancellationToken);

            return new UpdateTuitionFeeResponse
            {
                Success = true,
                Message = "Tuition Fee updated successfully.",
                Data = new TuitionFeeDto
                {
                    Id = fee.Id,
                    Program = fee.Program,
                    Category = fee.Category,
                    ItemName = fee.ItemName,
                    Amount = fee.Amount,
                    SortOrder = fee.SortOrder
                }
            };
        }
    }
}
