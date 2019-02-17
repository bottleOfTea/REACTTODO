using RactTODO.Entities.Interfaces;

namespace RactTODO.Entities
{
    public class BaseEntity : IHasId
    {
        public long Id { get; set; }
        public string Name { get; set; }
    }
}