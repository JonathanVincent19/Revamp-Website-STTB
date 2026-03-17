using MediatR;
using RevampWebSTTB.Contracts.Responses;

namespace RevampWebSTTB.Contracts.Requests.Contacts
{
    public record CreateContactMessageCommand : IRequest<StandardResponse>
    {
        public string Name { get; init; } = string.Empty;
        public string Email { get; init; } = string.Empty;
        public string? PhoneNumber { get; init; }
        public string? Subject { get; init; }
        public string Message { get; init; } = string.Empty;
    }
}
