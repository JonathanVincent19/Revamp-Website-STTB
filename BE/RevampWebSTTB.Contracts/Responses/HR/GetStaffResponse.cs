namespace RevampWebSTTB.Contracts.Responses.HR
{
    public record GetStaffResponse
    {
        public bool Success { get; init; }
        public List<StaffDto> Data { get; init; } = new();
    }

    public record StaffDto
    {
        public int Id { get; init; }
        public string Name { get; init; } = string.Empty;
        public string? Photo { get; init; }
        public string? Position { get; init; }
        public string? Nip { get; init; } // Specific to staff based on notes
        public string? Department { get; init; } // Specific to staff based on notes
        public string? Email { get; init; }
    }
}
