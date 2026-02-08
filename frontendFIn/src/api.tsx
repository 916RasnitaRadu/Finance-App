import axios from "axios"
import type { CompanyKeyMetrics, CompanyProfile, CompanySearch } from "./company";

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

    }
}

