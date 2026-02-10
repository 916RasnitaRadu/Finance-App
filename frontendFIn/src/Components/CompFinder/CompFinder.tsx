import { useEffect, useState } from "react";
import { type CompanyCompData } from "../../company";
import { getCompData } from "../../api";

interface Props {
    ticker: string;
}

const CompFinder = ({ticker}: Props) => {
    const [companyData, setCompanyData] = useState<CompanyCompData>();

    useEffect(() => {
        const getComps = async () => {
            const value = await getCompData(ticker);
            setCompanyData(value?.data[0]);
        }

        getComps()
    }, [])

  return (
    <div>CompFinder</div>
  )
}

export default CompFinder