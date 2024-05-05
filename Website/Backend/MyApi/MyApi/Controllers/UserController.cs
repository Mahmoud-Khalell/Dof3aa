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
        [HttpGet("ConfirmEmail")]
        public async Task<IActionResult> ConfirmEmail(string email, string token)
        {
            var user = unit.UserManager.Users.FirstOrDefault(e => e.Email == email);
            if (user == null)
                return NotFound();
            var result = await unit.UserManager.ConfirmEmailAsync(user, token);
            if (result.Succeeded)
                return Ok();
            return BadRequest(result.Errors.FirstOrDefault());
        }
        private async Task<IActionResult> confirmEmail(string email)
        {
            var user = unit.UserManager.Users.FirstOrDefault(e => e.Email == email);
            if (user == null)
                return NotFound();
            var token = await unit.UserManager.GenerateEmailConfirmationTokenAsync(user);
            // crete link that lead to endpoint ConfirmEmail 
            var link = Url.Action("ConfirmEmail", "User", new { email = email, token = token }, Request.Scheme, Request.Host.ToString());
            Email Reciever = new Email()
            {
                To = email,
                Title = "Confirm Email",
                Body = link
            };
            EmailService.SendEmail(Reciever);
            return Ok();


        }

        [HttpPost("Register")]
        
        public async Task<IActionResult> Register(RegisterationDTO registerationDTO)
        {
            if(ModelState.IsValid)
            {
                var user=Mapper.RegisDTO2User(registerationDTO);
                
                var result=await unit.UserManager.CreateAsync(user,registerationDTO.Password);
                if (result.Succeeded)
                {
                    //confirm email
                    confirmEmail(user.Email);
                    return Ok();
                }
                else
                {
                    DocumentServices.DeleteFile(user.ImageUrl);
                    return BadRequest(result.Errors.FirstOrDefault());
                }
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
            if (user.EmailConfirmed == false)
                return NotFound("Email not confirmed");

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
