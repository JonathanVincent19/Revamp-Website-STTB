using System;
using System.Collections.Generic;
using System.Text;

namespace RevampWebSTTB.Contracts.Responses.News
{
    public record GetNewsDetailResponse
    {
        public bool Success { get; init; }
        public NewsDetailDto Data { get; init; } = new();
    }

    public record NewsDetailDto
    {
        public int Id { get; init; }
        public string Title { get; init; } = string.Empty;
        public string Content { get; init; } = string.Empty;
        public string FeaturedImage { get; init; } = string.Empty;
        public string Author { get; init; } = string.Empty;
        public int ViewCount { get; init; }
        public DateTime PublishedAt { get; init; }
        public List<RelatedNewsDto> RelatedNews { get; init; } = new();
    }

    public record RelatedNewsDto
    {
        public int Id { get; init; }
        public string Title { get; init; } = string.Empty;
        public string Slug { get; init; } = string.Empty;
        // Add other fields as needed based on API implementation
    }
}
