using Core.entities;

namespace MyApi.Model.Interfaces
{
    public interface INotification: IGeneric<Notification>
    {
        public List<UserNotification> GetByUserName(string username);
        

    }
    
}
