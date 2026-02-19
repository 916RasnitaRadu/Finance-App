using System.ComponentModel.DataAnnotations;

namespace backend.DTOs.Stock
{
    public class UpsertStockRequestDto
    {
        [Required]
        [MaxLength(10, ErrorMessage ="Symbol cannot be over 10 charaters")]
        public string Symbol { get; set; } = string.Empty;
        [Required]
        [MaxLength(20, ErrorMessage = "Symbol cannot be over 20 charaters")]
        public string CompanyName { get; set; } = string.Empty;
        [Required]
        [Range(1,10000000000)]
        public decimal Purchase { get; set; }
        [Required]
        [Range(0.01, 100)]
        public decimal LastDiv { get; set; }
        [Required]
        [MaxLength(20, ErrorMessage = "Symbol cannot be over 20 charaters")]
        public string Industry { get; set; } = string.Empty;
        [Required]
        [Range(1, 50000000000)]
        public long MarketCap { get; set; }
    }
}
