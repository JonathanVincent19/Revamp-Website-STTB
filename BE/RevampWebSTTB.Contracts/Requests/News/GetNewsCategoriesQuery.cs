using MediatR;
using RevampWebSTTB.Contracts.Responses.News;

namespace RevampWebSTTB.Contracts.Requests.News
{
    public record GetNewsCategoriesQuery : IRequest<GetNewsCategoriesResponse>
        {
        }
}
