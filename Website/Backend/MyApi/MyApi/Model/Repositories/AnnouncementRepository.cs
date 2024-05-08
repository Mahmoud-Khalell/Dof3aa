using Core.Context;
using Core.entities;
using MyApi.Model.Interfaces;

namespace MyApi.Model.Repositories
{
    public class AnnouncementRepository : Generic<Announcement>,IAnnouncement
    {
        private readonly Connector connector;

        public AnnouncementRepository(Connector connector) : base(connector)
        {
            this.connector = connector;
        }

    }
}
