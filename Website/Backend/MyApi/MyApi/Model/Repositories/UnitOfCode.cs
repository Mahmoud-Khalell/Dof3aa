using Core.entities;
using Microsoft.AspNetCore.Identity;
using MyApi.Model.Interfaces;

namespace MyApi.Model.Repositories
{
    public class UnitOfCode : IUnitOfCode
    {
        public UserManager<AppUser> UserManager { get; set; }
        public IConfiguration config { get ; set; }
        public ICource Cource { get; set; }
        public IUserGroup UserGroup { get; set; }
        public UnitOfCode(UserManager<AppUser> User, IConfiguration config, ICource cource, IUserGroup userGroup)
        {
            UserManager = User;
            this.config = config;
            Cource = cource;
            UserGroup = userGroup;
        }
    }
}
