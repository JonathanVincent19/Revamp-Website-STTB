using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.HR;
using RevampWebSTTB.Contracts.Responses.HR;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.HR
{
    public class GetLecturersQueryHandler : IRequestHandler<GetLecturersQuery, GetLecturersResponse>
    {
        private readonly STTBContext _context;

        public GetLecturersQueryHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<GetLecturersResponse> Handle(GetLecturersQuery request, CancellationToken cancellationToken)
        {
            var lecturers = await _context.Lecturers
                .OrderBy(l => l.SortOrder)
                .ToListAsync(cancellationToken);

            return new GetLecturersResponse
            {
                Success = true,
                Data = lecturers.Select(l => new LecturerDto
                {
                    Id = l.Id,
                    Name = l.Name,
                    Photo = l.Photo,
                    Position = l.Position,
                    EducationLevel = l.EducationLevel,
                    Expertise = l.Expertise,
                    Email = l.Email
                }).ToList()
            };
        }
    }
}
