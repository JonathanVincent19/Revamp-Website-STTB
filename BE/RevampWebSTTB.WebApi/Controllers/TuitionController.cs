using MediatR;
using Microsoft.AspNetCore.Mvc;
using RevampWebSTTB.Contracts.Requests.Tuitions;
using RevampWebSTTB.Contracts.Responses.Tuitions;

namespace RevampWebSTTB.WebApi.Controllers
{
    [ApiController]
    [Route("api/v1/tuition")]
    public class TuitionController : ControllerBase
    {
        private readonly IMediator _mediator;

        public TuitionController(IMediator mediator)
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

        [HttpGet("notes")]
        public async Task<IActionResult> GetTuitionNotes()
        {
            var query = new GetTuitionNotesQuery();
            var response = await _mediator.Send(query);
            return Ok(response);
        }
    }
}

