using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using RactTODO.DomainServices.Interfaces;
using RactTODO.Entities;
using RactTODO.Entities.Interfaces;
using RactTODO.ViewModels.Interfaces;

namespace RactTODO.Controllers
{
    public class BaseController<TDomainService, TViewModel, TEntity, TDto> : Controller
        where TDomainService : IBaseDomainService<TEntity>
        where TViewModel : IBaseViewModel<TDto>
        where TEntity : class
        where TDto : class
    {
        protected TDomainService DomainService { get; set; }

        protected TViewModel ViewModel { get; set; }

        protected BaseController(TDomainService domainService, TViewModel viewModel)
        {
            DomainService = domainService;
            ViewModel = viewModel;
        }

        [HttpGet]
        public JsonResult List()
        {
            return Json(ViewModel.List());
        }

        [HttpGet]
        public JsonResult Get(long id)
        {
            return Json(ViewModel.Get(id));
        }

        [HttpPost]
        public IActionResult Edit([FromBody]TEntity entity)
        {
            return Ok(DomainService.Edit(entity));
        }

        [HttpPost]
        public IActionResult Create([FromBody]TEntity entity)
        {
            return Ok( DomainService.Save(entity));
        }

        [HttpDelete]
        public IActionResult Remove(long id)
        {
            return Ok(DomainService.Remove(id));
        }
    }
}