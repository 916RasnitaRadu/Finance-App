import type { CompanyKeyMetrics } from "../../company"
import RatioList from "../../Components/RatioList/RatioList"
import Table from "../../Components/Table/Table"
import { testIncomeStatementData } from "../../Components/Table/testData"
import { formatLargeNonMonetaryNumber } from "../../Helpers/NumberFormat"

type Props = {}

const tableConfig = [
    {
        label: "Market Cap",
        render: (company: CompanyKeyMetrics) =>
            formatLargeNonMonetaryNumber(company.marketCap),
        subTitle: "Total value of all a company's shares of stock",
    },
]

const DesignPage = (props: Props) => {
  return (
    <>
        <h1>FinShark Design Page</h1>
        <h2>This is FinShark's Design Page.
            This is where we will house various design aspects of the app.
        </h2>

        <RatioList data={testIncomeStatementData} config={tableConfig}/>
        {/* <Table /> */}
    </>
  )
}

export default DesignPage