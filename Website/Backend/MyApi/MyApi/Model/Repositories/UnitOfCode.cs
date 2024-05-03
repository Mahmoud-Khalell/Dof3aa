using Core.entities;
using Microsoft.AspNetCore.Identity;
using MyApi.Model.Interfaces;

namespace MyApi.Model.Repositories
{
    public class UnitOfCode : IUnitOfCode
    {
        public UserManager<AppUser> UserManager { get; set; }
        public IConfiguration config { get ; set; }

        public UnitOfCode(UserManager<AppUser> User, IConfiguration config)
        {
            UserManager = User;
            this.config = config;
        }
    }
}
