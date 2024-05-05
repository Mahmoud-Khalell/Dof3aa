using Core.Context;
using Core.entities;
using Microsoft.EntityFrameworkCore;
using MyApi.Model.Interfaces;

namespace MyApi.Model.Repositories
{
    public class CourceRepositiory : Generic<Cource>,ICource
    {
        private readonly Connector connector;

        public CourceRepositiory(Connector connector) : base(connector)
        {
            this.connector = connector;
        }
        public Cource GetById(int? id)
        {
            var group=connector.Cources.Include(e=>e.UserGroups).FirstOrDefault(e=>e.Id==id);
            return group;

        }
        public List<Cource> GetAll()
        {
            return connector.Cources.Include(e => e.UserGroups).ToList();
        }
        public AppUser GetCreator(int CourceId)
        {
            var group = GetById(CourceId);
            var user=group.UserGroups.FirstOrDefault(e => e.rule == 1).User;
            return user;
        }
        public IEnumerable<AppUser> GetAdmin(int CourceId)
        {
            var group = GetById(CourceId);
            var user = group.UserGroups.Where(e => e.rule == 2).Select(e=>e.User);
            return user;

        }
    }
}
