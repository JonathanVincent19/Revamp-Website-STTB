using MediatR;
using RevampWebSTTB.Contracts.Responses;

namespace RevampWebSTTB.Contracts.Requests.HR
{
    public record DeleteStaffCommand : IRequest<StandardResponse>
    {
        public int Id { get; init; }
    }
}
