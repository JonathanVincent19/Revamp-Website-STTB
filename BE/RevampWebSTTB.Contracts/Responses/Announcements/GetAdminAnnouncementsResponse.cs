using System;
using System.Collections.Generic;

namespace RevampWebSTTB.Contracts.Responses.Announcements
{
    public class GetAdminAnnouncementsResponse
    {
        public bool Success { get; set; } = true;
        public string Message { get; set; } = "Announcements fetched successfully.";
        public IEnumerable<AdminAnnouncementDto> Data { get; set; } = new List<AdminAnnouncementDto>();
        public int TotalCount { get; set; }
        public int Page { get; set; }
        public int PageSize { get; set; }
    }

    public class AdminAnnouncementDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
        public string? AttachmentPath { get; set; }
        public bool IsUrgent { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
