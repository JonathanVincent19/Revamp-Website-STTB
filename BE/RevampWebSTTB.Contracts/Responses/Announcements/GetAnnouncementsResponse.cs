using System;
using System.Collections.Generic;
using System.Text;

namespace RevampWebSTTB.Contracts.Responses.Announcements
{
    public record GetAnnouncementsResponse
    {
        public bool Success { get; init; }
        public List<AnnouncementDto> Data { get; init; } = new();
    }

    public record AnnouncementDto
    {
        public int Id { get; init; }
        public string Title { get; init; } = string.Empty;
        public string Description { get; init; } = string.Empty;
        public bool IsUrgent { get; init; }
        public string? AttachmentPath { get; init; }
        public DateTime CreatedAt { get; init; }
    }
}
