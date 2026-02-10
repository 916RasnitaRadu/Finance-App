import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom"
import type { CompanyKeyMetrics } from "../../company";
import { getKeyMetrics } from "../../api";
import RatioList from "../RatioList/RatioList";
import { tableConfig } from "./config";
import Spinner from "../Spinner/Spinner";

interface Props {}

const CompanyProfile = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [companyData, setCompanyData] = useState<CompanyKeyMetrics>();

  useEffect(() => {
    const getCompanyKeyMetrics = async () => {
      const value = await getKeyMetrics(ticker);
      setCompanyData(value?.data[0]);
    };

    getCompanyKeyMetrics();
  }, []);


  return (
    <>
      { companyData ? (
        <RatioList data={companyData} config={tableConfig} /> 
      ) : (
        <Spinner />
      )}
    </>
  )
}

export default CompanyProfile