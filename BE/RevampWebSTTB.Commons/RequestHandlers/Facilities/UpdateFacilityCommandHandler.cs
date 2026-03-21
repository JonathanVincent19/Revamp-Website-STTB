using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Facilities;
using RevampWebSTTB.Contracts.Responses;
using RevampWebSTTB.Entities.Data;
using RevampWebSTTB.Entities.Models;

namespace RevampWebSTTB.Commons.RequestHandlers.Facilities
{
    public class UpdateFacilityCommandHandler : IRequestHandler<UpdateFacilityCommand, StandardResponse>
    {
        private readonly STTBContext _context;

        public UpdateFacilityCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<StandardResponse> Handle(UpdateFacilityCommand request, CancellationToken cancellationToken)
        {
            var facility = await _context.Facilities
                .Include(f => f.Photos)
                .FirstOrDefaultAsync(f => f.Id == request.Id, cancellationToken);

            if (facility == null)
            {
                return new StandardResponse
                {
                    Success = false,
                    Message = "Facility not found."
                };
            }

            facility.Name = request.Name;
            facility.Slug = request.Slug;
            facility.ShortDescription = request.ShortDescription;
            facility.LongDescription = request.LongDescription;
            facility.IconName = request.IconName;
            facility.FeaturedImage = request.FeaturedImage;

            // Replace photos: remove old, add new
            _context.FacilityPhotos.RemoveRange(facility.Photos);

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

            await _context.SaveChangesAsync(cancellationToken);

            return new StandardResponse
            {
                Success = true,
                Message = "Facility updated successfully."
            };
        }
    }
}
