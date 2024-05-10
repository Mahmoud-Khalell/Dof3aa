using Core.Context;
using Core.entities;
using Microsoft.EntityFrameworkCore;
using MyApi.Model.Interfaces;

namespace MyApi.Model.Repositories
{
    public class TopicRepository : Generic<Topic>, ITopic
    {
        private readonly Connector connector;

        public TopicRepository(Connector connector) : base(connector)
        {
            this.connector = connector;
        }
        public Topic GetById(int id)
        {
            return connector.Topics.Include(e=>e.Materials).FirstOrDefault(e=>e.Id==id);
        }
        public IEnumerable<Topic> GetAll()
        {
            return connector.Topics.Include(e => e.Materials).ToList();
        }
    }
}
