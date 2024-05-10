using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
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
    }
}
