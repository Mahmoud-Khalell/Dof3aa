using Core.entities;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyApi.DTO.Announcment;
using MyApi.Model.Interfaces;
using MyApi.Services;

namespace MyApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnnouncementController : ControllerBase
    {
        private readonly IUnitOfCode unit;

        public AnnouncementController(IUnitOfCode unit)
        {
            this.unit = unit;
        }
        #region Create Announcement
        [HttpPost("Create")]
        [Authorize(AuthenticationSchemes =JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult Create([FromForm] AnnouncementDTO ann)
        {
            var username = UserServices.WhoAmI(User.Claims);
            if(username == null)
                return Unauthorized();
            if(ModelState.IsValid==false)
                return BadRequest();
            var US=unit.UserGroup.GetByUserAndCource(username, ann.CourceId);
            if (US == null)
                return Unauthorized();
            if(US.rule==3)
                return Unauthorized();
            var announcement = new Announcement()
            {
                Title = ann.Title,
                Description = ann.Description,
                CourceId = ann.CourceId,
                PublisherUserName = username

            };
            unit.Announcement.add(announcement);
            
            var notification = new Notification()
            {
                CreationDate = DateTime.Now,
                publiserUsername = username,
                description=$"{US.User.FirstName} has added a new announcement in {US.Cource.Title} cource",
            };
            unit.Notification.add(notification);
            var UN=unit.UserGroup.GetAll().Where(x=>x.CourceId==US.CourceId && x.Username != username).Select(x => new UserNotification()
            {
                Notification=notification,
                ReceiverUserName = x.Username
            }).ToList();
            unit.UserNotification.Add(UN);

            return Ok();
        }
        #endregion

        #region Get All Announcements
        [HttpGet("GetAll")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult GetAll(int CourceId)
        {
            var username = UserServices.WhoAmI(User.Claims);
            if (username == null)
                return Unauthorized();
            var US = unit.UserGroup.GetByUserAndCource(username, CourceId);
            if (US == null)
                return Unauthorized();
          
            var announcements = unit.Announcement.GetAll().Where(x=>x.CourceId==CourceId).Select(x=>Mapper.Ann2AnnInfoDTO(x));
            return Ok(announcements);
        }
        #endregion

        #region delete Announcement
        [HttpPost("Delete")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult Delete(int id)
        {
            var username = UserServices.WhoAmI(User.Claims);
            if (username == null)
                return Unauthorized();
            var announcement = unit.Announcement.GetById(id);
            if (announcement == null)
                return NotFound();

            var US = unit.UserGroup.GetByUserAndCource(username, announcement.CourceId);
            if (US == null )
                return Unauthorized();

            if(announcement.PublisherUserName != username && US.rule !=1)
                return Unauthorized();

            unit.Announcement.remove(announcement);
            return Ok();
        }
        #endregion

        #region Edit Announcement
        [HttpPost("Edit")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult Edit([FromForm] AnnouncementEditDTO ann)
        {
            if(ModelState.IsValid == false)
                return BadRequest();
            var username = UserServices.WhoAmI(User.Claims);
            if (username == null)
                return Unauthorized();
            var announcement = unit.Announcement.GetById(ann.Id);
            if (announcement == null)
                return NotFound();
            var US = unit.UserGroup.GetByUserAndCource(username, announcement.CourceId);
            if (US == null)
                return Unauthorized();
            if (announcement.PublisherUserName != username && US.rule != 1)
                return Unauthorized();
            announcement.Title = ann.Title;
            announcement.Description = ann.Description;
            unit.Announcement.update(announcement);

            return Ok();
        }
        #endregion

    }
}
