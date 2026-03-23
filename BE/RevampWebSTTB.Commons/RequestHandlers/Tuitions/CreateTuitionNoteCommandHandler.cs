using MediatR;
using RevampWebSTTB.Contracts.Requests.Tuitions;
using RevampWebSTTB.Contracts.Responses.Tuitions;
using RevampWebSTTB.Entities.Data;
using RevampWebSTTB.Entities.Models;

namespace RevampWebSTTB.Commons.RequestHandlers.Tuitions
{
    public class CreateTuitionNoteCommandHandler : IRequestHandler<CreateTuitionNoteCommand, CreateTuitionNoteResponse>
    {
        private readonly STTBContext _context;

        public CreateTuitionNoteCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<CreateTuitionNoteResponse> Handle(CreateTuitionNoteCommand request, CancellationToken cancellationToken)
        {
            var note = new TuitionNote
            {
                Program = request.Program,
                NoteText = request.NoteText,
                SortOrder = request.SortOrder
            };

            _context.TuitionNotes.Add(note);
            await _context.SaveChangesAsync(cancellationToken);

            return new CreateTuitionNoteResponse
            {
                Success = true,
                Message = "Tuition Note created successfully.",
                Data = new TuitionNoteDto
                {
                    Id = note.Id,
                    Program = note.Program,
                    NoteText = note.NoteText,
                    SortOrder = note.SortOrder
                }
            };
        }
    }
}
