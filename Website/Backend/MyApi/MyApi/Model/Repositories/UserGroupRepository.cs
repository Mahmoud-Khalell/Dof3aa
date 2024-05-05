using Core.Context;
using Core.entities;
using Microsoft.EntityFrameworkCore;
using MyApi.Model.Interfaces;

namespace MyApi.Model.Repositories
{
    public class UserGroupRepository : Generic<UserGroup>, IUserGroup
    {
        private readonly Connector connector;

        public UserGroupRepository(Connector connector) : base(connector)
        {
            this.connector = connector;
        }

        private new UserGroup GetById(int? id)
        {
            return null;
        }
        public List<UserGroup> GetAll()
        {
            return connector.UserGroups.Include(e => e.User).Include(e => e.Cource).ToList();// ToList();
        }
        public List<UserGroup> GetByUser(string UserName)
        {
            return connector.UserGroups.Include(e => e.User).Include(e => e.Cource).Where(e => e.User.UserName == UserName).ToList();

        }
        public UserGroup GetByUserAndCource(string UserName, int CourceId)
        {
            return connector.UserGroups.Include(e => e.User).Include(e => e.Cource).FirstOrDefault(e => e.User.UserName == UserName && e.Cource.Id == CourceId);

        }
        public List<UserGroup> GetByCourceId(int CourceId)
        {
            return connector.UserGroups.Include(e => e.User).Include(e => e.Cource).Where(e => e.Cource.Id == CourceId).ToList();
        }
        
    }
}
