using Core.entities;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyApi.DTO;
using MyApi.DTO.Cource;
using MyApi.Model.Interfaces;
using MyApi.Services;
using System.Reflection.Metadata;

namespace MyApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class CourceController : ControllerBase
    {
        private readonly IUnitOfWork unit;


        public CourceController(IUnitOfWork unit)
        {
            this.unit = unit;
            
        }


        #region Create Cource
        [HttpPost("CreateCource")]
        [Authorize(AuthenticationSchemes =JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult CreateCource([FromForm] CourceDTO cource)
        {
            var userName = User.Claims.FirstOrDefault(e => e.Type == "Username").Value;
            var user = unit.UserManager.Users.FirstOrDefault(e=>e.UserName==userName);
            if (user == null)
                return Unauthorized();

            if (ModelState.IsValid == false)
                return BadRequest(ModelState);
            
            var crs=unit.Cource.GetById(cource.Id);
            if (crs != null)
                return BadRequest("Group Id already exists");

            var NewCource = Mapper.CourceDTO2Cource(cource);

            unit.Cource.add(NewCource);

            unit.UserGroup.add(new UserGroup { Cource = NewCource, User = user, rule = 1 });
            return Ok();
        }
        #endregion


        #region Join to Cource
        [HttpGet("Join")]
        [Authorize(AuthenticationSchemes =JwtBearerDefaults.AuthenticationScheme)]
        public  IActionResult Join(int? CourceId)
        {
            var userName = User.Claims.FirstOrDefault(e => e.Type == "Username").Value;

            var user =  unit.UserManager.Users.Include(e => e.UserGroups).FirstOrDefault(e => e.UserName == userName);
            if (user == null)
                return Unauthorized();

            if (CourceId == null)
                return BadRequest();


            var Cource = unit.Cource.GetById(CourceId);
            if (Cource == null)
                return BadRequest("Cource does not exist");

            var IsUserInGroup = user.UserGroups.Where(e=>e.CourceId==Cource.Id).FirstOrDefault()!=null;
            if (IsUserInGroup)
                return BadRequest("You are already in this group");

            unit.UserGroup.add(new UserGroup { Cource = Cource, User = user, rule = 3 });
            return Ok();


        }
        #endregion

        #region Leave Cource
        [HttpGet("LeaveCource")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult LeaveCource(int? CourceId)
        {

            if (CourceId == null)
                return BadRequest();

            var userName = User.Claims.FirstOrDefault(e => e.Type == "Username").Value;

            var user=unit.UserManager.Users.Include(e => e.UserGroups).FirstOrDefault(e => e.UserName == userName);

            if(user == null)
                return Unauthorized();
            var crs =user.UserGroups.Where(e => e.CourceId == CourceId).FirstOrDefault();
            if (crs == null)
                return BadRequest("You are not in this group");
            if(crs.rule == 1)
                return BadRequest("You can't leave this group");
            var state=unit.UserGroup.remove(crs);
            if (state !=0)
                return Ok();
            else
                return BadRequest();
            


        }
        #endregion

        #region Delete Cource

        [HttpDelete("DeleteCource")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult DeleteCource(int? CourceId)
        {
            if (CourceId == null)
                return BadRequest();

            var userName = User.Claims.FirstOrDefault(e => e.Type == "Username").Value;

            var user = unit.UserManager.Users.Include(e => e.UserGroups).FirstOrDefault(e => e.UserName == userName);

            if (user == null)
                return Unauthorized();
            var crs = user.UserGroups.Where(e => e.CourceId == CourceId).FirstOrDefault();
            if (crs == null)
                return BadRequest("You are not in this group");
            if (crs.rule != 1)
                return BadRequest("You can't delete this group");
            var CrsId= crs.CourceId;
            var mycrs = unit.Cource.GetById(CrsId);

            var state = unit.Cource.remove(mycrs);
            if (state != 0)
                return Ok();
            else
                return BadRequest();

        }
        #endregion

        

        #region Promote User
        [HttpPost("Promote")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult Promote(int CourceId, string UserName)
        {
            if (CourceId == null || UserName == null)
                return BadRequest();

            var CurentUsername = User.Claims.FirstOrDefault(e => e.Type == "Username").Value;
            if(CurentUsername==null)
                return Unauthorized();
            var Us=unit.UserGroup.GetByUserAndCource(CurentUsername, CourceId);
            if(Us == null || Us.rule!=1)
                return Unauthorized();

            var US2= unit.UserGroup.GetByUserAndCource(UserName, CourceId);
            if (US2 == null)
                return BadRequest("User not found");
            if (US2.rule == 1)
                return BadRequest("User is already The creator");
            US2.rule = 2;
            unit.UserGroup.update(US2);
            return Ok();

        }

        #endregion

        #region Demote User
        [HttpPost("Demote")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult Demote(int CourceId, string UserName)
        {
            if (CourceId == null || UserName == null)
                return BadRequest();

            var CurentUsername = User.Claims.FirstOrDefault(e => e.Type == "Username").Value;
            if (CurentUsername == null)
                return Unauthorized();
            var Us = unit.UserGroup.GetByUserAndCource(CurentUsername, CourceId);
            if (Us == null || Us.rule != 1)
                return Unauthorized();

            var US2 = unit.UserGroup.GetByUserAndCource(UserName, CourceId);
            if (US2 == null)
                return BadRequest("User not found");
            if (US2.rule == 3)
                return BadRequest("User is already a member");
            if(US2.rule == 1)
                return BadRequest("User is the creator");
            US2.rule = 3;
            unit.UserGroup.update(US2);
            return Ok();

        }
        #endregion

        #region Get Cource Info
        [HttpGet("GetInfo")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult GetInfo(int CourceId)
        {

            var CurentUsername = User.Claims.FirstOrDefault(e => e.Type == "Username").Value;
            if (CurentUsername == null)
                return Unauthorized();
            var Us = unit.UserGroup.GetByUserAndCource(CurentUsername, CourceId);
            if (Us == null)
                return Unauthorized();
            var Cource = unit.Cource.GetById(CourceId);
            if (Cource == null)
                return BadRequest("Cource not found");
            var res = new
            {
                CourceInfo = Mapper.Cource2CourceInfoDTO(Cource),
                Users = Cource.UserGroups.Select(x=>new
                {
                    username=x.Username,
                    name=x.User.FirstName + " " + x.User.LastName,
                    rule = x.rule,
                    ImageUrl= x.User.ImageUrl

                })
            };
            return Ok(res);
        }
        #endregion

        #region Edit Cource
        [HttpPost("EditCource")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult EditCource([FromForm] CourceUpdateDTO cource)
        {
            var userName = User.Claims.FirstOrDefault(e => e.Type == "Username").Value;
            var user = unit.UserManager.Users.FirstOrDefault(e => e.UserName == userName);
            if (user == null)
                return Unauthorized();

            if (ModelState.IsValid == false)
                return BadRequest(ModelState);

            var crs = unit.Cource.GetById(cource.Id);
            if (crs == null)
                return BadRequest("Group Id does not exist");

            var creator = unit.UserGroup.GetByUserAndCource(userName, cource.Id);
            if (creator == null || creator.rule != 1)
                return StatusCode(403);

            if(cource.Title != null)
                crs.Title = cource.Title;
            if (cource.SubTitle != null)
                crs.SubTitle = cource.SubTitle;
            if (cource.Description != null)
                crs.Description = cource.Description;
            if (cource.Image != null)
            {
                DocumentServices.DeleteFile(crs.ImageUrl);
                crs.ImageUrl = DocumentServices.Uploadfile(cource.Image);

            }
            if (cource.Logo != null)
            {
                DocumentServices.DeleteFile(crs.LogoUrl);
                crs.LogoUrl = DocumentServices.Uploadfile(cource.Logo);
            }
            if (cource.type != null)
                crs.type = cource.type.Value;

            try
            {
                unit.Cource.update(crs);

                 return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        #endregion


    }
}
