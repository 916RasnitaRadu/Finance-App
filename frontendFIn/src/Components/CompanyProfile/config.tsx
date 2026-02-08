import type { CompanyKeyMetrics } from "../../company";
import { formatLargeNonMonetaryNumber, formatRatio } from "../../Helpers/NumberFormat";

export const tableConfig = [
    {
        label: "Market Cap",
        render: (company: CompanyKeyMetrics) =>
            formatLargeNonMonetaryNumber(company.marketCap),
        subTitle: "Total value of all a company's shares of stock",
    },
    {
        label: "Current Ratio",
        render: (company: CompanyKeyMetrics) =>
            formatRatio(company.currentRatioTTM),
        subTitle:
            "Measures the companies ability to pay short term debt obligations",
    },
    {
        label: "Return On Equity",
        render: (company: CompanyKeyMetrics) => formatRatio(company.returnOnEquityTTM),
        subTitle:
            "Return on equity is the measure of a company's net income divided by its shareholder's equity",
    },
    {
        label: "Return On Assets",
        render: (company: CompanyKeyMetrics) =>
            formatRatio(company.returnOnTangibleAssetsTTM),
        subTitle:
            "Return on assets is the measure of how effective a company is using its assets",
    },
    {
        label: "Free Cashflow To Equity",
        render: (company: CompanyKeyMetrics) =>
            formatRatio(company.freeCashFlowToEquityTTM),
        subTitle:
            "Return on assets is the measure of how effective a company is using its assets",
    },
    {
        label: "Book Value Per Share TTM",
        render: (company: CompanyKeyMetrics) =>
            formatRatio(company.bookValuePerShareTTM),
        subTitle:
            "Book value per share indicates a firm's net asset value (total assets - total liabilities) on per share basis",
    },
    {
        label: "Stock Based Compensation to Revenue TTM",
        render: (company: CompanyKeyMetrics) =>
            formatRatio(company.stockBasedCompensationToRevenueTTM),
        subTitle: "Shows how much a company pays each year relative to stock price",
    },
    {
        label: "Capex to Revenue TTM",
        render: (company: CompanyKeyMetrics) =>
            formatRatio(company.capexToRevenueTTM),
        subTitle:
            "Capex is used by a company to aquire, upgrade, and maintain physical assets",
    },
    {
        label: "Graham Number",
        render: (company: CompanyKeyMetrics) =>
            formatRatio(company.grahamNumberTTM),
        subTitle:
            "This is the upperbouind of the price range that a defensive investor should pay for a stock",
    },
    {
        label: "Current Ratio",
        render: (company: CompanyKeyMetrics) => formatRatio(company.currentRatioTTM),
        subTitle:
            "This is the upperbouind of the price range that a defensive investor should pay for a stock",
    },
];