namespace KpiWebApiNet.Models
{
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class ZDGG_tblLog
    {
        [JsonIgnore]
        public int Id { get; set; }

        [StringLength(100)]
        [Column("Filiale")]
        public string filiale { get; set; }
        [JsonIgnore]
        public int? IdCentro { get; set; }

        [StringLength(250)]
        [Column("DescrizioneBreve")]
        public string note { get; set; }

        public bool esito
        {
            get
            {
                return (this.note.ToLower() == "ok");
            }
        }

        [StringLength(4000)]
        [JsonIgnore]
        public string DescrizioneLunga { get; set; }

        [StringLength(100)]
        [Column("Applicativo")]
        public string processo { get; set; }

        [JsonIgnore]
        public bool Importante { get; set; }

        [JsonIgnore]
        public bool Controllato { get; set; }

        [Column("Data")]
        public DateTime? data { get; set; }
    }
}
