using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Programs;
using RevampWebSTTB.Contracts.Responses.Programs;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Programs
{
    public class GetProgramDetailQueryHandler : IRequestHandler<GetProgramDetailQuery, GetProgramDetailResponse>
    {
        private readonly STTBContext _context;

        public GetProgramDetailQueryHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<GetProgramDetailResponse> Handle(GetProgramDetailQuery request, CancellationToken cancellationToken)
        {
            var program = await _context.StudyPrograms
                .AsNoTracking()
                .FirstOrDefaultAsync(p => p.Id == request.Id, cancellationToken);

            if (program == null)
            {
                return new GetProgramDetailResponse
                {
                    Success = false,
                    Message = "Program not found."
                };
            }

            return new GetProgramDetailResponse
            {
                Success = true,
                Data = new StudyProgramDto
                {
                    Id = program.Id,
                    Name = program.Name,
                    Level = program.Level,
                    Degree = program.Degree,
                    TotalCredits = program.TotalCredits,
                    StudyDuration = program.StudyDuration,
                    LearningSystem = program.LearningSystem
                }
            };
        }
    }
}

