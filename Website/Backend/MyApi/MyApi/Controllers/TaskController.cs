using Core.entities;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyApi.DTO;
using MyApi.DTO.Task;
using MyApi.Model.Interfaces;
using MyApi.Services;

namespace MyApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly IUnitOfCode unitOfCode;

        public TaskController(IUnitOfCode unitOfCode)
        {
            this.unitOfCode = unitOfCode;
        }



        #region Create Task
        [HttpPost("Create")]
        [Authorize(AuthenticationSchemes =JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult Create([FromForm] TaskDTO taskDTO)
        {
            
            var userName = User.Claims.FirstOrDefault(e => e.Type == "Username").Value;
            if (userName == null)
            {
                return Unauthorized();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var US=unitOfCode.UserGroup.GetByUserAndCource(userName, taskDTO.CourceId);
            if (US == null || US.rule ==3)
            {
                return Unauthorized();
            }
            if(taskDTO.DeadLine.Date< System.DateTime.Now.Date)
            {
                return BadRequest("DeadLine Must Be In The Future");
            }

            var MyTask = new task()
            {
                Title = taskDTO.Title,
                Description = taskDTO.Description,
                DeadLine = taskDTO.DeadLine,
                CourceId = taskDTO.CourceId,
                
                SaurceUrl =(taskDTO.Saurce!=null)? DocumentServices.Uploadfile(taskDTO.Saurce):null,
                PublisherUserName = userName

            };
            try
            {
                unitOfCode.Task.add(MyTask);
                return Ok();

            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
        #endregion

        #region Edit Task
        [HttpPost("Edit")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult Edit([FromForm] TaskUpdateDTO taskDTO)
        {
            var userName = User.Claims.FirstOrDefault(e => e.Type == "Username").Value;
            if (userName == null)
            {
                return Unauthorized();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var task = unitOfCode.Task.GetById(taskDTO.Id);
            if (task == null)
            {
                return NotFound();
            }
            var US = unitOfCode.UserGroup.GetByUserAndCource(userName, task.CourceId);
            if (US == null || US.rule == 3)
            {
                return Unauthorized();
            }
            if (task.PublisherUserName != userName && US.rule!=1)
            {
                return Unauthorized();
            }
            task.Title = taskDTO.Title;
            task.Description = taskDTO.Description;
            task.DeadLine = taskDTO.DeadLine;
            unitOfCode.Task.update(task);
            return Ok();



        }
        #endregion

        #region Delete Task
        [HttpDelete("Delete")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult Delete(int id)
        {
            var userName = User.Claims.FirstOrDefault(e => e.Type == "Username").Value;
            if (userName == null)
            {
                return Unauthorized();
            }
            
            var task = unitOfCode.Task.GetById(id);
            if (task == null)
            {
                return NotFound();
            }
            var US = unitOfCode.UserGroup.GetByUserAndCource(userName, task.CourceId);
            if (US == null || US.rule == 3)
            {
                return Unauthorized();
            }
            if (task.PublisherUserName != userName && US.rule != 1)
            {
                return Unauthorized();
            }
            if(task.SaurceUrl != null)
            DocumentServices.DeleteFile(task.SaurceUrl);
            unitOfCode.Task.remove(task);
            return Ok();
        }
        #endregion

        #region Get All Tasks

        [HttpGet("GetAll")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult GetAll(int CourceId)
        {
            var username = User.Claims.FirstOrDefault(e => e.Type == "Username").Value;
            if (username == null)
                return Unauthorized();
            var US = unitOfCode.UserGroup.GetByUserAndCource(username, CourceId);
            if (US == null)
                return Unauthorized();

            var tasks = unitOfCode.Task.GetAll().Where(x => x.CourceId == CourceId).Select(x => Mapper.Task2TaskInfo(x));
            return Ok(tasks);
        }
        #endregion




    }
}
