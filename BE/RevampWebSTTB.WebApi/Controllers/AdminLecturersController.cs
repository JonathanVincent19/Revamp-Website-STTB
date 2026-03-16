using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RevampWebSTTB.Contracts.Requests.HR;

namespace RevampWebSTTB.WebApi.Controllers
{
    [ApiController]
    [Route("api/v1/admin/lecturers")]
    [Authorize]
    public class AdminLecturersController : ControllerBase
    {
        private readonly IMediator _mediator;

        public AdminLecturersController(IMediator mediator)
        {
            _mediator = mediator;
        }

        // POST: api/v1/admin/lecturers
        [HttpPost]
        public async Task<IActionResult> CreateLecturer([FromBody] CreateLecturerCommand command)
        {
            var response = await _mediator.Send(command);

            if (!response.Success)
            {
                return BadRequest(response);
            }

            return Ok(response);
        }

        // PUT: api/v1/admin/lecturers/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateLecturer(int id, [FromBody] UpdateLecturerCommand command)
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

        // DELETE: api/v1/admin/lecturers/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLecturer(int id)
        {
            var command = new DeleteLecturerCommand { Id = id };
            var response = await _mediator.Send(command);

            if (!response.Success)
            {
                return NotFound(response);
            }

            return Ok(response);
        }
    }
}
