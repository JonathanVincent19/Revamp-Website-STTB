using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RevampWebSTTB.Contracts.Requests.News;
using System.Security.Claims;

namespace RevampWebSTTB.WebApi.Controllers
{
    [ApiController]
    [Route("api/v1/admin/news")]
    [Authorize] // Requires valid JWT
    public class AdminNewsController : ControllerBase
    {
        private readonly IMediator _mediator;

        public AdminNewsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        // POST: api/v1/admin/news
        [HttpPost]
        public async Task<IActionResult> CreateNews([FromBody] CreateNewsCommand command)
        {
            var author = User.FindFirstValue(ClaimTypes.Name);

            var commandWithAuthor = command with { Author = author };

            var response = await _mediator.Send(commandWithAuthor);

            if (!response.Success)
            {
                return BadRequest(response);
            }

            return Ok(response);
        }

        // PUT: api/v1/admin/news/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateNews(int id, [FromBody] UpdateNewsCommand command)
        {
            if (id != command.Id)
            {
                return BadRequest(new { Success = false, Message = "Route ID and payload ID mismatch." });
            }

            var author = User.FindFirstValue(ClaimTypes.Name);

            var commandWithAuthor = command with { Author = author };

            var response = await _mediator.Send(commandWithAuthor);

            if (!response.Success)
            {
                return NotFound(response);
            }

            return Ok(response);
        }

        // DELETE: api/v1/admin/news/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNews(int id)
        {
            var command = new DeleteNewsCommand { Id = id };
            var response = await _mediator.Send(command);

            if (!response.Success)
            {
                return NotFound(response);
            }

            return Ok(response);
        }
    }
}
