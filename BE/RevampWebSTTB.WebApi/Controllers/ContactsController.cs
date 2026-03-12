using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using RevampWebSTTB.Contracts.Requests.Contacts;

namespace RevampWebSTTB.WebApi.Controllers
{
    [ApiController]
    [Route("api/v1/contacts")]
    public class ContactsController : ControllerBase
    {
        private readonly IMediator _mediator;

        public ContactsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        // POST: api/v1/contacts
        [HttpPost]
        public async Task<IActionResult> CreateContactMessage([FromBody] CreateContactMessageCommand command)
        {
            var response = await _mediator.Send(command);

            if (!response.Success)
            {
                return BadRequest(response); // Handle validation failures gracefully
            }

            return Ok(response);
        }
    }
}
