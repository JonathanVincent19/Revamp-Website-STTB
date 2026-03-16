using System;
using System.Collections.Generic;

namespace RevampWebSTTB.Contracts.Responses.Contacts
{
    public record GetContactMessagesResponse
    {
        public bool Success { get; init; }
        public List<ContactMessageDto> Data { get; init; } = new();
        public int TotalCount { get; init; }
    }

    public record ContactMessageDto
    {
        public int Id { get; init; }
        public string Name { get; init; } = string.Empty;
        public string Email { get; init; } = string.Empty;
        public string? PhoneNumber { get; init; }
        public string? Subject { get; init; }
        public string Message { get; init; } = string.Empty;
        public bool IsRead { get; init; }
        public DateTime CreatedAt { get; init; }
    }
}
