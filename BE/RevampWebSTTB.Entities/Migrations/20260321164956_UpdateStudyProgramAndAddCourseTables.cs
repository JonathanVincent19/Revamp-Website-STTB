using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RevampWebSTTB.Entities.Migrations
{
    /// <inheritdoc />
    public partial class UpdateStudyProgramAndAddCourseTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Curriculum",
                table: "StudyPrograms");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "StudyPrograms");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "StudyPrograms");

            migrationBuilder.RenameColumn(
                name: "Semesters",
                table: "StudyPrograms",
                newName: "TotalCredits");

            migrationBuilder.AddColumn<string>(
                name: "Degree",
                table: "StudyPrograms",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "LearningSystem",
                table: "StudyPrograms",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "StudyDuration",
                table: "StudyPrograms",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "CourseCategories",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    TotalSKS = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CourseCategories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Courses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    Credits = table.Column<int>(type: "int", nullable: false),
                    CategoryId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Courses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Courses_CourseCategories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "CourseCategories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Courses_CategoryId",
                table: "Courses",
                column: "CategoryId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Courses");

            migrationBuilder.DropTable(
                name: "CourseCategories");

            migrationBuilder.DropColumn(
                name: "Degree",
                table: "StudyPrograms");

            migrationBuilder.DropColumn(
                name: "LearningSystem",
                table: "StudyPrograms");

            migrationBuilder.DropColumn(
                name: "StudyDuration",
                table: "StudyPrograms");

            migrationBuilder.RenameColumn(
                name: "TotalCredits",
                table: "StudyPrograms",
                newName: "Semesters");

            migrationBuilder.AddColumn<string>(
                name: "Curriculum",
                table: "StudyPrograms",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "StudyPrograms",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "StudyPrograms",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
