using backend.DTOs;
using backend.Models;
using System.Collections;

namespace backend.Mappers
{
    public static class StockMapper
    {
        public static StockDto ToStockDto(this Stock stock)
        {
            return new StockDto
            {
                Id = stock.Id,
                Symbol = stock.Symbol,
                CompanyName = stock.CompanyName,
                Purchase = stock.Purchase,
                LastDiv = stock.LastDiv,
                Industry = stock.Industry,
                MarketCap = stock.MarketCap
            };
        }

        public static Stock ToStock(this CreateStockRequestDto stockRequest)
        {
            return new Stock
            {
                Symbol = stockRequest.Symbol,
                CompanyName = stockRequest.CompanyName,
                Purchase = stockRequest.Purchase,
                LastDiv = stockRequest.LastDiv,
                Industry = stockRequest.Industry,
                MarketCap = stockRequest.MarketCap
            };
        }

        //public static Stock ToStock(this UpdateStockRequestDto stockRequest)
        //{
        //    return new Stock
        //    {
        //        Symbol = stockRequest.Symbol,
        //        CompanyName = stockRequest.CompanyName,
        //        Purchase = stockRequest.Purchase,
        //        LastDiv = stockRequest.LastDiv,
        //        Industry = stockRequest.Industry,
        //        MarketCap = stockRequest.MarketCap
        //    };
        //}
    }
}
