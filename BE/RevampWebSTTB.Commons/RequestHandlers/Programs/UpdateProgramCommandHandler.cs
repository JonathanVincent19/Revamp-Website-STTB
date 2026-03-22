using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Programs;
using RevampWebSTTB.Contracts.Responses.Programs;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Programs
{
    public class UpdateProgramCommandHandler : IRequestHandler<UpdateProgramCommand, UpdateProgramResponse>
    {
        private readonly STTBContext _context;

        public UpdateProgramCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<UpdateProgramResponse> Handle(UpdateProgramCommand request, CancellationToken cancellationToken)
        {
            var program = await _context.StudyPrograms.FirstOrDefaultAsync(p => p.Id == request.Id, cancellationToken);

            if (program == null)
            {
                return new UpdateProgramResponse
                {
                    Success = false,
                    Message = "Program not found."
                };
            }

            program.Name = request.Name;
            program.Level = request.Level;
            program.Degree = request.Degree;
            program.TotalCredits = request.TotalCredits;
            program.StudyDuration = request.StudyDuration;
            program.LearningSystem = request.LearningSystem;

            await _context.SaveChangesAsync(cancellationToken);

            return new UpdateProgramResponse
            {
                Success = true,
                Message = "Program updated successfully.",
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

