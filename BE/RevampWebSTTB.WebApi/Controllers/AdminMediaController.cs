using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RevampWebSTTB.Contracts.Requests.Media;

namespace RevampWebSTTB.WebApi.Controllers
{
    [ApiController]
    [Route("api/v1/admin/media")]
    [Authorize] // Requires valid JWT
    public class AdminMediaController : ControllerBase
    {
        private readonly IMediator _mediator;

        public AdminMediaController(IMediator mediator)
        {
            _mediator = mediator;
        }

        // POST: api/v1/admin/media
        [HttpPost]
        public async Task<IActionResult> CreateMedia([FromBody] CreateMediaCommand command)
        {
            var response = await _mediator.Send(command);
            
            if (!response.Success)
            {
                return BadRequest(response); // Basic bad request for failure handling (e.g validation)
            }

            return Ok(response);
        }

        // PUT: api/v1/admin/media/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMedia(int id, [FromBody] UpdateMediaCommand command)
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

        // DELETE: api/v1/admin/media/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMedia(int id)
        {
            var command = new DeleteMediaCommand { Id = id };
            var response = await _mediator.Send(command);

            if (!response.Success)
            {
                return NotFound(response);
            }

            return Ok(response);
        }
    }
}
