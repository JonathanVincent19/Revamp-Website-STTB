using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RevampWebSTTB.Contracts.Requests.Albums;

namespace RevampWebSTTB.WebApi.Controllers
{
    [ApiController]
    [Route("api/v1/admin/albums")]
    [Authorize] // Requires valid JWT
    public class AdminAlbumsController : ControllerBase
    {
        private readonly IMediator _mediator;

        public AdminAlbumsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        // POST: api/v1/admin/albums
        [HttpPost]
        public async Task<IActionResult> CreateAlbum([FromBody] CreateAlbumCommand command)
        {
            var response = await _mediator.Send(command);
            
            if (!response.Success)
            {
                return BadRequest(response); 
            }

            return Ok(response);
        }

        // PUT: api/v1/admin/albums/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAlbum(int id, [FromBody] UpdateAlbumCommand command)
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

        // DELETE: api/v1/admin/albums/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAlbum(int id)
        {
            var command = new DeleteAlbumCommand { Id = id };
            var response = await _mediator.Send(command);

            if (!response.Success)
            {
                return NotFound(response);
            }

            return Ok(response);
        }
    }
}
