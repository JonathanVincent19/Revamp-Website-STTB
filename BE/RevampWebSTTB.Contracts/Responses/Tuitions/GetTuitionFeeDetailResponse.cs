using System.Collections.Generic;

namespace RevampWebSTTB.Contracts.Responses.Tuitions
{
    public record GetTuitionFeeDetailResponse
    {
        public bool Success { get; init; }
        public string Message { get; init; } = string.Empty;
        public TuitionFeeDto? Data { get; init; }
    }
}
