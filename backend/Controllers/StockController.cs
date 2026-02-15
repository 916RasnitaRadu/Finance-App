using backend.Data;
using backend.DTOs;
using backend.Mappers;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/stock")]
    [ApiController]
    public class StockController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public StockController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var stocks = _context.Stocks.ToList()
                .Select(s => s.ToStockDto()).ToList();
            return Ok(stocks);
        }

        [HttpGet("{id}")]
        public IActionResult GetStock([FromRoute] int id)
        {
            var stock = _context.Stocks.Find(id);

            if (stock == null)
            {
                return NotFound();
            }

            return Ok(stock.ToStockDto());
        }

        [HttpPost]
        public IActionResult CreateStock([FromBody] CreateStockRequestDto stockRequest)
        {
            var stockModel = stockRequest.ToStock();

            _context.Stocks.Add(stockModel);
            _context.SaveChanges();

            // returns a 201 CREATED code & shows the location where you can find the result
            return CreatedAtAction(
                nameof(GetStock),
                new { id = stockModel.Id },
                stockModel.ToStockDto()
            );
        }

        [HttpPut("{id}")]
        public IActionResult UpdateStock([FromRoute] int id, [FromBody] CreateStockRequestDto stockRequest)
        {
            var stockModel = _context.Stocks.FirstOrDefault(x => x.Id == id);

            if (stockModel == null)
            {
                return NotFound();
            }

            stockModel.CompanyName = stockRequest.CompanyName;
            stockModel.Purchase = stockRequest.Purchase;
            stockModel.Symbol = stockRequest.Symbol;
            stockModel.Industry = stockRequest.Industry;
            stockModel.LastDiv = stockRequest.LastDiv;
            stockModel.MarketCap = stockRequest.MarketCap;

            _context.SaveChanges();

            return Ok(stockModel.ToStockDto());
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteStock([FromRoute] int id)
        {
            var stockModel = _context.Stocks.FirstOrDefault(x => x.Id == id);
            
            if (stockModel == null)
            {
                return NotFound();
            }

            _context.Stocks.Remove(stockModel);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
