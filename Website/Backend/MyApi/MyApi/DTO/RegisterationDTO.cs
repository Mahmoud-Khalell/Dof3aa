using System.ComponentModel.DataAnnotations;

namespace MyApi.DTO
{
    public class RegisterationDTO
    {
        [EmailAddress]
        [Required]
        public string Email {  get; set; }
        [Required]
        public string Username {  get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        [Compare("Password")]
        public string PasswordConfirmation { get; set; }
        

    }
}
