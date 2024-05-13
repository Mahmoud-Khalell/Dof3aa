﻿namespace MyApi.DTO.Topic
{
    public class TopicEditDTO
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public IFormFile ? Image {  get; set; }
    }
}
