using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyApi.Model.Interfaces;

namespace MyApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationController : ControllerBase
    {
        private readonly IUnitOfCode unit;

        public NotificationController(IUnitOfCode unit)
        {
            this.unit = unit;
        }

        [HttpGet("GetNotifications")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult GetNotifications()
        {
            var userName = User.Claims.FirstOrDefault(e => e.Type == "Username").Value;
            if (userName == null)
                return Unauthorized();
            var user = unit.UserManager.Users.FirstOrDefault(e => e.UserName == userName);
            if (user == null)
                return Unauthorized();

            var notifications = unit.Notification.GetByUserName(userName).
                Select(x => new
                {
                    NotificationId = x.Id,
                    NotificationDescription = x.Notification.description,
                    NotificationCreationDate = x.Notification.CreationDate,
                    IsRead = x.IsRead,
                    NotificationPublisher = x.ReceiverUserName

                }) ;
            return Ok(notifications);

        }

        [HttpGet("MarkAsRead")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult MarkAsRead(int id)
        {
            var userName = User.Claims.FirstOrDefault(e => e.Type == "Username").Value;
            if (userName == null)
                return Unauthorized();
            
            var notification = unit.UserNotification.GetAll().FirstOrDefault(e => e.Id == id && e.ReceiverUserName==userName);
            if (notification == null)
                return NotFound();

            notification.IsRead = true;
            unit.UserNotification.update(notification);
            
            return Ok();
        }
        
    }
}
