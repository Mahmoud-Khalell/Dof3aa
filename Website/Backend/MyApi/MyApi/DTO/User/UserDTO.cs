namespace MyApi.DTO
{
    public class UserDTO
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public List<CourceInfoDTO> Groups { get; set; }
    }
}
