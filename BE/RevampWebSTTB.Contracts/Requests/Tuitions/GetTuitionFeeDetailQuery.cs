using MediatR;
using RevampWebSTTB.Contracts.Responses.Tuitions;

namespace RevampWebSTTB.Contracts.Requests.Tuitions
{
    public record GetTuitionFeeDetailQuery : IRequest<GetTuitionFeeDetailResponse>
        {
            public int Id { get; init; }
        }
}
