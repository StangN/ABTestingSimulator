using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ABTestingSimulator.Migrations
{
    public partial class AbSimulationVer1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ClickedButton",
                table: "DemoModelUsers",
                newName: "ABTestId");

            migrationBuilder.AddColumn<double>(
                name: "Warmth",
                table: "DemoModelUsers",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.CreateTable(
                name: "ABTests",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StartDate = table.Column<DateTime>(type: "date", nullable: false),
                    EndDate = table.Column<DateTime>(type: "date", nullable: false),
                    Impact = table.Column<int>(type: "int", nullable: false),
                    TotalProfit = table.Column<int>(type: "int", nullable: false),
                    TestState = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ABTests", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DemoModelUsers_ABTestId",
                table: "DemoModelUsers",
                column: "ABTestId");

            migrationBuilder.AddForeignKey(
                name: "FK_DemoModelUsers_ABTests_ABTestId",
                table: "DemoModelUsers",
                column: "ABTestId",
                principalTable: "ABTests",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DemoModelUsers_ABTests_ABTestId",
                table: "DemoModelUsers");

            migrationBuilder.DropTable(
                name: "ABTests");

            migrationBuilder.DropIndex(
                name: "IX_DemoModelUsers_ABTestId",
                table: "DemoModelUsers");

            migrationBuilder.DropColumn(
                name: "Warmth",
                table: "DemoModelUsers");

            migrationBuilder.RenameColumn(
                name: "ABTestId",
                table: "DemoModelUsers",
                newName: "ClickedButton");
        }
    }
}
