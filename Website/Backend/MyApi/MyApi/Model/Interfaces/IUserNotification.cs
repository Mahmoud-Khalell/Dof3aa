using Core.entities;

namespace MyApi.Model.Interfaces
{
    public interface IUserNotification:IGeneric<UserNotification>
    {
        public int Add(List<UserNotification> userNotifications);
    }
}
