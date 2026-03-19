using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RevampWebSTTB.Contracts.Requests.FAQs;
using RevampWebSTTB.Contracts.Responses.FAQs;

namespace RevampWebSTTB.WebApi.Controllers
{
    [ApiController]
    [Route("api/v1/admin/faq")]
    [Authorize]
    public class AdminFAQController : ControllerBase
    {
        private readonly IMediator _mediator;

        public AdminFAQController(IMediator mediator)
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

        [HttpPost]
        public async Task<IActionResult> CreateFAQ([FromBody] CreateFAQCommand command)
        {
            var response = await _mediator.Send(command);

            if (!response.Success)
            {
                return BadRequest(response);
            }

            return Ok(response);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateFAQ(int id, [FromBody] UpdateFAQCommand command)
        {
            if (id != command.Id)
            {
                return BadRequest(new { Success = false, Message = "Route ID and payload ID mismatch." });
            }

            var response = await _mediator.Send(command);

            if (!response.Success)
            {
                return NotFound(response);
            }

            return Ok(response);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFAQ(int id)
        {
            var command = new DeleteFAQCommand { Id = id };
            var response = await _mediator.Send(command);

            if (!response.Success)
            {
                return NotFound(response);
            }

            return Ok(response);
        }
    }
}
