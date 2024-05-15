using Core.entities;
using Microsoft.EntityFrameworkCore;
using MyApi.specification;

namespace MyApi.ISpecification
{
    public class SpecificationEvaluator
    {
        public static IQueryable<T> GetQuery<T>(IQueryable<T> inputQuery, ISpecification<T> spec) where T : BaseEntity
        {
            var query = inputQuery;

            if (spec.Criteria != null)
            {
                query = query.Where(spec.Criteria);
            }

            query = spec.Includes.Aggregate(query, (current, include) => current.Include(include));

            return query;
        }
    }
}
