using System.Collections.Generic;

namespace RevampWebSTTB.Contracts.Responses.Tuitions
{
    public record TuitionFeeDto
    {
        public int Id { get; init; }
        public string Program { get; init; } = string.Empty;
        public string ItemName { get; init; } = string.Empty;
        public decimal Amount { get; set; }
    }
}
