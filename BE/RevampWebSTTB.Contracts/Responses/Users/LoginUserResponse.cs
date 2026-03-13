namespace RevampWebSTTB.Contracts.Responses.Users
{
    public record LoginUserResponse
    {
        public bool Success { get; init; }
        public string Message { get; init; } = string.Empty;
        public string Token { get; init; } = string.Empty;
        public UserDto? User { get; init; }
    }

    public record UserDto
    {
        public int Id { get; init; }
        public string Name { get; init; } = string.Empty;
        public string Email { get; init; } = string.Empty;
        public bool IsAdmin { get; init; }
    }
}
