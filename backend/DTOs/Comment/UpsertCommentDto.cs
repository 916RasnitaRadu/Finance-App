using System.ComponentModel.DataAnnotations;

namespace backend.DTOs.Comment
{
    public class UpsertCommentDto
    {
        [Required]
        [MinLength(5, ErrorMessage ="Title must be at least 5 characters")]
        [MaxLength(180, ErrorMessage ="Title too long")]
        public string Title { get; set; } = string.Empty;
        [Required]
        [MinLength(5, ErrorMessage = "Content must be at least 5 characters")]
        [MaxLength(180, ErrorMessage = "Content too long")]
        public string Content { get; set; } = string.Empty;
    }
}
