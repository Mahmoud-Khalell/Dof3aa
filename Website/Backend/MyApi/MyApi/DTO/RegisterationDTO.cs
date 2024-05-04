using System.ComponentModel.DataAnnotations;

namespace MyApi.DTO
{
    public class RegisterationDTO
    {
        public string FirstName { get; set; }
        public string? LastName { get; set; }
        public string? University { get; set; }
        public string? Department { get; set; }
        public string? Faculty { get; set; }
        public string  ImageUrl { get; set; }

        [EmailAddress]
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
