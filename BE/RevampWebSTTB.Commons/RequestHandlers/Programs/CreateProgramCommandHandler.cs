using MediatR;
using RevampWebSTTB.Contracts.Requests.Programs;
using RevampWebSTTB.Contracts.Responses.Programs;
using RevampWebSTTB.Entities.Data;
using RevampWebSTTB.Entities.Models;

namespace RevampWebSTTB.Commons.RequestHandlers.Programs
{
    public class CreateProgramCommandHandler : IRequestHandler<CreateProgramCommand, CreateProgramResponse>
    {
        private readonly STTBContext _context;

        public CreateProgramCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<CreateProgramResponse> Handle(CreateProgramCommand request, CancellationToken cancellationToken)
        {
            var program = new StudyProgram
            {
                Name = request.Name,
                Level = request.Level,
                Description = request.Description,
                Semesters = request.Semesters,
                Status = request.Status,
                Curriculum = request.Curriculum
            };

            _context.StudyPrograms.Add(program);
            await _context.SaveChangesAsync(cancellationToken);

            return new CreateProgramResponse
            {
                Success = true,
                Message = "Program created successfully.",
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
