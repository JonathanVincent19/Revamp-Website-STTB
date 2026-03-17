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
            program.Description = request.Description;
            program.Semesters = request.Semesters;
            program.Status = request.Status;
            program.Curriculum = request.Curriculum;

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
                    Description = program.Description,
                    Semesters = program.Semesters,
                    Status = program.Status,
                    Curriculum = program.Curriculum
                }
            };
        }
    }
}
