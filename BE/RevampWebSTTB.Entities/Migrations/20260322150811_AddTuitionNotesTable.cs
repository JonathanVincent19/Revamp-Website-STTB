using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RevampWebSTTB.Entities.Migrations
{
    /// <inheritdoc />
    public partial class AddTuitionNotesTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TuitionNotes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Program = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    NoteText = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SortOrder = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TuitionNotes", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TuitionNotes");
        }
    }
}
