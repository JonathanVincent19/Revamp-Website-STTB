using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RevampWebSTTB.Entities.Migrations
{
    /// <inheritdoc />
    public partial class AddCategoryAndTypeToGalleryAlbum : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Category",
                table: "GalleryAlbums",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Type",
                table: "GalleryAlbums",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Category",
                table: "GalleryAlbums");

            migrationBuilder.DropColumn(
                name: "Type",
                table: "GalleryAlbums");
        }
    }
}
