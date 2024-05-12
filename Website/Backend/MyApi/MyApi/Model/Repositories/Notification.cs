using Core.Context;
using Microsoft.EntityFrameworkCore;
using MyApi.Model.Interfaces;

namespace MyApi.Model.Repositories
{
    public class Notification: Generic<Core.entities.Notification>,INotification
    {
        private readonly Connector context;

        public Notification(Connector context) : base(context)
        {
            this.context = context;
        }

        public List<Core.entities.UserNotification> GetByUserName(string username)
        {
            var notes = context.UserNotifications.Where(e => e.ReceiverUserName==username).Include(e => e.ReceiverUser).Include(e => e.Notification).ToList();
            return notes;
        }
        
    }
}
