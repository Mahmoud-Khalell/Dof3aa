using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;

using Microsoft.AspNetCore.SignalR;
using System.IO;

namespace MyApi.Services
{
    public  static class DocumentServices
    {
        public static string Uploadfile(IFormFile file)
        {
            var content=file.ContentType;
            content=content.Replace("/", "@");
            var fileName = $"{Guid.NewGuid()}"+Path.GetFileName(file.FileName);
            var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", fileName);
            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                file.CopyTo(fileStream);
            }
            return fileName;
        }
       public static void DeleteFile(string fileName)
        {
            var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", fileName);
            if (File.Exists(filePath))
            {
                File.Delete(filePath);
            }
        }
        
        


    }
}
