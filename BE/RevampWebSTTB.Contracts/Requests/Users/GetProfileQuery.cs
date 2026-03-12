using MediatR;
using RevampWebSTTB.Contracts.Responses.Users;

namespace RevampWebSTTB.Contracts.Requests.Users
{
    public record GetProfileQuery : IRequest<GetProfileResponse>
    {
        public int UserId { get; init; }
    }
}
