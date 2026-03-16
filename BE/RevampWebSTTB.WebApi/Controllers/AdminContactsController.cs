using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RevampWebSTTB.Contracts.Requests.Contacts;

namespace RevampWebSTTB.WebApi.Controllers
{
    [ApiController]
    [Route("api/v1/admin/contacts")]
    [Authorize]
    public class AdminContactsController : ControllerBase
    {
        private readonly IMediator _mediator;

        public AdminContactsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        // GET: api/v1/admin/contacts?page=1&pageSize=10&isRead=false
        [HttpGet]
        public async Task<IActionResult> GetContactMessages([FromQuery] GetContactMessagesQuery query)
        {
            var response = await _mediator.Send(query);
            return Ok(response);
        }

        // PUT: api/v1/admin/contacts/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> MarkContactRead(int id, [FromBody] MarkContactReadCommand command)
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

        // DELETE: api/v1/admin/contacts/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContactMessage(int id)
        {
            var command = new DeleteContactMessageCommand { Id = id };
            var response = await _mediator.Send(command);

            if (!response.Success)
            {
                return NotFound(response);
            }

            return Ok(response);
        }
    }
}
