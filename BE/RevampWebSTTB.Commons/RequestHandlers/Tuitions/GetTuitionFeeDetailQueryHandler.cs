using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Tuitions;
using RevampWebSTTB.Contracts.Responses.Tuitions;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Tuitions
{
    public class GetTuitionFeeDetailQueryHandler : IRequestHandler<GetTuitionFeeDetailQuery, GetTuitionFeeDetailResponse>
    {
        private readonly STTBContext _context;

        public GetTuitionFeeDetailQueryHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<GetTuitionFeeDetailResponse> Handle(GetTuitionFeeDetailQuery request, CancellationToken cancellationToken)
        {
            var fee = await _context.TuitionFees
                .AsNoTracking()
                .FirstOrDefaultAsync(f => f.Id == request.Id, cancellationToken);

            if (fee == null)
            {
                return new GetTuitionFeeDetailResponse
                {
                    Success = false,
                    Message = "Tuition Fee not found."
                };
            }

            return new GetTuitionFeeDetailResponse
            {
                Success = true,
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
