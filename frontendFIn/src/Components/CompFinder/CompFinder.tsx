import { useEffect, useState } from "react";
import { type CompanyCompData } from "../../company.d";
import { getCompData } from "../../api";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import CompFinderTile from "./CompFinderTIle/CompFinderTile";

interface Props {
    ticker: string;
}

const CompFinder = ({ ticker }: Props) => {
    const [companiesData, setCompaniesData] = useState<CompanyCompData[]>();

    useEffect(() => {
        const getComps = async () => {
            const value = await getCompData(ticker);
            setCompaniesData(value?.data);
        }

        getComps();
    }, [])

    return (
        <div className="inline-flex rounded-md m-4 gap-4">
            {
                companiesData?.map((company) => {
                    return <CompFinderTile ticker={company.symbol} />
                }
            )}
        </div>
    )
}

export default CompFinder
