using Core.entities;
using System.Linq.Expressions;

namespace MyApi.specification
{
    public class UserSpecification:BaseSpecification<AppUser>
    {
        public UserSpecification() 
        {
            this.AddInclude(x => x.UserGroups);
            this.AddInclude(x => x.UserNotifications);

        }
        public UserSpecification(Expression<Func<AppUser, bool>> criteria) : base(criteria)
        {
            this.AddInclude(x => x.UserGroups);
            this.AddInclude(x => x.UserNotifications);
        }

    }
}
