using Core.entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InfraStucture.Interfaces
{
    public interface IGeneric<T> where T : BaseEntity
    {
        public T GetById(int id);
        public IEnumerable<T> GetAll();
        public int add(T entity);
        public int Delete(T entity);
        public int update(T entity);
    }
}
