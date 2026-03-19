using MediatR;
using Microsoft.AspNetCore.Mvc;
using RevampWebSTTB.Contracts.Requests.FAQs;
using RevampWebSTTB.Contracts.Responses.FAQs;

namespace RevampWebSTTB.WebApi.Controllers
{
    [ApiController]
    [Route("api/v1/faq")]
    public class FAQController : ControllerBase
    {
        private readonly IMediator _mediator;

        public FAQController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> GetFAQs([FromQuery] string? category = null)
        {
            var query = new GetFAQsQuery { Category = category };
            var response = await _mediator.Send(query);
            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetFAQDetail(int id)
        {
            var query = new GetFAQDetailQuery { Id = id };
            var response = await _mediator.Send(query);

            if (!response.Success)
            {
                return NotFound(response);
            }

            return Ok(response);
        }
    }
}

