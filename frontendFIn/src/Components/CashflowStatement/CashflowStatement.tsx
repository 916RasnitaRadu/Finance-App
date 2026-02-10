import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom'
import type { CompanyCashFlow } from '../../company';
import { getCashflowStatement } from '../../api';
import Table from '../Table/Table';
import { config } from './config';
import Spinner from '../Spinner/Spinner';

interface Props {}

const CashflowStatement = (props: Props) => {
    const ticker = useOutletContext<string>();
    const [cashflow, setCashflow] = useState<CompanyCashFlow[]>();

    useEffect(() => {
        const cashflowFetch = async () => {
            const result = await getCashflowStatement(ticker!)
            setCashflow(result!.data)
        }

        cashflowFetch()
    }, [])


  return (
    cashflow ? (
        <Table config={config} data={cashflow} />
    ) : (
        <Spinner />
    )
  )
}

export default CashflowStatement