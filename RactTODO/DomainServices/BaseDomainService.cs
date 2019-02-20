using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using RactTODO.DomainServices.Interfaces;
using RactTODO.Entities.Interfaces;

namespace RactTODO.DomainServices
{
    public abstract class BaseDomainService<TEntity> : IBaseDomainService<TEntity> where TEntity : IHasId, new()
    {
        public virtual IEnumerable<TEntity> GetAll()
        {
            return new List<TEntity>();
        }

        public TEntity Save(TEntity entity)
        {
            return Save(new[] {entity}).First();
        }

        public IEnumerable<TEntity> Save(params TEntity[] entities)
        {
            var list = new List<TEntity>();
            foreach (var entity in entities)
            {
                InternSave(entity);
                list.Add(entity);
                yield return entity;
            }
        }

        protected virtual void InternSave(TEntity entity)
        {
        }

        public virtual TEntity Get(long id)
        {
            return new List<TEntity>() {new TEntity() {Id = id}}.Find(entity => entity.Id == id);
        }

        public TEntity Remove(long id)
        {
            return Remove(new[] {id}).First();
        }

        public IEnumerable<TEntity> Remove(params long[] ids)
        {
            foreach (var id in ids)
            {
                var en = Get(id);
                yield return en;
            }
        }

        public TEntity Edit(TEntity entity)
        {
            return Edit(new[] {entity}).First();
        }

        public IEnumerable<TEntity> Edit(params TEntity[] entities)
        {
            foreach (var entity in entities)
            {
                InternEdit(entity);
                yield return entity;
            }
        }

        protected virtual void InternEdit(TEntity entity)
        {
        }
    }
}