using MediatR;
using Microsoft.AspNetCore.Mvc;
using RevampWebSTTB.Contracts.Requests.Albums;

namespace RevampWebSTTB.WebApi.Controllers
{
    [ApiController]
    [Route("api/v1/gallery")]
    public class GalleryController : ControllerBase
    {
        private readonly IMediator _mediator;

        public GalleryController(IMediator mediator)
        {
            _mediator = mediator;
        }

        // GET: api/v1/gallery/albums
        [HttpGet("albums")]
        public async Task<IActionResult> GetAlbums()
        {
            var response = await _mediator.Send(new GetAlbumsQuery());
            return Ok(response);
        }

        // GET: api/v1/gallery/albums/5
        [HttpGet("albums/{id}")]
        public async Task<IActionResult> GetAlbumDetail(int id)
        {
            var query = new GetAlbumDetailQuery { Id = id };
            var response = await _mediator.Send(query);

            if (!response.Success)
            {
                return NotFound(response); // Returns 404
            }
            return Ok(response);
        }
    }
}
