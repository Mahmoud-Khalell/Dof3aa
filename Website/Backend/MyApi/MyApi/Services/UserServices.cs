using Core.entities;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyApi.Model.Interfaces;
using System.Security.Claims;

namespace MyApi.Services
{

    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class UserServices
    {
        public static string WhoAmI(IEnumerable<Claim> claims)
        {
            var userName = claims.FirstOrDefault(e => e.Type == "Username").Value;
            return userName;
        }
        public static AppUser GetByUsername(string Username,[FromServices]IUnitOfWork unit)
        {
            return unit.UserManager.Users.Include(e=>e.UserGroups).Include(e=>e.UserNotifications).FirstOrDefault(e => e.UserName == Username);

        }
    }
}
