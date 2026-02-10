import { useEffect, useState } from 'react'
import type { CompanyIncomeStatement } from '../../company';
import {config} from './config'
import { useOutletContext } from 'react-router-dom';
import { getIncomeStatement } from '../../api';
import Table from '../Table/Table';
import Spinner from '../Spinner/Spinner';

interface Props {}

const IncomeStatement = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [incomeStatement, setIncomeStatement] = useState<CompanyIncomeStatement[]>();

  useEffect(() => {
    const incomeStatementFetch = async () => {
      const result = await getIncomeStatement(ticker);
      setIncomeStatement(result!.data);

    }

    incomeStatementFetch();
  }, [])

  return (
    <>
      {incomeStatement ? (
        <Table config={config} data={incomeStatement} />
      ) : (
        <Spinner />
      )}
    </>
  )
}

export default IncomeStatement