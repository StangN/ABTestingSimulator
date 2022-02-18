﻿// <auto-generated />
using ABTestingSimulator.Calculator;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace ABTestingSimulator.Migrations
{
    [DbContext(typeof(CalculatorContext))]
    [Migration("20220104133245_AddUserAmountTableToABTestTable")]
    partial class AddUserAmountTableToABTestTable
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.10")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ABTestingSimulator.Models.ABTest", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Impact")
                        .HasColumnType("int");

                    b.Property<bool>("IsATest")
                        .HasColumnType("bit");

                    b.Property<int>("TestState")
                        .HasColumnType("int");

                    b.Property<int>("TotalProfit")
                        .HasColumnType("int");

                    b.Property<int>("UserAmount")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("ABTests");
                });

            modelBuilder.Entity("ABTestingSimulator.Models.DemoModelUser", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("ABTestId")
                        .HasColumnType("int");

                    b.Property<int>("Profit")
                        .HasColumnType("int");

                    b.Property<double>("Warmth")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.HasIndex("ABTestId");

                    b.HasIndex("Profit");

                    b.ToTable("DemoModelUsers");
                });

            modelBuilder.Entity("ABTestingSimulator.Models.DemoModelUser", b =>
                {
                    b.HasOne("ABTestingSimulator.Models.ABTest", "ABTest")
                        .WithMany()
                        .HasForeignKey("ABTestId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("ABTest");
                });
#pragma warning restore 612, 618
        }
    }
}
