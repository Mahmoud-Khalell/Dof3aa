using MyApi.specification;
using System.Linq.Expressions;

namespace MyApi.ISpecification
{
    public class MaterialSpecification: BaseSpecification<Core.entities.Material>
    {
        public MaterialSpecification() : base()
        {
            AddInclude(x => x.Topic);
        }
        public MaterialSpecification(Expression<Func<Core.entities.Material, bool>> Craiteria) : base(Craiteria)
        {
            AddInclude(x => x.Topic);
        }

    }
}
