using Core.entities;
using System.Linq.Expressions;

namespace MyApi.specification
{
    public class TaskSpecification : BaseSpecification<Core.entities.task>
    {
        public TaskSpecification() : base()
        {
            AddInclude(x => x.PublisherUser);
            AddInclude(x => x.Cource);
        }
        public TaskSpecification(Expression<Func<task, bool>> Craiteria) : base(Craiteria)
        {
            AddInclude(x => x.PublisherUser);
            AddInclude(x => x.Cource);
        }
    }
}
