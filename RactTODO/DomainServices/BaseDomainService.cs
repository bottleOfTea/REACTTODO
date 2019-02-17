using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using RactTODO.DomainServices.Interfaces;
using RactTODO.Entities.Interfaces;

namespace RactTODO.DomainServices
{
    public abstract class BaseDomainService<TEntity> : IBaseDomainService<TEntity> where TEntity : IHasId
    {
        public virtual IEnumerable<TEntity> GetAll()
        {
            return new List<TEntity>();
        }

        public void Save(TEntity entity)
        {
            Save(new[] {entity});
        }

        public void Save(params TEntity[] entities)
        {
            var list = new List<TEntity>();
            foreach (var entity in entities)
            {
                InternSave(entity);
                list.Add(entity);
            }
        }

        public virtual void InternSave(TEntity entity)
        {
        }

        public virtual TEntity Get(long id)
        {
            return new List<TEntity>().Find(entity => entity.Id == id);
        }

        public void Remove(long id)
        {
            var en = Get(id);
            if (en == null)
                return;
        }

        public void Remove(params long[] ids)
        {
            foreach (var id in ids)
            {
                Remove(id);
            }
        }

        public void Edit(TEntity entity)
        {
            Edit(new[] {entity});
        }

        public void Edit(params TEntity[] entities)
        {
            foreach (var entity in entities)
            {
                InternEdit(entity);
            }
        }

        public virtual void InternEdit(TEntity entity)
        {
        }
    }
}