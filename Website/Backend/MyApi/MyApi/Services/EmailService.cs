using System.Net;
using System.Net.Mail;

namespace MyApi.Services
{
    public class EmailService
    {
        public static void SendEmail(Email email)
        {
            var client = new SmtpClient("smtp.gmail.com", 587);
            
             client.Credentials = new NetworkCredential("icpcfinalist@gmail.com","ocizrwqlrjwgceeo");
            client.EnableSsl = true;
            client.Send("icpcfinalist@gmail.com", email.To, email.Title, email.Body);

            
        }
    }
}
