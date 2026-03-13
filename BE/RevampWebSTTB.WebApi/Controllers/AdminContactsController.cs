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

        // GET: api/v1/admin/contacts
        [HttpGet]
        public async Task<IActionResult> GetContactMessages()
        {
            var response = await _mediator.Send(new GetContactMessagesQuery());
            return Ok(response);
        }
    }
}
