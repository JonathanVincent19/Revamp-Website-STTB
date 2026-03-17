using MediatR;
using Microsoft.AspNetCore.Mvc;
using RevampWebSTTB.Contracts.Requests.News;

namespace RevampWebSTTB.WebApi.Controllers
{
    [ApiController]
    [Route("api/v1/categories")]
    public class CategoriesController : ControllerBase
    {
        private readonly IMediator _mediator;

        public CategoriesController(IMediator mediator)
        {
            _mediator = mediator;
        }

        // GET: api/v1/categories
        [HttpGet]
        public async Task<IActionResult> GetCategories()
        {
            var query = new GetNewsCategoriesQuery();
            var response = await _mediator.Send(query);
            return Ok(response);
        }
    }
}
