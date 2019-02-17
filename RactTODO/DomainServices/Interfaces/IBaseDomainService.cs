using System.Collections.Generic;
using RactTODO.Entities.Interfaces;

namespace RactTODO.DomainServices.Interfaces
{
    public interface IBaseDomainService<TEntity>
    {
        IEnumerable<TEntity> GetAll();
        void Save(TEntity entity);
        void Save(params TEntity[] entities);
        TEntity Get(long id);
        void Remove(long id);
        void Remove(params long[] ids);
        void Edit(TEntity entity);
        void Edit(params TEntity[] entities);
    }
}