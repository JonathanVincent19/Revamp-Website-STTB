namespace RevampWebSTTB.Contracts.Responses.Users
{
    public record LogoutUserResponse
    {
        public bool Success { get; init; }
        public string Message { get; init; } = string.Empty;
    }
}
