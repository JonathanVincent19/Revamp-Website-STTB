using System.Collections.Generic;

namespace RevampWebSTTB.Contracts.Responses.News
{
    public record GetNewsCategoriesResponse
    {
        public bool Success { get; init; }
        public List<NewsCategoryDto> Data { get; init; } = new();
    }

    public record NewsCategoryDto
    {
        public int Id { get; init; }
        public string Name { get; init; } = string.Empty;
    }
}
