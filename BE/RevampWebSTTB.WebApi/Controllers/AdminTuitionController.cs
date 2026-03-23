using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RevampWebSTTB.Contracts.Requests.Tuitions;
using RevampWebSTTB.Contracts.Responses.Tuitions;

namespace RevampWebSTTB.WebApi.Controllers
{
    [ApiController]
    [Route("api/v1/admin/tuition")]
    [Authorize]
    public class AdminTuitionController : ControllerBase
    {
        private readonly IMediator _mediator;

        public AdminTuitionController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> GetTuitionFees()
        {
            var query = new GetTuitionFeesQuery();
            var response = await _mediator.Send(query);
            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetTuitionFeeDetail(int id)
        {
            var query = new GetTuitionFeeDetailQuery { Id = id };
            var response = await _mediator.Send(query);

            if (!response.Success)
            {
                return NotFound(response);
            }

            return Ok(response);
        }

        [HttpPost]
        public async Task<IActionResult> CreateTuitionFee([FromBody] CreateTuitionFeeCommand command)
        {
            var response = await _mediator.Send(command);

            if (!response.Success)
            {
                return BadRequest(response);
            }

            return Ok(response);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTuitionFee(int id, [FromBody] UpdateTuitionFeeCommand command)
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
        public async Task<IActionResult> DeleteTuitionFee(int id)
        {
            var command = new DeleteTuitionFeeCommand { Id = id };
            var response = await _mediator.Send(command);

            if (!response.Success)
            {
                return NotFound(response);
            }

            return Ok(response);
        }

        // =============================================
        // TUITION NOTES ENDPOINTS
        // =============================================

        [HttpGet("notes")]
        public async Task<IActionResult> GetTuitionNotes()
        {
            var query = new GetTuitionNotesQuery();
            var response = await _mediator.Send(query);
            return Ok(response);
        }

        [HttpPost("notes")]
        public async Task<IActionResult> CreateTuitionNote([FromBody] CreateTuitionNoteCommand command)
        {
            var response = await _mediator.Send(command);

            if (!response.Success)
            {
                return BadRequest(response);
            }

            return Ok(response);
        }

        [HttpPut("notes/{id}")]
        public async Task<IActionResult> UpdateTuitionNote(int id, [FromBody] UpdateTuitionNoteCommand command)
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

        [HttpDelete("notes/{id}")]
        public async Task<IActionResult> DeleteTuitionNote(int id)
        {
            var command = new DeleteTuitionNoteCommand { Id = id };
            var response = await _mediator.Send(command);

            if (!response.Success)
            {
                return NotFound(response);
            }

            return Ok(response);
        }
    }
}

