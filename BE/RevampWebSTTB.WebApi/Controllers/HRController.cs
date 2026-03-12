using MediatR;
using Microsoft.AspNetCore.Mvc;
using RevampWebSTTB.Contracts.Requests.HR;

namespace RevampWebSTTB.WebApi.Controllers
{
    [ApiController]
    [Route("api/v1/")]
    public class HRController : ControllerBase
    {
        private readonly IMediator _mediator;

        public HRController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("lecturers")]
        public async Task<IActionResult> GetLecturerList()
        {
            var response = await _mediator.Send(new GetLecturersQuery());
            return Ok(response);
        }

        [HttpGet("Staff")]
        public async Task<IActionResult> GetStaffList()
        {
            var response = await _mediator.Send(new GetStaffQuery());
            return Ok(response);
        }
    }
}
