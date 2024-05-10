using Core.entities;

namespace MyApi.Model.Interfaces
{
    public interface IUserGroup:IGeneric<UserGroup>
    {
        public int GetRole(string userName, int groupId);
        public UserGroup GetByUserAndCource(string UserName, int CourceId);


    }
}
