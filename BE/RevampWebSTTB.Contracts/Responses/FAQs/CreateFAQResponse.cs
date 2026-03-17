using System.Collections.Generic;

namespace RevampWebSTTB.Contracts.Responses.FAQs
{
    public record CreateFAQResponse
    {
        public bool Success { get; init; }
        public string Message { get; init; } = string.Empty;
        public FAQDto? Data { get; init; }
    }
}
