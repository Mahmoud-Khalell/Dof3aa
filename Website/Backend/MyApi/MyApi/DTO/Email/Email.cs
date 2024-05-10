using System.ComponentModel.DataAnnotations;

namespace MyApi.Services
{
    public class Email
    {
        public string Title { get; set; }
        public string Body { get; set; }
        [EmailAddress]
        public string To { get; set; }

    }
}
