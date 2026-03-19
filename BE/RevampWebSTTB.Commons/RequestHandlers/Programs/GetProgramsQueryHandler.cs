using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Programs;
using RevampWebSTTB.Contracts.Responses.Programs;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Programs
{
    public class GetProgramsQueryHandler : IRequestHandler<GetProgramsQuery, GetProgramsResponse>
    {
        private readonly STTBContext _context;

        public GetProgramsQueryHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<GetProgramsResponse> Handle(GetProgramsQuery request, CancellationToken cancellationToken)
        {
            var programs = await _context.StudyPrograms
                .AsNoTracking()
                .Select(p => new StudyProgramDto
                {
                    Id = p.Id,
                    Name = p.Name,
                    Level = p.Level,
                    Description = p.Description,
                    Semesters = p.Semesters,
                    Status = p.Status,
                    Curriculum = p.Curriculum
                })
                .ToListAsync(cancellationToken);

            return new GetProgramsResponse
            {
                Success = true,
                Data = programs
            };
        }
    }
}
