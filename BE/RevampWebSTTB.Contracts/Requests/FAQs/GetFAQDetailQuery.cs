using MediatR;
using RevampWebSTTB.Contracts.Responses.FAQs;

namespace RevampWebSTTB.Contracts.Requests.FAQs
{
    public record GetFAQDetailQuery : IRequest<GetFAQDetailResponse>
        {
            public int Id { get; init; }
        }
}
