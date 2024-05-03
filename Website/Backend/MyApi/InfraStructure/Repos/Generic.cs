using Core.Context;
using Core.entities;
using InfraStucture.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InfraStucture.Repos
{
    public class Generic<T> : IGeneric<T> where T : BaseEntity
    {
        private readonly Connector connector;

        public Generic(Connector connector) 
        {
            this.connector = connector;
        }
        public int  add(T entity)
        {
             connector.Set<T>().Add(entity);
            return connector.SaveChanges();
        }

        public int Delete(T entity)
        {
            connector.Set<T>().Remove(entity);
            return connector.SaveChanges(); 
        }

        public IEnumerable<T> GetAll()
        {
           return connector.Set<T>().ToList();
        }

        public T GetById(int id)
        {
            return connector.Set<T>().FirstOrDefault(x => x.Id == id);
        }

        public int update(T entity)
        {
            connector.Set<T>().Update(entity);
            return connector.SaveChanges();
        }
    }
}
