using MediatR;
using Microsoft.AspNetCore.Mvc;
using RevampWebSTTB.Contracts.Requests.Testimonials;

namespace RevampWebSTTB.WebApi.Controllers
{
    [ApiController]
    [Route("api/v1/testimonials")]
    public class TestimonialsController : ControllerBase
    {
        private readonly IMediator _mediator;

        public TestimonialsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> GetList([FromQuery] GetTestimonialsQuery query)
        {
            var response = await _mediator.Send(query);
            return Ok(response);
        }
    }
}
