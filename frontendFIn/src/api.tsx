import axios from "axios"
import { type CompanyBalanceSheet, type CompanyCashFlow, type CompanyCompData, type CompanyIncomeStatement, type CompanyKeyMetrics, type CompanyProfile, type CompanySearch } from "./company.d";

interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
    try {
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=${import.meta.env.VITE_API_KEY}`,
        );
        return data

    } catch(error) {
        if (axios.isAxiosError(error)) {
            console.log("Axios error message: ", error.message);
            return error.message
        } else {
            console.log("unexpected error: ", error)
            return "An unexpected error has occured"
        }

    }
}

export const getCompanyProfile = async (query: string) => {
    try {
        const data = await axios.get<CompanyProfile[]>(
            `https://financialmodelingprep.com/stable/profile?symbol=${query}&apikey=${import.meta.env.VITE_API_KEY}`
        );
        return data
    } catch (error: any) {
        console.log("error message from API: ", error.message);
    }

}

export const getKeyMetrics = async (query: string) => {
    try {
        const data = await axios.get<CompanyKeyMetrics[]>(
            `https://financialmodelingprep.com/stable/key-metrics-ttm?symbol=${query}&apikey=${import.meta.env.VITE_API_KEY}`
        );
        return data;
    } catch (error: any) {
        console.log("error message from API: ", error.message);
    }
}

export const getIncomeStatement = async (query: string) => {
    try {
        const data = await axios.get<CompanyIncomeStatement[]>(
            `https://financialmodelingprep.com/stable/income-statement?symbol=${query}&limit=5&apikey=${import.meta.env.VITE_API_KEY}`
        );
        return data;
    } catch (error: any) {
        console.log("error message from API: ", error.message);
    }
}

export const getBalanceSheet = async (query: string) => {
    try {
        const data = await axios.get<CompanyBalanceSheet[]>(
            `https://financialmodelingprep.com/stable/balance-sheet-statement?symbol=${query}&limit=5&apikey=${import.meta.env.VITE_API_KEY}`
        );
        return data;
    } catch (error: any) {
        console.log("error message from API: ", error.message);
    }
}

export const getCashflowStatement = async (query: string) => {
    try {
        const data = await axios.get<CompanyCashFlow[]>(
            `https://financialmodelingprep.com/stable/cash-flow-statement?symbol=${query}&limit=5&apikey=${import.meta.env.VITE_API_KEY}`
        );
        return data;
    } catch (error: any) {
        console.log("error message from API: ", error.message);
    }
}

export const getCompData = async (query: string) => {
    try {
        const data = await axios.get<CompanyCompData[]>(
            `https://financialmodelingprep.com/stable/stock-peers?symbol=${query}&apikey=${import.meta.env.VITE_API_KEY}`
        );
        return data;
    } catch (error: any) {
        console.log("error message from API: ", error.message);
    }
}
