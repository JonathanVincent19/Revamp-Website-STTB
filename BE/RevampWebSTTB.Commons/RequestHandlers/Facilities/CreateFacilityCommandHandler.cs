using MediatR;
using RevampWebSTTB.Contracts.Requests.Facilities;
using RevampWebSTTB.Contracts.Responses;
using RevampWebSTTB.Entities.Data;
using RevampWebSTTB.Entities.Models;

namespace RevampWebSTTB.Commons.RequestHandlers.Facilities
{
    public class CreateFacilityCommandHandler : IRequestHandler<CreateFacilityCommand, StandardResponse>
    {
        private readonly STTBContext _context;

        public CreateFacilityCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<StandardResponse> Handle(CreateFacilityCommand request, CancellationToken cancellationToken)
        {
            var facility = new Facility
            {
                Name = request.Name,
                Slug = request.Slug,
                ShortDescription = request.ShortDescription,
                LongDescription = request.LongDescription,
                IconName = request.IconName,
                FeaturedImage = request.FeaturedImage,
                CreatedAt = DateTime.UtcNow
            };

            // Add gallery photos
            if (request.Photos != null && request.Photos.Count > 0)
            {
                for (int i = 0; i < request.Photos.Count; i++)
                {
                    facility.Photos.Add(new FacilityPhoto
                    {
                        ImageUrl = request.Photos[i],
                        SortOrder = i
                    });
                }
            }

            _context.Facilities.Add(facility);
            await _context.SaveChangesAsync(cancellationToken);

            return new StandardResponse
            {
                Success = true,
                Message = "Facility created successfully.",
                Data = new { facility.Id, facility.Slug }
            };
        }
    }
}
