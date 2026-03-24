using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RevampWebSTTB.Entities.Migrations
{
    /// <inheritdoc />
    public partial class AddUrlToGalleryAlbum : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Url",
                table: "GalleryAlbums",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Url",
                table: "GalleryAlbums");
        }
    }
}
