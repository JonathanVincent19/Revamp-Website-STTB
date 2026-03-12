namespace RevampWebSTTB.Contracts.Responses.Contacts
{
    public record CreateContactMessageResponse
    {
        public bool Success { get; init; }
        public string Message { get; init; } = string.Empty;
    }
}
