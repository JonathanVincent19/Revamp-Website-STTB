using MediatR;
using RevampWebSTTB.Contracts.Responses.Tuitions;

namespace RevampWebSTTB.Contracts.Requests.Tuitions
{
    public record CreateTuitionFeeCommand : IRequest<CreateTuitionFeeResponse>
        {
            public string Program { get; init; } = string.Empty;
            public string ItemName { get; init; } = string.Empty;
            public decimal Amount { get; init; }
        }
}
