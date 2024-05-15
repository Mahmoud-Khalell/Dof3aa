using Core.entities;
using Microsoft.AspNetCore.Identity;
using MyApi.Model.Repositories;
using MyApi.specification;

namespace MyApi.Services
{
    public class CourceService
    {
        private readonly UnitOfWork unit;

        public CourceService(UnitOfWork unit)
        {
            this.unit = unit;
        }
        public int add(Cource cource)=> unit.Cource.add(cource);
        public int remove(Cource cource) => unit.Cource.remove(cource);
        public int update(Cource cource) => unit.Cource.update(cource);
        public Cource GetById(int? id)
        {
            var spec=new CourceSpecification(e=>e.Id==id);
            var crs= unit.Cource.GetBySpecifiation(spec);
            return crs;

        }
        public IEnumerable<Cource> GetAll()
        {
            var spec = new CourceSpecification();
            var crs = unit.Cource.GetAllBySpecifiation(spec);
            return crs;
        }
        public IEnumerable<AppUser> GetUsers(int id)
        {
            
            var US=unit.UserGroup.GetAll().Where(e=>e.CourceId==id).Select(e=>e.Username);
            var users=US.Select(username=> UserServices.GetByUsername(username,unit));
            return users;

        }
        public IEnumerable<Topic> GetTopics(int id)
        {
            var spec = new CourceSpecification(e => e.Id == id);
            var crs = unit.Cource.GetBySpecifiation(spec);
            return crs.Topics;

        }
        public IEnumerable<Core.entities.task> GetTasks(int id)
        {
            var spec = new CourceSpecification(e => e.Id == id);
            var crs = unit.Cource.GetBySpecifiation(spec);
            return crs.Tasks;

        }


    }
}
