using MediatR;
using Microsoft.EntityFrameworkCore;
using RevampWebSTTB.Contracts.Requests.Tuitions;
using RevampWebSTTB.Contracts.Responses.Tuitions;
using RevampWebSTTB.Entities.Data;

namespace RevampWebSTTB.Commons.RequestHandlers.Tuitions
{
    public class GetTuitionNotesQueryHandler : IRequestHandler<GetTuitionNotesQuery, GetTuitionNotesResponse>
    {
        private readonly STTBContext _context;

        public GetTuitionNotesQueryHandler(STTBContext context)
        {
            _context = context;
        }

        public async Task<GetTuitionNotesResponse> Handle(GetTuitionNotesQuery request, CancellationToken cancellationToken)
        {
            var notes = await _context.TuitionNotes
                .AsNoTracking()
                .OrderBy(n => n.Program)
                .ThenBy(n => n.SortOrder)
                .Select(n => new TuitionNoteDto
                {
                    Id = n.Id,
                    Program = n.Program,
                    NoteText = n.NoteText,
                    SortOrder = n.SortOrder
                })
                .ToListAsync(cancellationToken);

            return new GetTuitionNotesResponse
            {
                Success = true,
                Data = notes
            };
        }
    }
}
