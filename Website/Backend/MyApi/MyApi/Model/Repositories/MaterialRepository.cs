using Core.Context;
using Core.entities;
using MyApi.Model.Interfaces;

namespace MyApi.Model.Repositories
{
    public class MaterialRepository : Generic<Material>, Imaterial
    {
        public MaterialRepository(Connector connector) : base(connector)
        {

        }
    }
}
