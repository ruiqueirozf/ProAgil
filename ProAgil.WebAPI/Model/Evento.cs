using System;

namespace ProAgil.WebAPI.Model
{
    public class Evento
    {
        public int EventoId { get; set; }
        public String Local { get; set; }
        public String DataEvento { get; set; }
        public String Tema { get; set; }
        public int QntPessoas { get; set; }
        public String Lote { get; set; }
        public String ImagemURL { get; set; }

    }
}