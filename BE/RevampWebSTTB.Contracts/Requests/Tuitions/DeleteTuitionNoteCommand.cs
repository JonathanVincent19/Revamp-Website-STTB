using MediatR;
using RevampWebSTTB.Contracts.Responses.Tuitions;

namespace RevampWebSTTB.Contracts.Requests.Tuitions
{
    public record DeleteTuitionNoteCommand : IRequest<DeleteTuitionNoteResponse>
    {
        public int Id { get; init; }
    }
}
