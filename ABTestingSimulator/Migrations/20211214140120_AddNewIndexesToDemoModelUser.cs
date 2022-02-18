using Microsoft.EntityFrameworkCore.Migrations;

namespace ABTestingSimulator.Migrations
{
    public partial class AddNewIndexesToDemoModelUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_DemoModelUsers_Profit",
                table: "DemoModelUsers",
                column: "Profit");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_DemoModelUsers_Profit",
                table: "DemoModelUsers");
        }
    }
}
