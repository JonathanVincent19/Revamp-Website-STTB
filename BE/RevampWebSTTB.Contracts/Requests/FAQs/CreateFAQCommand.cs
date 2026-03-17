using MediatR;
using RevampWebSTTB.Contracts.Responses.FAQs;

namespace RevampWebSTTB.Contracts.Requests.FAQs
{
    public record CreateFAQCommand : IRequest<CreateFAQResponse>
        {
            public string Question { get; init; } = string.Empty;
            public string Answer { get; init; } = string.Empty;
            public int SortOrder { get; init; }
        }
}
