import { useState, type ChangeEvent, type SyntheticEvent } from "react";
import type { CompanySearch } from "../../company";
import { searchCompanies } from "../../api";
import Search from "../../Components/Search/Search";
import ListPortofolio from "../../Components/Portofolio/ListPortofolio/ListPortofolio";
import CardList from "../../Components/CardList/CardList";


interface Props {}

const SearchPage = (props: Props) => {
    const [search, setSearch] = useState<string>("");
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
    const [portofolioValues, setPortofolioValues] = useState<string[]>([]);
    const [serverError, setServerError] = useState<string | null>(null);


    const handleSearchChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const onSearchSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const result = await searchCompanies(search);
        if (typeof result === "string") {
        setServerError(result)
        } else if (Array.isArray(result.data)) {
        setSearchResult(result.data)
        }
        console.log(searchResult)
    }

    const onPortofolioCreate = (e: any) => {
        e.preventDefault()
        const exists = portofolioValues.find(value => value === e.target[0].value)
        if (exists) return;

        const updatedPortofolio = [...portofolioValues, e.target[0].value];
        setPortofolioValues(updatedPortofolio)
    }

    const onPortofolioDelete = (e: any) => {
        e.preventDefault()
        const removed = portofolioValues.filter(value => {
        return value !== e.target[0].value;
        })
        setPortofolioValues(removed)
    }


  return (
    <>
        <Search 
            onSearchSubmit={onSearchSubmit} 
            handleSearchChange={handleSearchChange} 
            search={search}
        />
        <ListPortofolio portofolioValues={portofolioValues} onPortofolioDelete={onPortofolioDelete} />

        <CardList 
            searchResults={searchResult} 
            onPortofolioCreate={onPortofolioCreate} 
        />
        {serverError && <h1>{serverError}</h1>}
    </>
  )
}

export default SearchPage