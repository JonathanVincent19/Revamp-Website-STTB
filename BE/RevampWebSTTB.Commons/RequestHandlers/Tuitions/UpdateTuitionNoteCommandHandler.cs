using MediatR;
using RevampWebSTTB.Contracts.Requests.Tuitions;
using RevampWebSTTB.Contracts.Responses.Tuitions;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Tuitions
{
    public class UpdateTuitionNoteCommandHandler : IRequestHandler<UpdateTuitionNoteCommand, UpdateTuitionNoteResponse>
    {
        private readonly STTBContext _context;

        public UpdateTuitionNoteCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<UpdateTuitionNoteResponse> Handle(UpdateTuitionNoteCommand request, CancellationToken cancellationToken)
        {
            var note = await _context.TuitionNotes.FindAsync(new object[] { request.Id }, cancellationToken);

            if (note == null)
            {
                return new UpdateTuitionNoteResponse
                {
                    Success = false,
                    Message = "Tuition Note not found."
                };
            }

            note.Program = request.Program;
            note.NoteText = request.NoteText;
            note.SortOrder = request.SortOrder;

            await _context.SaveChangesAsync(cancellationToken);

            return new UpdateTuitionNoteResponse
            {
                Success = true,
                Message = "Tuition Note updated successfully.",
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
