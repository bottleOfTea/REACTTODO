using System.Collections;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using RactTODO.DomainServices.Interfaces;
using RactTODO.Entities;
using RactTODO.ViewModels;
using RactTODO.ViewServices.Interfaces;

namespace RactTODO.Controllers
{
    public class WorkerController : BaseController<IWorkerDomainService, IWorkerViewService, Worker, WorkerViewModel>
    {
        public WorkerController(IWorkerDomainService domainService, IWorkerViewService viewService)
            : base(domainService, viewService)
        {
        }
    }
}