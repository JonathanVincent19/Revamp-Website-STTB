using MediatR;
using RevampWebSTTB.Contracts.Responses.FAQs;

namespace RevampWebSTTB.Contracts.Requests.FAQs
{
    public record GetFAQsQuery : IRequest<GetFAQsResponse>
    {
        public string? Category { get; init; }
    }
}

