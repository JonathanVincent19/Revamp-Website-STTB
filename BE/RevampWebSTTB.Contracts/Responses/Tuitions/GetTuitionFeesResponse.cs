using System.Collections.Generic;

namespace RevampWebSTTB.Contracts.Responses.Tuitions
{
    public record GetTuitionFeesResponse
    {
        public bool Success { get; init; }
        public List<TuitionFeeDto> Data { get; init; } = new();
    }
}
