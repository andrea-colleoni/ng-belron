namespace KpiWebApiNet.Models
{
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class ZDGG_tblFilialiFornitori
    {
        [Required]
        [StringLength(100)]
        [Column("NomeCartella")]
        public string nome { get; set; }

        [Key]
        [Column("CodiceFornitore")]
        public decimal id { get; set; }

        [JsonIgnore]
        public decimal? Ditta { get; set; }
        [JsonIgnore]
        public decimal? TipoFor { get; set; }
        [JsonIgnore]
        public decimal? Tipo { get; set; }
        [JsonIgnore]
        public decimal? CodiceCliente { get; set; }
        [JsonIgnore]
        public double SpeseGaranzia { get; set; }
        [JsonIgnore]
        public double SpesePratica { get; set; }
        [JsonIgnore]
        public bool Automatico { get; set; }
        [JsonIgnore]
        public int? Utente { get; set; }

        [StringLength(50)]
        [JsonIgnore]
        public string FileFtp { get; set; }
        [JsonIgnore]
        public int? IdStato { get; set; }
        [JsonIgnore]
        public DateTime? DataInstallazione { get; set; }
        [JsonIgnore]
        public DateTime? DataPrimaPratica { get; set; }
        [JsonIgnore]
        public int? NumeroCentri { get; set; }
        [JsonIgnore]
        public bool Virtuoso { get; set; }
        [JsonIgnore]
        public bool Ridotto { get; set; }
        [JsonIgnore]
        public bool MailCentralizzate { get; set; }

        [StringLength(50)]
        [JsonIgnore]
        public string MailFiliale { get; set; }
        [JsonIgnore]
        public bool AssociatoApva { get; set; }
        [JsonIgnore]
        public int? MeseAss { get; set; }
        [JsonIgnore]
        public int? AnnoAss { get; set; }
        [JsonIgnore]
        public bool DWARF { get; set; }
        [JsonIgnore]
        public int PercentualeControllo { get; set; }
        [JsonIgnore]
        public bool AttivoVendite { get; set; }
        [JsonIgnore]
        public int OkModifiche153138 { get; set; }

        [StringLength(200)]
        [JsonIgnore]
        public string NoteModifiche { get; set; }

        [StringLength(50)]
        [JsonIgnore]
        public string OraFatturoni { get; set; }

        [Required]
        [StringLength(300)]
        [JsonIgnore]
        public string StringaConnessione { get; set; }

        [StringLength(50)]
        [JsonIgnore]
        public string ServerIp { get; set; }

        [StringLength(50)]
        [JsonIgnore]
        public string FtpUser { get; set; }

        [StringLength(50)]
        [JsonIgnore]
        public string FtpPassword { get; set; }
        [JsonIgnore]
        public bool Inattivo { get; set; }

        [StringLength(6)]
        [JsonIgnore]
        public string CodPagFatturone { get; set; }
        [JsonIgnore]
        public bool Mago2Attivo { get; set; }

        [StringLength(50)]
        [JsonIgnore]
        public string NomeConnStr { get; set; }

        [StringLength(50)]
        [JsonIgnore]
        public string ServerUser { get; set; }

        [StringLength(50)]
        [JsonIgnore]
        public string ServerPassword { get; set; }
        [JsonIgnore]
        public bool AccessoDB { get; set; }

        [StringLength(1000)]
        [JsonIgnore]
        public string Note { get; set; }

        [StringLength(500)]
        [JsonIgnore]
        public string SwTrasferimento { get; set; }

        [StringLength(500)]
        [JsonIgnore]
        public string SwControllo { get; set; }

        [StringLength(500)]
        [JsonIgnore]
        public string SwFatturone { get; set; }

        [StringLength(200)]
        [JsonIgnore]
        public string CartellaContratti { get; set; }

        [StringLength(200)]
        [JsonIgnore]
        public string PEC { get; set; }
        [JsonIgnore]
        public bool FtpPassivo { get; set; }
        [JsonIgnore]
        public decimal? IdFilialeServer { get; set; }
        [JsonIgnore]
        public bool NuovoContratto { get; set; }
        [JsonIgnore]
        public decimal? percentualeSpeseGestione { get; set; }
        [JsonIgnore]
        public DateTime? DataInizioNuovoContratto { get; set; }
        [JsonIgnore]
        public int? SoluzioneIT { get; set; }
        [JsonIgnore]
        public bool Gamma { get; set; }
        [JsonIgnore]
        public bool ADAS { get; set; }
        [JsonIgnore]
        public bool CRM { get; set; }
        [JsonIgnore]
        public bool ContrattoFlat { get; set; }
        [JsonIgnore]
        public DateTime? DataInizioContrattoFlat { get; set; }
        [JsonIgnore]
        public decimal? PercentualeQuotaAffiliazione { get; set; }
        [JsonIgnore]
        public decimal? PercentualeQuotaPubblicitaria { get; set; }
        [JsonIgnore]
        public bool? SelfBilling { get; set; }
    }
}
