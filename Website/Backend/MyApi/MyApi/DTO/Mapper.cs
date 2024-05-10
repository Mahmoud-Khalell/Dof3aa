using Core.Context;
using Core.entities;
using MyApi.DTO;
using MyApi.DTO.Announcment;
using MyApi.DTO.Material;
using MyApi.DTO.Task;
using MyApi.DTO.Topic;
using System.Data;

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
            userDTO.ImageUrl = user.ImageUrl;

            userDTO.Groups = user.UserGroups.Select(e => new
            {
                Rule = e.rule,
                Cource = Cource2CourceInfoDTO(e.Cource)
            }).ToList();


            
            
            return userDTO;
        }
        #endregion

        #region Ann2AnnInfoDTO
        public static Announcement_Info_DTO Ann2AnnInfoDTO(Announcement ann)
        {
            var annInfo = new Announcement_Info_DTO();
            annInfo.Id = ann.Id;
            annInfo.Title = ann.Title;
            annInfo.Description = ann.Description;
            annInfo.CourceId = ann.CourceId;
            annInfo.CreationDate = ann.CreateDate;
            annInfo.PublisherUserName = ann.PublisherUserName;
            
            return annInfo;
        }
        #endregion


        #region Task2TaskInfo
        public static TaskInfo Task2TaskInfo(task task)
        {
            var taskInfo = new TaskInfo();
            taskInfo.Id = task.Id;
            taskInfo.Title = task.Title;
            taskInfo.Description = task.Description;
            taskInfo.DeadLine = task.DeadLine;
            taskInfo.CourceId = task.CourceId;
            taskInfo.PublisherUserName = task.PublisherUserName;
            taskInfo.SaurceUrl = task.SaurceUrl;
            taskInfo.PublishDate = task.CreateDate;
            return taskInfo;
        }
        #endregion

        #region TaskDTO2Task
        public static Topic TopicDTO2Topic(NewTopicDTO topicDTO)
        {
            var topic = new Topic();
            topic.Title = topicDTO.Title;
            topic.Description = topicDTO.Description;
            topic.ImageUrl = DocumentServices.Uploadfile(topicDTO.Image);
            topic.CourseId = topicDTO.CourceId;
            topic.CretaedAt = System.DateTime.Now;
            
            return topic;
        }
        #endregion

        #region Topic2TopicInfo
        public static TopicInfo Topic2TopicInfo(Topic topic)
        {
            var topicInfo = new TopicInfo();
            topicInfo.Id = topic.Id;
            topicInfo.Title = topic.Title;
            topicInfo.Description = topic.Description;
            topicInfo.ImageUrl = topic.ImageUrl;
            topicInfo.CourceId = topic.CourseId;
            topicInfo.LastUpdate = topic.CretaedAt;
            var LastUpdate=topic.Materials.Select(e=>e.PublishDate   ).Max();
            if(LastUpdate != null && LastUpdate >topicInfo.LastUpdate)
            {
                topicInfo.LastUpdate = LastUpdate;
            }
            topicInfo.Materials = topic.Materials.Select(e => Material2MaterialInfo(e)).ToList();
            return topicInfo;
        }
        #endregion

        #region NewMaterialDTO2Material
        internal static Material NewMaterialDTO2Material(NewMaterialDTO newMaterialDTO)
        {
            var material = new Material();
            material.Title = newMaterialDTO.Title;
            material.Description = newMaterialDTO.Description;
            material.FileUrl = DocumentServices.Uploadfile(newMaterialDTO.Saurce);
            material.Type = newMaterialDTO.Type;
            material.TopicId = newMaterialDTO.TopicId;
            material.PublishDate = System.DateTime.Now;

            return material;

        }
        #endregion

        #region Material2MaterialInfo
        public static Material_Info Material2MaterialInfo(Material material)
        {
            var materialInfo = new Material_Info();
            materialInfo.Id = material.Id;
            materialInfo.Title = material.Title;
            materialInfo.Description = material.Description;
            materialInfo.SaurceUrl = material.FileUrl;
            materialInfo.Type = material.Type;
            materialInfo.TopicId = material.TopicId;
            materialInfo.CreatedAt = material.PublishDate;
            
            return materialInfo;
        }
        #endregion

    }
}
