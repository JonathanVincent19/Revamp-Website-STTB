using MediatR;
using Microsoft.AspNetCore.Mvc;
using RevampWebSTTB.Contracts.Requests.Achievements;

namespace RevampWebSTTB.WebApi.Controllers
{
    [ApiController]
    [Route("api/v1/achievements")]
    public class AchievementsController : ControllerBase
    {
        private readonly IMediator _mediator;

        public AchievementsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> GetList([FromQuery] GetAchievementsQuery query)
        {
            var response = await _mediator.Send(query);
            return Ok(response);
        }
    }
}
