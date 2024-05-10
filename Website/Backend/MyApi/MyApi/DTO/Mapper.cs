using Core.entities;
using MyApi.DTO;

namespace MyApi.Services
{
    public class Mapper
    {
        #region RegisterationDTO2User
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
        #endregion

        #region courceDTO2Cource
        public static Cource CourceDTO2Cource(CourceDTO courceDTO)
        {
            var cource = new Cource();
            cource.Id = courceDTO.Id;
            cource.Title = courceDTO.Title +'@'+courceDTO.SubTitle;
            cource.Description = courceDTO.Description;
            cource.ImageUrl = DocumentServices.Uploadfile(courceDTO.Image);
            cource.LogoUrl = DocumentServices.Uploadfile(courceDTO.Logo);
            cource.type = courceDTO.type;
            return cource;
        }
        #endregion

        #region cource2CourceDTO
        public static CourceInfoDTO Cource2CourceInfoDTO(Cource cource)
        {
            var CourceInfo = new CourceInfoDTO();
            CourceInfo.Id = cource.Id;
            var titles = cource.Title.Split('@');
            titles.Append("");
            CourceInfo.Title = titles[0];
            CourceInfo.SubTitle = titles[1];
            CourceInfo.Description = cource.Description;
            CourceInfo.Image = cource.ImageUrl;
            CourceInfo.Logo = cource.LogoUrl;
            CourceInfo.type = cource.type;
            return CourceInfo;
        }
        #endregion

        #region user2UserDTO
        public static UserDTO User2UserDTO(AppUser user)
        {
            var userDTO = new UserDTO();
            userDTO.UserName = user.UserName;
            userDTO.Email = user.Email;
            userDTO.firstName = user.FirstName;
            userDTO.lastName = user.LastName;
            userDTO.Groups = user.UserGroups.Select(e => Cource2CourceInfoDTO(e.Cource));
            return userDTO;
        }
        #endregion
    }
}
