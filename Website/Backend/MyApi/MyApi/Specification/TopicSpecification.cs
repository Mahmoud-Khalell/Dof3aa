using System.Linq.Expressions;

namespace MyApi.specification
{
    public class TopicSpecification:BaseSpecification<Core.entities.Topic>
    {
        public TopicSpecification() : base()
        {
            AddInclude(x => x.Materials);
            AddInclude(x => x.Cource);
            
        }
        public TopicSpecification(Expression<Func<Core.entities.Topic, bool>> Craiteria) : base(Craiteria)
        {
            AddInclude(x => x.Materials);
            AddInclude(x => x.Cource);

        }
    }
}
