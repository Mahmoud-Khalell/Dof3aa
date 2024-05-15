using Core.Context;
using Core.entities;
using MyApi.specification;

namespace MyApi.Model.Interfaces
{
    public interface IGeneric<T> where T:BaseEntity
    {
        public int add(T entity);
        public int remove(T entity);
        public int update(T entity);
        public T GetById(int? id);
        public IEnumerable<T> GetAll();
        public T GetBySpecifiation(ISpecification<T> spec);
        public IEnumerable<T> GetAllBySpecifiation(ISpecification<T> spec);


    }
}
