using System.Threading.Tasks;
using ProAgil.Domain;

namespace ProAgil.Repository
{
    public interface IProAgilRepository
    {
        ///Geral
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveChangesAsync();
        
        ///Evento
        Task<Evento> GetAllEventoAsyncById(int EventoId, bool includePalestrante);
        Task<Evento[]> GetAllEventoAsyncByTema(string tema, bool includePalestrante);
        Task<Evento[]> GetAllEventoAsync(bool includePalestrante);

        ///Palestrante
        Task<Palestrante> GetPalestranteAsyncById(int PalestranteId, bool includeEventos);
        Task<Palestrante[]> GetAllPalestranteAsync(bool includeEventos);

    }
}