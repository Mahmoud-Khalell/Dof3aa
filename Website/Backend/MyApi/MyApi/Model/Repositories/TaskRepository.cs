using Core.Context;
using Core.entities;
using MyApi.Model.Interfaces;

namespace MyApi.Model.Repositories
{
    public class TaskRepository : Generic<task>,ITask
    {
        private readonly Connector context;

        public TaskRepository(Connector context) : base(context)
        {
            this.context = context;
        }
        
    }
}
