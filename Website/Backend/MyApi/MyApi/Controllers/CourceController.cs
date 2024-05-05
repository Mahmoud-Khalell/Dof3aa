using Core.entities;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyApi.DTO;
using MyApi.Model.Interfaces;
using MyApi.Services;

namespace MyApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourceController : ControllerBase
    {
        private readonly IUnitOfCode unit;


        public CourceController(IUnitOfCode unit)
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

        [HttpDelete("RemoveAll")]
        public IActionResult RemoveAll()
        {
            var crs = unit.Cource.GetAll();
            foreach (var c in crs)
                unit.Cource.remove(c);
            return Ok();
        }


    }
}
