using Core.entities;
using Microsoft.AspNetCore.Identity;

namespace MyApi.Model.Interfaces
{
    public interface IUnitOfCode
    {
        public UserManager<AppUser> UserManager { get; set; }
        public IConfiguration config { get; set; }
        public ICource Cource { get; set; }
        public IUserGroup UserGroup { get; set; }

    }
}
