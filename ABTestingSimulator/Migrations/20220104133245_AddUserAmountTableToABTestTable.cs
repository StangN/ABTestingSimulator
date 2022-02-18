using Microsoft.EntityFrameworkCore.Migrations;

namespace ABTestingSimulator.Migrations
{
    public partial class AddUserAmountTableToABTestTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserAmount",
                table: "ABTests",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserAmount",
                table: "ABTests");
        }
    }
}
