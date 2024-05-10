using Core.entities;
using Microsoft.AspNetCore.Identity;
using MyApi.Model.Interfaces;

namespace MyApi.Model.Repositories
{
    public class UnitOfCode : IUnitOfCode
    {
        public UserManager<AppUser> UserManager { get; set; }
        public IConfiguration config { get ; set; }
        public ICource Cource { get; set; }
        public IUserGroup UserGroup { get; set; }
        public ITask Task { get; set; }
        public INotification Notification { get; set; }
        public IUserNotification UserNotification { get; set; }
        public IAnnouncement Announcement { get; set; }

        public UnitOfCode
            (
                UserManager<AppUser> userManager,
                IConfiguration config,
                ICource cource,
                IUserGroup userGroup,
                ITask task,
                INotification notification,
                IUserNotification userNotification,
                IAnnouncement announcement
             
            )
        {
            UserManager = userManager;
            this.config = config;
            Cource = cource;
            UserGroup = userGroup;
            Task = task;
            Notification = notification;
            UserNotification = userNotification;
            Announcement = announcement;

        }
    }
}
