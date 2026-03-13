namespace RevampWebSTTB.Contracts.Responses.Users
{
    public record GetProfileResponse
    {
        public bool Success { get; init; }
        public string Message { get; init; } = string.Empty;
        public UserDto? User { get; init; }
    }
}
