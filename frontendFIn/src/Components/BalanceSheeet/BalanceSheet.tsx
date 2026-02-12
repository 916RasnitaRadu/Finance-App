import { useOutletContext } from 'react-router-dom';
import type { CompanyBalanceSheet } from '../../company';
import { useEffect, useState } from 'react';
import { getBalanceSheet } from '../../api';
import { config } from './config';
import RatioList from '../RatioList/RatioList';
import Spinner from '../Spinner/Spinner';

interface Props { }

const BalanceSheet = (props: Props) => {
    const ticker = useOutletContext<string>();
    const [balanceSheet, setBalanceSheet] = useState<CompanyBalanceSheet>();

    useEffect(() => {
        const balanceSheetFetch = async () => {
            const result = await getBalanceSheet(ticker!);
            setBalanceSheet(result?.data[0]);
        }

        balanceSheetFetch();
    }, [])

    return (
        <>
            {balanceSheet ? (
                <div className="w-full">
                    <RatioList config={config} data={balanceSheet} />
                </div>
            ) : (
                <Spinner />
            )}
        </>
    )
}

export default BalanceSheet