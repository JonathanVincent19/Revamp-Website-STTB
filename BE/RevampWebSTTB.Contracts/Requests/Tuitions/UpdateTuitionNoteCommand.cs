using MediatR;
using RevampWebSTTB.Contracts.Responses.Tuitions;

namespace RevampWebSTTB.Contracts.Requests.Tuitions
{
    public record UpdateTuitionNoteCommand : IRequest<UpdateTuitionNoteResponse>
    {
        public int Id { get; init; }
        public string Program { get; init; } = string.Empty;
        public string NoteText { get; init; } = string.Empty;
        public int SortOrder { get; init; }
    }
}
