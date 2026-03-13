using MediatR;
using Microsoft.AspNetCore.Mvc;
using RevampWebSTTB.Contracts.Requests.News;

namespace RevampWebSTTB.WebApi.Controllers
{
    [ApiController]
    [Route("api/v1/news")]
    public class NewsController : ControllerBase
    {
        private readonly IMediator _mediator;

        public NewsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        // GET: api/v1/news
        [HttpGet]
        public async Task<IActionResult> GetList([FromQuery] GetNewsListQuery query)
        {
            var response = await _mediator.Send(query);
            return Ok(response);
        }

        // GET: api/v1/news/{slug}
        [HttpGet("{slug}")]
        public async Task<IActionResult> GetDetail(string slug)
        {
            var query = new GetNewsDetailQuery { Slug = slug };
            var response = await _mediator.Send(query);

            if (!response.Success) return NotFound(response);

            return Ok(response);
        }
    }
}
