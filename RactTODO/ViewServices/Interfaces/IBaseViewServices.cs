using System.Collections.Generic;

namespace RactTODO.ViewServices.Interfaces
{
    public interface IBaseViewService<TModel> where TModel : class
    {
        List<TModel> List();
        TModel Get(long id);
    }
}