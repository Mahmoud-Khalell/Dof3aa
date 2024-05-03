using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Core.Migrations
{
    public partial class init1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cources",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false),
                    code = table.Column<int>(type: "int", nullable: false),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cources", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Courceemployee",
                columns: table => new
                {
                    CourcesId = table.Column<int>(type: "int", nullable: false),
                    employeesId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Courceemployee", x => new { x.CourcesId, x.employeesId });
                    table.ForeignKey(
                        name: "FK_Courceemployee_Cources_CourcesId",
                        column: x => x.CourcesId,
                        principalTable: "Cources",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Courceemployee_employees_employeesId",
                        column: x => x.employeesId,
                        principalTable: "employees",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Courceemployee_employeesId",
                table: "Courceemployee",
                column: "employeesId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Courceemployee");

            migrationBuilder.DropTable(
                name: "Cources");
        }
    }
}
