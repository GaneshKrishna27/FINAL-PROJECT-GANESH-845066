using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Emart.AdminSerrvice.Models
{
    public partial class EmartDBContext : DbContext
    {
        public EmartDBContext()
        {
        }

        public EmartDBContext(DbContextOptions<EmartDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Buyer> Buyer { get; set; }
        public virtual DbSet<Cart> Cart { get; set; }
        public virtual DbSet<Category> Category { get; set; }
        public virtual DbSet<Discounts> Discounts { get; set; }
        public virtual DbSet<Items> Items { get; set; }
        public virtual DbSet<PurchaseHistory> PurchaseHistory { get; set; }
        public virtual DbSet<Seller> Seller { get; set; }
        public virtual DbSet<SubCategory> SubCategory { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-3238117\\SQLEXPRESS;Initial Catalog=EmartDB;User ID=sa;Password=pass@word1");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Buyer>(entity =>
            {
                entity.HasKey(e => e.Bid)
                    .HasName("PK__Buyer__C6D111C9EBE976C8");

                entity.Property(e => e.Bid)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Datetime).HasColumnType("date");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Mobile)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Cart>(entity =>
            {
                entity.Property(e => e.Cartid)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Bid)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Cid)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Description)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Iid)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Image)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Itemname)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Remarks)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Scid)
                    .HasColumnName("SCid")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.B)
                    .WithMany(p => p.Cart)
                    .HasForeignKey(d => d.Bid)
                    .HasConstraintName("FK__Cart__Bid__5DCAEF64");

                entity.HasOne(d => d.C)
                    .WithMany(p => p.Cart)
                    .HasForeignKey(d => d.Cid)
                    .HasConstraintName("FK__Cart__Cid__5EBF139D");

                entity.HasOne(d => d.I)
                    .WithMany(p => p.Cart)
                    .HasForeignKey(d => d.Iid)
                    .HasConstraintName("FK__Cart__Iid__5CD6CB2B");

                entity.HasOne(d => d.Sc)
                    .WithMany(p => p.Cart)
                    .HasForeignKey(d => d.Scid)
                    .HasConstraintName("FK__Cart__SCid__5FB337D6");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.HasKey(e => e.Cid)
                    .HasName("PK__Category__C1FFD8617D2785A1");

                entity.Property(e => e.Cid)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Briefdetails)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Categoryname)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Discounts>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Did)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Discountcode)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Enddate).HasColumnType("date");

                entity.Property(e => e.Startdate).HasColumnType("date");
            });

            modelBuilder.Entity<Items>(entity =>
            {
                entity.HasKey(e => e.Iid)
                    .HasName("PK__Items__C4962F840AF1583B");

                entity.Property(e => e.Iid)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Cid)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Image)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Itemname)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Remarks)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Scid)
                    .HasColumnName("SCid")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Sid)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.C)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.Cid)
                    .HasConstraintName("FK__Items__Cid__35BCFE0A");

                entity.HasOne(d => d.Sc)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.Scid)
                    .HasConstraintName("FK__Items__SCid__36B12243");

                entity.HasOne(d => d.S)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.Sid)
                    .HasConstraintName("FK__Items__Sid__22AA2996");
            });

            modelBuilder.Entity<PurchaseHistory>(entity =>
            {
                entity.HasKey(e => e.Phid)
                    .HasName("PK__Purchase__59C7EB4D8D00EC4B");

                entity.Property(e => e.Phid)
                    .HasColumnName("PHid")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Bid)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Datetime).HasColumnType("date");

                entity.Property(e => e.Iid)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Remarks)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Sid)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.TransactionStatus)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Transactiontype)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.B)
                    .WithMany(p => p.PurchaseHistory)
                    .HasForeignKey(d => d.Bid)
                    .HasConstraintName("FK__PurchaseHis__Bid__1DE57479");

                entity.HasOne(d => d.I)
                    .WithMany(p => p.PurchaseHistory)
                    .HasForeignKey(d => d.Iid)
                    .HasConstraintName("FK__PurchaseHis__Iid__1ED998B2");

                entity.HasOne(d => d.S)
                    .WithMany(p => p.PurchaseHistory)
                    .HasForeignKey(d => d.Sid)
                    .HasConstraintName("FK__PurchaseHis__Sid__1CF15040");
            });

            modelBuilder.Entity<Seller>(entity =>
            {
                entity.HasKey(e => e.Sid)
                    .HasName("PK__Seller__CA1E5D7807789676");

                entity.Property(e => e.Sid)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Briefaboutcompany)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Companyname)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Gstin)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Mobile)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Website)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<SubCategory>(entity =>
            {
                entity.HasKey(e => e.Scid)
                    .HasName("PK__SubCateg__F7F7BF14C6ABFC80");

                entity.Property(e => e.Scid)
                    .HasColumnName("SCid")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Briefdetails)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Cid)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Gst)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.SubCategoryname)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.C)
                    .WithMany(p => p.SubCategory)
                    .HasForeignKey(d => d.Cid)
                    .HasConstraintName("FK__SubCategory__Cid__6E01572D");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
