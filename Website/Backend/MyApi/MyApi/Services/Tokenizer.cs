using Core.entities;
using Microsoft.IdentityModel.Tokens;
using MyApi.DTO;
using MyApi.Model.Interfaces;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace MyApi.Services
{
    public static class Tokenizer
    {

        public static string GenerateToken(LoginDTO loginDTO,IUnitOfWork unit)
        {

            var claim = new List<Claim>();
            claim.Add(new Claim("Username", loginDTO.UserName));
            claim.Add(new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()));

            SecurityKey securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(unit.config["JWT:Secret"]));
            SigningCredentials signingCreden = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            JwtSecurityToken token = new JwtSecurityToken
            (
                issuer: unit.config["JWT:issuer"],
                audience: unit.config["JWT:audience"],
                claims: claim,
                signingCredentials: signingCreden



            );
            return new JwtSecurityTokenHandler().WriteToken(token) ;
            
        }
    }
}
