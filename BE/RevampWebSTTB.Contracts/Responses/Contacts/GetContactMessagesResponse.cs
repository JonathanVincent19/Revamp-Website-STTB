using System.Collections.Generic;
using RevampWebSTTB.Contracts.Dto.Contacts;

namespace RevampWebSTTB.Contracts.Responses.Contacts
{
    public record GetContactMessagesResponse
    {
        public IEnumerable<ContactMessageDto> Messages { get; init; } = new List<ContactMessageDto>();
    }
}
