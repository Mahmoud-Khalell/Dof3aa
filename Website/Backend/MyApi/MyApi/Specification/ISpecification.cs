using System.Linq.Expressions;

namespace MyApi.specification
{
    public interface ISpecification<T>
    {
        public Expression<Func<T, bool>> Criteria { get; set; }
        public List<Expression<Func<T, object>>> Includes => new List<Expression<Func<T, object>>>();

        public void AddInclude(Expression<Func<T, object>> includeExpression);
        
    }
}
