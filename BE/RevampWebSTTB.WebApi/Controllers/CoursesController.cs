using MediatR;
using Microsoft.AspNetCore.Mvc;
using RevampWebSTTB.Contracts.Requests.Courses;

namespace RevampWebSTTB.WebApi.Controllers
{
    [ApiController]
    [Route("api/v1/courses")]
    public class CoursesController : ControllerBase
    {
        private readonly IMediator _mediator;

        public CoursesController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> GetCourses()
        {
            var query = new GetCoursesQuery();
            var response = await _mediator.Send(query);
            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCourseDetail(int id)
        {
            var query = new GetCourseDetailQuery { Id = id };
            var response = await _mediator.Send(query);

            if (!response.Success)
            {
                return NotFound(response);
            }

            return Ok(response);
        }
    }
}
