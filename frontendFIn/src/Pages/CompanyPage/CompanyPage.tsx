import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type { CompanyProfile } from "../../company"
import { getCompanyProfile } from "../../api"
import Sidebar from "../../Components/Sidebar/Sidebar"
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard"
import Tile from "../../Components/Tile/Tile"
import Spinner from "../../Components/Spinner/Spinner"
import CompFinder from "../../Components/CompFinder/CompFinder"

interface Props {}

const CompanyPage = (props: Props) => {
    let { ticker } = useParams()
    const [company, setCompany] = useState<CompanyProfile>();
    const [showDescription, setShowDescription] = useState<boolean>(false);

    useEffect(() => {
        const getProfileInit = async () => {
            const result = await getCompanyProfile(ticker!);
            setCompany(result?.data[0])
        }

        getProfileInit()
    }, [])


  return (
    <>
        {company ? (
            <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
                <Sidebar />
          
                <CompanyDashboard ticker={ticker!}>
                    <Tile title="Company Name" subTitle={company.companyName}/>
                    <Tile title="Price" subTitle={company.price.toString()}/>
                    <Tile title="Sector" subTitle={company.sector}/>
                    <Tile title="CEO" subTitle={company.ceo}/>

                      <div className="flex flex-col w-full">
                          <CompFinder ticker={ticker!} />

                          <div className="bg-white shadow rounded p-2 mt-1 m-4 w-full">
                              <button
                                  onClick={() => { setShowDescription(prev => !prev) }}
                                  className="text-sm font-medium hover:underline"
                              >
                                  {showDescription ? "Hide description ▲" : "Show description ▼"}
                              </button>

                              {showDescription && (
                                  <p className="text-medium text-gray-900">
                                      {company.description}
                                  </p>
                              )}
                          </div>
                      </div>
                </CompanyDashboard>

            </div>
        ) : (
            <Spinner />
        )}
    </>
  )
}

export default CompanyPage