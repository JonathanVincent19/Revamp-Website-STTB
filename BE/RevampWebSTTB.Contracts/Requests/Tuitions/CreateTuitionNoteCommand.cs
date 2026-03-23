using MediatR;
using RevampWebSTTB.Contracts.Responses.Tuitions;

namespace RevampWebSTTB.Contracts.Requests.Tuitions
{
    public record CreateTuitionNoteCommand : IRequest<CreateTuitionNoteResponse>
    {
        public string Program { get; init; } = string.Empty;
        public string NoteText { get; init; } = string.Empty;
        public int SortOrder { get; init; }
    }
}
