using MediatR;
using Microsoft.AspNetCore.Mvc;
using RevampWebSTTB.Contracts.Requests.CourseCategories;

namespace RevampWebSTTB.WebApi.Controllers
{
    [ApiController]
    [Route("api/v1/course-categories")]
    public class CourseCategoriesController : ControllerBase
    {
        private readonly IMediator _mediator;

        public CourseCategoriesController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> GetCourseCategories()
        {
            var query = new GetCourseCategoriesQuery();
            var response = await _mediator.Send(query);
            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCourseCategoryDetail(int id)
        {
            var query = new GetCourseCategoryDetailQuery { Id = id };
            var response = await _mediator.Send(query);

            if (!response.Success)
            {
                return NotFound(response);
            }

            return Ok(response);
        }
    }
}
