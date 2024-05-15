using Core.entities;
using System.Linq.Expressions;

namespace MyApi.specification
{
    public class CourceSpecification:BaseSpecification<Cource>
    {
        public CourceSpecification() : base()
        {
            AddInclude(x => x.UserGroups);
            AddInclude(x => x.Announcements);
            AddInclude(x => x.Tasks);
            AddInclude(x => x.Topics);

        }
        public CourceSpecification(Expression<Func<Cource,bool>>Craiteria) : base(Craiteria)
        {
            AddInclude(x => x.UserGroups);
            AddInclude(x => x.Announcements);
            AddInclude(x => x.Tasks);
            AddInclude(x => x.Topics);

        }
    }
}
