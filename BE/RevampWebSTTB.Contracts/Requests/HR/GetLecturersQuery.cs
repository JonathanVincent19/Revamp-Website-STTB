using MediatR;
using RevampWebSTTB.Contracts.Responses.HR;

namespace RevampWebSTTB.Contracts.Requests.HR
{
    public record GetLecturersQuery : IRequest<GetLecturersResponse>
    {

    }
}
