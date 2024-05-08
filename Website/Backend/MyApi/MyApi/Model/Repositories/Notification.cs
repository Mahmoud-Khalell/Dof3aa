using Core.Context;
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

    }
}
