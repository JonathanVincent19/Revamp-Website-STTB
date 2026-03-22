using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Tuitions;
using RevampWebSTTB.Contracts.Responses.Tuitions;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Tuitions
{
    public class GetTuitionFeesQueryHandler : IRequestHandler<GetTuitionFeesQuery, GetTuitionFeesResponse>
    {
        private readonly STTBContext _context;

        public GetTuitionFeesQueryHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<GetTuitionFeesResponse> Handle(GetTuitionFeesQuery request, CancellationToken cancellationToken)
        {
            var fees = await _context.TuitionFees
                .AsNoTracking()
                .OrderBy(f => f.SortOrder)
                .Select(f => new TuitionFeeDto
                {
                    Id = f.Id,
                    Program = f.Program,
                    Category = f.Category,
                    ItemName = f.ItemName,
                    Amount = f.Amount,
                    SortOrder = f.SortOrder
                })
                .ToListAsync(cancellationToken);

            return new GetTuitionFeesResponse
            {
                Success = true,
                Data = fees
            };
        }
    }
}
