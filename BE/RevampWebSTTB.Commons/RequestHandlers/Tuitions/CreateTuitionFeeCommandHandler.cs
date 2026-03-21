using MediatR;
using RevampWebSTTB.Contracts.Requests.Tuitions;
using RevampWebSTTB.Contracts.Responses.Tuitions;
using RevampWebSTTB.Entities.Data;
using RevampWebSTTB.Entities.Models;

namespace RevampWebSTTB.Commons.RequestHandlers.Tuitions
{
    public class CreateTuitionFeeCommandHandler : IRequestHandler<CreateTuitionFeeCommand, CreateTuitionFeeResponse>
    {
        private readonly STTBContext _context;

        public CreateTuitionFeeCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<CreateTuitionFeeResponse> Handle(CreateTuitionFeeCommand request, CancellationToken cancellationToken)
        {
            var fee = new TuitionFee
            {
                Program = request.Program,
                Category = request.Category,
                ItemName = request.ItemName,
                Amount = request.Amount,
                SortOrder = request.SortOrder
            };

            _context.TuitionFees.Add(fee);
            await _context.SaveChangesAsync(cancellationToken);

            return new CreateTuitionFeeResponse
            {
                Success = true,
                Message = "Tuition Fee created successfully.",
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
