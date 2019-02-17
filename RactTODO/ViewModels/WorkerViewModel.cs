using System;
using System.Collections.Generic;
using System.Linq;
using RactTODO.DomainServices.Interfaces;
using RactTODO.DTOs;
using RactTODO.ViewModels.Interfaces;

namespace RactTODO.ViewModels
{
    public class WorkerViewModel : IWorkerViewModel
    {
        private IWorkerDomainService _domainService { get; set; }

        public List<WorkerDto> List()
        {
            return new List<WorkerDto>()
            {
                new WorkerDto() {Id = 1, Name = "first"},
                new WorkerDto() {Id = 2, Name = "second"}
            };
        }

        public WorkerDto Get(long id)
        {
            if (id <= 0)
            {
                throw new Exception();
            }

            var worker = _domainService.Get(id);
            return new WorkerDto()
            {
                Email = worker.Email,
                Name = worker.Name,
                Id = worker.Id,
            };
        }
    }
}