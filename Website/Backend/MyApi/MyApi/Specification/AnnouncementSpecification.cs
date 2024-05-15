using Core.entities;
using System.Linq.Expressions;

namespace MyApi.specification
{
    public class AnnouncementSpecification:BaseSpecification<Announcement>
    {
        public AnnouncementSpecification() : base()
        {
            AddInclude(x => x.Cource);
            AddInclude(x => x.PublisherUser);
            
        }
        public AnnouncementSpecification(Expression<Func<Announcement, bool>> Craiteria) : base(Craiteria)
        {
            AddInclude(x => x.PublisherUser);
            AddInclude(x => x.Cource);
        }
    }
}
