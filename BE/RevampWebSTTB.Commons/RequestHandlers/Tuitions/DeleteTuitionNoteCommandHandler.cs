using MediatR;
using RevampWebSTTB.Contracts.Requests.Tuitions;
using RevampWebSTTB.Contracts.Responses.Tuitions;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Tuitions
{
    public class DeleteTuitionNoteCommandHandler : IRequestHandler<DeleteTuitionNoteCommand, DeleteTuitionNoteResponse>
    {
        private readonly STTBContext _context;

        public DeleteTuitionNoteCommandHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<DeleteTuitionNoteResponse> Handle(DeleteTuitionNoteCommand request, CancellationToken cancellationToken)
        {
            var note = await _context.TuitionNotes.FindAsync(new object[] { request.Id }, cancellationToken);

            if (note == null)
            {
                return new DeleteTuitionNoteResponse
                {
                    Success = false,
                    Message = "Tuition Note not found."
                };
            }

            _context.TuitionNotes.Remove(note);
            await _context.SaveChangesAsync(cancellationToken);

            return new DeleteTuitionNoteResponse
            {
                Success = true,
                Message = "Tuition Note deleted successfully."
            };
        }
    }
}
