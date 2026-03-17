using MediatR;
using RevampWebSTTB.Contracts.Responses.Tuitions;

namespace RevampWebSTTB.Contracts.Requests.Tuitions
{
    public record GetTuitionFeesQuery : IRequest<GetTuitionFeesResponse>
        {
        }
}
