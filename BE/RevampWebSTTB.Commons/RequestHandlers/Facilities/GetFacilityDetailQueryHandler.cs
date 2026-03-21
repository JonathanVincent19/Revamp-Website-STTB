using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Facilities;
using RevampWebSTTB.Contracts.Responses.Facilities;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Facilities
{
    public class GetFacilityDetailQueryHandler : IRequestHandler<GetFacilityDetailQuery, GetFacilityDetailResponse>
    {
        private readonly STTBContext _context;

        public GetFacilityDetailQueryHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<GetFacilityDetailResponse> Handle(GetFacilityDetailQuery request, CancellationToken cancellationToken)
        {
            var facility = await _context.Facilities
                .AsNoTracking()
                .Include(f => f.Photos.OrderBy(p => p.SortOrder))
                .FirstOrDefaultAsync(f => f.Slug == request.Slug, cancellationToken);

            if (facility == null)
            {
                return new GetFacilityDetailResponse
                {
                    Success = false,
                    Message = "Facility not found."
                };
            }

            return new GetFacilityDetailResponse
            {
                Success = true,
                Data = new FacilityDto
                {
                    Id = facility.Id,
                    Name = facility.Name,
                    Slug = facility.Slug,
                    ShortDescription = facility.ShortDescription,
                    LongDescription = facility.LongDescription,
                    IconName = facility.IconName,
                    FeaturedImage = facility.FeaturedImage,
                    Photos = facility.Photos.Select(p => p.ImageUrl).ToList()
                }
            };
        }
    }
}
