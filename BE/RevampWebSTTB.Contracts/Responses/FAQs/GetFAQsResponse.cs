using System.Collections.Generic;

namespace RevampWebSTTB.Contracts.Responses.FAQs
{
    public record GetFAQsResponse
    {
        public bool Success { get; init; }
        public List<FAQDto> Data { get; init; } = new();
    }
}
