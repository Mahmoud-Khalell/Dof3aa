using Core.Context;
using MyApi.Model.Interfaces;

namespace MyApi.Model.Repositories
{
    public class UserNotification : Generic<Core.entities.UserNotification>,IUserNotification
    {
        private readonly Connector connector;

        public UserNotification(Connector connector) : base(connector)
        {
            this.connector = connector;
        }

    }
}
