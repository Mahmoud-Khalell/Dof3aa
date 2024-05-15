using Core.Context;
using Core.entities;
using MyApi.ISpecification;
using MyApi.Model.Interfaces;
using MyApi.specification;

namespace MyApi.Model.Repositories
{
    public class Generic<T> : IGeneric<T> where T : BaseEntity
    {
        private readonly Connector connector;

        public Generic(Connector connector) 
        {
            this.connector = connector;
        }
        public int add(T entity)
        {
            connector.Set<T>().Add(entity);
            return connector.SaveChanges();
        }

        public IEnumerable<T> GetAll()
        {
           return connector.Set<T>().ToList();
        }

        public IEnumerable<T> GetAllBySpecifiation(ISpecification<T> spec)=>SpecificationEvaluator.GetQuery(connector.Set<T>().AsQueryable(), spec).ToList();
        

        public T GetById(int? id)
        {
            return connector.Set<T>().FirstOrDefault(x => x.Id == id);
        }

        public T GetBySpecifiation(ISpecification<T> spec)=>SpecificationEvaluator.GetQuery(connector.Set<T>().AsQueryable(), spec).FirstOrDefault();


        

        public int remove(T entity)
        {
            connector.Set<T>().Remove(entity);
            return connector.SaveChanges();
        }

        public int update(T entity)
        {
            connector.Set<T>().Update(entity);
            return connector.SaveChanges();
        }
        
    }
}
