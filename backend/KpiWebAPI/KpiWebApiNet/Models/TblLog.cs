namespace KpiWebApiNet.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class TblLog : DbContext
    {
        public TblLog()
            : base("name=TblLog")
        {
        }

        public virtual DbSet<ZDGG_tblFilialiFornitori> ZDGG_tblFilialiFornitori { get; set; }
        public virtual DbSet<ZDGG_tblLog> ZDGG_tblLog { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ZDGG_tblFilialiFornitori>()
                .Property(e => e.id)
                .HasPrecision(6, 0);

            modelBuilder.Entity<ZDGG_tblFilialiFornitori>()
                .Property(e => e.Ditta)
                .HasPrecision(5, 0);

            modelBuilder.Entity<ZDGG_tblFilialiFornitori>()
                .Property(e => e.TipoFor)
                .HasPrecision(1, 0);

            modelBuilder.Entity<ZDGG_tblFilialiFornitori>()
                .Property(e => e.Tipo)
                .HasPrecision(1, 0);

            modelBuilder.Entity<ZDGG_tblFilialiFornitori>()
                .Property(e => e.CodiceCliente)
                .HasPrecision(6, 0);

            modelBuilder.Entity<ZDGG_tblFilialiFornitori>()
                .Property(e => e.MailFiliale)
                .IsFixedLength();

            modelBuilder.Entity<ZDGG_tblFilialiFornitori>()
                .Property(e => e.CodPagFatturone)
                .IsFixedLength()
                .IsUnicode(false);

            modelBuilder.Entity<ZDGG_tblFilialiFornitori>()
                .Property(e => e.IdFilialeServer)
                .HasPrecision(6, 0);
        }
    }
}
