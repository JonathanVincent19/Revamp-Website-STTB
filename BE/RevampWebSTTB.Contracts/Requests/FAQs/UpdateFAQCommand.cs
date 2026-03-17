using MediatR;
using RevampWebSTTB.Contracts.Responses.FAQs;

namespace RevampWebSTTB.Contracts.Requests.FAQs
{
    public record UpdateFAQCommand : IRequest<UpdateFAQResponse>
        {
            public int Id { get; init; }
            public string Question { get; init; } = string.Empty;
            public string Answer { get; init; } = string.Empty;
            public int SortOrder { get; init; }
        }
}
