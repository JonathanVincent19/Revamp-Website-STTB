using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RevampWebSTTB.Entities.Migrations
{
    /// <inheritdoc />
    public partial class AddStudyProgramIdToCourseCategory : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "StudyProgramId",
                table: "CourseCategories",
                type: "int",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "StudyProgramId",
                table: "CourseCategories");
        }
    }
}
