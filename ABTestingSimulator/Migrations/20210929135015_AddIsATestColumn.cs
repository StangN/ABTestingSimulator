using Microsoft.EntityFrameworkCore.Migrations;

namespace ABTestingSimulator.Migrations
{
    public partial class AddIsATestColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsATest",
                table: "ABTests",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsATest",
                table: "ABTests");
        }
    }
}
