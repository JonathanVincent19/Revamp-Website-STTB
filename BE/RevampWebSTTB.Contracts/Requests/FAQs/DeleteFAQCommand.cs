using MediatR;
using RevampWebSTTB.Contracts.Responses;

namespace RevampWebSTTB.Contracts.Requests.FAQs
{
    public record DeleteFAQCommand : IRequest<StandardResponse>
    {
        public int Id { get; init; }
    }
}
