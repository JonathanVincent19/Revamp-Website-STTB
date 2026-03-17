using MediatR;
using RevampWebSTTB.Contracts.Responses.FAQs;

namespace RevampWebSTTB.Contracts.Requests.FAQs
{
    public record GetFAQsQuery : IRequest<GetFAQsResponse>
        {
        }
}
