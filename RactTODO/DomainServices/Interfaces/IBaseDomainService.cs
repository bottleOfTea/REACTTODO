using System.Collections.Generic;
using RactTODO.Entities.Interfaces;

namespace RactTODO.DomainServices.Interfaces
{
    public interface IBaseDomainService<TEntity>
    {
        IEnumerable<TEntity> GetAll();
        TEntity Save(TEntity entity);
        IEnumerable<TEntity> Save(params TEntity[] entities);
        TEntity Get(long id);
        TEntity Remove(long id);
        IEnumerable<TEntity>  Remove(params long[] ids);
        TEntity Edit(TEntity entity);
        IEnumerable<TEntity> Edit(params TEntity[] entities);
    }
}