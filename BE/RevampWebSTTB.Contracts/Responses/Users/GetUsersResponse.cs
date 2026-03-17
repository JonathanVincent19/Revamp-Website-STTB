using System;
using System.Collections.Generic;

namespace RevampWebSTTB.Contracts.Responses.Users
{
    public record GetUsersResponse
    {
        public bool Success { get; init; }
        public List<AdminUserDto> Data { get; init; } = new();
    }

    public record AdminUserDto
    {
        public int Id { get; init; }
        public string Name { get; init; } = string.Empty;
        public string Email { get; init; } = string.Empty;
        public bool IsAdmin { get; init; }
        public DateTime CreatedAt { get; init; }
    }
}
