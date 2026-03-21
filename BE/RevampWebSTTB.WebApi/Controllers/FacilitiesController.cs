using MediatR;
using Microsoft.AspNetCore.Mvc;
using RevampWebSTTB.Contracts.Requests.Facilities;

namespace RevampWebSTTB.WebApi.Controllers
{
    [ApiController]
    [Route("api/v1/facilities")]
    public class FacilitiesController : ControllerBase
    {
        private readonly IMediator _mediator;

        public FacilitiesController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> GetFacilities()
        {
            var query = new GetFacilitiesQuery();
            var response = await _mediator.Send(query);
            return Ok(response);
        }

        [HttpGet("{slug}")]
        public async Task<IActionResult> GetFacilityDetail(string slug)
        {
            var query = new GetFacilityDetailQuery { Slug = slug };
            var response = await _mediator.Send(query);

            if (!response.Success)
            {
                return NotFound(response);
            }

            return Ok(response);
        }
    }
}
