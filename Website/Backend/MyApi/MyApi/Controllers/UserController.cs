using Core.entities;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using MyApi.DTO;
using MyApi.Model.Interfaces;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using MyApi.Services;
namespace MyApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUnitOfCode unit;

        public UserController(IUnitOfCode unit)
        {
            this.unit = unit;
        }
        
        [HttpPost("Register")]
        
        public async Task<IActionResult> Register(RegisterationDTO registerationDTO)
        {
            if(ModelState.IsValid)
            {
                var user=new AppUser();
                user.Email = registerationDTO.Email;
                user.UserName = registerationDTO.Username;
                user.FirstName = registerationDTO.FirstName;
                user.LastName = registerationDTO.LastName;
                user.Department = registerationDTO.Department;
                user.University = registerationDTO.University;
                user.faculty = registerationDTO.Faculty;
                user.ImageUrl = registerationDTO.ImageUrl;
                
                var result=await unit.UserManager.CreateAsync(user,registerationDTO.Password);
                if (result.Succeeded)
                    return Ok();
                else
                    return BadRequest(result.Errors.FirstOrDefault());
            }
            return BadRequest(ModelState);
        }
        [HttpPost]
        public async Task<IActionResult>Login(LoginDTO loginDTO)
        {
            if (ModelState.IsValid == false)
                return Unauthorized(ModelState);
            var user = await unit.UserManager.FindByNameAsync(loginDTO.UserName);
            
            if(user==null)
                return NotFound("Username not found");

            bool check = await unit.UserManager.CheckPasswordAsync(user, loginDTO.Password);
            if(check==false)
                return NotFound("Password is wrong");

            var token = Tokenizer.GenerateToken(loginDTO, unit);
            return Ok(token);
        }
        [HttpGet("GetAll")]
        [Authorize(AuthenticationSchemes =JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult GetAll()
        {
           var users= unit.UserManager.Users.ToList();
            return Ok(users);
        }
        [HttpGet("RemoveAll")]
        public async Task<IActionResult> RemoveAll()
        {
            var users= unit.UserManager.Users.ToList();
            foreach(var user in users)
                await unit.UserManager.DeleteAsync(user);
            return Ok();
        }
        [HttpGet("GetCurentUser")]
        [Authorize(AuthenticationSchemes =JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult GetCurentUser()
        {
            var item = User.Claims.FirstOrDefault(e => e.Type == "Username").Value;
            return Ok(item);
        }


    }
}
