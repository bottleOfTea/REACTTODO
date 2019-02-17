using System.Collections;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using RactTODO.DomainServices.Interfaces;
using RactTODO.DTOs;
using RactTODO.Entities;
using RactTODO.ViewModels.Interfaces;

namespace RactTODO.Controllers
{
    public class WorkerController : BaseController<IWorkerDomainService, IWorkerViewModel, Worker, WorkerDto>
    {
        public WorkerController(IWorkerDomainService domainService, IWorkerViewModel viewModel)
            : base(domainService, viewModel)
        {
        }
    }
}