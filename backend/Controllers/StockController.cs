using backend.DTOs.Stock;
using backend.Interfaces;
using backend.Mappers;
using Microsoft.AspNetCore.Mvc;


namespace backend.Controllers
{
    [Route("api/stock")]
    [ApiController]
    public class StockController : ControllerBase
    {
        private readonly IStockRepository _stockRepository;

        public StockController(IStockRepository stockRepository)
        {
            _stockRepository = stockRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var stocks = await _stockRepository.GetAllAsync();
            var stocksDto = stocks.Select(s => s.ToStockDto()).ToList();

            return Ok(stocksDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetStock([FromRoute] int id)
        {
            var stock = await _stockRepository.GetByIdAsync(id);

            if (stock == null)
            {
                return NotFound();
            }

            return Ok(stock.ToStockDto());
        }

        [HttpPost]
        public async Task<IActionResult> CreateStock([FromBody] UpsertStockRequestDto stockRequest)
        {
            var stockModel = stockRequest.ToStock();

            var result = await _stockRepository.CreateAsync(stockModel);

            // returns a 201 CREATED code & shows the location where you can find the result
            return CreatedAtAction(
                nameof(GetStock),
                new { id = stockModel.Id },
                stockModel.ToStockDto()
            );
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateStock([FromRoute] int id, [FromBody] UpsertStockRequestDto stockRequest)
        {
            var stockModel = await _stockRepository.UpdateAsync(id, stockRequest);

            if (stockModel == null)
            {
                return NotFound();
            }

            return Ok(stockModel.ToStockDto());
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStock([FromRoute] int id)
        {
            var stockModel = await _stockRepository.DeleteAsync(id);
            
            if (stockModel == null)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
