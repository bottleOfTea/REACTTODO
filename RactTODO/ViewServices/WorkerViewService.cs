using System;
using System.Collections.Generic;
using RactTODO.DomainServices.Interfaces;
using RactTODO.ViewModels;
using RactTODO.ViewServices.Interfaces;

namespace RactTODO.ViewServices
{
    internal class WorkerViewService : IWorkerViewService
    {
        private IWorkerDomainService DomainService { get; }
        
        public WorkerViewService(IWorkerDomainService domainService)
        {
            DomainService = domainService;
        }

        public List<WorkerViewModel> List()
        {
            return new List<WorkerViewModel>()
            {
                new WorkerViewModel() {Id = 1, Name = "first"},
                new WorkerViewModel() {Id = 2, Name = "second"}
            };
        }

        public WorkerViewModel Get(long id)
        {
            if (id <= 0)
            {
                throw new Exception();
            }

            var worker = DomainService.Get(id);
            return new WorkerViewModel()
            {
                Email = worker.Email,
                Name = worker.Name,
                Id = worker.Id,
            };
        }
    }
}