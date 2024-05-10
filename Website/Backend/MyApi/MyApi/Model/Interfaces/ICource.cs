using Core.entities;

namespace MyApi.Model.Interfaces
{
    public interface ICource:IGeneric<Cource>
    {
        public bool isExist(int id);
    }
}
