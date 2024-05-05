using Core.entities;
using MyApi.DTO;

namespace MyApi.Services
{
    public class Mapper
    {
        public static AppUser RegisDTO2User(RegisterationDTO registerationDTO)
        {
            var user = new AppUser();
            user.Email = registerationDTO.Email;
            user.UserName = registerationDTO.Username;
            user.FirstName = registerationDTO.FirstName;
            user.LastName = registerationDTO.LastName;
            user.Department = registerationDTO.Department;
            user.University = registerationDTO.University;
            user.faculty = registerationDTO.Faculty;
            user.ImageUrl = DocumentServices.Uploadfile(registerationDTO.Image);
            return user;

        }
    }
}
