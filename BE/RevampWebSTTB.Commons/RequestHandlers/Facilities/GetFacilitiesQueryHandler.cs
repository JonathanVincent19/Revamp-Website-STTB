using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Facilities;
using RevampWebSTTB.Contracts.Responses.Facilities;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Facilities
{
    public class GetFacilitiesQueryHandler : IRequestHandler<GetFacilitiesQuery, GetFacilitiesResponse>
    {
        private readonly STTBContext _context;

        public GetFacilitiesQueryHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<GetFacilitiesResponse> Handle(GetFacilitiesQuery request, CancellationToken cancellationToken)
        {
            var facilities = await _context.Facilities
                .AsNoTracking()
                .OrderBy(f => f.Name)
                .Select(f => new FacilityListItemDto
                {
                    Id = f.Id,
                    Name = f.Name,
                    Slug = f.Slug,
                    ShortDescription = f.ShortDescription,
                    IconName = f.IconName,
                    FeaturedImage = f.FeaturedImage
                })
                .ToListAsync(cancellationToken);

            return new GetFacilitiesResponse
            {
                Success = true,
                Data = facilities
            };
        }
    }
}
