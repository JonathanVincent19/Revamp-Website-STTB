using MediatR;
using Microsoft.AspNetCore.Mvc;
using RevampWebSTTB.Contracts.Requests.Events;

namespace RevampWebSTTB.WebApi.Controllers
{
    [ApiController]
    [Route("api/v1/events")]
    public class EventsController : ControllerBase
    {
        private readonly IMediator _mediator;

        public EventsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> GetList([FromQuery] GetEventsQuery query)
        {
            var response = await _mediator.Send(query);
            return Ok(response);
        }
    }
}
