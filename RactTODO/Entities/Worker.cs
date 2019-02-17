using RactTODO.Entities.Interfaces;

namespace RactTODO.Entities
{
    public class Worker : BaseEntity, IHasId
    {
        public string Email { get; set; }
    }
}