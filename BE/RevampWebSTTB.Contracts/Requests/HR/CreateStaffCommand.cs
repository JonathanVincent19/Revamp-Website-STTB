using MediatR;
using RevampWebSTTB.Contracts.Responses;

namespace RevampWebSTTB.Contracts.Requests.HR
{
    public record CreateStaffCommand : IRequest<StandardResponse>
    {
        public string Name { get; init; } = string.Empty;
        public string? Photo { get; init; }
        public string? Position { get; init; }
        public string? Email { get; init; }
    }
}
