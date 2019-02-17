using System.Collections.Generic;

namespace RactTODO.ViewModels.Interfaces
{
    public interface IBaseViewModel<TDTO> where TDTO : class
    {
        List<TDTO> List();
        TDTO Get(long id);
    }
}