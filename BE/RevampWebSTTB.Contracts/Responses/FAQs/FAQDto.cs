using System.Collections.Generic;

namespace RevampWebSTTB.Contracts.Responses.FAQs
{
    public record FAQDto
    {
        public int Id { get; init; }
        public string Question { get; init; } = string.Empty;
        public string Answer { get; init; } = string.Empty;
        public int SortOrder { get; set; }
        public string Category { get; init; } = string.Empty;
    }
}

