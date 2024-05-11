using Core.entities;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyApi.DTO.Material;
using MyApi.DTO.Topic;
using MyApi.Model.Interfaces;
using MyApi.Services;

namespace MyApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TopicController : ControllerBase
    {
        private readonly IUnitOfCode unit;

        public TopicController(IUnitOfCode unit)
        {
            this.unit = unit;
        }

        #region Create Topic
        [HttpPost("Create")]
        [Authorize(AuthenticationSchemes =JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult Create([FromForm] NewTopicDTO newTopicDTO)
        {
            var username = UserServices.WhoAmI(User.Claims);
            if(username == null)
            {
                return Unauthorized();
            }
            if(!ModelState.IsValid)
            {
                return BadRequest();
            }
            var US=unit.UserGroup.GetByUserAndCource(username, newTopicDTO.CourceId);
            if (US == null ||US.Id>2)
            {
                return Unauthorized();
            }
            var topic = Mapper.TopicDTO2Topic(newTopicDTO);
            unit.Topic.add(topic);

            return Ok();
        }
        #endregion

        #region Get Topic Info
        [HttpGet("GetInfo")]
        [Authorize(AuthenticationSchemes =JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult GetInfo(int id)
        {
            var username = UserServices.WhoAmI(User.Claims);
            if (username == null)
            {
                return Unauthorized();
            }
            var topic = unit.Topic.GetAll().FirstOrDefault(x=>x.Id==id);
            if(topic == null)
            {
                return NotFound("not found");
            }

            var US= unit.UserGroup.GetByUserAndCource(username, topic.CourseId);
            if(US==null)
            {
                return BadRequest("You are not in this group,please join this group to be able to browse this topic ");
            }
            
            var topicInfo = Mapper.Topic2TopicInfo(topic);
            return Ok(topicInfo);
        }
        #endregion

        #region Delete Topic
        [HttpDelete("Delete")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult Delete(int id)
        {
            var username = UserServices.WhoAmI(User.Claims);
            if (username == null)
            {
                return Unauthorized();
            }
            var topic = unit.Topic.GetById(id);
            if (topic == null)
            {
                return NotFound();
            }

            var US = unit.UserGroup.GetByUserAndCource(username, topic.CourseId);
            if (US == null || US.Id > 2)
            {
                return Unauthorized();
            }
            foreach (var material in topic.Materials)
            {
                DocumentServices.DeleteFile(material.FileUrl);
                unit.Material.remove(material);
            }
            if (topic.ImageUrl != null)
                DocumentServices.DeleteFile(topic.ImageUrl);
            unit.Topic.remove(topic);
            return Ok();
        }
        #endregion

        #region Get All Topics
        [HttpPost("GetAll")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult GetAll(int id)
        {
            var username = UserServices.WhoAmI(User.Claims);
            if (username == null)
            {
                return Unauthorized();
            }
            var course = unit.Cource.GetById(id);
            if (course == null)
            {
                return NotFound();
            }
            var US = unit.UserGroup.GetByUserAndCource(username, course.Id);
            if (US == null)
            {
                return BadRequest("You are not in this group,please join this group to be able to browse this topic ");
            }
            var topics = unit.Topic.GetAll().Where(x=>x.CourseId==id);
            var ans=topics.Select(x=>Mapper.Topic2TopicInfo(x)).ToList();
            return Ok(ans);

        }

        #endregion


        #region Add Material

        [HttpPost("AddMaterial")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult AddMaterial([FromForm] NewMaterialDTO newMaterialDTO)
        {
            var username = UserServices.WhoAmI(User.Claims);
            if (username == null)
            {
                return Unauthorized();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var topic = unit.Topic.GetById(newMaterialDTO.TopicId);
            if (topic == null)
            {
                return BadRequest("This topic isn't found");
            }

            var US = unit.UserGroup.GetByUserAndCource(username, topic.CourseId);
            if (US == null || US.Id > 2)
            {
                return Unauthorized();
            }

            var material = Mapper.NewMaterialDTO2Material(newMaterialDTO);
            try
            {
                unit.Material.add(material);
                var notification = new Notification()
                {
                    CreationDate = DateTime.Now,
                    publiserUsername = username,
                    description = $"{US.User.FirstName} has added a new announcement in {US.Cource.Title} cource"
                };
                unit.Notification.add(notification);
                var UN = unit.UserGroup.GetAll().Where(x => x.CourceId == US.CourceId && x.Username != username).Select(x => new UserNotification()
                {
                    Notification = notification,
                    ReceiverUserName = x.Username
                }).ToList();
                unit.UserNotification.Add(UN);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }


        }

        #endregion

        #region Delete Material

        [HttpPost("DeleteMaterial")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult DeleteMaterial(int id)
        {
            var username = UserServices.WhoAmI(User.Claims);
            if (username == null)
            {
                return Unauthorized();
            }
            var material = unit.Material.GetById(id);
            if (material == null)
            {
                return NotFound();
            }
            var topic = unit.Topic.GetById(material.TopicId);
            if (topic == null)
            {
                return BadRequest("This topic isn't found");
            }

            var US = unit.UserGroup.GetByUserAndCource(username, topic.CourseId);
            if (US == null || US.Id > 2)
            {
                return Unauthorized();
            }
            DocumentServices.DeleteFile(material.FileUrl);
            unit.Material.remove(material);
            return Ok();
        }

        #endregion

    }
}
